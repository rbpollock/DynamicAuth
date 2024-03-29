import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgPencilAltIcon = function SvgPencilAltIcon(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 17,
    height: 16,
    viewBox: "0 0 17 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.638 2.862a.667.667 0 0 0-.943 0L7.167 8.391v.943h.942l5.53-5.53a.667.667 0 0 0 0-.942Zm-1.886-.943a2 2 0 1 1 2.829 2.829l-5.724 5.724a.667.667 0 0 1-.471.195H6.5A.667.667 0 0 1 5.833 10V8.115c0-.177.07-.347.196-.472l5.723-5.724ZM4.5 4a.667.667 0 0 0-.667.667V12c0 .368.299.667.667.667h7.333A.667.667 0 0 0 12.5 12V8.667a.667.667 0 0 1 1.333 0V12a2 2 0 0 1-2 2H4.5a2 2 0 0 1-2-2V4.667a2 2 0 0 1 2-2h3.333a.667.667 0 0 1 0 1.333H4.5Z",
    fill: "currentColor"
  })));
};

export { SvgPencilAltIcon as ReactComponent };
