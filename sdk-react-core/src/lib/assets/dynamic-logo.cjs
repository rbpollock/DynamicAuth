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

var _g, _defs;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgDynamicLogo = function SvgDynamicLogo(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React__namespace.createElement("svg", _extends({
    fill: "none",
    viewBox: "0 0 114 21",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React__namespace.createElement("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/React__namespace.createElement("g", {
    clipPath: "url(#dynamic-logo_svg__a)",
    fill: "currentColor"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    d: "M10.053 2.002c-.43.4-.85.793-1.273 1.184-1.959 1.818-3.918 3.638-5.879 5.453-.45.417-.915.817-1.48 1.061C.75 9.99.365 9.81.15 9.085-.153 8.072.009 7.128.59 6.258 1.087 5.517 1.71 4.9 2.354 4.3A178.857 178.857 0 0 1 5.45 1.47c.457-.408.957-.78 1.567-.905 1.828-.368 2.994 1.384 3.038 1.436l-.002.001zM1.259 11.254c1.112-.32 1.946-1.026 2.758-1.768 2.59-2.363 5.176-4.728 7.777-7.078A16.823 16.823 0 0 1 13.609.96C14.42.408 15.303.33 16.173.855c.314.189.623.409.878.672a106.565 106.565 0 0 1 5.28 5.866c.298.358.542.774.744 1.196.375.785.279 1.561-.178 2.293-.409.655-.956 1.192-1.52 1.702a699.92 699.92 0 0 1-6.653 5.96c-.6.53-1.26 1.004-1.94 1.422-1.282.791-2.568.693-3.737-.244A16.245 16.245 0 0 1 7.14 17.92c-1.883-2.087-3.73-4.203-5.592-6.31-.094-.106-.18-.22-.29-.358v.002zM39.574.915h2.808V16.14h-2.808v-1.284c-.827 1.06-2.003 1.587-3.526 1.587-1.522 0-2.717-.555-3.755-1.664s-1.556-2.469-1.556-4.078c0-1.609.518-2.968 1.556-4.077s2.288-1.665 3.755-1.665 2.7.53 3.526 1.587V.913v.002zm-5.17 11.996c.573.572 1.294.859 2.166.859s1.589-.287 2.155-.86c.566-.572.849-1.309.849-2.207 0-.898-.283-1.635-.85-2.207-.565-.572-1.283-.859-2.154-.859s-1.593.287-2.166.86c-.574.571-.86 1.308-.86 2.206 0 .898.286 1.635.86 2.208zM51.766 5.264h3.004l-3.968 10.894c-.566 1.554-1.315 2.682-2.251 3.385-.934.704-2.098 1.02-3.489.947v-2.61c.755.015 1.352-.144 1.796-.477.442-.334.796-.87 1.057-1.61L43.453 5.268h3.069l2.837 7.308 2.409-7.308-.002-.002zM61.908 4.959c1.19 0 2.174.398 2.949 1.196.777.798 1.163 1.9 1.163 3.305v6.678h-2.808v-6.33c0-.723-.196-1.279-.588-1.664-.392-.383-.914-.576-1.567-.576-.725 0-1.306.224-1.74.674s-.654 1.124-.654 2.022v5.872h-2.808V5.261h2.808v1.218c.683-1.014 1.763-1.522 3.243-1.522l.002.002zM76.243 5.264h2.808V16.14h-2.808v-1.283c-.842 1.06-2.024 1.587-3.548 1.587s-2.695-.555-3.733-1.665-1.556-2.468-1.556-4.077c0-1.61.518-2.968 1.556-4.078C70 5.514 71.242 4.96 72.695 4.96c1.524 0 2.706.53 3.548 1.587V5.262v.002zm-5.182 7.646c.566.572 1.284.86 2.156.86s1.592-.288 2.166-.86c.573-.572.86-1.309.86-2.207 0-.898-.287-1.635-.86-2.207-.574-.572-1.295-.86-2.166-.86s-1.59.288-2.156.86c-.566.572-.849 1.309-.849 2.207 0 .898.283 1.635.85 2.207zM92.864 4.959c1.249 0 2.246.406 2.993 1.218.748.813 1.121 1.9 1.121 3.263v6.7H94.17V9.637c0-.652-.16-1.16-.48-1.523s-.769-.544-1.35-.544c-.638 0-1.135.211-1.49.631-.356.42-.533 1.03-.533 1.828v6.113h-2.808V9.638c0-.651-.16-1.159-.48-1.522-.32-.363-.77-.544-1.35-.544-.623 0-1.121.21-1.491.631-.37.42-.555 1.03-.555 1.828v6.113h-2.808V5.269h2.808v1.153c.653-.972 1.661-1.457 3.027-1.457 1.365 0 2.321.522 2.96 1.566.724-1.044 1.807-1.566 3.242-1.566l.002-.006zM100.15 3.959c-.464 0-.868-.17-1.208-.511a1.653 1.653 0 0 1-.512-1.207c0-.465.17-.87.512-1.219.34-.348.744-.522 1.208-.522.464 0 .888.174 1.23.522.341.348.511.754.511 1.219 0 .464-.17.866-.511 1.207-.34.34-.751.511-1.23.511zM98.757 16.14V5.265h2.808V16.14h-2.808zM108.69 16.443c-1.641 0-3.008-.55-4.103-1.654-1.095-1.101-1.643-2.464-1.643-4.088s.548-2.987 1.643-4.089 2.464-1.653 4.103-1.653c1.06 0 2.024.253 2.895.76.871.508 1.532 1.19 1.981 2.045l-2.416 1.413a2.464 2.464 0 0 0-.989-1.067 2.878 2.878 0 0 0-1.491-.39c-.842 0-1.539.28-2.091.837-.551.559-.827 1.272-.827 2.142 0 .87.276 1.563.827 2.12.552.56 1.249.837 2.091.837.566 0 1.069-.126 1.513-.381.442-.254.773-.606.99-1.056l2.438 1.393a5.463 5.463 0 0 1-2.024 2.055c-.871.515-1.835.772-2.895.772l-.002.004z"
  }))), _defs || (_defs = /*#__PURE__*/React__namespace.createElement("defs", null, /*#__PURE__*/React__namespace.createElement("clipPath", {
    id: "dynamic-logo_svg__a"
  }, /*#__PURE__*/React__namespace.createElement("path", {
    transform: "translate(0 .5)",
    fill: "#fff",
    d: "M0 0h113.61v20H0z"
  })))));
};

exports.ReactComponent = SvgDynamicLogo;
