import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Layout from 'components/Layout';

/**
 * @lesson-06-todo
 * In order to add our locations to the map, we need the data.
 * How can we make it available to this file?
 */

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

  useEffect(() => {
    const { current = {} } = mapRef;
    const { leafletElement: map } = current;

    if ( !map ) return;

    map.eachLayer((layer = {}) => {
      const { options } = layer;
      const { name } = options;

      if ( name !== 'Mapbox' ) {
        map.removeLayer(layer);
      };
    });

    /**
     * @lesson-06-todo
     * Once our location data is imported, we'll have a GeoJSON
     * document ready to add to our Leaflet map. How can we use
     * the Leaflet GeoJSON instance to add or locations?
     */

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
          name="Mapbox"
          url={`https://api.mapbox.com/styles/v1/${process.env.GATSBY_MAPBOX_USERID}/${process.env.GATSBY_MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.GATSBY_MAPBOX_API_KEY}`}
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery © <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        />
      </Map>
    </Layout>
  );
};

export default SearchPage;