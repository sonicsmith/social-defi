"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Beachball = void 0;

var _react = _interopRequireWildcard(require("react"));

var _uiShared = require("@polkadot/ui-shared");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Copyright 2017-2022 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
function Identicon(_ref) {
  let {
    address,
    className = '',
    size,
    style
  } = _ref;
  const updateElem = (0, _react.useCallback)(node => {
    node && node.appendChild((0, _uiShared.beachballIcon)(address, {
      isAlternative: false,
      size
    }));
  }, [address, size]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: className,
    ref: updateElem,
    style: style
  });
}

const Beachball = /*#__PURE__*/_react.default.memo(Identicon);

exports.Beachball = Beachball;