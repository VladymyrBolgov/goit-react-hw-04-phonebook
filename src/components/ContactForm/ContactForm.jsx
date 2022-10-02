import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Form, FormLabel, FormInput, FormButton } from './ContactForm.styled';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  
  inputNameId = nanoid();
  inputTelId = nanoid();

 const handleChanges = event => {
    const { name, value } = event.target;

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

 const handleOnSubmit = event => {
    event.preventDefault();
    props.onSubmit(state);
   reset();
  };

  //reset = () => {
  //  setState({ name: '', number: '' });
 // };

    return (
      <Form onSubmit={handleOnSubmit}>
        <FormLabel htmlFor={inputNameId}>Name</FormLabel>
        <FormInput
          id={inputNameId}
          type="text"
          name="name"
        value={name}
        onChange={handleChanges}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <FormLabel htmlFor={inputTelId}>Number</FormLabel>
        <FormInput
          id={inputTelId}
          type="tel"
          name="number"
          value={number}
         onChange={handleChanges}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <FormButton type="submit">Add contact</FormButton>
      </Form>
    );
  }

export default ContactForm;
