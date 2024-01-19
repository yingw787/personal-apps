---
authors: ["yingwang"]
categories:
  - Software
title: "Bad code doesn't (necessarily) mean bad developers"
date: "2017-10-24T20:57:17-04:00"
draft: true
---

I believed for a long time that if you wrote bad code, that meant you were a bad software engineer, as in, bad at your craft. This was before I worked a while at my current company. Now, I still think the majority of the time, bad code is a strong indication of lack of programming chops, especially if significant code smells and shoddy design are present in the final product. Sometimes, though, it can't be helped by a developer. Bad code can also be indicative of:

- **Bad requirements.** One fresh web developer wanted to begin redoing our front-end applications, and for good reason. We have this weird Jinja / Angular / jQuery mixture, where we server-side render an Angular application in Jinja that also happens to require jQuery. So we end up using none of these correctly and it's a nightmare to debug. Instead, under his leadership, we began the migration to React, and to do that, he asked for some pages to redo. Product management, none of whom have been professional software engineers, gave him a Google spreadsheet in order to design a table. No, this wasn't a spreadsheet of requirements. *The cells in the rows and columns had names about what they should be and represented the table*. There was no other design available. The table was built on time, and the data engineering behind the site was superb, but the design came from our still very old site and the lack of strong design was evident, not something you want in a UI application.

- **Frequently changing requirements.** I've encountered this on at least one occasion, where product management did about 20% of the specification then, and 80% as the project went along. In my case, specific requirements often pin-balled off of given values, and it wasn't merely a case of *"This button should be green, not red"*, but instead *"This feature needs to be completely overhauled"*. On one occasion, I've had to build multiple solutions for the same problem, then ask product management which one they wanted. Then, when they made up their mind over a few months, keep those solutions up to date with what was in the main development branch, in order to avoid merge conflicts.

- **Lack of a long-term timeline.** On multiple occasions, when I read a feature specification or bug, I presented a number of different solutions to product management to resolve the problem or build the feature, ranging from dirty and quick to comprehensive and slow. On *every occasion*, product management has chosen the dirty and quick solution. Code quality has suffered significantly as a result of this lack of planning for the future.

- **Poor planning or a lack of time.** Two of my colleagues tasked themselves with migrating our API functionality away from our existing endpoints, which were unmaintainable, over to a new definition. The project was going to be big, it had to be good, and they knew it. So imagine the look on their faces when management gave them two weeks in order to do so. *This is a software-ish company with >$10M ARR*. They finished it. It nearly killed them, but they finished it. 30,000 lines of new functionality, <10% testing coverage, done in two weeks. Then the project was wrenched from their hands and given to those "developers" in the satellite office.

- **Poor foundational architecture.** Our entire software product was created in a matter of a few months. Our effective software architect at the time was a fresh college graduate with no prior professional software engineering experience whatsoever, paid $40,000 / year in order to create three web applications, with no reliable mentors around. For a guy in his circumstances, he did a *phenomenal* job, absolutely brilliant. However, some key issues arose from this, including the forking of third-party dependencies and dependency entanglement, both of which prevent solid upgrades in our tech stack through the years. He noted directly to the CEO that the project as-is is a prototype, and that the system would need to be re-architected if it was to enter production. This concern was ignored and the prototype rushed into production, and to this day we use it. Last I heard (from people who were there), he was fired years ago for growing a beard.

That last part made me go:

![Huh?!](/img/posts/2017/10/24/bad_code_doesnt_mean_bad_developers_1.gif)

Picture from [this Medium post](https://medium.com/@deusexmachina667/you-fired-your-top-talent-i-hope-youre-happy-cf57c41183dd), which is also quite relevant.

From this experience, I learned that:

- **Strong leadership for a software-oriented company comes from competent technical leadership.** Don't get me wrong, there are very competent managers at this company. Our sales and marketing team, led by Bill Cronin, is immensely competent, and is probably the single biggest reason our company is where it is at now. Our operations, customer support, and finance teams are also excellent and keep the shops humming. That's how we've been able to not just survive, but grow against our competitors (who I shudder to think, are worse than we are). However, nobody in the upper strata of management understands, or even appreciates, the complexity and logic of software engineering or software engineering management. Even if the code compiles down to machine code, the art of how that code is structured and appears to a human craftsman is very important for development efficacy.

- **The introductory stages of a software product are by far the most important, and will define a company.** If I had to start a company today, I would do whatever I needed to do in order to ensure that the first three or so software engineers I hire are not only paid more than $200,000 per year and given 1-2% of the company, but also extremely well vetted to ensure that not only do they know what they're doing and that they're smarter than I am, but that they would work together with me and with each other and define a company culture I'm happy to spend 80 hours a week in. Without such a foundation, I would leave the fate of such a company to chance. Without it, I would be lost, and very likely to lose whatever I put in.

- **Hire technical wherever you can.** The best companies, like Fog Creek, can have a customer support engineer with a customer on the line, and fix and deploy whatever issue they are experiencing while the customer is on the call. So no, technical competency for a company isn't just limited to product managers, team leads, and the engineers themselves. Saying it another way, the limits of technical competency your company brings in are the limits of growth your company will experience.
