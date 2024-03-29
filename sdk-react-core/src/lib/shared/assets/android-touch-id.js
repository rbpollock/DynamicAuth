import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgAndroidTouchId = function SvgAndroidTouchId(_ref) {
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
    d: "M47.493 11.92c-.213 0-.426-.053-.613-.16C41.76 9.12 37.333 8 32.027 8c-5.28 0-10.294 1.253-14.854 3.76-.64.347-1.44.107-1.813-.533a1.35 1.35 0 0 1 .533-1.814c4.96-2.693 10.4-4.08 16.134-4.08 5.68 0 10.64 1.254 16.08 4.054.666.346.906 1.146.56 1.786-.24.48-.694.747-1.174.747Zm-38.16 14a1.33 1.33 0 0 1-1.093-2.107c2.64-3.733 6-6.666 10-8.72 8.373-4.32 19.093-4.346 27.493-.026 4 2.053 7.36 4.96 10 8.666.427.587.294 1.44-.32 1.867a1.33 1.33 0 0 1-1.866-.32c-2.4-3.36-5.44-6-9.04-7.84-7.654-3.92-17.44-3.92-25.067.027-3.627 1.866-6.667 4.533-9.067 7.893-.213.373-.613.56-1.04.56ZM26 58.107c-.347 0-.693-.134-.933-.4-2.32-2.32-3.574-3.814-5.36-7.04-1.84-3.28-2.8-7.28-2.8-11.574 0-7.92 6.773-14.373 15.093-14.373s15.093 6.453 15.093 14.373a1.32 1.32 0 0 1-1.333 1.334 1.32 1.32 0 0 1-1.333-1.334c0-6.453-5.574-11.706-12.427-11.706S19.573 32.64 19.573 39.093c0 3.84.854 7.387 2.48 10.267 1.707 3.067 2.88 4.373 4.934 6.453a1.37 1.37 0 0 1 0 1.894c-.294.266-.64.4-.987.4Zm19.12-4.934c-3.173 0-5.973-.8-8.267-2.373-3.973-2.693-6.346-7.067-6.346-11.707a1.32 1.32 0 0 1 1.333-1.333 1.32 1.32 0 0 1 1.333 1.333c0 3.76 1.92 7.307 5.174 9.494 1.893 1.28 4.106 1.893 6.773 1.893.64 0 1.707-.08 2.773-.267a1.33 1.33 0 0 1 1.547 1.094 1.33 1.33 0 0 1-1.093 1.546c-1.52.294-2.854.32-3.227.32Zm-5.36 5.494a1.56 1.56 0 0 1-.347-.054c-4.24-1.173-7.013-2.746-9.92-5.6-3.733-3.706-5.786-8.64-5.786-13.92 0-4.32 3.68-7.84 8.213-7.84 4.533 0 8.213 3.52 8.213 7.84 0 2.854 2.48 5.174 5.547 5.174 3.067 0 5.547-2.32 5.547-5.174 0-10.053-8.667-18.213-19.334-18.213-7.573 0-14.506 4.213-17.626 10.747-1.04 2.16-1.574 4.693-1.574 7.466 0 2.08.187 5.36 1.787 9.627a1.301 1.301 0 0 1-.773 1.707A1.323 1.323 0 0 1 12 49.653c-1.307-3.493-1.947-6.96-1.947-10.56 0-3.2.614-6.106 1.814-8.64 3.546-7.44 11.413-12.266 20.026-12.266 12.134 0 22 9.36 22 20.88 0 4.32-3.68 7.84-8.213 7.84-4.533 0-8.213-3.52-8.213-7.84 0-2.854-2.48-5.174-5.547-5.174-3.067 0-5.547 2.32-5.547 5.174 0 4.56 1.76 8.826 4.987 12.026 2.533 2.507 4.96 3.894 8.72 4.934.72.186 1.12.933.933 1.626a1.301 1.301 0 0 1-1.253 1.014Z",
    fill: "#1A73E8"
  })));
};

export { SvgAndroidTouchId as ReactComponent };
