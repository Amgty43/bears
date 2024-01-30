import axios from 'axios';

let catalog = [
    {
        title: "Pear",
        "catagory": "fruit",
        "price": 12.99,
        "image": "Pear.jpeg",
        "id": "1" //UNIQUE,
    },
    {
        title: "Cherry",
        "catagory": "fruit",
        "price": 1.99,
        "image": "Cherry.jpeg",
        "id": "2"
    },
    {
        title: "Banana",
        "catagory": "fruit",
        "price": 3.99,
        "image": "Banana.jpeg",
        "id": "3"
    },
    {
        title: "Pineapple",
        "catagory": "fruit",
        "price": 12.99,
        "image": "Pineapple.jpeg",
        "id": "4",
    },
    {
        title: "Kiwi",
        "catagory": "fruit",
        "price": 2.99,
        "image": "Kiwi.jpeg",
        "id": "5"
    },

];

class DataService {
    async getProducts() {
        //return catalog;

        //async axios.get("http://127.0.0.1:5000/api/products")
        let response = await axios.get("http://127.0.0.1:5000/api/products")
        return response.data;
    }


    addProdToCart(product) {
        let cart = this.readCart();

        cart.push(product);

        // save to local storage
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    readCart() {
        const cartString = localStorage.getItem('cart'); // strings

        // parse the string to an array
        if (cartString) {
            return JSON.parse(cartString);
        } else {
            return []; // empty cart
        }
    }

}
export default DataService;