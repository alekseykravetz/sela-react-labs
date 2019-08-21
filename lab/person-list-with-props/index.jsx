

class Person extends React.Component {
	render() {
		const person = this.props.person;

		return (
			<div style={{ border: '2px solid blue', padding: 10 }}>
				<h1>Person Details</h1>
				<h4>Name: {person.name} </h4>
				<h4>Surname: {person.surname}</h4>
				<h4>Gender: {person.gender}</h4>
			</div>
		);
	}
}

const personList = [
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
];

class PersonList extends React.Component {
	render() {
		return (
			<div style={{ padding: 20 }}>
				<h1>Person List</h1>
				{personList.map(p => (
					<div style={{ margin: '10px 0' }}>
						<Person person={p} />
					</div>
				))}
			</div>
		);
	}
}

ReactDOM.render(<PersonList />, document.querySelector('#root'));
