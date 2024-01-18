import styled from 'styled-components';

export const RadioWrapper = styled.div`
  margin-bottom: 40px;
`;

export const RadioButtonWrapper = styled.div`
  margin-bottom: 16px;

  label {
    display: flex;
    align-items: center;
    font-size: 16px;
    color: var(--black);
    font-weight: 400;
    line-height: 1.375;
    cursor: pointer;

    input {
      display: none;

      &:checked + span {
        color: ${props =>
          props.checkedсolor ? props.checkedсolor : '#9FBAAE'};
      }
    }

    span {
      margin-left: 8px;
    }
  }
`;

export const FormWrapper = styled.div`
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  margin-bottom: 18px;

  label {
    font-size: 16px;
    color: var(--black);
    font-weight: 400;
    line-height: 1.375;
  }

  input {
    width: 100%;
    padding: 16px 18px;
    font-size: 16px;
    color: var(--black);
    font-weight: 400;
    line-height: 1.375;
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    box-sizing: border-box;
    outline: none;
    transition: border-color 0.3s;

    &:focus {
      border-color: var(--olive);
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: inline-block;
  margin-bottom: 64px;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.142;
  margin-top: 4px;
`;
