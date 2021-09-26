import React, { useState, useEffect } from 'react';
import './Form.css';
import GetLocation from './GetLocation';
import Geocode from "react-geocode";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { getPlacesData } from './travelAPI';
import { CssBaseline, Grid } from '@material-ui/core';
import List from './List';
import Map from './Map'

function Form(props) {
  const [rating, setRating] = useState('');

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
  }, []);

  useEffect(() => {
    const filtered = places;

    setFilteredPlaces(filtered);
  }, [places, rating]);

  const onPlaceChanged = () => {
    const lat = coordinates.lat;
    const lng = coordinates.lng;
    console.log(coordinates.lat);
    setCoordinates({ lat, lng });
  };

  // old 
  const location = GetLocation().coordinates;

  function assignAddress() {
    Geocode.setApiKey("AIzaSyBhMbvP6pFgIOQ1IdsvqoYBxFbA4W-Ir2k")
    Geocode.setLanguage("en")
    Geocode.fromLatLng(location.lat.toString(), location.lng.toString()).then(
      (response) => {
        let value = response.results[0].formatted_address
        setAddress(value)
        setCoordinates(location)
      },
          (error) => {
          console.log(error)
        }
      )
  }
    
  
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    //console.log(latLng)
    setAddress(value);
    setCoordinates(latLng);
  };

    const radiusEl = React.useRef(null);
  
    const handleSubmit = e => {
      e.preventDefault();
      const formData = {
        range: radiusEl.current.value,
        lat: coordinates.lat,
        long: coordinates.lng,
      }
      
      getPlacesData(coordinates, formData.range).then(data => {
        setPlaces(data);
      });
      onPlaceChanged();
    };

 
    return (
      <div className="bleh">
       <form onSubmit={handleSubmit}>
         <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input {...getInputProps({ placeholder: "Type address" })} />

            <div>
              {loading ? null : null}

              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };

                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
         <input type="number" placeholder="Radius?" min={0} max={50} ref={radiusEl} /> <p>mile radius </p>
         <button type="submit" className="myButton">Plan My Adventure!</button>
       </form>
    <button type="text" className="myButton" onClick={assignAddress}>Use My Current Location</button>

    <>
      <CssBaseline />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} md={4}>
          <List
            places = {places}
          />
        </Grid>
        <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Map
            coords={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
          />
        </Grid>
      </Grid>
    </>
    </div>
     );
  }

  export default Form;
  