import { createBrowserHistory } from 'history'
//import { applyMiddleware, compose, createStore } from "redux";
//import { routerMiddleware } from "connected-react-router";
//import createRootReducer from "./configureReducer";

export const history = createBrowserHistory()

// export default function configureStore(preloadedState: any) {
//   const store = createStore(
//     createRootReducer(history), // root reducer with router state
//     preloadedState,
//     compose(
//       applyMiddleware(
//         routerMiddleware(history) // for dispatching history actions
//         // ... other middlewares ...
//       )
//     )
//   );

//   return store;
// }

export const initialState = {
  username: '',
  password: '',
  menu: [
    {
      categoryId: 1,
      imageUrl: 'categories/cagtegory-tea.svg',
      children: []
    },
    {
      categoryId: 2,
      imageUrl: 'categories/cagtegory-coffee.svg',
      children: [
        {
          id: 20,
          timeToPrepare: 90,
          imageUrl: 'products/ristretto.svg',
          contribution: 1,
          resources: []
        },
        {
          id: 21,
          timeToPrepare: 90,
          imageUrl: 'products/espresso.svg',
          contribution: 1,
          resources: []
        },
        {
          id: 22,
          timeToPrepare: 150,
          imageUrl: 'products/cappucino.svg',
          contribution: 1.5,
          resources: []
        },
        {
          id: 23,
          timeToPrepare: 150,
          imageUrl: 'products/caffe-latte.svg',
          contribution: 2,
          resources: []
        }
      ]
    },
    {
      categoryId: 3,
      imageUrl: 'categories/cagtegory-cold-drinks.svg',
      children: []
    },
    {
      categoryId: 4,
      imageUrl: 'categories/cagtegory-chocolate.svg',
      children: []
    },
    {
      categoryId: 5,
      imageUrl: 'categories/cagtegory-sweets.svg',
      children: []
    },
    {
      categoryId: 6,
      imageUrl: 'categories/cagtegory-salty.svg',
      children: []
    }
  ]
}
