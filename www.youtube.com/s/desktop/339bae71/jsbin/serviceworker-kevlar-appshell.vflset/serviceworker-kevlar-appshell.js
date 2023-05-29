/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var q,aa="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ba(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ca=ba(this);function da(a,b){if(b)a:{var c=ca;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&aa(c,a,{configurable:!0,writable:!0,value:b})}}
function ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function r(a){return ea(a())}
da("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
function fa(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
da("Array.prototype.values",function(a){return a?a:function(){return fa(this,function(b,c){return c})}});
da("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push([d,b[d]]);return c}});
da("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&c.push(b[d]);return c}});
da("String.prototype.matchAll",function(a){return a?a:function(b){if(b instanceof RegExp&&!b.global)throw new TypeError("RegExp passed into String.prototype.matchAll() must have global tag.");var c=new RegExp(b,b instanceof RegExp?void 0:"g"),d=this,e=!1,f={next:function(){if(e)return{value:void 0,done:!0};var g=c.exec(d);if(!g)return e=!0,{value:void 0,done:!0};""===g[0]&&(c.lastIndex+=1);return{value:g,done:!1}}};
f[Symbol.iterator]=function(){return f};
return f}});
da("Promise.prototype.finally",function(a){return a?a:function(b){return this.then(function(c){return Promise.resolve(b()).then(function(){return c})},function(c){return Promise.resolve(b()).then(function(){throw c;
})})}});
var t=this||self;function u(a,b,c){a=a.split(".");c=c||t;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function w(a,b){a=a.split(".");b=b||t;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function ha(a){var b=typeof a;b="object"!=b?b:a?Array.isArray(a)?"array":b:"null";return"array"==b||"object"==b&&"number"==typeof a.length}
function ia(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ja(a,b,c){return a.call.apply(a.bind,arguments)}
function ka(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function la(a,b,c){la=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ja:ka;return la.apply(null,arguments)}
function ma(a,b){function c(){}
c.prototype=b.prototype;a.ab=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Pb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function na(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,na);else{const c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
ma(na,Error);na.prototype.name="CustomError";function oa(){}
;function pa(a,b){Array.prototype.forEach.call(a,b,void 0)}
function qa(a,b){return Array.prototype.map.call(a,b,void 0)}
function ra(a,b){b=Array.prototype.indexOf.call(a,b,void 0);0<=b&&Array.prototype.splice.call(a,b,1)}
function sa(a,b){for(let c=1;c<arguments.length;c++){const d=arguments[c];if(ha(d)){const e=a.length||0,f=d.length||0;a.length=e+f;for(let g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ta(a){var b=ua;for(const c in b)if(a.call(void 0,b[c],c,b))return c}
function va(a){for(const b in a)return!1;return!0}
function wa(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());const b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length);for(const c in a)b[c]=wa(a[c]);return b}
const xa="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ya(a,b){let c,d;for(let e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(let f=0;f<xa.length;f++)c=xa[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function za(){}
function Aa(a){return new za(Ba,a)}
var Ba={};Aa("");var Ca=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Da,Ea=w("CLOSURE_FLAGS"),Fa=Ea&&Ea[610401301];Da=null!=Fa?Fa:!1;function Ga(){var a=t.navigator;return a&&(a=a.userAgent)?a:""}
var Ha;const Ia=t.navigator;Ha=Ia?Ia.userAgentData||null:null;function Ja(a){return Da?Ha?Ha.brands.some(({brand:b})=>b&&-1!=b.indexOf(a)):!1:!1}
function y(a){return-1!=Ga().indexOf(a)}
;function Ka(){return Da?!!Ha&&0<Ha.brands.length:!1}
function La(){return Ka()?Ja("Chromium"):(y("Chrome")||y("CriOS"))&&!(Ka()?0:y("Edge"))||y("Silk")}
;var Ma=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Na(a){return a?decodeURI(a):a}
function Oa(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Oa(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Pa(a){var b=[],c;for(c in a)Oa(c,a[c],b);return b.join("&")}
;function Qa(a,b){return Error(`Invalid wire type: ${a} (at position ${b})`)}
function Ra(){return Error("Failed to read varint, encoding is invalid.")}
function Sa(a,b){return Error(`Tried to read past the end of the data ${b} > ${a}`)}
;function Ta(){throw Error("Invalid UTF8");}
function Ua(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}
let Wa=void 0,Xa;const Ya="undefined"!==typeof TextDecoder;function Za(a){t.setTimeout(()=>{throw a;},0)}
;var $a=Ka()?!1:y("Trident")||y("MSIE");!y("Android")||La();La();var ab=y("Safari")&&!(La()||(Ka()?0:y("Coast"))||(Ka()?0:y("Opera"))||(Ka()?0:y("Edge"))||(Ka()?Ja("Microsoft Edge"):y("Edg/"))||(Ka()?Ja("Opera"):y("OPR"))||y("Firefox")||y("FxiOS")||y("Silk")||y("Android"))&&!(y("iPhone")&&!y("iPod")&&!y("iPad")||y("iPad")||y("iPod"));var bb={},cb=null;function db(a,b){void 0===b&&(b=0);eb();b=bb[b];const c=Array(Math.floor(a.length/3)),d=b[64]||"";let e=0,f=0;for(;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function fb(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;gb(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function gb(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=cb[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
eb();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function eb(){if(!cb){cb={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));bb[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===cb[f]&&(cb[f]=e)}}}}
;var hb="undefined"!==typeof Uint8Array,ib=!$a&&"function"===typeof btoa;function jb(a){if(!ib)return db(a);let b="",c=0;const d=a.length-10240;for(;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
const kb=/[-_.]/g,lb={"-":"+",_:"/",".":"="};function mb(a){return lb[a]||""}
function nb(a){if(!ib)return fb(a);kb.test(a)&&(a=a.replace(kb,mb));a=atob(a);const b=new Uint8Array(a.length);for(let c=0;c<a.length;c++)b[c]=a.charCodeAt(c);return b}
function ob(a){return hb&&null!=a&&a instanceof Uint8Array}
let pb;var qb={};let rb;function sb(a){if(a!==qb)throw Error("illegal external caller");}
function tb(){return rb||(rb=new ub(null,qb))}
function vb(a){sb(qb);var b=a.h;b=null==b||ob(b)?b:"string"===typeof b?nb(b):null;return null==b?b:a.h=b}
var ub=class{constructor(a,b){sb(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}sizeBytes(){const a=vb(this);return a?a.length:0}};function wb(a){if("string"===typeof a)return{buffer:nb(a),I:!1};if(Array.isArray(a))return{buffer:new Uint8Array(a),I:!1};if(a.constructor===Uint8Array)return{buffer:a,I:!1};if(a.constructor===ArrayBuffer)return{buffer:new Uint8Array(a),I:!1};if(a.constructor===ub)return{buffer:vb(a)||pb||(pb=new Uint8Array(0)),I:!0};if(a instanceof Uint8Array)return{buffer:new Uint8Array(a.buffer,a.byteOffset,a.byteLength),I:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers");
}
;const xb="function"===typeof Uint8Array.prototype.slice;function yb(a,b){a.h=b;if(b>a.i)throw Sa(a.i,b);}
function zb(a){const b=a.j;let c=a.h,d=b[c++],e=d&127;if(d&128&&(d=b[c++],e|=(d&127)<<7,d&128&&(d=b[c++],e|=(d&127)<<14,d&128&&(d=b[c++],e|=(d&127)<<21,d&128&&(d=b[c++],e|=d<<28,d&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128&&b[c++]&128)))))throw Ra();yb(a,c);return e}
function Ab(a,b){if(0>b)throw Error(`Tried to read a negative byte length: ${b}`);const c=a.h,d=c+b;if(d>a.i)throw Sa(b,a.i-c);a.h=d;return c}
var Bb=class{constructor(a,b){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.init(a,void 0,void 0,b)}init(a,b,c,{ga:d=!1}={}){this.ga=d;a&&(a=wb(a),this.j=a.buffer,this.m=a.I,this.l=b||0,this.i=void 0!==c?this.l+c:this.j.length,this.h=this.l)}clear(){this.j=null;this.m=!1;this.h=this.i=this.l=0;this.ga=!1}reset(){this.h=this.l}advance(a){yb(this,this.h+a)}},Cb=[];function Db(a,{sa:b=!1}={}){a.sa=b}
function Eb(a){var b=a.h;if(b.h==b.i)return!1;a.j=a.h.h;var c=zb(a.h)>>>0;b=c>>>3;c&=7;if(!(0<=c&&5>=c))throw Qa(c,a.j);if(1>b)throw Error(`Invalid field number: ${b} (at position ${a.j})`);a.l=b;a.i=c;return!0}
function Fb(a){switch(a.i){case 0:if(0!=a.i)Fb(a);else a:{a=a.h;var b=a.h;const c=b+10,d=a.j;for(;b<c;)if(0===(d[b++]&128)){yb(a,b);break a}throw Ra();}break;case 1:a.h.advance(8);break;case 2:2!=a.i?Fb(a):(b=zb(a.h)>>>0,a.h.advance(b));break;case 5:a.h.advance(4);break;case 3:b=a.l;do{if(!Eb(a))throw Error("Unmatched start-group tag: stream EOF");if(4==a.i){if(a.l!=b)throw Error("Unmatched end-group tag");break}Fb(a)}while(1);break;default:throw Qa(a.i,a.j);}}
var Gb=class{constructor(a,b){if(Cb.length){const c=Cb.pop();c.init(a,void 0,void 0,b);a=c}else a=new Bb(a,b);this.h=a;this.j=this.h.h;this.i=this.l=-1;Db(this,b)}reset(){this.h.reset();this.j=this.h.h;this.i=this.l=-1}advance(a){this.h.advance(a)}},Hb=[];class Ib{constructor(a){this.h=a}};const Jb="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;function Kb(a,b){if(Jb)return a[Jb]|=b;if(void 0!==a.D)return a.D|=b;Object.defineProperties(a,{D:{value:b,configurable:!0,writable:!0,enumerable:!1}});return b}
function Lb(a){const b=z(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Array.prototype.slice.call(a)),Mb(a,b|1))}
function Nb(a,b){Jb?a[Jb]&&(a[Jb]&=~b):void 0!==a.D&&(a.D&=~b)}
function z(a){let b;Jb?b=a[Jb]:b=a.D;return null==b?0:b}
function Mb(a,b){Jb?a[Jb]=b:void 0!==a.D?a.D=b:Object.defineProperties(a,{D:{value:b,configurable:!0,writable:!0,enumerable:!1}});return a}
function Ob(a){Kb(a,1);return a}
function Pb(a,b){Mb(b,(a|0)&-51)}
function Qb(a,b){Mb(b,(a|18)&-41)}
;var Rb={};function Sb(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
let Tb;function Ub(a,b,c){if(!Array.isArray(a)||a.length)return!1;const d=z(a);if(d&1)return!0;if(!b||!b.includes(c))return!1;Mb(a,d|1);return!0}
var Wb=Object.freeze(Mb([],23));function Xb(a){if(z(a.u)&2)throw Error();}
;function Yb(a){return a.displayName||a.name||"unknown type name"}
function Zb(a,b){if(!(a instanceof b))throw Error(`Expected instanceof ${Yb(b)} but got ${a&&Yb(a.constructor)}`);return a}
function $b(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.ja===Rb)return a;if(d){var e=d=z(a);0===e&&(e|=c&16);e|=c&2;e!==d&&Mb(a,e);return new b(a)}}
;function A(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:c&&a.i&&(c=a.i[b],null!=c)?c:a.u[b+a.j]}
function C(a,b,c,d){Xb(a);return ac(a,b,c,d)}
function ac(a,b,c,d){a.o&&(a.o=void 0);if(b>=a.l||d)return d=a.l+a.j,(a.i||(a.i=a.u[d]={}))[b]=c,a;a.u[b+a.j]=c;(c=a.i)&&b in c&&delete c[b];return a}
function bc(a,b,c,d){let e=A(a,b);Array.isArray(e)||(e=Wb);const f=z(e);f&1||Ob(e);if(d)f&2||Kb(e,18),c&1||Object.freeze(e);else{d=!(c&2);const g=f&2;c&1||!g?d&&f&16&&!g&&Nb(e,16):(e=Ob(Array.prototype.slice.call(e)),ac(a,b,e))}return e}
function cc(a,b,c,d){Xb(a);(c=dc(a,c))&&c!==b&&null!=d&&ac(a,c,void 0,!1);return ac(a,b,d)}
function dc(a,b){let c=0;for(let d=0;d<b.length;d++){const e=b[d];null!=A(a,e)&&(0!==c&&ac(a,c,void 0,!1),c=e)}return c}
function ec(a,b,c){var d=A(a,c,!1);b=$b(d,b,z(a.u));b!==d&&null!=b&&ac(a,c,b,!1);d=b;if(null==d)return d;z(a.u)&2||(b=fc(d),b!==d&&(d=b,ac(a,c,d,!1)));return d}
function gc(a,b,c,d,e){var f=!!(e&2),g=bc(a,c,1,f);if(g===Wb||!(z(g)&4)){var h=g;g=!!(e&2);var k=!!(z(h)&2);f=h;!g&&k&&(h=Array.prototype.slice.call(h));var l=e|(k?2:0);e=k;let m=k=0;for(;k<h.length;k++){const n=$b(h[k],b,l);void 0!==n&&(e=e||!!(2&z(n.u)),h[m++]=n)}m<k&&(h.length=m);b=h;h=z(b);l=h|5;e=e?l&-9:l|8;h!=e&&(Object.isFrozen(b)&&(b=Array.prototype.slice.call(b)),Mb(b,e));h=b;f!==h&&ac(a,c,h);(g||1===d)&&Object.freeze(h);return h}if(3===d)return g;f||(f=Object.isFrozen(g),1===d?f||Object.freeze(g):
(d=z(g),b=d&-19,f&&(g=Array.prototype.slice.call(g),d=0,ac(a,c,g)),d!==b&&Mb(g,b)));return g}
function hc(a){var b=z(a.u),c=!!(b&2);a=gc(a,ic,1,c?1:2,b);if(!(c||z(a)&8)){for(c=0;c<a.length;c++){b=a[c];const d=fc(b);b!==d&&(a[c]=d)}Kb(a,8)}return a}
function D(a,b,c,d){Xb(a);null!=d?Zb(d,b):d=void 0;return ac(a,c,d)}
function jc(a,b,c,d,e){Xb(a);null!=e?Zb(e,b):e=void 0;cc(a,c,d,e)}
function kc(a,b,c,d){const e=z(a.u);if(e&2)throw Error();a=gc(a,c,b,2,e);c=null!=d?Zb(d,c):new c;a.push(c);c.I()&&Nb(a,8);return c}
function lc(a){a:if(a=A(a,4),null!=a){switch(typeof a){case "string":a=+a;break a;case "number":break a}a=void 0}return a}
function E(a,b){a=A(a,b);return null==a?"":a}
;let mc;function nc(a,b){return oc(b)}
function oc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)){if(ob(a))return jb(a);if(a instanceof ub){const b=a.h;return null==b?"":"string"===typeof b?b:a.h=jb(b)}}}return a}
;function pc(a,b){var c=Array.prototype.slice.call(a.u);const d=a.i;var e=c.length+(d?-1:0);let f=0;for(;f<e;f++)c[f]=b(c[f]);if(d){e=c[f]={};for(const g in d)e[g]=b(d[g])}b=a.constructor;Kb(c,16);mc=c;c=new b(c);mc=void 0;a.aa&&(c.aa=a.aa.slice());return c}
function qc(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&z(a)&1?void 0:f&&z(a)&2?a:rc(a,b,c,void 0!==d,e,f);else if(Sb(a)){const g={};for(let h in a)g[h]=qc(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function rc(a,b,c,d,e,f){const g=d||c?z(a):0;d=d?!!(g&16):void 0;a=Array.prototype.slice.call(a);for(let h=0;h<a.length;h++)a[h]=qc(a[h],b,c,d,e,f);c&&c(g,a);return a}
function sc(a){return a.ja===Rb?a.toJSON():oc(a)}
;function tc(a,b,c=Qb){if(null!=a){if(hb&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){const d=z(a);if(d&2)return a;if(b&&!(d&32)&&(d&16||0===d))return Mb(a,d|18),a;a=rc(a,tc,d&4?Qb:c,!0,!1,!0);b=z(a);b&4&&b&2&&Object.freeze(a);return a}a.ja===Rb&&(z(a.u)&2||(a=uc(a,!0),Kb(a.u,18)));return a}}
function uc(a,b){const c=a.u,d=b||a.I()?Qb:Pb,e=!!(z(c)&16);return pc(a,f=>tc(f,e,d))}
function fc(a){if(!(z(a.u)&2))return a;const b=uc(a,!1);b.o=a;return b}
;function vc(a){Tb=!0;try{return JSON.stringify(a.toJSON(),nc)}finally{Tb=!1}}
var F=class{constructor(a,b,c){null==a&&(a=mc);mc=void 0;if(null==a)a=c?[c]:[],Mb(a,48);else{if(!Array.isArray(a))throw Error();if(c&&c!==a[0])throw Error();let d=Kb(a,0)|32;Mb(a,d)}this.j=c?0:-1;this.u=a;a:{c=this.u.length;a=c-1;if(c&&(c=this.u[a],Sb(c))){this.i=c;this.l=a-this.j;break a}b?(this.l=Math.max(b,a+1-this.j),this.i=void 0):this.l=Number.MAX_VALUE}}toJSON(){if(Tb)var a=wc(this,this.u,!1);else a=rc(this.u,sc,void 0,void 0,!1,!1),a=wc(this,a,!0);return a}clone(){return uc(this,!1)}I(){return!!(z(this.u)&
2)}};F.prototype.ja=Rb;
function wc(a,b,c){const d=a?a.constructor.B:void 0;var e=a.l,f=!1;if(d){if(!c){b=Array.prototype.slice.call(b);var g;if(b.length&&Sb(g=b[b.length-1]))for(f=0;f<d.length;f++)if(d[f]>=e){Object.assign(b[b.length-1]={},g);break}f=!0}e=b;c=!c;g=a.l;var h;for(var k=0;k<d.length;k++){var l=d[k];if(l<g){l+=a.j;var m=e[l];null==m?e[l]=c?Wb:Ob([]):c&&m!==Wb&&Lb(m)}else{if(!h){var n=void 0;e.length&&Sb(n=e[e.length-1])?h=n:e.push(h={})}m=h[l];null==h[l]?h[l]=c?Wb:Ob([]):c&&m!==Wb&&Lb(m)}}}h=b.length;if(!h)return b;
let v,p;if(Sb(n=b[h-1])){a:{var x=n;e={};c=!1;for(var B in x)g=x[B],Array.isArray(g)&&(k=g,Ub(g,d,+B)&&(g=null),g!=k&&(c=!0)),null!=g?e[B]=g:c=!0;if(c){for(let G in e){x=e;break a}x=null}}x!=n&&(v=!0);h--}for(a=a?a.j:9999;0<h;h--){B=h-1;n=b[B];if(null!=n&&!Ub(n,d,B-a))break;p=!0}if(!v&&!p)return b;b=f?b:Array.prototype.slice.call(b,0,h);f&&(b.length=h);x&&b.push(x);return b}
;const xc=Symbol();function yc(a){let b=a[xc];if(!b){const c=zc(a),d=c.i;b=d?(e,f)=>d(e,f,c):(e,f)=>{for(;Eb(f)&&4!=f.i;){var g=f.l,h=c[g];
if(!h){var k=c.extensions;k&&(k=k[g])&&(h=c[g]=Ac(k))}if(!h||!h(f,e,g))if(k=f,g=e,h=k.j,Fb(k),!k.sa){var l=k.h.h-h;k.h.h=h;a:{k=k.h;h=l;if(0==h){h=tb();break a}const m=Ab(k,h);k.ga&&k.m?h=k.j.subarray(m,m+h):(k=k.j,l=m,h=m+h,h=l===h?pb||(pb=new Uint8Array(0)):xb?k.slice(l,h):new Uint8Array(k.subarray(l,h)));h=0==h.length?tb():new ub(h,qb)}(k=g.aa)?k.push(h):g.aa=[h]}}return e};
a[xc]=b}return b}
function Bc(a){if(a=a.Ga)return yc(a)}
function Ac(a){const b=Bc(a),c=a.bc.h;if(b){const d=zc(a.Ga).h;return(e,f,g)=>c(e,f,g,d,b)}return(d,e,f)=>c(d,e,f)}
function Cc(a,b){let c=a[b];"function"==typeof c&&0===c.length&&(c=c(),a[b]=c);return Array.isArray(c)&&(Dc in c||Ec in c||0<c.length&&"function"==typeof c[0])?c:void 0}
const Ec=Symbol(),Dc=Symbol();function Fc(a,b){const c=a.h;return b?(d,e,f)=>c(d,e,f,b):c}
function Gc(a,b,c){const d=a.h,e=yc(b),f=zc(b).h;return(g,h,k)=>d(g,h,k,f,e,c)}
function zc(a){var b=a[Dc];if(b)return b;a:{b=a[Dc]={};var c=Fc,d=Gc;b.h=a[0];let h=1;if(a.length>h&&"number"!==typeof a[h]){var e=a[h++];if(Array.isArray(e)){b.i=e[0];b.extensions=e[1];break a}b.extensions=e}for(;h<a.length;){e=a[h++];for(var f=h+1;f<a.length&&"number"!==typeof a[f];)f++;const k=a[h++];f-=h;switch(f){case 0:b[e]=c(k);break;case 1:(f=Cc(a,h))?(h++,b[e]=d(k,f)):b[e]=c(k,a[h++]);break;case 2:f=b;var g=h++;g=Cc(a,g);f[e]=d(k,g,a[h++]);break;default:throw Error("unexpected number of binary field arguments: "+
f);}}}Dc in a&&Ec in a&&(a.length=0);return b}
var Hc;
Hc=new Ib(function(a,b,c){if(2!==a.i)return!1;var d=zb(a.h)>>>0;a=a.h;var e=Ab(a,d);a=a.j;if(Ya){var f=a,g;(g=Xa)||(g=Xa=new TextDecoder("utf-8",{fatal:!0}));a=e+d;f=0===e&&a===f.length?f:f.subarray(e,a);try{var h=g.decode(f)}catch(l){if(void 0===Wa){try{g.decode(new Uint8Array([128]))}catch(m){}try{g.decode(new Uint8Array([97])),Wa=!0}catch(m){Wa=!1}}!Wa&&(Xa=void 0);throw l;}}else{h=e;d=h+d;e=[];let l=null;let m;for(;h<d;){var k=a[h++];128>k?e.push(k):224>k?h>=d?Ta():(m=a[h++],194>k||128!==(m&192)?
(h--,Ta()):e.push((k&31)<<6|m&63)):240>k?h>=d-1?Ta():(m=a[h++],128!==(m&192)||224===k&&160>m||237===k&&160<=m||128!==((f=a[h++])&192)?(h--,Ta()):e.push((k&15)<<12|(m&63)<<6|f&63)):244>=k?h>=d-2?Ta():(m=a[h++],128!==(m&192)||0!==(k<<28)+(m-144)>>30||128!==((f=a[h++])&192)||128!==((g=a[h++])&192)?(h--,Ta()):(k=(k&7)<<18|(m&63)<<12|(f&63)<<6|g&63,k-=65536,e.push((k>>10&1023)+55296,(k&1023)+56320))):Ta();8192<=e.length&&(l=Ua(l,e),e.length=0)}h=Ua(l,e)}ac(b,c,h);return!0});
var Ic;Ic=new Ib(function(a,b,c,d,e){if(2!==a.i)return!1;b=kc(b,c,d);c=a.h.i;d=zb(a.h)>>>0;const f=a.h.h+d;let g=f-c;0>=g&&(a.h.i=f,e(b,a,void 0,void 0,void 0),g=f-a.h.h);if(g)throw Error("Message parsing ended unexpectedly. Expected to read "+`${d} bytes, instead read ${d-g} bytes, either the `+"data ended unexpectedly or the message misreported its own length");a.h.h=f;a.h.i=c;return!0});function Jc(){this.j=this.j;this.l=this.l}
Jc.prototype.j=!1;Jc.prototype.dispose=function(){this.j||(this.j=!0,this.P())};
Jc.prototype.P=function(){if(this.l)for(;this.l.length;)this.l.shift()()};function Kc(a){var b=w("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||t.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Lc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Mc[c])c=Mc[c];else{c=String(c);if(!Mc[c]){var f=/function\s+([^\(]+)/m.exec(c);Mc[c]=f?f[1]:"[Anonymous]"}c=Mc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Lc(a,b){b||(b={});b[Nc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Nc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Lc(a,b));return c}
function Nc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Mc={};function Oc(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
class Pc{constructor(a,b){this.j=a;this.l=b;this.i=0;this.h=null}get(){let a;0<this.i?(this.i--,a=this.h,this.h=a.next,a.next=null):a=this.j();return a}};function Qc(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
q=Qc.prototype;q.clone=function(){return new Qc(this.x,this.y)};
q.equals=function(a){return a instanceof Qc&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
q.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
q.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
q.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Rc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;class Sc{constructor(){this.i=this.h=null}add(a,b){const c=Tc.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c}remove(){let a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a}}var Tc=new Pc(()=>new Uc,a=>a.reset());
class Uc{constructor(){this.next=this.scope=this.h=null}set(a,b){this.h=a;this.scope=b;this.next=null}reset(){this.next=this.scope=this.h=null}};let Vc,Wc=!1,Xc=new Sc,Zc=(a,b)=>{Vc||Yc();Wc||(Vc(),Wc=!0);Xc.add(a,b)},Yc=()=>{const a=t.Promise.resolve(void 0);
Vc=()=>{a.then($c)}};
var $c=()=>{let a;for(;a=Xc.remove();){try{a.h.call(a.scope)}catch(b){Za(b)}Oc(Tc,a)}Wc=!1};function H(a){this.h=0;this.s=void 0;this.l=this.i=this.j=null;this.m=this.o=!1;if(a!=oa)try{var b=this;a.call(void 0,function(c){ad(b,2,c)},function(c){ad(b,3,c)})}catch(c){ad(this,3,c)}}
function bd(){this.next=this.context=this.i=this.j=this.h=null;this.l=!1}
bd.prototype.reset=function(){this.context=this.i=this.j=this.h=null;this.l=!1};
var dd=new Pc(function(){return new bd},function(a){a.reset()});
function ed(a,b,c){var d=dd.get();d.j=a;d.i=b;d.context=c;return d}
function fd(a){if(a instanceof H)return a;var b=new H(oa);ad(b,2,a);return b}
H.prototype.then=function(a,b,c){return gd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
H.prototype.$goog_Thenable=!0;q=H.prototype;q.eb=function(a,b){return gd(this,null,a,b)};
q.catch=H.prototype.eb;q.cancel=function(a){if(0==this.h){var b=new hd(a);Zc(function(){id(this,b)},this)}};
function id(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.l||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?id(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):jd(c),kd(c,e,3,b)))}a.j=null}else ad(a,3,b)}
function ld(a,b){a.i||2!=a.h&&3!=a.h||md(a);a.l?a.l.next=b:a.i=b;a.l=b}
function gd(a,b,c,d){var e=ed(null,null,null);e.h=new H(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.i=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof hd?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;ld(a,e);return e.h}
q.fb=function(a){this.h=0;ad(this,2,a)};
q.gb=function(a){this.h=0;ad(this,3,a)};
function ad(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.fb,f=a.gb;if(d instanceof H){ld(d,ed(e||oa,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(ia(d))try{var k=d.then;if("function"===typeof k){nd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.s=c,a.h=b,a.j=null,md(a),3!=b||c instanceof hd||od(a,c))}}
function nd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function md(a){a.o||(a.o=!0,Zc(a.La,a))}
function jd(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
q.La=function(){for(var a;a=jd(this);)kd(this,a,this.h,this.s);this.o=!1};
function kd(a,b,c,d){if(3==c&&b.i&&!b.l)for(;a&&a.m;a=a.j)a.m=!1;if(b.h)b.h.j=null,pd(b,c,d);else try{b.l?b.j.call(b.context):pd(b,c,d)}catch(e){qd.call(null,e)}Oc(dd,b)}
function pd(a,b,c){2==b?a.j.call(a.context,c):a.i&&a.i.call(a.context,c)}
function od(a,b){a.m=!0;Zc(function(){a.m&&qd.call(null,b)})}
var qd=Za;function hd(a){na.call(this,a)}
ma(hd,na);hd.prototype.name="cancel";Aa("csi.gstatic.com");Aa("googleads.g.doubleclick.net");Aa("partner.googleadservices.com");Aa("pubads.g.doubleclick.net");Aa("securepubads.g.doubleclick.net");Aa("tpc.googlesyndication.com");function rd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var sd="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" "),td=[...sd,"client_dev_set_cookie"];function ud(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var v=g,p=0;64>p;p+=4)v[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=v[p-3]^v[p-8]^v[p-14]^v[p-16],v[p]=(n<<1|n>>>31)&4294967295;n=e[0];var x=e[1],B=e[2],G=e[3],cd=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var Va=G^x&(B^G);var Vb=1518500249}else Va=x^B^G,Vb=1859775393;else 60>p?(Va=x&B|G&(x|B),Vb=2400959708):(Va=x^B^G,Vb=3395469782);Va=((n<<5|n>>>27)&4294967295)+Va+cd+Vb+v[p]&4294967295;cd=G;G=B;B=(x<<30|x>>>2)&4294967295;x=n;n=Va}e[0]=e[0]+n&4294967295;e[1]=e[1]+
x&4294967295;e[2]=e[2]+B&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+cd&4294967295}
function c(n,v){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],x=0,B=n.length;x<B;++x)p.push(n.charCodeAt(x));n=p}v||(v=n.length);p=0;if(0==l)for(;p+64<v;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<v;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<v;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],v=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=v&255,v>>>=8;b(f);for(p=v=0;5>p;p++)for(var x=24;0<=x;x-=8)n[v++]=e[p]>>x&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Ka:function(){for(var n=d(),v="",p=0;p<n.length;p++)v+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return v}}}
;function vd(a,b,c){var d=String(t.location.href);return d&&a&&b?[b,wd(rd(d),a,c||null)].join(" "):null}
function wd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],pa(d,function(h){e.push(h)}),xd(e.join(" "));
var f=[],g=[];pa(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];pa(d,function(h){e.push(h)});
a=xd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function xd(a){var b=ud();b.update(a);return b.Ka().toLowerCase()}
;const yd={};function zd(){this.h=document||{cookie:""}}
q=zd.prototype;q.isEnabled=function(){if(!t.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{wa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
q.set=function(a,b,c){let d,e,f,g=!1,h;"object"===typeof c&&(h=c.ec,g=c.fc||!1,f=c.domain||void 0,e=c.path||void 0,d=c.wa);if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===d&&(d=-1);this.h.cookie=a+"="+b+(f?";domain="+f:"")+(e?";path="+e:"")+(0>d?"":0==d?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*d)).toUTCString())+(g?";secure":"")+(null!=h?";samesite="+h:"")};
q.get=function(a,b){const c=a+"=",d=(this.h.cookie||"").split(";");for(let e=0,f;e<d.length;e++){f=Ca(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
q.remove=function(a,b,c){const d=void 0!==this.get(a);this.set(a,"",{wa:0,path:b,domain:c});return d};
q.clear=function(){var a=(this.h.cookie||"").split(";");const b=[],c=[];let d,e;for(let f=0;f<a.length;f++)e=Ca(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};function Ad(){return!!yd.FPA_SAMESITE_PHASE2_MOD||!1}
function Bd(a,b,c,d){(a=t[a])||"undefined"===typeof document||(a=(new zd).get(b));return a?vd(a,c,d):null}
;"undefined"!==typeof TextDecoder&&new TextDecoder;"undefined"!==typeof TextEncoder&&new TextEncoder;const Cd=self;class Dd{constructor(){this.promise=new Promise(a=>{this.resolve=a})}}
;function I(a){Jc.call(this);this.s=1;this.m=[];this.o=0;this.h=[];this.i={};this.v=!!a}
ma(I,Jc);q=I.prototype;q.Ca=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.s;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.s=e+3;d.push(e);return e};
q.na=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.o?(this.m.push(a),this.h[a+1]=()=>{}):(c&&ra(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
q.la=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.v)for(e=0;e<c.length;e++){var g=c[e];Ed(this.h[g+1],this.h[g+2],d)}else{this.o++;try{for(e=0,f=c.length;e<f&&!this.j;e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.o--,0<this.m.length&&0==this.o)for(;c=this.m.pop();)this.na(c)}}return 0!=e}return!1};
function Ed(a,b,c){Zc(function(){a.apply(b,c)})}
q.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.na,this),delete this.i[a])}else this.h.length=0,this.i={}};
q.P=function(){I.ab.P.call(this);this.clear();this.m.length=0};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
let J={};var Fd="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;J.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
J.ic=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Gd={Fa:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Ma:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Hd={Fa:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
Ma:function(a){return[].concat.apply([],a)}};
J.Za=function(){Fd?(J.Ba=Uint8Array,J.za=Uint16Array,J.Aa=Int32Array,J.assign(J,Gd)):(J.Ba=Array,J.za=Array,J.Aa=Array,J.assign(J,Hd))};
J.Za();try{new Uint8Array(1)}catch(a){};function Id(a){for(var b=a.length;0<=--b;)a[b]=0}
Id(Array(576));Id(Array(60));Id(Array(512));Id(Array(256));Id(Array(29));Id(Array(30));/*

Math.uuid.js (v1.4)
http://www.broofa.com
mailto:robert@broofa.com
Copyright (c) 2010 Robert Kieffer
Dual licensed under the MIT and GPL licenses.
*/
var Jd="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");var Kd=class{constructor(a){this.name=a}};var Ld=new Kd("rawColdConfigGroup");var Md=new Kd("rawHotConfigGroup");function Nd(a,b){return C(a,1,b)}
var Od=class extends F{constructor(a){super(a)}};var Pd=class extends F{constructor(a){super(a)}};Pd.B=[1];var Qd=class extends F{constructor(a){super(a)}};var Rd=class extends F{constructor(a){super(a)}};var Sd=class extends F{constructor(a){super(a)}};Sd.B=[2];var Td=class extends F{constructor(a){super(a)}getPlayerType(){var a=A(this,36);return null==a?0:a}setHomeGroupInfo(a){return D(this,Sd,81,a)}clearLocationPlayabilityToken(){return C(this,89,void 0,!1)}};Td.B=[9,66,24,32,86,100,101];var Vd=class extends F{constructor(a){super(a)}getKey(){return E(this,1)}N(){return E(this,2===dc(this,Ud)?2:-1)}},Ud=[2,3,4,5,6];var Wd=class extends F{constructor(a){super(a)}};Wd.B=[15,26,28];var Xd=class extends F{constructor(a){super(a)}};Xd.B=[5];var Yd=class extends F{constructor(a){super(a)}};var Zd=class extends F{constructor(a){super(a)}setSafetyMode(a){return C(this,5,a)}};Zd.B=[12];var $d=class extends F{constructor(a){super(a)}m(a){return D(this,Td,1,a)}};$d.B=[12];var ae=class extends F{constructor(a){super(a)}getKey(){return E(this,1)}N(){return E(this,2)}};var be=class extends F{constructor(a){super(a)}};be.B=[4,5];var ce=class extends F{constructor(a){super(a)}};var de=class extends F{constructor(a){super(a)}},ee=[2,3,4,5];var fe=class extends F{constructor(a){super(a)}getMessage(){return E(this,1)}};var ge=class extends F{constructor(a){super(a)}};var he=class extends F{constructor(a){super(a)}};var ie=class extends F{constructor(a){super(a)}};ie.B=[10,17];var je=class extends F{constructor(a){super(a)}};var K=class extends F{constructor(a){super(a)}};var ke=class extends F{constructor(a){super(a)}};var le=class extends F{constructor(a){super(a)}};var me=class extends F{constructor(a){super(a)}getVideoData(){return ec(this,le,15)}};me.B=[4];function ne(a,b){D(a,K,1,b)}
var oe=class extends F{constructor(a){super(a)}};function pe(a,b){return D(a,K,1,b)}
var qe=class extends F{constructor(a){super(a)}h(a){return C(this,2,a)}};function re(a,b){return D(a,K,2,b)}
var se=class extends F{constructor(a){super(a)}h(a){return C(this,1,a)}};se.B=[3];var te=class extends F{constructor(a){super(a)}h(a){return C(this,1,a)}};var ue=class extends F{constructor(a){super(a)}h(a){return C(this,1,a)}};var ve=class extends F{constructor(a){super(a)}h(a){return C(this,1,a)}};var we=class extends F{constructor(a){super(a)}h(a){return C(this,1,a)}};var xe=class extends F{constructor(a){super(a)}};var ye=class extends F{constructor(a){super(a)}};var L=class extends F{constructor(a){super(a,475)}},ze=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,
332,334,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474];var Ae={Gb:0,nb:1,tb:2,ub:4,Ab:8,vb:16,wb:32,Fb:64,Eb:128,pb:256,rb:512,yb:1024,qb:2048,sb:4096,ob:8192,xb:16384,Bb:32768,zb:65536,Cb:131072,Db:262144};var Be=class extends F{constructor(a){super(a)}};var De=class extends F{constructor(a){super(a)}setVideoId(a){return cc(this,1,Ce,a)}getPlaylistId(){var a=2===dc(this,Ce)?2:-1;return A(this,a)}},Ce=[1,2];var Ee=class extends F{constructor(){super()}};Ee.B=[3];var Fe=new Kd("recordNotificationInteractionsEndpoint");var Ge=["notification/convert_endpoint_to_url"],He=["notification/record_interactions"],Ie=["notification_registration/set_registration"];var Je=a=>self.btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(a)))).replace(/\+/g,"-").replace(/\//g,"_");var Ke=["notifications_register","notifications_check_registration"];var Le=class extends Error{constructor(a,...b){super(a);this.args=[...b]}};let Me=null;function M(a,b){const c={};c.key=a;c.value=b;return Ne().then(d=>new Promise((e,f)=>{try{const g=d.transaction("swpushnotificationsstore","readwrite").objectStore("swpushnotificationsstore").put(c);g.onsuccess=()=>{e()};
g.onerror=()=>{f()}}catch(g){f(g)}}))}
function Oe(){return M("IndexedDBCheck","testing IndexedDB").then(()=>Pe("IndexedDBCheck")).then(a=>"testing IndexedDB"===a?Promise.resolve():Promise.reject()).then(()=>!0).catch(()=>!1)}
function Pe(a){const b=new Le("Error accessing DB");return Ne().then(c=>new Promise((d,e)=>{try{const f=c.transaction("swpushnotificationsstore").objectStore("swpushnotificationsstore").get(a);f.onsuccess=()=>{const g=f.result;d(g?g.value:null)};
f.onerror=()=>{b.params={key:a,source:"onerror"};e(b)}}catch(f){b.params={key:a,
thrownError:String(f)},e(b)}}),()=>null)}
function Ne(){return Me?Promise.resolve(Me):new Promise((a,b)=>{const c=self.indexedDB.open("swpushnotificationsdb");c.onerror=b;c.onsuccess=()=>{const d=c.result;if(d.objectStoreNames.contains("swpushnotificationsstore"))Me=d,a(Me);else return self.indexedDB.deleteDatabase("swpushnotificationsdb"),Ne()};
c.onupgradeneeded=Qe})}
function Qe(a){a=a.target.result;a.objectStoreNames.contains("swpushnotificationsstore")&&a.deleteObjectStore("swpushnotificationsstore");a.createObjectStore("swpushnotificationsstore",{keyPath:"key"})}
;const Re={WEB_UNPLUGGED:"^unplugged/",WEB_UNPLUGGED_ONBOARDING:"^unplugged/",WEB_UNPLUGGED_OPS:"^unplugged/",WEB_UNPLUGGED_PUBLIC:"^unplugged/",WEB_CREATOR:"^creator/",WEB_KIDS:"^kids/",WEB_EXPERIMENTS:"^experiments/",WEB_MUSIC:"^music/",WEB_REMIX:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^music/",WEB_MUSIC_EMBEDDED_PLAYER:"^main_app/|^sfv/"};
function Se(a){if(1===a.length)return a[0];var b=Re.UNKNOWN_INTERFACE;if(b){b=new RegExp(b);for(var c of a)if(b.exec(c))return c}const d=[];Object.entries(Re).forEach(([e,f])=>{"UNKNOWN_INTERFACE"!==e&&d.push(f)});
c=new RegExp(d.join("|"));a.sort((e,f)=>e.length-f.length);
for(const e of a)if(!c.exec(e))return e;return a[0]}
function Te(a){return`/youtubei/v1/${Se(a)}`}
;const Ue=t.window;let Ve,We;const Xe=(null==Ue?void 0:null==(Ve=Ue.yt)?void 0:Ve.config_)||(null==Ue?void 0:null==(We=Ue.ytcfg)?void 0:We.data_)||{};u("yt.config_",Xe);function N(...a){a=arguments;1<a.length?Xe[a[0]]=a[1]:1===a.length&&Object.assign(Xe,a[0])}
function O(a,b){return a in Xe?Xe[a]:b}
function Ye(){return O("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Ze(){const a=Xe.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;const $e=[];function af(a){$e.forEach(b=>b(a))}
function P(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){bf(b)}}:a}
function bf(a){var b=w("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),N("ERRORS",b));af(a)}
function cf(a){var b=w("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0,void 0,void 0]),N("ERRORS",b))}
;function Q(a){a=df(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ef(a,b){a=df(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function ff(){const a=df("web_async_context_processor_impl");return void 0!==a?String(a):""}
function gf(){return O("EXPERIMENTS_TOKEN","")}
function df(a){const b=O("EXPERIMENTS_FORCED_FLAGS",{})||{};return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
function hf(){const a=[],b=O("EXPERIMENTS_FORCED_FLAGS",{});for(var c of Object.keys(b))a.push({key:c,value:String(b[c])});c=O("EXPERIMENT_FLAGS",{});for(const d of Object.keys(c))d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function jf(a,b){if(a)return a[b.name]}
;let kf=0;u("ytDomDomGetNextId",w("ytDomDomGetNextId")||(()=>++kf));function lf(a){this.version=1;this.args=a}
;function mf(){var a=nf;this.topic="screen-created";this.h=a}
mf.prototype.toString=function(){return this.topic};function of(a,b){"function"===typeof a&&(a=P(a));return window.setTimeout(a,b)}
;function pf(a,b){return qf(a,0,b)}
var rf=class{h(a,b){qf(a,1,b)}};function qf(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);const d=w("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):of(a,c||0)}
var sf=class extends rf{i(a){if(void 0===a||!Number.isNaN(Number(a))){var b=w("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}}start(){const a=w("yt.scheduler.instance.start");a&&a()}};sf.h||(sf.h=new sf);var tf=sf.h;const uf=w("ytPubsub2Pubsub2Instance")||new I;I.prototype.subscribe=I.prototype.Ca;I.prototype.unsubscribeByKey=I.prototype.na;I.prototype.publish=I.prototype.la;I.prototype.clear=I.prototype.clear;u("ytPubsub2Pubsub2Instance",uf);const vf=w("ytPubsub2Pubsub2SubscribedKeys")||{};u("ytPubsub2Pubsub2SubscribedKeys",vf);const wf=w("ytPubsub2Pubsub2TopicToKeys")||{};u("ytPubsub2Pubsub2TopicToKeys",wf);const xf=w("ytPubsub2Pubsub2IsAsync")||{};u("ytPubsub2Pubsub2IsAsync",xf);
u("ytPubsub2Pubsub2SkipSubKey",null);function yf(a,b){const c=zf();c&&c.publish.call(c,a.toString(),a,b)}
function Af(a){var b=Bf;const c=zf();if(!c)return 0;const d=c.subscribe(b.toString(),(e,f)=>{var g=w("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=()=>{if(vf[d])try{if(f&&b instanceof mf&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ya){const p=new h;h.ya=p.version}var l=h.ya}catch(p){}if(!l||k.version!=l)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{l=Reflect;var m=l.construct;
{var n=k.args;const p=n.length;if(0<p){const x=Array(p);for(k=0;k<p;k++)x[k]=n[k];var v=x}else v=[]}f=m.call(l,h,v)}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){bf(p)}},xf[b.toString()]?w("yt.scheduler.instance")?tf.h(g):of(g,0):g())});
vf[d]=!0;wf[b.toString()]||(wf[b.toString()]=[]);wf[b.toString()].push(d);return d}
function Cf(){var a=Df;const b=Af(function(c){a.apply(void 0,arguments);Ef(b)});
return b}
function Ef(a){const b=zf();b&&("number"===typeof a&&(a=[a]),pa(a,c=>{b.unsubscribeByKey(c);delete vf[c]}))}
function zf(){return w("ytPubsub2Pubsub2Instance")}
;let Ff=Date.now().toString();function Gf(){const a=Array(16);for(var b=0;16>b;b++){var c=Date.now();for(let d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(Ff)for(b=1,c=0;c<Ff.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^Ff.charCodeAt(c),b++;return a}
function Hf(){if(window.crypto&&window.crypto.getRandomValues)try{const a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(let c=0;c<a.length;c++)a[c]=b[c];return a}catch(a){}return Gf()}
;const If=window;var R=If.ytcsi&&If.ytcsi.now?If.ytcsi.now:If.performance&&If.performance.timing&&If.performance.now&&If.performance.timing.navigationStart?()=>If.performance.timing.navigationStart+If.performance.now():()=>(new Date).getTime();const Jf=/^[\w.]*$/,Kf={q:!0,search_query:!0};function Lf(a,b){b=a.split(b);const c={};for(let f=0,g=b.length;f<g;f++){const h=b[f].split("=");if(1==h.length&&h[0]||2==h.length)try{const k=Mf(h[0]||""),l=Mf(h[1]||"");k in c?Array.isArray(c[k])?sa(c[k],l):c[k]=[c[k],l]:c[k]=l}catch(k){var d=k,e=h[0];const l=String(Lf);d.args=[{key:e,value:h[1],query:a,method:Nf==l?"unchanged":l}];Kf.hasOwnProperty(e)||cf(d)}}return c}
const Nf=String(Lf);function Of(a){"?"==a.charAt(0)&&(a=a.substr(1));return Lf(a,"&")}
function Pf(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Of(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Pa(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Qf(a){if(!b)var b=window.location.href;const c=a.match(Ma)[1]||null,d=Na(a.match(Ma)[3]||null);c&&d?(a=a.match(Ma),b=b.match(Ma),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Na(b.match(Ma)[3]||null)==d&&(Number(b.match(Ma)[4]||null)||null)==(Number(a.match(Ma)[4]||null)||null):!0;return a}
function Mf(a){return a&&a.match(Jf)?a:decodeURIComponent(a.replace(/\+/g," "))}
;[...sd];let Rf=!1;function Sf(a,b){const c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Tf(a,b);const d=Uf(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");const e=b.context||t;let f=!1,g;fetch(a,c).then(h=>{if(!f){f=!0;g&&window.clearTimeout(g);var k=h.ok,l=m=>{m=m||{};k?b.onSuccess&&b.onSuccess.call(e,m,h):b.onError&&b.onError.call(e,m,h);b.onFinish&&b.onFinish.call(e,m,h)};
"JSON"==(b.format||"JSON")&&(k||400<=h.status&&500>h.status)?h.json().then(l,function(){l(null)}):l(null)}}).catch(()=>{b.onError&&b.onError.call(e,{},{})});
a=b.timeout||0;b.onFetchTimeout&&0<a&&(g=of(()=>{f||(f=!0,window.clearTimeout(g),b.onFetchTimeout.call(b.context||t))},a))}
function Tf(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);const c=O("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Pf(a,b||{},!0);return a}
function Uf(a,b){const c=O("XSRF_FIELD_NAME"),d=O("XSRF_TOKEN");var e=b.postBody||"",f=b.postParams;const g=O("XSRF_FIELD_NAME");let h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Na(a.match(Ma)[3]||null)&&!b.withCredentials&&Na(a.match(Ma)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(Q("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&
(e=Of(e),ya(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Pa(e));f=e||f&&!va(f);!Rf&&f&&"POST"!=b.method&&(Rf=!0,bf(Error("AJAX request with postData should use POST")));return e}
;const Vf=[{ia:a=>`Cannot read property '${a.key}'`,
ca:{Error:[{A:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{A:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{A:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{A:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{A:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{A:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{A:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{ia:a=>`Cannot call '${a.key}'`,
ca:{TypeError:[{A:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{A:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{A:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{A:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{A:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,groups:["key"]},
{A:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{ia:a=>`${a.key} is not defined`,
ca:{ReferenceError:[{A:/(.*) is not defined/,groups:["key"]},{A:/Can't find variable: (.*)/,groups:["key"]}]}}];var Xf={J:[],H:[{callback:Wf,weight:500}]};function Wf(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Yf(){if(!Zf){var a=Zf=new $f;a.J.length=0;a.H.length=0;ag(a,Xf)}return Zf}
function ag(a,b){b.J&&a.J.push.apply(a.J,b.J);b.H&&a.H.push.apply(a.H,b.H)}
var $f=class{constructor(){this.H=[];this.J=[]}},Zf;const bg=new I;function cg(a){const b=a.length;let c=0;const d=()=>a.charCodeAt(c++);
do{var e=dg(d);if(Infinity===e)break;const f=e>>3;switch(e&7){case 0:e=dg(d);if(2===f)return e;break;case 1:if(2===f)return;c+=8;break;case 2:e=dg(d);if(2===f)return a.substr(c,e);c+=e;break;case 5:if(2===f)return;c+=4;break;default:return}}while(c<b)}
function dg(a){let b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function eg(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=fg(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=cg(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?fg(`${f}.ve`,g,h,k):0;d+=f;d+=fg(e,a[e],b,c);if(500<d)break}}else c[b]=gg(a),d+=c[b].length;else c[b]=gg(a),d+=c[b].length;return d}
function fg(a,b,c,d){c+=`.${a}`;a=gg(b);d[c]=a;return c.length+a.length}
function gg(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return`unable to serialize ${typeof a} (${b.message})`}}
;function hg(){ig.h||(ig.h=new ig);return ig.h}
function jg(a,b){a={};var c=[],d=rd(String(t.location.href));var e=[];var f=t.__SAPISID||t.__APISID||t.__3PSAPISID||t.__OVERRIDE_SID;Ad()&&(f=f||t.__1PSAPISID);if(f)f=!0;else{if("undefined"!==typeof document){var g=new zd;f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");Ad()&&(f=f||g.get("__Secure-1PAPISID"))}f=!!f}f&&(g=(f=d=0==d.indexOf("https:")||0==d.indexOf("chrome-extension:")||0==d.indexOf("moz-extension:"))?t.__SAPISID:t.__APISID,g||"undefined"===
typeof document||(g=new zd,g=g.get(f?"SAPISID":"APISID")||g.get("__Secure-3PAPISID")),(f=g?vd(g,f?"SAPISIDHASH":"APISIDHASH",c):null)&&e.push(f),d&&Ad()&&((d=Bd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",c))&&e.push(d),(c=Bd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",c))&&e.push(c)));if(e=0==e.length?null:e.join(" "))a.Authorization=e,e=b=null==b?void 0:b.sessionIndex,void 0===e&&(e=Number(O("SESSION_INDEX",0)),e=isNaN(e)?0:e),Q("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
e.toString()),"INNERTUBE_HOST_OVERRIDE"in Xe||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Xe&&(a["X-Goog-PageId"]=O("DELEGATED_SESSION_ID"));return a}
var ig=class{constructor(){this.bb=!0}};var kg={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};u("ytglobal.prefsUserPrefsPrefs_",w("ytglobal.prefsUserPrefsPrefs_")||{});function lg(){if(void 0!==O("DATASYNC_ID"))return O("DATASYNC_ID");throw new Le("Datasync ID not set","unknown");}
;const mg=[];let ng,og=!1;function pg(a){og||(ng?ng.handleError(a):(mg.push({type:"ERROR",payload:a}),10<mg.length&&mg.shift()))}
function qg(a,b){og||(ng?ng.ba(a,b):(mg.push({type:"EVENT",eventType:a,payload:b}),10<mg.length&&mg.shift()))}
;function rg(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function sg(a){return a.substr(0,a.indexOf(":"))||a}
;const tg={AUTH_INVALID:"No user identifier specified.",EXPLICIT_ABORT:"Transaction was explicitly aborted.",IDB_NOT_SUPPORTED:"IndexedDB is not supported.",MISSING_INDEX:"Index not created.",MISSING_OBJECT_STORES:"Object stores not created.",DB_DELETED_BY_MISSING_OBJECT_STORES:"Database is deleted because expected object stores were not created.",DB_REOPENED_BY_MISSING_OBJECT_STORES:"Database is reopened because expected object stores were not created.",UNKNOWN_ABORT:"Transaction was aborted for unknown reasons.",
QUOTA_EXCEEDED:"The current transaction exceeded its quota limitations.",QUOTA_MAYBE_EXCEEDED:"The current transaction may have failed because of exceeding quota limitations.",EXECUTE_TRANSACTION_ON_CLOSED_DB:"Can't start a transaction on a closed database",INCOMPATIBLE_DB_VERSION:"The binary is incompatible with the database version"},ug={AUTH_INVALID:"ERROR",EXECUTE_TRANSACTION_ON_CLOSED_DB:"WARNING",EXPLICIT_ABORT:"IGNORED",IDB_NOT_SUPPORTED:"ERROR",MISSING_INDEX:"WARNING",MISSING_OBJECT_STORES:"ERROR",
DB_DELETED_BY_MISSING_OBJECT_STORES:"WARNING",DB_REOPENED_BY_MISSING_OBJECT_STORES:"WARNING",QUOTA_EXCEEDED:"WARNING",QUOTA_MAYBE_EXCEEDED:"WARNING",UNKNOWN_ABORT:"WARNING",INCOMPATIBLE_DB_VERSION:"WARNING"},vg={AUTH_INVALID:!1,EXECUTE_TRANSACTION_ON_CLOSED_DB:!1,EXPLICIT_ABORT:!1,IDB_NOT_SUPPORTED:!1,MISSING_INDEX:!1,MISSING_OBJECT_STORES:!1,DB_DELETED_BY_MISSING_OBJECT_STORES:!1,DB_REOPENED_BY_MISSING_OBJECT_STORES:!1,QUOTA_EXCEEDED:!1,QUOTA_MAYBE_EXCEEDED:!0,UNKNOWN_ABORT:!0,INCOMPATIBLE_DB_VERSION:!1};
var S=class extends Le{constructor(a,b={},c=tg[a],d=ug[a],e=vg[a]){super(c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,S.prototype)}},wg=class extends S{constructor(a,b){super("MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},tg.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,wg.prototype)}},xg=class extends Error{constructor(a,b){super();this.index=
a;this.objectStore=b;Object.setPrototypeOf(this,xg.prototype)}};const yg=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function zg(a,b,c,d){b=sg(b);let e;e=a instanceof Error?a:Error(`Unexpected error: ${a}`);if(e instanceof S)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new S("QUOTA_EXCEEDED",a);if(ab&&"UnknownError"===e.name)return new S("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof xg)return new S("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&yg.some(f=>e.message.includes(f)))return new S("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new S("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Xb:e.name})];e.level="WARNING";return e}
function Ag(a,b,c){return new S("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:void 0}})}
;function Bg(a){if(!a)throw Error();throw a;}
function Cg(a){return a}
var Dg=class{constructor(a){this.h=a}};function Eg(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");const f=c(a.state.value);f instanceof Fg?Gg(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Hg(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");const f=c(a.state.reason);f instanceof Fg?Gg(a,b,f,d,e):d(f)}catch(f){e(f)}}
function Gg(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(f=>{f instanceof Fg?Gg(a,b,f,d,e):d(f)},f=>{e(f)})}
var Fg=class{constructor(a){this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;const b=d=>{if("PENDING"===this.state.status){this.state={status:"FULFILLED",value:d};for(const e of this.h)e()}},c=d=>{if("PENDING"===this.state.status){this.state={status:"REJECTED",
reason:d};for(const e of this.i)e()}};
try{a(b,c)}catch(d){c(d)}}static all(a){return new Fg(new Dg((b,c)=>{const d=[];let e=a.length;0===e&&b(d);for(let f=0;f<a.length;++f)Fg.resolve(a[f]).then(g=>{d[f]=g;e--;0===e&&b(d)}).catch(g=>{c(g)})}))}static resolve(a){return new Fg(new Dg((b,c)=>{a instanceof Fg?a.then(b,c):b(a)}))}then(a,b){const c=null!=a?a:Cg,d=null!=b?b:Bg;
return new Fg(new Dg((e,f)=>{"PENDING"===this.state.status?(this.h.push(()=>{Eg(this,this,c,e,f)}),this.i.push(()=>{Hg(this,this,d,e,f)})):"FULFILLED"===this.state.status?Eg(this,this,c,e,f):"REJECTED"===this.state.status&&Hg(this,this,d,e,f)}))}catch(a){return this.then(void 0,a)}};function Ig(a,b,c){const d=()=>{try{a.removeEventListener("success",e),a.removeEventListener("error",f)}catch(g){}},e=()=>{b(a.result);
d()},f=()=>{c(a.error);
d()};
a.addEventListener("success",e);a.addEventListener("error",f)}
function Jg(a){return new Promise((b,c)=>{Ig(a,b,c)})}
function T(a){return new Fg(new Dg((b,c)=>{Ig(a,b,c)}))}
;function Kg(a,b){return new Fg(new Dg((c,d)=>{const e=()=>{const f=a?b(a):null;f?f.then(g=>{a=g;e()},d):c()};
e()}))}
;function U(a,b,c,d){return r(function*(){const e={mode:"readonly",C:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?e.mode=c:Object.assign(e,c);a.transactionCount++;const f=e.C?3:1;let g=0,h;for(;!h;){g++;const l=Math.round(R());try{const m=a.h.transaction(b,e.mode);var k=d;const n=new Lg(m),v=yield Mg(n,k),p=Math.round(R());Ng(a,l,p,g,void 0,b.join(),e);return v}catch(m){k=Math.round(R());const n=zg(m,a.h.name,b.join(),a.h.version);if(n instanceof S&&!n.h||g>=f)Ng(a,l,k,g,n,b.join(),e),
h=n}}return Promise.reject(h)})}
function Og(a,b,c){a=a.h.createObjectStore(b,c);return new Pg(a)}
function Qg(a,b,c,d){return U(a,[b],{mode:"readwrite",C:!0},e=>{e=e.objectStore(b);return T(e.h.put(c,d))})}
function Ng(a,b,c,d,e,f,g){b=c-b;e?(e instanceof S&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&qg("QUOTA_EXCEEDED",{dbName:sg(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof S&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),qg("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Rg(a,!1,d,f,b,g.tag),pg(e)):Rg(a,!0,d,f,b,g.tag)}
function Rg(a,b,c,d,e,f="IDB_TRANSACTION_TAG_UNKNOWN"){qg("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f})}
var Sg=class{constructor(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(R());this.i=!1}add(a,b,c){return U(this,[a],{mode:"readwrite",C:!0},d=>d.objectStore(a).add(b,c))}clear(a){return U(this,[a],{mode:"readwrite",
C:!0},b=>b.objectStore(a).clear())}close(){this.h.close();
let a;(null==(a=this.options)?0:a.closed)&&this.options.closed()}count(a,b){return U(this,[a],{mode:"readonly",C:!0},c=>c.objectStore(a).count(b))}delete(a,b){return U(this,[a],{mode:"readwrite",
C:!0},c=>c.objectStore(a).delete(b))}get(a,b){return U(this,[a],{mode:"readonly",
C:!0},c=>c.objectStore(a).get(b))}getAll(a,b,c){return U(this,[a],{mode:"readonly",
C:!0},d=>d.objectStore(a).getAll(b,c))}objectStoreNames(){return Array.from(this.h.objectStoreNames)}getName(){return this.h.name}};
function Tg(a,b,c){a=a.h.openCursor(b.query,b.direction);return Ug(a).then(d=>Kg(d,c))}
function Vg(a,b){return Tg(a,{query:b},c=>c.delete().then(()=>c.continue())).then(()=>{})}
function Wg(a,b,c){const d=[];return Tg(a,{query:b},e=>{if(!(void 0!==c&&d.length>=c))return d.push(e.N()),e.continue()}).then(()=>d)}
var Pg=class{constructor(a){this.h=a}add(a,b){return T(this.h.add(a,b))}autoIncrement(){return this.h.autoIncrement}clear(){return T(this.h.clear()).then(()=>{})}count(a){return T(this.h.count(a))}delete(a){return a instanceof IDBKeyRange?Vg(this,a):T(this.h.delete(a))}get(a){return T(this.h.get(a))}getAll(a,b){return"getAll"in IDBObjectStore.prototype?T(this.h.getAll(a,b)):Wg(this,a,b)}index(a){try{return new Xg(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new xg(a,
this.h.name);
throw b;}}getName(){return this.h.name}keyPath(){return this.h.keyPath}};function Mg(a,b){const c=new Promise((d,e)=>{try{b(a).then(f=>{d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(([d])=>d)}
var Lg=class{constructor(a){this.h=a;this.j=new Map;this.i=!1;this.done=new Promise((b,c)=>{this.h.addEventListener("complete",()=>{b()});
this.h.addEventListener("error",d=>{d.currentTarget===d.target&&c(this.h.error)});
this.h.addEventListener("abort",()=>{var d=this.h.error;if(d)c(d);else if(!this.i){d=S;var e=this.h.objectStoreNames;const f=[];for(let g=0;g<e.length;g++){const h=e.item(g);if(null===h)throw Error("Invariant: item in DOMStringList is null");f.push(h)}d=new d("UNKNOWN_ABORT",{objectStoreNames:f.join(),dbName:this.h.db.name,mode:this.h.mode});c(d)}})})}abort(){this.h.abort();
this.i=!0;throw new S("EXPLICIT_ABORT");}objectStore(a){a=this.h.objectStore(a);let b=this.j.get(a);b||(b=new Pg(a),this.j.set(a,b));return b}};function Yg(a,b,c){const {query:d=null,direction:e="next"}=b;a=a.h.openCursor(d,e);return Ug(a).then(f=>Kg(f,c))}
function Zg(a,b,c){const d=[];return Yg(a,{query:b},e=>{if(!(void 0!==c&&d.length>=c))return d.push(e.N()),e.continue()}).then(()=>d)}
var Xg=class{constructor(a){this.h=a}count(a){return T(this.h.count(a))}delete(a){return Yg(this,{query:a},b=>b.delete().then(()=>b.continue()))}get(a){return T(this.h.get(a))}getAll(a,b){return"getAll"in IDBIndex.prototype?T(this.h.getAll(a,b)):Zg(this,a,b)}getKey(a){return T(this.h.getKey(a))}keyPath(){return this.h.keyPath}unique(){return this.h.unique}};
function Ug(a){return T(a).then(b=>b?new $g(a,b):null)}
var $g=class{constructor(a,b){this.request=a;this.cursor=b}advance(a){this.cursor.advance(a);return Ug(this.request)}continue(a){this.cursor.continue(a);return Ug(this.request)}delete(){return T(this.cursor.delete()).then(()=>{})}getKey(){return this.cursor.key}N(){return this.cursor.value}update(a){return T(this.cursor.update(a))}};function ah(a,b,c){return new Promise((d,e)=>{let f;f=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);const g=c.Ha,h=c.blocking,k=c.cb,l=c.upgrade,m=c.closed;let n;const v=()=>{n||(n=new Sg(f.result,{closed:m}));return n};
f.addEventListener("upgradeneeded",p=>{try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===f.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&qg("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:sg(a)});const x=v(),B=new Lg(f.transaction);l&&l(x,G=>p.oldVersion<G&&p.newVersion>=G,B);
B.done.catch(G=>{e(G)})}catch(x){e(x)}});
f.addEventListener("success",()=>{const p=f.result;h&&p.addEventListener("versionchange",()=>{h(v())});
p.addEventListener("close",()=>{qg("IDB_UNEXPECTEDLY_CLOSED",{dbName:sg(a),dbVersion:p.version});k&&k()});
d(v())});
f.addEventListener("error",()=>{e(f.error)});
g&&f.addEventListener("blocked",()=>{g()})})}
function bh(a,b,c={}){return ah(a,b,c)}
function ch(a,b={}){return r(function*(){try{const c=self.indexedDB.deleteDatabase(a),d=b.Ha;d&&c.addEventListener("blocked",()=>{d()});
yield Jg(c)}catch(c){throw zg(c,a,"",-1);}})}
;function dh(a,b){return new S("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function eh(a,b){if(!b)throw Ag("openWithToken",sg(a.name));return a.open()}
var fh=class{constructor(a,b){this.name=a;this.options=b;this.j=!0;this.m=this.l=0}i(a,b,c={}){return bh(a,b,c)}delete(a={}){return ch(this.name,a)}open(){if(!this.j)throw dh(this);if(this.h)return this.h;let a;const b=()=>{this.h===a&&(this.h=void 0)},c={blocking:e=>{e.close()},
closed:b,cb:b,upgrade:this.options.upgrade},d=()=>{const e=this;return r(function*(){var f,g=null!=(f=Error().stack)?f:"";try{const k=yield e.i(e.name,e.options.version,c);f=k;var h=e.options;const l=[];for(const m of Object.keys(h.R)){const {O:n,cc:v=Number.MAX_VALUE}=h.R[m];!(f.h.version>=n)||f.h.version>=v||f.h.objectStoreNames.contains(m)||l.push(m)}if(0!==l.length){const m=Object.keys(e.options.R),n=k.objectStoreNames();if(e.m<ef("ytidb_reopen_db_retries",0))return e.m++,k.close(),pg(new S("DB_REOPENED_BY_MISSING_OBJECT_STORES",
{dbName:e.name,expectedObjectStores:m,foundObjectStores:n})),d();if(e.l<ef("ytidb_remake_db_retries",1))return e.l++,yield e.delete(),pg(new S("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:e.name,expectedObjectStores:m,foundObjectStores:n})),d();throw new wg(n,m);}return k}catch(k){if(k instanceof DOMException?"VersionError"===k.name:"DOMError"in self&&k instanceof DOMError?"VersionError"===k.name:k instanceof Object&&"message"in k&&"An attempt was made to open a database using a lower version than the existing version."===
k.message){g=yield e.i(e.name,void 0,Object.assign({},c,{upgrade:void 0}));h=g.h.version;if(void 0!==e.options.version&&h>e.options.version+1)throw g.close(),e.j=!1,dh(e,h);return g}b();k instanceof Error&&!Q("ytidb_async_stack_killswitch")&&(k.stack=`${k.stack}\n${g.substring(g.indexOf("\n")+1)}`);let l;throw zg(k,e.name,"",null!=(l=e.options.version)?l:-1);}})};
return this.h=a=d()}};const gh=new fh("YtIdbMeta",{R:{databases:{O:1}},upgrade(a,b){b(1)&&Og(a,"databases",{keyPath:"actualName"})}});function hh(a,b){return r(function*(){return U(yield eh(gh,b),["databases"],{C:!0,mode:"readwrite"},c=>{const d=c.objectStore("databases");return d.get(a.actualName).then(e=>{if(e?a.actualName!==e.actualName||a.publicName!==e.publicName||a.userIdentifier!==e.userIdentifier:1)return T(d.h.put(a,void 0)).then(()=>{})})})})}
function ih(a,b){return r(function*(){if(a)return(yield eh(gh,b)).delete("databases",a)})}
;let jh;const kh=new class{constructor(){}}(new class{constructor(){}});function lh(){return r(function*(){return!0})}
function mh(){if(void 0!==jh)return jh;og=!0;return jh=lh().then(a=>{og=!1;return a})}
function nh(){return w("ytglobal.idbToken_")||void 0}
function oh(){const a=nh();return a?Promise.resolve(a):mh().then(b=>{(b=b?kh:void 0)&&u("ytglobal.idbToken_",b);return b})}
;new Dd;function ph(a){try{lg();var b=!0}catch(c){b=!1}if(!b)throw a=new S("AUTH_INVALID",{dbName:a}),pg(a),a;b=lg();return{actualName:`${a}:${b}`,publicName:a,userIdentifier:b}}
function qh(a,b,c,d){return r(function*(){var e,f=null!=(e=Error().stack)?e:"";e=yield oh();if(!e)throw e=Ag("openDbImpl",a,b),Q("ytidb_async_stack_killswitch")||(e.stack=`${e.stack}\n${f.substring(f.indexOf("\n")+1)}`),pg(e),e;rg(a);f=c?{actualName:a,publicName:a,userIdentifier:void 0}:ph(a);try{return yield hh(f,e),yield bh(f.actualName,b,d)}catch(g){try{yield ih(f.actualName,e)}catch(h){}throw g;}})}
function rh(a,b,c={}){return qh(a,b,!1,c)}
function sh(a,b,c={}){return qh(a,b,!0,c)}
function th(a,b={}){return r(function*(){const c=yield oh();if(c){rg(a);var d=ph(a);yield ch(d.actualName,b);yield ih(d.actualName,c)}})}
function uh(a,b={}){return r(function*(){const c=yield oh();c&&(rg(a),yield ch(a,b),yield ih(a,c))})}
;function vh(a,b){let c;return()=>{c||(c=new wh(a,b));return c}}
var wh=class extends fh{constructor(a,b){super(a,b);this.options=b;rg(a)}i(a,b,c={}){return(this.options.da?sh:rh)(a,b,Object.assign({},c))}delete(a={}){return(this.options.da?uh:th)(this.name,a)}};function xh(a,b){return vh(a,b)}
;var yh=xh("ytGcfConfig",{R:{coldConfigStore:{O:1},hotConfigStore:{O:1}},da:!1,upgrade(a,b){b(1)&&(Og(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("hotTimestampIndex","timestamp",{unique:!1}),Og(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}).h.createIndex("coldTimestampIndex","timestamp",{unique:!1}))},version:1});function zh(a){return eh(yh(),a)}
function Ah(a,b,c){return r(function*(){const d={config:a,hashData:b,timestamp:R()},e=yield zh(c);yield e.clear("hotConfigStore");return yield Qg(e,"hotConfigStore",d)})}
function Bh(a,b,c,d){return r(function*(){const e={config:a,hashData:b,configData:c,timestamp:R()},f=yield zh(d);yield f.clear("coldConfigStore");return yield Qg(f,"coldConfigStore",e)})}
function Ch(a){return r(function*(){let b=void 0;yield U(yield zh(a),["coldConfigStore"],{mode:"readwrite",C:!0},c=>Yg(c.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},d=>{b=d.N()}));
return b})}
function Dh(a){return r(function*(){let b=void 0;yield U(yield zh(a),["hotConfigStore"],{mode:"readwrite",C:!0},c=>Yg(c.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},d=>{b=d.N()}));
return b})}
;var Eh=class extends Jc{constructor(){super(...arguments);this.h=[]}P(){this.h.length=0;super.P()}};function Fh(a,b,c){return r(function*(){if(Q("update_log_event_config")){c&&(a.j=c,u("yt.gcf.config.hotConfigGroup",a.j||null));a.hotHashData=b;u("yt.gcf.config.hotHashData",a.hotHashData||null);var d=nh();if(d){if(!c){var e;c=null==(e=yield Dh(d))?void 0:e.config}yield Ah(c,b,d)}if(c){d=a.i;e=c;for(const f of d.h)f(e)}}})}
function Gh(a,b,c){return r(function*(){if(Q("update_log_event_config")){a.coldHashData=b;u("yt.gcf.config.coldHashData",a.coldHashData||null);const d=nh();if(d){if(!c){let e;c=null==(e=yield Ch(d))?void 0:e.config}c&&(yield Bh(c,b,c.configData,d))}}})}
var Hh=class{constructor(){this.h=0;this.i=new Eh}};function Ih(){return"INNERTUBE_API_KEY"in Xe&&"INNERTUBE_API_VERSION"in Xe}
function Jh(){return{innertubeApiKey:O("INNERTUBE_API_KEY"),innertubeApiVersion:O("INNERTUBE_API_VERSION"),ha:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Oa:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Pa:O("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:O("INNERTUBE_CONTEXT_CLIENT_VERSION"),va:O("INNERTUBE_CONTEXT_HL"),ta:O("INNERTUBE_CONTEXT_GL"),Qa:O("INNERTUBE_HOST_OVERRIDE")||"",Sa:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Ra:!!O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:O("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Kh(a){const b={client:{hl:a.va,gl:a.ta,clientName:a.Oa,clientVersion:a.innertubeContextClientVersion,configInfo:a.ha}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=t.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=gf();""!==c&&(b.client.experimentsToken=c);c=hf();0<c.length&&(b.request={internalExperimentFlags:c});Lh(void 0,b);Mh(a,void 0,b);Q("start_sending_config_hash")&&Nh(void 0,b);O("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&
(b.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});!Q("fill_delegate_context_in_gel_killswitch")&&(a=O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;var d=b.client,e=O("DEVICE","");const f={};for(const [g,h]of Object.entries(Of(e))){e=g;const k=h;"cbrand"===e?f.deviceMake=k:"cmodel"===e?f.deviceModel=k:"cbr"===e?f.browserName=k:"cbrver"===e?f.browserVersion=k:"cos"===e?f.osName=k:"cosver"===e?f.osVersion=
k:"cplatform"===e&&(f.platform=k)}b.client=c.call(a,d,f);return b}
function Oh(a){const b=new $d,c=new Td;C(c,1,a.va);C(c,2,a.ta);C(c,16,a.Pa);C(c,17,a.innertubeContextClientVersion);if(a.ha){var d=a.ha,e=new Rd;d.coldConfigData&&C(e,1,d.coldConfigData);d.appInstallData&&C(e,6,d.appInstallData);d.coldHashData&&C(e,3,d.coldHashData);d.hotHashData&&C(e,5,d.hotHashData);D(c,Rd,62,e)}if((d=t.devicePixelRatio)&&1!=d){if(null!=d&&"number"!==typeof d)throw Error(`Value of float/double field must be a number|null|undefined, found ${typeof d}: ${d}`);C(c,65,d)}d=gf();""!==
d&&C(c,54,d);d=hf();if(0<d.length){e=new Wd;for(let f=0;f<d.length;f++){const g=new Vd;C(g,1,d[f].key);cc(g,2,Ud,d[f].value);kc(e,15,Vd,g)}D(b,Wd,5,e)}Lh(b);Mh(a,c);Q("start_sending_config_hash")&&Nh(c);O("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&(a=new Zd,C(a,3,O("DELEGATED_SESSION_ID")));!Q("fill_delegate_context_in_gel_killswitch")&&(a=O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(d=ec(b,Zd,3)||new Zd,a=C(d,18,a),D(b,Zd,3,a));a=O("DEVICE","");for(const [f,g]of Object.entries(Of(a)))a=
f,d=g,"cbrand"===a?C(c,12,d):"cmodel"===a?C(c,13,d):"cbr"===a?C(c,87,d):"cbrver"===a?C(c,88,d):"cos"===a?C(c,18,d):"cosver"===a?C(c,19,d):"cplatform"===a&&C(c,42,d);b.m(c);return b}
function Lh(a,b){const c=w("yt.embedded_player.embed_url");c&&(a?(b=ec(a,Xd,7)||new Xd,C(b,4,c),D(a,Xd,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Mh(a,b,c){if(a.appInstallData)if(b){let d;c=null!=(d=ec(b,Rd,62))?d:new Rd;C(c,6,a.appInstallData);D(b,Rd,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ph(a,b,c={}){let d={};O("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":O("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.Ob||O("AUTHORIZATION");b||(a?b=`Bearer ${w("gapi.auth.getToken")().Nb}`:(a=jg(hg()),Q("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
function Nh(a,b){if(!Hh.h){var c=new Hh;Hh.h=c}c=Hh.h;var d=R()-c.h;if(0!==c.h&&d<ef("send_config_hash_timer"))c=void 0;else{d=w("yt.gcf.config.coldConfigData");var e=w("yt.gcf.config.hotHashData"),f=w("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=R());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){let g;b=null!=(g=ec(a,Rd,62))?g:new Rd;C(b,1,c);C(b,3,d);C(b,5,e);D(a,Rd,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var Qh={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,tvhtml5ApiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,
tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,
postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,
proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,
accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,
sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477};const Rh=["client.name","client.version"];function Sh(a){if(!a.errorMetadata||!a.errorMetadata.kvPairs)return a;a.errorMetadata.kvPairs=a.errorMetadata.kvPairs.filter(b=>b.key?Rh.includes(b.key):!1);
return a}
;var Th=xh("ServiceWorkerLogsDatabase",{R:{SWHealthLog:{O:1}},da:!0,upgrade:(a,b)=>{b(1)&&Og(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Uh(a,b){return r(function*(){var c=yield eh(Th(),b),d=O("INNERTUBE_CONTEXT_CLIENT_NAME",0);const e=Object.assign({},a);e.clientError&&(e.clientError=Sh(e.clientError));e.interface=d;return Qg(c,"SWHealthLog",e)})}
;u("ytNetworklessLoggingInitializationOptions",t.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1});function Vh(a,b,c){!O("VISITOR_DATA")&&.01>Math.random()&&cf(new Le("Missing VISITOR_DATA when sending innertube request.","log_event",b,c));if(!a.isReady())throw a=new Le("innertube xhrclient not ready","log_event",b,c),bf(a),a;b={headers:c.headers||{},method:"POST",postParams:b,postBody:c.postBody,postBodyFormat:c.postBodyFormat||"JSON",onTimeout:()=>{c.onTimeout()},
onFetchTimeout:c.onTimeout,onSuccess:(k,l)=>{if(c.onSuccess)c.onSuccess(l)},
onFetchSuccess:k=>{if(c.onSuccess)c.onSuccess(k)},
onError:(k,l)=>{if(c.onError)c.onError(l)},
onFetchError:k=>{if(c.onError)c.onError(k)},
timeout:c.timeout,withCredentials:!0,compress:c.compress};b.headers["Content-Type"]||(b.headers["Content-Type"]="application/json");let d="";var e=a.config_.Qa;e&&(d=e);var f=a.config_.Sa||!1;e=Ph(f,d,c);Object.assign(b.headers,e);(e=b.headers.Authorization)&&!d&&f&&(b.headers["x-origin"]=window.location.origin);f=`/${"youtubei"}/${a.config_.innertubeApiVersion}/${"log_event"}`;let g={alt:"json"},h=a.config_.Ra&&e;h=h&&e.startsWith("Bearer");h||(g.key=a.config_.innertubeApiKey);a=Pf(`${d}${f}`,g||
{},!0);try{Sf(a,b)}catch(k){if("InvalidAccessError"==k.name)cf(Error("An extension is blocking network request."));else throw k;}}
class Wh{constructor(a){this.config_=null;a?this.config_=a:Ih()&&(this.config_=Jh())}isReady(){!this.config_&&Ih()&&(this.config_=Jh());return!!this.config_}};const Xh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};function Yh(a){if(document.body&&document.documentElement){const b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
class Zh{constructor(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(let d in a)d in Xh||(this[d]=a[d]);this.rotation=a.rotation;var b=a.target||a.srcElement;b&&3==b.nodeType&&(b=b.parentNode);this.target=b;var c=a.relatedTarget;if(c)try{c=
c.nodeName?c:null}catch(d){c=null}else"mouseover"==this.type?c=a.fromElement:"mouseout"==this.type&&(c=a.toElement);this.relatedTarget=c;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(d){}}preventDefault(){this.event&&
(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())}stopPropagation(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())}stopImmediatePropagation(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())}};const ua=t.ytEventsEventsListeners||{};u("ytEventsEventsListeners",ua);const $h=t.ytEventsEventsCounter||{count:0};u("ytEventsEventsCounter",$h);
function ai(a,b,c,d={}){a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return ta(e=>{const f="boolean"===typeof e[4]&&e[4]==!!d;var g;if(g=ia(e[4])&&ia(d))a:{g=e[4];for(const h in g)if(!(h in d)||g[h]!==d[h]){g=!1;break a}for(const h in d)if(!(h in g)){g=!1;break a}g=!0}return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
const bi=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){let a=!1;
try{const b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(b){}return a});
function ci(a,b,c,d={}){if(!a||!a.addEventListener&&!a.attachEvent)return"";let e=ai(a,b,c,d);if(e)return e;e=++$h.count+"";const f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);let g;g=f?h=>{h=new Zh(h);if(!Rc(h.relatedTarget,k=>k==a))return h.currentTarget=a,h.type=b,c.call(a,h)}:h=>{h=new Zh(h);
h.currentTarget=a;return c.call(a,h)};
g=P(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),bi()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent(`on${b}`,g);ua[e]=[a,b,c,g,d];return e}
function di(a){a&&("string"==typeof a&&(a=[a]),pa(a,b=>{if(b in ua){var c=ua[b];const d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?bi()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent(`on${e}`,f);delete ua[b]}}))}
;function ei(a){this.K=a;this.h=null;this.o=0;this.v=null;this.s=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.m=0;this.G=ci(window,"mousemove",la(this.T,this));a=la(this.F,this);"function"===typeof a&&(a=P(a));this.U=window.setInterval(a,25)}
ma(ei,Jc);ei.prototype.T=function(a){void 0===a.h&&Yh(a);var b=a.h;void 0===a.i&&Yh(a);this.h=new Qc(b,a.i)};
ei.prototype.F=function(){if(this.h){var a=R();if(0!=this.o){var b=this.v,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.m]=.5<Math.abs((d-this.s)/this.s)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.K();this.s=d}this.o=a;this.v=this.h;this.m=(this.m+1)%4}};
ei.prototype.P=function(){window.clearInterval(this.U);di(this.G)};const fi=new Set([174,173,175]),gi={};function hi(){var {Yb:a=!1,Tb:b=!0}={};if(null==w("_lact",window)){var c=parseInt(O("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;u("_lact",c,window);u("_fact",c,window);-1==c&&ii();ci(document,"keydown",ii);ci(document,"keyup",ii);ci(document,"mousedown",ii);ci(document,"mouseup",ii);a?ci(window,"touchmove",()=>{ji("touchmove",200)},{passive:!0}):(ci(window,"resize",()=>{ji("resize",200)}),b&&ci(window,"scroll",()=>{ji("scroll",200)}));
new ei(()=>{ji("mouse",100)});
ci(document,"touchstart",ii,{passive:!0});ci(document,"touchend",ii,{passive:!0})}}
function ji(a,b){gi[a]||(gi[a]=!0,tf.h(()=>{ii();gi[a]=!1},b))}
function ii(a){let b;if(null!=(b=w("experiment.flags",window))&&b.enable_lact_reset_by_volume_buttons||!fi.has(null==a?void 0:a.keyCode))null==w("_lact",window)&&hi(),a=Date.now(),u("_lact",a,window),-1==w("_fact",window)&&u("_fact",a,window),(a=w("ytglobal.ytUtilActivityCallback_"))&&a()}
function ki(){const a=w("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;t.ytPubsubPubsubInstance||new I;var li=Symbol("injectionDeps"),mi=class{constructor(){this.name="INNERTUBE_TRANSPORT_TOKEN"}toString(){return`InjectionToken(${this.name})`}},ni=class{constructor(){this.key=Hh}};function oi(a){var b={Wa:pi,xa:qi.h};a.i.set(b.Wa,b)}
function ri(a,b,c,d=!1){if(-1<c.indexOf(b))throw Error(`Deps cycle for: ${b}`);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error(`No provider for: ${b}`);}d=a.i.get(b);c.push(b);if(void 0!==d.xa)var e=d.xa;else if(d.ib)e=d[li]?si(a,d[li],c):[],e=d.ib(...e);else if(d.hb){e=d.hb;const f=e[li]?si(a,e[li],c):[];e=new e(...f)}else throw Error(`Could not resolve providers for: ${b}`);c.pop();d.jc||a.h.set(b,e);return e}
function si(a,b,c){return b?b.map(d=>d instanceof ni?ri(a,d.key,c,!0):ri(a,d,c)):[]}
var ti=class{constructor(){this.i=new Map;this.h=new Map}resolve(a){return a instanceof ni?ri(this,a.key,[],!0):ri(this,a,[])}};let ui;function vi(){ui||(ui=new ti);return ui}
;function wi(a,b){const c=xi(b);if(a.h[c])return a.h[c];const d=Object.keys(a.store)||[];if(1>=d.length&&xi(b)===d[0])return d;const e=[];for(let g=0;g<d.length;g++){const h=d[g].split("/");if(yi(b.auth,h[0])){var f=b.isJspb;yi(void 0===f?"undefined":f?"true":"false",h[1])&&yi(b.cttAuthInfo,h[2])&&(f=b.tier,f=void 0===f?"undefined":JSON.stringify(f),yi(f,h[3])&&e.push(d[g]))}}return a.h[c]=e}
function yi(a,b){return void 0===a||"undefined"===a?!0:a===b}
var zi=class{constructor(){this.store={};this.h={}}storePayload(a,b){a=xi(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a}smartExtractMatchingEntries(a){if(!a.keys.length)return[];const b=wi(this,a.keys.splice(0,1)[0]),c=[];for(let d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push(...this.store[b[d]]),delete this.store[b[d]]):c.push(...this.store[b[d]].splice(0,a.sizeLimit)));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:
a.sizeLimit)&&(a.sizeLimit-=c.length,c.push(...this.smartExtractMatchingEntries(a)));return c}extractMatchingEntries(a){a=wi(this,a);const b=[];for(let c=0;c<a.length;c++)this.store[a[c]]&&(b.push(...this.store[a[c]]),delete this.store[a[c]]);return b}getSequenceCount(a){a=wi(this,a);let b=0;for(let c=0;c<a.length;c++){let d;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b}};zi.prototype.getSequenceCount=zi.prototype.getSequenceCount;zi.prototype.extractMatchingEntries=zi.prototype.extractMatchingEntries;
zi.prototype.smartExtractMatchingEntries=zi.prototype.smartExtractMatchingEntries;zi.prototype.storePayload=zi.prototype.storePayload;function xi(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;const Ai=ef("initial_gel_batch_timeout",2E3),Bi=ef("gel_queue_timeout_max_ms",6E4),Ci=Math.pow(2,16)-1;let Di=void 0;class Ei{constructor(){this.j=this.h=this.i=0}}const Fi=new Ei,Gi=new Ei,Hi=new Ei,Ii=new Ei;let Ji,Ki=!0;const Li=t.ytLoggingTransportTokensToCttTargetIds_||{},Mi=t.ytLoggingTransportTokensToJspbCttTargetIds_||{};let Ni={};function Oi(){let a=w("yt.logging.ims");a||(a=new zi,u("yt.logging.ims",a));return a}
function Pi(a,b){if("log_event"===a.endpoint){var c=Qi(a);a:{var d=Object.keys(a.payload);for(const e of d)if(Qh[e]){d=e;break a}d=void 0}d=Ri(d||"");400===d?Si(a,b):(Ni[c]=!0,d={cttAuthInfo:c,isJspb:!1,tier:d},Oi().storePayload(d,a.payload),Ti(b,c,!1,d))}}
function Ui(a,b,c){if("log_event"===b.endpoint){var d=Qi(b,!0),e=Ri(a);400===e?Vi(a,b,c):(Ni[d]=!0,a={cttAuthInfo:d,isJspb:!0,tier:e},Oi().storePayload(a,b.payload.toJSON()),Ti(c,d,!0,a))}}
function Ti(a,b,c=!1,d){a&&(Di=new a);a=Wi();const e=R(),f=Xi(c,d.tier),g=f.j;let h=0;d&&(h=Oi().getSequenceCount(d));const k=()=>{Yi({writeThenSend:!0},Q("flush_only_full_queue")?b:void 0,c,d.tier)};
1E3<=h&&Q("web_logging_max_batch_hard_limit")?k():h>=a?Ji||(Ji=Zi(()=>{k();Ji=void 0},0)):10<=e-g&&($i(c,d.tier),f.j=e)}
function Si(a,b){if("log_event"===a.endpoint){var c=Qi(a),d=new Map;d.set(c,[a.payload]);b&&(Di=new b);return new H((e,f)=>{Di&&Di.isReady()?aj(d,Di,e,f,{bypassNetworkless:!0},!0):e()})}}
function Vi(a,b,c){if("log_event"===b.endpoint){a=Qi(b,!0);var d=new Map;d.set(a,[b.payload.toJSON()]);c&&(Di=new c);return new H(e=>{Di&&Di.isReady()?bj(d,Di,e,{bypassNetworkless:!0},!0):e()})}}
function Qi(a,b=!1){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;const d=new De;c.videoId?d.setVideoId(c.videoId):c.playlistId&&cc(d,2,Ce,c.playlistId);Mi[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Li[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Yi(a={},b,c=!1,d){new H((e,f)=>{const g=Xi(c,d);cj(g.i);cj(g.h);g.h=0;Di&&Di.isReady()?void 0===d&&Q("enable_web_tiered_gel")?(dj(e,f,a,b,c,300),dj(e,f,a,b,c,200)):dj(e,f,a,b,c,d):($i(c,d),e())})}
function dj(a,b,c={},d,e=!1,f=200){var g=Di,h=new Map;const k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f},m={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=Q("enable_web_tiered_gel")?Oi().smartExtractMatchingEntries({keys:[l,m],sizeLimit:Wi()}):Oi().extractMatchingEntries(m),h.set(d,b),bj(h,g,a,c)):(h=Q("enable_web_tiered_gel")?Oi().smartExtractMatchingEntries({keys:[l,m],sizeLimit:Wi()}):Oi().extractMatchingEntries(m),k.set(d,h),aj(k,g,a,b,c));else if(e){for(const n of Object.keys(Ni))b=Q("enable_web_tiered_gel")?
Oi().smartExtractMatchingEntries({keys:[l,m],sizeLimit:Wi()}):Oi().extractMatchingEntries({isJspb:!0,cttAuthInfo:n}),0<b.length&&h.set(n,b),(Q("web_fp_via_jspb_and_json")&&c.writeThenSend||!Q("web_fp_via_jspb_and_json"))&&delete Ni[n];bj(h,g,a,c)}else{for(const n of Object.keys(Ni))d=Q("enable_web_tiered_gel")?Oi().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:n,tier:f},{isJspb:!1,cttAuthInfo:n}],sizeLimit:Wi()}):Oi().extractMatchingEntries({isJspb:!1,cttAuthInfo:n}),0<d.length&&k.set(n,
d),(Q("web_fp_via_jspb_and_json")&&c.writeThenSend||!Q("web_fp_via_jspb_and_json"))&&delete Ni[n];aj(k,g,a,b,c)}}
function $i(a=!1,b=200){const c=Xi(a,b);var d=c===Ii||c===Hi?5E3:Bi;Q("web_gel_timeout_cap")&&!c.h&&(d=Zi(()=>{Yi({writeThenSend:!0},void 0,a,b)},d),c.h=d);
cj(c.i);d=O("LOGGING_BATCH_TIMEOUT",ef("web_gel_debounce_ms",1E4));Q("shorten_initial_gel_batch_timeout")&&Ki&&(d=Ai);d=Zi(()=>{Yi({writeThenSend:!0},void 0,a,b)},d);
c.i=d}
function aj(a,b,c,d,e={},f){const g=Math.round(R());let h=a.size;for(const [l,m]of a){a=l;var k=m;const n=wa({context:Kh(b.config_||Jh())});if(!ha(k)&&!Q("throw_err_when_logevent_malformed_killswitch")){d();break}n.events=k;(k=Li[a])&&ej(n,a,k);delete Li[a];const v="visitorOnlyApprovedKey"===a;fj(n,g,v);gj(e);const p=G=>{Q("update_log_event_config")&&tf.h(()=>r(function*(){yield hj(G)}));
h--;h||c()};
let x=0;const B=()=>{x++;if(e.bypassNetworkless&&1===x)try{Vh(b,n,ij({writeThenSend:!0},v,p,B,f)),Ki=!1}catch(G){bf(G),d()}h--;h||c()};
try{Vh(b,n,ij(e,v,p,B,f)),Ki=!1}catch(G){bf(G),d()}}}
function bj(a,b,c,d={},e){const f=Math.round(R());let g=a.size;var h=new Map([...a]);for(const [m]of h){var k=m,l=a.get(k);h=new Ee;const n=Oh(b.config_||Jh());D(h,$d,1,n);l=l?jj(l):[];for(const v of l)kc(h,3,L,v);(l=Mi[k])&&kj(h,k,l);delete Mi[k];k="visitorOnlyApprovedKey"===k;lj(h,f,k);gj(d);l={startTime:R(),ticks:{},infos:{}};h=vc(h);l.ticks.geljspc=R();Q("log_jspb_serialize_latency")&&.001>Math.random()&&yf("meta_logging_csi_event",{timerName:"gel_jspb_serialize",kc:l});k=ij(d,k,v=>{Q("update_log_event_config")&&
tf.h(()=>r(function*(){yield hj(v)}));
g--;g||c()},()=>{g--;
g||c()},e);
k.headers["Content-Type"]="application/json+protobuf";k.postBodyFormat="JSPB";k.postBody=h;Vh(b,"",k);Ki=!1}}
function gj(a){Q("always_send_and_write")&&(a.writeThenSend=!1)}
function ij(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,Wb:a,dangerousLogToVisitorSession:b,Qb:!!e,headers:{},postBodyFormat:"",postBody:"",compress:Q("compress_gel")||Q("compress_gel_lr")};mj()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(R())));return a}
function fj(a,b,c){mj()||(a.requestTimeMs=String(b));Q("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=O("EVENT_ID"))&&(c=nj(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function lj(a,b,c){mj()||C(a,2,b);if(!c&&(b=O("EVENT_ID"))){c=nj();const d=new Be;C(d,1,b);C(d,2,c);D(a,Be,5,d)}}
function nj(){let a=O("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Ci/2));a++;a>Ci&&(a=1);N("BATCH_CLIENT_COUNTER",a);return a}
function ej(a,b,c){let d;if(c.videoId)d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function kj(a,b,c){var d=1===dc(c,Ce)?1:-1;if(A(c,d))d=1;else if(c.getPlaylistId())d=2;else return;D(a,De,4,c);a=ec(a,$d,1)||new $d;c=ec(a,Zd,3)||new Zd;const e=new Yd;C(e,2,b);C(e,1,d);kc(c,12,Yd,e);D(a,Zd,3,c)}
function jj(a){const b=[];for(let c=0;c<a.length;c++)try{b.push(new L(a[c]))}catch(d){bf(new Le("Transport failed to deserialize "+String(a[c])))}return b}
function mj(){return Q("use_request_time_ms_header")||Q("lr_use_request_time_ms_header")}
function Zi(a,b){return Q("transport_use_scheduler")?pf(a,b):of(a,b)}
function cj(a){Q("transport_use_scheduler")?tf.i(a):window.clearTimeout(a)}
function hj(a){return r(function*(){var b,c=null==a?void 0:null==(b=a.responseContext)?void 0:b.globalConfigGroup;b=jf(c,Md);const d=null==c?void 0:c.hotHashData,e=jf(c,Ld);c=null==c?void 0:c.coldHashData;const f=vi().resolve(new ni);f&&(d&&(b?yield Fh(f,d,b):yield Fh(f,d)),c&&(e?yield Gh(f,c,e):yield Gh(f,c)))})}
function Xi(a,b=200){return a?300===b?Ii:Gi:300===b?Hi:Fi}
function Wi(){return ef("tvhtml5_logging_max_batch_ads_fork")||ef("web_logging_max_batch")||100}
function Ri(a){if(Q("enable_web_tiered_gel")){a=Qh[a||""];var b,c;if(null==vi().resolve(new ni))var d=void 0;else{var e=null!=(d=w("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c].tier;return 200}}
;const oj=t.ytLoggingGelSequenceIdObj_||{};
function pj(a,b,c,d={}){const e={},f=Math.round(d.timestamp||R());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;Q("enable_unknown_lact_fix_on_html5")&&hi();a=ki();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};Q("log_sequence_info_on_gel_web")&&d.sequenceGroup&&(a=e.context,b=d.sequenceGroup,b={index:qj(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete oj[d.sequenceGroup]);(d.sendIsolatedPayload?Si:Pi)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function rj(a=!1){Yi(void 0,void 0,a)}
function qj(a){oj[a]=a in oj?oj[a]+1:0;return oj[a]}
;let sj=Wh,tj=[];function V(a,b,c={}){let d=sj;O("ytLoggingEventsDefaultDisabled",!1)&&sj===Wh&&(d=null);Q("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=ki(),c.timestamp=R());pj(a,b,d,c)}
;const uj=t.ytLoggingGelSequenceIdObj_||{};
function vj(a,b,c,d={}){var e=Math.round(d.timestamp||R());C(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new ye;if(d.lact)C(e,1,isFinite(d.lact)?d.lact:-1);else if(d.timestamp)C(e,1,-1);else{var f=ki();C(e,1,isFinite(f)?f:-1)}if(Q("log_sequence_info_on_gel_web")&&d.sequenceGroup){f=d.sequenceGroup;const g=qj(f),h=new xe;C(h,2,g);C(h,1,f);D(e,xe,3,h);d.endOfSequence&&delete uj[d.sequenceGroup]}D(b,ye,33,e);(d.sendIsolatedPayload?Vi:Ui)(a,{endpoint:"log_event",payload:b,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function wj(a,b,c={}){let d=!1;O("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);vj(a,b,d?null:Wh,c)}
;function xj(a,b,c){const d=Q("jspb_sparse_encoded_pivot")?new L([{}]):new L;jc(d,ve,72,ze,a);c?vj("visualElementShown",d,c,b):wj("visualElementShown",d,b)}
function yj(a,b,c){const d=Q("jspb_sparse_encoded_pivot")?new L([{}]):new L;jc(d,ue,73,ze,a);c?vj("visualElementHidden",d,c,b):wj("visualElementHidden",d,b)}
function zj(a,b,c){const d=Q("jspb_sparse_encoded_pivot")?new L([{}]):new L;jc(d,te,78,ze,a);c?vj("visualElementGestured",d,c,b):wj("visualElementGestured",d,b)}
function Aj(a,b,c){const d=Q("jspb_sparse_encoded_pivot")?new L([{}]):new L;jc(d,we,208,ze,a);c?vj("visualElementStateChanged",d,c,b):wj("visualElementStateChanged",d,b)}
function Bj(a,b,c){const d=Q("jspb_sparse_encoded_pivot")?new L([{}]):new L;jc(d,qe,156,ze,a);c?vj("screenCreated",d,c,b):wj("screenCreated",d,b)}
function Cj(a,b,c){const d=Q("jspb_sparse_encoded_pivot")?new L([{}]):new L;jc(d,se,215,ze,a);c?vj("visualElementAttached",d,c,b):wj("visualElementAttached",d,b)}
;var Dj=new Set,Ej=0,Fj=0,Gj=0,Hj=[];const Ij=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Jj(a){W(a)}
function Kj(a){W(a,"WARNING")}
function W(a,b="ERROR"){var c={};c.name=O("INNERTUBE_CONTEXT_CLIENT_NAME",1);c.version=O("INNERTUBE_CONTEXT_CLIENT_VERSION");Lj(a,c,b)}
function Lj(a,b,c="ERROR"){if(a){a.hasOwnProperty("level")&&a.level&&(c=a.level);if(Q("console_log_js_exceptions")){var d=[];d.push(`Name: ${a.name}`);d.push(`Message: ${a.message}`);a.hasOwnProperty("params")&&d.push(`Error Params: ${JSON.stringify(a.params)}`);a.hasOwnProperty("args")&&d.push(`Error args: ${JSON.stringify(a.args)}`);d.push(`File name: ${a.fileName}`);d.push(`Stacktrace: ${a.stack}`);window.console.log(d.join("\n"),a)}if(!(5<=Ej)){d=Hj;var e=Kc(a);const n=e.message||"Unknown Error",
v=e.name||"UnknownError";var f=e.stack||a.i||"Not available";if(f.startsWith(`${v}: ${n}`)){var g=f.split("\n");g.shift();f=g.join("\n")}g=e.lineNumber||"Not available";e=e.fileName||"Not available";let p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var h=0;h<a.args.length&&!(p=eg(a.args[h],`params.${h}`,b,p),500<=p);h++);else if(a.hasOwnProperty("params")&&a.params){const x=a.params;if("object"===typeof a.params)for(h in x){if(!x[h])continue;const B=`params.${h}`,G=gg(x[h]);b[B]=G;p+=
B.length+G.length;if(500<p)break}else b.params=gg(x)}if(d.length)for(h=0;h<d.length&&!(p=eg(d[h],`params.context.${h}`,b,p),500<=p);h++);navigator.vendor&&!b.hasOwnProperty("vendor")&&(b["device.vendor"]=navigator.vendor);b={message:n,name:v,lineNumber:g,fileName:e,stack:f,params:b,sampleWeight:1};d=Number(a.columnNumber);isNaN(d)||(b.lineNumber=`${b.lineNumber}:${d}`);if("IGNORED"===a.level)var k=0;else a:{a=Yf();d=b;for(k of a.J)if(d.message&&d.message.match(k.Ta)){k=k.weight;break a}for(var l of a.H)if(l.callback(d)){k=
l.weight;break a}k=1}b.sampleWeight=k;k=b;for(var m of Vf)if(m.ca[k.name]){l=m.ca[k.name];for(const x of l)if(l=k.message.match(x.A)){k.params["params.error.original"]=l[0];a=x.groups;b={};for(d=0;d<a.length;d++)b[a[d]]=l[d+1],k.params[`params.error.${a[d]}`]=l[d+1];k.message=m.ia(b);break}}k.params||(k.params={});m=Yf();k.params["params.errorServiceSignature"]=`msg=${m.J.length}&cb=${m.H.length}`;k.params["params.serviceWorker"]="true";t.document&&t.document.querySelectorAll&&(k.params["params.fscripts"]=
String(document.querySelectorAll("script:not([nonce])").length));Aa("sample").constructor!==za&&(k.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(k);0===k.sampleWeight||Dj.has(k.message)||Mj(k,c)}}}
function Mj(a,b="ERROR"){if("ERROR"===b){bg.la("handleError",a);if(Q("record_app_crashed_web")&&0===Gj&&1===a.sampleWeight)if(Gj++,Q("errors_via_jspb")){var c=new je;c=C(c,1,1);if(!Q("report_client_error_with_app_crash_ks")){var d=new ie;var e=new he;var f=new ge;var g=new fe;g=C(g,1,a.message);f=D(f,fe,3,g);e=D(e,ge,5,f);d=D(d,he,9,e);D(c,ie,4,d)}d=Q("jspb_sparse_encoded_pivot")?new L([{}]):new L;jc(d,je,20,ze,c);wj("appCrashed",d)}else c={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},Q("report_client_error_with_app_crash_ks")||
(c.systemHealth={crashData:{clientError:{logMessage:{message:a.message}}}}),V("appCrashed",c);Fj++}else"WARNING"===b&&bg.la("handleWarning",a);a:{if(Q("errors_via_jspb")){if(Nj())var h=void 0;else{c=new ce;C(c,1,a.stack);a.fileName&&C(c,4,a.fileName);var k=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];0!==k.length&&(1!==k.length||isNaN(Number(k[0]))?2!==k.length||isNaN(Number(k[0]))||isNaN(Number(k[1]))||(C(c,2,Number(k[0])),C(c,3,Number(k[1]))):C(c,2,Number(k[0])));k=new fe;C(k,1,a.message);
C(k,3,a.name);C(k,6,a.sampleWeight);"ERROR"===b?C(k,2,2):"WARNING"===b?C(k,2,1):C(k,2,0);var l=new de;C(l,1,!0);jc(l,ce,3,ee,c);c=new be;C(c,3,window.location.href);d=O("FEXP_EXPERIMENTS",[]);for(g=0;g<d.length;g++)e=c,f=d[g],Xb(e),bc(e,5,2,!1).push(f);d=Ye();if(!Ze()&&d)for(var m of Object.keys(d))e=new ae,C(e,1,m),C(e,2,String(d[m])),kc(c,4,ae,e);if(m=a.params)for(h of Object.keys(m))d=new ae,C(d,1,`client.${h}`),C(d,2,String(m[h])),kc(c,4,ae,d);m=O("SERVER_NAME");h=O("SERVER_VERSION");m&&h&&(d=
new ae,C(d,1,"server.name"),C(d,2,m),kc(c,4,ae,d),m=new ae,C(m,1,"server.version"),C(m,2,h),kc(c,4,ae,m));h=new ge;D(h,be,1,c);D(h,de,2,l);D(h,fe,3,k)}if(!h)break a;m=Q("jspb_sparse_encoded_pivot")?new L([{}]):new L;jc(m,ge,163,ze,h);wj("clientError",m)}else{if(Nj())h=void 0;else{m={stackTrace:a.stack};a.fileName&&(m.filename=a.fileName);h=a.lineNumber&&a.lineNumber.split?a.lineNumber.split(":"):[];0!==h.length&&(1!==h.length||isNaN(Number(h[0]))?2!==h.length||isNaN(Number(h[0]))||isNaN(Number(h[1]))||
(m.lineNumber=Number(h[0]),m.columnNumber=Number(h[1])):m.lineNumber=Number(h[0]));h={level:"ERROR_LEVEL_UNKNOWN",message:a.message,errorClassName:a.name,sampleWeight:a.sampleWeight};"ERROR"===b?h.level="ERROR_LEVEL_ERROR":"WARNING"===b&&(h.level="ERROR_LEVEL_WARNNING");m={isObfuscated:!0,browserStackInfo:m};c={pageUrl:window.location.href,kvPairs:[]};O("FEXP_EXPERIMENTS")&&(c.experimentIds=O("FEXP_EXPERIMENTS"));d=Ye();if(!Ze()&&d)for(l of Object.keys(d))c.kvPairs.push({key:l,value:String(d[l])});
if(l=a.params)for(k of Object.keys(l))c.kvPairs.push({key:`client.${k}`,value:String(l[k])});k=O("SERVER_NAME");l=O("SERVER_VERSION");k&&l&&(c.kvPairs.push({key:"server.name",value:k}),c.kvPairs.push({key:"server.version",value:l}));h={errorMetadata:c,stackTrace:m,logMessage:h}}if(!h)break a;V("clientError",h)}if("ERROR"===b||Q("errors_flush_gel_always_killswitch"))b:{if(Q("web_fp_via_jspb")){b=tj;tj=[];if(b)for(const n of b)pj(n.S,n.payload,sj,n.options);rj(!0);if(!Q("web_fp_via_jspb_and_json"))break b}rj()}}try{Dj.add(a.message)}catch(n){}Ej++}
function Nj(){for(const a of Ij){const b=Ga();if(b&&0<=b.toLowerCase().indexOf(a.toLowerCase()))return!0}return!1}
function Oj(a,...b){a.args||(a.args=[]);a.args.push(...b)}
;u("ytLoggingLatencyUsageStats_",t.ytLoggingLatencyUsageStats_||{});const Pj=window;class Qj{constructor(){this.timing={};this.clearResourceTimings=()=>{};
this.webkitClearResourceTimings=()=>{};
this.mozClearResourceTimings=()=>{};
this.msClearResourceTimings=()=>{};
this.oClearResourceTimings=()=>{}}}
var Rj=Pj.performance||Pj.mozPerformance||Pj.msPerformance||Pj.webkitPerformance||new Qj;let Sj=t.ytLoggingDocDocumentNonce_;if(!Sj){const a=Hf(),b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));Sj=b.join("")}var Tj=Sj;var Uj={lb:0,jb:1,kb:2,Hb:3,mb:4,Mb:5,Ib:6,Lb:7,Jb:8,Kb:9,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS",9:"RICH_GRID_WATCH"};let Vj=1;function Wj(a){return new Xj({trackingParams:a})}
function Yj(a){const b=Vj++;return new Xj({veType:a,veCounter:b,elementIndex:void 0,dataElement:void 0,youtubeData:void 0,jspbYoutubeData:void 0})}
var Xj=class{constructor(a){this.h=a}getAsJson(){const a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a}getAsJspb(){const a=new K;
if(void 0!==this.h.trackingParams){var b=this.h.trackingParams;if(null!=b)if("string"===typeof b)b=b?new ub(b,qb):tb();else if(b.constructor!==ub)if(ob(b))b=b.length?new ub(new Uint8Array(b),qb):tb();else throw Error();C(a,1,b)}else void 0!==this.h.veType&&C(a,2,this.h.veType),void 0!==this.h.veCounter&&C(a,6,this.h.veCounter),void 0!==this.h.elementIndex&&C(a,3,this.h.elementIndex),this.h.isCounterfactual&&C(a,5,!0);void 0!==this.h.dataElement&&(b=this.h.dataElement.getAsJspb(),D(a,K,7,b));void 0!==
this.h.youtubeData&&D(a,Qd,8,this.h.jspbYoutubeData);return a}toString(){return JSON.stringify(this.getAsJson())}isClientVe(){return!this.h.trackingParams&&!!this.h.veType}};function Zj(a=0){return 0===a?"client-screen-nonce":`${"client-screen-nonce"}.${a}`}
function ak(a=0){return Q("new_csn_storage_design")?O("client-screen-nonce-store",{})[a]:O(Zj(a))}
function bk(a,b=0){if(Q("new_csn_storage_design")){let c=O("client-screen-nonce-store");c||(c={},N("client-screen-nonce-store",c));c[b]=a}N(Zj(b),a)}
function ck(a=0){return 0===a?"ROOT_VE_TYPE":`${"ROOT_VE_TYPE"}.${a}`}
function dk(a=0){return O(ck(a))}
function ek(a=0){return(a=dk(a))?new Xj({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null}
function fk(){let a=O("csn-to-ctt-auth-info");a||(a={},N("csn-to-ctt-auth-info",a));return a}
function gk(){return Object.values(O("client-screen-nonce-store",{})).filter(a=>void 0!==a)}
function X(a=0){a=ak(a);if(!a&&!O("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
function hk(a){for(const b of Object.values(Uj))if(X(b)===a)return!0;return!1}
function ik(a,b,c){const d=fk();(c=X(c))&&delete d[c];b&&(d[a]=b)}
function jk(a){return fk()[a]}
function kk(a,b,c=0,d){if(a!==ak(c)||b!==O(ck(c)))if(ik(a,d,c),bk(a,c),N(ck(c),b),b=()=>{setTimeout(()=>{if(a)if(Q("web_time_via_jspb")){var e=new ke;C(e,1,Tj);C(e,2,a);const f=Q("jspb_sparse_encoded_pivot")?new L([{}]):new L;jc(f,ke,111,ze,e);wj("foregroundHeartbeatScreenAssociated",f)}else V("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Tj,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()}
;la(Rj.clearResourceTimings||Rj.webkitClearResourceTimings||Rj.mozClearResourceTimings||Rj.msClearResourceTimings||Rj.oClearResourceTimings||oa,Rj);function lk(a=!0){a=a?Hf():Gf();const b=[];for(let c=0;c<a.length;c++)b.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[c]&63));return b.join("")}
;class nf extends lf{constructor(a){super(arguments);this.csn=a}}const Bf=new mf,mk=[];let ok=nk,pk=0;function qk(a,b,c,d,e,f,g,h){const k=ok(),l=new Xj({veType:b,youtubeData:f,jspbYoutubeData:void 0});f={sequenceGroup:k};e&&(f.cttAuthInfo=e);var m=()=>{Kj(new Le("newScreen() parent element does not have a VE - rootVe",b))};
if(Q("il_via_jspb")){e=pe((new qe).h(k),l.getAsJspb());c&&c.visualElement?(m=new oe,c.clientScreenNonce&&C(m,2,c.clientScreenNonce),ne(m,c.visualElement.getAsJspb()),g&&C(m,4,Ae[g]),D(e,oe,5,m)):c&&m();d&&C(e,3,d);if(Q("expectation_logging")&&h&&h.screenCreatedLoggingExpectations){c=new Pd;h=h.screenCreatedLoggingExpectations.expectedParentScreens||[];for(var n of h)n.screenVeType&&(h=Nd(new Od,n.screenVeType),kc(c,1,Od,h));D(e,Pd,7,c)}Bj(e,f,a)}else n={csn:k,pageVe:l.getAsJson()},Q("expectation_logging")&&
h&&h.screenCreatedLoggingExpectations&&(n.screenCreatedLoggingExpectations=h.screenCreatedLoggingExpectations),c&&c.visualElement?(n.implicitGesture={parentCsn:c.clientScreenNonce,gesturedVe:c.visualElement.getAsJson()},g&&(n.implicitGesture.gestureType=g)):c&&m(),d&&(n.cloneCsn=d),a?pj("screenCreated",n,a,f):V("screenCreated",n,f);yf(Bf,new nf(k));return k}
function rk(a,b,c,d){const e=d.filter(g=>{g.csn!==b?(g.csn=b,g=!0):g=!1;return g}),f={cttAuthInfo:jk(b)||void 0,
sequenceGroup:b};for(const g of d)d=g.getAsJson(),(va(d)||!d.trackingParams&&!d.veType)&&Kj(Error("Child VE logged with no data"));if(Q("il_via_jspb")){const g=re((new se).h(b),c.getAsJspb());qa(e,h=>{h=h.getAsJspb();kc(g,3,K,h)});
"UNDEFINED_CSN"===b?Y("visualElementAttached",f,void 0,g):Cj(g,f,a)}else c={csn:b,parentVe:c.getAsJson(),childVes:qa(e,g=>g.getAsJson())},"UNDEFINED_CSN"===b?Y("visualElementAttached",f,c):a?pj("visualElementAttached",c,a,f):V("visualElementAttached",c,f)}
function sk(a,b,c,d,e,f){tk(a,b,c,e,f)}
function tk(a,b,c,d,e){const f={cttAuthInfo:jk(b)||void 0,sequenceGroup:b};Q("il_via_jspb")?(d=(new ve).h(b),c=c.getAsJspb(),c=D(d,K,2,c),c=C(c,4,1),e&&D(c,me,3,e),"UNDEFINED_CSN"===b?Y("visualElementShown",f,void 0,c):xj(c,f,a)):(e={csn:b,ve:c.getAsJson(),eventType:1},d&&(e.clientData=d),"UNDEFINED_CSN"===b?Y("visualElementShown",f,e):a?pj("visualElementShown",e,a,f):V("visualElementShown",e,f))}
function uk(a,b,c,d=!1){var e=d?16:8;const f={cttAuthInfo:jk(b)||void 0,sequenceGroup:b,endOfSequence:d};Q("il_via_jspb")?(e=(new ue).h(b),c=c.getAsJspb(),c=D(e,K,2,c),C(c,4,d?16:8),"UNDEFINED_CSN"===b?Y("visualElementHidden",f,void 0,c):yj(c,f,a)):(d={csn:b,ve:c.getAsJson(),eventType:e},"UNDEFINED_CSN"===b?Y("visualElementHidden",f,d):a?pj("visualElementHidden",d,a,f):V("visualElementHidden",d,f))}
function vk(a,b,c,d){const e={cttAuthInfo:jk(b)||void 0,sequenceGroup:b};Q("il_via_jspb")?(d=(new te).h(b),c=c.getAsJspb(),c=D(d,K,2,c),C(c,4,Ae.INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK),"UNDEFINED_CSN"===b?Y("visualElementGestured",e,void 0,c):zj(c,e,a)):(c={csn:b,ve:c.getAsJson(),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"},d&&(c.clientData=d),"UNDEFINED_CSN"===b?Y("visualElementGestured",e,c):a?pj("visualElementGestured",c,a,e):V("visualElementGestured",c,e))}
function wk(a,b,c,d){const e={cttAuthInfo:jk(b)||void 0,sequenceGroup:b};Q("il_via_jspb")?(d=new we,d.h(b),c=c.getAsJspb(),D(d,K,2,c),"UNDEFINED_CSN"===b?Y("visualElementStateChanged",e,void 0,d):Aj(d,e,a)):(c={csn:b,ve:c.getAsJson(),clientData:d},"UNDEFINED_CSN"===b?Y("visualElementStateChanged",e,c):a?pj("visualElementStateChanged",c,a,e):V("visualElementStateChanged",c,e))}
function nk(){if(Q("enable_web_96_bit_csn"))var a=lk();else if(Q("enable_web_96_bit_csn_no_crypto"))a=lk(!1);else{a=Math.random()+"";for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=db(b,3)}return a}
function Y(a,b,c,d){mk.push({S:a,payload:c,M:d,options:b});pk||(pk=Cf())}
function Df(a){if(mk){for(const b of mk)if(Q("il_via_jspb")&&b.M)switch(b.M.h(a.csn),b.S){case "screenCreated":Bj(b.M,b.options);break;case "visualElementAttached":Cj(b.M,b.options);break;case "visualElementShown":xj(b.M,b.options);break;case "visualElementHidden":yj(b.M,b.options);break;case "visualElementGestured":zj(b.M,b.options);break;case "visualElementStateChanged":Aj(b.M,b.options);break;default:Kj(new Le("flushQueue unable to map payloadName to JSPB setter"))}else b.payload&&(b.payload.csn=
a.csn,V(b.S,b.payload,b.options));mk.length=0}pk=0}
;function xk(a,b){P(sk)(void 0,a,b,void 0,void 0,void 0)}
;function Z(){yk.h||(yk.h=new yk);return yk.h}
function zk(a,b,c){const d=X(c);return null===a.csn||d===a.csn||c?d:(a=new Le("VisibilityLogger called before newScreen",{caller:b.tagName,previous_csn:a.csn,current_csn:d}),Kj(a),null)}
function Ak(a){return Math.floor(Number(a.data&&a.data.loggingDirectives&&a.data.loggingDirectives.visibility&&a.data.loggingDirectives.visibility.types||""))||1}
var yk=class{constructor(){this.l=new Set;this.j=new Set;this.h=new Map;this.client=void 0;this.csn=null}m(a){this.client=a}s(){this.clear();this.csn=X()}clear(){this.l.clear();this.j.clear();this.h.clear();this.csn=null}v(a,b,c){b=this.i(a);var d=a.visualElement?a.visualElement:b,e=this.l.has(d),f=this.h.get(d);this.l.add(d);this.h.set(d,!0);a.impressionLog&&!e&&a.impressionLog();if(b||a.visualElement)if(c=zk(this,a,c)){var g=!(!a.data||!a.data.loggingDirectives);if(Ak(a)||g){d=a.visualElement?a.visualElement:
Wj(b);var h=a.interactionLoggingClientData;b=a.interactionLoggingClientDataJspbType;g||e?Ak(a)&4?f||(a=this.client,e={cttAuthInfo:jk(c)||void 0,sequenceGroup:c},Q("il_via_jspb")?(f=(new ve).h(c),d=d.getAsJspb(),f=D(f,K,2,d),f=C(f,4,4),b&&D(f,me,3,b),"UNDEFINED_CSN"===c?Y("visualElementShown",e,void 0,f):xj(f,e,a)):(b={csn:c,ve:d.getAsJson(),eventType:4},h&&(b.clientData=h),"UNDEFINED_CSN"===c?Y("visualElementShown",e,b):a?pj("visualElementShown",b,a,e):V("visualElementShown",b,e))):Ak(a)&1&&!e&&tk(this.client,
c,d,h,b):tk(this.client,c,d,h,b)}}}o(a,b,c){var d=this.i(a),e=a.visualElement?a.visualElement:d;b=this.j.has(e);const f=this.h.get(e);this.j.add(e);this.h.set(e,!1);if(!1===f)return!0;if(!d&&!a.visualElement)return!1;c=zk(this,a,c);if(!c||!Ak(a)&&a.data&&a.data.loggingDirectives)return!1;d=a.visualElement?a.visualElement:Wj(d);Ak(a)&8?uk(this.client,c,d):Ak(a)&2&&!b&&(a=this.client,b={cttAuthInfo:jk(c)||void 0,sequenceGroup:c},Q("il_via_jspb")?(e=(new ue).h(c),d=d.getAsJspb(),d=D(e,K,2,d),d=C(d,4,
2),"UNDEFINED_CSN"===c?Y("visualElementHidden",b,void 0,d):yj(d,b,a)):(d={csn:c,ve:d.getAsJson(),eventType:2},"UNDEFINED_CSN"===c?Y("visualElementHidden",b,d):a?pj("visualElementHidden",d,a,b):V("visualElementHidden",d,b)));return!0}i(a){let b,c,d;return Q("il_use_view_model_logging_context")&&(null==(b=a.data)?0:null==(c=b.context)?0:null==(d=c.loggingContext)?0:d.loggingDirectives)?a.data.context.loggingContext.loggingDirectives.trackingParams||"":a.data&&a.data.loggingDirectives?a.data.loggingDirectives.trackingParams||
"":a.veContainer&&a.veContainer.trackingParams?a.veContainer.trackingParams:a.data&&a.data.trackingParams||""}};function Bk(){Ck.h||(Ck.h=new Ck);return Ck.h}
function Dk(){Bk();P(Z().s).bind(Z())()}
function Ek(a,b){P(Z().v).bind(Z())(b,void 0,8)}
function Fk(a,b){return P(Z().i).bind(Z())(b)}
var Ck=class{m(a){P(Z().m).bind(Z())(a)}clear(){P(Z().clear).bind(Z())()}};function Gk(a,b,c,d={}){a.j.add(d.layer||0);a.s=()=>{Hk(a,b,c,d);const e=ek(d.layer);if(e){for(const f of a.F)a.h(f[0],f[1]||e,d.layer);for(const f of a.G)Ik(a,f[0],f[1])}};
c||X(d.layer)||a.s();if(d.Y)for(const e of d.Y)a.ea(e,d.layer);else W(Error("Delayed screen needs a data promise."))}
function Hk(a,b,c,d={}){var e=void 0;d.layer||(d.layer=0);e=void 0!==d.ka?d.ka:d.layer;const f=X(e);e=ek(e);var g=c||e;let h;g&&(void 0!==d.parentCsn?h={clientScreenNonce:d.parentCsn,visualElement:g}:f&&"UNDEFINED_CSN"!==f&&(h={clientScreenNonce:f,visualElement:g}));let k;g=O("EVENT_ID");"UNDEFINED_CSN"===f&&g&&(k={servletData:{serializedServletEventId:g}});Q("combine_ve_grafts")&&f&&Jk(a,f);let l;try{l=qk(a.client,b,h,d.X,d.cttAuthInfo,k,d.Na,d.loggingExpectations)}catch(v){Oj(v,{Ya:b,rootVe:e,Va:c,
Ja:f,Ua:h,X:d.X});W(v);return}kk(l,b,d.layer,d.cttAuthInfo);f&&"UNDEFINED_CSN"!==f&&e&&!hk(f)&&uk(a.client,f,e,!0);a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=l||"");Dk();const m=ek(d.layer);f&&"UNDEFINED_CSN"!==f&&m&&(Q("web_mark_root_visible")||Q("music_web_mark_root_visible"))&&xk(l,m);a.j.delete(d.layer||0);a.s=void 0;let n;null==(n=a.fa.get(d.layer))||n.forEach((v,p)=>{v?a.h(p,v,d.layer):m&&a.h(p,m,d.layer)});
Kk(a)}
function Jk(a,b){if(void 0===b){const c=gk();for(let d=0;d<c.length;d++)void 0!==c[d]&&Jk(a,c[d])}else a.o.forEach((c,d)=>{(d=a.K.get(d))&&rk(a.client,b,d,c)}),a.o.clear(),a.K.clear(),a.W=void 0}
function Ik(a,b,c,d=0){const e=X(d);b=b||ek(d);e&&b&&wk(a.client,e,b,c)}
function Kk(a){for(var b=0;b<a.v.length;b++){var c=a.v[b];try{c()}catch(d){W(d)}}a.v.length=0;for(b=0;b<a.V.length;b++){c=a.V[b];try{c()}catch(d){W(d)}}}
var Lk=class{constructor(){this.F=[];this.G=[];this.i=[];this.v=[];this.V=[];this.o=new Map;this.K=new Map;this.j=new Set;this.fa=new Map}m(a){this.client=a}oa(a,b,c={}){P(()=>{[28631].includes(a)||(Kj(new Le("createClientScreen() called with a non-page VE",a)),a=83769);c.isHistoryNavigation||this.i.push({rootVe:a,key:c.key||""});this.F=[];this.G=[];c.Y?Gk(this,a,b,c):Hk(this,a,b,c)})()}ea(a,b=0){P(()=>{a.then(c=>{this.j.has(b)&&this.s&&this.s();
const d=X(b),e=ek(b);if(d&&e){var f;(null==c?0:null==(f=c.response)?0:f.trackingParams)&&rk(this.client,d,e,[Wj(c.response.trackingParams)]);var g;(null==c?0:null==(g=c.playerResponse)?0:g.trackingParams)&&rk(this.client,d,e,[Wj(c.playerResponse.trackingParams)])}})})()}pa(a,b,c){return P(()=>{const d=Wj(a);
this.h(d,b,c);return d})()}h(a,b,c=0){P(()=>{if(this.j.has(c))return this.F.push([a,
b]),!0;const d=X(c),e=b||ek(c);if(d&&e){if(Q("combine_ve_grafts")){const f=this.o.get(e.toString());f?f.push(a):(this.K.set(e.toString(),e),this.o.set(e.toString(),[a]));this.W||(this.W=pf(()=>{Jk(this,d)},1200))}else rk(this.client,d,e,[a]);
return!0}return!1})()}U(a,b,c=0){(c=X(c))&&vk(this.client,c,a,b)}l(a,b,c=0){if(!a)return!1;
c=X(c);if(!c)return!1;vk(this.client,c,Wj(a),b);return!0}T(a){const b=a.getScreenLayer&&a.getScreenLayer();a.visualElement?this.U(a.visualElement,void 0,b):(a=Fk(Bk(),a),this.l(a,void 0,b))}clickCommand(a,b,c=0){return this.l(a.clickTrackingParams,b,c)}visualElementStateChanged(a,b,c=0){0===c&&this.j.has(c)?this.G.push([a,b]):Ik(this,a,b,c)}};function Mk(){if(Q("use_core_sm"))return Lk.h||(Lk.h=new Lk),Lk.h;Nk.h||(Nk.h=new Nk);return Nk.h}
function Ok(a,b,c,d={}){a.j.add(d.layer||0);a.s=()=>{Pk(a,b,c,d);const e=ek(d.layer);if(e){for(const f of a.F)a.h(f[0],f[1]||e,d.layer);for(const f of a.G)Qk(a,f[0],f[1])}};
c||X(d.layer)||a.s();if(d.Y)for(const e of d.Y)a.ea(e,d.layer);else W(Error("Delayed screen needs a data promise."))}
function Pk(a,b,c,d={}){var e=void 0;d.layer||(d.layer=0);e=void 0!==d.ka?d.ka:d.layer;const f=X(e);e=ek(e);var g=c||e;let h;g&&(void 0!==d.parentCsn?h={clientScreenNonce:d.parentCsn,visualElement:g}:f&&"UNDEFINED_CSN"!==f&&(h={clientScreenNonce:f,visualElement:g}));let k;g=O("EVENT_ID");"UNDEFINED_CSN"===f&&g&&(k={servletData:{serializedServletEventId:g}});Q("combine_ve_grafts")&&f&&Rk(a,f);let l;try{l=qk(a.client,b,h,d.X,d.cttAuthInfo,k,d.Na,d.loggingExpectations)}catch(v){Oj(v,{Ya:b,rootVe:e,Va:c,
Ja:f,Ua:h,X:d.X});W(v);return}kk(l,b,d.layer,d.cttAuthInfo);f&&"UNDEFINED_CSN"!==f&&e&&!hk(f)&&uk(a.client,f,e,!0);a.i[a.i.length-1]&&!a.i[a.i.length-1].csn&&(a.i[a.i.length-1].csn=l||"");Dk();const m=ek(d.layer);f&&"UNDEFINED_CSN"!==f&&m&&(Q("web_mark_root_visible")||Q("music_web_mark_root_visible"))&&xk(l,m);a.j.delete(d.layer||0);a.s=void 0;let n;null==(n=a.fa.get(d.layer))||n.forEach((v,p)=>{v?a.h(p,v,d.layer):m&&a.h(p,m,d.layer)});
Sk(a)}
function Rk(a,b){if(void 0===b){const c=gk();for(let d=0;d<c.length;d++)void 0!==c[d]&&Rk(a,c[d])}else a.o.forEach((c,d)=>{(d=a.K.get(d))&&rk(a.client,b,d,c)}),a.o.clear(),a.K.clear(),a.W=void 0}
function Qk(a,b,c,d=0){const e=X(d);b=b||ek(d);e&&b&&wk(a.client,e,b,c)}
function Sk(a){for(var b=0;b<a.v.length;b++){var c=a.v[b];try{c()}catch(d){W(d)}}a.v.length=0;for(b=0;b<a.V.length;b++){c=a.V[b];try{c()}catch(d){W(d)}}}
var Nk=class{constructor(){this.F=[];this.G=[];this.i=[];this.v=[];this.V=[];this.o=new Map;this.K=new Map;this.j=new Set;this.fa=new Map}m(a){this.client=a}oa(a,b,c={}){P(()=>{[28631].includes(a)||(Kj(new Le("createClientScreen() called with a non-page VE",a)),a=83769);c.isHistoryNavigation||this.i.push({rootVe:a,key:c.key||""});this.F=[];this.G=[];c.Y?Ok(this,a,b,c):Pk(this,a,b,c)})()}ea(a,b=0){P(()=>{a.then(c=>{this.j.has(b)&&this.s&&this.s();
const d=X(b),e=ek(b);if(d&&e){var f;(null==c?0:null==(f=c.response)?0:f.trackingParams)&&rk(this.client,d,e,[Wj(c.response.trackingParams)]);var g;(null==c?0:null==(g=c.playerResponse)?0:g.trackingParams)&&rk(this.client,d,e,[Wj(c.playerResponse.trackingParams)])}})})()}pa(a,b,c){return P(()=>{const d=Wj(a);
this.h(d,b,c);return d})()}h(a,b,c=0){P(()=>{if(this.j.has(c))return this.F.push([a,
b]),!0;const d=X(c),e=b||ek(c);if(d&&e){if(Q("combine_ve_grafts")){const f=this.o.get(e.toString());f?f.push(a):(this.K.set(e.toString(),e),this.o.set(e.toString(),[a]));this.W||(this.W=pf(()=>{Rk(this,d)},1200))}else rk(this.client,d,e,[a]);
return!0}return!1})()}U(a,b,c=0){(c=X(c))&&vk(this.client,c,a,b)}l(a,b,c=0){if(!a)return!1;
c=X(c);if(!c)return!1;vk(this.client,c,Wj(a),b);return!0}T(a){const b=a.getScreenLayer&&a.getScreenLayer();a.visualElement?this.U(a.visualElement,void 0,b):(a=Fk(Bk(),a),this.l(a,void 0,b))}clickCommand(a,b,c=0){return this.l(a.clickTrackingParams,b,c)}visualElementStateChanged(a,b,c=0){0===c&&this.j.has(c)?this.G.push([a,b]):Qk(this,a,b,c)}};var Tk=class extends F{constructor(a){super(a)}};var Uk=class extends F{constructor(a){super(a,0,"yt.sw.adr")}};function Vk(a){return r(function*(){var b=yield t.fetch(a.i);if(200!==b.status)return Promise.reject("Server error when retrieving AmbientData");b=yield b.text();if(!b.startsWith(")]}'\n"))return Promise.reject("Incorrect JSPB formatting");a:{b=JSON.parse(b.substring(5));for(let c=0;c<b.length;c++)if("yt.sw.adr"===b[c][0]){b=new Uk(b[c]);break a}b=null}return b?b:Promise.reject("AmbientData missing from response")})}
function Wk(a=!1){const b=Xk.h;return r(function*(){if(a||!b.h)b.h=Vk(b).then(b.j).catch(c=>{delete b.h;W(c)});
return b.h})}
var Xk=class{constructor(){this.i=Yk("/sw.js_data")}j(a){const b=ec(a,Tk,2);if(b){var c=E(b,5);c&&(t.__SAPISID=c);null!=A(b,10)?N("EOM_VISITOR_DATA",E(b,10)):null!=A(b,7)&&N("VISITOR_DATA",E(b,7));null!=lc(b)&&(c=lc(b),N("SESSION_INDEX",String(null==c?0:c)));null!=A(b,8)&&N("DELEGATED_SESSION_ID",E(b,8));null!=A(b,11)&&N("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",E(b,11))}return a}};function Zk(a,b){b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds&&setTimeout(()=>{delete a.h[b.encryptedTokenJarContents]},1E3*Number(b.expirationSeconds)))}
var $k=class{constructor(){this.h={}}handleResponse(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");let c,d;b=(null==(c=b.L.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];let e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){for(const f of b)delete this.h[f.encryptedTokenJarContents];Zk(this,a)}}};function al(){var a=O("INNERTUBE_CONTEXT");if(!a)return W(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};a=wa(a);Q("web_no_tracking_params_in_shell_killswitch")||delete a.clickTracking;a.client||(a.client={});var b=a.client;b.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var c=gf();c?b.experimentsToken=c:delete b.experimentsToken;$k.h||($k.h=new $k);b=$k.h.h;c=[];let d=0;for(var e in b)c[d++]=b[e];a.request=Object.assign({},a.request,{consistencyTokenJars:c});a.user=
Object.assign({},a.user);if(e=O("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))a.user.serializedDelegationContext=e;return a}
;function bl(a){var b=a;if(a=O("INNERTUBE_HOST_OVERRIDE")){a=String(a);var c=String,d=b.match(Ma);b=d[5];var e=d[6];d=d[7];var f="";b&&(f+=b);e&&(f+="?"+e);d&&(f+="#"+d);b=a+c(f)}return b}
;var cl=class{};const dl={GET_DATASYNC_IDS:function(a){return()=>new a}(class extends cl{})};const el=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse"];function fl(a){var b={Sb:{}},c=hg();if(void 0!==qi.h){const d=qi.h;a=[b!==d.m,a!==d.l,c!==d.j,!1,!1,!1,void 0!==d.i];if(a.some(e=>e))throw new Le("InnerTubeTransportService is already initialized",a);
}else qi.h=new qi(b,a,c)}
function gl(a,b){return r(function*(){var c,d={sessionIndex:null==a?void 0:null==(c=a.ra)?void 0:c.sessionIndex};c=yield fd(jg(0,d));return Promise.resolve(Object.assign({},hl(b),c))})}
function il(a,b,c){return r(function*(){var d;if(null==b?0:null==(d=b.L)?0:d.context){const m=b.L.context;if("hybrid"===ff())yield[].reduce((n,v)=>n.then(()=>v.Zb(m)),Promise.resolve());
else for(const n of[])n.ac(m)}var e;if(null==(e=a.i)?0:e.hc(b.input,b.L))return yield a.i.Vb(b.input,b.L);var f;if((d=null==(f=b.config)?void 0:f.dc)&&a.h.has(d)&&Q("web_memoize_inflight_requests"))var g=a.h.get(d);else{f=JSON.stringify(b.L);let m;e=null!=(m=null==(g=b.Z)?void 0:g.headers)?m:{};b.Z=Object.assign({},b.Z,{headers:Object.assign({},e,c)});g=Object.assign({},b.Z);"POST"===b.Z.method&&(g=Object.assign({},g,{body:f}));g=a.l.fetch(b.input,g,b.config);d&&a.h.set(d,g)}g=yield g;var h;let k;
if(g&&"error"in g&&(null==(h=g)?0:null==(k=h.error)?0:k.details)){h=g.error.details;for(const m of h)(h=m["@type"])&&-1<el.indexOf(h)&&(delete m["@type"],g=m)}d&&a.h.has(d)&&a.h.delete(d);let l;!g&&(null==(l=a.i)?0:l.Rb(b.input,b.L))&&(g=yield a.i.Ub(b.input,b.L));return g||void 0})}
function jl(a,b,c){var d={ra:{identity:kg}};b.context||(b.context=al());return new H(e=>r(function*(){var f=bl(c);f=Qf(f)?"same-origin":"cors";if(a.j.bb){var g,h=null==d?void 0:null==(g=d.ra)?void 0:g.sessionIndex;g=jg(0,{sessionIndex:h});f=Object.assign({},hl(f),g)}else f=yield gl(d,f);g=bl(c);h={};O("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT")&&(null==f?0:f.Authorization)||(h.key=O("INNERTUBE_API_KEY"));Q("json_condensed_response")&&(h.prettyPrint="false");g=Pf(g,h||{},!1);h={method:"POST",
mode:Qf(g)?"same-origin":"cors",credentials:Qf(g)?"same-origin":"include"};var k={};const l={};for(const m of Object.keys(k))k[m]&&(l[m]=k[m]);0<Object.keys(l).length&&(h.headers=l);e(il(a,{input:g,Z:h,L:b,config:d},f))}))}
function hl(a){const b={"Content-Type":"application/json"};O("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=O("EOM_VISITOR_DATA"):O("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=O("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=O("LOGGED_IN",!1);"cors"!==a&&((a=O("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=O("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=O("CHROME_CONNECTED_HEADER"))&&(b["X-Youtube-Chrome-Connected"]=a),(a=O("DOMAIN_ADMIN_STATE"))&&
(b["X-Youtube-Domain-Admin-State"]=a));return b}
var qi=class{constructor(a,b,c){this.m=a;this.l=b;this.j=c;this.i=void 0;this.h=new Map;a.ma||(a.ma={});a.ma=Object.assign({},dl,a.ma)}};var pi=new mi;let kl;function ll(){if(!kl){const a=vi();fl({fetch:(b,c)=>fd(fetch(new Request(b,c)))});
oi(a);kl=a.resolve(pi)}return kl}
;function ml(a){return r(function*(){yield nl();Kj(a)})}
function ol(a){return r(function*(){yield nl();W(a)})}
function pl(a){r(function*(){var b=yield oh();b?yield Uh(a,b):(yield Wk(),b={timestamp:a.timestamp},b=a.appShellAssetLoadReport?{S:"appShellAssetLoadReport",payload:a.appShellAssetLoadReport,options:b}:a.clientError?{S:"clientError",payload:a.clientError,options:b}:void 0,b&&V(b.S,b.payload))})}
function nl(){return r(function*(){try{yield Wk()}catch(a){}})}
;const ql={granted:"GRANTED",denied:"DENIED",unknown:"UNKNOWN"},rl=RegExp("^(?:[a-z]+:)?//","i");function sl(a){var b=a.data;a=b.type;b=b.data;"notifications_register"===a?(M("IDToken",b),tl()):"notifications_check_registration"===a&&ul(b)}
function vl(){return self.clients.matchAll({type:"window",includeUncontrolled:!0}).then(a=>{if(a)for(const b of a)b.postMessage({type:"update_unseen_notifications_count_signal"})})}
function wl(a){const b=[];a.forEach(c=>{b.push({key:c.key,value:c.value})});
return b}
function xl(a){return r(function*(){const b=wl(a.payload.chrome.extraUrlParams),c={recipientId:a.recipientId,endpoint:a.payload.chrome.endpoint,extraUrlParams:b},d=Te(Ge);return yl().then(e=>jl(e,c,d).then(f=>{f.json().then(g=>g&&g.endpointUrl?zl(a,g.endpointUrl):Promise.resolve()).catch(g=>{ol(g);
Promise.reject(g)})}))})}
function Al(a,b){var c=X(8);if(null==c||!b)return a;a=rl.test(a)?new URL(a):new URL(a,self.registration.scope);a.searchParams.set("parentCsn",c);a.searchParams.set("parentTrackingParams",b);return a.toString()}
function zl(a,b){a.deviceId&&M("DeviceId",a.deviceId);a.timestampSec&&M("TimestampLowerBound",a.timestampSec);const c=a.payload.chrome,d=Mk();d.oa(28631,void 0,{layer:8});var e;const f=null==(e=c.postedEndpoint)?void 0:e.clickTrackingParams;e=c.title;const g={body:c.body,icon:c.iconUrl,data:{nav:Al(b,f),id:c.notificationId,attributionTag:c.attributionTag,clickEndpoint:c.clickEndpoint,postedEndpoint:c.postedEndpoint,clickTrackingParams:f,isDismissed:!0},tag:c.notificationTag||c.title+c.body+c.iconUrl,
requireInteraction:!0};return self.registration.showNotification(e,g).then(()=>{var h;(null==(h=g.data)?0:h.postedEndpoint)&&Bl(g.data.postedEndpoint);let k;if(null==(k=g.data)?0:k.clickTrackingParams)h={screenLayer:8,visualElement:d.pa(g.data.clickTrackingParams,void 0,8)},Ek(Bk(),h);Cl(a.displayCap)}).catch(()=>{})}
function Bl(a){if(!jf(a,Fe))return Promise.reject();const b={serializedRecordNotificationInteractionsRequest:jf(a,Fe).serializedInteractionsRequest},c=Te(He);return yl().then(d=>jl(d,b,c)).then(d=>d)}
function Cl(a){-1!==a&&self.registration.getNotifications().then(b=>{for(let e=0;e<b.length-a;e++){b[e].data.isDismissed=!1;b[e].close();let f;if(null==(f=b[e].data)?0:f.clickTrackingParams){let g;var c=Wj(null==(g=b[e].data)?void 0:g.clickTrackingParams),d={screenLayer:8,visualElement:c};const h=Yj(82046),k=Mk();k.h(h,c,8);c={screenLayer:8,visualElement:h};Ek(Bk(),c);k.T(c);Bk();P(Z().o).bind(Z())(d,void 0,8)}}})}
function ul(a){const b=[Dl(a),Pe("RegistrationTimestamp").then(El),Fl(),Gl(),Hl()];Promise.all(b).catch(()=>{M("IDToken",a);tl();return Promise.resolve()})}
function El(a){return 9E7>=Date.now()-(a||0)?Promise.resolve():Promise.reject()}
function Dl(a){return Pe("IDToken").then(b=>a===b?Promise.resolve():Promise.reject())}
function Fl(){return Pe("Permission").then(a=>Notification.permission===a?Promise.resolve():Promise.reject())}
function Gl(){return Pe("Endpoint").then(a=>Il().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Hl(){return Pe("application_server_key").then(a=>Jl().then(b=>a===b?Promise.resolve():Promise.reject()))}
function Kl(){var a=Notification.permission;if(ql[a])return ql[a]}
function tl(){M("RegistrationTimestamp",0);Promise.all([Il(),Ll(),Ml(),Jl()]).then(([a,b,c,d])=>{b=b?Je(b):null;c=c?Je(c):null;d=d?db(new Uint8Array(d),4):null;Nl(a,b,c,d)}).catch(()=>{Nl()})}
function Nl(a=null,b=null,c=null,d=null){Oe().then(e=>{e&&(M("Endpoint",a),M("P256dhKey",b),M("AuthKey",c),M("application_server_key",d),M("Permission",Notification.permission),Promise.all([Pe("DeviceId"),Pe("NotificationsDisabled")]).then(([f,g])=>{if(null!=f)var h=f;else{f=[];var k;h=h||Jd.length;for(k=0;256>k;k++)f[k]=Jd[0|Math.random()*h];h=f.join("")}Ol(h,null!=a?a:void 0,null!=b?b:void 0,null!=c?c:void 0,null!=d?d:void 0,null!=g?g:void 0)}))})}
function Ol(a,b,c,d,e,f){r(function*(){const g={notificationRegistration:{chromeRegistration:{deviceId:a,pushParams:{applicationServerKey:e,authKey:d,p256dhKey:c,browserEndpoint:b},notificationsDisabledInApp:f,permission:Kl()}}},h=Te(Ie);return yl().then(k=>jl(k,g,h).then(()=>{M("DeviceId",a);M("RegistrationTimestamp",Date.now());M("TimestampLowerBound",Date.now())},l=>{ml(l)}))})}
function Il(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.endpoint):Promise.resolve(null))}
function Ll(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("p256dh")):Promise.resolve(null))}
function Ml(){return self.registration.pushManager.getSubscription().then(a=>a&&a.getKey?Promise.resolve(a.getKey("auth")):Promise.resolve(null))}
function Jl(){return self.registration.pushManager.getSubscription().then(a=>a?Promise.resolve(a.options.applicationServerKey):Promise.resolve(null))}
function yl(){return r(function*(){try{return yield Wk(!0),ll()}catch(a){return yield ml(a),Promise.reject(a)}})}
;let Pl=self.location.origin+"/";function Yk(a){let b="undefined"!==typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope?Cd.registration.scope:Pl;b.endsWith("/")&&(b=b.slice(0,-1));return b+a}
;let Ql=void 0;function Rl(a){return r(function*(){Ql||(Ql=yield a.open("yt-appshell-assets"));return Ql})}
function Sl(a,b){return r(function*(){const c=yield Rl(a),d=b.map(e=>Tl(c,e));
return Promise.all(d)})}
function Ul(a,b){return r(function*(){let c;try{c=yield a.match(b,{cacheName:"yt-appshell-assets"})}catch(d){}return c})}
function Vl(a,b){return r(function*(){const c=yield Rl(a),d=(yield c.keys()).filter(e=>!b.includes(e.url)).map(e=>c.delete(e));
return Promise.all(d)})}
function Wl(a,b,c){return r(function*(){yield(yield Rl(a)).put(b,c)})}
function Xl(a,b){r(function*(){yield(yield Rl(a)).delete(b)})}
function Tl(a,b){return r(function*(){return(yield a.match(b))?Promise.resolve():a.add(b)})}
;var Yl=xh("yt-serviceworker-metadata",{R:{auth:{O:1},["resource-manifest-assets"]:{O:2}},da:!0,upgrade(a,b){b(1)&&Og(a,"resource-manifest-assets");b(2)&&Og(a,"auth")},version:2});let Zl=null;function $l(a){return eh(Yl(),a)}
function am(){return r(function*(){const a=yield oh();if(a)return bm.h||(bm.h=new bm(a)),bm.h})}
function cm(a,b){return r(function*(){yield U(yield $l(a.token),["resource-manifest-assets"],"readwrite",c=>{const d=c.objectStore("resource-manifest-assets"),e=Date.now();return T(d.h.put(b,e)).then(()=>{Zl=e;let f=!0;return Tg(d,{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},g=>f?(f=!1,g.advance(5)):d.delete(g.getKey()).then(()=>g.continue()))})})})}
function dm(a,b){return r(function*(){let c=!1,d=0;yield U(yield $l(a.token),["resource-manifest-assets"],"readonly",e=>Tg(e.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},f=>{if(f.N().includes(b))c=!0;else return d+=1,f.continue()}));
return c?d:-1})}
function em(a){return r(function*(){Zl||(yield U(yield $l(a.token),["resource-manifest-assets"],"readonly",b=>Tg(b.objectStore("resource-manifest-assets"),{query:IDBKeyRange.bound(0,Date.now()),direction:"prev"},c=>{Zl=c.getKey()})));
return Zl})}
var bm=class{constructor(a){this.token=a}};function fm(){return r(function*(){const a=yield oh();if(a)return gm.h||(gm.h=new gm(a)),gm.h})}
function hm(a,b){return r(function*(){yield Qg(yield $l(a.token),"auth",b,"shell_identifier_key")})}
function im(a){return r(function*(){return(yield(yield $l(a.token)).get("auth","shell_identifier_key"))||""})}
function jm(a){return r(function*(){yield(yield $l(a.token)).clear("auth")})}
var gm=class{constructor(a){this.token=a}};function km(){r(function*(){const a=yield fm();a&&(yield jm(a))})}
;var ic=class extends F{constructor(a){super(a)}},lm=[ic,1,Hc];var mm=class extends F{constructor(a){super(a)}};mm.B=[1];var nm=function(a){return(b,c)=>{a:{if(Hb.length){const f=Hb.pop();Db(f,c);f.h.init(b,void 0,void 0,c);b=f}else b=new Gb(b,c);try{var d=zc(a).h;var e=yc(a)(new d,b);break a}finally{d=b,d.h.clear(),d.l=-1,d.i=-1,100>Hb.length&&Hb.push(d)}e=void 0}return e}}([mm,
1,Ic,lm]);function om(a){return r(function*(){const b=a.headers.get("X-Resource-Manifest");return b?Promise.resolve(pm(b)):Promise.reject(Error("No resource manifest header"))})}
function pm(a){return hc(nm(decodeURIComponent(a))).reduce((b,c)=>{(c=E(c,1))&&b.push(c);return b},[])}
;function qm(a){return r(function*(){const b=yield Wk();if(b&&null!=A(b,3)){var c=yield fm();c&&(c=yield im(c),A(b,3)!==c&&(Xl(a.caches,a.h),km()))}})}
function rm(a){return r(function*(){let b,c;try{c=yield sm(a.i),b=yield om(c),yield Sl(a.caches,b)}catch(d){return Promise.reject(d)}try{yield tm(),yield Wl(a.caches,a.h,c)}catch(d){return Promise.reject(d)}if(b)try{yield um(a,b,a.h)}catch(d){}return Promise.resolve()})}
function vm(a){return r(function*(){yield qm(a);return rm(a)})}
function sm(a){return r(function*(){try{return yield t.fetch(new Request(a))}catch(b){return Promise.reject(b)}})}
function tm(){return r(function*(){var a=yield Wk();let b;a&&null!=A(a,3)&&(b=E(a,3));return b?(a=yield fm())?Promise.resolve(hm(a,b)):Promise.reject(Error("Could not get AuthMonitor instance")):Promise.reject(Error("Could not get datasync ID"))})}
function um(a,b,c){return r(function*(){const d=yield am();if(d)try{yield cm(d,b)}catch(e){yield ml(e)}b.push(c);try{yield Vl(a.caches,b)}catch(e){yield ml(e)}return Promise.resolve()})}
function wm(a,b){return r(function*(){return Ul(a.caches,b)})}
function xm(a){return r(function*(){return Ul(a.caches,a.h)})}
var ym=class{constructor(){var a=self.caches;let b=Yk("/app_shell");Q("service_worker_forward_exp_params")&&(b+=self.location.search);var c=Yk("/app_shell_home");this.caches=a;this.i=b;this.h=c}};var zm=class{constructor(){const a=this;this.stream=new ReadableStream({start(b){a.close=()=>void b.close();
a.h=c=>{const d=c.getReader();return d.read().then(function h({done:f,value:g}){if(f)return Promise.resolve();b.enqueue(g);return d.read().then(h)})};
a.i=()=>{const c=(new TextEncoder).encode("<script>if (window.fetchInitialData) { window.fetchInitialData(); } else { window.getInitialData = undefined; }\x3c/script>");b.enqueue(c)}}})}};function Am(a,b){return r(function*(){const c=b.request,d=yield wm(a.h,c.url);if(d)return pl({appShellAssetLoadReport:{assetPath:c.url,cacheHit:!0},timestamp:R()}),d;Bm(c);return Cm(b)})}
function Dm(a,b){return r(function*(){const c=yield Em(b);if(c.response&&(c.response.ok||"opaqueredirect"===c.response.type||429===c.response.status||303===c.response.status||300<=c.response.status&&400>c.response.status))return c.response;const d=yield xm(a.h);if(d)return Fm(a),Gm(d,b);Hm(a);return c.response?c.response:Promise.reject(c.error)})}
function Im(a,b){b=new URL(b);if(!a.config.qa.includes(b.pathname))return!1;if(!b.search)return!0;b=new URLSearchParams(b.search);for(const c of a.config.Ea)if(a=b.get(c.key),void 0===c.value||a===c.value)if(b.delete(c.key),!b.toString())return!0;return!1}
function Jm(a,b){return r(function*(){const c=yield xm(a.h);if(!c)return Hm(a),Cm(b);Fm(a);var d;a:{if(c.headers&&(d=c.headers.get("date"))&&(d=Date.parse(d),!isNaN(d))){d=Math.round(R()-d);break a}d=-1}if(!(-1<d&&7<=d/864E5))return Gm(c,b);d=yield Em(b);return d.response&&d.response.ok?d.response:Gm(c,b)})}
function Cm(a){return Promise.resolve(a.preloadResponse).then(b=>b&&!Km(b)?b:t.fetch(a.request))}
function Bm(a){const b={assetPath:a.url,cacheHit:!1};am().then(c=>{if(c){var d=em(c).then(e=>{e&&(b.currentAppBundleTimestampSec=String(Math.floor(e/1E3)))});
c=dm(c,a.url).then(e=>{b.appBundleVersionDiffCount=e});
Promise.all([d,c]).catch(e=>{ml(e)}).finally(()=>{pl({appShellAssetLoadReport:b,
timestamp:R()})})}else pl({appShellAssetLoadReport:b,
timestamp:R()})})}
function Fm(a){pl({appShellAssetLoadReport:{assetPath:a.h.h,cacheHit:!0},timestamp:R()})}
function Hm(a){pl({appShellAssetLoadReport:{assetPath:a.h.h,cacheHit:!1},timestamp:R()})}
function Gm(a,b){if(!Q("sw_nav_preload_pbj"))return a;const c=new zm,d=c.h(a.body);Promise.resolve(b.preloadResponse).then(e=>{if(!e||!Km(e))throw Error("no pbj preload response available");d.then(()=>c.h(e.body)).then(()=>void c.close())}).catch(()=>{d.then(()=>{c.i();
c.close()})});
return new Response(c.stream,{status:a.status,statusText:a.statusText,headers:a.headers})}
function Em(a){return r(function*(){try{return{response:yield Cm(a)}}catch(b){return{error:b}}})}
function Km(a){return"pbj"===a.headers.get("x-navigation-preload-response-type")}
var Tm=class{constructor(){var a=Lm;var b={Ia:Mm,Xa:Nm([Om,/\/signin/,/\/logout/]),qa:["/","/feed/downloads"],Ea:Pm([{key:"feature",value:"ytca"}]),Da:Qm(Q("kevlar_sw_app_wide_fallback")?Rm:Sm)};this.h=a;this.config=b}};const Um=/^\/$/,Sm=[Um,/^\/feed\/downloads$/],Rm=[Um,/^\/feed\/\w*/,/^\/results$/,/^\/playlist$/,/^\/watch$/,/^\/channel\/\w*/];function Qm(a){return new RegExp(a.map(b=>b.source).join("|"))}
const Vm=/^https:\/\/([\w-]*\.)*youtube\.com.*/;function Nm(a){a=Qm(a);return new RegExp(`${Vm.source}(${a.source})`)}
const Wm=Qm([/\.css$/,/\.js$/,/\.ico$/,/\/ytmweb\/_\/js\//,/\/ytmweb\/_\/ss\//,/\/kabuki\/_\/js\//,/\/kabuki\/_\/ss\//,/\/ytmainappweb\/_\/ss\//]),Mm=new RegExp(`${Vm.source}(${Wm.source})`),Om=/purge_shell=1/;function Pm(a=[]){const b=[];for(const c of td)b.push({key:c});for(const c of a)b.push(c);return b}
Nm([Om]);Pm();var Ym=class{constructor(){var a=Lm,b=Xm;this.h=self;this.i=a;this.m=b;this.v=Ke}init(){this.h.oninstall=this.o.bind(this);this.h.onactivate=this.j.bind(this);this.h.onfetch=this.l.bind(this);this.h.onmessage=this.s.bind(this)}o(a){this.h.skipWaiting();const b=vm(this.i).catch(c=>{ml(c);return Promise.resolve()});
a.waitUntil(b)}j(a){const b=[this.h.clients.claim()],c=this.h.registration;c.navigationPreload&&(b.push(c.navigationPreload.enable()),Q("sw_nav_preload_pbj")&&b.push(c.navigationPreload.setHeaderValue("pbj")));a.waitUntil(Promise.all(b))}l(a){const b=this;return r(function*(){var c=b.m,d=!!b.h.registration.navigationPreload;const e=a.request;if(c.config.Xa.test(e.url))Xk.h&&(delete Xk.h.h,t.__SAPISID=void 0,N("VISITOR_DATA",void 0),N("SESSION_INDEX",void 0),N("DELEGATED_SESSION_ID",void 0),N("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT",
void 0)),d=a.respondWith,c=c.h,Xl(c.caches,c.h),km(),c=Cm(a),d.call(a,c);else if(c.config.Ia.test(e.url))a.respondWith(Am(c,a));else if("navigate"===e.mode){const f=new URL(e.url),g=c.config.qa;(!Q("sw_nav_request_network_first")&&g.includes(f.pathname)?0:c.config.Da.test(f.pathname))?a.respondWith(Dm(c,a)):Im(c,e.url)?a.respondWith(Jm(c,a)):d&&a.respondWith(Cm(a))}})}s(a){const b=a.data;
this.v.includes(b.type)?sl(a):"refresh_shell"===b.type&&rm(this.i).catch(c=>{ml(c)})}};function Zm(){let a=w("ytglobal.storage_");a||(a=new $m,u("ytglobal.storage_",a));return a}
var $m=class{estimate(){return r(function*(){const a=navigator;let b;if(null==(b=a.storage)?0:b.estimate)return a.storage.estimate();let c;if(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)return an()})}};
function an(){const a=navigator;return new Promise((b,c)=>{let d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota((e,f)=>{b({usage:e,quota:f})},e=>{c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
u("ytglobal.storageClass_",$m);function bn(a,b){Zm().estimate().then(c=>{c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:cn(null==c?void 0:c.usage),deviceStorageQuotaMbytes:cn(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
class dn{constructor(){var a=en;this.handleError=fn;this.h=a;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",()=>{this.i=!0});
this.j=Math.random()<=ef("ytidb_transaction_ended_event_rate_limit_session",.2)}ba(a,b){switch(a){case "IDB_DATA_CORRUPTED":Q("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":Q("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":bn(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=ef("ytidb_transaction_ended_event_rate_limit_transaction",
.1)&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}}}function cn(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;ag(Yf(),{J:[{Ta:/Failed to fetch/,weight:500}],H:[]});var {handleError:fn=Jj,ba:en=V}={handleError:ol,ba:function(a,b){return r(function*(){yield nl();V(a,b)})}};
for(ng=new dn;0<mg.length;){const a=mg.shift();switch(a.type){case "ERROR":ng.handleError(a.payload);break;case "EVENT":ng.ba(a.eventType,a.payload)}}Xk.h=new Xk;self.onnotificationclick=function(a){a.notification.close();const b=a.notification.data;b.isDismissed=!1;const c=self.clients.matchAll({type:"window",includeUncontrolled:!0});c.then(d=>{a:{var e=b.nav;for(const f of d)if(f.url===e){f.focus();break a}self.clients.openWindow(e)}});
a.waitUntil(c);a.waitUntil(Bl(b.clickEndpoint))};
self.onnotificationclose=function(a){var b=a.notification.data;if(null==b?0:b.clickTrackingParams){var c=Wj(b.clickTrackingParams);a={screenLayer:8,visualElement:c};if(b.isDismissed){const d=Yj(74726);b=Mk();b.h(d,c,8);c={screenLayer:8,visualElement:d};Ek(Bk(),c);b.T(c)}Bk();P(Z().o).bind(Z())(a,void 0,8)}};
self.onpush=function(a){a.waitUntil(Pe("NotificationsDisabled").then(b=>{if(b)return Promise.resolve();if(a.data&&a.data.text().length)try{return xl(a.data.json())}catch(c){return Promise.resolve(c.message)}return Promise.resolve()}));
a.waitUntil(vl())};
self.onpushsubscriptionchange=function(){tl()};
const Lm=new ym,Xm=new Tm;(new Ym).init();
