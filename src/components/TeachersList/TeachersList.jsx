import { TeachersCard } from 'components/TeachersCard/TeachersCard';
import { List } from './TeachersList.styled';

export const TeachersList = ({ teachers }) => {
  return (
    <List>
      {teachers?.map((teacher, index) => (
        <li key={index}>
          <TeachersCard teacher={teacher} />
        </li>
      ))}
    </List>
  );
};
