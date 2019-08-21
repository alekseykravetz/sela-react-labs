

const person = {
	name: 'John',
	surname: 'Smith',
	gender: 'male',
}

class Person extends React.Component {
	render() {
		return (
			<div style={{ border: '2px solid blue', padding: 20 }}>
				<h1>Person Details</h1>
				<h2>Name: {person.name} </h2>
				<h2>Surname: {person.surname}</h2>
				<h2>Gender: {person.gender}</h2>
			</div>
		);
	}
}

const personList = [person, person, person];

class PersonList extends React.Component {
	render() {
		return (
			<div style={{ padding: 10 }}>
				<h1>Person List</h1>
				{personList.map(p => <Person />)}
			</div>
		);
	}
}

ReactDOM.render(<PersonList />, document.querySelector('#root'));
