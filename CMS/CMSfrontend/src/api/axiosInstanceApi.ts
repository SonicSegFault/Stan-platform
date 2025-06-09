import axios from "axios";
import { useEffect } from "react";

// API
import logoutUser from "./logoutApi";
import { uploadapi } from "./uploadImageApi";

// Context
import { useAuth } from "../context/AuthContext";

export const useaxiosInterceptor = () => {
    const { setToken } = useAuth();

    useEffect(() => {
        uploadapi.interceptors.response.use(
            (response) => {
                console.log("CheckPoint - Response Received");
                return response;
            },
            async (error) => {
                const status = error.response.status;
                const originalReq = error.config;

                if (status === 401) {
                    console.log("401 Error Caught in Interceptor");
                    
                    try {
                        console.log("Trying to refresh token...");
                        const response = await axios.post(
                            "http://localhost:5000/auth/refresh",
                            {},
                            { withCredentials: true }
                        );

                        const newAccessToken = response.data.accessToken;
                        setToken(newAccessToken);

                        originalReq.headers["Authorization"] = `Bearer ${newAccessToken}`;
                        return uploadapi(originalReq); 
                    } catch (err) {
                        console.log("Refresh failed, logging out user.");
                        await logoutUser();
                        return Promise.reject(err);
                    }
                }

                return Promise.reject(error);
            }
        );
    }, [setToken]);
};
