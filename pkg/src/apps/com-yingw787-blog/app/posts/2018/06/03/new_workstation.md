---
authors: ["yingwang"]
categories:
  - Personal
title: "New Workstation"
date: "2018-06-03T16:09:54-04:00"
draft: false
---

I've had my MacBook Pro now for over six years now, and I'll be the first one to
say I love my Mac. It's been the best workhorse I could ever ask for. I even did
a psuedo service life extension on it, changed out the old battery for a new
one, doubled the RAM from 8GB to 16GB, and changed the HDD and optical drive for
two 500GB SSDs in a RAID2 configuration. I think it cost me around \$500 on top
of the \$2000 my dad spent initially, and all of it was worth every penny.

Alas, my trusty old workhorse is showing its age. Apple has done wonders in
order to maintain compatibility, user experience, and performance from Lion to
Sierra, but there's only so much performance you can squeeze out with 1600MHz
DDR3 and a 2.3 GHz processor. For example, Chrome has been lagging so hard that
I can see my cursor moving full seconds after I type into the keyboard (although
there's still things I can do, like use [The Great
Suspender](https://chrome.google.com/webstore/detail/the-great-suspender/klbibkeccnjlkjkiokjodocebajanakg?hl=en),
reboot my computer, or switch to Firefox :joy:). There's also my ongoing concern
about the future of macOS. With Apple's focus on optimizing revenues and
operations as well as combining the macOS and iOS teams together, I'm not sure
there's a clear vision for where macOS is going to go. To me, it will always be
better than Windows (_your computer is restarting to download updates_), but
[adding in watchOS for a Touch
Bar](https://www.theverge.com/2016/10/28/13454052/apple-macbook-pro-touch-bar-apple-watch-features),
and [requiring people to buy a dock for an entire side of a computer if they
don't want to replace their
cables](https://www.cultofmac.com/451446/adapt-macbook-pro-docks-dongles/),
coupled with rising prices, is simply too much for me.

So, Linux.

The company I currently work at is all-in on Linux. We develop on and deploy for
CentOS and Ubuntu, the two major flavors of enterprise Linux, for a wide variety
of CPU architectures. There's also other flavors we support, like openSUSE and
(I think?) Oracle Linux. Surprisingly, I think we also try to keep some client
compatibility with Windows, like CLI support for PowerShell, as some very
important customers are on Windows. Some of our team members in engineering, and
everybody in San Francisco I think, use macOS, but that's something that never
sees the light of day as production software.

I personally am ambivalent to Linux, but I embrace the circumstances. It has
_first-class_ command line support, it's free, and if you throw a good enough
GNOME skin on it, it's even pretty. Then there's the nightmares. This one time,
I had trouble adjusting DPI and resolution for the old external monitor I had at
work because of some driver weirdness. I asked one of our Engineering VPs for
help, and he tried showing me some Linux scripts that would totally do the job.
Bless that man, I don't want to know how long it took to get his development
environment to look sane again. My manager is currently running into kernel
panics and has to SSH into her laptop from _another laptop_ in order to do her
work. And `grub` menus look tiny on a 4K monitor, so we paid more money to have
a worse experience using `grub`. That being said, my development machine runs
Ubuntu, and since I've developed a habit for narrowing the gap between
development and production environments, I've gone all in on Ubuntu.

So. Time for a new PC.

---

First, I thought I would try to build my PC from scratch. That failed miserably.
I picked out a parts list on PCPartPicker, and made sure that it was compatible.
My friend helped pick out my parts list, and we ran into a costs spiral that
eventually put my PC at $1500. Okay fine. I get the parts, I try assembling
them, and I fail during the stage of putting the CPU cooler on top of the CPU. I
look online for instructions on how to get it done, and as it turns out, I
wouldn't have been able to run my PC in the first place. My motherboard did not
support Coffee Lake processors. At least I didn't fry anything or otherwise void
the return policy.

I returned everything. Then I purchased a $300 [CybertronPC Evoke on
Jet.com](https://jet.com/product/CybertronPC-Evoke-Desktop-Intel-Pentium-G4560-Dual-Core-35GHz-4GB-DDR4-2133-1TB-/770f5eb0d60d4129af3b7a2e8a4dc809?beaconId=5f63b36f-2476-4055-bdb9-08cb73111e1e%2F2%2Fx~770f5eb0d60d4129af3b7a2e8a4dc809&origination=PLP):

- OS: Ubuntu 14.04 LTS
- CPU: Intel Pentium G4560 Dual-Core 3.5 GHz (this was actually faster than my
  MacBook Pro's i7)
- Memory: 1 4GB DDR4-2133 RAM stick
- Disk: 1TB HDD + 120GB SSD

It doesn't suck completely. I wasn't finished, though. I had some upgrades in
mind:

- Ubuntu 14.04? Nope. Replaced with 16.04 LTS (I tried 18.04 LTS...don't do that
  if you're at all okay with 14.04)
- That 1TB HDD? Nope. Replaced with a 8TB WD Red (or white label, [Shucked from
  a WD EasyStore](https://imgur.com/gallery/IsZxx) with [pin 3 covered with
  Kapton
  tape](https://www.reddit.com/r/DataHoarder/comments/70hm8h/8tb_easystore_wd_white_label_issuesolution/))
  for $150
- That 4GB RAM? Nope. Replaced with 16GB RAM.
- Intel Integrated Graphics? Nope. Added a GTX 1050 Ti.

I also just bought another 27'' Dell U2717D for a total of two monitors, a
Microsoft Sculpt keyboard and numpad, and an electric sit-stand desk with a
dual-monitor VESA mount.

I'm going all in on a home office -- a big deal for a guy who has three plastic
tables, two chairs, no sofa, and no TV.

---

So, what do I get for spending $1200+ on upgrading my computer setup? I'll
answer that with what I want to get out of this machine:

- A table that lasts forever, two monitors that last for 10+ years, and a
  computer that lasts for 5+ years (with parts inside that will last for 10+
  years)
- A computer that forces me to write efficient data-driven code by artificially
  limiting the amount of compute and memory I have available
- A CUDA-compatible system that isn't an AWS EC2 instance that I can SSH into
  from my MacBook anywhere in the world and use for development purposes
- A file/media/backup server after it has been completely and utterly exhausted
  for workstation purposes

---

My standing desk is partially here, and when the table surface itself comes on
Monday, I can assemble the whole shebang and take pics afterwards to post here.
