

class ButtonComponent extends React.Component {
	render() {
		const buttonData = 'hello from Button component';
		return (
			<div style={{border: 'solid 2px black'}} onClick={() => this.props.onButtonClicked(buttonData)}>{this.props.text}</div>
		);
	}
}

class ParentComponent extends React.Component {
	render() {
		return (
			<ButtonComponent text="Click Me !!!" onButtonClicked={(dataFromButton) => alert('Button clicked, data: ' + dataFromButton)} />
		)
	}
}


ReactDOM.render(<ParentComponent />, document.querySelector('#root'));


