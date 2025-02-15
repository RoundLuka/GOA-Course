// 1) შექმენით კომპონენტი რომელსაც დაარქმევთ ProductList ამ კომპონენტში უნდა გამოიყენოთ useEffect რომ გააგზავნო 
// მოთხოვნა API _ზე და როგორც კი მოთხვნა შესრულდება (ანუ როცა მონაცემები დაგიბრუნდებათ) დაარენდერეთ სიის სახით


import { useEffect, useState } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    // Dependencies array

    return (
        <div>
            <ul>
                {products.map(product => {
                    <li key={product.id}>{product.title}</li>
                })}
            </ul>
        </div>
    )
}

export default ProductList;