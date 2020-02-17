import React from 'react';
import { Route, Link } from 'react-router-dom';
import Overview from './Overview';

const ItemDescription = props => {
	const product = props.item.products.find(item => {
		if (item.name.localeCompare(props.match.params)) {
			return item;
		}
	});
	console.log(product.description, 'product');
	return (
		<div className="description-header">
			<p>{props.match.params.id}</p>
			<p>
				<Link to={`/${props.item.id}/${product.name}/description/overview`}>
					Overview
				</Link>
			</p>
			<p>Tech Spec</p>
			<button>Buy</button>
			<Route
				path="/:id/:id/description/overview"
				render={props => {
					return <Overview item={product.description} {...props} />;
				}}
			/>
		</div>
	);
};

export default ItemDescription;
