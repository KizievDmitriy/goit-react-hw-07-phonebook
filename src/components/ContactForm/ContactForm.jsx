import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/contactsAPI';

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
  const [addContact, { isLoading }] = useAddContactMutation();
 

  const handleSubmit = e => {
    e.preventDefault();

    const isAdded = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase() || contact.number === number );
      if (isAdded) {
        return alert(`${name} is already in contacts `);
        
      }
    
     addContact({
      name,
      number,
    });

    reset();
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
          <SubmitBtn type="submit" disabled={isLoading}>Add contact</SubmitBtn>
        </FormContacts>
      </>
    );
  
}
