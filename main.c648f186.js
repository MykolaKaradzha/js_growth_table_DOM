parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l,a=!0,i=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return a=e.done,e},e:function(e){i=!0,l=e},f:function(){try{a||null==o.return||o.return()}finally{if(i)throw l}}}}function t(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r=9,o=9,l=2,a=2,i=document.querySelector(".field"),c=i.rows,d=document.querySelector(".append-row"),u=document.querySelector(".append-column"),f=document.querySelector(".remove-row"),s=document.querySelector(".remove-column");d.addEventListener("click",function(e){f.disabled=!1,i.append(c[0].cloneNode(!0)),c.length>r&&(e.target.disabled=!0)}),f.addEventListener("click",function(e){d.disabled=!1,c[c.length-1].remove(),c.length<=l&&(e.target.disabled=!0)}),u.addEventListener("click",function(t){s.disabled=!1;var n,r=e(c);try{for(r.s();!(n=r.n()).done;){var l=n.value;l.append(l.lastElementChild.cloneNode(!1))}}catch(a){r.e(a)}finally{r.f()}c[0].childElementCount>o&&(t.target.disabled=!0)}),s.addEventListener("click",function(t){u.disabled=!1;var n,r=e(c);try{for(r.s();!(n=r.n()).done;){n.value.lastElementChild.remove()}}catch(o){r.e(o)}finally{r.f()}c[0].childElementCount<=a&&(t.target.disabled=!0)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.c648f186.js.map