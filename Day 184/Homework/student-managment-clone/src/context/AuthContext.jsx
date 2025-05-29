import { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const register = (user) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        const userExsists = users.find((data) => data.email === user.email);

        if(userExsists) {
            alert("user is registered!");
            return;
        }

        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        navigate('/login')
    }

    const login = (user) => {
        const users = JSON.parse(localStorage.getItem("users")) || [];

        if(users.length === 0){
            alert("Users arr is empty");
            navigate("/register");
            return;
        }

        const userExsist = users.find((data) => data.email === user.email && data.pass === user.pass);

        if(!userExsist) {
            alert("Account not found");
            return;
        }

        setUser(userExsist);

        navigate("/profile");
    }

    return (
        <AuthContext.Provider value={{register, login, user}}>
            {children}
        </AuthContext.Provider>
    )
}