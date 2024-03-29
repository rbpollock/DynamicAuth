import * as React from 'react';

var _path, _path2, _path3;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgAndroidFaceId = function SvgAndroidFaceId(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 64,
    height: 64,
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32 57.887c14.297 0 25.887-11.59 25.887-25.887S46.297 6.113 32 6.113 6.113 17.703 6.113 32 17.703 57.887 32 57.887ZM32 60c15.464 0 28-12.536 28-28S47.464 4 32 4 4 16.536 4 32s12.536 28 28 28Z",
    fill: "#1A73E8"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M36.752 46.831c.27.582.018 1.274-.565 1.544-2.69 1.25-5.356 1.479-7.54.476-2.215-1.017-3.66-3.173-4.134-6.099l2.295-.372c.383 2.364 1.466 3.742 2.809 4.359 1.374.63 3.299.592 5.591-.472a1.162 1.162 0 0 1 1.544.564ZM33.585 35.17v-4.755h2.113v6.868h-5.811V35.17h3.698Z",
    fill: "#1A73E8"
  })), _path3 || (_path3 = /*#__PURE__*/React.createElement("path", {
    d: "M46.792 25.132a2.113 2.113 0 1 1-4.226 0 2.113 2.113 0 0 1 4.226 0ZM21.434 25.132a2.113 2.113 0 1 1-4.227 0 2.113 2.113 0 0 1 4.227 0Z",
    fill: "#1A73E8"
  })));
};

export { SvgAndroidFaceId as ReactComponent };
