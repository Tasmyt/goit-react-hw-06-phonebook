import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ItemContact } from '../ItemContact/ItemContact';
import { getContacts, getFilter } from '../../redax/selectors';

export const ListContact = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <ul>
      {contactsFilter.map(({ id, name, number }) => (        
        <ItemContact key={id} id = {id} name={name} number={number} />
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