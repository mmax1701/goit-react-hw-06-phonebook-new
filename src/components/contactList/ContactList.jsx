import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, filterContacts } from '../../redux/contactFormReducer';

const ContactList = () => {
  const contacts = useSelector(state => state.contactForm.contacts) || [];
  const filter = useSelector(state => state.contactForm.filter) || '';
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const handleChange = e => {
    dispatch(filterContacts(e.target.value));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <div>
        <label>Find contacts by name</label>
        <input type="text" name="filter" onChange={handleChange} />
      </div>
      <div>
        <ul>
          {filteredContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <button type="button" onClick={() => handleDelete(contact.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;
