import Product from "../product";
import DataService from "../services/dataServices"; 
import"./catalog.css";
import { useEffect } from "react";//this 

function Catalog(){

    const [products, setProducts] = useState([]);

    useEffect(function (){
        loadCatalog();
        console.log("componet loaded");
    },[]);

    function loadCatalog(){
        let service = new DataService(); 
        let prods = service.getProducts();
        console.log(prods);
        setProducts(prods);
    };
    return
    (
        <div className="ctalog">
            <h1> Check out our new products </h1>
            <Product/>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
            <Product></Product>
        </div>
        //useEffect
        //useState 
    );

    }

    export default Catalog;