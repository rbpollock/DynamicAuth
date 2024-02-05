export declare const useLocalStorage: <T>(key: string, initialValue: T, valueValidator?: ((data: T) => boolean) | undefined, otherKeysToRemove?: string[]) => readonly [T, (value: T | ((val: T) => T)) => void, () => void];
