---
authors: ["yingwang"]
categories:
  - Software
title: "Please, not mongoDB (or NoSQL)"
date: "2017-05-04T23:26:36-04:00"
draft: false
---
Over the past month, I have discovered that there are three very good reasons why not to use mongoDB (or really, any other type of NoSQL backing):

- Data replication
- Your schema is defined in a codebase-specific language
- Migrating to SQL

1. **Data replication**

    Let's say you have two MongoEngine (mongoDB ORM for Python) documents, and you need to reference one document as part of another document. In SQL, this would be handled by adding a pointer. In NoSQL, you build out the entire document as part of another document and the ORM maintains consistency. This might not be a problem if you have a small handful of documents.

    Now what if you have (Order) --> (Job) --> (Shipment) --> (Parts)?

    Great. Now you have to build out each tree in memory. For every single Order instance, for every single Job instance, and for every single Shipment instance. You can imagine how the memory and computational strains will increase exponentially (as your tree increases in depth).

    Now, you have to choose. Stick with mongoDB, and watch as your application slowly collapses (heaven forbid people actually USE your application! That poor EC2 instance!), or avoid cross-referencing fields between your documents (kiss that company growth goodbye).

2. **Schema definitions**

    Let's say you build out your application in Ruby on Rails. Yay Ruby! It's fast and gets the job done, and you have a lot of people using your application. You built out your mongoDB backend using a Rails-specific mongoDB ORM. Now your application grows and as it turns out, Rails doesn't fit your needs anymore, so you want to move to Django, or another more enterprise-friendly backend framework.

    But your schema definition is in Rails.

    To put this in perspective, here's a SQL schema file that I built out for a small application:

    ```sql
    CREATE TABLE tile (
        ID SERIAL PRIMARY KEY,
        notes VARCHAR,
        itinerary DATE[]
    );

    CREATE TABLE photos (
        ID SERIAL PRIMARY KEY,
        tileID INT NOT NULL,
        url VARCHAR NOT NULL
    );

    CREATE TABLE finances (
        ID SERIAL PRIMARY KEY,
        tileID INT NOT NULL,
        categoryName VARCHAR DEFAULT NULL,
        amountInCents INT DEFAULT NULL
    );
    ```

    and here's something similar in MongoEngine:

    ```python
    from datetime import datetime
    import mongoengine

    class Tile(Document):
        id = IntField(required=True)
        notes = StringField(default="")
        last_name = DateTimeField(default=datetime.now())

    class Photos(Document):
        id = IntField(required=True)
        tileID = IntField(required=True)
        url = StringField(default="")

    class Finances(Document):
        id = IntField(required=True)
        tileID = IntField(required=True)
        categoryName = StringField(default=None)
        amountInCents = IntField(default=None)
    ```
    See how your "schema definition" is in **Python?**

    If you defined your schema in MongoEngine, migrating your codebase would entail migrating your database schema as well. This should concern you.

    Heck, SQL has been around for 50 years. Python, maybe the last ten? Do you really want to build a company that can stand the test of time by relying on schemas written in languages that may or may not be here / used in 50 years?

3. Migrating

    Now, let's say I somehow scared you enough to consider moving to a relational database. Here's the funny part.

    *There's no easy way to migrate.*

    I know right??! What do you do with empty fields? In mongoDB, you know that a field isn't filled out because *it's not there.* Do you handle that case in SQL with NULL? What about a default value? *How do you rewrite your application logic in order to use pointers to tables instead of looking for documents or objects?*

    Prepare to write migration scripts. Lots of migration scripts. Better test those beforehand to make sure you're not corrupting anything or writing to the wrong place. Also keep your company alive while you move user data in production.

These are issues that I have encountered at work so far (1. HTTP 504 Gateway Timeouts because my **2015 Macbook Pro** and an **EC2.x_large** could not handle that much in-memory computation, 2. Need to add another layer of abstraction **on top of our ORM abstraction layer**, 3. Too costly to move to SQL given all the feature requests we're getting because of growth, so we're stuck with mongoDB.)

**JSON is for REST. Not persistence.**
