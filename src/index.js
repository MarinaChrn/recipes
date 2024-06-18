import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";

const theme = {
  colors: {
    black: "#212121",
    white: "#fff",
    accent: "#6DA758",
  },
  radii: {
    xs: "2px",
    sm: "4px",
    md: "8px",
    lg: "16px",
  },
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
