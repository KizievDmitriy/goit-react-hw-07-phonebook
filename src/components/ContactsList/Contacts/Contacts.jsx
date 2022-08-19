import PropTypes from 'prop-types';
import BeatLoader from "react-spinners/BeatLoader";
import { useDeleteContactMutation } from 'redux/contactsAPI';
import { ItemContact, DeleteBtn, Name, Number } from './Contacts.styled';

export const Contacts = ({ name, number, id }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  
  return (
    <ItemContact>
      <Name>{name}</Name>
      <Number>{number}</Number>
      <DeleteBtn
        onClick={() => deleteContact(id)}
        type="button"
        disabled={isLoading}>
        {isLoading ?
          <BeatLoader
            color="#ffffff"
            margin={5}
            size={8}
          /> :
          'Delete'}
      </DeleteBtn>
    </ItemContact>
  );
};

Contacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
