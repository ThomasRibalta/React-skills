const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img
        src={props.image ? props.image : "https://picsum.photos/200"}
        alt={props.name ? props.name : "Any Pizza"}
      />
    </div>
  );
};

export default Pizza;
