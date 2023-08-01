import { useState, useEffect } from 'react';
import  FormContact from './FormContact/FormContact';
import { ListContact } from './ListContact/ListContact';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Conteiner, Box } from './App.styled';
export default function App() {

  const [contacts, setContacts] = useState([{ id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' }]);
   
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
 
    return (
      <Conteiner>
        <h1>Phonebook</h1>
        <FormContact  />

        <h2>Contacts</h2>
        <Box>
        <p>Find contacts by name</p>
        <Filter />        
        <ListContact />
          </Box>
      </Conteiner>
    );
  }

