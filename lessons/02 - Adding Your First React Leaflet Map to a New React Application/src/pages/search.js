import React from 'react';
import { Helmet } from 'react-helmet';

// @lesson-02: Import dependencies
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Layout from 'components/Layout';
import Container from 'components/Container';

const SearchPage = () => {
  return (
    <Layout pageName="search">
      <Helmet>
        <title>Search</title>
      </Helmet>
      { /* @lesson-02 Add new map */ }
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
