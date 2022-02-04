import { configureStore } from '@reduxjs/toolkit';
//import { persistStore } from 'redux-persist';
import contactsReducer from './reducer';
//import { logger } from './middlewareLogger';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  //middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

//export const persistor = persistStore(store);
