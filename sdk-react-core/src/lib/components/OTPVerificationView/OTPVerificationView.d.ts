import { FC, MouseEventHandler } from 'react';
type OtpVerificationLayoutProps = {
    email: string;
    error?: Error;
    isLoading: boolean;
    isValid: boolean;
    onClickBack?: MouseEventHandler<HTMLButtonElement>;
    onClickEditEmail?: MouseEventHandler<HTMLButtonElement>;
    onPinChange?: (value: string) => void;
    onPinComplete: (value: string) => void;
    successBannerTextKey?: string;
};
export declare const OTPVerificationView: FC<OtpVerificationLayoutProps>;
export {};
