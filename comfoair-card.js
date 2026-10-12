function e(e,t,i,s){var n,r=arguments.length,a=r<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,s);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class r{constructor(e,t,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(t,e))}return e}toString(){return this.cssText}}const a=(e,...t)=>{const i=1===e.length?e[0]:t.reduce((t,i,s)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new r(i,e,s)},o=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,s))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,m=globalThis,f=m.trustedTypes,_=f?f.emptyScript:"",g=m.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},b=(e,t)=>!l(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(e,i,t);void 0!==s&&c(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){const{get:s,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:s,set(t){const r=s?.call(this);n?.call(this,t),this.requestUpdate(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const i of t)this.createProperty(i,e[i])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,i]of t)this.elementProperties.set(e,i)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const i=this._$Eu(e,t);void 0!==i&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,s)=>{if(i)e.adoptedStyleSheets=s.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const i of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,e.appendChild(s)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){const i=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:y).toAttribute(t,i.type);this._$Em=e,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(e,t){const i=this.constructor,s=i._$Eh.get(e);if(void 0!==s&&this._$Em!==s){const e=i.getPropertyOptions(s),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=s;const r=n.fromAttribute(t,e.type);this[s]=r??this._$Ej?.get(s)??r,this._$Em=null}}requestUpdate(e,t,i,s=!1,n){if(void 0!==e){const r=this.constructor;if(!1===s&&(n=this[e]),i??=r.getPropertyOptions(e),!((i.hasChanged??b)(n,t)||i.useDefault&&i.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,i))))return;this.C(e,t,i)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:s,wrapped:n},r){i&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),!0===s&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,i]of e){const{wrapped:e}=i,s=this[t];!0!==e||this._$AL.has(t)||void 0===s||this.C(t,void 0,i,s)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,g?.({ReactiveElement:$}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=e=>e,S=w.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+k,M=`<${N}>`,O=document,P=()=>O.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,R="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,H=/>/g,L=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,B=/"/g,I=/^(?:script|style|textarea|title)$/i,D=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),V=D(1),W=D(2),G=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),q=new WeakMap,K=O.createTreeWalker(O,129);function Q(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const J=(e,t)=>{const i=e.length-1,s=[];let n,r=2===t?"<svg>":3===t?"<math>":"",a=z;for(let t=0;t<i;t++){const i=e[t];let o,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===z?"!--"===l[1]?a=F:void 0!==l[1]?a=H:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=L):void 0!==l[3]&&(a=L):a===L?">"===l[0]?(a=n??z,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?L:'"'===l[3]?B:j):a===B||a===j?a=L:a===F||a===H?a=z:(a=L,n=void 0);const p=a===L&&e[t+1].startsWith("/>")?" ":"";r+=a===z?i+M:c>=0?(s.push(o),i.slice(0,c)+E+i.slice(c)+k+p):i+k+(-2===c?t:p)}return[Q(e,r+(e[i]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),s]};class Y{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let n=0,r=0;const a=e.length-1,o=this.parts,[l,c]=J(e,t);if(this.el=Y.createElement(l,i),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(s=K.nextNode())&&o.length<a;){if(1===s.nodeType){if(s.hasAttributes())for(const e of s.getAttributeNames())if(e.endsWith(E)){const t=c[r++],i=s.getAttribute(e).split(k),a=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:a[2],strings:i,ctor:"."===a[1]?se:"?"===a[1]?ne:"@"===a[1]?re:ie}),s.removeAttribute(e)}else e.startsWith(k)&&(o.push({type:6,index:n}),s.removeAttribute(e));if(I.test(s.tagName)){const e=s.textContent.split(k),t=e.length-1;if(t>0){s.textContent=S?S.emptyScript:"";for(let i=0;i<t;i++)s.append(e[i],P()),K.nextNode(),o.push({type:2,index:++n});s.append(e[t],P())}}}else if(8===s.nodeType)if(s.data===N)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=s.data.indexOf(k,e+1));)o.push({type:7,index:n}),e+=k.length-1}n++}}static createElement(e,t){const i=O.createElement("template");return i.innerHTML=e,i}}function X(e,t,i=e,s){if(t===G)return t;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const r=U(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(t=X(e,n._$AS(e,t.values),n,s)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,s=(e?.creationScope??O).importNode(t,!0);K.currentNode=s;let n=K.nextNode(),r=0,a=0,o=i[0];for(;void 0!==o;){if(r===o.index){let t;2===o.type?t=new te(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new ae(n,this,e)),this._$AV.push(t),o=i[++a]}r!==o?.index&&(n=K.nextNode(),r++)}return K.currentNode=O,s}p(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,i,s){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),U(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:i}=e,s="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Y.createElement(Q(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(t);else{const e=new ee(s,this),i=e.u(this.options);e.p(t),this.T(i),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new Y(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,s=0;for(const n of e)s===t.length?t.push(i=new te(this.O(P()),this.O(P()),this,this.options)):i=t[s],i._$AI(n),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class ie{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,s,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Z}_$AI(e,t=this,i,s){const n=this.strings;let r=!1;if(void 0===n)e=X(this,e,t,0),r=!U(e)||e!==this._$AH&&e!==G,r&&(this._$AH=e);else{const s=e;let a,o;for(e=n[0],a=0;a<n.length-1;a++)o=X(this,s[i+a],t,a),o===G&&(o=this._$AH[a]),r||=!U(o)||o!==this._$AH[a],o===Z?e=Z:e!==Z&&(e+=(o??"")+n[a+1]),this._$AH[a]=o}r&&!s&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class se extends ie{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}class ne extends ie{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class re extends ie{constructor(e,t,i,s,n){super(e,t,i,s,n),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??Z)===G)return;const i=this._$AH,s=e===Z&&i!==Z||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==Z&&(i===Z||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const oe=w.litHtmlPolyfillSupport;oe?.(Y,te),(w.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ce extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{const s=i?.renderBefore??t;let n=s._$litPart$;if(void 0===n){const e=i?.renderBefore??null;s._$litPart$=n=new te(t.insertBefore(P(),e),e,void 0,i??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}ce._$litElement$=!0,ce.finalized=!0,le.litElementHydrateSupport?.({LitElement:ce});const de=le.litElementPolyfillSupport;de?.({LitElement:ce}),(le.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pe=e=>(t,i)=>{void 0!==i?i.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ue={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},he=(e=ue,t,i)=>{const{kind:s,metadata:n}=i;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===s&&((e=Object.create(e)).wrapped=!0),r.set(i.name,e),"accessor"===s){const{name:s}=i;return{set(i){const n=t.get.call(this);t.set.call(this,i),this.requestUpdate(s,n,e,!0,i)},init(t){return void 0!==t&&this.C(s,void 0,e,t),t}}}if("setter"===s){const{name:s}=i;return function(i){const n=this[s];t.call(this,i),this.requestUpdate(s,n,e,!0,i)}}throw Error("Unsupported decorator location: "+s)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(e){return(t,i)=>"object"==typeof i?he(e,t,i):((e,t,i)=>{const s=t.hasOwnProperty(i);return t.constructor.createProperty(i,e),s?Object.getOwnPropertyDescriptor(t,i):void 0})(e,t,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(e){return me({...e,state:!0,attribute:!1})}var _e,ge;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(_e||(_e={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ge||(ge={}));var ve=function(e,t,i,s){s=s||{},i=null==i?{}:i;var n=new Event(t,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,e.dispatchEvent(n),n};const ye="mqttcomfoair-card",be="mqttcomfoair-card-editor",xe=[{mode:"off",icon:"mdi:fan-off"},{mode:"low",icon:"mdi:fan-speed-1"},{mode:"medium",icon:"mdi:fan-speed-2"},{mode:"high",icon:"mdi:fan-speed-3"}],$e=[{mode:"off",speed:0},{mode:"low",speed:33},{mode:"medium",speed:66},{mode:"high",speed:100}],we={off:"Aus",low:"Stufe 1",medium:"Stufe 2",high:"Stufe 3"},Ae=["fan","tempSensor1","tempSensor2","tempSensor3","tempSensor4","humSensor1","humSensor2","humSensor3","humSensor4","filterstatus","bypass_valve","summer_mode","preheat","fan_speed_supply","fan_speed_exhaust","level_supply","level_exhaust","flow_supply","flow_exhaust"],Se={en:{invalid_config:"Invalid configuration",no_entity:"No climate entity defined",detected:"entities detected",advanced:"Advanced / manual mapping",default_name:"Residential ventilation",history:"Show history",colder:"Colder",warmer:"Warmer",recovery:"Recovery",outside_air:"Outside air",exhaust_air:"Exhaust air",return_air:"Return air",supply_air:"Supply air",fan:"Fan",fan_off:"Off",fan_level:"Level {level}",filter:"Filter",filter_change:"Change",ok:"OK",bypass:"Bypass",open:"Open",closed:"Closed",preheating:"Preheating",active:"Active",summer:"Summer",winter:"Winter",device:"Q350 device",climate_entity:"climate entity",animation:"Animation",animated:"Animated (airflow + fans)",static:"Static",speed_source:"Speed source",fixed_speed:"Fixed speed (%)",air_level:"By air level (supply/return %)",color_scale:"Color scale",auto_current:"Auto (current values)",fixed_manual:"Fixed (manual range)",fixed_min:"Fixed scale - min (°C)",fixed_max:"Fixed scale - max (°C)",show_scale:"Show temperature scale",optional_name:"Name (optional)",outside_temperature:"Outside temperature",exhaust_temperature:"Exhaust temperature",return_temperature:"Return temperature",supply_temperature:"Supply temperature",filter_status:"Filter status",bypass_valve:"Bypass valve",summer_mode:"Summer mode",preheat_register:"Preheating coil",supply_fan_speed:"Supply fan speed",exhaust_fan_speed:"Exhaust fan speed",return_level:"Return air level",supply_level:"Supply air level"},nl:{invalid_config:"Ongeldige configuratie",no_entity:"Geen climate-entiteit ingesteld",detected:"entiteiten gevonden",advanced:"Geavanceerd / handmatig toewijzen",default_name:"Woonhuisventilatie",history:"Geschiedenis tonen",colder:"Kouder",warmer:"Warmer",recovery:"Terugwinning",outside_air:"Buitenlucht",exhaust_air:"Afvoerlucht",return_air:"Retourlucht",supply_air:"Toevoerlucht",fan:"Ventilator",fan_off:"Uit",fan_level:"Stand {level}",filter:"Filter",filter_change:"Vervangen",ok:"OK",bypass:"Bypass",open:"Open",closed:"Dicht",preheating:"Voorverwarming",active:"Actief",summer:"Zomer",winter:"Winter",climate_entity:"CA350/550 climate-entiteit (verplicht)",animation:"Animatie",animated:"Geanimeerd (luchtstromen + ventilatoren)",static:"Statisch",speed_source:"Snelheidsbron",fixed_speed:"Vaste snelheid (%)",air_level:"Op basis van luchtdebiet (toevoer/retour %)",color_scale:"Kleurenschaal",auto_current:"Auto (huidige waarden)",fixed_manual:"Vast (handmatig bereik)",fixed_min:"Vaste schaal - min (°C)",fixed_max:"Vaste schaal - max (°C)",show_scale:"Temperatuurschaal tonen",optional_name:"Naam (optioneel)",outside_temperature:"Buitentemperatuur",exhaust_temperature:"Afvoertemperatuur",return_temperature:"Retourtemperatuur",supply_temperature:"Toevoertemperatuur",filter_status:"Filterstatus",bypass_valve:"Bypassklep",summer_mode:"Zomermodus",preheat_register:"Voorverwarmingsregister",supply_fan_speed:"Toevoerventilatorsnelheid",exhaust_fan_speed:"Afvoerventilatorsnelheid",return_level:"Retourluchtstand",supply_level:"Toevoerluchtstand"},de:{invalid_config:"Ungültige Konfiguration",no_entity:"Keine climate-Entity ausgewählt",detected:"Entities erkannt",advanced:"Erweitert / manuelle Zuordnung",default_name:"Wohnraumlüftung",history:"Verlauf anzeigen",colder:"Kälter",warmer:"Wärmer",recovery:"Rückgewinnung",outside_air:"Außenluft",exhaust_air:"Fortluft",return_air:"Abluft",supply_air:"Zuluft",fan:"Lüfter",fan_off:"Aus",fan_level:"Stufe {level}",filter:"Filter",filter_change:"Wechseln",ok:"OK",bypass:"Bypass",open:"Offen",closed:"Zu",preheating:"Vorheizen",active:"Aktiv",summer:"Sommer",winter:"Winter",device:"Gerät",climate_entity:"Climate-Entity",animation:"Animation",animated:"Animiert (Luftströme + Lüfter)",static:"Statisch",speed_source:"Tempo-Quelle",fixed_speed:"Festes Tempo (%)",air_level:"Nach Luftmenge (Supply/Return %)",color_scale:"Farbskala",auto_current:"Auto (aktuelle Werte)",fixed_manual:"Fest (manueller Bereich)",fixed_min:"Feste Skala - Min (°C)",fixed_max:"Feste Skala - Max (°C)",show_scale:"Temperaturskala einblenden",optional_name:"Name (optional)",outside_temperature:"Außentemperatur",exhaust_temperature:"Fortlufttemperatur",return_temperature:"Ablufttemperatur",supply_temperature:"Zulufttemperatur",outside_humidity:"Außenfeuchte",exhaust_humidity:"Fortluftfeuchte",return_humidity:"Abluftfeuchte",supply_humidity:"Zuluftfeuchte",filter_status:"Filterstatus",bypass_valve:"Bypass-Ventil",summer_mode:"Sommermodus",preheat_register:"Vorheizregister",supply_fan_speed:"Lüfterdrehzahl Zuluft",exhaust_fan_speed:"Lüfterdrehzahl Fortluft",level_supply:"Lüfter-Stufe Zuluft",level_exhaust:"Lüfter-Stufe Abluft",flow_supply:"Volumenstrom Zuluft",flow_exhaust:"Volumenstrom Abluft",constraint:"Airflow Constraint",NoiseGuard:"Schallbegrenzung"},nb:{invalid_config:"Ikke gyldig konfigurasjon",no_entity:"Ingen climate-enhet valgt",detected:"enheter funnet",advanced:"Avansert / manuell tilordning"}};function Ce(e,t){let i=(t||"en").replace(/['"]+/g,"").split("-")[0].toLowerCase();return Se[i]||(i="en"),Se[i][e]??Se.en[e]??e}function Ee(e,t,i){return Object.entries(i).reduce((e,[t,i])=>e.replace(`{${t}}`,i),Ce(e,t))}function ke(e,t){if(e&&t)return e.states?e.states[t]:void 0}function Ne(e,t){const i=ke(e,t);return i&&"unavailable"!==i.state&&"unknown"!==i.state&&""!==i.state?i.state:"—"}function Me(e,t){const i=ke(e,t);if(!i)return;const s=parseFloat(i.state);return Number.isNaN(s)?void 0:s}const Oe=(e,t,i)=>e+(t-e)*i,Pe=[[.6,.16,252],[.72,.13,215],[.8,.14,155],[.82,.16,95],[.66,.19,45],[.5,.205,28]];function Ue(e){const t=Pe,i=(e=>Math.min(1,Math.max(0,e)))(e),s=i*(t.length-1),n=Math.min(t.length-2,Math.floor(s)),r=s-n,a=Oe(t[n][0],t[n+1][0],r),o=Oe(t[n][1],t[n+1][1],r),l=Oe(t[n][2],t[n+1][2],r);return`oklch(${a.toFixed(3)} ${o.toFixed(3)} ${l.toFixed(1)})`}function Te(e,t,i,s="de"){const n="on"===t;switch(e){case"fan":{const e=(i??"off").toLowerCase(),t=we[e]?.replace("Stufe ","")??e;return{icon:"mdi:fan",label:Ce("fan",s),sub:"off"===e?Ce("fan_off",s):Ee("fan_level",s,{level:t}),active:"off"!==e,color:"#03a9f4"}}case"filter":return{icon:"mdi:air-filter",label:Ce("filter",s),sub:(t??"-")+" d",active:Number(t)<0,color:"#f5a623"};case"bypass":return{icon:"mdi:valve",label:Ce("bypass",s),sub:(t??"-")+"%",active:Number(t)>0,color:"#36c46b"};case"preheat":return{icon:"mdi:radiator",label:Ce("preheating",s),sub:Ce(n?"active":"fan_off",s),active:n,color:"#ff7043"};case"season":return n?{icon:"mdi:weather-sunny",label:Ce("summer",s),sub:"",active:!0,color:"#ffb300"}:{icon:"mdi:snowflake",label:Ce("winter",s),sub:"",active:!0,color:"#4fc3f7"};case"constraint":const e={NoiseGuard:Ce("NoiseGuard",s),"":"-"},r=Ce(e[t??""],s)??"?";return{icon:"mdi:fan-alert",label:Ce("constraint",s),sub:r,active:(t??"").length>0,color:"#ff7043"}}}const Re=e=>"temperature"===e.attributes?.device_class,ze=e=>"humidity"===e.attributes?.device_class,Fe=e=>"rpm"===e.attributes?.unit_of_measurement,He=e=>"%"===e.attributes?.unit_of_measurement,Le=()=>!0,je=[{field:"fan",domain:"fan",predicate:Le},{field:"tempSensor1",domain:"sensor",predicate:Re,keywords:["outside","outdoor"]},{field:"tempSensor2",domain:"sensor",predicate:Re,keywords:["exhaust"]},{field:"tempSensor3",domain:"sensor",predicate:Re,keywords:["return","extract","inside"]},{field:"tempSensor4",domain:"sensor",predicate:Re,keywords:["supply"]},{field:"humSensor1",domain:"sensor",predicate:ze,keywords:["outside","outdoor"]},{field:"humSensor2",domain:"sensor",predicate:ze,keywords:["exhaust"]},{field:"humSensor3",domain:"sensor",predicate:ze,keywords:["return","extract","inside"]},{field:"humSensor4",domain:"sensor",predicate:ze,keywords:["supply"]},{field:"filterstatus",domain:"sensor",predicate:Le,keywords:["filter"]},{field:"bypass_valve",domain:"sensor",predicate:He,keywords:["bypass"]},{field:"fan_speed_supply",domain:"sensor",predicate:Fe,keywords:["supply","zuluft"]},{field:"fan_speed_exhaust",domain:"sensor",predicate:Fe,keywords:["exhaust","fortluft","abluft"]},{field:"level_supply",domain:"sensor",predicate:He,keywords:["supply_fan_duty"]},{field:"level_exhaust",domain:"sensor",predicate:He,keywords:["exhaust_fan_duty"]},{field:"flow_supply",domain:"sensor",predicate:Le,keywords:["supply_airflow"]},{field:"flow_exhaust",domain:"sensor",predicate:Le,keywords:["exhaust_airflow"]},{field:"constraint",domain:"sensor",predicate:Le,keywords:["constraint"]}];function Be(e,t){if(!e||!t)return{};let i=[];t&&e.entities&&(i=Object.keys(e.entities).filter(i=>e.entities[i].device_id===t));const s={};for(const t of je){const n=i.filter(i=>{if(!i.startsWith(`${t.domain}.`))return!1;const s=e.states[i];if(!s||!t.predicate(s))return!1;const n=`${i} ${String(s.attributes?.friendly_name??"")}`.toLowerCase();return!t.keywords?.length||t.keywords.some(e=>n.includes(e))});if(n.length){const e=n.reduce((e,t)=>t.length<e.length?t:e);s[t.field]=e}}return s}const Ie=[{name:"name",selector:{text:{}}},{name:"fan",selector:{entity:{domain:"fan"}}},{name:"tempSensor1",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"tempSensor2",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"tempSensor3",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"tempSensor4",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"humSensor1",selector:{entity:{domain:"sensor",device_class:"humerature"}}},{name:"humSensor2",selector:{entity:{domain:"sensor",device_class:"humerature"}}},{name:"humSensor3",selector:{entity:{domain:"sensor",device_class:"humerature"}}},{name:"humSensor4",selector:{entity:{domain:"sensor",device_class:"humerature"}}},{name:"filterstatus",selector:{entity:{domain:"sensor"}}},{name:"bypass_valve",selector:{entity:{domain:["binary_sensor","sensor"]}}},{name:"fan_speed_supply",selector:{entity:{domain:"sensor"}}},{name:"fan_speed_exhaust",selector:{entity:{domain:"sensor"}}},{name:"level_supply",selector:{entity:{domain:"sensor"}}},{name:"level_exhaust",selector:{entity:{domain:"sensor"}}},{name:"flow_supply",selector:{entity:{domain:"sensor"}}},{name:"flow_exhaust",selector:{entity:{domain:"sensor"}}},{name:"constraint",selector:{entity:{domain:"sensor"}}}],De={device:"device",animation:"animation",animation_speed_source:"speed_source",animation_speed:"fixed_speed",color_scale:"color_scale",temp_min:"fixed_min",temp_max:"fixed_max",show_legend:"show_scale",name:"optional_name",tempSensor1:"outside_temperature",tempSensor2:"exhaust_temperature",tempSensor3:"return_temperature",tempSensor4:"supply_temperature",humSensor1:"outside_humidity",humSensor2:"exhaust_humidity",humSensor3:"return_humidity",humSensor4:"supply_humidity",filterstatus:"filter_status",bypass_valve:"bypass_valve",summer_mode:"summer_mode",preheat:"preheat_register",fan_speed_supply:"supply_fan_speed",fan_speed_exhaust:"exhaust_fan_speed",level_exhaust:"level_exhaust",level_supply:"level_supply",flow_exhaust:"flow_exhaust",flow_supply:"flow_supply",constraint:"constraint"};let Ve=class extends ce{constructor(){super(...arguments),this._detectedCount=0,this._label=e=>Ce(De[e.name]??e.name,this.hass?.language)}setConfig(e){this._config=e}_mainSchema(){const e=this._config,t=[{name:"device",required:!1,selector:{device:{entity:{domain:["climate","fan"]}}}},{name:"animation",selector:{select:{options:[{value:"animated",label:Ce("animated",this.hass.language)},{value:"static",label:Ce("static",this.hass.language)}]}}}];return"animated"===e.animation&&(t.push({name:"animation_speed_source",selector:{select:{options:[{value:"fixed",label:Ce("fixed_speed",this.hass.language)},{value:"level",label:Ce("air_level",this.hass.language)}]}}}),"level"!==e.animation_speed_source&&t.push({name:"animation_speed",selector:{number:{min:10,max:200,step:10,unit_of_measurement:"%",mode:"slider"}}})),t.push({name:"color_scale",selector:{select:{options:[{value:"auto",label:Ce("auto_current",this.hass.language)},{value:"fixed",label:Ce("fixed_manual",this.hass.language)}]}}}),"fixed"===e.color_scale&&t.push({name:"temp_min",selector:{number:{min:-30,max:20,step:1,unit_of_measurement:"°C",mode:"box"}}},{name:"temp_max",selector:{number:{min:0,max:50,step:1,unit_of_measurement:"°C",mode:"box"}}}),t.push({name:"show_legend",selector:{boolean:{}}}),t}render(){return this.hass&&this._config?V`
      <div class="editor">
        <ha-form
          .hass=${this.hass}
          .data=${this._config}
          .schema=${this._mainSchema()}
          .computeLabel=${this._label}
          @value-changed=${this._mainChanged}
        ></ha-form>
        ${this._detectedCount>0?V`<div class="hint">✓ ${this._detectedCount} ${Ce("detected",this.hass.language)}</div>`:""}
        <ha-expansion-panel outlined>
          <span slot="header">${Ce("advanced",this.hass.language)}</span>
          <ha-form
            .hass=${this.hass}
            .data=${this._config}
            .schema=${Ie}
            .computeLabel=${this._label}
            @value-changed=${this._advancedChanged}
          ></ha-form>
        </ha-expansion-panel>
      </div>
    `:V``}_mainChanged(e){e.stopPropagation();const t=e.detail.value,i=t.device??"",s=!!i&&i!==this._config.device;let n={...this._config,...t};if(s){const e=n;for(const t of Ae)"entity"!==t&&delete e[t];const t=Be(this.hass,i);n={...n,...t},this._detectedCount=Object.keys(t).length}this._emit(n)}_advancedChanged(e){e.stopPropagation(),this._emit({...this._config,...e.detail.value})}_emit(e){this._config=e,ve(this,"config-changed",{config:e})}static get styles(){return a`
      .hint { color: var(--success-color, #43a047); padding: 4px 0 8px; font-size: 0.9em; }
      ha-form { display: block; }
      ha-expansion-panel { margin-top: 8px; }
    `}};e([me({attribute:!1})],Ve.prototype,"hass",void 0),e([fe()],Ve.prototype,"_config",void 0),e([fe()],Ve.prototype,"_detectedCount",void 0),Ve=e([pe(be)],Ve),console.info("%c MQTT-COMFOAIR-CARD %c 0.16.3 ","color:orange;font-weight:bold;background:black","color:white;font-weight:bold;background:dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:ye,name:"Comfoconnect Comfoair Card",preview:!1,description:"Control a Q350 ventilation unit via Comfoconnect integration."});const We="M6,19 H120 L320,113 H434",Ge="M434,19 H320 L120,113 H6";let Ze=class extends ce{static async getConfigElement(){return document.createElement(be)}static getStubConfig(e){if(!e)return{entity:""};const t=Object.keys(e.states).find(e=>e.startsWith("climate.")&&/comfo|ca\d{3}|wtw/i.test(e));return t?{entity:t,animation:"static",animation_speed_source:"fixed",animation_speed:50,color_scale:"auto",temp_min:-10,temp_max:30,...Be(e,t)}:{entity:""}}setConfig(e){if(!e)throw new Error(Ce("invalid_config",this.hass?.language));this._config=e}getCardSize(){return 5}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||!this._config)return!0;const i=this._config,s=Ae.map(e=>i[e]).filter(e=>!!e);return s.some(e=>t.states[e]!==this.hass.states[e])}render(){if(!this.hass||!this._config)return V``;const e=this._config,t=this.hass,i=ke(t,e.entity),s=ke(t,e.fan)?.attributes?.percentage,n=void 0!==s?(r=s,$e.find(e=>e.speed==r)?.mode):i?.attributes?.fan_mode;var r;const a=n?.toLowerCase(),o=i?.attributes?.temperature,l="animated"===e.animation,c="fixed"===e.color_scale?"fixed":"auto",d=!!a&&"off"!==a,p=Me(t,e.tempSensor1),u=Me(t,e.tempSensor2),h=Me(t,e.tempSensor3),m=Me(t,e.tempSensor4),f=function(e,t="auto",i=-10,s=30){if("fixed"===t)return[i,s];const n=e.filter(e=>null!=e&&!Number.isNaN(e));if(0===n.length)return[i,s];let r=Math.min(...n),a=Math.max(...n);if(a-r<4){const e=(a+r)/2;r=e-2,a=e+2}const o=.12*(a-r);return[r-o,a+o]}([p,u,h,m],c,Number.isFinite(Number(e.temp_min))?Number(e.temp_min):-10,Number.isFinite(Number(e.temp_max))?Number(e.temp_max):30),[_,g,v,y]=[p,u,h,m].map(e=>function(e,t){if(null==e||Number.isNaN(e))return"var(--disabled-text-color, #888)";const[i,s]=t;return Ue((e-i)/(s-i||1))}(e,f));let b=1,x=1;if(l){const i="level"===e.animation_speed_source?"level":"fixed";b=qe(t,e,i,e.supply_air_level),x=qe(t,e,i,e.return_air_level)}const $=(3/b).toFixed(1),w=(3/x).toFixed(1),A=ke(t,e.bypass_valve)?.state,S="on"===A?null:function(e,t,i){if(null==e||null==t||null==i)return null;const s=t-e;if(s<=.5)return null;const n=(i-e)/s;return n<=0?null:Math.round(100*Math.min(1,n))}(p,h,m),C=[Te("fan",void 0,n,this.hass.language),Te("filter",ke(t,e.filterstatus)?.state,void 0,this.hass.language),Te("bypass",A,void 0,this.hass.language),Te("constraint",ke(t,e.constraint)?.state,void 0,this.hass.language)],E=e=>e.replace(".",","),k=(e,i)=>V`<div class="tempbadge ${i?"clickable":""}" style=${`--fg:${e};--bd:color-mix(in srgb, ${e} 45%, transparent);--bg:color-mix(in srgb, ${e} 14%, transparent)`} @click=${()=>this._moreInfo(i)} title=${i?Ce("history",this.hass.language):""}><span class="v">${E(Ne(t,i))}</span><span class="u">°C</span></div>`,N=(e,i)=>{const s=Me(t,e)??0,n=l&&d&&s>0;return V`<div class="subt ${e?"clickable":""}" @click=${()=>this._moreInfo(e)}>
        <ha-icon class=${n?"spinico spin":"spinico"} style=${n?`animation-duration:${(1.6/i).toFixed(2)}s`:""} icon="mdi:fan"></ha-icon>
        <span>${Ne(t,e)}</span>rpm
      </div>`},M=e=>V`<div class="subt ${e?"clickable":""}" @click=${()=>this._moreInfo(e)}>
        <ha-icon icon="mdi:gauge"></ha-icon><span>${Ne(t,e)}</span>%
      </div>`,O=e=>V`<div class="subt ${e?"clickable":""}" @click=${()=>this._moreInfo(e)}>
        <ha-icon icon="mdi:weather-dust"></ha-icon><span>${Ne(t,e)}</span>m³/h
      </div>`,P=e=>V`<div class="subt ${e?"clickable":""}" @click=${()=>this._moreInfo(e)}>
        <ha-icon icon="mdi:water-percent"></ha-icon><span>${Ne(t,e)}</span>%
      </div>`,U=(e,t,i=!1)=>V`<div class="lbl ${i?"rev":""}"><ha-icon icon=${e}></ha-icon>${t}</div>`,T=V`
      <div class="hub corehub">
        ${o?V`
        <div class="setpc">
          <button @click=${()=>this._stepTemp(-1)} aria-label=${Ce("colder",this.hass.language)}>−</button>
          <div class="val">${null!=o?E(String(o)):"—"}<small>°C</small></div>
          <button @click=${()=>this._stepTemp(1)} aria-label=${Ce("warmer",this.hass.language)}>+</button>
        </div>`:Z}  
        <div class="fanrow">
          ${xe.map(e=>V`<button
              class=${function(e,t){return!!e&&e.toLowerCase()===t.toLowerCase()}(n,e.mode)?"on":""}
              title=${e.mode}
              @click=${()=>this._setFan(e.mode)}
            ><ha-icon icon=${e.icon}></ha-icon></button>`)}
        </div>
      </div>`;return V`
      <ha-card class=${l?"animated":""}>
        <div class="hd">
          <div class="ic"><ha-icon icon="mdi:hvac"></ha-icon></div>
          <div>
            <div class="ttl">${e.name||Ce("default_name",this.hass.language)}</div>
            <div class="st"><span class="dot ${d?"live":""}"></span><span>${a?"off"===a?Ce("fan_off",this.hass.language):Ee("fan_level",this.hass.language,{level:we[a]?.replace("Stufe ","")??n}):"—"}</span></div>
          </div>
          <div class="grow"></div>
          <div class="recov">
            ${null!=S?V`<b>${S}%</b><span>${Ce("recovery",this.hass.language)}</span>`:""}
          </div>
        </div>

        <div class="lanes">
          <div class="trow top">
            <div class="tcell l">${P(e.humSensor1)}${k(_,e.tempSensor1)}${U("mdi:tree-outline",Ce("outside_air",this.hass.language))}</div>
            <div></div>
            <div></div>
            <div></div>
            <div class="tcell r">${P(e.humSensor3)}${k(v,e.tempSensor3)}${U("mdi:home-thermometer-outline",Ce("return_air",this.hass.language),!0)}</div>
          </div>

          <div class="flowband">
            <svg class="airsvg" viewBox="0 0 440 132" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <linearGradient id="gSupply" x1="6" y1="19" x2="434" y2="113" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color=${_}></stop><stop offset="100%" stop-color=${y}></stop>
                </linearGradient>
                <linearGradient id="gExhaust" x1="434" y1="19" x2="6" y2="113" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color=${v}></stop><stop offset="100%" stop-color=${g}></stop>
                </linearGradient>
                <filter id="soft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="4.5"></feGaussianBlur></filter>
              </defs>
              <path class="airrib" d=${We} stroke="url(#gSupply)"></path>
              <path class="airrib" d=${Ge} stroke="url(#gExhaust)"></path>
              <polygon class="airarrow" points="86,11 86,27 102,19"></polygon>
              <polygon class="airarrow" points="354,11 354,27 338,19"></polygon>
              <polygon class="airarrow" points="102,105 102,121 86,113"></polygon>
              <polygon class="airarrow" points="338,105 338,121 354,113"></polygon>
              ${l&&d?this._flowGroup($,w):""}
            </svg>
            ${T}
          </div>

          <div class="trow bot">
            <div class="tcell l">${U("mdi:export",Ce("exhaust_air",this.hass.language))}${k(g,e.tempSensor2)}${P(e.humSensor2)}</div>
            <div class="tcell l">${N(e.fan_speed_exhaust,x)}${M(e.level_exhaust)}${O(e.flow_exhaust)}</div>
            <div></div>
            <div class="tcell r">${N(e.fan_speed_supply,b)}${M(e.level_supply)}${O(e.flow_supply)}</div>
            <div class="tcell r">${U("mdi:import",Ce("supply_air",this.hass.language),!0)}${k(y,e.tempSensor4)}${P(e.humSensor4)}</div>
          </div>
        </div>

        ${e.show_legend?V`<div class="legend">
          <span class="mn">${Math.round(f[0])}°C</span>
          <div class="bar" style="background:linear-gradient(90deg, ${Ue(0)}, ${Ue(.25)}, ${Ue(.5)}, ${Ue(.75)}, ${Ue(1)})"></div>
          <span class="mx">${Math.round(f[1])}°C</span>
        </div>`:""}

        <div class="status">
          ${C.map(e=>V`<div class="chip ${e.active?"on":""}" style="--c:${e.color}">
              <ha-icon icon=${e.icon} title=${e.label}></ha-icon>
              <!--<span class="nm">${e.label}</span>-->
              ${e.sub?V`<span class="vs">${e.sub}</span>`:""}
            </div>`)}
        </div>
      </ha-card>
    `}_flowGroup(e,t){const i=(Number(e)/2).toFixed(1),s=(Number(t)/2).toFixed(1);return W`<g class="flow-hi" filter="url(#soft)">
      <circle r="11" fill="#fff"><animateMotion path=${We} dur="${e}s" begin="0s" repeatCount="indefinite"></animateMotion></circle>
      <circle r="11" fill="#fff"><animateMotion path=${We} dur="${e}s" begin="-${i}s" repeatCount="indefinite"></animateMotion></circle>
      <circle r="11" fill="#fff"><animateMotion path=${Ge} dur="${t}s" begin="0s" repeatCount="indefinite"></animateMotion></circle>
      <circle r="11" fill="#fff"><animateMotion path=${Ge} dur="${t}s" begin="-${s}s" repeatCount="indefinite"></animateMotion></circle>
    </g>`}_moreInfo(e){e&&ve(this,"hass-more-info",{entityId:e})}_setFan(e){if(this._config.entity)this.hass.callService("climate","set_fan_mode",{entity_id:this._config.entity,fan_mode:e});else if(this._config.fan){const t=(e=>$e.find(t=>t.mode===e)?.speed)(e);if(void 0===t)return;this.hass.callService("fan","set_percentage",{entity_id:this._config.fan_mode,percentage:t})}}_stepTemp(e){const t=ke(this.hass,this._config.entity),i=Number(t?.attributes.temperature);if(!Number.isFinite(i))return;const s=Number(t.attributes.target_temp_step),n=Number.isFinite(s)&&s>0?s:.5,r=Number(t.attributes.min_temp),a=Number(t.attributes.max_temp),o=function(e,t,i,s,n){const r=Math.round(10*(e+n*t))/10;return Math.min(s,Math.max(i,r))}(i,n,Number.isFinite(r)?r:-1/0,Number.isFinite(a)?a:1/0,e);this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:o})}static get styles(){return a`
      ha-card {
        padding: 14px 16px 12px;
        --arrow: rgba(255, 255, 255, 0.92);
      }
      .hd { display: flex; align-items: center; gap: 11px; padding: 2px 2px 12px; }
      .hd .ic {
        width: 34px; height: 34px; border-radius: 10px; flex: none;
        display: flex; align-items: center; justify-content: center;
        background: rgba(var(--rgb-primary-color, 3, 169, 244), 0.14);
        color: var(--primary-color);
      }
      .hd .ttl { font-size: 15.5px; font-weight: 600; letter-spacing: -0.01em; }
      .hd .st { font-size: 12px; color: var(--secondary-text-color); margin-top: 1px; display: flex; align-items: center; gap: 6px; }
      .hd .dot { width: 7px; height: 7px; border-radius: 50%; background: var(--disabled-text-color, #777); }
      .hd .dot.live { background: #36c46b; }
      .hd .grow { flex: 1; }
      .hd .recov { text-align: right; line-height: 1.05; min-height: 30px; }
      .hd .recov b { font-size: 16px; font-weight: 700; letter-spacing: -0.02em; }
      .hd .recov span { display: block; font-size: 10px; letter-spacing: 0.05em; text-transform: uppercase; color: var(--secondary-text-color); margin-top: 1px; }

      .tempbadge {
        display: inline-flex; align-items: baseline; justify-content: center; gap: 1px;
        width: 88px; padding: 3px 4px; border-radius: 10px; line-height: 1;
        font-variant-numeric: tabular-nums;
        background: var(--bg); color: var(--fg); border: 1px solid var(--bd);
        box-shadow: 0 2px 10px -4px rgba(0, 0, 0, 0.5);
        transition: background 0.5s, color 0.5s, border-color 0.5s;
      }
      .tempbadge .v { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
      .tempbadge .u { font-size: 12px; font-weight: 600; opacity: 0.7; }
      .lbl { font-size: 9.5px; letter-spacing: 0.12em; text-transform: uppercase; color: var(--secondary-text-color); font-weight: 600; display: flex; align-items: center; gap: 5px; }
      .lbl.rev { flex-direction: row-reverse; }
      .lbl ha-icon { --mdc-icon-size: 14px; }
      .subt { font-size: 11px; color: var(--secondary-text-color); display: flex; align-items: center; gap: 4px; font-variant-numeric: tabular-nums; }
      .subt ha-icon { --mdc-icon-size: 15px; opacity: 0.85; }
      .clickable { cursor: pointer; }
      .tempbadge.clickable:hover { filter: brightness(1.08); }
      .subt.clickable:hover { color: var(--primary-text-color); }

      .corehub {
        background: var(--card-background-color);
        border: 1px solid var(--divider-color); border-radius: 15px; padding: 6px 9px;
        box-shadow: 0 6px 22px -6px rgba(0, 0, 0, 0.55);
        display: flex; flex-direction: column; align-items: center; gap: 5px;
      }
      .setpc { display: flex; align-items: center; gap: 6px; }
      .setpc button {
        width: 24px; height: 24px; border-radius: 50%; border: 1px solid var(--divider-color);
        background: transparent; color: var(--primary-text-color); font-size: 15px; cursor: pointer;
        display: flex; align-items: center; justify-content: center; transition: 0.15s;
      }
      .setpc button:hover { border-color: var(--primary-color); color: var(--primary-color); }
      .setpc .val { min-width: 56px; text-align: center; font-size: 17px; font-weight: 700; font-variant-numeric: tabular-nums; letter-spacing: -0.02em; }
      .setpc .val small { font-size: 11px; font-weight: 600; color: var(--secondary-text-color); }
      .fanrow { display: flex; gap: 2px; background: rgba(127, 127, 127, 0.14); border-radius: 11px; padding: 3px; }
      .fanrow button {
        width: 32px; height: 26px; border: 0; background: transparent; border-radius: 8px;
        color: var(--secondary-text-color); cursor: pointer; transition: 0.15s;
        display: flex; align-items: center; justify-content: center;
      }
      .fanrow button:hover { color: var(--primary-text-color); }
      .fanrow button.on { background: var(--primary-color); color: #fff; box-shadow: 0 2px 8px -2px var(--primary-color); }
      .fanrow ha-icon { --mdc-icon-size: 18px; }

      .lanes { display: flex; flex-direction: column; gap: 3px; --hub-w: 188px; }
      .trow { display: grid; grid-template-columns: 1fr 1fr auto 1fr 1fr; gap: 10px; padding: 0 6px; }
      .trow.top { align-items: end; }
      .trow.bot { align-items: start; }
      .tcell { display: flex; flex-direction: column; gap: 2px; min-width: 0; }
      .tcell.l { align-items: flex-start; }
      .tcell.r { align-items: flex-end; text-align: right; }

      .flowband { position: relative; width: 100%; aspect-ratio: 440 / 132; }
      .airsvg { position: absolute; inset: 0; width: 100%; height: 100%; }
      .airrib { fill: none; stroke-width: 38; stroke-linejoin: round; stroke-linecap: round; }
      .airarrow { fill: var(--arrow); filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.28)); }
      .flow-hi { opacity: 0.5; }
      .hub { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 4; }

      .spinico.spin { animation-name: spin; animation-timing-function: linear; animation-iteration-count: infinite; transform-origin: center; }
      @keyframes spin { to { transform: rotate(360deg); } }

      .legend { display: flex; align-items: center; gap: 9px; padding: 8px 4px 2px; }
      .legend .bar { flex: 1; height: 7px; border-radius: 4px; }
      .legend .mn, .legend .mx { font-size: 11px; color: var(--secondary-text-color); font-variant-numeric: tabular-nums; font-weight: 600; min-width: 44px; }
      .legend .mx { text-align: right; }

      /*.status { display: grid; grid-template-columns: repeat(5, 1fr); gap: 6px; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--divider-color); }*/
      .status { display: grid; grid-auto-flow: column; gap: 6px; margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--divider-color); }
      .chip { display: flex; flex-direction: column; align-items: center; gap: 3px; padding: 7px 2px 4px; border-radius: 11px; color: var(--secondary-text-color); transition: 0.25s; }
      .chip ha-icon { --mdc-icon-size: 20px; transition: 0.25s; }
      .chip .nm { font-size: 10.5px; font-weight: 600; }
      /*.chip .vs { font-size: 9px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--secondary-text-color); opacity: 0.65; }*/
      .chip .vs { font-size: 11px; color: var(--secondary-text-color); opacity: 0.9; }
      .chip.on { color: var(--c); background: color-mix(in srgb, var(--c) 12%, transparent); }
      .chip.on .vs { color: var(--c); opacity: 0.9; }
      .chip.on ha-icon { filter: drop-shadow(0 0 7px var(--c)); }
    `}};function qe(e,t,i,s){return function(e,t,i){if("level"===e){const e=null==i||Number.isNaN(i)?50:i;return Math.min(2.5,Math.max(.2,e/50))}const s=null==t||Number.isNaN(t)?50:t;return Math.min(2,Math.max(.1,s/100))}(i,t.animation_speed,Me(e,s))}e([me({attribute:!1})],Ze.prototype,"hass",void 0),e([fe()],Ze.prototype,"_config",void 0),Ze=e([pe(ye)],Ze);export{Ze as MqttComfoairCard};
