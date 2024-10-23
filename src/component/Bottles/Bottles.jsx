import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottle.css";
import { addCardLS, getCartStored } from "../../utility/localStorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const storedCart = getCartStored();
      console.log(storedCart, bottles);
      const saveCart = [];

      for (const id of storedCart) {
        console.log(id);
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          saveCart.push(bottle);
        }
      }
      console.log(saveCart);
      setCart(saveCart);
    }
  }, [bottles]);

  const addToCart = (bottle) => {
    const newCart = [...cart, bottle];
    setCart(newCart);
    addCardLS(bottle.id);
  };

  return (
    <div>
      <h3>Bottles: {bottles.length}</h3>
      <Cart cart={cart}></Cart>
      <div className="bottlesContainer">
        {bottles.map((bottle) => (
          <Bottle
            key={bottle.id}
            bottle={bottle}
            addToCart={addToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
