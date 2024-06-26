import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App.js";
import ChatApp from "./chat/ChatApp.jsx";

const root = ReactDOMClient.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <ChatApp />
  </React.StrictMode>
);
