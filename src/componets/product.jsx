import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useEffect } from "react";
import DataService from "./services/dataServices";

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const getTotal = () => {
    return quantity * props.data.price;
  };

  useEffect(() => {
    console.log("Component rendered/updated!");
  });

  function add() {
    console.log("add clicked!");
    let service = new DataService();
    service.addProdToCart(props.data);
  }

  function quantityChange(qty) {
    console.log("quantity changed", qty);
    setQuantity(qty);
  }

  return (
    <div className="product">
      <img src={"/images/" + props.data.image} alt="" />

      <h5>{props.data.title}</h5>
      <div className="prices">
        <label>Prices: ${props.data.price.toFixed(2)}</label>
        <label>Total: ${(props.data.price * quantity).toFixed(2)}</label>
      </div>
      <QuantityPicker onChange={handleQuantityChange} />
      <button onClick={add} className="btn btn-sm btn-primary">
        Add to cart
      </button>
    </div>
  );
}

export default Product;
