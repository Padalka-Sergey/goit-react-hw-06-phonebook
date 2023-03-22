import { Label, Input, P } from './Filter.styled';

import { showContacts, getFilterContactsValue } from 'redux/filterSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterContactsState = useSelector(getFilterContactsValue);

  const onFilterHandler = evt => {
    const { value } = evt.currentTarget;
    dispatch(showContacts(value));
  };
  return (
    <Label>
      <P>Find contacts by name</P>
      <Input
        type="text"
        name="filter"
        value={filterContactsState}
        onChange={onFilterHandler}
      />
    </Label>
  );
};
