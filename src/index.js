import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SettingsContextProvider from "./context/SettingContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <SettingsContextProvider>
      <App />
    </SettingsContextProvider>
  </StrictMode>
);
