import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import SingleDetail from '../components/SingleDetail';
import { getCityAirData, getCityName } from '../func/helperFunctions';

function Details() {
  const storedCitiesData = useSelector((state) => state.citiesData);
  const { cityId } = useParams();
  const cityName = getCityName(cityId, storedCitiesData);
  const cityAirComps = getCityAirData(cityId, storedCitiesData);
  return (
    <div id="details">
      <nav>
        <Link to="/">
          <span className="material-symbols-outlined">
            chevron_left
          </span>
        </Link>
        <h2>{cityName}</h2>
      </nav>
      <header>
        <h1>
          {' '}
          Air components Concentrations In
          {cityName}
        </h1>
      </header>
      <div className="dts-header">Pollutants concentration in μg/m3</div>
      <div className="dts-container">
        {cityAirComps.map((component) => (
          <SingleDetail
            key={component.name}
            name={component.name}
            value={component.value}
          />
        ))}
      </div>
    </div>
  );
}

export default Details;
