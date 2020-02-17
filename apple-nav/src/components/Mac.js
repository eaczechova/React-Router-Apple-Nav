import React from 'react';
import '../App.css';
import { Route, Link } from 'react-router-dom';

const Mac = props => {
	const logo = require('../assets/macbook-pro.svg');
	return (
		<div className="item-wrapper">
			<Link>
				{' '}
				<div className="item">
					{' '}
					<img src={logo}></img>
					<p>MacBook Air</p>
				</div>
			</Link>
			<Link>
				{'  '}
				<div className="item">
					{' '}
					<img src={logo}></img>
					<p>MacBook Pro 13''</p>
				</div>
			</Link>
			<Link>
				{' '}
				<div className="item">
					{' '}
					<img src={logo}></img>
					<p>MacBook Pro 16''</p>
				</div>
			</Link>
			<Link>
				{' '}
				<div className="item">
					{' '}
					<img src={logo}></img>
					<p>iMac</p>
				</div>
			</Link>
			<Link>
				{' '}
				<div className="item">
					{' '}
					<img src={logo}></img>
					<p>iMac Pro</p>
				</div>
			</Link>
			<Link>
				{' '}
				<div className="item">
					{' '}
					<img src={logo}></img>
					<p>Mac Pro</p>
				</div>
			</Link>
			<Link>
				{' '}
				<div className="item">
					{' '}
					<img src={logo}></img> <p>Mac mini</p>
				</div>
			</Link>
			<Link>
				{' '}
				<div className="item">
					{' '}
					<img src={logo}></img>
					<p>Compare</p>
				</div>
			</Link>
			<Link>
				{' '}
				<div className="item">
					{' '}
					<img src={logo}></img>
					<p>Pro Display XDR</p>
				</div>
			</Link>
			<Link>
				{' '}
				<div className="item">
					{' '}
					<img src={logo}></img>
					<p> Accessoriesfor Mac</p>
				</div>
			</Link>
			<Link>
				{' '}
				<div className="item">
					{' '}
					<img src={logo}></img>
					<p>Catalina</p>
				</div>
			</Link>
		</div>
	);
};

export default Mac;
