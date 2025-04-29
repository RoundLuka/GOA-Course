import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const { login } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: e.target.email.value,
            pass: e.target.pass.value
        }

        e.target.reset();

        login(data);
    }
    
    return (
        <div>
            <h1>This is Login Page</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email" required />
                <input type="password" name="pass" placeholder="Password" required />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login;