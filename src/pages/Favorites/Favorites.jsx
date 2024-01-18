import { Container } from '../../components/Container/Container';
import {
  FavoritesSection,
  FavoritesWrapper,
  List,
  Text,
} from './Favorites.styled';
import { Loader } from '../../components/Loader/Loader';
import { useSelector } from 'react-redux';
import {
  selectFavorites,
  selectIsLoading,
} from '../../redux/teachers/teachersSelectors';
import { TeachersCard } from 'components/TeachersCard/TeachersCard';

const Favorites = ({ item }) => {
  const isLoading = useSelector(selectIsLoading);
  const favoriteTeachers = useSelector(selectFavorites);

  return (
    <FavoritesSection>
      <Container>
        <FavoritesWrapper>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              {favoriteTeachers.length === 0 ? (
                <>
                  <Text>No favorite teachers yet</Text>
                </>
              ) : (
                <List>
                  {favoriteTeachers.map(teacher => (
                    <TeachersCard teacher={teacher} key={teacher.id} />
                  ))}
                </List>
              )}
            </>
          )}
        </FavoritesWrapper>
      </Container>
    </FavoritesSection>
  );
};

export default Favorites;
