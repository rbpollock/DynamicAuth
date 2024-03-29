import * as React from 'react';

var _path;
var _excluded = ["title", "titleId"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var SvgUnlink = function SvgUnlink(_ref) {
  var title = _ref.title,
    titleId = _ref.titleId,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.935 4.066a2.5 2.5 0 0 0-3.536 0l-.916.916a.833.833 0 0 1-1.179-1.179l.917-.916a4.167 4.167 0 0 1 5.892 5.893l-1.81 1.81-1.178-1.18 1.81-1.809a2.5 2.5 0 0 0 0-3.535Zm-10.06 6.523L4.698 9.411l-1.81 1.81a4.167 4.167 0 1 0 5.893 5.892l.918-.918a.833.833 0 0 0-1.179-1.178l-.918.917A2.5 2.5 0 0 1 4.066 12.4l1.81-1.81Zm-.488-6.38A.833.833 0 1 0 4.21 5.387l10.017 10.017a.833.833 0 1 0 1.179-1.178L5.387 4.209Z",
    fill: "currentColor"
  })));
};

export { SvgUnlink as ReactComponent };
