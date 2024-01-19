---
authors: ["yingwang"]
categories:
  - Software
title: "My Experiences with Development Flows"
date: "2017-10-23T21:52:09-04:00"
draft: true
---

> Rick: He wants to make a deal: half the codes now, half after you finish.
>
> Morty: But can't we trust -- (O.O') -- wait what? Finish what?
>
> Rick: The, the -- you know --
>
> Morty: I thought I was TORTURING HIM!
>
> Rick: Oh and this disappoints you?! Do I tell him we don't have a deal, Morty? Because if we can kill our enemies, but we can't jack them off, then how are we better than them?
>
> **From "Morty's Mind Blowers" (Season 3, Episode 8 of "Rick and Morty") by Justin Roiland and Dan Harmon**

Over the past few weeks, I've learned some amount about why development flows are important and how to choose the one you need for your project.

I have used two significantly different types of development flows: trunk-based and Git. I learned about the differences and some pros and cons of both from a [blog post written by Konrad Gadzinowski on Toptal](https://www.toptal.com/software/trunk-based-development-git-flow?utm_campaign=blog_post_trunk_based_development_git_flow):

A trunk based development workflow looks like this:

![trunk-based](/img/posts/2017/10/23/my_experiences_with_development_flows_2.png)

The key thing to note here is that there is one branch, both for primary development, and for deployment. All changes must eventually be merged into this branch, and releases are sequential along this primary branch, meaning that if changes are merged between formal releases, those changes need to go out together. Integration happens on the separate branches, if you don't want your primary branch to suffer.

A Git-based development workflow looks like this:

![Git-based](/img/posts/2017/10/23/my_experiences_with_development_flows_1.png)

Note how deployments are abstracted away from the primary development branch to a `master` branch, that should reflect a release, and whose head should reflect what is in production. Also notice how there are no direct relationships between the main development branch and `master`; development branches into separate release branches, where bugs for existing features are caught by QA and fixed separately before merging into `master`.

When the company began refactoring the pricing algorithms into another repository, it was just one story, assigned to one computational geometry engineer and me. For a project that early, with so few contributors and with infrequent, developmental releases, it made sense to have a trunk-based development workflow. I would ensure that features would be merged into the main branch, and create a tag off of that branch that symbolized a release that should be pulled into QA.

I liked the trunk-based method even as the rest of the company used Git flow for a number of reasons, some related to the principle and some related to our implementation. I believed it to be more agile than Git flow, if only because we had release branches that existed for weeks and contained new features. We could deploy to QA and production more frequently because the state of our branches was smaller. Additionally, since we have no continuous integration, branch management becomes difficult because the state of the branches can only be known locally and not all at once.

However, when the project transitioned over to the data science team, and we needed to maintain different states for the releases and development, I realized we needed to abandon the trunk-based method and transition over to Git flow. This was made especially clear after our CEO requested a personal change in the codebase, and that no other changes should be included with his change and that it needed to go out to `master` on that day as a hotfix. Because we had already included changes in the main branch, what we ended up having to do was to checkout the tag currently in production, add the change, and create a new tag and deploy that. That precipitated what ended up being a pseudo-master branch in our trunking workflow as we kept on checking out tags and creating new tags from those instead of checking out tags from our main development branch. When I fully comprehended what was happening, I felt like Morty after he realized he was giving a handjob to that alien.

Now we have a Git flow sort of set up (we had semantic versioning, but our director got rid of that in favor of one version for the entire codebase, and now the version numbers are off), and we can more or less effectively deploy without having to worry about that particular issue. For other companies, I would anticipate there are additional branching apart from `master` needed in order to, say, A/B test the application or create canary releases. Git flow would set up the foundations to enable that to happen.
