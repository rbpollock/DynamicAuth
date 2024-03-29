import * as React from 'react';

var _g;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgSend = function SvgSend(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _g || (_g = /*#__PURE__*/React.createElement("g", {
    clipPath: "url(#send_svg__clip0_6894_96)"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "m3.846 9.3.03-.01 14.64-5.728c.199-.078.399-.156.567-.205.156-.046.465-.126.794-.02.374.123.664.413.786.787.107.33.027.638-.019.794-.049.168-.127.368-.205.567L14.702 20.15c-.08.204-.16.408-.239.568-.073.147-.226.436-.537.614a1.277 1.277 0 0 1-1.136.072c-.323-.137-.496-.405-.58-.542-.09-.149-.184-.342-.278-.535l-2.693-5.52-5.546-2.724-.027-.014c-.193-.094-.385-.189-.533-.28-.137-.082-.403-.256-.54-.578a1.277 1.277 0 0 1 .074-1.136c.178-.31.466-.463.612-.536.16-.079.363-.158.567-.238Zm.972 1.425 4.88 2.396 2.912-2.913a.848.848 0 0 1 1.2-.017.848.848 0 0 1-.017 1.2l-2.898 2.898 2.384 4.888 5.433-13.888-13.894 5.436Z",
    fill: "currentColor",
    fillOpacity: 0.4
  }))));
};

export { SvgSend as ReactComponent };
