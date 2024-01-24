import styled from 'styled-components';

export const ButtonStyle = styled.button`
  font-family: 'Roboto', sans-serif;
  background-color: var(--olive);
  color: var(--black);
  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  border: none;
  border-radius: 12px;
  padding: ${({ padding }) => padding};
  transition: background-color 250ms var(--transition);

  &:hover,
  &:focus {
    background: var(--accent);
  }

  @media screen and (max-width: 768px) {
    padding: 10px 50px;
  }
`;
