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
    <div>
      {citiesData.map((cityData) => {
       return (
        <Link to={`details/${cityData.id}`} key={cityData.id}>
          <CityPreview 
            cityName={cityData.city}
            cityAqi={cityData.data.main.aqi}
          />
        </Link>
       );
      })}
    </div>
  )
}

export default Main;