import css from './App.module.css';
import ContactForm from 'components/contactForm/';
import Filter from 'components/filter/';
import ContactList from 'components/contactList/';
import { useState, useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) setContacts(JSON.parse(storedContacts));
  }, []);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const addContact = (newContact) => {
    const existingContact = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      setContacts((prevContacts) => [...prevContacts, newContact]);
    }
  };

  const handleChangeFilter = (e) => {
    setFilter(e.target.value);
  };

  const handleDelete = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  return (
    <div className={css['phonebook__container']}>
      <h1 className={css['phonebook__title']}>Phonebook</h1>

      <ContactForm addContact={addContact} />

      <h2 className={css['contacts__title']}>Contacts</h2>
      <Filter filter={filter} handleChangeFilter={handleChangeFilter} />

      {contacts.length === 0 ? (
        <p>No contacts available</p>
      ) : (
        <ul>
          {contacts
            .filter((el) => el.name.toLowerCase().includes(filter.toLowerCase()))
            .map((contact) => (
              <ContactList key={contact.id} contact={contact} handleDelete={handleDelete} />
            ))}
        </ul>
      )}
    </div>
  );
};

export default App;
