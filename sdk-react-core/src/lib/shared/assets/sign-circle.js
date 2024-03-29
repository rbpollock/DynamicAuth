import * as React from 'react';

var _circle, _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgSignCircle = function SvgSignCircle(_ref) {
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
  }, title) : null, _circle || (_circle = /*#__PURE__*/React.createElement("circle", {
    cx: 32,
    cy: 32,
    r: 32,
    fill: "currentColor"
  })), _path || (_path = /*#__PURE__*/React.createElement("path", {
    d: "M34.048 17.611a5.5 5.5 0 1 1 7.779 7.779l-.611.61.193.193a4.5 4.5 0 0 1 0 6.364l-3.238 3.239a1.125 1.125 0 0 1-1.592-1.591l3.239-3.239a2.25 2.25 0 0 0 0-3.182l-.193-.193-12.704 12.705a1.123 1.123 0 0 1-.523.296l-9 2.25a1.125 1.125 0 0 1-1.34-1.447l2.812-8.438c.055-.166.148-.316.272-.44l14.906-14.906Zm6.188 1.591a3.25 3.25 0 0 0-4.597 0L20.921 33.92l-2.08 6.242 6.709-1.678 14.686-14.686a3.25 3.25 0 0 0 0-4.596ZM24.925 47.375c-2.779 0-4.967-1.275-6.424-2.49l2.89-.723c1.003.562 2.19.963 3.534.963.912 0 1.853-.369 2.856-1.028 1.005-.66 1.976-1.546 2.956-2.465l.255-.24c.865-.812 1.764-1.658 2.624-2.242.918-.624 2.135-1.191 3.413-.7.844.325 1.393.925 1.78 1.658.362.687.612 1.548.855 2.485.111.427.3.841.515 1.12.105.137.196.214.26.253.055.034.08.034.086.034.274 0 .745-.185 1.417-.643.417-.284.774-.568 1.13-.852.221-.177.443-.354.679-.53.628-.47 1.171-.785 1.57-.986a6.86 6.86 0 0 1 .625-.28l.045-.016.016-.006.006-.002h.003s.002-.002.359 1.065l-.357-1.067a1.125 1.125 0 0 1 .721 2.132l-.008.003a4.59 4.59 0 0 0-.394.178 8.472 8.472 0 0 0-1.238.78c-.132.098-.304.235-.5.391-.409.324-.921.73-1.39 1.05-.7.476-1.67 1.033-2.684 1.033-.98 0-1.69-.595-2.127-1.162-.447-.578-.746-1.29-.912-1.93-.247-.95-.442-1.573-.667-2-.201-.38-.383-.525-.598-.608-.184-.07-.552-.075-1.34.46-.704.48-1.472 1.2-2.38 2.053l-.225.211c-.97.91-2.071 1.922-3.26 2.703-1.19.783-2.566 1.398-4.091 1.398Z",
    fill: "#fff"
  })));
};

export { SvgSignCircle as ReactComponent };
