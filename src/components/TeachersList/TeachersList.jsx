import { TeachersCard } from 'components/TeachersCard/TeachersCard';
import { List } from './TeachersList.styled';

export const TeachersList = ({ teachers, coloredLevel }) => {
  return (
    <List>
      {teachers?.map((teacher, index) => (
        <li key={index}>
          <TeachersCard teacher={teacher} coloredLevel={coloredLevel} />
        </li>
      ))}
    </List>
  );
};
