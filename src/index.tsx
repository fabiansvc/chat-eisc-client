"use strict";

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles.css";
import { StrictMode } from "react";
import React from "react";

const root = createRoot(document.getElementById("root"))

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)