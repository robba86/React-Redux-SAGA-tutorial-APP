const userReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_USER":
      return { ...state, loading: true };
    case "USER_RECEIVED":
      return { ...state, user: action.json, loading: false };
    default:
      return state;
  }
};

export default userReducer;
