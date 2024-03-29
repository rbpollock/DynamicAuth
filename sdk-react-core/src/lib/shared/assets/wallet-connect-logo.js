import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgWalletConnectLogo = function SvgWalletConnectLogo(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 17,
    height: 12,
    viewBox: "0 0 17 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M3.84 2.345c2.573-3.127 6.747-3.127 9.32 0l.31.376a.463.463 0 0 1 0 .566l-1.06 1.287a.145.145 0 0 1-.232 0l-.427-.518c-1.795-2.18-4.707-2.18-6.502 0l-.457.555a.145.145 0 0 1-.233 0L3.5 3.324a.463.463 0 0 1 0-.566l.34-.413Zm11.512 2.661.943 1.146a.463.463 0 0 1 0 .566l-4.252 5.165a.29.29 0 0 1-.466 0L8.558 8.217a.073.073 0 0 0-.116 0l-3.018 3.666a.29.29 0 0 1-.466 0L.705 6.718a.463.463 0 0 1 0-.566l.943-1.146a.29.29 0 0 1 .466 0l3.018 3.666c.032.04.085.04.117 0l3.018-3.666a.29.29 0 0 1 .466 0l3.018 3.666c.033.04.085.04.117 0l3.018-3.666a.29.29 0 0 1 .466 0Z",
    fill: "currentColor"
  })));
};

export { SvgWalletConnectLogo as ReactComponent };
