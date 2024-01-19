---
authors: ["yingwang"]
categories:
  - Software
title: "Trends in Computing"
date: "2018-06-06T00:27:12-04:00"
draft: false
---

Since I work at an enterprise computing company, and because I have my own
interests in starting a software company, I've been paying attention to general
trends in computing I find actionable or otherwise meaningful. I do keep in mind
Jeff Bezos' advice about companies: [Focus on the things that don't
change](https://medium.com/@seansheikh/bezos-wisdom-focus-on-the-things-that-dont-change-f3fc39eca401),
and with that advice, I'm very much a last-mover on the "next hot thing", like
Internet of Things, Blockchain, or Social Media. That being said, certain things
about computers and computing, rooted in the laws of physics and human nature,
can provide some amount of business value when making forecasts and projections
for the future.

So without further ado, let's talk about some of these things.

---

##### Low-level compute

- I was going to say that Moore's Law was slowing down, but as it turns out,
  that may be inaccurate. A quick Google search turned up [this discussion
  thread](https://www.semiwiki.com/forum/f2/moores-law-ending-slowing-why-even-debate-q-8962.html)
  about some of the aspects of the argument, including cost/transistor and cost
  breakdowns, transistor type, and chip release cycles. What I do feel
  comfortable in saying is in order to improve single-core performance along
  Moore's Law, not only do processes have to improve, but transistor designs
  must evolve as well. Depending on how frequently designs change, how different
  they are from prior designs, and how the new designs are productionized, this
  may incur a higher overall R&D cost, greater industry consolidation, and
  slower release cycles. Already, we see Intel moving away from a steady
  [tick-tock model of process
  improvement](https://en.wikipedia.org/wiki/Tick%E2%80%93tock_model) and
  towards
  ['Process-Architecture-Optimization'](https://www.anandtech.com/show/10183/intels-tick-tock-seemingly-dead-becomes-process-architecture-optimization),
  which may be an attempt to amortize R&D costs over a longer period of time.

- What may be more important than Moore's Law is its relevance in a plethora of
  possible performance bottlenecks. Peter Norvig released [a set of timings for
  operations on a PC](http://norvig.com/21-days.html#answers). As you can see,
  these numbers vary by multiple _orders of magnitude_. The business
  ramifications are immense. For example, the difference between fetching from
  main memory and fetching from disk is about three orders of magnitude. This
  difference alone may explain the rise of [in-memory database
  solutions](https://en.wikipedia.org/wiki/In-memory_database) and data stores,
  such as [Redis](https://redis.io/), [memcached](https://memcached.org/), and
  [MemSQL](https://www.memsql.com/), among others. The difference between
  fetching from memory and fetching from a disk on a separate continent is a
  staggering six orders of magnitude difference. This is why, if you are Netflix
  and you deploy to multiple continents and [AWS Availability
  Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html),
  you might devote more space to German movies on servers in `eu-central-1`
  (Frankfurt) than those in `us-west-2` (Oregon). If you design your software
  and your infrastructure well, single-core performance should not be your
  primary bottleneck, something like network or disk would be. Of course, there
  are exceptions, like if you do a lot of high-performance-computing (HPC) work,
  but for the majority of developers, this should be rare.

- Applications desiring higher performance or resource utilizition rates will
  require work in application code or infrastructure that cannot be easily
  abstracted away. For example, many applications cannot take advantage of
  multi-core processors due to [Amdahl's
  Law](https://en.wikipedia.org/wiki/Amdahl%27s_law), which predicts the
  theoretical speedup of an application given additional resources, as they have
  some blocks/chunks of code or infrastructure that remains inherently stateful
  and must be sequentially executed. You may notice, both on bare-metal servers
  and cloud VMs like AWS EC2, that there are only a certain number of
  combinations of CPU cores and memory/storage/etc. that you can obtain. So, if
  you were paying $X for an `m4.16xlarge` instance on AWS because you need 256GB
  of RAM, but you could only use 1 CPU core, that's 63 cores you are throwing
  away. [Pricing site here](https://aws.amazon.com/ec2/pricing/on-demand/). The
  previous company I worked did something like this, where the web application
  was single thread, single process, but the database required a lot of memory,
  and they were both striped together on multiple EC2 instances.

---

##### Data

- It was [an article about designing data pipelines for data
  science](https://towardsdatascience.com/data-science-for-startups-data-pipelines-786f6746a59a)
  that first introduced me to [the data lake architecture
  pattern](https://knowledgent.com/whitepaper/design-successful-data-lake/). It
  was an intuitive, yet intriguing, way to think about data: a large pool,
  accessible via some number of applications, scripts, functions, and otherwise
  transforms for any number of use cases (e.g., Business Intelligence,
  Development, Sales/Marketing). A single source of truth for an entire company.
  Data lakes may be used to share data across departments, keep department
  siloing and intra-company politics to a minimum, and develop interdisciplinary
  insights.

- People _hate_ moving their data around, much more than they hate changing
  applications. Think about it: isn't it fairly easy to change your email
  client, or your calendar client, if you can set up email forwarding and export
  your calendars? At the same time, isn't it hard to convince your friends to
  switch from Facebook or WhatsApp because not only can you not easily export
  your data, but you need to convince your friends (and their friends, and so
  on) to export their data as well? Data is a _huge_ moat for large businesses,
  and something they can easily design a winning strategem around. Just take a
  look at [Justin O'Beirne's article on Google Maps vs. Apple
  Maps](https://www.justinobeirne.com/google-maps-moat).

- At the same time, data must be treated extremely carefully, because bad data
  can be just as much a drag on a business as good data is a boost. I've
  encountered situations where customers keep their data in Microsoft Excel
  sheets, and errors occur when exporting to CSV (let alone a SQL database).
  Because of this, data integrity is vitally important to the success of a
  company, as it determines how fast a company can develop features, develop
  insights, and scale to new markets and customers. That's one big reason why
  companies are glazing over NoSQL and moving to SQL solutions, specifically
  distributed NewSQL solutions. Data integrity is a must at _any_ scale.

- Because data tends to favor those who have it, smaller companies come into
  data-driven industries with an inherent disadvantage. That's why it's
  important to try and derive as much value from as little data as possible, and
  make it as easy as possible for the customer to generate data. Data annotation
  services like [Scale API](https://www.scaleapi.com/) or [AWS Mechanical
  Turk](https://docs.aws.amazon.com/AWSMechTurk/latest/RequesterUI/OverviewofMturk.html)
  provide human insights into your data, impossible to get otherwise, that can
  then be built upon by in-house code and people.
  [OAuth](https://en.wikipedia.org/wiki/OAuth) provides customers the ability to
  re-use their profile information across multiple sites, lowering the barrier
  to usage to two or three clicks.

---

##### Service and Deployment Models

- Software-as-a-Service models are extremely useful for companies that provide
  continuous value to their customers (i.e. an email service, or an API
  service). With software-as-a-service, not only do you control the code, you
  also control all aspects of deployment and infrastructure as well. This means
  you can do some pretty crazy things, like compile your dependencies for the
  infrastructure you will deploy on. Here's a tutorial on [compiling your
  `numpy` and `scipy` dependencies with the Intel Math Kernel Library
  (MKL)](https://www.hoffman2.idre.ucla.edu/software/python/high-performance-numpy-and-scipy-with-mkl/).
  You can probably bet that the `pip` versions do not have this -- and it's just
  a different compilation path, not a wholly separate library! It doesn't even
  introduce dependencies between your code and your infrastructure; all you need
  to do is configure your `$PATH`, `$PYTHONPATH` and any other assorted
  environment variables.

- Not every company should be a software-as-a-service company. Companies that
  provide a fixed application, or do not deliver continuous value to their
  customers through their applications, may want to consider a single-purchase
  license, or a perpetual fallback license for a particular version of their
  software. Here's [an example of a single-purchase license by Timing.app for
  macOS](https://timingapp.com/pricing), and here's [an example of a perpetual
  fallback license by
  JetBrains](https://sales.jetbrains.com/hc/en-gb/articles/207240845-What-is-a-perpetual-fallback-license-).
  In my experience, it makes customers happy that they're getting a fair deal,
  doesn't actually affect your deployment pipeline, and keeps your options open
  in terms of development velocity and direction.

---

I hope you've found some of these insights useful!
