import "./product.css";
import QuantityPicker from "./quantityPicker";

function Product(){
    return(
        <div className="product">
            {/*they key is concatenated with the name of the product*/}
            <img src={"/images/" + props.data.image} alt="" />
            <h5>{props.data.title}</h5>
            <div className="prices"></div>
                <label> Total</label>
                <label> Price</label>
                <div></div>
            <QuantityPicker></QuantityPicker>

        </div>

    )
}

export default Product;