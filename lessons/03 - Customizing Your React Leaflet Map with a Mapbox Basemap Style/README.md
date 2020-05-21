# Lesson 02: Customizing Your React Leaflet Map with a Mapbox Basemap Style



## Objectives
* Create a new Mapbox account
* Create a new Map Style in Mapbox
* Create an API Key
* Configure TileLayer Endpoint
* Use Map Style for Search page basemap

## Exercise

🕵️‍♂️ Use the `@lesson-03-todo` key to search for this lesson's assignments in the code!

### 1. Creating a Mapbox Account

#### Where We'll Make Changes
* Mapbox

### 2. Creating a Map Style in Mapbox

#### Where We'll Make Changes
* Mapbox Studio

### 3. Creating an API Key

#### Where We'll Make Changes
* Mapbox

### 4. Configuring a Mapbox Endpoint for our Map Style

#### Where We'll Make Changes
* Mapbox

### 5. Customizing Our Map with Our Map Style Endpoint

#### Where We'll Make Changes
* `/src/pages/search.js`

## Extra Credit

### 1. Create a New Basemap Style

Here's where you can go nuts!

Your first extra credit assignment is to go back to Mapbox and create a new Map Style. Feel free to customize whatever you'd and use any colors.

Once you create your new style, you can update your Search page basemap TileLayer to use that new style.

#### Where We'll Make Changes
* Mapbox Studio

### 2. Create an Environment Variable for the API Key

While our API key is exposed when our page loads the map, we can configure our API keys to have 1 for development that no one can ever see and one for production where we would restrict the URL to our app.

To do this, we can use Gatsby's built-in environment variable solution.

For this extra credit assignment, set up the TileLayer endpoint to use your Mapbox API Key from an environment variable.

#### Where We'll Make Changes
* `/.env.development`
* `/src/pages/search.js`