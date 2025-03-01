// 1. Rendering a List
// Render a list of strings stored in a constant array using .map() inside JSX.
// Example: Render an unordered list (<ul>) of items like ["Apple", "Banana", "Cherry"].

export default function App() {
    const fruits = ["Apple", "Banana", "Cherry"];
  
    return (
      <div>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    );
}