import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/login/Login.tsx";
import Register from "../pages/register/Register.tsx";
import NotFound from "../pages/not-found/NotFound.tsx";
import Home from "../pages/home/Home.tsx";
import Chat from "../pages/chat/Chat.tsx";

const RoutesChatEISC: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RoutesChatEISC;
