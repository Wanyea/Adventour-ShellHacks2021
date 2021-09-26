import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import GetLocation from './GetLocation';

const SimpleMap = () => {
  
  const location = GetLocation().coordinates;
  console.log(location)
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: location.lat , lng: location.lng
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBhMbvP6pFgIOQ1IdsvqoYBxFbA4W-Ir2k'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        >
          <Marker position={{ lat: location.lat, lng: location.lng }} />
          </GoogleMap>
     </LoadScript>
  )
}

export default SimpleMap;