// src/components/DropdownInput.jsx
import React from 'react';

const DropdownInput = ({ field, onChange }) => {
  return (
    <select
      value={field.value}
      onChange={(e) => onChange('value', e.target.value)}
    >
      <option value="" disabled>
        Select an option
      </option>
      {field.options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default DropdownInput;
