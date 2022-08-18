import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import {
  FormContacts,
  LabelForm,
  SubmitBtn,
  TitleForm,
  InputForm,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const items = useSelector(state => state.items.items);

  const handleSubmit = e => {
    e.preventDefault();

    const isAdded = items.find(item => item.name.toLowerCase() === name.toLowerCase());
      if (isAdded) {
        alert(`${name} is already in contacts `);
        return;
      }
    
     dispatch(addContact({
      id: nanoid(),
      name,
      number,
    }));

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
          <SubmitBtn type="submit">Add contact</SubmitBtn>
        </FormContacts>
      </>
    );
  
}
