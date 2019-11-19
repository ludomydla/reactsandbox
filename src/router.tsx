import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import LoginPage from './app/users/LoginPage'
import LogoutPage from './app/users/LogoutPage'
import HomePage from './app/users/HomePage'
import ExamplePage from './app/users/ExamplePage'
import OrdersPage from './app/orders/OrdersPage'

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/orders' component={OrdersPage} />
        <Route exact path='/example' component={ExamplePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/logout' component={LogoutPage} />
      </Switch>
    </Router>
  )
}
