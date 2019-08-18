

class ButtonComponent extends React.Component {
	render() {
		const buttonData = new Date();
		return (
			<div style={{border: 'solid 2px black'}} onClick={() => this.props.onButtonClicked(buttonData)}>
			{this.props.text}</div>
		);
	}
}

class ParentComponent extends React.Component {
	render() {
		return (
			<ButtonComponent text="Click Me !!!" onButtonClicked={(dataFromButton) => 
				alert('Button clicked, at : ' + dataFromButton)} />
		)
	}
}


ReactDOM.render(<ParentComponent />, document.querySelector('#root'));
