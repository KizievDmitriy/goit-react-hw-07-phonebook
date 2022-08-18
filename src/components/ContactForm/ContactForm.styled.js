import styled from 'styled-components';

export const FormContacts = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

export const LabelForm = styled.label`
  display: flex;
  flex-direction: column;
  padding-bottom: 24px;
`;

export const TitleForm = styled.span`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const InputForm = styled.input`
  padding: 0 10px;
  height: 40px;
  font-size: 16px;
  color: grey;
`;

export const SubmitBtn = styled.button`
  text-transform: uppercase;
  padding: 6px 20px;
  border-radius: 4px;
  border: none;
  background-color: #323232;
  color: #fff;
  transition: all 350ms ease-in;
  &:hover{
    cursor: pointer;
    background-color: green;
  }
`;
