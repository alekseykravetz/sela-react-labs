
const calculateWinner = squares => {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		}
	}
	return null;
};

class Game extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			history: [
				{
					squares: Array(9).fill(null)
				}
			],
			stepNumber: 0,
			xIsNext: true
		};
	}

	handleClick = i => {
		// eslint-disable-next-line react/no-access-state-in-setstate
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();

		if (calculateWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = this.state.xIsNext ? 'X' : 'O';
		const historyWithNewStep = history.concat([{ squares }]);

		this.setState({
			history: historyWithNewStep,
			stepNumber: history.length,
			// eslint-disable-next-line react/no-access-state-in-setstate
			xIsNext: !this.state.xIsNext
		});
	}


	jumpTo(step) {
		this.setState({
			stepNumber: step,
			xIsNext: (step % 2) === 0
		});
	}

	render() {
		console.log('Game rendering');

		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);
		const status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

		return (
			<div style={styles.game}>
				<Board squares={current.squares} onClick={i => this.handleClick(i)} />
				<div style={styles.gameInfo}>
					<div>{status}</div>
					<ol>
						{history.map((step, move) => (
							<li key={move}>
								<button
									style={move === this.state.stepNumber ? styles.selectedMove : {}}
									onClick={() => this.jumpTo(move)}>
									{move ? `Go to move #${move}` : 'Go to game start'}
								</button>
							</li>
						))}
					</ol>
				</div>
			</div>
		);
	}

}


class Board extends React.Component {
	renderSquare(i) {
		return <Square key={i} squareIndex={i} value={this.props.squares[i]} onClick={this.props.onClick} />;
	}

	render() {
		console.log('Board rendering');

		return (
			<div style={styles.board}>

				{[0, 3, 6].map(rowVal => (
					<div key={rowVal} style={styles.boarRrow}>
						{[0, 1, 2].map(columnVal => this.renderSquare(rowVal + columnVal))}
					</div>
				))}

			</div>
		);
	}
}

class Square extends React.Component {
	render() {
		console.log(`Square #${this.props.squareIndex} rendering`);

		return (
			<button type="button" style={styles.boardSquare} onClick={() => this.props.onClick(this.props.squareIndex)}>
				{this.props.value}
			</button>
		);
	};
}

const styles = {
	game: { display: 'flex', flexDirection: 'column' },
	gameInfo: { marginTop: 20 },

	board: { padding: 5, border: '1px solid #e4e4e4' },

	boarRrow: { display: 'flex', flexDirection: 'row' },

	boardSquare: {
		width: 125,
		height: 125,

		border: '1px solid #e4e4e4',

		color: 'black',
		fontSize: '5em',
		fontWeight: '100',
		textAlign: 'center',
		padding: 20,
	},

	selectedMove: { backgroundColor: 'greenyellow' },

}


ReactDOM.render(<Game />, document.querySelector('#root'));

