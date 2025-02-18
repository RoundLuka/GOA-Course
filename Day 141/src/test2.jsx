import { useEffect, useState } from "react";

const Effect = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("count updated")
    }, [count]);
    // Dependencies array
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )
}

export default Effect;