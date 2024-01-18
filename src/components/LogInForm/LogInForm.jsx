import { Formik, Field } from 'formik';
import {
  ButtonWrapper,
  ErrorText,
  FormWrapper,
  InputWrapper,
} from './LogInForm.styled';

import { Button } from 'components/Button/Button';
import { LogInFormSchema } from './LogInFormShema';
import { ErrorMessage } from 'formik';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';

const initialValues = {
  email: '',
  password: '',
};

export const LogInForm = ({ handleModalToggle }) => {
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, actions) => {
    console.log(email, password);
    signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        dispatch(logIn(user));
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
                  type="password"
                  name="password"
                  placeholder=" Password"
                />
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
