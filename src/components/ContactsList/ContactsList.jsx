// import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';

import { useSelector } from 'react-redux';
import { getFilterContactsValue } from 'redux/filterSlice';
import { getContactsValue } from 'redux/contactsSlice';

import {
  ContactsListBox,
  ContactsListTitle,
  ContactItems,
} from './ContactsList.styled';

export const ContactsListWrapper = () => {
  const contacts = useSelector(getContactsValue);
  const filterContactsState = useSelector(getFilterContactsValue);

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

  return (
    (onDataContacts().length !== 0 || filterContactsState !== '') && (
      <ContactsListBox>
        <ContactsListTitle>Contacts</ContactsListTitle>
        <Filter />
        <ContactItems>
          {onDataContacts().map(({ name, number, id }) => (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
            ></ContactsItem>
          ))}
        </ContactItems>
      </ContactsListBox>
    )
  );
};

// ContactsListWrapper.propTypes = {
//   dataContacts: PropTypes.arrayOf(
//     PropTypes.exact({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };
