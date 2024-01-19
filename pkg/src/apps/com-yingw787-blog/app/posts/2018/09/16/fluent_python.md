---
authors: ["yingwang"]
categories:
  - Books
title: "Book Review: \"Fluent Python\", by Luciano Ramalho"
date: "2018-09-16T18:35:58-04:00"
draft: false
---

It took me about four months or so in order to read this book from cover to
cover. If you may recall my blog post on [python functions in
practice](/posts/2018/05/08/python_functions_in_practice) referenced this book.
So I don't know if I can give a holistic overview of how this book turned out.

I really wanted to expand my horizons and deepen my understanding of Python by
reading this book, and I think it scored very well there. A lot of the concepts
were covered quite thoroughly and where there were gaps, more up-to-date
resources on the web and in other books referenced in each chapter's "Further
Reading" section were very useful.

One of the most useful sections was increasing the performance of your Python
application, particularly using the library `asyncio` and Futures. In this
sense, Python 3 took a page out of Node.js in defining how I/O-bound operations
ought to be written. I couldn't do anything with this module since just a short
while before I needed to maintain Python 2/3 compatibility, but due to needing
to package Python 3 for one issue at work, I now am free to use all Python 3
features. I also discovered that people create asynchronous HTTP clients as well
as database clients (like [aiohttp](https://aiohttp.readthedocs.io/en/stable/)
and [aiopg](https://aiopg.readthedocs.io/en/stable/)), and I might be able to
take those into account while working at my current company.

The most confusing and possibly less interesting aspects of the book was the
section on metaprogramming. I don't see Python being a great metaprogramming
model and the author was hesitant against it too, so I don't think it'll stick
or need to stick.

Overall, an excellent read and quite the reference on the bookshelf.
