const INITIAL_STATE = {
  token: null,
};

function AuthReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "LOG_IN":
      return {
        ...state,
        token: action.payload,
      };

    case "LOG_OUT":
      return {
        ...state,
        token: null,
      };
  }

  return state;
}

export default AuthReducer;
