import styled from 'styled-components';
import { CgSandClock } from 'react-icons/cg';

export const TeachersSection = styled.div`
  padding-top: 310px;
  background-color: var(--background-grey);
  min-height: 100vh;

  @media screen and (min-width: 494px) {
    padding-top: 250px;
  }

  @media screen and (min-width: 758px) {
    padding-top: 138px;
  }
`;

export const TeachersWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100%;
`;

export const FilterStyled = styled.div`
  position: absolute;
  top: -290px;
  left: 0;

  @media screen and (min-width: 494px) {
    top: -220px;
  }

  @media screen and (min-width: 758px) {
    top: -106px;
  }

  @media screen and (min-width: 1320px) {
    left: 64px;
  }
`;

export const ButtonWrapper = styled.div`
  padding-bottom: 96px;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const SandClock = styled(CgSandClock)`
  width: 40px;
  height: 40px;
  color: var(--olive);
`;
