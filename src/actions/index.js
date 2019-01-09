export const getWelcome = () => ({
  type: "GET_NEWS"
});

export const getUser = (username, password, resolve, reject) => ({
  type: "GET_USER",
  username,
  password,
  resolve,
  reject
});
