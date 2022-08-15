import { v4 as uuidv4 } from 'uuid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box } from './Box';

import { useDispatch, useSelector } from 'react-redux/';
import {
	addContactList,
	getContacts,
	changeFilter,
	removeContact,
	getFilterContacts,
} from '../components/redux/contactsSlice';

function App() {
	const dispatch = useDispatch();
	const contacts = useSelector(getContacts);
	const filter = useSelector(getFilterContacts);

	// const [contacts, setContacts] = useState([]);
	// const [filter, setFilter] = useState('');

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

		dispatch(addContactList(contact));
	};

	const handleFilter = event => {
		dispatch(changeFilter(event.currentTarget.value));
	};

	const getVisibleContacts = () => {
		const normalizedFilter = filter.toLowerCase();
		console.log(contacts);
		return contacts.filter(contact => {
			console.log(contact);
			return contact.name.toLowerCase().includes(normalizedFilter);
		});
	};

	const deleteContact = contactId => {
		dispatch(removeContact(contactId));
	};

	return (
		<Box display="flex" alignItems="center" flexDirection="column">
			<Box>
				<h1>Phonebook</h1>
				<ContactForm onSubmit={addContact} />
				<h2>Contacts </h2>
				<Filter value={filter} onChange={handleFilter} />
				<ContactList
					contacts={getVisibleContacts()}
					onDeleteContact={deleteContact}
				/>
			</Box>
		</Box>
	);
}
export default App;
