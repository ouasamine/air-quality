export function SingleDetail(props) {
  const { name, value} = props;
  return (
    <div className="dts-single">
      <div dangerouslySetInnerHTML={{__html: name}} />
      <div style={{fontWeight: "900", color: "#efefef"}}>
        {value}
      </div>
    </div>
  )
}