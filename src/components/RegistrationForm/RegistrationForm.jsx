import { Formik, Field, Form } from 'formik';
import {
  ButtonWrapper,
  ErrorText,
  FormWrapper,
  InputWrapper,
} from './RegistrationForm.styled';

import { Button } from 'components/Button/Button';
import { RegistrationFormSchema } from './RegitrationFormShema';
import { ErrorMessage } from 'formik';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';
// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/authOperations';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

export const RegistrationForm = ({ handleModalToggle }) => {
  //   const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, actions) => {
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
      .then(user => {
        console.log(user);
        actions.resetForm();
      })
      .catch(error => console.log(error));
    // dispatch(register(values));
    handleModalToggle();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={RegistrationFormSchema}
    >
      {({ handleSubmit }) => (
        <Form /*onSubmit={handleSubmit}*/>
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
              padding={'16px 186px'}
              text={'Sign Up'}
              type={'submit'}
              //   handleClick={handleSubmit}
            />
          </ButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};
