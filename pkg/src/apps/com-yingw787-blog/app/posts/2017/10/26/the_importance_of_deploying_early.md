---
authors: ["yingwang"]
categories:
  - Software
title: "The Importance of Deploying Early"
date: "2017-10-26T00:24:46-04:00"
draft: true
---

> Jack Worthing/Earnest: You are quite perfect, Miss Fairfax.
>
> Gwendolyn Fairfax: Oh, I hope not. It would leave no room for development. And I intend to develop in many directions.
>
> **From "The Importance of Being Earnest", by Oscar Wilde**

Today I declare that the pricing algorithms repository I have been working on is "complete", and by "complete", I mean that it works, it has been mostly bug-free, and I have improved testing coverage for both the machine learning pipeline and the core cost-plus modeling sections to 80% each, which is about as much coverage as you can get without testing getters and setters. Through it all, I developed an appreciation as to why companies should deploy early. I have seen a good many projects at this company die in committee, and I have seen smaller projects succeed because they were much more nimble and expectations were lower.

___

One very good example of a project that died in committee was (effectively) our partner portal redesign. Our partner portal, the web application that allows us to interface with machine shops, is a piece of shit. I believe one recent measurement timed our maximum page load time to be 178 seconds, which was stated to be "absurd". Most of the issue has to do with the shit API that we built, but it's also because we do not have a disciplined API interface with our backend. We ping the API whenever we need to add in a new field, which absolutely kills our performance.

Back in March, we started planning for our partner portal redesign. We were going to redo the whole shebang. It was going to look just like our landing pages, it was going to be performant, it was going to be mobile-first and responsive, it was going to be a lot of things. Then every stakeholder had to get their opinion on what features they wanted. Sales, marketing, manufacturing, operations, upper management, machine shops, every change had to be talked over through the multitude of parties involved.

It's now November. Our redesign has been shelved until, apparently, 2019. If the company is even around then. The product manager who was hired to lead the redesign didn't accomplish anything due to the intense politics involved, and left a few weeks ago for another company.

___

I experienced part of this when I began to build out our partner onboarding workflow, using my own time and money. I was sick of working in our shitty codebase and wanted to see whether I would be able to single-handedly change my path at the company by taking some initiative. So I took what I knew about Bootstrap, Webpack, and React, and started to build a single page application that would provide partners with an easy way to register for our site. It started off as pretty promising. It was mobile-first with flexbox, it was thematically designed, it had an SVG logo so I could scale it however I wanted. I also had an embedded Google Map that could find the address you punched in, with custom zoom levels and thematic styling.

I showed this to my boss at the time, who is our current CTO. He started talking about his dentist. Then he pointed out that he didn't like the zoom level of the integrated Google Map I included. I was perplexed that this, out of all the possible improvements I could make to the application, is the thing that he pointed out. I demonstrated that I anticipated his concern, and set the zoom level to be a variable I could change at will. I changed the variable in front of him, the application hot-loaded, and the different zoom level showed up. He said that's nice, but we really should have a meeting about this with our UX designer and the other software engineers. I offered to build a custom content management system that would allow him to alter the value of the zoom level through a GUI as he wished. I was turned down. The meeting did not establish anything.

Then I was approached by the UX designer at standup, who said the chief operating officer at the time wanted me to create *seventy* questions for our partners with custom workflows depending on the answers they put into the question. The chief operating officer wanted to make the bar to become a partner high because, and I quote, "there's no fee to enter our network so we must make it difficult for them otherwise". I replied that I would be happy to make a application where they can write out the questions themselves and link them together. They replied that they did not have the time to do that and that the questions had to be hardcoded. Did I mention that not only had this been done earlier elsewhere in our tech stack, but that it was clear from *that* effort that adding a bunch of questions not only drove away the best machine shops but also produced no significant additional information?

That's when I said, fuck it, I'm scrapping this because I have better things to do with my life and my time and money. Now I'm here writing about it instead. :no_mouth:

It was about that time when I realized the problems our company faced weren't really technical, but were rather cultural and personal and thus couldn't be addressed by throwing more tech at it.

