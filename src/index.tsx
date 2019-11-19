import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { rootReducer } from './app/_shared/store/configureReducer'
import { initialState } from './app/_shared/store/configureStore'
import AppRouter from './router'
import './main.scss'

const store = createStore(
  rootReducer,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

const app = document.getElementById('app')
ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  app
)

// TODO
// i18n
// loading of public sources to dist
// BE login auth
//
