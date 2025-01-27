// 4) Inline Styles
// Create a style object and use it to apply inline styles to a <div> dynamically.
// Example: Change the backgroundColor based on a value from a predefined variable.

export default function App() {
    const divStyle = {
      backgroundColor: "red",
      width: 200,
      height: 200,
    }
  
    return (
      <main>
        <div style={divStyle}>
          
        </div>
      </main>
    );
}