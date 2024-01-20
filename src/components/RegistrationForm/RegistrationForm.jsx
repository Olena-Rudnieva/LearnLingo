import { Formik, Field } from 'formik';
import {
  ButtonWrapper,
  ErrorText,
  EyeIconInvisible,
  EyeIconVisible,
  FormWrapper,
  InputWrapper,
} from './RegistrationForm.styled';

import { Button } from 'components/Button/Button';
import { RegistrationFormSchema } from './RegitrationFormShema';
import { ErrorMessage } from 'formik';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegistrationForm = ({ handleModalToggle }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = evt => {
    evt.preventDefault();
    setIsPasswordVisible(prevState => !prevState);
  };

  const handleSubmit = ({ email, password }, actions) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        actions.resetForm();
      })
      .catch(error => console.log(error));
    handleModalToggle();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationFormSchema}
    >
      {({ handleSubmit }) => (
        <form>
          <FormWrapper>
            <InputWrapper>
              <label>
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" component={ErrorText} />
              </label>
            </InputWrapper>

            <InputWrapper>
              <label>
                <Field type="email" name="email" placeholder=" Email" />
                <ErrorMessage name="email" component={ErrorText} />
              </label>
            </InputWrapper>

            <InputWrapper>
              <label>
                <Field
                  type={isPasswordVisible ? 'text' : 'password'}
                  name="password"
                  placeholder=" Password"
                />
                {isPasswordVisible ? (
                  <EyeIconVisible onClick={handleTogglePassword} />
                ) : (
                  <EyeIconInvisible onClick={handleTogglePassword} />
                )}
                <ErrorMessage name="password" component={ErrorText} />
              </label>
            </InputWrapper>
          </FormWrapper>
          <ButtonWrapper>
            <Button
              padding={'16px 186px'}
              text={'Sign Up'}
              type={'submit'}
              handleClick={handleSubmit}
            />
          </ButtonWrapper>
        </form>
      )}
    </Formik>
  );
};
