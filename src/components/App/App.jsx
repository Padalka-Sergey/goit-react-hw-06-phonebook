import { nanoid } from 'nanoid';
// import { data } from 'data/data';
import { Container } from 'components/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsListWrapper } from 'components/ContactsList/ContactsList';

import { useSelector, useDispatch } from 'react-redux';
import {
  addContact,
  deleteContact,
  getContactsValue,
} from 'redux/contactsSlice';
import { showContacts, getFilterContactsValue } from 'redux/filterSlice';

export function App() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactsValue);
  const filterContactsState = useSelector(getFilterContactsValue);

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

  const onFilterHandler = evt => {
    const { value } = evt.currentTarget;
    dispatch(showContacts(value));
  };

  const onFilterContacts = () => {
    const normFilter = filterContactsState.toLowerCase();
    return contacts.filter(contactEl =>
      contactEl.name.toLowerCase().includes(normFilter)
    );
  };

  const onDataContacts = () => {
    if (filterContactsState !== '') {
      return onFilterContacts();
    }
    return contacts;
  };

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Container title="Phonebook">
      <ContactForm onSubmitProps={formSubmitHandler} />
      <ContactsListWrapper
        title="Contacts"
        value={filterContactsState}
        onFilterHandler={onFilterHandler}
        dataContacts={onDataContacts()}
        onDelete={onDelete}
      ></ContactsListWrapper>
    </Container>
  );
}
