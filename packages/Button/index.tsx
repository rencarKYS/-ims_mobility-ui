import React from 'react'
import styled from 'styled-components';

export interface PlatformProps {
  rencar?: boolean;
  ims?: boolean
}

export interface ButtonProps extends PlatformProps {
  /**
   * Button contents
   */
  children: string;
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
   /**
   * 삭제, 취소
   */
  cancel: boolean;
}



export type BtnStyle = Pick<ButtonProps, "disabled" | "outline" | "cancel"> & PlatformProps

const parseColor = (props: PlatformProps) => {
  if (props.rencar) return '#fb9310';
  return '#282828';
}


const btnBackgroundStyle = (props: BtnStyle): string => {
  if (props.cancel) return '#ffffff'
  if (!props.disabled && props.outline) return '#ffffff';
  if (props.disabled) return '#bebdbd';
  if (!props.disabled) return parseColor(props)
  return parseColor(props)
}

const btnBorderStyle = (props: BtnStyle): string => {
  if (props.cancel) return '#f84b4b'
  if (props.disabled) return '#bebdbd';
  if (!props.disabled && props.outline) return parseColor(props);
  if (!props.disabled) return parseColor(props)
  return parseColor(props)
}

const btnFontColor = (props: BtnStyle): string => {
  if (props.cancel) return '#f84b4b'
  if (!props.disabled && props.outline) return parseColor(props)
  return '#ffffff'
}

const ButtonStyle = styled.button`
  width: 100%;
  height: 40px;
  background: ${btnBackgroundStyle};
  border: 1px solid ${btnBorderStyle};
  border-radius: ${props => props.ims ? '5px' : 'none'};
  color: ${btnFontColor};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
`

export default function Button({
  children,
  disabled,
  outline,
  className,
  style,
  onClick,
  rencar,
  ims,
  cancel,
}: ButtonProps) {
  return (
    <ButtonStyle
      disabled={disabled}
      outline={outline}
      className={className}
      style={style}
      onClick={onClick}
      rencar={rencar}
      ims={ims}
      cancel={cancel}
    >
      {children}
    </ButtonStyle>
  )
}
