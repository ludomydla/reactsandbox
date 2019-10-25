import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router";
import "./main.scss";

const app = document.getElementById("app");
if (app) {
  ReactDOM.render(<AppRouter />, app);
}
