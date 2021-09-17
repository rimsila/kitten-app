import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
export type AppThunkOption = {
  state: RootState;
  dispatch: AppDispatch;
};
