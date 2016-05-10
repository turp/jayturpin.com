---
layout: post
title: "Aurelia, With Style"
categories: [web frameworks, aurelia]
---

Building upon the work done in my [previous article](http://jayturpin.com/archive/2016/04/30/aurelia_from_scratch), let's add [Bootstrap](http://getbootstrap.com/) to our application: 

	jspm install bootstrap

While we're at it, add the Typescript definition file too, just in case we want to programmatically display a modal or popover:
 
	typings install bootstrap --ambient --save

Now, update the the template, app.html:

	<template>
	  <require from="bootstrap/css/bootstrap.css"></require>
	  <require from="toastr/build/toastr.css"></require>
	  <div class="container">
	    <div class="row">
	      <div class="col-md-12">
	        <h1>Toastr Message Generator</h1>
	        <form submit.delegate="submit()" class="form-inline">
	          <div class="form-group">
	            <label>Title</label>
	            <input type="text" value.bind="title" class="form-control" placeholder="Enter title" />
	          </div>
	          <div class="form-group">
	            <label>Message</label>
	            <input type="text" value.bind="message" class="form-control" placeholder="Enter message" />
	          </div>
	          <button type="submit" class="btn btn-success">Show Toast</button>
	        </form>
	      </div>
	    </div>  
	  </div>
	</template>

Mainly, this is just some bootstrap styling around the previous markup. But, you will notice at the top of the template two lines:

	<require from="bootstrap/css/bootstrap.css"></require>
	<require from="toastr/build/toastr.css"></require>

The <require> element ensure that the styles are loaded as part of the view load process. When used in this way the CSS will be added to the head of the document. And, if you <require> the CSS file from multiple templates or components, it will only be added to the document once. 

That's it. Now you can use bootstrap to make your application look awesome!

![Toastr Generator with Bootstrap](/images/2016-05-07-with_bootstrap.png)

Source code for this article can be found [here](https://github.com/turp/aurelia_from_scratch/tree/bootstrap).
 
