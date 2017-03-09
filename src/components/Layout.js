import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  
	constructor(props) {
	    super(props);
	}

	render() {
	    return (
	      <div className="app">
	        <header>
	          <h1>shopping list</h1>
	        </header>
	        <div className="main-content">{this.props.children}</div>
	        <footer>
	        </footer>
	      </div>
	    );
	}
}

