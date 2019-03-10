import React, { Component } from 'react';

class Counter extends Component {
	state = {
		str: ""
	}

	counter(state = 0, action) {
		switch (action.type) {
			case 'INCREMENT':
				return state + 1
			case 'DECREMENT':
				return state - 1
			default:
				return state
		}
	}

	test(store) {
		for (var i = 0; i < 1000000; i++) {
			store.dispatch({ type: 'INCREMENT' })
		}
	}

	waitForOneThousandMs(time) {
		time *= 1000;

		for (var i = 0; i < time; i++) {
			
		}
	}

	randomizer() {
		var sum = 0;
		var max = -1;
		for (var i = 0; i < 100; i++) {
			this.waitForOneThousandMs(10);
			var t2 = console.timeEnd("waitForOneThousandMs");
			
			if (max < parseFloat(t2)) {
				max = parseFloat(t2);
			}

			sum += parseFloat(t2);
		}
		
		console.log(parseFloat(t2));
		console.log(max);

		return sum/100/max; 
	}

	componentWillMount() {
		//let store = createStore(this.counter)
		console.log(this.randomizer());
	}

	render() {
		return (
			<div>
				<p></p>
			</div>
		);
	}
}

export default Counter;