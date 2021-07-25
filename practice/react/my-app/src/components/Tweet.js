
function Tweet(props) {
  return (
    <div>
      <div>{props.name}</div>
      <div>{props.contents}</div>
    </div>
  );
}

export default Tweet;