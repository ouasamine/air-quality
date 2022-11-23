import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CityDetail } from '../components/CityDetail';

function Details() {
  const citiesData = useSelector((state) => state.citiesData);
  const { cityId } = useParams();
  function getCityAirData(cityId) {
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
  const cityAirComps = getCityAirData(cityId);
  return (
    <div>
      This is details
      {cityAirComps.map((component) => <CityDetail key={component.name} name={component.name} value={component.value} />)}
    </div>
  )
}

export default Details;
