// src/components/TextAreaInput.jsx
import React from 'react';

const TextAreaInput = ({ field, onChange }) => {
  return (
    <textarea
      value={field.value}
      onChange={(e) => onChange('value', e.target.value)}
    />
  );
};

export default TextAreaInput;
