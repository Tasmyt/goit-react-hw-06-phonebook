import PropTypes from 'prop-types';
import { Li, Button } from "./ItemContact.styled";
export const ItemContact = ({ id, name, number, deletContact }) => {
  
  return (
    
      <li key={id}>
        <Li>
      <p>
        {name}: {number};
      </p>
      <Button type="button" onClick={() => deletContact(id)}>
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
  deletContact: PropTypes.func.isRequired,
};