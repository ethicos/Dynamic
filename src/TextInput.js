// src/components/TextInput.jsx
import React from 'react';

const TextInput = ({ field, onChange }) => {
  return (
    <input
      type="text"
      value={field.value}
      onChange={(e) => onChange('value', e.target.value)}
    />
  );
};

export default TextInput;
