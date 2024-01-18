import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    favorites: [],
  },
  reducers: {
    addTeachers: (state, action) => {
      state.items = action.payload;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        item => item.id !== action.payload.id
      );
    },
  },
});

export const { addTeachers, addFavorite, removeFavorite } =
  teachersSlice.actions;
export const teachersReducer = teachersSlice.reducer;

const teachersPersistConfig = {
  key: 'teachers',
  storage,
  whitelist: ['favorites'],
};

export const persistedTeachersReducer = persistReducer(
  teachersPersistConfig,
  teachersReducer
);
