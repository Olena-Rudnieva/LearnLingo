import { Filter } from 'components/Filter/Filter';
import { TeachersList } from 'components/TeachersList/TeachersList';
import { TeachersSection, TeachersWrapper } from './Teachers.styled';
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
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const teachersRef = ref(db, '/');
        let dataQuery = query(
          teachersRef,
          orderByKey(),
          limitToFirst(teachersCardsAmount)
        );
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
      }
    };

    fetchTeachers();
  }, [dispatch, teachersCardsAmount]);

  const loadMore = () => setTeachersCardsAmount(prev => prev + 4);

  return (
    <TeachersSection>
      <Container>
        <TeachersWrapper>
          <Filter />
          <TeachersList teachers={teachers} />
          {hasMoreTeachers && (
            <Button
              padding={'16px 48px'}
              text={'Load more'}
              type={'button'}
              handleClick={loadMore}
            />
          )}
        </TeachersWrapper>
      </Container>
    </TeachersSection>
  );
};

export default Teachers;
