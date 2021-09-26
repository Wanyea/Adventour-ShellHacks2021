import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import Geocode from "react-geocode";
import GetLocation from './GetLocation';

const SimpleMap = () => {
  const location = GetLocation().coordinates;

  Geocode.setApiKey("AIzaSyBhMbvP6pFgIOQ1IdsvqoYBxFbA4W-Ir2k")
  Geocode.setLanguage("en")
  Geocode.fromLatLng(location.lat.toString(), location.lng.toString()).then(
    (response) => {
      const address = response.results[0].formatted_address
    },
    (error) => {
      console.log(error)
    }
  )
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
          zoom={16}
          center={defaultCenter}
        >
          <Marker position={{ lat: location.lat, lng: location.lng }} />
          </GoogleMap>
     </LoadScript>
  )
}

export default SimpleMap;