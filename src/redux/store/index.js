import { legacy_createStore as createStore} from 'redux'
import {  applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import  combineReducers from "../reducer/index";
import thunk from "redux-thunk";
//-------------Redux-Persist------------------//
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig={
  key: 'main-root',
  storage
}

const persistedReducer = persistReducer(persistConfig, combineReducers)

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
); 

const Persistor = persistStore(store)

export {Persistor}
export default store