import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    items: [],
    favorites: [],
    filter: {
      language: '',
      level: '',
      price: '',
    },
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
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    removeFilter(state, action) {
      state.filter.language = '';
      state.filter.level = '';
      state.filter.price = '';
    },
  },
});

export const {
  addTeachers,
  addFavorite,
  removeFavorite,
  setFilter,
  removeFilter,
} = teachersSlice.actions;
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
