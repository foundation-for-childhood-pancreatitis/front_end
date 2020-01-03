import React from 'react';
import styled from 'styled-components'
import { Secondary, Primary, Tertiary } from '../index';

function TextInput({
  id, onChange, value, name, required, title, type,
}) {
  return (
    <>
      <label htmlFor={id} className="d-flex pb-3">
        {title}
      </label>
      <StyledInput
        type={type}
        id={id}
        className="form-control mb-4"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}

const StyledInput = styled.input`
font-size: 16px;
  font-weight: 500;
  color: ${Tertiary.DarkGreen};
  border: 1px solid ${Primary.Purple};
  border-radius: 6px;
  padding: 10px;
  margin: 0 0 10px 0;

  ${({ wide }) =>
    wide &&
    `
    width: 100%;
  `};
`;

export default TextInput;
