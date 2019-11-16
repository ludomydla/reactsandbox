export const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case "onUsernameChange":
      return { username: action.payload, password: state.password };
    case "onPasswordChange":
      return { username: state.username, password: action.payload };
    default:
      return state;
  }
};
