---
author: ["yingwang"]
categories:
  - Personal
title: "Surviving Without Internet for 71 Days"
date: "2019-05-21T09:58:08-04:00"
draft: false
---

For 71 days, I cut off my own home Internet. The primary reason was Comcast
raising my Internet prices by \$20/mo. I spend a good deal of money every month,
but I like being in control of what I spend, and a company increasing a
subscription charge on me is something I'm very sensitive to.

I called Comcast to cancel as a bluff to lower the price. The guy on the other
end said he couldn't lower my price because it was a promotional offering for
one year, but offered to raise my Internet speeds to 250 Mb/sec. I argued that
next year Comcast will simply ratchet my price up again to reflect the higher
Internet speed, and since I live alone, don't game or stream, and don't use
multiple devices simultaneously, I don't really have a need for more Internet,
and proposed to cancel again. He asked if I really wanted to cancel and I
absent-mindedly said yea.

He said ok, Comcast will cancel your Internet.

Now this is the moment where I might have just backed down and meekly accepted
the higher price, the useless higher speeds, and my horrible skills at haggling
and bluffing. But then I thought to myself of the downsides of having Internet
at home. Historically, I found myself not really utilizing Internet at home very
well. Most of my productive hours were spent at coffee shops and bubble tea
cafes, and I usually got home pretty late after events in the city or from the
gym most days of the week anyways (including on weekends). I also had a pretty
strong YouTube and Reddit addiction that I wanted to kick, and for me
personally, kicking addictions comes from quitting things cold turkey. I also
messed up my home desktop by installing proprietary NVIDIA drivers on Ubuntu
(which are crap) over the open-source Nouveau drivers, and I couldn't really do
anything except use the recovery mode shell.

So I decided Internet probably wasn't the healthiest thing for me. And I agreed
with the guy. The cutoff date was March 11th, 2019.

__________

The first days were super tough. I went through a weeks-long Internet withdrawal
phase where I kept checking my phone and realizing that I don't have an Internet
connection.

By the way, I should also mention I share a 2GB/mo. cellular plan with my dad.
So I get 1GB of data per month total.

**iPhone**: *Do you want to turn on data to see YouTube? With 4G, there's little
buffering, and I'll transfer data at super high resolution before you even get
to press a button to tune it down. It'll be at least tens of megs before-*

**Me**: *I need to check weather, and sync my notes, and do otherwise important
things, so no. But that does sound really nice.* :cry:

At first, I just visited websites like Hacker News. After pinging them on my
laptop, looking at the network request in Chrome DevTools, and realizing that
most requests (especially the comments section where you stay on the forum) took
much less than a meg, I got to take a breather. Reading Hacker News wouldn't
bankrupt my data rations.

Then I went through and read [Dan Luu's blog posts, like all of
them](https://danluu.com). They're all good blog posts. I especially liked how
Dan optimizes his website site, and [discusses web bloat as a matter of reaching
rural areas at all](https://danluu.com/web-bloat/).

This took about two weeks or so, and by the time I finished, I got over the
worst parts of my anxiety of not having Internet at home. This, plus a buttload
of coffee and bubble tea and free Wi-Fi, got me through to the end.

__________

I thought my friends and acquaintances would be more supportive of me taking on
the big bad Comcast. They weren't. They unanimously thought I was insane. I
didn't find a single person who thought I was being reasonable. I'm not saying
they're wrong, but I was surprised nonetheless.

One of the big things they got hung up on was that I was a software
engineer...without Internet...and isn't that a bit weird? I said yea maybe, I
write software for other people and don't really use too much of it myself.
Software for thee, not for me. At least not software that relies on a
permanently available Internet connection.

Partially relevant xkcd on [how programmers view
software](https://xkcd.com/2030/). I personally like it when tech gets out of
the way of building human relationships, making money, prefetching knowledge, or
doing other important things in life. The best tech helps other blockers get out
of the way of those important things.

I got through with a number of different techniques:

-   **Finding small-overhead websites**: Stay far away from wikis that are not
    Wikipedia. Stay far away from websites with autoplaying videos. Say yes to
    programming blogs that are self-hosted. Say yes to programming documentation
    sites. Say yes to hosted files with defined sizes.

-   **Using `youtube-dl` to watch YouTube videos offline**:
    [**`youtube-dl`**](https://github.com/rg3/youtube-dl) downloads YouTube
    videos into .mp4 format on your local filesystem. It's also nice because all
    state on disk is realized and useful; if the process crashes, you can spin
    up the process again and it will find the incomplete file and continue
    streaming the video. It's great. More people should use it. At the end, I
    used it to download hours-long game movies of walkthroughs and cutscenes.

-   **Saving articles for offline access using Pocket**: Not a huge part of the
    deal, but if I really want to read something and I don't have cellular,
    downloading a website using Pocket is pretty easy with the iOS app.

__________

On May 20th, 2019, I finally surrendered to the mighty Comcast and called
Comcast to reattach my Internet. So what finally did me in?

-   **Public Wi-Fi was spotty**: I get 100% packet transmission on my home
    Wi-Fi connection. On public networks, this is more like 80%; on crowded
    public or private networks, this is more like 60%. This means unstable
    long-term connections. My VPN was really unhappy.

-   **Library hours are crap**: Seriously, the Arlington Public Library system
    needs a lot more investment. They close at 5PM. How the hell do they expect
    adults to check out books during the weekday if the library closes at 5PM??
    Also, the bathrooms really smell, and I'm saying this as somebody who had a
    really bad elementary school janitor.

-   **Sometimes you do need peace and quiet**: Deep work is really hard in a
    coffee shop, where other people are chatting and there's not really any
    personal space available.

-   **Holy hell coffee/tea is expensive**: About \$4-5 a cup, and some places
    don't even have refills. It's far more expensive than a basic Comcast
    connection.

-   **Also coffee at night is a bad idea**: I'm still a little wired as I'm
    typing this.

-   **I'm a night owl**: I work really late or so on personal professional
    development stuff sometimes, later than the 10PM most coffee shops close at
    around this area.

The actual call to Comcast went something like this:

**Comcast Man**: *I have a plan for \$79.99/mo. It comes with-*

**Me**: *Can't do that. Lower.*

**Comcast Man**: *Uh. I have a plan for \$64.99/mo...*

**Me**: *Nope. Lower.*

**Comcast Man**: *I have a plan for \$39.99/mo.?*

**Me**: *Lower.*

**Comcast Man**: *I have a plan for \$34.99/mo.*

**Me**: *Lower.*

**Comcast Man**: *Okay fine I have a plan for \$29.99/mo.*

**Me**: *Yes please!*

Honestly, I think Comcast has been nothing but terrific throughout this whole
process. I'm probably one of their more difficult customers, the guy who keeps
yelling [*"MOLON LABE"*](https://en.wikipedia.org/wiki/Molon_labe) over the
phone at a guy who may or may not have an available plan in front of him and has
to follow a script. From my pre-Comcast days, the stories adults told about
Comcast had made me think they're the spawn of Satan. Nowadays, I think they're
just a shitty monopoly, with an axe to grind same as everybody.

As a positive side effect of this experience, I think Comcast respects me more
as a customer. I now feel free to haggle as much as I want.

I mean, what are they gonna do? Cut off my Internet?
