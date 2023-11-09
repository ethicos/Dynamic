// src/components/CheckboxInput.jsx
import React from 'react';

const CheckboxInput = ({ field, onChange }) => {
  return (
    <label className="checkbox-label">
      <input
        type="checkbox"
        checked={field.checked}
        onChange={() => onChange('checked', !field.checked)}
      />
      Check me
    </label>
  );
};

export default CheckboxInput;
