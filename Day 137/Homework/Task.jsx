import { useState, useEffect } from 'react'

function App() {
  const [taskText, setTaskText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Work");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if(savedTasks) {
      try {
        setTasks(JSON.parse(savedTasks));
      } catch (error) {
        console.log("Error passing tasks from localstorage", error)
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks])

  const addTask = (e) => {
    e.preventDefault()

    if(taskText.trim() == '') {
      return
    }

    setTasks([...tasks, {text: taskText, category: selectedCategory, completed: false}]);
    setTaskText("");
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };
  
  const toggleCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) => 
    i === index ? {...task, completed: !task.completed } : task);
    setTasks(updatedTasks);
  };

  return (
    <>
      <h1>To-Do List with React</h1>


      <form onSubmit={addTask}>
        <input type='text' onChange={(e) => setTaskText(e.target.value)} value={taskText} name='task' placeholder='Task' required/>
        <select onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
        <button type='submit'>Add Task</button>
      </form>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            Task: {task.text} 
            Category: {task.category} 
            <button onClick={() => deleteTask(index)}>Delete</button>
            <input onChange={() => toggleCompletion(index)} type='checkbox'  />
            {task.completed ? <span> - Completed</span> : <span> - Not Completed</span>}
            </li>
        ))}
      </ul>
    </>
  )
}

export default App
