import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const {login} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: e.target.email.value,
            pass: e.target.pass.value
        }

        login(user)

        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pass" placeholder="Password" required />
            <button>Submit</button>
        </form>
    )
}

export default Login;