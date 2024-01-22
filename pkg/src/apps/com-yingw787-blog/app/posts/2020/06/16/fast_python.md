---
author: ["yingwang"]
categories:
  - Books
title: 'Book Review: "Fast Python: Master the Basics to Write Faster Code", by Chris Conlan (edited by Will Angel)'
date: "2020-06-14T22:01:33-04:00"
draft: false
---

One friend of mine, [Chris](https://github.com/chrisconlan), recently wrote a
book on Python and performance. I had the pleasure of reviewing it recently;
here's some of my thoughts.

Some things I liked:

- **Emphasis on using other people's code:** My impression for
  performance-optimized code is you generally _don't_ want to write your own,
  unless your business vertical happens to be performant code (HPC, HFT,
  etc.). This is especially true for Python, an interpreted language tailored
  towards simplicity. Even basic Python standard library functions aren't
  truly Python. Under the hood, they're wrappers around C extensions. To this
  extent, "Fast Python" does an excellent job showcasing the different types
  of libraries you can use in order to make your code faster.

- **Emphasis on code profiling:** Oftentimes, what we software engineers
  intuit as the bottleneck isn't the actual source of the problem. Profiling
  and tracing tools can help break down and visualize long-running tasks.
  "Fast Python" does a great job at breaking down and visualizing code
  performance, which helps you the professional software engineer generate
  data-driven arguments for your desired direction of execution. I do wish
  there were flamegraphs, and discussion of profiling concurrent code, but
  it's likely out of scope for a beginner's tutorial and the important thing
  is to know how to tie back the discovery cycle to requirements.

- **It's written in LaTeX.** Who doesn't like a scientific book written in
  LaTeX?

Some things I would improve:

- **Less big O discussion:** My understanding of Big O is it isn't frequently
  used in production, since with different timing and storage behaviors, your
  computational model fundamentally changes. See [this blog
  post](https://lemire.me/blog/2013/07/11/big-o-notation-and-real-world-performance/)
  for more information.

  I would instead emphasize [the common latency numbers every software
  engineer should know](https://gist.github.com/jboner/2841832). These numbers
  help tie latency to the underlying hardware architecture, which will always
  be the cap on your practical performance.

- **Comprehensive discussions around specific complex topics like Timsort or
  HyperLogLog:** A deep dive into the Python source code for Timsort, for
  example, would be very interesting, as would be a discussion around
  HyperLogLog data structures. These discussions probably fall outside the
  purview of a beginner, but I think that's why it's important harder topics
  are walked through with baby steps.

- **Emphasis on relation between application performance and the underlying
  storage models:** When you're working with data within a specific language,
  such as Python, you're usually dealing with some kind of an in-memory buffer
  representing a subset of the underlying dataset. Either that, or you're
  issuing API calls to remote servers that actually have the data, like
  flushing instructions to an Apache Spark orchestrator node via
  [**`pyspark`**](https://github.com/apache/spark/tree/master/python/pyspark),
  which would then parallelize instructions with workers.

  In order to get real, scalable improvements in computation time, you really
  can't ignore how the data is structured underneath. If your database is
  column-oriented vs. row-oriented, that will affect how you structure your
  queries. If you store your data in-memory vs. on-disk, that will impact your
  latency numbers. That's why data engineering is the bottleneck for effective
  data science and data vizualization, as per [this Forbes
  article](https://www.forbes.com/sites/danwoods/2016/01/31/how-the-etl-bottleneck-will-kill-your-business/#3752e668112c).

- **Understanding the Python virtual machine and the Python bytecode
  representation.** The bytecode-level representation in the Python virtual
  machine is what actually gets executed under the hood, the language itself
  is just syntactic sugar. I like visualizing the bytecode as an academic
  exercise because it helps you view Python's understanding of your logic. A.
  Jesse Jiryu Davis, a CPython core developer, discovered that [swap isn't
  atomic](https://emptysqua.re/blog/pythons-swap-is-not-atomic/), which caused
  race conditions in the Python MongoDB driver. As you make your code more
  performant, it's really important not to go backwards on the "make it right"
  step, which is easy to do in a high-level language like Python.

  You can use the [**`dis`**](https://docs.python.org/3/library/dis.html)
  module for further inspection of specific Python functions.

- **Exercises and solutions!** I've found those to be really helpful in making
  sure knowledge sticks better when [I was working through learning
  Haskell](https://github.com/yingw787/thehaskellbook), and I think it'll be
  relatively easy to tie into the book given the existing codebase.

- **Multiple execution runs and latency distributions:** No two runs are ever
  the same, and it'd be nice to present aggregate statistics as an estimation
  of truth. This is important for avoiding or measuring things like [tail
  latencies](http://danluu.com/percentile-latency/) or
  [slowlock](https://danluu.com/limplock/), which may present concerns if
  you're working with large quantities of data; that one slow execution run
  might not be because you have slow code!!

- **More discussion on concurrency and parallelism.** I didn't pick up a
  chapter on concurrency and parallelism, not sure if I just missed it, but I
  think it could be really helpful in making code "faster", or at least
  getting the unblocked stuff out of the way. If you haven't already, check
  out
  [`multiprocessing`](https://docs.python.org/3/library/multiprocessing.html)
  and [`trio`](https://trio.readthedocs.io/en/stable/). Also possibly check
  out [my series on concurrency models with
  Python](https://bytes.yingw787.com/categories/concurrency/) for a tasting
  menu of link aggregations :smile:

- **Emphasis on data pre-processing:** Maybe it's because I've had some ETL
  background, but I really don't like CSVs. I think you can get a lot of value
  transforming CSVs into something much more tightly specced, like a Parquet
  file. If you were to quote newlines, for instance, I don't think
  `.readlines()` would work all that well, since it may lazily break on the
  raw `\n` character while ignoring quoting characters. I recall working with
  some horrifyingly bad CSV files in the past, and processing and validation
  logic can become rather thick. A great pre-processing layer can help avoid
  that.

- **I kind of wish large data dumps were uploaded to S3.** While GitHub only
  allows 100MB-sized files, AWS S3 can handle far larger dumps, and it's still
  [stupid cheap](https://aws.amazon.com/s3/pricing)! Otherwise, a script with
  `faker` and a fixed seed should allow reproducibly consistent randomized
  data dumps. See [this Medium blog
  post](https://towardsdatascience.com/generation-of-large-csv-data-using-python-faker-8cfcbedca7a7).

- **Lesser focus on general algorithms:** I'm not sure how important
  generalized algorithms knowledge is in the workplace, and how wide the gulf
  between computer science and software engineering truly is. In my
  experience, algorithms come in that software library you read with a manual,
  you generally don't implement them yourself.

  The one data structure I would implement would be a directed acyclic graph
  (DAG). You can find DAGs pretty much everywhere you look in production
  software, and optimizing performance given that underlying constraint is
  really useful to formulating great system designs.

I'm talking from the perspective from a data engineer with a few years of
experience, and so my perspective is likely different from that of Chris's
primary audience. I think "Fast Python" is a wonderful book for beginners, and
you should definitely read over it if you get the chance.
