import { ActionTypes } from "../constants";

const { ADD_PRODUCTS, SELECT_PRODUCT, REMOVE_PRODUCT } = ActionTypes;
export const addProductsReducer = (state = [], { type, payload }) => {
	switch (type) {
		case ADD_PRODUCTS:
			return [...state, ...payload];
		default:
			return state;
	}
};

export const selectProductReducer = (state = null, { type, payload }) => {
	switch (type) {
		case SELECT_PRODUCT:
			return payload;
		case REMOVE_PRODUCT:
			return null;
		default:
			return state;
	}
};
