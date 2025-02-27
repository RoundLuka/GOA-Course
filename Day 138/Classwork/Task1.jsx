// 1) გამოიყენეთ vite რომ დააყენოთ ახალი პროექტი, თვქენი დავალებაა შექმნათ  App კომპონენტში 2 ელემენტი, 
// პარაგრაფი და ღილაკი, ჭილაკზე დაკლიკებისას უნდა იმატებდეს მნიშვნელობა ერთით და 
// განახლებული მნიშვნელობის გამოტანა უნდა მოხდეს ეკრანზე (მდგომარეობა)

import { useState } from 'react'
import './App.css'


function App() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    }

    return (
        <>
            <p>{count}</p>
            <button onClick={handleClick}>Increment</button>
        </>
    )
}


export default App
