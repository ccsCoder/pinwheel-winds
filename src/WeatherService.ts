// a service that fetches weather / wind details

const API_KEY = '93989babefc44967bec104401222612';

export interface WeatherResponse {
  location: string,
  windSpeed: number,
  windDegree: number,
  windDirection: string,
}

const getWindSpeed = async (coords: GeolocationCoordinates): Promise<WeatherResponse> => {
  const API_URL = `http://api.weatherapi.com/v1/current.json/q=${coords.latitude},${coords.longitude}&aqi=no`;

  const response: WeatherResponse = {
    location: 'Unknown',
    windSpeed: 0,
    windDegree: 0,
    windDirection: 'Unknown',
  }
  try {
    const { location: { name, region, country }, current: { wind_kph, wind_degree, wind_dir} } = await (await fetch(API_URL)).json();
    response.location = `${name},${region} - ${country}`;
    response.windDegree = wind_degree;
    response.windSpeed = wind_kph;
    response.windDirection = wind_dir;
  } catch(error) {
    console.error('Error while fetching weather details...', error)
  } finally {
    return response;
  }
}

export default getWindSpeed;
