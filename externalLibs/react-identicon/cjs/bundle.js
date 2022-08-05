"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  Identicon: true,
  packageInfo: true
};
Object.defineProperty(exports, "Identicon", {
  enumerable: true,
  get: function () {
    return _Identicon.Identicon;
  }
});
Object.defineProperty(exports, "packageInfo", {
  enumerable: true,
  get: function () {
    return _packageInfo.packageInfo;
  }
});

var _icons = require("./icons");

Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _icons[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _icons[key];
    }
  });
});

var _Identicon = require("./Identicon");

var _packageInfo = require("./packageInfo");