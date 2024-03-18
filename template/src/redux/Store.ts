import {configureStore} from '@reduxjs/toolkit';
import {AuthSlice} from 'features';
import {apiSlice} from 'services';

export const store = configureStore({
  reducer: {
    auth: AuthSlice,

    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([apiSlice.middleware]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
