import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

export const AuthNavWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-right: 64px;
`;

export const RegistrationBtn = styled.button`
  max-width: 166px;
  padding: 14px 39px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  background-color: var(--black);
  color: var(--white);
  border-radius: 12px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: scale 200ms var(--transition);

  &:hover {
    transform: scale(1.1);
  }
`;

export const LogInBtn = styled.button`
  padding-top: 14px;
  padding-bottom: 14px;
  width: 90px;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  transition: scale 200ms var(--transition);

  &:hover,
  &:hover .icon {
    transform: scale(1.1);
  }
`;

export const LogInIcon = styled.svg`
  width: 20px;
  height: 20px;
  scale: 1;
  stroke: var(--olive);
  fill: transparent;
`;

export const LogOutBtn = styled.button`
  padding-top: 14px;
  padding-bottom: 14px;

  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: transparent;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.25;
  transition: scale 200ms var(--transition);

  &:hover,
  &:hover .icon {
    transform: scale(1.1);
  }
`;

export const LogoutIcon = styled(FiLogOut)`
  color: var(--olive);
  font-size: 1.5rem;
`;
