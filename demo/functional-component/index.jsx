
function MyFunctionalComponent() {
	return (
		<div style={{ marginTop: 24, }}>
			<li style={{ fontSize: 50, }}>My Functional Component with JSC Style</li>
		</div>
	);
}

class MyClassComponent extends React.Component {
	render() {
		return (
			<div style={{ marginTop: 24, }}>
				<li style={{ fontSize: 50, }}>My Class Component with JSC Style</li>
			</div>
		)
	}
}


ReactDOM.render(<MyFunctionalComponent />, document.querySelector('#root'));

