
export function CityPreview(props) {
  const { cityName, cityAqi } = props;
  return (
    <div>
      {cityName} {cityAqi}
    </div>
  )
}