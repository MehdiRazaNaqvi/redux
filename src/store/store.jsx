import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import counterReducer from './counterslice';
// import groupReducer from './groups';
// import userReducer from './users';

const reducers = combineReducers({
    counter : counterReducer,
    // group: groupReducer,
    // user: userReducer,
});


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
});







export default store;