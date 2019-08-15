
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

const Game = props => {

	const handleClick = (i) => {
		const historyCopy = history.slice(0, stepNumber + 1);
		const current = historyCopy[historyCopy.length - 1];
		const squares = current.squares.slice();

		if (calculateWinner(squares) || squares[i]) {
			return;
		}

		squares[i] = xIsNext ? 'X' : 'O';
		const historyWithNewStep = historyCopy.concat([{ squares }]);

		setStepNumber(historyCopy.length)
		setHistory(historyWithNewStep);
		setXIsNext(!xIsNext);
	}

	const jumpTo = step => {
		setStepNumber(step)
		setXIsNext((step % 2) === 0);
	}

	const [history, setHistory] = React.useState([{ squares: Array(9).fill(null) }]);
	const [stepNumber, setStepNumber] = React.useState(0);
	const [xIsNext, setXIsNext] = React.useState(true);

	const current = history[stepNumber];
	const winner = calculateWinner(current.squares);
	const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

	const moves = history.map((h, index) => {
		const desc = index ? `Go to move #${index}` : 'Go to game start';
		return (
			<li key={index}>
				<button type="button" onClick={() => jumpTo(index)}>{desc}</button>
			</li>
		);
	});


	return (
		<div className="game">
			<div className="game-board">
				<Board
					squares={current.squares}
					onClick={i => handleClick(i)}
				/>
			</div>
			<div className="game-info">
				<div>{status}</div>
				<ol>{moves}</ol>
			</div>
		</div>
	);

}


const Board = props => {
	const renderSquare = (i) => <Square key={i} value={props.squares[i]} onClick={() => props.onClick(i)} />;

	return (
		<div>
			<div className="status">{status}</div>

			{[0, 3, 6].map(rowVal => (
				<div key={rowVal} className="board-row">
					{[0, 1, 2].map(columnVal => renderSquare(rowVal + columnVal))}
				</div>
			))}

		</div>
	);
}

const Square = (props) => {
	return (
		<button type="button" className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
};


ReactDOM.render(<Game />, document.querySelector('#root'));

