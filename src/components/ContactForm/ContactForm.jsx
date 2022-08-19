import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsAPI';
import Notiflix from 'notiflix';
import BeatLoader from "react-spinners/BeatLoader";
import {
  FormContacts,
  LabelForm,
  SubmitBtn,
  TitleForm,
  InputForm,
} from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data: contacts } = useGetContactsQuery();
  const [addContact, { isLoading, error }] = useAddContactMutation();
 

  const handleSubmit =async e => {
    e.preventDefault();

    const isAdded = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number );
      if (isAdded) {
        return Notiflix.Notify.warning(`${name} is already in contacts `);  
      }
    try {
      await addContact({name, number,});
    Notiflix.Notify.success(`Contact ${name} is created!`);
      reset();
    } catch {
      Notiflix.Notify.error(`Error,something went wrong!`);
      console.log(error);
    }  
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

    return (
      <>
        <FormContacts onSubmit={handleSubmit}>
          <LabelForm>
            <TitleForm>Name</TitleForm>
            <InputForm
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={handleChange}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </LabelForm>
          <LabelForm>
            <TitleForm>Number</TitleForm>
            <InputForm
              type="tel"
              name="number"
              value={number}
              onChange={handleChange}
              placeholder="Enter Phone Number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </LabelForm>
          <SubmitBtn type="submit" disabled={isLoading}>
            {isLoading ?
              <BeatLoader
              color="#ffffff"
              margin={5}
              size={9}
              /> : 'Add contact'}
          </SubmitBtn>
        </FormContacts>
      </>
    );
  
}
