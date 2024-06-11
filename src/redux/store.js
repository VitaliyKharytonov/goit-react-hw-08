import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsSlice from './contacts/slice';
import filtersSlice from './filters/slice';
import aurhSlice from './auth/slice';

const persistConfig = {
  key: 'contactList',
  storage,
  whitelist: ['items'],
};

const persistedAuthReducer = persistReducer(persistConfig, aurhSlice);

export const store = configureStore({
  reducer: { contacts: contactsSlice, filters: filtersSlice, auth: persistedAuthReducer },
});

export const persistor = persistStore(store);
