import { FormLable } from './ContactForm.stylad';
import { FormButton } from './ContactForm.stylad';

import { useState } from 'react';

function ContactForm({ onSubmit }) {
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const addContact = e => {
		e.preventDefault();
		onSubmit({ name, number });
		reset();
	};
	const handleChangeName = e => {
		const { value } = e.currentTarget;
		setName(value);
	};
	const handleChangeNumber = e => {
		const { value } = e.currentTarget;
		setNumber(value);
	};
	const reset = () => {
		setName('');
		setNumber('');
	};
	return (
		<form onSubmit={addContact}>
			<FormLable>
				Name:
				<input
					value={name}
					onChange={handleChangeName}
					type="text"
					name="name"
					pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
					title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
					required
				/>
			</FormLable>

			<FormLable>
				Tel:
				<input
					value={number}
					onChange={handleChangeNumber}
					type="tel"
					name="number"
					pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
					title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
					required
				/>
			</FormLable>
			<FormButton type="submit">Add contact</FormButton>
		</form>
	);
}

export default ContactForm;
