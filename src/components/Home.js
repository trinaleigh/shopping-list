import React from 'react';
import { Link } from 'react-router';
import ShoppingList from '../containers/ShoppingList';
import ItemInput from '../containers/ItemInput';

export default class Home extends React.Component {
	
	constructor(props) {
		super(props);
	}

  	render() {

	    return (
	    	<div>
	    	<h2>list</h2>
	    	<ShoppingList/>
	    	<ItemInput/>
	    	</div>
	    );
	}
}

