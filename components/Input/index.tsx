import React from 'react'

interface InputProps {
  blue?: boolean;
  backgroundColor?: string;
  label: string;
}

export default function Input({
  blue = false,
  backgroundColor,
  label,
  ...props
}: InputProps) {
  return (
    <input
      value={label}
      style={{ backgroundColor }}
      {...props}
    />
  )
}
