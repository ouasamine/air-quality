export function SingleDetail(props) {
  const { name, value} = props;
  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: name}} />
      <div>
        {value}
      </div>
    </div>
  )
}