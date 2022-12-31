import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";

import GlobaStyles from "./styles";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobaStyles />
    <App />
  </React.StrictMode>
);
