---
authors: ["yingwang"]
categories:
  - Software
title: "Refactoring: What it is and why it's important"
date: "2017-09-22T09:46:58-04:00"
draft: false
---

I had lunch with our company's CEO the other day and I relayed the story of one software engineer who worked at this company and left a few months ago. He was building out a feature and because of how crummy our codebase is and how the CEO's demands for this feature every single day, spent 110 hours in one week building it out. He then spent the next three weeks in a comatose state; the product manager assigned to him for this feature (who changed the feature's specifications every twenty minutes for a week as those changes were demanded by the CEO and the COO) was yelling out how much money the feature was making across the room, but in the end, it didn't matter. His soul was dead and he was on his way out.

The CEO, who has no understanding or desire to understand software engineering or software engineering management (and who tells me as much), asked me, "So why did it take 110 hours in order to build out this feature?". It was a great question and I couldn't think of a good explanation in layman's terms (I think I said something along the lines of "Our codebase is bad and it takes a lot of time to work around a bad codebase"), so I'm going to give it another shot here.

___

What does `$ 1 + 1  $` equal? That's right, it equals `$ 2 $`. Simple enough.

What does `$ 1 + \frac{1}{i^4} $` equal? That's right, it equals `$ 2 $`. A little more difficult, considering you have to remember that `$ i = \sqrt{-1} $`.

What does `$ 1 + \frac{1}{\frac{n (n + 1)}{2}}$` equal, given that `$ n^2 + n - 2 = 0 $`? That's right, it equals `$ 2 $`. A little more difficult still if you don't realize that the latter equation could be rewritten as `$ n^2 + n = 2 $` and substituted into the first equation. You might have solved for the roots of that quadratic function instead.

What does `$ 1 + 0.5 * (n)^2 $` equal? You wouldn't be able to figure it out - until I tell you that I wrote `$ n $` down on a whiteboard in permanent marker, then tossed the whiteboard off the coast of Japan three years ago, necessitating you to fly to Japan, rent a boat, follow ocean currents to figure out the most likely current location of the whiteboard, find it and the value of `$ n $`, navigate back to Japan, fly back to the U.S., and deliver me the answer. Oh yeah, `$ n = \sqrt{2} $`, so the solution is `$ 2 $`.

Don't forget to pick me up some sushi. I love sushi.

___

Point being is, there are multiple ways to write a function in order to deliver the same answer. There are simple ways and there are complicated ways. There are ways to write that function with possible side effects. There are even wrong ways to write it, but sometimes appear correct because a broken clock is right twice a day. The same goes for code.

Goddamn.
