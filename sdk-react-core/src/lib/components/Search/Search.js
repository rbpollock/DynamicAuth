import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';
import { ReactComponent as SvgSearch } from '../../assets/search.js';
import { classNames } from '../../utils/functions/classNames/classNames.js';

const Search = ({ className = '', id, label, type, onChange, onBlur, name, value, onClickClear, copykey, }) => (jsxs("label", { htmlFor: id, className: classNames('search__container', value ? 'search__container--active' : undefined), children: [jsx("div", { className: 'search-icon__container', children: jsx(SvgSearch, {}) }), jsx("input", { name: name, value: value, onChange: onChange, onBlur: onBlur, type: type, id: id, placeholder: label, className: classNames('search__input', className), "data-testid": 'Search', copykey: copykey }), value.length > 0 && (jsx("button", { type: 'button', onClick: onClickClear, className: 'search__button--clear', children: "Clear" }))] }));

export { Search };
