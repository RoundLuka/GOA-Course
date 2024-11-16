// console.log(React);
// console.log(ReactDOM)

// const p = React.createElement("p", {id: "1"}, "Hello world", React.createElement("b", null, React.createElement("i", null, "Hello world")));

const content = (
    <div>
        <h1>Header</h1>
        <p>Hello World</p>
        <p>Hello React</p>
        <button>Click me</button>
    </div>
);

// const vnl = document.createElement("p", null, "Hello World");

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement)

// console.log(ReactDOM.createRoot(root))


console.log(content);

// finally rendering the object
root.render(content);

// jsx is javascript syntax extension by react, it allows us to write html code in javascript