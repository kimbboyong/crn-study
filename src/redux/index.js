import { combineReducers } from "redux";
import authenticateReducer from "./reducer/authenticateReducer";
import productReducer from "./reducer/productReducer";


export default combineReducers({
    auth: authenticateReducer,
    product: productReducer,
});