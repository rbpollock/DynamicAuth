import { FC, PropsWithChildren } from 'react';
import { ProjectSettingsDesign } from '@dynamic-labs/sdk-api';
import { ThemeContextProps, ThemeData } from './types';
export declare const ThemeContext: import("react").Context<ThemeContextProps | undefined>;
interface ThemeContextProviderProps {
    customerTheme?: ThemeData;
    designSettings?: ProjectSettingsDesign;
}
export declare const ThemeContextProvider: FC<PropsWithChildren<ThemeContextProviderProps>>;
export declare const useThemeContext: () => ThemeContextProps;
export {};
