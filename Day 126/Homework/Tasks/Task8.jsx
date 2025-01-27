// 8) Nested Map Rendering
// Use .map() inside another .map() to render a nested structure.
// Example: An array of categories where each category contains an array of items.


export default function App() {
    const categories = [['category1Item1', 'category1Item2', 'category1Item3'], ['category2Item1', 'category2Item2', 'category2Item3'], ['category3Item1', 'category3Item2', 'category3Item3']]
  
    return (
      <main>
        <ul>
          {categories.map((item, index) => (
            <li key={index}>
              <ul>
                {item.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
    );
}