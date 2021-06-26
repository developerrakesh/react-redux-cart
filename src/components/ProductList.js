import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { add_products, remove_product } from "../redux/actions";
import Product from "./Product";

export default function ProductList() {
	const store = useSelector(store => store.products);
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		try {
			const response = await axios.get("https://fakestoreapi.com/products");
			dispatch(add_products(response.data));
		} catch (err) {
			console.log("Error: ", err);
		}
	};

	useEffect(() => {
		dispatch(remove_product());
		!store.length && fetchProducts();
	}, []);

	return (
		<div className="productContainer" style={{ display: "flex", flexWrap: "wrap" }}>
			{console.log(store)}
			{store.map(product => (
				<Product key={product.id} product={product} />
			))}
		</div>
	);
}
