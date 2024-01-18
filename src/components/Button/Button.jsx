import { ButtonStyle } from './Button.styled';

export const Button = ({ type, padding, text, handleClick }) => {
  return (
    <ButtonStyle type={type} padding={padding} onClick={handleClick}>
      {text}
    </ButtonStyle>
  );
};
