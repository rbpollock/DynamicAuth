import { SocialSignInProviderEnum } from '@dynamic-labs/sdk-api';
export interface LoginWidgetProps {
    onSubmit?: () => void;
    onSubmitError?: () => void;
    isLoading: boolean;
}
export interface SocialSectionProps {
    defaultProvider?: SocialSignInProviderEnum;
    numOfItemsToDisplay?: number;
    collapsedLayout?: boolean;
}
