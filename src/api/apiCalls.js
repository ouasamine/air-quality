const apiKey = '985888d5c6e9bbd16d041ff9e17d1220';

const getCityIndex = async (lat, long) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${apiKey}`
  ).then((resp) => resp.json());
  return response;
}

const getCityCoord = async (city) => {
  const response = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
  ).then((resp) => resp.json());
  return response;
}

export {getCityIndex, getCityCoord};
