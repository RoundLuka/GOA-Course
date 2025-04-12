import { useState } from 'react'

// 1) შექმენით პროექტი სადაც დააინსტალირებთ moment ბიბლიოთეკას, შემდეგ შექმენით ღილაკი რომელზეც დაწკაპების შემდეგ დააიმპორტებთ moment ბიბლიოთეკას chunk_ად, შემდეგ კი გამოიყენეთ ის

function App() {
    
  const [time, setTime] = useState('MMMM Do YYYY, h:mm:ss a')

  const handleClick = async () => {
    const moment = (await import('moment')).default
    const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    setTime(currentTime)
  }
  return (
    <main>
      <button onClick={handleClick}>Import moment</button>
      <p>{time}</p>
    </main>
  )
}

export default App
