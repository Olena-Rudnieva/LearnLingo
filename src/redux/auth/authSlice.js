import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, register } from './authOperations';

const initialState = {
  email: null,
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { email, accessToken } = action.payload;
      state.email = email;
      state.token = accessToken;
      state.isLoggedIn = true;
    },
    addLoggedUser: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    removeUser: (state, action) => {
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.email = action.payload.user.email;
        state.token = action.payload.user.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      });
  },
  //   extraReducers: {
  //     [register.fulfilled](state, action) {
  //       state.user = action.payload.user;
  //       state.token = action.payload.token;
  //       state.isLoggedIn = true;
  //     },
  //     [logIn.fulfilled](state, action) {
  //       state.user = action.payload.user;
  //       state.token = action.payload.token;
  //       state.isLoggedIn = true;
  //     },
  //     [logOut.fulfilled](state) {
  //       state.user = { name: null, email: null };
  //       state.token = null;
  //       state.isLoggedIn = false;
  //     },
  //     [refreshUser.pending](state) {
  //       state.isRefreshing = true;
  //     },
  //     [refreshUser.fulfilled](state, action) {
  //       state.user = action.payload;
  //       state.isLoggedIn = true;
  //       state.isRefreshing = false;
  //     },
  //     [refreshUser.rejected](state) {
  //       state.isRefreshing = false;
  //     },
  //   },
});

export const authReducer = authSlice.reducer;
export const { addUser, addLoggedUser, removeUser } = authSlice.actions;
