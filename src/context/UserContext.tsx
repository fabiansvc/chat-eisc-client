import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
    email: string;
    password: string;
}

interface UserContextType {
    user: User;
    setUser: (user: User) => void;
}

export const userContext = createContext<UserContextType | undefined>(undefined);

export const useUser = (): UserContextType => {
    const context = useContext(userContext);
    if (!context) {
        throw new Error("Error creating context!");
    }
    return context;
};

interface UserProviderProps {
    children: ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }: UserProviderProps) => {
    const [user, setUser] = useState<User>({
        email: "",
        password: ""
    });

    return (
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
};

export default UserProvider;
