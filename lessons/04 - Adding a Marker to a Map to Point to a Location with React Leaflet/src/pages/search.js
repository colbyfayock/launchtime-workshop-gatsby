/**
 * @lesson-04-todo
 * Our goal is to add a new Marker in the location
 * we choose with a Popup. To do that, we need to import
 * those components. How can we import them below?
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Layout from 'components/Layout';

const SearchPage = () => {

  /**
   * @lesson-04-todo
   * When adding our Marker to the map, we notice that there's
   * a conflict that prevents our Marker icons from showing up.
   * What can we do to fix this?
   * See https://github.com/PaulLeCam/react-leaflet/issues/453#issuecomment-410450387
   */

  return (
    <Layout pageName="search">
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Map center={[38.907132, -77.036546]} zoom={12}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${process.env.GATSBY_MAPBOX_USERID}/${process.env.GATSBY_MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.GATSBY_MAPBOX_API_KEY}`}
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        />
        { /**
           * @lesson-04-todo
           * We want to show our website visitors our favorite
           * local attraction. How can we make use of the Leaflet
           * Marker and Popup component to point our location out?
           */ }
      </Map>
    </Layout>
  );
};

export default SearchPage;
