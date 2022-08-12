"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Polkadot = void 0;

var _react = _interopRequireWildcard(require("react"));

var _uiShared = require("@polkadot/ui-shared");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Copyright 2018-2022 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
// Copyright 2018 Paritytech via paritytech/oo7/polkadot-identicon
// This has been converted from the original version that can be found at
//
// https://github.com/paritytech/oo7/blob/251ba2b7c45503b68eab4320c270b5afa9bccb60/packages/polkadot-identicon/src/index.jsx
//
// Here we have done the following to convert the component -
//   - Converted the code to TypeScript
//   - Removed the oo7 dependencies (since not initialised properly, it makes calls to wrong endpoints)
//   - Remove encoding functionality, these are catered for in the base
//   - Remove copy functionality (this is catered from in the base components)
//   - Split calculations into relevant functions
//   - Move constants to file-level
//   - Overall it is now just a static component, expecting an address as an input value
function renderCircle(_ref, key) {
  let {
    cx,
    cy,
    fill,
    r
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("circle", {
    cx: cx,
    cy: cy,
    fill: fill,
    r: r
  }, key);
}

function Identicon(_ref2) {
  let {
    address,
    className = '',
    isAlternative = false,
    size,
    style
  } = _ref2;
  const circles = (0, _react.useMemo)(() => (0, _uiShared.polkadotIcon)(address, {
    isAlternative
  }), [address, isAlternative]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    className: className,
    height: size,
    id: address,
    name: address,
    style: style,
    viewBox: "0 0 64 64",
    width: size,
    children: circles.map(renderCircle)
  });
}

const Polkadot = /*#__PURE__*/_react.default.memo(Identicon);

exports.Polkadot = Polkadot;