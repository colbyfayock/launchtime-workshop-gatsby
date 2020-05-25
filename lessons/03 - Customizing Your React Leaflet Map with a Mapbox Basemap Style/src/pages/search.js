import React from 'react';
import { Helmet } from 'react-helmet';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Layout from 'components/Layout';

const SearchPage = () => {
  return (
    <Layout pageName="search">
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Map center={[38.907132, -77.036546]} zoom={12}>
      { /**
         * @lesson-03-todo
         * Now that we created a new Map Style with Mapbox,
         * we want to use it in our app so that we can have
         * a custom map. To do that, we'll need to update our
         * TileLayer to use a Mapbox endpoint and attribution.
         */ }
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
      </Map>
    </Layout>
  );
};

export default SearchPage;
