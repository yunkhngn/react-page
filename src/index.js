import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { StyleReset } from 'atomize';
import ErrorBoundary from "./Page/ErrorBoundary/ErrorBoundary";
import { ThemeStateProvider } from "./store";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
// 1. Create a client engine instance
const engine = new Styletron();

ReactDOM.render(
     <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <ErrorBoundary>
        <ThemeStateProvider>
          <StyleReset/>
          <App/>
        </ThemeStateProvider>
      </ErrorBoundary>
    </StyletronProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
