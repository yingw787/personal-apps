---
author: ["yingwang"]
categories:
  - Personal
title: "MacBook Pro End-Of-Life"
date: "2019-01-10T00:25:58-05:00"
draft: false
---

After more than six years, I think my MacBook Pro is reaching the end of its
frontline service life.

:cry:

Due to a [major upgrade](/posts/2018/06/03/new_workstation) I made one or two
years ago to my MacBook Pro, and because for some reason macOS Mojave does not
support RAID machines, I can't install further operating system upgrades on my
laptop. In addition, I've been using Linux at work every day for the past year,
and using it at home on my desktop workstation, and I like it enough that I
really don't want to go back to a proprietary, closed-source ecosystem if I can
help it.

Not to worry, though. My MacBook Pro still has many years of service left, in
part due to some applications that simply don't exist on Linux (QuickTime!
[Timing](https://timingapp.com/)! iPhone backups on iTunes!), because of how
much useful space is left on the internal SSDs, and because it's just a *damn
good computer*. And even if it didn't, I'm never going to sell or give away this
computer; I got it before college and it's an emotional connection to my
childhood :blush:

But at some point or another, facts are facts. My previous-generation i7 is
equivalent in many areas to today's Celeron processors -- at 1/5 the price. The
latest generation i9 processors (top-of-the-line) are 8x as fast. The latest
laptops have 2-4x the amount of RAM (with higher RAM clock speeds), NVMe SSDs
over SATA, and better (even discrete) laptop GPUs. My trusty old MacBook Pro
can't compete head to head with these kinds of improvements, and from the
software side there's only so much I can do (and on macOS, too).

What have I learned from my laptop and workstation?

-   **High-quality laptops last much longer**: There's just more runway before
    they become obsolete, if they ever become obsolete that is. Worst comes to
    worst, you could overwrite everything with a minimal Linux installation, use
    the CLI exclusively, and return to a blazing fast machine.

-   **High-quality laptops are so much more fun to use**: Yeah, the price of
    several cheap laptops, replaced over several years, is probably around the
    same as one really good laptop -- and comes with the benefit of the same
    risks spread out over more hardware (coffee spill? get a new laptop). But
    they're so much less fun to use. The hardware sucks, the drivers suck, and
    you spend your time fighting against the machine, losing precious emotional
    and mental energy as well as your time.

-   **Desktop workstations are no substitute for a good laptop**: Dynamic DNS
    and SSH tunneling are great things, but you can't ever *assume* that a
    particular network will be available when you need it. And that means
    resources available on a desktop machine, such as a discrete NVIDIA GPU, may
    not be remotely available on a dependable basis. I tried setting up dynamic
    DNS using Route 53, and it worked until my IPv4 address changed and
    everything broke, making my machine unusable from home in Michigan. The
    other course is to use a virtual machine from a cloud provider, but they're
    not as powerful and they are much more ephemeral.

So. Purchase a powerful laptop it is. I've followed [Project
Sputnik](https://www.dell.com/support/article/us/en/04/sln310507/ubuntu-based-developer-and-engineering-systems-project-sputnik-?lang=en)
over at Dell, and they have some pretty nifty tricks up their sleeve with
getting Ubuntu to work on their Precision and XPS lines. Very interesting...
