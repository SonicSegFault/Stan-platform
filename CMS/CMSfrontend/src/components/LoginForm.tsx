import { useState } from "react";
import { useNavigate } from "react-router-dom";

//api
import { loginUser } from "../api/authApi";

//Context
import { useAuth } from "../context/AuthContext"

//material components
import { TextField, Button, Card, CardContent, Typography, InputAdornment } from "@mui/material";
import { AccountCircle, Lock } from '@mui/icons-material';

const LoginForm = () => {
    const { setToken } = useAuth(); //context to store accesstoken
    const [formData, setFormData] = useState({Username: '', Password: ''});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const [errors, setErrors] = useState({username: '', password: ''});
    const navigate = useNavigate();

    const handleSubmission = async (e: React.FormEvent) => {
        e.preventDefault();

        let tempErrors = {username: '', password: ''};

        if(!formData.Username.trim()) tempErrors.username = "Username is required";
        if (!formData.Password.trim()) tempErrors.password = "Password is required";

        setErrors(tempErrors);
        
        if(!tempErrors.username && !tempErrors.password) { 
            try{
                const token = await loginUser(
                    {
                        username: formData.Username,
                        password: formData.Password
                    }
                );

                if(token){
                    setToken(token);
                    navigate('/dashboard')
                }

            } catch(err){
                console.log(err);
            }
        }
    }
    return (
        <div className="flex justify-center items-center min-h-screen">
        <Card className="w-full max-w-sm shadow-lg p-5"
            sx={{ backgroundColor: 'transparent', 
                backdropFilter: 'blur(10px)', 
                boxShadow: 4,
                borderRadius: 4
            }}
        >
            <CardContent>
            <Typography variant="h5" className="text-center" 
                sx={{
                    mb: 5, 
                    fontWeight: 'bold', 
                    fontSize: '2rem',
                    color: 'white', 
                }}
            >
                Login
            </Typography>
            <form className="flex flex-col gap-4" onSubmit={handleSubmission}>
                <TextField
                name="Username"
                label="Username"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                error={!!errors.username}
                helperText={errors.username}
                sx={{
                    mb: 2,
                    "& .MuiInputLabel-root": {
                    color: "white", 
                    },
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "white", 
                    },
                    "&:hover fieldset": {
                        borderColor: "white", 
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "white", 
                    },
                    },
                    "& .MuiInputBase-input": {
                        color: "white", 
                    },
                }}
                
                InputProps={{ 
                    endAdornment: (
                        <InputAdornment position="end">
                            <AccountCircle sx={{ color: 'white' }} />
                        </InputAdornment>
                    ),
                    sx: { borderRadius: 10, color: "white" } 
                }}
                />
                <TextField
                name="Password"
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
                InputProps={{
                    endAdornment: (
                    <InputAdornment position="end">
                        <Lock sx={{ color: 'white' }} />
                    </InputAdornment>
                    ),
                    sx: { borderRadius: 10, color: "white" }
                }}
                sx={{
                    mb: 2,
                    "& .MuiInputLabel-root": {
                    color: "white", 
                    },
                    "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                        borderColor: "white", 
                    },
                    "&:hover fieldset": {
                        borderColor: "white", 
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: "white", 
                    },
                    },
                    "& .MuiInputBase-input": {
                    color: "white", 
                    },
                }}
                />
                <Button 
                    type="submit" variant="contained" color="primary"
                    sx={{
                        borderRadius: 10, 
                        border: "2px solid", 
                        borderColor: "primary.main", 
                    }}
                    >
                Login
                </Button>
            </form>
            </CardContent>
        </Card>
        </div>
    );
};

export default LoginForm;
