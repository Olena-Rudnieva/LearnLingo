import { statisticData } from './statisticData';
import {
  ItemWrapper,
  Quantity,
  StyledList,
  Title,
} from './StatisticList.styled';

export const StatisticList = () => {
  return (
    <StyledList>
      {statisticData.map(item => (
        <li key={item.title}>
          <ItemWrapper>
            <Quantity>{item.quantity}</Quantity>
            <Title>{item.title}</Title>
          </ItemWrapper>
        </li>
      ))}
    </StyledList>
  );
};
