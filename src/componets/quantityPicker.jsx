import "./quantityPicker.css"
import { useState } from "react";

function QuantityPicker()
{
    function decrease(){
        console.log("decreasing quantity");
    }
//create the funcion to increment quantity

    function increase(){
        console.log("increase quantity by 10");
    }

    return(
        <div ClassName="qut-Picker">
        <button>-</button>
        <label>1</label>   
        <button>+</button>
        </div>
            
    );
}

export default QuantityPicker;