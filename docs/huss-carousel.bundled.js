/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,s=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),e=new WeakMap;class o{constructor(t,s,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const i=this.t;if(s&&void 0===t){const s=void 0!==i&&1===i.length;s&&(t=e.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&e.set(i,t))}return t}toString(){return this.cssText}}const n=s?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let s="";for(const i of t.cssRules)s+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,i))(s)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const r=window,h=r.trustedTypes,a=h?h.emptyScript:"",u=r.reactiveElementPolyfillSupport,c={toAttribute(t,s){switch(s){case Boolean:t=t?a:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},d=(t,s)=>s!==t&&(s==s||t==t),v={attribute:!0,type:String,converter:c,reflect:!1,hasChanged:d},p="finalized";class f extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var s;this.finalize(),(null!==(s=this.h)&&void 0!==s?s:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((s,i)=>{const e=this._$Ep(i,s);void 0!==e&&(this._$Ev.set(e,i),t.push(e))})),t}static createProperty(t,s=v){if(s.state&&(s.attribute=!1),this.finalize(),this.elementProperties.set(t,s),!s.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,i,s);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,s,i){return{get(){return this[s]},set(e){const o=this[t];this[s]=e,this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty(p))return!1;this[p]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,s=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of s)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)s.unshift(n(t))}else void 0!==t&&s.push(n(t));return s}static _$Ep(t,s){const i=s.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var s,i;(null!==(s=this._$ES)&&void 0!==s?s:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var s;null===(s=this._$ES)||void 0===s||s.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,s)=>{this.hasOwnProperty(s)&&(this._$Ei.set(s,this[s]),delete this[s])}))}createRenderRoot(){var i;const e=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,e)=>{s?i.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((s=>{const e=document.createElement("style"),o=t.litNonce;void 0!==o&&e.setAttribute("nonce",o),e.textContent=s.cssText,i.appendChild(e)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var s;return null===(s=t.hostConnected)||void 0===s?void 0:s.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var s;return null===(s=t.hostDisconnected)||void 0===s?void 0:s.call(t)}))}attributeChangedCallback(t,s,i){this._$AK(t,i)}_$EO(t,s,i=v){var e;const o=this.constructor._$Ep(t,i);if(void 0!==o&&!0===i.reflect){const n=(void 0!==(null===(e=i.converter)||void 0===e?void 0:e.toAttribute)?i.converter:c).toAttribute(s,i.type);this._$El=t,null==n?this.removeAttribute(o):this.setAttribute(o,n),this._$El=null}}_$AK(t,s){var i;const e=this.constructor,o=e._$Ev.get(t);if(void 0!==o&&this._$El!==o){const t=e.getPropertyOptions(o),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:c;this._$El=o,this[o]=n.fromAttribute(s,t.type),this._$El=null}}requestUpdate(t,s,i){let e=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||d)(this[t],s)?(this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,s)=>this[s]=t)),this._$Ei=void 0);let s=!1;const i=this._$AL;try{s=this.shouldUpdate(i),s?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var s;return null===(s=t.hostUpdate)||void 0===s?void 0:s.call(t)})),this.update(i)):this._$Ek()}catch(t){throw s=!1,this._$Ek(),t}s&&this._$AE(i)}willUpdate(t){}_$AE(t){var s;null===(s=this._$ES)||void 0===s||s.forEach((t=>{var s;return null===(s=t.hostUpdated)||void 0===s?void 0:s.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,s)=>this._$EO(s,this[s],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;f[p]=!0,f.elementProperties=new Map,f.elementStyles=[],f.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:f}),(null!==(l=r.reactiveElementVersions)&&void 0!==l?l:r.reactiveElementVersions=[]).push("1.6.3");const _=window,g=_.trustedTypes,y=g?g.createPolicy("lit-html",{createHTML:t=>t}):void 0,m="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,x="?"+$,w=`<${x}>`,k=document,S=()=>k.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,z=Array.isArray,A="[ \t\n\f\r]",E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,j=/-->/g,H=/>/g,M=RegExp(`>|${A}(?:([^\\s"'>=/]+)(${A}*=${A}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,U=/"/g,T=/^(?:script|style|textarea|title)$/i,O=(t=>(s,...i)=>({_$litType$:t,strings:s,values:i}))(1),B=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),D=new WeakMap,N=k.createTreeWalker(k,129,null,!1);function P(t,s){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(s):s}const L=(t,s)=>{const i=t.length-1,e=[];let o,n=2===s?"<svg>":"",l=E;for(let s=0;s<i;s++){const i=t[s];let r,h,a=-1,u=0;for(;u<i.length&&(l.lastIndex=u,h=l.exec(i),null!==h);)u=l.lastIndex,l===E?"!--"===h[1]?l=j:void 0!==h[1]?l=H:void 0!==h[2]?(T.test(h[2])&&(o=RegExp("</"+h[2],"g")),l=M):void 0!==h[3]&&(l=M):l===M?">"===h[0]?(l=null!=o?o:E,a=-1):void 0===h[1]?a=-2:(a=l.lastIndex-h[2].length,r=h[1],l=void 0===h[3]?M:'"'===h[3]?U:I):l===U||l===I?l=M:l===j||l===H?l=E:(l=M,o=void 0);const c=l===M&&t[s+1].startsWith("/>")?" ":"";n+=l===E?i+w:a>=0?(e.push(r),i.slice(0,a)+m+i.slice(a)+$+c):i+$+(-2===a?(e.push(void 0),s):c)}return[P(t,n+(t[i]||"<?>")+(2===s?"</svg>":"")),e]};class q{constructor({strings:t,_$litType$:s},i){let e;this.parts=[];let o=0,n=0;const l=t.length-1,r=this.parts,[h,a]=L(t,s);if(this.el=q.createElement(h,i),N.currentNode=this.el.content,2===s){const t=this.el.content,s=t.firstChild;s.remove(),t.append(...s.childNodes)}for(;null!==(e=N.nextNode())&&r.length<l;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const s of e.getAttributeNames())if(s.endsWith(m)||s.startsWith($)){const i=a[n++];if(t.push(s),void 0!==i){const t=e.getAttribute(i.toLowerCase()+m).split($),s=/([.?@])?(.*)/.exec(i);r.push({type:1,index:o,name:s[2],strings:t,ctor:"."===s[1]?Z:"?"===s[1]?X:"@"===s[1]?Y:W})}else r.push({type:6,index:o})}for(const s of t)e.removeAttribute(s)}if(T.test(e.tagName)){const t=e.textContent.split($),s=t.length-1;if(s>0){e.textContent=g?g.emptyScript:"";for(let i=0;i<s;i++)e.append(t[i],S()),N.nextNode(),r.push({type:2,index:++o});e.append(t[s],S())}}}else if(8===e.nodeType)if(e.data===x)r.push({type:2,index:o});else{let t=-1;for(;-1!==(t=e.data.indexOf($,t+1));)r.push({type:7,index:o}),t+=$.length-1}o++}}static createElement(t,s){const i=k.createElement("template");return i.innerHTML=t,i}}function F(t,s,i=t,e){var o,n,l,r;if(s===B)return s;let h=void 0!==e?null===(o=i._$Co)||void 0===o?void 0:o[e]:i._$Cl;const a=C(s)?void 0:s._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h._$AO)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h._$AT(t,i,e)),void 0!==e?(null!==(l=(r=i)._$Co)&&void 0!==l?l:r._$Co=[])[e]=h:i._$Cl=h),void 0!==h&&(s=F(t,h._$AS(t,s.values),h,e)),s}class J{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var s;const{el:{content:i},parts:e}=this._$AD,o=(null!==(s=null==t?void 0:t.creationScope)&&void 0!==s?s:k).importNode(i,!0);N.currentNode=o;let n=N.nextNode(),l=0,r=0,h=e[0];for(;void 0!==h;){if(l===h.index){let s;2===h.type?s=new K(n,n.nextSibling,this,t):1===h.type?s=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(s=new G(n,this,t)),this._$AV.push(s),h=e[++r]}l!==(null==h?void 0:h.index)&&(n=N.nextNode(),l++)}return N.currentNode=k,o}v(t){let s=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,s),s+=i.strings.length-2):i._$AI(t[s])),s++}}class K{constructor(t,s,i,e){var o;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=i,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,s;return null!==(s=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==s?s:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return void 0!==s&&11===(null==t?void 0:t.nodeType)&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=F(this,t,s),C(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==B&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>z(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==R&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var s;const{values:i,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=q.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(s=this._$AH)||void 0===s?void 0:s._$AD)===o)this._$AH.v(i);else{const t=new J(o,this),s=t.u(this.options);t.v(i),this.$(s),this._$AH=t}}_$AC(t){let s=D.get(t.strings);return void 0===s&&D.set(t.strings,s=new q(t)),s}T(t){z(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let i,e=0;for(const o of t)e===s.length?s.push(i=new K(this.k(S()),this.k(S()),this,this.options)):i=s[e],i._$AI(o),e++;e<s.length&&(this._$AR(i&&i._$AB.nextSibling,e),s.length=e)}_$AR(t=this._$AA.nextSibling,s){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,s);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var s;void 0===this._$AM&&(this._$Cp=t,null===(s=this._$AP)||void 0===s||s.call(this,t))}}class W{constructor(t,s,i,e,o){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=s,this._$AM=e,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,s=this,i,e){const o=this.strings;let n=!1;if(void 0===o)t=F(this,t,s,0),n=!C(t)||t!==this._$AH&&t!==B,n&&(this._$AH=t);else{const e=t;let l,r;for(t=o[0],l=0;l<o.length-1;l++)r=F(this,e[i+l],s,l),r===B&&(r=this._$AH[l]),n||(n=!C(r)||r!==this._$AH[l]),r===R?t=R:t!==R&&(t+=(null!=r?r:"")+o[l+1]),this._$AH[l]=r}n&&!e&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class Z extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const V=g?g.emptyScript:"";class X extends W{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,V):this.element.removeAttribute(this.name)}}class Y extends W{constructor(t,s,i,e,o){super(t,s,i,e,o),this.type=5}_$AI(t,s=this){var i;if((t=null!==(i=F(this,t,s,0))&&void 0!==i?i:R)===B)return;const e=this._$AH,o=t===R&&e!==R||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==R&&(e===R||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(s=this.options)||void 0===s?void 0:s.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class G{constructor(t,s,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const Q=_.litHtmlPolyfillSupport;null==Q||Q(q,K),(null!==(b=_.litHtmlVersions)&&void 0!==b?b:_.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var tt,st;class it extends f{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,s;const i=super.createRenderRoot();return null!==(t=(s=this.renderOptions).renderBefore)&&void 0!==t||(s.renderBefore=i.firstChild),i}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,s,i)=>{var e,o;const n=null!==(e=null==i?void 0:i.renderBefore)&&void 0!==e?e:s;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new K(s.insertBefore(S(),t),t,void 0,null!=i?i:{})}return l._$AI(t),l})(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return B}}it.finalized=!0,it._$litElement$=!0,null===(tt=globalThis.litElementHydrateSupport)||void 0===tt||tt.call(globalThis,{LitElement:it});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:it}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ot=(t,s)=>"method"===s.kind&&s.descriptor&&!("value"in s.descriptor)?{...s,finisher(i){i.createProperty(s.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:s.key,initializer(){"function"==typeof s.initializer&&(this[s.key]=s.initializer.call(this))},finisher(i){i.createProperty(s.key,t)}},nt=(t,s,i)=>{s.constructor.createProperty(i,t)};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function lt(t){return(s,i)=>void 0!==i?nt(t,s,i):ot(t,s)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}function rt(t){return lt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ht;const at=null!=(null===(ht=window.HTMLSlotElement)||void 0===ht?void 0:ht.prototype.assignedElements)?(t,s)=>t.assignedElements(s):(t,s)=>t.assignedNodes(s).filter((t=>t.nodeType===Node.ELEMENT_NODE));const ut=((t,...s)=>{const e=1===t.length?t[0]:s.reduce(((s,i,e)=>s+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[e+1]),t[0]);return new o(e,t,i)})`
  :host {
    --mobileHeight: 275px;
    --tabletHeight: 369px;
    --desktopHeight: 639px;
    --dotInlineSize: 10px;
    --dotBlockSize: 10px;
    --dotBorderRadius: 50%;
    --dotColour: purple;
    --activeDotColour: goldenrod;
    --focusedDotColour: green;
    --hoveredDotColour: yellow;
    --carouselBgColour: aquamarine;
  }

  :host ul,
  :host ol {
    padding: 0;
    margin: 0;
  }

  :host li {
    list-style-type: none;
  }

  .huss-carousel--wrapper {
    position: relative;
    background: var(--carouselBgColour);
  }

  :host([variant='anyContent']) {
    --teasersHeight: 480px;
    display: block;
    padding-block-end: 55px;
  }

  .huss-carousel {
    inline-size: 100%;
    block-size: var(--mobileHeight);
    position: relative;
    overflow: hidden;
  }

  @media (width > 560px) {
    .huss-carousel {
      block-size: var(--tabletHeight);
    }
  }
  @media (width > 960px) {
    .huss-carousel {
      block-size: var(--desktopHeight);
    }
  }

  .huss-carousel__slide {
    position: absolute;
    inset-inline-start: 0;
    inset-inline-end: 0;
    block-size: 100%;
    transition: all 0.5s;
    touch-action: pan-x;
    display: flex;
    gap: 24px;
  }

  .huss-carousel__slide > * {
    flex: 1;
  }

  .huss-carousel__item,
  .huss-carousel__slide img,
  .huss-carousel__slide video {
    inline-size: 100%;
    block-size: 100%;
  }

  .huss-carousel__slide > img {
    object-fit: contain;
  }

  .huss-carousel--has-teasers .huss-carousel--flex-less .huss-carousel__item {
    flex: 0;
  }

  .huss-carousel--has-teasers
    .huss-carousel--flex-less
    .huss-carousel__item
    .huss-events-teaser__teaser {
    inline-size: 368px;
  }

  .huss-carousel__dots {
    display: flex;
    justify-content: center;
    position: absolute;
    inset-block-end: 20px;
    align-items: center;
    inset-inline-start: 0;
    inset-inline-end: 0;
    line-height: 1;
    gap: 10px;
  }

  .huss-carousel__dot-btn {
    padding: 0;
    block-size: 30px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
  }

  .huss-carousel__dot-btn:hover,
  .huss-carousel__dot-btn:focus {
    cursor: pointer;
  }

  .huss-carousel__dot-btn:focus-visible {
    outline: none;
    border-radius: 2px;
    box-shadow: 0 0 0 1px var(--focusedDotColour);
  }

  .huss-carousel__dot-btn:after {
    content: '';
    inline-size: var(--dotInlineSize);
    block-size: var(--dotBlockSize);
    background: var(--dotColour);
    border-radius: var(--dotBorderRadius);
  }

  .huss-carousel__dot-btn:hover:after {
    background: var(--hoveredDotColour);
  }

  .huss-carousel__dot-btn--is-active:after {
    content: '';
    background: var(--activeDotColour);
  }

  .huss-carousel__slide-controls {
    position: absolute;
    z-index: 1;
    inset-inline-start: 0;
    inset-inline-end: 0;
    display: flex;
    justify-content: space-between;
    inset-block-start: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .huss-carousel__slide-controls .huss-carousel__button {
    pointer-events: all;
  }

  .huss-carousel__play-controls {
    position: absolute;
    inset-inline-start: 20px;
    inset-block-end: 20px;
    z-index: 1;
  }

  .huss-carousel--has-teasers .huss-carousel {
    block-size: var(--teasersHeight);
  }

  .huss-carousel--has-teasers .huss-carousel__play-controls {
    display: none;
  }

  .huss-carousel--has-teasers .huss-carousel__slide {
    gap: 15px;
  }

  .huss-carousel--has-teasers .huss-carousel__item {
    display: flex;
  }

  .huss-carousel--has-teasers > *:not(:only-child) {
    flex: 1;
  }

  .huss-carousel--has-teasers .huss-carousel__slide-controls {
    inset-block-start: calc(100% + 16px);
    transform: unset;
  }

  .huss-carousel--has-teasers .huss-carousel__dots {
    inset-block-end: -45px;
    inset-inline-start: 25%;
    inset-inline-end: 25%;
    z-index: 1;
  }

  .huss-carousel--has-teasers .huss-carousel__play-controls {
    inset-block-end: -45px;
    inset-inline-start: 45px;
  }

  .huss-carousel--is-hidden {
    display: none;
  }
`;var ct;!function(t){t.Mobile="mobile",t.Tablet="tablet",t.Desktop="desktop"}(ct||(ct={}));const dt=()=>{const t=48;return matchMedia(`(min-width: ${72}rem)`).matches?ct.Desktop:matchMedia(`(min-width: ${t}rem)`).matches?ct.Tablet:ct.Mobile};
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vt,pt,ft=function(t,s,i,e){for(var o,n=arguments.length,l=n<3?s:null===e?e=Object.getOwnPropertyDescriptor(s,i):e,r=t.length-1;r>=0;r--)(o=t[r])&&(l=(n<3?o(l):n>3?o(s,i,l):o(s,i))||l);return n>3&&l&&Object.defineProperty(s,i,l),l};!function(t){t.Prev="prev",t.Next="next"}(vt||(vt={})),function(t){t.Image="image",t.AnyContent="anyContent"}(pt||(pt={}));let bt=class extends it{constructor(){super(...arguments),this.variant=pt.Image,this.slideDelay="5500",this.autoplay=void 0,this.elementsInSlideDesktop=3,this.elementsInSlideTablet=2,this.elementsInSlideMobile=1,this.currentSlide=0,this.currentRecords=[],this.lastSlide=0,this.touches={touchStart:0,touchEnd:0},this.shouldFlexLess=(t,s)=>this.currentRecords.length===s+1&&!(t.length%2)&&dt()===ct.Desktop}connectedCallback(){window.addEventListener("resize",((t,s=100)=>{let i=!1;return(...e)=>{i||(t(...e),i=!0,setTimeout((()=>{i=!1}),s))}})((()=>this.handleElemsPerSlide()),250)),super.connectedCallback()}firstUpdated(t){var s;if(this.slidesInternal=this._slides,this.variant===pt.AnyContent){if(this.handleElemsPerSlide(),null===(s=this._slides)||void 0===s?void 0:s[0]){const t=getComputedStyle(this._slides[0]),s=Math.ceil(parseFloat(t.blockSize)+parseFloat(t.marginBlockStart));this.style.setProperty("--teasersHeight",`${s}px`)}}else this.sliceArray(this._slides,1);void 0!==this.autoplay&&this.play()}handleElemsPerSlide(){if(this.variant===pt.Image)return;let t=1;switch(dt()){case ct.Desktop:t=this.elementsInSlideDesktop;break;case ct.Tablet:t=this.elementsInSlideTablet;break;default:t=this.elementsInSlideMobile}const s=this._slides.length?this._slides:this.slidesInternal;this.sliceArray(s,t)}sliceArray(t,s){var i;const e=Array.from(t),o="number"==typeof s?s:parseInt(s);var n;this.currentRecords=(n=o,e.reduce(((t,s,i)=>(i%n==0?t.push([s]):t[t.length-1].push(s),t)),[])),(null===(i=this._slides)||void 0===i?void 0:i.length)&&(this.lastSlide=this.currentRecords.length-1)}nextSlideHandler(){this.currentSlide===this.lastSlide?this.currentSlide=0:this.currentSlide++}previousSlideHandler(){0===this.currentSlide?this.currentSlide=this.lastSlide:this.currentSlide--}goToSlideHandler(t){this.currentSlide=t}play(){this.sliderInterval=setInterval((()=>{this.nextSlideHandler()}),parseInt(this.slideDelay))}pause(){this.sliderInterval=clearInterval(this.sliderInterval)}togglePlay(){this.sliderInterval?this.pause():this.play()}swipeHandler(){(this.touches.touchEnd-this.touches.touchStart<0?vt.Next:vt.Prev)===vt.Prev?this.previousSlideHandler():this.nextSlideHandler()}touchStartHandler(t){this.touches.touchStart=t.changedTouches[0].pageX}touchEndHandler(t){const s=t.changedTouches[0].pageX;this.touches.touchEnd=s;const i=s-this.touches.touchStart;Math.abs(i)>50&&this.swipeHandler()}render(){return O`
      <div
        class="huss-carousel--wrapper ${this.variant===pt.AnyContent?"huss-carousel--has-teasers":null}"
      >
        <div
          class="huss-carousel__slide-controls ${1===this.currentRecords.length?"huss-carousel--is-hidden":""}"
        >
          <slot
            class="huss-button--icon huss-carousel__button"
            @click="${this.previousSlideHandler}"
            name="prevButton"
          ></slot>
          <slot
            class="huss-button--icon huss-carousel__button"
            @click="${this.nextSlideHandler}"
            name="nextButton"
          ></slot>
        </div>
        <div
          class="huss-carousel__play-controls ${1===this.currentRecords.length?"huss-carousel--is-hidden":""} "
        >
          ${this.sliderInterval?O`<slot
                name="playPauseButton"
                class="huss-button--icon huss-carousel__button"
                @click="${this.togglePlay}"
              ></slot>`:O`<slot
                name="playStartButton"
                class="huss-button--icon huss-carousel__button"
                @click="${this.togglePlay}"
              ></slot>`}
        </div>
        <ul class="huss-carousel">
          ${this.currentRecords.map(((t,s)=>O`
              <li
                @touchstart=${this.touchStartHandler}
                @touchend=${this.touchEndHandler}
                class="huss-carousel__slide ${void 0!==this.shouldHug&&this.currentRecords.length===s+1&&this.shouldFlexLess(t,s)?"huss-carousel--flex-less":null}"
                style="transform: translateX(${100*(s-this.currentSlide)}%)"
              >
                ${t.map((t=>O`${t} `))}
              </li>
            `))}
        </ul>
        <ul class="huss-carousel__dots">
          ${this.currentRecords.length>1?this.currentRecords.map(((t,s)=>O`
                  <li class="huss-carousel__dot">
                    <button
                      @click="${()=>this.goToSlideHandler(s)}"
                      class="huss-carousel__dot-btn ${s===this.currentSlide?"huss-carousel__dot-btn--is-active":null}"
                    ></button>
                  </li>
                `)):R}
        </ul>
        <slot name="slides"> </slot>
      </div>
    `}};bt.styles=[ut],ft([function(t){const{slot:s,selector:i}=null!=t?t:{};return(({finisher:t,descriptor:s})=>(i,e)=>{var o;if(void 0===e){const e=null!==(o=i.originalKey)&&void 0!==o?o:i.key,n=null!=s?{kind:"method",placement:"prototype",key:e,descriptor:s(i.key)}:{...i,key:e};return null!=t&&(n.finisher=function(s){t(s,e)}),n}{const o=i.constructor;void 0!==s&&Object.defineProperty(i,e,s(e)),null==t||t(o,e)}})({descriptor:e=>({get(){var e;const o="slot"+(s?`[name=${s}]`:":not([name])"),n=null===(e=this.renderRoot)||void 0===e?void 0:e.querySelector(o),l=null!=n?at(n,t):[];return i?l.filter((t=>t.matches(i))):l},enumerable:!0,configurable:!0})})}({slot:"slides",selector:".huss-carousel__item"})],bt.prototype,"_slides",void 0),ft([lt()],bt.prototype,"variant",void 0),ft([lt()],bt.prototype,"slideDelay",void 0),ft([lt()],bt.prototype,"autoplay",void 0),ft([lt()],bt.prototype,"elementsInSlideDesktop",void 0),ft([lt()],bt.prototype,"elementsInSlideTablet",void 0),ft([lt()],bt.prototype,"elementsInSlideMobile",void 0),ft([lt()],bt.prototype,"shouldHug",void 0),ft([rt()],bt.prototype,"currentSlide",void 0),ft([rt()],bt.prototype,"slidesInternal",void 0),ft([rt()],bt.prototype,"currentRecords",void 0),ft([rt()],bt.prototype,"sliderInterval",void 0),bt=ft([(t=>s=>"function"==typeof s?((t,s)=>(customElements.define(t,s),s))(t,s):((t,s)=>{const{kind:i,elements:e}=s;return{kind:i,elements:e,finisher(s){customElements.define(t,s)}}})(t,s))("huss-carousel")],bt);export{bt as HussCarousel};
