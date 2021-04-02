import React from 'react';
import { MapContainer as LeafletMap, TileLayer } from 'react-leaflet';
import './MapContainer.css';
import { showDataOnMap } from './utl';

function MapContainer({ countries, casesType, center, zoom }) {
  return (
    <div className='mapContainer'>
      <LeafletMap center={center} zoom={zoom}>
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(countries, casesType)}
      </LeafletMap>
    </div>
  );
}

export default MapContainer;
