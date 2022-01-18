/// <reference types="react" />
export interface FormInputProps {
    blue?: boolean;
    backgroundColor?: string;
    label: string;
}
export default function Input({ blue, backgroundColor, label, ...props }: FormInputProps): JSX.Element;
