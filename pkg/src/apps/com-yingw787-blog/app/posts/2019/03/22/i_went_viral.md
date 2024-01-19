---
author: ["yingwang"]
categories:
  - Personal
title: "I went viral for the first time"
date: "2019-03-22T22:05:07-04:00"
draft: false
---

![woohoo](/img/posts/2019/03/22/i_went_viral_1.png)

I maintain a secondary blog for professional purposes called [Bytes by
Ying](https://bytes.yingw787.com), and recently I had the privilege of going
viral on [Hacker News](https://news.ycombinator.com). It was an exhilerating
experience, and welcome validation that I have learned some useful things over
the years and can communicate them effectively.

I use [Google Analytics](https://marketingplatform.google.com/about/analytics/)
(although I have heard that [Piwik/Matomo](https://matomo.org/) may be better
for privacy-focused techies), and I've learned quite a bit about my users:

- **The vast majority of users come from the United States**: The U.S. remains
  the clear leader in consumption of (my) English technical content, with the
  U.K., India, and Germany coming in as distant seconds. It's hard to
  internationalize content (though the burden is made significantly lighter
  with Hugo which [supports internationalization out of the
  box](https://gohugo.io/content-management/multilingual/)), and thus
  difficult to communicate to large parts of the world. This realization was
  hammered home during the last couple of days.

- **Most people do not click around (or browse the entire article)**: Most
  people clicked on the article, browsed for maybe thirty seconds, and then
  left the website altogether. My bounce rate (rate at which users only
  visited one page) was quite high (~90%), with the lowest bounce rates and
  highest session times coming from India. The session times were so low that
  I thought many "users" were just bots scraping my website. Eventually
  though, I recognized the low likelihood of the number of users that are
  bots, given the mixture of new and returning users, and steadily decreasing
  bounce rate.

  I do wonder how sticky users are. I got 81 upvotes, and less than fifty
  users that clicked through to other pages, out of more than five thousand
  clicks. I got five signups for my mailing list. It will take time and
  careful tending in order to cultivate a strong following.

- **Having a great mobile experience is non-negotiable**: Thank God the theme
  I used for my website was mobile-first or mobile-friendly. I think the
  number of users divided between mobile and desktop was about even (maybe
  varying by 0.1%). For a guy who usually does things on his desktop, having a
  great mobile-first experience is a new and good lesson to learn early.

I was worried about whether virality would create price spikes in my AWS costs.
However, after double checking what the costs of AWS Cloudfront were (about ten
cents per gigabyte), and realizing that my compiled files were only several
kilobytes, I stopped worrying. It would take literally hundreds of thousands to
millions of hits for my website to generate significant AWS costs, and at that
point I could probably afford to blog full-time or something.

So yeah. Brave new world.
