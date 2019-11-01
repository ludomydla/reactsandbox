import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

const loginReducer = (state: any, action: any) => {
  switch (action.type) {
    case "onLoginNameChange":
      return (state.loginName = action.payload);
    case "onPasswordChange":
      return (state.password = action.payload);
    default:
      return state;
  }
};

const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    login: loginReducer
  });

export default createRootReducer;
