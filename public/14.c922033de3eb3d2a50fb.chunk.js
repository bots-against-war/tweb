(this.webpackJsonp=this.webpackJsonp||[]).push([[14,17,18,22,31],{116:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(52);class a{constructor(e,t){this.inputField=e,this.size=t,this.max=45,this.needFrame=0,this.container=document.createElement("div"),this.container.classList.add("media-sticker-wrapper");const n=e.input;n.addEventListener("blur",()=>{this.playAnimation(0)}),n.addEventListener("input",t=>{this.playAnimation(e.value.length)})}playAnimation(e){if(!this.animation)return;let t;(e=Math.min(e,30))?(t=Math.round(Math.min(this.max,e)*(165/this.max)+11.33),this.idleAnimation&&(this.idleAnimation.stop(!0),this.idleAnimation.canvas.style.display="none"),this.animation.canvas.style.display=""):t=0;const n=this.needFrame>t?-1:1;this.animation.setDirection(n),0!==this.needFrame&&0===t&&this.animation.setSpeed(7),this.needFrame=t,this.animation.play()}load(){return this.loadPromise?this.loadPromise:this.loadPromise=Promise.all([i.a.loadAnimationAsAsset({container:this.container,loop:!0,autoplay:!0,width:this.size,height:this.size},"TwoFactorSetupMonkeyIdle").then(e=>(this.idleAnimation=e,this.inputField.value.length||e.play(),i.a.waitForFirstFrame(e))),i.a.loadAnimationAsAsset({container:this.container,loop:!1,autoplay:!1,width:this.size,height:this.size},"TwoFactorSetupMonkeyTracking").then(e=>(this.animation=e,this.inputField.value.length||(this.animation.canvas.style.display="none"),this.animation.addEventListener("enterFrame",e=>{(1===this.animation.direction&&e>=this.needFrame||-1===this.animation.direction&&e<=this.needFrame)&&(this.animation.setSpeed(1),this.animation.pause()),0===e&&0===this.needFrame&&this.idleAnimation&&(this.idleAnimation.canvas.style.display="",this.idleAnimation.play(),this.animation.canvas.style.display="none")}),i.a.waitForFirstFrame(e)))])}remove(){this.animation&&this.animation.remove(),this.idleAnimation&&this.idleAnimation.remove()}}},117:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(40);class a extends i.b{constructor(e){super(Object.assign({plainText:!0},e));const t=this.input;t.type="tel",t.setAttribute("required",""),t.autocomplete="off";let n=0;this.input.addEventListener("input",t=>{this.input.classList.remove("error"),this.setLabel();const i=this.value.replace(/\D/g,"").slice(0,e.length);this.setValueSilently(i);const a=this.value.length;if(a===e.length)e.onFill(this.value);else if(a===n)return;n=a})}}},18:function(e,t,n){"use strict";n.r(t),n.d(t,"ripple",(function(){return l}));var i=n(6),a=n(64),o=n(1),s=n(15),r=n(69);let c=0;function l(e,t=(()=>Promise.resolve()),n=null,l=!1,d=e){if(e.querySelector(".c-ripple"))return;e.classList.add("rp");let u=document.createElement("div");u.classList.add("c-ripple");let h;e.classList.contains("rp-square")&&u.classList.add("is-square"),e[l?"prepend":"append"](u);const p=(e,i)=>{const s=Date.now(),r=document.createElement("div"),l=c++,d=1e3*+window.getComputedStyle(u).getPropertyValue("--ripple-duration").replace("s","");h=()=>{let e=Date.now()-s;const t=()=>{a.a.mutate(()=>{r.remove()}),n&&n(l)};if(e<d){let n=Math.max(d-e,d/2);setTimeout(()=>r.classList.add("hiding"),Math.max(n-d/2,0)),setTimeout(t,n)}else r.classList.add("hiding"),setTimeout(t,d/2);o.IS_TOUCH_SUPPORTED||window.removeEventListener("contextmenu",h),h=null,f=!1},t&&t(l),window.requestAnimationFrame(()=>{const t=u.getBoundingClientRect();r.classList.add("c-ripple__circle");const n=e-t.left,a=i-t.top,o=Math.sqrt(Math.pow(Math.abs(a-t.height/2)+t.height/2,2)+Math.pow(Math.abs(n-t.width/2)+t.width/2,2)),s=n-o/2,c=a-o/2;r.style.width=r.style.height=o+"px",r.style.left=s+"px",r.style.top=c+"px",u.append(r)})},m=t=>t.target!==e&&(["BUTTON","A"].includes(t.target.tagName)||Object(i.a)(t.target,"c-ripple")!==u)&&(d===e||!Object(r.a)(t.target,d));let f=!1;if(o.IS_TOUCH_SUPPORTED){let e=()=>{h&&h()};d.addEventListener("touchstart",t=>{if(!s.default.settings.animationsEnabled)return;if(t.touches.length>1||f||m(t))return;f=!0;let{clientX:n,clientY:i}=t.touches[0];p(n,i),d.addEventListener("touchend",e,{once:!0}),window.addEventListener("touchmove",t=>{t.cancelBubble=!0,t.stopPropagation(),e(),d.removeEventListener("touchend",e)},{once:!0})},{passive:!0})}else d.addEventListener("mousedown",e=>{if(![0,2].includes(e.button))return;if(!s.default.settings.animationsEnabled)return;if("0"===d.dataset.ripple||m(e))return;if(f)return void(f=!1);let{clientX:t,clientY:n}=e;p(t,n),window.addEventListener("mouseup",h,{once:!0,passive:!0}),window.addEventListener("contextmenu",h,{once:!0,passive:!0})},{passive:!0})}},20:function(e,t,n){"use strict";n.r(t);var i=n(36),a=n(47),o=n(17),s=n(33),r=n(31),c=n(68),l=n(40),d=n(54),u=n(34),h=n(90),p=n(1),m=n(7),f=n(16),g=n(52),v=n(18),b=n(67),y=n(6),E=n(60),w=n(95),L=n(123),_=n(22),O=n(97),S=n(5),T=n(30),j=n(35),k=n(61),A=n(63),x=n(103),P=n(96),C=n(53),I=n(83),D=n(15),R=n(129),N=n(10),F=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function r(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}c((i=i.apply(e,t||[])).next())}))};let M,U=null;const H=new c.a("page-sign",!0,()=>{const e=()=>{t=f.default.countriesList.filter(e=>{var t;return!(null===(t=e.pFlags)||void 0===t?void 0:t.hidden)}).sort((e,t)=>(e.name||e.default_name).localeCompare(t.name||t.default_name))};let t;e(),D.default.addEventListener("language_change",()=>{e()});const c=new Map;let v,B;const q=document.createElement("div");q.classList.add("input-wrapper");const z=new l.b({label:"Login.CountrySelectorLabel",name:Object(E.b)()});z.container.classList.add("input-select");const Q=z.input,V=document.createElement("div");V.classList.add("select-wrapper","z-depth-3","hide");const X=document.createElement("span");X.classList.add("arrow","arrow-down"),z.container.append(X);const W=document.createElement("ul");V.appendChild(W);new a.b(V);let Y=()=>{Y=null,t.forEach(e=>{const t=Object(P.c)(e.iso2),n=[];e.country_codes.forEach(i=>{const a=document.createElement("li");let o=r.a.wrapEmojiText(t);if(N.a){const e=document.createElement("span");e.innerHTML=o,a.append(e)}else a.innerHTML=o;const s=Object(f.i18n)(e.default_name);s.dataset.defaultName=e.default_name,a.append(s);const c=document.createElement("span");c.classList.add("phone-code"),c.innerText="+"+i.country_code,a.appendChild(c),n.push(a),W.append(a)}),c.set(e.iso2,n)}),W.addEventListener("mousedown",e=>{if(0!==e.button)return;const t=Object(b.a)(e.target,"LI");$(t)}),z.container.appendChild(V)};const $=e=>{const n=e.childNodes[1].dataset.defaultName,i=e.querySelector(".phone-code").innerText,a=i.replace(/\D/g,"");Object(j.a)(Q,Object(f.i18n)(n)),Object(C.a)(Q,"input"),v=t.find(e=>e.default_name===n),B=v.country_codes.find(e=>e.country_code===a),ee.value=ee.lastValue=i,Z(),setTimeout(()=>{te.focus(),Object(x.a)(te,!0)},0)};let J;Y(),Q.addEventListener("focus",(function(e){Y?Y():t.forEach(e=>{c.get(e.iso2).forEach(e=>e.style.display="")}),clearTimeout(J),J=void 0,V.classList.remove("hide"),V.offsetWidth,V.classList.add("active"),z.select(),Object(h.b)({container:H.pageEl.parentElement.parentElement,element:Q,position:"start",margin:4}),setTimeout(()=>{K||(document.addEventListener("mousedown",G,{capture:!0}),K=!0)},0)}));let K=!1;const G=e=>{Object(y.a)(e.target,"input-select")||e.target!==Q&&(Z(),document.removeEventListener("mousedown",G,{capture:!0}),K=!1)},Z=()=>{void 0===J&&(V.classList.remove("active"),J=window.setTimeout(()=>{V.classList.add("hide"),J=void 0},200))};Q.addEventListener("keyup",e=>{const n=e.key;if(e.ctrlKey||"Control"===n)return!1;let i=z.value.toLowerCase(),a=[];t.forEach(e=>{let t=!![e.name,e.default_name].filter(Boolean).find(e=>-1!==e.toLowerCase().indexOf(i));c.get(e.iso2).forEach(e=>e.style.display=t?"":"none"),t&&a.push(e)}),0===a.length?t.forEach(e=>{c.get(e.iso2).forEach(e=>e.style.display="")}):1===a.length&&"Enter"===n&&$(c.get(a[0].iso2)[0])}),X.addEventListener("mousedown",(function(e){e.cancelBubble=!0,e.preventDefault(),Q.matches(":focus")?Q.blur():Q.focus()}));const ee=new R.a({onInput:e=>{g.a.loadLottieWorkers();const{country:t,code:n}=e||{};let i=t?t.name||t.default_name:"";i===z.value||v&&t&&n&&(v===t||B.country_code===n.country_code)||(Object(j.a)(Q,t?Object(f.i18n)(t.default_name):i),v=t,B=n),t||ee.value.length-1>1?U.style.visibility="":U.style.visibility="hidden"}}),te=ee.input;te.addEventListener("keypress",e=>{if(!U.style.visibility&&"Enter"===e.key)return ie()});const ne=new d.a({text:"Login.KeepSigned",name:"keepSession",withRipple:!0,checked:!0});ne.input.addEventListener("change",()=>{const e=ne.checked;o.default.pushToState("keepSigned",e),w.a.toggleStorage(e),L.a.toggleStorage(e),s.a.toggleStorage(e),A.a.toggleStorage(e)}),o.default.getState().then(e=>{o.default.storage.isAvailable()?ne.checked=e.keepSigned:(ne.checked=!1,ne.label.classList.add("checkbox-disabled"))}),U=Object(u.a)("btn-primary btn-color-primary",{text:"Login.Next"}),U.style.visibility="hidden";const ie=e=>{e&&Object(S.a)(e);const t=Object(k.a)([U,M],!0);Object(j.a)(U,Object(f.i18n)("PleaseWait")),Object(i.f)(U);let a=ee.value;s.a.invokeApi("auth.sendCode",{phone_number:a,api_id:m.a.id,api_hash:m.a.hash,settings:{_:"codeSettings"}}).then(e=>{n.e(22).then(n.bind(null,23)).then(t=>t.default.mount(Object.assign(e,{phone_number:a})))}).catch(e=>{switch(t(),e.type){case"PHONE_NUMBER_INVALID":ee.setError(),Object(j.a)(ee.label,Object(f.i18n)("Login.PhoneLabelInvalid")),te.classList.add("error"),Object(j.a)(U,Object(f.i18n)("Login.Next"));break;default:console.error("auth.sendCode error:",e),U.innerText=e.type}})};Object(T.b)(U,ie),M=Object(u.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Login"});M.addEventListener("click",()=>{_.default.mount()}),q.append(z.container,ee.container,ne.label,U,M);const ae=document.createElement("h4");ae.classList.add("text-center"),Object(f._i18n)(ae,"Login.Title");const oe=document.createElement("div");oe.classList.add("subtitle","text-center"),Object(f._i18n)(oe,"Login.StartText"),H.pageEl.querySelector(".container").append(ae,oe,q);p.IS_TOUCH_SUPPORTED||setTimeout(()=>{te.focus()},0),Object(O.a)(q),s.a.invokeApi("help.getNearestDc").then(e=>{var t;const n=I.a.getFromCache("langPack");n&&!(null===(t=n.countries)||void 0===t?void 0:t.hash)&&f.default.getLangPack(n.lang_code).then(()=>{Object(C.a)(te,"input")});const i=new Set([1,2,3,4,5]),a=[e.this_dc];let o;return e.nearest_dc!==e.this_dc&&(o=s.a.getNetworker(e.nearest_dc).then(()=>{a.push(e.nearest_dc)})),(o||Promise.resolve()).then(()=>{a.forEach(e=>{i.delete(e)});const e=[...i],t=()=>F(void 0,void 0,void 0,(function*(){const n=e.shift();if(!n)return;const i=`dc${n}_auth_key`;if(yield A.a.get(i))return t();setTimeout(()=>{s.a.getNetworker(n).finally(t)},3e3)}));t()}),e}).then(e=>{z.value.length||ee.value.length||$(c.get(e.country)[0])})},()=>{U&&(Object(j.a)(U,Object(f.i18n)("Login.Next")),Object(v.ripple)(U,void 0,void 0,!0),U.removeAttribute("disabled")),M&&M.removeAttribute("disabled"),o.default.pushToState("authState",{_:"authStateSignIn"})});t.default=H},22:function(e,t,n){"use strict";n.r(t);var i=n(33),a=n(68),o=n(75),s=n(56),r=n(7),c=n(34),l=n(16),d=n(17),u=n(15),h=n(36),p=n(97),m=n(77),f=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function r(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}c((i=i.apply(e,t||[])).next())}))};let g;const v=new a.a("page-signQR",!0,()=>g,()=>{g||(g=f(void 0,void 0,void 0,(function*(){const e=v.pageEl.querySelector(".auth-image");let t=Object(h.f)(e,!0);const a=document.createElement("div");a.classList.add("input-wrapper");const d=Object(c.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Cancel"});a.append(d),Object(p.a)(a);const b=e.parentElement,y=document.createElement("h4");Object(l._i18n)(y,"Login.QR.Title");const E=document.createElement("ol");E.classList.add("qr-description"),["Login.QR.Help1","Login.QR.Help2","Login.QR.Help3"].forEach(e=>{const t=document.createElement("li");t.append(Object(l.i18n)(e)),E.append(t)}),b.append(y,E,a),d.addEventListener("click",()=>{Promise.all([n.e(3),n.e(31)]).then(n.bind(null,20)).then(e=>e.default.mount()),L=!0});const w=(yield Promise.all([n.e(11).then(n.t.bind(null,140,7))]))[0].default;let L=!1;u.default.addEventListener("user_auth",()=>{L=!0,g=null},{once:!0});let _,O={ignoreErrors:!0};const S=a=>f(void 0,void 0,void 0,(function*(){try{let c=yield i.a.invokeApi("auth.exportLoginToken",{api_id:r.a.id,api_hash:r.a.hash,except_ids:[]},{ignoreErrors:!0});if("auth.loginTokenMigrateTo"===c._&&(O.dcId||(O.dcId=c.dc_id,i.a.setBaseDcId(c.dc_id)),c=yield i.a.invokeApi("auth.importLoginToken",{token:c.token},O)),"auth.loginTokenSuccess"===c._){const e=c.authorization;return i.a.setUser(e.user),n.e(4).then(n.bind(null,19)).then(e=>e.default.mount()),!0}if(!_||!Object(s.b)(_,c.token)){_=c.token;let n="tg://login?token="+Object(s.e)(c.token).replace(/\+/g,"-").replace(/\//g,"_").replace(/\=+$/,"");const i=window.getComputedStyle(document.documentElement),a=i.getPropertyValue("--surface-color").trim(),o=i.getPropertyValue("--primary-text-color").trim(),r=i.getPropertyValue("--primary-color").trim(),l=yield fetch("assets/img/logo_padded.svg").then(e=>e.text()).then(e=>{e=e.replace(/(fill:).+?(;)/,`$1${r}$2`);const t=new Blob([e],{type:"image/svg+xml;charset=utf-8"});return new Promise(e=>{const n=new FileReader;n.onload=t=>{e(t.target.result)},n.readAsDataURL(t)})}),d=new w({width:240*window.devicePixelRatio,height:240*window.devicePixelRatio,data:n,image:l,dotsOptions:{color:o,type:"rounded"},cornersSquareOptions:{type:"extra-rounded"},imageOptions:{imageSize:1,margin:0},backgroundOptions:{color:a},qrOptions:{errorCorrectionLevel:"L"}});let u;d.append(e),e.lastChild.classList.add("qr-canvas"),u=d._drawingPromise?d._drawingPromise:Promise.race([Object(m.a)(1e3),new Promise(e=>{d._canvas._image.addEventListener("load",()=>{window.requestAnimationFrame(()=>e())},{once:!0})})]),yield u.then(()=>{if(t){t.style.animation="hide-icon .4s forwards";const n=e.children[1];n.style.display="none",n.style.animation="grow-icon .4s forwards",setTimeout(()=>{n.style.display=""},150),setTimeout(()=>{n.style.animation=""},500),t=void 0}else Array.from(e.children).slice(0,-1).forEach(e=>{e.remove()})})}if(a){let e=Date.now()/1e3,t=c.expires-e-o.a.serverTimeOffset;yield Object(m.a)(t>3?3e3:1e3*t|0)}}catch(e){switch(e.type){case"SESSION_PASSWORD_NEEDED":console.warn("pageSignQR: SESSION_PASSWORD_NEEDED"),e.handled=!0,n.e(16).then(n.bind(null,21)).then(e=>e.default.mount()),L=!0,g=null;break;default:console.error("pageSignQR: default error:",e),L=!0}return!0}return!1}));return()=>f(void 0,void 0,void 0,(function*(){for(L=!1;!L&&!(yield S(!0)););}))}))),g.then(e=>{e()}),d.default.pushToState("authState",{_:"authStateSignQr"})});t.default=v},23:function(e,t,n){"use strict";n.r(t);var i=n(38),a=n(17),o=n(33),s=n(68),r=n(20),c=n(116),l=n(117),d=n(16),u=n(60),h=n(35),p=function(e,t,n,i){return new(n||(n=Promise))((function(a,o){function s(e){try{c(i.next(e))}catch(e){o(e)}}function r(e){try{c(i.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,r)}c((i=i.apply(e,t||[])).next())}))};let m,f=null,g=null,v=null;const b=new s.a("page-authCode",!0,()=>{const e=f.type.length,t=new l.a({label:"Code",name:Object(u.b)(),length:e,onFill:e=>{s(e)}});m=t.input,b.pageEl.querySelector(".input-wrapper").append(t.container);b.pageEl.querySelector(".phone-edit").addEventListener("click",(function(){return r.default.mount()}));const a=()=>{setTimeout(()=>{y.remove()},300)},s=e=>{m.setAttribute("disabled","true");const i={phone_number:f.phone_number,phone_code_hash:f.phone_code_hash,phone_code:e};o.a.invokeApi("auth.signIn",i,{ignoreErrors:!0}).then(e=>{switch(e._){case"auth.authorization":o.a.setUser(e.user),n.e(4).then(n.bind(null,19)).then(e=>{e.default.mount()}),a();break;case"auth.authorizationSignUpRequired":Promise.all([n.e(5),n.e(24)]).then(n.bind(null,25)).then(e=>{e.default.mount({phone_number:f.phone_number,phone_code_hash:f.phone_code_hash})}),a()}}).catch(e=>p(void 0,void 0,void 0,(function*(){let i=!1;switch(e.type){case"SESSION_PASSWORD_NEEDED":i=!0,e.handled=!0,yield(yield n.e(20).then(n.bind(null,21))).default.mount(),setTimeout(()=>{m.value=""},300);break;case"PHONE_CODE_EXPIRED":m.classList.add("error"),Object(h.a)(t.label,Object(d.i18n)("PHONE_CODE_EXPIRED"));break;case"PHONE_CODE_EMPTY":case"PHONE_CODE_INVALID":m.classList.add("error"),Object(h.a)(t.label,Object(d.i18n)("PHONE_CODE_INVALID"));break;default:t.label.innerText=e.type}i||t.select(),m.removeAttribute("disabled")})))},g=b.pageEl.querySelector(".auth-image"),v=i.b.isMobile?100:166,y=new c.a(t,v);return g.append(y.container),y.load()},e=>{if(f=e,g){m.value="";const e=document.createEvent("HTMLEvents");e.initEvent("input",!1,!0),m.dispatchEvent(e)}else g=b.pageEl.getElementsByClassName("phone")[0],v=b.pageEl.getElementsByClassName("sent-type")[0];let t,n;switch(g.innerText=f.phone_number,f.type._){case"auth.sentCodeTypeSms":t="Login.Code.SentSms";break;case"auth.sentCodeTypeApp":t="Login.Code.SentInApp";break;case"auth.sentCodeTypeCall":t="Login.Code.SentCall";break;default:t="Login.Code.SentUnknown",n=[f.type._]}Object(h.a)(v,Object(d.i18n)(t,n)),a.default.pushToState("authState",{_:"authStateAuthCode",sentCode:e})},()=>{m.focus()});t.default=b},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c}));var i=n(1),a=n(53);const o=i.IS_TOUCH_SUPPORTED?"mousedown":"click";function s(e,t,n={}){const i=n.listenerSetter?n.listenerSetter.add(e):e.addEventListener.bind(e);n.touchMouseDown=!0,i(o,t,n)}function r(e,t,n){e.removeEventListener(o,t,n)}function c(e){Object(a.a)(e,o)}},34:function(e,t,n){"use strict";var i=n(16),a=n(18);t.a=(e,t={})=>{const n=document.createElement(t.asDiv?"div":"button");return n.className=e+(t.icon?" tgico-"+t.icon:""),t.noRipple||(t.rippleSquare&&n.classList.add("rp-square"),Object(a.ripple)(n)),t.onlyMobile&&n.classList.add("only-handhelds"),t.disabled&&n.setAttribute("disabled","true"),t.text&&n.append(Object(i.i18n)(t.text)),n}},36:function(e,t,n){"use strict";n.d(t,"f",(function(){return u})),n.d(t,"g",(function(){return h})),n.d(t,"c",(function(){return f})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return E})),n.d(t,"b",(function(){return _})),n.d(t,"a",(function(){return O}));var i=n(29),a=n(5),o=n(30),s=n(38),r=n(1),c=n(0),l=n(15),d=n(51);function u(e,t=!1){const n='\n  <svg xmlns="http://www.w3.org/2000/svg" class="preloader-circular" viewBox="25 25 50 50">\n  <circle class="preloader-path" cx="50" cy="50" r="20" fill="none" stroke-miterlimit="10"/>\n  </svg>';if(t){const t=document.createElement("div");return t.classList.add("preloader"),t.innerHTML=n,e&&e.appendChild(t),t}return e.insertAdjacentHTML("beforeend",n),e.lastElementChild}function h(e,t="check"){return e.classList.remove("tgico-"+t),e.disabled=!0,u(e),()=>{e.innerHTML="",e.classList.add("tgico-"+t),e.removeAttribute("disabled")}}i.a.putPreloader=u;let p=e=>{let t=g.getBoundingClientRect(),{clientX:n,clientY:i}=e,a=n>=t.right?n-t.right:t.left-n,o=i>=t.bottom?i-t.bottom:t.top-i;(a>=100||o>=100)&&f()};const m=e=>{f()},f=()=>{g&&(g.classList.remove("active"),g.parentElement.classList.remove("menu-open"),b&&b.remove(),g=null,l.default.dispatchEvent("context_menu_toggle",!1)),v&&(v(),v=null),r.IS_TOUCH_SUPPORTED||(window.removeEventListener("mousemove",p),window.removeEventListener("contextmenu",m)),document.removeEventListener(o.a,m),c.IS_MOBILE_SAFARI||d.a.removeByType("menu")};window.addEventListener("resize",()=>{g&&f()});let g=null,v=null,b=null;function y(e,t){f(),c.IS_MOBILE_SAFARI||d.a.pushItem({type:"menu",onPop:e=>{f()}}),g=e,g.classList.add("active"),g.parentElement.classList.add("menu-open"),b||(b=document.createElement("div"),b.classList.add("btn-menu-overlay"),b.addEventListener(o.a,e=>{Object(a.a)(e),m()})),g.parentElement.insertBefore(b,g),v=t,r.IS_TOUCH_SUPPORTED||(window.addEventListener("mousemove",p),window.addEventListener("contextmenu",m,{once:!0})),document.addEventListener(o.a,m),l.default.dispatchEvent("context_menu_toggle",!0)}function E({pageX:e,pageY:t},n,i){let{scrollWidth:a,scrollHeight:o}=n;const r=document.body.getBoundingClientRect(),c=r.width,l=r.height;i=s.b.isMobile?"right":"left";let d="top";const u={x:{left:e,right:e-a},intermediateX:"right"===i?8:c-a-8,y:{top:t,bottom:t-o},intermediateY:t<l/2?8:l-o-8},h={left:u.x.left+a+8<=c,right:u.x.right>=8},p={top:u.y.top+o+8<=l,bottom:u.y.bottom-8>=8};{let e;e=h[i]?u.x[i]:(i="center",u.intermediateX),n.style.left=e+"px"}{let e;e=p[d]?u.y[d]:(d="center",u.intermediateY),n.style.top=e+"px"}n.className=n.className.replace(/(top|center|bottom)-(left|center|right)/g,""),n.classList.add(("center"===d?d:"bottom")+"-"+("center"===i?i:"left"===i?"right":"left"))}let w=!1,L=0;function _(){L&&clearTimeout(L),L=window.setTimeout(()=>{L=0,w=!1},400),w=!0}function O(e,t,n){const i=n?n.add(e):e.addEventListener.bind(e),o=n?n.removeManual.bind(n,e):e.removeEventListener.bind(e);if(c.IS_APPLE&&r.IS_TOUCH_SUPPORTED){let n;const s={capture:!0},r=()=>{clearTimeout(n),o("touchmove",r,s),o("touchend",r,s),o("touchcancel",r,s)};i("touchstart",o=>{o.touches.length>1?r():(i("touchmove",r,s),i("touchend",r,s),i("touchcancel",r,s),n=window.setTimeout(()=>{w?r():(t(o.touches[0]),r(),g&&e.addEventListener("touchend",a.a,{once:!0}))},400))})}else i("contextmenu",r.IS_TOUCH_SUPPORTED?n=>{t(n),g&&e.addEventListener("touchend",a.a,{once:!0})}:t)}},51:function(e,t,n){"use strict";var i=n(29),a=n(0),o=n(37),s=n(8),r=n(5),c=n(39),l=n(78);const d=new class{constructor(){this.navigations=[],this.id=Date.now(),this.manual=!1,this.log=Object(o.b)("NC"),this.debug=!0,this.currentHash=window.location.hash;let e=!1;if(window.addEventListener("popstate",t=>{if(this.debug&&this.log("popstate",t,e),window.location.hash!==this.currentHash)return this.onHashChange&&this.onHashChange(),void this.replaceState();this.currentHash=window.location.hash;if(t.state!==this.id)return void this.pushState();const n=this.navigations.pop();n?(this.manual=!e,this.handleItem(n)):this.pushState()}),window.addEventListener("keydown",e=>{const t=this.navigations[this.navigations.length-1];t&&("Escape"!==e.key||t.onEscape&&!t.onEscape()||(Object(r.a)(e),this.back(t.type)))},{capture:!0,passive:!1}),a.IS_MOBILE_SAFARI){const t={passive:!0};window.addEventListener("touchstart",t=>{t.touches.length>1||(this.debug&&this.log("touchstart"),Object(l.a)(t)&&(e=!0,window.addEventListener("touchend",()=>{setTimeout(()=>{e=!1},100)},{passive:!0,once:!0})))},t)}history.scrollRestoration="manual",this.pushState()}handleItem(e){const t=e.onPop(!!this.manual&&void 0);this.debug&&this.log("popstate, navigation:",e,this.navigations),!1===t?this.pushItem(e):e.noBlurOnPop||Object(s.a)(),this.manual=!1}findItemByType(e){for(let t=this.navigations.length-1;t>=0;--t){const n=this.navigations[t];if(n.type===e)return{item:n,index:t}}}back(e){if(e){const t=this.findItemByType(e);if(t)return void this.backByItem(t.item,t.index)}history.back()}backByItem(e,t=this.navigations.indexOf(e)){this.manual=!0,this.navigations.splice(t,1),this.handleItem(e)}pushItem(e){this.navigations.push(e),this.debug&&this.log("pushstate",e,this.navigations),e.noHistory||this.pushState()}pushState(){this.manual=!1,history.pushState(this.id,"")}replaceState(){history.replaceState(this.id,"",location.origin+location.pathname)}removeItem(e){e&&Object(c.e)(this.navigations,e)}removeByType(e,t=!1){for(let n=this.navigations.length-1;n>=0;--n){if(this.navigations[n].type===e&&(this.navigations.splice(n,1),t))break}}};i.a.appNavigationController=d,t.a=d},53:function(e,t,n){"use strict";function i(e,t){const n=new Event(t,{bubbles:!0,cancelable:!0});e.dispatchEvent(n)}n.d(t,"a",(function(){return i}))},56:function(e,t,n){"use strict";function i(e){const t=e.length,n=new Array(t);for(let i=0;i<t;++i)n[i]=(e[i]<16?"0":"")+(e[i]||0).toString(16);return n.join("")}function a(e){const t=e.length,n=new Uint8Array(Math.ceil(t/2));let i=0;t%2&&(n[i++]=parseInt(e.charAt(0),16));for(let a=i;a<t;a+=2)n[i++]=parseInt(e.substr(a,2),16);return n}function o(e){let t,n="";for(let i=e.length,a=0,o=0;o<i;++o)t=o%3,a|=e[o]<<(16>>>t&24),2!==t&&i-o!=1||(n+=String.fromCharCode(s(a>>>18&63),s(a>>>12&63),s(a>>>6&63),s(63&a)),a=0);return n.replace(/A(?=A$|$)/g,"=")}function s(e){return e<26?e+65:e<52?e+71:e<62?e-4:62===e?43:63===e?47:65}function r(e,t){const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;++i)if(e[i]!==t[i])return!1;return!0}function c(e,t){const n=e.length,i=new Uint8Array(n);for(let a=0;a<n;++a)i[a]=e[a]^t[a];return i}function l(e){return e instanceof Uint8Array?e:"string"==typeof e?(new TextEncoder).encode(e):new Uint8Array(e)}function d(...e){const t=e.reduce((e,t)=>e+(t.byteLength||t.length),0),n=new Uint8Array(t);let i=0;return e.forEach(e=>{n.set(e instanceof ArrayBuffer?new Uint8Array(e):e,i),i+=e.byteLength||e.length}),n}function u(e){const t=new Uint8Array(e.byteLength);for(let n=0,i=4*e.length;n<i;++n)t[n]=e[n>>>2]>>>24-n%4*8&255;return t}function h(e){const t=l(e),n=[];for(let e=0,i=t.length;e<i;++e)n[e>>>2]|=t[e]<<24-e%4*8;return new Uint32Array(n)}n.d(t,"f",(function(){return i})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return r})),n.d(t,"h",(function(){return c})),n.d(t,"i",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"d",(function(){return u})),n.d(t,"g",(function(){return h}))},64:function(e,t,n){"use strict";var i=n(43),a=n(45),o=n(29),s=n(65);const r=new class{constructor(){this.promises={},this.raf=i.b.bind(null),this.scheduled=!1}do(e,t){let n=this.promises[e];return n||(this.scheduleFlush(),n=this.promises[e]=Object(a.a)()),void 0!==t&&n.then(()=>t()),n}measure(e){return this.do("read",e)}mutate(e){return this.do("write",e)}mutateElement(e,t){const n=Object(s.a)(e)?this.mutate():Promise.resolve();return void 0!==t&&n.then(()=>t()),n}scheduleFlush(){this.scheduled||(this.scheduled=!0,this.raf(()=>{this.promises.read&&this.promises.read.resolve(),this.promises.write&&this.promises.write.resolve(),this.scheduled=!1,this.promises={}}))}};o.a&&(o.a.sequentialDom=r),t.a=r},75:function(e,t,n){"use strict";var i=n(29),a=n(63),o=n(33);const s=new class{constructor(){this.serverTimeOffset=0,a.a.get("server_time_offset").then(e=>{e&&(this.serverTimeOffset=e)}),o.a.addTaskListener("applyServerTimeOffset",e=>{this.serverTimeOffset=e.payload})}};i.a&&(i.a.serverTimeManager=s),t.a=s},78:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n(0);function a(e){return i.IS_MOBILE_SAFARI&&e instanceof TouchEvent&&e.touches[0].clientX<30}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n(5),a=n(30),o=n(9),s=n(16),r=n(33),c=n(15),l=n(34),d=n(36);let u,h=!1;function p(e){h||(u||(u=r.a.getConfig().then(e=>e.suggested_lang_code!==s.default.lastRequestedLangCode?Promise.all([e,s.default.getStrings(e.suggested_lang_code,["Login.ContinueOnLanguage"]),s.default.getCacheLangPack()]):[]))).then(([t,n])=>{if(!t)return;const r=[];n.forEach(e=>{const t=s.default.strings.get(e.key);t&&(r.push(t),s.default.strings.set(e.key,e))});const u=Object(l.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.ContinueOnLanguage"});u.lastElementChild.classList.remove("i18n"),Object(o.a)().then(()=>{window.requestAnimationFrame(()=>{e.append(u)})}),c.default.addEventListener("language_change",()=>{u.remove()},{once:!0}),r.forEach(e=>{s.default.strings.set(e.key,e)}),Object(a.b)(u,e=>{Object(i.a)(e),h=!0,u.disabled=!0,Object(d.f)(u),s.default.getLangPack(t.suggested_lang_code)})})}}}]);
//# sourceMappingURL=14.c922033de3eb3d2a50fb.chunk.js.map