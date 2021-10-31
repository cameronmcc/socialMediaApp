import { createContext } from 'react';

const INITIAL_STATE = {
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = () => {
  const [state, dispatch] = useReducer(AuthContext, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
      }}
    ></AuthContext.Provider>
  );
};
