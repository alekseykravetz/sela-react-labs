
class Board extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			squares: Array(3).fill(null)
		};
	}

	handleClick = i => {
		const squares = this.state.squares.slice();

		squares[i] = 'X';

		this.setState({ squares });
	}

	render() {
		console.log('Board rendering');

		return (
			<div>
				<div className="status">{'status'}</div>

				<div className="board-row">
					{
						this.state.squares.map((val, index) => (
							<Square
								value={this.state.squares[index]}
								squareIndex={index}
								onClick={this.handleClick} />
						))
					}
				</div>


			</div>
		);
	}
}

class Square extends React.PureComponent {
	render() {
		console.log(`Square #${this.props.squareIndex} rendering`);

		return (
			<button type="button" className="square" onClick={() => this.props.onClick(this.props.squareIndex)}>
				{this.props.value}
			</button>
		);
	};
}


ReactDOM.render(<Board />, document.querySelector('#root'));

