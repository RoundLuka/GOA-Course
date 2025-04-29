// შექმენით კომპონენტი, სადაც აკეთებთ API-ზე მოთხოვნის გაგზავნას.
// თქვენი დავალებაა. შექმნათ ქეშირებული ფუნქცია ოპერაციის შესასრულებლად. გამოიყენეთ useMemo hook-ი

import React, { useEffect, useState, useMemo } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const memoizedProducts = useMemo(() => {
    console.log("Memoizing products...");
    return products;
  }, [products]);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {memoizedProducts.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width="100" />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
