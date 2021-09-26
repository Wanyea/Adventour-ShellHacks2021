import {useState, useEffect } from 'react'

const GetLocation = () => {
    const [location, setLocation] = useState({
        loaded: false,
        coordinates: { lat: "", lng: ""}
    });

    const onSuccess = location => {
        setLocation({
            loaded: true, 
            coordinates: {
                lat: location.coords.latitude,
                lng: location.coords.longitude
            }
        })
    } 

    const onError = error => {
        setLocation({
            loaded: true, 
            error,
            coordinates: {
                lat: 29.5845,
                lng: -81.2079
            }
        })
    }

    useEffect(() => {
        if( !("geolocation" in navigator) ) {
            onError({
                code: 0,
                message: "Geolocation not supported.",
            })
        }

        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }, [])

    return location;
}   

export default GetLocation
