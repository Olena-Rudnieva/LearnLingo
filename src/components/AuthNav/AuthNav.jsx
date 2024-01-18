import {
  AuthNavWrapper,
  LogInBtn,
  LogInIcon,
  LogOutBtn,
  LogoutIcon,
  RegistrationBtn,
} from './AuthNav.styled';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { useState } from 'react';
import { BasicModalWindow } from 'components/Modal/BasicModalWindow/BasicModalWindow';
import { ModalRegistration } from 'components/Modal/ModalRegistration/ModalRegistration';
import { ModalLogIn } from 'components/Modal/ModalLogIn/ModalLogIn';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { removeUser } from '../../redux/auth/authSlice';

export const AuthNav = () => {
  const [modalRegistration, setModalRegistration] = useState(false);
  const [modalLogIn, setModalLogIn] = useState(false);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  // const currentUser = auth().currentUser;

  const handleModalRegistration = () => {
    setModalRegistration(state => !state);
  };

  const handleModalLogIn = () => {
    setModalLogIn(state => !state);
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => console.log('success'))
      .catch(error => console.log(error));
    dispatch(removeUser());
  };

  return (
    <AuthNavWrapper>
      {isLoggedIn ? (
        <LogOutBtn type="button" onClick={handleLogOut}>
          <LogoutIcon />
          Log out
        </LogOutBtn>
      ) : (
        <>
          <LogInBtn onClick={handleModalLogIn}>
            <LogInIcon>
              <use href={sprite + '#icon-log-in'}></use>
            </LogInIcon>
            Log in
          </LogInBtn>
          <RegistrationBtn onClick={handleModalRegistration}>
            Registration
          </RegistrationBtn>
        </>
      )}
      {modalRegistration && (
        <BasicModalWindow handleModalToggle={handleModalRegistration}>
          <ModalRegistration handleModalToggle={handleModalRegistration} />
        </BasicModalWindow>
      )}
      {modalLogIn && (
        <BasicModalWindow handleModalToggle={handleModalLogIn}>
          <ModalLogIn handleModalToggle={handleModalLogIn} />
        </BasicModalWindow>
      )}
    </AuthNavWrapper>
  );
};
