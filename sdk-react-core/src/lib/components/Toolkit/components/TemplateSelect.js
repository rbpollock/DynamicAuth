import { jsxs, jsx } from 'react/jsx-runtime';
import { useThemeContext } from '../../../context/ThemeContext/ThemeContext.js';
import { Select } from '../../Select/Select.js';

const TemplateSelect = () => {
    const { theme, changeTemplate } = useThemeContext();
    const handleChange = (e) => {
        changeTemplate(e.target.value);
    };
    return (jsxs(Select, { label: 'template', value: theme.template, onChange: handleChange, selectDataTestId: 'template-select', children: [jsx("option", { value: 'default', children: "Default" }), jsx("option", { value: 'matrix', children: "Matrix" }), jsx("option", { value: 'minimal', children: "Minimal" }), jsx("option", { value: 'rounded', children: "Rounded" }), jsx("option", { value: 'trinity', children: "Trinity" })] }));
};

export { TemplateSelect };
