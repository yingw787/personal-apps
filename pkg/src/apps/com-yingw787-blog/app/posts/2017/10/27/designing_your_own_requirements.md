---
authors: ["yingwang"]
categories:
  - Software
title: "Designing Your Own Requirements"
date: "2017-10-27T00:14:26-04:00"
draft: true
---

This past week, I was pulled away from refactoring our pricing algorithms in order to work on improving the logging infrastructure for our primary repositories. Our logging broke during the Hiroshima incident where we nuked and rebuilt our entire infrastructure over one weekend, and it was so bad in the first place that we were unable to reproduce bugs in production (where, you know, they _actually matter_). My team lead and the director of engineering called me over and told me if I was fine with this. Pricing was mostly "done" at this stage, but improving logging would mean not only diving back into our morass of a primary codebase but also working with the same shits at our satellite office who keep mucking up everything good.

Then I was like, I have a duty to perform. Considering that I'm the \#3 onsite web developer by length of stay at this company, there's nobody else I can or should throw this to. Everybody's bleeding, might as well get a piece of it. So I said yes.

I prefaced a conversation with the director that the people who built out our logging infrastructure are gone and I'm not really sure how it works. Then I asked him what he wanted in terms of logging implementation. He replied, "That's for you to figure out." I asked him what were the specifications I needed to meet. He replied, "It's pretty open-ended."

I asked the director, point blank, "_So not only do I don't know what I don't know, you're telling me that you don't know what you want?_"

The director replied, "That's correct."

_I'm not even a full year into professional software development at this point. Remember that, guys._

---

It's okay though. Remember that pricing algorithms stuff I keep yapping about? I had exactly one story about that. The title of the story was "Pricing Microservice", and the full description was, "Our pricing is slow. Build a microservice to make it faster". You could say I've done this before.

Farewell, pricing. It was good while it lasted.

![Beautiful](/img/posts/2017/10/27/designing_your_own_requirements_1.gif)

---

I wanted to talk a little about how to construct requirements if you do not have any idea about where to start. First off, if you find yourself in this position, consider yourself extremely lucky. Many software engineers have to meet a set of arbitrary, stupid requirements that they can't talk their management out of, so the fact that management trusts me (or you) to successfully execute such a task without guidance is something to appreciate.

- **The most important thing is to figure out what you don't know.** Our computational geometry engineers are pretty good at their job. They got logging in a perfect way, so that they can trace back exactly what happened in production. I asked them what lessons they learned while they implemented logging on their side. One is to pass a token, or a unique identifier, between logs so that you can both break each log down into bite-size chunks while still maintaining the context within a stack trace.

- **Think about where you are and where you want to end up.** I'm starting with loggers randomly sprinkled through our email utilities, our cron jobs, our marketing third-party service calls, and our core application, among others. My eventual goal with this project is to have log traces from every API endpoint down to wherever an exception would be thrown in the call of that API endpoint. I want to start logging from the endpoints because it would help define a clear separation between the code and the user requests and data (which should be the only thing that can cause the API to fail at all), and because it would provide a relatively narrow interface that I can maintain with whoever maintains the API.

- **Break the task down into stages.** I can't go from 0 to 1 in one step, so my first job would be to restore the basic functionality we had before the Hiroshima incident. Then, I will take one endpoint and add logging to it at a time, until my vision is complete.

Lookee here! A set of requirements! Now you can _write those down for future reference_, and get coding! :smile:
