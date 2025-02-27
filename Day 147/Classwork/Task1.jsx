import { useState } from 'react';
import './App.css'

// 1) შექმენით ერთი კომპონენტი, სადაც შექმნით ორ მოვლენის მართველ ფუნქვიას, handleClick და handleCorrect. პირველ შემთხვევაში ჩვეულებრივად(როგორც აქამდე აკეთებდით), ღილაკის დაჭერისას განაახლეთ პარაგრაფის ტექსტი
// მეორე შემთხვევაში, გააკეთეთ იგივე რამ ქოლბექ ფუნქვიების გამოყენებით

// 2) კომენტარებით ახსენით რა მოხდა ორივე შემთხვევაში


export default function App() {
  const [count, setCount] = useState(0);

  // ჩვეულებრივი განახლება - count ცვლადის პირდაპირი შეცვლა
  const handeClick = () => {
    setCount(count + 1);
  }
  // callback ფუნქციის გამოყენება, კარგია როდესაც ახალი მნიშვნელობა დამოკიდებულია ძველზე
  const handleCorrect = () => {
    setCount((prevCount) => prevCount + 1)
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={handeClick}>increment basic</button>
      <button onClick={handleCorrect}>Increment using callback</button>
    </>
  )
}
