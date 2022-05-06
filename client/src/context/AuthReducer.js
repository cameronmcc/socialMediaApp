const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        user: null,
        isFetching: falselse,
        error: false,
      };
    case 'LOGIN_SUCCESS':
      return {
        user: action.payload,
        isFetching: true,
        error: false,
      };
    case 'LOGIN_FAILURE':
      return {
        user: null,
        isFetching: falselse,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default AuthReducer;
