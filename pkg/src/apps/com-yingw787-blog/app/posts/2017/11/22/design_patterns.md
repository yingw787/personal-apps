---
authors: ["yingwang"]
categories:
  - Books
title: 'Book Review: "Design Patterns: Elements of Reusable Object-Oriented Software", by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides'
date: "2017-11-22T17:23:49-05:00"
draft: false
---

> **...this isn't a book to read once and put on a shelf. We hope you'll find yourself referring to it again and again for design insights and for inspiration.**
>
> From "Design Patterns: Elements of Reusable Object-Oriented Software" (Addison-Wesley, 1995, Page xi), by Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides

Since this week is Thanksgiving and I'll be out of town, I thought to make this book review today. Like how the quote says above, I definitely did not get all the value out of this book during my first pass, and I'll be referring to this book again (probably offline) as time goes by. Take this review as a preliminary one, one suited for a first pass.

- A solid understanding of C++ is required for understanding the examples. I found C++ syntax a little too convoluted, since I use only Python and JavaScript professionally and they are both high-level languages.
- Personally, I prefer more functional programming than design pattern abstraction, but I understand this book is about _object-oriented programming_, so it will not talk about Lisps or functional methods to manage state or behavior. This book is probably more relevant the lower the level of language you work with.
- I'm not sure if the nature of a compiled vs. interpreted language, the availability of standard/third-party libraries, etc. would impact what design decisions you would make. Python is interpreted and has an extremely rich library ecosystem, including `functools` and `collections`.

With that in mind, I will summarize and review each design pattern like a piece of sushi:

- **Abstract Factory:** Abstract class to subclass concrete Factories. I haven't needed to use this yet, and I feel the level of abstraction here is uncomfortably high. However, I could see how for the example given in the book (design a themed UI), an Abstract Factory at the top level would make sense. I was initially going to say make a Factory for each UI element you need to create, but then the Factories would all need to coordinate their themes at a higher level.

- **Builder:** Object to build another object, like Java's `StringBuilder` class. I haven't needed to use this yet, since in Python types are mostly mutable, and because I use a lot of composition in my objects.

- **Factory:** Object to create multiple _things_ with the same interface. I use this a lot and love it. On at least two occasions, I've used a Factory to return a method, which saved me from `if...elif...else` blocks nine layers deep. If your language is object-oriented at all, I think you will find this useful.

- **Prototype:** Make a _something_ by cloning a subclass. Honestly, right now I'm still quite confused about how this works and how it is different from an Abstract Class. I don't know where I would use this in my work and I don't plan on using this abstraction in the future (I'll circle back to it if somebody tells me to look into it or if I'm encountering a problem that my toolbelt doesn't currently satisfy). For the example they give, to add graphics of musical notes to a document, I would create an Abstract Class `MusicalNote` and subclass off of that for `FullRest` and `QuarterNote` or something like that.

- **Singleton:** Object that ensures only one of itself exists. I very rarely use this, and even then I'm not sure it's a _Single_-ton. For example, I think only one database connection should be needed by one application instance at a time. Other people who worked here apparently have too, which is why somebody made a `connect_mongo()` call that returns a `pymongo.database.Database` instance and ensures that it is only instantiated once. My agreement means I don't refactor it out of existence. Other than stuff like that, I don't think I've used this. I generally agree with the sentiment that Singletons are pretty much globals, and you should rely on globals as seldom as possible.

- **Adapter:** Two final interfaces need each other but don't match and can't be altered for some reason; this thing helps. I haven't used this because we don't have or use "immutable" interfaces we can't change, but I could see its usefulness. If you were working somewhere where you need a public API or a popular dependency and you don't like it or can't use it directly for some reason, you would bundle your code with an adapter to that interface and update that as needed.

- **Bridge:** An abstraction and an implementation need to vary independently; this thing helps. I haven't used this yet, but I can see it being used for more complex projects where there's an ideal way to do things and a messy way to do things. I would bet \$5 that React.js's Virtual DOM and the actual DOM use a Bridge during transpilation. \$5 is a lot of money to me.

- **Composite:** Treat a composition of things like everything else. I probably use this but don't remember where, so I guess it's common. Judging from the book's explanation, if you have at least one method that's the same and you're calling different stuff with that method from the same place and passing requests down more than one level, you've using a Composite.

