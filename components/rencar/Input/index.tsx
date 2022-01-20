import React from 'react'
import styled from 'styled-components';

export interface RencarInputProps {
  placeholder?: string;
  value?: string | number;
  className?: string;
  style?: object;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  disabled?: boolean;
  dataset?: string;
}

const InputStyle = styled.input`
  width: 100%;
  height: 44px;
  border: 1px solid #e6e6e6;
  padding: 0 10px;
`



export default function Input({
  placeholder,
  value,
  className,
  style,
  disabled,
  dataset,
  onChange,
  onBlur,
  onFocus,
}: RencarInputProps) {
  return (
    <InputStyle
      placeholder={placeholder}
      value={value}
      data-input={dataset}
      className={className}
      style={style}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      disabled={disabled}
    />
  )
}
