import { useState } from 'react';
import './App.css'

// 1) შექმენით online მაღაზიის მსგავსი საიტი, პირველ გვერდზე გექნებათ ფორმა რომელშიც უნდა შეგვეძლოს პროდუქტების დამატება (როგორც moderators), ახალი პროდუქტი სიაში დამატებისთანავე მყისიერად ემატება გვერდზე, ინფორმაცია რომელიც უნდა შეიტანოს არის: სახელი, გამოშვების ვადა, ფასი. ფორმის დადასტურებისთანავე ინფორმაციის შესაბამისი ობიექტი უნდა შექიმნას, პროექტი შეასრულეთ vite-ის (react) გამოყენებით, პროდუქტის დიზანი უნდა იყოს ლამაზი

export default function App() {
  const [products, setProducts] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name.value,
      price: e.target.price.value,
    }
    setProducts([...products, product])
  }
  
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Product name' name="name" required/>
        <input type="number" placeholder='Product price' name="price" required/>
        <button>Submit</button>
      </form>

      <ul>
        {
          products.length > 0 ? (
              products.map((product, index) => {
                return (
                  <li key={index}>
                    {product.name} - {product.price}
                  </li>
                )
            })
          ) : (
            <p>No products</p>
          )
        }
      </ul>
    </main>
  )  
}