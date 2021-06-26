import { combineReducers } from "redux";
import { addProductsReducer, selectProductReducer } from "./productReducers";

export const allReducers = combineReducers({
	products: addProductsReducer,
	product: selectProductReducer
});
