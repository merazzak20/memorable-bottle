import "./Bottle.css";
const Bottle = ({ bottle, addToCart }) => {
  const { name, img, price } = bottle;

  return (
    <div className="bottle">
      <img className="bottleImg" src={img} alt="" />
      <h3>Name : {name}</h3>
      <p>Price : ${price}</p>
      <button onClick={() => addToCart(bottle)}>Purches</button>
    </div>
  );
};

export default Bottle;
