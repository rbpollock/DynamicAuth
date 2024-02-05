import { ComponentPropsWithoutRef, ElementType, ReactElement } from 'react';
import { CopyKey } from '../../shared';
export type TypographyTag = ElementType;
export type TypographyVariant = 'title' | 'body_normal' | 'body_small' | 'body_mini' | 'button_primary' | 'button_secondary' | 'button_tertiary' | 'numbers_big' | 'numbers_medium';
export type TypographyColor = 'primary' | 'secondary' | 'brand-primary' | 'tertiary' | 'link' | 'error-1' | 'error-2' | 'tooltip' | 'green-1' | 'inherit';
export type TypographyWeight = 'regular' | 'medium' | 'bold';
export type TypographyTransform = 'uppercase';
export type TypographyProps<TAG extends ElementType = 'p'> = {
    as?: TAG;
    className?: string;
    color?: TypographyColor;
    transform?: TypographyTransform;
    truncate?: boolean;
    variant?: TypographyVariant;
    weight?: TypographyWeight;
} & ComponentPropsWithoutRef<TAG> & CopyKey;
export type TypographyComponent = <TAG extends ElementType>(props: TypographyProps<TAG>, ref?: any) => ReactElement;
