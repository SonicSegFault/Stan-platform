import axios from "axios";

const logoutUser = async () => {
    try{
        await axios.post("http://localhost:5000/auth/logout", {},
            { withCredentials: true }
        )
        console.log("User logged Out");
    } catch(err) {
        console.log("Logout Failed", err);
    }
}

export default logoutUser