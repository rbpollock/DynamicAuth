import { jsx } from 'react/jsx-runtime';
import { useThemeContext } from '../../../context/ThemeContext/ThemeContext.js';
import { Switch } from '../../Switch/Switch.js';

const ThemeSwitch = () => {
    const { changeTheme, theme } = useThemeContext();
    return (jsx(Switch, { firstButton: {
            active: theme.theme.name === 'light',
            handleButtonClick: () => changeTheme('light'),
            name: 'Light',
        }, secondButton: {
            active: theme.theme.name === 'dark',
            handleButtonClick: () => changeTheme('dark'),
            name: 'Dark',
        }, thirdButton: {
            active: theme.theme.name === 'auto',
            handleButtonClick: () => changeTheme('auto'),
            name: 'Auto',
        } }));
};

export { ThemeSwitch };
