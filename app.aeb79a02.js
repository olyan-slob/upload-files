parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"YGik":[function(require,module,exports) {
"use strict";function e(e){if(!e)return"0 Byte";var t=parseInt(Math.floor(Math.log(e)/Math.log(1024)));return Math.round(e/Math.pow(1024,t))+" "+["Bytes","KB","MB","GB","TB"][t]}function t(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=[],r=document.querySelector(t),i=document.createElement("div");i.classList.add("preview");var c=document.createElement("button");c.classList.add("btn"),c.textContent="Open",n.multi&&r.setAttribute("multiple",!0),n.accept&&Array.isArray(n.accept)&&r.setAttribute("accept",n.accept.join(",")),r.insertAdjacentElement("afterend",i),r.insertAdjacentElement("afterend",c);c.addEventListener("click",function(){return r.click()}),r.addEventListener("change",function(t){t.target.files.length&&(a=Array.from(t.target.files),i.innerHTML="",a.forEach(function(t){if(t.type.match("image")){var n=new FileReader;n.onload=function(n){var a=n.target.result;i.insertAdjacentHTML("afterbegin",'\n            <div class="preview-image">\n              <div class="preview-remove" data-name="'.concat(t.name,'">&times;</div>\n              <img src="').concat(a,'" alt="').concat(t.name,'" />\n              <div class="preview-info">\n                <span>').concat(t.name,"</span>\n                ").concat(e(t.size),"\n              </div>\n            </div>\n          "))},n.readAsDataURL(t)}}))}),i.addEventListener("click",function(e){if(e.target.dataset.name){var t=e.target.dataset.name;a=a.filter(function(e){return e.name==!t});var n=i.querySelector('[data-name="'.concat(t,"]")).closest("preview-image");n.classList.add("removing"),n.remove()}})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.upload=t;
},{}],"A2T1":[function(require,module,exports) {
"use strict";var e=require("./upload");(0,e.upload)("#file",{multi:!0,accept:[".png",".jpg",".jpeg",".gif"]});
},{"./upload":"YGik"}]},{},["A2T1"], null)
//# sourceMappingURL=app.aeb79a02.js.map