import React from "react";
import UserProvider from "./context/UserContext.tsx";
import RoutesChatEISC from "./routes/RoutesChatEISC.tsx";

const App: React.FC = () => {
    return (
        <UserProvider>
            <RoutesChatEISC />
        </UserProvider>
    );
};

export default App;
