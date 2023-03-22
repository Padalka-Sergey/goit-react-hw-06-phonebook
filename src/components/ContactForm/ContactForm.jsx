import { useState } from 'react';
import { Input, Btn, Label, Form } from './ContactForm.styled';
import { nanoid } from 'nanoid';

import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContactsValue } from 'redux/contactsSlice';

export function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContactsValue);

  const handleChange = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const formSubmitHandler = dataHandle => {
    const { name } = dataHandle;

    const contactFind = contacts.find(contact => contact.name === name);
    if (contactFind) {
      alert(`${contactFind.name} is already in contacts!`);
      return true;
    }

    const newContact = {
      ...dataHandle,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (formSubmitHandler({ name, number })) {
      return;
    }
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </Label>
      <Btn type="submit">Add contact</Btn>
    </Form>
  );
}
