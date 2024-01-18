import styled from 'styled-components';

export const StyledList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding: 40px 122px;
  border-radius: 12px;
  background-image: repeating-linear-gradient(
      to right,
      var(--olive) 0%,
      var(--olive) 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to right,
      var(--olive) 0%,
      var(--olive) 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to bottom,
      var(--olive) 0%,
      var(--olive) 50%,
      transparent 50%,
      transparent 100%
    ),
    repeating-linear-gradient(
      to bottom,
      var(--olive) 0%,
      var(--olive) 50%,
      transparent 50%,
      transparent 100%
    );
  background-position: left top, left bottom, left top, right top;
  background-repeat: repeat-x, repeat-x, repeat-y, repeat-y;
  background-size: 20px 1.5px, 20px 2px, 1.5px 20px, 1.5px 20px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Title = styled.p`
  width: 86px;
  color: var(--dark-grey);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.286;
  letter-spacing: -0.28px;
`;

export const Quantity = styled.p`
  color: var(--black);
  font-size: 28px;
  font-weight: 500;
  line-height: 1.1428;
  letter-spacing: -0.56px;
`;
