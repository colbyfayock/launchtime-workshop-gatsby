import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet';
import L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import Layout from 'components/Layout';

import locations from 'data/locations';

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

    const geoJson = new L.GeoJSON(locations, {
      /**
       * @lesson-08-todo
       * The Leaflet GeoJSON instance allows a lot of configuration options
       * to customize our location data. How can we use the options available
       * to us to add a custom image for our markers?
       */

      onEachFeature: (feature = {}, layer) => {
        const { properties = {} } = feature;
        const { name, delivery, tags, phone, website } = properties;

        const popup = L.popup();

        const html = `
          <div class="restaurant-popup">
            <h3>${name}</h3>
            <ul>
              <li>
                ${tags.join(', ')}
              </li>
              <li>
                <strong>Delivery:</strong> ${delivery ? 'Yes' : 'No'}
              </li>
              <li>
                <strong>Phone:</strong> ${phone}
              </li>
              <li>
                <strong>Website:</strong> <a href="${website}">${website}</a>
              </li>
            </ul>
          </div>
        `;

        popup.setContent(html)

        layer.bindPopup(popup);
      }
    });

    geoJson.addTo(map);
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