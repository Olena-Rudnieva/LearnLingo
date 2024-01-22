import styled from 'styled-components';

export const Heart = styled.button`
  border: none;
  background: transparent;
  width: 26px;
  height: 26px;
  padding: 0;
`;

export const IconEmpty = styled.svg`
  width: 100%;
  height: 100%;
  stroke: var(--black);
  fill: transparent;
  transition: transform 250ms var(--transition);

  &:hover {
    transform: scale(1.05);
  }
`;

export const IconFavorite = styled.svg`
  width: 100%;
  height: 100%;
  fill: var(--olive);
  stroke: var(--olive);
`;
