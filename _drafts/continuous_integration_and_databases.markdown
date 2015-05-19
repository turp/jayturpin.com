---
layout: post
title: "Continuous Integration and Databases"
categories: [ci, continuous integration, agile]
---
As we all know, continuous integration is a core technical practice for agile teams. The techniques for creating a build script to compile your application, execute tests and deploy code for customers to validate and use. But how about the database? Many teams deploy their database changes by hand, leading to unforeseen bugs in production and slow deployments requiring lots of human involvement.

Many people think databases are difficult to change. Not only do you have stored procedures, functions  and views to contend with, but you also need to ensure you don’t delete important customer data. This fear of losing data has developed a culture where the database design is developed (and frozen) early is the development cycle. Humans (often known as DBAs) are used to manage all of the changes to the database. Changes can cause data loss, so they are performed as seldom as possible. 

But there is an alternative. By scripting all of the database changes and storing them in source code control, a team can deploy database changes in an incremental manner. Application and database code can be developed in tandem and evolve as more  is learned about the business domain. 

#### Traditionally...
... we are taught that databases are difficult to change. Users have important information that they'd rather not lose. So, many teams put a lot of effort into the database design, often spending weeks or months until it is just right. Then it is frozen, because any change is viewed as difficult, and disruptive, and dangerous.

Databases are also viewed as fast because these servers are usually pretty beefy - lots of RAM and processors. So whenever you need to anything with data, you put the logic on the server, in views, functions and stored procedures.

Many teams also tend to make heavy use of GUI tools to make database changes. So they will keep updating a test database and then compare the the schema to the schema in the production server to figure out what needs to be changed. This usually works OK, except when it doesn't.

Lots of human involvement

#### This Leads To
Fear. Uncertainty. Doubt.

Because databases are viewed as things that shouldn't be changed, most teams structure their activities to adjust to this reality. They jump through hoops to mitigate 
#### Roll-Your-Own Migration Process
The steps to migrate a database are pretty straightforward:

* Start with a copy of production database schema
* Get the current version of the schema
* 

#### More Reading
* [Continuous Integration on a Dollar-a-Day](http://jamesshore.com/Blog/Continuous-Integration-on-a-Dollar-a-Day.html) - James Shore 
* [Evolutionary Database Design](http://martinfowler.com/articles/evodb.html) - Martin Folwer and Pramod Sadalage 

Results
These techniques have been used on dozens of projects over the past ten years. After running literally thousands of database deployments over the years, the process has been refined to produce reliable database deployments each and every day.
