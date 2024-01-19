---
author: ["yingwang"]
categories:
  - Personal
title: "Year in Review: Finances"
date: "2020-12-31T00:00:00-05:00"
draft: false
---

The Year In Review:

-   [**Year In Review: Finances**](/posts/2020/12/31/old_years_resolutions_finances)
-   [Year In Review: Fitness](/posts/2020/12/31/old_years_resolutions_fitness)
-   [Year in Review:
    Gratitude](/posts/2020/12/31/old_years_resolutions_gratitude)
-   [Year In Review:
    Resolutions](/posts/2020/12/31/old_years_resolutions_review)
-   [Year In Review:
    Sleep](/posts/2020/12/31/old_years_resolutions_sleep_schedule)

__________

[**GitHub repository
(PRIVATE)**](https://github.com/yingw787/financial-ledger.yingw787.com)

__________

So I've been filling in pretty much every transaction I've done since I first
started working (December 2016, four years ago). I've used this old Google
notebook I got from a hiring event back at Duke. And in December 2020, I finally
filled out the entire book!

I chose to use a handwritten financial ledger because I didn't really trust apps
like Mint in order to be around when I'm 50 or keep my data safe (I already
don't trust online banking or credit card agencies but the convenience is much
harder to pass up), and because I wanted to keep my handwriting skill to the
point where I can still read it (a partial success). This comes with the
tradeoff of not having that data digitized, which would really help in
understanding my finances and where I'm going, and having a single source of
failure (e.g. apartment burns down, I lose my notes forever).

So after I filled out the book, I'm probably going to put it in a dark corner of
my apartment somewhere where the survivability aspect is a lot lower. I thought
it was time to digitize this ledger so I have some data dump I won't worry about
losing. I'll still keep the handwritten ledger for newer records in another
book, but this gives me the ability to take a look back at three years worth of
personal financial data.

What I did was, take the ledger in front of me, enter it into a Google sheet
(because I don't have my own spreadsheet app right now), export that sheet into
a CSV file, then ingest that CSV file into a PostgreSQL instance. Then the
database is dumped, and the dump is synchronized to S3.

Also, if you're interested in doing the same as me, might I kindly dissuade you.
Digitizing this ledger took three full days of straight-up manual data entry
into a spreadsheet, and I still haven't yet data munging for the plentiful
fat-fingering mistakes I'm sure to have made (I've caught three already) and
file transforms (because `psql` ingests CSVs in a very strict manner).

__________

Here's some of the things I've noticed about my spending, just from punching in
the data:

-   **I do a good amount of repeatable spending**: Like, to the point where I
    can identify "miscellaneous spending" of $15.70 to be my monthly Allstate
    renter's insurance (in case my landlord's apartment burns down with all my
    stuff in it). I think this fits in with my understanding of myself as a
    creature of habit.

-   **My spending has increased over the years**: I think I've tried to avoid
    falling into the trap of increasing incomes -> increasing spending as best
    as I can. So many of the major expenditures others have made, I haven't (I
    haven't purchased a car or a home or anything that might require a loan). I
    have spent more money on Amazon purchases and food. I'm extremely skeptical
    of purchasing something with a loan, unless it's stock or something on
    margin because my money is in a separate bank account.

-   **It's a mistake to think that cash is king**: Cash is more like trash. Own
    assets (things that make money for you), don't just stuff it in a bank
    account and hope interest payments cover inflation (they don't and they
    haven't since quantitative easing and lowering of fed funds rate and such
    back in '08-09). I'm trying out a bimodal approach to investing now, with a
    (should be) safe-ish approach of fixed income securities and blue-chip
    stocks / mutual funds through WealthSimple (which keeps me investing even
    though I'm not doing anything), and really really risky stocks that I think
    have a good chance of making it because of my field (so tech stocks and
    stuff). Also green energy stocks, because governments around the world are
    starting to order people to purchase green cars and green energy and
    government orders are pretty stable.

__________

So I used [Metabase](https://www.metabase.com/) in order to tabulate these
finances, and here's some of the interesting SQL queries I've run and some of
the interesting visualizations I've been able to generate:

```sql
SELECT
category,
sum(amount_in_usd) sum_amount_in_usd
FROM expenditures
WHERE is_expenditure = bool(1)
AND EXTRACT(year FROM pay_period_begin) = '2020'
GROUP BY category
ORDER BY sum_amount_in_usd ASC;
```

In 2020, I paid exactly $16,500 in rent, while I invested or saved $15,158.40
(investing/saving is less as I invested some of the money I had previously
saved, thus double-counting). By contrast in the year prior (2019), I had paid
around $15,125 in rent, while saved/invested around $30,329.17. So I definitely
didn't do as good of a job investing or saving in 2020 as I did in the year
before, where (surprisingly) I had made about the same.

```sql
SELECT
category,
sum(amount_in_usd) sum_amount_in_usd
FROM expenditures
WHERE is_expenditure = bool(1)
AND EXTRACT(year FROM pay_period_begin) = '2019'
GROUP BY category
ORDER BY sum_amount_in_usd ASC;
```

I spent a horrendously large amount of money on eating out in the first half of
December ($611.49), while in 10 pay periods I spent more on groceries than I did
in eating out. Most of the summer was empty as I had spent time at home and
didn't purchase any food or groceries during that time. My typical grocery
budget is around $200-300, while my typical eating out budget is around $200. I
wanted to spend $2 on groceries for each $1 I spent on eating out, so I'm
missing the mark here.

```sql
SELECT
extract(year from pay_period_begin) payment_year,
sum(amount_in_usd) sum_amount_in_usd
FROM expenditures
WHERE category IN ('actual_paycheck')
GROUP BY payment_year
ORDER BY payment_year ASC;
```

When I switched jobs between 2017 and 2018, my take-home salary increased by
around 39.8%. This is extremely surprising to me, I thought the bump would be a
good deal less. Looks like it pays to switch jobs every so often.
