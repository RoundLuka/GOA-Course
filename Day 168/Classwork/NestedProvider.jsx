import AnotherContext from "../context/AnotherContext";
import Child from "./Child";

const NestedProvider = ({ children }) => {
    return (
        <AnotherContext.Provider value="value">
            {children}
        </AnotherContext.Provider>
    );
};

export default NestedProvider;
