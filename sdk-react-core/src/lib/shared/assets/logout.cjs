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
var SvgLogout = function SvgLogout(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 14,
    height: 12,
    viewBox: "0 0 14 12",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 1.333c-.736 0-1.333.597-1.333 1.334v6.666c0 .737.597 1.334 1.333 1.334h2.667C6.403 10.667 7 10.07 7 9.333v-.666a.667.667 0 0 1 1.333 0v.666A2.667 2.667 0 0 1 5.667 12H3A2.667 2.667 0 0 1 .333 9.333V2.667A2.667 2.667 0 0 1 3 0h2.667a2.667 2.667 0 0 1 2.666 2.667v.666a.667.667 0 1 1-1.333 0v-.666c0-.737-.597-1.334-1.333-1.334H3Zm6.862 1.529c.26-.26.682-.26.943 0l2.666 2.667c.26.26.26.682 0 .942l-2.666 2.667a.667.667 0 0 1-.943-.943l1.529-1.528H3.667a.667.667 0 0 1 0-1.334h7.724L9.862 3.805a.667.667 0 0 1 0-.943Z"
  })));
};

exports.ReactComponent = SvgLogout;
