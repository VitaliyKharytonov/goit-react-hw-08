import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function RegisterForm() {
  const dispatch = useDispatch();

  const hendleSubmit = (values, action) => {
    dispatch(register(values));
    action.resetForm();
  };

  return (
    <Formik initialValues={{ name: '', email: '', password: '' }} onSubmit={hendleSubmit}>
      <Form>
        <label>
          Username
          <Field type="text" name="name"></Field>
        </label>
        <label>
          Email
          <Field type="text" name="email"></Field>
        </label>
        <label>
          Password
          <Field type="text" name="password"></Field>
        </label>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
