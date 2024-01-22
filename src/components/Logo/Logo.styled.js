import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  transition: transform 250ms var(--transition);

  &:hover {
    transform: scale(1.05);
  }
`;

export const Icon = styled.svg`
  width: 28px;
  height: 28px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.4px;
`;
