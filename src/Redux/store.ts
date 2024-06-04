import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// slices
import MainSlice from './Slices/MainSlice';

export const store = configureStore({
  reducer: {
    MainSlice: MainSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();