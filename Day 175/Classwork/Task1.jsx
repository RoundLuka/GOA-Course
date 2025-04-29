import React, { useState, useMemo } from 'react';


const productsData = [
  { id: 1, name: 'Laptop', price: 1000, category: 'Electronics' },
  { id: 2, name: 'Sofa', price: 500, category: 'Furniture' },
  { id: 3, name: 'Shirt', price: 30, category: 'Clothing' },
  { id: 4, name: 'Phone', price: 800, category: 'Electronics' },
  { id: 5, name: 'Table', price: 200, category: 'Furniture' },
];

const categories = ['All', 'Electronics', 'Furniture', 'Clothing'];


const Product = React.memo(({ name, price, category }) => {
  console.log(`Rendering ${name}`);
  return (
    <div>
      <h3>{name}</h3>
      <p>{category}</p>
      <p>${price}</p>
    </div>
  );
});

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');


  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'All') {
      return productsData;
    }
    return productsData.filter(product => product.category === selectedCategory);
  }, [selectedCategory]);

  // Handle category change
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <div>
        <select onChange={handleCategoryChange} value={selectedCategory}>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div>
        {filteredProducts.map(product => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
