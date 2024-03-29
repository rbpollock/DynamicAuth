import { jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import { useThemeContext } from '../../../context/ThemeContext/ThemeContext.js';
import { Input } from '../../Input/Input.js';

const PrimaryColorInput = () => {
    const { changePrimaryColor, theme } = useThemeContext();
    const [color, setColor] = useState(theme.customColor);
    return (jsx(Input, { id: 'primary-color', label: 'Primary color', value: color, onChange: (e) => setColor(e.target.value), onBlur: (e) => {
            const newColor = color || theme.customColor;
            setColor(newColor);
            changePrimaryColor(newColor);
        } }));
};

export { PrimaryColorInput };
