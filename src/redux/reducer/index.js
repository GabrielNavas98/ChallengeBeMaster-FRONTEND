import { combineReducers } from "redux";
import { contentReducer } from "./contentReducer";
import { userReducer } from "./userReducer";
import { categoriesReducer } from "./categoriesReducer";

export default combineReducers({
    content: contentReducer,
    users: userReducer,
    categories: categoriesReducer
})