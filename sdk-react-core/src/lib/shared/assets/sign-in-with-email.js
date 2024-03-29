import * as React from 'react';

var _circle, _path, _path2;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgSignInWithEmail = function SvgSignInWithEmail(_ref) {
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
  }, title) : null, _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 32,
    cy: 32,
    r: 32,
    fill: "currentColor"
  })), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M51 29.333a1.333 1.333 0 0 0-1.333 0l-17.334 9.8L15 29.333a1.333 1.333 0 0 0-2 1.16V42a4 4 0 0 0 4 4h30.667a4 4 0 0 0 4-4V30.5A1.333 1.333 0 0 0 51 29.333Z",
    fill: "#fff"
  })), _path2 || (_path2 = /*#__PURE__*/React.createElement("path", {
    d: "M47.667 18H17a4 4 0 0 0-4 4v2.5a1.334 1.334 0 0 0 .667 1.16l18 10.167a1.333 1.333 0 0 0 1.333 0L51 25.66a1.334 1.334 0 0 0 .667-1.16V22a4 4 0 0 0-4-4Z",
    fill: "#fff"
  })));
};

export { SvgSignInWithEmail as ReactComponent };
