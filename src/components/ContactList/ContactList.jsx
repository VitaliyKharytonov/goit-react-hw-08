import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/contactsSlice';

export default function ContactList() {
  const filterContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filterContacts.map(contact => (
        <li key={contact.id} className={css.container}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
