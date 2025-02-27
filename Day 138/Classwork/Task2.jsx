import { useState } from 'react'
import './App.css'

// 2) შექმენით პროექტი სახელად todolist
// Todo list

function App() {
    const [tasks, setTasks] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const item = e.target.item.value
        setTasks([...tasks, item])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="item" placeholder='Add task' required/>
                <button>Submit</button>
            </form>

            <ul>
                {
                    tasks.map((task, index) => {
                        return (
                            <li key={index}>{task}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}


export default App
