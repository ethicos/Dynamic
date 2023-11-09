// src/components/FormComponent.jsx
import React, { useState } from 'react';
import FormField from './FormField';
import './FormComponent.css';

const FormComponent = () => {
  const [formFields, setFormFields] = useState([]);
  const [formConfig, setFormConfig] = useState({});

  const addFormField = () => {
    const newField = {
      label: '',
      type: 'text',
      options: '',
      length: 10,
    };

    setFormFields((prevFields) => [...prevFields, newField]);
  };

  const removeFormField = (index) => {
    setFormFields((prevFields) => {
      const newFields = [...prevFields];
      newFields.splice(index, 1);
      return newFields;
    });
  };

  const handleFieldChange = (index, property, value) => {
    setFormFields((prevFields) => {
      const newFields = [...prevFields];
      newFields[index][property] = value;
      return newFields;
    });
  };

  const handleSaveConfig = () => {
    const config = {};
    formFields.forEach((field, index) => {
      config[`field${index + 1}`] = {
        label: field.label,
        type: field.type,
        options: field.options.split(',').map((opt) => opt.trim()), // Split options by comma
        length: field.length,
      };
    });
    setFormConfig(config);
    console.log('Form Configuration:', config);
  };

  return (
    <div className="form-container">
      {formFields.map((field, index) => (
        <div key={index}>
          <FormField
            field={field}
            onChange={(property, value) =>
              handleFieldChange(index, property, value)
            }
            onRemove={() => removeFormField(index)}
          />
        </div>
      ))}
      <div className="button-container">
        <button onClick={addFormField}>Add Field</button>
        <button onClick={handleSaveConfig}>Save Configuration</button>
      </div>
      <pre>{JSON.stringify(formConfig, null, 2)}</pre>
    </div>
  );
};

export default FormComponent;
