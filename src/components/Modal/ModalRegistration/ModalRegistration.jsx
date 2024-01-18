import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Text, Title, Wrapper } from './ModalRegistration.styled';

export const ModalRegistration = ({ handleModalToggle }) => {
  return (
    <Wrapper>
      <Title>Registration</Title>
      <Text>
        Thank you for your interest in our platform! In order to register, we
        need some information. Please provide us with the following information
      </Text>
      <RegistrationForm handleModalToggle={handleModalToggle} />
    </Wrapper>
  );
};
