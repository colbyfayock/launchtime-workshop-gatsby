import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * @lesson-02-answer
 * The main components we use for creating a new map
 * with React Leaflet are the Map and TileLayer components.
 * With those imported, we can use them in our page as well
 * as import the Leaflet CSS to make sure our map shows up
 * like a map.
 */
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Layout from 'components/Layout';

const SearchPage = () => {
  return (
    <Layout pageName="search">
      <Helmet>
        <title>Search</title>
      </Helmet>
      { /**
       * @lesson-02-answer
       * After importing our Map and TileLayer components,
       * we set up the position we want our Map to center on
       * as well as our default zoom level. With our map, we
       * can add our TileLayer where we load OpenStreetMap
       * for our basemap.
       */ }
      <Map center={[39.960322, -75.147562]} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Map>
    </Layout>
  );
};

export default SearchPage;
