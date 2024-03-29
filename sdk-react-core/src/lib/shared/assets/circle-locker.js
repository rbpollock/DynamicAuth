import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgCircleLocker = function SvgCircleLocker(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 65,
    height: 64,
    viewBox: "0 0 65 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M32.5 64c17.673 0 32-14.327 32-32 0-17.673-14.327-32-32-32C14.827 0 .5 14.327.5 32c0 17.673 14.327 32 32 32Zm-7.618-39.89v-4.037a8.074 8.074 0 0 1 16.147 0v4.036a13.436 13.436 0 0 1 5.383 10.766c0 7.431-6.025 13.456-13.456 13.456-7.432 0-13.456-6.025-13.456-13.456 0-4.402 2.114-8.31 5.382-10.765Zm13.147-1.702v-2.335a5.074 5.074 0 0 0-10.147 0v2.336a13.416 13.416 0 0 1 5.074-.99c1.795 0 3.507.352 5.073.99ZM34.5 35.663a3.5 3.5 0 1 0-3 0V38.5a1.5 1.5 0 0 0 3 0v-2.837Z",
    fill: "#4779FF"
  })));
};

export { SvgCircleLocker as ReactComponent };
