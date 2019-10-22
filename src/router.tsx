import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "./app/user/LoginPage";
import Home from "./app/user/Home";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/logout' component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
}
