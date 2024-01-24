import styled from 'styled-components';

export const FeaturesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-left: 0;
  margin-right: 49px;
  margin-bottom: 10px;
  margin-top: 10px;
  color: var(--black);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
    margin-bottom: 0;
    margin-top: 0;
  }
  @media screen and (min-width: 1200px) {
    margin-left: 190px;
  }
`;

export const FeaturesItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child)::after {
    content: '';
    display: flex;
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.2);
  }
`;

export const Book = styled.svg`
  width: 16px;
  height: 16px;
  fill: white;
  stroke: black;
  margin-right: 8px;
`;

export const Feature = styled.p`
  margin-right: 16px;
`;

export const Star = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--olive);
  margin-right: 8px;
`;

export const StyledText = styled.span`
  color: var(--green);
`;
