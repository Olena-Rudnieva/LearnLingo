import styled from 'styled-components';

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 20px;
`;

export const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 1200px) {
    flex-direction: row;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: #f8f8f8;
  padding: 20px 20px 20px 20px;
  color: var(--black);

  @media screen and (min-width: 768px) {
    align-items: flex-start;
    width: 720px;
    height: 530px;
    padding: 98px 108px 98px 64px;
  }
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
  width: 100%;
  margin-bottom: 64px;

  @media screen and (min-width: 768px) {
    width: 471px;
  }
`;

export const Image = styled.img`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    width: 568px;
    height: 530px;
  }
`;
