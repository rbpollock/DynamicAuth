import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgIphoneFaceId = function SvgIphoneFaceId(_ref) {
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
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.25 17.563v-7.188a7.133 7.133 0 0 1 7.125-7.125h7.188a1.625 1.625 0 0 0 0-3.25h-7.188C4.655 0 0 4.654 0 10.375v7.188a1.625 1.625 0 0 0 3.25 0ZM17.563 60.75a1.625 1.625 0 0 1 0 3.25h-7.188C4.655 64 0 59.346 0 53.625v-7.188a1.625 1.625 0 0 1 3.25 0v7.188a7.133 7.133 0 0 0 7.125 7.125h7.188ZM64 46.437v7.188C64 59.345 59.346 64 53.625 64h-7.188a1.625 1.625 0 0 1 0-3.25h7.188a7.133 7.133 0 0 0 7.125-7.125v-7.188a1.625 1.625 0 0 1 3.25 0Zm0-36.062v7.188a1.625 1.625 0 0 1-3.25 0v-7.188a7.133 7.133 0 0 0-7.125-7.125h-7.188a1.625 1.625 0 0 1 0-3.25h7.188C59.345 0 64 4.654 64 10.375ZM43.214 47.302a1.687 1.687 0 0 0-2.29-2.48A13.115 13.115 0 0 1 32 48.313c-3.319 0-6.488-1.239-8.924-3.49a1.688 1.688 0 0 0-2.29 2.48A16.481 16.481 0 0 0 32 51.687c4.17 0 8.153-1.557 11.214-4.385Zm-7.839-23.177v12a4.317 4.317 0 0 1-4.313 4.313h-1.375a1.687 1.687 0 1 1 0-3.376h1.375c.517 0 .938-.42.938-.937v-12a1.687 1.687 0 1 1 3.375 0ZM47 28.844V24.03a1.594 1.594 0 0 0-3.188 0v4.813a1.594 1.594 0 0 0 3.188 0Zm-29.625 0a1.594 1.594 0 0 0 3.188 0V24.03a1.594 1.594 0 0 0-3.188 0v4.813Z",
    fill: "#000"
  })));
};

export { SvgIphoneFaceId as ReactComponent };
