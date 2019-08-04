

class ButtonComponent extends React.Component {
	render() {
		return (
			<div style={{border: 'solid 2px black'}} onClick={this.props.onButtonClicked}>{this.props.text}</div>
		);
	}
}

class ParentComponent extends React.Component {
	render() {
		return (
			<ButtonComponent text="Click Me !!!" onButtonClicked={() => alert('Button clicked')} />
		)
	}
}


ReactDOM.render(<ParentComponent />, document.querySelector('#root'));


