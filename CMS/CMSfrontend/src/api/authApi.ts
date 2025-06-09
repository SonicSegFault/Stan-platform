import axios from "axios";

export const loginUser = async (formData: {username: String, password: String}) => {
    try{
        const response = await axios.post("http://localhost:5000/auth/login", 
            {
                username: formData.username,
                password: formData.password
            },
            { withCredentials: true }
        )
        return response.data.accessToken
    } catch(err){
        console.log(err);
    }
}