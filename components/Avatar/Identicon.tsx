const style = {
  height: 32,
  width: 32,
  backgroundColor: "#bbb",
  borderRadius: "50%",
  display: "inline-block",
};

var stringToColour = function (str: string) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substring(-2);
  }
  return colour;
};

const Identicon = (props: { value: string }) => {
  const { value } = props;
  const backgroundColor = stringToColour(value);

  return <div style={{ ...style, backgroundColor }}></div>;
};

export default Identicon;
