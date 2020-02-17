// icons from https://www.iconninja.com/

import React from 'react';
import '../App.css';
import { Route, Link } from 'react-router-dom';
import ItemDescription from './ItemDescription';

const SubNav = props => {
	const items = props.items.find(item => {
		return item.id === props.match.params.id;
	});

	const mac = require('../assets/macbook-pro.svg');
	const iphone = require('../assets/iphone.svg');
	const ipad = require('../assets/ipad.svg');
	const watch = require('../assets/iwatch.svg');
	const music = require('../assets/music.svg');
	const tv = require('../assets/tv.svg');

	const image =
		items.id === 'mac'
			? mac
			: items.id === 'iphone'
			? iphone
			: items.id === 'ipad'
			? ipad
			: items.id === 'watch'
			? watch
			: items.id === 'music'
			? music
			: tv;

	return (
		<div className="item-wrapper">
			{items.products.map(item => (
				<Link key={item.id} to={`/${items.id}/${item.name}/description`}>
					<div className="item">
						<img src={image} />
						<p>{item.name}</p>
					</div>
				</Link>
			))}
			<Route
				path="/:id/:id/description"
				exact
				render={props => {
					return <ItemDescription item={items} {...props} />;
				}}
			/>
		</div>
	);
};

export default SubNav;
