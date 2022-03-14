import React from 'react'
import styled from 'styled-components';

type inputType = 'text' | 'password'

export interface InputProps {
  type: inputType;
  placeholder?: string;
  dataset?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  value?: string;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

const InputStyle = styled.input`
  padding: 0 5px;
  height: 25px;
  font-size: 14px;
  width: 100%;
  background: white;
  border: 1px solid #dddddd;
`

//25 28 30 42 44 48 50
// h-normal, h-sm1, h-sm2
// h-lg1, h-lg2, h-lg3, h-lg4

function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  return (
    <InputStyle
      {...props}
      ref={ref}
      data-input={props.dataset}
    />
  )
}

export default React.forwardRef(Input)