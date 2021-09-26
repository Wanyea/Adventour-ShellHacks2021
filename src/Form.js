import React from 'react';
import { useState, useEffect } from 'react';
import './Form.css';
import GetLocation from './GetLocation';
import Geocode from "react-geocode";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { useHistory } from 'react-router-dom';
import { getPlacesData } from './travelAPI';
import { CssBaseline, Grid } from '@material-ui/core';
import List from './List';
import Map from './Map'

function Form(props) {
  const [type, setType] = useState('restaurants');
  const [rating, setRating] = useState('');

  //const [coords, setCoords] = useState({});
  const [bounds, setBounds] = useState(null);

  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [places, setPlaces] = useState([]);

  const [autocomplete, setAutocomplete] = useState(null);
  const [childClicked, setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coordinates: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    const filtered = places;

    setFilteredPlaces(filtered);
  }, [places, rating]);

  const onPlaceChanged = () => {
    const lat = coordinates.lat;
    const lng = coordinates.lng;

    setCoordinates({ lat, lng });
  };

  // old 
  const location = GetLocation().coordinates;
  const history = useHistory()

  function assignAddress() {
    Geocode.setApiKey("AIzaSyBhMbvP6pFgIOQ1IdsvqoYBxFbA4W-Ir2k")
    Geocode.setLanguage("en")
    Geocode.fromLatLng(location.lat.toString(), location.lng.toString()).then(
      (response) => {
        let value = response.results[0].formatted_address
        setAddress(value)
        setCoordinates(location)
        console.log(value)
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
    const dateEl = React.useRef(null);
    const rememberMeEl = React.useRef(null);
  
    const handleSubmit = e => {
      e.preventDefault();
      const formData = {
        range: radiusEl.current.value,
        date: dateEl.current.value,
        rememberMe: rememberMeEl.current.checked,
        lat: coordinates.lat,
        long: coordinates.lng,
      }
      
      getPlacesData(coordinates, formData.range).then(data => {
        setPlaces(data);
      });
      console.log(places);
      onPlaceChanged();

     // history.push('/itinerary');
    };

 
    return (
      <div>
       <form onSubmit={handleSubmit}>
         <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <p>Latitude: {coordinates.lat}</p>
            <p>Longitude: {coordinates.lng}</p>
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
         <input type="number" placeholder="Radius?" min={0} max={50} ref={radiusEl} /> <h5>mile radius </h5>
         <input type="date" placeholder="When?" ref={dateEl} />
         <label>
           <input type="checkbox" ref={rememberMeEl} />
           Remember this trip
         </label>
         <button type="submit" className="myButton">Plan My Adventure!</button>
       </form>
    <button type="text" className="useMyLocation" onClick={assignAddress}>Use My Location.</button>

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
  