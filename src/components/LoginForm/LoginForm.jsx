import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';

export default function LoginForm() {
  const dispatch = useDispatch();
  const hendleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ email: '', password: '' }} onSubmit={hendleSubmit}>
      <Form>
        <div>
          <label>
            Email
            <Field tepe="text" name="email"></Field>
          </label>
        </div>
        <div>
          <label>
            Password
            <Field tepe="text" name="password"></Field>
          </label>
        </div>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
