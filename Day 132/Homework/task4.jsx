import { useState } from 'react'

// დააინსტალირეთ vite, შემდეგ აიღეთ 1 შესატანი ველი, ღილაკი და სია წარმოდგენილი საიტზე როგორც კომპონენტები, 
// როდესაც შესატან ველში ჩაწერთ ინფორმაციას და დააჭერთ ღილაკს, ჩაწერილი ინფორმაცია უნდა შეიანხოს მასივში და 
// უნდა დარენდერდეს თავიდან (ამ დავალების შესასრულებლად დააიმპორტეთ state React-იდან და მოიძიეთ ინფორმაცია მის შესახებ)

function App() {
  const [inputValue, setInputValue] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const tasks = [];

  const handleAddTask = () => {
    if(inputValue.trim() == '') {
      return;
    }

    setToDoList([...toDoList, inputValue]) // destructuring current to do list to keep its tasks, then adding inputValue
    setInputValue(''); // clear input field
  }

  return (
    <>
      <input type='text' onChange={(e) => setInputValue(e.target.value)} name='Task' value={inputValue} placeholder='task' required/>
      <button onClick={handleAddTask}>Add Task</button>
      <h2>Tasks</h2>
      <ul>
        {toDoList.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  )
}

export default App
