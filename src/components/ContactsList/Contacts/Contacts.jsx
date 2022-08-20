import PropTypes from 'prop-types';
import BeatLoader from "react-spinners/BeatLoader";
import Notiflix from 'notiflix';
import { useDeleteContactMutation } from 'redux/contactsAPI';
import { useEffect } from 'react';
import { ItemContact, DeleteBtn, Name, Number } from './Contacts.styled';

export const Contacts = ({ name, number, id }) => {
  const [deleteContact, { isLoading, isSuccess }] = useDeleteContactMutation();
  
   useEffect(() => {
    return () => {
      if (isSuccess) {
        Notiflix.Notify.failure(
          `You have removed ${name} from your list`
        );
      }
    };
  }, [ name, isSuccess]);



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
