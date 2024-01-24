import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;

  @media screen and (min-width: 586px) {
    padding: 64px;
    width: 566px;
  }
`;

export const Title = styled.h2`
  color: var(--black);
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375;
  margin-bottom: 20px;
`;
