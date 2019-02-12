// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"components/Specs/Specs.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/Specs/Specs.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSpecs = createSpecs;

require("./Specs.css");

function createSpecs(specs) {
  var $specs = document.createElement("div");
  var $table = document.createElement("table");
  $specs.classList.add("specs");

  for (var specName in specs) {
    var spec = specs[specName];
    var $row = $table.insertRow();
    $row.insertCell().innerText = specName;
    $row.insertCell().innerText = spec;
  }

  $specs.appendChild($table);
  return $specs;
}
},{"./Specs.css":"components/Specs/Specs.css"}],"store.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cartCounter = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var cartStore =
/*#__PURE__*/
function () {
  function cartStore() {
    _classCallCheck(this, cartStore);

    this.subscribers = [];
    this.counter = 0;
  }

  _createClass(cartStore, [{
    key: "subscribe",
    value: function subscribe($dom) {
      this.subscribers.push($dom);
    }
  }, {
    key: "dispatch",
    value: function dispatch(action) {
      switch (action.type) {
        case "INCREMENT":
          this.counter++;
          break;

        default:
          this.counter;
      }

      this.emit();
    }
  }, {
    key: "emit",
    value: function emit() {
      var _this = this;

      this.subscribers.forEach(function (el) {
        return el.innerHTML = _this.counter;
      });
    }
  }]);

  return cartStore;
}();

var cartCounter = new cartStore();
exports.cartCounter = cartCounter;
},{}],"components/Card/Card.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/Card/Card.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCard = createCard;

var _Specs = require("./../Specs/Specs");

var _store = require("./../../store");

require("./Card.css");

function createCard(_ref) {
  var name = _ref.name,
      description = _ref.description,
      price = _ref.price,
      image = _ref.image,
      specs = _ref.specs;
  var $card = document.createElement("div");
  var $specs = (0, _Specs.createSpecs)(specs);

  var makePrice = function makePrice(price) {
    return price.toFixed(2).replace(".", ",");
  };

  $card.classList.add("card");
  $card.innerHTML = "\n    <div class=\"card-wrapper\">\n      <h1 class=\"-title\">".concat(name, "</h1>\n      <figure>\n        <img src=\"./img/").concat(image, "\" alt=\"").concat(name, "\" class=\"-photo\" />\n        <figcaption class=\"-subtitle\">").concat(description, "</figcaption>\n      </figure>\n\n      <div class=\"buy-area\">\n        <div class=\"prices\">\n          <div class=\"price\">R$ ").concat(makePrice(price), "</div>\n          <div class=\"installment\">\n            10x de R$ ").concat(makePrice(price / 10), "\n            <div>sem juros</div>\n          </div>\n        </div>\n        <div class=\"heart\">\n          <svg>\n            <path\n              d=\"M 23.125042,2.5433373 C 20.078685,2.5358372 17.302334,4.2893197 16.000079,7.0433138 12.454646,-0.66277813 0.95103804,1.9358713 1.0001571,10.418296 c 0.047775,8.249818 14.9999219,19.1249 14.9999219,19.1249 0,0 14.999921,-10.874943 14.999921,-19.1249 0,-4.3492192 -3.525738,-7.8749585 -7.874958,-7.8749587 z\"\n            />\n          </svg>\n        </div>\n        <div class=\"buy\">\n          <button class=\"buy-button\">Comprar</button>\n        </div>\n      </div>\n    </div>\n  ");
  $card.append($specs);
  $card.querySelector(".buy-button").addEventListener("click", function () {
    _store.cartCounter.dispatch({
      type: "INCREMENT"
    });
  });
  $card.querySelector(".heart").addEventListener("click", function (e) {
    return e.currentTarget.classList.toggle("--active");
  });
  return $card;
}
},{"./../Specs/Specs":"components/Specs/Specs.js","./../../store":"store.js","./Card.css":"components/Card/Card.css"}],"components/Header/Header.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./search-icon.svg":[["search-icon.b6424cb5.svg","components/Header/search-icon.svg"],"components/Header/search-icon.svg"],"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"components/Header/Header.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHeader = createHeader;

var _store = require("./../../store");

require("./Header.css");

function createHeader() {
  var $header = document.createElement("header");
  $header.classList.add("header");
  $header.innerHTML = "\n    <div class=\"logo\">LOGO</div>\n    <div class=\"search\">\n      <div class=\"-bar\">\n        <input type=\"search\" class=\"-input\">\n      </div>\n    </div>\n    <nav class=\"nav\">\n      <a href=\"#\" class=\"-item\">Produtos</a>\n      <a href=\"#\" class=\"-item\">Servi\xE7os</a>\n      <a href=\"#\" class=\"-item\">Carrinho<span class=\"badge\" id=\"cart-counter\">0</span></a>\n    </nav>\n  ";

  _store.cartCounter.subscribe($header.querySelector("#cart-counter"));

  var $search = $header.querySelector(".search");
  var $searchInput = $search.querySelector(".-input");
  $searchInput.addEventListener("focus", function () {
    $search.classList.add("--active");
    $searchInput.select();
  });
  $searchInput.addEventListener("blur", function () {
    return $search.classList.remove("--active");
  });
  return $header;
}
},{"./../../store":"store.js","./Header.css":"components/Header/Header.css"}],"css/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _Card = require("./components/Card/Card");

var _Header = require("./components/Header/Header");

require("./css/main.css");

fetch("./mocks/Products.json").then(function (data) {
  return data.json();
}).then(createProductCard);

function createProductCard(products) {
  var randomProduct = Math.trunc(Math.random() * 3);
  var product = products[randomProduct];
  var $root = document.getElementById("root");
  var $header = (0, _Header.createHeader)();
  var $card = (0, _Card.createCard)(product);
  $root.innerHTML = "";
  $root.insertAdjacentElement("afterbegin", $header);
  $root.insertAdjacentElement("beforeend", $card);
}
},{"./components/Card/Card":"components/Card/Card.js","./components/Header/Header":"components/Header/Header.js","./css/main.css":"css/main.css"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "33003" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.map