
import React, { ReactNode } from 'react';

interface CheckboxFieldProps {
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
  required?: boolean;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, name, checked, onChange, children, required = false }) => (
  <div className="flex items-start">
    <input
      type="checkbox"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
      required={required}
      className="h-5 w-5 mt-0.5 text-brand-navy border-gray-300 rounded focus:ring-brand-gold"
    />
    <label htmlFor={id} className="ml-3 text-sm text-brand-gray">
      {children}
    </label>
  </div>
);
