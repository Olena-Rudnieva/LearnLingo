import { Container } from '../../components/Container/Container';
import {
  FavoritesSection,
  FavoritesWrapper,
  List,
  Text,
} from './Favorites.styled';

import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/teachers/teachersSelectors';
import { TeachersCard } from 'components/TeachersCard/TeachersCard';
import { selectIsLoggedIn } from '../../redux/auth/authSelectors';

const Favorites = () => {
  const favoriteTeachers = useSelector(selectFavorites);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isLoggedIn);

  return (
    <FavoritesSection>
      <Container>
        <FavoritesWrapper>
          {favoriteTeachers.length === 0 ? (
            <>
              <Text>No favorite teachers yet</Text>
            </>
          ) : (
            <List>
              {favoriteTeachers.map((teacher, index) => (
                <li key={index}>
                  <TeachersCard teacher={teacher} />
                </li>
              ))}
            </List>
          )}
        </FavoritesWrapper>
      </Container>
    </FavoritesSection>
  );
};

export default Favorites;
