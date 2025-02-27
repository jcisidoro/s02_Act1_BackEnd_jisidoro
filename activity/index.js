/* 
The goal of this exercise is to create a Product
    Catalog that allows the user to perform various
    operations such as displaying all products, adding a
    new product, updating a product's stock, and
    removing a product from the catalog. This exercise
    will involve using objects, arrays, and manipulating
    them with functions.

    Create a "Product Catalog" using objects and arrays.
    The catalog should consist of multiple product
    objects, each with properties like name, price,
    stock quantity, and category.

    name - string
    price - number
    stockQuantity - number
    category - string

    Display all products.
    Add a new product.
    Update a product's stock.
    Remove a product from the catalog.

    method
        use for loop or if
        use a function
*/

//list of all products
const products = [
    {
        name: "Laptop",
        price: 23000,
        stockQuantity: 20,
        category: 'Electronics',
    },
    {
        name: "Phones",
        price: 19000,
        stockQuantity: 120,
        category: 'Electronics',
    },
    {
        name: "Shoes",
        price: 2000,
        stockQuantity: 10,
        category: 'Electronics',
    },
];

//function to display product
function displayProducts(productList) {
    for(let i = 0; i < productList.length; i++){
        console.log(`Name: ${productList[i].name}`, `\nPrice: ${productList[i].price}`,
             `\nStocks: ${productList[i].stockQuantity}`, `\nCategory: ${productList[i].category}`)
    }    
};

//function to update product
function updateProducts(productList, productName, newPrice, newStock, newCategory) {
    for (let i = 0; i < productList.length; i++) {
        if (productList[i].name === productName) {
            productList[i].price = newPrice;
            productList[i].stockQuantity = newStock;
            productList[i].category = newCategory;
        }
    }
}

//add product
products.push({
    name: "Tablets",
    price: 5000,
    stockQuantity: 40,
    category: "Electronics"
});

//update product
updateProducts(products, "Shoes", 3000, 1500, "Accessory");

//remove product
const index = 1;
products.splice(index, 1);

//display product
displayProducts(products);