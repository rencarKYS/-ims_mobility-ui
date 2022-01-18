/// <reference types="react" />
export interface RencarInputProps {
    blue?: boolean;
    backgroundColor?: string;
    label: string;
}
export default function Input({ blue, backgroundColor, label, ...props }: RencarInputProps): JSX.Element;
