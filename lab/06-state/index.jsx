

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: 'Hello from state example',
			counter: 0,
		};
	}

	increament = () => {
		this.setState(state => {
			console.log(state);
			return {
				counter: state.counter + 1
			}
		});
	};

	render() {
		return (
			<div>
				<h1>{this.state.title}</h1>

				{/* <button onClick={() => this.setState({counter: this.state.counter + 1})}>Add Count</button> */}
				<button onClick={this.increament}>Add Count</button>
				<div>Click Counter: {this.state.counter}</div>
			</div>
		);
	}
}

ReactDOM.render(<Header />, document.querySelector('#root'));

