import { createSlice } from '@reduxjs/toolkit';

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
    removeUser: (state, action) => {
      state.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { addUser, removeUser } = authSlice.actions;
