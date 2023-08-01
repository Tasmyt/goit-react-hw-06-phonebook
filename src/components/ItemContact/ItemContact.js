import PropTypes from 'prop-types';
import { deleteContact } from 'redax/contactsSlice';
import { useDispatch } from 'react-redux';
import { Li, Button } from "./ItemContact.styled";

export const ItemContact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  
  const onDeletContact = id => { dispatch(deleteContact(id)) };
  return (
    
      <li key={id}>
        <Li>
      <p>
        {name}: {number};
      </p>
      <Button type="button" onClick={() => onDeletContact(id)}>
        Delete
        </Button>
        </Li>
      </li>
      
  );
};
ItemContact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  
};