import PropTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ value, onChange }) => (
	<label className={s.filter__label}>
		Find contacts by name
		<input
			className={s.filter__input}
			type="text"
			value={value}
			onChange={onChange}
			placeholder="Name contact"
		/>
	</label>
);

Filter.propTypes = {
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};

export default Filter;
