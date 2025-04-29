import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    const { register } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            username: e.target.username.value,
            email: e.target.email.value,
            pass: e.target.pass.value,
            isVerified: false,
            code: "2006",
            id: Date.now()
        }

        e.target.reset();

        register(data);
    }
    
    return (
        <div>
            <h1>This is Register Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" required />
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="pass" placeholder="Password" required />
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register;