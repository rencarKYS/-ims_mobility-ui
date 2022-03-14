import React from 'react';
declare type inputType = 'text' | 'password';
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
declare const _default: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default _default;
