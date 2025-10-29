
import React from 'react';

interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: string[];
  required?: boolean;
}

export const SelectField: React.FC<SelectFieldProps> = ({ id, name, label, value, onChange, options, required = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-bold text-brand-gray mb-2">
      {label}
    </label>
    <select
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 bg-brand-light border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow duration-200 appearance-none"
    >
      <option value="" disabled>Selecione...</option>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);
