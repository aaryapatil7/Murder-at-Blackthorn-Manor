import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ClueProvider } from "./context/ClueContext";
import { InterrogationProvider } from "./context/InterrogationContext";
import "./styles/global.css";

ReactDOM.createRoot(
  document.getElementById("root")
).render(
  <React.StrictMode>
    <ClueProvider>
      <InterrogationProvider>
        <App />
      </InterrogationProvider>
    </ClueProvider>
  </React.StrictMode>
);