/*! For license information please see index.js.LICENSE.txt */
!function(t,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.FileShard=r():t.FileShard=r()}(this,(()=>(()=>{var t={735:t=>{t.exports=function(t){"use strict";var r=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];function e(t,r){var e=t[0],n=t[1],o=t[2],i=t[3];n=((n+=((o=((o+=((i=((i+=((e=((e+=(n&o|~n&i)+r[0]-680876936|0)<<7|e>>>25)+n|0)&n|~e&o)+r[1]-389564586|0)<<12|i>>>20)+e|0)&e|~i&n)+r[2]+606105819|0)<<17|o>>>15)+i|0)&i|~o&e)+r[3]-1044525330|0)<<22|n>>>10)+o|0,n=((n+=((o=((o+=((i=((i+=((e=((e+=(n&o|~n&i)+r[4]-176418897|0)<<7|e>>>25)+n|0)&n|~e&o)+r[5]+1200080426|0)<<12|i>>>20)+e|0)&e|~i&n)+r[6]-1473231341|0)<<17|o>>>15)+i|0)&i|~o&e)+r[7]-45705983|0)<<22|n>>>10)+o|0,n=((n+=((o=((o+=((i=((i+=((e=((e+=(n&o|~n&i)+r[8]+1770035416|0)<<7|e>>>25)+n|0)&n|~e&o)+r[9]-1958414417|0)<<12|i>>>20)+e|0)&e|~i&n)+r[10]-42063|0)<<17|o>>>15)+i|0)&i|~o&e)+r[11]-1990404162|0)<<22|n>>>10)+o|0,n=((n+=((o=((o+=((i=((i+=((e=((e+=(n&o|~n&i)+r[12]+1804603682|0)<<7|e>>>25)+n|0)&n|~e&o)+r[13]-40341101|0)<<12|i>>>20)+e|0)&e|~i&n)+r[14]-1502002290|0)<<17|o>>>15)+i|0)&i|~o&e)+r[15]+1236535329|0)<<22|n>>>10)+o|0,n=((n+=((o=((o+=((i=((i+=((e=((e+=(n&i|o&~i)+r[1]-165796510|0)<<5|e>>>27)+n|0)&o|n&~o)+r[6]-1069501632|0)<<9|i>>>23)+e|0)&n|e&~n)+r[11]+643717713|0)<<14|o>>>18)+i|0)&e|i&~e)+r[0]-373897302|0)<<20|n>>>12)+o|0,n=((n+=((o=((o+=((i=((i+=((e=((e+=(n&i|o&~i)+r[5]-701558691|0)<<5|e>>>27)+n|0)&o|n&~o)+r[10]+38016083|0)<<9|i>>>23)+e|0)&n|e&~n)+r[15]-660478335|0)<<14|o>>>18)+i|0)&e|i&~e)+r[4]-405537848|0)<<20|n>>>12)+o|0,n=((n+=((o=((o+=((i=((i+=((e=((e+=(n&i|o&~i)+r[9]+568446438|0)<<5|e>>>27)+n|0)&o|n&~o)+r[14]-1019803690|0)<<9|i>>>23)+e|0)&n|e&~n)+r[3]-187363961|0)<<14|o>>>18)+i|0)&e|i&~e)+r[8]+1163531501|0)<<20|n>>>12)+o|0,n=((n+=((o=((o+=((i=((i+=((e=((e+=(n&i|o&~i)+r[13]-1444681467|0)<<5|e>>>27)+n|0)&o|n&~o)+r[2]-51403784|0)<<9|i>>>23)+e|0)&n|e&~n)+r[7]+1735328473|0)<<14|o>>>18)+i|0)&e|i&~e)+r[12]-1926607734|0)<<20|n>>>12)+o|0,n=((n+=((o=((o+=((i=((i+=((e=((e+=(n^o^i)+r[5]-378558|0)<<4|e>>>28)+n|0)^n^o)+r[8]-2022574463|0)<<11|i>>>21)+e|0)^e^n)+r[11]+1839030562|0)<<16|o>>>16)+i|0)^i^e)+r[14]-35309556|0)<<23|n>>>9)+o|0,n=((n+=((o=((o+=((i=((i+=((e=((e+=(n^o^i)+r[1]-1530992060|0)<<4|e>>>28)+n|0)^n^o)+r[4]+1272893353|0)<<11|i>>>21)+e|0)^e^n)+r[7]-155497632|0)<<16|o>>>16)+i|0)^i^e)+r[10]-1094730640|0)<<23|n>>>9)+o|0,n=((n+=((o=((o+=((i=((i+=((e=((e+=(n^o^i)+r[13]+681279174|0)<<4|e>>>28)+n|0)^n^o)+r[0]-358537222|0)<<11|i>>>21)+e|0)^e^n)+r[3]-722521979|0)<<16|o>>>16)+i|0)^i^e)+r[6]+76029189|0)<<23|n>>>9)+o|0,n=((n+=((o=((o+=((i=((i+=((e=((e+=(n^o^i)+r[9]-640364487|0)<<4|e>>>28)+n|0)^n^o)+r[12]-421815835|0)<<11|i>>>21)+e|0)^e^n)+r[15]+530742520|0)<<16|o>>>16)+i|0)^i^e)+r[2]-995338651|0)<<23|n>>>9)+o|0,n=((n+=((i=((i+=(n^((e=((e+=(o^(n|~i))+r[0]-198630844|0)<<6|e>>>26)+n|0)|~o))+r[7]+1126891415|0)<<10|i>>>22)+e|0)^((o=((o+=(e^(i|~n))+r[14]-1416354905|0)<<15|o>>>17)+i|0)|~e))+r[5]-57434055|0)<<21|n>>>11)+o|0,n=((n+=((i=((i+=(n^((e=((e+=(o^(n|~i))+r[12]+1700485571|0)<<6|e>>>26)+n|0)|~o))+r[3]-1894986606|0)<<10|i>>>22)+e|0)^((o=((o+=(e^(i|~n))+r[10]-1051523|0)<<15|o>>>17)+i|0)|~e))+r[1]-2054922799|0)<<21|n>>>11)+o|0,n=((n+=((i=((i+=(n^((e=((e+=(o^(n|~i))+r[8]+1873313359|0)<<6|e>>>26)+n|0)|~o))+r[15]-30611744|0)<<10|i>>>22)+e|0)^((o=((o+=(e^(i|~n))+r[6]-1560198380|0)<<15|o>>>17)+i|0)|~e))+r[13]+1309151649|0)<<21|n>>>11)+o|0,n=((n+=((i=((i+=(n^((e=((e+=(o^(n|~i))+r[4]-145523070|0)<<6|e>>>26)+n|0)|~o))+r[11]-1120210379|0)<<10|i>>>22)+e|0)^((o=((o+=(e^(i|~n))+r[2]+718787259|0)<<15|o>>>17)+i|0)|~e))+r[9]-343485551|0)<<21|n>>>11)+o|0,t[0]=e+t[0]|0,t[1]=n+t[1]|0,t[2]=o+t[2]|0,t[3]=i+t[3]|0}function n(t){var r,e=[];for(r=0;r<64;r+=4)e[r>>2]=t.charCodeAt(r)+(t.charCodeAt(r+1)<<8)+(t.charCodeAt(r+2)<<16)+(t.charCodeAt(r+3)<<24);return e}function o(t){var r,e=[];for(r=0;r<64;r+=4)e[r>>2]=t[r]+(t[r+1]<<8)+(t[r+2]<<16)+(t[r+3]<<24);return e}function i(t){var r,o,i,a,u,h,s=t.length,f=[1732584193,-271733879,-1732584194,271733878];for(r=64;r<=s;r+=64)e(f,n(t.substring(r-64,r)));for(o=(t=t.substring(r-64)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<o;r+=1)i[r>>2]|=t.charCodeAt(r)<<(r%4<<3);if(i[r>>2]|=128<<(r%4<<3),r>55)for(e(f,i),r=0;r<16;r+=1)i[r]=0;return a=(a=8*s).toString(16).match(/(.*?)(.{0,8})$/),u=parseInt(a[2],16),h=parseInt(a[1],16)||0,i[14]=u,i[15]=h,e(f,i),f}function a(t){var r,n,i,a,u,h,s=t.length,f=[1732584193,-271733879,-1732584194,271733878];for(r=64;r<=s;r+=64)e(f,o(t.subarray(r-64,r)));for(n=(t=r-64<s?t.subarray(r-64):new Uint8Array(0)).length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<n;r+=1)i[r>>2]|=t[r]<<(r%4<<3);if(i[r>>2]|=128<<(r%4<<3),r>55)for(e(f,i),r=0;r<16;r+=1)i[r]=0;return a=(a=8*s).toString(16).match(/(.*?)(.{0,8})$/),u=parseInt(a[2],16),h=parseInt(a[1],16)||0,i[14]=u,i[15]=h,e(f,i),f}function u(t){var e,n="";for(e=0;e<4;e+=1)n+=r[t>>8*e+4&15]+r[t>>8*e&15];return n}function h(t){var r;for(r=0;r<t.length;r+=1)t[r]=u(t[r]);return t.join("")}function s(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function f(t,r){var e,n=t.length,o=new ArrayBuffer(n),i=new Uint8Array(o);for(e=0;e<n;e+=1)i[e]=t.charCodeAt(e);return r?i:o}function c(t){return String.fromCharCode.apply(null,new Uint8Array(t))}function l(t,r,e){var n=new Uint8Array(t.byteLength+r.byteLength);return n.set(new Uint8Array(t)),n.set(new Uint8Array(r),t.byteLength),e?n:n.buffer}function p(t){var r,e=[],n=t.length;for(r=0;r<n-1;r+=2)e.push(parseInt(t.substr(r,2),16));return String.fromCharCode.apply(String,e)}function y(){this.reset()}return h(i("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function r(t,r){return(t=0|t||0)<0?Math.max(t+r,0):Math.min(t,r)}ArrayBuffer.prototype.slice=function(e,n){var o,i,a,u,h=this.byteLength,s=r(e,h),f=h;return n!==t&&(f=r(n,h)),s>f?new ArrayBuffer(0):(o=f-s,i=new ArrayBuffer(o),a=new Uint8Array(i),u=new Uint8Array(this,s,o),a.set(u),i)}}(),y.prototype.append=function(t){return this.appendBinary(s(t)),this},y.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var r,o=this._buff.length;for(r=64;r<=o;r+=64)e(this._hash,n(this._buff.substring(r-64,r)));return this._buff=this._buff.substring(r-64),this},y.prototype.end=function(t){var r,e,n=this._buff,o=n.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(r=0;r<o;r+=1)i[r>>2]|=n.charCodeAt(r)<<(r%4<<3);return this._finish(i,o),e=h(this._hash),t&&(e=p(e)),this.reset(),e},y.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},y.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash.slice()}},y.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},y.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},y.prototype._finish=function(t,r){var n,o,i,a=r;if(t[a>>2]|=128<<(a%4<<3),a>55)for(e(this._hash,t),a=0;a<16;a+=1)t[a]=0;n=(n=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),o=parseInt(n[2],16),i=parseInt(n[1],16)||0,t[14]=o,t[15]=i,e(this._hash,t)},y.hash=function(t,r){return y.hashBinary(s(t),r)},y.hashBinary=function(t,r){var e=h(i(t));return r?p(e):e},y.ArrayBuffer=function(){this.reset()},y.ArrayBuffer.prototype.append=function(t){var r,n=l(this._buff.buffer,t,!0),i=n.length;for(this._length+=t.byteLength,r=64;r<=i;r+=64)e(this._hash,o(n.subarray(r-64,r)));return this._buff=r-64<i?new Uint8Array(n.buffer.slice(r-64)):new Uint8Array(0),this},y.ArrayBuffer.prototype.end=function(t){var r,e,n=this._buff,o=n.length,i=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(r=0;r<o;r+=1)i[r>>2]|=n[r]<<(r%4<<3);return this._finish(i,o),e=h(this._hash),t&&(e=p(e)),this.reset(),e},y.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},y.ArrayBuffer.prototype.getState=function(){var t=y.prototype.getState.call(this);return t.buff=c(t.buff),t},y.ArrayBuffer.prototype.setState=function(t){return t.buff=f(t.buff,!0),y.prototype.setState.call(this,t)},y.ArrayBuffer.prototype.destroy=y.prototype.destroy,y.ArrayBuffer.prototype._finish=y.prototype._finish,y.ArrayBuffer.hash=function(t,r){var e=h(a(new Uint8Array(t)));return r?p(e):e},y}()}},r={};function e(n){var o=r[n];if(void 0!==o)return o.exports;var i=r[n]={exports:{}};return t[n](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var n in r)e.o(r,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:r[n]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r);var n={};return(()=>{"use strict";e.d(n,{default:()=>c});var t=e(735);function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(){o=function(){return e};var t,e={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,r,e){t[r]=e.value},u="function"==typeof Symbol?Symbol:{},h=u.iterator||"@@iterator",s=u.asyncIterator||"@@asyncIterator",f=u.toStringTag||"@@toStringTag";function c(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{c({},"")}catch(t){c=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof m?r:m,i=Object.create(o.prototype),u=new F(n||[]);return a(i,"_invoke",{value:j(t,e,u)}),i}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}e.wrap=l;var y="suspendedStart",v="suspendedYield",g="executing",d="completed",b={};function m(){}function w(){}function k(){}var _={};c(_,h,(function(){return this}));var A=Object.getPrototypeOf,x=A&&A(A(P([])));x&&x!==n&&i.call(x,h)&&(_=x);var S=k.prototype=m.prototype=Object.create(_);function L(t){["next","throw","return"].forEach((function(r){c(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,e){function n(o,a,u,h){var s=p(t[o],t,a);if("throw"!==s.type){var f=s.arg,c=f.value;return c&&"object"==r(c)&&i.call(c,"__await")?e.resolve(c.__await).then((function(t){n("next",t,u,h)}),(function(t){n("throw",t,u,h)})):e.resolve(c).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,h)}))}h(s.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function j(r,e,n){var o=y;return function(i,a){if(o===g)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var h=B(u,n);if(h){if(h===b)continue;return h}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===y)throw o=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=g;var s=p(r,e,n);if("normal"===s.type){if(o=n.done?d:v,s.arg===b)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=d,n.method="throw",n.arg=s.arg)}}}function B(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,B(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),b;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,b;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,b):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,b)}function C(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function F(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function P(e){if(e||""===e){var n=e[h];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(i.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(r(e)+" is not iterable")}return w.prototype=k,a(S,"constructor",{value:k,configurable:!0}),a(k,"constructor",{value:w,configurable:!0}),w.displayName=c(k,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===w||"GeneratorFunction"===(r.displayName||r.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,k):(t.__proto__=k,c(t,f,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},L(E.prototype),c(E.prototype,s,(function(){return this})),e.AsyncIterator=E,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(S),c(S,f,"Generator"),c(S,h,(function(){return this})),c(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=P,F.prototype={constructor:F,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function n(n,o){return u.type="throw",u.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],u=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var h=i.call(a,"catchLoc"),s=i.call(a,"finallyLoc");if(h&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(h){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc<=this.prev&&i.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=r&&r<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=r,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),b},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),b}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:P(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),b}},e}function i(t,r,e,n,o,i,a){try{var u=t[i](a),h=u.value}catch(t){return void e(t)}u.done?r(h):Promise.resolve(h).then(n,o)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(n,o){var a=t.apply(r,e);function u(t){i(a,n,o,u,h,"next",t)}function h(t){i(a,n,o,u,h,"throw",t)}u(void 0)}))}}function u(t,r){for(var e=0;e<r.length;e++){var n=r[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,h(n.key),n)}}function h(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:e+""}var s=new(e.n(t)()),f=function(){return t=function t(){!function(t,r){if(!(t instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),console.log(123),this.file=void 0,this.chunks=[],this.chunkHash=[],this.chunkSize=1048576,this.fileSize=0,this.fileHash=void 0},r=[{key:"init",value:function(t,r){this.file=t,this.fileSize=t.size,this.chunkSize=r||this.chunkSize;for(var e=0;e<this.fileSize;e+=this.chunkSize){var n=t.slice(e,e+this.chunkSize);this.chunks.push(n)}}},{key:"calculateChunkHash",value:function(){var t=this,r=[];return new Promise((function(e,n){for(var o=function(o){var i=t.chunks[o],a=new FileReader;a.onload=function(n){var i=n.target.result;r.push(s.appendBinary(i).end()),o===t.chunks.length-1&&e(r)},a.onerror=function(t){n(t)},a.readAsArrayBuffer(i)},i=0;i<t.chunks.length;i++)o(i)}))}},{key:"getChunkHash",value:(h=a(o().mark((function t(r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(0!==this.chunkHash.length){t.next=4;break}return t.next=3,this.getAllChunkHash();case 3:case 4:return t.abrupt("return",this.chunkHash[r]);case 5:case"end":return t.stop()}}),t,this)}))),function(t){return h.apply(this,arguments)})},{key:"getAllChunkHash",value:(i=a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.calculateChunkHash();case 2:return this.chunkHash=t.sent,t.abrupt("return",this.chunkHash);case 4:case"end":return t.stop()}}),t,this)}))),function(){return i.apply(this,arguments)})},{key:"calculateFileHash",value:function(){var t=this;return new Promise((function(r,e){for(var n=function(n){var o=t.chunks[n],i=new FileReader;i.onload=function(e){var o=e.target.result;n===t.chunks.length-1&&r(s.end()),s.appendBinary(o)},i.onerror=function(t){e(t)},i.readAsArrayBuffer(o)},o=0;o<t.chunks.length;o++)n(o)}))}},{key:"getFileHash",value:(n=a(o().mark((function t(){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.calculateFileHash();case 2:return this.fileHash=t.sent,t.abrupt("return",this.fileHash);case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)})},{key:"getChunk",value:function(t){return this.chunks[t]}},{key:"getAllChunks",value:function(){return this.chunks}},{key:"getChunkCount",value:function(){return this.chunks.length}},{key:"getChunksInRange",value:function(t,r){return this.chunks.slice(t,r)}},{key:"getFileSize",value:function(){return this.fileSize}}],r&&u(t.prototype,r),e&&u(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t;var t,r,e,n,i,h}();const c=f})(),n=n.default})()));