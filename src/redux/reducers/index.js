import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { favoriteReducer } from "./favoriteReducer";
export default combineReducers({
    productReducer,
    favoriteReducer
})