import PropTypes from 'prop-types';
import { Input } from "./Filter.styled";
export const Filter = ({ filter, changeFilter }) => {
  return (
      <>
      <Input type="text" name="filter" value={filter} onChange={changeFilter}  />
      </>
  );
};
Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};