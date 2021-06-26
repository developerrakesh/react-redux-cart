import React from "react";
import { Link } from "react-router-dom";

export default function Product({ product }) {
	const { id, title, image } = product;
	return (
		<Link to={`/details/${id}`} style={{ width: "25%", cursor: "pointer" }}>
			<div className="product">
				<img src={image} alt={title} style={{ width: "100%" }} />
				<h2>{title}</h2>
			</div>
		</Link>
	);
}
