---
layout: post
title: "Developer Reading List"
date: 2015-05-26 -0700
comments: true
categories: [agile development]
---

Developers need to learn many things: how to write clean code; how to test; how to automate the build; the basics of design; the syntax and idiosyncrasies of language(s) they are working in. Many companies assume that college graduates already know most of this information. 

Robert C "Uncle Bob" Martin once compared software development to martial arts. He likened college grads to white or gold belt level. They know the basic kicks and punches, but still have a long way to go before they can be considered black belts. The only way to get to that level if through experience and learning from higher level practitioners.

With that end in mind, I've pulled together some of my favorite articles, books and videos that have helped me along my journey to becoming a better developer.

## Agile
* [Extreme Programming Explained, v.1](http://www.amazon.com/dp/0201616416) by Kent Beck - one of *the* most influential programming books of the past generation. Beck inspired me, and tens of thousands of developers to write tests, pair program, refactor and write better code. IMHO, this is the book the sparked the entire agile movement. 
* [The New Methodology](http://martinfowler.com/articles/newMethodology.html) by Martin Fowler - everything Fowler writes is gold. A great article describing agile development (mainly eXtreme Programming).  
* [All I Really Need to Know about Pair Programming I Learned In Kindergarten](https://collaboration.csc.ncsu.edu/laurie/Papers/Kindergarten.PDF) by Laurie Williams and Robert Kessler

## Embrace Your Craft
* [The Pragmatic Programmer](https://pragprog.com/the-pragmatic-programmer) by Dave Thomas and Andy Hunt - not a programming book, per se, but a book about *how* to be a developer. Outstanding book.
* [Clean Code](http://www.amazon.com/dp/0132350882) and [Clean Coder](http://www.amazon.com/dp/0137081073) by Robert C Martin - describes the what code should look like and how to write it yourself.  

## Practice Your Craft
* Take on ownership of your team's build process - learn the build process inside and out 
* Participate in an open source project of your choosing. Contribute one change by the end of the year (enhancement, bug fix, documentation) 
* Attend a one-day Code Retreat [http://coderetreat.org](http://coderetreat.org). Already attended a retreat? Facilitate one instead.


## OO Design Patterns/Principles
* [Agile Software Development](http://www.amazon.com/dp/0135974445) - Robert C Martin (aka Uncle Bob) – This book is misnamed. It’s really about some the principles of good object oriented design. It talks about the underlying concepts and principles that will allow you and your teammates determine if a design is good, or lacking. Read Chapters 1-12; There is also a version for [C#](http://www.amazon.com/dp/0131857258). Object Mentor,  also offers a [class](http://www.objectmentor.com/omTraining/course_ood_patterns.html) and Bob has a number of videos at [http://cleancoder.com](http://cleancoders.com).
* [Head First Design Patterns](http://www.amazon.com/dp/0596007124) - An entertaining and informative book that will walk you through the most common design patterns for an OO language.
* [Fail Fast](http://martinfowler.com/ieeeSoftware/failFast.pdf) -- Jim Shore - Great little article that helped me understand why I want my application to fail quickly.
* [Code as Design](http://www.developerdotstar.com/mag/articles/PDF/DevDotStar_Reeves_CodeAsDesign.pdf) - Jack Reeves – A precursor to the agile movement, the author does a great job of describing why code is the best way to represent the design. Junior and senior developers will find this paper to be enlightening.
* [Is Design Dead?](http://martinfowler.com/articles/designDead.html) - Martin Fowler - For many that come briefly into contact with Extreme Programming, it seems that XP calls for the death of software design. Not just is much design activity ridiculed as "Big Up Front Design", but such design techniques as the UML, flexible frameworks, and even patterns are de-emphasized or downright ignored. In fact XP involves a lot of design, but does it in a different way than established software processes. XP has rejuvenated the notion of evolutionary design with practices that allow evolution to become a viable design strategy. It also provides new challenges and skills as designers need to learn how to do a simple design, how to use refactoring to keep a design clean, and how to use patterns in an evolutionary style.
* [Refactoring](http://www.amazon.com/dp/0201485672) by Martin Folwer - pages 1-87 

## How to Test
* [Test Driven Development](http://www.amazon.com/dp/0321146530) - Kent Beck - The master teaches how to do TDD using Java and a small banking application
* [The Art of Unit Testing: With Examples in .Net](http://www.amazon.com/dp/1933988274) - Roy Osherove walks through unit testing is C#.
* [James Shore's Let Play Video Series](http://jamesshore.com/Blog/Lets-Play/) If you prefer learning via video, check out these 15-minute videos by James Shore. He records over 100 sessions of coding an application using TDD

## Continuous Integration/Automated Build
* [Continuous Integration](http://martinfowler.com/articles/continuousIntegration.html) - Martin Fowler - Continuous Integration is a software development practice where members of a team integrate their work frequently, usually multiple times a day - leading to multiple builds per day. Each integration is verified by an automated build (including test) to detect integration errors as quickly as possible. Many teams find that this approach leads to significantly reduced integration problems and allows a team to develop cohesive software more rapidly. This article is a quick overview of Continuous Integration summarizing the technique and its current usage.
* [Version Control By Example](http://www.ericsink.com/vcbe) - In this free book, Erik Sink covers all of the common source code control practices. If you're new to source code control, or need a refresher to bone up on the more advanced topics, check this out. 
* [Continuous Integration on a Dollar-a-Day](http://jamesshore.com/Blog/Continuous-Integration-on-a-Dollar-a-Day.html) - James Shore 
* [Evolutionary Database Design](http://martinfowler.com/articles/evodb.html) - Martin Folwer and Pramod Sadalage - Over the last few years we've developed a number of techniques that allow a database design to evolve as an application develops. This is a very important capability for agile methodologies. The techniques rely on applying continuous integration and automated refactoring to database development, together with a close collaboration between DBAs and application developers. The techniques work in both pre-production and released systems. 
* [CruiseControl.Net](http://ccnet.thoughtworks.com/) - CruiseControl is the one of the first continous integration servers in the .Net world. Originally ported from Java, CrusieControl.Net is responsible for kicking off the builds of literally tens of thousands software project around the world. It integrates with all the most popular source code control systems and is very flexible in how it notifies the team about broken builds 
* [Team City](http://www.jetbrains.com/teamcity/features/continuous_integration.html) - Another continuous integration server is TeamCity by Jetbrains (the makers of Resharper)

