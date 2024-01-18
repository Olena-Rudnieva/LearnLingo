import styled from 'styled-components';

export const Btn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  border: none;
  z-index: 200;
  width: 32px;
  height: 32px;
  padding: 0;
`;

export const Icon = styled.svg`
  width: 100%;
  height: 100%;
  scale: 1;
  stroke: var(--black);

  transition: scale 200ms var(--transition), stroke 200ms var(--transition);

  &:hover,
  &:focus {
    stroke: var(--olive);
    scale: 1.2;
  }
`;
