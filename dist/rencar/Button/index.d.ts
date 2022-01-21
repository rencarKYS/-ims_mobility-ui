import React from 'react';
export interface ButtonProps {
    label: string;
    className?: string;
    style?: object;
    disabled?: boolean;
    outline?: boolean;
    onClick: React.MouseEventHandler<HTMLElement>;
}
export declare type BtnStyle = Pick<ButtonProps, "disabled" | "outline">;
export default function Button({ label, disabled, outline, className, style, onClick, }: ButtonProps): JSX.Element;
