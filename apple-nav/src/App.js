import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import NavWrapper from './components/NavWrapper';
import SubNav from './components/SubNav';
import data from './data';

const App = () => {
	const [products] = useState(data);
	return (
		<div className="App">
			<Route path="/" component={NavWrapper} />
			<Route
				path="/:id"
				render={props => {
					return <SubNav {...props} items={products} />;
				}}
			/>
		</div>
	);
};

export default App;
