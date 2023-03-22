import PropTypes from 'prop-types';
import { ContactItem, Span, Btn } from './ContactItem.styled';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactItem>
      {name}: <Span>{number}</Span>
      <Btn type="button" onClick={() => onDelete(id)}>
        Delete
      </Btn>
    </ContactItem>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
