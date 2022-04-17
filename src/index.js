import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { ThemeProvider, StyleReset } from 'atomize';

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

const theme = {
  shadows: {
    "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)"
  }
  
};

ReactDOM.render(
     <StyletronProvider value={engine} debug={debug} debugAfterHydration>
     <ThemeProvider theme={theme}>
      <StyleReset />
      <App />
    </ThemeProvider>
    </StyletronProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
