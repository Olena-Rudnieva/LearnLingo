import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  gap: 48px;
  width: 1184px;
  padding: 24px;
  margin-bottom: 32px;
  background-color: var(--background-white);
  border-radius: 24px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid var(--accent);
  background-color: var(--backgroud-white);
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    position: absolute;
    top: 15px;
    right: 20px;
    display: flex;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 3px solid white;
    background-color: var(--green);
    z-index: 10;
  }
`;

export const Avatar = styled.img`
  width: 96px;
  height: 96px;
  border-radius: 50%;
`;

export const UpperList = styled.div`
  display: flex;
  margin-bottom: 8px;
`;

export const Text = styled.p`
  color: var(--semiblack);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const DescriptionBlock = styled.div`
  margin-bottom: 16px;
`;

export const Name = styled.p`
  color: var(--black);
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
  margin-bottom: 32px;
`;

export const Description = styled.span`
  color: var(--black);

  &.lang {
    text-decoration: underline;
  }
`;

export const ReadMoreBtn = styled.button`
  color: var(--black);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  border: none;
  background-color: transparent;
  padding: 0;
  margin-bottom: 32px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 32px;
`;
