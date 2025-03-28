import MyContext from "./context/MyContext";
import NestedProvider from "./components/NestedProvider";
import Child from "./components/Child";

function App() {
    return (
        <MyContext.Provider value="გარე მნიშვნელობა">
            <NestedProvider>
                <Child />
            </NestedProvider>
        </MyContext.Provider>
    );
}

export default App;
