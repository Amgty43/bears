let catalog = [
    {
        title: "Orange",
        "catagory":"fruit",
        "price":12.99,   
        "image": "something.jpg",   
        "id": "1" //UNIQUE,
    },
    {
        title: "Apple",
        "catagory":"fruit",
        "price":1.99,   
        "image": "something.jpg",   
        "id": "2"
    },
    {
        title: "Banana",
        "catagory":"fruit",
        "price":3.99,   
        "image": "something.jpg",   
        "id": "3" 
    },
    {
        title: "Pineapple",
        "catagory":"fruit",
        "price":12.99,   
        "image": "something.jpg",   
        "id": "4",
    },
    {
        title: "Kiwifruit",
        "catagory":"fruit",
        "price":2.99,   
        "image": "something.jpg",   
        "id": "5" 
    },
    {
        title: "Cherry",
        "catagory":"fruit",
        "price":3.49,   
        "image": "something.jpg",   
        "id": "6" 
    },
    {
        title: "Pear",
        "catagory":"fruit",
        "price":.99,   
        "image": "something.jpg",   
        "id": "7" 
    },

];

class DataService
{
    getProducts()
    {
        return catalog;
    }
}

export default DataService;