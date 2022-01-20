import React from 'react'
import styled from 'styled-components';

interface ButtonProps {
  label: string;
  disabled: boolean;
}

const ButtonStyle = styled.button`
  width: 100%;
  height: 44px;
  border: 1px solid${props => props.disabled ? ' #fb9310' : '#bebdbd' };
  color: ${props => props.disabled ? '#fb9310' : '#ffffff' };
  background: ${props => props.disabled ? 'none' : '#bebdbd'};
  cursor: pointer;
`

export default function Button({
  label,
  disabled,
}: ButtonProps) {
  return (
    <ButtonStyle
      disabled={disabled}
    >
      {label}
    </ButtonStyle>
  )
}
