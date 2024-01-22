import { Heart, IconEmpty, IconFavorite } from './FavoritesHeart.styled';
import sprite from '../../images/sprite.svg';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/teachers/teachersSelectors';
import {
  addFavorite,
  removeFavorite,
} from '../../redux/teachers/teachersSlice';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';
import { toast } from 'react-toastify';

export const FavoritesHeart = ({ teacher }) => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const favoriteTeachers = useSelector(selectFavorites);
  const isFavorite = favoriteTeachers?.some(
    favoriteTeacher => teacher.name === favoriteTeacher.name
  );

  const handleToggleHeart = () => {
    if (isLoggedIn) {
      isFavorite
        ? dispatch(removeFavorite(teacher))
        : dispatch(addFavorite(teacher));
      toast.success(
        isFavorite ? 'Removed from favorites' : 'Added to favorites'
      );
    } else {
      toast.warn('Please log in to use this functionality.');
    }
  };

  return (
    <Heart type="button" onClick={handleToggleHeart}>
      {isFavorite ? (
        <IconFavorite>
          <use href={sprite + '#icon-heart'}></use>
        </IconFavorite>
      ) : (
        <IconEmpty>
          <use href={sprite + '#icon-heart'}></use>
        </IconEmpty>
      )}
    </Heart>
  );
};
