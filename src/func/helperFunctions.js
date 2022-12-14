export function getCityAirData(cityId, citiesData) {
  const cityObj = citiesData.filter((cityData) => cityData.id === cityId);
  const compsValues = Object.values(cityObj[0].data.components);
  const airComps = [
    { name: 'CO', value: null },
    { name: 'NO', value: null },
    { name: 'NO<sub>2<sub/>', value: null },
    { name: 'O<sub>3</sub>', value: null },
    { name: 'SO<sub>2</sub>', value: null },
    { name: 'PM<sub>2.5</sub>', value: null },
    { name: 'PM<sub>10</sub>', value: null },
    { name: 'NH<sub>3</sub>', value: null },
  ];
  for (let i = 0; i < compsValues.length; i += 1) {
    airComps[i].value = compsValues[i];
  }
  return airComps;
}

export function getCityName(cityId, citiesData) {
  const cityObj = citiesData.filter((cityData) => cityData.id === cityId);
  const cityName = cityObj[0].city;
  return cityName;
}

export function getDataTime(cityId, citiesData) {
  const cityObj = citiesData.filter((cityData) => cityData.id === cityId);
  const storedDataTime = new Date(parseInt(cityObj[0].data.dt, 10) * 1000);
  const dataTime = `${storedDataTime.getDate()}-${storedDataTime.getMonth() + 1}-${storedDataTime.getFullYear()} ${storedDataTime.toLocaleTimeString()}`;
  return dataTime;
}
