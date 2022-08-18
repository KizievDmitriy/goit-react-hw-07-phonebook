import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contactsAPI';
import { filterSlice } from './contactSlice';

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filterSlice.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});