import { combineReducers, configureStore } from '@reduxjs/toolkit';
import themeConfigSlice from './themeConfigSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import userReducer from './userSlice';
import patientReducer from './patientSlice';

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    themeConfig: themeConfigSlice,
    User: userReducer,
    Patients: patientReducer
});
  
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    // reducer: rootReducer,
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store)