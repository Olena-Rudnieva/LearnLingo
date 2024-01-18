import * as yup from 'yup';

const phoneRegExp = /^[0-9+()-\s]*$/;

export const BookFormSchema = yup.object().shape({
  category: yup
    .string()
    .oneOf(
      [
        'careerAndBusiness',
        'lessonForKids',
        'livingAbroad',
        'examsAndCoursework',
        'cultureTravelHobby',
      ],
      'Please choose a valid category'
    )
    .required('Required'),
  fullName: yup
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .required('Full name is required'),
  email: yup
    .string()
    .email('Please enter a valid email')
    .required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Phone number is required'),
});
