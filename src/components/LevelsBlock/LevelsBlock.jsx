import { LevelsItem, LevelsList } from './LevelsBlock.styled';

export const LevelsBlock = ({ teacher }) => {
  const { levels } = teacher;
  return (
    <LevelsList>
      {levels.map((level, index) => (
        <LevelsItem key={index}>{level}</LevelsItem>
      ))}
    </LevelsList>
  );
};
