import { useEffect, useState } from "react";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();

                localStorage.setItem("products", JSON.stringify(data));
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };


        const localProducts = localStorage.getItem("products");
        if (localProducts) {
            setProducts(JSON.parse(localProducts));
        } else {
            fetchProducts();
        }
    }, []);

    return (
        <div>
            <h1>This is Home Page</h1>
            <p>Welcome to Home Page</p>

            <section>
                <h2>Products</h2>
                {products.length > 0 ? (
                    <ul>
                        {products.map((product) => (
                            <li key={product.id}>
                                <h3>{product.title}</h3>
                                <p>{product.description}</p>
                                <strong>${product.price}</strong>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading products...</p>
                )}
            </section>
        </div>
    );
};

export default Home;
