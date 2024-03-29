import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgFooterGasIcon = function SvgFooterGasIcon(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.667 18.333a2 2 0 0 0 2-2V3.667a2 2 0 0 0-2-2h-6a2 2 0 0 0-2 2v12.666a2 2 0 0 0 2 2h6ZM9 8.333a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H4.333a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1H9ZM17.5 5.833c.46 0 .833.373.833.834v7.5H17.5h.833V14.186a1.201 1.201 0 0 1-.005.113 2.881 2.881 0 0 1-.29 1.075c-.155.307-.398.64-.779.893-.386.258-.863.4-1.426.4-.562 0-1.04-.142-1.425-.4a2.295 2.295 0 0 1-.778-.893 2.878 2.878 0 0 1-.296-1.16v-.045l.833-.001h-.834V9.185l-.001-.011a.2.2 0 0 0-.015-.051v-.001s.005.008.016.02V7.5c.354 0 .675.091.944.27.264.176.43.404.53.607A1.856 1.856 0 0 1 15 9.13v.035c0 .001 0 .002-.832.002H15v4.992l.001.02a1.228 1.228 0 0 0 .12.448c.054.11.123.194.211.253.083.055.23.12.501.12s.419-.065.502-.12a.633.633 0 0 0 .211-.253 1.218 1.218 0 0 0 .12-.468V6.667c0-.46.374-.834.834-.834ZM13.378 9.17h.002-.002Z",
    fill: "currentColor"
  })));
};

export { SvgFooterGasIcon as ReactComponent };
