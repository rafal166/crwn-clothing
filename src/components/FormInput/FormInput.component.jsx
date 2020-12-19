import React from 'react';
import './FormInput.styles.sass';

export default function FormInput({ handleChange, label, ...otherProps }) {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        onChange={handleChange}
        {...otherProps}
      />
      {label ? (
        <label className={`${otherProps.value.length ? 'shrink' : ''}`}>
          {label}
        </label>
      ) : null}
    </div>
  );
}
