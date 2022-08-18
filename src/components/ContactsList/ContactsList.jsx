import { useSelector } from 'react-redux';
import { Contacts } from './Contacts/Contacts';
import { ListContacts } from './ContacktsList.styled';


const getFilteredContacts = (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(item => item.name.toLowerCase().includes(normalizedFilter));
}

export const ContactsList = () => { 
    const items = useSelector(state => state.items.items);
    const filter = useSelector(state => state.items.filter);
    const filteredContacts = getFilteredContacts(items, filter);

    return (
      <ListContacts>
        {filteredContacts.map(({ id, name, number }) => (
          <Contacts
            key={id}
            id={id}
            name={name}
            number={number}
          ></Contacts>
        ))}
      </ListContacts>
    );
  
}
