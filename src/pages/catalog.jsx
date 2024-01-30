import Product from "../componets/product";
import DataService from "../componets/services/dataServices";
import "./catalog.css";
import { useEffect, useState } from "react"; //this

function Catalog() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    loadCatalog();
    console.log("componet loaded");
  }, []);

  async function loadCatalog() {
    let service = new DataService();
    let prods = await service.getProducts();
    console.log(prods);
    setProducts(prods);
  }
  return (
    <div className="catalog page">
      <h1> Check out our new products </h1>
      {products.map((product) => (
        <Product data={product} />
      ))}
    </div>
  );
  //useEffect
  //useState
}

export default Catalog;
