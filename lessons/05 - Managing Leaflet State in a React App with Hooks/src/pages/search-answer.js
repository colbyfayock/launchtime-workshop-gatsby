/**
 * @lesson-05-answer
 * We can import useRef from React. Additionally,
 * since we're no longer using the Marker and Popup
 * components directly, we can remove those imports.
 */

import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Layout from 'components/Layout';

const SearchPage = () => {
  const mapRef = useRef();

  useEffect(() => {
    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require( 'leaflet/dist/images/marker-icon-2x.png' ),
      iconUrl: require( 'leaflet/dist/images/marker-icon.png' ),
      shadowUrl: require( 'leaflet/dist/images/marker-shadow.png' ),
    });
  }, []);

  /**
   * @lesson-05-answer
   * Using React's useEffect hook, we can access our mapRef
   * using it's "current" value. When destructued, we gain
   * access to the leafletElement, which we rename to "map"
   * to make it easier to read. Finally, we recreate our
   * marker and add it to the map with the Leaflet API.
   */

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    const marker = L.marker([38.888369, -77.019900])

    marker.bindPopup('Smithsonian National Air and Space Museum');
    marker.addTo(map);
  }, [mapRef]);

  return (
    <Layout pageName="search">
      <Helmet>
        <title>Search</title>
      </Helmet>
      <Map ref={mapRef} center={[38.907132, -77.036546]} zoom={14}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/${process.env.GATSBY_MAPBOX_USERID}/${process.env.GATSBY_MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.GATSBY_MAPBOX_API_KEY}`}
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        />
      </Map>
    </Layout>
  );
};

export default SearchPage;