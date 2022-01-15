import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error":
      return { ...state, errorMessage: action.payload };
    case "login":
      return { errorMessage: "", token: action.payload };
    case "clear_error_message":
      return { ...state, errorMessage: "" };
    case "logout":
      return { token: null, errorMessage: "" };
    default:
      return state;
  }
};

const signUp =
  (dispatch) =>
  async ({ email, password }) => {};

const login =
  (dispatch) =>
  ({ email, password }) => {
    console.log("email", email, "password", password);
  };

const logout = (dispatch) => async () => {};

const clearErrorMessage = (dispatch) => () => {};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signUp, login, logout, clearErrorMessage },
  { token: null, errorMessage: "" }
);
