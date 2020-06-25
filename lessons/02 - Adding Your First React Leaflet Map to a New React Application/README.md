# 📓 Lesson 02: Adding Your First React Leaflet Map to a New React Application

We just installed all of our dependencies that will allow us to get started building a new map including [Leaflet](https://leafletjs.com/) and [React Leaflet](https://react-leaflet.js.org/). Now that we can actually add a map to our page, our new assignment is now to create that new map that takes up all of the space on the Search page. That way, all of our hungry customer can easily search the map for their favorite locations.

## Objectives
* Add a new Leaflet Map component to the Search page
* Configure a TileLayer for a Map with OpenStreetMap
* Make the map take up all of the space on the Search page
* Prevent build errors when compiling project with Gatsby Plugin React Leaflet

## Exercise

🕵️‍♂️ Use the `@lesson-02-todo` key to search for this lesson's assignments in the code!

### 1. Installing Our Dependencies

While there are a few options for building maps, [Leaflet](https://leafletjs.com/) is the most popular. Lucky for us, Leaflet is also available as a ReactJS component library with [React Leaflet](https://react-leaflet.js.org/). We'll use both Leaflet and React Leaflet to build a map in our React-based Gatsby app.

To get started, we need to install:
* [Leaflet (npmjs.com)](https://www.npmjs.com/package/leaflet)
* [React Leaflet (npmjs.com)](https://www.npmjs.com/package/react-leaflet)

#### Where We'll Make Changes
* Use your package manager like yarn or npm to add the dependencies

#### Resources
* [Leaflet (leafletjs.com)](https://leafletjs.com/)
* [React Leaflet (react-leaflet.js.org)](https://react-leaflet.js.org/)

### 2. Adding a new map to the Search page

The first thing we need to do is actually add our map. We already installed our dependencies, so now it's a matter of using them to import our components.

There are 2 primary components that we'll need to use:
* Map
* TileLayer

We'll import these components from React Leaflet and use them to create our map.

#### Where We'll Make Changes
* `/src/pages/search.js`
* `/src/assets/stylesheets/components/_maps.scss`

#### Resources
* [React Leaflet Map (react-leaflet.js.org)](https://react-leaflet.js.org/docs/en/components#map)
* [React Leaflet TileLayer (react-leaflet.js.org)](https://react-leaflet.js.org/docs/en/components#tilelayer)

### 3. Making our map take up all of the space on the Search page

With our map rendered, we'll notice that there's a white border around the edge of our map. We want our custoemrs to be able to see a fullscreen look at the locations we have available, so we'll want to figure out a way to remove the extra space around our map.

#### Where We'll Make Changes
* `/src/assets/stylesheets/pages/_search.scss`

## Extra Credit

### 1. Preventing build errors when compiling the app

Ultimately, we'll want to build our application out in order to host and deploy it to a website. To do this, we need Gatsby to be able to successfully build our app. But when running the `build` script via yarn or npm, we run into an error. What can we do to fix this?

#### Where We'll Make Changes
* `/gatsby-config.js`

#### Resources
* [Gatsby Plugin React Leaflet (github.com)](https://github.com/dweirich/gatsby-plugin-react-leaflet)
