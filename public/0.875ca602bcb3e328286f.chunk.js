(this.webpackJsonp=this.webpackJsonp||[]).push([[0,21],{102:function(e,t,r){"use strict";function s(e,t,r=!0){let s,n,i=null;return(...o)=>{s=!0,n=o,i||(r&&(s=!1,e(...n)),i=setInterval(()=>{if(!s)return clearInterval(i),void(i=null);s=!1,e(...n)},t))}}r.d(t,"a",(function(){return s}))},114:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"e",(function(){return l})),r.d(t,"d",(function(){return h}));const s="undefined"!=typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope,n="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&!s,i=n||s,o=(e,...t)=>{self.clients.matchAll({includeUncontrolled:!1,type:"window"}).then(r=>{r.length&&r.slice(e?0:-1).forEach(e=>{e.postMessage(...t)})})},c=(...e)=>{self.postMessage(...e)},a=()=>{},l=s?o.bind(null,!1):n?c:a,h=s?o.bind(null,!0):n?c:a},124:function(e,t,r){"use strict";t.a={name:"tweb",version:7,stores:[{name:"session"},{name:"stickerSets"},{name:"users"},{name:"chats"},{name:"dialogs"},{name:"messages"}]}},148:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var s=r(59),n=r(89),i=r(32),o=r(37);class c{constructor(e,t){this.storageIsAvailable=!0,Object(i.g)(this,e),s.a.test&&(this.name+="_test"),this.storeName=t,this.log=Object(o.b)("IDB-"+this.storeName),this.openDatabase(!0),c.STORAGES.push(this)}static closeDatabases(e){this.STORAGES.forEach(t=>{if(e&&e===t)return;const r=t.db;r&&(r.onclose=()=>{},r.close())})}isAvailable(){return this.storageIsAvailable}openDatabase(e=!1){if(this.openDbPromise&&!e)return this.openDbPromise;try{var t=indexedDB.open(this.name,this.version);if(!t)return Promise.reject()}catch(e){return this.log.error("error opening db",e.message),this.storageIsAvailable=!1,Promise.reject(e)}let r=!1;return setTimeout(()=>{r||t.onerror({type:"IDB_CREATE_TIMEOUT"})},3e3),this.openDbPromise=new Promise((e,s)=>{t.onsuccess=n=>{r=!0;const i=t.result;let o=!1;this.log("Opened"),i.onerror=e=>{this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),s(e)},i.onclose=e=>{this.log.error("closed:",e),!o&&this.openDatabase()},i.onabort=e=>{this.log.error("abort:",e);const t=e.target;this.openDatabase(o=!0),t.onerror&&t.onerror(e),i.close()},i.onversionchange=e=>{this.log.error("onversionchange, lol?")},e(this.db=i)},t.onerror=e=>{r=!0,this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),s(e)},t.onupgradeneeded=e=>{r=!0,this.log.warn("performing idb upgrade from",e.oldVersion,"to",e.newVersion);var t=e.target.result;this.stores.forEach(e=>{t.objectStoreNames.contains(e.name)||((e,t)=>{var r;const s=e.createObjectStore(t.name);if(null===(r=t.indexes)||void 0===r?void 0:r.length)for(const e of t.indexes)s.createIndex(e.indexName,e.keyPath,e.objectParameters)})(t,e)})}})}delete(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readwrite",t=>e.map(e=>t.delete(e)),"")}clear(e){return this.getObjectStore("readwrite",e=>e.clear(),"",e)}save(e,t){return Array.isArray(e)||(e=[].concat(e),t=[].concat(t)),this.getObjectStore("readwrite",r=>e.map((e,s)=>r.put(t[s],e)),"")}saveFile(e,t){return t instanceof Blob||(t=Object(n.a)([t])),this.save(e,t)}get(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readonly",t=>e.map(e=>t.get(e)),"")}getObjectStore(e,t,r,s=this.storeName){let n;return r&&(n=performance.now(),this.log(r+": start")),this.openDatabase().then(i=>new Promise((o,c)=>{const a=i.transaction([s],e);a.onerror=e=>{clearTimeout(l),c(a.error)},a.oncomplete=e=>{clearTimeout(l),r&&this.log(r+": end",performance.now()-n);const t=d.map(e=>e.result);o(u?t:t[0])};const l=setTimeout(()=>{this.log.error("transaction not finished",a)},1e4),h=t(a.objectStore(s)),u=Array.isArray(h),d=u?h:[].concat(h)}))}getAll(){return this.getObjectStore("readonly",e=>e.getAll(),"")}}c.STORAGES=[]},15:function(e,t,r){"use strict";r.r(t),r.d(t,"RootScope",(function(){return o}));var s=r(46),n=r(50),i=r(29);class o extends n.a{constructor(){super(),this.overlaysActive=0,this.idle={isIDLE:!0,deactivated:!1,focusPromise:Promise.resolve(),focusResolve:()=>{}},this.connectionStatus={},this.filterId=0,this.config={forwarded_count_max:100,edit_time_limit:172800,pinned_dialogs_count_max:5,pinned_infolder_count_max:100,message_length_max:4096,caption_length_max:1024},this.addEventListener("peer_changed",e=>{this.peerId=e,document.body.classList.toggle("has-chat",!!e)}),this.addEventListener("user_auth",({id:e})=>{this.myId="number"==typeof s.b?+e:""+e}),this.addEventListener("connection_status_change",e=>{this.connectionStatus[e.name]=e}),this.addEventListener("idle",e=>{e?this.idle.focusPromise=new Promise(e=>{this.idle.focusResolve=e}):this.idle.focusResolve()})}get themeColorElem(){return void 0!==this._themeColorElem?this._themeColorElem:this._themeColorElem=document.head.querySelector('[name="theme-color"]')||null}setThemeColor(e=this.themeColor){e||(e=this.isNight()?"#212121":"#ffffff");const t=this.themeColorElem;t&&t.setAttribute("content",e)}setThemeListener(){try{const e=window.matchMedia("(prefers-color-scheme: dark)"),t=()=>{this.systemTheme=e.matches?"night":"day",this.myId?this.dispatchEvent("theme_change"):this.setTheme()};"addEventListener"in e?e.addEventListener("change",t):"addListener"in e&&e.addListener(t),t()}catch(e){}}setTheme(){const e=this.isNight(),t=document.head.querySelector('[name="color-scheme"]');t&&t.setAttribute("content",e?"dark":"light"),document.documentElement.classList.toggle("night",e),this.setThemeColor()}get isOverlayActive(){return this.overlaysActive>0}set isOverlayActive(e){this.overlaysActive+=e?1:-1,this.dispatchEvent("overlay_toggle",this.isOverlayActive)}isNight(){return"night"===this.getTheme().name}getTheme(e=("system"===this.settings.theme?this.systemTheme:this.settings.theme)){return this.settings.themes.find(t=>t.name===e)}}const c=new o;i.a.rootScope=c,t.default=c},29:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));const s=r(59).a.debug,n="undefined"!=typeof window?window:self;t.b=s},32:function(e,t,r){"use strict";function s(e){if(null===e||"object"!=typeof e)return e;if(e instanceof Date)return new Date(e.getTime());if(Array.isArray(e)){return e.map(e=>s(e))}let t=new e.constructor;for(var r in e)e.hasOwnProperty(r)&&(t[r]=s(e[r]));return t}function n(e,t){const r=Object.keys,s=typeof e;return e&&t&&"object"===s&&s===typeof t?r(e).length===r(t).length&&r(e).every(r=>n(e[r],t[r])):e===t}function i(e,t){const r={writable:!0,configurable:!0},s={};t.forEach(t=>{e.hasOwnProperty(t)||(s[t]=r)}),Object.defineProperties(e,s)}function o(e,t="asc"){if(!e)return[];const r=e instanceof Map?[...e.keys()]:Object.keys(e).map(e=>+e);return"asc"===t?r.sort((e,t)=>e-t):r.sort((e,t)=>t-e)}function c(e,t){if(!e)return t;for(var r in e)t.hasOwnProperty(r)||delete e[r];for(var r in t)e[r]=t[r];return e}function a(e,t,r){"byteLength"in r[e]&&(r[e]=[...r[e]]),t&&t[e]!==r[e]&&(t[e].length=r[e].length,r[e].forEach((r,s)=>{t[e][s]=r}),r[e]=t[e])}function l(e){return"object"==typeof e&&null!==e}function h(e,t){const r=t.split(".");let s=e;return r.forEach(e=>{e&&(s=s[e])}),s}function u(e,t,r){const s=t.split(".");h(e,s.slice(0,-1).join("."))[s.pop()]=r}function d(e,t,r,n){for(const i in e)typeof t[i]!=typeof e[i]?(t[i]=s(e[i]),r&&r(n||i)):l(e[i])&&d(e[i],t[i],r,n||i)}function f(e,t){if(t)for(let r in t)void 0!==t[r]&&(e[r]=t[r]);return e}r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"e",(function(){return o})),r.d(t,"i",(function(){return c})),r.d(t,"h",(function(){return a})),r.d(t,"f",(function(){return l})),r.d(t,"d",(function(){return h})),r.d(t,"j",(function(){return u})),r.d(t,"k",(function(){return d})),r.d(t,"g",(function(){return f}))},37:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return v}));var s,n=r(29),i=r(0),o=r(114);!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Log=4]="Log",e[e.Debug=8]="Debug"}(s||(s={}));const c=[s.None,s.Error,s.Warn,s.Log,s.Debug],a=Date.now();function l(){return"["+((Date.now()-a)/1e3).toFixed(3)+"]"}let h;const u=i.IS_SAFARI||i.IS_FIREFOX;h=u?e=>e.split("@")[0]:e=>{const t=e.trim().split(" ");if(3===t.length)return t[1].slice(t[1].lastIndexOf(".")+1)};const d=!u,f=u?2:3;function g(){const e=(new Error).stack.split("\n"),t=e[f]||e[e.length-1];return"["+(h(t)||"<anonymous>")+"]"}const m={black:"[30m",red:"[31m",green:"[32m",yellow:"[33m",blue:"[34m",magenta:"[35m",cyan:"[36m",white:"[37m"},p=[["debug",s.Debug],["info",s.Log],["warn",s.Warn],["error",s.Error],["assert",s.Error],["trace",s.Log]];function v(e,t=s.Log|s.Warn|s.Error,r=!1,i=""){let a;n.b||r||(t=s.Error),d?i||(o.a?i=m.yellow:o.b&&(i=m.cyan)):i="";let h=i;i=i?`%s ${i}%s`:"%s";const u=function(...r){return t&s.Log&&console.log(i,l(),e,g(),...r)};return p.forEach(([r,s])=>{u[r]=function(...n){return t&s&&console[r](i,l(),e,g(),...n)}}),u.setPrefix=function(t){a=t,e="["+t+"]"},u.setPrefix(e),u.setLevel=function(e){t=c.slice(0,e+1).reduce((e,t)=>e|t,0)},u.bindPrefix=function(e){return v(`${a}] [${e}`,t,r,h)},u}},45:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var s=r(72);function n(){let e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach(e=>e(...t))},listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise((r,s)=>{e.resolve=e=>{t.isFulfilled||t.isRejected||(t.isFulfilled=!0,r(e))},e.reject=(...e)=>{t.isRejected||t.isFulfilled||(t.isRejected=!0,s(...e))}});return t.catch(s.a).finally(()=>{t.notify=t.notifyAll=t.lastNotify=null,t.listeners.length=0,t.cancel&&(t.cancel=()=>{})}),Object.assign(t,e),t}},46:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return i})),r.d(t,"a",(function(){return o}));const s=0,n=1271266957,i=777e3,o=2147483647},50:function(e,t,r){"use strict";r.d(t,"a",(function(){return s}));class s{constructor(e){this._constructor(e)}_constructor(e=!1){this.reuseResults=e,this.listeners={},this.listenerResults={}}addEventListener(e,t,r){var s,n;(null!==(s=this.listeners[e])&&void 0!==s?s:this.listeners[e]=[]).push({callback:t,options:r}),this.listenerResults.hasOwnProperty(e)&&(t(...this.listenerResults[e]),null===(n=r)||void 0===n?void 0:n.once)&&this.listeners[e].pop()}addMultipleEventsListeners(e){for(const t in e)this.addEventListener(t,e[t])}removeEventListener(e,t,r){this.listeners[e]&&this.listeners[e].findAndSplice(e=>e.callback===t)}_dispatchEvent(e,t,...r){this.reuseResults&&(this.listenerResults[e]=r);const s=t&&[],n=this.listeners[e];if(n){n.slice().forEach(t=>{var i;if(-1===n.findIndex(e=>e.callback===t.callback))return;let o;try{o=t.callback(...r)}catch(e){console.error(e)}s&&s.push(o),(null===(i=t.options)||void 0===i?void 0:i.once)&&this.removeEventListener(e,t.callback)})}return s}dispatchResultableEvent(e,...t){return this._dispatchEvent(e,!0,...t)}dispatchEvent(e,...t){this._dispatchEvent(e,!1,...t)}cleanup(){this.listeners={},this.listenerResults={}}}},59:function(e,t,r){"use strict";const s={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1,transport:"websocket"};s.http=location.search.indexOf("http=1")>0,s.http&&(s.transport="https"),t.a=s},60:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return i}));const s={8:new Uint8Array(1),16:new Uint16Array(1),32:new Uint32Array(1)};function n(e){const t=s[e];return crypto.getRandomValues(t),t[0]}function i(){return""+n(32)+n(32)%16777215}},63:function(e,t,r){"use strict";var s=r(29),n=r(59),i=r(114);class o{constructor(){this.prefix="",this.cache={},this.useStorage=!0,n.a.test&&(this.prefix="t_")}get(e,t=!0){if(this.cache.hasOwnProperty(e)&&t)return this.cache[e];if(this.useStorage){let t;try{t=localStorage.getItem(this.prefix+e)}catch(e){this.useStorage=!1}if(null!==t)try{t=JSON.parse(t)}catch(e){}else t=void 0;return t}}set(e,t=!1){for(const r in e)if(e.hasOwnProperty(r)){const s=e[r];if(this.cache[r]=s,this.useStorage&&!t)try{const e=JSON.stringify(s);localStorage.setItem(this.prefix+r,e)}catch(e){this.useStorage=!1}}}delete(e,t=!1){e=""+e,t||delete this.cache[e];try{localStorage.removeItem(this.prefix+e)}catch(e){}}clear(){const e=["dc","server_time_offset","xt_instance","user_auth","state_id"];for(let t=1;t<=5;++t)e.push(`dc${t}_server_salt`),e.push(`dc${t}_auth_key`);for(let t of e)this.delete(t,!0)}toggleStorage(e){if(this.useStorage=e,e)return this.set(this.cache);this.clear()}}class c{constructor(){this.taskId=0,this.tasks={},c.STORAGES.push(this),i.c||(this.storage=new o)}finishTask(e,t){this.tasks.hasOwnProperty(e)&&(this.tasks[e](t),delete this.tasks[e])}proxy(e,...t){return new Promise((r,s)=>{if(i.c){const s=this.taskId++;this.tasks[s]=r;const n={type:"localStorageProxy",id:s,payload:{type:e,args:t}};Object(i.e)(n)}else{t=Array.prototype.slice.call(t);r(this.storage[e].apply(this.storage,t))}})}get(e,t){return this.proxy("get",e,t)}set(e,t){return this.proxy("set",e,t)}delete(e,t){return this.proxy("delete",e,t)}clear(){return this.proxy("clear")}toggleStorage(e){return this.proxy("toggleStorage",e)}}c.STORAGES=[];const a=new c;s.a.appStorage=a;t.a=a},72:function(e,t,r){"use strict";function s(){}r.d(t,"a",(function(){return s}))},83:function(e,t,r){"use strict";var s=r(29),n=r(95),i=r(124);const o=new n.a(i.a,"session");s.a.stateStorage=o,t.a=o},89:function(e,t,r){"use strict";function s(e,t){return new Promise(r=>{const s=new FileReader;s.addEventListener("loadend",e=>r(e.target.result)),s[t](e)})}function n(e){return s(e,"readAsText")}function i(e){return s(e,"readAsDataURL")}function o(e){return function(e){return s(e,"readAsArrayBuffer")}(e).then(e=>new Uint8Array(e))}function c(e,t=""){let r;const s=function(e){if(-1===["image/jpeg","image/png","image/gif","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","application/json","application/pdf"].indexOf(e))return"application/octet-stream";return e}(t);try{r=new Blob(e,{type:s})}catch(t){let n=new BlobBuilder;e.forEach(e=>{n.append(e)}),r=n.getBlob(s)}return r}r.d(t,"c",(function(){return n})),r.d(t,"b",(function(){return i})),r.d(t,"d",(function(){return o})),r.d(t,"a",(function(){return c}))},95:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var s=r(45),n=r(102),i=r(148),o=function(e,t,r,s){return new(r||(r=Promise))((function(n,i){function o(e){try{a(s.next(e))}catch(e){i(e)}}function c(e){try{a(s.throw(e))}catch(e){i(e)}}function a(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(o,c)}a((s=s.apply(e,t||[])).next())}))};function c(){}class a{constructor(e,t){this.db=e,this.storeName=t,this.cache={},this.useStorage=!0,this.getPromises=new Map,this.keysToSet=new Set,this.saveDeferred=Object(s.a)(),this.keysToDelete=new Set,this.deleteDeferred=Object(s.a)(),this.storage=new i.a(e,t),a.STORAGES.length&&(this.useStorage=a.STORAGES[0].useStorage),a.STORAGES.push(this),this.saveThrottled=Object(n.a)(()=>o(this,void 0,void 0,(function*(){const e=this.saveDeferred;this.saveDeferred=Object(s.a)();const t=this.keysToSet;if(t.size){const e=Array.from(t.values());t.clear();try{const t=e.map(e=>this.cache[e]);yield this.storage.save(e,t)}catch(t){console.error("[AS]: set error:",t,e)}}e.resolve(),t.size&&this.saveThrottled()})),16,!1),this.deleteThrottled=Object(n.a)(()=>o(this,void 0,void 0,(function*(){const e=this.deleteDeferred;this.deleteDeferred=Object(s.a)();const t=this.keysToDelete;if(t.size){const e=Array.from(t.values());t.clear();try{yield this.storage.delete(e)}catch(t){console.error("[AS]: delete error:",t,e)}}e.resolve(),t.size&&this.deleteThrottled()})),16,!1),this.getThrottled=Object(n.a)(()=>o(this,void 0,void 0,(function*(){const e=Array.from(this.getPromises.keys());this.storage.get(e).then(t=>{for(let r=0,s=e.length;r<s;++r){const s=e[r],n=this.getPromises.get(s);n&&(n.resolve(this.cache[s]=t[r]),this.getPromises.delete(s))}},r=>{["NO_ENTRY_FOUND","STORAGE_OFFLINE"].includes(r)||(this.useStorage=!1,console.error("[AS]: get error:",r,e,t));for(let t=0,r=e.length;t<r;++t){const r=e[t],s=this.getPromises.get(r);s&&(s.resolve(void 0),this.getPromises.delete(r))}}).finally(()=>{this.getPromises.size&&this.getThrottled()})})),16,!1)}isAvailable(){return this.useStorage}getCache(){return this.cache}getFromCache(e){return this.cache[e]}setToCache(e,t){return this.cache[e]=t}get(e,t=!0){return o(this,void 0,void 0,(function*(){if(this.cache.hasOwnProperty(e)&&t)return this.getFromCache(e);if(this.useStorage){const t=this.getPromises.get(e);if(t)return t;const r=Object(s.a)();return this.getPromises.set(e,r),this.getThrottled(),r}}))}getAll(){return this.storage.getAll().catch(()=>[])}set(e,t=!1){for(const r in e)if(e.hasOwnProperty(r)){const s=e[r];this.setToCache(r,s),this.useStorage&&!t&&(this.keysToSet.add(r),this.keysToDelete.delete(r),this.saveThrottled())}return this.useStorage?this.saveDeferred:Promise.resolve()}delete(e,t=!1){return e=""+e,t||delete this.cache[e],this.useStorage&&(this.keysToSet.delete(e),this.keysToDelete.add(e),this.deleteThrottled()),this.useStorage?this.deleteDeferred:Promise.resolve()}clear(e=!1){if(!e)for(const e in this.cache)delete this.cache[e];return this.storage.clear().catch(c)}static toggleStorage(e){return Promise.all(this.STORAGES.map(t=>(t.useStorage=e,e?t.set(t.cache):(t.keysToSet.clear(),t.keysToDelete.clear(),t.getPromises.forEach(e=>e.resolve(void 0)),t.getPromises.clear(),t.clear(!0))))).catch(c)}}a.STORAGES=[]}}]);
//# sourceMappingURL=0.875ca602bcb3e328286f.chunk.js.map