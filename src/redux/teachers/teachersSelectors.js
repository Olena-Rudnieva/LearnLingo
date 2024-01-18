// import { createSelector } from '@reduxjs/toolkit';

export const selectTeachers = state => state.teachers.items;
export const selectIsLoading = state => state.teachers.isLoading;
export const selectFavorites = state => state.teachers.favorites;
