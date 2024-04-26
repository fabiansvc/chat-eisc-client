import { createContext, useContext, useState } from "react";

export const userContext = createContext();

export const useUser = () => {
    const context = useContext(userContext);
    if (!context) {
        throw new Error("Error creating context!")
    }
    return context;
}

export default function UserProvider({ children }) {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    )
}