/* eslint-disable consistent-return */
import axios from 'axios';

export const getPlacesData = async (sw, ne) => {
  try {
    const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/attractions/list-by-latlng`, {
      params: {
        latitude: sw.lat,
        longitude: sw.lng,
        distance: ne
      },
      headers: {
        'x-rapidapi-key': '517ae70571msh9a9670128261d7cp1c4a21jsn7ce35700062e',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};