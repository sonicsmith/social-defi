"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Identicon = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactCopyToClipboard = _interopRequireDefault(require("react-copy-to-clipboard"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _uiSettings = require("@polkadot/ui-settings");

var _util = require("@polkadot/util");

var _utilCrypto = require("@polkadot/util-crypto");

var _icons = require("./icons");

var _jsxRuntime = require("react/jsx-runtime");

// Copyright 2017-2022 @polkadot/react-identicon authors & contributors
// SPDX-License-Identifier: Apache-2.0
const Fallback = _icons.Beachball;
const DEFAULT_SIZE = 64;
const Components = {
  beachball: _icons.Beachball,
  empty: _icons.Empty,
  ethereum: _icons.Ethereum,
  jdenticon: _icons.Jdenticon,
  polkadot: _icons.Polkadot,
  substrate: _icons.Jdenticon
};

const Wrapper = _styledComponents.default.div.withConfig({
  displayName: "Identicon__Wrapper",
  componentId: "sc-1gm2vek-0"
})(["cursor:copy;display:inline-block;line-height:0;> .container{position:relative;> div,> svg{position:relative;}&.highlight:before{position:absolute;top:0;left:0;right:0;bottom:0;border-radius:50%;box-shadow:0 0 5px 2px #aaa;content:'';}}"]);

class BaseIcon extends _react.default.PureComponent {
  state = {
    address: '',
    publicKey: '0x'
  };
  static prefix = undefined;

  static setDefaultPrefix(prefix) {
    BaseIcon.prefix = prefix;
  }

  static getDerivedStateFromProps(_ref, prevState) {
    let {
      prefix = BaseIcon.prefix,
      theme,
      value
    } = _ref;

    if (theme === 'ethereum') {
      const address = (0, _util.isU8a)(value) ? (0, _utilCrypto.ethereumEncode)(value) : value || '';
      return {
        address,
        publicKey: ''
      };
    }

    try {
      const address = (0, _util.isU8a)(value) || (0, _util.isHex)(value) ? (0, _utilCrypto.encodeAddress)(value, prefix) : value || '';
      const publicKey = (0, _util.u8aToHex)((0, _utilCrypto.decodeAddress)(address, false, prefix));
      return address === prevState.address ? null : {
        address,
        publicKey
      };
    } catch (error) {
      return {
        address: '',
        publicKey: '0x'
      };
    }
  }

  render() {
    const {
      address
    } = this.state;
    const wrapped = this.getWrapped(this.state, this.props);
    return !address ? wrapped : /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactCopyToClipboard.default, {
      onCopy: this.onCopy,
      text: address,
      children: wrapped
    });
  }

  getWrapped(_ref2, _ref3) {
    let {
      address,
      publicKey
    } = _ref2;
    let {
      Custom
    } = _ref3;
    const {
      className = '',
      isAlternative,
      isHighlight,
      size = DEFAULT_SIZE,
      style,
      theme = _uiSettings.settings.icon
    } = this.props;
    const Component = !address ? _icons.Empty : Custom || Components[theme === 'default' ? _uiSettings.ICON_DEFAULT_HOST : theme] || Fallback;
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(Wrapper, {
      className: `ui--IdentityIcon  ${className}`,
      style: style,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, {
        address: address,
        className: isHighlight ? 'highlight' : '',
        isAlternative: isAlternative,
        publicKey: publicKey,
        size: size
      })
    }, address);
  }

  onCopy = () => {
    const {
      onCopy
    } = this.props;
    const {
      address
    } = this.state;

    if (address && onCopy) {
      onCopy(address);
    }
  };
}

function Icon(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(BaseIcon, { ...props
  });
}

const Identicon = /*#__PURE__*/_react.default.memo(Icon);

exports.Identicon = Identicon;