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
var SvgPuzzle = function SvgPuzzle(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.044 20.998a.693.693 0 0 0 .7-.68V16.59c.239-2.01 1.121-1.413 2.16-.791 2.51 1.502 4.177-2.45 2.148-3.67-1.592-.956-2.281.689-3.448.52-.45-.067-.763-.54-.862-1.261V8.693a.692.692 0 0 0-.7-.68h-3.21c-2.65-.327-.297-1.755-.297-3.083.001-1.066-.99-1.93-2.214-1.93-1.222 0-2.344.864-2.344 1.93 0 1.253 2.435 2.756-.253 3.083H3.7a.692.692 0 0 0-.699.68v2.688c.205 1.146 1.001 1.411 2.021.655.344-.256.924-.554 1.344-.554 1.094 0 1.982.965 1.982 2.154 0 1.19-.887 2.416-1.982 2.416-.39 0-.755-.123-1.063-.338 0 .091-1.913-1.674-2.302.486v4.121c0 .375.315.68.699.68L10.16 21c.085-.393-.191-.844-.45-1.234-2.04-3.075 5.895-3.382 3.855.095-.1.172-.2.338-.277.5-.098.202-.162.45-.149.639l2.905-.002Z",
    fill: "currentColor"
  })));
};

exports.ReactComponent = SvgPuzzle;
