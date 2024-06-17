// import ContactForm from './ContactForm/ContactForm';
// import SearchBox from './SearchBox/SearchBox';
// import ContactList from './ContactList/ContactList';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from './Layout/Layout';
import { Suspense } from 'react';
import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from './RestrictedRoute';
import PrivateRoute from './PrivateRoute';
import { refreshUser } from '../redux/auth/operations';
import { selectIsRefreshing } from '../redux/auth/selectors';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const ContactPage = lazy(() => import('../pages/ContactPage/ContactPage'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing) {
    return null;
  }

  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={<RegisterPage />} redirectTo="/" />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={<ContactPage />} redirectTo="/login" />}
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}
