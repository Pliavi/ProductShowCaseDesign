parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"F7ib":[function(require,module,exports) {
"use strict";function n(){var i=e(['\n    <div class="card">\n      <div class="card-wrapper">\n        <h1 class="-title">','</h1>\n        <figure>\n          <img src="./img/','" alt="fone top" class="-photo" />\n          <figcaption class="-subtitle">','</figcaption>\n        </figure>\n\n        <div class="buy-area">\n          <div class="prices">\n            <div class="price">R$ ','</div>\n            <div class="installment">\n              10x de R$ ','\n              <div>sem juros</div>\n            </div>\n          </div>\n          <div class="heart" onclick="this.classList.toggle(\'--active\')">\n            <svg>\n              <path\n                d="M 23.125042,2.5433373 C 20.078685,2.5358372 17.302334,4.2893197 16.000079,7.0433138 12.454646,-0.66277813 0.95103804,1.9358713 1.0001571,10.418296 c 0.047775,8.249818 14.9999219,19.1249 14.9999219,19.1249 0,0 14.999921,-10.874943 14.999921,-19.1249 0,-4.3492192 -3.525738,-7.8749585 -7.874958,-7.8749587 z"\n              />\n            </svg>\n          </div>\n          <div class="buy">\n            <button class="buy-button">Comprar</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  ']);return n=function(){return i},i}function e(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}function i(n){for(var e=n[0],i=0;i<(arguments.length<=1?0:arguments.length-1);i++)e+=(i+1<1||arguments.length<=i+1?void 0:arguments[i+1])+n[i+1];return e}function t(e){var t=e.name,r=e.description,s=e.price,c=e.image,a=function(n){return n.toFixed(2).replace(".",",")};return i(n(),t,c,r,a(s),a(s/10))}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createCard=t;
},{}],"XOYm":[function(require,module,exports) {
"use strict";function e(e){var t=document.createElement("div"),r=document.createElement("table");for(var n in t.classList="specs custom-scroll",e){var s=e[n],c=r.insertRow();c.insertCell().innerText=n,c.insertCell().innerText=s}return t.appendChild(r),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createSpecs=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("./components/Card"),t=require("./components/Description"),n=document.querySelector(".cards");function r(){var e=document.querySelector(".search .-bar"),t=document.querySelector(".search");e.addEventListener("focus",function(){return t.classList.add("--active")}),e.addEventListener("blur",function(){return t.classList.remove("--active")});var n=10,r=document.querySelector(".buy-button"),c=document.getElementById("cart-counter");r.addEventListener("click",function(){c.innerText=++n})}n.innerHTML="",fetch("/mocks/Products.json").then(function(e){return e.json()}).then(function(c){var o=c[Math.trunc(3*Math.random())],s=(0,e.createCard)(o),u=(0,t.createSpecs)(o.specs);n.insertAdjacentHTML("beforeend",s),n.insertAdjacentElement("beforeend",u),setTimeout(function(){return u.classList.add("--start")},10),r()});
},{"./components/Card":"F7ib","./components/Description":"XOYm"}]},{},["Focm"], null)
//# sourceMappingURL=src.858b06ee.map