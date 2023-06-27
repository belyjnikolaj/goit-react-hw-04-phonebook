import PropTypes from 'prop-types';
import css from './ContactList.module.css';
const ContactList = ({ contact, handleDelete }) => {
    return (
        <li className={css['contact__item']} key={contact.id}>
            {contact.name}: {contact.number}
            <button
                type="button"
                className={css["btn__close"]}
                aria-label="Close"
                onClick={() => handleDelete(contact.id)}
            >
                Delite
            </button>
        </li>
    )
}
ContactList.propTypes = {
  contact: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default ContactList;