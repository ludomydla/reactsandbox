import React from "react";
import ReactDOM from "react-dom";
import Input from "./js/shared/components/Input";

const app = document.getElementById("app");
if (app) {
  ReactDOM.render(<Input value='Hello' label='This is a label' />, app);
}
