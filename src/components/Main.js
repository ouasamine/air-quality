import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCitiesData } from '../redux/reducers';

function Main() {
  const citiesData = useSelector((state) => state.citiesData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCitiesData());
  }, []);
  
  return (
    <div>
      Main
      {citiesData.map((citiyData) => citiyData.city)}
    </div>
  )
}

export default Main;