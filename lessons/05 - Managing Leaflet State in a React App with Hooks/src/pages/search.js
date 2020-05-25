/**
 * @lesson-05-todo
 * If we want to add a ref to our Map component, we'll need
 * the React useRef hook. How can we make that available?
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Layout from 'components/Layout';

const SearchPage = () => {

  /**
   * @lesson-05-todo
   * In order to access our Map instance, we need to create
   * a ref. How can we use React's useRef hook to add a ref?
   */

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require( 'leaflet/dist/images/marker-icon-2x.png' ),
      iconUrl: require( 'leaflet/dist/images/marker-icon.png' ),
      shadowUrl: require( 'leaflet/dist/images/marker-shadow.png' ),
    });
  }, []);

  /**
   * @lesson-05-todo
   * Once we create our ref, we need to add a useEffect hook in order
   * to access that ref. How can add our hook and use it to access
   * our Map instance and recreate adding a marker to the map?
   */

  return (
    <Layout pageName="search">
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Map center={[38.907132, -77.036546]} zoom={14}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${process.env.GATSBY_MAPBOX_USERID}/${process.env.GATSBY_MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.GATSBY_MAPBOX_API_KEY}`}
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        />
        <Marker position={[38.888369, -77.019900]}>
          <Popup>Smithsonian National Air and Space Museum</Popup>
        </Marker>
      </Map>
    </Layout>
  );
};

export default SearchPage;