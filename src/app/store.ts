import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// import counterReducer from '../features/counterSlice';
import AccountReducer from '../components/accounts/accountsSlice'
import TaskReducer from '../components/accounts/accountsSlice'

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    account: AccountReducer,
    task : TaskReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
