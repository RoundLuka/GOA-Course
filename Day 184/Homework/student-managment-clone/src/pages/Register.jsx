import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Register = () => {
    const {register} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            fullname: e.target.fullname.value,
            email: e.target.email.value,
            pass: e.target.pass.value
        }

        register(user)

        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Registration</h1>
            <input type="text" name="fullname" placeholder="Fullname" required />
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" name="pass" placeholder="Password" required />
            <button>Submit</button>
        </form>
    )
}

export default Register;