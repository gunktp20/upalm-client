import { createSlice } from "@reduxjs/toolkit";
import { IAuthState } from "./types";
const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialState: IAuthState = {
  user: user ? JSON.parse(user) : null,
  profileImg: user ? JSON.parse(user).profileUrl : "",
  token: token || null,
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirm_password: "",
  email_forget_password: "",
  isTermActive: false,
};

// const addUserToLocalStorage: AddUserFunc = (user, token) => {
//   localStorage.setItem("user", JSON.stringify(user));
//   localStorage.setItem("token", token);
// };

const addTokenToLocalStorage = (token: string) => {
  localStorage.setItem("token", token);
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredential: (state, action) => {
      addTokenToLocalStorage(action.payload);
      return {
        ...state,
        token: action.payload,
      };
    },
  },
});

export const { setCredential } = AuthSlice.actions;

export default AuthSlice.reducer;
