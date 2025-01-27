// 10) String Interpolation
// Render a greeting message using variables and string interpolation.
// Example: const greeting = "Hello"; const name = "Alice"; renders "Hello, Alice!"


export default function App() {
    const greeting = "Hello";
    const name = "Alice";
  
    return (
      <main>
        <p>{greeting}, {name}!</p>
      </main>
    );
}