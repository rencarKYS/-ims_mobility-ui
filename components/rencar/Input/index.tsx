import React from 'react'

export interface RencarInputProps {
  blue?: boolean;
  backgroundColor?: string;
  label: string;
}

export default function Input({
  blue = false,
  backgroundColor,
  label,
  ...props
}: RencarInputProps) {
  return (
    <input
      value={label}
      style={{ backgroundColor }}
      {...props}
    />
  )
}
