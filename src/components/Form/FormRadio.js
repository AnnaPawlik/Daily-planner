import React from 'react';
import styled from 'styled-components';

const StyledRadio = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin: 20px 20px 0 0;
  font-weight: 700;
  color: #818181;
  cursor: pointer;
`;

const RadioButton = styled.div`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid #818181;
`;

const RadioInput = styled.input`
    opacity: 0;
    position: absolute;

    &:checked + ${RadioButton} {
      background-color: #818181;
      box-shadow: inset 0 0 0 2px white;
    }
`;

const Radio = ({id, checked, changeFn, children}) => (
  <StyledRadio>
    <RadioInput
      id={id}
      type="radio"
      checked={checked}
      onChange={changeFn}
    />
    <RadioButton />
  {children}
  </StyledRadio>
)

export default Radio;