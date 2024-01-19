---
authors: ["yingwang"]
categories:
  - Software
title: "What I want in a programming language"
date: "2017-05-20T23:30:52-04:00"
draft: false
---
I started reading "7 Languages in 7 Weeks" by Bruce Tate a while ago and I just finished yesterday. It was pretty good. Along with building a Lisp in C (or really following [some excellent instructions](http://www.buildyourownlisp.com/)), I've gained some knowledge into how programming languages work under the hood. I didn't want to be silo'ed into thinking, "*{Python, C++, Go, JavaScript} is the best*", and reading about different languages helps with identifying patterns and trends. Here are some of my thoughts on things I would look for when adopting a new programming language today:

1. **A Usable Concurrency Model**

    I took a course on advanced computer architecture last year, and one of the things that struck me were how multicore processors were used. A lot of cores simply are not used. Literally, if you have 4 cores and your system can only make use of 3 cores, the 4th just powers down. To me, that seems like a waste. The future is multicore; Moore's Law is slowing down and whatnot, and if you want faster performance these days, you can't just rely on clock speeds anymore. You and your programming language need to have a concurrency model. Or rather, languages without a concurrency model will be disadvantaged as to ones that do.

    Out of the concepts explored in the book regarding concurrency, I liked Erlang's model of lightweight processes the best. Processes, unlike threads, do not share memory, which means you can save state in a particular process without worrying another process will corrupt it. Also, you don't need to handle the memory since the language will do it for you. *Das guuuud*.

    Maybe I'm wrong and most programmers will be fine without concurrency, and concurrency will be better handled by the operating system or your deployment infrastructure. Regardless though, it's probably one of the most significant developments in programming today, and you'd do well to learn enough to use it.

2. **Garbage Collection**

    I've used Python and C. I can definitively say that I would never want to use C, C++, or any other language that requires manual memory management on a day to day basis. Maybe if I needed to build out a high-performance library of some sort with testing that would be stable for *n* years. *Maybe*.

    Why?

    When I was building out that Lisp I talked about earlier (which can be found [here](https://github.com/yingw787/c-lisp)), I encountered some segmentation faults and thought, "*Hey, this would be a great time to learn GDB and Valgrind.*" As it turns out, Valgrind isn't supported on macOS past Yosemite (or something), and I had difficulty adding Keychain certs for GDB, so I decided to spin up an EC2 instance instead. So I built my program on Linux with segfaults and tested it with GDB and Valgrind.

    They both said that my print statement had a memory leak.

    Yeah, f**k that. Let the {*compiler, interpreter, VM, smart program written once*} handle memory management.

3. **Functional Programming Library**

    Functional and functional-*ish* languages are cool, yes. But I wouldn't build a company on top of them. It's just too different from the imperative languages that I'm used to. That being said, functional programming can make your life so much easier. A absolutely *smashing* compromise that I love is having a functional programming library. Like Lodash. I've had less than a year of web development under my belt up to this point, and I can definitively say that Lodash is the reason I use functional programming at all. A port of Lodash's API, re-implemented in whatever language you desire (such as [Pydash for Python](https://github.com/dgilland/pydash)) would be much more easily grokable and useful than learning Haskell or Scala / Clojure from scratch.

4. **HTTP/Networking Library**

    I was gobsmacked to learn that Prolog had an [http library](http://www.pathwayslms.com/swipltuts/html/). If *Prolog* has an HTTP library, whatever language you use in production should have a networking library. And if you're a web-based company, you should be able to implement web APIs with the language you use. There's no excuse.

5. **Not be overly anal**

    The definition of anal, below:

    ```java
    public static void main(string[] args) {
        System.out.println("Hello World")
    }
    ```

    No.

    Did I mention that Java's source code is controlled by Oracle? And that they sued Google for using Java in Android's SDK?

****

Yeah, I think that's pretty much it. I don't care too much about the nitty gritty and I would bet a fistful of toothpicks to say that other programmers don't either (cause I'm cheap, not because it's a bad bet). Languages are APIs for the computer, and as long as the computer does what you want, and as long as you can build fast enough to get paid, any language you use will do.

My hope is to be able to learn enough C++ and Go by the end of the year to use it in a production-grade application. C++ mostly because I want to read C++ code, and Go because I want to use it in a future company.
