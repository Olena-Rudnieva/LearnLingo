import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { Layout } from 'components/Layout/Layout';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/auth/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/config';
import { PrivateRoute } from './PrivateRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const Teachers = lazy(() => import('../pages/Teachers/Teachers'));
const Favorites = lazy(() => import('../pages/Favorites/Favorites'));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user.accessToken);
        dispatch(addUser({ email: user.email, accessToken: user.accessToken }));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="teachers" element={<Teachers />} />
          <Route
            path="favorites"
            element={<PrivateRoute redirectTo="/" component={<Favorites />} />}
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};
