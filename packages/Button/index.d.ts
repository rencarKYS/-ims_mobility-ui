import React from 'react';
export interface PlatformProps {
    rencar?: boolean;
    ims?: boolean;
}
export interface ButtonProps extends PlatformProps {
    children: string;
    className?: string;
    style?: object;
    disabled?: boolean;
    outline?: boolean;
    onClick: React.MouseEventHandler<HTMLElement>;
    cancel: boolean;
}
export declare type BtnStyle = Pick<ButtonProps, "disabled" | "outline" | "cancel"> & PlatformProps;
export default function Button({ children, disabled, outline, className, style, onClick, rencar, ims, cancel, }: ButtonProps): JSX.Element;
