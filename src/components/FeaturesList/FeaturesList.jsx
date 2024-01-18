import {
  Book,
  Feature,
  FeaturesItem,
  FeaturesWrapper,
  Star,
  StyledText,
} from './FeaturesList.styled';
import sprite from '../../images/sprite.svg';

export const FeaturesList = ({ teacher }) => {
  const { lessons_done, rating, price_per_hour } = teacher;
  return (
    <FeaturesWrapper>
      <FeaturesItem>
        <Book>
          <use href={sprite + '#icon-book-open'}></use>
        </Book>
        <Feature>Lessons online</Feature>
      </FeaturesItem>
      <FeaturesItem>
        <Feature>Lessons done: {lessons_done}</Feature>
      </FeaturesItem>
      <FeaturesItem>
        <Star>
          <use href={sprite + '#icon-star'}></use>
        </Star>
        <Feature>Rating: {rating}</Feature>
      </FeaturesItem>
      <FeaturesItem>
        <Feature>
          Price / 1 hour: <StyledText>{price_per_hour}$</StyledText>
        </Feature>
      </FeaturesItem>
    </FeaturesWrapper>
  );
};
