import React from "react";
import ReactDOM from "react-dom";
import Input from "./js/shared/components/Input.jsx";

const app = document.getElementById("app");
if (app) {
  ReactDOM.render(<Input />, app);
}
