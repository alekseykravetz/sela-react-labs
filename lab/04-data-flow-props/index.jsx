
function Title({ title }) {
	return (
		<div style={{ fontSize: 50, backgroundColor: 'blue', }}>{title}</div>
	);
}

class App extends React.Component {
	render() {
		return (
			<div style={{ marginTop: 24, }}>
				<Title title="This thex rendered by Title Component" />
			</div>
		)
	}
}


ReactDOM.render(<App />, document.querySelector('#root'));

