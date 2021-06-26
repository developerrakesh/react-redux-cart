import { ActionTypes } from "../constants";

const { ADD_PRODUCTS, SELECT_PRODUCT, REMOVE_PRODUCT } = ActionTypes;

export const add_products = products => {
	return {
		type: ADD_PRODUCTS,
		payload: products
	};
};

export const select_product = product => {
	return {
		type: SELECT_PRODUCT,
		payload: product
	};
};

export const remove_product = () => {
	return {
		type: REMOVE_PRODUCT
	};
};
