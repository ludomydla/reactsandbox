export const onUsernameChange = (username: string) => {
  const result = {
    type: 'onUsernameChange',
    payload: username
  }
  return result
}

export const onPasswordChange = (password: string) => ({
  type: 'onPasswordChange',
  payload: password
})
