---
authors: ["yingwang"]
categories:
  - Software
title: "A Series of Unfortunate Events"
date: "2017-12-08T00:02:37-05:00"
draft: false
---

Wednesday was a mess. You know that meeting I described with English Dictionary Man that had to happen because of [the stuff he's been pulling](/posts/2017/12/06/jeebus_crispies)? It was basically me yelling at him, him looking up at the ceiling and shaking his head back and forth, and everybody else either ignoring me or putting their face in their hands. The water was bad at the office the day before, so I replaced it with tea, and I couldn't fall asleep until 4AM the next day, so I didn't have enough energy to be diplomatic at the time of the meeting. Also I hate them all.

After the meeting, the director of engineering, my team lead, and I sat awkwardly for thirty seconds before my team lead said something I didn't remember, and I just started yelling again:

- **Me:** _I wrote documentation for that library! My colleague and I made an RFC for this library when we architected it, with diagrams and code samples, and I referenced the RFC in a comment on his pull request when he did (that stupid thing)! And he still did things (his stupid way), which adversely impact the conceptual integrity of the code! I even included an entire Python script as part of the init file documentation! It's probably one of the best documented parts of our codebase!_

- **Director:** _Yes._

- **Me:** _Conceptual integrity is important because it increases the quality of the codebase if it all moves in one direction, and it's important to have only a small number of architects because we need to have a root authority!_

- **Director:** _Yes._

- **Me:** _This is the guy who committed two English dictionaries to version control! This is the guy who made that endpoint that logs users out if they hit a particular server instance, and added that to three other bugfixes because he thought we would have to swallow it, and we couldn't, and we had to rip out three valid bugfixes! After both times multiple software engineers explicitly told him not to do it that way!_

- **Director:** _Yes._

- **Me:** _He keeps saying he has ten years of experience, which doesn't manifest itself at all except in the way he lords it over people! At his stage of his career, he should be teaching me! He should be operating in the software architect or principal software engineer position, not me!_

- **Director:** _Yes._

- **Me:** _You're not going to fire him?_

- **Director:** _No._

- **Me:** _...I'll finish my sandwich._

- **Director:** _Yes._

To be fair, this conversation had a lot more awkward pauses, and me spluttering and gesticulating like Rick from "Rick and Morty", spittle and all. I also don't know if our director has the power to hire people, fire people, or give salary raises to people. In his defense, he has to put up with a lot of shit. His face when I showed him the Slack conversation on Tuesday morning was just...dead. There's no other way to describe it. It's because he's helping the satellite office with their standups and he's been doing so for some time. After my fury subsided, I kind of feel bad. Because now in addition to the stuff he has to worry about with rest of management, the satellite office, and our codebase, he has to worry about me. And he shouldn't need to do that.

In general, I should learn to be more diplomatic. I can, it just takes more energy the more I don't want to. I sent out a final-ish comment on English Dictionary Man's pull request after he continued doing (the stupid thing that I told him to not do), that surprised my team lead in how diplomatic it was (I was indicating that there was a case he was doing that I didn't consider in the architecture and whether that was what he meant). English Dictionary Man has not responded as of writing this.

I think one good thing that came out of that meeting was the satellite office team lead seeing the insanity in my eyes and how desperate I am to keep the code quality high. I don't think he will auto-approve that pull request unless somebody gives him cover. So that buys me some time. Before the director tells him to merge it in as-is.

---

Anyways, that's not the big thing. That's just something that's funny. The big thing was how our software development process just _failed_, in a cascade form, that afternoon. Not the code. The process.

So a week ago I had made a security fix for a thing. I don't think I should tell you what it is because that's what bad people do. I committed my fix to the then-current release branch. Two days later, my colleagues got enough time to review it. It was approved and merged into the release branch.

This week, my colleague ended up working on the exact same thing somehow. My other colleague remembered that I had written this code, and was wondering why it was not in the current release. Our first impression was that the release branch was never merged into the production branch during deployments. We suspected this because it had happened multiple times before, because our deployments were all manual. It seemed weird because we had just set up CI/CD and automated builds. <-- :tada:

We took a look at when my pull request was merged into the release branch, and when the release branch was merged into master. Release was merged into master a day after I opened my pull request. I merged my pull request a day after that. Because we are not informed of when releases are anymore because we don't have sprints anymore, and because we don't delete our release branches after they are merged into master, _I merged my code into a dead release branch and it was floating in space_. My colleagues who approved it didn't notice either, because they're not informed of when/what sprints/releases we have either.

You may be thinking, _QA should be testing this, right_? The problem is, when the director created my ticket, he forgot to add it to the sprint board because we have to manually add stories into sprints and releases in our issue tracker because we lack automation to float a story into the current release/sprint. QA filters by release/sprint, so _they never knew that story existed_, until the fiasco. This also means it was never tested, and needed to be rebased onto the now-current release in order to be properly tested.

The product managers I think also filter by release/sprint, so they never knew about it, and so they never included it in their internal release notes.

**It's nobody's fault**, it's just a series of unfortunate events. I've learned from reading management books to never blame people if the system is at fault; fix the system instead of driving out good people. Our system is broken and we should fix that.

One of our managers thought this way too, went up to our CTO, told him about our broken process, and that we need to prioritize a solution to avoid this from happening in the future. A good CTO would say something like, "Oh yea I experienced this before, this is the solution I came up with then and why, is this good / we go with that / we come up with a better solution". A worse CTO would say something like, "Why don't you and all the other parties come up with a solution we can all agree upon, and we'll discuss this first thing tomorrow morning".

What our CTO reportedly said: "I need to go to spin class". I told my team lead this during our one-on-one the next day. He collapsed onto the table.

Our director says it is better to laugh, if the only other way to cope is to cry. I agree.

Good stuff.

**(Correction on 2017/12/11)**: The original post said I included an entire Python script as part of an init file. It was actually in the init file documentation. I don't do stateful file imports.
