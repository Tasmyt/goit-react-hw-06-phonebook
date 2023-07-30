import { useState } from "react";
import { Form, Lable, Input, Button } from "./FormContact.styled";
export default function FormContact({onAddContact}) {

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    
    const inputChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default: return;
        }
    };

    const resetInput = e => {
        e.preventDefault();  
        onAddContact({name,number});
        setName('');
        setNumber('');
    }
    
    return (
      <Form onSubmit={resetInput}>
        <Lable> Name
            <Input
                type="text"
                name="name"
                value={name}
                onChange={inputChange}
                // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </Lable>
        
        <Lable>Number
            <Input
                type="tel"
                name="number"
                value={number}
                onChange={inputChange}
                // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </Lable>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
