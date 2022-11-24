import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesData } from '../redux/reducers';
import { CityPreview } from '../components/CityPreview';

function Main() {
  const citiesData = useSelector((state) => state.citiesData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCitiesData());
  }, []);
  
  return (
    <div id="main">
      <nav>
        <input type="text" placeholder="Search" />
      </nav>
      <header>
        <img src="./map-morocco.png" alt="Map Of Morocco" />
        <h1>Air Quality In Some Moroccan Cities.</h1>
      </header>
      <div className="ctd-container">
        {citiesData.map((cityData, index) => 
          <Link to={`details/${cityData.id}`} key={cityData.id}>
            <CityPreview 
              cityName={cityData.city}
              cityAqi={cityData.data.main.aqi}
            />
          </Link>
        )}
      </div>
    </div>
  )
}

export default Main;