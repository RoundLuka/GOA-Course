import React from 'react';

// 7) Dynamic HTML Tag Rendering
// Create a constant that stores the name of an HTML tag (e.g., h1, p).
// Use JSX to render the dynamic tag with content like "This is dynamic!"



export default function App() {
  const tag = 'h1';

  return (
    <main>
      {React.createElement(tag, null, 'This is dynamic!')}
    </main>
  );
}