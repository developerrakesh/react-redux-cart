import React, { useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { select_product } from "../redux/actions";

export default function Details() {
	const { id } = useParams();
	const dispatch = useDispatch();
	const product = useSelector(store => store.product);
	const fetchDetails = async () => {
		try {
			const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
			dispatch(select_product(response.data));
		} catch (err) {
			console.log("Error: ", err);
		}
	};

	useEffect(() => {
		fetchDetails();
	}, []);
	return (
		<div>
			{!!!product ? (
				<h2>Loading...</h2>
			) : (
				<>
					<h2>{product.title}</h2>
					<img src={product.image} alt={product.title} />
				</>
			)}
		</div>
	);
}
