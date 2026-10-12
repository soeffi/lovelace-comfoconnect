function e(e,t,s,i){var n,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,s):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,s,i);else for(var o=e.length-1;o>=0;o--)(n=e[o])&&(a=(r<3?n(a):r>3?n(t,s,a):n(t,s))||a);return r>3&&a&&Object.defineProperty(t,s,a),a}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),n=new WeakMap;class r{constructor(e,t,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(s&&void 0===e){const s=void 0!==t&&1===t.length;s&&(e=n.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),s&&n.set(t,e))}return e}toString(){return this.cssText}}const a=(e,...t)=>{const s=1===e.length?e[0]:t.reduce((t,s,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[i+1],e[0]);return new r(s,e,i)},o=s?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const s of e.cssRules)t+=s.cssText;return(e=>new r("string"==typeof e?e:e+"",void 0,i))(t)})(e):e,{is:l,defineProperty:c,getOwnPropertyDescriptor:d,getOwnPropertyNames:p,getOwnPropertySymbols:u,getPrototypeOf:h}=Object,m=globalThis,f=m.trustedTypes,_=f?f.emptyScript:"",g=m.reactiveElementPolyfillSupport,v=(e,t)=>e,y={toAttribute(e,t){switch(t){case Boolean:e=e?_:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=null!==e;break;case Number:s=null===e?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch(e){s=null}}return s}},b=(e,t)=>!l(e,t),x={attribute:!0,type:String,converter:y,reflect:!1,useDefault:!1,hasChanged:b};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */Symbol.metadata??=Symbol("metadata"),m.litPropertyMetadata??=new WeakMap;class $ extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=x){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(e,s,t);void 0!==i&&c(this.prototype,e,i)}}static getPropertyDescriptor(e,t,s){const{get:i,set:n}=d(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:i,set(t){const r=i?.call(this);n?.call(this,t),this.requestUpdate(e,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??x}static _$Ei(){if(this.hasOwnProperty(v("elementProperties")))return;const e=h(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(v("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(v("properties"))){const e=this.properties,t=[...p(e),...u(e)];for(const s of t)this.createProperty(s,e[s])}const e=this[Symbol.metadata];if(null!==e){const t=litPropertyMetadata.get(e);if(void 0!==t)for(const[e,s]of t)this.elementProperties.set(e,s)}this._$Eh=new Map;for(const[e,t]of this.elementProperties){const s=this._$Eu(e,t);void 0!==s&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const s=new Set(e.flat(1/0).reverse());for(const e of s)t.unshift(o(e))}else void 0!==e&&t.push(o(e));return t}static _$Eu(e,t){const s=t.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const s of t.keys())this.hasOwnProperty(s)&&(e.set(s,this[s]),delete this[s]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{if(s)e.adoptedStyleSheets=i.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const s of i){const i=document.createElement("style"),n=t.litNonce;void 0!==n&&i.setAttribute("nonce",n),i.textContent=s.cssText,e.appendChild(i)}})(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,s){this._$AK(e,s)}_$ET(e,t){const s=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,s);if(void 0!==i&&!0===s.reflect){const n=(void 0!==s.converter?.toAttribute?s.converter:y).toAttribute(t,s.type);this._$Em=e,null==n?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){const s=this.constructor,i=s._$Eh.get(e);if(void 0!==i&&this._$Em!==i){const e=s.getPropertyOptions(i),n="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:y;this._$Em=i;const r=n.fromAttribute(t,e.type);this[i]=r??this._$Ej?.get(i)??r,this._$Em=null}}requestUpdate(e,t,s,i=!1,n){if(void 0!==e){const r=this.constructor;if(!1===i&&(n=this[e]),s??=r.getPropertyOptions(e),!((s.hasChanged??b)(n,t)||s.useDefault&&s.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(r._$Eu(e,s))))return;this.C(e,t,s)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,r??t??this[e]),!0!==n||void 0!==r)||(this._$AL.has(e)||(this.hasUpdated||s||(t=void 0),this._$AL.set(e,t)),!0===i&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}const e=this.constructor.elementProperties;if(e.size>0)for(const[t,s]of e){const{wrapped:e}=s,i=this[t];!0!==e||this._$AL.has(t)||void 0===i||this.C(t,void 0,s,i)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[v("elementProperties")]=new Map,$[v("finalized")]=new Map,g?.({ReactiveElement:$}),(m.reactiveElementVersions??=[]).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const w=globalThis,A=e=>e,S=w.trustedTypes,C=S?S.createPolicy("lit-html",{createHTML:e=>e}):void 0,E="$lit$",k=`lit$${Math.random().toFixed(9).slice(2)}$`,N="?"+k,M=`<${N}>`,O=document,P=()=>O.createComment(""),U=e=>null===e||"object"!=typeof e&&"function"!=typeof e,T=Array.isArray,R="[ \t\n\f\r]",z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,F=/-->/g,H=/>/g,L=RegExp(`>|${R}(?:([^\\s"'>=/]+)(${R}*=${R}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),j=/'/g,B=/"/g,I=/^(?:script|style|textarea|title)$/i,D=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),V=D(1),W=D(2),G=Symbol.for("lit-noChange"),Z=Symbol.for("lit-nothing"),q=new WeakMap,K=O.createTreeWalker(O,129);function Q(e,t){if(!T(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==C?C.createHTML(t):t}const J=(e,t)=>{const s=e.length-1,i=[];let n,r=2===t?"<svg>":3===t?"<math>":"",a=z;for(let t=0;t<s;t++){const s=e[t];let o,l,c=-1,d=0;for(;d<s.length&&(a.lastIndex=d,l=a.exec(s),null!==l);)d=a.lastIndex,a===z?"!--"===l[1]?a=F:void 0!==l[1]?a=H:void 0!==l[2]?(I.test(l[2])&&(n=RegExp("</"+l[2],"g")),a=L):void 0!==l[3]&&(a=L):a===L?">"===l[0]?(a=n??z,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,o=l[1],a=void 0===l[3]?L:'"'===l[3]?B:j):a===B||a===j?a=L:a===F||a===H?a=z:(a=L,n=void 0);const p=a===L&&e[t+1].startsWith("/>")?" ":"";r+=a===z?s+M:c>=0?(i.push(o),s.slice(0,c)+E+s.slice(c)+k+p):s+k+(-2===c?t:p)}return[Q(e,r+(e[s]||"<?>")+(2===t?"</svg>":3===t?"</math>":"")),i]};class Y{constructor({strings:e,_$litType$:t},s){let i;this.parts=[];let n=0,r=0;const a=e.length-1,o=this.parts,[l,c]=J(e,t);if(this.el=Y.createElement(l,s),K.currentNode=this.el.content,2===t||3===t){const e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(i=K.nextNode())&&o.length<a;){if(1===i.nodeType){if(i.hasAttributes())for(const e of i.getAttributeNames())if(e.endsWith(E)){const t=c[r++],s=i.getAttribute(e).split(k),a=/([.?@])?(.*)/.exec(t);o.push({type:1,index:n,name:a[2],strings:s,ctor:"."===a[1]?ie:"?"===a[1]?ne:"@"===a[1]?re:se}),i.removeAttribute(e)}else e.startsWith(k)&&(o.push({type:6,index:n}),i.removeAttribute(e));if(I.test(i.tagName)){const e=i.textContent.split(k),t=e.length-1;if(t>0){i.textContent=S?S.emptyScript:"";for(let s=0;s<t;s++)i.append(e[s],P()),K.nextNode(),o.push({type:2,index:++n});i.append(e[t],P())}}}else if(8===i.nodeType)if(i.data===N)o.push({type:2,index:n});else{let e=-1;for(;-1!==(e=i.data.indexOf(k,e+1));)o.push({type:7,index:n}),e+=k.length-1}n++}}static createElement(e,t){const s=O.createElement("template");return s.innerHTML=e,s}}function X(e,t,s=e,i){if(t===G)return t;let n=void 0!==i?s._$Co?.[i]:s._$Cl;const r=U(t)?void 0:t._$litDirective$;return n?.constructor!==r&&(n?._$AO?.(!1),void 0===r?n=void 0:(n=new r(e),n._$AT(e,s,i)),void 0!==i?(s._$Co??=[])[i]=n:s._$Cl=n),void 0!==n&&(t=X(e,n._$AS(e,t.values),n,i)),t}class ee{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:s}=this._$AD,i=(e?.creationScope??O).importNode(t,!0);K.currentNode=i;let n=K.nextNode(),r=0,a=0,o=s[0];for(;void 0!==o;){if(r===o.index){let t;2===o.type?t=new te(n,n.nextSibling,this,e):1===o.type?t=new o.ctor(n,o.name,o.strings,this,e):6===o.type&&(t=new ae(n,this,e)),this._$AV.push(t),o=s[++a]}r!==o?.index&&(n=K.nextNode(),r++)}return K.currentNode=O,i}p(e){let t=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(e,s,t),t+=s.strings.length-2):s._$AI(e[t])),t++}}class te{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,s,i){this.type=2,this._$AH=Z,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=X(this,e,t),U(e)?e===Z||null==e||""===e?(this._$AH!==Z&&this._$AR(),this._$AH=Z):e!==this._$AH&&e!==G&&this._(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):(e=>T(e)||"function"==typeof e?.[Symbol.iterator])(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==Z&&U(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){const{values:t,_$litType$:s}=e,i="number"==typeof s?this._$AC(e):(void 0===s.el&&(s.el=Y.createElement(Q(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(t);else{const e=new ee(i,this),s=e.u(this.options);e.p(t),this.T(s),this._$AH=e}}_$AC(e){let t=q.get(e.strings);return void 0===t&&q.set(e.strings,t=new Y(e)),t}k(e){T(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let s,i=0;for(const n of e)i===t.length?t.push(s=new te(this.O(P()),this.O(P()),this,this.options)):s=t[i],s._$AI(n),i++;i<t.length&&(this._$AR(s&&s._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){const t=A(e).nextSibling;A(e).remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}}class se{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,s,i,n){this.type=1,this._$AH=Z,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=n,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=Z}_$AI(e,t=this,s,i){const n=this.strings;let r=!1;if(void 0===n)e=X(this,e,t,0),r=!U(e)||e!==this._$AH&&e!==G,r&&(this._$AH=e);else{const i=e;let a,o;for(e=n[0],a=0;a<n.length-1;a++)o=X(this,i[s+a],t,a),o===G&&(o=this._$AH[a]),r||=!U(o)||o!==this._$AH[a],o===Z?e=Z:e!==Z&&(e+=(o??"")+n[a+1]),this._$AH[a]=o}r&&!i&&this.j(e)}j(e){e===Z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ie extends se{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Z?void 0:e}}class ne extends se{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==Z)}}class re extends se{constructor(e,t,s,i,n){super(e,t,s,i,n),this.type=5}_$AI(e,t=this){if((e=X(this,e,t,0)??Z)===G)return;const s=this._$AH,i=e===Z&&s!==Z||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,n=e!==Z&&(s===Z||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class ae{constructor(e,t,s){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(e){X(this,e)}}const oe=w.litHtmlPolyfillSupport;oe?.(Y,te),(w.litHtmlVersions??=[]).push("3.3.3");const le=globalThis;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ce extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,s)=>{const i=s?.renderBefore??t;let n=i._$litPart$;if(void 0===n){const e=s?.renderBefore??null;i._$litPart$=n=new te(t.insertBefore(P(),e),e,void 0,s??{})}return n._$AI(e),n})(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return G}}ce._$litElement$=!0,ce.finalized=!0,le.litElementHydrateSupport?.({LitElement:ce});const de=le.litElementPolyfillSupport;de?.({LitElement:ce}),(le.litElementVersions??=[]).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const pe=e=>(t,s)=>{void 0!==s?s.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)},ue={attribute:!0,type:String,converter:y,reflect:!1,hasChanged:b},he=(e=ue,t,s)=>{const{kind:i,metadata:n}=s;let r=globalThis.litPropertyMetadata.get(n);if(void 0===r&&globalThis.litPropertyMetadata.set(n,r=new Map),"setter"===i&&((e=Object.create(e)).wrapped=!0),r.set(s.name,e),"accessor"===i){const{name:i}=s;return{set(s){const n=t.get.call(this);t.set.call(this,s),this.requestUpdate(i,n,e,!0,s)},init(t){return void 0!==t&&this.C(i,void 0,e,t),t}}}if("setter"===i){const{name:i}=s;return function(s){const n=this[i];t.call(this,s),this.requestUpdate(i,n,e,!0,s)}}throw Error("Unsupported decorator location: "+i)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(e){return(t,s)=>"object"==typeof s?he(e,t,s):((e,t,s)=>{const i=t.hasOwnProperty(s);return t.constructor.createProperty(s,e),i?Object.getOwnPropertyDescriptor(t,s):void 0})(e,t,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function fe(e){return me({...e,state:!0,attribute:!1})}var _e,ge;!function(e){e.language="language",e.system="system",e.comma_decimal="comma_decimal",e.decimal_comma="decimal_comma",e.space_comma="space_comma",e.none="none"}(_e||(_e={})),function(e){e.language="language",e.system="system",e.am_pm="12",e.twenty_four="24"}(ge||(ge={}));var ve=function(e,t,s,i){i=i||{},s=null==s?{}:s;var n=new Event(t,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return n.detail=s,e.dispatchEvent(n),n};const ye="mqttcomfoair-card",be="mqttcomfoair-card-editor",xe=[{mode:"off",icon:"mdi:fan-off"},{mode:"low",icon:"mdi:fan-speed-1"},{mode:"medium",icon:"mdi:fan-speed-2"},{mode:"high",icon:"mdi:fan-speed-3"}],$e=[{mode:"off",speed:0},{mode:"low",speed:33},{mode:"medium",speed:66},{mode:"high",speed:100}],we={off:"Aus",low:"Stufe 1",medium:"Stufe 2",high:"Stufe 3"},Ae=["fan","tempSensor1","tempSensor2","tempSensor3","tempSensor4","humSensor1","humSensor2","humSensor3","humSensor4","filterstatus","bypass_valve","summer_mode","preheat","fan_speed_supply","fan_speed_exhaust","level_supply","level_exhaust","flow_supply","flow_exhaust"],Se={en:{invalid_config:"Invalid configuration",no_entity:"No climate entity defined",detected:"entities detected",advanced:"Advanced / manual mapping",default_name:"Residential ventilation",history:"Show history",colder:"Colder",warmer:"Warmer",recovery:"Recovery",outside_air:"Outside air",exhaust_air:"Exhaust air",return_air:"Return air",supply_air:"Supply air",fan:"Fan",fan_off:"Off",fan_level:"Level {level}",filter:"Filter",filter_change:"Change",ok:"OK",bypass:"Bypass",open:"Open",closed:"Closed",preheating:"Preheating",active:"Active",summer:"Summer",winter:"Winter",device:"Q350 device",climate_entity:"climate entity",animation:"Animation",animated:"Animated (airflow + fans)",static:"Static",speed_source:"Speed source",fixed_speed:"Fixed speed (%)",air_level:"By air level (supply/return %)",color_scale:"Color scale",auto_current:"Auto (current values)",fixed_manual:"Fixed (manual range)",fixed_min:"Fixed scale - min (°C)",fixed_max:"Fixed scale - max (°C)",show_scale:"Show temperature scale",optional_name:"Name (optional)",outside_temperature:"Outside temperature",exhaust_temperature:"Exhaust temperature",return_temperature:"Return temperature",supply_temperature:"Supply temperature",filter_status:"Filter status",bypass_valve:"Bypass valve",summer_mode:"Summer mode",preheat_register:"Preheating coil",supply_fan_speed:"Supply fan speed",exhaust_fan_speed:"Exhaust fan speed",return_level:"Return air level",supply_level:"Supply air level"},nl:{invalid_config:"Ongeldige configuratie",no_entity:"Geen climate-entiteit ingesteld",detected:"entiteiten gevonden",advanced:"Geavanceerd / handmatig toewijzen",default_name:"Woonhuisventilatie",history:"Geschiedenis tonen",colder:"Kouder",warmer:"Warmer",recovery:"Terugwinning",outside_air:"Buitenlucht",exhaust_air:"Afvoerlucht",return_air:"Retourlucht",supply_air:"Toevoerlucht",fan:"Ventilator",fan_off:"Uit",fan_level:"Stand {level}",filter:"Filter",filter_change:"Vervangen",ok:"OK",bypass:"Bypass",open:"Open",closed:"Dicht",preheating:"Voorverwarming",active:"Actief",summer:"Zomer",winter:"Winter",climate_entity:"CA350/550 climate-entiteit (verplicht)",animation:"Animatie",animated:"Geanimeerd (luchtstromen + ventilatoren)",static:"Statisch",speed_source:"Snelheidsbron",fixed_speed:"Vaste snelheid (%)",air_level:"Op basis van luchtdebiet (toevoer/retour %)",color_scale:"Kleurenschaal",auto_current:"Auto (huidige waarden)",fixed_manual:"Vast (handmatig bereik)",fixed_min:"Vaste schaal - min (°C)",fixed_max:"Vaste schaal - max (°C)",show_scale:"Temperatuurschaal tonen",optional_name:"Naam (optioneel)",outside_temperature:"Buitentemperatuur",exhaust_temperature:"Afvoertemperatuur",return_temperature:"Retourtemperatuur",supply_temperature:"Toevoertemperatuur",filter_status:"Filterstatus",bypass_valve:"Bypassklep",summer_mode:"Zomermodus",preheat_register:"Voorverwarmingsregister",supply_fan_speed:"Toevoerventilatorsnelheid",exhaust_fan_speed:"Afvoerventilatorsnelheid",return_level:"Retourluchtstand",supply_level:"Toevoerluchtstand"},de:{invalid_config:"Ungültige Konfiguration",no_entity:"Keine climate-Entity ausgewählt",detected:"Entities erkannt",advanced:"Erweitert / manuelle Zuordnung",default_name:"Wohnraumlüftung",history:"Verlauf anzeigen",colder:"Kälter",warmer:"Wärmer",recovery:"Rückgewinnung",outside_air:"Außenluft",exhaust_air:"Fortluft",return_air:"Abluft",supply_air:"Zuluft",fan:"Lüfter",fan_off:"Aus",fan_level:"Stufe {level}",filter:"Filter",filter_change:"Wechseln",ok:"OK",bypass:"Bypass",open:"Offen",closed:"Zu",preheating:"Vorheizen",active:"Aktiv",summer:"Sommer",winter:"Winter",device:"Gerät",climate_entity:"Climate-Entity",animation:"Animation",animated:"Animiert (Luftströme + Lüfter)",static:"Statisch",speed_source:"Tempo-Quelle",fixed_speed:"Festes Tempo (%)",air_level:"Nach Luftmenge (Supply/Return %)",color_scale:"Farbskala",auto_current:"Auto (aktuelle Werte)",fixed_manual:"Fest (manueller Bereich)",fixed_min:"Feste Skala - Min (°C)",fixed_max:"Feste Skala - Max (°C)",show_scale:"Temperaturskala einblenden",optional_name:"Name (optional)",outside_temperature:"Außentemperatur",exhaust_temperature:"Fortlufttemperatur",return_temperature:"Ablufttemperatur",supply_temperature:"Zulufttemperatur",outside_humidity:"Außenfeuchte",exhaust_humidity:"Fortluftfeuchte",return_humidity:"Abluftfeuchte",supply_humidity:"Zuluftfeuchte",filter_status:"Filterstatus",bypass_valve:"Bypass-Ventil",summer_mode:"Sommermodus",preheat_register:"Vorheizregister",supply_fan_speed:"Lüfterdrehzahl Zuluft",exhaust_fan_speed:"Lüfterdrehzahl Fortluft",level_supply:"Lüfter-Stufe Zuluft",level_exhaust:"Lüfter-Stufe Abluft",flow_supply:"Volumenstrom Zuluft",flow_exhaust:"Volumenstrom Abluft",constraint:"Airflow Constraint",NoiseGuard:"Schallbegrenzung"},nb:{invalid_config:"Ikke gyldig konfigurasjon",no_entity:"Ingen climate-enhet valgt",detected:"enheter funnet",advanced:"Avansert / manuell tilordning"}};function Ce(e,t){let s=(t||"en").replace(/['"]+/g,"").split("-")[0].toLowerCase();return Se[s]||(s="en"),Se[s][e]??Se.en[e]??e}function Ee(e,t,s){return Object.entries(s).reduce((e,[t,s])=>e.replace(`{${t}}`,s),Ce(e,t))}function ke(e,t){if(e&&t)return e.states?e.states[t]:void 0}function Ne(e,t){const s=ke(e,t);return s&&"unavailable"!==s.state&&"unknown"!==s.state&&""!==s.state?s.state:"—"}function Me(e,t){const s=ke(e,t);if(!s)return;const i=parseFloat(s.state);return Number.isNaN(i)?void 0:i}const Oe=e=>$e.find(t=>t.speed==e)?.mode;const Pe=(e,t,s)=>e+(t-e)*s,Ue=[[.6,.16,252],[.72,.13,215],[.8,.14,155],[.82,.16,95],[.66,.19,45],[.5,.205,28]];function Te(e){const t=Ue,s=(e=>Math.min(1,Math.max(0,e)))(e),i=s*(t.length-1),n=Math.min(t.length-2,Math.floor(i)),r=i-n,a=Pe(t[n][0],t[n+1][0],r),o=Pe(t[n][1],t[n+1][1],r),l=Pe(t[n][2],t[n+1][2],r);return`oklch(${a.toFixed(3)} ${o.toFixed(3)} ${l.toFixed(1)})`}function Re(e,t,s,i="de"){const n="on"===t;switch(e){case"fan":{const e=(s??"off").toLowerCase(),t=we[e]?.replace("Stufe ","")??e;return{icon:"mdi:fan",label:Ce("fan",i),sub:"off"===e?Ce("fan_off",i):Ee("fan_level",i,{level:t}),active:"off"!==e,color:"#03a9f4"}}case"filter":return{icon:"mdi:air-filter",label:Ce("filter",i),sub:(t??"-")+" d",active:Number(t)<0,color:"#f5a623"};case"bypass":return{icon:"mdi:valve",label:Ce("bypass",i),sub:(t??"-")+"%",active:Number(t)>0,color:"#36c46b"};case"preheat":return{icon:"mdi:radiator",label:Ce("preheating",i),sub:Ce(n?"active":"fan_off",i),active:n,color:"#ff7043"};case"season":return n?{icon:"mdi:weather-sunny",label:Ce("summer",i),sub:"",active:!0,color:"#ffb300"}:{icon:"mdi:snowflake",label:Ce("winter",i),sub:"",active:!0,color:"#4fc3f7"};case"constraint":const e={NoiseGuard:Ce("NoiseGuard",i),"":"-"},r=Ce(e[t??""],i)??"?";return{icon:"mdi:fan-alert",label:Ce("constraint",i),sub:r,active:(t??"").length>0,color:"#ff7043"}}}const ze=e=>"temperature"===e.attributes?.device_class,Fe=e=>"humidity"===e.attributes?.device_class,He=e=>"rpm"===e.attributes?.unit_of_measurement,Le=e=>"%"===e.attributes?.unit_of_measurement,je=()=>!0,Be=[{field:"fan",domain:"fan",predicate:je},{field:"tempSensor1",domain:"sensor",predicate:ze,keywords:["outside","outdoor"]},{field:"tempSensor2",domain:"sensor",predicate:ze,keywords:["exhaust"]},{field:"tempSensor3",domain:"sensor",predicate:ze,keywords:["return","extract","inside"]},{field:"tempSensor4",domain:"sensor",predicate:ze,keywords:["supply"]},{field:"humSensor1",domain:"sensor",predicate:Fe,keywords:["outside","outdoor"]},{field:"humSensor2",domain:"sensor",predicate:Fe,keywords:["exhaust"]},{field:"humSensor3",domain:"sensor",predicate:Fe,keywords:["return","extract","inside"]},{field:"humSensor4",domain:"sensor",predicate:Fe,keywords:["supply"]},{field:"filterstatus",domain:"sensor",predicate:je,keywords:["filter"]},{field:"bypass_valve",domain:"sensor",predicate:Le,keywords:["bypass"]},{field:"fan_speed_supply",domain:"sensor",predicate:He,keywords:["supply","zuluft"]},{field:"fan_speed_exhaust",domain:"sensor",predicate:He,keywords:["exhaust","fortluft","abluft"]},{field:"level_supply",domain:"sensor",predicate:Le,keywords:["supply_fan_duty"]},{field:"level_exhaust",domain:"sensor",predicate:Le,keywords:["exhaust_fan_duty"]},{field:"flow_supply",domain:"sensor",predicate:je,keywords:["supply_airflow"]},{field:"flow_exhaust",domain:"sensor",predicate:je,keywords:["exhaust_airflow"]},{field:"constraint",domain:"sensor",predicate:je,keywords:["constraint"]}];function Ie(e,t){if(!e||!t)return{};let s=[];t&&e.entities&&(s=Object.keys(e.entities).filter(s=>e.entities[s].device_id===t));const i={};for(const t of Be){const n=s.filter(s=>{if(!s.startsWith(`${t.domain}.`))return!1;const i=e.states[s];if(!i||!t.predicate(i))return!1;const n=`${s} ${String(i.attributes?.friendly_name??"")}`.toLowerCase();return!t.keywords?.length||t.keywords.some(e=>n.includes(e))});if(n.length){const e=n.reduce((e,t)=>t.length<e.length?t:e);i[t.field]=e}}return i}const De=[{name:"name",selector:{text:{}}},{name:"fan",selector:{entity:{domain:"fan"}}},{name:"tempSensor1",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"tempSensor2",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"tempSensor3",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"tempSensor4",selector:{entity:{domain:"sensor",device_class:"temperature"}}},{name:"humSensor1",selector:{entity:{domain:"sensor",device_class:"humerature"}}},{name:"humSensor2",selector:{entity:{domain:"sensor",device_class:"humerature"}}},{name:"humSensor3",selector:{entity:{domain:"sensor",device_class:"humerature"}}},{name:"humSensor4",selector:{entity:{domain:"sensor",device_class:"humerature"}}},{name:"filterstatus",selector:{entity:{domain:"sensor"}}},{name:"bypass_valve",selector:{entity:{domain:["binary_sensor","sensor"]}}},{name:"fan_speed_supply",selector:{entity:{domain:"sensor"}}},{name:"fan_speed_exhaust",selector:{entity:{domain:"sensor"}}},{name:"level_supply",selector:{entity:{domain:"sensor"}}},{name:"level_exhaust",selector:{entity:{domain:"sensor"}}},{name:"flow_supply",selector:{entity:{domain:"sensor"}}},{name:"flow_exhaust",selector:{entity:{domain:"sensor"}}},{name:"constraint",selector:{entity:{domain:"sensor"}}}],Ve={device:"device",animation:"animation",animation_speed_source:"speed_source",animation_speed:"fixed_speed",color_scale:"color_scale",temp_min:"fixed_min",temp_max:"fixed_max",show_legend:"show_scale",name:"optional_name",tempSensor1:"outside_temperature",tempSensor2:"exhaust_temperature",tempSensor3:"return_temperature",tempSensor4:"supply_temperature",humSensor1:"outside_humidity",humSensor2:"exhaust_humidity",humSensor3:"return_humidity",humSensor4:"supply_humidity",filterstatus:"filter_status",bypass_valve:"bypass_valve",summer_mode:"summer_mode",preheat:"preheat_register",fan_speed_supply:"supply_fan_speed",fan_speed_exhaust:"exhaust_fan_speed",level_exhaust:"level_exhaust",level_supply:"level_supply",flow_exhaust:"flow_exhaust",flow_supply:"flow_supply",constraint:"constraint"};let We=class extends ce{constructor(){super(...arguments),this._detectedCount=0,this._label=e=>Ce(Ve[e.name]??e.name,this.hass?.language)}setConfig(e){this._config=e}_mainSchema(){const e=this._config,t=[{name:"device",required:!1,selector:{device:{entity:{domain:["climate","fan"]}}}},{name:"animation",selector:{select:{options:[{value:"animated",label:Ce("animated",this.hass.language)},{value:"static",label:Ce("static",this.hass.language)}]}}}];return"animated"===e.animation&&(t.push({name:"animation_speed_source",selector:{select:{options:[{value:"fixed",label:Ce("fixed_speed",this.hass.language)},{value:"level",label:Ce("air_level",this.hass.language)}]}}}),"level"!==e.animation_speed_source&&t.push({name:"animation_speed",selector:{number:{min:10,max:200,step:10,unit_of_measurement:"%",mode:"slider"}}})),t.push({name:"color_scale",selector:{select:{options:[{value:"auto",label:Ce("auto_current",this.hass.language)},{value:"fixed",label:Ce("fixed_manual",this.hass.language)}]}}}),"fixed"===e.color_scale&&t.push({name:"temp_min",selector:{number:{min:-30,max:20,step:1,unit_of_measurement:"°C",mode:"box"}}},{name:"temp_max",selector:{number:{min:0,max:50,step:1,unit_of_measurement:"°C",mode:"box"}}}),t.push({name:"show_legend",selector:{boolean:{}}}),t}render(){return this.hass&&this._config?V`
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
            .schema=${De}
            .computeLabel=${this._label}
            @value-changed=${this._advancedChanged}
          ></ha-form>
        </ha-expansion-panel>
      </div>
    `:V``}_mainChanged(e){e.stopPropagation();const t=e.detail.value,s=t.device??"",i=!!s&&s!==this._config.device;let n={...this._config,...t};if(i){const e=n;for(const t of Ae)"entity"!==t&&delete e[t];const t=Ie(this.hass,s);n={...n,...t},this._detectedCount=Object.keys(t).length}this._emit(n)}_advancedChanged(e){e.stopPropagation(),this._emit({...this._config,...e.detail.value})}_emit(e){this._config=e,ve(this,"config-changed",{config:e})}static get styles(){return a`
      .hint { color: var(--success-color, #43a047); padding: 4px 0 8px; font-size: 0.9em; }
      ha-form { display: block; }
      ha-expansion-panel { margin-top: 8px; }
    `}};e([me({attribute:!1})],We.prototype,"hass",void 0),e([fe()],We.prototype,"_config",void 0),e([fe()],We.prototype,"_detectedCount",void 0),We=e([pe(be)],We),console.info("%c MQTT-COMFOAIR-CARD %c 0.16.3 ","color:orange;font-weight:bold;background:black","color:white;font-weight:bold;background:dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:ye,name:"Comfoconnect Comfoair Card",preview:!1,description:"Control a Q350 ventilation unit via Comfoconnect integration."});const Ge="M6,19 H120 L320,113 H434",Ze="M434,19 H320 L120,113 H6";let qe=class extends ce{static async getConfigElement(){return document.createElement(be)}static getStubConfig(e){if(!e)return{entity:""};const t=Object.keys(e.states).find(e=>e.startsWith("climate.")&&/comfo|ca\d{3}|wtw/i.test(e));return t?{entity:t,animation:"static",animation_speed_source:"fixed",animation_speed:50,color_scale:"auto",temp_min:-10,temp_max:30,...Ie(e,t)}:{entity:""}}setConfig(e){if(!e)throw new Error(Ce("invalid_config",this.hass?.language));this._config=e}getCardSize(){return 5}shouldUpdate(e){if(e.has("_config"))return!0;const t=e.get("hass");if(!t||!this._config)return!0;const s=this._config,i=Ae.map(e=>s[e]).filter(e=>!!e);return i.some(e=>t.states[e]!==this.hass.states[e])}render(){if(!this.hass||!this._config)return V``;const e=this._config,t=this.hass,s=ke(t,e.entity),i=ke(t,e.fan)?.attributes?.percentage,n=void 0!==i?Oe(i):s?.attributes?.fan_mode;console.log("test"),console.log(i),console.log(typeof i),console.log("speed %f",i),console.log(n),console.log(Oe(0)),console.log("---\n");const r=n?.toLowerCase(),a=s?.attributes?.temperature,o="animated"===e.animation,l="fixed"===e.color_scale?"fixed":"auto",c=!!r&&"off"!==r,d=Me(t,e.tempSensor1),p=Me(t,e.tempSensor2),u=Me(t,e.tempSensor3),h=Me(t,e.tempSensor4),m=function(e,t="auto",s=-10,i=30){if("fixed"===t)return[s,i];const n=e.filter(e=>null!=e&&!Number.isNaN(e));if(0===n.length)return[s,i];let r=Math.min(...n),a=Math.max(...n);if(a-r<4){const e=(a+r)/2;r=e-2,a=e+2}const o=.12*(a-r);return[r-o,a+o]}([d,p,u,h],l,Number.isFinite(Number(e.temp_min))?Number(e.temp_min):-10,Number.isFinite(Number(e.temp_max))?Number(e.temp_max):30),[f,_,g,v]=[d,p,u,h].map(e=>function(e,t){if(null==e||Number.isNaN(e))return"var(--disabled-text-color, #888)";const[s,i]=t;return Te((e-s)/(i-s||1))}(e,m));let y=1,b=1;if(o){const s="level"===e.animation_speed_source?"level":"fixed";y=Ke(t,e,s,e.supply_air_level),b=Ke(t,e,s,e.return_air_level)}const x=(3/y).toFixed(1),$=(3/b).toFixed(1),w=ke(t,e.bypass_valve)?.state,A="on"===w?null:function(e,t,s){if(null==e||null==t||null==s)return null;const i=t-e;if(i<=.5)return null;const n=(s-e)/i;return n<=0?null:Math.round(100*Math.min(1,n))}(d,u,h),S=[Re("fan",void 0,n,this.hass.language),Re("filter",ke(t,e.filterstatus)?.state,void 0,this.hass.language),Re("bypass",w,void 0,this.hass.language),Re("constraint",ke(t,e.constraint)?.state,void 0,this.hass.language)],C=e=>e.replace(".",","),E=(e,s)=>V`<div class="tempbadge ${s?"clickable":""}" style=${`--fg:${e};--bd:color-mix(in srgb, ${e} 45%, transparent);--bg:color-mix(in srgb, ${e} 14%, transparent)`} @click=${()=>this._moreInfo(s)} title=${s?Ce("history",this.hass.language):""}><span class="v">${C(Ne(t,s))}</span><span class="u">°C</span></div>`,k=(e,s)=>{const i=Me(t,e)??0,n=o&&c&&i>0;return V`<div class="subt ${e?"clickable":""}" @click=${()=>this._moreInfo(e)}>
        <ha-icon class=${n?"spinico spin":"spinico"} style=${n?`animation-duration:${(1.6/s).toFixed(2)}s`:""} icon="mdi:fan"></ha-icon>
        <span>${Ne(t,e)}</span>rpm
      </div>`},N=e=>V`<div class="subt ${e?"clickable":""}" @click=${()=>this._moreInfo(e)}>
        <ha-icon icon="mdi:gauge"></ha-icon><span>${Ne(t,e)}</span>%
      </div>`,M=e=>V`<div class="subt ${e?"clickable":""}" @click=${()=>this._moreInfo(e)}>
        <ha-icon icon="mdi:weather-dust"></ha-icon><span>${Ne(t,e)}</span>m³/h
      </div>`,O=e=>V`<div class="subt ${e?"clickable":""}" @click=${()=>this._moreInfo(e)}>
        <ha-icon icon="mdi:water-percent"></ha-icon><span>${Ne(t,e)}</span>%
      </div>`,P=(e,t,s=!1)=>V`<div class="lbl ${s?"rev":""}"><ha-icon icon=${e}></ha-icon>${t}</div>`,U=V`
      <div class="hub corehub">
        ${a?V`
        <div class="setpc">
          <button @click=${()=>this._stepTemp(-1)} aria-label=${Ce("colder",this.hass.language)}>−</button>
          <div class="val">${null!=a?C(String(a)):"—"}<small>°C</small></div>
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
      <ha-card class=${o?"animated":""}>
        <div class="hd">
          <div class="ic"><ha-icon icon="mdi:hvac"></ha-icon></div>
          <div>
            <div class="ttl">${e.name||Ce("default_name",this.hass.language)}</div>
            <div class="st"><span class="dot ${c?"live":""}"></span><span>${r?"off"===r?Ce("fan_off",this.hass.language):Ee("fan_level",this.hass.language,{level:we[r]?.replace("Stufe ","")??n}):"—"}</span></div>
          </div>
          <div class="grow"></div>
          <div class="recov">
            ${null!=A?V`<b>${A}%</b><span>${Ce("recovery",this.hass.language)}</span>`:""}
          </div>
        </div>

        <div class="lanes">
          <div class="trow top">
            <div class="tcell l">${O(e.humSensor1)}${E(f,e.tempSensor1)}${P("mdi:tree-outline",Ce("outside_air",this.hass.language))}</div>
            <div></div>
            <div></div>
            <div></div>
            <div class="tcell r">${O(e.humSensor3)}${E(g,e.tempSensor3)}${P("mdi:home-thermometer-outline",Ce("return_air",this.hass.language),!0)}</div>
          </div>

          <div class="flowband">
            <svg class="airsvg" viewBox="0 0 440 132" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <linearGradient id="gSupply" x1="6" y1="19" x2="434" y2="113" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color=${f}></stop><stop offset="100%" stop-color=${v}></stop>
                </linearGradient>
                <linearGradient id="gExhaust" x1="434" y1="19" x2="6" y2="113" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stop-color=${g}></stop><stop offset="100%" stop-color=${_}></stop>
                </linearGradient>
                <filter id="soft" x="-60%" y="-60%" width="220%" height="220%"><feGaussianBlur stdDeviation="4.5"></feGaussianBlur></filter>
              </defs>
              <path class="airrib" d=${Ge} stroke="url(#gSupply)"></path>
              <path class="airrib" d=${Ze} stroke="url(#gExhaust)"></path>
              <polygon class="airarrow" points="86,11 86,27 102,19"></polygon>
              <polygon class="airarrow" points="354,11 354,27 338,19"></polygon>
              <polygon class="airarrow" points="102,105 102,121 86,113"></polygon>
              <polygon class="airarrow" points="338,105 338,121 354,113"></polygon>
              ${o&&c?this._flowGroup(x,$):""}
            </svg>
            ${U}
          </div>

          <div class="trow bot">
            <div class="tcell l">${P("mdi:export",Ce("exhaust_air",this.hass.language))}${E(_,e.tempSensor2)}${O(e.humSensor2)}</div>
            <div class="tcell l">${k(e.fan_speed_exhaust,b)}${N(e.level_exhaust)}${M(e.flow_exhaust)}</div>
            <div></div>
            <div class="tcell r">${k(e.fan_speed_supply,y)}${N(e.level_supply)}${M(e.flow_supply)}</div>
            <div class="tcell r">${P("mdi:import",Ce("supply_air",this.hass.language),!0)}${E(v,e.tempSensor4)}${O(e.humSensor4)}</div>
          </div>
        </div>

        ${e.show_legend?V`<div class="legend">
          <span class="mn">${Math.round(m[0])}°C</span>
          <div class="bar" style="background:linear-gradient(90deg, ${Te(0)}, ${Te(.25)}, ${Te(.5)}, ${Te(.75)}, ${Te(1)})"></div>
          <span class="mx">${Math.round(m[1])}°C</span>
        </div>`:""}

        <div class="status">
          ${S.map(e=>V`<div class="chip ${e.active?"on":""}" style="--c:${e.color}">
              <ha-icon icon=${e.icon} title=${e.label}></ha-icon>
              <!--<span class="nm">${e.label}</span>-->
              ${e.sub?V`<span class="vs">${e.sub}</span>`:""}
            </div>`)}
        </div>
      </ha-card>
    `}_flowGroup(e,t){const s=(Number(e)/2).toFixed(1),i=(Number(t)/2).toFixed(1);return W`<g class="flow-hi" filter="url(#soft)">
      <circle r="11" fill="#fff"><animateMotion path=${Ge} dur="${e}s" begin="0s" repeatCount="indefinite"></animateMotion></circle>
      <circle r="11" fill="#fff"><animateMotion path=${Ge} dur="${e}s" begin="-${s}s" repeatCount="indefinite"></animateMotion></circle>
      <circle r="11" fill="#fff"><animateMotion path=${Ze} dur="${t}s" begin="0s" repeatCount="indefinite"></animateMotion></circle>
      <circle r="11" fill="#fff"><animateMotion path=${Ze} dur="${t}s" begin="-${i}s" repeatCount="indefinite"></animateMotion></circle>
    </g>`}_moreInfo(e){e&&ve(this,"hass-more-info",{entityId:e})}_setFan(e){if(this._config.entity)this.hass.callService("climate","set_fan_mode",{entity_id:this._config.entity,fan_mode:e});else if(this._config.fan){const t=(e=>$e.find(t=>t.mode===e)?.speed)(e);if(void 0===t)return;this.hass.callService("fan","set_percentage",{entity_id:this._config.fan_mode,percentage:t})}}_stepTemp(e){const t=ke(this.hass,this._config.entity),s=Number(t?.attributes.temperature);if(!Number.isFinite(s))return;const i=Number(t.attributes.target_temp_step),n=Number.isFinite(i)&&i>0?i:.5,r=Number(t.attributes.min_temp),a=Number(t.attributes.max_temp),o=function(e,t,s,i,n){const r=Math.round(10*(e+n*t))/10;return Math.min(i,Math.max(s,r))}(s,n,Number.isFinite(r)?r:-1/0,Number.isFinite(a)?a:1/0,e);this.hass.callService("climate","set_temperature",{entity_id:this._config.entity,temperature:o})}static get styles(){return a`
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
    `}};function Ke(e,t,s,i){return function(e,t,s){if("level"===e){const e=null==s||Number.isNaN(s)?50:s;return Math.min(2.5,Math.max(.2,e/50))}const i=null==t||Number.isNaN(t)?50:t;return Math.min(2,Math.max(.1,i/100))}(s,t.animation_speed,Me(e,i))}e([me({attribute:!1})],qe.prototype,"hass",void 0),e([fe()],qe.prototype,"_config",void 0),qe=e([pe(ye)],qe);export{qe as MqttComfoairCard};
