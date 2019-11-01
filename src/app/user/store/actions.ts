export const onUsernameChange = (username: string) => {
  const result = {
    type: "onUsernameChange",
    payload: username
  };
  console.log("ACTION onUsernameChange", result);
  return result;
};

export const onPasswordChange = (password: string) => ({
  type: "onPasswordChange",
  payload: password
});
