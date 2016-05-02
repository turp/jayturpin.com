---
layout: post
title: "Aurelia From Scratch"
categories: [web frameworks, aurelia]
---

[Rob Eisenberg](http://eisenbergeffect.bluespire.com/) first showed up on my radar in 2010 when he presented at the MIX conference. His presentation, [Build Your Own MVVM Framework in 500 Lines](http://channel9.msdn.com/Events/MIX/MIX10/EX15) blew me away. 

You see, at the time, Silverlight was the hot new technology and average developers, like me, struggled to understand all the intricacies of data binding and commands. Rob, without a lot of flash, demonstrated how to get rid of a ton a boilerplate code and simplify wiring up the view model to the view.

From those humble beginnings, Rob expanded on his framework to create [Caliburn.Micro](http://caliburnmicro.com/). In his words, "A small, yet powerful framework, designed for building applications across all XAML platforms". 

Fast-forward a couple years, and Rob turned his attention to Javascript and created [Durandal](http://durandaljs.com/). This lightweight framework brought many of application design concepts to the wild world of Javascript development. It provided strong support for MVC, MVP and MVVM. It is still an excellent framework if you need to use legacy browsers.

In 2014, Rob [joined](http://eisenbergeffect.bluespire.com/angular-and-durandal-converge/) the [Angular](http://aurelia.io) team to contribute to the design and development of Angular 2.0. But after 6 months, [Rob left the effort](http://eisenbergeffect.bluespire.com/leaving-angular/) and began work on the Durandel's successor, [Aurelia](http://aurelia.io)

> Aurelia is a next gen JS client framework that leverages simple conventions to empower your creativity. Built for modern browsers, it enables a forward-thinking, elegant approach to development.

# Creating a (super) Basic Aurelia App from Scratch

Create a new directory and open a command prompt. First, lets initialize our node package.json file:

	npm init

Just accept all of the defaults. Now we'll install the [jspm](http://jspm.io/). jspm is a package manager for the SystemJS universal module loader, built on top of the dynamic ES6 module loader

	npm install jspm --save-dev

> Note: Depending upon the windows environment I run this command on, sometimes this fails. For instance, on my laptop, I had to run the following commands first inorder to to get it to work properly

	npm install babel-register --save-dev
	npm install babel --save-dev

Now setup jspm:

	jspm init

	Would you like jspm to prefix the jspm package.json properties under jspm? [yes]
	Enter server baseURL (public folder path) [./]:
	Enter jspm packages folder [.\jspm_packages]:
	Enter config file path [.\config.js]:
	Configuration file config.js doesn't exist, create it? [yes]:
	Enter client baseURL (public folder URL) [/]:
	Do you wish to use a transpiler? [yes]:
	Which ES6 transpiler would you like to use, Babel, TypeScript or Traceur? [babel]:typescript
 
The default transpiler is [Babel](https://babeljs.io/), but I prefer [Typescript](http://typescriptlang.org)

> Note: If you encounter errors running jspm *and* you are behind a firewall, you are probably missing the HTTP\_PROXY environment variable. On windows, try running SET HTTP\_PROXY={YOUR PROXY SERVER} (Example: SET HTTP\_PROXY=http://proxy.mycompany.com:8080)
    
Now pull in Aurelia:

	jspm install aurelia-framework
	jspm install aurelia-bootstrapper
	jspm install jquery
	jspm install toastr

If you're interested in what just happened, take a peak in the config.js file. When "jspm install" is run, it looks in the global [jspm registry](https://github.com/jspm/registry/blob/master/registry.json) to determine where the library and its dependencies are located. Most popular javascript libraries are already registered there. 

If a library is not listed in that registry, you can still install it. For instance, even though [pace](https://github.com/HubSpot/PACE) is a handy library to automatically add a progress bars to your web application. If you want to install it using jspm, you can reference it's GitHub repository:

	jspm install pace=github:HubSpot/PACE

or it's npm package

	jspm install pace=npm:pace

Either way will work. pace= is the alias or nickname you give the library, so it can be whatever you want. 

Finally, let's create a simple webpage that will load up all of the javascript libraries using [SystemJS](https://github.com/systemjs/systemjs)

	<!DOCTYPE html>
	<html>
	    <head>
	        <meta charset="utf-8">
	        <title>My First Aurelia App</title>
	        <link rel="stylesheet" href="jspm_packages/npm/toastr@2.1.2/package/toastr.css" media="screen" title="no title" charset="utf-8">
	    </head>
	    <body>
	        <script src="jspm_packages/system.js" charset="utf-8"></script>
	        <script src="config.js" charset="utf-8"></script>
	        <script type="text/javascript">
	            System.import("toastr").then(function(toastr){
	                toastr.success("Loaded with System");
	            });
	        </script>
	    </body>
	</html>

We're almost there. Now we need some way to serve up our website. We will use the excellent [BrowserSync](https://www.browsersync.io/) which will act as web server and automatically refresh the page whenever changes as made to the underlying files

	npm install browser-sync --save-dev

And the scripts section in your package.json with:
	
	"scripts": {
		"serve": "browser-sync start --server --files *.*"
	},

Now let's see if it works

	npm run serve

If everything is setup properly, your browser should be opened to [http://localhost:3000/](http://localhost:3000/) and you should briefly see a green "Loaded with System" notification pop up for a couple seconds.

# Typescript

Now let's add a [Typescript](http://typescriptlang.org) 

First, add a Typescript configuration file, tsconfig.json:

	{
	  "compilerOptions": {
	    "target": "es5",
	    "module": "system",
	    "moduleResolution": "node",
	    "sourceMap": true,
	    "emitDecoratorMetadata": true,
	    "experimentalDecorators": true,
	    "removeComments": false,
	    "noImplicitAny": false
	  },
	  "exclude": [
	    "node_modules",
	    "jspm_packages",
	    "typings/main",
	    "typings/main.d.ts"
	  ]
	}

Now, let's update our tooling:

	npm install concurrently --save-dev

And replace the scripts section in package.json with:
	
	"scripts": {
		"start": "tsc && concurrently \"npm run tsc:w\" \"npm run serve\" ",
		"postinstall": "typings install",
		"serve": "browser-sync start --server --files *.*",
		"tsc": "tsc",
		"tsc:w": "tsc -w",
		"typings": "typings"
	},

Now, let's add a view model and template to the application. First, add a view model called app.ts:

	import * as toastr from "toastr";
	
	export class App {
	  public title: string = "";
	  public message: string = "";
	
	  constructor() { }
	
	  submit() {
	    if (!this.title && !this.message) {
	      toastr.error("Please fill in the form!", "error");
	    }
	    else {
	      toastr.success(this.message, this.title);
	    }
	  }
	}

Since your browser can't directly interpret Typescript, you have to transpile it into javascript:

	npm run tsc

At first, you'll get some errors because it doesn't know what toastr is. We need to install the type definition files.

First install the [Typescript Definition Manager](https://github.com/typings/typings) globally:

	npm install typings -g

Now, install the type definition files for toastr and jquery:

	typings install toastr --ambient --save
	typings install jquery --ambient --save

> Note: If you're behind a firewall, you will need to create a .typingsrc file to register the proxy server so this command will work. It will look a lot like your .npmrc file 

	proxy=http://proxy.mycompany.com:8080

Now try it again

	npm run tsc

and you should see app.js generated 

In Aurelia, every view model needs a corresponding template file, so let's create app.html:

	<template>
		<form submit.delegate="submit()">
			<input type="text" value.bind="title" placeholder="Enter title" />
			<input type="text" value.bind="message" placeholder="Enter message" />
			<button type="submit">Show toastr</button>	
		</form>
	</template>

Finally, update the index.html file to bootstrap the Aurelia application. Replace the body element with this:

    <body aurelia-app>
        <script src="jspm_packages/system.js" charset="utf-8"></script>
        <script src="config.js" charset="utf-8"></script>
        <script type="text/javascript">
            System.import("aurelia-bootstrapper");
        </script>
    </body>

Now spin up browser-sync again using your brand new NPM script:

	npm run start

This command compiles all of your typescript files, watching them and recompiling them when you make changes and concurrently, starts up browser-sync.

You should now see a page with two text boxes, allowing you to specify the title and message you want to display in a toast.

If you want to see browser-sync in action, add a header to  the app.html and save the file.

	<template>
		<h1>Toastr Message Generator</h1>
		<form submit.delegate="submit()">
			<input type="text" value.bind="title" placeholder="Enter title" />
			<input type="text" value.bind="message" placeholder="Enter message" />
			<button type="submit">Show toastr</button>
		</form>
	</template>


And the browser will automatically refresh.

# Summary

Even though Aurelia offers a comprehensive set of [skeleton projects](http://aurelia.io/docs.html#/aurelia/framework/1.0.0-beta.1.2.2/doc/article/getting-started) to kick start your development efforts, I find it useful to walk through the steps myself so I can gain a better understanding of how everything works together. Hopefully, you found this article useful.

Source code for this article can be found on [Github](https://github.com/turp/aurelia_from_scratch). 
# Acknowledgments
 
Thanks to [Florian Verdonck](http://nojaf.com/2015/07/08/using-toastr-with-aurelia/) for a great article that helped me put a lot of these pieces together! 