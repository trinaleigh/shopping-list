import React from 'react';
import { Link } from 'react-router';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import lister from '../reducers';

let store = createStore(lister)

export default class Layout extends React.Component {
  
	constructor(props) {
	    super(props);
	}

	render() {
	    return (
	  		<Provider store={store}>
				<div className="app">
					<header>
						<h1>shopping list</h1>
					</header>
					<div className="main-content">{this.props.children}</div>
					<footer>
					</footer>
				</div>
			</Provider>
	    );
	}
}