___

As it turns out, I'm not the only one who tried to improve our application. My current team lead was hired as an Android developer, and he began work on a native Android application for our partner portal. One week in, his project was scrapped by management and his job outsourced to Pakistan. Then he was tasked by management to create a native iOS version of the partner portal because that's what our partners really use, is iOS, not Android. After three months, he finished a beta version and released it to the machine shops in our network. Then management scrapped that, and told him to learn Python and be an actual software engineer, then to become a team lead for the partner portal team, which has only one person who actually works to maintain our one sad application. We still have beta testers for that mobile application. They really like it because it's fast and our main application is slow.

___

So when I was tasked with refactoring our pricing algorithms, I was deathly afraid that the effort, which would ultimately span about three months, would be a waste of time and that the project would end up on the ash heap of history. So I made several decisions along the way that helped ensure its survival:

- I designed a high-level API to the module that would *not change*, unless you had a *very good reason* for it to. This API was *as tiny as I could make it*, because worst-case scenario I was the only person who would know how it all worked, and thus I would have to maintain it, and I didn't want to make something huge and unmaintainable. This was a life-saver, because as long as the API worked and spat out results, I didn't have to worry too much about code quality (I did, immensely, but I knew if I couldn't due to time I didn't have to).

- My supervisor, who was in Hawaii scuba diving a week after he fired our last founding engineer, called my colleague and told him to tell me that the original plan for the module, which was to create a Docker container, would be placed on hold because he didn't know whether to go that route or to use Celery tasks instead (preferred by our former CTO and current CSO). I had planned for this contingency and immediately went to building out a Conda package instead, which was what the computational geometry engineers were leaning towards, and who after the mass exodus from our web services team, remained the sole linchpin of continuity. That way, we could build the package and wrap it in whatever deployment structure we needed it to be in. We lost no time in deciding what to do, and that's time shaved off development before it was deployed.

- I **SCREAMED LIKE A LITTLE BITCH** whenever there was a change in the pricing algorithms I believed to be either catastrophic or setting a precedent to be catastrophic. I screamed when data science added their code, because it was so bad. I screamed when our satellite office added *some* code, because I knew it was *going* to be bad. I screamed until I was called into my supervisor's office and told I was going to be a research engineer dedicated to maintaining our pricing algorithms. I screamed until the algorithms I helped write were deployed to production. I screamed until people became afraid of me, because that was the only way I knew how to protect the quality and integrity of the code I worked on and that supported one of the company's two core business advantages (instantaneous and dynamic pricing), and my own sanity and willingness to keep working. I want to make absolutely clear, it's *not* great to do this. It's really not. I blew up possibly repairable bridges with a grenade launcher. I risked my job. But absent assertive technical leadership with the authority to do the right thing, I really do think it was the best choice I had. It was the only choice I had.

The result? After our initial deployments, our pricing algorithms are a Garden of Eden in a codebase with English dictionaries checked into version control, no working unit tests at all for some repositories, and burning dumpster fires every day. A Garden of Eden with tests and linting that ran after every commit on every developer who touches it, that could be quickly iterated upon without severely changing functionality due to its small API, and a repository people could count on because someone held anybody who touched it accountable. I almost cry with relief every time I sit down in my chair every morning and hear everyone else screaming, and realize I don't have to deal with all that. I think my coworkers are just a bit jealous of me. I also think that for the competent ones, I've earned their respect.

I even feel a bit more comfortable now transferring ownership of the repository to data science (after all, code ownership by one person is horrible, due to knowledge transfer, bus factors, etc.). I don't really have a choice right now because I'm tasked with doing something else, but I feel more like I'm sending a kid to college rather than tossing a baby onto a highway.

___

The lesson I learned here is: **A project that is 99% deployed generates zero revenue for the company. Only a project that is 100% deployed makes any revenue for the company.** The longer you wait to deploy, the higher the risk that you will pour time and money and energy into something people won't like, but the higher the risk that you will never deploy at all. Avoid that **at all costs**.
