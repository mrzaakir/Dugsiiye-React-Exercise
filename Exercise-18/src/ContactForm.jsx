// ContactForm.jsx
import { useState } from 'react';

const getEmptyContact = () => ({
  id: null,
  name: '',
  email: '',
  phone: '',
});

const ContactForm = ({ dispatch, editingContact, setEditingContact }) => {
  const [contact, setContact] = useState(() => editingContact || getEmptyContact());
  const isEditing = Boolean(editingContact);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((currentContact) => ({ ...currentContact, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact.name.trim() || !contact.email.trim() || !contact.phone.trim()) {
      return;
    }

    if (isEditing) {
      dispatch({ type: 'edit', payload: contact });
    } else {
      dispatch({
        type: 'add',
        payload: { ...contact, id: Date.now(), favorite: false },
      });
    }

    setContact(getEmptyContact());
    setEditingContact(null);
  };

  const handleCancelEdit = () => {
    setContact(getEmptyContact());
    setEditingContact(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{isEditing ? 'Edit Contact' : 'Add New Contact'}</h3>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      {isEditing && (
        <button type="button" onClick={handleCancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
};

export default ContactForm;
