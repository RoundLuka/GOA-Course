// 2) Conditional Rendering
// Create a variable that holds a boolean value.
// Use conditional rendering to display either a "Welcome" message or a "Please log in" message based on the variable.

export default function App() {
    const loggedIn = false;
  
    return (
      <div>
        {loggedIn ? <h1>Welcome</h1> : <h1>Please log in</h1>}
      </div>
    );
}