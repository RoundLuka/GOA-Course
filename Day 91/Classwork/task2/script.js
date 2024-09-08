

const products = [
    { id: 1, title: 'Product 1'},
    { id: 2, title: 'Product 2'},
    { id: 3, title: 'Product 3'}
]

const productsContainer = document.getElementById('products');



function addElement(product) {
    const cartItem = document.createElement('div');
    cartItem.textContent = product.title;
    cartContainer.appendChild(cartItem);
}


for(let i = 0; i < products.length; i++) {
    const product = products[i];
    const productElement = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.textContent = product.title;

    productElement.appendChild(h2);

    const img = document.createElement('img');
    img.src = 'https://via.placeholder.com/150';

    productElement.appendChild(img);

    productsContainer.appendChild(productElement)
}