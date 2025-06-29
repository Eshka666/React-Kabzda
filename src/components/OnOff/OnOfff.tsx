type OnOffPropsType = {
  on: boolean;
  onChange: (on: boolean) => void;
};

function OnOff(props: OnOffPropsType) {
  const onStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: props.on ? "green" : "white",
  };
  const offStyle = {
    width: "30px",
    height: "20px",
    border: "1px solid black",
    display: "inline-block",
    padding: "2px",
    backgroundColor: props.on ? "white" : "red",
    marginLeft: "2px",
  };
  const indicatorStyle = {
    width: "10px",
    height: "10px",
    borderRadius: "5px",
    display: "inline-block",
    border: "1px solid black",
    marginLeft: "5px",
    backgroundColor: props.on ? "green" : "red",
  };
  return (
    <div>
      <div
        style={onStyle}
        onClick={() => {
          props.onChange(true);
        }}
      >
        On
      </div>
      <div
        style={offStyle}
        onClick={() => {
          props.onChange(false);
        }}
      >
        Off
      </div>
      <div style={indicatorStyle}></div>
    </div>
  );
}
export default OnOff;
