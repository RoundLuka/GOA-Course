import { createContext, useState } from "react";
import { getLocal, setLocal } from "../utils/localStorage";
import { useNavigate } from "react-router";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate();

    const register = (data) => {
        const accounts = getLocal("accounts");
        const account = accounts.findIndex(acc => acc.email === data.email);

        if(account !== -1) {
            alert("Account already exists");
            return;
        }

        accounts.push(data);
        setLocal("accounts", accounts);
        alert("Registration successful");
        navigate(`/verification/${data.email}`);
    }

    const login = (data) => {
        const accounts = getLocal("accounts");
        const account = accounts.find(acc => acc.email === data.email && acc.password === data.password);

        if(!account) {
            alert("Invalid credentials");
            return;
        }

        if(account.isVerified === false){
            alert("Please verify your email before logging in");
            navigate(`/verification/${account.email}`);
            return;
        }
        setUser(account);
        navigate("/panel")
    }

    const logout = () => {
        setUser(null);
    }

    console.log(user)
 
    return (
        <AuthContext.Provider value={{register, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    )
}

