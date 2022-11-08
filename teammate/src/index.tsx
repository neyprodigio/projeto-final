import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter} from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";
import { PlayerProvider } from "./contexts/playersContext";
import { GlobalStyle } from "./styles/global";


const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AuthProvider>
                <PlayerProvider>
                    <GlobalStyle />
                    <App />
                </PlayerProvider>
            </AuthProvider>
        </BrowserRouter>
    </React.StrictMode>
);
