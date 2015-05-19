---
layout: post
title: "Setting up a blog on Github"
categories: [blogging]
---

This is certainly not new, but it is new for me. So I wanted to make sure I recorded what I learned this weekend.

# Some Context

I was having lunch with a co-worker last week and he started talking about hosting websites on Github. I've been thinking about starting a blog over the past few months, but just haven't been able to decide on the right platform to host it on. I've played around with Weebly, Squarespace and even Ghost hosted on Azure, but none of quite met my desire for low cost, with the ability to easily talk about programming.

I remembered seeing an [article](http://haacked.com/archive/2013/12/02/dr-jekyll-and-mr-haack/) by Phil Haack some time ago talking about how he ported his blog to Github. To say that Phil inspired my site would be an understatement - I cloned his site and them started replacing images, links and posts to personalize it. Thanks Phil!

# Getting Started

The first thing I did was create a github project to host my site. I could have created a user page repository called [https://github.com/turp/turp.github.io](https://github.com/turp/turp.github.io), but since I was following Phil's lead, I created a project called [https://github.com/turp/jayturpin.com](https://github.com/turp/jayturpin.com) to host this blog. 

![Create Repository](/images/setting_up_blog_on_github/01-create-repo.jpg)

If you're interested, you can read more about the difference between user and project pages at [https://help.github.com/articles/user-organization-and-project-pages/](https://help.github.com/articles/user-organization-and-project-pages/).

To see something quickly, I let Github do some of the work for me. I clicked the Settings button and scrolled down to the Github Pages section and clicked the Automatic Page Generator

![Automatic Page Generator](/images/setting_up_blog_on_github/03-automatic-page-generator.jpg)

Then I entered the name of my site and selected a theme;

![Pick a Theme](/images/setting_up_blog_on_github/04-pick-theme.jpg)

And that's it. You'll see a new branch setup in your repo called gh-pages and see files that look something like this:

![Repository](/images/setting_up_blog_on_github/05-basic-site.jpg)

Point your browser to http://turp.github.io/jayturpin.com

# Jekyll 

Github Pages are created with [Jekyll](http://jekyllrb.com/), a Ruby application that converts [Markdown](http://daringfireball.net/projects/markdown/) script into HTML. It is blog-aware, so it understands permalinks, categories, pages and posts, making blogging pretty easy.

If you want to be able to run your site locally, while your fine tuning the layout, you will need to install a few things. Follow the instructions [here](https://help.github.com/articles/using-jekyll-with-pages/) to install Ruby, Bundler and Jekyll. I also recommend that you install [Python](https://www.python.org/downloads/) too, since Jekyll uses it to perform code highlighting.
  
