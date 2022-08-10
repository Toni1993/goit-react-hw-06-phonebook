import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { saveToLS, getFromLS } from 'components/helpers';

function App() {
	const [contacts, setContacts] = useState([]);
	const [filter, setFilter] = useState('');

	useEffect(() => {
		const parsedContacts = getFromLS('contacts');
		if (parsedContacts) {
			setContacts(parsedContacts);
		}
	}, []);

	useEffect(() => {
		saveToLS('contacts', contacts);
	}, [contacts]);

	const addContact = ({ name, number }) => {
		const contact = {
			id: uuidv4(),
			name,
			number,
		};

		const normolizedName = name.toLowerCase();
		if (
			contacts.find(contact => contact.name.toLowerCase() === normolizedName)
		) {
			return alert(`${name} is already in contacts`);
		}

		setContacts([...contacts, contact]);
	};

	const changeFilter = e => {
		setFilter(e.currentTarget.value);
		// console.log(this.state);
	};

	const getVisibleContacts = () => {
		const normolizedFiter = filter.toLowerCase();
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normolizedFiter),
		);
	};

	const deleteContact = contactId => {
		setContacts(contacts =>
			contacts.filter(contact => contact.id !== contactId),
		);
	};

	return (
		<div>
			<h1 className={s.title}>Phonebook</h1>
			<ContactForm onSubmit={addContact} />
			<h2 className={s.title}>Contacts </h2>
			<Filter value={filter} onChange={changeFilter} />
			<ContactList
				contacts={getVisibleContacts()}
				onDeleteContact={deleteContact}
			/>
		</div>
	);
}
export default App;
