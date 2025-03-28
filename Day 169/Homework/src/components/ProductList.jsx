import { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

    return (
        <div>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
