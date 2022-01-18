import React from 'react'

export interface FormInputProps {
  blue?: boolean;
  backgroundColor?: string;
  label: string;
}

export default function Input({
  blue = false,
  backgroundColor,
  label,
  ...props
}: FormInputProps) {
  return (
    <input
      value={label}
      style={{ backgroundColor }}
      {...props}
    />
  )
}
