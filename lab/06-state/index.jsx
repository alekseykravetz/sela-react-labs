

class Clock extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { 
			date: new Date(),
			counter: 0,
		};
	}

	// OR 
	// state = { date: new Date() };

	render() {
		return (
			<div>
				<h1>Hello, world!</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}.</h2>
				
				<button onClick={() => this.setState({counter: this.state.counter + 1})}>Add 1</button>
				<div>Click Counter: {this.state.counter}</div>
			</div>
		);
	}
}


ReactDOM.render(<Clock />, document.querySelector('#root'));

