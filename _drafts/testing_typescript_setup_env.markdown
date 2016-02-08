---
layout: post
title: "Testing Typescript: Setting up the environment"
categories: [testing, typescript, agile]
---
THis is part of a series of posts about testing Javascript/Typescript. Check out the start of the series at [Testing Typescript](testing_typescript.html).

# Setting Up Your Environment

We are planning to use a mix of tools to test our code. Even though we spend most of our days in Visual Studio, we're not hesitant to jump out to the command prompt to run our tests.

## NodeJs

[Node.js®](https://nodejs.org/) is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run scripts written in Javascript from the command line. It is used around the world for everything from hosting websites to running build scripts. It comes with a package manager, called npm, that gives the developer access to a huge collection of open source libraries that can be integrated into your project.

Install Node.js® from [here](https://nodejs.org/) 
 
Open command prompt and type

	npm -v
you should see a version number like v4.0.0

If you see an error, open Control Panel->System and Security->System->Advanced System Settings and click on Environmental Variables. Add "C:\Users\YOUR_USER_NAME\AppData\Roaming\npm" to the end of the SYSTEM PATH variable.
	
Now you need to configure node to be able to get outside the firewwall. Type the following commands:

	npm config set proxy http://proxy-chain.intel.com:911
	npm config set https-proxy http://proxy-chain.intel.com:911

## Karma 

[Karma](http://karma-runner.github.io/0.13/index.html) is a test runner. It allows you to run all of your Javascript tests from the command line.

	npm install karma-cli -g

## Bower

[Bower](http://bower.io/) is a package manager for websites. It will allow you to install all of the libraries, like JQuery, Angular and momentjs, you need to get your website running.

	npm install bower -g
	
# Setup you first project - HotTowel

Install Yeoman 

    npm install -g yo

Install these NPM packages globally

    npm install -g bower gulp nodemon

Install generator-hottowel

    npm install -g generator-hottowel

Create a new folder and change directory to it

	mkdir myapp
	cd myapp

Create an application by running the generator (yo hottowel [appName])

	# to allow bower to properly access code outside of Intel firewall
	set http_proxy=http://proxy-chain.intel.com:911
	yo hottowel helloWorld

Running HotTowel

Tests

Run the unit tests using 

	gulp test (via karma, mocha, sinon).

Running in dev mode

	gulp serve-dev

opens it in a browser and updates the browser with any files changes.

Building the project

Build the optimized project using gulp build
This create the optimized code for the project and puts it in the build folder
Running the optimized code

Run the optimize project from the build folder with gulp serve-build

Install Karma:

	npm install karma --save-dev

Install karma jasmine test framework and runners:

	npm install karma-jasmine karma-chrome-launcher karma-phantomjs-launcher --save-dev
