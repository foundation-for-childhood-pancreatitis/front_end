import React from 'react';

const TextArea = ({
  id, name, value, label, onChange, rows, className,
}) => (
  <>
    <label htmlFor={id} className="d-flex pb-3">{label}</label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      className={className}
    />
  </>
);


export default TextArea;
