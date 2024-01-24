import { Formik, Field } from 'formik';
import {
  ButtonWrapper,
  ErrorText,
  Form,
  FormWrapper,
  InputWrapper,
  RadioButtonWrapper,
  RadioWrapper,
} from './BookForm.styled';
import {
  MdOutlineRadioButtonChecked,
  MdOutlineRadioButtonUnchecked,
} from 'react-icons/md';
import React, { useState } from 'react';
import { Button } from 'components/Button/Button';
import { BookFormSchema } from './BookFormShema';
import { ErrorMessage } from 'formik';

const initialValues = {
  category: 'careerAndBusiness',
  fullName: '',
  email: '',
  phoneNumber: '',
};

const categories = [
  { label: 'Career and business', value: 'careerAndBusiness' },
  { label: 'Lesson for kids', value: 'lessonForKids' },
  { label: 'Living abroad', value: 'livingAbroad' },
  { label: 'Exams and coursework', value: 'examsAndCoursework' },
  { label: 'Culture, travel or hobby', value: 'cultureTravelOrHobby' },
];

export const BookForm = ({ handleModalToggle }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    initialValues.category
  );
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
    handleModalToggle();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={BookFormSchema}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <RadioWrapper>
            {categories.map(({ label, value }) => (
              <RadioButtonWrapper
                key={value}
                checkedcolor={
                  selectedCategory === value ? '#9FBAAE' : undefined
                }
              >
                <label>
                  <Field
                    type="radio"
                    name="category"
                    value={value}
                    checked={selectedCategory === value}
                    onChange={() => setSelectedCategory(value)}
                  />
                  {selectedCategory === value ? (
                    <MdOutlineRadioButtonChecked size={20} color="#9FBAAE" />
                  ) : (
                    <MdOutlineRadioButtonUnchecked
                      size={20}
                      color="rgba(18, 20, 23, 0.2)"
                    />
                  )}
                  <span>{label}</span>
                </label>
              </RadioButtonWrapper>
            ))}
          </RadioWrapper>
          <FormWrapper>
            <InputWrapper>
              <label>
                <Field type="text" name="fullName" placeholder=" Full Name:" />
                <ErrorMessage name="fullName" component={ErrorText} />
              </label>
            </InputWrapper>

            <InputWrapper>
              <label>
                <Field type="email" name="email" placeholder=" Email:" />
                <ErrorMessage name="email" component={ErrorText} />
              </label>
            </InputWrapper>

            <InputWrapper>
              <label>
                <Field
                  type="tel"
                  name="phoneNumber"
                  placeholder=" Phone number:"
                />
                <ErrorMessage name="phoneNumber" component={ErrorText} />
              </label>
            </InputWrapper>
          </FormWrapper>
          <ButtonWrapper>
            <Button
              padding={'16px 215px'}
              text={'Book'}
              type={'submit'}
              handleClick={handleSubmit}
            />
          </ButtonWrapper>
        </Form>
      )}
    </Formik>
  );
};
