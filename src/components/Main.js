import { getCityCoord, getCityIndex } from "../api/apiCalls";

function Main() {
  let lat = '';
  let long = '';
  getCityCoord('London').then((data) => {
    lat = data[0].lat; 
    long = data[0].lon;
    getCityIndex(lat, long).then((data) => console.log(data.list[0].main));
  });
  return (
    <div>
      This is main
    </div>
  )
}

export default Main;