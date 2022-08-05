// Copyright 2017-2022 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
import * as jdenticon from 'jdenticon';
import React, { useMemo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";

function Identicon({
  className = '',
  publicKey,
  size,
  style
}) {
  const html = useMemo(() => ({
    __html: jdenticon.toSvg(publicKey.substr(2), size)
  }), [publicKey, size]);
  return /*#__PURE__*/_jsx("div", {
    className: className,
    dangerouslySetInnerHTML: html,
    style: style
  });
}

export const Jdenticon = /*#__PURE__*/React.memo(Identicon);