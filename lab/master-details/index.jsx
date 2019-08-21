

class Person extends React.Component {
	render() {
		const person = this.props.person;

		return (
			<div style={{ border: '2px solid blue', padding: 10 }}>
				<h1>Person Details</h1>
				{person &&
					<div>
						<h4>Name: {person.name} </h4>
						<h4>Surname: {person.surname}</h4>
						<h4>Gender: {person.gender}</h4>
					</div>
				}
			</div>
		);
	}
}

class PersonList extends React.Component {

	state = {
		personList: [
			{
				name: 'John',
				surname: 'Smith',
				gender: 'male',
			},
			{
				name: 'David',
				surname: 'Jones',
				gender: 'male',
			},
			{
				name: 'David',
				surname: 'Brown',
				gender: 'male',
			},
		],
		selectedPerson: null
	};

	onPersonClicked = person => {
		this.setState({
			selectedPerson: person
		})
	};

	render() {
		return (
			<div style={{ padding: 20 }}>
				<h1>Person List</h1>
				{this.state.personList.map(p => (
					<div style={{ margin: '10px 0', cursor: 'pointer' }} onClick={() => this.onPersonClicked(p)}>
						{p.surname}
					</div>
				))}
				<div>
					<Person person={this.state.selectedPerson} />
				</div>
			</div>
		);
	}
}

ReactDOM.render(<PersonList />, document.querySelector('#root'));
