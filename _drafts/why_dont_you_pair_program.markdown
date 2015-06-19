---
layout: post
title: "Why don't you pair program?"
categories: [pair programming, agile]
---

As an outspoken proponent of agile practices, I am astounded by the number of people who are completely unaware of pair programming. While agile development has been growing in popularity over the past 15 years, pair programming is seen as too hard, or inefficient, or disruptive to the project. That is wrong! 

For teams interested in becoming agile, pair programming is an enabling practice: it makes implementing all the other practices easier.

For teams interested in improving code quality, team cohesiveness, and increasing knowledge across the team, pair programming will help.

Basically, if you’re *not* pair programming, you’re just doing it wrong.

## On most teams...

...there is no opportunity to learn new skills. Single points of failure. Poor design. Poor quality. Ineffective code reviews. 

These are problems faced by software teams every day. 

Developers want to learn new skills. Managers want software delivered on time. Developers want to be able to go on vacation without being tied to Outlook. Managers want to prevent a project from being cratered when a developer leaves the company. 

## Pair programming is the answer

Over 15 years ago, Kent Beck introduced the concept of pair programming to the world in his seminal book Extreme Programming Explained: Embrace Change. He didn’t invent the practice (it has been around for decades), but he certainly did raise awareness of it among thousands of developers worldwide.
 
Beck defines pair programming as “All production code is written by two people looking at one machine, with one keyboard and one mouse.”

Simple, no?

Some people say “that is inefficient”. But as Martin Fowler once quipped, “that would be true if the hardest part of programming was typing.”

Practitioners have found that pair programming solves many problems:

* Verbalization - when you talk about a design or bug with someone, it highlights flaws in the logic that, for some reason, are obscured when merely thinking about the issue.
* Just-in-time code review – rather than waiting for days, weeks or even months for code to be reviewed by the rest of the team, another person is performing a review in real time, influencing the design a little bit at a time.
* Cross-training – rather than only one person owning an application or submodule, there is now at least two people who understand the logic. This reduces the risk for managers if an employee leaves the company, and allows employees to take vacation without worry.
* Knowledge sharing - when working closely together, developers learn from each other. Keyboard shortcuts, new tools, programming techniques and even new languages are learned on a daily basis.

## What don't we pair?

Over the years, I've dozens (hundreds?) of reasons of why people don't pair program. Even though the details differ, they tend to boil down down to the following:

### Pairing is inefficient

The common belief is you are dedicating two people to do the work that one person was doing. Twice the resources, same output.

But ask yourself: how many times in your career have you spent hours, or days, working on a task (whether it was developing a new feature or fixing a bug) and just couldn't quite get it working? And then, miraculously, you walk down the hall to talk to someone about the issue and the solution presents itself. Sometimes, they don't even have to speak; that act of verbalizing the problem is enough to allow you to look at it from a different angle and see the solution more clearly.

Pairing forces you to verbalize early. The pair discusses the design to solve a problem before they attempt to implement it. And then they keep discussing it while they implement, making course corrections as they go. 

* My team is not co-located
* Office layout doesn't support pairing
* Everyone has their own set of priorities, so if I asked someone to pair on my task, it takes them away from their priority
* Incompatible skill levels
* Incompatible personalities
* Management doesn't support pairing
* Pair programming doesn't work with our Rally/JIRA setup
* Budget is tight. We only have enough money for 4 developers, there is not enough money for 8.
* We only pair on complex items, not unit tests or bug fixes
* I'm going to slow my pair down



"One barrier is that the people I pair with are not nearby." 

"Pair programming doesn't work with our Rally/JIRA setup. You can only assign a story or task to one person"

"One keyboard and one mouse" requirement is pretty much impossible since our team is spread over 3 sites.  When we pair program it is almost always over Lync.  

When we are at the same site our work stations are not set up to work that close to each other; the ergonomics are just horrible.
 
I've never seen the value of "all production code" being pair programmed.  Our team pair programs for two main reasons: training/knowledge sharing and path finding.  Pair programming is very useful for spreading tribal knowledge around and for ramping up new team members.  Pairing up for difficult problems almost always gets those problem solved faster.  As a team we look for these opportunities during planning and make them part of the plan.  If SUM reveals that a story is in jeopardy pairing is a tool we often use to get back on track.
 
Pair programming effectiveness is very dependent on the individuals.  A few pairs can rock more together more than they can separately.  Other pairs are paralyzed together.  Most are somewhere in between.  With hiring and focal restrictions there are no tools to go shopping for "good pairs".  Teams have to make do with what they have.
 
Even though almost always like the end results, I personally I find pair programming stressful; some partners more than others.  I simply do not have the emotional energy to do that for a full day. Others have told me they feel similarly.
 
Pair programming was introduced in a team meeting after providing a theoretical background and some numbers from the industry. We started "by the book” : all production code written in pair, and discussed the experience in sprint retrospectives. Fairly quickly, the team noticed that ‘production code' requires a better definition. For example, unit tests are not part of the shipped code, but definitely and integral part of a backlog item delivery. The team felt that writing unit tests in pairs has no added value at all, mostly because majority of the code is simple.

Another example were it didn't work well is bug fixing. Debugging requires concentration and many times the fix is just a few lines of code.

The 3rd obstacle to this method is technical skills gap within the pair. When the gap is not too big - that's OK, otherwise it becomes more of a training session and it has velocity impact.
 
To make long story short, we do pair programming per need, on complex or sensitive tasks mostly where the value is highest. Design is done by the whole team anyway, code reviews and testing methodologies give us the right quality and confidence.

I would recommend to try pair programming and figure out what works for you and what doesn't. After all, agility encourages us to try things that has potential to improve and learn along the way.

"the budget tight. we only have enough money for 4 developers, there is not enough money for 8.

3.	insufficient skill resources for pair programing. 2 newbies for pair programming would make the code better. we replace with code review.

