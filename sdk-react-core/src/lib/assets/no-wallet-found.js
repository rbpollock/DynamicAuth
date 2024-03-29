import * as React from 'react';

var _path, _rect, _rect2, _rect3;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgNoWalletFound = function SvgNoWalletFound(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 121,
    height: 81,
    viewBox: "0 0 121 81",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M99.064 34.016c-6.654 0-12.048 5.394-12.048 12.048 0 6.653 5.394 12.047 12.048 12.047 6.653 0 12.047-5.394 12.047-12.047 0-6.654-5.394-12.048-12.047-12.048ZM83 46.064C83 37.192 90.192 30 99.064 30c8.871 0 16.063 7.192 16.063 16.064 0 3.712-1.259 7.13-3.373 9.85l8.658 8.658a2.008 2.008 0 0 1-2.84 2.84l-8.658-8.658a15.994 15.994 0 0 1-9.85 3.373C90.192 62.127 83 54.935 83 46.064Z",
    fill: "currentColor",
    fillOpacity: 0.35
  })), _rect || (_rect = /*#__PURE__*/React.createElement("rect", {
    y: 8,
    width: 121,
    height: 16,
    rx: 4,
    fill: "currentColor",
    fillOpacity: 0.3
  })), _rect2 || (_rect2 = /*#__PURE__*/React.createElement("rect", {
    y: 30,
    width: 75,
    height: 16,
    rx: 4,
    fill: "currentColor",
    fillOpacity: 0.3
  })), _rect3 || (_rect3 = /*#__PURE__*/React.createElement("rect", {
    y: 52,
    width: 75,
    height: 16,
    rx: 4,
    fill: "currentColor",
    fillOpacity: 0.3
  })));
};

export { SvgNoWalletFound as ReactComponent };