- **Decorator:** Attach more functionality to a method. I use this and love this; Python has first-class support for decorators. We use it for cron jobs, validation, and testing (PyTest examples are covered with decorators).

- **Facade:** Present a unified interface to a subsystem from the outside. In Python, because there's no distinction between public and private and you can effectively import anything, anywhere, anytime, every top-level public API is effectively a Facade. So yes I have made a few.

- **Flyweight:** A bag of small objects. I haven't needed to use this yet. Given how the book states to use this if you can reduce a lot of extrinsic state to a very small shared state space and how that sounds a lot like _hey look a global_, I would be very careful when considering using this.

- **Proxy:** Accessing something actually accesses _something else_, which decides for you how you're going to access that something. I have definitely used this before, since we have different classes of users with different permissions, and we proxy method calls with decorators. I can't see how you _wouldn't_ use this in any kind of production-class codebase.

- **Chain of Responsibility:** Pass requests along a chain of objects and make them all responsible for that request. Either I haven't needed to use this yet, or I have used it and it's why I am in pain. I generally do not like long-chained requests; I like it when I ask something to do something, that something does it. You might even say that the web team lead in our satellite office, who punts his assigned tickets to his team members (some of them a week into the company), creates a _chain of responsibility_. I'm fine with passing input parameters down a method chain until it is requested, but having objects or methods request another object or method to do the task for them seems sketchy, and it breaks state encapsulation (how? _yes_).

- **Command:** Wrap requests as an object. I don't think I've used this before, and I think this may be an antipattern. I like to keep my requests simple. If you need to make multiple requests, _make_ multiple requests, don't bundle them up together and send it as one thing that is big enough to require an object. We all use Von Neumann machines anyways. Make it atomic or make it stateless.

- **Interpreter:** Pretty much every REPL you have ever used. I've built out a Lisp interpreter before. I think I will use a third-party package or a framework or something for this instead of building one out myself, unless I'm really awesome in the future.

- **Iterator:** Access elements sequentially without exposing all the elements at once. I think PyMongo `Cursor` objects are effectively this, with their `cursor.next()`. I like it, but I don't work on enough data where making my own Iterator would make sense right now.

- **Mediator:** You have multiple object types whose interfaces don't conform to each other, but somehow are tightly coupled? This thing helps. When I hear "Mediator", I think Syria and North Korea; if one is needed, you've already failed. I would prefer each object has its own Adapter, because it makes everything more composable than relying on a single, global Mediator.

- **Memento:** Take snapshots of the state of your object. As a more functional guy, **_holy fucking shit I can't believe this is a thing_**. I'm trying to get rid of state or make you not have to worry about it, and then you introduce this? And you want to bounce between different states? Why don't you pickle your application and cache it with a timestamp, you dotard? I was going to say this could be used like Slack's update last comment in channel, but even then I would prefer caching or something. If you had multiple problem paths...try recursive backtracking? I don't know why you would use this. This smells like a solid antipattern.

- **Observer:** You don't want to couple two things together, so tie them together at runtime. I think this is a really good idea under the right circumstances. I've used this for JavaScript event broadcasting, and event-driven APIs are pretty much this, but it's definitely higher up in the architecture and I don't think I would use this at an object level.

- **State:** Your internal state changed? Update your behavior. I don't like state machines. They can get out of control really fast. This is probably more for compiled languages that can't change their behavior at runtime. Yes, that was a slightly snarky comment.

- **Strategy:** A Factory for methods. I already described this above in Factory.

- **Template:** You contract out parts of your work as bids, or subclass out parts of your method with a Strategy. I have done this for one-offs, in top-level public API methods, but I wouldn't make multiple versions of this. If your method is so complex that you need to subclass out parts of it, break up that method.

- **Visitor:** You want to call methods on multiple objects but don't want to define them? Define them in a Visitor. I'm not sure where I would use this right now, but I have write access to our entire codebase and I'm trusted to add methods to objects where needed. If you wanted to traverse a tree data structure and retrieve information from each node you visit, this would be an application of a Visitor data structure.

:sushi:

**(Correction on 2017/11/22)**: After talking with a friend, changed "Abstract Factory creates concrete Factories" to "Abstract Factory to subclass concrete Factories".

**(Correction on 2017/11/27)**: After talking with a friend, added a use case for the Visitor design pattern.
