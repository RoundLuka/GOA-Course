import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getLocal, setLocal } from "../utils/localStorage";

const Verification = () => {
    const [accounts, setAccounts] = useState([]);
    const navigate = useNavigate();

    const {email} = useParams();

    useEffect(() => {
        setAccounts(getLocal("accounts"));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const account = accounts.find((acc) => acc.email === email);

        if(account.code === e.target.code.value){
            account.isVerified = true;
            delete account.code;

            setLocal("accounts", accounts);
            alert("Email verified successfully!");
            navigate("/login");
            return;
        }

        alert("Incorrect");
        return;
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="code" placeholder="Code" required/>
                <button>Verify</button>
            </form>
        </div>
    )
}

export default Verification;