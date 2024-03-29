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

var _circle, _path, _g, _defs;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgPasskeyIntroIcon = function SvgPasskeyIntroIcon(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    width: 206,
    height: 206,
    viewBox: "0 0 206 206",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _circle || (_circle = /*#__PURE__*/React__namespace.createElement("circle", {
    cx: 103,
    cy: 103,
    r: 103,
    fill: "url(#passkey-intro-icon_svg__a)",
    fillOpacity: 0.12
  })), _path || (_path = /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M101.59 42.066a6.37 6.37 0 0 1 1.822 0c.696.1 1.343.345 1.858.54l.138.051 17.072 6.402.416.156c1.967.734 3.695 1.38 5.025 2.551a9.553 9.553 0 0 1 2.612 3.77c.631 1.657.628 3.501.625 5.6v15.672c0 9-4.895 16.504-10.187 22.016-5.326 5.55-11.421 9.469-14.643 11.349l-.131.077c-.588.345-1.351.793-2.361 1.01a6.78 6.78 0 0 1-2.67 0c-1.01-.217-1.774-.665-2.362-1.01l-.13-.077c-3.223-1.88-9.317-5.799-14.644-11.349-5.291-5.512-10.186-13.015-10.186-22.016V61.137c-.003-2.1-.006-3.944.625-5.601a9.553 9.553 0 0 1 2.612-3.77c1.33-1.172 3.058-1.817 5.025-2.551l.416-.156 17.072-6.402.138-.052c.514-.194 1.162-.439 1.858-.54ZM94.382 69.11v-4.037a8.073 8.073 0 1 1 16.147 0v4.036a13.434 13.434 0 0 1 5.383 10.766c0 7.431-6.024 13.456-13.456 13.456C95.025 93.33 89 87.306 89 79.875c0-4.402 2.114-8.31 5.382-10.765Zm13.147-1.702v-2.335a5.073 5.073 0 1 0-10.147 0v2.336a13.414 13.414 0 0 1 5.074-.99c1.795 0 3.508.352 5.073.99ZM106 77.5a3.5 3.5 0 0 1-2 3.163V83.5a1.5 1.5 0 1 1-3 0v-2.837a3.5 3.5 0 1 1 5-3.163ZM126 22a4 4 0 0 1 4-4h45a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-45a4 4 0 0 1-4-4V22Zm15 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm7 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm13-3a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm9 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm1 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    fill: "#4779FF"
  })), _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#passkey-intro-icon_svg__b)"
  }, /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#passkey-intro-icon_svg__c)"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M59.731 54.983a15.068 15.068 0 0 0 1.087-10.69C58.656 36.226 50.362 31.438 42.294 33.6c-8.069 2.162-12.857 10.455-10.695 18.524a15.068 15.068 0 0 0 6.288 8.715c1.864-4.039 6.77-6.622 9.948-7.473 3.179-.852 8.204-1.183 11.896 1.618Zm-19.98-8.96a5.672 5.672 0 1 1 10.957-2.935 5.672 5.672 0 0 1-10.957 2.936Z",
    fill: "#4779FF"
  })))), _defs || (_defs = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "passkey-intro-icon_svg__b"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    fill: "#fff",
    transform: "rotate(-15 151.778 -80.474)",
    d: "M0 0h33v33H0z"
  })), /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "passkey-intro-icon_svg__c"
  }, /*#__PURE__*/React__namespace.createElement("rect", {
    x: 27.684,
    y: 37.513,
    width: 30.25,
    height: 30.25,
    rx: 15.125,
    transform: "rotate(-15 27.684 37.513)",
    fill: "#fff"
  })), /*#__PURE__*/React__namespace.createElement("linearGradient", {
    id: "passkey-intro-icon_svg__a",
    x1: 103,
    y1: 0,
    x2: 103,
    y2: 105.711,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React__namespace.createElement("stop", {
    stopColor: "#4779FF"
  }), /*#__PURE__*/React__namespace.createElement("stop", {
    offset: 1,
    stopColor: "#4779FF",
    stopOpacity: 0
  })))));
};

exports.ReactComponent = SvgPasskeyIntroIcon;
