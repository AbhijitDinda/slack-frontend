import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/context/useAuth";
import { useEffect } from "react";


export const ProtectedRoute = ({ children }) => {
    const { auth } = useAuth();

    useEffect(() => {

    }, [auth.isLoading]);

    if(auth.isLoading) {
        return <div>Loading...</div>
    }
    
    if(!auth.user || !auth.token){
        return <Navigate to="/auth/signin"/>
    }

    return children;
};
