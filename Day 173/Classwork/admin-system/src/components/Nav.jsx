import { useContext } from "react";
import { Link } from "react-router"
import { AuthContext } from "../context/AuthContext";

const Nav = () => {
    const {user, logout} = useContext(AuthContext);
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    {
                        !user ? (
                            <>
                                <li><Link to={"/login"}>Login</Link></li>
                                <li><Link to={"/register"}>Register</Link></li>
                            </>
                        ) : (
                            <>
                                <li><Link to={"/panel"}>Admin Panel</Link></li>
                                <li onClick={logout}>Logout</li>
                            </>
                        )
                    }
                    
                </ul>
            </nav>
        </header>
    )
}

export default Nav;