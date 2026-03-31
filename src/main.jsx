import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // SEO: Manages document head
import App from "./App.jsx";
import "./styles/index.css";

// Performance: Capture the root element once
const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {/* HelmetProvider wraps the app to prevent memory leaks 
        and allows components to override <title> and <meta> tags 
        safely on the client side.
      */}
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </React.StrictMode>,
  );
} else {
  console.error("Failed to find the root element");
}
