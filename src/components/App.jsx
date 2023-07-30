import { useState, useEffect } from 'react';
import  FormContact from './FormContact/FormContact';
import { ListContact } from './ListContact/ListContact';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Conteiner, Box } from './App.styled';
export default function App() {

  const [contacts, setContacts] = useState([{ id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' }]);
  const [filter, setFilter] = useState('');
 
   useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      setContacts(parseContacts);
    };
   }, []);
  
   useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
 
  const addContact = ({ name, number }) => {
    const findContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (findContact) {
      return alert(`${name} is already in contacts.`);
    }
    const findNumber = contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase()
    );
    if (findNumber) {
      return alert(`${number} is already in use.`);
    }

    setContacts(contacts => {
      const list = [...contacts];
      list.push({ id: nanoid(), name: name, number: number });
      return list;
    });
  };

  const inputChangeFilter = e => {   
    setFilter(e.currentTarget.value);
  };

  const filterContacts = () => {    
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    
  };

  const onDeletContact = id => {
    setContacts(prevState => 
      prevState.filter(contact => contact.id !== id),
    );
  };
 
    return (
      <Conteiner>
        <h1>Phonebook</h1>
        <FormContact onAddContact={addContact} />

        <h2>Contacts</h2>
        <Box>
        <p>Find contacts by name</p>
        <Filter
          changeFilter={inputChangeFilter}
          filter={filter}
        />        
        <ListContact
          contacts={filterContacts()}
          onDeletContact={onDeletContact}
          />
          </Box>
      </Conteiner>
    );
  }

