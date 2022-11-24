import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { SingleDetail } from '../components/SingleDetail';

function Details() {
  const storedCitiesData = useSelector((state) => state.citiesData);
  const { cityId } = useParams();
  function getCityAirData(cityId, citiesData) {
    const cityObj = citiesData.filter((cityData) => cityData.id === cityId);
    const compsValues = Object.values(cityObj[0].data.components);
    const airComps = [
      {name: "CO", value: null},
      {name: "NO", value: null},
      {name: "NO<sub>2<sub/>", value: null},
      {name: "O<sub>3</sub>", value: null},
      {name: "SO<sub>2</sub>", value: null},
      {name: "PM<sub>2.5</sub>", value: null},
      {name: "PM<sub>10</sub>", value: null},
      {name: "NH<sub>3</sub>", value: null},
    ];
    for (let i = 0; i < compsValues.length; i++) {
      airComps[i].value = compsValues[i];
    }
    return airComps;
  }

  function getCityName(cityId, citiesData) {
    const cityObj = citiesData.filter((cityData) => cityData.id === cityId);
    const cityName = cityObj[0].city;
    return cityName;
  }

  const cityName = getCityName(cityId, storedCitiesData);
  const cityAirComps = getCityAirData(cityId, storedCitiesData);
  return (
    <div id="details">
      <nav>
        <Link to="/">Go back</Link>
      </nav>
      <header>
        <h1> Air components Concentrations In {cityName} </h1>
      </header>
      <div className="dts-header">Pollutants concentration in μg/m3</div>
      <div className="dts-container">
        {cityAirComps.map((component) => <SingleDetail
          key={component.name}
          name={component.name}
          value={component.value}
        />)}
      </div>
    </div>
  )
}

export default Details;
