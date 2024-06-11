import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';
import { useDispatch } from 'react-redux';

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();

  const hendleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button className={css.button} onClick={hendleDelete}>
        Delete
      </button>
    </div>
  );
}
