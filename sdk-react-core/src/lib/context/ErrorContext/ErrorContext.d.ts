import { ReactNode } from 'react';
interface ErrorContextProps {
    error: string | undefined;
    setError(error: string | undefined): void;
    setErrorMessage: (status: string) => void;
}
export declare const ErrorContext: import("react").Context<ErrorContextProps | undefined>;
export declare const ErrorContextProvider: ({ children }: {
    children: ReactNode;
}) => JSX.Element;
export declare const useErrorContext: () => ErrorContextProps;
export {};
