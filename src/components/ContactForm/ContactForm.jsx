import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

export default function ContactForm() {
  const fieldId = useId();
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  const UserSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Min 3 characters!')
      .max(50, 'Max 50 characters!')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Min 3 characters!')
      .max(50, 'Max 50 characters!')
      .required('Required'),
  });

  return (
    <>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={UserSchema}
      >
        <Form className={css.form}>
          <div className={css.container}>
            <label htmlFor={`${fieldId}-username`}>Name</label>
            <Field type="text" name="name" id={`${fieldId}-username`} />
            <ErrorMessage className={css.error} name="name" component="span" />
          </div>
          <div className={css.container}>
            <label htmlFor={`${fieldId}-userphone`}>Number</label>
            <Field type="text" name="number" id={`${fieldId}-userphone`} />
            <ErrorMessage className={css.error} name="number" component="span" />
          </div>
          <button type="submit" className={css.button}>
            Submit
          </button>
        </Form>
      </Formik>
    </>
  );
}
