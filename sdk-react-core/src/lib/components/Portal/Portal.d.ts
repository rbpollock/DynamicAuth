import { ReactNode } from 'react';
import { UseTransitionEvents } from '../../utils/hooks/useTransition';
type PortalProps = {
    children: ReactNode;
    elementId?: string;
    handleClose: () => void;
    isShown?: boolean;
    transitionEvents?: UseTransitionEvents;
    whiteList?: (activeElement: HTMLElement) => boolean;
    withBackdrop?: boolean;
    zIndex?: number;
};
export declare const Portal: ({ children, isShown, handleClose, withBackdrop, zIndex, transitionEvents, elementId, }: PortalProps) => JSX.Element;
export {};
