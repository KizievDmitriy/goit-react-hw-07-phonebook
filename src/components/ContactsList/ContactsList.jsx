import { useSelector } from 'react-redux';
import { useGetContactsQuery } from 'redux/contactsAPI';
import { Contacts } from './Contacts/Contacts';
import { ListContacts } from './ContacktsList.styled';


export const ContactsList = () => { 
  const { data: contacts, isLoading } = useGetContactsQuery();
  const filter = useSelector(state => state.filter); 
  const filteredContacts = contacts?.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));



    return (
      <ListContacts>
        {isLoading ? (
                <p>Loading...</p>
            ) : (filteredContacts.map(({ id, name, number }) => (
          <Contacts
            key={id}
            id={id}
            name={name}
            number={number}
          ></Contacts>
        )))}
      </ListContacts>
    );
  
}
