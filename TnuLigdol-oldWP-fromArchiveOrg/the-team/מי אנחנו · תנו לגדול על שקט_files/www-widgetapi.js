var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function v(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}})}return a});
function ia(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},ra={};try{ra.__proto__=oa;na=ra.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=ma;
function y(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.na=b.prototype}
function ta(){this.H=!1;this.j=null;this.h=void 0;this.g=1;this.u=this.o=0;this.S=this.i=null}
function ua(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
ta.prototype.M=function(a){this.h=a};
function va(a,b){a.i={mc:b,xc:!0};a.g=a.o||a.u}
ta.prototype.return=function(a){this.i={return:a};this.g=this.u};
function A(a,b,c){a.g=c;return{value:b}}
ta.prototype.B=function(a){this.g=a};
function wa(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function xa(a){a.o=0;var b=a.i.mc;a.i=null;return b}
function ya(a){var b=a.S.splice(0)[0];(b=a.i=a.i||b)?b.xc?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function za(a){this.g=new ta;this.h=a}
function Aa(a,b){ua(a.g);var c=a.g.j;if(c)return Ba(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ca(a)}
function Ba(a,b,c,d){try{var e=b.call(a.g.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.H=!1,e;var f=e.value}catch(g){return a.g.j=null,va(a.g,g),Ca(a)}a.g.j=null;d.call(a.g,f);return Ca(a)}
function Ca(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.H=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,va(a.g,c)}a.g.H=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.xc)throw b.mc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Da(a){this.next=function(b){ua(a.g);a.g.j?b=Ba(a,a.g.j.next,b,a.g.M):(a.g.M(b),b=Ca(a));return b};
this.throw=function(b){ua(a.g);a.g.j?b=Ba(a,a.g.j["throw"],b,a.g.M):(va(a.g,b),b=Ca(a));return b};
this.return=function(b){return Aa(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ea(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Ea(new Da(new za(a)))}
function Fa(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.H=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=da.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.eb),reject:g(this.o)}};
b.prototype.eb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.gb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.ya(g):this.u(g)}};
b.prototype.ya=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.ub(h,g):this.u(g)};
b.prototype.o=function(g){this.M(2,g)};
b.prototype.u=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.fb();this.S()};
b.prototype.fb=function(){var g=this;e(function(){if(g.oa()){var h=da.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.oa=function(){if(this.H)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.S=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.gb=function(g){var h=this.j();g.xb(h.resolve,h.reject)};
b.prototype.ub=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,p){return"function"==typeof q?function(t){try{l(q(t))}catch(u){m(u)}}:p}
var l,m,n=new b(function(q,p){l=q;m=p});
this.xb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.xb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).xb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(t){return function(u){q[t]=u;p--;0==p&&l(q)}}
var q=[],p=0;do q.push(void 0),p++,d(k.value).xb(n(q.length-1),m),k=h.next();while(!k.done)})};
return b});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ia(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ja(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ga(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||sa});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ga(this,b,"includes").indexOf(b,c||0)}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
v("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var D=this||self;function Ja(a,b){var c=E("CLOSURE_FLAGS");a=c&&c[a];return null!=a?a:b}
function E(a,b){a=a.split(".");b=b||D;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Ma(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Na(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Oa(a){return Object.prototype.hasOwnProperty.call(a,Pa)&&a[Pa]||(a[Pa]=++Qa)}
var Pa="closure_uid_"+(1E9*Math.random()>>>0),Qa=0;function Ra(a,b,c){return a.call.apply(a.bind,arguments)}
function Sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ta(a,b,c){Ta=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ra:Sa;return Ta.apply(null,arguments)}
function Va(){return Date.now()}
function F(a,b){a=a.split(".");var c=D;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Wa(a,b){function c(){}
c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.pe=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Xa(a){return a}
;function Ya(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Wa(Ya,Error);Ya.prototype.name="CustomError";function Za(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function $a(){}
function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},db=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function eb(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function ib(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function jb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ma(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function kb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function lb(a){var b=mb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function nb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ob(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ob(a[c]);return b}
var pb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function qb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<pb.length;f++)c=pb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var rb;function sb(){if(void 0===rb){var a=null,b=D.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Xa,createScript:Xa,createScriptURL:Xa})}catch(c){D.console&&D.console.error(c.message)}rb=a}else rb=a}return rb}
;function tb(){}
function ub(a){return new tb(vb,a)}
var vb={};ub("");function wb(a){this.g=a}
wb.prototype.toString=function(){return this.g+""};
var xb={};var yb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},zb=/&/g,Ab=/</g,Bb=/>/g,Cb=/"/g,Db=/'/g,Eb=/\x00/g,Fb=/[\x00&<>"']/;function Gb(a){this.g=a}
Gb.prototype.toString=function(){return this.g.toString()};
var Hb={},Ib=new Gb("about:invalid#zClosurez",Hb);var Jb=Ja(610401301,!1),Kb=Ja(572417392,Ja(1,!0));function Lb(){var a=D.navigator;return a&&(a=a.userAgent)?a:""}
var Mb,Nb=D.navigator;Mb=Nb?Nb.userAgentData||null:null;function Ob(a){return Jb?Mb?Mb.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function G(a){return-1!=Lb().indexOf(a)}
;function Pb(){return Jb?!!Mb&&0<Mb.brands.length:!1}
function Vb(){return Pb()?!1:G("Trident")||G("MSIE")}
function Wb(){return Pb()?Ob("Chromium"):(G("Chrome")||G("CriOS"))&&!(Pb()?0:G("Edge"))||G("Silk")}
;function Xb(a){this.g=a}
Xb.prototype.toString=function(){return this.g.toString()};function Yb(a){Fb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(zb,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Ab,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Bb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Cb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Db,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Eb,"&#0;")));return a}
;var Zb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $b(a){return a?decodeURI(a):a}
function ac(a){return $b(a.match(Zb)[3]||null)}
function bc(a){var b=a.match(Zb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function cc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)cc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function dc(a){var b=[],c;for(c in a)cc(c,a[c],b);return b.join("&")}
var ec=/#|$/;function fc(a,b){var c=a.search(ec);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function gc(a){D.setTimeout(function(){throw a;},0)}
;function hc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function ic(a){ic[" "](a);return a}
ic[" "]=function(){};var jc=Pb()?!1:G("Opera"),kc=Vb(),lc=G("Edge"),mc=G("Gecko")&&!(-1!=Lb().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),nc=-1!=Lb().toLowerCase().indexOf("webkit")&&!G("Edge");function oc(){var a=D.document;return a?a.documentMode:void 0}
var pc;a:{var qc="",rc=function(){var a=Lb();if(mc)return/rv:([^\);]+)(\)|;)/.exec(a);if(lc)return/Edge\/([\d\.]+)/.exec(a);if(kc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(nc)return/WebKit\/(\S+)/.exec(a);if(jc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
rc&&(qc=rc?rc[1]:"");if(kc){var sc=oc();if(null!=sc&&sc>parseFloat(qc)){pc=String(sc);break a}}pc=qc}var tc=pc,uc;if(D.document&&kc){var vc=oc();uc=vc?vc:parseInt(tc,10)||void 0}else uc=void 0;var Ac=uc;var Bc=hc()||G("iPod"),Cc=G("iPad");!G("Android")||Wb();Wb();var Dc=G("Safari")&&!(Wb()||(Pb()?0:G("Coast"))||(Pb()?0:G("Opera"))||(Pb()?0:G("Edge"))||(Pb()?Ob("Microsoft Edge"):G("Edg/"))||(Pb()?Ob("Opera"):G("OPR"))||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(hc()||G("iPad")||G("iPod"));var Ec={},Fc=null;
function Gc(a,b){Ma(a);void 0===b&&(b=0);if(!Fc){Fc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ec[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Fc[h]&&(Fc[h]=g)}}}b=Ec[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Hc="undefined"!==typeof Uint8Array,Ic=!kc&&"function"===typeof btoa;function Jc(){return"function"===typeof BigInt}
var Kc=!Kb,Lc=!Kb;var Mc=0,Nc=0;function Oc(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=w(Pc(c,a)),b=c.next().value,a=c.next().value,c=b);Mc=c>>>0;Nc=a>>>0}
function Qc(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Jc()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+Rc(c)+Rc(a));return c}
function Rc(a){a=String(a);return"0000000".slice(a.length)+a}
function Sc(){var a=Mc,b=Nc;b&2147483648?Jc()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=w(Pc(a,b)),a=b.next().value,b=b.next().value,a="-"+Qc(a,b)):a=Qc(a,b);return a}
function Pc(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function Tc(a){return Array.prototype.slice.call(a)}
;var Uc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({be:1,Zd:2,Yd:4,ee:8,de:16,ce:32,Pd:64,ge:128,Wd:256,Vd:512,ae:1024,Td:2048,fe:4096,Ud:8192})));var Vc=Uc?function(a,b){a[Uc]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Wc(a){var b=H(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Tc(a)),Xc(a,b|1))}
var Yc=Uc?function(a,b){a[Uc]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)};
function Zc(a,b,c){return c?a|b:a&~b}
var H=Uc?function(a){return a[Uc]|0}:function(a){return a.ga|0},$c=Uc?function(a){return a[Uc]}:function(a){return a.ga},Xc=Uc?function(a,b){a[Uc]=b}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function ad(){var a=[];Vc(a,1);return a}
function bd(a,b){Xc(b,(a|0)&-14591)}
function cd(a,b){Xc(b,(a|34)&-14557)}
function dd(a){a=a>>14&1023;return 0===a?536870912:a}
;var ed={},fd={};function gd(a){return!(!a||"object"!==typeof a||a.te!==fd)}
function hd(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var id,jd=!Kb;function kd(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=H(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;Xc(a,d|1);return!0}
var ld,md=[];Xc(md,55);ld=Object.freeze(md);function nd(a){if(a&2)throw Error();}
;function rd(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function sd(){var a=Error();rd(a,"incident");gc(a)}
function td(a){a=Error(a);rd(a,"warning");return a}
;function ud(a){return a.displayName||a.name||"unknown type name"}
function vd(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ka(a)+": "+a);return!!a}
var wd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function xd(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:wd.test(a)}
function yd(a,b){b=!!b;if(!xd(a))throw td("int64");if("string"===typeof a){if(xd(a),b){var c=Math.trunc(Number(a));if(Number.isSafeInteger(c))a=String(c);else if(c=a.indexOf("."),-1!==c&&(a=a.substring(0,c)),b){if(16>a.length)Oc(Number(a));else if(Jc())a=BigInt(a),Mc=Number(a&BigInt(4294967295))>>>0,Nc=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);Nc=Mc=0;c=a.length;for(var d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),Nc*=1E6,Mc=1E6*Mc+d,4294967296<=Mc&&(Nc+=Math.trunc(Mc/
4294967296),Nc>>>=0,Mc>>>=0);b&&(b=w(Pc(Mc,Nc)),a=b.next().value,b=b.next().value,Mc=a,Nc=b)}a=Sc()}}}else b?(xd(a),b?(a=Math.trunc(a),!b||Number.isSafeInteger(a)?a=String(a):(Oc(a),a=Sc())):a=String(a)):xd(a);return a}
function zd(a){return null==a?a:yd(a)}
function Ad(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Bd(a){return null==a||"string"===typeof a?a:void 0}
function Cd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ud(b)+" but got "+(a&&ud(a.constructor)));return a}
function Dd(a,b,c){if(null!=a&&"object"===typeof a&&a.Wb===ed)return a;if(Array.isArray(a)){var d=H(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Xc(a,e);return new b(a)}}
;var Ed;function I(a,b,c){null==a&&(a=Ed);Ed=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=H(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(hd(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(Fd(c,b,g),e=1023);d=d&-16760833|(e&1023)<<14;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(Fd(c,g,{}),d|=256,b=1023),d=d&-16760833|(b&1023)<<14)}}Xc(a,d);return a}
function Fd(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function Gd(a,b){return Hd(b)}
function Hd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a){if(Array.isArray(a))return jd||!kd(a,void 0,9999)?a:void 0;if(Hc&&null!=a&&a instanceof Uint8Array){if(Ic){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Gc(a);return a}}}return a}
;function Id(a,b,c){a=Tc(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Jd(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&H(a)&1?void 0:f&&H(a)&2?a:Kd(a,b,c,void 0!==d,e,f);else if(hd(a)){var g={},h;for(h in a)g[h]=Jd(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function Kd(a,b,c,d,e,f){var g=d||c?H(a):0;d=d?!!(g&32):void 0;a=Tc(a);for(var h=0;h<a.length;h++)a[h]=Jd(a[h],b,c,d,e,f);c&&c(g,a);return a}
function Ld(a){return a.Wb===ed?a.toJSON():Hd(a)}
;function Md(a,b,c){c=void 0===c?cd:c;if(null!=a){if(Hc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=H(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?(Xc(a,(d|34)&-12293),a):Kd(a,Md,d&4?cd:c,!0,!1,!0)}a.Wb===ed&&(c=a.s,d=$c(c),a=d&2?a:Nd(a,c,d,!0));return a}}
function Nd(a,b,c,d){a=a.constructor;b=Od(b,c,d);H(b);Ed=b;b=new a(b);Ed=void 0;return b}
function Od(a,b,c){var d=c||b&2?cd:bd,e=!!(b&32);a=Id(a,b,function(f){return Md(f,e,d)});
Vc(a,32|(c?2:0));return a}
;Object.freeze({});function Pd(a,b){a=a.s;return Qd(a,$c(a),b)}
function Qd(a,b,c,d){if(-1===c)return null;if(c>=dd(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function Rd(a,b,c){var d=a.s,e=$c(d);nd(e);Sd(d,e,b,c);return a}
function Sd(a,b,c,d,e){hd(d);var f=dd(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return e;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Xc(a,e);return e}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Td(a,b,c,d){var e=b&2,f=Qd(a,b,c);Array.isArray(f)||(f=ld);var g=!(d&2);d=!(d&1);var h=!!(b&32),k=H(f);0!==k||!h||e||g?k&1||(k|=1,Xc(f,k)):(k|=33,Xc(f,k));e?(a=!1,k&2||(Vc(f,34),a=!!(4&k)),(d||a)&&Object.freeze(f)):(e=!!(2&k)||!!(2048&k),d&&e?(f=Tc(f),d=1,h&&!g&&(d|=32),Xc(f,d),Sd(a,b,c,f)):g&&k&32&&!e&&Yc(f,32));return f}
function Ud(a,b,c,d){a=a.s;var e=$c(a);nd(e);(c=Vd(a,e,c))&&c!==b&&null!=d&&(e=Sd(a,e,c));Sd(a,e,b,d)}
function Wd(a,b,c){a=a.s;return Vd(a,$c(a),b)===c?c:-1}
function Vd(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=Qd(a,b,f)&&(0!==d&&(b=Sd(a,b,d)),d=f)}return d}
function Xd(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=$c(e),g=Qd(e,f,c,d);b=Dd(g,b,f);b!==g&&null!=b&&Sd(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=$c(a);if(!(f&2)){g=e;b=g.s;var h=$c(b);g=h&2?Nd(g,b,h,!1):g;g!==e&&(e=g,Sd(a,f,c,e,d))}return e}
function J(a,b,c,d){null!=d?Cd(d,b):d=void 0;return Rd(a,c,d)}
function Yd(a,b,c,d,e){null!=e?Cd(e,b):e=void 0;Ud(a,c,d,e)}
function Zd(a,b,c){a=Zc(a,2,!!(2&b));a=Zc(a,32,!!(32&b)&&c);return a=Zc(a,2048,!1)}
function $d(a,b,c,d){a=a.s;var e=$c(a);nd(e);var f=!!f;var g=!!(2&e)&&!0,h=Td(a,e,b,3);e=$c(a);var k=H(h),l=!!(2&k),m=!!(4&k),n=l&&m||!!(2048&k);if(!m){m=h;var q=e,p=!!(2&k);p&&(q=Zc(q,2,!0));for(var t=!p,u=!0,z=0,C=0;z<m.length;z++){var P=Dd(m[z],c,q);if(P instanceof c){if(!p){var Q=!!(H(P.s)&2);t&&(t=!Q);u&&(u=Q)}m[C++]=P}}C<z&&(m.length=C);k=Zc(k,4,!0);k=Zc(k,16,u);k=Zc(k,8,t);Xc(m,k);l&&!g&&(Object.freeze(h),n=!0)}g=k;n||(f||(k=Zc(k,32,!1)),k!==g&&Xc(h,k));n&&(h=Tc(h),k=Zd(k,e,f),Xc(h,k),Sd(a,
e,b,h));b=h;c=null!=d?Cd(d,c):new c;b.push(c);H(c.s)&2?Yc(b,8):Yc(b,16)}
function ae(a,b){var c=void 0===c?"":c;a=Bd(Pd(a,b));return null!=a?a:c}
function be(a,b){b=Wd(a,ce,b);return Bd(Pd(a,b))}
function de(a,b,c){if(null!=c){if("number"!==typeof c)throw td("int32");Number.isFinite(c)||sd()}Rd(a,b,c)}
function K(a,b,c){return Rd(a,b,Ad(c))}
function ee(a,b,c){null!=c&&(Number.isFinite(c)||sd());return Rd(a,b,c)}
;function L(a,b,c){this.s=I(a,b,c)}
L.prototype.toJSON=function(){if(id)var a=fe(this,this.s,!1);else a=Kd(this.s,Ld,void 0,void 0,!1,!1),a=fe(this,a,!0);return a};
function ge(a){id=!0;try{return JSON.stringify(a.toJSON(),Gd)}finally{id=!1}}
L.prototype.clone=function(){var a=this.s;return Nd(this,a,$c(a),!1)};
L.prototype.Wb=ed;L.prototype.toString=function(){return fe(this,this.s,!1).toString()};
function fe(a,b,c){var d=a.constructor.ma,e=$c(c?a.s:b),f=dd(e),g=!1;if(d&&jd){if(!c){b=Tc(b);var h;if(b.length&&hd(h=b[b.length-1]))for(g=0;g<d.length;g++)if(d[g]>=f){Object.assign(b[b.length-1]={},h);break}g=!0}f=b;c=!c;h=$c(a.s);a=dd(h);h=+!!(h&512)-1;for(var k,l,m=0;m<d.length;m++)if(l=d[m],l<a){l+=h;var n=f[l];null==n?f[l]=c?ld:ad():c&&n!==ld&&Wc(n)}else k||(n=void 0,f.length&&hd(n=f[f.length-1])?k=n:f.push(k={})),n=k[l],null==k[l]?k[l]=c?ld:ad():c&&n!==ld&&Wc(n)}k=b.length;if(!k)return b;var q;
if(hd(f=b[k-1])){a:{var p=f;c={};a=!1;for(var t in p){h=p[t];if(Array.isArray(h)){m=h;if(!Lc&&kd(h,d,+t)||!Kc&&gd(h)&&0===h.size)h=null;h!=m&&(a=!0)}null!=h?c[t]=h:a=!0}if(a){for(var u in c){p=c;break a}p=null}}p!=f&&(q=!0);k--}for(e=+!!(e&512)-1;0<k;k--){t=k-1;f=b[t];if(!(null==f||!Lc&&kd(f,d,t-e)||!Kc&&gd(f)&&0===f.size))break;var z=!0}if(!q&&!z)return b;var C;g?C=b:C=Array.prototype.slice.call(b,0,k);b=C;g&&(b.length=k);p&&b.push(p);return b}
;var he=window;ub("csi.gstatic.com");ub("googleads.g.doubleclick.net");ub("partner.googleadservices.com");ub("pubads.g.doubleclick.net");ub("securepubads.g.doubleclick.net");ub("tpc.googlesyndication.com");function ie(a,b){this.width=a;this.height=b}
r=ie.prototype;r.clone=function(){return new ie(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.Qb=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function je(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function ke(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function le(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||D.$googDebugFname||b}catch(g){e="Not available",c=!0}b=me(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,ne[c])c=ne[c];else{c=String(c);if(!ne[c]){var f=/function\s+([^\(]+)/m.exec(c);ne[c]=f?f[1]:"[Anonymous]"}c=ne[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function me(a,b){b||(b={});b[oe(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[oe(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=me(a,b));return c}
function oe(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var ne={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var pe="function"===typeof URL;function qe(){throw Error("unknown trace type");}
;var re={Sd:0,Xd:1,Qd:2,Rd:3,0:"FORMATTED_HTML_CONTENT",1:"HTML_FORMATTED_CONTENT",2:"EMBEDDED_INTERNAL_CONTENT",3:"EMBEDDED_TRUSTED_EXTERNAL_CONTENT"};function se(a,b){b=Error.call(this,a+" cannot be used with intent "+re[b]);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.type=a;this.name="TypeCannotBeUsedWithIntentError"}
y(se,Error);
function te(a,b){a.removeAttribute("srcdoc");if(b instanceof wb)throw new se("TrustedResourceUrl",3);var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Gb)b instanceof Gb&&b.constructor===Gb?b=b.g:(Ka(b),b="type_error:SafeUrl");else{b:if(pe){try{var e=new URL(b)}catch(f){c="https:";
break b}c=e.protocol}else c:{c=document.createElement("a");try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function ue(a){this.nd=a}
function ve(a){return new ue(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var we=[ve("data"),ve("http"),ve("https"),ve("mailto"),ve("ftp"),new ue(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function xe(a,b){b=void 0===b?we:b;if(a instanceof Gb)return a;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof ue&&d.nd(a))return new Gb(a,Hb)}}
function ye(a){var b=void 0===b?we:b;return xe(a,b)||Ib}
;function ze(a){var b=Ae;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Be(){var a=[];ze(function(b){a.push(b)});
return a}
var Ae={Ed:"allow-forms",Fd:"allow-modals",Gd:"allow-orientation-lock",Hd:"allow-pointer-lock",Id:"allow-popups",Jd:"allow-popups-to-escape-sandbox",Kd:"allow-presentation",Ld:"allow-same-origin",Md:"allow-scripts",Nd:"allow-top-navigation",Od:"allow-top-navigation-by-user-activation"},Ce=ab(function(){return Be()});
function De(){var a=Ee(),b={};db(Ce(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Ee(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Fe=(new Date).getTime();function Ge(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function He(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var t=e[1],u=e[2],z=e[3],C=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var P=z^t&(u^z);var Q=1518500249}else P=t^u^z,Q=1859775393;else 60>p?(P=t&u|z&(t|u),Q=2400959708):(P=t^u^z,Q=3395469782);P=((n<<5|n>>>27)&4294967295)+P+C+Q+q[p]&4294967295;C=z;z=u;u=(t<<30|t>>>2)&4294967295;t=n;n=P}e[0]=e[0]+n&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+C&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],t=0,u=n.length;t<u;++t)p.push(n.charCodeAt(t));n=p}q||(q=n.length);p=0;if(0==l)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var t=24;0<=t;t-=8)n[q++]=e[p]>>t&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Wc:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function Ie(a,b,c){var d=String(D.location.href);return d&&a&&b?[b,Je(Ge(d),a,c||null)].join(" "):null}
function Je(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],db(d,function(h){e.push(h)}),Ke(e.join(" "));
var f=[],g=[];db(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];db(d,function(h){e.push(h)});
a=Ke(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ke(a){var b=He();b.update(a);return b.Wc().toLowerCase()}
;var Oe={};function Pe(a){this.g=a||{cookie:""}}
r=Pe.prototype;r.isEnabled=function(){if(!D.navigator.cookieEnabled)return!1;if(!this.Qb())return!0;this.set("TESTCOOKIESENABLED","1",{Tb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ye;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Tb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=yb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Tb:0,path:b,domain:c});return d};
r.Qb=function(){return!this.g.cookie};
r.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=yb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Qe=new Pe("undefined"==typeof document?null:document);function Re(a){return!!Oe.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Se(a,b,c,d){(a=D[a])||"undefined"===typeof document||(a=(new Pe(document)).get(b));return a?Ie(a,c,d):null}
function Te(a){var b=void 0===b?!1:b;var c=Ge(String(D.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=D.__SAPISID||D.__APISID||D.__3PSAPISID||D.__OVERRIDE_SID;Re(e)&&(f=f||D.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new Pe(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");Re(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
D.__SAPISID:D.__APISID,e||"undefined"===typeof document||(e=new Pe(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Ie(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Re(b)&&((b=Se("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Se("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var Ue="undefined"!==typeof TextEncoder?new TextEncoder:null,Ve=Ue?function(a){return Ue.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function We(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Xe(){this.Ha=this.Ha;this.oa=this.oa}
Xe.prototype.Ha=!1;Xe.prototype.dispose=function(){this.Ha||(this.Ha=!0,this.sa())};
Xe.prototype.sa=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()};function Ye(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Ye.prototype.stopPropagation=function(){this.i=!0};
Ye.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ze=function(){if(!D.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
D.addEventListener("test",c,b);D.removeEventListener("test",c,b)}catch(d){}return a}();function $e(a,b){Ye.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Wa($e,Ye);var af={2:"touch",3:"pen",4:"mouse"};
$e.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(mc){a:{try{ic(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:af[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&$e.na.preventDefault.call(this)};
$e.prototype.stopPropagation=function(){$e.na.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
$e.prototype.preventDefault=function(){$e.na.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var bf="closure_listenable_"+(1E6*Math.random()|0);var cf=0;function df(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Bb=e;this.key=++cf;this.rb=this.wb=!1}
function ef(a){a.rb=!0;a.listener=null;a.proxy=null;a.src=null;a.Bb=null}
;function ff(a){this.src=a;this.listeners={};this.g=0}
ff.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=gf(a,b,d,e);-1<g?(b=a[g],c||(b.wb=!1)):(b=new df(b,this.src,f,!!d,e),b.wb=c,a.push(b));return b};
ff.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=gf(e,b,c,d);return-1<b?(ef(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function hf(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(ef(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function gf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.rb&&f.listener==b&&f.capture==!!c&&f.Bb==d)return e}return-1}
;var jf="closure_lm_"+(1E6*Math.random()|0),kf={},lf=0;function mf(a,b,c,d,e){if(d&&d.once)nf(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)mf(a,b[f],c,d,e);else c=of(c),a&&a[bf]?a.La(b,c,Na(d)?!!d.capture:!!d,e):pf(a,b,c,!1,d,e)}
function pf(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Na(e)?!!e.capture:!!e,h=qf(a);h||(a[jf]=h=new ff(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=rf();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ze||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(sf(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");lf++}}
function rf(){function a(c){return b.call(a.src,a.listener,c)}
var b=tf;return a}
function nf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)nf(a,b[f],c,d,e);else c=of(c),a&&a[bf]?a.g.add(String(b),c,!0,Na(d)?!!d.capture:!!d,e):pf(a,b,c,!0,d,e)}
function uf(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)uf(a,b[f],c,d,e);else(d=Na(d)?!!d.capture:!!d,c=of(c),a&&a[bf])?a.g.remove(String(b),c,d,e):a&&(a=qf(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=gf(b,c,d,e)),(c=-1<a?b[a]:null)&&vf(c))}
function vf(a){if("number"!==typeof a&&a&&!a.rb){var b=a.src;if(b&&b[bf])hf(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(sf(c),d):b.addListener&&b.removeListener&&b.removeListener(d);lf--;(c=qf(b))?(hf(c,a),0==c.g&&(c.src=null,b[jf]=null)):ef(a)}}}
function sf(a){return a in kf?kf[a]:kf[a]="on"+a}
function tf(a,b){if(a.rb)a=!0;else{b=new $e(b,this);var c=a.listener,d=a.Bb||a.src;a.wb&&vf(a);a=c.call(d,b)}return a}
function qf(a){a=a[jf];return a instanceof ff?a:null}
var wf="__closure_events_fn_"+(1E9*Math.random()>>>0);function of(a){if("function"===typeof a)return a;a[wf]||(a[wf]=function(b){return a.handleEvent(b)});
return a[wf]}
;function xf(){Xe.call(this);this.g=new ff(this);this.M=this;this.u=null}
Wa(xf,Xe);xf.prototype[bf]=!0;xf.prototype.addEventListener=function(a,b,c,d){mf(this,a,b,c,d)};
xf.prototype.removeEventListener=function(a,b,c,d){uf(this,a,b,c,d)};
function yf(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.M;c=b.type||b;"string"===typeof b?b=new Ye(b,a):b instanceof Ye?b.target=b.target||a:(e=b,b=new Ye(c,a),qb(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=zf(g,c,!0,b)&&e}b.i||(g=b.g=a,e=zf(g,c,!0,b)&&e,b.i||(e=zf(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=zf(g,c,!1,b)&&e}
xf.prototype.sa=function(){xf.na.sa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ef(d[e]);delete a.listeners[c];a.g--}}this.u=null};
xf.prototype.La=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function zf(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.rb&&g.capture==c){var h=g.listener,k=g.Bb||g.src;g.wb&&hf(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Af(a){xf.call(this);var b=this;this.H=this.i=0;this.ha=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.j=function(){return B(function(e){return A(e,Bf(b),0)})};
window.addEventListener("offline",this.j);window.addEventListener("online",this.j);this.H||Cf(this)}
y(Af,xf);function Df(){var a=Ef;Af.g||(Af.g=new Af(a));return Af.g}
Af.prototype.dispose=function(){window.removeEventListener("offline",this.j);window.removeEventListener("online",this.j);this.ha.ba(this.H);delete Af.g};
Af.prototype.ca=function(){return this.h};
function Cf(a){a.H=a.ha.qa(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):A(c,Bf(a),3):A(c,Bf(a),3);Cf(a);c.g=0})},3E4)}
function Bf(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,wa(h,2,3),d&&(a.i=a.ha.qa(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.S=[h.i];h.o=0;h.u=0;a.o=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?yf(a,"networkstatus-online"):yf(a,"networkstatus-offline"));c(g);ya(h);break;case 2:xa(h),g=!1,h.B(3)}})})}
;function Ff(){this.data=[];this.g=-1}
Ff.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
Ff.prototype.get=function(a){return!!this.data[a]};
function Gf(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function Hf(a){this.s=I(a)}
y(Hf,L);function If(a){this.s=I(a)}
y(If,L);function Jf(a,b){return K(a,2,b)}
function Kf(a,b){return K(a,3,b)}
function Lf(a,b){return K(a,4,b)}
function Mf(a,b){return K(a,5,b)}
function Nf(a,b){return K(a,9,b)}
function Of(a,b){var c=a.s,d=$c(c);nd(d);if(null==b)Sd(c,d,10);else{var e=H(b),f=e,g=!!(2&e)||!!(2048&e),h=g||Object.isFrozen(b),k;if(k=!h)k=!1;for(var l=!0,m=!0,n=0;n<b.length;n++){var q=b[n];Cd(q,Hf);g||(q=!!(H(q.s)&2),l&&(l=!q),m&&(m=q))}g||(e=Zc(e,5,!0),e=Zc(e,8,l),e=Zc(e,16,m),k&&(e=Zc(e,m?2:2048,!0)),e!==f&&(h&&(b=Tc(b),e=Zd(e,d,!0)),Xc(b,e)),k&&Object.freeze(b));Sd(c,d,10,b)}return a}
function Pf(a,b){return Rd(a,11,null==b?b:vd(b))}
function Qf(a,b){return K(a,1,b)}
function Rf(a,b){return Rd(a,7,null==b?b:vd(b))}
If.ma=[10,6];var Sf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function Tf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Uf(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Vf(){var a=window;if(!Uf(a))return null;var b=Tf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Sf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Wf(a){var b;return Pf(Of(Mf(Jf(Qf(Lf(Rf(Nf(Kf(new If,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new Hf;d=K(d,1,c.brand);return K(d,2,c.version)}))||[]),a.wow64||!1)}
function Xf(){var a,b;return null!=(b=null==(a=Vf())?void 0:a.then(function(c){return Wf(c)}))?b:null}
;function Yf(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
Yf.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Zf(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var $f;function ag(){var a=D.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=je();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ta(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Vb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.jc;c.jc=null;e()}};
return function(e){d.next={jc:e};d=d.next;b.port2.postMessage(0)}}return function(e){D.setTimeout(e,0)}}
;function bg(){this.h=this.g=null}
bg.prototype.add=function(a,b){var c=cg.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
bg.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var cg=new Yf(function(){return new dg},function(a){return a.reset()});
function dg(){this.next=this.scope=this.g=null}
dg.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
dg.prototype.reset=function(){this.next=this.scope=this.g=null};var eg,fg=!1,gg=new bg;function hg(a,b){eg||ig();fg||(eg(),fg=!0);gg.add(a,b)}
function ig(){if(D.Promise&&D.Promise.resolve){var a=D.Promise.resolve(void 0);eg=function(){a.then(jg)}}else eg=function(){var b=jg;
"function"!==typeof D.setImmediate||D.Window&&D.Window.prototype&&(Pb()||!G("Edge"))&&D.Window.prototype.setImmediate==D.setImmediate?($f||($f=ag()),$f(b)):D.setImmediate(b)}}
function jg(){for(var a;a=gg.remove();){try{a.g.call(a.scope)}catch(b){gc(b)}Zf(cg,a)}fg=!1}
;function kg(a,b){this.g=a[D.Symbol.iterator]();this.h=b}
kg.prototype[Symbol.iterator]=function(){return this};
kg.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function lg(a,b){return new kg(a,b)}
;function mg(){this.blockSize=-1}
;function ng(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
Wa(ng,mg);ng.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.j=this.h=0};
function og(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
ng.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)og(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){og(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){og(this,e);f=0;break}}this.h=f;this.j+=b}};
ng.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;og(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function pg(){}
pg.prototype.next=function(){return qg};
var qg={done:!0,value:void 0};function rg(a){return{value:a,done:!1}}
pg.prototype.ia=function(){return this};function sg(a){if(a instanceof tg||a instanceof ug||a instanceof vg)return a;if("function"==typeof a.next)return new tg(function(){return a});
if("function"==typeof a[Symbol.iterator])return new tg(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new tg(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function tg(a){this.h=a}
tg.prototype.ia=function(){return new ug(this.h())};
tg.prototype[Symbol.iterator]=function(){return new vg(this.h())};
tg.prototype.g=function(){return new vg(this.h())};
function ug(a){this.h=a}
y(ug,pg);ug.prototype.next=function(){return this.h.next()};
ug.prototype[Symbol.iterator]=function(){return new vg(this.h)};
ug.prototype.g=function(){return new vg(this.h)};
function vg(a){tg.call(this,function(){return a});
this.i=a}
y(vg,tg);vg.prototype.next=function(){return this.i.next()};function wg(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof wg)for(c=xg(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function xg(a){yg(a);return a.g.concat()}
r=wg.prototype;r.has=function(a){return zg(this.h,a)};
r.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Ag;yg(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Ag(a,b){return a===b}
r.Qb=function(){return 0==this.size};
r.clear=function(){this.h={};this.i=this.size=this.g.length=0};
r.remove=function(a){return this.delete(a)};
r.delete=function(a){return zg(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&yg(this),!0):!1};
function yg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];zg(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],zg(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
r.get=function(a,b){return zg(this.h,a)?this.h[a]:b};
r.set=function(a,b){zg(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=xg(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new wg(this)};
r.keys=function(){return sg(this.ia(!0)).g()};
r.values=function(){return sg(this.ia(!1)).g()};
r.entries=function(){var a=this;return lg(this.keys(),function(b){return[b,a.get(b)]})};
r.ia=function(a){yg(this);var b=0,c=this.i,d=this,e=new pg;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return qg;var f=d.g[b++];return rg(a?f:d.h[f])};
return e};
function zg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var Bg=D.JSON.stringify;function Cg(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Dg(a){this.g=0;this.H=void 0;this.j=this.h=this.i=null;this.o=this.u=!1;if(a!=$a)try{var b=this;a.call(void 0,function(c){Eg(b,2,c)},function(c){Eg(b,3,c)})}catch(c){Eg(this,3,c)}}
function Fg(){this.next=this.context=this.h=this.i=this.g=null;this.j=!1}
Fg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.j=!1};
var Gg=new Yf(function(){return new Fg},function(a){a.reset()});
function Hg(a,b,c){var d=Gg.get();d.i=a;d.h=b;d.context=c;return d}
Dg.prototype.then=function(a,b,c){return Ig(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Dg.prototype.$goog_Thenable=!0;Dg.prototype.cancel=function(a){if(0==this.g){var b=new Jg(a);hg(function(){Kg(this,b)},this)}};
function Kg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.j||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?Kg(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):Lg(c),Mg(c,e,3,b)))}a.i=null}else Eg(a,3,b)}
function Ng(a,b){a.h||2!=a.g&&3!=a.g||Og(a);a.j?a.j.next=b:a.h=b;a.j=b}
function Ig(a,b,c,d){var e=Hg(null,null,null);e.g=new Dg(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Jg?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;Ng(a,e);return e.g}
Dg.prototype.S=function(a){this.g=0;Eg(this,2,a)};
Dg.prototype.oa=function(a){this.g=0;Eg(this,3,a)};
function Eg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.S,f=a.oa;if(d instanceof Dg){Ng(d,Hg(e||$a,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Na(d))try{var k=d.then;if("function"===typeof k){Pg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.g=b,a.i=null,Og(a),3!=b||c instanceof Jg||Qg(a,c))}}
function Pg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Og(a){a.u||(a.u=!0,hg(a.M,a))}
function Lg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
Dg.prototype.M=function(){for(var a;a=Lg(this);)Mg(this,a,this.g,this.H);this.u=!1};
function Mg(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,Rg(b,c,d);else try{b.j?b.i.call(b.context):Rg(b,c,d)}catch(e){Sg.call(null,e)}Zf(Gg,b)}
function Rg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Qg(a,b){a.o=!0;hg(function(){a.o&&Sg.call(null,b)})}
var Sg=gc;function Jg(a){Ya.call(this,a)}
Wa(Jg,Ya);Jg.prototype.name="cancel";function M(a){Xe.call(this);this.o=1;this.i=[];this.j=0;this.g=[];this.h={};this.u=!!a}
Wa(M,Xe);r=M.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.o;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.o=e+3;d.push(e);return e};
function Tg(a,b,c){var d=Ug;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.tb(a)}}
r.tb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.g[a+1]=function(){}):(c&&eb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
r.bb=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Vg(this.g[g+1],this.g[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f&&!this.Ha;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.tb(c)}}return 0!=e}return!1};
function Vg(a,b,c){hg(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.tb,this),delete this.h[a])}else this.g.length=0,this.h={}};
r.sa=function(){M.na.sa.call(this);this.clear();this.i.length=0};function Wg(a){this.g=a}
Wg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,Bg(b))};
Wg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Wg.prototype.remove=function(a){this.g.remove(a)};function Xg(a){this.g=a}
Wa(Xg,Wg);function Yg(a){this.data=a}
function Zg(a){return void 0===a||a instanceof Yg?a:new Yg(a)}
Xg.prototype.set=function(a,b){Xg.na.set.call(this,a,Zg(b))};
Xg.prototype.h=function(a){a=Xg.na.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Xg.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function $g(a){this.g=a}
Wa($g,Xg);$g.prototype.set=function(a,b,c){if(b=Zg(b)){if(c){if(c<Va()){$g.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Va()}$g.na.set.call(this,a,b)};
$g.prototype.h=function(a){var b=$g.na.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Va()||c&&c>Va())$g.prototype.remove.call(this,a);else return b}};function ah(){}
;function bh(){}
Wa(bh,ah);bh.prototype[Symbol.iterator]=function(){return sg(this.ia(!0)).g()};
bh.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function ch(a){this.g=a}
Wa(ch,bh);r=ch.prototype;r.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeItem(a)};
r.ia=function(a){var b=0,c=this.g,d=new pg;d.next=function(){if(b>=c.length)return qg;var e=c.key(b++);if(a)return rg(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return rg(e)};
return d};
r.clear=function(){this.g.clear()};
r.key=function(a){return this.g.key(a)};function dh(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
Wa(dh,ch);function eh(a,b){this.h=a;this.g=null;var c;if(c=kc)c=!(9<=Number(Ac));if(c){fh||(fh=new wg);this.g=fh.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),fh.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Wa(eh,bh);var gh={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},fh=null;function hh(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return gh[b]})}
r=eh.prototype;r.set=function(a,b){this.g.setAttribute(hh(a),b);ih(this)};
r.get=function(a){a=this.g.getAttribute(hh(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeAttribute(hh(a));ih(this)};
r.ia=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new pg;d.next=function(){if(b>=c.length)return qg;var e=c[b++];if(a)return rg(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return rg(e)};
return d};
r.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);ih(this)};
function ih(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function jh(a,b){this.h=a;this.g=b+"::"}
Wa(jh,bh);jh.prototype.set=function(a,b){this.h.set(this.g+a,b)};
jh.prototype.get=function(a){return this.h.get(this.g+a)};
jh.prototype.remove=function(a){this.h.remove(this.g+a)};
jh.prototype.ia=function(a){var b=this.h[Symbol.iterator](),c=this,d=new pg;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return rg(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

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
var N={},kh="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.ac=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var lh={Ra:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},mh={Ra:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
nc:function(a){return[].concat.apply([],a)}};
N.xd=function(){kh?(N.Qa=Uint8Array,N.pa=Uint16Array,N.Lc=Int32Array,N.assign(N,lh)):(N.Qa=Array,N.pa=Array,N.Lc=Array,N.assign(N,mh))};
N.xd();var nh=!0;try{new Uint8Array(1)}catch(a){nh=!1}
function oh(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.Qa(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var ph={};ph=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var qh={},rh,sh=[],th=0;256>th;th++){rh=th;for(var uh=0;8>uh;uh++)rh=rh&1?3988292384^rh>>>1:rh>>>1;sh[th]=rh}qh=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^sh[(a^b[d])&255];return a^-1};var vh={};vh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function wh(a){for(var b=a.length;0<=--b;)a[b]=0}
var xh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],yh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],zh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ah=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Bh=Array(576);wh(Bh);var Ch=Array(60);wh(Ch);var Dh=Array(512);wh(Dh);var Eh=Array(256);wh(Eh);var Fh=Array(29);wh(Fh);var Gh=Array(30);wh(Gh);function Hh(a,b,c,d,e){this.Hc=a;this.ad=b;this.Zc=c;this.Xc=d;this.rd=e;this.qc=a&&a.length}
var Ih,Jh,fi;function gi(a,b){this.lc=a;this.Ya=0;this.Ca=b}
function hi(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function ii(a,b,c){a.O>16-c?(a.V|=b<<a.O&65535,hi(a,a.V),a.V=b>>16-a.O,a.O+=c-16):(a.V|=b<<a.O&65535,a.O+=c)}
function ji(a,b,c){ii(a,c[2*b],c[2*b+1])}
function ki(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function li(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=ki(d[e]++,e))}
function mi(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Ia[2*b]=0;for(b=0;19>b;b++)a.R[2*b]=0;a.X[512]=1;a.xa=a.cb=0;a.da=a.matches=0}
function ni(a){8<a.O?hi(a,a.V):0<a.O&&(a.K[a.pending++]=a.V);a.V=0;a.O=0}
function oi(a,b,c){ni(a);hi(a,c);hi(a,~c);N.Ra(a.K,a.window,b,c,a.pending);a.pending+=c}
function pi(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function qi(a,b,c){for(var d=a.L[c],e=c<<1;e<=a.wa;){e<a.wa&&pi(b,a.L[e+1],a.L[e],a.depth)&&e++;if(pi(b,d,a.L[e],a.depth))break;a.L[c]=a.L[e];c=e;e<<=1}a.L[c]=d}
function ri(a,b,c){var d=0;if(0!==a.da){do{var e=a.K[a.lb+2*d]<<8|a.K[a.lb+2*d+1];var f=a.K[a.Sb+d];d++;if(0===e)ji(a,f,b);else{var g=Eh[f];ji(a,g+256+1,b);var h=xh[g];0!==h&&(f-=Fh[g],ii(a,f,h));e--;g=256>e?Dh[e]:Dh[256+(e>>>7)];ji(a,g,c);h=yh[g];0!==h&&(e-=Gh[g],ii(a,e,h))}}while(d<a.da)}ji(a,256,b)}
function si(a,b){var c=b.lc,d=b.Ca.Hc,e=b.Ca.qc,f=b.Ca.Xc,g,h=-1;a.wa=0;a.Ua=573;for(g=0;g<f;g++)0!==c[2*g]?(a.L[++a.wa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.wa;){var k=a.L[++a.wa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.xa--;e&&(a.cb-=d[2*k+1])}b.Ya=h;for(g=a.wa>>1;1<=g;g--)qi(a,c,g);k=f;do g=a.L[1],a.L[1]=a.L[a.wa--],qi(a,c,1),d=a.L[1],a.L[--a.Ua]=g,a.L[--a.Ua]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.L[1]=k++,qi(a,c,1);while(2<=a.wa);a.L[--a.Ua]=
a.L[1];g=b.lc;k=b.Ya;d=b.Ca.Hc;e=b.Ca.qc;f=b.Ca.ad;var l=b.Ca.Zc,m=b.Ca.rd,n,q=0;for(n=0;15>=n;n++)a.ra[n]=0;g[2*a.L[a.Ua]+1]=0;for(b=a.Ua+1;573>b;b++){var p=a.L[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,q++);g[2*p+1]=n;if(!(p>k)){a.ra[n]++;var t=0;p>=l&&(t=f[p-l]);var u=g[2*p];a.xa+=u*(n+t);e&&(a.cb+=u*(d[2*p+1]+t))}}if(0!==q){do{for(n=m-1;0===a.ra[n];)n--;a.ra[n]--;a.ra[n+1]+=2;a.ra[m]--;q-=2}while(0<q);for(n=m;0!==n;n--)for(p=a.ra[n];0!==p;)d=a.L[--b],d>k||(g[2*d+1]!==n&&(a.xa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}li(c,h,a.ra)}
function ti(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.R[2*l]+=g:0!==l?(l!==e&&a.R[2*l]++,a.R[32]++):10>=g?a.R[34]++:a.R[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function ui(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do ji(a,l,a.R);while(0!==--g)}else 0!==l?(l!==e&&(ji(a,l,a.R),g--),ji(a,16,a.R),ii(a,g-3,2)):10>=g?(ji(a,17,a.R),ii(a,g-3,3)):(ji(a,18,a.R),ii(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function vi(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var wi=!1;function xi(a,b,c){a.K[a.lb+2*a.da]=b>>>8&255;a.K[a.lb+2*a.da+1]=b&255;a.K[a.Sb+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(Eh[c]+256+1)]++,a.Ia[2*(256>b?Dh[b]:Dh[256+(b>>>7)])]++);return a.da===a.ob-1}
;function yi(a,b){a.msg=vh[b];return b}
function zi(a){for(var b=a.length;0<=--b;)a[b]=0}
function Ai(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(N.Ra(a.output,b.K,b.qb,c,a.Za),a.Za+=c,b.qb+=c,a.cc+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.qb=0))}
function R(a,b){var c=0<=a.Z?a.Z:-1,d=a.l-a.Z,e=0;if(0<a.level){2===a.C.Nb&&(a.C.Nb=vi(a));si(a,a.Db);si(a,a.zb);ti(a,a.X,a.Db.Ya);ti(a,a.Ia,a.zb.Ya);si(a,a.hc);for(e=18;3<=e&&0===a.R[2*Ah[e]+1];e--);a.xa+=3*(e+1)+14;var f=a.xa+3+7>>>3;var g=a.cb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)ii(a,b?1:0,3),oi(a,c,d);else if(4===a.strategy||g===f)ii(a,2+(b?1:0),3),ri(a,Bh,Ch);else{ii(a,4+(b?1:0),3);c=a.Db.Ya+1;d=a.zb.Ya+1;e+=1;ii(a,c-257,5);ii(a,d-1,5);ii(a,e-4,4);for(f=0;f<e;f++)ii(a,a.R[2*Ah[f]+
1],3);ui(a,a.X,c-1);ui(a,a.Ia,d-1);ri(a,a.X,a.Ia)}mi(a);b&&ni(a);a.Z=a.l;Ai(a.C)}
function S(a,b){a.K[a.pending++]=b}
function Bi(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function Ci(a,b){var c=a.yc,d=a.l,e=a.aa,f=a.zc,g=a.l>a.T-262?a.l-(a.T-262):0,h=a.window,k=a.Ea,l=a.la,m=a.l+258,n=h[d+e-1],q=h[d+e];a.aa>=a.pc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===q&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Xa=b;e=p;if(p>=f)break;n=h[d+e-1];q=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function Di(a){var b=a.T,c;do{var d=a.Jc-a.m-a.l;if(a.l>=b+(b-262)){N.Ra(a.window,a.window,b,b,0);a.Xa-=b;a.l-=b;a.Z-=b;var e=c=a.Cb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.l+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,N.Ra(c,e.input,e.Oa,g,f),1===e.state.wrap?e.A=ph(e.A,c,g,f):2===e.state.wrap&&(e.A=qh(e.A,c,g,f)),e.Oa+=g,e.Pa+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.l-a.Y,a.D=a.window[d],a.D=
(a.D<<a.va^a.window[d+1])&a.ta;a.Y&&!(a.D=(a.D<<a.va^a.window[d+3-1])&a.ta,a.la[d&a.Ea]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function Ei(a,b){for(var c;;){if(262>a.m){Di(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Ea]=a.head[a.D],a.head[a.D]=a.l);0!==c&&a.l-c<=a.T-262&&(a.G=Ci(a,c));if(3<=a.G)if(c=xi(a,a.l-a.Xa,a.G-3),a.m-=a.G,a.G<=a.Ub&&3<=a.m){a.G--;do a.l++,a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Ea]=a.head[a.D],a.head[a.D]=a.l;while(0!==--a.G);a.l++}else a.l+=a.G,a.G=0,a.D=a.window[a.l],a.D=(a.D<<a.va^a.window[a.l+1])&a.ta;else c=xi(a,0,a.window[a.l]),
a.m--,a.l++;if(c&&(R(a,!1),0===a.C.F))return 1}a.Y=2>a.l?a.l:2;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&(R(a,!1),0===a.C.F)?1:2}
function Fi(a,b){for(var c,d;;){if(262>a.m){Di(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Ea]=a.head[a.D],a.head[a.D]=a.l);a.aa=a.G;a.Cc=a.Xa;a.G=2;0!==c&&a.aa<a.Ub&&a.l-c<=a.T-262&&(a.G=Ci(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.l-a.Xa)&&(a.G=2));if(3<=a.aa&&a.G<=a.aa){d=a.l+a.m-3;c=xi(a,a.l-1-a.Cc,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.l<=d&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Ea]=a.head[a.D],a.head[a.D]=a.l);while(0!==
--a.aa);a.Ma=0;a.G=2;a.l++;if(c&&(R(a,!1),0===a.C.F))return 1}else if(a.Ma){if((c=xi(a,0,a.window[a.l-1]))&&R(a,!1),a.l++,a.m--,0===a.C.F)return 1}else a.Ma=1,a.l++,a.m--}a.Ma&&(xi(a,0,a.window[a.l-1]),a.Ma=0);a.Y=2>a.l?a.l:2;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&(R(a,!1),0===a.C.F)?1:2}
function Gi(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){Di(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.G=0;if(3<=a.m&&0<a.l&&(d=a.l-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.l+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.m&&(a.G=a.m)}3<=a.G?(c=xi(a,1,a.G-3),a.m-=a.G,a.l+=a.G,a.G=0):(c=xi(a,0,a.window[a.l]),a.m--,a.l++);if(c&&(R(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&
(R(a,!1),0===a.C.F)?1:2}
function Hi(a,b){for(var c;;){if(0===a.m&&(Di(a),0===a.m)){if(0===b)return 1;break}a.G=0;c=xi(a,0,a.window[a.l]);a.m--;a.l++;if(c&&(R(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(R(a,!0),0===a.C.F?3:4):a.da&&(R(a,!1),0===a.C.F)?1:2}
function Ii(a,b,c,d,e){this.dd=a;this.qd=b;this.td=c;this.pd=d;this.bd=e}
var Ji;Ji=[new Ii(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){Di(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.l+=a.m;a.m=0;var d=a.Z+c;if(0===a.l||a.l>=d)if(a.m=a.l-d,a.l=d,R(a,!1),0===a.C.F)return 1;if(a.l-a.Z>=a.T-262&&(R(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return R(a,!0),0===a.C.F?3:4;a.l>a.Z&&R(a,!1);return 1}),
new Ii(4,4,8,4,Ei),new Ii(4,5,16,8,Ei),new Ii(4,6,32,32,Ei),new Ii(4,4,16,16,Fi),new Ii(8,16,32,32,Fi),new Ii(8,16,128,128,Fi),new Ii(8,32,128,256,Fi),new Ii(32,128,258,1024,Fi),new Ii(32,258,258,4096,Fi)];
function Ki(){this.C=null;this.status=0;this.K=null;this.wrap=this.pending=this.qb=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Va=-1;this.Ea=this.dc=this.T=0;this.window=null;this.Jc=0;this.head=this.la=null;this.zc=this.pc=this.strategy=this.level=this.Ub=this.yc=this.aa=this.m=this.Xa=this.l=this.Ma=this.Cc=this.G=this.Z=this.va=this.ta=this.Ob=this.Cb=this.D=0;this.X=new N.pa(1146);this.Ia=new N.pa(122);this.R=new N.pa(78);zi(this.X);zi(this.Ia);zi(this.R);this.hc=this.zb=this.Db=null;this.ra=
new N.pa(16);this.L=new N.pa(573);zi(this.L);this.Ua=this.wa=0;this.depth=new N.pa(573);zi(this.depth);this.O=this.V=this.Y=this.matches=this.cb=this.xa=this.lb=this.da=this.ob=this.Sb=0}
function Li(a,b){if(!a||!a.state||5<b||0>b)return a?yi(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return yi(a,0===a.F?-5:-2);c.C=a;var d=c.Va;c.Va=b;if(42===c.status)if(2===c.wrap)a.A=0,S(c,31),S(c,139),S(c,8),c.v?(S(c,(c.v.text?1:0)+(c.v.Aa?2:0)+(c.v.extra?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),S(c,c.v.time&255),S(c,c.v.time>>8&255),S(c,c.v.time>>16&255),S(c,c.v.time>>24&255),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,c.v.xe&255),c.v.extra&&c.v.extra.length&&
(S(c,c.v.extra.length&255),S(c,c.v.extra.length>>8&255)),c.v.Aa&&(a.A=qh(a.A,c.K,c.pending,0)),c.fa=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,3),c.status=113);else{var e=8+(c.dc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.l&&(e|=32);c.status=113;Bi(c,e+(31-e%31));0!==c.l&&(Bi(c,a.A>>>16),Bi(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.extra){for(e=c.pending;c.fa<(c.v.extra.length&65535)&&(c.pending!==c.ea||
(c.v.Aa&&c.pending>e&&(a.A=qh(a.A,c.K,c.pending-e,e)),Ai(a),e=c.pending,c.pending!==c.ea));)S(c,c.v.extra[c.fa]&255),c.fa++;c.v.Aa&&c.pending>e&&(a.A=qh(a.A,c.K,c.pending-e,e));c.fa===c.v.extra.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.Aa&&c.pending>e&&(a.A=qh(a.A,c.K,c.pending-e,e)),Ai(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;S(c,f)}while(0!==f);c.v.Aa&&c.pending>
e&&(a.A=qh(a.A,c.K,c.pending-e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.Aa&&c.pending>e&&(a.A=qh(a.A,c.K,c.pending-e,e)),Ai(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;S(c,f)}while(0!==f);c.v.Aa&&c.pending>e&&(a.A=qh(a.A,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.Aa?(c.pending+2>c.ea&&Ai(a),c.pending+2<=c.ea&&(S(c,a.A&
255),S(c,a.A>>8&255),a.A=0,c.status=113)):c.status=113);if(0!==c.pending){if(Ai(a),0===a.F)return c.Va=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return yi(a,-5);if(666===c.status&&0!==a.U)return yi(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?Hi(c,b):3===c.strategy?Gi(c,b):Ji[c.level].bd(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Va=-1),0;if(2===d&&(1===b?(ii(c,2,3),ji(c,256,Bh),16===c.O?(hi(c,c.V),c.V=0,c.O=0):8<=c.O&&(c.K[c.pending++]=
c.V&255,c.V>>=8,c.O-=8)):5!==b&&(ii(c,0,3),oi(c,0,0),3===b&&(zi(c.head),0===c.m&&(c.l=0,c.Z=0,c.Y=0))),Ai(a),0===a.F))return c.Va=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(S(c,a.A&255),S(c,a.A>>8&255),S(c,a.A>>16&255),S(c,a.A>>24&255),S(c,a.Pa&255),S(c,a.Pa>>8&255),S(c,a.Pa>>16&255),S(c,a.Pa>>24&255)):(Bi(c,a.A>>>16),Bi(c,a.A&65535));Ai(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var Mi={};Mi=function(){this.input=null;this.Pa=this.U=this.Oa=0;this.output=null;this.cc=this.F=this.Za=0;this.msg="";this.state=null;this.Nb=2;this.A=0};var Ni=Object.prototype.toString;
function Oi(a){if(!(this instanceof Oi))return new Oi(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,Fa:15,sd:8,strategy:0,Da:""},a||{});a.raw&&0<a.Fa?a.Fa=-a.Fa:a.ed&&0<a.Fa&&16>a.Fa&&(a.Fa+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new Mi;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Fa,f=a.sd,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=yi(b,-2);else{8===e&&(e=9);var k=new Ki;
b.state=k;k.C=b;k.wrap=h;k.v=null;k.dc=e;k.T=1<<k.dc;k.Ea=k.T-1;k.Ob=f+7;k.Cb=1<<k.Ob;k.ta=k.Cb-1;k.va=~~((k.Ob+3-1)/3);k.window=new N.Qa(2*k.T);k.head=new N.pa(k.Cb);k.la=new N.pa(k.T);k.ob=1<<f+6;k.ea=4*k.ob;k.K=new N.Qa(k.ea);k.lb=1*k.ob;k.Sb=3*k.ob;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Pa=b.cc=0;b.Nb=2;c=b.state;c.pending=0;c.qb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Va=0;if(!wi){d=Array(16);for(f=g=0;28>f;f++)for(Fh[f]=g,e=0;e<1<<xh[f];e++)Eh[g++]=
f;Eh[g-1]=f;for(f=g=0;16>f;f++)for(Gh[f]=g,e=0;e<1<<yh[f];e++)Dh[g++]=f;for(g>>=7;30>f;f++)for(Gh[f]=g<<7,e=0;e<1<<yh[f]-7;e++)Dh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Bh[2*e+1]=8,e++,d[8]++;for(;255>=e;)Bh[2*e+1]=9,e++,d[9]++;for(;279>=e;)Bh[2*e+1]=7,e++,d[7]++;for(;287>=e;)Bh[2*e+1]=8,e++,d[8]++;li(Bh,287,d);for(e=0;30>e;e++)Ch[2*e+1]=5,Ch[2*e]=ki(e,5);Ih=new Hh(Bh,xh,257,286,15);Jh=new Hh(Ch,yh,0,30,15);fi=new Hh([],zh,0,19,7);wi=!0}c.Db=new gi(c.X,Ih);c.zb=new gi(c.Ia,Jh);c.hc=new gi(c.R,
fi);c.V=0;c.O=0;mi(c);c=0}else c=yi(b,-2);0===c&&(b=b.state,b.Jc=2*b.T,zi(b.head),b.Ub=Ji[b.level].qd,b.pc=Ji[b.level].dd,b.zc=Ji[b.level].td,b.yc=Ji[b.level].pd,b.l=0,b.Z=0,b.m=0,b.Y=0,b.G=b.aa=2,b.Ma=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(vh[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.mb){var l;"string"===typeof a.mb?l=oh(a.mb):"[object ArrayBuffer]"===Ni.call(a.mb)?l=new Uint8Array(a.mb):l=a.mb;a=this.C;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.A=ph(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&(zi(l.head),l.l=0,l.Z=0,l.Y=0),c=new N.Qa(l.T),N.Ra(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Oa;e=a.input;a.U=g;a.Oa=0;a.input=f;for(Di(l);3<=l.m;){f=l.l;g=l.m-2;do l.D=(l.D<<l.va^l.window[f+3-1])&l.ta,l.la[f&l.Ea]=l.head[l.D],l.head[l.D]=f,f++;while(--g);l.l=f;l.m=2;Di(l)}l.l+=l.m;l.Z=l.l;l.Y=l.m;l.m=0;l.G=l.aa=2;l.Ma=0;a.Oa=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(vh[b]);this.me=!0}}
Oi.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=oh(a):"[object ArrayBuffer]"===Ni.call(a)?c.input=new Uint8Array(a):c.input=a;c.Oa=0;c.U=c.input.length;do{0===c.F&&(c.output=new N.Qa(d),c.Za=0,c.F=d);a=Li(c,e);if(1!==a&&0!==a)return Pi(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Da){var f=N.ac(c.output,c.Za);b=f;f=f.length;if(65537>f&&(b.subarray&&nh||!b.subarray))b=
String.fromCharCode.apply(null,N.ac(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.ac(c.output,c.Za),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=yi(c,-2):(c.state=null,a=113===d?yi(c,-3):0)):a=-2,Pi(this,a),this.ended=!0,0===a;2===e&&(Pi(this,0),c.F=0);return!0};
function Pi(a,b){0===b&&(a.result="string"===a.options.Da?a.chunks.join(""):N.nc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function Qi(a){this.name=a}
;var Ri=new Qi("rawColdConfigGroup");var Si=new Qi("rawHotConfigGroup");function Ti(a){this.s=I(a)}
y(Ti,L);Ti.prototype.g=function(a){K(this,5,a)};function Ui(a){this.s=I(a)}
y(Ui,L);function Vi(a){this.s=I(a)}
y(Vi,L);Vi.ma=[2];function Wi(a){this.s=I(a)}
y(Wi,L);Wi.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=Pd(this,36);return null!=b?b:a};
Wi.prototype.setHomeGroupInfo=function(a){return J(this,Vi,81,a)};
Wi.ma=[9,66,32,86,100,101];function Xi(a){this.s=I(a)}
y(Xi,L);Xi.prototype.getKey=function(){return ae(this,1)};
Xi.prototype.ja=function(){return ae(this,Wd(this,Yi,2))};
var Yi=[2,3,4,5,6];function Zi(a){this.s=I(a)}
y(Zi,L);Zi.ma=[15,26,28];function $i(a){this.s=I(a)}
y($i,L);$i.ma=[5];function aj(a){this.s=I(a)}
y(aj,L);function bj(a){this.s=I(a)}
y(bj,L);bj.prototype.setSafetyMode=function(a){return ee(this,5,a)};
bj.ma=[12];function cj(a){this.s=I(a)}
y(cj,L);cj.ma=[12];var dj={le:"WEB_DISPLAY_MODE_UNKNOWN",he:"WEB_DISPLAY_MODE_BROWSER",je:"WEB_DISPLAY_MODE_MINIMAL_UI",ke:"WEB_DISPLAY_MODE_STANDALONE",ie:"WEB_DISPLAY_MODE_FULLSCREEN"};function ej(a){this.s=I(a)}
y(ej,L);ej.prototype.getKey=function(){return ae(this,1)};
ej.prototype.ja=function(){return ae(this,2)};function fj(a){this.s=I(a)}
y(fj,L);fj.ma=[4,5];function gj(a){this.s=I(a)}
y(gj,L);function hj(a){this.s=I(a)}
y(hj,L);var ij=[2,3,4,5];function jj(a){this.s=I(a)}
y(jj,L);function kj(a){this.s=I(a)}
y(kj,L);function lj(a){this.s=I(a)}
y(lj,L);function mj(a){this.s=I(a)}
y(mj,L);mj.ma=[10,17];function nj(a){this.s=I(a)}
y(nj,L);function oj(a){this.s=I(a)}
y(oj,L);function pj(a){this.s=I(a)}
y(pj,L);function qj(a){this.s=I(a,487)}
y(qj,L);
var rj=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485,486];function sj(a){this.s=I(a)}
y(sj,L);function tj(a){this.s=I(a)}
y(tj,L);tj.prototype.getPlaylistId=function(){return be(this,2)};
var ce=[1,2];function uj(a){this.s=I(a)}
y(uj,L);uj.ma=[3];var vj=D.window,wj,xj,yj=(null==vj?void 0:null==(wj=vj.yt)?void 0:wj.config_)||(null==vj?void 0:null==(xj=vj.ytcfg)?void 0:xj.data_)||{};F("yt.config_",yj);function zj(){var a=arguments;1<a.length?yj[a[0]]=a[1]:1===a.length&&Object.assign(yj,a[0])}
function T(a,b){return a in yj?yj[a]:b}
function Aj(){return T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Bj(){var a=yj.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Cj=[];function Dj(a){Cj.forEach(function(b){return b(a)})}
function Ej(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Fj(b)}}:a}
function Fj(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),zj("ERRORS",b));Dj(a)}
function Gj(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),zj("ERRORS",f))}
;function U(a){a=Hj(a);return"string"===typeof a&&"false"===a?!1:!!a}
function V(a,b){a=Hj(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function Hj(a){return T("EXPERIMENT_FLAGS",{})[a]}
function Ij(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});var e=w(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var Jj=0;F("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Jj});var Kj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Lj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Kj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Lj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Lj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Lj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var mb=D.ytEventsEventsListeners||{};F("ytEventsEventsListeners",mb);var Mj=D.ytEventsEventsCounter||{count:0};F("ytEventsEventsCounter",Mj);
function Nj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return lb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Na(e[4])&&Na(d)&&nb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Oj(a){a&&("string"==typeof a&&(a=[a]),db(a,function(b){if(b in mb){var c=mb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Pj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete mb[b]}}))}
var Pj=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Qj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Nj(a,b,c,d);if(!e){e=++Mj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Lj(h);if(!ke(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Lj(h);
h.currentTarget=a;return c.call(a,h)};
g=Ej(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Pj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);mb[e]=[a,b,c,g,d]}}}
;function Rj(a,b){"function"===typeof a&&(a=Ej(a));return window.setTimeout(a,b)}
function Sj(a){"function"===typeof a&&(a=Ej(a));return window.setInterval(a,250)}
;var Tj=/^[\w.]*$/,Uj={q:!0,search_query:!0};function Vj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Wj(f[0]||""),h=Wj(f[1]||"");g in c?Array.isArray(c[g])?jb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(Vj);k.args=[{key:l,value:f[1],query:a,method:Xj==m?"unchanged":m}];Uj.hasOwnProperty(l)||Gj(k)}}return c}
var Xj=String(Vj);function Yj(a){var b=[];kb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];db(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Zj(a){"?"==a.charAt(0)&&(a=a.substr(1));return Vj(a,"&")}
function ak(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Zj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=dc(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function bk(a){if(!b)var b=window.location.href;var c=a.match(Zb)[1]||null,d=ac(a);c&&d?(a=a.match(Zb),b=b.match(Zb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ac(b)==d&&(Number(b.match(Zb)[4]||null)||null)==(Number(a.match(Zb)[4]||null)||null):!0;return a}
function Wj(a){return a&&a.match(Tj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ck(a){var b=dk;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Fe;e.flash="0";a:{try{var f=b.g.top.location.href}catch(ea){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?he:g;try{var h=g.history.length}catch(ea){h=0}e.u_his=h;var k;e.u_h=null==(k=he.screen)?void 0:k.height;var l;e.u_w=null==(l=he.screen)?void 0:l.width;var m;e.u_ah=null==(m=he.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=he.screen)?void 0:n.availWidth;var q;e.u_cd=null==(q=he.screen)?void 0:q.colorDepth}catch(ea){}h=b.g;try{var p=h.screenX;var t=h.screenY}catch(ea){}try{var u=h.outerWidth;var z=h.outerHeight}catch(ea){}try{var C=h.innerWidth;var P=h.innerHeight}catch(ea){}try{var Q=h.screenLeft;var fa=h.screenTop}catch(ea){}try{C=h.innerWidth,P=h.innerHeight}catch(ea){}try{var cb=h.screen.availWidth;var Ua=h.screen.availTop}catch(ea){}p=[Q,fa,p,t,cb,Ua,u,z,C,P];t=b.g.top;try{var Ia=(t||window).document,ha=
"CSS1Compat"==Ia.compatMode?Ia.documentElement:Ia.body;var pa=(new ie(ha.clientWidth,ha.clientHeight)).round()}catch(ea){pa=new ie(-12245933,-12245933)}Ia=pa;pa={};var qa=void 0===qa?D:qa;ha=new Ff;"SVGElement"in qa&&"createElementNS"in qa.document&&ha.set(0);t=De();t["allow-top-navigation-by-user-activation"]&&ha.set(1);t["allow-popups-to-escape-sandbox"]&&ha.set(2);qa.crypto&&qa.crypto.subtle&&ha.set(3);"TextDecoder"in qa&&"TextEncoder"in qa&&ha.set(4);qa=Gf(ha);pa.bc=qa;pa.bih=Ia.height;pa.biw=
Ia.width;pa.brdim=p.join();b=b.h;b=(pa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,pa.wgl=!!he.WebGLRenderingContext,pa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var dk=new function(){var a=window.document;this.g=window;this.h=a};
F("yt.ads_.signals_.getAdSignalsString",function(a){return Yj(ck(a))});Va();var ek="XMLHttpRequest"in D?function(){return new XMLHttpRequest}:null;
function fk(){if(!ek)return null;var a=ek();return"open"in a?a:null}
;var gk="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(gk);var hk={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},ik="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(gk)),jk=!1;
function kk(a,b){b=void 0===b?{}:b;var c=bk(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in hk){var f=T(hk[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=T("VISITOR_DATA"));!f||!c&&ac(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===T("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&T("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==T("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");c&&T("WEBVIEW_EOM",!1)&&(b["X-Yt-Webview-Eom"]="1");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in
b&&delete b["X-Goog-Visitor-Id"];if(c||!ac(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ac(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ac(a)||(b["X-YouTube-Ad-Signals"]=Yj(ck()));return b}
function lk(a){var b=window.location.search,c=ac(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&bk(a)&&(c=document.location.hostname);var d=$b(a.match(Zb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Zj(b),f={};db(ik,function(g){e[g]&&(f[g]=e[g])});
return ak(a,f||{},!1)}
function mk(a,b){var c=b.format||"JSON";a=nk(a,b);var d=ok(a,b),e=!1,f=pk(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||n||q)m=qk(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||D;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Rj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||D,f))},d)}return f}
function nk(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=ak(a,b||{},!0);return a}
function ok(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ac(a)&&!b.withCredentials&&ac(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Zj(e),qb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):dc(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!jk&&a&&"POST"!=b.method&&(jk=!0,Fj(Error("AJAX request with postData should use POST")));return e}
function qk(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Gj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?rk(a):null)e={},db(a.getElementsByTagName("*"),function(g){e[g.tagName]=sk(g)})}d&&tk(e);
return e}
function tk(a){if(Na(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=sb();d=e?e.createHTML(d):d;a[c]=new Xb(d)}else tk(a[b])}}
function rk(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function sk(a){var b="";db(a.childNodes,function(c){b+=c.nodeValue});
return b}
function uk(a,b){b.method="POST";b.postParams||(b.postParams={});return mk(a,b)}
function pk(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&Ej(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=fk();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=lk(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=kk(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var vk=[{Vb:function(a){return"Cannot read property '"+a.key+"'"},
Hb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Vb:function(a){return"Cannot call '"+a.key+"'"},
Hb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Vb:function(a){return a.key+" is not defined"},
Hb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var xk={Ba:[],za:[{kb:wk,weight:500}]};function wk(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function yk(){this.za=[];this.Ba=[]}
var zk;function Ak(){if(!zk){var a=zk=new yk;a.Ba.length=0;a.za.length=0;xk.Ba&&a.Ba.push.apply(a.Ba,xk.Ba);xk.za&&a.za.push.apply(a.za,xk.za)}return zk}
;var Bk=new M;function Ck(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Dk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Dk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Dk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Dk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Ek(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Fk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Ck(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Fk(f+".ve",g,h,k):0;d+=f;d+=Fk(e,a[e],b,c);if(500<d)break}}else c[b]=Gk(a),d+=c[b].length;else c[b]=Gk(a),d+=c[b].length;return d}
function Fk(a,b,c,d){c+="."+a;a=Gk(b);d[c]=a;return c.length+a.length}
function Gk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Hk(){}
;function Ik(){if(!D.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return D.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":D.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":D.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":D.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function Jk(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;F("ytglobal.prefsUserPrefsPrefs_",E("ytglobal.prefsUserPrefsPrefs_")||{});var Kk={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Lk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},Mk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Nk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Ok(){var a=D.navigator;return a?a.connection:void 0}
;function Pk(a){var b=Fa.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(Pk,Error);function Qk(){try{return Rk(),!0}catch(a){return!1}}
function Rk(){if(void 0!==T("DATASYNC_ID"))return T("DATASYNC_ID");throw new Pk("Datasync ID not set","unknown");}
;function Sk(){}
function Tk(a,b){return Ef.Ga(a,0,b)}
Sk.prototype.qa=function(a,b){return this.Ga(a,1,b)};
Sk.prototype.hb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Uk=V("web_emulated_idle_callback_delay",300),Vk=1E3/60-3,Wk=[8,5,4,3,2,1,0];
function Xk(a){a=void 0===a?{}:a;Xe.call(this);this.h=[];this.i={};this.fb=this.g=0;this.eb=this.o=!1;this.M=[];this.S=this.gb=!1;for(var b=w(Wk),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.j=0;this.Qc=a.timeout||1;this.H=Vk;this.u=0;this.ub=this.ud.bind(this);this.Pc=this.zd.bind(this);this.Mc=this.Rc.bind(this);this.Nc=this.fd.bind(this);this.Oc=this.vd.bind(this);this.ec=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.ya=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ub)}
y(Xk,Xe);r=Xk.prototype;r.hb=function(a){var b=Va();Yk(a);a=Va()-b;this.o||(this.H-=a)};
r.Ga=function(a,b,c){++this.fb;if(10===b)return this.hb(a),this.fb;var d=this.fb;this.i[d]=a;this.o&&!c?this.M.push({id:d,priority:b}):(this.h[b].push(d),this.eb||this.o||(0!==this.g&&Zk(this)!==this.u&&$k(this),this.start()));return d};
r.ba=function(a){delete this.i[a]};
function al(a){a.M.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};$k(a)}
function Zk(a){if(a.h[8].length){if(a.S)return 4;if(!document.hidden&&a.ya)return 3}for(var b=5;b>=a.j;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.ya?3:2:1;return 0}
function bl(a){var b=E("yt.logging.errors.log");b&&b(a)}
function Yk(a){try{a()}catch(b){bl(b)}}
function cl(a){for(var b=w(Wk),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
r.fd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.gb=!0;dl(this,b);this.gb=!1};
r.zd=function(){dl(this)};
r.Rc=function(){el(this)};
r.vd=function(a){this.S=!0;var b=Zk(this);4===b&&b!==this.u&&($k(this),this.start());dl(this,void 0,a);this.S=!1};
r.ud=function(){document.hidden||el(this);this.g&&($k(this),this.start())};
function el(a){$k(a);a.o=!0;for(var b=Va(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Yk(e)}fl(a);a.o=!1;cl(a)&&a.start();b=Va()-b;a.H-=b}
function fl(a){for(var b=0,c=a.M.length;b<c;b++){var d=a.M[b];a.h[d.priority].push(d.id)}a.M.length=0}
function dl(a,b,c){a.S&&4===a.u&&a.g||$k(a);a.o=!0;b=Va()+(b||a.H);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){bl(l)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Yk(e);d=a.gb?0:1;d=a.j>d?a.j:d;if(!(Va()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&Yk(c)}while(c&&Va()<b)}a.o=!1;fl(a);a.H=Vk;cl(a)&&a.start()}
r.start=function(){this.eb=!1;if(0===this.g)switch(this.u=Zk(this),this.u){case 1:var a=this.Nc;this.g=this.ec?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Uk);break;case 2:this.g=window.setTimeout(this.Pc,this.Qc);break;case 3:this.g=window.requestAnimationFrame(this.Oc);break;case 4:this.g=window.setTimeout(this.Mc,0)}};
function $k(a){if(a.g){switch(a.u){case 1:var b=a.g;a.ec?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
r.sa=function(){al(this);$k(this);this.ya&&document.removeEventListener("visibilitychange",this.ub);Xe.prototype.sa.call(this)};var gl=E("yt.scheduler.instance.timerIdMap_")||{},hl=V("kevlar_tuner_scheduler_soft_state_timer_ms",800),il=0,jl=0;function kl(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Ha)a=new Xk(T("scheduler")||{}),F("ytglobal.schedulerInstanceInstance_",a);return a}
function ll(){ml();var a=E("ytglobal.schedulerInstanceInstance_");a&&(We(a),F("ytglobal.schedulerInstanceInstance_",null))}
function ml(){al(kl());for(var a in gl)gl.hasOwnProperty(a)&&delete gl[Number(a)]}
function nl(a,b,c){if(!c)return c=void 0===c,-kl().Ga(a,b,c);var d=window.setTimeout(function(){var e=kl().Ga(a,b);gl[d]=e},c);
return d}
function ol(a){kl().hb(a)}
function pl(a){var b=kl();if(0>a)b.ba(-a);else{var c=gl[a];c?(b.ba(c),delete gl[a]):window.clearTimeout(a)}}
function ql(){rl()}
function rl(){window.clearTimeout(il);kl().start()}
function sl(){var a=kl();$k(a);a.eb=!0;window.clearTimeout(il);il=window.setTimeout(ql,hl)}
function tl(){window.clearTimeout(jl);jl=window.setTimeout(function(){ul(0)},hl)}
function ul(a){tl();var b=kl();b.j=a;b.start()}
function vl(a){tl();var b=kl();b.j>a&&(b.j=a,b.start())}
function wl(){window.clearTimeout(jl);var a=kl();a.j=0;a.start()}
;function xl(){Sk.apply(this,arguments)}
y(xl,Sk);function yl(){xl.g||(xl.g=new xl);return xl.g}
xl.prototype.Ga=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Rj(a,c||0)};
xl.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
xl.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
var Ef=yl();
U("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(F("yt.scheduler.instance.dispose",ll),F("yt.scheduler.instance.addJob",nl),F("yt.scheduler.instance.addImmediateJob",ol),F("yt.scheduler.instance.cancelJob",pl),F("yt.scheduler.instance.cancelAllJobs",ml),F("yt.scheduler.instance.start",rl),F("yt.scheduler.instance.pause",sl),F("yt.scheduler.instance.setPriorityThreshold",ul),F("yt.scheduler.instance.enablePriorityThreshold",vl),F("yt.scheduler.instance.clearPriorityThreshold",wl),F("yt.scheduler.initialized",
!0));function zl(a){var b=new dh;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new jh(b,a):b:null)||(a=new eh(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new $g(a):null;this.h=document.domain||window.location.hostname}
zl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Bg(b))}catch(f){return}else e=escape(b);b=this.h;Qe.set(""+a,e,{Tb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
zl.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=Qe.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
zl.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;Qe.remove(""+a,"/",void 0===b?"youtube.com":b)};var Al=function(){var a;return function(){a||(a=new zl("ytidb"));return a}}();
function Bl(){var a;return null==(a=Al())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Cl=[],Dl=!1;function El(a){Dl||(Cl.push({type:"ERROR",payload:a}),10<Cl.length&&Cl.shift())}
function Fl(a,b){Dl||(Cl.push({type:"EVENT",eventType:a,payload:b}),10<Cl.length&&Cl.shift())}
;function Gl(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function Hl(a){return a.substr(0,a.indexOf(":"))||a}
;var Il=Bc||Cc;var Jl={},Kl=(Jl.AUTH_INVALID="No user identifier specified.",Jl.EXPLICIT_ABORT="Transaction was explicitly aborted.",Jl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Jl.MISSING_INDEX="Index not created.",Jl.MISSING_OBJECT_STORES="Object stores not created.",Jl.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Jl.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Jl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Jl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Jl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Jl.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Jl.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Jl),Ll={},Ml=(Ll.AUTH_INVALID="ERROR",Ll.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Ll.EXPLICIT_ABORT="IGNORED",Ll.IDB_NOT_SUPPORTED="ERROR",Ll.MISSING_INDEX=
"WARNING",Ll.MISSING_OBJECT_STORES="ERROR",Ll.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Ll.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Ll.QUOTA_EXCEEDED="WARNING",Ll.QUOTA_MAYBE_EXCEEDED="WARNING",Ll.UNKNOWN_ABORT="WARNING",Ll.INCOMPATIBLE_DB_VERSION="WARNING",Ll),Nl={},Ol=(Nl.AUTH_INVALID=!1,Nl.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Nl.EXPLICIT_ABORT=!1,Nl.IDB_NOT_SUPPORTED=!1,Nl.MISSING_INDEX=!1,Nl.MISSING_OBJECT_STORES=!1,Nl.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Nl.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Nl.QUOTA_EXCEEDED=!1,Nl.QUOTA_MAYBE_EXCEEDED=!0,Nl.UNKNOWN_ABORT=!0,Nl.INCOMPATIBLE_DB_VERSION=!1,Nl);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?Kl[a]:c;d=void 0===d?Ml[a]:d;e=void 0===e?Ol[a]:e;Pk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
y(X,Pk);function Pl(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Kl.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Pl.prototype)}
y(Pl,X);function Ql(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Ql.prototype)}
y(Ql,Error);var Rl=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Sl(a,b,c,d){b=Hl(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(Dc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Ql)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Rl.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",we:e.name})];e.level="WARNING";return e}
function Tl(a,b,c){var d=Bl();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Ul(a){if(!a)throw Error();throw a;}
function Vl(a){return a}
function Wl(a){this.g=a}
function Xl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Xl.resolve=function(a){return new Xl(new Wl(function(b,c){a instanceof Xl?a.then(b,c):b(a)}))};
Xl.reject=function(a){return new Xl(new Wl(function(b,c){c(a)}))};
Xl.prototype.then=function(a,b){var c=this,d=null!=a?a:Vl,e=null!=b?b:Ul;return new Xl(new Wl(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Yl(c,c,d,f,g)}),c.h.push(function(){Zl(c,c,e,f,g)})):"FULFILLED"===c.state.status?Yl(c,c,d,f,g):"REJECTED"===c.state.status&&Zl(c,c,e,f,g)}))};
function $l(a,b){a.then(void 0,b)}
function Yl(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Xl?am(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Zl(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Xl?am(a,b,f,d,e):d(f)}catch(g){e(g)}}
function am(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Xl?am(a,b,f,d,e):d(f)},function(f){e(f)})}
;function bm(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function cm(a){return new Promise(function(b,c){bm(a,b,c)})}
function dm(a){return new Xl(new Wl(function(b,c){bm(a,b,c)}))}
;function em(a,b){return new Xl(new Wl(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var fm=window,Y=fm.ytcsi&&fm.ytcsi.now?fm.ytcsi.now:fm.performance&&fm.performance.timing&&fm.performance.now&&fm.performance.timing.navigationStart?function(){return fm.performance.timing.navigationStart+fm.performance.now()}:function(){return(new Date).getTime()};function gm(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.h=!1}
r=gm.prototype;r.add=function(a,b,c){return hm(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return hm(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function im(a,b,c){a=a.g.createObjectStore(b,c);return new jm(a)}
r.delete=function(a,b){return hm(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return hm(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function km(a,b,c){return hm(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return dm(d.g.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function hm(a,b,c,d){var e,f,g,h,k,l,m,n,q,p,t,u;return B(function(z){switch(z.g){case 1:var C={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?C.mode=c:Object.assign(C,c);e=C;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(Y());wa(z,5);l=a.g.transaction(b,e.mode);C=new lm(l);C=mm(C,d);return A(z,C,7);case 7:return m=z.h,n=Math.round(Y()),nm(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:q=xa(z);p=Math.round(Y());t=Sl(q,a.g.name,b.join(),a.g.version);
if((u=t instanceof X&&!t.g)||g>=f)nm(a,k,p,g,t,b.join(),e),h=t;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function nm(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&Fl("QUOTA_EXCEEDED",{dbName:Hl(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),Fl("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),om(a,!1,d,f,b,g.tag),El(e)):om(a,!0,d,f,b,g.tag)}
function om(a,b,c,d,e,f){Fl("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.g.name};
function jm(a){this.g=a}
r=jm.prototype;r.add=function(a,b){return dm(this.g.add(a,b))};
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return dm(this.g.clear()).then(function(){})};
function pm(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function qm(a,b){return rm(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?qm(this,a):dm(this.g.delete(a))};
r.get=function(a){return dm(this.g.get(a))};
r.index=function(a){try{return new sm(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Ql(a,this.g.name);throw b;}};
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
function rm(a,b,c){a=a.g.openCursor(b.query,b.direction);return tm(a).then(function(d){return em(d,c)})}
function lm(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function mm(a,b){var c=new Promise(function(d,e){try{$l(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
lm.prototype.abort=function(){this.g.abort();this.h=!0;throw new X("EXPLICIT_ABORT");};
lm.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new jm(a),this.i.set(a,b));return b};
function sm(a){this.g=a}
r=sm.prototype;r.delete=function(a){return um(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
r.get=function(a){return dm(this.g.get(a))};
r.getKey=function(a){return dm(this.g.getKey(a))};
r.keyPath=function(){return this.g.keyPath};
r.unique=function(){return this.g.unique};
function um(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return tm(a).then(function(d){return em(d,c)})}
function vm(a,b){this.request=a;this.cursor=b}
function tm(a){return dm(a).then(function(b){return b?new vm(a,b):null})}
r=vm.prototype;r.advance=function(a){this.cursor.advance(a);return tm(this.request)};
r.continue=function(a){this.cursor.continue(a);return tm(this.request)};
r.delete=function(){return dm(this.cursor.delete()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.ja=function(){return this.cursor.value};
r.update=function(a){return dm(this.cursor.update(a))};function wm(a,b,c){return new Promise(function(d,e){function f(){q||(q=new gm(g.result,{closed:n}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Tc,k=c.Uc,l=c.yd,m=c.upgrade,n=c.closed,q;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&Fl("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:Hl(a)});var t=f(),u=new lm(g.transaction);m&&
m(t,function(z){return p.oldVersion<z&&p.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){Fl("IDB_UNEXPECTEDLY_CLOSED",{dbName:Hl(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function xm(a,b,c){c=void 0===c?{}:c;return wm(a,b,c)}
function ym(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return wa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Tc)&&c.addEventListener("blocked",function(){e()}),A(g,cm(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=xa(g),Sl(f,a,"",-1);})}
;function zm(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.j=0}
zm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return xm(a,b,c)};
zm.prototype.delete=function(a){a=void 0===a?{}:a;return ym(this.name,a)};
function Am(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Bm(a,b){if(!b)throw Tl("openWithToken",Hl(a.name));return Cm(a)}
function Cm(a){function b(){var f,g,h,k,l,m,n,q,p,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",wa(u,2),A(u,a.h(a.name,a.options.version,d),4);case 4:h=u.h;for(var z=a.options,C=[],P=w(Object.keys(z.ab)),Q=P.next();!Q.done;Q=P.next()){Q=Q.value;var fa=z.ab[Q],cb=void 0===fa.wd?Number.MAX_VALUE:fa.wd;!(h.g.version>=fa.ib)||h.g.version>=cb||h.g.objectStoreNames.contains(Q)||C.push(Q)}k=C;if(0===k.length){u.B(5);break}l=Object.keys(a.options.ab);m=h.objectStoreNames();
if(a.o<V("ytidb_reopen_db_retries",0))return a.o++,h.close(),El(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());if(!(a.j<V("ytidb_remake_db_retries",1))){u.B(6);break}a.j++;return A(u,a.delete(),7);case 7:return El(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());case 6:throw new Pl(m,l);case 5:return u.return(h);case 2:n=xa(u);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){u.B(8);break}return A(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:q=u.h;p=q.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw q.close(),a.i=!1,Am(a,p);return u.return(q);case 8:throw c(),n instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Sl(n,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw Am(a);if(a.g)return a.g;var d={Uc:function(f){f.close()},
closed:c,yd:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var Dm=new zm("YtIdbMeta",{ab:{databases:{ib:1}},upgrade:function(a,b){b(1)&&im(a,"databases",{keyPath:"actualName"})}});
function Em(a,b){var c;return B(function(d){if(1==d.g)return A(d,Bm(Dm,b),2);c=d.h;return d.return(hm(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return dm(f.g.put(a,void 0)).then(function(){})})}))})}
function Fm(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,Bm(Dm,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function Gm(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,Bm(Dm,b),2)):3!=e.g?(d=e.h,A(e,hm(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return rm(f.objectStore("databases"),{},function(g){a(g.ja())&&c.push(g.ja());return g.continue()})}),3)):e.return(c)})}
function Hm(a){return Gm(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Im,Jm=new function(){}(new function(){});
function Km(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=Bl();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Il)f=/WebKit\/([0-9]+)/.exec(Lb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Lb()),f=!(f&&602<=parseInt(f[1],10)));if(f||lc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
wa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,Em(d,Jm),4);case 4:return A(e,Fm("yt-idb-test-do-not-use",Jm),5);case 5:return e.return(!0);case 2:return xa(e),e.return(!1)}})}
function Lm(){if(void 0!==Im)return Im;Dl=!0;return Im=Km().then(function(a){Dl=!1;var b;if(null!=(b=Al())&&b.g){var c;b={hasSucceededOnce:(null==(c=Bl())?void 0:c.hasSucceededOnce)||a};var d;null==(d=Al())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Mm(){return E("ytglobal.idbToken_")||void 0}
function Nm(){var a=Mm();return a?Promise.resolve(a):Lm().then(function(b){(b=b?Jm:void 0)&&F("ytglobal.idbToken_",b);return b})}
;new Cg;function Om(a){if(!Qk())throw a=new X("AUTH_INVALID",{dbName:a}),El(a),a;var b=Rk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Pm(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",A(m,Nm(),2);case 2:g=m.h;if(!g)throw h=Tl("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),El(h),h;Gl(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Om(a);wa(m,3);return A(m,Em(k,g),5);case 5:return A(m,xm(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=xa(m),wa(m,7),A(m,Fm(k.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:xa(m);case 8:throw l;}})}
function Cn(a,b,c){c=void 0===c?{}:c;return Pm(a,b,!1,c)}
function Dn(a,b,c){c=void 0===c?{}:c;return Pm(a,b,!0,c)}
function En(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,Nm(),2);if(3!=e.g){c=e.h;if(!c)return e.return();Gl(a);d=Om(a);return A(e,ym(d.actualName,b),3)}return A(e,Fm(d.actualName,c),0)})}
function Fn(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,ym(d.actualName,b),2):A(e,Fm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Gn(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,Nm(),2);if(3!=d.g){b=d.h;if(!b)return d.return();Gl("LogsDatabaseV2");return A(d,Hm(b),3)}c=d.h;return A(d,Fn(c,a,b),0)})}
function Hn(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,Nm(),2);if(3!=d.g){c=d.h;if(!c)return d.return();Gl(a);return A(d,ym(a,b),3)}return A(d,Fm(a,c),0)})}
;function In(a,b){zm.call(this,a,b);this.options=b;Gl(a)}
y(In,zm);function Jn(a,b){var c;return function(){c||(c=new In(a,b));return c}}
In.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Mb?Dn:Cn)(a,b,Object.assign({},c))};
In.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Mb?Hn:En)(this.name,a)};
function Kn(a,b){return Jn(a,b)}
;var Ln={},Mn=Kn("ytGcfConfig",{ab:(Ln.coldConfigStore={ib:1},Ln.hotConfigStore={ib:1},Ln),Mb:!1,upgrade:function(a,b){b(1)&&(pm(im(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),pm(im(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Nn(a){return Bm(Mn(),a)}
function On(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},A(g,Nn(c),2);case 2:return e=g.h,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,km(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function Pn(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},A(h,Nn(d),2);case 2:return f=h.h,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,km(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function Qn(a){var b,c;return B(function(d){return 1==d.g?A(d,Nn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,hm(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return um(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
function Rn(a){var b,c;return B(function(d){return 1==d.g?A(d,Nn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,hm(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return um(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
;function Sn(){Xe.call(this);this.h=[];this.g=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],F("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(Sn,Xe);Sn.prototype.sa=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;Xe.prototype.sa.call(this)};function Tn(){this.h=0;this.i=new Sn}
function Un(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!U("start_client_gcf")){g.B(0);break}c&&(a.j=c,F("yt.gcf.config.hotConfigGroup",a.j||null));a.g(b);d=Mm();if(!d){g.B(3);break}if(c){g.B(4);break}return A(g,Rn(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return A(g,On(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function Vn(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!U("start_client_gcf"))return h.B(0);a.coldHashData=b;F("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Mm())?c?h.B(4):A(h,Qn(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return A(h,Pn(c,b,g,d),0)})}
Tn.prototype.g=function(a){this.hotHashData=a;F("yt.gcf.config.hotHashData",this.hotHashData||null)};function Wn(){return"INNERTUBE_API_KEY"in yj&&"INNERTUBE_API_VERSION"in yj}
function Xn(){return{gd:T("INNERTUBE_API_KEY"),hd:T("INNERTUBE_API_VERSION"),Pb:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),sc:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),jd:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),uc:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),wc:T("INNERTUBE_CONTEXT_HL"),vc:T("INNERTUBE_CONTEXT_GL"),kd:T("INNERTUBE_HOST_OVERRIDE")||"",md:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),ld:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Yn(a){var b={client:{hl:a.wc,gl:a.vc,clientName:a.sc,clientVersion:a.uc,configInfo:a.Pb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=D.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=Ij();0<c.length&&(b.request={internalExperimentFlags:c});Zn(a,void 0,b);$n(void 0,b);ao(void 0,b);bo(a,void 0,b);co(void 0,b);U("start_client_gcf")&&eo(void 0,b);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&
(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(Zj(T("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Zn(a,b,c){a=a.sc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Xd(b,Ui,96)||new Ui;var d=Ik();d=Object.keys(dj).indexOf(d);d=-1===d?null:d;null!==d&&ee(c,3,d);J(b,Ui,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=Ik())}
function $n(a,b){var c=E("yt.embedded_player.embed_url");c&&(a?(b=Xd(a,$i,7)||new $i,K(b,4,c),J(a,$i,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function ao(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=D.navigator)?0:c.deviceMemory)){var d;c=null==(d=D.navigator)?void 0:d.deviceMemory;a?Rd(a,95,zd(1E6*c)):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function bo(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Xd(b,Ti,62))?d:new Ti;K(c,6,a.appInstallData);J(b,Ti,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function co(a,b){a:{var c=Ok();if(c){var d=Kk[c.type||"unknown"]||"CONN_UNKNOWN";c=Kk[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?ee(a,61,Lk[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=Ok(),d=null!=d&&d.effectiveType?Nk.hasOwnProperty(d.effectiveType)?Nk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?ee(a,94,Mk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function fo(a,b,c){c=void 0===c?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.oe||T("AUTHORIZATION");if(!b)if(a)b="Bearer "+E("gapi.auth.getToken")().ne;else{Hk.g||(Hk.g=new Hk);a={};if(c=Te([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in yj||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in yj&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function eo(a,b){if(!Tn.g){var c=new Tn;Tn.g=c}c=Tn.g;var d=Y()-c.h;if(0!==c.h&&d<V("send_config_hash_timer"))c=void 0;else{d=E("yt.gcf.config.coldConfigData");var e=E("yt.gcf.config.hotHashData"),f=E("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Xd(a,Ti,62))?g:new Ti;K(b,1,c);K(b,3,d);b.g(e);J(a,Ti,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var go=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.tb;M.prototype.publish=M.prototype.bb;M.prototype.clear=M.prototype.clear;F("ytPubsub2Pubsub2Instance",go);F("ytPubsub2Pubsub2SubscribedKeys",E("ytPubsub2Pubsub2SubscribedKeys")||{});F("ytPubsub2Pubsub2TopicToKeys",E("ytPubsub2Pubsub2TopicToKeys")||{});F("ytPubsub2Pubsub2IsAsync",E("ytPubsub2Pubsub2IsAsync")||{});F("ytPubsub2Pubsub2SkipSubKey",null);function ho(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={Ce:a,Be:b},(b=E("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var io=void 0,jo=void 0;function ko(){if(!jo){var a=T("WORKER_SERIALIZATION_URL");if(a){if(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue){var b=sb();a=b?b.createScriptURL(a):a;a=new wb(a,xb)}else a=null;jo=a}else jo=null}return jo||void 0}
function lo(){var a=ko();if(!io&&void 0!==a){var b=Worker;a instanceof wb&&a.constructor===wb?a=a.g:(Ka(a),a="type_error:TrustedResourceUrl");io=new b(a,void 0)}return io}
;var mo=V("max_body_size_to_compress",5E5),no=V("min_body_size_to_compress",500),oo=!0,po=0,qo=0,ro=V("compression_performance_threshold_lr",250),so=V("slow_compressions_before_abandon_count",4),to=!1,uo=new Map,vo=1,wo=!0;function xo(){if("function"===typeof Worker&&ko()&&!to){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=uo.get(c.key);d&&(yo(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),uo.delete(c.key))}},b=lo();
b&&(b.addEventListener("message",a),b.onerror=function(){uo.clear()},to=!0)}}
function zo(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:Y(),ticks:{},infos:{}};if(oo)try{try{var g=(new Blob(b.split(""))).size}catch(n){Gj(n),g=null}if(null!=g&&(g>mo||g<no))d(a,c);else{if(U("gzip_gel_with_worker")&&(U("initial_gzip_use_main_thread")&&!wo||!U("initial_gzip_use_main_thread"))){to||xo();var h=lo();if(h&&!e){uo.set(vo,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:vo});vo++;return}}var k=Ve(b);var l=l||{};l.ed=!0;var m=new Oi(l);
m.push(k,!0);if(m.err)throw m.msg||vh[m.err];yo(m.result,f,a,c,d)}}catch(n){Gj(n),d(a,c)}else d(a,c)}
function yo(a,b,c,d,e){wo=!1;var f=Y();b.ticks.gelc=f;qo++;U("disable_compression_due_to_performance_degredation")&&f-b.startTime>=ro&&(po++,U("abandon_compression_after_N_slow_zips")?qo===V("compression_disable_point")&&po>so&&(oo=!1):oo=!1);U("gel_compression_csi_killswitch")||!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||ho("gel_compression",b,{sampleRate:.1});d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
;function Ao(a){a=Object.assign({},a);delete a.Authorization;var b=Te();if(b){var c=new ng;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Gc(c.digest(),3)}return a}
;var Bo;function Co(){Bo||(Bo=new zl("yt.innertube"));return Bo}
function Do(a,b,c,d){if(d)return null;d=Co().get("nextId",!0)||1;var e=Co().get("requests",!0)||{};e[d]={method:a,request:b,authState:Ao(c),requestTime:Math.round(Y())};Co().set("nextId",d+1,86400,!0);Co().set("requests",e,86400,!0);return d}
function Eo(a){var b=Co().get("requests",!0)||{};delete b[a];Co().set("requests",b,86400,!0)}
function Fo(a){var b=Co().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=Ao(fo(!1));nb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),Go(a,d.method,e,{}));delete b[c]}}Co().set("requests",b,86400,!0)}}
;function Ho(a){this.vb=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Ta=function(){};
this.now=Date.now;this.nb=!1;var b;this.Ic=null!=(b=a.Ic)?b:100;var c;this.Gc=null!=(c=a.Gc)?c:1;var d;this.Ec=null!=(d=a.Ec)?d:2592E6;var e;this.Dc=null!=(e=a.Dc)?e:12E4;var f;this.Fc=null!=(f=a.Fc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.Ab=!!a.Ab;var h;this.yb=null!=(h=a.yb)?h:.1;var k;this.Ib=null!=(k=a.Ib)?k:10;a.handleError&&(this.handleError=a.handleError);a.Ta&&(this.Ta=a.Ta);a.nb&&(this.nb=a.nb);a.vb&&(this.vb=a.vb);this.J=a.J;this.ha=a.ha;this.N=a.N;this.P=a.P;this.sendFn=a.sendFn;
this.Yb=a.Yb;this.Xb=a.Xb;Io(this)&&(!this.J||this.J("networkless_logging"))&&Jo(this)}
function Jo(a){Io(a)&&!a.nb&&(a.g=!0,a.Ab&&Math.random()<=a.yb&&a.N.Vc(a.I),Ko(a),a.P.ca()&&a.sb(),a.P.La(a.Yb,a.sb.bind(a)),a.P.La(a.Xb,a.ic.bind(a)))}
r=Ho.prototype;r.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Io(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.P.ca()&&Lo(c,d)}).catch(function(e){Lo(c,d);
Mo(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Io(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.P.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(1==k.g)return A(k,d.N.set(e,d.I).catch(function(l){Mo(d,l)}),2);
f(g,h);k.g=0})}}this.sendFn(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.sendFn(a,b,e.skipRetry);
Mo(d,g)})}else this.sendFn(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Io(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Sa(d.id,c.I):e=!0;c.P.Na&&c.J&&c.J("vss_network_hint")&&c.P.Na(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Sa(d.id,c.I)}).catch(function(g){Mo(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.sb=function(){var a=this;if(!Io(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.qa(function(){var b;return B(function(c){if(1==c.g)return A(c,a.N.oc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?A(c,Lo(a,b),3):(a.ic(),c.return());a.h&&(a.h=0,a.sb());c.g=0})},this.Ic))};
r.ic=function(){this.ha.ba(this.h);this.h=0};
function Lo(a,b){var c;return B(function(d){switch(d.g){case 1:if(!Io(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return A(d,a.N.od(b.id,a.I),3);case 3:(c=d.h)||a.Ta(Error("The request cannot be found in the database."));case 2:if(No(a,b,a.Ec)){d.B(4);break}a.Ta(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return A(d,a.N.Sa(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=Oo(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return A(d,a.N.Sa(b.id,a.I),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.g=0}})}
function Oo(a,b){if(!Io(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.g){case 1:g=Po(f);(h=Qo(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ib)){m.B(2);break}if(!a.P.Lb){m.B(3);break}return A(m,a.P.Lb(),3);case 3:if(a.P.ca()){m.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.B(6);
break}return A(m,a.N.Zb(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Ib)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.B(8);break}return b.sendCount<a.Gc?A(m,a.N.Zb(b.id,a.I,!0,h?!1:void 0),12):A(m,a.N.Sa(b.id,a.I),8);case 12:a.ha.qa(function(){a.P.ca()&&a.sb()},a.Fc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):A(h,a.N.Sa(b.id,a.I),2);a.P.Na&&a.J&&a.J("vss_network_hint")&&a.P.Na(!0);d(e,f);h.g=0})};
return b}
function No(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Ko(a){if(!Io(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.oc("QUEUED",a.I).then(function(b){b&&!No(a,b,a.Dc)?a.ha.qa(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.B(2):A(c,a.N.Zb(b.id,a.I),2);Ko(a);c.g=0})}):a.P.ca()&&a.sb()})}
function Mo(a,b){a.Kc&&!a.P.ca()?a.Kc(b):a.handleError(b)}
function Io(a){return!!a.I||a.vb}
function Po(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function Qo(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var Ro;
function So(){if(Ro)return Ro();var a={};Ro=Kn("LogsDatabaseV2",{ab:(a.LogsRequestsStore={ib:2},a),Mb:!1,upgrade:function(b,c,d){c(2)&&im(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),pm(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return Ro()}
;function To(a){return Bm(So(),a)}
function Uo(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,To(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,km(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=Y();Vo(c);return g.return(f)})}
function Wo(a,b){var c,d,e,f,g,h,k;return B(function(l){if(1==l.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(l,To(b),2);if(3!=l.g)return d=l.h,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,A(l,hm(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return um(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ja()&&(k=n.ja(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=Y();Vo(c);return l.return(k)})}
function Xo(a,b){var c;return B(function(d){if(1==d.g)return A(d,To(b),2);c=d.h;return d.return(hm(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",dm(f.g.put(g,void 0)).then(function(){return g})})}))})}
function Yo(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,To(b),2);e=f.h;return f.return(hm(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),dm(h.g.put(k,void 0)).then(function(){return k})):Xl.resolve(void 0)})}))})}
function Zo(a,b){var c;return B(function(d){if(1==d.g)return A(d,To(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function $o(a){var b,c;return B(function(d){if(1==d.g)return A(d,To(a),2);b=d.h;c=Y()-2592E6;return A(d,hm(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return rm(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function ap(){B(function(a){return A(a,Gn(),0)})}
function Vo(a){U("nwl_csi_killswitch")||ho("networkless_performance",a,{sampleRate:1})}
;var bp={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
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
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490};var cp={},dp=Kn("ServiceWorkerLogsDatabase",{ab:(cp.SWHealthLog={ib:1},cp),Mb:!0,upgrade:function(a,b){b(1)&&pm(im(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function ep(a){return Bm(dp(),a)}
function fp(a){var b,c;B(function(d){if(1==d.g)return A(d,ep(a),2);b=d.h;c=Y()-2592E6;return A(d,hm(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return rm(e.objectStore("SWHealthLog"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function gp(a){var b;return B(function(c){if(1==c.g)return A(c,ep(a),2);b=c.h;return A(c,b.clear("SWHealthLog"),0)})}
;var hp={},ip=0;function jp(a){var b=new Image,c=""+ip++;hp[c]=b;b.onload=b.onerror=function(){delete hp[c]};
b.src=a}
;function kp(){this.g=new Map;this.h=!1}
function lp(){if(!kp.g){var a=E("yt.networkRequestMonitor.instance")||new kp;F("yt.networkRequestMonitor.instance",a);kp.g=a}return kp.g}
kp.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
kp.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
kp.prototype.removeParams=function(a){return a.split("?")[0]};
kp.prototype.removeParams=kp.prototype.removeParams;kp.prototype.isEndpointCFR=kp.prototype.isEndpointCFR;kp.prototype.requestComplete=kp.prototype.requestComplete;kp.getInstance=lp;var mp;function np(){mp||(mp=new zl("yt.offline"));return mp}
function op(a){if(U("offline_error_handling")){var b=np().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);np().set("errors",b,2592E3,!0)}}
;function Z(){xf.call(this);var a=this;this.i=!1;this.h=Df();this.h.La("networkstatus-online",function(){if(a.i&&U("offline_error_handling")){var b=np().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new Pk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;Fj(d)}np().set("errors",{},2592E3,!0)}}})}
y(Z,xf);function pp(){if(!Z.g){var a=E("yt.networkStatusManager.instance")||new Z;F("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
r=Z.prototype;r.ca=function(){return this.h.ca()};
r.Na=function(a){this.h.h=a};
r.cd=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
r.Yc=function(){this.i=!0};
r.La=function(a,b){return this.h.La(a,b)};
r.Lb=function(a){a=Bf(this.h,a);a.then(function(b){U("use_cfr_monitor")&&lp().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Lb;Z.prototype.listen=Z.prototype.La;Z.prototype.enableErrorFlushing=Z.prototype.Yc;Z.prototype.getWindowStatus=Z.prototype.cd;Z.prototype.networkStatusHint=Z.prototype.Na;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=pp;function qp(a){a=void 0===a?{}:a;xf.call(this);var b=this;this.h=this.o=0;this.i=pp();var c=E("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Kb?(this.Kb=a.Kb,c("networkstatus-online",function(){rp(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){rp(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){yf(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){yf(b,"publicytnetworkstatus-offline")})))}
y(qp,xf);qp.prototype.ca=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
qp.prototype.Na=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
qp.prototype.Lb=function(a){var b=this,c;return B(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return U("skip_network_check_if_cfr")&&lp().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Na((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function rp(a,b){a.Kb?a.h?(Ef.ba(a.o),a.o=Ef.qa(function(){a.j!==b&&(yf(a,b),a.j=b,a.h=Y())},a.Kb-(Y()-a.h))):(yf(a,b),a.j=b,a.h=Y()):yf(a,b)}
;var sp;function tp(){var a=Ho.call;sp||(sp=new qp({se:!0,re:!0}));a.call(Ho,this,{N:{Vc:$o,Sa:Zo,oc:Wo,od:Xo,Zb:Yo,set:Uo},P:sp,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;Gj(new Pk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else Fj(b)},
Ta:Gj,sendFn:up,now:Y,Kc:op,ha:yl(),Yb:"publicytnetworkstatus-online",Xb:"publicytnetworkstatus-offline",Ab:!0,yb:.1,Ib:V("potential_esf_error_limit",10),J:U,nb:!(Qk()&&"www.youtube-nocookie.com"!==ac(document.location.toString()))});this.i=new Cg;U("networkless_immediately_drop_all_requests")&&ap();Hn("LogsDatabaseV2")}
y(tp,Ho);function vp(){var a=E("yt.networklessRequestController.instance");a||(a=new tp,F("yt.networklessRequestController.instance",a),U("networkless_logging")&&Nm().then(function(b){a.I=b;Jo(a);a.i.resolve();a.Ab&&Math.random()<=a.yb&&a.I&&fp(a.I);U("networkless_immediately_drop_sw_health_store")&&wp(a)}));
return a}
tp.prototype.writeThenSend=function(a,b){b||(b={});Qk()||(this.g=!1);Ho.prototype.writeThenSend.call(this,a,b)};
tp.prototype.sendThenWrite=function(a,b,c){b||(b={});Qk()||(this.g=!1);Ho.prototype.sendThenWrite.call(this,a,b,c)};
tp.prototype.sendAndWrite=function(a,b){b||(b={});Qk()||(this.g=!1);Ho.prototype.sendAndWrite.call(this,a,b)};
tp.prototype.awaitInitialization=function(){return this.i.promise};
function wp(a){var b;B(function(c){if(!a.I)throw b=Tl("clearSWHealthLogsDb"),b;return c.return(gp(a.I).catch(function(d){a.handleError(d)}))})}
function up(a,b,c,d){d=void 0===d?!1:d;b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&xp(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)pk(a,void 0,"POST",f);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))pk(a,
void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new Za({url:a});if(k.i&&k.h||k.j){var l=$b(a.match(Zb)[5]||null);var m=!(!l||!l.endsWith("/aclk")||"1"!==fc(a,"ri"));break b}}catch(q){}m=!1}if(m){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var n=!0;break b}}catch(q){}n=!1}c=n?!0:!1}else c=!1;c||jp(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),zo(a,b.postBody,b,mk,d)):zo(a,JSON.stringify(b.postParams),
b,uk,d):mk(a,b)}
function xp(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){lp().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){lp().requestComplete(a,!0);d(e,f)}}
;var yp=D.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};F("ytNetworklessLoggingInitializationOptions",yp);function zp(a){var b=this;this.config_=null;a?this.config_=a:Wn()&&(this.config_=Xn());Tk(function(){Fo(b)},5E3)}
zp.prototype.isReady=function(){!this.config_&&Wn()&&(this.config_=Xn());return!!this.config_};
function Go(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=Do(b,c,l,k)),u)){var z=g.onSuccess,C=g.onFetchSuccess;g.onSuccess=function(fa,cb){Eo(u);z(fa,cb)};
c.onFetchSuccess=function(fa,cb){Eo(u);C(fa,cb)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?vp().writeThenSend(p,g):vp().sendAndWrite(p,g);
else if(d.compress){var P=!d.networklessOptions.writeThenSend;if(g.postBody){var Q=g.postBody;"string"!==typeof Q&&(Q=JSON.stringify(g.postBody));zo(p,Q,g,mk,P)}else zo(p,JSON.stringify(g.postParams),g,uk,P)}else U("web_all_payloads_via_jspb")?mk(p,g):uk(p,g)}catch(fa){if("InvalidAccessError"==fa.name)u&&(Eo(u),u=0),Gj(Error("An extension is blocking network request."));else throw fa;}u&&Tk(function(){Fo(a)},5E3)}
!T("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Gj(new Pk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new Pk("innertube xhrclient not ready",b,c,d);Fj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.kd)&&(h=f);var k=a.config_.md||!1,l=fo(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.hd+"/"+b,n={alt:"json"},q=a.config_.ld&&f;q=q&&f.startsWith("Bearer");q||(n.key=a.config_.gd);var p=ak(""+h+m,n||{},!0);E("ytNetworklessLoggingInitializationOptions")&&
yp.isNwlInitialized?Lm().then(function(t){e(t)}):e(!1)}
;function Ap(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Bp=D.ytPubsubPubsubInstance||new M,Cp=D.ytPubsubPubsubSubscribedKeys||{},Dp=D.ytPubsubPubsubTopicToKeys||{},Ep=D.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.tb;M.prototype.publish=M.prototype.bb;M.prototype.clear=M.prototype.clear;F("ytPubsubPubsubInstance",Bp);F("ytPubsubPubsubTopicToKeys",Dp);F("ytPubsubPubsubIsSynchronous",Ep);F("ytPubsubPubsubSubscribedKeys",Cp);var Fp=Symbol("injectionDeps");function Gp(){this.key=Tn}
function Hp(){this.h=new Map;this.g=new Map}
Hp.prototype.resolve=function(a){return a instanceof Gp?Ip(this,a.key,[],!0):Ip(this,a,[])};
function Ip(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Cd)var e=d.Cd;else if(d.Bd)e=d[Fp]?Jp(a,d[Fp],c):[],e=d.Bd.apply(d,x(e));else if(d.Ad){e=d.Ad;var f=e[Fp]?Jp(a,e[Fp],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Ae||a.g.set(b,e);return e}
function Jp(a,b,c){return b?b.map(function(d){return d instanceof Gp?Ip(a,d.key,c,!0):Ip(a,d,c)}):[]}
;var Kp;function Lp(){Kp||(Kp=new Hp);return Kp}
;var Mp=window;function Np(){var a,b;return"h5vcc"in Mp&&(null==(a=Mp.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Mp.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Mp&&Mp.performance.mark&&Mp.performance.measure?2:0}
function Op(a){switch(Np()){case 1:Mp.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Mp.performance.mark(a+"-start");break;case 0:break;default:qe()}}
function Pp(a){switch(Np()){case 1:Mp.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Mp.performance.mark(c);Mp.performance.measure(a,b,c);break;case 0:break;default:qe()}}
;var Qp=U("web_enable_lifecycle_monitoring")&&0!==Np(),Rp=U("web_enable_lifecycle_monitoring");function Sp(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?yl():d;this.j=c;this.h=d;this.i=new Cg;this.g=a;for(a={Ja:0};a.Ja<this.g.length;a={pb:a.pb,Ja:a.Ja},a.Ja++)a.pb=this.g[a.Ja],c=function(e){return function(){e.pb.Rb();b.g[e.Ja].Jb=!0;b.g.every(function(f){return!0===f.Jb})&&b.i.resolve()}}(a),d=this.h.Ga(c,Tp(this,a.pb)),this.g[a.Ja]=Object.assign({},a.pb,{Rb:c,
jobId:d})}
function Up(a){var b=Array.from(a.g.keys()).sort(function(d,e){return Tp(a,a.g[e])-Tp(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Jb||(a.h.ba(c.jobId),a.h.Ga(c.Rb,10))}
Sp.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Jb||this.h.ba(b.jobId),b.Jb=!0;this.i.resolve()};
function Tp(a,b){var c;return null!=(c=b.priority)?c:a.j}
;function Vp(a){this.state=a;this.i=[];this.o=void 0;this.H={};Qp&&Op(this.state)}
Vp.prototype.install=function(a){this.i.push(a);return this};
function Wp(a){Qp&&Pp(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Da}):d.from===a.state&&"none"===d.Da});
if(b){a.h&&(Up(a.h),a.h=void 0);Rp&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";Qp&&Op(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(Xp(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function Xp(a,b){var c=b.filter(function(e){return 10===Yp(a,e)}),d=b.filter(function(e){return 10!==Yp(a,e)});
return a.H.ze?function(){var e=Fa.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.oa.apply(a,[c].concat(x(e))),2);a.u.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Fa.apply(0,arguments);
a.ya.apply(a,[c].concat(x(e)));a.u.apply(a,[d].concat(x(e)))}}
Vp.prototype.ya=function(a){for(var b=Fa.apply(1,arguments),c=yl(),d=w(a),e=d.next(),f={};!e.done;f={Wa:f.Wa},e=d.next())f.Wa=e.value,c.hb(function(g){return function(){Zp(g.Wa.name);g.Wa.kb.apply(g.Wa,x(b));$p(g.Wa.name)}}(f))};
Vp.prototype.oa=function(a){var b=Fa.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=yl(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.Ka=e.value;f.jb=void 0;g=function(k){return function(){Zp(k.Ka.name);var l=k.Ka.kb.apply(k.Ka,x(b));"function"===typeof(null==l?void 0:l.then)?k.jb=l.then(function(){$p(k.Ka.name)}):$p(k.Ka.name)}}(f);
c.hb(g);return f.jb?A(h,f.jb,3):h.B(3)}f={Ka:f.Ka,jb:f.jb};e=d.next();return h.B(2)})};
Vp.prototype.u=function(a){var b=Fa.apply(1,arguments),c=this,d=a.map(function(e){return{Rb:function(){Zp(e.name);e.kb.apply(e,x(b));$p(e.name)},
priority:Yp(c,e)}});
d.length&&(this.h=new Sp(d))};
function Yp(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function Zp(a){Qp&&a&&Op(a)}
function $p(a){Qp&&a&&Pp(a)}
da.Object.defineProperties(Vp.prototype,{j:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function aq(a){Vp.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Da:"application_navigating",action:this.M},{from:"application_navigating",Da:"none",action:this.S},{from:"application_navigating",Da:"application_navigating",action:function(){}},
{from:"none",Da:"none",action:function(){}}]}
var bq;y(aq,Vp);aq.prototype.M=function(a,b){var c=this;this.g=Tk(function(){"application_navigating"===c.j&&Wp(c)},5E3);
a(null==b?void 0:b.event)};
aq.prototype.S=function(a,b){this.g&&(Ef.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function cq(){bq||(bq=new aq);return bq}
;var dq=[];F("yt.logging.transport.getScrapedGelPayloads",function(){return dq});function eq(){this.store={};this.g={}}
eq.prototype.storePayload=function(a,b){a=fq(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
eq.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=gq(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
eq.prototype.extractMatchingEntries=function(a){a=gq(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
eq.prototype.getSequenceCount=function(a){a=gq(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function gq(a,b){var c=fq(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&fq(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(hq(b.auth,g[0])){var h=b.isJspb;hq(void 0===h?"undefined":h?"true":"false",g[1])&&hq(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),hq(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function hq(a,b){return void 0===a||"undefined"===a?!0:a===b}
eq.prototype.getSequenceCount=eq.prototype.getSequenceCount;eq.prototype.extractMatchingEntries=eq.prototype.extractMatchingEntries;eq.prototype.smartExtractMatchingEntries=eq.prototype.smartExtractMatchingEntries;eq.prototype.storePayload=eq.prototype.storePayload;function fq(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var iq=V("initial_gel_batch_timeout",2E3),jq=V("gel_queue_timeout_max_ms",6E4),kq=Math.pow(2,16)-1,lq=V("gel_min_batch_size",5),mq=void 0;function nq(){this.j=this.g=this.h=0;this.i=!1}
var oq=new nq,pq=new nq,qq=new nq,rq=new nq,sq,tq=!0,uq=1,vq=new Map,wq=D.ytLoggingTransportTokensToCttTargetIds_||{};F("ytLoggingTransportTokensToCttTargetIds_",wq);var xq=D.ytLoggingTransportTokensToJspbCttTargetIds_||{};F("ytLoggingTransportTokensToJspbCttTargetIds_",xq);var yq={};function zq(){var a=E("yt.logging.ims");a||(a=new eq,F("yt.logging.ims",a));return a}
function Aq(a,b){if("log_event"===a.endpoint){Bq(a);var c=Cq(a),d=Dq(a.payload)||"",e=Eq(d),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=Fq(e.tier);if(400===f){Gq(a,b);return}}yq[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};zq().storePayload(e,a.payload);Hq(b,c,!1,e,Iq(d))}}
function Jq(a,b,c){if("log_event"===b.endpoint){Bq(void 0,b);var d=Cq(b,!0),e=Eq(a),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=Fq(e.tier);if(400===f){Kq(a,b,c);return}}yq[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};zq().storePayload(e,b.payload.toJSON());Hq(c,d,!0,e,Iq(a))}}
function Hq(a,b,c,d,e){function f(){Lq({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(mq=new a);a=V("tvhtml5_logging_max_batch_ads_fork")||V("web_logging_max_batch")||100;var g=Y(),h=Mq(c,d.tier),k=h.j;e&&(h.i=!0);e=0;d&&(e=zq().getSequenceCount(d));1E3<=e?f():e>=a?sq||(sq=Nq(function(){f();sq=void 0},0)):10<=g-k&&(Oq(c,d.tier),h.j=g)}
function Gq(a,b){if("log_event"===a.endpoint){Bq(a);var c=Cq(a),d=new Map;d.set(c,[a.payload]);var e=Dq(a.payload)||"";b&&(mq=new b);return new Dg(function(f,g){mq&&mq.isReady()?Pq(d,mq,f,g,{bypassNetworkless:!0},!0,Iq(e)):f()})}}
function Kq(a,b,c){if("log_event"===b.endpoint){Bq(void 0,b);var d=Cq(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(mq=new c);return new Dg(function(f){mq&&mq.isReady()?Qq(e,mq,f,{bypassNetworkless:!0},!0,Iq(a)):f()})}}
function Cq(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new tj;c.videoId?Ud(d,1,ce,Ad(c.videoId)):c.playlistId&&Ud(d,2,ce,Ad(c.playlistId));xq[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),wq[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function Lq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Dg(function(e,f){var g=Mq(c,d),h=g.i;g.i=!1;Rq(g.h);Rq(g.g);g.g=0;mq&&mq.isReady()?void 0===d&&U("enable_web_tiered_gel")?Sq(e,f,a,b,c,300,h):Sq(e,f,a,b,c,d,h):(Oq(c,d),e())})}
function Sq(a,b,c,d,e,f,g){var h=mq;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},n={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=U("enable_web_tiered_gel")?zq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):zq().extractMatchingEntries(n),k.set(d,b),Qq(k,h,a,c,!1,g)):(k=U("enable_web_tiered_gel")?zq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):zq().extractMatchingEntries(n),l.set(d,k),Pq(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(yq));for(d=b.next();!d.done;d=b.next())l=d.value,f=U("enable_web_tiered_gel")?zq().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):zq().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<f.length&&k.set(l,f),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete yq[l];Qq(k,h,a,c,!1,g)}else{k=w(Object.keys(yq));for(d=k.next();!d.done;d=k.next())m=d.value,n=U("enable_web_tiered_gel")?zq().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):zq().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<n.length&&l.set(m,n),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete yq[m];Pq(l,h,a,b,c,!1,g)}}
function Oq(a,b){function c(){Lq({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Mq(a,b),e=d===rq||d===qq?5E3:jq;U("web_gel_timeout_cap")&&!d.g&&(e=Nq(function(){c()},e),d.g=e);
Rq(d.h);e=T("LOGGING_BATCH_TIMEOUT",V("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&tq&&(e=iq);e=Nq(function(){0<V("gel_min_batch_size")?zq().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=lq&&c():c()},e);
d.h=e}
function Pq(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(Y()),k=a.size,l=Tq(g);a=w(a);var m=a.next();for(g={};!m.done;g={Eb:g.Eb,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,Gb:g.Gb,Fb:g.Fb},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=ob({context:Yn(b.config_||Xn())});if(!Ma(n)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=wq[m])&&Uq(g.batchRequest,m,n);delete wq[m];g.dangerousLogToVisitorSession=
"visitorOnlyApprovedKey"===m;Vq(g.batchRequest,h,g.dangerousLogToVisitorSession);Wq(e);g.Gb=function(q){U("start_client_gcf")&&Ef.qa(function(){return B(function(p){return A(p,Xq(q),0)})});
k--;k||c()};
g.Eb=0;g.Fb=function(q){return function(){q.Eb++;if(e.bypassNetworkless&&1===q.Eb)try{Go(b,l,q.batchRequest,Yq({writeThenSend:!0},q.dangerousLogToVisitorSession,q.Gb,q.Fb,f)),tq=!1}catch(p){Fj(p),d()}k--;k||c()}}(g);
try{Go(b,l,g.batchRequest,Yq(e,g.dangerousLogToVisitorSession,g.Gb,g.Fb,f)),tq=!1}catch(q){Fj(q),d()}}}
function Qq(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(Y()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value).next().value,n=a.get(m);l=new uj;var q=b.config_||Xn(),p=new cj,t=new Wi;K(t,1,q.wc);K(t,2,q.vc);ee(t,16,q.jd);K(t,17,q.uc);if(q.Pb){var u=q.Pb,z=new Ti;u.coldConfigData&&K(z,1,u.coldConfigData);u.appInstallData&&K(z,6,u.appInstallData);u.coldHashData&&K(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);J(t,Ti,62,z)}if((u=D.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);Rd(t,65,u)}u=T("EXPERIMENTS_TOKEN","");""!==u&&K(t,54,u);u=Ij();if(0<u.length){z=new Zi;for(var C=0;C<u.length;C++){var P=new Xi;K(P,1,u[C].key);Ud(P,2,Yi,Ad(u[C].value));$d(z,15,Xi,P)}J(p,Zi,5,z)}Zn(q,t);$n(p);ao(t);bo(q,t);co(t);U("start_client_gcf")&&eo(t);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(q=new bj,K(q,3,T("DELEGATED_SESSION_ID")));!U("fill_delegate_context_in_gel_killswitch")&&
(q=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(u=Xd(p,bj,3)||new bj,q=K(u,18,q),J(p,bj,3,q));q=t;u=w(Object.entries(Zj(T("DEVICE",""))));for(z=u.next();!z.done;z=u.next())C=w(z.value),z=C.next().value,C=C.next().value,"cbrand"===z?K(q,12,C):"cmodel"===z?K(q,13,C):"cbr"===z?K(q,87,C):"cbrver"===z?K(q,88,C):"cos"===z?K(q,18,C):"cosver"===z?K(q,19,C):"cplatform"===z&&ee(q,42,Jk(C));J(p,Wi,1,t);J(l,cj,1,p);if(t=xq[m])a:{if(be(t,1))p=1;else if(t.getPlaylistId())p=2;else break a;J(l,tj,4,t);
t=Xd(l,cj,1)||new cj;q=Xd(t,bj,3)||new bj;u=new aj;K(u,2,m);ee(u,1,p);$d(q,12,aj,u);J(t,bj,3,q)}delete xq[m];m="visitorOnlyApprovedKey"===m;Zq()||Rd(l,2,zd(g));!m&&(p=T("EVENT_ID"))&&(t=$q(),q=new sj,K(q,1,p),Rd(q,2,zd(t)),J(l,sj,5,q));Wq(d);if(U("jspb_serialize_with_worker")&&(p=lo())&&d.writeThenSend){vq.set(uq,{client:b,resolve:c,networklessOptions:d,isIsolated:e,useVSSEndpoint:f,dangerousLogToVisitorSession:m,requestsOutstanding:h});p.postMessage({op:"gelBatchToSerialize",batchRequest:l.toJSON(),
clientEvents:n,key:uq});uq++;break}if(n){p=[];for(t=0;t<n.length;t++)try{p.push(new qj(n[t]))}catch(Q){Fj(new Pk("Transport failed to deserialize "+String(n[t])))}n=p}else n=[];n=w(n);for(p=n.next();!p.done;p=n.next())$d(l,3,qj,p.value);n={startTime:Y(),ticks:{},infos:{}};l=ge(l);n.ticks.geljspc=Y();U("log_jspb_serialize_latency")&&ho("gel_jspb_serialize",n,{sampleRate:.1});ar(l,b,c,d,e,f,m,h)}}
function ar(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=Tq(f);d=Yq(d,g,function(k){U("start_client_gcf")&&Ef.qa(function(){return B(function(l){return A(l,Xq(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Go(b,f,"",d);tq=!1}
function Wq(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function Yq(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,qe:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};Zq()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function Vq(a,b,c){Zq()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&(c=$q(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function $q(){var a=T("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*kq/2));a++;a>kq&&(a=1);zj("BATCH_CLIENT_COUNTER",a);return a}
function Uq(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Bq(a,b){if(!E("yt.logging.transport.enableScrapingForTest")){var c=Hj("il_payload_scraping");if("enable_il_payload_scraping"===(void 0!==c?String(c):""))dq=[],F("yt.logging.transport.enableScrapingForTest",!0),F("yt.logging.transport.scrapedPayloadsForTesting",dq),F("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),F("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
F("yt.logging.transport.scrapeClientEvent",!0);else return}c=E("yt.logging.transport.scrapedPayloadsForTesting");var d=E("yt.logging.transport.payloadToScrape");b&&(b=E("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);b=E("yt.logging.transport.scrapeClientEvent");if(d&&1<=d.length)for(var e=0;e<d.length;e++)if(a&&a.payload[d[e]])if(b)c.push(a.payload);else{var f=void 0;c.push((null==(f=a)?void 0:f.payload)[d[e]])}F("yt.logging.transport.scrapedPayloadsForTesting",
c)}
function Zq(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function Nq(a,b){return U("transport_use_scheduler")?U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?Tk(function(){if("none"===cq().j)a();else{var c={};cq().install((c.none={kb:a},c))}},b):Tk(a,b):Rj(a,b)}
function Rq(a){U("transport_use_scheduler")?Ef.ba(a):window.clearTimeout(a)}
function Xq(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var q=d?d[Si.name]:void 0;e=q;g=null==(f=d)?void 0:f.hotHashData;q=d?d[Ri.name]:void 0;h=q;l=null==(k=d)?void 0:k.coldHashData;return(m=Lp().resolve(new Gp))?g?e?A(n,Un(m,g,e),2):A(n,Un(m,g),2):n.B(2):n.return()}return l?h?A(n,Vn(m,l,h),0):A(n,Vn(m,l),0):n.B(0)})}
function Mq(a,b){b=void 0===b?200:b;return a?300===b?rq:pq:300===b?qq:oq}
function Eq(a){if(U("enable_web_tiered_gel")){a=bp[a||""];var b,c;if(null==Lp().resolve(new Gp))var d=void 0;else{var e=null!=(d=E("yt.gcf.config.hotConfigGroup"))?d:T("RAW_HOT_CONFIG_GROUP");d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function Dq(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,bp[b])return b}
function Fq(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Iq(a){return"gelDebuggingEvent"===a}
function Tq(a){return(void 0===a?0:a)&&U("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var br=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",br);
function cr(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Ap();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:dr(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete br[d.sequenceGroup]);(d.sendIsolatedPayload?Gq:Aq)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function er(a){Lq(void 0,void 0,void 0===a?!1:a)}
function dr(a){br[a]=a in br?br[a]+1:0;return br[a]}
;var fr=[];function gr(a,b,c){c=void 0===c?{}:c;var d=zp;T("ytLoggingEventsDefaultDisabled",!1)&&zp===zp&&(d=null);U("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=Ap(),c.timestamp=Y()),fr.push({Ac:a,payload:b,options:c})):cr(a,b,d,c)}
;var hr=D.ytLoggingGelSequenceIdObj_||{};F("ytLoggingGelSequenceIdObj_",hr);function ir(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;T("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:zp;c=void 0===c?{}:c;var e=Math.round(c.timestamp||Y());Rd(b,1,zd(e<Number.MAX_SAFE_INTEGER?e:0));e=new pj;if(c.lact)Rd(e,1,zd(isFinite(c.lact)?c.lact:-1));else if(c.timestamp)Rd(e,1,zd(-1));else{var f=Ap();Rd(e,1,zd(isFinite(f)?f:-1))}if(c.sequenceGroup&&!U("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=dr(f),h=new oj;Rd(h,2,zd(g));K(h,1,f);J(e,oj,3,h);c.endOfSequence&&delete hr[c.sequenceGroup]}J(b,
pj,33,e);(c.sendIsolatedPayload?Kq:Jq)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var jr=new Set,kr=0,lr=0,mr=0,nr=[],or=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function pr(a){try{jr.add(a.message)}catch(b){}kr++}
function qr(){for(var a=w(or),b=a.next();!b.done;b=a.next()){var c=Lb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function rr(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}mk(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function sr(){var a;return B(function(b){return(a=Xf())?b.return(a.then(function(c){c=ge(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Gc(d,3)})):b.return(Promise.resolve(null))})}
;var tr={};function ur(a){return tr[a]||(tr[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var vr={},wr=[],Ug=new M,xr={};function yr(){for(var a=w(wr),b=a.next();!b.done;b=a.next())b=b.value,b()}
function zr(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[ur(b)]:a.getAttribute("data-"+b):null;return c}
function Ar(a){Ug.bb.apply(Ug,arguments)}
;function Br(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Cr(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Dr(a,b,c){Er||(Er={},Fr=new Set,Qj(window,"message",function(d){a:if(Fr.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Er[e.id];f&&d.origin===f.Sc&&(d=f.Dd,d.H=!0,d.H&&(db(d.u,d.sendMessage,d),d.u.length=0),d.fc(e))}}));
a=String(Cr(a,"host"));Er[c]={Dd:b,Sc:a};Fr.add(a)}
var Er=null,Fr=null;var Gr=window;
function Hr(a,b,c){this.o=this.g=this.h=null;this.i=0;this.H=!1;this.u=[];this.j=null;this.S={};if(!a)throw Error("YouTube player element ID required.");this.id=Oa(this);this.M=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?bc(a.src):"https://web.archive.org/web/20250703150216/https://www.youtube.com"),this.h=new Br(b),c||(b=Ir(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Oa(this.g)),vr[this.g.id]=this,window.postMessage){this.j=
new M;Jr(this);b=Cr(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in xr)xr.hasOwnProperty(e)&&Kr(this,e)}}
r=Hr.prototype;r.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
r.getIframe=function(){return this.g};
r.fc=function(a){Lr(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);Mr(this,a);return this};
function Kr(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.M===b[0]&&Mr(a,c)}}
r.destroy=function(){this.g&&this.g.id&&(vr[this.g.id]=null);We(this.j);if(this.o){var a=this.g,b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Er&&(Er[this.id]=null);this.h=null;a=this.g;for(var c in mb)mb[c][0]==a&&Oj(c);this.o=this.g=null};
r.kc=function(){return{}};
function Nr(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.u.push(b)}
function Lr(a,b,c){a.j.Ha||(c={target:a,data:c},a.j.bb(b,c),Ar(a.M+"."+b,c))}
function Ir(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Cr(a.h,"title"));(b=Cr(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Cr(a.h,"height"))&&
c.setAttribute("height",b.toString());Gr.yt_embedsEnableIframeWithLazyLoad&&c.setAttribute("loading","lazy");var g=a.kc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&db(["debugjs","debugcss"],function(k){var l=fc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Cr(a.h,"host")+("/embed/"+Cr(a.h,"videoId"))+"?"+dc(g);Gr.yt_embedsEnableUaChProbe?sr().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=xe(l.href).toString();te(c,ye(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Gr.yt_embedsEnableIframeSrcWithIntent?(te(c,ye(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
r.Bc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Jr(a){Dr(a.h,a,a.id);a.i=Sj(a.Bc.bind(a));Qj(a.g,"load",function(){window.clearInterval(a.i);a.i=Sj(a.Bc.bind(a))})}
function Mr(a,b){a.S[b]||(a.S[b]=!0,Nr(a,"addEventListener",[b]))}
r.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[bc(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(wc){if(wc.name&&"SyntaxError"===wc.name){if(!(wc.message&&0<wc.message.indexOf("target origin ''"))){var e=void 0,f=wc;e=void 0===e?{}:e;e.name=T("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=T("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(U("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=kr)){var m=void 0,n=void 0,q=f,p=e,t=le(q),u=t.message||"Unknown Error",
z=t.name||"UnknownError",C=t.stack||q.h||"Not available";if(C.startsWith(z+": "+u)){var P=C.split("\n");P.shift();C=P.join("\n")}var Q=t.lineNumber||"Not available",fa=t.fileName||"Not available",cb=C,Ua=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(var Ia=0;Ia<q.args.length&&!(Ua=Ek(q.args[Ia],"params."+Ia,p,Ua),500<=Ua);Ia++);else if(q.hasOwnProperty("params")&&q.params){var ha=q.params;if("object"===typeof q.params)for(n in ha){if(ha[n]){var pa="params."+n,qa=Gk(ha[n]);p[pa]=qa;Ua+=
pa.length+qa.length;if(500<Ua)break}}else p.params=Gk(ha)}if(nr.length)for(var ea=0;ea<nr.length&&!(Ua=Ek(nr[ea],"params.context."+ea,p,Ua),500<=Ua);ea++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:u,name:z,lineNumber:Q,fileName:fa,stack:cb,params:p,sampleWeight:1},Qm=Number(q.columnNumber);isNaN(Qm)||(W.lineNumber=W.lineNumber+":"+Qm);if("IGNORED"===q.level)m=0;else a:{for(var Rm=Ak(),Sm=w(Rm.Ba),Kh=Sm.next();!Kh.done;Kh=Sm.next()){var Tm=
Kh.value;if(W.message&&W.message.match(Tm.ue)){m=Tm.weight;break a}}for(var Um=w(Rm.za),Lh=Um.next();!Lh.done;Lh=Um.next()){var Vm=Lh.value;if(Vm.kb(W)){m=Vm.weight;break a}}m=1}W.sampleWeight=m;for(var Wm=w(vk),Mh=Wm.next();!Mh.done;Mh=Wm.next()){var Nh=Mh.value;if(Nh.Hb[W.name])for(var Xm=w(Nh.Hb[W.name]),Oh=Xm.next();!Oh.done;Oh=Xm.next()){var Ym=Oh.value,Le=W.message.match(Ym.regexp);if(Le){W.params["params.error.original"]=Le[0];for(var Ph=Ym.groups,Zm={},xc=0;xc<Ph.length;xc++)Zm[Ph[xc]]=Le[xc+
1],W.params["params.error."+Ph[xc]]=Le[xc+1];W.message=Nh.Vb(Zm);break}}}W.params||(W.params={});var $m=Ak();W.params["params.errorServiceSignature"]="msg="+$m.Ba.length+"&cb="+$m.za.length;W.params["params.serviceWorker"]="false";D.document&&D.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));ub("sample").constructor!==tb&&(W.params["params.fconst"]="true");var od=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(od);
if(0!==od.sampleWeight&&!jr.has(od.message))if(h&&U("web_enable_error_204")){var an=od;rr(void 0===g?"ERROR":g,an);pr(an)}else{var Qh=void 0,Rh=void 0,bn=void 0,cn=void 0,Sh=void 0,O=od,Qb=g;Qb=void 0===Qb?"ERROR":Qb;if("ERROR"===Qb){Bk.bb("handleError",O);if(U("record_app_crashed_web")&&0===mr&&1===O.sampleWeight)if(mr++,U("errors_via_jspb")){var Tr=new nj;Sh=ee(Tr,1,1);if(!U("report_client_error_with_app_crash_ks")){var Ur=new mj,Vr=new lj,Wr=new kj,Xr=new jj;var Yr=K(Xr,1,O.message);var Zr=J(Wr,
jj,3,Yr);cn=J(Vr,kj,5,Zr);bn=J(Ur,lj,9,cn);J(Sh,mj,4,bn)}var dn=U("jspb_sparse_encoded_pivot")?new qj([{}]):new qj;Yd(dn,nj,20,rj,Sh);ir("appCrashed",dn)}else{var en={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};U("report_client_error_with_app_crash_ks")||(en.systemHealth={crashData:{clientError:{logMessage:{message:O.message}}}});gr("appCrashed",en)}lr++}else"WARNING"===Qb&&Bk.bb("handleWarning",O);if(U("kevlar_gel_error_routing"))a:{var pd=Qb;if(U("errors_via_jspb")){if(qr())Rh=void 0;else{var yc=new gj;
K(yc,1,O.stack);O.fileName&&K(yc,4,O.fileName);var gb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==gb.length&&(1!==gb.length||isNaN(Number(gb[0]))?2!==gb.length||isNaN(Number(gb[0]))||isNaN(Number(gb[1]))||(de(yc,2,Number(gb[0])),de(yc,3,Number(gb[1]))):de(yc,2,Number(gb[0])));var Rb=new jj;K(Rb,1,O.message);K(Rb,3,O.name);de(Rb,6,O.sampleWeight);"ERROR"===pd?ee(Rb,2,2):"WARNING"===pd?ee(Rb,2,1):ee(Rb,2,0);var Th=new hj;Rd(Th,1,vd(!0));Yd(Th,gj,3,ij,yc);var Sb=new fj;K(Sb,3,window.location.href);
for(var fn=T("FEXP_EXPERIMENTS",[]),Uh=0;Uh<fn.length;Uh++){var gn=Sb.s,Vh=fn[Uh],hn=$c(gn);nd(hn);var jn=Td(gn,hn,5,2),kn=H(jn);Vh=yd(Vh,!!(4&kn)&&!!(4096&kn));jn.push(Vh)}var Wh=Aj();if(!Bj()&&Wh)for(var ln=w(Object.keys(Wh)),Tb=ln.next();!Tb.done;Tb=ln.next()){var mn=Tb.value,Xh=new ej;K(Xh,1,mn);K(Xh,2,String(Wh[mn]));$d(Sb,4,ej,Xh)}var Yh=O.params;if(Yh){var nn=w(Object.keys(Yh));for(Tb=nn.next();!Tb.done;Tb=nn.next()){var on=Tb.value,Zh=new ej;K(Zh,1,"client."+on);K(Zh,2,String(Yh[on]));$d(Sb,
4,ej,Zh)}}var pn=T("SERVER_NAME"),qn=T("SERVER_VERSION");if(pn&&qn){var $h=new ej;K($h,1,"server.name");K($h,2,pn);$d(Sb,4,ej,$h);var ai=new ej;K(ai,1,"server.version");K(ai,2,qn);$d(Sb,4,ej,ai)}var Me=new kj;J(Me,fj,1,Sb);J(Me,hj,2,Th);J(Me,jj,3,Rb);Rh=Me}var rn=Rh;if(!rn)break a;var sn=U("jspb_sparse_encoded_pivot")?new qj([{}]):new qj;Yd(sn,kj,163,rj,rn);ir("clientError",sn)}else{var La=void 0;La=void 0===La?{}:La;if(qr())Qh=void 0;else{var qd={stackTrace:O.stack};O.fileName&&(qd.filename=O.fileName);
var hb=O.lineNumber&&O.lineNumber.split?O.lineNumber.split(":"):[];0!==hb.length&&(1!==hb.length||isNaN(Number(hb[0]))?2!==hb.length||isNaN(Number(hb[0]))||isNaN(Number(hb[1]))||(qd.lineNumber=Number(hb[0]),qd.columnNumber=Number(hb[1])):qd.lineNumber=Number(hb[0]));var bi={level:"ERROR_LEVEL_UNKNOWN",message:O.message,errorClassName:O.name,sampleWeight:O.sampleWeight};"ERROR"===pd?bi.level="ERROR_LEVEL_ERROR":"WARNING"===pd&&(bi.level="ERROR_LEVEL_WARNNING");var $r={isObfuscated:!0,browserStackInfo:qd};
La.pageUrl=window.location.href;La.kvPairs=[];T("FEXP_EXPERIMENTS")&&(La.experimentIds=T("FEXP_EXPERIMENTS"));var ci=Aj();if(!Bj()&&ci)for(var tn=w(Object.keys(ci)),Ub=tn.next();!Ub.done;Ub=tn.next()){var un=Ub.value;La.kvPairs.push({key:un,value:String(ci[un])})}var di=O.params;if(di){var vn=w(Object.keys(di));for(Ub=vn.next();!Ub.done;Ub=vn.next()){var wn=Ub.value;La.kvPairs.push({key:"client."+wn,value:String(di[wn])})}}var xn=T("SERVER_NAME"),yn=T("SERVER_VERSION");xn&&yn&&(La.kvPairs.push({key:"server.name",
value:xn}),La.kvPairs.push({key:"server.version",value:yn}));Qh={errorMetadata:La,stackTrace:$r,logMessage:bi}}var zn=Qh;if(!zn)break a;gr("clientError",zn)}if("ERROR"===pd||U("errors_flush_gel_always_killswitch"))b:{if(U("web_fp_via_jspb")){var Ne=!0;Ne=void 0===Ne?!1:Ne;var An=fr;fr=[];if(An)for(var Bn=w(An),ei=Bn.next();!ei.done;ei=Bn.next()){var zc=ei.value;Ne?cr(zc.Ac,zc.payload,zp,zc.options):gr(zc.Ac,zc.payload,zc.options)}er(!0);if(!U("web_fp_via_jspb_and_json"))break b}er()}}U("suppress_error_204_logging")||
rr(Qb,O);pr(O)}}}}}else throw wc;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function Or(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Pr(a){return 0===a.search("get")||0===a.search("is")}
;function Qr(a,b){Hr.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
y(Qr,Hr);r=Qr.prototype;r.kc=function(){var a=Cr(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Cr(this.h,"embedConfig")){if(Na(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.fc=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Na(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":Rr(this,a);break;case "initialDelivery":Na(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},Sr(this,a.apiInterface),Rr(this,a));break;default:Lr(this,b,a)}};
function Rr(a,b){if(Na(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Cr(a.h,"title"))))}}
function Sr(a,b){db(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:Or(c)?this[c]=function(){this.playerInfo={};
this.ka={};Nr(this,c,arguments);return this}:Pr(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){Nr(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=Cr(this.h,"host")+("/embed/"+Cr(this.h,"videoId")),b=Number(Cr(this.h,"width")),c=Number(Cr(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Yb(a);d=Yb(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
r.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
r.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function as(a){if("iframe"!==a.tagName.toLowerCase()){var b=zr(a,"videoid");b&&(b={videoId:b,width:zr(a,"width"),height:zr(a,"height")},new Qr(a,b))}}
;F("YT.PlayerState.UNSTARTED",-1);F("YT.PlayerState.ENDED",0);F("YT.PlayerState.PLAYING",1);F("YT.PlayerState.PAUSED",2);F("YT.PlayerState.BUFFERING",3);F("YT.PlayerState.CUED",5);F("YT.get",function(a){return vr[a]});
F("YT.scan",yr);F("YT.subscribe",function(a,b,c){Ug.subscribe(a,b,c);xr[a]=!0;for(var d in vr)vr.hasOwnProperty(d)&&Kr(vr[d],a)});
F("YT.unsubscribe",function(a,b,c){Tg(a,b,c)});
F("YT.Player",Qr);Hr.prototype.destroy=Hr.prototype.destroy;Hr.prototype.setSize=Hr.prototype.setSize;Hr.prototype.getIframe=Hr.prototype.getIframe;Hr.prototype.addEventListener=Hr.prototype.addEventListener;Qr.prototype.getVideoEmbedCode=Qr.prototype.getVideoEmbedCode;Qr.prototype.getOptions=Qr.prototype.getOptions;Qr.prototype.getOption=Qr.prototype.getOption;
wr.push(function(a){var b=a;b||(b=document);a=ib(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=bb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=ib(b);db(fb(a,b),as)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||yr();var bs=D.onYTReady;bs&&bs();var cs=D.onYouTubeIframeAPIReady;cs&&cs();var ds=D.onYouTubePlayerAPIReady;ds&&ds();}).call(this);

}

/*
     FILE ARCHIVED ON 15:02:16 Jul 03, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:57:32 Aug 01, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.838
  load_resource: 158.146
  PetaboxLoader3.resolve: 90.462
  PetaboxLoader3.datanode: 52.743
*/