import React, { useEffect, useContext, createContext, useState } from "react";
import { auth } from "../firebase";

const UserContext = createContext({user:null});

export const useUserContext = () => useContext(UserContext );

const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(userAuth => {
        setUser({user: userAuth});
    });
    }, [])
    
    return (
        <UserContext.Provider value={{user}}> 
            {children}
        </UserContext.Provider>
    )

}

export default UserContextProvider;