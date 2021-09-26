import React from 'react';
import './Form.css';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { useHistory } from 'react-router-dom';

function Form(props) {
  const history = useHistory()
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null
  });

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

    const radiusEl = React.useRef(null);
    const dateEl = React.useRef(null);
    const rememberMeEl = React.useRef(null);
  
    const handleSubmit = e => {
      e.preventDefault();
      const formData = {
        city: radiusEl.current.value,
        date: dateEl.current.value,
        rememberMe: rememberMeEl.current.checked,
        lat: coordinates.lat,
        long: coordinates.lng,
      }
      console.log(formData);
      
      history.push('/itinerary');
    };

    return (
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
         <input type="text" placeholder="How far out are we willing to travel?" ref={radiusEl} />
         <input type="date" placeholder="When?" ref={dateEl} />
         <label>
           <input type="checkbox" ref={rememberMeEl} />
           Remember this trip
         </label>
         <button type="submit" className="myButton">Plan My Adventure!</button>
       </form>
     );
  }

  export default Form;
  