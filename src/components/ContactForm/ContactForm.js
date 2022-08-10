import s from './ContactForm.module.css';
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
			<label className={s.form__label}>
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
			</label>

			<label className={s.form__label}>
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
			</label>
			<button className={s.form__button} type="submit">
				Add contact
			</button>
		</form>
	);
}

export default ContactForm;
