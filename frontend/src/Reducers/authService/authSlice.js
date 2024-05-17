import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  userToken: null,
  refreshToken: null,
  registerData: null,
  loginData: {},
  error: null,
  success: false,
  forgotPasswordData: {},
  isLoggedIn: false,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.clear();
      return initialState;
    },
    setForgotPasswordData: (state, { payload }) => {
      state.forgotPasswordData = payload;
    },
    setCredentials: (state, { payload }) => {
      state.userInfo = payload;
    },
    setRegisterData: (state, { payload }) => {
      state.registerData = payload;
      localStorage.setItem("registerData", JSON.stringify(payload));
    },
    setLoginData: (state, { payload }) => {
      state.loginData = payload;
      localStorage.setItem("loginData", JSON.stringify(payload));
    },
    setRefreshToken: (state, { payload }) => {
      state.refreshToken = payload;
      localStorage.setItem("refreshToken", payload);
    },
    resetRegisterData: (state) => {
      state.registerData = {};
    },
    setIsLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload;
    },
    setUserToken: (state, { payload }) => {
      state.userToken = payload;
      localStorage.setItem("access_token", payload);
    },
    // Define your reducer actions here
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    // Other actions...
  },
});

export const {
  logout,
  setForgotPasswordData,
  setCredentials,
  setRegisterData,
  setLoginData,
  setRefreshToken,
  resetRegisterData,
  setIsLoggedIn,
  setUserToken,
  setLoading,
  setError,
} = authSlice.actions;

export default authSlice.reducer;
