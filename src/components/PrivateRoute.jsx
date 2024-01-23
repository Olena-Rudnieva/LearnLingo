import { Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';

const checkIsLoggedIn = async () => {
  return new Promise(resolve => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      const isLoggedIn = !!user;
      resolve(isLoggedIn);
      unsubscribe();
    });
  });
};

export const PrivateRoute = ({
  component: Component,
  redirectTo = '/teachers',
}) => {
  return checkIsLoggedIn ? Component : <Navigate to={redirectTo} />;
};
