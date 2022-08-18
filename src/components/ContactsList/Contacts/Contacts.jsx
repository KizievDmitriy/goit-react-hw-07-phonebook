import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactSlice';
import { ItemContact, DeleteBtn, Name, Number } from './Contacts.styled';



export const Contacts = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <ItemContact>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <DeleteBtn onClick={() => dispatch(deleteContact(id))} type="button">
        Delete
      </DeleteBtn>
    </ItemContact>
  );
};

Contacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
