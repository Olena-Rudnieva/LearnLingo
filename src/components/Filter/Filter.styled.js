import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin-bottom: 32px;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  justify-content: flex-start;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  color: var(--semiblack);
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2857;
`;

export const Select = styled.select`
  display: flex;
  padding: 14px 18px;
  align-items: center;
  border-radius: 14px;
  border: none;
  outline: none;
  background: var(--white);
  font-size: 18px;
  font-weight: 500;
  line-height: 1.1111;

  & option {
    background-color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 1.1111;
    color: var(--black);
  }
`;

export const ButtonWrapper = styled.div`
  align-self: flex-end;
`;
