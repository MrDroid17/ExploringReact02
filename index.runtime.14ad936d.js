
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire73b1"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire73b1"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("188Mx", function(module, exports) {

$parcel$export(module.exports, "register", () => $0d2d59aed920bc22$export$6503ec6e8aabbaf, (v) => $0d2d59aed920bc22$export$6503ec6e8aabbaf = v);
$parcel$export(module.exports, "resolve", () => $0d2d59aed920bc22$export$f7ad0328861e2f03, (v) => $0d2d59aed920bc22$export$f7ad0328861e2f03 = v);
var $0d2d59aed920bc22$export$6503ec6e8aabbaf;
var $0d2d59aed920bc22$export$f7ad0328861e2f03;
"use strict";
var $0d2d59aed920bc22$var$mapping = new Map();
function $0d2d59aed920bc22$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$0d2d59aed920bc22$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $0d2d59aed920bc22$var$resolve(id) {
    var resolved = $0d2d59aed920bc22$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$0d2d59aed920bc22$export$6503ec6e8aabbaf = $0d2d59aed920bc22$var$register;
$0d2d59aed920bc22$export$f7ad0328861e2f03 = $0d2d59aed920bc22$var$resolve;

});

var $5b51bdf7d12180ac$exports = {};

(parcelRequire("188Mx")).register(new URL("", import.meta.url).toString(), JSON.parse('["abjnr","index.09648e51.js","2AnE5","Grocery.0196c0c1.js","3fzoi","AboutUs.3e4da852.js","eG6PE","ContactUs.274f694b.js","eAgIw","index.f15a7b05.css"]'));


//# sourceMappingURL=index.runtime.14ad936d.js.map
