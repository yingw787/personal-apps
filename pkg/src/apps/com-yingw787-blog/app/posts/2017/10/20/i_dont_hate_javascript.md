---
authors: ["yingwang"]
categories:
  - Software
title: "I don't hate JavaScript"
date: "2017-10-20T17:24:23-04:00"
draft: true
---

So a few days ago I walked up to one of my coworkers and he had this application running in Chrome. He had been relegated from software engineering to devops a while ago, and is partially responsible along with our director and other team leads for building the Docker container that goes into production for each release. Deployments had been a shitshow since we transitioned to Docker, mostly due to the way we are using it. We took our web application monolith, which was difficult to deploy on bare EC2 instances already, packaged the entirety in a container, and deployed that to AWS. I think most companies peel services off their monolith and put them into a container until they have a container ecosystem they are happy with. We are not most companies.

Anyways, it was a shitshow because we were manually building and deploying this gigantic Docker container by hand over several hours in the late evening after an 8-hour workday, and fat-fingering is pretty much inevitable. The application my coworker built took all of our repositories and bundled them together into a Docker container automatically.

I asked him why we were building our very own ShittyJenkins(TM), considering that we had a working Jenkins server (that this same coworker built on his own time for the company) already. Apparently management didn't know whether we wanted to head in the Jenkins direction, so they deleted the Jenkins server without telling him. I'm pretty sure they didn't tell him, because if they did tell him they were going to delete the server, he would have checked in the configuration files into version control somewhere. They weren't checked in at all, and everything was lost.

Jenkins is free. And open source. I'm not sure if management has internalized that we, a company with twenty developers, still have no continuous integration after three years of being in business.

___

Back to the technical stuff. I asked him how he built it. He used [Vue.js](https://vuejs.org/) for the front-end and [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) in order to live-stream his local terminal output to a window within the application. It's really cool to see in action, especially with the local terminal window open and the build process running side-by-side.

That got me reminiscing about my experience with JavaScript to date. Our company uses Angular 1.x and React for our front-end -- and jQuery and Mustache and Jinja and now Vue, but mostly Angular 1.x and React. I guess what I wanted to focus on in this discussion is my experience with both frameworks in the context of working at my current company, and my experience with the language itself.

Since I've started working here, I've learned that JavaScript is an infamous language par none. Here's a talk from Gary Bernhardt detailing just why the language is infamous:

{{< youtube id="SB3VFaznrcs" >}}

<br/>

And here's an article from Hacker Noon about the state of JavaScript development in 2016 (viewer discretion is advised): https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f

Strangely enough though, I haven't felt the pain points of JavaScript while developing. A large part of this may be because of our lax design guidelines. For example, there is one location in the world where our internal ERP software is being used -- our headquarters in Gaithersburg, MD. So we don't desire to make our ERP software mobile-friendly, or even responsive. Instead, we order monitors with the size needed to make our ERP work. Pretty much the same goes for our quoting flow and our partner portal; it's almost impossible to make the existing site mobile-friendly or even responsive as a result of architectural decisions made years ago, so new features don't even consider it. Yes, it's a completely shit way to design and code and none of us can honestly say we are proud of what we have made in that respect. But I'd be lying if I said it didn't make our job easier. As long as that button appears on development, we can be pretty sure that it will appear in more or less the right place in production, and that's all management really cares about and all we can do about it.

The above is a cop-out excuse of why I'm living the easy life, so let me give another reason: frameworks have come a long way and they make a noticeable improvement in the quality of a developer's life. While we were upgrading parts of our site from this weird Jinja / jQuery / Angular 1.x mixture to React, developer speed improved by at least 4x. This isn't just because we weren't using Jinja, jQuery, and Angular 1.x incorrectly and the people who made our React sites are all still employed here, but because React placed state management first and foremost on the list of priorities, and because its fairly small API means there's less room to make mistakes.

For example, a problem that we routinely run into is Angular saying:

`10 $digest() iterations reached. Aborting!`

This issue happens because Angular updates its state through watchers in *digest cycles*, which as I understand it ways to update the state of the application. You can manually trigger the digest cycle to run using `\$scope.$apply()` or `\$scope.$digest()` or Angular triggers it when you include an `ng-*` directive to an HTML tag or when you add `\$scope.$watch` to something. I recently fixed a bug where a function was invoked within a directive. That function will get called an infinite number of times, precisely because Angular doesn't know what the state of the return value should be. Angular then detects the error and aborts the digest cycle, which means if the state gets updated again (this time intentionally), the change may not be reflected.

In React, every JSX component has a `render` function, that details how this component will be rendered. Every component has a `this.state` variable and `this.setState` method, which is the only approved method to update the state of the component. You can hook into the lifecycle of the component using lifecycle hooks (duh) like `componentWillMount()` and `componentDidMount()`. So if you have a promise, you don't need callbacks anymore. All you need to do is update the state variable with the desired returned data, and React will handle the update for you.

The million-dollar question is, *if you made a buggy feature three months ago that causes this digest cycle abortion, can you still find it easily, and if you don't work here anymore, can somebody else find it easily?* Hence React. And good coding standards, like a directive-first philosophy.

There are significant trade-offs to using a framework versus a language. One is because you're stuck with a framework when you pick it. The whole issue with React's BSD+Patents fiasco that cost them [Automattic's usage](https://ma.tt/2017/09/on-react-and-wordpress/) before they finally relented and went with the [MIT license](https://code.facebook.com/posts/300798627056246/relicensing-react-jest-flow-and-immutable-js/), shows that frameworks, especially frameworks needed by everybody developed by super-benevolent-no-really companies, are still quite fickle. And you're stuck with not just a language (JavaScript at that), but a framework as well, and I sure hope both place nice together with any other dependencies that you may have because if you don't, then you have an N-legged race where you can't update something because something else needs to be updated. Commence throwing out everything anybody has made and re-invent the wheel. I can see why all the X-to-JavaScript languages, DSLs like Jinja or Mustache or Twig, and WebAssembly and Web Components (or GASP! *Flash*) are if not popular, then alive somewhere.

![JavaScript in a nutshell](/img/posts/2017/10/20/i_dont_hate_javascript_1.gif)

I saw this on Medium today and I had to have this picture.

___

This is maybe why I want to do more back-end work than front-end work nowadays, and am comfortably building something in Python 90% of the time. It's gratifying at first to see something pop up visually when you make something in JavaScript. It's difficult, perhaps mortifyingly so, to build something serious and maintain and upgrade it through the ages.

JavaScript isn't terrible to me. I'm okay with it. I'm okay with a lot of things.

**(Addition on 10/19/2017)**: That Medium post is [here](https://medium.com/@karolismasiulis/programming-is-not-about-text-c205ba6aa3ba).
