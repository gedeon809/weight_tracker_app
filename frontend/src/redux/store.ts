import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { weightApi, authApi } from './services/weight'
import userReducer from "./userSlice"
import { persistStore, persistReducer, PAUSE, FLUSH, PERSIST } from 'redux-persist'
import storage  from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'


const persistConfig = {
  key: "root",
  version: 1,
  storage
};
const persistedReducer = persistReducer(persistConfig, userReducer)



export const store = configureStore({
  reducer: {
    persistedReducer,
    // Add the generated reducer as a specific top-level slice
    [weightApi.reducerPath]: weightApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST],
      },
    }).concat(weightApi.middleware).concat(authApi.middleware)
})

export const persistor = persistStore(store)
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)