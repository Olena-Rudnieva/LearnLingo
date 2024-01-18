import * as yup from 'yup';

const regEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;

export const LogInFormSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(5)
    .matches(regEx, { message: 'Password must be at least 5 characters long' })
    .required('Required'),
});
