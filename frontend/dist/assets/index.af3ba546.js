(async()=>{(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))e(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&e(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerpolicy&&(n.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?n.credentials="include":i.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(i){if(i.ep)return;i.ep=!0;const n=t(i);fetch(i.href,n)}})();const we=window,rs=we.ShadowRoot&&(we.ShadyCSS===void 0||we.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,os=Symbol(),ri=new WeakMap;class oi{constructor(t,e,i){if(this._$cssResult$=!0,i!==os)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(rs&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=ri.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&ri.set(e,t))}return t}toString(){return this.cssText}}const yn=s=>new oi(typeof s=="string"?s:s+"",void 0,os),ai=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new oi(e,s,os)},bn=(s,t)=>{rs?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=we.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)})},hi=rs?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return yn(e)})(s):s;var as;const ke=window,li=ke.trustedTypes,mn=li?li.emptyScript:"",hs=ke.reactiveElementPolyfillSupport,ls={toAttribute(s,t){switch(t){case Boolean:s=s?mn:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},ci=(s,t)=>t!==s&&(t==t||s==s),cs={attribute:!0,type:String,converter:ls,reflect:!1,hasChanged:ci};class mt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=cs){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||cs}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(hi(n))}else t!==void 0&&e.push(hi(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return bn(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=cs){var n;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:ls).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,r=n._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:ls;this._$El=r,this[r]=a.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||ci)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}mt.finalized=!0,mt.elementProperties=new Map,mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},hs==null||hs({ReactiveElement:mt}),((as=ke.reactiveElementVersions)!==null&&as!==void 0?as:ke.reactiveElementVersions=[]).push("1.4.2");var ds;const _e=window,wt=_e.trustedTypes,di=wt?wt.createPolicy("lit-html",{createHTML:s=>s}):void 0,st=`lit$${(Math.random()+"").slice(9)}$`,pi="?"+st,wn=`<${pi}>`,kt=document,qt=(s="")=>kt.createComment(s),Ft=s=>s===null||typeof s!="object"&&typeof s!="function",ui=Array.isArray,kn=s=>ui(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Gt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,fi=/-->/g,gi=/>/g,ot=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),vi=/'/g,yi=/"/g,bi=/^(?:script|style|textarea|title)$/i,_n=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),mi=_n(1),_t=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),wi=new WeakMap,$t=kt.createTreeWalker(kt,129,null,!1),$n=(s,t)=>{const e=s.length-1,i=[];let n,r=t===2?"<svg>":"",o=Gt;for(let h=0;h<e;h++){const l=s[h];let c,d,f=-1,p=0;for(;p<l.length&&(o.lastIndex=p,d=o.exec(l),d!==null);)p=o.lastIndex,o===Gt?d[1]==="!--"?o=fi:d[1]!==void 0?o=gi:d[2]!==void 0?(bi.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=ot):d[3]!==void 0&&(o=ot):o===ot?d[0]===">"?(o=n!=null?n:Gt,f=-1):d[1]===void 0?f=-2:(f=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?ot:d[3]==='"'?yi:vi):o===yi||o===vi?o=ot:o===fi||o===gi?o=Gt:(o=ot,n=void 0);const u=o===ot&&s[h+1].startsWith("/>")?" ":"";r+=o===Gt?l+wn:f>=0?(i.push(c),l.slice(0,f)+"$lit$"+l.slice(f)+st+u):l+st+(f===-2?(i.push(void 0),h):u)}const a=r+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[di!==void 0?di.createHTML(a):a,i]};class Zt{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const a=t.length-1,h=this.parts,[l,c]=$n(t,e);if(this.el=Zt.createElement(l,i),$t.currentNode=this.el.content,e===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(n=$t.nextNode())!==null&&h.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const f of n.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(st)){const p=c[o++];if(d.push(f),p!==void 0){const u=n.getAttribute(p.toLowerCase()+"$lit$").split(st),y=/([.?@])?(.*)/.exec(p);h.push({type:1,index:r,name:y[2],strings:u,ctor:y[1]==="."?An:y[1]==="?"?Mn:y[1]==="@"?Sn:$e})}else h.push({type:6,index:r})}for(const f of d)n.removeAttribute(f)}if(bi.test(n.tagName)){const d=n.textContent.split(st),f=d.length-1;if(f>0){n.textContent=wt?wt.emptyScript:"";for(let p=0;p<f;p++)n.append(d[p],qt()),$t.nextNode(),h.push({type:2,index:++r});n.append(d[f],qt())}}}else if(n.nodeType===8)if(n.data===pi)h.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(st,d+1))!==-1;)h.push({type:7,index:r}),d+=st.length-1}r++}}static createElement(t,e){const i=kt.createElement("template");return i.innerHTML=t,i}}function xt(s,t,e=s,i){var n,r,o,a;if(t===_t)return t;let h=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Ft(t)?void 0:t._$litDirective$;return(h==null?void 0:h.constructor)!==l&&((r=h==null?void 0:h._$AO)===null||r===void 0||r.call(h,!1),l===void 0?h=void 0:(h=new l(s),h._$AT(s,e,i)),i!==void 0?((o=(a=e)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=h:e._$Cl=h),h!==void 0&&(t=xt(s,h._$AS(s,t.values),h,i)),t}class xn{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:kt).importNode(i,!0);$t.currentNode=r;let o=$t.nextNode(),a=0,h=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new Kt(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new On(o,this,t)),this.u.push(c),l=n[++h]}a!==(l==null?void 0:l.index)&&(o=$t.nextNode(),a++)}return r}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Kt{constructor(t,e,i,n){var r;this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cm=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=xt(this,t,e),Ft(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==_t&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):kn(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==E&&Ft(this._$AH)?this._$AA.nextSibling.data=t:this.T(kt.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Zt.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(i);else{const o=new xn(r,this),a=o.v(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(t){let e=wi.get(t.strings);return e===void 0&&wi.set(t.strings,e=new Zt(t)),e}k(t){ui(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new Kt(this.O(qt()),this.O(qt()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class $e{constructor(t,e,i,n,r){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=E}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(r===void 0)t=xt(this,t,e,0),o=!Ft(t)||t!==this._$AH&&t!==_t,o&&(this._$AH=t);else{const a=t;let h,l;for(t=r[0],h=0;h<r.length-1;h++)l=xt(this,a[i+h],e,h),l===_t&&(l=this._$AH[h]),o||(o=!Ft(l)||l!==this._$AH[h]),l===E?t=E:t!==E&&(t+=(l!=null?l:"")+r[h+1]),this._$AH[h]=l}o&&!n&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class An extends $e{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}const Rn=wt?wt.emptyScript:"";class Mn extends $e{constructor(){super(...arguments),this.type=4}j(t){t&&t!==E?this.element.setAttribute(this.name,Rn):this.element.removeAttribute(this.name)}}class Sn extends $e{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=xt(this,t,e,0))!==null&&i!==void 0?i:E)===_t)return;const n=this._$AH,r=t===E&&n!==E||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==E&&(n===E||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class On{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){xt(this,t)}}const ps=_e.litHtmlPolyfillSupport;ps==null||ps(Zt,Kt),((ds=_e.litHtmlVersions)!==null&&ds!==void 0?ds:_e.litHtmlVersions=[]).push("2.4.0");const Cn=(s,t,e)=>{var i,n;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new Kt(t.insertBefore(qt(),a),a,void 0,e!=null?e:{})}return o._$AI(s),o};var us,fs;class At extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Cn(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return _t}}At.finalized=!0,At._$litElement$=!0,(us=globalThis.litElementHydrateSupport)===null||us===void 0||us.call(globalThis,{LitElement:At});const gs=globalThis.litElementPolyfillSupport;gs==null||gs({LitElement:At}),((fs=globalThis.litElementVersions)!==null&&fs!==void 0?fs:globalThis.litElementVersions=[]).push("3.2.2");const ki=s=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(o){customElements.define(e,o)}}})(s,t),En=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function at(s){return(t,e)=>e!==void 0?((i,n,r)=>{n.constructor.createProperty(r,i)})(s,t,e):En(s,t)}var vs;((vs=window.HTMLSlotElement)===null||vs===void 0?void 0:vs.prototype.assignedElements)!=null;const xe=window,ys=xe.ShadowRoot&&(xe.ShadyCSS===void 0||xe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bs=Symbol(),_i=new WeakMap;class $i{constructor(t,e,i){if(this._$cssResult$=!0,i!==bs)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ys&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=_i.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&_i.set(e,t))}return t}toString(){return this.cssText}}const Pn=s=>new $i(typeof s=="string"?s:s+"",void 0,bs),k=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new $i(e,s,bs)},zn=(s,t)=>{ys?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=xe.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)})},xi=ys?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return Pn(e)})(s):s;var ms;const Ae=window,Ai=Ae.trustedTypes,Tn=Ai?Ai.emptyScript:"",ws=Ae.reactiveElementPolyfillSupport,ks={toAttribute(s,t){switch(t){case Boolean:s=s?Tn:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},Ri=(s,t)=>t!==s&&(t==t||s==s),_s={attribute:!0,type:String,converter:ks,reflect:!1,hasChanged:Ri};class Rt extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Ep(i,e);n!==void 0&&(this._$Ev.set(n,i),t.push(n))}),t}static createProperty(t,e=_s){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||_s}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(xi(n))}else t!==void 0&&e.push(xi(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return zn(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=_s){var n;const r=this.constructor._$Ep(t,i);if(r!==void 0&&i.reflect===!0){const o=(((n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?i.converter:ks).toAttribute(e,i.type);this._$El=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,r=n._$Ev.get(t);if(r!==void 0&&this._$El!==r){const o=n.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?o.converter:ks;this._$El=r,this[r]=a.fromAttribute(e,o.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||Ri)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$Ek()}catch(n){throw e=!1,this._$Ek(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}Rt.finalized=!0,Rt.elementProperties=new Map,Rt.elementStyles=[],Rt.shadowRootOptions={mode:"open"},ws==null||ws({ReactiveElement:Rt}),((ms=Ae.reactiveElementVersions)!==null&&ms!==void 0?ms:Ae.reactiveElementVersions=[]).push("1.4.2");var $s;const Re=window,Mt=Re.trustedTypes,Mi=Mt?Mt.createPolicy("lit-html",{createHTML:s=>s}):void 0,it=`lit$${(Math.random()+"").slice(9)}$`,Si="?"+it,jn=`<${Si}>`,St=document,Qt=(s="")=>St.createComment(s),Yt=s=>s===null||typeof s!="object"&&typeof s!="function",Oi=Array.isArray,Ln=s=>Oi(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",Jt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ci=/-->/g,Ei=/>/g,ht=RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Pi=/'/g,zi=/"/g,Ti=/^(?:script|style|textarea|title)$/i,In=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),_=In(1),Ot=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),ji=new WeakMap,Ct=St.createTreeWalker(St,129,null,!1),Nn=(s,t)=>{const e=s.length-1,i=[];let n,r=t===2?"<svg>":"",o=Jt;for(let h=0;h<e;h++){const l=s[h];let c,d,f=-1,p=0;for(;p<l.length&&(o.lastIndex=p,d=o.exec(l),d!==null);)p=o.lastIndex,o===Jt?d[1]==="!--"?o=Ci:d[1]!==void 0?o=Ei:d[2]!==void 0?(Ti.test(d[2])&&(n=RegExp("</"+d[2],"g")),o=ht):d[3]!==void 0&&(o=ht):o===ht?d[0]===">"?(o=n!=null?n:Jt,f=-1):d[1]===void 0?f=-2:(f=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?ht:d[3]==='"'?zi:Pi):o===zi||o===Pi?o=ht:o===Ci||o===Ei?o=Jt:(o=ht,n=void 0);const u=o===ht&&s[h+1].startsWith("/>")?" ":"";r+=o===Jt?l+jn:f>=0?(i.push(c),l.slice(0,f)+"$lit$"+l.slice(f)+it+u):l+it+(f===-2?(i.push(void 0),h):u)}const a=r+(s[e]||"<?>")+(t===2?"</svg>":"");if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return[Mi!==void 0?Mi.createHTML(a):a,i]};class Xt{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const a=t.length-1,h=this.parts,[l,c]=Nn(t,e);if(this.el=Xt.createElement(l,i),Ct.currentNode=this.el.content,e===2){const d=this.el.content,f=d.firstChild;f.remove(),d.append(...f.childNodes)}for(;(n=Ct.nextNode())!==null&&h.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const d=[];for(const f of n.getAttributeNames())if(f.endsWith("$lit$")||f.startsWith(it)){const p=c[o++];if(d.push(f),p!==void 0){const u=n.getAttribute(p.toLowerCase()+"$lit$").split(it),y=/([.?@])?(.*)/.exec(p);h.push({type:1,index:r,name:y[2],strings:u,ctor:y[1]==="."?Dn:y[1]==="?"?Un:y[1]==="@"?Wn:Me})}else h.push({type:6,index:r})}for(const f of d)n.removeAttribute(f)}if(Ti.test(n.tagName)){const d=n.textContent.split(it),f=d.length-1;if(f>0){n.textContent=Mt?Mt.emptyScript:"";for(let p=0;p<f;p++)n.append(d[p],Qt()),Ct.nextNode(),h.push({type:2,index:++r});n.append(d[f],Qt())}}}else if(n.nodeType===8)if(n.data===Si)h.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(it,d+1))!==-1;)h.push({type:7,index:r}),d+=it.length-1}r++}}static createElement(t,e){const i=St.createElement("template");return i.innerHTML=t,i}}function Et(s,t,e=s,i){var n,r,o,a;if(t===Ot)return t;let h=i!==void 0?(n=e._$Co)===null||n===void 0?void 0:n[i]:e._$Cl;const l=Yt(t)?void 0:t._$litDirective$;return(h==null?void 0:h.constructor)!==l&&((r=h==null?void 0:h._$AO)===null||r===void 0||r.call(h,!1),l===void 0?h=void 0:(h=new l(s),h._$AT(s,e,i)),i!==void 0?((o=(a=e)._$Co)!==null&&o!==void 0?o:a._$Co=[])[i]=h:e._$Cl=h),h!==void 0&&(t=Et(s,h._$AS(s,t.values),h,i)),t}class Hn{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:St).importNode(i,!0);Ct.currentNode=r;let o=Ct.nextNode(),a=0,h=0,l=n[0];for(;l!==void 0;){if(a===l.index){let c;l.type===2?c=new te(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new Vn(o,this,t)),this.u.push(c),l=n[++h]}a!==(l==null?void 0:l.index)&&(o=Ct.nextNode(),a++)}return r}p(t){let e=0;for(const i of this.u)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class te{constructor(t,e,i,n){var r;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cm=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Et(this,t,e),Yt(t)?t===P||t==null||t===""?(this._$AH!==P&&this._$AR(),this._$AH=P):t!==this._$AH&&t!==Ot&&this.g(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ln(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==P&&Yt(this._$AH)?this._$AA.nextSibling.data=t:this.T(St.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=Xt.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.p(i);else{const o=new Hn(r,this),a=o.v(this.options);o.p(i),this.T(a),this._$AH=o}}_$AC(t){let e=ji.get(t.strings);return e===void 0&&ji.set(t.strings,e=new Xt(t)),e}k(t){Oi(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new te(this.O(Qt()),this.O(Qt()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cm=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class Me{constructor(t,e,i,n,r){this.type=1,this._$AH=P,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(r===void 0)t=Et(this,t,e,0),o=!Yt(t)||t!==this._$AH&&t!==Ot,o&&(this._$AH=t);else{const a=t;let h,l;for(t=r[0],h=0;h<r.length-1;h++)l=Et(this,a[i+h],e,h),l===Ot&&(l=this._$AH[h]),o||(o=!Yt(l)||l!==this._$AH[h]),l===P?t=P:t!==P&&(t+=(l!=null?l:"")+r[h+1]),this._$AH[h]=l}o&&!n&&this.j(t)}j(t){t===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class Dn extends Me{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===P?void 0:t}}const Bn=Mt?Mt.emptyScript:"";class Un extends Me{constructor(){super(...arguments),this.type=4}j(t){t&&t!==P?this.element.setAttribute(this.name,Bn):this.element.removeAttribute(this.name)}}class Wn extends Me{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=Et(this,t,e,0))!==null&&i!==void 0?i:P)===Ot)return;const n=this._$AH,r=t===P&&n!==P||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==P&&(n===P||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Vn{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Et(this,t)}}const xs=Re.litHtmlPolyfillSupport;xs==null||xs(Xt,te),(($s=Re.litHtmlVersions)!==null&&$s!==void 0?$s:Re.litHtmlVersions=[]).push("2.4.0");const qn=(s,t,e)=>{var i,n;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new te(t.insertBefore(Qt(),a),a,void 0,e!=null?e:{})}return o._$AI(s),o};var As,Rs;class X extends Rt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=qn(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return Ot}}X.finalized=!0,X._$litElement$=!0,(As=globalThis.litElementHydrateSupport)===null||As===void 0||As.call(globalThis,{LitElement:X});const Ms=globalThis.litElementPolyfillSupport;Ms==null||Ms({LitElement:X}),((Rs=globalThis.litElementVersions)!==null&&Rs!==void 0?Rs:globalThis.litElementVersions=[]).push("3.2.2");const $=s=>t=>typeof t=="function"?((e,i)=>(customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(o){customElements.define(e,o)}}})(s,t),Fn=(s,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,s)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,s)}};function g(s){return(t,e)=>e!==void 0?((i,n,r)=>{n.constructor.createProperty(r,i)})(s,t,e):Fn(s,t)}function Gn(s){return g({...s,state:!0})}const Zn=({finisher:s,descriptor:t})=>(e,i)=>{var n;if(i===void 0){const r=(n=e.originalKey)!==null&&n!==void 0?n:e.key,o=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return s!=null&&(o.finisher=function(a){s(a,r)}),o}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,i,t(i)),s==null||s(r,i)}};function O(s,t){return Zn({descriptor:e=>{const i={get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(s))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const n=typeof e=="symbol"?Symbol():"__"+e;i.get=function(){var r,o;return this[n]===void 0&&(this[n]=(o=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(s))!==null&&o!==void 0?o:null),this[n]}}return i}})}var Ss;((Ss=window.HTMLSlotElement)===null||Ss===void 0?void 0:Ss.prototype.assignedElements)!=null;var Kn=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Qn=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};const A=k`
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`;class R extends X{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(t){this.wiredRender()}wiredRender(t=!1){if(this.svg){const e=this.canvasSize();if(!t&&e[0]===this.lastSize[0]&&e[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${e[0]}`),this.svg.setAttribute("height",`${e[1]}`),this.draw(this.svg,e),this.lastSize=e,this.classList.add("wired-rendered")}}fire(t,e){Os(this,t,e)}}Kn([O("svg"),Qn("design:type",SVGSVGElement)],R.prototype,"svg",void 0);function Yn(){return Math.floor(Math.random()*2**31)}function Os(s,t,e){s.dispatchEvent(new CustomEvent(t,{composed:!0,bubbles:!0,detail:e}))}function Cs(s,t,e){if(s&&s.length){const[i,n]=t,r=Math.PI/180*e,o=Math.cos(r),a=Math.sin(r);s.forEach(h=>{const[l,c]=h;h[0]=(l-i)*o-(c-n)*a+i,h[1]=(l-i)*a+(c-n)*o+n})}}function Jn(s,t,e){const i=[];s.forEach(n=>i.push(...n)),Cs(i,t,e)}function Xn(s){const t=s[0],e=s[1];return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}function Li(s,t){const e=t.hachureAngle+90;let i=t.hachureGap;i<0&&(i=t.strokeWidth*4),i=Math.max(i,.1);const n=[0,0];if(e)for(const o of s)Cs(o,n,e);const r=tr(s,i);if(e){for(const o of s)Cs(o,n,-e);Jn(r,n,-e)}return r}function tr(s,t){const e=[];for(const a of s){const h=[...a];h[0].join(",")!==h[h.length-1].join(",")&&h.push([h[0][0],h[0][1]]),h.length>2&&e.push(h)}const i=[];t=Math.max(t,.1);const n=[];for(const a of e)for(let h=0;h<a.length-1;h++){const l=a[h],c=a[h+1];if(l[1]!==c[1]){const d=Math.min(l[1],c[1]);n.push({ymin:d,ymax:Math.max(l[1],c[1]),x:d===l[1]?l[0]:c[0],islope:(c[0]-l[0])/(c[1]-l[1])})}}if(n.sort((a,h)=>a.ymin<h.ymin?-1:a.ymin>h.ymin?1:a.x<h.x?-1:a.x>h.x?1:a.ymax===h.ymax?0:(a.ymax-h.ymax)/Math.abs(a.ymax-h.ymax)),!n.length)return i;let r=[],o=n[0].ymin;for(;r.length||n.length;){if(n.length){let a=-1;for(let h=0;h<n.length&&!(n[h].ymin>o);h++)a=h;n.splice(0,a+1).forEach(h=>{r.push({s:o,edge:h})})}if(r=r.filter(a=>!(a.edge.ymax<=o)),r.sort((a,h)=>a.edge.x===h.edge.x?0:(a.edge.x-h.edge.x)/Math.abs(a.edge.x-h.edge.x)),r.length>1)for(let a=0;a<r.length;a=a+2){const h=a+1;if(h>=r.length)break;const l=r[a].edge,c=r[h].edge;i.push([[Math.round(l.x),o],[Math.round(c.x),o]])}o+=t,r.forEach(a=>{a.edge.x=a.edge.x+t*a.edge.islope})}return i}class er{constructor(t){this.helper=t}fillPolygons(t,e){return this._fillPolygons(t,e)}_fillPolygons(t,e){const i=Li(t,e);return{type:"fillSketch",ops:this.renderLines(i,e)}}renderLines(t,e){const i=[];for(const n of t)i.push(...this.helper.doubleLineOps(n[0][0],n[0][1],n[1][0],n[1][1],e));return i}}class sr extends er{fillPolygons(t,e){let i=e.hachureGap;i<0&&(i=e.strokeWidth*4),i=Math.max(i,.1);const n=Object.assign({},e,{hachureGap:i}),r=Li(t,n),o=Math.PI/180*e.hachureAngle,a=[],h=i*.5*Math.cos(o),l=i*.5*Math.sin(o);for(const[c,d]of r)Xn([c,d])&&a.push([[c[0]-h,c[1]+l],[...d]],[[c[0]+h,c[1]-l],[...d]]);return{type:"fillSketch",ops:this.renderLines(a,e)}}}class ir{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}function Ii(s,t,e,i,n){return{type:"path",ops:ee(s,t,e,i,n)}}function nr(s,t,e){const i=(s||[]).length;if(i>2){const n=[];for(let r=0;r<i-1;r++)n.push(...ee(s[r][0],s[r][1],s[r+1][0],s[r+1][1],e));return t&&n.push(...ee(s[i-1][0],s[i-1][1],s[0][0],s[0][1],e)),{type:"path",ops:n}}else if(i===2)return Ii(s[0][0],s[0][1],s[1][0],s[1][1],e);return{type:"path",ops:[]}}function Ni(s,t){return nr(s,!0,t)}function rr(s,t,e,i,n){const r=[[s,t],[s+e,t],[s+e,t+i],[s,t+i]];return Ni(r,n)}function Hi(s,t,e,i,n){const r=Di(e,i,n);return or(s,t,n,r).opset}function Di(s,t,e){const i=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(s/2,2)+Math.pow(t/2,2))/2)),n=Math.ceil(Math.max(e.curveStepCount,e.curveStepCount/Math.sqrt(200)*i)),r=Math.PI*2/n;let o=Math.abs(s/2),a=Math.abs(t/2);const h=1-e.curveFitting;return o+=M(o*h,e),a+=M(a*h,e),{increment:r,rx:o,ry:a}}function or(s,t,e,i){const[n,r]=Vi(i.increment,s,t,i.rx,i.ry,1,i.increment*Es(.1,Es(.4,1,e),e),e);let o=Wi(n,null,e);if(!e.disableMultiStroke&&e.roughness!==0){const[a]=Vi(i.increment,s,t,i.rx,i.ry,1.5,0,e),h=Wi(a,null,e);o=o.concat(h)}return{estimatedPoints:r,opset:{type:"path",ops:o}}}function ar(s,t,e,i,n){return ee(s,t,e,i,n,!0)}function Bi(s){return s.randomizer||(s.randomizer=new ir(s.seed||0)),s.randomizer.next()}function Es(s,t,e,i=1){return e.roughness*i*(Bi(e)*(t-s)+s)}function M(s,t,e=1){return Es(-s,s,t,e)}function ee(s,t,e,i,n,r=!1){const o=r?n.disableMultiStrokeFill:n.disableMultiStroke,a=Ui(s,t,e,i,n,!0,!1);if(o)return a;const h=Ui(s,t,e,i,n,!0,!0);return a.concat(h)}function Ui(s,t,e,i,n,r,o){const a=Math.pow(s-e,2)+Math.pow(t-i,2),h=Math.sqrt(a);let l=1;h<200?l=1:h>500?l=.4:l=-.0016668*h+1.233334;let c=n.maxRandomnessOffset||0;c*c*100>a&&(c=h/10);const d=c/2,f=.2+Bi(n)*.2;let p=n.bowing*n.maxRandomnessOffset*(i-t)/200,u=n.bowing*n.maxRandomnessOffset*(s-e)/200;p=M(p,n,l),u=M(u,n,l);const y=[],v=()=>M(d,n,l),b=()=>M(c,n,l),w=n.preserveVertices;return r&&(o?y.push({op:"move",data:[s+(w?0:v()),t+(w?0:v())]}):y.push({op:"move",data:[s+(w?0:M(c,n,l)),t+(w?0:M(c,n,l))]})),o?y.push({op:"bcurveTo",data:[p+s+(e-s)*f+v(),u+t+(i-t)*f+v(),p+s+2*(e-s)*f+v(),u+t+2*(i-t)*f+v(),e+(w?0:v()),i+(w?0:v())]}):y.push({op:"bcurveTo",data:[p+s+(e-s)*f+b(),u+t+(i-t)*f+b(),p+s+2*(e-s)*f+b(),u+t+2*(i-t)*f+b(),e+(w?0:b()),i+(w?0:b())]}),y}function Wi(s,t,e){const i=s.length,n=[];if(i>3){const r=[],o=1-e.curveTightness;n.push({op:"move",data:[s[1][0],s[1][1]]});for(let a=1;a+2<i;a++){const h=s[a];r[0]=[h[0],h[1]],r[1]=[h[0]+(o*s[a+1][0]-o*s[a-1][0])/6,h[1]+(o*s[a+1][1]-o*s[a-1][1])/6],r[2]=[s[a+1][0]+(o*s[a][0]-o*s[a+2][0])/6,s[a+1][1]+(o*s[a][1]-o*s[a+2][1])/6],r[3]=[s[a+1][0],s[a+1][1]],n.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]})}if(t&&t.length===2){const a=e.maxRandomnessOffset;n.push({op:"lineTo",data:[t[0]+M(a,e),t[1]+M(a,e)]})}}else i===3?(n.push({op:"move",data:[s[1][0],s[1][1]]}),n.push({op:"bcurveTo",data:[s[1][0],s[1][1],s[2][0],s[2][1],s[2][0],s[2][1]]})):i===2&&n.push(...ee(s[0][0],s[0][1],s[1][0],s[1][1],e));return n}function Vi(s,t,e,i,n,r,o,a){const h=a.roughness===0,l=[],c=[];if(h){s=s/4,c.push([t+i*Math.cos(-s),e+n*Math.sin(-s)]);for(let d=0;d<=Math.PI*2;d=d+s){const f=[t+i*Math.cos(d),e+n*Math.sin(d)];l.push(f),c.push(f)}c.push([t+i*Math.cos(0),e+n*Math.sin(0)]),c.push([t+i*Math.cos(s),e+n*Math.sin(s)])}else{const d=M(.5,a)-Math.PI/2;c.push([M(r,a)+t+.9*i*Math.cos(d-s),M(r,a)+e+.9*n*Math.sin(d-s)]);const f=Math.PI*2+d-.01;for(let p=d;p<f;p=p+s){const u=[M(r,a)+t+i*Math.cos(p),M(r,a)+e+n*Math.sin(p)];l.push(u),c.push(u)}c.push([M(r,a)+t+i*Math.cos(d+Math.PI*2+o*.5),M(r,a)+e+n*Math.sin(d+Math.PI*2+o*.5)]),c.push([M(r,a)+t+.98*i*Math.cos(d+o),M(r,a)+e+.98*n*Math.sin(d+o)]),c.push([M(r,a)+t+.9*i*Math.cos(d+o*.5),M(r,a)+e+.9*n*Math.sin(d+o*.5)])}return[c,l]}const hr={randOffset(s,t){return s},randOffsetWithRange(s,t,e){return(s+t)/2},ellipse(s,t,e,i,n){return Hi(s,t,e,i,n)},doubleLineOps(s,t,e,i,n){return ar(s,t,e,i,n)}};function Pt(s){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:s}}function lr(s,t){let e="";for(const i of s.ops){const n=i.data;switch(i.op){case"move":if(t&&e)break;e+=`M${n[0]} ${n[1]} `;break;case"bcurveTo":e+=`C${n[0]} ${n[1]}, ${n[2]} ${n[3]}, ${n[4]} ${n[5]} `;break;case"lineTo":e+=`L${n[0]} ${n[1]} `;break}}return e.trim()}function zt(s,t){const e=document.createElementNS("http://www.w3.org/2000/svg",s);if(t)for(const i in t)e.setAttributeNS(null,i,t[i]);return e}function se(s,t,e=!1){const i=zt("path",{d:lr(s,e)});return t&&t.appendChild(i),i}function I(s,t,e,i,n,r){return se(rr(t+2,e+2,i-4,n-4,Pt(r)),s)}function S(s,t,e,i,n,r){return se(Ii(t,e,i,n,Pt(r)),s)}function cr(s,t,e){return se(Ni(t,Pt(e)),s,!0)}function lt(s,t,e,i,n,r){return i=Math.max(i>10?i-4:i-1,1),n=Math.max(n>10?n-4:n-1,1),se(Hi(t,e,i,n,Pt(r)),s)}function Se(s,t){const e=new sr(hr).fillPolygon(s,Pt(t));return se(e,null)}function Ps(s,t,e,i,n){const r=Pt(n),o=Di(e,i,r),a=[];let h=0;for(;h<=Math.PI*2;)a.push([s+o.rx*Math.cos(h),t+o.ry*Math.sin(h)]),h+=o.increment;return Se(a,n)}var Oe=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ce=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let ie=class extends R{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[A,k`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
      `]}render(){return _`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){const s=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),e=s.width+(t-1)*2,i=s.height+(t-1)*2;return[e,i]}return this.lastSize}draw(s,t){const e=Math.min(Math.max(1,this.elevation),5),i={width:t[0]-(e-1)*2,height:t[1]-(e-1)*2};I(s,0,0,i.width,i.height,this.seed);for(let n=1;n<e;n++)S(s,n*2,i.height+n*2,i.width+n*2,i.height+n*2,this.seed).style.opacity=`${(75-n*10)/100}`,S(s,i.width+n*2,i.height+n*2,i.width+n*2,n*2,this.seed).style.opacity=`${(75-n*10)/100}`,S(s,n*2,i.height+n*2,i.width+n*2,i.height+n*2,this.seed).style.opacity=`${(75-n*10)/100}`,S(s,i.width+n*2,i.height+n*2,i.width+n*2,n*2,this.seed).style.opacity=`${(75-n*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};Oe([g({type:Number}),Ce("design:type",Object)],ie.prototype,"elevation",void 0),Oe([g({type:Boolean,reflect:!0}),Ce("design:type",Object)],ie.prototype,"disabled",void 0),Oe([O("button"),Ce("design:type",HTMLButtonElement)],ie.prototype,"button",void 0),ie=Oe([$("wired-button"),Ce("design:paramtypes",[])],ie);var zs=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ts=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let ne=class extends R{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[A,k`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        path.cardFill {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return _`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(s){const t=s.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const s=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),e=s.width+(t-1)*2,i=s.height+(t-1)*2;return[e,i]}draw(s,t){const e=Math.min(Math.max(1,this.elevation),5),i={width:t[0]-(e-1)*2,height:t[1]-(e-1)*2};if(this.fill&&this.fill.trim()){const n=Se([[2,2],[i.width-4,2],[i.width-2,i.height-4],[2,i.height-4]],this.seed);n.classList.add("cardFill"),s.style.setProperty("--wired-card-background-fill",this.fill.trim()),s.appendChild(n)}I(s,2,2,i.width-4,i.height-4,this.seed);for(let n=1;n<e;n++)S(s,n*2,i.height-4+n*2,i.width-4+n*2,i.height-4+n*2,this.seed).style.opacity=`${(85-n*10)/100}`,S(s,i.width-4+n*2,i.height-4+n*2,i.width-4+n*2,n*2,this.seed).style.opacity=`${(85-n*10)/100}`,S(s,n*2,i.height-4+n*2,i.width-4+n*2,i.height-4+n*2,this.seed).style.opacity=`${(85-n*10)/100}`,S(s,i.width-4+n*2,i.height-4+n*2,i.width-4+n*2,n*2,this.seed).style.opacity=`${(85-n*10)/100}`}};zs([g({type:Number}),Ts("design:type",Object)],ne.prototype,"elevation",void 0),zs([g({type:String}),Ts("design:type",String)],ne.prototype,"fill",void 0),ne=zs([$("wired-card"),Ts("design:paramtypes",[])],ne);var re=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ee=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let Tt=class extends R{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[A,k`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: var(--wired-checkbox-default-swidth, 0.7);
      }
      g path {
        stroke-width: 2.5;
      }
      #container.focused {
        --wired-checkbox-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(s=!1){super.wiredRender(s),this.refreshCheckVisibility()}render(){return _`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(s,t){I(s,0,0,t[0],t[1],this.seed),this.svgCheck=zt("g"),s.appendChild(this.svgCheck),S(this.svgCheck,t[0]*.3,t[1]*.4,t[0]*.5,t[1]*.7,this.seed),S(this.svgCheck,t[0]*.5,t[1]*.7,t[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};re([g({type:Boolean}),Ee("design:type",Object)],Tt.prototype,"checked",void 0),re([g({type:Boolean,reflect:!0}),Ee("design:type",Object)],Tt.prototype,"disabled",void 0),re([Gn(),Ee("design:type",Object)],Tt.prototype,"focused",void 0),re([O("input"),Ee("design:type",HTMLInputElement)],Tt.prototype,"input",void 0),Tt=re([$("wired-checkbox")],Tt);var Pe=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},js=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let oe=class extends R{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[A,k`
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]}render(){return _`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){const s=this.getBoundingClientRect();return[s.width,s.height]}draw(s,t){const e=Se([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);s.appendChild(e)}};Pe([g(),js("design:type",Object)],oe.prototype,"value",void 0),Pe([g(),js("design:type",Object)],oe.prototype,"name",void 0),Pe([g({type:Boolean}),js("design:type",Object)],oe.prototype,"selected",void 0),oe=Pe([$("wired-item")],oe);var jt=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ae=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let ct=class extends X{constructor(){super(...arguments),this.disabled=!1,this.seed=Yn(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return k`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `}render(){return _`
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",s=>{switch(s.keyCode){case 37:case 38:s.preventDefault(),this.selectPrevious();break;case 39:case 40:s.preventDefault(),this.selectNext();break;case 27:s.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:s.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:s.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(s){s.has("disabled")&&this.refreshDisabledState();const t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);const e=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",`${e.width}`),t.setAttribute("height",`${e.height}`);const i=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=i.height+"px",I(t,0,0,i.width,i.height,this.seed);const n=i.width-4;I(t,n,0,34,i.height,this.seed);const r=Math.max(0,Math.abs((i.height-24)/2)),o=cr(t,[[n+8,5+r],[n+26,5+r],[n+17,r+Math.min(i.height,18)]],this.seed);if(o.style.fill="currentColor",o.style.pointerEvents=this.disabled?"none":"auto",o.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];const a=this.shadowRoot.getElementById("slot").assignedNodes();if(a&&a.length)for(let h=0;h<a.length;h++){const l=a[h];l.tagName==="WIRED-ITEM"&&(l.setAttribute("role","option"),this.itemNodes.push(l))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const s=this.shadowRoot.getElementById("slot").assignedNodes();if(s){let t=null;for(let e=0;e<s.length;e++){const i=s[e];if(i.tagName==="WIRED-ITEM"){const n=i.value||i.getAttribute("value")||"";if(this.selected&&n===this.selected){t=i;break}}}this.lastSelectedItem=t||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),t?this.value={value:t.value||"",text:t.textContent||""}:this.value=void 0}}setCardShowing(s){this.card&&(this.cardShowing=s,this.card.style.display=s?"":"none",s&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(t=>t.nodeType===Node.ELEMENT_NODE).forEach(t=>{const e=t;e.requestUpdate&&e.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(s){s.stopPropagation(),this.selected=s.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){Os(this,"selected",{selected:this.selected})}selectPrevious(){const s=this.itemNodes;if(s.length){let t=-1;for(let e=0;e<s.length;e++)if(s[e]===this.lastSelectedItem){t=e;break}t<0?t=0:t===0?t=s.length-1:t--,this.selected=s[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const s=this.itemNodes;if(s.length){let t=-1;for(let e=0;e<s.length;e++)if(s[e]===this.lastSelectedItem){t=e;break}t<0||t>=s.length-1?t=0:t++,this.selected=s[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(s){s.stopPropagation(),this.setCardShowing(!this.cardShowing)}};jt([g({type:Object}),ae("design:type",Object)],ct.prototype,"value",void 0),jt([g({type:String,reflect:!0}),ae("design:type",String)],ct.prototype,"selected",void 0),jt([g({type:Boolean,reflect:!0}),ae("design:type",Object)],ct.prototype,"disabled",void 0),jt([O("svg"),ae("design:type",SVGSVGElement)],ct.prototype,"svg",void 0),jt([O("#card"),ae("design:type",HTMLDivElement)],ct.prototype,"card",void 0),ct=jt([$("wired-combo")],ct);var ze=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ls=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let he=class extends X{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return k`
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: var(--wired-dialog-z-index, 100);
      }
      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      #overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(150px);
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }
      wired-card {
        display: inline-block;
        background: white;
        text-align: left;
      }

      :host([open]) #container {
        pointer-events: auto;
      }
      :host([open]) #container::before {
        opacity: 1;
      }
      :host([open]) #overlay {
        opacity: 1;
        transform: none;
      }
    `}render(){return _`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};ze([g({type:Number}),Ls("design:type",Object)],he.prototype,"elevation",void 0),ze([g({type:Boolean,reflect:!0}),Ls("design:type",Object)],he.prototype,"open",void 0),ze([O("wired-card"),Ls("design:type",ne)],he.prototype,"card",void 0),he=ze([$("wired-dialog")],he);var qi=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},dr=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let Is=class extends R{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[A,k`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return _`<svg></svg>`}canvasSize(){const s=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[s.width,t*6]}draw(s,t){const e=Math.min(Math.max(1,this.elevation),5);for(let i=0;i<e;i++)S(s,0,i*6+3,t[0],i*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};qi([g({type:Number}),dr("design:type",Object)],Is.prototype,"elevation",void 0),Is=qi([$("wired-divider")],Is);var Ns=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Fi=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let Te=class extends R{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[A,k`
        :host {
          display: inline-block;
          font-size: 14px;
          color: #fff;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 16px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }
        path {
          stroke: var(--wired-fab-bg-color, #018786);
          stroke-width: 3;
          fill: transparent;
        }

        button:focus ::slotted(*) {
          opacity: 1;
        }
        button:active ::slotted(*) {
          opacity: 1;
          transform: scale(1.15);
        }
      `]}render(){return _`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){const s=this.button.getBoundingClientRect();return[s.width,s.height]}return this.lastSize}draw(s,t){const e=Math.min(t[0],t[1]),i=Ps(e/2,e/2,e,e,this.seed);s.appendChild(i)}};Ns([g({type:Boolean,reflect:!0}),Fi("design:type",Object)],Te.prototype,"disabled",void 0),Ns([O("button"),Fi("design:type",HTMLButtonElement)],Te.prototype,"button",void 0),Te=Ns([$("wired-fab")],Te);var Hs=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Gi=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let je=class extends R{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[A,k`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
        }
      `]}render(){return _`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){const s=this.button.getBoundingClientRect();return[s.width,s.height]}return this.lastSize}draw(s,t){const e=Math.min(t[0],t[1]);s.setAttribute("width",`${e}`),s.setAttribute("height",`${e}`),lt(s,e/2,e/2,e,e,this.seed)}};Hs([g({type:Boolean,reflect:!0}),Gi("design:type",Object)],je.prototype,"disabled",void 0),Hs([O("button"),Gi("design:type",HTMLButtonElement)],je.prototype,"button",void 0),je=Hs([$("wired-icon-button")],je);var Ds=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Bs=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};const pr="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";let Le=class extends R{constructor(){super(),this.elevation=1,this.src=pr,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[A,k`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px;
        }
        img {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
      `]}render(){return _`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){const s=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),e=s.width+(t-1)*2,i=s.height+(t-1)*2;return[e,i]}draw(s,t){const e=Math.min(Math.max(1,this.elevation),5),i={width:t[0]-(e-1)*2,height:t[1]-(e-1)*2};I(s,2,2,i.width-4,i.height-4,this.seed);for(let n=1;n<e;n++)S(s,n*2,i.height-4+n*2,i.width-4+n*2,i.height-4+n*2,this.seed).style.opacity=`${(85-n*10)/100}`,S(s,i.width-4+n*2,i.height-4+n*2,i.width-4+n*2,n*2,this.seed).style.opacity=`${(85-n*10)/100}`,S(s,n*2,i.height-4+n*2,i.width-4+n*2,i.height-4+n*2,this.seed).style.opacity=`${(85-n*10)/100}`,S(s,i.width-4+n*2,i.height-4+n*2,i.width-4+n*2,n*2,this.seed).style.opacity=`${(85-n*10)/100}`}};Ds([g({type:Number}),Bs("design:type",Object)],Le.prototype,"elevation",void 0),Ds([g({type:String}),Bs("design:type",String)],Le.prototype,"src",void 0),Le=Ds([$("wired-image"),Bs("design:paramtypes",[])],Le);var z=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},T=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let C=class extends R{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[A,k`
        :host {
          display: inline-block;
          position: relative;
          padding: 5px;
          font-family: sans-serif;
          width: 150px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        input:focus + div path {
          stroke-width: 1.5;
        }
      `]}render(){return _`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){const s=this.input;return s&&s.value||""}set value(s){if(this.shadowRoot){const t=this.input;if(t){t.value=s;return}}this.pendingValue=s}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const s=this.getBoundingClientRect();return[s.width,s.height]}draw(s,t){I(s,2,2,t[0]-2,t[1]-2,this.seed)}refire(s){s.stopPropagation(),this.fire(s.type,{sourceEvent:s})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};z([g({type:Boolean,reflect:!0}),T("design:type",Object)],C.prototype,"disabled",void 0),z([g({type:String}),T("design:type",Object)],C.prototype,"placeholder",void 0),z([g({type:String}),T("design:type",String)],C.prototype,"name",void 0),z([g({type:String}),T("design:type",String)],C.prototype,"min",void 0),z([g({type:String}),T("design:type",String)],C.prototype,"max",void 0),z([g({type:String}),T("design:type",String)],C.prototype,"step",void 0),z([g({type:String}),T("design:type",Object)],C.prototype,"type",void 0),z([g({type:String}),T("design:type",Object)],C.prototype,"autocomplete",void 0),z([g({type:String}),T("design:type",Object)],C.prototype,"autocapitalize",void 0),z([g({type:String}),T("design:type",Object)],C.prototype,"autocorrect",void 0),z([g({type:Boolean}),T("design:type",Object)],C.prototype,"required",void 0),z([g({type:Boolean}),T("design:type",Object)],C.prototype,"autofocus",void 0),z([g({type:Boolean}),T("design:type",Object)],C.prototype,"readonly",void 0),z([g({type:Number}),T("design:type",Number)],C.prototype,"minlength",void 0),z([g({type:Number}),T("design:type",Number)],C.prototype,"maxlength",void 0),z([g({type:Number}),T("design:type",Number)],C.prototype,"size",void 0),z([O("input"),T("design:type",HTMLInputElement)],C.prototype,"textInput",void 0),C=z([$("wired-input"),T("design:paramtypes",[])],C);var le=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ie=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let Lt=class extends R{constructor(){super(...arguments),this.elevation=1}static get styles(){return[A,k`
        :host {
          display: inline-block;
          position: relative;
        }
        a, a:hover, a:visited {
          color: inherit;
          outline: none;
          display: inline-block;
          white-space: nowrap;
          text-decoration: none;
          border: none;
        }
        path {
          stroke: var(--wired-link-decoration-color, blue);
          stroke-opacity: 0.45;
        }
        a:focus path {
          stroke-opacity: 1;
        }
      `]}render(){return _`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){const s=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),e=s.width,i=s.height+(t-1)*2;return[e,i]}return this.lastSize}draw(s,t){const e=Math.min(Math.max(1,this.elevation),5),i={width:t[0],height:t[1]-(e-1)*2};for(let n=0;n<e;n++)S(s,0,i.height+n*2-2,i.width,i.height+n*2-2,this.seed),S(s,0,i.height+n*2-2,i.width,i.height+n*2-2,this.seed)}};le([g({type:Number}),Ie("design:type",Object)],Lt.prototype,"elevation",void 0),le([g({type:String}),Ie("design:type",String)],Lt.prototype,"href",void 0),le([g({type:String}),Ie("design:type",String)],Lt.prototype,"target",void 0),le([O("a"),Ie("design:type",HTMLAnchorElement)],Lt.prototype,"anchor",void 0),Lt=le([$("wired-link")],Lt);var Ne=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Us=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let ce=class extends R{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[A,k`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        padding: 5px;
        outline: none;
      }
      :host(:focus) path {
        stroke-width: 1.5;
      }
      ::slotted(wired-item) {
        display: block;
      }
      :host(.wired-horizontal) ::slotted(wired-item) {
        display: inline-block;
      }
      `]}render(){return _`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",s=>{switch(s.keyCode){case 37:case 38:s.preventDefault(),this.selectPrevious();break;case 39:case 40:s.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];const s=this.shadowRoot.getElementById("slot").assignedNodes();if(s&&s.length)for(let t=0;t<s.length;t++){const e=s[t];e.tagName==="WIRED-ITEM"&&(e.setAttribute("role","option"),this.itemNodes.push(e))}}}onItemClick(s){s.stopPropagation(),this.selected=s.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));const s=this.shadowRoot.getElementById("slot").assignedNodes();if(s){let t=null;for(let e=0;e<s.length;e++){const i=s[e];if(i.tagName==="WIRED-ITEM"){const n=i.value||"";if(this.selected&&n===this.selected){t=i;break}}}this.lastSelectedItem=t||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),t?this.value={value:t.value||"",text:t.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){const s=this.itemNodes;if(s.length){let t=-1;for(let e=0;e<s.length;e++)if(s[e]===this.lastSelectedItem){t=e;break}t<0?t=0:t===0?t=s.length-1:t--,this.selected=s[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){const s=this.itemNodes;if(s.length){let t=-1;for(let e=0;e<s.length;e++)if(s[e]===this.lastSelectedItem){t=e;break}t<0||t>=s.length-1?t=0:t++,this.selected=s[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){const s=this.getBoundingClientRect();return[s.width,s.height]}draw(s,t){I(s,0,0,t[0],t[1],this.seed)}};Ne([g({type:Object}),Us("design:type",Object)],ce.prototype,"value",void 0),Ne([g({type:String}),Us("design:type",String)],ce.prototype,"selected",void 0),Ne([g({type:Boolean}),Us("design:type",Object)],ce.prototype,"horizontal",void 0),ce=Ne([$("wired-listbox")],ce);var de=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},He=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let dt=class extends R{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[A,k`
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 14px);
        background: var(--wired-progress-label-background, rgba(255,255,255,0.9));
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 1.25px;
      }
      path.progbox {
        stroke: var(--wired-progress-color, rgba(0, 0, 200, 0.8));
        stroke-width: 2.75;
        fill: none;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
      `]}render(){return _`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(s=!1){super.wiredRender(s),this.refreshProgressFill()}canvasSize(){const s=this.getBoundingClientRect();return[s.width,s.height]}draw(s,t){I(s,2,2,t[0]-2,t[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let s=0;const t=this.getBoundingClientRect();if(this.max>this.min){s=(this.value-this.min)/(this.max-this.min);const e=t.width*Math.max(0,Math.min(s,100));this.progBox=Se([[0,0],[e,0],[e,t.height],[0,t.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};de([g({type:Number}),He("design:type",Object)],dt.prototype,"value",void 0),de([g({type:Number}),He("design:type",Object)],dt.prototype,"min",void 0),de([g({type:Number}),He("design:type",Object)],dt.prototype,"max",void 0),de([g({type:Boolean}),He("design:type",Object)],dt.prototype,"percentage",void 0),dt=de([$("wired-progress")],dt);var It=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},pe=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let pt=class extends R{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[A,k`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: var(--wired-radio-default-swidth, 0.7);
      }
      g path {
        stroke-width: 0;
        fill: var(--wired-radio-icon-color, currentColor);
      }
      #container.focused {
        --wired-radio-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(s=!1){super.wiredRender(s),this.refreshCheckVisibility()}render(){return _`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(s,t){lt(s,t[0]/2,t[1]/2,t[0],t[1],this.seed),this.svgCheck=zt("g"),s.appendChild(this.svgCheck);const e=Math.max(t[0]*.6,5),i=Math.max(t[1]*.6,5);lt(this.svgCheck,t[0]/2,t[1]/2,e,i,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};It([g({type:Boolean}),pe("design:type",Object)],pt.prototype,"checked",void 0),It([g({type:Boolean,reflect:!0}),pe("design:type",Object)],pt.prototype,"disabled",void 0),It([g({type:String}),pe("design:type",String)],pt.prototype,"name",void 0),It([g(),pe("design:type",Object)],pt.prototype,"focused",void 0),It([O("input"),pe("design:type",HTMLInputElement)],pt.prototype,"input",void 0),pt=It([$("wired-radio")],pt);var Zi=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ur=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let Ws=class extends X{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return k`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return _`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(s){const t=s.detail.checked,e=s.target,i=e.name||"";t?(this.selected=t&&i||"",this.fireSelected()):e.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",s=>{switch(s.keyCode){case 37:case 38:s.preventDefault(),this.selectPrevious();break;case 39:case 40:s.preventDefault(),this.selectNext();break}})}updated(){const s=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],s&&s.length)for(let t=0;t<s.length;t++){const e=s[t];if(e.tagName==="WIRED-RADIO"){this.radioNodes.push(e);const i=e.name||"";this.selected&&i===this.selected?e.checked=!0:e.checked=!1}}}selectPrevious(){const s=this.radioNodes;if(s.length){let t=null,e=-1;if(this.selected){for(let i=0;i<s.length;i++)if(s[i].name===this.selected){e=i;break}e<0?t=s[0]:(e--,e<0&&(e=s.length-1),t=s[e])}else t=s[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){const s=this.radioNodes;if(s.length){let t=null,e=-1;if(this.selected){for(let i=0;i<s.length;i++)if(s[i].name===this.selected){e=i;break}e<0?t=s[0]:(e++,e>=s.length&&(e=0),t=s[e])}else t=s[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){Os(this,"selected",{selected:this.selected})}};Zi([g({type:String}),ur("design:type",String)],Ws.prototype,"selected",void 0),Ws=Zi([$("wired-radio-group")],Ws);var ut=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Nt=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let nt=class extends R{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[A,k`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px 40px 10px 5px;
          font-family: sans-serif;
          width: 180px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        
        input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
        input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }

        .thicker path {
          stroke-width: 1.5;
        }

        button {
          position: absolute;
          top: 0;
          right: 2px;
          width: 32px;
          height: 100%;
          box-sizing: border-box;
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          opacity: 0;
        }
      `]}render(){return _`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){const s=this.input;return s&&s.value||""}set value(s){if(this.shadowRoot){const t=this.input;t&&(t.value=s),this.refreshIconState()}else this.pendingValue=s}wiredRender(s=!1){super.wiredRender(s),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const s=this.getBoundingClientRect();return[s.width,s.height]}draw(s,t){I(s,2,2,t[0]-2,t[1]-2,this.seed),this.searchIcon=zt("g"),this.searchIcon.classList.add("thicker"),s.appendChild(this.searchIcon),lt(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20,this.seed),S(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15,this.seed),this.closeIcon=zt("g"),this.closeIcon.classList.add("thicker"),s.appendChild(this.closeIcon),S(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28,this.seed),S(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(s){this.refreshIconState(),s.stopPropagation(),this.fire(s.type,{sourceEvent:s})}};ut([g({type:Boolean,reflect:!0}),Nt("design:type",Object)],nt.prototype,"disabled",void 0),ut([g({type:String}),Nt("design:type",Object)],nt.prototype,"placeholder",void 0),ut([g({type:String}),Nt("design:type",Object)],nt.prototype,"autocomplete",void 0),ut([g({type:String}),Nt("design:type",Object)],nt.prototype,"autocorrect",void 0),ut([g({type:Boolean}),Nt("design:type",Object)],nt.prototype,"autofocus",void 0),ut([O("input"),Nt("design:type",HTMLInputElement)],nt.prototype,"textInput",void 0),nt=ut([$("wired-search-input")],nt);var Ht=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},ue=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let rt=class extends R{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[A,k`
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        box-sizing: border-box;
      }
      :host([disabled]) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
      input[type=range] {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin: 0;
        -webkit-appearance: none;
        background: transparent;
        outline: none;
        position: relative;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-moz-focus-outer {
        outline: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        margin: 0;
        height: 20px;
        width: 20px;
        line-height: 1;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        height: 20px;
        width: 20px;
        margin: 0;
        line-height: 1;
      }
      .knob{
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
      input:focus + div svg .knob {
        stroke: var(--wired-slider-knob-outline-color, #000);
        fill-opacity: 0.8;
      }
      `]}get value(){return this.input?+this.input.value:this.min}set value(s){this.input?this.input.value=`${s}`:this.pendingValue=s,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return _`
    <div id="container">
      <input type="range" 
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}">
      <div id="overlay">
        <svg></svg>
      </div>
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}onInput(s){s.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(s=!1){super.wiredRender(s),this.updateThumbPosition()}canvasSize(){const s=this.getBoundingClientRect();return[s.width,s.height]}draw(s,t){this.canvasWidth=t[0];const e=Math.round(t[1]/2);S(s,0,e,t[0],e,this.seed).classList.add("bar"),this.knob=lt(s,10,e,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){const s=+this.input.value,t=Math.max(this.step,this.max-this.min),e=(s-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${e*(this.canvasWidth-20)}px)`)}}};Ht([g({type:Number}),ue("design:type",Object)],rt.prototype,"min",void 0),Ht([g({type:Number}),ue("design:type",Object)],rt.prototype,"max",void 0),Ht([g({type:Number}),ue("design:type",Object)],rt.prototype,"step",void 0),Ht([g({type:Boolean,reflect:!0}),ue("design:type",Object)],rt.prototype,"disabled",void 0),Ht([O("input"),ue("design:type",HTMLInputElement)],rt.prototype,"input",void 0),rt=Ht([$("wired-slider")],rt);var Vs=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Ki=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let De=class extends R{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[A,k`
        :host {
          display: inline-block;
          position: relative;
        }
        path {
          stroke: currentColor;
          stroke-opacity: 0.65;
          stroke-width: 1.5;
          fill: none;
        }
        .knob {
          stroke-width: 2.8 !important;
          stroke-opacity: 1;
        }
      `]}render(){return _`<svg></svg>`}canvasSize(){return[76,76]}draw(s,t){lt(s,t[0]/2,t[1]/2,Math.floor(t[0]*.8),Math.floor(.8*t[1]),this.seed),this.knob=Ps(0,0,20,20,this.seed),this.knob.classList.add("knob"),s.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){const s=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${s[0]}px, ${s[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(s=>this.tick(s))}tick(s){this.spinning?(this.timerstart||(this.timerstart=s),this.value=Math.min(1,(s-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};Vs([g({type:Boolean}),Ki("design:type",Object)],De.prototype,"spinning",void 0),Vs([g({type:Number}),Ki("design:type",Object)],De.prototype,"duration",void 0),De=Vs([$("wired-spinner")],De);var qs=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Fs=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let Be=class extends R{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[A,k`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return _`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){const s=this.getBoundingClientRect();return[s.width,s.height]}draw(s,t){I(s,2,2,t[0]-4,t[1]-4,this.seed)}};qs([g({type:String}),Fs("design:type",Object)],Be.prototype,"name",void 0),qs([g({type:String}),Fs("design:type",Object)],Be.prototype,"label",void 0),Be=qs([$("wired-tab"),Fs("design:paramtypes",[])],Be);var Gs=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Qi=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let Ue=class extends X{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[A,k`
        :host {
          display: block;
          opacity: 1;
        }
        ::slotted(.hidden) {
          display: none !important;
        }
    
        :host ::slotted(.hidden) {
          display: none !important;
        }
        #bar {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }
      `]}render(){return _`
    <div id="bar">
      ${this.pages.map(s=>_`
      <wired-item role="tab" .value="${s.name}" .selected="${s.name===this.selected}" ?aria-selected="${s.name===this.selected}"
        @click="${()=>this.selected=s.name}">${s.label||s.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){const s=this.slotElement.assignedNodes();if(s&&s.length){for(let t=0;t<s.length;t++){const e=s[t];if(e.nodeType===Node.ELEMENT_NODE&&e.tagName.toLowerCase()==="wired-tab"){const i=e;this.pages.push(i);const n=i.getAttribute("name")||"";n&&n.trim().split(" ").forEach(r=>{r&&this.pageMap.set(r,i)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",s=>{switch(s.keyCode){case 37:case 38:s.preventDefault(),this.selectPrevious();break;case 39:case 40:s.preventDefault(),this.selectNext();break}})}updated(){const s=this.getElement();for(let t=0;t<this.pages.length;t++){const e=this.pages[t];e===s?e.classList.remove("hidden"):e.classList.add("hidden")}this.current=s||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let s;return this.selected&&(s=this.pageMap.get(this.selected)),s||(s=this.pages[0]),s||null}selectPrevious(){const s=this.pages;if(s.length){let t=-1;for(let e=0;e<s.length;e++)if(s[e]===this.current){t=e;break}t<0?t=0:t===0?t=s.length-1:t--,this.selected=s[t].name||""}}selectNext(){const s=this.pages;if(s.length){let t=-1;for(let e=0;e<s.length;e++)if(s[e]===this.current){t=e;break}t<0||t>=s.length-1?t=0:t++,this.selected=s[t].name||""}}};Gs([g({type:String}),Qi("design:type",String)],Ue.prototype,"selected",void 0),Gs([O("slot"),Qi("design:type",HTMLSlotElement)],Ue.prototype,"slotElement",void 0),Ue=Gs([$("wired-tabs")],Ue);var D=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},W=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let N=class extends R{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[A,k`
        :host {
          display: inline-block;
          position: relative;
          font-family: sans-serif;
          width: 400px;
          outline: none;
          padding: 4px;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        textarea {
          position: relative;
          outline: none;
          border: none;
          resize: none;
          background: inherit;
          color: inherit;
          width: 100%;
          font-size: inherit;
          font-family: inherit;
          line-height: inherit;
          text-align: inherit;
          padding: 10px;
          box-sizing: border-box;
        }
      `]}render(){return _`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){const s=this.textarea;return s&&s.value||""}set value(s){if(this.shadowRoot){const t=this.textarea;if(t){t.value=s;return}}this.pendingValue=s}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){const s=this.getBoundingClientRect();return[s.width,s.height]}draw(s,t){I(s,4,4,t[0]-4,t[1]-4,this.seed)}refire(s){s.stopPropagation(),this.fire(s.type,{sourceEvent:s})}};D([g({type:Boolean,reflect:!0}),W("design:type",Object)],N.prototype,"disabled",void 0),D([g({type:Number}),W("design:type",Object)],N.prototype,"rows",void 0),D([g({type:Number}),W("design:type",Object)],N.prototype,"maxrows",void 0),D([g({type:String}),W("design:type",Object)],N.prototype,"autocomplete",void 0),D([g({type:Boolean}),W("design:type",Object)],N.prototype,"autofocus",void 0),D([g({type:String}),W("design:type",Object)],N.prototype,"inputmode",void 0),D([g({type:String}),W("design:type",Object)],N.prototype,"placeholder",void 0),D([g({type:Boolean}),W("design:type",Object)],N.prototype,"required",void 0),D([g({type:Boolean}),W("design:type",Object)],N.prototype,"readonly",void 0),D([g({type:Number}),W("design:type",Number)],N.prototype,"minlength",void 0),D([g({type:Number}),W("design:type",Number)],N.prototype,"maxlength",void 0),D([O("textarea"),W("design:type",HTMLTextAreaElement)],N.prototype,"textareaInput",void 0),N=D([$("wired-textarea")],N);var We=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Zs=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let fe=class extends R{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[A,k`
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
        outline: none;
      }
      :host([disabled]) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0;
      }
      .knob {
        transition: transform 0.3s ease;
      }
      .knob path {
        stroke-width: 0.7;
      }
      .knob.checked {
        transform: translateX(48px);
      }
      path.knobfill {
        stroke-width: 3 !important;
        fill: transparent;
      }
      .knob.unchecked path.knobfill {
        stroke: var(--wired-toggle-off-color, gray);
      }
      .knob.checked path.knobfill {
        stroke: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
      `]}render(){return _`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(s=!1){super.wiredRender(s),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(s,t){I(s,16,8,t[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=zt("g"),this.knob.classList.add("knob"),s.appendChild(this.knob);const e=Ps(16,16,32,32,this.seed);e.classList.add("knobfill"),this.knob.appendChild(e),lt(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){const s=this.knob.classList;this.checked?(s.remove("unchecked"),s.add("checked")):(s.remove("checked"),s.add("unchecked"))}}};We([g({type:Boolean}),Zs("design:type",Object)],fe.prototype,"checked",void 0),We([g({type:Boolean,reflect:!0}),Zs("design:type",Object)],fe.prototype,"disabled",void 0),We([O("input"),Zs("design:type",HTMLInputElement)],fe.prototype,"input",void 0),fe=We([$("wired-toggle")],fe);var G=globalThis&&globalThis.__decorate||function(s,t,e,i){var n=arguments.length,r=n<3?t:i===null?i=Object.getOwnPropertyDescriptor(t,e):i,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(s,t,e,i);else for(var a=s.length-1;a>=0;a--)(o=s[a])&&(r=(n<3?o(r):n>3?o(t,e,r):o(t,e))||r);return n>3&&r&&Object.defineProperty(t,e,r),r},Z=globalThis&&globalThis.__metadata||function(s,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(s,t)};let V=class extends R{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[A,k`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px 3px 68px;
          --wired-progress-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
          --wired-slider-knob-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
        }
        video {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
        #controls {
          position: absolute;
          pointer-events: auto;
          left: 0;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          height: 70px;
        }
        .layout.horizontal {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding: 5px 10px;
        }
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        wired-progress {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 20px;
          --wired-progress-label-color: transparent;
          --wired-progress-label-background: transparent;
        }
        wired-icon-button span {
          font-size: 16px;
          line-height: 16px;
          width: 16px;
          height: 16px;
          padding: 0px;
          font-family: sans-serif;
          display: inline-block;
        }
        #timeDisplay {
          padding: 0 20px 0 8px;
          font-size: 13px;
        }
        wired-slider {
          display: block;
          max-width: 200px;
          margin: 0 6px 0 auto;
        }
      `]}render(){return _`
    <video 
      .autoplay="${this.autoplay}"
      .loop="${this.loop}"
      .muted="${this.muted}"
      .playsinline="${this.playsinline}"
      src="${this.src}"
      @play="${()=>this.playing=!0}"
      @pause="${()=>this.playing=!1}"
      @canplay="${this.canPlay}"
      @timeupdate="${this.updateTime}">
    </video>
    <div id="overlay">
      <svg></svg>
    </div>
    <div id="controls">
      <wired-progress></wired-progress>
      <div class="horizontal layout center">
        <wired-icon-button @click="${this.togglePause}">
          <span>${this.playing?"||":"\u25B6"}</span>
        </wired-icon-button>
        <div id="timeDisplay">${this.timeDisplay}</div>
        <div class="flex">
          <wired-slider @change="${this.volumeChange}"></wired-slider>
        </div>
        <div style="width: 24px; height: 24px;">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path style="stroke: none; fill: currentColor;" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g></svg>
        </div>
      </div>
    </div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){const s=this.getBoundingClientRect();return[s.width,s.height]}draw(s,t){I(s,2,2,t[0]-4,t[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(s){const t=Math.floor(s/60),e=Math.round(s-t*60);return`${t}:${e}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};G([g({type:String}),Z("design:type",Object)],V.prototype,"src",void 0),G([g({type:Boolean}),Z("design:type",Object)],V.prototype,"autoplay",void 0),G([g({type:Boolean}),Z("design:type",Object)],V.prototype,"loop",void 0),G([g({type:Boolean}),Z("design:type",Object)],V.prototype,"muted",void 0),G([g({type:Boolean}),Z("design:type",Object)],V.prototype,"playsinline",void 0),G([g(),Z("design:type",Object)],V.prototype,"playing",void 0),G([g(),Z("design:type",Object)],V.prototype,"timeDisplay",void 0),G([O("wired-progress"),Z("design:type",dt)],V.prototype,"progressBar",void 0),G([O("wired-slider"),Z("design:type",rt)],V.prototype,"slider",void 0),G([O("video"),Z("design:type",HTMLVideoElement)],V.prototype,"video",void 0),V=G([$("wired-video"),Z("design:paramtypes",[])],V);function Ks(s,t,e){if(s&&s.length){const[i,n]=t,r=Math.PI/180*e,o=Math.cos(r),a=Math.sin(r);s.forEach(h=>{const[l,c]=h;h[0]=(l-i)*o-(c-n)*a+i,h[1]=(l-i)*a+(c-n)*o+n})}}function Ve(s){const t=s[0],e=s[1];return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}function ge(s,t){const e=t.hachureAngle+90;let i=t.hachureGap;i<0&&(i=4*t.strokeWidth),i=Math.max(i,.1);const n=[0,0];if(e)for(const o of s)Ks(o,n,e);const r=function(o,a){const h=[];for(const p of o){const u=[...p];u[0].join(",")!==u[u.length-1].join(",")&&u.push([u[0][0],u[0][1]]),u.length>2&&h.push(u)}const l=[];a=Math.max(a,.1);const c=[];for(const p of h)for(let u=0;u<p.length-1;u++){const y=p[u],v=p[u+1];if(y[1]!==v[1]){const b=Math.min(y[1],v[1]);c.push({ymin:b,ymax:Math.max(y[1],v[1]),x:b===y[1]?y[0]:v[0],islope:(v[0]-y[0])/(v[1]-y[1])})}}if(c.sort((p,u)=>p.ymin<u.ymin?-1:p.ymin>u.ymin?1:p.x<u.x?-1:p.x>u.x?1:p.ymax===u.ymax?0:(p.ymax-u.ymax)/Math.abs(p.ymax-u.ymax)),!c.length)return l;let d=[],f=c[0].ymin;for(;d.length||c.length;){if(c.length){let p=-1;for(let u=0;u<c.length&&!(c[u].ymin>f);u++)p=u;c.splice(0,p+1).forEach(u=>{d.push({s:f,edge:u})})}if(d=d.filter(p=>!(p.edge.ymax<=f)),d.sort((p,u)=>p.edge.x===u.edge.x?0:(p.edge.x-u.edge.x)/Math.abs(p.edge.x-u.edge.x)),d.length>1)for(let p=0;p<d.length;p+=2){const u=p+1;if(u>=d.length)break;const y=d[p].edge,v=d[u].edge;l.push([[Math.round(y.x),f],[Math.round(v.x),f]])}f+=a,d.forEach(p=>{p.edge.x=p.edge.x+a*p.edge.islope})}return l}(s,i);if(e){for(const o of s)Ks(o,n,-e);(function(o,a,h){const l=[];o.forEach(c=>l.push(...c)),Ks(l,a,h)})(r,n,-e)}return r}class Qs{constructor(t){this.helper=t}fillPolygons(t,e){return this._fillPolygons(t,e)}_fillPolygons(t,e){const i=ge(t,e);return{type:"fillSketch",ops:this.renderLines(i,e)}}renderLines(t,e){const i=[];for(const n of t)i.push(...this.helper.doubleLineOps(n[0][0],n[0][1],n[1][0],n[1][1],e));return i}}class fr extends Qs{fillPolygons(t,e){let i=e.hachureGap;i<0&&(i=4*e.strokeWidth),i=Math.max(i,.1);const n=ge(t,Object.assign({},e,{hachureGap:i})),r=Math.PI/180*e.hachureAngle,o=[],a=.5*i*Math.cos(r),h=.5*i*Math.sin(r);for(const[l,c]of n)Ve([l,c])&&o.push([[l[0]-a,l[1]+h],[...c]],[[l[0]+a,l[1]-h],[...c]]);return{type:"fillSketch",ops:this.renderLines(o,e)}}}class gr extends Qs{fillPolygons(t,e){const i=this._fillPolygons(t,e),n=Object.assign({},e,{hachureAngle:e.hachureAngle+90}),r=this._fillPolygons(t,n);return i.ops=i.ops.concat(r.ops),i}}class vr{constructor(t){this.helper=t}fillPolygons(t,e){const i=ge(t,e=Object.assign({},e,{hachureAngle:0}));return this.dotsOnLines(i,e)}dotsOnLines(t,e){const i=[];let n=e.hachureGap;n<0&&(n=4*e.strokeWidth),n=Math.max(n,.1);let r=e.fillWeight;r<0&&(r=e.strokeWidth/2);const o=n/4;for(const a of t){const h=Ve(a),l=h/n,c=Math.ceil(l)-1,d=h-c*n,f=(a[0][0]+a[1][0])/2-n/4,p=Math.min(a[0][1],a[1][1]);for(let u=0;u<c;u++){const y=p+d+u*n,v=f-o+2*Math.random()*o,b=y-o+2*Math.random()*o,w=this.helper.ellipse(v,b,r,r,e);i.push(...w.ops)}}return{type:"fillSketch",ops:i}}}class yr{constructor(t){this.helper=t}fillPolygons(t,e){const i=ge(t,e);return{type:"fillSketch",ops:this.dashedLine(i,e)}}dashedLine(t,e){const i=e.dashOffset<0?e.hachureGap<0?4*e.strokeWidth:e.hachureGap:e.dashOffset,n=e.dashGap<0?e.hachureGap<0?4*e.strokeWidth:e.hachureGap:e.dashGap,r=[];return t.forEach(o=>{const a=Ve(o),h=Math.floor(a/(i+n)),l=(a+n-h*(i+n))/2;let c=o[0],d=o[1];c[0]>d[0]&&(c=o[1],d=o[0]);const f=Math.atan((d[1]-c[1])/(d[0]-c[0]));for(let p=0;p<h;p++){const u=p*(i+n),y=u+i,v=[c[0]+u*Math.cos(f)+l*Math.cos(f),c[1]+u*Math.sin(f)+l*Math.sin(f)],b=[c[0]+y*Math.cos(f)+l*Math.cos(f),c[1]+y*Math.sin(f)+l*Math.sin(f)];r.push(...this.helper.doubleLineOps(v[0],v[1],b[0],b[1],e))}}),r}}class br{constructor(t){this.helper=t}fillPolygons(t,e){const i=e.hachureGap<0?4*e.strokeWidth:e.hachureGap,n=e.zigzagOffset<0?i:e.zigzagOffset,r=ge(t,e=Object.assign({},e,{hachureGap:i+n}));return{type:"fillSketch",ops:this.zigzagLines(r,n,e)}}zigzagLines(t,e,i){const n=[];return t.forEach(r=>{const o=Ve(r),a=Math.round(o/(2*e));let h=r[0],l=r[1];h[0]>l[0]&&(h=r[1],l=r[0]);const c=Math.atan((l[1]-h[1])/(l[0]-h[0]));for(let d=0;d<a;d++){const f=2*d*e,p=2*(d+1)*e,u=Math.sqrt(2*Math.pow(e,2)),y=[h[0]+f*Math.cos(c),h[1]+f*Math.sin(c)],v=[h[0]+p*Math.cos(c),h[1]+p*Math.sin(c)],b=[y[0]+u*Math.cos(c+Math.PI/4),y[1]+u*Math.sin(c+Math.PI/4)];n.push(...this.helper.doubleLineOps(y[0],y[1],b[0],b[1],i),...this.helper.doubleLineOps(b[0],b[1],v[0],v[1],i))}}),n}}const H={};class mr{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const qe={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function Ys(s,t){return s.type===t}function Js(s){const t=[],e=function(o){const a=new Array;for(;o!=="";)if(o.match(/^([ \t\r\n,]+)/))o=o.substr(RegExp.$1.length);else if(o.match(/^([aAcChHlLmMqQsStTvVzZ])/))a[a.length]={type:0,text:RegExp.$1},o=o.substr(RegExp.$1.length);else{if(!o.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];a[a.length]={type:1,text:`${parseFloat(RegExp.$1)}`},o=o.substr(RegExp.$1.length)}return a[a.length]={type:2,text:""},a}(s);let i="BOD",n=0,r=e[n];for(;!Ys(r,2);){let o=0;const a=[];if(i==="BOD"){if(r.text!=="M"&&r.text!=="m")return Js("M0,0"+s);n++,o=qe[r.text],i=r.text}else Ys(r,1)?o=qe[i]:(n++,o=qe[r.text],i=r.text);if(!(n+o<e.length))throw new Error("Path data ended short");for(let h=n;h<n+o;h++){const l=e[h];if(!Ys(l,1))throw new Error("Param not a number: "+i+","+l.text);a[a.length]=+l.text}if(typeof qe[i]!="number")throw new Error("Bad segment: "+i);{const h={key:i,data:a};t.push(h),n+=o,r=e[n],i==="M"&&(i="L"),i==="m"&&(i="l")}}return t}function Yi(s){let t=0,e=0,i=0,n=0;const r=[];for(const{key:o,data:a}of s)switch(o){case"M":r.push({key:"M",data:[...a]}),[t,e]=a,[i,n]=a;break;case"m":t+=a[0],e+=a[1],r.push({key:"M",data:[t,e]}),i=t,n=e;break;case"L":r.push({key:"L",data:[...a]}),[t,e]=a;break;case"l":t+=a[0],e+=a[1],r.push({key:"L",data:[t,e]});break;case"C":r.push({key:"C",data:[...a]}),t=a[4],e=a[5];break;case"c":{const h=a.map((l,c)=>c%2?l+e:l+t);r.push({key:"C",data:h}),t=h[4],e=h[5];break}case"Q":r.push({key:"Q",data:[...a]}),t=a[2],e=a[3];break;case"q":{const h=a.map((l,c)=>c%2?l+e:l+t);r.push({key:"Q",data:h}),t=h[2],e=h[3];break}case"A":r.push({key:"A",data:[...a]}),t=a[5],e=a[6];break;case"a":t+=a[5],e+=a[6],r.push({key:"A",data:[a[0],a[1],a[2],a[3],a[4],t,e]});break;case"H":r.push({key:"H",data:[...a]}),t=a[0];break;case"h":t+=a[0],r.push({key:"H",data:[t]});break;case"V":r.push({key:"V",data:[...a]}),e=a[0];break;case"v":e+=a[0],r.push({key:"V",data:[e]});break;case"S":r.push({key:"S",data:[...a]}),t=a[2],e=a[3];break;case"s":{const h=a.map((l,c)=>c%2?l+e:l+t);r.push({key:"S",data:h}),t=h[2],e=h[3];break}case"T":r.push({key:"T",data:[...a]}),t=a[0],e=a[1];break;case"t":t+=a[0],e+=a[1],r.push({key:"T",data:[t,e]});break;case"Z":case"z":r.push({key:"Z",data:[]}),t=i,e=n}return r}function Ji(s){const t=[];let e="",i=0,n=0,r=0,o=0,a=0,h=0;for(const{key:l,data:c}of s){switch(l){case"M":t.push({key:"M",data:[...c]}),[i,n]=c,[r,o]=c;break;case"C":t.push({key:"C",data:[...c]}),i=c[4],n=c[5],a=c[2],h=c[3];break;case"L":t.push({key:"L",data:[...c]}),[i,n]=c;break;case"H":i=c[0],t.push({key:"L",data:[i,n]});break;case"V":n=c[0],t.push({key:"L",data:[i,n]});break;case"S":{let d=0,f=0;e==="C"||e==="S"?(d=i+(i-a),f=n+(n-h)):(d=i,f=n),t.push({key:"C",data:[d,f,...c]}),a=c[0],h=c[1],i=c[2],n=c[3];break}case"T":{const[d,f]=c;let p=0,u=0;e==="Q"||e==="T"?(p=i+(i-a),u=n+(n-h)):(p=i,u=n);const y=i+2*(p-i)/3,v=n+2*(u-n)/3,b=d+2*(p-d)/3,w=f+2*(u-f)/3;t.push({key:"C",data:[y,v,b,w,d,f]}),a=p,h=u,i=d,n=f;break}case"Q":{const[d,f,p,u]=c,y=i+2*(d-i)/3,v=n+2*(f-n)/3,b=p+2*(d-p)/3,w=u+2*(f-u)/3;t.push({key:"C",data:[y,v,b,w,p,u]}),a=d,h=f,i=p,n=u;break}case"A":{const d=Math.abs(c[0]),f=Math.abs(c[1]),p=c[2],u=c[3],y=c[4],v=c[5],b=c[6];d===0||f===0?(t.push({key:"C",data:[i,n,v,b,v,b]}),i=v,n=b):(i!==v||n!==b)&&(Xi(i,n,v,b,d,f,p,u,y).forEach(function(w){t.push({key:"C",data:w})}),i=v,n=b);break}case"Z":t.push({key:"Z",data:[]}),i=r,n=o}e=l}return t}function ve(s,t,e){return[s*Math.cos(e)-t*Math.sin(e),s*Math.sin(e)+t*Math.cos(e)]}function Xi(s,t,e,i,n,r,o,a,h,l){const c=(d=o,Math.PI*d/180);var d;let f=[],p=0,u=0,y=0,v=0;if(l)[p,u,y,v]=l;else{[s,t]=ve(s,t,-c),[e,i]=ve(e,i,-c);const F=(s-e)/2,j=(t-i)/2;let J=F*F/(n*n)+j*j/(r*r);J>1&&(J=Math.sqrt(J),n*=J,r*=J);const Wt=n*n,Vt=r*r,no=Wt*Vt-Wt*j*j-Vt*F*F,ro=Wt*j*j+Vt*F*F,vn=(a===h?-1:1)*Math.sqrt(Math.abs(no/ro));y=vn*n*j/r+(s+e)/2,v=vn*-r*F/n+(t+i)/2,p=Math.asin(parseFloat(((t-v)/r).toFixed(9))),u=Math.asin(parseFloat(((i-v)/r).toFixed(9))),s<y&&(p=Math.PI-p),e<y&&(u=Math.PI-u),p<0&&(p=2*Math.PI+p),u<0&&(u=2*Math.PI+u),h&&p>u&&(p-=2*Math.PI),!h&&u>p&&(u-=2*Math.PI)}let b=u-p;if(Math.abs(b)>120*Math.PI/180){const F=u,j=e,J=i;u=h&&u>p?p+120*Math.PI/180*1:p+120*Math.PI/180*-1,f=Xi(e=y+n*Math.cos(u),i=v+r*Math.sin(u),j,J,n,r,o,0,h,[u,F,y,v])}b=u-p;const w=Math.cos(p),q=Math.sin(p),K=Math.cos(u),x=Math.sin(u),U=Math.tan(b/4),et=4/3*n*U,Y=4/3*r*U,ns=[s,t],Q=[s+et*q,t-Y*w],bt=[e+et*x,i-Y*K],gn=[e,i];if(Q[0]=2*ns[0]-Q[0],Q[1]=2*ns[1]-Q[1],l)return[Q,bt,gn].concat(f);{f=[Q,bt,gn].concat(f);const F=[];for(let j=0;j<f.length;j+=3){const J=ve(f[j][0],f[j][1],c),Wt=ve(f[j+1][0],f[j+1][1],c),Vt=ve(f[j+2][0],f[j+2][1],c);F.push([J[0],J[1],Wt[0],Wt[1],Vt[0],Vt[1]])}return F}}const wr={randOffset:function(s,t){return m(s,t)},randOffsetWithRange:function(s,t,e){return Ze(s,t,e)},ellipse:function(s,t,e,i,n){const r=en(e,i,n);return Xs(s,t,n,r).opset},doubleLineOps:function(s,t,e,i,n){return tt(s,t,e,i,n,!0)}};function tn(s,t,e,i,n){return{type:"path",ops:tt(s,t,e,i,n)}}function Fe(s,t,e){const i=(s||[]).length;if(i>2){const n=[];for(let r=0;r<i-1;r++)n.push(...tt(s[r][0],s[r][1],s[r+1][0],s[r+1][1],e));return t&&n.push(...tt(s[i-1][0],s[i-1][1],s[0][0],s[0][1],e)),{type:"path",ops:n}}return i===2?tn(s[0][0],s[0][1],s[1][0],s[1][1],e):{type:"path",ops:[]}}function kr(s,t,e,i,n){return function(r,o){return Fe(r,!0,o)}([[s,t],[s+e,t],[s+e,t+i],[s,t+i]],n)}function _r(s,t){let e=on(s,1*(1+.2*t.roughness),t);if(!t.disableMultiStroke){const i=on(s,1.5*(1+.22*t.roughness),function(n){const r=Object.assign({},n);return r.randomizer=void 0,n.seed&&(r.seed=n.seed+1),r}(t));e=e.concat(i)}return{type:"path",ops:e}}function en(s,t,e){const i=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(s/2,2)+Math.pow(t/2,2))/2)),n=Math.ceil(Math.max(e.curveStepCount,e.curveStepCount/Math.sqrt(200)*i)),r=2*Math.PI/n;let o=Math.abs(s/2),a=Math.abs(t/2);const h=1-e.curveFitting;return o+=m(o*h,e),a+=m(a*h,e),{increment:r,rx:o,ry:a}}function Xs(s,t,e,i){const[n,r]=an(i.increment,s,t,i.rx,i.ry,1,i.increment*Ze(.1,Ze(.4,1,e),e),e);let o=Ke(n,null,e);if(!e.disableMultiStroke&&e.roughness!==0){const[a]=an(i.increment,s,t,i.rx,i.ry,1.5,0,e),h=Ke(a,null,e);o=o.concat(h)}return{estimatedPoints:r,opset:{type:"path",ops:o}}}function sn(s,t,e,i,n,r,o,a,h){const l=s,c=t;let d=Math.abs(e/2),f=Math.abs(i/2);d+=m(.01*d,h),f+=m(.01*f,h);let p=n,u=r;for(;p<0;)p+=2*Math.PI,u+=2*Math.PI;u-p>2*Math.PI&&(p=0,u=2*Math.PI);const y=2*Math.PI/h.curveStepCount,v=Math.min(y/2,(u-p)/2),b=hn(v,l,c,d,f,p,u,1,h);if(!h.disableMultiStroke){const w=hn(v,l,c,d,f,p,u,1.5,h);b.push(...w)}return o&&(a?b.push(...tt(l,c,l+d*Math.cos(p),c+f*Math.sin(p),h),...tt(l,c,l+d*Math.cos(u),c+f*Math.sin(u),h)):b.push({op:"lineTo",data:[l,c]},{op:"lineTo",data:[l+d*Math.cos(p),c+f*Math.sin(p)]})),{type:"path",ops:b}}function Ge(s,t){const e=[];for(const i of s)if(i.length){const n=t.maxRandomnessOffset||0,r=i.length;if(r>2){e.push({op:"move",data:[i[0][0]+m(n,t),i[0][1]+m(n,t)]});for(let o=1;o<r;o++)e.push({op:"lineTo",data:[i[o][0]+m(n,t),i[o][1]+m(n,t)]})}}return{type:"fillPath",ops:e}}function Dt(s,t){return function(e,i){let n=e.fillStyle||"hachure";if(!H[n])switch(n){case"zigzag":H[n]||(H[n]=new fr(i));break;case"cross-hatch":H[n]||(H[n]=new gr(i));break;case"dots":H[n]||(H[n]=new vr(i));break;case"dashed":H[n]||(H[n]=new yr(i));break;case"zigzag-line":H[n]||(H[n]=new br(i));break;case"hachure":default:n="hachure",H[n]||(H[n]=new Qs(i))}return H[n]}(t,wr).fillPolygons(s,t)}function nn(s){return s.randomizer||(s.randomizer=new mr(s.seed||0)),s.randomizer.next()}function Ze(s,t,e,i=1){return e.roughness*i*(nn(e)*(t-s)+s)}function m(s,t,e=1){return Ze(-s,s,t,e)}function tt(s,t,e,i,n,r=!1){const o=r?n.disableMultiStrokeFill:n.disableMultiStroke,a=rn(s,t,e,i,n,!0,!1);if(o)return a;const h=rn(s,t,e,i,n,!0,!0);return a.concat(h)}function rn(s,t,e,i,n,r,o){const a=Math.pow(s-e,2)+Math.pow(t-i,2),h=Math.sqrt(a);let l=1;l=h<200?1:h>500?.4:-.0016668*h+1.233334;let c=n.maxRandomnessOffset||0;c*c*100>a&&(c=h/10);const d=c/2,f=.2+.2*nn(n);let p=n.bowing*n.maxRandomnessOffset*(i-t)/200,u=n.bowing*n.maxRandomnessOffset*(s-e)/200;p=m(p,n,l),u=m(u,n,l);const y=[],v=()=>m(d,n,l),b=()=>m(c,n,l),w=n.preserveVertices;return r&&(o?y.push({op:"move",data:[s+(w?0:v()),t+(w?0:v())]}):y.push({op:"move",data:[s+(w?0:m(c,n,l)),t+(w?0:m(c,n,l))]})),o?y.push({op:"bcurveTo",data:[p+s+(e-s)*f+v(),u+t+(i-t)*f+v(),p+s+2*(e-s)*f+v(),u+t+2*(i-t)*f+v(),e+(w?0:v()),i+(w?0:v())]}):y.push({op:"bcurveTo",data:[p+s+(e-s)*f+b(),u+t+(i-t)*f+b(),p+s+2*(e-s)*f+b(),u+t+2*(i-t)*f+b(),e+(w?0:b()),i+(w?0:b())]}),y}function on(s,t,e){const i=[];i.push([s[0][0]+m(t,e),s[0][1]+m(t,e)]),i.push([s[0][0]+m(t,e),s[0][1]+m(t,e)]);for(let n=1;n<s.length;n++)i.push([s[n][0]+m(t,e),s[n][1]+m(t,e)]),n===s.length-1&&i.push([s[n][0]+m(t,e),s[n][1]+m(t,e)]);return Ke(i,null,e)}function Ke(s,t,e){const i=s.length,n=[];if(i>3){const r=[],o=1-e.curveTightness;n.push({op:"move",data:[s[1][0],s[1][1]]});for(let a=1;a+2<i;a++){const h=s[a];r[0]=[h[0],h[1]],r[1]=[h[0]+(o*s[a+1][0]-o*s[a-1][0])/6,h[1]+(o*s[a+1][1]-o*s[a-1][1])/6],r[2]=[s[a+1][0]+(o*s[a][0]-o*s[a+2][0])/6,s[a+1][1]+(o*s[a][1]-o*s[a+2][1])/6],r[3]=[s[a+1][0],s[a+1][1]],n.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[3][0],r[3][1]]})}if(t&&t.length===2){const a=e.maxRandomnessOffset;n.push({op:"lineTo",data:[t[0]+m(a,e),t[1]+m(a,e)]})}}else i===3?(n.push({op:"move",data:[s[1][0],s[1][1]]}),n.push({op:"bcurveTo",data:[s[1][0],s[1][1],s[2][0],s[2][1],s[2][0],s[2][1]]})):i===2&&n.push(...tt(s[0][0],s[0][1],s[1][0],s[1][1],e));return n}function an(s,t,e,i,n,r,o,a){const h=[],l=[];if(a.roughness===0){s/=4,l.push([t+i*Math.cos(-s),e+n*Math.sin(-s)]);for(let c=0;c<=2*Math.PI;c+=s){const d=[t+i*Math.cos(c),e+n*Math.sin(c)];h.push(d),l.push(d)}l.push([t+i*Math.cos(0),e+n*Math.sin(0)]),l.push([t+i*Math.cos(s),e+n*Math.sin(s)])}else{const c=m(.5,a)-Math.PI/2;l.push([m(r,a)+t+.9*i*Math.cos(c-s),m(r,a)+e+.9*n*Math.sin(c-s)]);const d=2*Math.PI+c-.01;for(let f=c;f<d;f+=s){const p=[m(r,a)+t+i*Math.cos(f),m(r,a)+e+n*Math.sin(f)];h.push(p),l.push(p)}l.push([m(r,a)+t+i*Math.cos(c+2*Math.PI+.5*o),m(r,a)+e+n*Math.sin(c+2*Math.PI+.5*o)]),l.push([m(r,a)+t+.98*i*Math.cos(c+o),m(r,a)+e+.98*n*Math.sin(c+o)]),l.push([m(r,a)+t+.9*i*Math.cos(c+.5*o),m(r,a)+e+.9*n*Math.sin(c+.5*o)])}return[l,h]}function hn(s,t,e,i,n,r,o,a,h){const l=r+m(.1,h),c=[];c.push([m(a,h)+t+.9*i*Math.cos(l-s),m(a,h)+e+.9*n*Math.sin(l-s)]);for(let d=l;d<=o;d+=s)c.push([m(a,h)+t+i*Math.cos(d),m(a,h)+e+n*Math.sin(d)]);return c.push([t+i*Math.cos(o),e+n*Math.sin(o)]),c.push([t+i*Math.cos(o),e+n*Math.sin(o)]),Ke(c,null,h)}function $r(s,t,e,i,n,r,o,a){const h=[],l=[a.maxRandomnessOffset||1,(a.maxRandomnessOffset||1)+.3];let c=[0,0];const d=a.disableMultiStroke?1:2,f=a.preserveVertices;for(let p=0;p<d;p++)p===0?h.push({op:"move",data:[o[0],o[1]]}):h.push({op:"move",data:[o[0]+(f?0:m(l[0],a)),o[1]+(f?0:m(l[0],a))]}),c=f?[n,r]:[n+m(l[p],a),r+m(l[p],a)],h.push({op:"bcurveTo",data:[s+m(l[p],a),t+m(l[p],a),e+m(l[p],a),i+m(l[p],a),c[0],c[1]]});return h}function ye(s){return[...s]}function Qe(s,t){return Math.pow(s[0]-t[0],2)+Math.pow(s[1]-t[1],2)}function xr(s,t,e){const i=Qe(t,e);if(i===0)return Qe(s,t);let n=((s[0]-t[0])*(e[0]-t[0])+(s[1]-t[1])*(e[1]-t[1]))/i;return n=Math.max(0,Math.min(1,n)),Qe(s,ft(t,e,n))}function ft(s,t,e){return[s[0]+(t[0]-s[0])*e,s[1]+(t[1]-s[1])*e]}function ti(s,t,e,i){const n=i||[];if(function(a,h){const l=a[h+0],c=a[h+1],d=a[h+2],f=a[h+3];let p=3*c[0]-2*l[0]-f[0];p*=p;let u=3*c[1]-2*l[1]-f[1];u*=u;let y=3*d[0]-2*f[0]-l[0];y*=y;let v=3*d[1]-2*f[1]-l[1];return v*=v,p<y&&(p=y),u<v&&(u=v),p+u}(s,t)<e){const a=s[t+0];n.length?(r=n[n.length-1],o=a,Math.sqrt(Qe(r,o))>1&&n.push(a)):n.push(a),n.push(s[t+3])}else{const a=s[t+0],h=s[t+1],l=s[t+2],c=s[t+3],d=ft(a,h,.5),f=ft(h,l,.5),p=ft(l,c,.5),u=ft(d,f,.5),y=ft(f,p,.5),v=ft(u,y,.5);ti([a,d,u,v],0,e,n),ti([v,y,p,c],0,e,n)}var r,o;return n}function Ar(s,t){return Ye(s,0,s.length,t)}function Ye(s,t,e,i,n){const r=n||[],o=s[t],a=s[e-1];let h=0,l=1;for(let c=t+1;c<e-1;++c){const d=xr(s[c],o,a);d>h&&(h=d,l=c)}return Math.sqrt(h)>i?(Ye(s,t,l+1,i,r),Ye(s,l,e,i,r)):(r.length||r.push(o),r.push(a)),r}function ln(s,t=.15,e){const i=[],n=(s.length-1)/3;for(let r=0;r<n;r++)ti(s,3*r,t,i);return e&&e>0?Ye(i,0,i.length,e):i}const B="none";class Je{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,e,i){return{shape:t,sets:e||[],options:i||this.defaultOptions}}line(t,e,i,n,r){const o=this._o(r);return this._d("line",[tn(t,e,i,n,o)],o)}rectangle(t,e,i,n,r){const o=this._o(r),a=[],h=kr(t,e,i,n,o);if(o.fill){const l=[[t,e],[t+i,e],[t+i,e+n],[t,e+n]];o.fillStyle==="solid"?a.push(Ge([l],o)):a.push(Dt([l],o))}return o.stroke!==B&&a.push(h),this._d("rectangle",a,o)}ellipse(t,e,i,n,r){const o=this._o(r),a=[],h=en(i,n,o),l=Xs(t,e,o,h);if(o.fill)if(o.fillStyle==="solid"){const c=Xs(t,e,o,h).opset;c.type="fillPath",a.push(c)}else a.push(Dt([l.estimatedPoints],o));return o.stroke!==B&&a.push(l.opset),this._d("ellipse",a,o)}circle(t,e,i,n){const r=this.ellipse(t,e,i,i,n);return r.shape="circle",r}linearPath(t,e){const i=this._o(e);return this._d("linearPath",[Fe(t,!1,i)],i)}arc(t,e,i,n,r,o,a=!1,h){const l=this._o(h),c=[],d=sn(t,e,i,n,r,o,a,!0,l);if(a&&l.fill)if(l.fillStyle==="solid"){const f=Object.assign({},l);f.disableMultiStroke=!0;const p=sn(t,e,i,n,r,o,!0,!1,f);p.type="fillPath",c.push(p)}else c.push(function(f,p,u,y,v,b,w){const q=f,K=p;let x=Math.abs(u/2),U=Math.abs(y/2);x+=m(.01*x,w),U+=m(.01*U,w);let et=v,Y=b;for(;et<0;)et+=2*Math.PI,Y+=2*Math.PI;Y-et>2*Math.PI&&(et=0,Y=2*Math.PI);const ns=(Y-et)/w.curveStepCount,Q=[];for(let bt=et;bt<=Y;bt+=ns)Q.push([q+x*Math.cos(bt),K+U*Math.sin(bt)]);return Q.push([q+x*Math.cos(Y),K+U*Math.sin(Y)]),Q.push([q,K]),Dt([Q],w)}(t,e,i,n,r,o,l));return l.stroke!==B&&c.push(d),this._d("arc",c,l)}curve(t,e){const i=this._o(e),n=[],r=_r(t,i);if(i.fill&&i.fill!==B&&t.length>=3){const o=ln(function(a,h=0){const l=a.length;if(l<3)throw new Error("A curve must have at least three points.");const c=[];if(l===3)c.push(ye(a[0]),ye(a[1]),ye(a[2]),ye(a[2]));else{const d=[];d.push(a[0],a[0]);for(let u=1;u<a.length;u++)d.push(a[u]),u===a.length-1&&d.push(a[u]);const f=[],p=1-h;c.push(ye(d[0]));for(let u=1;u+2<d.length;u++){const y=d[u];f[0]=[y[0],y[1]],f[1]=[y[0]+(p*d[u+1][0]-p*d[u-1][0])/6,y[1]+(p*d[u+1][1]-p*d[u-1][1])/6],f[2]=[d[u+1][0]+(p*d[u][0]-p*d[u+2][0])/6,d[u+1][1]+(p*d[u][1]-p*d[u+2][1])/6],f[3]=[d[u+1][0],d[u+1][1]],c.push(f[1],f[2],f[3])}}return c}(t),10,(1+i.roughness)/2);i.fillStyle==="solid"?n.push(Ge([o],i)):n.push(Dt([o],i))}return i.stroke!==B&&n.push(r),this._d("curve",n,i)}polygon(t,e){const i=this._o(e),n=[],r=Fe(t,!0,i);return i.fill&&(i.fillStyle==="solid"?n.push(Ge([t],i)):n.push(Dt([t],i))),i.stroke!==B&&n.push(r),this._d("polygon",n,i)}path(t,e){const i=this._o(e),n=[];if(!t)return this._d("path",n,i);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const r=i.fill&&i.fill!=="transparent"&&i.fill!==B,o=i.stroke!==B,a=!!(i.simplification&&i.simplification<1),h=function(l,c,d){const f=Ji(Yi(Js(l))),p=[];let u=[],y=[0,0],v=[];const b=()=>{v.length>=4&&u.push(...ln(v,c)),v=[]},w=()=>{b(),u.length&&(p.push(u),u=[])};for(const{key:K,data:x}of f)switch(K){case"M":w(),y=[x[0],x[1]],u.push(y);break;case"L":b(),u.push([x[0],x[1]]);break;case"C":if(!v.length){const U=u.length?u[u.length-1]:y;v.push([U[0],U[1]])}v.push([x[0],x[1]]),v.push([x[2],x[3]]),v.push([x[4],x[5]]);break;case"Z":b(),u.push([y[0],y[1]])}if(w(),!d)return p;const q=[];for(const K of p){const x=Ar(K,d);x.length&&q.push(x)}return q}(t,1,a?4-4*i.simplification:(1+i.roughness)/2);return r&&(i.fillStyle==="solid"?n.push(Ge(h,i)):n.push(Dt(h,i))),o&&(a?h.forEach(l=>{n.push(Fe(l,!1,i))}):n.push(function(l,c){const d=Ji(Yi(Js(l))),f=[];let p=[0,0],u=[0,0];for(const{key:y,data:v}of d)switch(y){case"M":{const b=1*(c.maxRandomnessOffset||0),w=c.preserveVertices;f.push({op:"move",data:v.map(q=>q+(w?0:m(b,c)))}),u=[v[0],v[1]],p=[v[0],v[1]];break}case"L":f.push(...tt(u[0],u[1],v[0],v[1],c)),u=[v[0],v[1]];break;case"C":{const[b,w,q,K,x,U]=v;f.push(...$r(b,w,q,K,x,U,u,c)),u=[x,U];break}case"Z":f.push(...tt(u[0],u[1],p[0],p[1],c)),u=[p[0],p[1]]}return{type:"path",ops:f}}(t,i))),this._d("path",n,i)}opsToPath(t,e){let i="";for(const n of t.ops){const r=typeof e=="number"&&e>=0?n.data.map(o=>+o.toFixed(e)):n.data;switch(n.op){case"move":i+=`M${r[0]} ${r[1]} `;break;case"bcurveTo":i+=`C${r[0]} ${r[1]}, ${r[2]} ${r[3]}, ${r[4]} ${r[5]} `;break;case"lineTo":i+=`L${r[0]} ${r[1]} `}}return i.trim()}toPaths(t){const e=t.sets||[],i=t.options||this.defaultOptions,n=[];for(const r of e){let o=null;switch(r.type){case"path":o={d:this.opsToPath(r),stroke:i.stroke,strokeWidth:i.strokeWidth,fill:B};break;case"fillPath":o={d:this.opsToPath(r),stroke:B,strokeWidth:0,fill:i.fill||B};break;case"fillSketch":o=this.fillSketch(r,i)}o&&n.push(o)}return n}fillSketch(t,e){let i=e.fillWeight;return i<0&&(i=e.strokeWidth/2),{d:this.opsToPath(t),stroke:e.fill||B,strokeWidth:i,fill:B}}}class Rr{constructor(t,e){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new Je(e)}draw(t){const e=t.sets||[],i=t.options||this.getDefaultOptions(),n=this.ctx,r=t.options.fixedDecimalPlaceDigits;for(const o of e)switch(o.type){case"path":n.save(),n.strokeStyle=i.stroke==="none"?"transparent":i.stroke,n.lineWidth=i.strokeWidth,i.strokeLineDash&&n.setLineDash(i.strokeLineDash),i.strokeLineDashOffset&&(n.lineDashOffset=i.strokeLineDashOffset),this._drawToContext(n,o,r),n.restore();break;case"fillPath":{n.save(),n.fillStyle=i.fill||"";const a=t.shape==="curve"||t.shape==="polygon"||t.shape==="path"?"evenodd":"nonzero";this._drawToContext(n,o,r,a),n.restore();break}case"fillSketch":this.fillSketch(n,o,i)}}fillSketch(t,e,i){let n=i.fillWeight;n<0&&(n=i.strokeWidth/2),t.save(),i.fillLineDash&&t.setLineDash(i.fillLineDash),i.fillLineDashOffset&&(t.lineDashOffset=i.fillLineDashOffset),t.strokeStyle=i.fill||"",t.lineWidth=n,this._drawToContext(t,e,i.fixedDecimalPlaceDigits),t.restore()}_drawToContext(t,e,i,n="nonzero"){t.beginPath();for(const r of e.ops){const o=typeof i=="number"&&i>=0?r.data.map(a=>+a.toFixed(i)):r.data;switch(r.op){case"move":t.moveTo(o[0],o[1]);break;case"bcurveTo":t.bezierCurveTo(o[0],o[1],o[2],o[3],o[4],o[5]);break;case"lineTo":t.lineTo(o[0],o[1])}}e.type==="fillPath"?t.fill(n):t.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,e,i,n,r){const o=this.gen.line(t,e,i,n,r);return this.draw(o),o}rectangle(t,e,i,n,r){const o=this.gen.rectangle(t,e,i,n,r);return this.draw(o),o}ellipse(t,e,i,n,r){const o=this.gen.ellipse(t,e,i,n,r);return this.draw(o),o}circle(t,e,i,n){const r=this.gen.circle(t,e,i,n);return this.draw(r),r}linearPath(t,e){const i=this.gen.linearPath(t,e);return this.draw(i),i}polygon(t,e){const i=this.gen.polygon(t,e);return this.draw(i),i}arc(t,e,i,n,r,o,a=!1,h){const l=this.gen.arc(t,e,i,n,r,o,a,h);return this.draw(l),l}curve(t,e){const i=this.gen.curve(t,e);return this.draw(i),i}path(t,e){const i=this.gen.path(t,e);return this.draw(i),i}}const Xe="http://www.w3.org/2000/svg";class Mr{constructor(t,e){this.svg=t,this.gen=new Je(e)}draw(t){const e=t.sets||[],i=t.options||this.getDefaultOptions(),n=this.svg.ownerDocument||window.document,r=n.createElementNS(Xe,"g"),o=t.options.fixedDecimalPlaceDigits;for(const a of e){let h=null;switch(a.type){case"path":h=n.createElementNS(Xe,"path"),h.setAttribute("d",this.opsToPath(a,o)),h.setAttribute("stroke",i.stroke),h.setAttribute("stroke-width",i.strokeWidth+""),h.setAttribute("fill","none"),i.strokeLineDash&&h.setAttribute("stroke-dasharray",i.strokeLineDash.join(" ").trim()),i.strokeLineDashOffset&&h.setAttribute("stroke-dashoffset",`${i.strokeLineDashOffset}`);break;case"fillPath":h=n.createElementNS(Xe,"path"),h.setAttribute("d",this.opsToPath(a,o)),h.setAttribute("stroke","none"),h.setAttribute("stroke-width","0"),h.setAttribute("fill",i.fill||""),t.shape!=="curve"&&t.shape!=="polygon"||h.setAttribute("fill-rule","evenodd");break;case"fillSketch":h=this.fillSketch(n,a,i)}h&&r.appendChild(h)}return r}fillSketch(t,e,i){let n=i.fillWeight;n<0&&(n=i.strokeWidth/2);const r=t.createElementNS(Xe,"path");return r.setAttribute("d",this.opsToPath(e,i.fixedDecimalPlaceDigits)),r.setAttribute("stroke",i.fill||""),r.setAttribute("stroke-width",n+""),r.setAttribute("fill","none"),i.fillLineDash&&r.setAttribute("stroke-dasharray",i.fillLineDash.join(" ").trim()),i.fillLineDashOffset&&r.setAttribute("stroke-dashoffset",`${i.fillLineDashOffset}`),r}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,e){return this.gen.opsToPath(t,e)}line(t,e,i,n,r){const o=this.gen.line(t,e,i,n,r);return this.draw(o)}rectangle(t,e,i,n,r){const o=this.gen.rectangle(t,e,i,n,r);return this.draw(o)}ellipse(t,e,i,n,r){const o=this.gen.ellipse(t,e,i,n,r);return this.draw(o)}circle(t,e,i,n){const r=this.gen.circle(t,e,i,n);return this.draw(r)}linearPath(t,e){const i=this.gen.linearPath(t,e);return this.draw(i)}polygon(t,e){const i=this.gen.polygon(t,e);return this.draw(i)}arc(t,e,i,n,r,o,a=!1,h){const l=this.gen.arc(t,e,i,n,r,o,a,h);return this.draw(l)}curve(t,e){const i=this.gen.curve(t,e);return this.draw(i)}path(t,e){const i=this.gen.path(t,e);return this.draw(i)}}var Sr={canvas:(s,t)=>new Rr(s,t),svg:(s,t)=>new Mr(s,t),generator:s=>new Je(s),newSeed:()=>Je.newSeed()},Or=Object.defineProperty,Cr=Object.getOwnPropertyDescriptor,be=(s,t,e,i)=>{for(var n=i>1?void 0:i?Cr(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&Or(t,e,n),n};const Bt=8;let gt=class extends At{constructor(){super(...arguments),this.id="1",this.width=800,this.height=600,this.pen=0,this.inputs=[],this.outputs=[],this.canvas=null,this.roughCanvas=null,this.realCanvas=null}getMousePos(s){const t=this.realCanvas.getBoundingClientRect();return{x:s.clientX-t.left,y:s.clientY-t.top}}onMouseDown(s){const t=this.getMousePos(s);if(t.x>0&&t.y>0){switch(this.pen){case 0:this.roughCanvas.circle(t.x,t.y,Bt*2,{fill:"#fc3636",roughness:1.3});break;case 1:this.roughCanvas.rectangle(t.x-Bt,t.y-Bt,Bt*2,Bt*2,{fill:"#4579fb",roughness:1.5,fillStyle:"cross-hatch"});break;case 2:this.roughCanvas.circle(t.x,t.y,Bt*2,{fill:"#48fb45",roughness:3,fillStyle:"zigzag"});break}let e=this.realCanvas.getContext("2d");e.clearRect(0,0,this.width,this.height),e.drawImage(this.canvas,0,0),this.inputs.push([t.x/this.width,t.y/this.height]);let i=[0,0,0];i[this.pen]=1,this.outputs.push(i)}}updated(s){super.updated(s),this.canvas===null&&(this.canvas=this.shadowRoot.getElementById(`plot-input-hidden-canvas-${this.id}`),this.roughCanvas=Sr.canvas(this.canvas),this.realCanvas=this.shadowRoot.getElementById(`plot-input-canvas-${this.id}`))}connectedCallback(){super.connectedCallback(),window.addEventListener("mousedown",this.onMouseDown.bind(this))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("mousedown",this.onMouseDown.bind(this))}choosePen(s){this.pen=s}clearCanvas(){this.canvas.getContext("2d").clearRect(0,0,this.width,this.height),this.realCanvas.getContext("2d").clearRect(0,0,this.width,this.height),this.choosePen(0),this.inputs=[],this.outputs=[]}render(){return mi`
            <div>
                <wired-button @click=${()=>this.choosePen(0)} class="plot-input-button-red"
                              style=${this.pen===0?"transform: translateY(4px)":""}>Red
                </wired-button>
                <wired-button @click=${()=>this.choosePen(1)} class="plot-input-button-blue"
                              style=${this.pen===1?"transform: translateY(4px)":""}>Blue
                </wired-button>
                <wired-button @click=${()=>this.choosePen(2)} class="plot-input-button-green"
                              style=${this.pen===2?"transform: translateY(4px)":""}>Green
                </wired-button>
                <wired-button @click=${this.clearCanvas} class="plot-input-button-clear">Clear</wired-button>
                <br/>
                <br/>
                <canvas id="plot-input-hidden-canvas-${this.id}" width="${this.width}"
                        height="${this.height}" style="display: none"></canvas>
                <canvas class="plot-input-canvas" id="plot-input-canvas-${this.id}" width="${this.width}"
                        height="${this.height}"></canvas>
            </div>
        `}};gt.styles=ai`
        .plot-input-canvas {
            border: 1px solid black;
            background-color: #fafafa;
            
            cursor: crosshair;
        }
        
        .plot-input-button-red {
            background-color: #ff5959;
        }
        
        .plot-input-button-blue {
            background-color: #59d8ff;
        }
        
        .plot-input-button-green {
            background-color: #59ff7d;
        }
        
        .plot-input-button-clear {
            background-color: whitesmoke;
        }
    `,be([at({type:String})],gt.prototype,"id",2),be([at({type:Number})],gt.prototype,"width",2),be([at({type:Number})],gt.prototype,"height",2),be([at({type:Number})],gt.prototype,"pen",2),gt=be([ki("plot-input")],gt);const Er=""+new URL("exp_ml_bg.e90dbc40.wasm",import.meta.url).href,Pr=async(s={},t)=>{let e;if(t.startsWith("data:")){const i=t.replace(/^data:.*?base64,/,"");let n;if(typeof Buffer=="function"&&typeof Buffer.from=="function")n=Buffer.from(i,"base64");else if(typeof atob=="function"){const r=atob(i);n=new Uint8Array(r.length);for(let o=0;o<r.length;o++)n[o]=r.charCodeAt(o)}else throw new Error("Cannot decode base64-encoded data URL");e=await WebAssembly.instantiate(n,s)}else{const i=await fetch(t),n=i.headers.get("Content-Type")||"";if("instantiateStreaming"in WebAssembly&&n.startsWith("application/wasm"))e=await WebAssembly.instantiateStreaming(i,s);else{const r=await i.arrayBuffer();e=await WebAssembly.instantiate(r,s)}}return e.instance.exports},zr=typeof TextDecoder>"u"?(0,module.require)("util").TextDecoder:TextDecoder;let cn=new zr("utf-8",{ignoreBOM:!0,fatal:!0});cn.decode();let ei=new Uint8Array;function Tr(){return ei.byteLength===0&&(ei=new Uint8Array(ss.buffer)),ei}function jr(s,t){return cn.decode(Tr().subarray(s,s+t))}let si=new Float32Array;function dn(){return si.byteLength===0&&(si=new Float32Array(ss.buffer)),si}let vt=0;function ts(s,t){const e=t(s.length*4);return dn().set(s,e/4),vt=s.length,e}let ii=new Uint32Array;function Lr(){return ii.byteLength===0&&(ii=new Uint32Array(ss.buffer)),ii}function Ir(s,t){const e=t(s.length*4);return Lr().set(s,e/4),vt=s.length,e}let ni=new Int32Array;function pn(){return ni.byteLength===0&&(ni=new Int32Array(ss.buffer)),ni}function Nr(s,t){return dn().subarray(s/4,s/4+t)}function un(s,t){if(!(s instanceof t))throw new Error(`expected instance of ${t.name}`);return s.ptr}function Hr(){to()}function Dr(s){return()=>{throw new Error(`${s} is not defined`)}}class yt{static __wrap(t){const e=Object.create(yt.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();Wr(t)}static new(){const t=Vr();return yt.__wrap(t)}push(t){const e=ts(t,me),i=vt;qr(this.ptr,e,i)}}class es{static __wrap(t){const e=Object.create(es.prototype);return e.ptr=t,e}__destroy_into_raw(){const t=this.ptr;return this.ptr=0,t}free(){const t=this.__destroy_into_raw();Fr(t)}get num_layers(){return Gr(this.ptr)>>>0}set num_layers(t){Zr(this.ptr,t)}static new_from_js(t){const e=Ir(t,me),i=Kr(e,vt);return es.__wrap(i)}randomize_from_js(){Qr(this.ptr)}forward_from_js(t){try{const r=fn(-16),o=ts(t,me),a=vt;Yr(r,this.ptr,o,a);var e=pn()[r/4+0],i=pn()[r/4+1],n=Nr(e,i).slice();return eo(e,i*4),n}finally{fn(16)}}mse_from_js(t,e){const i=ts(t,me),n=vt,r=ts(e,me),o=vt;return Jr(this.ptr,i,n,r,o)}learn_from_js(t,e,i){un(t,yt),un(e,yt),Xr(this.ptr,t.ptr,e.ptr,i)}}const Br=typeof Math.random=="function"?Math.random:Dr("Math.random");function Ur(s,t){throw new Error(jr(s,t))}const L=await Pr({"./exp_ml_bg.js":{__wbg_random_656f2ae924b2540e:Br,__wbindgen_throw:Ur}},Er),ss=L.memory,Wr=L.__wbg_arrayofarraybuilder_free,Vr=L.arrayofarraybuilder_new,qr=L.arrayofarraybuilder_push,Fr=L.__wbg_dynamicnetwork_free,Gr=L.__wbg_get_dynamicnetwork_num_layers,Zr=L.__wbg_set_dynamicnetwork_num_layers,Kr=L.dynamicnetwork_new_from_js,Qr=L.dynamicnetwork_randomize_from_js,Yr=L.dynamicnetwork_forward_from_js,Jr=L.dynamicnetwork_mse_from_js,Xr=L.dynamicnetwork_learn_from_js,to=L.init,me=L.__wbindgen_malloc,fn=L.__wbindgen_add_to_stack_pointer,eo=L.__wbindgen_free;var so=Object.defineProperty,io=Object.getOwnPropertyDescriptor,is=(s,t,e,i)=>{for(var n=i>1?void 0:i?io(t,e):t,r=s.length-1,o;r>=0;r--)(o=s[r])&&(n=(i?o(t,e,n):o(n))||n);return i&&n&&so(t,e,n),n};let Ut=class extends At{constructor(){super(...arguments),this.model=null,this.cost=NaN,this.trainingProgress="N/A",this.numCorrect="N/A"}connectedCallback(){super.connectedCallback(),Hr(),this.model=es.new_from_js(new Uint32Array([2,8,4,3])),this.model.randomize_from_js()}render(){return mi`
            <div>
                <body>
                <p>
                    <wired-button @click=${this.evaluate}>Evaluate</wired-button>
                    <wired-button @click=${this.learn}>Learn</wired-button>
                    <wired-button @click=${this.randomize}>Randomize</wired-button>
                </p>
                <p>
                <h3>Current Cost: ${this.cost}</h3>
                <h3>Training Progress: ${this.trainingProgress}</h3>
                <h3>Number Correct: ${this.numCorrect}</h3>
                </p>
                <plot-input id="plti"></plot-input>
                </body>
            </div>
        `}randomize(){this.model.randomize_from_js(),this.cost=NaN,this.trainingProgress="N/A"}evaluate(){let s=this.shadowRoot.getElementById("plti"),t=s.realCanvas.getContext("2d");const e=["#ff9999","#9eb9ff","#a9ffa8"],i=3;t.clearRect(0,0,s.width,s.height);for(let h=0;h<s.width;h+=i)for(let l=0;l<s.height;l+=i){let c=this.model.forward_from_js(new Float32Array([h/s.width,l/s.height])).reduce((d,f,p,u)=>f>u[d]?p:d,0);t.fillStyle=e[c],t.fillRect(h,l,i,i)}t.drawImage(s.canvas,0,0);let n=s.inputs,r=s.outputs,o=0,a=0;for(let h=0;h<n.length;h++){const l=n[h],c=r[h];o+=this.model.mse_from_js(new Float32Array(l),new Float32Array(c)),this.model.forward_from_js(new Float32Array(l)).reduce((d,f,p,u)=>f>u[d]?p:d,0)===c.indexOf(1)&&a++}this.cost=o,this.numCorrect=`${a}/${n.length}`}async learn(){let s=this.shadowRoot.getElementById("plti"),t=s.inputs,e=s.outputs,i=yt.new(),n=yt.new();for(let r=0;r<t.length;r++)i.push(new Float32Array(t[r]));for(let r=0;r<e.length;r++)n.push(new Float32Array(e[r]));for(let r=0;r<100;r++){for(let o=0;o<200;o++)this.model.learn_from_js(i,n,.035-r*1e-4);this.evaluate(),this.trainingProgress=`${r+1}/100`,await new Promise(o=>setTimeout(o,20))}i.free(),n.free()}};Ut.styles=ai``,is([at({type:String})],Ut.prototype,"cost",2),is([at({type:String})],Ut.prototype,"trainingProgress",2),is([at({type:String})],Ut.prototype,"numCorrect",2),Ut=is([ki("main-app")],Ut)})();
