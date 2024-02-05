'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgWalletOutline = function SvgWalletOutline(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.272 3.708c.177-.027.364-.041.561-.041h7.5a3.088 3.088 0 0 1 .539.036c.906.106 1.613.486 2.096 1.045.483.56.782 1.348.782 2.335v.459h-.983a2.406 2.406 0 0 0-1.73.72 2.424 2.424 0 0 0-.717 1.955c.114 1.342 1.317 2.241 2.547 2.241h.883v.459c0 1.08-.357 1.92-.926 2.49-.57.57-1.411.926-2.49.926h-7.5c-1.08 0-1.922-.356-2.491-.926-.57-.57-.926-1.41-.926-2.49V7.083c0-.98.293-1.763.77-2.322.474-.556 1.17-.938 2.065-1.05l.02-.003Zm12.978 8.551v.658c0 1.42-.477 2.662-1.366 3.55-.888.89-2.13 1.366-3.55 1.366h-7.5c-1.421 0-2.663-.476-3.552-1.365-.889-.889-1.365-2.13-1.365-3.551V7.083c0-1.286.39-2.428 1.128-3.295.738-.865 1.784-1.408 3.01-1.564a5.19 5.19 0 0 1 .778-.057h7.5c.227 0 .476.008.73.048 1.235.148 2.293.687 3.04 1.553.75.869 1.147 2.019 1.147 3.315v.657c.495.272.834.794.834 1.402v1.716c0 .608-.338 1.13-.834 1.401Zm-2.581-3.213a.903.903 0 0 0-.565.269l-.013.013a.924.924 0 0 0-.278.75l.001.01c.038.455.484.87 1.053.87h1.614c.069-.006.102-.057.102-.1V9.142c0-.043-.033-.094-.102-.1h-1.714a1.046 1.046 0 0 0-.098.004ZM5.083 7.5a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z",
    fill: "currentColor"
  })));
};

exports.ReactComponent = SvgWalletOutline;
