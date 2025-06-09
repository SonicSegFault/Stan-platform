import { createContext, ReactNode, useContext, useState } from "react";

type AuthContextProp = {
    token: string | null,
    setToken: (token: string | null) => void 
};

const AuthContext = createContext<AuthContextProp | undefined>(undefined);

type AuthContextProviderProp = {
    children: ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderProp) => {
   const [token, setToken] = useState<string | null>(null); 

   return (
    <AuthContext.Provider value={{token, setToken}}>
        {children}
    </AuthContext.Provider>
   )
}

//simple hook to useContext without importing everywhere
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthContextProvider");
    }
    return context; // Returns { token, setToken }
}
