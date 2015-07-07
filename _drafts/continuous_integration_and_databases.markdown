---
layout: post
title: "Continuous Integration and Databases"
categories: [ci, continuous integration, agile]
---
As we all know, continuous integration is a core technical practice for agile teams. The techniques for creating a build script to compile your application, execute tests and deploy code for customers to validate and use are well documented. But how about the database? Many teams deploy their database changes by hand, leading to unforeseen bugs in production and slow deployments requiring lots of human involvement.

Many people think databases are difficult to change. Not only do you have stored procedures, functions  and views to contend with, but you also need to ensure you don’t delete important customer data. This fear of losing data has developed a culture where the database design is developed (and frozen) early is the development cycle. Humans (often known as DBAs) are used to manage all of the changes to the database. Changes can cause data loss, so they are performed as seldom as possible. 

But there is an alternative. By scripting all of the database changes and storing them in source code control, a team can deploy database changes in an incremental manner. Application and database code can be developed in tandem and evolve as more  is learned about the business domain. 

##Traditionally...
... we are taught that databases are difficult to change. Users have important information that they'd rather not lose. So, many teams put a lot of effort into the database design, often spending weeks or months until it is just right. Then it is frozen, because any change is viewed as difficult, and disruptive, and dangerous.

Databases are also viewed as fast because these servers are usually pretty beefy - lots of RAM and processors. So whenever you need to anything with data, you put the logic on the server, in views, functions and stored procedures.

Many teams also tend to make heavy use of GUI tools to make database changes. So they will keep updating a test database and then compare the the schema to the schema in the production server to figure out what needs to be changed. This usually works OK, except when it doesn't.

Lots of human involvement

## This Leads To F.U.D.
Fear. Uncertainty. Doubt.

* **Fear** that if we change the database, something will break
* **Uncertain** if making changes in one place will affect the logic somewhere else
* **Doubt** that all the changes made during development will move to production

Because databases are viewed as things that shouldn't be changed, most teams structure their activities to adjust to this perception. They jump through hoops to reduce the number of changes to the database. Instead they implement complex and convoluted logic in the middle-tier and client to workaround issues with the database design.

> “Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.” - Yoda

## Practice Makes Perfect

What is the most important part of any software project?

> Deployment.

What is the least practiced part of any software project?

> You guessed it, deployment.

Because teams are afraid to change the database, they never practice actually changing the database. When they do have to change the schema, they worry and fret, schedule a lot of downtime for the application and then spend all day applying changes. Since they do this so seldom, there is almost always some mistake that just reinforces their belief that databases are difficult to change.

## Agile teams do it differently

### Script Everything

Every database object (stored procedures, view, functions, triggers) are stored in source code control. This makes it easy to see the change history for every object. Additionally, scripts designed to only be run one time (adding or removing tables, columns and indexes, migrating data from one table to another, or adding reference/lookup data) are also stored here.

### Automate Deployment

Every step of the deployment process can be automated. Using common scripting languages like Powershell, Ruby or Python, you can backup and restore databases and executing SQL commands in any order you choose. This is called a build, or deployment, script.

### Practice

To ensure your script works, you have to run it. Many times. Often may times per day. Agile teams will normally trigger this script to run every time they commit a change to source code control. This will catch problems early, usually minutes after a changes have been made. 

By the time teams deploy database changes to production, they have high confidence in their scripts because they have run them hundreds of time in other environments.
 
## Roll-Your-Own Deployment Process
The steps to migrate a database are pretty straightforward:

* Start with a backup of your production database schema
* Create SQL scripts for all stored procedures, view, functions and triggers. Store them in source code control.
* Create your build/deployment script
  * Get the current version of the schema
  * Execute all of your one-time schema migration scripts


### Production Database Schema

Let's assume you have a database that's already in production. 

* Schedule a nightly backup of the database to a *well known location*. This will allow your build script to restore the database to another server to validate your database scripts work properly
* If your database is too large, or it contains sensitive data that can't be deployed to other servers, create a smaller/sanitized version of the database and create a backup file.

> Summary: the backup exists with a file name and path accessible by your build script; and the database schema matches what is currently in production.

### Database Scripts

Create SQL scripts for all stored procedures, view, functions and triggers. Store them in source code control with the rest of your application code. I recommend a folder structure something like this:

![Folder Structure](/images/continuous_integration_and_databases/folder_structure.jpg)

In this case, you have a folder called **db** that contains folder for each one of your databases. The Northwind folder contains a folder for Procedures, Views, Functions and Triggers. Each of these folders will contain the script files for each of your database objects. For instance, the Procedures folder looks like this:

![Procedures](/images/continuous_integration_and_databases/procedures.jpg)

Resist the temptation to put all of your scripts into a single file. When you are troubleshooting a bug in production for something that has been working fine for the last six months, being able to quickly see which database objects have been changed during the last release is really helpful.

The contents of each of these files is standard SQL. I personally like to have lots of print statements to help me troubleshoot a deployment issues, but feel free to use as many or as few as you like.
 
    IF OBJECT_ID('dbo.CustOrderHist') IS NOT NULL
	BEGIN
		DROP PROCEDURE dbo.CustOrderHist
		IF OBJECT_ID('dbo.CustOrderHist') IS NOT NULL
			PRINT '<<< FAILED DROPPING PROCEDURE dbo.CustOrderHist >>>'
		ELSE
			PRINT '<<< DROPPED PROCEDURE dbo.CustOrderHist >>>'
	END
	go
	CREATE PROCEDURE CustOrderHist @CustomerID nchar(5)
	AS
		SELECT ProductName, Total=SUM(Quantity)
		FROM Products P, [Order Details] OD, Orders O, Customers C
		WHERE C.CustomerID = @CustomerID
		AND C.CustomerID = O.CustomerID AND O.OrderID = OD.OrderID AND OD.ProductID = P.ProductID
		GROUP BY ProductName
	go
	GRANT EXECUTE ON dbo.CustOrderHist TO [public]
	go
	IF OBJECT_ID('dbo.CustOrderHist') IS NOT NULL
		PRINT '<<< CREATED PROCEDURE dbo.CustOrderHist >>>'
	ELSE
		PRINT '<<< FAILED CREATING PROCEDURE dbo.CustOrderHist >>>'
	go

Since these scripts will be run every time you deploy, it's important that they are able to run whether the object already exists in the database or not.

> Why are these scripts run every time? 
> 
> Short answer: To make sure every thing in the database is in source code control.
> 
> Long Answer: You ever go into a database and see procedures that haven't been touched for 5 years? Do you really think all of them still work? I hate that! 

### Migration Scripts

You'll notice there's another folder called **Migrations**. This folder contains all of the scripts responsible for altering the production database structure. to what is needed to support the next release of the application.
Contains all the structural changes to the database:
Adding, deleting and modifying tables, constraints, indexes
Data migrations
Inserting table data that is needed by the application (configuration data, etc.)


#### More Reading
* [Continuous Integration on a Dollar-a-Day](http://jamesshore.com/Blog/Continuous-Integration-on-a-Dollar-a-Day.html) - James Shore 
* [Evolutionary Database Design](http://martinfowler.com/articles/evodb.html) - Martin Folwer and Pramod Sadalage 

Results
These techniques have been used on dozens of projects over the past ten years. After running literally thousands of database deployments over the years, the process has been refined to produce reliable database deployments each and every day.
