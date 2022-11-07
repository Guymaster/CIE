import { createContext, useState } from "react";
import { desQueArrive } from "../../firebase/operations";

export const UserContext = createContext(null);

export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState({});
    const value = {
        user, setUser
    };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};