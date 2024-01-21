import { LevelsItem, LevelsList } from './LevelsBlock.styled';

export const LevelsBlock = ({ teacher, coloredLevel }) => {
  const { levels } = teacher;
  coloredLevel = coloredLevel || teacher.levels[0];

  return (
    <LevelsList>
      {levels.map((level, index) => (
        <LevelsItem
          key={index}
          style={
            level.toLowerCase() === coloredLevel.toLowerCase()
              ? {
                  backgroundColor: '#9FBAAE',
                  borderColor: '#9FBAAE',
                }
              : {}
          }
        >
          {level}
        </LevelsItem>
      ))}
    </LevelsList>
  );
};
