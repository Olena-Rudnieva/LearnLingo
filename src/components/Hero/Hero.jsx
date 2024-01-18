import { StatisticList } from 'components/StatisticList/StatisticList';
import {
  AccentTitle,
  BlockWrapper,
  HeroWrapper,
  Image,
  Text,
  TextBlock,
  Title,
} from './Hero.styled';
import { Button } from 'components/Button/Button';
import heroImg from '../../images/heroImg.png';

export const Hero = () => {
  return (
    <HeroWrapper>
      <BlockWrapper>
        <TextBlock>
          <Title>
            Unlock your potential with the best {''}
            <AccentTitle>language</AccentTitle> tutors
          </Title>
          <Text>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </Text>
          <Button
            padding={'16px 88px'}
            text={'Get started'}
            type={'button'}
            // handleClick={handleCall}
          />
        </TextBlock>
        <Image src={heroImg} alt="Girl with laptop" />
      </BlockWrapper>
      <StatisticList />
    </HeroWrapper>
  );
};
