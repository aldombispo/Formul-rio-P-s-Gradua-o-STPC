
import React from 'react';

interface FormFieldProps {
  id: string;
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: 'text' | 'email' | 'tel';
  required?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({ id, name, label, value, onChange, type = 'text', required = false }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-bold text-brand-gray mb-2">
      {label}
    </label>
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full px-4 py-2 bg-brand-light border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold focus:border-transparent transition-shadow duration-200"
    />
  </div>
);
