import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import { useState } from "react";

const ContactForm = ({addContact}) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
      if (name.trim() === '' || number.trim() === '') {
        return;
    }

    const newContact = {
        id: nanoid(),
        name: name.trim(),
        number: number.trim()
    };

    addContact(newContact); 
      
    setName('');
    setNumber('');

  };
  
    return (
        <form onSubmit={handleSubmit} className={css.form}>
        <h2 className={css['input__title']}>Name</h2>
        <input
          className={css['input']}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <h2 className={`${css['input__title']} ${css['number']}`}>Number</h2>
        <input
          className={css['input']}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />

            <button className={css.button__add} type="submit">Add contact</button>
      </form>
    );
  }

ContactForm.propTypes = {
      addContact: PropTypes.func.isRequired,      
};

export default ContactForm;