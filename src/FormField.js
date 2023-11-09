// src/components/FormField.jsx
import React from 'react';

const FormField = ({ field, onChange, onRemove }) => {
  return (
    <div className="form-field">
      <label>
        Label:
        <input
          type="text"
          value={field.label}
          onChange={(e) => onChange('label', e.target.value)}
        />
      </label>
      <label>
        Type:
        <select
          value={field.type}
          onChange={(e) => onChange('type', e.target.value)}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="email">Email</option>
          <option value="radio">Radio Button</option>
          {/* Add more types as needed */}
        </select>
      </label>
      {field.type === 'radio' && (
        <label>
          Options:
          <input
            type="text"
            value={field.options}
            onChange={(e) => onChange('options', e.target.value)}
          />
        </label>
      )}
      <label>
        Length:
        <input
          type="number"
          value={field.length}
          onChange={(e) => onChange('length', e.target.value)}
        />
      </label>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
};

export default FormField;
