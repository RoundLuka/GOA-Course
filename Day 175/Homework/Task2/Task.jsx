import React, { useState, useMemo } from 'react';

function calculateFactorial(number) {
    let result = 1;
    for (let i = 2; i <= number; i++) {
      result *= i;
    }
    return result;
  }
  

const Message = React.memo(({ text }) => {
  return <p>{text}</p>;
});

function CounterWithMemo() {
  const [count, setCount] = useState(1);
  const [message, setMessage] = useState("Hello!");

  const factorial = useMemo(() => {
    return calculateFactorial(count);
  }, [count]);

  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const changeMessage = () => {
    setMessage("The text has changed!");
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <h2>Factorial: {factorial}</h2>
      <Message text={message} />
      <button onClick={changeMessage}>Change Message</button>
    </div>
  );
}

export default CounterWithMemo;
