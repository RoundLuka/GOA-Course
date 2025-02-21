import './App.css'
import ProfileList from './components/ProfileList';


function App() {
    const userProfiles = [
        {
            id: 1,
            name: "Alice Johnson",
            age: 28,
            occupation: "Software Engineer"
        },
        {
            id: 2,
            name: "Bob Smith",
            age: 34,
            occupation: "Graphic Designer"
        },
        {
            id: 3,
            name: "Charlie Davis",
            age: 22,
            occupation: "Marketing Specialist"
        },
        {
            id: 4,
            name: "Diana Lopez",
            age: 30,
            occupation: "Data Analyst"
        },
        {
            id: 5,
            name: "Ethan Carter",
            age: 26,
            occupation: "Product Manager"
        }
        ];
    return (
        <div>
            <ProfileList profiles={userProfiles} />
        </div>
    )
}


export default App
