import {useState, useEffect} from 'react';

const App123 = () => {
    const [count, setCount] = useState(0);
    

    return (
        <>
            <button onClick={() => setCount(count => count + 1)}>Clicks: {count}</button>
        </>
    )
}

export default App123;