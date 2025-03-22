//***//A Small Project of Add to Cart Using Local Storage
const addToCart = () => {
    const productName = document.getElementById('product-name');
    const productQuantity = document.getElementById('product-quantity');

    const name = productName.value;
    const quantity = productQuantity.value;

    displayProduct(name, quantity);
    saveProductToLocalStorage(name, quantity);

    productName.value = "";
    productQuantity.value = "";
}

const displayProduct = (showName, showQuantity) => {
    const productContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${showName} : ${showQuantity}`;
    productContainer.appendChild(li);
}

const getProductFromLocalStorage = () => {
    let cart = {};
    const getProduct = localStorage.getItem('cart');

    if(getProduct){
        cart = JSON.parse(getProduct);
    }
    return cart;
}

const saveProductToLocalStorage = (addName, addQuantity) => {
    const cart = getProductFromLocalStorage();

    cart[addName] = addQuantity;

    const cartConvertedToString = JSON.stringify(cart);

    localStorage.setItem("cart", cartConvertedToString);
}

const displayProductFromLocalStorage = () => {
    const products = getProductFromLocalStorage();

    for (const product in products){
        displayProduct(product, products[product]);
    }
}

displayProductFromLocalStorage();