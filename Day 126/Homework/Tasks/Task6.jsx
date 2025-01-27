// 6) Template Strings in JSX
// Use template strings to dynamically render a sentence by combining multiple variables.
// Example: const name = "John"; const age = 30; renders "John is 30 years old."



export default function App() {
    const name = "John";
    const age = 30;
  
    return (
      <main>
        <p>{name} is {age} years old.</p>
      </main>
    );
}