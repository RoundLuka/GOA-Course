import { useState } from "react";

const Calculator = () => {
    const [sum, setSum] = useState(0);

    const handleSum = (e) => {
        e.preventDefault()
        const num1 = e.target.num1.value;
        const num2 = e.target.num2.value;

        setSum(parseInt(num1) + parseInt(num2));
    }

    return (
        <form onSubmit={handleSum}>
            <input type="text" name="num1" id="" required/>
            <input type="text" name="num2" id="" required/>
            <button>Sum</button>
            <p>Sum: {sum}</p>
        </form>
    );
};

export default Calculator;