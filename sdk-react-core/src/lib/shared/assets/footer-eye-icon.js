import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgFooterEyeIcon = function SvgFooterEyeIcon(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.995 4.167c3.965 0 6.643 2.655 7.937 4.675a2.14 2.14 0 0 1 0 2.316c-1.294 2.02-3.972 4.675-7.937 4.675-3.965 0-6.643-2.655-7.937-4.675a2.14 2.14 0 0 1 0-2.316c1.294-2.02 3.972-4.675 7.937-4.675ZM14.16 10a4.167 4.167 0 1 1-8.333 0 4.167 4.167 0 0 1 8.333 0Zm-4.12 2.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
    fill: "currentColor"
  })));
};

export { SvgFooterEyeIcon as ReactComponent };
