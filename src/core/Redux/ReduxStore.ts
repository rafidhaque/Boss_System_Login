import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createSelectorHook, useDispatch } from 'react-redux';
import { ReducerAuth } from './Slices';

const RootReducer = combineReducers({
  auth: ReducerAuth,
});

export const RisQAppStoreStore = configureStore({
  reducer: RootReducer,
  devTools: process.env.NODE_ENV === 'production',
});

export type RisQAppStateType = ReturnType<typeof RootReducer>;
export type RisQAppDispatch = typeof RisQAppStoreStore.dispatch;
export const useAppDispatch = () => useDispatch<RisQAppDispatch>();
export const useAppSelector = createSelectorHook<RisQAppStateType>();