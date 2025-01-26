import { useState } from "react";
import Presentational from "./presentational";

const Container = () => {
    const [sum, setSum] = useState(0);

    const handleSum = (e) => {
        e.preventDefault()
        const num1 = e.target.num1.value;
        const num2 = e.target.num2.value;

        setSum(parseInt(num1) + parseInt(num2));
    };

    return (
        <Presentational handleSum={handleSum} sum={sum}/>
    );
}

export default Container;