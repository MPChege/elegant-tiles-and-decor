import React from 'react';
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initResponsiveDesign } from "./lib/responsive.ts";

// Initialize responsive design
initResponsiveDesign();

const rootElement = document.getElementById("root");
if (rootElement) {
  createRoot(rootElement).render(<App />);
}