import { FC, PropsWithChildren, ReactNode } from 'react';
import { CopyKey } from '../../shared';
export type InputVariant = 'dense' | 'regular';
export type InputProps = React.ComponentPropsWithoutRef<'input'> & {
    className?: string;
    error?: boolean;
    id: string;
    label: string;
    message?: ReactNode;
    optional?: boolean;
    placeholder?: string;
    suffix?: ReactNode;
    variant?: InputVariant;
} & CopyKey;
export type InputComponent = FC<PropsWithChildren<InputProps>>;
