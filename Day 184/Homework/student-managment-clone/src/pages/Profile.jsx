import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            <p>{user.email}</p>
            <p>{user.fullname}</p>
        </div>
    )
}

export default Profile;