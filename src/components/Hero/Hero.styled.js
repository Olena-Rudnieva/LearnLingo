import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 20px;
`;

export const BlockWrapper = styled.div`
  display: flex;
  gap: 24px;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 720px;
  height: 530px;
  border-radius: 30px;
  background-color: #f8f8f8;
  padding: 98px 108px 98px 64px;
  color: var(--black);
`;

export const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
  line-height: 1.167;
  letter-spacing: -0.96px;
  margin-bottom: 32px;
`;

export const AccentTitle = styled.span`
  background-color: var(--accent);
  width: 195px;
  height: 40px;
  font-style: italic;
  font-weight: 400;
  border-radius: 8px;
  padding-left: 4px;
  padding-right: 4px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.375;
  letter-spacing: -0.32px;
  width: 471px;
  margin-bottom: 64px;
`;

export const Image = styled.img`
  width: 568px;
  height: 530px;
`;
