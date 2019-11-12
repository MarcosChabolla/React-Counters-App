import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';


class App extends Component {
	state = {
		counters: [
		{ id: 1, value: 0 },
		{ id: 2, value: 0 },
		{ id: 3, value: 0 },
		{ id: 4, value: 0 }
		]
	};

	constructor(){
		super();
		console.log('App-Constructor');
	}

	componentDidMount(){
		//Perfect place for Ajax calls
		//this.setState({ movies });
		console.log('App-Mounted');
	}

	handleIncrement = counter => {
		const counters = [...this.state.counters]; //instead of returning Array[arrayOfCounters[],...,...,...] we get Array[c1,c2,c3,c4,...]
		const index = counters.indexOf(counter);
		counters[index] = counter;
		counters[index].value++;
		this.setState({ counters });
	};

	handleDelete = (counterId) => {
		const counters = this.state.counters.filter(c => c.id !== counterId);
		this.setState({ counters });
		//this.setState({ counters: counters }) simplifyable since the key and value is the same ~object deconstruction~
	};

	handleReset = () => {
		const counters = this.state.counters.map(c => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	render() {
		return (
			<React.Fragment>
			<NavBar totalCounters = {this.state.counters.filter(c=>c.value > 0).length} />
              <main className="container">
              	<Counters
	              	counters={this.state.counters}
	              	onReset={this.handleReset}
	              	onIncrement={this.handleIncrement}
	              	onDelete={this.handleDelete}
              	/>
              </main>
            </React.Fragment>
		);
	}
}
export default App;