export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled: React.InputHTMLAttributes<HTMLInputElement> | boolean;
}