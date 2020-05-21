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
      <Map center={[39.960322, -75.147562]} zoom={12}>
      { /**
         * @lesson-03-answer
         * We can use the Mapbox Static Tiles endpoint
         * to add our new custom style. Combine that with
         * an authorized request using our API Key and
         * we're customizing the basemap of our app!
         */ }
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/colbyfayock/ck8c2foj72lqk1jnug0g2haw0/tiles/256/{z}/{x}/{y}@2x?access_token=[MAPBOX_API_KEY]`}
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        />
      </Map>
    </Layout>
  );
};

export default SearchPage;
