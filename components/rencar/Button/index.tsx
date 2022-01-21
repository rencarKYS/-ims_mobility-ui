import React from 'react'
import styled from 'styled-components';

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  className?: string;
  /**
   * Button inline style
   */
  style?: object;
  disabled?: boolean;
  /**
   * Button border outline
   */
  outline?: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
}

export type BtnStyle = Pick<ButtonProps, "disabled" | "outline">

const btnBackgroundStyle = (props: BtnStyle): string => {
  if (!props.disabled && props.outline) return '#ffffff';
  if (props.disabled) return '#bebdbd';
  if (!props.disabled) return '#fb9310';
  return '#fb9310'
}

const btnBorderStyle = (props: BtnStyle): string => {
  if (!props.disabled && props.outline) return '#fb9310';
  if (props.disabled) return '#bebdbd';
  if (!props.disabled) return '#fb9310';
  return '#fb9310'
}

const btnFontColor = (props: BtnStyle): string => {
  if (!props.disabled && props.outline) return '#fb9310'
  return '#ffffff'
}


const ButtonStyle = styled.button`
  width: 100%;
  height: 44px;
  border: none;
  background: ${btnBackgroundStyle};
  border: 1px solid ${btnBorderStyle};
  color: ${btnFontColor};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
`

export default function Button({
  label,
  disabled,
  outline,
  className,
  style,
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyle
      disabled={disabled}
      outline={outline}
      className={className}
      style={style}
      onClick={onClick}
    >
      {label}
    </ButtonStyle>
  )
}
