---
author: ["yingwang"]
categories:
  - Books
title: 'Book Review: "Designing Distributed Systems: Patterns and Paradigms for Scalable, Reliable Services", by Brendan Burns'
date: "2021-06-20T20:43:27-04:00"
draft: false
---

I got this book from my manager (now skip-level) a few months ago while we were
looking at Kubernetes. I haven't done a great job in terms of reading books
throughout this year, and so I'm refocusing on getting back to baseline.

It seems like this book primarily focuses on building distributed systems on
Kubernetes (or OpenShift or another container-based orchestration system), but
it does describe common patterns that one can use to build systems. What was
striking to me was how common the same patterns were, and how they're just used
in different ways. Best practices in object-oriented design, and best practices
in application design, carry over to best practices in system design. The focus
on loose coupling, strong interface contracts, and high levels of system
transparency work for pretty much everything.

What I liked most was the discussion around the "sidecar pattern". I've been
hearing sidecar this, sidecar that for the longest time and apparently it's just
a way in order to add functionality without changing a particular application.
Since you can mount shared filesystems and mount underneath the same subnets and
whatnot, you can just communicate to a container via an API endpoint or via
stdout without having to touch the internals of your original container. So it's
a good practice to break out functionality from a legacy application into
microservices, or build new functionality around old, while preserving the same
top-level interface contract.
