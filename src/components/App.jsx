import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Container } from './Container/container';

export const App = () => {
  return (
    <>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>
      </Container>
      <Container>
        <h2>Contacts</h2>
        <Filter/>
        <ContactsList/>
      </Container>
    </>
  );
};


