---
layout: post
title: "My Git Cheatsheet"
categories: [git, development]
---

# My Git Cheatsheet

I collected tips and tricks for using [Git](https://git-scm.com/) and [Github](https://github.com) from many places over the years. This is my attempt to consolidate some of this knowledge into a single spot. I am primarily a Windows user, so some of the file paths may be different in your environment.

## .gitconfig file

Add the following lines to your **.gitconfig** (found in c:\users\your_idsid)


	[user]
	    name = Your Name
	    email = your.name@intel.com
	[credential]
	[http]
	    proxy = http://your-proxy.company.com:8080
	[https]
	    proxy = http://your-proxy.company.com:8080
	[push]
	    default = simple
	[url "https://"]   
    	    insteadOf = git://
	
	[alias]
	    co = checkout
	    ec = config --global -e
	    up = !git pull --rebase --prune $@ && git submodule update --init --recursive
	    cob = checkout -b
	    cm = !git add -A && git commit -m
	    save = !git add -A && git commit -m 'SAVEPOINT'
	    wip = !git add -u && git commit -m "WIP" 
	    undo = reset HEAD~1 --mixed
	    amend = commit -a --amend
		nuke = !git reset --hard && git clean -fdx
	    wipe = !git add -A && git commit -qm 'WIPE SAVEPOINT' && git reset HEAD~1 --hard && git clean -fd
	    bclean = "!f() { git branch --merged ${1-master} | grep -v " ${1-master}$" | xargs -r git branch -d; }; f"
	    bdone = "!f() { git checkout ${1-master} && git up && git bclean ${1-master}; }; f"
		squash = !git checkout master && git merge --no-ff --no-commit

## Windows Clients
First, install [Git For Windows](https://git-for-windows.github.io/)). This provides you with the basic command line tools needed to interact with Git and Github.

My GUI client of choice is [TortoiseGit](https://tortoisegit.org/). This open source client integrates directly into File Explorer and provides an intuitive set of tools to do just about everything you need to do with Git.

There are other good clients available too: [Atlassian Sourcetree](https://www.sourcetreeapp.com/) and [Github for Windows](https://desktop.github.com/) are both quality clients for interacting with Git repositories.

## Command Line

But for raw speed, sometimes the command line is best. Navigate to a local directory where you want to store you repositories and open a command prompt.

### Clone

The first time you work on a project, you will need to [clone](http://git-scm.com/docs/git-clone), or download, the repository to your machine. 

Get the URL for the repo (you can find it on the main page of any github project) - it will look something like this: [https://github.com/jquery/jquery.git](https://github.com/jquery/jquery). Now, execute the following command:

    git clone url_for_git_repo

### Checkout

Before creating a new branch or continuing work on master, make sure that your working directory is up to date with the server (origin). First run [pull](http://git-scm.com/docs/git-pull):

    git pull --rebase --prune

This pulls changes from the server. If there are any local commits, it'll rebase them to come after the commits that are on the remote server. The --prune option removes remote-tracking branches that no longer exist on the remote.

    git submodule update --init --recursive

This command will update any [submodules](http://git-scm.com/docs/git-submodule) (links to other git repositories) referenced by the project.

You can execute both of these commands by simply running the alias (from your .gitignore file):

    git up

### Commit

Commit your work often. The more often you commit, the less likely you are to lose work and encounter merge conflicts.

To find out the [status](http://git-scm.com/docs/git-status) of your repository, type:

    git status

This will show all of the changes since your last commit.

Now mark any new files to be added into the repo by using the [add](http://git-scm.com/docs/git-add) command:
 
	git add -A

Now you commit the changes to your *local repository*:

    git commit -m "PUT YOUR COMMENT HERE"

You must specify a comment.

This activity is performed so often, you should use the following alias:

	git cm "PUT YOUR COMMENT HERE"

### Push

First, create a branch

    git branch NAME_OF_BRANCH
    git co NAME_OF_BRANCH
    
When you are ready to push to central repository the first time, execute this command:

    git push --set-upstream origin NAME_OF_BRANCH
    
In the future, you can just perform a normal

    git push
    
If you want to pull down the branch that your coworker just pushed to the server, execute:

    git co --track origin/NAME_OF_BRANCH

### Merge a branch

**The Goal:** Get a list of all files changed in a feature branch and compare each one’s initial state against its final state, without any noise from merges from master.

**The Approach:** Pretend I’m going to [merge](http://git-scm.com/docs/git-merge) the feature into master but don’t commit it. Diff the pending changes and send my recommendations. Then throw away the changes and clean everything up.

    git checkout master
    git merge ‑‑no‑ff ‑‑no‑commit name_of_branch

The **‑‑no‑ff** (No-fast-forward) flag makes the feature join into master with a single, explicit merge commit. This tells git, even if it could perform a fast-forward merge, where it applies each of the feature-branch commits as if they had been committed straight to master, please don’t. The ‑‑no‑ff option provides a single, show-me-everything commit. 

The second flag, **‑‑no‑commit**, is even more important: Stage them but don’t commit them. 

You can also use the alias

	git squash name_of_branch

Tackle and merge conflicts and use your favorite diff tool to inspect the changes. 

If you choose to accept the changes into master, perform a commit

	git cm "Added cool new feature"

If you decide it needs more work, you'll want to clean up your working directory. Here are the commands to discard the changes.

	git reset ‑‑hard
	git clean ‑fdx

This will blow away everything not under source control (nuget and npm packages, bin obj, etc)

You can also use the alias:

	git nuke

### Delete branch

	git branch -D branch_name
	git push origin --delete branch_name


## Submitting a Pull Request

There is a really good article about using forks and pulls requests to contribute changes to a project at [Using the Fork-and-Branch Git Workflow](http://blog.scottlowe.org/2015/01/27/using-fork-branch-git-workflow) 

If you want to get right to it, follow these steps:

Go to a [Github](https://github.com/{owner}/{repository}) and fork the repository to your personal account

Clone the repository to your desktop:

    git clone https://github.com/{your_account}/{repository}.git

You will already have a remote link to your Github repository, but it is also handy to create a link to the repository you created the fork from. We will call this ***upstream*** (Note: this is a one-time activity. Unless you physically delete your local repository, you shouldn't have to do this again). For more details, see [this article](https://help.github.com/articles/configuring-a-remote-for-a-fork)  

    git remote add upstream https://github.com/{owner}/{repository}.git

Now create a feature branch to do your changes

    git checkout -b {feature_branch} {source_branch}

For example:

	git checkout -b MyFeatureBranch master

Now interact with your code as normal. Edit code, run tests, commit often. When you are ready to push changes up to your personal Github repo, you will need to set the default remote repo first. 

    git push --set-upstream origin MyFeatureBranch

After that, you can just push as normal:

    git push

> Try to keep the number of changes you are making restricted to the feature. It is difficult to read a pull request for changes made to dozens of files. 

### Create Pull Request

Go to your branch [https://github.com/{your_account}/{repository}](https://github.com/{your_account}/{repository}) and click the big green ***Compare & pull request*** button. Enter a Title and some comments and press ***Create pull request***. 

Now the conversation begins. Other team members can leave general comments or comment on a line of code. You can continue to commit changes to your branch and they will be automatically displayed in the pull request. Once the owner is satisfied with the change, they can merge the change into the main repo.
 
### Cleaning Up

Once your pull request has been merged, you can delete your branch. First delete the local branch

    git checkout master
    git branch <branchName> -D
    git push origin master

Then delete the remote branch:
    
    git push origin --delete <branchName>

### Sync your repo from UPSTREAM

Syncing your repo with GTD/MRA is pretty straightforward. For more details, see [this article](https://help.github.com/articles/syncing-a-fork)

    git fetch upstream

Check out your fork's local master branch.
    
    git checkout master

Merge the changes from upstream/master into your local master branch. This brings your fork's master branch into sync with the upstream repository, without losing your local changes. After merging, push the changes up to your repo.

    git merge upstream/master
	git push origin master

Now you are ready to start on another feature branch


## Migrate SVN Repository to Git

Based on this guide: http://www.troyhunt.com/2014/08/migrating-from-subversion-to-git-with.html

Basically:

Install ruby - [http://rubyinstaller.org/downloads](http://rubyinstaller.org/downloads) - you might have to add the c:\rubyXXX\bin folder to your PATH

    SET HTTP_PROXY=http://your-proxy.company.com:8080
	gem install svn2git

Setup folder to get ready for migration

    mkdir _code\github\your_repo
    cd _code\github\your_repo 

Kick off the Svn->Git migration (note: do not include /trunk):

	svn2git https://your-svn-server.company.com:8443/svn/your_repo 

While you wait for it to complete, go to [Github](https://github.com) and create a new repository for your project - do not add a readme or .gitignore file

Once svngit is complete, execute: 

	git remote add origin https://github.com/{owner}/{your_repository}.git
	git push


### Good Articles 

[http://haacked.com/archive/2014/07/28/github-flow-aliases/](http://haacked.com/archive/2014/07/28/github-flow-aliases/)

[http://lostechies.com/sharoncichelli/2014/08/15/reviewing-git-feature-branches-when-you-dont-have-pull-requests](http://lostechies.com/sharoncichelli/2014/08/15/reviewing-git-feature-branches-when-you-dont-have-pull-requests)

[http://sethrobertson.github.io/GitFixUm/fixup.html](http://sethrobertson.github.io/GitFixUm/fixup.html)

