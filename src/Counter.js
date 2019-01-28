import { createStore } from 'redux'

import React, { Component } from 'react';

class Counter extends Component {
	state = {
		str: ""
	}

	render() {

		let store = createStore(counter)

		store.subscribe(() => console.log(store.getState()))

		store.dispatch({ type: 'INCREMENT' })
	
		store.dispatch({ type: 'INCREMENT' })
		
		store.dispatch({ type: 'DECREMENT' })

		return (
			<div>
				<p>{this.state.str}</p>
			</div>
		);
	}
}

function counter(state = 0, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1
		case 'DECREMENT':
			return state - 1
		default:
			return state
	}
}

export default Counter;