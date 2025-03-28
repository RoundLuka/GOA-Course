// 1) შექმენით პრეოქტი სადაც გამოიყენებთ useEffects და useState, გამოიყენეთ API, რომ გააგზავნოთ მოთხოვნა იმის შემდეგ რაც პირველად დარენდერდება კომპონენტი და გამოიტანეთ ეკარნზე მიღებული მონაცემები
// 2) გაუშვით useEffect ის ეფექტი ყოლ ჯერზე როცა კომპონენტი თავიდან დარენდერდება

import { useState, useEffect } from "react";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchProducts();
    }, []); 


    useEffect(() => {
        console.log("Component re-rendered");
    });

    if (loading) {
        return <div>Loading...</div>;
    }
        

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
