import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppRouter from "./router";
import "./main.scss";

const reducer = (state: any, action: any) => {
  console.log("reducer", state, action);
  switch (action.type) {
    case "onUsernameChange":
      return { username: action.payload, password: state.password };
    case "onPasswordChange":
      return { username: state.username, password: action.payload };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  { username: "", password: "" },
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const app = document.getElementById("app");
if (app) {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    app
  );
}

// TODO
// i18n
// loading of public sources to dist
// BE login auth
//
