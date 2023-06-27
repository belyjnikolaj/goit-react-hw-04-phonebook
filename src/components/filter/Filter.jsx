import css from './Filter.module.css';
import PropTypes from 'prop-types';
const Filter = ({ filter, handleChangeFilter }) => {
    return (
        <div className={css['filter__conteiner']}>
            <h2 className={css['input__title']}>Find contacts by name</h2>
            <input className={css.input}
                type="text"
                placeholder='Seach...'
                value={filter}
                onChange={ handleChangeFilter } />  
        </div>
    )
}
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};

export default Filter;