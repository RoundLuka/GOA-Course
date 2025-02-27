import { useState, useEffect } from "react";

// ### **Project Name: Countdown Timer with LocalStorage**

// Create a React component that implements a **countdown timer**.

// 1. The user can input the **initial time** (in seconds) through a text input field (e.g., 10 seconds).
// 2. When the user clicks the **"Start"** button, the countdown begins.
// 3. The timer should decrease by 1 second at each tick.
// 4. When the time reaches 0, display the message: **"Time's up!"**.
// 5. The user should be able to **stop** the timer using a **"Stop"** button.
// 6. If the user **refreshes the page**, the timer should **save its state** (how much time is left) in **`localStorage`** and continue from where it left off.
// 7. Add a **"Reset"** button to reset the timer to the initial input value (the time set by the user).

// ### Key Concepts to Use:
// - `useState` to store the remaining time and timer state (running or stopped).
// - `useEffect` to update the time every second when the timer is running.
// - Store the timer state in `localStorage` to retain it across page reloads.
// - Clear the interval using `clearInterval` when the timer stops or the component unmounts.

// ### Example Flow:
// 1. The user enters "10" (seconds) into the input field.
// 2. Clicks the **"Start"** button.
// 3. The countdown begins, displaying the remaining time.
// 4. When the timer hits 0, it shows "Time's up!".
// 5. If the user refreshes the page, the timer will continue from where it left off.

// This project will help you work with state management, intervals, and persistence using `localStorage`.

export default function CountdownTimer() {
  const [inputTime, setInputTime] = useState(10);
  const [timeLeft, setTimeLeft] = useState(
    localStorage.getItem("timeLeft") ? parseInt(localStorage.getItem("timeLeft")) : 10
  );
  const [running, setRunning] = useState(false);

  useEffect(() => {
    localStorage.setItem("timeLeft", timeLeft);
    if (running && timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (timeLeft === 0) {
      setRunning(false);
    }
  }, [running, timeLeft]);

  const startTimer = () => {
    if (timeLeft > 0) setRunning(true);
  };

  const stopTimer = () => {
    setRunning(false);
  };

  const resetTimer = () => {
    setRunning(false);
    setTimeLeft(inputTime);
    localStorage.setItem("timeLeft", inputTime);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Countdown Timer</h1>
      <input
        type="number"
        value={inputTime}
        onChange={(e) => setInputTime(parseInt(e.target.value) || 0)}
        disabled={running}
      />
      <button onClick={startTimer} disabled={running}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
      <h2>{timeLeft > 0 ? timeLeft : "Time's up!"}</h2>
    </div>
  );
}
