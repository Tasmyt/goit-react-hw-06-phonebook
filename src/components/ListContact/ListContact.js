import PropTypes from 'prop-types';
import { ItemContact } from '../ItemContact/ItemContact';

export const ListContact = ({onDeletContact, contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        
        <ItemContact key={id} id = {id} name={name} number={number} deletContact={onDeletContact } />

      ))}
    </ul>
  );
};
ListContact.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeletContact: PropTypes.func.isRequired,
};