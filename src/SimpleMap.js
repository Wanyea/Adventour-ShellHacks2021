import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
const SimpleMap = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyBhMbvP6pFgIOQ1IdsvqoYBxFbA4W-Ir2k'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
}

export default SimpleMap;