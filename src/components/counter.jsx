import React, { Component } from 'react';

class Counter extends Component {

	componentDidUpdate(prevProps, prevState){
		console.log(prevState, prevProps);
		if (prevProps.counter.value !== this.props.counter.value) {
			//Ajax call to do something
		}
	}

	componentWillUnmount() {
		console.log('Counter-Unmount');
	}
	// state = {
	// 	value : this.props.counter.value
	// 	// tags: ['tag1', 'tag2', 'tag3']
	// };

	// constructor(){
	// 	super();
	// 	this.handleIncrement = this.handleIncrement.bind(this);
	// }

	styles = {
		fontSize: 10,
		fontWeight: 'bold'
	};

	// handleIncrement = () => {
	// 	this.setState({value: this.state.value + 1});

	// 	// console.log('Increment Clicked', this.state.count);
	// 	//object.method();
	// 	//function();
	// }

	// doHandleIncrement = () => {
	// 	this.handleIncrement({ id: 1})
	// }
	//this is garbage for a wrapper, use inline function

	render() {
		return (
			<div>
				<span style = { this.styles } className={ this.getBadge() }>{this.formatCount()}</span>
				<button onClick = { () => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
				<button onClick = { () => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
			</div>
		);
	}

	formatCount(){
		const { value } = this.props.counter; //Object destructuring, picks the value of the object this.state
		// return this.state.count === 0 ? 'Zero': this.state.count;
		return value === 0 ? 'Zero' : value;
	}

	getBadge(){
		let classes = "badge m-2 badge-";
		classes += (this.props.counter.value === 0) ? "warning": "primary";
		return classes;
	}

	renderTags() {
		if (this.state.tags.length === 0 ) return <p>No tags!</p>;
		return <ul> { this.state.tags.map(tag => <li key={tag}>{ tag }</li>)}</ul>
	}
}

export default Counter;