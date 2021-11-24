"use strict";function _toConsumableArray(r){return _arrayWithoutHoles(r)||_iterableToArray(r)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(r){return Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r)?Array.from(r):void 0}function _arrayWithoutHoles(r){if(Array.isArray(r)){for(var t=0,n=new Array(r.length);t<r.length;t++)n[t]=r[t];return n}}!function(){function l(r){throw new RangeError(o[r])}function u(r,t){if(r){var n=r.split("@"),o="";n.length>1&&(o=n[0]+"@",r=n[1]);var a=function(r,t){for(var n=[],e=r.length;e--;)n[e]=t(r[e]);return n}((r=r.replace(e,".")).split("."),t).join(".");return o+a}}function f(r){for(var t=[],n=0,e=r.length;e>n;){var o=r.charCodeAt(n++);if(o>=55296&&56319>=o&&e>n){var a=r.charCodeAt(n++);56320==(64512&a)?t.push(((1023&o)<<10)+(1023&a)+65536):(t.push(o),n--)}else t.push(o)}return t}var r=2147483647,t=/^xn--/,n=/[^\0-\x7E]/,e=/[\x2E\u3002\uFF0E\uFF61]/g,o={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},a=Math.floor,i=String.fromCharCode,c=function(r,t){return r+22+75*(26>r)-((0!=t)<<5)},v=function(r,t,n){var e=0;for(r=n?a(r/700):r>>1,r+=a(r/t);r>455;e+=36)r=a(r/35);return a(e+36*r/(r+38))},s=function(t){var n,e=[],o=t.length,i=0,u=128,f=72,c=t.lastIndexOf("-");0>c&&(c=0);for(var s=0;c>s;++s)t.charCodeAt(s)>=128&&l("not-basic"),e.push(t.charCodeAt(s));for(var d=c>0?c+1:0;o>d;){for(var h=i,p=1,y=36;;y+=36){d>=o&&l("invalid-input");var g=(n=t.charCodeAt(d++))-48<10?n-22:26>n-65?n-65:26>n-97?n-97:36;(g>=36||g>a((r-i)/p))&&l("overflow"),i+=g*p;var b=f>=y?1:y>=f+26?26:y-f;if(b>g)break;var w=36-b;p>a(r/w)&&l("overflow"),p*=w}var A=e.length+1;f=v(i-h,A,0==h),a(i/A)>r-u&&l("overflow"),u+=a(i/A),i%=A,e.splice(i++,0,u)}return String.fromCodePoint.apply(String,e)},d=function(t){var n=[],e=(t=f(t)).length,o=128,u=0,s=72,d=!0,h=!1,p=void 0;try{for(var y,g=t[Symbol.iterator]();!(d=(y=g.next()).done);d=!0){var b=y.value;128>b&&n.push(i(b))}}catch(r){h=!0,p=r}finally{try{d||null==g["return"]||g["return"]()}finally{if(h)throw p}}var w=n.length,A=w;for(w&&n.push("-");e>A;){var C=r,S=!0,m=!1,x=void 0;try{for(var I,_=t[Symbol.iterator]();!(S=(I=_.next()).done);S=!0){var j=I.value;j>=o&&C>j&&(C=j)}}catch(r){m=!0,x=r}finally{try{S||null==_["return"]||_["return"]()}finally{if(m)throw x}}var E=A+1;C-o>a((r-u)/E)&&l("overflow"),u+=(C-o)*E,o=C;var F=!0,O=!1,T=void 0;try{for(var k,H=t[Symbol.iterator]();!(F=(k=H.next()).done);F=!0){var P=k.value;if(o>P&&++u>r&&l("overflow"),P==o){for(var W=u,L=36;;L+=36){var M=s>=L?1:L>=s+26?26:L-s;if(M>W)break;var R=W-M,U=36-M;n.push(i(c(M+R%U,0))),W=a(R/U)}n.push(i(c(W,0))),s=v(u,E,A==w),u=0,++A}}}catch(r){O=!0,T=r}finally{try{F||null==H["return"]||H["return"]()}finally{if(O)throw T}}++u,++o}return n.join("")},h={version:"2.1.0",ucs2:{decode:f,encode:function(r){return String.fromCodePoint.apply(String,_toConsumableArray(r))}},decode:s,encode:d,toASCII:function(r){return u(r,function(r){return n.test(r)?"xn--"+d(r):r})},toUnicode:function(r){return u(r,function(r){return t.test(r)?s(r.slice(4).toLowerCase()):r})}};window.punycode=h}();