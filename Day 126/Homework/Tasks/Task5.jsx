// 5) Rendering JSX from a Function
// Define a function that returns a JSX element.
// Call this function inside the render method of your parent component.


export default function App() {
    function Header() {
      return (
        <div>
          <h1>Hello</h1>
          <p>This function returns JSX</p>
        </div>
      )
    }
  
    return (
      <main>
        {Header()}
      </main>
    );
}