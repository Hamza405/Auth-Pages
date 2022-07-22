const SizedBox = (props) => {
  const size = props.size != null ? props.size : 0.8;
  return <div style={{ margin: `${size}rem` }}></div>;
};

export default SizedBox;
