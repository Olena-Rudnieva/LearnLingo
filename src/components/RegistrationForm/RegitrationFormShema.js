import * as yup from 'yup';

const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

export const RegistrationFormSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Full name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(5)
    .matches(regEx, { message: 'Please create a stronger password' })
    .required('Required'),
});
