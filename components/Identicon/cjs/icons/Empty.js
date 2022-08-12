"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Empty = void 0;

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

// Copyright 2017-2022 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
function Identicon(_ref) {
  let {
    className = '',
    size,
    style
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    className: className,
    height: size,
    style: style,
    viewBox: "0 0 64 64",
    width: size
  });
}

const Empty = /*#__PURE__*/_react.default.memo(Identicon);

exports.Empty = Empty;