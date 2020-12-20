
const key = "76xzGe81Jvvsedm5WhjGloGumrA2mS9C";

// get weather conditions

const getWeather = async(id) =>{ // id is = to key from location data

    const base = "https://dataservice.accuweather.com/currentconditions/v1/"

    const query = `${id}?apikey=${key}`

    const response = await fetch(base+query);

    const data = await response.json();

    return data[0];
}

// Get city information

const getCity = async(city) => {

    const base = 'https://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${city}`;
  
    const response = await fetch(base + query);
    
    const data = await response.json();
  
    return data[0];
}
