import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const FormItem = styled.div`
    width: 100%;
    position: relative;
    flex-shrink: 0;
    margin-top: 40px;
`;

const StyledLabel = styled.label`
    color: #7d7d7d;
    position: absolute;
    top: 10px;
    left: 20px;
    transition: 0.2s ease-out all;
    font-size: 12px;
    text-transform: uppercase;
`;

const StyledInput = styled.input`
    color: #7d7d7d;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    line-height: 22px;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    padding: 5px;

    &:not(:placeholder-shown) + ${StyledLabel} {
      top: -22px;
      font-size: 13px;
    }

    &:focus {
      outline: none;
    }

    &:focus + ${StyledLabel} {
      top: -22px;
      font-size: 13px;
    }

    ${({textarea}) => textarea && css `
      resize: none;
      min-height: 250px;
    `}
`;

const Input = ({name, label, maxLength, ...props}) => (
  <FormItem>
    <StyledInput
      type="text"
      name={name}
      id={name}
      required
      maxLength={maxLength}
      placeholder=" "
      {...props}
    />
    <StyledLabel htmlFor={name}>
      {label}
    </StyledLabel>
  </FormItem>
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
}

Input.defaultProps = {
  tag: 'input',
  maxLength: 200,
}

export default Input;