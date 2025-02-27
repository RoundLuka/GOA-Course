import { useState } from 'react'
import './App.css'

// 3) შექმენით დინამიკური მასივი, რომელიც შეინახება მდგომარეობაში, შექმენით შესაყვანი ველი, როდესაც მომხარებელი 
// შეიყვანს ახალ ინფორმაციას, განაახლეთ მდგომარეობა ქოლბექ ფუნქციის მეშვეობით და დაარენდერეთ სიის სახით


function App() {
    const [items, setItems] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const item = e.target.item.value
        setItems([...items, item])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="item" placeholder='Add item' required/>
                <button>Submit</button>
            </form>

            <ul>
                {
                    items.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default App
