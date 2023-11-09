// src/components/RadioInput.jsx
import React from 'react';

const RadioInput = ({ field, onChange }) => {
  return (
    <label className="checkbox-label">
      <input
        type="radio"
        value={field.value}
        checked={field.checked}
        onChange={() => onChange('checked', !field.checked)}
      />
      Radio
    </label>
  );
};

export default RadioInput;
