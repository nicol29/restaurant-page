(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body {\n  margin: 0;\n  padding: 0;\n}\n\n#content {\n  background-color: rgb(63, 63, 63);\n}\n\nheader {\n  position: fixed;\n  height: 90px;\n  width: 100%;\n  background-color: antiquewhite;\n  display: flex;\n  align-items: center;\n  z-index: 3;\n}\n\n.nav-bar {\n  display: flex;\n}\n\n.nav-content {\n  height: 35px;\n  width: 90px;\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 25px;\n}\n\n.current-page {\n  background-color: pink;\n  color: rgb(215, 0, 36);\n}\n\n.nav-bar:hover,\nheader img {\n  cursor: pointer;\n}\n\nheader img:first-of-type {\n  margin-left: 30px;\n  width: 5rem;\n}\n\nheader img:last-of-type {\n  width: 2rem;\n  margin-left: auto;\n  margin-right: 30px;\n}\n\n.vertical-bar {\n  height: 50px;\n  border-left: 1px solid rgb(212, 212, 212);\n  margin-left: 20px;\n}\n\n.bg-image img {\n  width: 100%;\n}\n\n.bg-image {\n  position: relative;\n  box-sizing: border-box;\n}\n\n.img-credit {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  bottom: 10px;\n  font-size: .75rem;\n  color: rgb(197, 197, 197);\n}\n\n.img-credit a {\n  text-decoration: none;\n  color: rgb(197, 197, 197);\n}\n\n.img-filter {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  bottom: 4px;\n  background-color: rgba(0, 0, 0, 0.401);\n  z-index: 1;\n}\n\n.download-container {\n  background-color: antiquewhite;\n  height: 350px;\n  position: relative;\n  bottom: 4px;\n  display: flex;\n  justify-content: center;\n}\n\n.d-title {\n  font-size: 2.25rem;\n  margin-top: 50px;\n  color: rgb(255, 0, 43);\n}\n\n.download-content {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.download-content p {\n  width: 60%;\n  text-align: center;\n}\n\n.download-options {\n  margin-top: 30px;\n}\n\n.google-play {\n  height: 58px;\n  position: relative;\n  top: 8px\n}\n\nfooter {\n  height: 100px;\n  position: relative;\n  bottom: 4px;\n  background-color: rgb(63, 63, 63);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.socials {\n  display: flex;\n  gap: 30px;\n}\n\n.socials img {\n  width: 2rem;\n}\n\n.socials div {\n  background-color: rgb(105, 105, 105);\n  padding: 10px;\n  border-radius: 100%;\n}\n\n.socials div:hover {\n  cursor: pointer;\n}\n\n.welcome {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: absolute;\n  bottom: 40%;\n}\n\n.welcome h1 {\n  font-size: 2.5rem;\n  color: white;\n  z-index: 2;\n}\n\n.welcome button {\n  width: 120px;\n  height: 40px;\n  color: white;\n  font-size: 16px;\n  background-color: rgb(255, 0, 43);\n  border: 0;\n  border-radius: 3px;\n  z-index: 2;\n}\n\n\n\n\n",""]);const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);r&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var l=e[c],d=r.base?l[0]+r.base:l[0],s=a[d]||0,p="".concat(d," ").concat(s);a[d]=s+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var g=o(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:g,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var l=r(e,o),d=0;d<a.length;d++){var s=t(a[d]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{const e=t.p+"dc945facbf1033253a48.png",n=t.p+"e66d38d1e457681ca363.png",r=t.p+"c684f6cffb2532e10f96.jpg",o=t.p+"8c4986ee4828b47d16f5.svg",a=t.p+"b8a7e58300e13cc1a994.png",i=t.p+"c636ee76facb95410885.png",c=t.p+"62d095195f1e8ab59763.png",l=t.p+"03cafa1e4f1ea4a5678b.png",d=t=>{let r=document.createElement("header"),o=document.createElement("img");o.src=e,o.alt="background image";let a=document.createElement("div");a.classList.add("vertical-bar");let i=document.createElement("div");i.classList.add("nav-bar");let c=document.createElement("div");c.classList.add("nav-content"),c.innerText="Home";let l=document.createElement("div");l.classList.add("nav-content"),l.innerText="About";let d=document.createElement("div");d.classList.add("nav-content"),d.innerText="Contact","Home"===t?c.classList.add("current-page"):"About"===t?l.classList.add("current-page"):"About"===t&&d.classList.add("current-page"),i.append(c,l,d);let s=document.createElement("img");return s.src=n,s.alt="profile icon",r.append(o,a,i,s),r},s=()=>{let e=document.createElement("div");e.classList.add("bg-image");let n=document.createElement("img");n.src=r,n.alt="background image of chicken wings";let t=document.createElement("div");t.classList.add("welcome");let o=document.createElement("h1");o.innerText="Welcome to Chicken Drum!";let a=document.createElement("button");a.innerText="Order Now",t.append(o,a);let i=document.createElement("div");i.classList.add("img-filter");let c=document.createElement("div");c.classList.add("img-credit");let l=document.createElement("span"),d=document.createElement("span");d.innerText="Photo by ";let s=document.createElement("span");s.innerText=" on ";let p=document.createElement("a");p.innerText="Erik Mclean",p.setAttribute("href","https://unsplash.com/@introspectivedsgn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText");let u=document.createElement("a");return u.innerText="Unsplash",u.setAttribute("href","https://unsplash.com/photos/UBtRdqWUbzc?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"),l.append(d,p,s,u),c.appendChild(l),i.appendChild(c),e.append(n,t,i),e},p=()=>{let e=document.createElement("div");e.classList.add("download-container");let n=document.createElement("div");n.classList.add("download-content");let t=document.createElement("h1");t.classList.add("d-title"),t.innerText="Download the free app";let r=document.createElement("p");r.innerText="Get the new Romayo’s app on your device and order your favourites faster than ever.";let i=document.createElement("div");i.classList.add("download-options");let c=document.createElement("img");c.classList.add("ios"),c.src=o,c.alt="ios store image";let l=document.createElement("img");return l.classList.add("google-play"),l.src=a,l.alt="google-play image",i.append(c,l),n.append(t,r,i),e.appendChild(n),e},u=()=>{let e=document.createElement("footer"),n=document.createElement("div");n.classList.add("socials");let t=document.createElement("div");t.classList.add("facebook");let r=document.createElement("img");r.src=i,r.alt="facebook logo",t.appendChild(r);let o=document.createElement("div");o.classList.add("twitter");let a=document.createElement("img");a.src=c,a.alt="twitter logo",o.appendChild(a);let d=document.createElement("div");d.classList.add("instagram");let s=document.createElement("img");return s.src=l,s.alt="instagram logo",d.appendChild(s),n.append(t,o,d),e.appendChild(n),e};var m=t(379),g=t.n(m),f=t(795),h=t.n(f),v=t(569),b=t.n(v),x=t(565),y=t.n(x),w=t(216),E=t.n(w),L=t(589),T=t.n(L),C=t(426),k={};k.styleTagTransform=T(),k.setAttributes=y(),k.insert=b().bind(null,"head"),k.domAPI=h(),k.insertStyleElement=E(),g()(C.Z,k),C.Z&&C.Z.locals&&C.Z.locals,(e=>{let n=document.querySelector("#content"),t=d(e),r=s(),o=p(),a=u();n.append(t,r,o,a)})("Home");let A=document.querySelector("#content");document.querySelectorAll(".nav-content").forEach((e=>e.addEventListener("click",(()=>{"About"===e.innerText&&(A.textContent="",(e=>{let n=document.querySelector("#content"),t=d(e);u(),n.append(t)})("About"))}))))})()})();