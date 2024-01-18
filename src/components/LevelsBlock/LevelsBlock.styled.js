import styled from 'styled-components';

export const LevelsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--black);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.14;
`;

export const LevelsItem = styled.li`
  display: inline-block;
  padding: 8px 12px;
  border-radius: 35px;
  background: transparent;
  color: #363535;
  border: 1px solid rgba(18, 20, 23, 0.2);
`;
