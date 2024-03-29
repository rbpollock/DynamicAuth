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

var _path, _path2;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgQuestionMark = function SvgQuestionMark(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10 3.25a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM1.667 10a8.333 8.333 0 1 1 16.666 0 8.333 8.333 0 0 1-16.666 0Z",
    fill: "currentcolor"
  })), _path2 || (_path2 = /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.31 7.044a1.784 1.784 0 0 0-1.133.192 1.513 1.513 0 0 0-.699.783.792.792 0 0 1-1.481-.559c.26-.689.768-1.257 1.42-1.613a3.368 3.368 0 0 1 2.144-.367 3.262 3.262 0 0 1 1.908 1.023c.496.55.775 1.254.774 1.99 0 1.201-.948 1.972-1.587 2.369a6.63 6.63 0 0 1-1.354.635l-.028.01-.008.002h-.003l-.002.001-.235-.756.235.756A.792.792 0 0 1 9.789 10h.001m0 0 .014-.005.06-.021a5.054 5.054 0 0 0 .956-.456c.575-.357.84-.717.84-1.024 0-.332-.125-.66-.367-.928a1.68 1.68 0 0 0-.982-.521M9.265 13.77c0-.438.355-.792.792-.792h.01a.792.792 0 1 1 0 1.584h-.01a.792.792 0 0 1-.792-.792Z",
    fill: "currentcolor"
  })));
};

exports.ReactComponent = SvgQuestionMark;
