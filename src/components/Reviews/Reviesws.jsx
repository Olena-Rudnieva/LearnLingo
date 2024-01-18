import {
  Name,
  Rating,
  ReviewsItem,
  ReviewsWrapper,
  StarIcon,
  Text,
  User,
  UserWrapper,
} from './Reviews.styled';
import sprite from '../../images/sprite.svg';

export const Reviews = ({ teacher }) => {
  const { experience, reviews } = teacher;

  return (
    <ReviewsWrapper>
      <Text>{experience}</Text>
      <ul>
        {reviews.map((review, index) => (
          <ReviewsItem key={index}>
            <UserWrapper>
              <User>
                <use href={sprite + '#icon-user'}></use>
              </User>
              <div>
                <Name>{review.reviewer_name}</Name>
                <Rating>
                  <StarIcon>
                    <use href={sprite + '#icon-star'}></use>
                  </StarIcon>
                  {review.reviewer_rating}.0
                </Rating>
              </div>
            </UserWrapper>
            <p>{review.comment}</p>
          </ReviewsItem>
        ))}
      </ul>
    </ReviewsWrapper>
  );
};
