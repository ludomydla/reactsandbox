import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./app/user/LoginPage";
import LogoutPage from "./app/user/LogoutPage";
import HomePage from "./app/user/HomePage";
import ExamplePage from "./app/user/ExamplePage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/example' component={ExamplePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/logout' component={LogoutPage} />
      </Switch>
    </BrowserRouter>
  );
}
