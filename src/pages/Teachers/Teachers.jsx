import { Filter } from 'components/Filter/Filter';
import { TeachersList } from 'components/TeachersList/TeachersList';
import {
  ButtonWrapper,
  FilterStyled,
  TeachersSection,
  TeachersWrapper,
} from './Teachers.styled';
import { Container } from 'components/Container/Container';
import { Button } from 'components/Button/Button';
import { ref, get, query, orderByKey, limitToFirst } from 'firebase/database';
import { db } from '../../firebase/config';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addTeachers } from '../../redux/teachers/teachersSlice';
import { selectTeachers } from '../../redux/teachers/teachersSelectors';

const Teachers = () => {
  const [teachersCardsAmount, setTeachersCardsAmount] = useState(4);
  const [hasMoreTeachers, setHasMoreTeachers] = useState(false);
  const [allTeachers, setAllTeachers] = useState([]);
  const [coloredLevel, setColoredLevel] = useState('A1 Beginner');
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const filter = useSelector(state => state.teachers.filter);

  useEffect(() => {
    const fetchAllTeachers = async () => {
      try {
        const teachersRef = ref(db, '/');
        const snapshot = await get(teachersRef);

        if (snapshot.exists()) {
          const newTeachers = snapshot.val();
          setAllTeachers(newTeachers);
        }
      } catch (error) {
        console.error('Loading error', error.message);
      }
    };

    fetchAllTeachers();
  }, []);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachersRef = ref(db, '/');
        let dataQuery = query(
          teachersRef,
          orderByKey(),
          limitToFirst(teachersCardsAmount)
        );
        setIsLoadingMore(true);
        const snapshot = await get(dataQuery);

        if (snapshot.exists()) {
          const newTeachers = snapshot.val();
          dispatch(addTeachers(newTeachers));
          setHasMoreTeachers(true);

          if (Object.keys(newTeachers).length < teachersCardsAmount) {
            setHasMoreTeachers(false);
          }
        } else {
          setHasMoreTeachers(false);
        }
      } catch (error) {
        console.error('Loading error', error.message);
      } finally {
        setIsLoadingMore(false);
      }
    };

    fetchTeachers();
  }, [dispatch, teachersCardsAmount]);

  const filteredTeachers = allTeachers.filter(teacher => {
    const { language, level, price } = filter;
    if (!language && !level && !price) {
      return true;
    }
    const languageFilter = !language || teacher.languages.includes(language);
    const levelFilter = !level || teacher.levels.includes(level);
    const priceFilter = !price || teacher.price_per_hour <= price;
    return languageFilter && levelFilter && priceFilter;
  });

  const loadMore = () => setTeachersCardsAmount(prev => prev + 4);

  return (
    <TeachersSection>
      <Container>
        <TeachersWrapper>
          <FilterStyled>
            <Filter setColoredLevel={setColoredLevel} />
          </FilterStyled>
          {filter.language === '' &&
          filter.level === '' &&
          filter.price === '' ? (
            <TeachersList teachers={teachers} coloredLevel={coloredLevel} />
          ) : (
            <>
              {filteredTeachers.length === 0 ? (
                <h2>No teachers match the criteria</h2>
              ) : (
                <TeachersList
                  teachers={filteredTeachers}
                  coloredLevel={coloredLevel}
                />
              )}
            </>
          )}
          <ButtonWrapper>
            {isLoadingMore && <h2>Loading...</h2>}
            {!isLoadingMore &&
              hasMoreTeachers &&
              filteredTeachers.length === allTeachers.length && (
                <Button
                  padding={'16px 48px'}
                  text={'Load more'}
                  type={'button'}
                  handleClick={loadMore}
                />
              )}
          </ButtonWrapper>
        </TeachersWrapper>
      </Container>
    </TeachersSection>
  );
};

export default Teachers;
