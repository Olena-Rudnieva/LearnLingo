import { Formik, Field } from 'formik';
import {
  ButtonWrapper,
  ErrorText,
  EyeIconInvisible,
  EyeIconVisible,
  FormWrapper,
  InputWrapper,
} from './LogInForm.styled';

import { Button } from 'components/Button/Button';
import { LogInFormSchema } from './LogInFormShema';
import { ErrorMessage } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useState } from 'react';

const initialValues = {
  email: '',
  password: '',
};

export const LogInForm = ({ handleModalToggle }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleTogglePassword = evt => {
    evt.preventDefault();
    setIsPasswordVisible(prevState => !prevState);
  };

  const handleSubmit = ({ email, password }, actions) => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
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
      validationSchema={LogInFormSchema}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FormWrapper>
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
              padding={'16px 193px'}
              text={'Log In'}
              type={'submit'}
              handleClick={handleSubmit}
            />
          </ButtonWrapper>
        </form>
      )}
    </Formik>
  );
};
