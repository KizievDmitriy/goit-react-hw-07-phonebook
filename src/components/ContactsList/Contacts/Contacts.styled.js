import styled from 'styled-components';

export const ItemContact = styled.li`
  padding: 16px 0;
  font-size: 24px;
  align-items: center;
  display: flex;
`;

export const DeleteBtn = styled.button`
  margin-left: auto;
  text-transform: uppercase;
  padding: 6px 20px;
  border-radius: 4px;
  border: none;
  background-color: #323232;
  color: #fff;
  transition: all 350ms ease-in;
  &:hover{
    cursor: pointer;
    background-color: red;
  }
`;
export const Name = styled.p`
  margin-right: 20px;
  text-transform: uppercase;
`;
export const Number = styled.p`
  margin-left: auto;
  margin-right: 20px;
`;