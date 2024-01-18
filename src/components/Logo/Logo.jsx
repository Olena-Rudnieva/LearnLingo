import { LogoWrapper, Text } from './Logo.styled';
import LogoImg from '../../images/ukraine.svg';

export const Logo = () => {
  return (
    <LogoWrapper>
      <img src={LogoImg} alt="Logo" width={28} height={28} />
      <Text>LearnLingo</Text>
    </LogoWrapper>
  );
};
