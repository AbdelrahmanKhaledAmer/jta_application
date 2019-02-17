# JTA Application
*I will try, as much as I can, to format it as a tutorial so that it could be used later by someone trying to learn the MERN stack*
___
### Table of contents
1. [Description](#desc)
2. [User Stories](#users_stories)
3. [Features](#feats)
4. [Getting Started](#getting_started)
    - Installing Git
    - Installing Mongo
    - Installing Node
5. [Starting a Node Project and Initial Commit](#npm_init)
6. [Optional: GitHub Issues](#issues)
7. [Node Server](#server)
8. [Database](#db)
___
<a name ="desc"></a>

## Description

This is the application task that is required to become a junior teaching assisstant for the software engineering course in the GUC (2019).

The task requires us to make a MERN stack app that has the following features:

1. Users can sign up to the application to make their own accounts and log into the accounts they made at anytime.
2. Users should be able to make posts that get added to the page and view previous posts.

To keep the spirit of the SE course, I will transform the required features into user stories.
___
<a name ="user_stories"></a>

## User Stories

1. As a user I should be able to sign up by providing basic personal information.
2. As a user I should be able to log in to an account I already made.
3. As a user I should be able to create a post.
4. As a user I should be able to view all the old posts made to the page.

These user stories need to be split up into features that need to be implemented! Splitting the user stories to features helps with organizing the workload and backlog.
___
<a name="feats"></a>

## Features

Many people consider each individual user story to be a singular feature, but sometimes a user story is multiple features (sometimes it includes work that is exclusive to the backend that can't be made into a *user* story).

Let's consider each user story in order:

0. Initial setup.
    1. Start a basic server.
    2. Create a database connection.
1. As a user I should be able to sign up by providing basic personal information.
    1. Create a user model.
    2. Create backend procedure that handles user signup.
    3. Create a frontend interface that allows the user to input their required information for signup.
2. As a user I should be able to log in to an account I already made.
    1. Create backend procedure that handles user login.
    2. Create a frontend interface that allows the user to input their username and password to login.
3. As a user I should be able to create a post.
    1. Create a post model.
    2. Create backend procedure that handles posting.
    3. Create a frontend interface that allows the user to create a post.
4. As a user I should be able to view all the old posts made to the page.
    1. Create backend procedure that handles retrieving posts.
    2. Create a frontend interface that allows the user to view all posts.

These features don't need to executed in order, but they need to be executed based on dependencies. For example, the user procedures for signup and login can't be made without creating a user model.
___
<a name ="getting_started"></a>

## Getting Started

I'm currently on an Ubuntu18.04 OS. So the setup for all the following will be exactly the same if you're on the same OS. If not, then try Googling the module you're trying to install along with the OS you're using and you should be able to find the exact steps you need to follow. (Youtube might have some interesting tutorials too) 

### Installing Git
Git is a version control system that makes it easy to track changes in source code and create multiple working branches for large projects. You can read more about it in the wiki page [here](https://en.wikipedia.org/wiki/Git).

Open your teminal (Either through right clicking on your desktop and choosing the option **Open terminal** or through the shortcut `Ctrl+Alt+T`) and make sure all your apps are up to date. Type the following in your terminal and press enter.
```sh
$ sudo apt update
```
Then you should install git. Which is as easy as typing just that.
```sh
$ sudo apt install git
```
You can confirm that git was installed successfully by checking which version is currently on your PC.
```sh
$ git --version
```
The result should look like this:
![Git Version](https://i.ibb.co/qsDwC3R/git-version.png "Git version 2.17.1 installed correctly")

Now that git is installed, let's setup the GitHub username and email to configure it properly. (Otherwise you won't be able to use it)
```sh
$ git config --global user.name "User Name"
$ git config --global user.email "email@domain.com"
```

### Installing MongoDB

MongoDB is a NoSQL document-based database. You can read about NoSQL in its wiki page [here](https://en.wikipedia.org/wiki/NoSQL) or more about Mongo specifically [here](https://en.wikipedia.org/wiki/MongoDB).

All you need to install MongoDB on your pc is a single command.
```sh
$ sudo apt install mongodb
```
As soon as it is done installing, it will open a port and start listening to requests, so you can confirm that it was installed correctly by checking if the service is on.
```sh
$ sudo systemctl status mongodb
```
This should yield a result like the one shown below.

![MongoDB Status](https://i.ibb.co/bvbqLwT/mongo-status.png "MongoDB status")

### Installing Node

Node is the beackend development framework that let's you use JavaScript as a server side language.

For this step you'll need to install 2 things:

#### 1. Nodejs

This is the actual node module that provides the environment and basic tools on which your server will run.

Similar to how you installed Mongo and Git, all you need is a single command
```sh
$ sudo apt install nodejs
```
Follow that up with this command to check if node was installed correctly.
```sh
$ node -v
```
The result should look like this:
![Node Version](https://i.ibb.co/2jLBzt2/node-version-old.png "Node version")

#### 2. NPM

NPM (or Node Package Manager) is essential for using Node to its fullest potential. It provides extra modules that will make our lives a million times easier while developing. (Like Express, Mongoose, bcrypt and other modules that we'll use later).

To install that you will also need only one command
```sh
$ sudo apt install npm
```
And, again, check if it was installed correctly by printing the installed version's number
```sh
$ npm -v
```
And the result should look like this:
![NPM Version](https://i.ibb.co/MDyZyDr/npm-version.png "NPM version")
___
<a name ="npm_init"></a>

## Starting a Node Project and Initial Commit

We're now finally ready to get started on our project!

First thing we need to do is create a directory that will hold our project. What you can do is create a folder anywhere you want, then right click inside that folder and choose to open a terminal in there. What I choose to do is create the folder I want through the command line.

Once you're inside your folder in the terminal, start a Node project by typing:
```sh
$ npm init
```
This will create a node project in that folder along with a `package.json` file. It will ask you for further input, however whatever you input here will not affect the project later, as it can be changed at any time. So you can choose to ignore that part (just press enter until it's done).

We now have an empty node project. Let's push it onto GitHub so that all our teammates can access it as well.

To do that we need to initialize this folder as a git repository.
```sh
$ git init
```

Now we want **stage** our package.json file and **commit** what we staged then **push** to the remote repository.

Let's breakdown this statement a little.

> To **stage** a file means to approve that file for a commit. We try to only stage files that are necessary for the commit that will be pushed. This is done using the `add` keyword with `git`.
>
> So if I want to stage two files, one called `file1` and one called `file2` I can (in the terminal) write `$ git add file1 file2`. Similarly we can choose to stage any number of files.
>
> If I want to stage **ALL** the files that have changes in them, all I need to do write `$ git add .` and it will stage all files.
>
> To **commit** a group of files is to add all the files that have been staged to the current version of your application (locally). We try to only commit files that have no bugs (if we can help it)
>
> When we commit we can leave a message to our teammates telling them what changes/updates/fixes the current commit has. So, for example, if I'm commiting a feature that allows text chatting (instant messaging) between users, my commit message will look like this: *"feat: add text chat"*
>
> To commit our work we can write (in the terminal) `$ git commit -m "my commit message"`.
>
> Finally, to **push** one or more commits to the remote repository means to put all those changes onto GitHub so that all your teammates can see them.
>
> If your repository is configured correctly, then to push onto a branch you need to write `$ git push origin "branch_name"`

Let's stage our package.json file
```sh
$ git add package.json
```

Now Let's make our first commit! Since we didn't really do anything important, and since this commit basically initializes the repository, our commit message will just be "Initial commit"
```sh
$ git commit -m "Initial commit"
```

Currently we don't even have a GitHub repository! So let's make one so that we can push our project onto it. You can open your GitHub page and choose to make a new repository.

![New Repo](https://i.ibb.co/CPh51Tj/github-make-new-repo.png "New Repo")

You will be given the option to name your repository and make it public or private. I will name mine `jta_application`.

Now that we have a GitHub repository, it will give you a couple of terminal commands you can use to push your repository. They should look like this:
```sh
$ git remote add origin https://github.com/UserName/RepoName.git #Get your link from your page!
$ git push -u origin master
```

Congratulations! You now have a GitHub Repository for your project. Now we can get started with coding!
___
<a name ="issues"></a>

## Optional: GitHub Issues

***\*This section is highly optional.\****

Issues are a way for developers to keep track of features that need to be implemented, bugs that need to be fixed and it's also a way for users to report bugs that the found while using your product/service.

Issues can be opend by almost anyone in or outside the project at any time. The people running the repository can choose to close any issue at any time as well.

Many large projects choose to make issues for each of their initial features, and then close those issues whenever work on a feature has been completed. That helps because issues can be assigned to certain team members and it helps keep everything organized.

I will try to open a few issues for the features that need to be implemented in this project.
___
<a name ="server"></a>

## Node Server

*The file `server.js` will contain the code for starting the server. If you want to see the basic (bare bones) server on its own, check the branch called "starter_server".*

First thing we need to do is to get the modules we want to start building the server. We'll use NPM to install Express which will provide an easy to use API framework and Body-Parser which will allow us to easily read the HTTP requests that the user will send.
```sh
$ npm install --save express body-parser
```
The `--save` command ensures that an entry will be made in the `package.json` file, so that your teammates can install the same modules dependencies as you.

> ## IMPORTANT!
> Make a file called `.gitignore` and add the line `node_modules/` in it.
>
> A `.gitignore` file ignores all the files that are written in it from any stages, commits or pushes.

Now I can write the code I need in `server.js`.

Once you're done, just start up your server by typing (in the terminal):
```sh
$ node server.js
```
Your server should start, and if you go to any browser and type `localhost:8080` in the address bar, you should see the message you wrote appear on the screen.
___
<a name ="db"></a>

## Database

*The file `server.js` will contain the code for connecting to the database. If you want to see the initial file, check the branch called "mongo_connection"*

The second thing we need to have in order to make our project is the database. We already downloaded and installed MongoDB previously, but now we need to use it in order to store data.

Creating/Storing data will come a little bit later, but for now, let's at least establish a connection. To do that we'll use the module called Mongoose which we'll get through npm too.
```sh
$ npm install --save mongoose
```
The connection will also be made in the `server.js` file, so once you're done, just run the server again and see if it's connected.
```sh
$ node server.js
```
If all went well, you should get the success message in your terminal screen.