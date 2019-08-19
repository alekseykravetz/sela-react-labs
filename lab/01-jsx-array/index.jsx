
class Colors extends React.Component {
	render() {
		const colors = ['red', 'green', 'blue'];

		return (
			<ol>
				{colors.map(color => (
					<li style={{ backgroundColor: color }}>Color: {color}</li>
				))}
			</ol>
		);
	}
}

ReactDOM.render(<Colors />, document.querySelector('#root'));


