"use strict";

import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";
import { StrictMode } from "react";

const root = createRoot(document.getElementById("root"))

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
)