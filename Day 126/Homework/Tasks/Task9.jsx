// 9) Rendering a Table
// Create a constant that holds an array of objects (e.g., a list of users with name and age properties).
// Render a table (<table>) where each row corresponds to an object.


export default function App() {
    const users = [{name: "Luka", age: "20"}, {name: "Martin", age: "30"}, {name: "Martin", age: "30"},]
  
    return (
      <main>
        <table>
          <thead>
            <th>Name</th>
            <th>Age</th>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
}