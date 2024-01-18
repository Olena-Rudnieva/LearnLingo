import styled from 'styled-components';

export const ReviewsWrapper = styled.div`
  /* margin-bottom: 32px; */
`;

export const ReviewsItem = styled.li`
  margin-bottom: 32px;
`;

export const Text = styled.p`
  color: var(--black);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 32px;
`;

export const UserWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`;

export const User = styled.svg`
  width: 44px;
  height: 44px;
`;

export const Name = styled.p`
  color: var(--semiblack);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Rating = styled.p`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const StarIcon = styled.svg`
  width: 16px;
  height: 16px;
  fill: var(--olive);
`;
