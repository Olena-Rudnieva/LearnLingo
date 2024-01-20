// import { createSelector } from '@reduxjs/toolkit';

export const selectTeachers = state => state.teachers.items;
export const selectFavorites = state => state.teachers.favorites;
export const selectFilter = state => state.teachers.filter;
