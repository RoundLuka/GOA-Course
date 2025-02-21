import './App.css'
import ProfileList from './components/ProductList';


function App() {
    const products = [
        {
            id: 1,
            name: "Wireless Headphones",
            price: "$99.99",
            description: "Noise-cancelling wireless headphones with up to 20 hours of battery life."
        },
        {
            id: 2,
            name: "Smartphone Stand",
            price: "$19.99",
            description: "Adjustable stand for your smartphone, perfect for video calls and watching content."
        },
        {
            id: 3,
            name: "Bluetooth Speaker",
            price: "$49.99",
            description: "Portable Bluetooth speaker with rich sound and waterproof design."
        },
        {
            id: 4,
            name: "Laptop Sleeve",
            price: "$29.99",
            description: "Protective sleeve for 13-inch laptops, made from durable and water-resistant fabric."
        },
        {
            id: 5,
            name: "Fitness Tracker",
            price: "$79.99",
            description: "Fitness tracker with heart rate monitoring, step tracking, and sleep analysis."
        }
    ];
    
    return (
        <div>
            <ProfileList products={products} />
        </div>
    )
}


export default App
