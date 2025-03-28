import { useContext } from "react";
import AnotherContext from "./context/AnotherContext";

const Child = () => {
    const value = useContext(AnotherContext);
    return <div>{value}</div>;
};

export default Child;
