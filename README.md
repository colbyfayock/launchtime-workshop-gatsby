# Build a Map with React Leaflet - LaunchTime

In this workshop, you'll learn the basics of mapping with [React Leaflet](https://react-leaflet.js.org/) as we work through creating a new map from scratch in a simple React application. From there, we'll layer in data and location-based features that will allow us to create a map that somebody could use to look up their favorite restaurants!

* [Who Am I?](#who-am-i)
* [Before the Workshop](#before-the-workshop)
* [During the Workshop](#during-the-workshop)

## Who Am I?
👋 I'm Colby Fayock! I've been working on mapping projects that put a user interface in front of big challenges that involve a lot of data like the imagery that comes from satellites and tools that help manage team resources for disaster relief. Working through these projects has made me passionate about the cool things we can do with maps to help others whether it's helping someone find their favorite restaurant or giving new tools to scientists around the world.

## Before the Workshop

Here are a few things that you would ideally have done before we jump into the workshop.

### Environment Requirements
There are only a few things that are probably considered "strict" requirements for the workshop:
* [node](https://nodejs.org/en/)
* [git](https://git-scm.com/)
* [yarn](https://yarnpkg.com/) (or npm via node)

I'll be using yarn in the workshop but most of these commands should work very similarly with npm.

The **operating system** you use shouldn't matter as long as you can run commands with yarn or npm.

While we'll be using [**Gatsby**](https://www.gatsbyjs.org/) for this workshop, you don't necessarilly need to have the Gatsby command line tools installed, as it's already a dependency of this project.

If you can run `yarn -v` or `npm -v`, you should be good to go.

### Setting Up the Project
Once you verified you have all of the environment requirements, we can get started by cloning this repository.
* Navigate to the folder you'd like to work in
* Run:
```
git clone https://github.com/colbyfayock/launchtime-workshop
cd launchtime-workshop
yarn install # or npm install
```

### Starting Up the Project
After all of the dependencies are installed, you should be good to go!
* Run:
```
yarn develop # or npm run develop
```

This should kick off a new server available at http://localhost:8000!

### What's In This Project?
We'll start off with some tools that can help us focus on learning to work with maps. Those include:
* [Gatsby](https://www.gatsbyjs.org/) - web framework based on [React](https://reactjs.org/) that helps us quickly build a new website or application
* [Sass](https://sass-lang.com/) - "CSS with superpowers" that allows us to easily maintain modular CSS stylesheets

With these tools, we'll be able to dive right into building our map!

## During The Workshop
