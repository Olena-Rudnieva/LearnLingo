import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px;
  width: 100%;

  @media screen and (min-width: 620px) {
    padding: 64px;
    width: 600px;
  }
`;

export const Title = styled.h2`
  color: var(--black);
  font-size: 40px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.8px;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  color: rgba(18, 20, 23, 0.8);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;

export const TeacherWrapper = styled.div`
  display: flex;
  gap: 14px;
  margin-bottom: 40px;
`;

export const Teacher = styled.p`
  color: var(--semiblack);
  font-size: 12px;
  font-weight: 500;
  line-height: 1.333;
  margin-bottom: 4px;
`;

export const Name = styled.p`
  color: var(--black);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Subtitle = styled.h3`
  color: var(--black);
  font-size: 24px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 20px;
`;
