import React from 'react';
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
export default function Input({ placeholder, value, className, style, disabled, dataset, onChange, onBlur, onFocus, }: RencarInputProps): JSX.Element;
