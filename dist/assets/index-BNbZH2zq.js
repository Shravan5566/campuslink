(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function OE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var gd={exports:{}},Da={},vd={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function BE(){if(j0)return _t;j0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(F){return F===null||typeof F!="object"?null:(F=v&&F[v]||F["@@iterator"],typeof F=="function"?F:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function y(F,q,ye){this.props=F,this.context=q,this.refs=T,this.updater=ye||_}y.prototype.isReactComponent={},y.prototype.setState=function(F,q){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,q,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function S(){}S.prototype=y.prototype;function C(F,q,ye){this.props=F,this.context=q,this.refs=T,this.updater=ye||_}var P=C.prototype=new S;P.constructor=C,M(P,y.prototype),P.isPureReactComponent=!0;var R=Array.isArray,I=Object.prototype.hasOwnProperty,N={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function E(F,q,ye){var Pe,qe={},se=null,he=null;if(q!=null)for(Pe in q.ref!==void 0&&(he=q.ref),q.key!==void 0&&(se=""+q.key),q)I.call(q,Pe)&&!O.hasOwnProperty(Pe)&&(qe[Pe]=q[Pe]);var me=arguments.length-2;if(me===1)qe.children=ye;else if(1<me){for(var Ue=Array(me),Be=0;Be<me;Be++)Ue[Be]=arguments[Be+2];qe.children=Ue}if(F&&F.defaultProps)for(Pe in me=F.defaultProps,me)qe[Pe]===void 0&&(qe[Pe]=me[Pe]);return{$$typeof:n,type:F,key:se,ref:he,props:qe,_owner:N.current}}function D(F,q){return{$$typeof:n,type:F.type,key:q,ref:F.ref,props:F.props,_owner:F._owner}}function Y(F){return typeof F=="object"&&F!==null&&F.$$typeof===n}function k(F){var q={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(ye){return q[ye]})}var $=/\/+/g;function J(F,q){return typeof F=="object"&&F!==null&&F.key!=null?k(""+F.key):q.toString(36)}function oe(F,q,ye,Pe,qe){var se=typeof F;(se==="undefined"||se==="boolean")&&(F=null);var he=!1;if(F===null)he=!0;else switch(se){case"string":case"number":he=!0;break;case"object":switch(F.$$typeof){case n:case e:he=!0}}if(he)return he=F,qe=qe(he),F=Pe===""?"."+J(he,0):Pe,R(qe)?(ye="",F!=null&&(ye=F.replace($,"$&/")+"/"),oe(qe,q,ye,"",function(Be){return Be})):qe!=null&&(Y(qe)&&(qe=D(qe,ye+(!qe.key||he&&he.key===qe.key?"":(""+qe.key).replace($,"$&/")+"/")+F)),q.push(qe)),1;if(he=0,Pe=Pe===""?".":Pe+":",R(F))for(var me=0;me<F.length;me++){se=F[me];var Ue=Pe+J(se,me);he+=oe(se,q,ye,Ue,qe)}else if(Ue=g(F),typeof Ue=="function")for(F=Ue.call(F),me=0;!(se=F.next()).done;)se=se.value,Ue=Pe+J(se,me++),he+=oe(se,q,ye,Ue,qe);else if(se==="object")throw q=String(F),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return he}function K(F,q,ye){if(F==null)return F;var Pe=[],qe=0;return oe(F,Pe,"","",function(se){return q.call(ye,se,qe++)}),Pe}function Z(F){if(F._status===-1){var q=F._result;q=q(),q.then(function(ye){(F._status===0||F._status===-1)&&(F._status=1,F._result=ye)},function(ye){(F._status===0||F._status===-1)&&(F._status=2,F._result=ye)}),F._status===-1&&(F._status=0,F._result=q)}if(F._status===1)return F._result.default;throw F._result}var W={current:null},B={transition:null},te={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:B,ReactCurrentOwner:N};function le(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:K,forEach:function(F,q,ye){K(F,function(){q.apply(this,arguments)},ye)},count:function(F){var q=0;return K(F,function(){q++}),q},toArray:function(F){return K(F,function(q){return q})||[]},only:function(F){if(!Y(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},_t.Component=y,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=C,_t.StrictMode=r,_t.Suspense=d,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,_t.act=le,_t.cloneElement=function(F,q,ye){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Pe=M({},F.props),qe=F.key,se=F.ref,he=F._owner;if(q!=null){if(q.ref!==void 0&&(se=q.ref,he=N.current),q.key!==void 0&&(qe=""+q.key),F.type&&F.type.defaultProps)var me=F.type.defaultProps;for(Ue in q)I.call(q,Ue)&&!O.hasOwnProperty(Ue)&&(Pe[Ue]=q[Ue]===void 0&&me!==void 0?me[Ue]:q[Ue])}var Ue=arguments.length-2;if(Ue===1)Pe.children=ye;else if(1<Ue){me=Array(Ue);for(var Be=0;Be<Ue;Be++)me[Be]=arguments[Be+2];Pe.children=me}return{$$typeof:n,type:F.type,key:qe,ref:se,props:Pe,_owner:he}},_t.createContext=function(F){return F={$$typeof:c,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:a,_context:F},F.Consumer=F},_t.createElement=E,_t.createFactory=function(F){var q=E.bind(null,F);return q.type=F,q},_t.createRef=function(){return{current:null}},_t.forwardRef=function(F){return{$$typeof:u,render:F}},_t.isValidElement=Y,_t.lazy=function(F){return{$$typeof:p,_payload:{_status:-1,_result:F},_init:Z}},_t.memo=function(F,q){return{$$typeof:h,type:F,compare:q===void 0?null:q}},_t.startTransition=function(F){var q=B.transition;B.transition={};try{F()}finally{B.transition=q}},_t.unstable_act=le,_t.useCallback=function(F,q){return W.current.useCallback(F,q)},_t.useContext=function(F){return W.current.useContext(F)},_t.useDebugValue=function(){},_t.useDeferredValue=function(F){return W.current.useDeferredValue(F)},_t.useEffect=function(F,q){return W.current.useEffect(F,q)},_t.useId=function(){return W.current.useId()},_t.useImperativeHandle=function(F,q,ye){return W.current.useImperativeHandle(F,q,ye)},_t.useInsertionEffect=function(F,q){return W.current.useInsertionEffect(F,q)},_t.useLayoutEffect=function(F,q){return W.current.useLayoutEffect(F,q)},_t.useMemo=function(F,q){return W.current.useMemo(F,q)},_t.useReducer=function(F,q,ye){return W.current.useReducer(F,q,ye)},_t.useRef=function(F){return W.current.useRef(F)},_t.useState=function(F){return W.current.useState(F)},_t.useSyncExternalStore=function(F,q,ye){return W.current.useSyncExternalStore(F,q,ye)},_t.useTransition=function(){return W.current.useTransition()},_t.version="18.3.1",_t}var X0;function Bp(){return X0||(X0=1,vd.exports=BE()),vd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y0;function zE(){if(Y0)return Da;Y0=1;var n=Bp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,v={},g=null,_=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(_=d.ref);for(p in d)r.call(d,p)&&!a.hasOwnProperty(p)&&(v[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:_,props:v,_owner:o.current}}return Da.Fragment=t,Da.jsx=c,Da.jsxs=c,Da}var q0;function VE(){return q0||(q0=1,gd.exports=zE()),gd.exports}var Q=VE(),Sc={},xd={exports:{}},Xn={},_d={exports:{}},yd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $0;function HE(){return $0||($0=1,(function(n){function e(B,te){var le=B.length;B.push(te);e:for(;0<le;){var F=le-1>>>1,q=B[F];if(0<o(q,te))B[F]=te,B[le]=q,le=F;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var te=B[0],le=B.pop();if(le!==te){B[0]=le;e:for(var F=0,q=B.length,ye=q>>>1;F<ye;){var Pe=2*(F+1)-1,qe=B[Pe],se=Pe+1,he=B[se];if(0>o(qe,le))se<q&&0>o(he,qe)?(B[F]=he,B[se]=le,F=se):(B[F]=qe,B[Pe]=le,F=Pe);else if(se<q&&0>o(he,le))B[F]=he,B[se]=le,F=se;else break e}}return te}function o(B,te){var le=B.sortIndex-te.sortIndex;return le!==0?le:B.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,v=null,g=3,_=!1,M=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function P(B){for(var te=t(h);te!==null;){if(te.callback===null)r(h);else if(te.startTime<=B)r(h),te.sortIndex=te.expirationTime,e(d,te);else break;te=t(h)}}function R(B){if(T=!1,P(B),!M)if(t(d)!==null)M=!0,Z(I);else{var te=t(h);te!==null&&W(R,te.startTime-B)}}function I(B,te){M=!1,T&&(T=!1,S(E),E=-1),_=!0;var le=g;try{for(P(te),v=t(d);v!==null&&(!(v.expirationTime>te)||B&&!k());){var F=v.callback;if(typeof F=="function"){v.callback=null,g=v.priorityLevel;var q=F(v.expirationTime<=te);te=n.unstable_now(),typeof q=="function"?v.callback=q:v===t(d)&&r(d),P(te)}else r(d);v=t(d)}if(v!==null)var ye=!0;else{var Pe=t(h);Pe!==null&&W(R,Pe.startTime-te),ye=!1}return ye}finally{v=null,g=le,_=!1}}var N=!1,O=null,E=-1,D=5,Y=-1;function k(){return!(n.unstable_now()-Y<D)}function $(){if(O!==null){var B=n.unstable_now();Y=B;var te=!0;try{te=O(!0,B)}finally{te?J():(N=!1,O=null)}}else N=!1}var J;if(typeof C=="function")J=function(){C($)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,K=oe.port2;oe.port1.onmessage=$,J=function(){K.postMessage(null)}}else J=function(){y($,0)};function Z(B){O=B,N||(N=!0,J())}function W(B,te){E=y(function(){B(n.unstable_now())},te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){M||_||(M=!0,Z(I))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(B){switch(g){case 1:case 2:case 3:var te=3;break;default:te=g}var le=g;g=te;try{return B()}finally{g=le}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,te){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var le=g;g=B;try{return te()}finally{g=le}},n.unstable_scheduleCallback=function(B,te,le){var F=n.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?F+le:F):le=F,B){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=le+q,B={id:p++,callback:te,priorityLevel:B,startTime:le,expirationTime:q,sortIndex:-1},le>F?(B.sortIndex=le,e(h,B),t(d)===null&&B===t(h)&&(T?(S(E),E=-1):T=!0,W(R,le-F))):(B.sortIndex=q,e(d,B),M||_||(M=!0,Z(I))),B},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(B){var te=g;return function(){var le=g;g=te;try{return B.apply(this,arguments)}finally{g=le}}}})(yd)),yd}var K0;function GE(){return K0||(K0=1,_d.exports=HE()),_d.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function WE(){if(Z0)return Xn;Z0=1;var n=Bp(),e=GE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(i){return d.call(v,i)?!0:d.call(p,i)?!1:h.test(i)?v[i]=!0:(p[i]=!0,!1)}function _(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,f){if(s===null||typeof s>"u"||_(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,l,f,m,x,b){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){y[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];y[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){y[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){y[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){y[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){y[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){y[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){y[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){y[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function C(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(S,C);y[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(S,C);y[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(S,C);y[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),y.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){y[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function P(i,s,l,f){var m=y.hasOwnProperty(s)?y[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,m,f)&&(l=null),f||m===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,f=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var R=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),N=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),Y=Symbol.for("react.provider"),k=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),B=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=B&&i[B]||i["@@iterator"],typeof i=="function"?i:null)}var le=Object.assign,F;function q(i){if(F===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);F=s&&s[1]||""}return`
`+F+i}var ye=!1;function Pe(i,s){if(!i||ye)return"";ye=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ae){var f=ae}Reflect.construct(i,[],s)}else{try{s.call()}catch(ae){f=ae}i.call(s.prototype)}else{try{throw Error()}catch(ae){f=ae}i()}}catch(ae){if(ae&&f&&typeof ae.stack=="string"){for(var m=ae.stack.split(`
`),x=f.stack.split(`
`),b=m.length-1,U=x.length-1;1<=b&&0<=U&&m[b]!==x[U];)U--;for(;1<=b&&0<=U;b--,U--)if(m[b]!==x[U]){if(b!==1||U!==1)do if(b--,U--,0>U||m[b]!==x[U]){var z=`
`+m[b].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=b&&0<=U);break}}}finally{ye=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?q(i):""}function qe(i){switch(i.tag){case 5:return q(i.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return i=Pe(i.type,!1),i;case 11:return i=Pe(i.type.render,!1),i;case 1:return i=Pe(i.type,!0),i;default:return""}}function se(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case O:return"Fragment";case N:return"Portal";case D:return"Profiler";case E:return"StrictMode";case J:return"Suspense";case oe:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case Y:return(i._context.displayName||"Context")+".Provider";case $:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case K:return s=i.displayName||null,s!==null?s:se(i.type)||"Memo";case Z:s=i._payload,i=i._init;try{return se(i(s))}catch{}}return null}function he(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return se(s);case 8:return s===E?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function me(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ue(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Be(i){var s=Ue(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(b){f=""+b,x.call(this,b)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(b){f=""+b},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function it(i){i._valueTracker||(i._valueTracker=Be(i))}function zt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=Ue(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function xt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function wt(i,s){var l=s.checked;return le({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Lt(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=me(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ht(i,s){s=s.checked,s!=null&&P(i,"checked",s,!1)}function Gt(i,s){ht(i,s);var l=me(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Yt(i,s.type,l):s.hasOwnProperty("defaultValue")&&Yt(i,s.type,me(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function V(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function Yt(i,s,l){(s!=="number"||xt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var yt=Array.isArray;function Tt(i,s,l,f){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&f&&(i[l].defaultSelected=!0)}else{for(l=""+me(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function $e(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return le({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function L(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(yt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:me(l)}}function w(i,s){var l=me(s.value),f=me(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function j(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function pe(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?pe(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var fe,Ve=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=fe.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ae(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},at=["Webkit","ms","Moz","O"];Object.keys(Je).forEach(function(i){at.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Je[s]=Je[i]})});function Me(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Je.hasOwnProperty(i)&&Je[i]?(""+s).trim():s+"px"}function be(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=Me(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,m):i[l]=m}}var Ke=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function He(i,s){if(s){if(Ke[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ie(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dt=null;function H(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ce=null,we=null,Ne=null;function Ee(i){if(i=ga(i)){if(typeof Ce!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Fl(s),Ce(i.stateNode,i.type,s))}}function de(i){we?Ne?Ne.push(i):Ne=[i]:we=i}function Ge(){if(we){var i=we,s=Ne;if(Ne=we=null,Ee(i),s)for(i=0;i<s.length;i++)Ee(s[i])}}function lt(i,s){return i(s)}function Nt(){}var bt=!1;function ri(i,s,l){if(bt)return i(s,l);bt=!0;try{return lt(i,s,l)}finally{bt=!1,(we!==null||Ne!==null)&&(Nt(),Ge())}}function Dn(i,s){var l=i.stateNode;if(l===null)return null;var f=Fl(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Xs=!1;if(u)try{var tr={};Object.defineProperty(tr,"passive",{get:function(){Xs=!0}}),window.addEventListener("test",tr,tr),window.removeEventListener("test",tr,tr)}catch{Xs=!1}function ku(i,s,l,f,m,x,b,U,z){var ae=Array.prototype.slice.call(arguments,3);try{s.apply(l,ae)}catch(xe){this.onError(xe)}}var Ar=!1,cs=null,si=!1,us=null,pl={onError:function(i){Ar=!0,cs=i}};function ml(i,s,l,f,m,x,b,U,z){Ar=!1,cs=null,ku.apply(pl,arguments)}function Ys(i,s,l,f,m,x,b,U,z){if(ml.apply(this,arguments),Ar){if(Ar){var ae=cs;Ar=!1,cs=null}else throw Error(t(198));si||(si=!0,us=ae)}}function Fi(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function fs(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Qo(i){if(Fi(i)!==i)throw Error(t(188))}function gl(i){var s=i.alternate;if(!s){if(s=Fi(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var m=l.return;if(m===null)break;var x=m.alternate;if(x===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===l)return Qo(m),i;if(x===f)return Qo(m),s;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=x;else{for(var b=!1,U=m.child;U;){if(U===l){b=!0,l=m,f=x;break}if(U===f){b=!0,f=m,l=x;break}U=U.sibling}if(!b){for(U=x.child;U;){if(U===l){b=!0,l=x,f=m;break}if(U===f){b=!0,f=x,l=m;break}U=U.sibling}if(!b)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function vl(i){return i=gl(i),i!==null?xl(i):null}function xl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=xl(i);if(s!==null)return s;i=i.sibling}return null}var _l=e.unstable_scheduleCallback,yl=e.unstable_cancelCallback,Ou=e.unstable_shouldYield,Bu=e.unstable_requestPaint,A=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,ue=e.unstable_ImmediatePriority,re=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,De=e.unstable_LowPriority,Oe=e.unstable_IdlePriority,Re=null,Fe=null;function tt(i){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(Re,i,void 0,(i.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:It,pt=Math.log,nt=Math.LN2;function It(i){return i>>>=0,i===0?32:31-(pt(i)/nt|0)|0}var Vt=64,Bt=4194304;function Et(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function en(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,m=i.suspendedLanes,x=i.pingedLanes,b=l&268435455;if(b!==0){var U=b&~m;U!==0?f=Et(U):(x&=b,x!==0&&(f=Et(x)))}else b=l&~m,b!==0?f=Et(b):x!==0&&(f=Et(x));if(f===0)return 0;if(s!==0&&s!==f&&(s&m)===0&&(m=f&-f,x=s&-s,m>=x||m===16&&(x&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-rt(s),m=1<<l,f|=i[l],s&=~m;return f}function Qe(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ln(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,x=i.pendingLanes;0<x;){var b=31-rt(x),U=1<<b,z=m[b];z===-1?((U&l)===0||(U&f)!==0)&&(m[b]=Qe(U,s)):z<=s&&(i.expiredLanes|=U),x&=~U}}function St(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Bn(){var i=Vt;return Vt<<=1,(Vt&4194240)===0&&(Vt=64),i}function zn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function $n(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-rt(s),i[s]=l}function Cr(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-rt(l),x=1<<m;s[m]=0,f[m]=-1,i[m]=-1,l&=~x}}function Dt(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-rt(l),m=1<<f;m&s|i[f]&s&&(i[f]|=s),l&=~m}}var ct=0;function xi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var tn,oi,nr,Jo,Am,zu=!1,Sl=[],Rr=null,Pr=null,Dr=null,ea=new Map,ta=new Map,Lr=[],oM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cm(i,s){switch(i){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Pr=null;break;case"mouseover":case"mouseout":Dr=null;break;case"pointerover":case"pointerout":ea.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ta.delete(s.pointerId)}}function na(i,s,l,f,m,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[m]},s!==null&&(s=ga(s),s!==null&&oi(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function aM(i,s,l,f,m){switch(s){case"focusin":return Rr=na(Rr,i,s,l,f,m),!0;case"dragenter":return Pr=na(Pr,i,s,l,f,m),!0;case"mouseover":return Dr=na(Dr,i,s,l,f,m),!0;case"pointerover":var x=m.pointerId;return ea.set(x,na(ea.get(x)||null,i,s,l,f,m)),!0;case"gotpointercapture":return x=m.pointerId,ta.set(x,na(ta.get(x)||null,i,s,l,f,m)),!0}return!1}function Rm(i){var s=ds(i.target);if(s!==null){var l=Fi(s);if(l!==null){if(s=l.tag,s===13){if(s=fs(l),s!==null){i.blockedOn=s,Am(i.priority,function(){nr(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function Ml(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Hu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);dt=f,l.target.dispatchEvent(f),dt=null}else return s=ga(l),s!==null&&oi(s),i.blockedOn=l,!1;s.shift()}return!0}function Pm(i,s,l){Ml(i)&&l.delete(s)}function lM(){zu=!1,Rr!==null&&Ml(Rr)&&(Rr=null),Pr!==null&&Ml(Pr)&&(Pr=null),Dr!==null&&Ml(Dr)&&(Dr=null),ea.forEach(Pm),ta.forEach(Pm)}function ia(i,s){i.blockedOn===s&&(i.blockedOn=null,zu||(zu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lM)))}function ra(i){function s(m){return ia(m,i)}if(0<Sl.length){ia(Sl[0],i);for(var l=1;l<Sl.length;l++){var f=Sl[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Rr!==null&&ia(Rr,i),Pr!==null&&ia(Pr,i),Dr!==null&&ia(Dr,i),ea.forEach(s),ta.forEach(s),l=0;l<Lr.length;l++)f=Lr[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<Lr.length&&(l=Lr[0],l.blockedOn===null);)Rm(l),l.blockedOn===null&&Lr.shift()}var qs=R.ReactCurrentBatchConfig,El=!0;function cM(i,s,l,f){var m=ct,x=qs.transition;qs.transition=null;try{ct=1,Vu(i,s,l,f)}finally{ct=m,qs.transition=x}}function uM(i,s,l,f){var m=ct,x=qs.transition;qs.transition=null;try{ct=4,Vu(i,s,l,f)}finally{ct=m,qs.transition=x}}function Vu(i,s,l,f){if(El){var m=Hu(i,s,l,f);if(m===null)of(i,s,f,wl,l),Cm(i,f);else if(aM(m,i,s,l,f))f.stopPropagation();else if(Cm(i,f),s&4&&-1<oM.indexOf(i)){for(;m!==null;){var x=ga(m);if(x!==null&&tn(x),x=Hu(i,s,l,f),x===null&&of(i,s,f,wl,l),x===m)break;m=x}m!==null&&f.stopPropagation()}else of(i,s,f,null,l)}}var wl=null;function Hu(i,s,l,f){if(wl=null,i=H(f),i=ds(i),i!==null)if(s=Fi(i),s===null)i=null;else if(l=s.tag,l===13){if(i=fs(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return wl=i,null}function Dm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case ue:return 1;case re:return 4;case ne:case De:return 16;case Oe:return 536870912;default:return 16}default:return 16}}var Ir=null,Gu=null,Tl=null;function Lm(){if(Tl)return Tl;var i,s=Gu,l=s.length,f,m="value"in Ir?Ir.value:Ir.textContent,x=m.length;for(i=0;i<l&&s[i]===m[i];i++);var b=l-i;for(f=1;f<=b&&s[l-f]===m[x-f];f++);return Tl=m.slice(i,1<f?1-f:void 0)}function bl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Al(){return!0}function Im(){return!1}function Kn(i){function s(l,f,m,x,b){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=x,this.target=b,this.currentTarget=null;for(var U in i)i.hasOwnProperty(U)&&(l=i[U],this[U]=l?l(x):x[U]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?Al:Im,this.isPropagationStopped=Im,this}return le(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),s}var $s={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wu=Kn($s),sa=le({},$s,{view:0,detail:0}),fM=Kn(sa),ju,Xu,oa,Cl=le({},sa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==oa&&(oa&&i.type==="mousemove"?(ju=i.screenX-oa.screenX,Xu=i.screenY-oa.screenY):Xu=ju=0,oa=i),ju)},movementY:function(i){return"movementY"in i?i.movementY:Xu}}),Nm=Kn(Cl),dM=le({},Cl,{dataTransfer:0}),hM=Kn(dM),pM=le({},sa,{relatedTarget:0}),Yu=Kn(pM),mM=le({},$s,{animationName:0,elapsedTime:0,pseudoElement:0}),gM=Kn(mM),vM=le({},$s,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),xM=Kn(vM),_M=le({},$s,{data:0}),Um=Kn(_M),yM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function EM(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=MM[i])?!!s[i]:!1}function qu(){return EM}var wM=le({},sa,{key:function(i){if(i.key){var s=yM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=bl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?SM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qu,charCode:function(i){return i.type==="keypress"?bl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?bl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),TM=Kn(wM),bM=le({},Cl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Fm=Kn(bM),AM=le({},sa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qu}),CM=Kn(AM),RM=le({},$s,{propertyName:0,elapsedTime:0,pseudoElement:0}),PM=Kn(RM),DM=le({},Cl,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),LM=Kn(DM),IM=[9,13,27,32],$u=u&&"CompositionEvent"in window,aa=null;u&&"documentMode"in document&&(aa=document.documentMode);var NM=u&&"TextEvent"in window&&!aa,km=u&&(!$u||aa&&8<aa&&11>=aa),Om=" ",Bm=!1;function zm(i,s){switch(i){case"keyup":return IM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ks=!1;function UM(i,s){switch(i){case"compositionend":return Vm(s);case"keypress":return s.which!==32?null:(Bm=!0,Om);case"textInput":return i=s.data,i===Om&&Bm?null:i;default:return null}}function FM(i,s){if(Ks)return i==="compositionend"||!$u&&zm(i,s)?(i=Lm(),Tl=Gu=Ir=null,Ks=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return km&&s.locale!=="ko"?null:s.data;default:return null}}var kM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!kM[i.type]:s==="textarea"}function Gm(i,s,l,f){de(f),s=Il(s,"onChange"),0<s.length&&(l=new Wu("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var la=null,ca=null;function OM(i){ag(i,0)}function Rl(i){var s=to(i);if(zt(s))return i}function BM(i,s){if(i==="change")return s}var Wm=!1;if(u){var Ku;if(u){var Zu="oninput"in document;if(!Zu){var jm=document.createElement("div");jm.setAttribute("oninput","return;"),Zu=typeof jm.oninput=="function"}Ku=Zu}else Ku=!1;Wm=Ku&&(!document.documentMode||9<document.documentMode)}function Xm(){la&&(la.detachEvent("onpropertychange",Ym),ca=la=null)}function Ym(i){if(i.propertyName==="value"&&Rl(ca)){var s=[];Gm(s,ca,i,H(i)),ri(OM,s)}}function zM(i,s,l){i==="focusin"?(Xm(),la=s,ca=l,la.attachEvent("onpropertychange",Ym)):i==="focusout"&&Xm()}function VM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Rl(ca)}function HM(i,s){if(i==="click")return Rl(s)}function GM(i,s){if(i==="input"||i==="change")return Rl(s)}function WM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var _i=typeof Object.is=="function"?Object.is:WM;function ua(i,s){if(_i(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(s,m)||!_i(i[m],s[m]))return!1}return!0}function qm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function $m(i,s){var l=qm(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=qm(l)}}function Km(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Km(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Zm(){for(var i=window,s=xt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=xt(i.document)}return s}function Qu(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function jM(i){var s=Zm(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Km(l.ownerDocument.documentElement,l)){if(f!==null&&Qu(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,x=Math.min(f.start,m);f=f.end===void 0?x:Math.min(f.end,m),!i.extend&&x>f&&(m=f,f=x,x=m),m=$m(l,x);var b=$m(l,f);m&&b&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==b.node||i.focusOffset!==b.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),x>f?(i.addRange(s),i.extend(b.node,b.offset)):(s.setEnd(b.node,b.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var XM=u&&"documentMode"in document&&11>=document.documentMode,Zs=null,Ju=null,fa=null,ef=!1;function Qm(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ef||Zs==null||Zs!==xt(f)||(f=Zs,"selectionStart"in f&&Qu(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),fa&&ua(fa,f)||(fa=f,f=Il(Ju,"onSelect"),0<f.length&&(s=new Wu("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=Zs)))}function Pl(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Qs={animationend:Pl("Animation","AnimationEnd"),animationiteration:Pl("Animation","AnimationIteration"),animationstart:Pl("Animation","AnimationStart"),transitionend:Pl("Transition","TransitionEnd")},tf={},Jm={};u&&(Jm=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function Dl(i){if(tf[i])return tf[i];if(!Qs[i])return i;var s=Qs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in Jm)return tf[i]=s[l];return i}var eg=Dl("animationend"),tg=Dl("animationiteration"),ng=Dl("animationstart"),ig=Dl("transitionend"),rg=new Map,sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nr(i,s){rg.set(i,s),a(s,[i])}for(var nf=0;nf<sg.length;nf++){var rf=sg[nf],YM=rf.toLowerCase(),qM=rf[0].toUpperCase()+rf.slice(1);Nr(YM,"on"+qM)}Nr(eg,"onAnimationEnd"),Nr(tg,"onAnimationIteration"),Nr(ng,"onAnimationStart"),Nr("dblclick","onDoubleClick"),Nr("focusin","onFocus"),Nr("focusout","onBlur"),Nr(ig,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var da="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),$M=new Set("cancel close invalid load scroll toggle".split(" ").concat(da));function og(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,Ys(f,s,void 0,i),i.currentTarget=null}function ag(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],m=f.event;f=f.listeners;e:{var x=void 0;if(s)for(var b=f.length-1;0<=b;b--){var U=f[b],z=U.instance,ae=U.currentTarget;if(U=U.listener,z!==x&&m.isPropagationStopped())break e;og(m,U,ae),x=z}else for(b=0;b<f.length;b++){if(U=f[b],z=U.instance,ae=U.currentTarget,U=U.listener,z!==x&&m.isPropagationStopped())break e;og(m,U,ae),x=z}}}if(si)throw i=us,si=!1,us=null,i}function Wt(i,s){var l=s[df];l===void 0&&(l=s[df]=new Set);var f=i+"__bubble";l.has(f)||(lg(s,i,2,!1),l.add(f))}function sf(i,s,l){var f=0;s&&(f|=4),lg(l,i,f,s)}var Ll="_reactListening"+Math.random().toString(36).slice(2);function ha(i){if(!i[Ll]){i[Ll]=!0,r.forEach(function(l){l!=="selectionchange"&&($M.has(l)||sf(l,!1,i),sf(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Ll]||(s[Ll]=!0,sf("selectionchange",!1,s))}}function lg(i,s,l,f){switch(Dm(s)){case 1:var m=cM;break;case 4:m=uM;break;default:m=Vu}l=m.bind(null,s,l,i),m=void 0,!Xs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function of(i,s,l,f,m){var x=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var b=f.tag;if(b===3||b===4){var U=f.stateNode.containerInfo;if(U===m||U.nodeType===8&&U.parentNode===m)break;if(b===4)for(b=f.return;b!==null;){var z=b.tag;if((z===3||z===4)&&(z=b.stateNode.containerInfo,z===m||z.nodeType===8&&z.parentNode===m))return;b=b.return}for(;U!==null;){if(b=ds(U),b===null)return;if(z=b.tag,z===5||z===6){f=x=b;continue e}U=U.parentNode}}f=f.return}ri(function(){var ae=x,xe=H(l),Se=[];e:{var ve=rg.get(i);if(ve!==void 0){var ke=Wu,We=i;switch(i){case"keypress":if(bl(l)===0)break e;case"keydown":case"keyup":ke=TM;break;case"focusin":We="focus",ke=Yu;break;case"focusout":We="blur",ke=Yu;break;case"beforeblur":case"afterblur":ke=Yu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=hM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=CM;break;case eg:case tg:case ng:ke=gM;break;case ig:ke=PM;break;case"scroll":ke=fM;break;case"wheel":ke=LM;break;case"copy":case"cut":case"paste":ke=xM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Fm}var Ze=(s&4)!==0,nn=!Ze&&i==="scroll",ee=Ze?ve!==null?ve+"Capture":null:ve;Ze=[];for(var G=ae,ie;G!==null;){ie=G;var Te=ie.stateNode;if(ie.tag===5&&Te!==null&&(ie=Te,ee!==null&&(Te=Dn(G,ee),Te!=null&&Ze.push(pa(G,Te,ie)))),nn)break;G=G.return}0<Ze.length&&(ve=new ke(ve,We,null,l,xe),Se.push({event:ve,listeners:Ze}))}}if((s&7)===0){e:{if(ve=i==="mouseover"||i==="pointerover",ke=i==="mouseout"||i==="pointerout",ve&&l!==dt&&(We=l.relatedTarget||l.fromElement)&&(ds(We)||We[ir]))break e;if((ke||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,ke?(We=l.relatedTarget||l.toElement,ke=ae,We=We?ds(We):null,We!==null&&(nn=Fi(We),We!==nn||We.tag!==5&&We.tag!==6)&&(We=null)):(ke=null,We=ae),ke!==We)){if(Ze=Nm,Te="onMouseLeave",ee="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(Ze=Fm,Te="onPointerLeave",ee="onPointerEnter",G="pointer"),nn=ke==null?ve:to(ke),ie=We==null?ve:to(We),ve=new Ze(Te,G+"leave",ke,l,xe),ve.target=nn,ve.relatedTarget=ie,Te=null,ds(xe)===ae&&(Ze=new Ze(ee,G+"enter",We,l,xe),Ze.target=ie,Ze.relatedTarget=nn,Te=Ze),nn=Te,ke&&We)t:{for(Ze=ke,ee=We,G=0,ie=Ze;ie;ie=Js(ie))G++;for(ie=0,Te=ee;Te;Te=Js(Te))ie++;for(;0<G-ie;)Ze=Js(Ze),G--;for(;0<ie-G;)ee=Js(ee),ie--;for(;G--;){if(Ze===ee||ee!==null&&Ze===ee.alternate)break t;Ze=Js(Ze),ee=Js(ee)}Ze=null}else Ze=null;ke!==null&&cg(Se,ve,ke,Ze,!1),We!==null&&nn!==null&&cg(Se,nn,We,Ze,!0)}}e:{if(ve=ae?to(ae):window,ke=ve.nodeName&&ve.nodeName.toLowerCase(),ke==="select"||ke==="input"&&ve.type==="file")var et=BM;else if(Hm(ve))if(Wm)et=GM;else{et=VM;var st=zM}else(ke=ve.nodeName)&&ke.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(et=HM);if(et&&(et=et(i,ae))){Gm(Se,et,l,xe);break e}st&&st(i,ve,ae),i==="focusout"&&(st=ve._wrapperState)&&st.controlled&&ve.type==="number"&&Yt(ve,"number",ve.value)}switch(st=ae?to(ae):window,i){case"focusin":(Hm(st)||st.contentEditable==="true")&&(Zs=st,Ju=ae,fa=null);break;case"focusout":fa=Ju=Zs=null;break;case"mousedown":ef=!0;break;case"contextmenu":case"mouseup":case"dragend":ef=!1,Qm(Se,l,xe);break;case"selectionchange":if(XM)break;case"keydown":case"keyup":Qm(Se,l,xe)}var ot;if($u)e:{switch(i){case"compositionstart":var ut="onCompositionStart";break e;case"compositionend":ut="onCompositionEnd";break e;case"compositionupdate":ut="onCompositionUpdate";break e}ut=void 0}else Ks?zm(i,l)&&(ut="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ut="onCompositionStart");ut&&(km&&l.locale!=="ko"&&(Ks||ut!=="onCompositionStart"?ut==="onCompositionEnd"&&Ks&&(ot=Lm()):(Ir=xe,Gu="value"in Ir?Ir.value:Ir.textContent,Ks=!0)),st=Il(ae,ut),0<st.length&&(ut=new Um(ut,i,null,l,xe),Se.push({event:ut,listeners:st}),ot?ut.data=ot:(ot=Vm(l),ot!==null&&(ut.data=ot)))),(ot=NM?UM(i,l):FM(i,l))&&(ae=Il(ae,"onBeforeInput"),0<ae.length&&(xe=new Um("onBeforeInput","beforeinput",null,l,xe),Se.push({event:xe,listeners:ae}),xe.data=ot))}ag(Se,s)})}function pa(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Il(i,s){for(var l=s+"Capture",f=[];i!==null;){var m=i,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=Dn(i,l),x!=null&&f.unshift(pa(i,x,m)),x=Dn(i,s),x!=null&&f.push(pa(i,x,m))),i=i.return}return f}function Js(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function cg(i,s,l,f,m){for(var x=s._reactName,b=[];l!==null&&l!==f;){var U=l,z=U.alternate,ae=U.stateNode;if(z!==null&&z===f)break;U.tag===5&&ae!==null&&(U=ae,m?(z=Dn(l,x),z!=null&&b.unshift(pa(l,z,U))):m||(z=Dn(l,x),z!=null&&b.push(pa(l,z,U)))),l=l.return}b.length!==0&&i.push({event:s,listeners:b})}var KM=/\r\n?/g,ZM=/\u0000|\uFFFD/g;function ug(i){return(typeof i=="string"?i:""+i).replace(KM,`
`).replace(ZM,"")}function Nl(i,s,l){if(s=ug(s),ug(i)!==s&&l)throw Error(t(425))}function Ul(){}var af=null,lf=null;function cf(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var uf=typeof setTimeout=="function"?setTimeout:void 0,QM=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,JM=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(i){return fg.resolve(null).then(i).catch(eE)}:uf;function eE(i){setTimeout(function(){throw i})}function ff(i,s){var l=s,f=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){i.removeChild(m),ra(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);ra(s)}function Ur(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function dg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var eo=Math.random().toString(36).slice(2),ki="__reactFiber$"+eo,ma="__reactProps$"+eo,ir="__reactContainer$"+eo,df="__reactEvents$"+eo,tE="__reactListeners$"+eo,nE="__reactHandles$"+eo;function ds(i){var s=i[ki];if(s)return s;for(var l=i.parentNode;l;){if(s=l[ir]||l[ki]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=dg(i);i!==null;){if(l=i[ki])return l;i=dg(i)}return s}i=l,l=i.parentNode}return null}function ga(i){return i=i[ki]||i[ir],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function to(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Fl(i){return i[ma]||null}var hf=[],no=-1;function Fr(i){return{current:i}}function jt(i){0>no||(i.current=hf[no],hf[no]=null,no--)}function Ht(i,s){no++,hf[no]=i.current,i.current=s}var kr={},wn=Fr(kr),Vn=Fr(!1),hs=kr;function io(i,s){var l=i.type.contextTypes;if(!l)return kr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in l)m[x]=s[x];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Hn(i){return i=i.childContextTypes,i!=null}function kl(){jt(Vn),jt(wn)}function hg(i,s,l){if(wn.current!==kr)throw Error(t(168));Ht(wn,s),Ht(Vn,l)}function pg(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,he(i)||"Unknown",m));return le({},l,f)}function Ol(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||kr,hs=wn.current,Ht(wn,i),Ht(Vn,Vn.current),!0}function mg(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=pg(i,s,hs),f.__reactInternalMemoizedMergedChildContext=i,jt(Vn),jt(wn),Ht(wn,i)):jt(Vn),Ht(Vn,l)}var rr=null,Bl=!1,pf=!1;function gg(i){rr===null?rr=[i]:rr.push(i)}function iE(i){Bl=!0,gg(i)}function Or(){if(!pf&&rr!==null){pf=!0;var i=0,s=ct;try{var l=rr;for(ct=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}rr=null,Bl=!1}catch(m){throw rr!==null&&(rr=rr.slice(i+1)),_l(ue,Or),m}finally{ct=s,pf=!1}}return null}var ro=[],so=0,zl=null,Vl=0,ai=[],li=0,ps=null,sr=1,or="";function ms(i,s){ro[so++]=Vl,ro[so++]=zl,zl=i,Vl=s}function vg(i,s,l){ai[li++]=sr,ai[li++]=or,ai[li++]=ps,ps=i;var f=sr;i=or;var m=32-rt(f)-1;f&=~(1<<m),l+=1;var x=32-rt(s)+m;if(30<x){var b=m-m%5;x=(f&(1<<b)-1).toString(32),f>>=b,m-=b,sr=1<<32-rt(s)+m|l<<m|f,or=x+i}else sr=1<<x|l<<m|f,or=i}function mf(i){i.return!==null&&(ms(i,1),vg(i,1,0))}function gf(i){for(;i===zl;)zl=ro[--so],ro[so]=null,Vl=ro[--so],ro[so]=null;for(;i===ps;)ps=ai[--li],ai[li]=null,or=ai[--li],ai[li]=null,sr=ai[--li],ai[li]=null}var Zn=null,Qn=null,qt=!1,yi=null;function xg(i,s){var l=di(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function _g(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Zn=i,Qn=Ur(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Zn=i,Qn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ps!==null?{id:sr,overflow:or}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=di(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Zn=i,Qn=null,!0):!1;default:return!1}}function vf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function xf(i){if(qt){var s=Qn;if(s){var l=s;if(!_g(i,s)){if(vf(i))throw Error(t(418));s=Ur(l.nextSibling);var f=Zn;s&&_g(i,s)?xg(f,l):(i.flags=i.flags&-4097|2,qt=!1,Zn=i)}}else{if(vf(i))throw Error(t(418));i.flags=i.flags&-4097|2,qt=!1,Zn=i}}}function yg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Zn=i}function Hl(i){if(i!==Zn)return!1;if(!qt)return yg(i),qt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!cf(i.type,i.memoizedProps)),s&&(s=Qn)){if(vf(i))throw Sg(),Error(t(418));for(;s;)xg(i,s),s=Ur(s.nextSibling)}if(yg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Qn=Ur(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Qn=null}}else Qn=Zn?Ur(i.stateNode.nextSibling):null;return!0}function Sg(){for(var i=Qn;i;)i=Ur(i.nextSibling)}function oo(){Qn=Zn=null,qt=!1}function _f(i){yi===null?yi=[i]:yi.push(i)}var rE=R.ReactCurrentBatchConfig;function va(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var m=f,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(b){var U=m.refs;b===null?delete U[x]:U[x]=b},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function Gl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Mg(i){var s=i._init;return s(i._payload)}function Eg(i){function s(ee,G){if(i){var ie=ee.deletions;ie===null?(ee.deletions=[G],ee.flags|=16):ie.push(G)}}function l(ee,G){if(!i)return null;for(;G!==null;)s(ee,G),G=G.sibling;return null}function f(ee,G){for(ee=new Map;G!==null;)G.key!==null?ee.set(G.key,G):ee.set(G.index,G),G=G.sibling;return ee}function m(ee,G){return ee=Xr(ee,G),ee.index=0,ee.sibling=null,ee}function x(ee,G,ie){return ee.index=ie,i?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<G?(ee.flags|=2,G):ie):(ee.flags|=2,G)):(ee.flags|=1048576,G)}function b(ee){return i&&ee.alternate===null&&(ee.flags|=2),ee}function U(ee,G,ie,Te){return G===null||G.tag!==6?(G=ud(ie,ee.mode,Te),G.return=ee,G):(G=m(G,ie),G.return=ee,G)}function z(ee,G,ie,Te){var et=ie.type;return et===O?xe(ee,G,ie.props.children,Te,ie.key):G!==null&&(G.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===Z&&Mg(et)===G.type)?(Te=m(G,ie.props),Te.ref=va(ee,G,ie),Te.return=ee,Te):(Te=hc(ie.type,ie.key,ie.props,null,ee.mode,Te),Te.ref=va(ee,G,ie),Te.return=ee,Te)}function ae(ee,G,ie,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==ie.containerInfo||G.stateNode.implementation!==ie.implementation?(G=fd(ie,ee.mode,Te),G.return=ee,G):(G=m(G,ie.children||[]),G.return=ee,G)}function xe(ee,G,ie,Te,et){return G===null||G.tag!==7?(G=Es(ie,ee.mode,Te,et),G.return=ee,G):(G=m(G,ie),G.return=ee,G)}function Se(ee,G,ie){if(typeof G=="string"&&G!==""||typeof G=="number")return G=ud(""+G,ee.mode,ie),G.return=ee,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case I:return ie=hc(G.type,G.key,G.props,null,ee.mode,ie),ie.ref=va(ee,null,G),ie.return=ee,ie;case N:return G=fd(G,ee.mode,ie),G.return=ee,G;case Z:var Te=G._init;return Se(ee,Te(G._payload),ie)}if(yt(G)||te(G))return G=Es(G,ee.mode,ie,null),G.return=ee,G;Gl(ee,G)}return null}function ve(ee,G,ie,Te){var et=G!==null?G.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return et!==null?null:U(ee,G,""+ie,Te);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:return ie.key===et?z(ee,G,ie,Te):null;case N:return ie.key===et?ae(ee,G,ie,Te):null;case Z:return et=ie._init,ve(ee,G,et(ie._payload),Te)}if(yt(ie)||te(ie))return et!==null?null:xe(ee,G,ie,Te,null);Gl(ee,ie)}return null}function ke(ee,G,ie,Te,et){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return ee=ee.get(ie)||null,U(G,ee,""+Te,et);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case I:return ee=ee.get(Te.key===null?ie:Te.key)||null,z(G,ee,Te,et);case N:return ee=ee.get(Te.key===null?ie:Te.key)||null,ae(G,ee,Te,et);case Z:var st=Te._init;return ke(ee,G,ie,st(Te._payload),et)}if(yt(Te)||te(Te))return ee=ee.get(ie)||null,xe(G,ee,Te,et,null);Gl(G,Te)}return null}function We(ee,G,ie,Te){for(var et=null,st=null,ot=G,ut=G=0,xn=null;ot!==null&&ut<ie.length;ut++){ot.index>ut?(xn=ot,ot=null):xn=ot.sibling;var Rt=ve(ee,ot,ie[ut],Te);if(Rt===null){ot===null&&(ot=xn);break}i&&ot&&Rt.alternate===null&&s(ee,ot),G=x(Rt,G,ut),st===null?et=Rt:st.sibling=Rt,st=Rt,ot=xn}if(ut===ie.length)return l(ee,ot),qt&&ms(ee,ut),et;if(ot===null){for(;ut<ie.length;ut++)ot=Se(ee,ie[ut],Te),ot!==null&&(G=x(ot,G,ut),st===null?et=ot:st.sibling=ot,st=ot);return qt&&ms(ee,ut),et}for(ot=f(ee,ot);ut<ie.length;ut++)xn=ke(ot,ee,ut,ie[ut],Te),xn!==null&&(i&&xn.alternate!==null&&ot.delete(xn.key===null?ut:xn.key),G=x(xn,G,ut),st===null?et=xn:st.sibling=xn,st=xn);return i&&ot.forEach(function(Yr){return s(ee,Yr)}),qt&&ms(ee,ut),et}function Ze(ee,G,ie,Te){var et=te(ie);if(typeof et!="function")throw Error(t(150));if(ie=et.call(ie),ie==null)throw Error(t(151));for(var st=et=null,ot=G,ut=G=0,xn=null,Rt=ie.next();ot!==null&&!Rt.done;ut++,Rt=ie.next()){ot.index>ut?(xn=ot,ot=null):xn=ot.sibling;var Yr=ve(ee,ot,Rt.value,Te);if(Yr===null){ot===null&&(ot=xn);break}i&&ot&&Yr.alternate===null&&s(ee,ot),G=x(Yr,G,ut),st===null?et=Yr:st.sibling=Yr,st=Yr,ot=xn}if(Rt.done)return l(ee,ot),qt&&ms(ee,ut),et;if(ot===null){for(;!Rt.done;ut++,Rt=ie.next())Rt=Se(ee,Rt.value,Te),Rt!==null&&(G=x(Rt,G,ut),st===null?et=Rt:st.sibling=Rt,st=Rt);return qt&&ms(ee,ut),et}for(ot=f(ee,ot);!Rt.done;ut++,Rt=ie.next())Rt=ke(ot,ee,ut,Rt.value,Te),Rt!==null&&(i&&Rt.alternate!==null&&ot.delete(Rt.key===null?ut:Rt.key),G=x(Rt,G,ut),st===null?et=Rt:st.sibling=Rt,st=Rt);return i&&ot.forEach(function(kE){return s(ee,kE)}),qt&&ms(ee,ut),et}function nn(ee,G,ie,Te){if(typeof ie=="object"&&ie!==null&&ie.type===O&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case I:e:{for(var et=ie.key,st=G;st!==null;){if(st.key===et){if(et=ie.type,et===O){if(st.tag===7){l(ee,st.sibling),G=m(st,ie.props.children),G.return=ee,ee=G;break e}}else if(st.elementType===et||typeof et=="object"&&et!==null&&et.$$typeof===Z&&Mg(et)===st.type){l(ee,st.sibling),G=m(st,ie.props),G.ref=va(ee,st,ie),G.return=ee,ee=G;break e}l(ee,st);break}else s(ee,st);st=st.sibling}ie.type===O?(G=Es(ie.props.children,ee.mode,Te,ie.key),G.return=ee,ee=G):(Te=hc(ie.type,ie.key,ie.props,null,ee.mode,Te),Te.ref=va(ee,G,ie),Te.return=ee,ee=Te)}return b(ee);case N:e:{for(st=ie.key;G!==null;){if(G.key===st)if(G.tag===4&&G.stateNode.containerInfo===ie.containerInfo&&G.stateNode.implementation===ie.implementation){l(ee,G.sibling),G=m(G,ie.children||[]),G.return=ee,ee=G;break e}else{l(ee,G);break}else s(ee,G);G=G.sibling}G=fd(ie,ee.mode,Te),G.return=ee,ee=G}return b(ee);case Z:return st=ie._init,nn(ee,G,st(ie._payload),Te)}if(yt(ie))return We(ee,G,ie,Te);if(te(ie))return Ze(ee,G,ie,Te);Gl(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,G!==null&&G.tag===6?(l(ee,G.sibling),G=m(G,ie),G.return=ee,ee=G):(l(ee,G),G=ud(ie,ee.mode,Te),G.return=ee,ee=G),b(ee)):l(ee,G)}return nn}var ao=Eg(!0),wg=Eg(!1),Wl=Fr(null),jl=null,lo=null,yf=null;function Sf(){yf=lo=jl=null}function Mf(i){var s=Wl.current;jt(Wl),i._currentValue=s}function Ef(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function co(i,s){jl=i,yf=lo=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(Gn=!0),i.firstContext=null)}function ci(i){var s=i._currentValue;if(yf!==i)if(i={context:i,memoizedValue:s,next:null},lo===null){if(jl===null)throw Error(t(308));lo=i,jl.dependencies={lanes:0,firstContext:i}}else lo=lo.next=i;return s}var gs=null;function wf(i){gs===null?gs=[i]:gs.push(i)}function Tg(i,s,l,f){var m=s.interleaved;return m===null?(l.next=l,wf(s)):(l.next=m.next,m.next=l),s.interleaved=l,ar(i,f)}function ar(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Br=!1;function Tf(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function bg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function lr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function zr(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(At&2)!==0){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,ar(i,l)}return m=f.interleaved,m===null?(s.next=s,wf(f)):(s.next=m.next,m.next=s),f.interleaved=s,ar(i,l)}function Xl(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Dt(i,l)}}function Ag(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var b={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?m=x=b:x=x.next=b,l=l.next}while(l!==null);x===null?m=x=s:x=x.next=s}else m=x=s;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function Yl(i,s,l,f){var m=i.updateQueue;Br=!1;var x=m.firstBaseUpdate,b=m.lastBaseUpdate,U=m.shared.pending;if(U!==null){m.shared.pending=null;var z=U,ae=z.next;z.next=null,b===null?x=ae:b.next=ae,b=z;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,U=xe.lastBaseUpdate,U!==b&&(U===null?xe.firstBaseUpdate=ae:U.next=ae,xe.lastBaseUpdate=z))}if(x!==null){var Se=m.baseState;b=0,xe=ae=z=null,U=x;do{var ve=U.lane,ke=U.eventTime;if((f&ve)===ve){xe!==null&&(xe=xe.next={eventTime:ke,lane:0,tag:U.tag,payload:U.payload,callback:U.callback,next:null});e:{var We=i,Ze=U;switch(ve=s,ke=l,Ze.tag){case 1:if(We=Ze.payload,typeof We=="function"){Se=We.call(ke,Se,ve);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=Ze.payload,ve=typeof We=="function"?We.call(ke,Se,ve):We,ve==null)break e;Se=le({},Se,ve);break e;case 2:Br=!0}}U.callback!==null&&U.lane!==0&&(i.flags|=64,ve=m.effects,ve===null?m.effects=[U]:ve.push(U))}else ke={eventTime:ke,lane:ve,tag:U.tag,payload:U.payload,callback:U.callback,next:null},xe===null?(ae=xe=ke,z=Se):xe=xe.next=ke,b|=ve;if(U=U.next,U===null){if(U=m.shared.pending,U===null)break;ve=U,U=ve.next,ve.next=null,m.lastBaseUpdate=ve,m.shared.pending=null}}while(!0);if(xe===null&&(z=Se),m.baseState=z,m.firstBaseUpdate=ae,m.lastBaseUpdate=xe,s=m.shared.interleaved,s!==null){m=s;do b|=m.lane,m=m.next;while(m!==s)}else x===null&&(m.shared.lanes=0);_s|=b,i.lanes=b,i.memoizedState=Se}}function Cg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var xa={},Oi=Fr(xa),_a=Fr(xa),ya=Fr(xa);function vs(i){if(i===xa)throw Error(t(174));return i}function bf(i,s){switch(Ht(ya,s),Ht(_a,i),Ht(Oi,xa),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ge(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ge(s,i)}jt(Oi),Ht(Oi,s)}function uo(){jt(Oi),jt(_a),jt(ya)}function Rg(i){vs(ya.current);var s=vs(Oi.current),l=ge(s,i.type);s!==l&&(Ht(_a,i),Ht(Oi,l))}function Af(i){_a.current===i&&(jt(Oi),jt(_a))}var $t=Fr(0);function ql(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Cf=[];function Rf(){for(var i=0;i<Cf.length;i++)Cf[i]._workInProgressVersionPrimary=null;Cf.length=0}var $l=R.ReactCurrentDispatcher,Pf=R.ReactCurrentBatchConfig,xs=0,Kt=null,cn=null,gn=null,Kl=!1,Sa=!1,Ma=0,sE=0;function Tn(){throw Error(t(321))}function Df(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!_i(i[l],s[l]))return!1;return!0}function Lf(i,s,l,f,m,x){if(xs=x,Kt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,$l.current=i===null||i.memoizedState===null?cE:uE,i=l(f,m),Sa){x=0;do{if(Sa=!1,Ma=0,25<=x)throw Error(t(301));x+=1,gn=cn=null,s.updateQueue=null,$l.current=fE,i=l(f,m)}while(Sa)}if($l.current=Jl,s=cn!==null&&cn.next!==null,xs=0,gn=cn=Kt=null,Kl=!1,s)throw Error(t(300));return i}function If(){var i=Ma!==0;return Ma=0,i}function Bi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?Kt.memoizedState=gn=i:gn=gn.next=i,gn}function ui(){if(cn===null){var i=Kt.alternate;i=i!==null?i.memoizedState:null}else i=cn.next;var s=gn===null?Kt.memoizedState:gn.next;if(s!==null)gn=s,cn=i;else{if(i===null)throw Error(t(310));cn=i,i={memoizedState:cn.memoizedState,baseState:cn.baseState,baseQueue:cn.baseQueue,queue:cn.queue,next:null},gn===null?Kt.memoizedState=gn=i:gn=gn.next=i}return gn}function Ea(i,s){return typeof s=="function"?s(i):s}function Nf(i){var s=ui(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=cn,m=f.baseQueue,x=l.pending;if(x!==null){if(m!==null){var b=m.next;m.next=x.next,x.next=b}f.baseQueue=m=x,l.pending=null}if(m!==null){x=m.next,f=f.baseState;var U=b=null,z=null,ae=x;do{var xe=ae.lane;if((xs&xe)===xe)z!==null&&(z=z.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),f=ae.hasEagerState?ae.eagerState:i(f,ae.action);else{var Se={lane:xe,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};z===null?(U=z=Se,b=f):z=z.next=Se,Kt.lanes|=xe,_s|=xe}ae=ae.next}while(ae!==null&&ae!==x);z===null?b=f:z.next=U,_i(f,s.memoizedState)||(Gn=!0),s.memoizedState=f,s.baseState=b,s.baseQueue=z,l.lastRenderedState=f}if(i=l.interleaved,i!==null){m=i;do x=m.lane,Kt.lanes|=x,_s|=x,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Uf(i){var s=ui(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,m=l.pending,x=s.memoizedState;if(m!==null){l.pending=null;var b=m=m.next;do x=i(x,b.action),b=b.next;while(b!==m);_i(x,s.memoizedState)||(Gn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,f]}function Pg(){}function Dg(i,s){var l=Kt,f=ui(),m=s(),x=!_i(f.memoizedState,m);if(x&&(f.memoizedState=m,Gn=!0),f=f.queue,Ff(Ng.bind(null,l,f,i),[i]),f.getSnapshot!==s||x||gn!==null&&gn.memoizedState.tag&1){if(l.flags|=2048,wa(9,Ig.bind(null,l,f,m,s),void 0,null),vn===null)throw Error(t(349));(xs&30)!==0||Lg(l,s,m)}return m}function Lg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Ig(i,s,l,f){s.value=l,s.getSnapshot=f,Ug(s)&&Fg(i)}function Ng(i,s,l){return l(function(){Ug(s)&&Fg(i)})}function Ug(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!_i(i,l)}catch{return!0}}function Fg(i){var s=ar(i,1);s!==null&&wi(s,i,1,-1)}function kg(i){var s=Bi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:i},s.queue=i,i=i.dispatch=lE.bind(null,Kt,i),[s.memoizedState,i]}function wa(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=Kt.updateQueue,s===null?(s={lastEffect:null,stores:null},Kt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function Og(){return ui().memoizedState}function Zl(i,s,l,f){var m=Bi();Kt.flags|=i,m.memoizedState=wa(1|s,l,void 0,f===void 0?null:f)}function Ql(i,s,l,f){var m=ui();f=f===void 0?null:f;var x=void 0;if(cn!==null){var b=cn.memoizedState;if(x=b.destroy,f!==null&&Df(f,b.deps)){m.memoizedState=wa(s,l,x,f);return}}Kt.flags|=i,m.memoizedState=wa(1|s,l,x,f)}function Bg(i,s){return Zl(8390656,8,i,s)}function Ff(i,s){return Ql(2048,8,i,s)}function zg(i,s){return Ql(4,2,i,s)}function Vg(i,s){return Ql(4,4,i,s)}function Hg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Gg(i,s,l){return l=l!=null?l.concat([i]):null,Ql(4,4,Hg.bind(null,s,i),l)}function kf(){}function Wg(i,s){var l=ui();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Df(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function jg(i,s){var l=ui();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&Df(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function Xg(i,s,l){return(xs&21)===0?(i.baseState&&(i.baseState=!1,Gn=!0),i.memoizedState=l):(_i(l,s)||(l=Bn(),Kt.lanes|=l,_s|=l,i.baseState=!0),s)}function oE(i,s){var l=ct;ct=l!==0&&4>l?l:4,i(!0);var f=Pf.transition;Pf.transition={};try{i(!1),s()}finally{ct=l,Pf.transition=f}}function Yg(){return ui().memoizedState}function aE(i,s,l){var f=Wr(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},qg(i))$g(s,l);else if(l=Tg(i,s,l,f),l!==null){var m=Nn();wi(l,i,f,m),Kg(l,s,f)}}function lE(i,s,l){var f=Wr(i),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(qg(i))$g(s,m);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var b=s.lastRenderedState,U=x(b,l);if(m.hasEagerState=!0,m.eagerState=U,_i(U,b)){var z=s.interleaved;z===null?(m.next=m,wf(s)):(m.next=z.next,z.next=m),s.interleaved=m;return}}catch{}finally{}l=Tg(i,s,m,f),l!==null&&(m=Nn(),wi(l,i,f,m),Kg(l,s,f))}}function qg(i){var s=i.alternate;return i===Kt||s!==null&&s===Kt}function $g(i,s){Sa=Kl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Kg(i,s,l){if((l&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Dt(i,l)}}var Jl={readContext:ci,useCallback:Tn,useContext:Tn,useEffect:Tn,useImperativeHandle:Tn,useInsertionEffect:Tn,useLayoutEffect:Tn,useMemo:Tn,useReducer:Tn,useRef:Tn,useState:Tn,useDebugValue:Tn,useDeferredValue:Tn,useTransition:Tn,useMutableSource:Tn,useSyncExternalStore:Tn,useId:Tn,unstable_isNewReconciler:!1},cE={readContext:ci,useCallback:function(i,s){return Bi().memoizedState=[i,s===void 0?null:s],i},useContext:ci,useEffect:Bg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Zl(4194308,4,Hg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Zl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Zl(4,2,i,s)},useMemo:function(i,s){var l=Bi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=Bi();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=aE.bind(null,Kt,i),[f.memoizedState,i]},useRef:function(i){var s=Bi();return i={current:i},s.memoizedState=i},useState:kg,useDebugValue:kf,useDeferredValue:function(i){return Bi().memoizedState=i},useTransition:function(){var i=kg(!1),s=i[0];return i=oE.bind(null,i[1]),Bi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=Kt,m=Bi();if(qt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),vn===null)throw Error(t(349));(xs&30)!==0||Lg(f,s,l)}m.memoizedState=l;var x={value:l,getSnapshot:s};return m.queue=x,Bg(Ng.bind(null,f,x,i),[i]),f.flags|=2048,wa(9,Ig.bind(null,f,x,l,s),void 0,null),l},useId:function(){var i=Bi(),s=vn.identifierPrefix;if(qt){var l=or,f=sr;l=(f&~(1<<32-rt(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ma++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=sE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},uE={readContext:ci,useCallback:Wg,useContext:ci,useEffect:Ff,useImperativeHandle:Gg,useInsertionEffect:zg,useLayoutEffect:Vg,useMemo:jg,useReducer:Nf,useRef:Og,useState:function(){return Nf(Ea)},useDebugValue:kf,useDeferredValue:function(i){var s=ui();return Xg(s,cn.memoizedState,i)},useTransition:function(){var i=Nf(Ea)[0],s=ui().memoizedState;return[i,s]},useMutableSource:Pg,useSyncExternalStore:Dg,useId:Yg,unstable_isNewReconciler:!1},fE={readContext:ci,useCallback:Wg,useContext:ci,useEffect:Ff,useImperativeHandle:Gg,useInsertionEffect:zg,useLayoutEffect:Vg,useMemo:jg,useReducer:Uf,useRef:Og,useState:function(){return Uf(Ea)},useDebugValue:kf,useDeferredValue:function(i){var s=ui();return cn===null?s.memoizedState=i:Xg(s,cn.memoizedState,i)},useTransition:function(){var i=Uf(Ea)[0],s=ui().memoizedState;return[i,s]},useMutableSource:Pg,useSyncExternalStore:Dg,useId:Yg,unstable_isNewReconciler:!1};function Si(i,s){if(i&&i.defaultProps){s=le({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Of(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:le({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var ec={isMounted:function(i){return(i=i._reactInternals)?Fi(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=Nn(),m=Wr(i),x=lr(f,m);x.payload=s,l!=null&&(x.callback=l),s=zr(i,x,m),s!==null&&(wi(s,i,m,f),Xl(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=Nn(),m=Wr(i),x=lr(f,m);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=zr(i,x,m),s!==null&&(wi(s,i,m,f),Xl(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Nn(),f=Wr(i),m=lr(l,f);m.tag=2,s!=null&&(m.callback=s),s=zr(i,m,f),s!==null&&(wi(s,i,f,l),Xl(s,i,f))}};function Zg(i,s,l,f,m,x,b){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,x,b):s.prototype&&s.prototype.isPureReactComponent?!ua(l,f)||!ua(m,x):!0}function Qg(i,s,l){var f=!1,m=kr,x=s.contextType;return typeof x=="object"&&x!==null?x=ci(x):(m=Hn(s)?hs:wn.current,f=s.contextTypes,x=(f=f!=null)?io(i,m):kr),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=ec,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=x),s}function Jg(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&ec.enqueueReplaceState(s,s.state,null)}function Bf(i,s,l,f){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},Tf(i);var x=s.contextType;typeof x=="object"&&x!==null?m.context=ci(x):(x=Hn(s)?hs:wn.current,m.context=io(i,x)),m.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Of(i,s,x,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&ec.enqueueReplaceState(m,m.state,null),Yl(i,l,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function fo(i,s){try{var l="",f=s;do l+=qe(f),f=f.return;while(f);var m=l}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:m,digest:null}}function zf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function Vf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var dE=typeof WeakMap=="function"?WeakMap:Map;function e0(i,s,l){l=lr(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){ac||(ac=!0,nd=f),Vf(i,s)},l}function t0(i,s,l){l=lr(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;l.payload=function(){return f(m)},l.callback=function(){Vf(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){Vf(i,s),typeof f!="function"&&(Hr===null?Hr=new Set([this]):Hr.add(this));var b=s.stack;this.componentDidCatch(s.value,{componentStack:b!==null?b:""})}),l}function n0(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new dE;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(l)||(m.add(l),i=bE.bind(null,i,s,l),s.then(i,i))}function i0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function r0(i,s,l,f,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=lr(-1,1),s.tag=2,zr(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var hE=R.ReactCurrentOwner,Gn=!1;function In(i,s,l,f){s.child=i===null?wg(s,null,l,f):ao(s,i.child,l,f)}function s0(i,s,l,f,m){l=l.render;var x=s.ref;return co(s,m),f=Lf(i,s,l,f,x,m),l=If(),i!==null&&!Gn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,cr(i,s,m)):(qt&&l&&mf(s),s.flags|=1,In(i,s,f,m),s.child)}function o0(i,s,l,f,m){if(i===null){var x=l.type;return typeof x=="function"&&!cd(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,a0(i,s,x,f,m)):(i=hc(l.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&m)===0){var b=x.memoizedProps;if(l=l.compare,l=l!==null?l:ua,l(b,f)&&i.ref===s.ref)return cr(i,s,m)}return s.flags|=1,i=Xr(x,f),i.ref=s.ref,i.return=s,s.child=i}function a0(i,s,l,f,m){if(i!==null){var x=i.memoizedProps;if(ua(x,f)&&i.ref===s.ref)if(Gn=!1,s.pendingProps=f=x,(i.lanes&m)!==0)(i.flags&131072)!==0&&(Gn=!0);else return s.lanes=i.lanes,cr(i,s,m)}return Hf(i,s,l,f,m)}function l0(i,s,l){var f=s.pendingProps,m=f.children,x=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(po,Jn),Jn|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ht(po,Jn),Jn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,Ht(po,Jn),Jn|=f}else x!==null?(f=x.baseLanes|l,s.memoizedState=null):f=l,Ht(po,Jn),Jn|=f;return In(i,s,m,l),s.child}function c0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Hf(i,s,l,f,m){var x=Hn(l)?hs:wn.current;return x=io(s,x),co(s,m),l=Lf(i,s,l,f,x,m),f=If(),i!==null&&!Gn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,cr(i,s,m)):(qt&&f&&mf(s),s.flags|=1,In(i,s,l,m),s.child)}function u0(i,s,l,f,m){if(Hn(l)){var x=!0;Ol(s)}else x=!1;if(co(s,m),s.stateNode===null)nc(i,s),Qg(s,l,f),Bf(s,l,f,m),f=!0;else if(i===null){var b=s.stateNode,U=s.memoizedProps;b.props=U;var z=b.context,ae=l.contextType;typeof ae=="object"&&ae!==null?ae=ci(ae):(ae=Hn(l)?hs:wn.current,ae=io(s,ae));var xe=l.getDerivedStateFromProps,Se=typeof xe=="function"||typeof b.getSnapshotBeforeUpdate=="function";Se||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(U!==f||z!==ae)&&Jg(s,b,f,ae),Br=!1;var ve=s.memoizedState;b.state=ve,Yl(s,f,b,m),z=s.memoizedState,U!==f||ve!==z||Vn.current||Br?(typeof xe=="function"&&(Of(s,l,xe,f),z=s.memoizedState),(U=Br||Zg(s,l,U,f,ve,z,ae))?(Se||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(s.flags|=4194308)):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=z),b.props=f,b.state=z,b.context=ae,f=U):(typeof b.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{b=s.stateNode,bg(i,s),U=s.memoizedProps,ae=s.type===s.elementType?U:Si(s.type,U),b.props=ae,Se=s.pendingProps,ve=b.context,z=l.contextType,typeof z=="object"&&z!==null?z=ci(z):(z=Hn(l)?hs:wn.current,z=io(s,z));var ke=l.getDerivedStateFromProps;(xe=typeof ke=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(U!==Se||ve!==z)&&Jg(s,b,f,z),Br=!1,ve=s.memoizedState,b.state=ve,Yl(s,f,b,m);var We=s.memoizedState;U!==Se||ve!==We||Vn.current||Br?(typeof ke=="function"&&(Of(s,l,ke,f),We=s.memoizedState),(ae=Br||Zg(s,l,ae,f,ve,We,z)||!1)?(xe||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(f,We,z),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(f,We,z)),typeof b.componentDidUpdate=="function"&&(s.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof b.componentDidUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=We),b.props=f,b.state=We,b.context=z,f=ae):(typeof b.componentDidUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||U===i.memoizedProps&&ve===i.memoizedState||(s.flags|=1024),f=!1)}return Gf(i,s,l,f,x,m)}function Gf(i,s,l,f,m,x){c0(i,s);var b=(s.flags&128)!==0;if(!f&&!b)return m&&mg(s,l,!1),cr(i,s,x);f=s.stateNode,hE.current=s;var U=b&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&b?(s.child=ao(s,i.child,null,x),s.child=ao(s,null,U,x)):In(i,s,U,x),s.memoizedState=f.state,m&&mg(s,l,!0),s.child}function f0(i){var s=i.stateNode;s.pendingContext?hg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&hg(i,s.context,!1),bf(i,s.containerInfo)}function d0(i,s,l,f,m){return oo(),_f(m),s.flags|=256,In(i,s,l,f),s.child}var Wf={dehydrated:null,treeContext:null,retryLane:0};function jf(i){return{baseLanes:i,cachePool:null,transitions:null}}function h0(i,s,l){var f=s.pendingProps,m=$t.current,x=!1,b=(s.flags&128)!==0,U;if((U=b)||(U=i!==null&&i.memoizedState===null?!1:(m&2)!==0),U?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Ht($t,m&1),i===null)return xf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(b=f.children,i=f.fallback,x?(f=s.mode,x=s.child,b={mode:"hidden",children:b},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=b):x=pc(b,f,0,null),i=Es(i,f,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=jf(l),s.memoizedState=Wf,i):Xf(s,b));if(m=i.memoizedState,m!==null&&(U=m.dehydrated,U!==null))return pE(i,s,b,f,U,m,l);if(x){x=f.fallback,b=s.mode,m=i.child,U=m.sibling;var z={mode:"hidden",children:f.children};return(b&1)===0&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=z,s.deletions=null):(f=Xr(m,z),f.subtreeFlags=m.subtreeFlags&14680064),U!==null?x=Xr(U,x):(x=Es(x,b,l,null),x.flags|=2),x.return=s,f.return=s,f.sibling=x,s.child=f,f=x,x=s.child,b=i.child.memoizedState,b=b===null?jf(l):{baseLanes:b.baseLanes|l,cachePool:null,transitions:b.transitions},x.memoizedState=b,x.childLanes=i.childLanes&~l,s.memoizedState=Wf,f}return x=i.child,i=x.sibling,f=Xr(x,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function Xf(i,s){return s=pc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function tc(i,s,l,f){return f!==null&&_f(f),ao(s,i.child,null,l),i=Xf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function pE(i,s,l,f,m,x,b){if(l)return s.flags&256?(s.flags&=-257,f=zf(Error(t(422))),tc(i,s,b,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=f.fallback,m=s.mode,f=pc({mode:"visible",children:f.children},m,0,null),x=Es(x,m,b,null),x.flags|=2,f.return=s,x.return=s,f.sibling=x,s.child=f,(s.mode&1)!==0&&ao(s,i.child,null,b),s.child.memoizedState=jf(b),s.memoizedState=Wf,x);if((s.mode&1)===0)return tc(i,s,b,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var U=f.dgst;return f=U,x=Error(t(419)),f=zf(x,f,void 0),tc(i,s,b,f)}if(U=(b&i.childLanes)!==0,Gn||U){if(f=vn,f!==null){switch(b&-b){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|b))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,ar(i,m),wi(f,i,m,-1))}return ld(),f=zf(Error(t(421))),tc(i,s,b,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=AE.bind(null,i),m._reactRetry=s,null):(i=x.treeContext,Qn=Ur(m.nextSibling),Zn=s,qt=!0,yi=null,i!==null&&(ai[li++]=sr,ai[li++]=or,ai[li++]=ps,sr=i.id,or=i.overflow,ps=s),s=Xf(s,f.children),s.flags|=4096,s)}function p0(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),Ef(i.return,s,l)}function Yf(i,s,l,f,m){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=m)}function m0(i,s,l){var f=s.pendingProps,m=f.revealOrder,x=f.tail;if(In(i,s,f.children,l),f=$t.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&p0(i,l,s);else if(i.tag===19)p0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Ht($t,f),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&ql(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),Yf(s,!1,m,l,x);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&ql(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}Yf(s,!0,l,null,x);break;case"together":Yf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function nc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function cr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),_s|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Xr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Xr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function mE(i,s,l){switch(s.tag){case 3:f0(s),oo();break;case 5:Rg(s);break;case 1:Hn(s.type)&&Ol(s);break;case 4:bf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;Ht(Wl,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Ht($t,$t.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?h0(i,s,l):(Ht($t,$t.current&1),i=cr(i,s,l),i!==null?i.sibling:null);Ht($t,$t.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(i.flags&128)!==0){if(f)return m0(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ht($t,$t.current),f)break;return null;case 22:case 23:return s.lanes=0,l0(i,s,l)}return cr(i,s,l)}var g0,qf,v0,x0;g0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},qf=function(){},v0=function(i,s,l,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,vs(Oi.current);var x=null;switch(l){case"input":m=wt(i,m),f=wt(i,f),x=[];break;case"select":m=le({},m,{value:void 0}),f=le({},f,{value:void 0}),x=[];break;case"textarea":m=$e(i,m),f=$e(i,f),x=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Ul)}He(l,f);var b;l=null;for(ae in m)if(!f.hasOwnProperty(ae)&&m.hasOwnProperty(ae)&&m[ae]!=null)if(ae==="style"){var U=m[ae];for(b in U)U.hasOwnProperty(b)&&(l||(l={}),l[b]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?x||(x=[]):(x=x||[]).push(ae,null));for(ae in f){var z=f[ae];if(U=m!=null?m[ae]:void 0,f.hasOwnProperty(ae)&&z!==U&&(z!=null||U!=null))if(ae==="style")if(U){for(b in U)!U.hasOwnProperty(b)||z&&z.hasOwnProperty(b)||(l||(l={}),l[b]="");for(b in z)z.hasOwnProperty(b)&&U[b]!==z[b]&&(l||(l={}),l[b]=z[b])}else l||(x||(x=[]),x.push(ae,l)),l=z;else ae==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,U=U?U.__html:void 0,z!=null&&U!==z&&(x=x||[]).push(ae,z)):ae==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(ae,""+z):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(z!=null&&ae==="onScroll"&&Wt("scroll",i),x||U===z||(x=[])):(x=x||[]).push(ae,z))}l&&(x=x||[]).push("style",l);var ae=x;(s.updateQueue=ae)&&(s.flags|=4)}},x0=function(i,s,l,f){l!==f&&(s.flags|=4)};function Ta(i,s){if(!qt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function bn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function gE(i,s,l){var f=s.pendingProps;switch(gf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bn(s),null;case 1:return Hn(s.type)&&kl(),bn(s),null;case 3:return f=s.stateNode,uo(),jt(Vn),jt(wn),Rf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Hl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,yi!==null&&(sd(yi),yi=null))),qf(i,s),bn(s),null;case 5:Af(s);var m=vs(ya.current);if(l=s.type,i!==null&&s.stateNode!=null)v0(i,s,l,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return bn(s),null}if(i=vs(Oi.current),Hl(s)){f=s.stateNode,l=s.type;var x=s.memoizedProps;switch(f[ki]=s,f[ma]=x,i=(s.mode&1)!==0,l){case"dialog":Wt("cancel",f),Wt("close",f);break;case"iframe":case"object":case"embed":Wt("load",f);break;case"video":case"audio":for(m=0;m<da.length;m++)Wt(da[m],f);break;case"source":Wt("error",f);break;case"img":case"image":case"link":Wt("error",f),Wt("load",f);break;case"details":Wt("toggle",f);break;case"input":Lt(f,x),Wt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Wt("invalid",f);break;case"textarea":L(f,x),Wt("invalid",f)}He(l,x),m=null;for(var b in x)if(x.hasOwnProperty(b)){var U=x[b];b==="children"?typeof U=="string"?f.textContent!==U&&(x.suppressHydrationWarning!==!0&&Nl(f.textContent,U,i),m=["children",U]):typeof U=="number"&&f.textContent!==""+U&&(x.suppressHydrationWarning!==!0&&Nl(f.textContent,U,i),m=["children",""+U]):o.hasOwnProperty(b)&&U!=null&&b==="onScroll"&&Wt("scroll",f)}switch(l){case"input":it(f),V(f,x,!0);break;case"textarea":it(f),j(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Ul)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{b=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=pe(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=b.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=b.createElement(l,{is:f.is}):(i=b.createElement(l),l==="select"&&(b=i,f.multiple?b.multiple=!0:f.size&&(b.size=f.size))):i=b.createElementNS(i,l),i[ki]=s,i[ma]=f,g0(i,s,!1,!1),s.stateNode=i;e:{switch(b=Ie(l,f),l){case"dialog":Wt("cancel",i),Wt("close",i),m=f;break;case"iframe":case"object":case"embed":Wt("load",i),m=f;break;case"video":case"audio":for(m=0;m<da.length;m++)Wt(da[m],i);m=f;break;case"source":Wt("error",i),m=f;break;case"img":case"image":case"link":Wt("error",i),Wt("load",i),m=f;break;case"details":Wt("toggle",i),m=f;break;case"input":Lt(i,f),m=wt(i,f),Wt("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=le({},f,{value:void 0}),Wt("invalid",i);break;case"textarea":L(i,f),m=$e(i,f),Wt("invalid",i);break;default:m=f}He(l,m),U=m;for(x in U)if(U.hasOwnProperty(x)){var z=U[x];x==="style"?be(i,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ve(i,z)):x==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&Ae(i,z):typeof z=="number"&&Ae(i,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?z!=null&&x==="onScroll"&&Wt("scroll",i):z!=null&&P(i,x,z,b))}switch(l){case"input":it(i),V(i,f,!1);break;case"textarea":it(i),j(i);break;case"option":f.value!=null&&i.setAttribute("value",""+me(f.value));break;case"select":i.multiple=!!f.multiple,x=f.value,x!=null?Tt(i,!!f.multiple,x,!1):f.defaultValue!=null&&Tt(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=Ul)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return bn(s),null;case 6:if(i&&s.stateNode!=null)x0(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=vs(ya.current),vs(Oi.current),Hl(s)){if(f=s.stateNode,l=s.memoizedProps,f[ki]=s,(x=f.nodeValue!==l)&&(i=Zn,i!==null))switch(i.tag){case 3:Nl(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Nl(f.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[ki]=s,s.stateNode=f}return bn(s),null;case 13:if(jt($t),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(qt&&Qn!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Sg(),oo(),s.flags|=98560,x=!1;else if(x=Hl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[ki]=s}else oo(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;bn(s),x=!1}else yi!==null&&(sd(yi),yi=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||($t.current&1)!==0?un===0&&(un=3):ld())),s.updateQueue!==null&&(s.flags|=4),bn(s),null);case 4:return uo(),qf(i,s),i===null&&ha(s.stateNode.containerInfo),bn(s),null;case 10:return Mf(s.type._context),bn(s),null;case 17:return Hn(s.type)&&kl(),bn(s),null;case 19:if(jt($t),x=s.memoizedState,x===null)return bn(s),null;if(f=(s.flags&128)!==0,b=x.rendering,b===null)if(f)Ta(x,!1);else{if(un!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(b=ql(i),b!==null){for(s.flags|=128,Ta(x,!1),f=b.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)x=l,i=f,x.flags&=14680066,b=x.alternate,b===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=b.childLanes,x.lanes=b.lanes,x.child=b.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=b.memoizedProps,x.memoizedState=b.memoizedState,x.updateQueue=b.updateQueue,x.type=b.type,i=b.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ht($t,$t.current&1|2),s.child}i=i.sibling}x.tail!==null&&A()>mo&&(s.flags|=128,f=!0,Ta(x,!1),s.lanes=4194304)}else{if(!f)if(i=ql(b),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ta(x,!0),x.tail===null&&x.tailMode==="hidden"&&!b.alternate&&!qt)return bn(s),null}else 2*A()-x.renderingStartTime>mo&&l!==1073741824&&(s.flags|=128,f=!0,Ta(x,!1),s.lanes=4194304);x.isBackwards?(b.sibling=s.child,s.child=b):(l=x.last,l!==null?l.sibling=b:s.child=b,x.last=b)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=A(),s.sibling=null,l=$t.current,Ht($t,f?l&1|2:l&1),s):(bn(s),null);case 22:case 23:return ad(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Jn&1073741824)!==0&&(bn(s),s.subtreeFlags&6&&(s.flags|=8192)):bn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function vE(i,s){switch(gf(s),s.tag){case 1:return Hn(s.type)&&kl(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return uo(),jt(Vn),jt(wn),Rf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return Af(s),null;case 13:if(jt($t),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));oo()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return jt($t),null;case 4:return uo(),null;case 10:return Mf(s.type._context),null;case 22:case 23:return ad(),null;case 24:return null;default:return null}}var ic=!1,An=!1,xE=typeof WeakSet=="function"?WeakSet:Set,ze=null;function ho(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Qt(i,s,f)}else l.current=null}function $f(i,s,l){try{l()}catch(f){Qt(i,s,f)}}var _0=!1;function _E(i,s){if(af=El,i=Zm(),Qu(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var b=0,U=-1,z=-1,ae=0,xe=0,Se=i,ve=null;t:for(;;){for(var ke;Se!==l||m!==0&&Se.nodeType!==3||(U=b+m),Se!==x||f!==0&&Se.nodeType!==3||(z=b+f),Se.nodeType===3&&(b+=Se.nodeValue.length),(ke=Se.firstChild)!==null;)ve=Se,Se=ke;for(;;){if(Se===i)break t;if(ve===l&&++ae===m&&(U=b),ve===x&&++xe===f&&(z=b),(ke=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=ke}l=U===-1||z===-1?null:{start:U,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(lf={focusedElem:i,selectionRange:l},El=!1,ze=s;ze!==null;)if(s=ze,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ze=i;else for(;ze!==null;){s=ze;try{var We=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var Ze=We.memoizedProps,nn=We.memoizedState,ee=s.stateNode,G=ee.getSnapshotBeforeUpdate(s.elementType===s.type?Ze:Si(s.type,Ze),nn);ee.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var ie=s.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Qt(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,ze=i;break}ze=s.return}return We=_0,_0=!1,We}function ba(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var x=m.destroy;m.destroy=void 0,x!==void 0&&$f(s,l,x)}m=m.next}while(m!==f)}}function rc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Kf(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function y0(i){var s=i.alternate;s!==null&&(i.alternate=null,y0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[ki],delete s[ma],delete s[df],delete s[tE],delete s[nE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function S0(i){return i.tag===5||i.tag===3||i.tag===4}function M0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||S0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Zf(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Ul));else if(f!==4&&(i=i.child,i!==null))for(Zf(i,s,l),i=i.sibling;i!==null;)Zf(i,s,l),i=i.sibling}function Qf(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Qf(i,s,l),i=i.sibling;i!==null;)Qf(i,s,l),i=i.sibling}var yn=null,Mi=!1;function Vr(i,s,l){for(l=l.child;l!==null;)E0(i,s,l),l=l.sibling}function E0(i,s,l){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(Re,l)}catch{}switch(l.tag){case 5:An||ho(l,s);case 6:var f=yn,m=Mi;yn=null,Vr(i,s,l),yn=f,Mi=m,yn!==null&&(Mi?(i=yn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):yn.removeChild(l.stateNode));break;case 18:yn!==null&&(Mi?(i=yn,l=l.stateNode,i.nodeType===8?ff(i.parentNode,l):i.nodeType===1&&ff(i,l),ra(i)):ff(yn,l.stateNode));break;case 4:f=yn,m=Mi,yn=l.stateNode.containerInfo,Mi=!0,Vr(i,s,l),yn=f,Mi=m;break;case 0:case 11:case 14:case 15:if(!An&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var x=m,b=x.destroy;x=x.tag,b!==void 0&&((x&2)!==0||(x&4)!==0)&&$f(l,s,b),m=m.next}while(m!==f)}Vr(i,s,l);break;case 1:if(!An&&(ho(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(U){Qt(l,s,U)}Vr(i,s,l);break;case 21:Vr(i,s,l);break;case 22:l.mode&1?(An=(f=An)||l.memoizedState!==null,Vr(i,s,l),An=f):Vr(i,s,l);break;default:Vr(i,s,l)}}function w0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new xE),s.forEach(function(f){var m=CE.bind(null,i,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Ei(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var x=i,b=s,U=b;e:for(;U!==null;){switch(U.tag){case 5:yn=U.stateNode,Mi=!1;break e;case 3:yn=U.stateNode.containerInfo,Mi=!0;break e;case 4:yn=U.stateNode.containerInfo,Mi=!0;break e}U=U.return}if(yn===null)throw Error(t(160));E0(x,b,m),yn=null,Mi=!1;var z=m.alternate;z!==null&&(z.return=null),m.return=null}catch(ae){Qt(m,s,ae)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)T0(s,i),s=s.sibling}function T0(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ei(s,i),zi(i),f&4){try{ba(3,i,i.return),rc(3,i)}catch(Ze){Qt(i,i.return,Ze)}try{ba(5,i,i.return)}catch(Ze){Qt(i,i.return,Ze)}}break;case 1:Ei(s,i),zi(i),f&512&&l!==null&&ho(l,l.return);break;case 5:if(Ei(s,i),zi(i),f&512&&l!==null&&ho(l,l.return),i.flags&32){var m=i.stateNode;try{Ae(m,"")}catch(Ze){Qt(i,i.return,Ze)}}if(f&4&&(m=i.stateNode,m!=null)){var x=i.memoizedProps,b=l!==null?l.memoizedProps:x,U=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{U==="input"&&x.type==="radio"&&x.name!=null&&ht(m,x),Ie(U,b);var ae=Ie(U,x);for(b=0;b<z.length;b+=2){var xe=z[b],Se=z[b+1];xe==="style"?be(m,Se):xe==="dangerouslySetInnerHTML"?Ve(m,Se):xe==="children"?Ae(m,Se):P(m,xe,Se,ae)}switch(U){case"input":Gt(m,x);break;case"textarea":w(m,x);break;case"select":var ve=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var ke=x.value;ke!=null?Tt(m,!!x.multiple,ke,!1):ve!==!!x.multiple&&(x.defaultValue!=null?Tt(m,!!x.multiple,x.defaultValue,!0):Tt(m,!!x.multiple,x.multiple?[]:"",!1))}m[ma]=x}catch(Ze){Qt(i,i.return,Ze)}}break;case 6:if(Ei(s,i),zi(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,x=i.memoizedProps;try{m.nodeValue=x}catch(Ze){Qt(i,i.return,Ze)}}break;case 3:if(Ei(s,i),zi(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{ra(s.containerInfo)}catch(Ze){Qt(i,i.return,Ze)}break;case 4:Ei(s,i),zi(i);break;case 13:Ei(s,i),zi(i),m=i.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(td=A())),f&4&&w0(i);break;case 22:if(xe=l!==null&&l.memoizedState!==null,i.mode&1?(An=(ae=An)||xe,Ei(s,i),An=ae):Ei(s,i),zi(i),f&8192){if(ae=i.memoizedState!==null,(i.stateNode.isHidden=ae)&&!xe&&(i.mode&1)!==0)for(ze=i,xe=i.child;xe!==null;){for(Se=ze=xe;ze!==null;){switch(ve=ze,ke=ve.child,ve.tag){case 0:case 11:case 14:case 15:ba(4,ve,ve.return);break;case 1:ho(ve,ve.return);var We=ve.stateNode;if(typeof We.componentWillUnmount=="function"){f=ve,l=ve.return;try{s=f,We.props=s.memoizedProps,We.state=s.memoizedState,We.componentWillUnmount()}catch(Ze){Qt(f,l,Ze)}}break;case 5:ho(ve,ve.return);break;case 22:if(ve.memoizedState!==null){C0(Se);continue}}ke!==null?(ke.return=ve,ze=ke):C0(Se)}xe=xe.sibling}e:for(xe=null,Se=i;;){if(Se.tag===5){if(xe===null){xe=Se;try{m=Se.stateNode,ae?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(U=Se.stateNode,z=Se.memoizedProps.style,b=z!=null&&z.hasOwnProperty("display")?z.display:null,U.style.display=Me("display",b))}catch(Ze){Qt(i,i.return,Ze)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ae?"":Se.memoizedProps}catch(Ze){Qt(i,i.return,Ze)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===i)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===i)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===i)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ei(s,i),zi(i),f&4&&w0(i);break;case 21:break;default:Ei(s,i),zi(i)}}function zi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(S0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Ae(m,""),f.flags&=-33);var x=M0(i);Qf(i,x,m);break;case 3:case 4:var b=f.stateNode.containerInfo,U=M0(i);Zf(i,U,b);break;default:throw Error(t(161))}}catch(z){Qt(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function yE(i,s,l){ze=i,b0(i)}function b0(i,s,l){for(var f=(i.mode&1)!==0;ze!==null;){var m=ze,x=m.child;if(m.tag===22&&f){var b=m.memoizedState!==null||ic;if(!b){var U=m.alternate,z=U!==null&&U.memoizedState!==null||An;U=ic;var ae=An;if(ic=b,(An=z)&&!ae)for(ze=m;ze!==null;)b=ze,z=b.child,b.tag===22&&b.memoizedState!==null?R0(m):z!==null?(z.return=b,ze=z):R0(m);for(;x!==null;)ze=x,b0(x),x=x.sibling;ze=m,ic=U,An=ae}A0(i)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,ze=x):A0(i)}}function A0(i){for(;ze!==null;){var s=ze;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:An||rc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!An)if(l===null)f.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:Si(s.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&Cg(s,x,f);break;case 3:var b=s.updateQueue;if(b!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Cg(s,b,l)}break;case 5:var U=s.stateNode;if(l===null&&s.flags&4){l=U;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ae=s.alternate;if(ae!==null){var xe=ae.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&ra(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}An||s.flags&512&&Kf(s)}catch(ve){Qt(s,s.return,ve)}}if(s===i){ze=null;break}if(l=s.sibling,l!==null){l.return=s.return,ze=l;break}ze=s.return}}function C0(i){for(;ze!==null;){var s=ze;if(s===i){ze=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ze=l;break}ze=s.return}}function R0(i){for(;ze!==null;){var s=ze;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{rc(4,s)}catch(z){Qt(s,l,z)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(z){Qt(s,m,z)}}var x=s.return;try{Kf(s)}catch(z){Qt(s,x,z)}break;case 5:var b=s.return;try{Kf(s)}catch(z){Qt(s,b,z)}}}catch(z){Qt(s,s.return,z)}if(s===i){ze=null;break}var U=s.sibling;if(U!==null){U.return=s.return,ze=U;break}ze=s.return}}var SE=Math.ceil,sc=R.ReactCurrentDispatcher,Jf=R.ReactCurrentOwner,fi=R.ReactCurrentBatchConfig,At=0,vn=null,sn=null,Sn=0,Jn=0,po=Fr(0),un=0,Aa=null,_s=0,oc=0,ed=0,Ca=null,Wn=null,td=0,mo=1/0,ur=null,ac=!1,nd=null,Hr=null,lc=!1,Gr=null,cc=0,Ra=0,id=null,uc=-1,fc=0;function Nn(){return(At&6)!==0?A():uc!==-1?uc:uc=A()}function Wr(i){return(i.mode&1)===0?1:(At&2)!==0&&Sn!==0?Sn&-Sn:rE.transition!==null?(fc===0&&(fc=Bn()),fc):(i=ct,i!==0||(i=window.event,i=i===void 0?16:Dm(i.type)),i)}function wi(i,s,l,f){if(50<Ra)throw Ra=0,id=null,Error(t(185));$n(i,l,f),((At&2)===0||i!==vn)&&(i===vn&&((At&2)===0&&(oc|=l),un===4&&jr(i,Sn)),jn(i,f),l===1&&At===0&&(s.mode&1)===0&&(mo=A()+500,Bl&&Or()))}function jn(i,s){var l=i.callbackNode;Ln(i,s);var f=en(i,i===vn?Sn:0);if(f===0)l!==null&&yl(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&yl(l),s===1)i.tag===0?iE(D0.bind(null,i)):gg(D0.bind(null,i)),JM(function(){(At&6)===0&&Or()}),l=null;else{switch(xi(f)){case 1:l=ue;break;case 4:l=re;break;case 16:l=ne;break;case 536870912:l=Oe;break;default:l=ne}l=B0(l,P0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function P0(i,s){if(uc=-1,fc=0,(At&6)!==0)throw Error(t(327));var l=i.callbackNode;if(go()&&i.callbackNode!==l)return null;var f=en(i,i===vn?Sn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=dc(i,f);else{s=f;var m=At;At|=2;var x=I0();(vn!==i||Sn!==s)&&(ur=null,mo=A()+500,Ss(i,s));do try{wE();break}catch(U){L0(i,U)}while(!0);Sf(),sc.current=x,At=m,sn!==null?s=0:(vn=null,Sn=0,s=un)}if(s!==0){if(s===2&&(m=St(i),m!==0&&(f=m,s=rd(i,m))),s===1)throw l=Aa,Ss(i,0),jr(i,f),jn(i,A()),l;if(s===6)jr(i,f);else{if(m=i.current.alternate,(f&30)===0&&!ME(m)&&(s=dc(i,f),s===2&&(x=St(i),x!==0&&(f=x,s=rd(i,x))),s===1))throw l=Aa,Ss(i,0),jr(i,f),jn(i,A()),l;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Ms(i,Wn,ur);break;case 3:if(jr(i,f),(f&130023424)===f&&(s=td+500-A(),10<s)){if(en(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){Nn(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=uf(Ms.bind(null,i,Wn,ur),s);break}Ms(i,Wn,ur);break;case 4:if(jr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var b=31-rt(f);x=1<<b,b=s[b],b>m&&(m=b),f&=~x}if(f=m,f=A()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*SE(f/1960))-f,10<f){i.timeoutHandle=uf(Ms.bind(null,i,Wn,ur),f);break}Ms(i,Wn,ur);break;case 5:Ms(i,Wn,ur);break;default:throw Error(t(329))}}}return jn(i,A()),i.callbackNode===l?P0.bind(null,i):null}function rd(i,s){var l=Ca;return i.current.memoizedState.isDehydrated&&(Ss(i,s).flags|=256),i=dc(i,s),i!==2&&(s=Wn,Wn=l,s!==null&&sd(s)),i}function sd(i){Wn===null?Wn=i:Wn.push.apply(Wn,i)}function ME(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],x=m.getSnapshot;m=m.value;try{if(!_i(x(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function jr(i,s){for(s&=~ed,s&=~oc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-rt(s),f=1<<l;i[l]=-1,s&=~f}}function D0(i){if((At&6)!==0)throw Error(t(327));go();var s=en(i,0);if((s&1)===0)return jn(i,A()),null;var l=dc(i,s);if(i.tag!==0&&l===2){var f=St(i);f!==0&&(s=f,l=rd(i,f))}if(l===1)throw l=Aa,Ss(i,0),jr(i,s),jn(i,A()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ms(i,Wn,ur),jn(i,A()),null}function od(i,s){var l=At;At|=1;try{return i(s)}finally{At=l,At===0&&(mo=A()+500,Bl&&Or())}}function ys(i){Gr!==null&&Gr.tag===0&&(At&6)===0&&go();var s=At;At|=1;var l=fi.transition,f=ct;try{if(fi.transition=null,ct=1,i)return i()}finally{ct=f,fi.transition=l,At=s,(At&6)===0&&Or()}}function ad(){Jn=po.current,jt(po)}function Ss(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,QM(l)),sn!==null)for(l=sn.return;l!==null;){var f=l;switch(gf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&kl();break;case 3:uo(),jt(Vn),jt(wn),Rf();break;case 5:Af(f);break;case 4:uo();break;case 13:jt($t);break;case 19:jt($t);break;case 10:Mf(f.type._context);break;case 22:case 23:ad()}l=l.return}if(vn=i,sn=i=Xr(i.current,null),Sn=Jn=s,un=0,Aa=null,ed=oc=_s=0,Wn=Ca=null,gs!==null){for(s=0;s<gs.length;s++)if(l=gs[s],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,x=l.pending;if(x!==null){var b=x.next;x.next=m,f.next=b}l.pending=f}gs=null}return i}function L0(i,s){do{var l=sn;try{if(Sf(),$l.current=Jl,Kl){for(var f=Kt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Kl=!1}if(xs=0,gn=cn=Kt=null,Sa=!1,Ma=0,Jf.current=null,l===null||l.return===null){un=1,Aa=s,sn=null;break}e:{var x=i,b=l.return,U=l,z=s;if(s=Sn,U.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ae=z,xe=U,Se=xe.tag;if((xe.mode&1)===0&&(Se===0||Se===11||Se===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var ke=i0(b);if(ke!==null){ke.flags&=-257,r0(ke,b,U,x,s),ke.mode&1&&n0(x,ae,s),s=ke,z=ae;var We=s.updateQueue;if(We===null){var Ze=new Set;Ze.add(z),s.updateQueue=Ze}else We.add(z);break e}else{if((s&1)===0){n0(x,ae,s),ld();break e}z=Error(t(426))}}else if(qt&&U.mode&1){var nn=i0(b);if(nn!==null){(nn.flags&65536)===0&&(nn.flags|=256),r0(nn,b,U,x,s),_f(fo(z,U));break e}}x=z=fo(z,U),un!==4&&(un=2),Ca===null?Ca=[x]:Ca.push(x),x=b;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var ee=e0(x,z,s);Ag(x,ee);break e;case 1:U=z;var G=x.type,ie=x.stateNode;if((x.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(Hr===null||!Hr.has(ie)))){x.flags|=65536,s&=-s,x.lanes|=s;var Te=t0(x,U,s);Ag(x,Te);break e}}x=x.return}while(x!==null)}U0(l)}catch(et){s=et,sn===l&&l!==null&&(sn=l=l.return);continue}break}while(!0)}function I0(){var i=sc.current;return sc.current=Jl,i===null?Jl:i}function ld(){(un===0||un===3||un===2)&&(un=4),vn===null||(_s&268435455)===0&&(oc&268435455)===0||jr(vn,Sn)}function dc(i,s){var l=At;At|=2;var f=I0();(vn!==i||Sn!==s)&&(ur=null,Ss(i,s));do try{EE();break}catch(m){L0(i,m)}while(!0);if(Sf(),At=l,sc.current=f,sn!==null)throw Error(t(261));return vn=null,Sn=0,un}function EE(){for(;sn!==null;)N0(sn)}function wE(){for(;sn!==null&&!Ou();)N0(sn)}function N0(i){var s=O0(i.alternate,i,Jn);i.memoizedProps=i.pendingProps,s===null?U0(i):sn=s,Jf.current=null}function U0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=gE(l,s,Jn),l!==null){sn=l;return}}else{if(l=vE(l,s),l!==null){l.flags&=32767,sn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{un=6,sn=null;return}}if(s=s.sibling,s!==null){sn=s;return}sn=s=i}while(s!==null);un===0&&(un=5)}function Ms(i,s,l){var f=ct,m=fi.transition;try{fi.transition=null,ct=1,TE(i,s,l,f)}finally{fi.transition=m,ct=f}return null}function TE(i,s,l,f){do go();while(Gr!==null);if((At&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(Cr(i,x),i===vn&&(sn=vn=null,Sn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||lc||(lc=!0,B0(ne,function(){return go(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=fi.transition,fi.transition=null;var b=ct;ct=1;var U=At;At|=4,Jf.current=null,_E(i,l),T0(l,i),jM(lf),El=!!af,lf=af=null,i.current=l,yE(l),Bu(),At=U,ct=b,fi.transition=x}else i.current=l;if(lc&&(lc=!1,Gr=i,cc=m),x=i.pendingLanes,x===0&&(Hr=null),tt(l.stateNode),jn(i,A()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(ac)throw ac=!1,i=nd,nd=null,i;return(cc&1)!==0&&i.tag!==0&&go(),x=i.pendingLanes,(x&1)!==0?i===id?Ra++:(Ra=0,id=i):Ra=0,Or(),null}function go(){if(Gr!==null){var i=xi(cc),s=fi.transition,l=ct;try{if(fi.transition=null,ct=16>i?16:i,Gr===null)var f=!1;else{if(i=Gr,Gr=null,cc=0,(At&6)!==0)throw Error(t(331));var m=At;for(At|=4,ze=i.current;ze!==null;){var x=ze,b=x.child;if((ze.flags&16)!==0){var U=x.deletions;if(U!==null){for(var z=0;z<U.length;z++){var ae=U[z];for(ze=ae;ze!==null;){var xe=ze;switch(xe.tag){case 0:case 11:case 15:ba(8,xe,x)}var Se=xe.child;if(Se!==null)Se.return=xe,ze=Se;else for(;ze!==null;){xe=ze;var ve=xe.sibling,ke=xe.return;if(y0(xe),xe===ae){ze=null;break}if(ve!==null){ve.return=ke,ze=ve;break}ze=ke}}}var We=x.alternate;if(We!==null){var Ze=We.child;if(Ze!==null){We.child=null;do{var nn=Ze.sibling;Ze.sibling=null,Ze=nn}while(Ze!==null)}}ze=x}}if((x.subtreeFlags&2064)!==0&&b!==null)b.return=x,ze=b;else e:for(;ze!==null;){if(x=ze,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:ba(9,x,x.return)}var ee=x.sibling;if(ee!==null){ee.return=x.return,ze=ee;break e}ze=x.return}}var G=i.current;for(ze=G;ze!==null;){b=ze;var ie=b.child;if((b.subtreeFlags&2064)!==0&&ie!==null)ie.return=b,ze=ie;else e:for(b=G;ze!==null;){if(U=ze,(U.flags&2048)!==0)try{switch(U.tag){case 0:case 11:case 15:rc(9,U)}}catch(et){Qt(U,U.return,et)}if(U===b){ze=null;break e}var Te=U.sibling;if(Te!==null){Te.return=U.return,ze=Te;break e}ze=U.return}}if(At=m,Or(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(Re,i)}catch{}f=!0}return f}finally{ct=l,fi.transition=s}}return!1}function F0(i,s,l){s=fo(l,s),s=e0(i,s,1),i=zr(i,s,1),s=Nn(),i!==null&&($n(i,1,s),jn(i,s))}function Qt(i,s,l){if(i.tag===3)F0(i,i,l);else for(;s!==null;){if(s.tag===3){F0(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Hr===null||!Hr.has(f))){i=fo(l,i),i=t0(s,i,1),s=zr(s,i,1),i=Nn(),s!==null&&($n(s,1,i),jn(s,i));break}}s=s.return}}function bE(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=Nn(),i.pingedLanes|=i.suspendedLanes&l,vn===i&&(Sn&l)===l&&(un===4||un===3&&(Sn&130023424)===Sn&&500>A()-td?Ss(i,0):ed|=l),jn(i,s)}function k0(i,s){s===0&&((i.mode&1)===0?s=1:(s=Bt,Bt<<=1,(Bt&130023424)===0&&(Bt=4194304)));var l=Nn();i=ar(i,s),i!==null&&($n(i,s,l),jn(i,l))}function AE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),k0(i,l)}function CE(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),k0(i,l)}var O0;O0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Vn.current)Gn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return Gn=!1,mE(i,s,l);Gn=(i.flags&131072)!==0}else Gn=!1,qt&&(s.flags&1048576)!==0&&vg(s,Vl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;nc(i,s),i=s.pendingProps;var m=io(s,wn.current);co(s,l),m=Lf(null,s,f,i,m,l);var x=If();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Hn(f)?(x=!0,Ol(s)):x=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Tf(s),m.updater=ec,s.stateNode=m,m._reactInternals=s,Bf(s,f,i,l),s=Gf(null,s,f,!0,x,l)):(s.tag=0,qt&&x&&mf(s),In(null,s,m,l),s=s.child),s;case 16:f=s.elementType;e:{switch(nc(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=PE(f),i=Si(f,i),m){case 0:s=Hf(null,s,f,i,l);break e;case 1:s=u0(null,s,f,i,l);break e;case 11:s=s0(null,s,f,i,l);break e;case 14:s=o0(null,s,f,Si(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Si(f,m),Hf(i,s,f,m,l);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Si(f,m),u0(i,s,f,m,l);case 3:e:{if(f0(s),i===null)throw Error(t(387));f=s.pendingProps,x=s.memoizedState,m=x.element,bg(i,s),Yl(s,f,null,l);var b=s.memoizedState;if(f=b.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){m=fo(Error(t(423)),s),s=d0(i,s,f,l,m);break e}else if(f!==m){m=fo(Error(t(424)),s),s=d0(i,s,f,l,m);break e}else for(Qn=Ur(s.stateNode.containerInfo.firstChild),Zn=s,qt=!0,yi=null,l=wg(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(oo(),f===m){s=cr(i,s,l);break e}In(i,s,f,l)}s=s.child}return s;case 5:return Rg(s),i===null&&xf(s),f=s.type,m=s.pendingProps,x=i!==null?i.memoizedProps:null,b=m.children,cf(f,m)?b=null:x!==null&&cf(f,x)&&(s.flags|=32),c0(i,s),In(i,s,b,l),s.child;case 6:return i===null&&xf(s),null;case 13:return h0(i,s,l);case 4:return bf(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=ao(s,null,f,l):In(i,s,f,l),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Si(f,m),s0(i,s,f,m,l);case 7:return In(i,s,s.pendingProps,l),s.child;case 8:return In(i,s,s.pendingProps.children,l),s.child;case 12:return In(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,x=s.memoizedProps,b=m.value,Ht(Wl,f._currentValue),f._currentValue=b,x!==null)if(_i(x.value,b)){if(x.children===m.children&&!Vn.current){s=cr(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var U=x.dependencies;if(U!==null){b=x.child;for(var z=U.firstContext;z!==null;){if(z.context===f){if(x.tag===1){z=lr(-1,l&-l),z.tag=2;var ae=x.updateQueue;if(ae!==null){ae=ae.shared;var xe=ae.pending;xe===null?z.next=z:(z.next=xe.next,xe.next=z),ae.pending=z}}x.lanes|=l,z=x.alternate,z!==null&&(z.lanes|=l),Ef(x.return,l,s),U.lanes|=l;break}z=z.next}}else if(x.tag===10)b=x.type===s.type?null:x.child;else if(x.tag===18){if(b=x.return,b===null)throw Error(t(341));b.lanes|=l,U=b.alternate,U!==null&&(U.lanes|=l),Ef(b,l,s),b=x.sibling}else b=x.child;if(b!==null)b.return=x;else for(b=x;b!==null;){if(b===s){b=null;break}if(x=b.sibling,x!==null){x.return=b.return,b=x;break}b=b.return}x=b}In(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,co(s,l),m=ci(m),f=f(m),s.flags|=1,In(i,s,f,l),s.child;case 14:return f=s.type,m=Si(f,s.pendingProps),m=Si(f.type,m),o0(i,s,f,m,l);case 15:return a0(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Si(f,m),nc(i,s),s.tag=1,Hn(f)?(i=!0,Ol(s)):i=!1,co(s,l),Qg(s,f,m),Bf(s,f,m,l),Gf(null,s,f,!0,i,l);case 19:return m0(i,s,l);case 22:return l0(i,s,l)}throw Error(t(156,s.tag))};function B0(i,s){return _l(i,s)}function RE(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(i,s,l,f){return new RE(i,s,l,f)}function cd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function PE(i){if(typeof i=="function")return cd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===$)return 11;if(i===K)return 14}return 2}function Xr(i,s){var l=i.alternate;return l===null?(l=di(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function hc(i,s,l,f,m,x){var b=2;if(f=i,typeof i=="function")cd(i)&&(b=1);else if(typeof i=="string")b=5;else e:switch(i){case O:return Es(l.children,m,x,s);case E:b=8,m|=8;break;case D:return i=di(12,l,s,m|2),i.elementType=D,i.lanes=x,i;case J:return i=di(13,l,s,m),i.elementType=J,i.lanes=x,i;case oe:return i=di(19,l,s,m),i.elementType=oe,i.lanes=x,i;case W:return pc(l,m,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case Y:b=10;break e;case k:b=9;break e;case $:b=11;break e;case K:b=14;break e;case Z:b=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=di(b,l,s,m),s.elementType=i,s.type=f,s.lanes=x,s}function Es(i,s,l,f){return i=di(7,i,f,s),i.lanes=l,i}function pc(i,s,l,f){return i=di(22,i,f,s),i.elementType=W,i.lanes=l,i.stateNode={isHidden:!1},i}function ud(i,s,l){return i=di(6,i,null,s),i.lanes=l,i}function fd(i,s,l){return s=di(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function DE(i,s,l,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function dd(i,s,l,f,m,x,b,U,z){return i=new DE(i,s,l,U,z),s===1?(s=1,x===!0&&(s|=8)):s=0,x=di(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Tf(x),i}function LE(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function z0(i){if(!i)return kr;i=i._reactInternals;e:{if(Fi(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Hn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Hn(l))return pg(i,l,s)}return s}function V0(i,s,l,f,m,x,b,U,z){return i=dd(l,f,!0,i,m,x,b,U,z),i.context=z0(null),l=i.current,f=Nn(),m=Wr(l),x=lr(f,m),x.callback=s??null,zr(l,x,m),i.current.lanes=m,$n(i,m,f),jn(i,f),i}function mc(i,s,l,f){var m=s.current,x=Nn(),b=Wr(m);return l=z0(l),s.context===null?s.context=l:s.pendingContext=l,s=lr(x,b),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=zr(m,s,b),i!==null&&(wi(i,m,b,x),Xl(i,m,b)),b}function gc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function H0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function hd(i,s){H0(i,s),(i=i.alternate)&&H0(i,s)}function IE(){return null}var G0=typeof reportError=="function"?reportError:function(i){console.error(i)};function pd(i){this._internalRoot=i}vc.prototype.render=pd.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));mc(i,s,null,null)},vc.prototype.unmount=pd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ys(function(){mc(null,i,null,null)}),s[ir]=null}};function vc(i){this._internalRoot=i}vc.prototype.unstable_scheduleHydration=function(i){if(i){var s=Jo();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Lr.length&&s!==0&&s<Lr[l].priority;l++);Lr.splice(l,0,i),l===0&&Rm(i)}};function md(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function xc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function W0(){}function NE(i,s,l,f,m){if(m){if(typeof f=="function"){var x=f;f=function(){var ae=gc(b);x.call(ae)}}var b=V0(s,f,i,0,null,!1,!1,"",W0);return i._reactRootContainer=b,i[ir]=b.current,ha(i.nodeType===8?i.parentNode:i),ys(),b}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var U=f;f=function(){var ae=gc(z);U.call(ae)}}var z=dd(i,0,!1,null,null,!1,!1,"",W0);return i._reactRootContainer=z,i[ir]=z.current,ha(i.nodeType===8?i.parentNode:i),ys(function(){mc(s,z,l,f)}),z}function _c(i,s,l,f,m){var x=l._reactRootContainer;if(x){var b=x;if(typeof m=="function"){var U=m;m=function(){var z=gc(b);U.call(z)}}mc(s,b,i,m)}else b=NE(l,s,i,m,f);return gc(b)}tn=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Et(s.pendingLanes);l!==0&&(Dt(s,l|1),jn(s,A()),(At&6)===0&&(mo=A()+500,Or()))}break;case 13:ys(function(){var f=ar(i,1);if(f!==null){var m=Nn();wi(f,i,1,m)}}),hd(i,1)}},oi=function(i){if(i.tag===13){var s=ar(i,134217728);if(s!==null){var l=Nn();wi(s,i,134217728,l)}hd(i,134217728)}},nr=function(i){if(i.tag===13){var s=Wr(i),l=ar(i,s);if(l!==null){var f=Nn();wi(l,i,s,f)}hd(i,s)}},Jo=function(){return ct},Am=function(i,s){var l=ct;try{return ct=i,s()}finally{ct=l}},Ce=function(i,s,l){switch(s){case"input":if(Gt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var m=Fl(f);if(!m)throw Error(t(90));zt(f),Gt(f,m)}}}break;case"textarea":w(i,l);break;case"select":s=l.value,s!=null&&Tt(i,!!l.multiple,s,!1)}},lt=od,Nt=ys;var UE={usingClientEntryPoint:!1,Events:[ga,to,Fl,de,Ge,od]},Pa={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},FE={bundleType:Pa.bundleType,version:Pa.version,rendererPackageName:Pa.rendererPackageName,rendererConfig:Pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=vl(i),i===null?null:i.stateNode},findFiberByHostInstance:Pa.findFiberByHostInstance||IE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{Re=yc.inject(FE),Fe=yc}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UE,Xn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!md(s))throw Error(t(200));return LE(i,s,null,l)},Xn.createRoot=function(i,s){if(!md(i))throw Error(t(299));var l=!1,f="",m=G0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=dd(i,1,!1,null,null,l,!1,f,m),i[ir]=s.current,ha(i.nodeType===8?i.parentNode:i),new pd(s)},Xn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=vl(s),i=i===null?null:i.stateNode,i},Xn.flushSync=function(i){return ys(i)},Xn.hydrate=function(i,s,l){if(!xc(s))throw Error(t(200));return _c(null,i,s,!0,l)},Xn.hydrateRoot=function(i,s,l){if(!md(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,x="",b=G0;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(b=l.onRecoverableError)),s=V0(s,null,i,1,l??null,m,!1,x,b),i[ir]=s.current,ha(i),f)for(i=0;i<f.length;i++)l=f[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new vc(s)},Xn.render=function(i,s,l){if(!xc(s))throw Error(t(200));return _c(null,i,s,!1,l)},Xn.unmountComponentAtNode=function(i){if(!xc(i))throw Error(t(40));return i._reactRootContainer?(ys(function(){_c(null,null,i,!1,function(){i._reactRootContainer=null,i[ir]=null})}),!0):!1},Xn.unstable_batchedUpdates=od,Xn.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!xc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return _c(i,s,l,!1,f)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var Q0;function jE(){if(Q0)return xd.exports;Q0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),xd.exports=WE(),xd.exports}var J0;function XE(){if(J0)return Sc;J0=1;var n=jE();return Sc.createRoot=n.createRoot,Sc.hydrateRoot=n.hydrateRoot,Sc}var YE=XE(),_e=Bp();const Mc=OE(_e),zp=_e.createContext({});function Gs(n){const e=_e.useRef(null);return e.current===null&&(e.current=n()),e.current}const qE=typeof window<"u",Vp=qE?_e.useLayoutEffect:_e.useEffect,Au=_e.createContext(null);function Hp(n,e){n.indexOf(e)===-1&&n.push(e)}function pu(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Qi=(n,e,t)=>t>e?e:t<n?n:t;let Gp=()=>{};const os={},M_=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function E_(n){return typeof n=="object"&&n!==null}const w_=n=>/^0[^.\s]+$/u.test(n);function T_(n){let e;return()=>(e===void 0&&(e=n()),e)}const vi=n=>n,$E=(n,e)=>t=>e(n(t)),sl=(...n)=>n.reduce($E),Za=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};class Wp{constructor(){this.subscriptions=[]}add(e){return Hp(this.subscriptions,e),()=>pu(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const ni=n=>n*1e3,gi=n=>n/1e3;function b_(n,e){return e?n*(1e3/e):0}const A_=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,KE=1e-7,ZE=12;function QE(n,e,t,r,o){let a,c,u=0;do c=e+(t-e)/2,a=A_(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>KE&&++u<ZE);return c}function ol(n,e,t,r){if(n===e&&t===r)return vi;const o=a=>QE(a,0,1,n,t);return a=>a===0||a===1?a:A_(o(a),e,r)}const C_=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,R_=n=>e=>1-n(1-e),P_=ol(.33,1.53,.69,.99),jp=R_(P_),D_=C_(jp),L_=n=>n>=1?1:(n*=2)<1?.5*jp(n):.5*(2-Math.pow(2,-10*(n-1))),Xp=n=>1-Math.sin(Math.acos(n)),I_=R_(Xp),N_=C_(Xp),JE=ol(.42,0,1,1),ew=ol(0,0,.58,1),U_=ol(.42,0,.58,1),tw=n=>Array.isArray(n)&&typeof n[0]!="number",F_=n=>Array.isArray(n)&&typeof n[0]=="number",nw={linear:vi,easeIn:JE,easeInOut:U_,easeOut:ew,circIn:Xp,circInOut:N_,circOut:I_,backIn:jp,backInOut:D_,backOut:P_,anticipate:L_},iw=n=>typeof n=="string",ev=n=>{if(F_(n)){Gp(n.length===4);const[e,t,r,o]=n;return ol(e,t,r,o)}else if(iw(n))return nw[n];return n},Ec=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function rw(n,e){let t=new Set,r=new Set,o=!1,a=!1;const c=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function d(p){c.has(p)&&(h.schedule(p),n()),p(u)}const h={schedule:(p,v=!1,g=!1)=>{const M=g&&o?t:r;return v&&c.add(p),M.add(p),p},cancel:p=>{r.delete(p),c.delete(p)},process:p=>{if(u=p,o){a=!0;return}o=!0;const v=t;t=r,r=v,t.forEach(d),t.clear(),o=!1,a&&(a=!1,h.process(p))}};return h}const sw=40;function k_(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=Ec.reduce((P,R)=>(P[R]=rw(a),P),{}),{setup:u,read:d,resolveKeyframes:h,preUpdate:p,update:v,preRender:g,render:_,postRender:M}=c,T=()=>{const P=os.useManualTiming,R=P?o.timestamp:performance.now();t=!1,P||(o.delta=r?1e3/60:Math.max(Math.min(R-o.timestamp,sw),1)),o.timestamp=R,o.isProcessing=!0,u.process(o),d.process(o),h.process(o),p.process(o),v.process(o),g.process(o),_.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(T))},y=()=>{t=!0,r=!0,o.isProcessing||n(T)};return{schedule:Ec.reduce((P,R)=>{const I=c[R];return P[R]=(N,O=!1,E=!1)=>(t||y(),I.schedule(N,O,E)),P},{}),cancel:P=>{for(let R=0;R<Ec.length;R++)c[Ec[R]].cancel(P)},state:o,steps:c}}const{schedule:Ft,cancel:Mr,state:Mn,steps:Sd}=k_(typeof requestAnimationFrame<"u"?requestAnimationFrame:vi,!0);let eu;function ow(){eu=void 0}const Fn={now:()=>(eu===void 0&&Fn.set(Mn.isProcessing||os.useManualTiming?Mn.timestamp:performance.now()),eu),set:n=>{eu=n,queueMicrotask(ow)}},O_=n=>e=>typeof e=="string"&&e.startsWith(n),B_=O_("--"),aw=O_("var(--"),Yp=n=>aw(n)?lw.test(n.split("/*")[0].trim()):!1,lw=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function tv(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Wo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Qa={...Wo,transform:n=>Qi(0,1,n)},wc={...Wo,default:1},Xa=n=>Math.round(n*1e5)/1e5,qp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function cw(n){return n==null}const uw=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,$p=(n,e)=>t=>!!(typeof t=="string"&&uw.test(t)&&t.startsWith(n)||e&&!cw(t)&&Object.prototype.hasOwnProperty.call(t,e)),z_=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,u]=r.match(qp);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},fw=n=>Qi(0,255,n),Md={...Wo,transform:n=>Math.round(fw(n))},ks={test:$p("rgb","red"),parse:z_("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+Md.transform(n)+", "+Md.transform(e)+", "+Md.transform(t)+", "+Xa(Qa.transform(r))+")"};function dw(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const yh={test:$p("#"),parse:dw,transform:ks.transform},al=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),ts=al("deg"),qi=al("%"),Ye=al("px"),hw=al("vh"),pw=al("vw"),nv={...qi,parse:n=>qi.parse(n)/100,transform:n=>qi.transform(n*100)},Io={test:$p("hsl","hue"),parse:z_("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+qi.transform(Xa(e))+", "+qi.transform(Xa(t))+", "+Xa(Qa.transform(r))+")"},an={test:n=>ks.test(n)||yh.test(n)||Io.test(n),parse:n=>ks.test(n)?ks.parse(n):Io.test(n)?Io.parse(n):yh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?ks.transform(n):Io.transform(n),getAnimatableNone:n=>{const e=an.parse(n);return e.alpha=0,an.transform(e)}},mw=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function gw(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(qp))==null?void 0:e.length)||0)+(((t=n.match(mw))==null?void 0:t.length)||0)>0}const V_="number",H_="color",vw="var",xw="var(",iv="${}",_w=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Oo(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(_w,d=>(an.test(d)?(r.color.push(a),o.push(H_),t.push(an.parse(d))):d.startsWith(xw)?(r.var.push(a),o.push(vw),t.push(d)):(r.number.push(a),o.push(V_),t.push(parseFloat(d))),++a,iv)).split(iv);return{values:t,split:u,indexes:r,types:o}}function yw(n){return Oo(n).values}function G_({split:n,types:e}){const t=n.length;return r=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],r[a]!==void 0){const c=e[a];c===V_?o+=Xa(r[a]):c===H_?o+=an.transform(r[a]):o+=r[a]}return o}}function Sw(n){return G_(Oo(n))}const Mw=n=>typeof n=="number"?0:an.test(n)?an.getAnimatableNone(n):n,Ew=(n,e)=>typeof n=="number"?e!=null&&e.trim().endsWith("/")?n:0:Mw(n);function ww(n){const e=Oo(n);return G_(e)(e.values.map((r,o)=>Ew(r,e.split[o])))}const Ii={test:gw,parse:yw,createTransformer:Sw,getAnimatableNone:ww};function Ed(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function Tw({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;o=Ed(d,u,n+1/3),a=Ed(d,u,n),c=Ed(d,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function mu(n,e){return t=>t>0?e:n}const Xt=(n,e,t)=>n+(e-n)*t,wd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},bw=[yh,ks,Io],Aw=n=>bw.find(e=>e.test(n));function rv(n){const e=Aw(n);if(!e)return!1;let t=e.parse(n);return e===Io&&(t=Tw(t)),t}const sv=(n,e)=>{const t=rv(n),r=rv(e);if(!t||!r)return mu(n,e);const o={...t};return a=>(o.red=wd(t.red,r.red,a),o.green=wd(t.green,r.green,a),o.blue=wd(t.blue,r.blue,a),o.alpha=Xt(t.alpha,r.alpha,a),ks.transform(o))},Sh=new Set(["none","hidden"]);function Cw(n,e){return Sh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function Rw(n,e){return t=>Xt(n,e,t)}function Kp(n){return typeof n=="number"?Rw:typeof n=="string"?Yp(n)?mu:an.test(n)?sv:Lw:Array.isArray(n)?W_:typeof n=="object"?an.test(n)?sv:Pw:mu}function W_(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>Kp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function Pw(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=Kp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function Dw(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][r[a]],u=n.values[c]??0;t[o]=u,r[a]++}return t}const Lw=(n,e)=>{const t=Ii.createTransformer(e),r=Oo(n),o=Oo(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Sh.has(n)&&!o.values.length||Sh.has(e)&&!r.values.length?Cw(n,e):sl(W_(Dw(r,o),o.values),t):mu(n,e)};function j_(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Xt(n,e,t):Kp(n)(n,e)}const Iw=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Ft.update(e,t),stop:()=>Mr(e),now:()=>Mn.isProcessing?Mn.timestamp:Fn.now()}},X_=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},gu=2e4;function Zp(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<gu;)e+=t,r=n.next(e);return e>=gu?1/0:e}function Nw(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(Zp(r),gu);return{type:"keyframes",ease:a=>r.next(o*a).value/e,duration:gi(o)}}const Jt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Mh(n,e){return n*Math.sqrt(1-e*e)}const Uw=12;function Fw(n,e,t){let r=t;for(let o=1;o<Uw;o++)r=r-n(r)/e(r);return r}const Td=.001;function kw({duration:n=Jt.duration,bounce:e=Jt.bounce,velocity:t=Jt.velocity,mass:r=Jt.mass}){let o,a,c=1-e;c=Qi(Jt.minDamping,Jt.maxDamping,c),n=Qi(Jt.minDuration,Jt.maxDuration,gi(n)),c<1?(o=h=>{const p=h*c,v=p*n,g=p-t,_=Mh(h,c),M=Math.exp(-v);return Td-g/_*M},a=h=>{const v=h*c*n,g=v*t+t,_=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),T=Mh(Math.pow(h,2),c);return(-o(h)+Td>0?-1:1)*((g-_)*M)/T}):(o=h=>{const p=Math.exp(-h*n),v=(h-t)*n+1;return-Td+p*v},a=h=>{const p=Math.exp(-h*n),v=(t-h)*(n*n);return p*v});const u=5/n,d=Fw(o,a,u);if(n=ni(n),isNaN(d))return{stiffness:Jt.stiffness,damping:Jt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const Ow=["duration","bounce"],Bw=["stiffness","damping","mass"];function ov(n,e){return e.some(t=>n[t]!==void 0)}function zw(n){let e={velocity:Jt.velocity,stiffness:Jt.stiffness,damping:Jt.damping,mass:Jt.mass,isResolvedFromDuration:!1,...n};if(!ov(n,Bw)&&ov(n,Ow))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Qi(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Jt.mass,stiffness:o,damping:a}}else{const t=kw({...n,velocity:0});e={...e,...t,mass:Jt.mass},e.isResolvedFromDuration=!0}return e}function vu(n=Jt.visualDuration,e=Jt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:d,damping:h,mass:p,duration:v,velocity:g,isResolvedFromDuration:_}=zw({...t,velocity:-gi(t.velocity||0)}),M=g||0,T=h/(2*Math.sqrt(d*p)),y=c-a,S=gi(Math.sqrt(d/p)),C=Math.abs(y)<5;r||(r=C?Jt.restSpeed.granular:Jt.restSpeed.default),o||(o=C?Jt.restDelta.granular:Jt.restDelta.default);let P,R,I,N,O,E;if(T<1)I=Mh(S,T),N=(M+T*S*y)/I,P=Y=>{const k=Math.exp(-T*S*Y);return c-k*(N*Math.sin(I*Y)+y*Math.cos(I*Y))},O=T*S*N+y*I,E=T*S*y-N*I,R=Y=>Math.exp(-T*S*Y)*(O*Math.sin(I*Y)+E*Math.cos(I*Y));else if(T===1){P=k=>c-Math.exp(-S*k)*(y+(M+S*y)*k);const Y=M+S*y;R=k=>Math.exp(-S*k)*(S*Y*k-M)}else{const Y=S*Math.sqrt(T*T-1);P=oe=>{const K=Math.exp(-T*S*oe),Z=Math.min(Y*oe,300);return c-K*((M+T*S*y)*Math.sinh(Z)+Y*y*Math.cosh(Z))/Y};const k=(M+T*S*y)/Y,$=T*S*k-y*Y,J=T*S*y-k*Y;R=oe=>{const K=Math.exp(-T*S*oe),Z=Math.min(Y*oe,300);return K*($*Math.sinh(Z)+J*Math.cosh(Z))}}const D={calculatedDuration:_&&v||null,velocity:Y=>ni(R(Y)),next:Y=>{if(!_&&T<1){const $=Math.exp(-T*S*Y),J=Math.sin(I*Y),oe=Math.cos(I*Y),K=c-$*(N*J+y*oe),Z=ni($*(O*J+E*oe));return u.done=Math.abs(Z)<=r&&Math.abs(c-K)<=o,u.value=u.done?c:K,u}const k=P(Y);if(_)u.done=Y>=v;else{const $=ni(R(Y));u.done=Math.abs($)<=r&&Math.abs(c-k)<=o}return u.value=u.done?c:k,u},toString:()=>{const Y=Math.min(Zp(D),gu),k=X_($=>D.next(Y*$).value,Y,30);return Y+"ms "+k},toTransition:()=>{}};return D}vu.applyToOptions=n=>{const e=Nw(n,100,vu);return n.ease=e.ease,n.duration=ni(e.duration),n.type="keyframes",n};const Vw=5;function Y_(n,e,t){const r=Math.max(e-Vw,0);return b_(t-n(r),e-r)}function Eh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:p}){const v=n[0],g={done:!1,value:v},_=E=>u!==void 0&&E<u||d!==void 0&&E>d,M=E=>u===void 0?d:d===void 0||Math.abs(u-E)<Math.abs(d-E)?u:d;let T=t*e;const y=v+T,S=c===void 0?y:c(y);S!==y&&(T=S-v);const C=E=>-T*Math.exp(-E/r),P=E=>S+C(E),R=E=>{const D=C(E),Y=P(E);g.done=Math.abs(D)<=h,g.value=g.done?S:Y};let I,N;const O=E=>{_(g.value)&&(I=E,N=vu({keyframes:[g.value,M(g.value)],velocity:Y_(P,E,g.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return O(0),{calculatedDuration:null,next:E=>{let D=!1;return!N&&I===void 0&&(D=!0,R(E),O(E)),I!==void 0&&E>=I?N.next(E-I):(!D&&R(E),g)}}}function Hw(n,e,t){const r=[],o=t||os.mix||j_,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||vi:e;u=sl(d,u)}r.push(u)}return r}function q_(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(Gp(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=Hw(e,r,o),d=u.length,h=p=>{if(c&&p<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(p<n[v+1]);v++);const g=Za(n[v],n[v+1],p);return u[v](g)};return t?p=>h(Qi(n[0],n[a-1],p)):h}function Gw(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Za(0,e,r);n.push(Xt(t,1,o))}}function Ww(n){const e=[0];return Gw(e,n.length-1),e}function jw(n,e){return n.map(t=>t*e)}function Xw(n,e){return n.map(()=>e||U_).splice(0,n.length-1)}function Ya({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=tw(r)?r.map(ev):ev(r),a={done:!1,value:e[0]},c=jw(t&&t.length===e.length?t:Ww(e),n),u=q_(c,e,{ease:Array.isArray(o)?o:Xw(e,o)});return{calculatedDuration:n,next:d=>(a.value=u(d),a.done=d>=n,a)}}const Yw=n=>n!==null;function Cu(n,{repeat:e,repeatType:t="loop"},r,o=1){const a=n.filter(Yw),u=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!u||r===void 0?a[u]:r}const qw={decay:Eh,inertia:Eh,tween:Ya,keyframes:Ya,spring:vu};function $_(n){typeof n.type=="string"&&(n.type=qw[n.type])}class Qp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const $w=n=>n/100;class Ja extends Qp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:t}=this.options;t&&t.updatedAt!==Fn.now()&&this.tick(Fn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;$_(e);const{type:t=Ya,repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:u}=e;const d=t||Ya;d!==Ya&&typeof u[0]!="number"&&(this.mixKeyframes=sl($w,j_(u[0],u[1])),u=[0,100]);const h=d({...e,keyframes:u});a==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...u].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=Zp(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:p,repeat:v,repeatType:g,repeatDelay:_,type:M,onUpdate:T,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const S=this.currentTime-h*(this.playbackSpeed>=0?1:-1),C=this.playbackSpeed>=0?S<0:S>o;this.currentTime=Math.max(S,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let P=this.currentTime,R=r;if(v){const E=Math.min(this.currentTime,o)/u;let D=Math.floor(E),Y=E%1;!Y&&E>=1&&(Y=1),Y===1&&D--,D=Math.min(D,v+1),!!(D%2)&&(g==="reverse"?(Y=1-Y,_&&(Y-=_/u)):g==="mirror"&&(R=c)),P=Qi(0,1,Y)*u}let I;C?(this.delayState.value=p[0],I=this.delayState):I=R.next(P),a&&!C&&(I.value=a(I.value));let{done:N}=I;!C&&d!==null&&(N=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const O=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&N);return O&&M!==Eh&&(I.value=Cu(p,this.options,y,this.speed)),T&&T(I.value),O&&this.finish(),I}then(e,t){return this.finished.then(e,t)}get duration(){return gi(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+gi(e)}get time(){return gi(this.currentTime)}set time(e){e=ni(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return Y_(r=>this.generator.next(r).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Fn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=gi(this.currentTime))}play(){var o,a;if(this.isStopped)return;const{driver:e=Iw,startTime:t}=this.options;this.driver||(this.driver=e(c=>this.tick(c))),(a=(o=this.options).onPlay)==null||a.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Fn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,t;this.notifyFinished(),this.teardown(),this.state="finished",(t=(e=this.options).onComplete)==null||t.call(e)}cancel(){var e,t;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(t=(e=this.options).onCancel)==null||t.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var t;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(t=this.driver)==null||t.stop(),e.observe(this)}}function Kw(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const Os=n=>n*180/Math.PI,wh=n=>{const e=Os(Math.atan2(n[1],n[0]));return Th(e)},Zw={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:wh,rotateZ:wh,skewX:n=>Os(Math.atan(n[1])),skewY:n=>Os(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Th=n=>(n=n%360,n<0&&(n+=360),n),av=wh,lv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),cv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),Qw={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:lv,scaleY:cv,scale:n=>(lv(n)+cv(n))/2,rotateX:n=>Th(Os(Math.atan2(n[6],n[5]))),rotateY:n=>Th(Os(Math.atan2(-n[2],n[0]))),rotateZ:av,rotate:av,skewX:n=>Os(Math.atan(n[4])),skewY:n=>Os(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function bh(n){return n.includes("scale")?1:0}function Ah(n,e){if(!n||n==="none")return bh(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=Qw,o=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=Zw,o=u}if(!o)return bh(e);const a=r[e],c=o[1].split(",").map(eT);return typeof a=="function"?a(c):c[a]}const Jw=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Ah(t,e)};function eT(n){return parseFloat(n.trim())}const jo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Xo=new Set(jo),uv=n=>n===Wo||n===Ye,tT=new Set(["x","y","z"]),nT=jo.filter(n=>!tT.has(n));function iT(n){const e=[];return nT.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const rs={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Ah(e,"x"),y:(n,{transform:e})=>Ah(e,"y")};rs.translateX=rs.x;rs.translateY=rs.y;const Vs=new Set;let Ch=!1,Rh=!1,Ph=!1;function K_(){if(Rh){const n=Array.from(Vs).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=iT(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{var u;(u=r.getValue(a))==null||u.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Rh=!1,Ch=!1,Vs.forEach(n=>n.complete(Ph)),Vs.clear()}function Z_(){Vs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Rh=!0)})}function rT(){Ph=!0,Z_(),K_(),Ph=!1}class Jp{constructor(e,t,r,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(Vs.add(this),Ch||(Ch=!0,Ft.read(Z_),Ft.resolveKeyframes(K_))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const a=o==null?void 0:o.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&t){const u=r.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}Kw(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),Vs.delete(this)}cancel(){this.state==="scheduled"&&(Vs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const sT=n=>n.startsWith("--");function Q_(n,e,t){sT(e)?n.style.setProperty(e,t):n.style[e]=t}const oT={};function J_(n,e){const t=T_(n);return()=>oT[e]??t()}const aT=J_(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),ey=J_(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ga=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,fv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ga([0,.65,.55,1]),circOut:Ga([.55,0,1,.45]),backIn:Ga([.31,.01,.66,-.59]),backOut:Ga([.33,1.53,.69,.99])};function ty(n,e){if(n)return typeof n=="function"?ey()?X_(n,e):"ease-out":F_(n)?Ga(n):Array.isArray(n)?n.map(t=>ty(t,e)||fv.easeOut):fv[n]}function lT(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeOut",times:d}={},h=void 0){const p={[e]:t};d&&(p.offset=d);const v=ty(u,o);Array.isArray(v)&&(p.easing=v);const g={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return h&&(g.pseudoElement=h),n.animate(p,g)}function ny(n){return typeof n=="function"&&"applyToOptions"in n}function cT({type:n,...e}){return ny(n)&&ey()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class iy extends Qp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:u,onComplete:d}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,Gp(typeof e.type!="string");const h=cT(e);this.animation=lT(t,r,o,h,a),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const p=Cu(o,this.options,u,this.speed);this.updateMotionValue&&this.updateMotionValue(p),Q_(t,r,p),this.animation.cancel()}d==null||d(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,t;(t=(e=this.animation).finish)==null||t.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var t,r,o;const e=(t=this.options)==null?void 0:t.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var t,r;const e=((r=(t=this.animation.effect)==null?void 0:t.getComputedTiming)==null?void 0:r.call(t).duration)||0;return gi(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+gi(e)}get time(){return gi(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=ni(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:r,observe:o}){var a;return this.allowFlatten&&((a=this.animation.effect)==null||a.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&aT()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),r&&(this.animation.rangeEnd=r),vi):o(this)}}const ry={anticipate:L_,backInOut:D_,circInOut:N_};function uT(n){return n in ry}function fT(n){typeof n.ease=="string"&&uT(n.ease)&&(n.ease=ry[n.ease])}const bd=10;class dT extends iy{constructor(e){fT(e),$_(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new Ja({...c,autoplay:!1}),d=Math.max(bd,Fn.now()-this.startTime),h=Qi(0,bd,d-bd),p=u.sample(d).value,{name:v}=this.options;a&&v&&Q_(a,v,p),t.setWithVelocity(u.sample(Math.max(0,d-h)).value,p,h),u.stop()}}const dv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Ii.test(n)||n==="0")&&!n.startsWith("url("));function hT(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function pT(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=dv(o,e),u=dv(a,e);return!c||!u?!1:hT(n)||(t==="spring"||ny(t))&&r}function Dh(n){n.duration=0,n.type="keyframes"}const sy=new Set(["opacity","clipPath","filter","transform"]),mT=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function gT(n){for(let e=0;e<n.length;e++)if(typeof n[e]=="string"&&mT.test(n[e]))return!0;return!1}const vT=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),xT=T_(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function _T(n){var v;const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:a,type:c,keyframes:u}=n;if(!(((v=e==null?void 0:e.owner)==null?void 0:v.current)instanceof HTMLElement))return!1;const{onUpdate:h,transformTemplate:p}=e.owner.getProps();return xT()&&t&&(sy.has(t)||vT.has(t)&&gT(u))&&(t!=="transform"||!p)&&!h&&!r&&o!=="mirror"&&a!==0&&c!=="inertia"}const yT=40;class ST extends Qp{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:u,name:d,motionValue:h,element:p,...v}){var M;super(),this.stop=()=>{var T,y;this._animation&&(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=Fn.now();const g={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,name:d,motionValue:h,element:p,...v},_=(p==null?void 0:p.KeyframeResolver)||Jp;this.keyframeResolver=new _(u,(T,y,S)=>this.onKeyframesResolved(T,y,g,!S),d,h,p),(M=this.keyframeResolver)==null||M.scheduleResolve()}onKeyframesResolved(e,t,r,o){var S,C;this.keyframeResolver=void 0;const{name:a,type:c,velocity:u,delay:d,isHandoff:h,onUpdate:p}=r;this.resolvedAt=Fn.now();let v=!0;pT(e,a,c,u)||(v=!1,(os.instantAnimations||!d)&&(p==null||p(Cu(e,r,t))),e[0]=e[e.length-1],Dh(r),r.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>yT?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},M=v&&!h&&_T(_),T=(C=(S=_.motionValue)==null?void 0:S.owner)==null?void 0:C.current;let y;if(M)try{y=new dT({..._,element:T})}catch{y=new Ja(_)}else y=new Ja(_);y.finished.then(()=>{this.notifyFinished()}).catch(vi),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),rT()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function oy(n,e,t,r=0,o=1){const a=Array.from(n).sort((h,p)=>h.sortNodePosition(p)).indexOf(e),c=n.size,u=(c-1)*r;return typeof t=="function"?t(a,c):o===1?a*r:u-a*r}const MT=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function ET(n){const e=MT.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function ay(n,e,t=1){const[r,o]=ET(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return M_(c)?parseFloat(c):c}return Yp(o)?ay(o,e,t+1):o}const wT={type:"spring",stiffness:500,damping:25,restSpeed:10},TT=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),bT={type:"keyframes",duration:.8},AT={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},CT=(n,{keyframes:e})=>e.length>2?bT:Xo.has(n)?n.startsWith("scale")?TT(e[1]):wT:AT;function ly(n,e){if(n!=null&&n.inherit&&e){const{inherit:t,...r}=n;return{...e,...r}}return n}function em(n,e){const t=(n==null?void 0:n[e])??(n==null?void 0:n.default)??n;return t!==n?ly(t,n):t}const RT=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function PT(n){for(const e in n)if(!RT.has(e))return!0;return!1}const tm=(n,e,t,r={},o,a)=>c=>{const u=em(r,n)||{},d=u.delay||r.delay||0;let{elapsed:h=0}=r;h=h-ni(d);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:g=>{e.set(g),u.onUpdate&&u.onUpdate(g)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};PT(u)||Object.assign(p,CT(n,p)),p.duration&&(p.duration=ni(p.duration)),p.repeatDelay&&(p.repeatDelay=ni(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let v=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(Dh(p),p.delay===0&&(v=!0)),(os.instantAnimations||os.skipAnimations||o!=null&&o.shouldSkipAnimations)&&(v=!0,Dh(p),p.delay=0),p.allowFlatten=!u.type&&!u.ease,v&&!a&&e.get()!==void 0){const g=Cu(p.keyframes,u);if(g!==void 0){Ft.update(()=>{p.onUpdate(g),p.onComplete()});return}}return u.isSync?new Ja(p):new ST(p)};function hv(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function nm(n,e,t,r){if(typeof e=="function"){const[o,a]=hv(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=hv(r);e=e(t!==void 0?t:n.custom,o,a)}return e}function Hs(n,e,t){const r=n.getProps();return nm(r,e,t!==void 0?t:r.custom,n)}const cy=new Set(["width","height","top","left","right","bottom",...jo]),pv=30,DT=n=>!isNaN(parseFloat(n)),qa={current:void 0};class LT{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var a;const o=Fn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((a=this.events.change)==null||a.notify(this.current),this.dependents))for(const c of this.dependents)c.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Fn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=DT(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Wp);const r=this.events[e].add(t);return e==="change"?()=>{r(),Ft.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return qa.current&&qa.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Fn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>pv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,pv);return b_(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,t;(e=this.dependents)==null||e.clear(),(t=this.events.destroy)==null||t.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Ws(n,e){return new LT(n,e)}const Lh=n=>Array.isArray(n);function IT(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Ws(t))}function NT(n){return Lh(n)?n[n.length-1]||0:n}function UT(n,e){const t=Hs(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const u=NT(a[c]);IT(n,c,u)}}const hn=n=>!!(n&&n.getVelocity);function FT(n){return!!(hn(n)&&n.add)}function Ih(n,e){const t=n.getValue("willChange");if(FT(t))return t.add(e);if(!t&&os.WillChange){const r=new os.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function im(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const kT="framerAppearId",uy="data-"+im(kT);function fy(n){return n.props[uy]}function OT({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function dy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:a,transitionEnd:c,...u}=e;const d=n.getDefaultTransition();a=a?ly(a,d):d;const h=a==null?void 0:a.reduceMotion;r&&(a=r);const p=[],v=o&&n.animationState&&n.animationState.getState()[o];for(const g in u){const _=n.getValue(g,n.latestValues[g]??null),M=u[g];if(M===void 0||v&&OT(v,g))continue;const T={delay:t,...em(a||{},g)},y=_.get();if(y!==void 0&&!_.isAnimating()&&!Array.isArray(M)&&M===y&&!T.velocity){Ft.update(()=>_.set(M));continue}let S=!1;if(window.MotionHandoffAnimation){const R=fy(n);if(R){const I=window.MotionHandoffAnimation(R,g,Ft);I!==null&&(T.startTime=I,S=!0)}}Ih(n,g);const C=h??n.shouldReduceMotion;_.start(tm(g,_,M,C&&cy.has(g)?{type:!1}:T,n,S));const P=_.animation;P&&p.push(P)}if(c){const g=()=>Ft.update(()=>{c&&UT(n,c)});p.length?Promise.all(p).then(g):g()}return p}function Nh(n,e,t={}){var d;const r=Hs(n,e,t.type==="exit"?(d=n.presenceContext)==null?void 0:d.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const a=r?()=>Promise.all(dy(n,r,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:p=0,staggerChildren:v,staggerDirection:g}=o;return BT(n,e,h,p,v,g,t)}:()=>Promise.resolve(),{when:u}=o;if(u){const[h,p]=u==="beforeChildren"?[a,c]:[c,a];return h().then(()=>p())}else return Promise.all([a(),c(t.delay)])}function BT(n,e,t=0,r=0,o=0,a=1,c){const u=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),u.push(Nh(d,e,{...c,delay:t+(typeof r=="function"?0:r)+oy(n.variantChildren,d,r,o,a)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(u)}function zT(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>Nh(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=Nh(n,e,t);else{const o=typeof e=="function"?Hs(n,e,t.custom):e;r=Promise.all(dy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const VT={test:n=>n==="auto",parse:n=>n},hy=n=>e=>e.test(n),py=[Wo,Ye,qi,ts,pw,hw,VT],mv=n=>py.find(hy(n));function HT(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||w_(n):!0}const GT=new Set(["brightness","contrast","saturate","opacity"]);function WT(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(qp)||[];if(!r)return n;const o=t.replace(r,"");let a=GT.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const jT=/\b([a-z-]*)\(.*?\)/gu,Uh={...Ii,getAnimatableNone:n=>{const e=n.match(jT);return e?e.map(WT).join(" "):n}},Fh={...Ii,getAnimatableNone:n=>{const e=Ii.parse(n);return Ii.createTransformer(n)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},gv={...Wo,transform:Math.round},XT={rotate:ts,rotateX:ts,rotateY:ts,rotateZ:ts,scale:wc,scaleX:wc,scaleY:wc,scaleZ:wc,skew:ts,skewX:ts,skewY:ts,distance:Ye,translateX:Ye,translateY:Ye,translateZ:Ye,x:Ye,y:Ye,z:Ye,perspective:Ye,transformPerspective:Ye,opacity:Qa,originX:nv,originY:nv,originZ:Ye},rm={borderWidth:Ye,borderTopWidth:Ye,borderRightWidth:Ye,borderBottomWidth:Ye,borderLeftWidth:Ye,borderRadius:Ye,borderTopLeftRadius:Ye,borderTopRightRadius:Ye,borderBottomRightRadius:Ye,borderBottomLeftRadius:Ye,width:Ye,maxWidth:Ye,height:Ye,maxHeight:Ye,top:Ye,right:Ye,bottom:Ye,left:Ye,inset:Ye,insetBlock:Ye,insetBlockStart:Ye,insetBlockEnd:Ye,insetInline:Ye,insetInlineStart:Ye,insetInlineEnd:Ye,padding:Ye,paddingTop:Ye,paddingRight:Ye,paddingBottom:Ye,paddingLeft:Ye,paddingBlock:Ye,paddingBlockStart:Ye,paddingBlockEnd:Ye,paddingInline:Ye,paddingInlineStart:Ye,paddingInlineEnd:Ye,margin:Ye,marginTop:Ye,marginRight:Ye,marginBottom:Ye,marginLeft:Ye,marginBlock:Ye,marginBlockStart:Ye,marginBlockEnd:Ye,marginInline:Ye,marginInlineStart:Ye,marginInlineEnd:Ye,fontSize:Ye,backgroundPositionX:Ye,backgroundPositionY:Ye,...XT,zIndex:gv,fillOpacity:Qa,strokeOpacity:Qa,numOctaves:gv},YT={...rm,color:an,backgroundColor:an,outlineColor:an,fill:an,stroke:an,borderColor:an,borderTopColor:an,borderRightColor:an,borderBottomColor:an,borderLeftColor:an,filter:Uh,WebkitFilter:Uh,mask:Fh,WebkitMask:Fh},my=n=>YT[n],qT=new Set([Uh,Fh]);function gy(n,e){let t=my(n);return qT.has(t)||(t=Ii),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const $T=new Set(["auto","none","0"]);function KT(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!$T.has(a)&&Oo(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=gy(t,o)}class ZT extends Jp{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let p=0;p<e.length;p++){let v=e[p];if(typeof v=="string"&&(v=v.trim(),Yp(v))){const g=ay(v,t.current);g!==void 0&&(e[p]=g),p===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!cy.has(r)||e.length!==2)return;const[o,a]=e,c=mv(o),u=mv(a),d=tv(o),h=tv(a);if(d!==h&&rs[r]){this.needsMeasurement=!0;return}if(c!==u)if(uv(c)&&uv(u))for(let p=0;p<e.length;p++){const v=e[p];typeof v=="string"&&(e[p]=parseFloat(v))}else rs[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||HT(e[o]))&&r.push(o);r.length&&KT(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=rs[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var u;const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=r.length-1,c=r[a];r[a]=rs[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),(u=this.removedTransforms)!=null&&u.length&&this.removedTransforms.forEach(([d,h])=>{e.getValue(d).set(h)}),this.resolveNoneKeyframes()}}function vy(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){let r=document;const o=(t==null?void 0:t[n])??r.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(r=>r!=null)}const xy=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function tu(n){return E_(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:sm}=k_(queueMicrotask,!1),Ri={x:!1,y:!1};function _y(){return Ri.x||Ri.y}function QT(n){return n==="x"||n==="y"?Ri[n]?null:(Ri[n]=!0,()=>{Ri[n]=!1}):Ri.x||Ri.y?null:(Ri.x=Ri.y=!0,()=>{Ri.x=Ri.y=!1})}function yy(n,e){const t=vy(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function JT(n){return!(n.pointerType==="touch"||_y())}function e1(n,e,t={}){const[r,o,a]=yy(n,t);return r.forEach(c=>{let u=!1,d=!1,h;const p=()=>{c.removeEventListener("pointerleave",M)},v=y=>{h&&(h(y),h=void 0),p()},g=y=>{u=!1,window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),d&&(d=!1,v(y))},_=()=>{u=!0,window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",g,o)},M=y=>{if(y.pointerType!=="touch"){if(u){d=!0;return}v(y)}},T=y=>{if(!JT(y))return;d=!1;const S=e(c,y);typeof S=="function"&&(h=S,c.addEventListener("pointerleave",M,o))};c.addEventListener("pointerenter",T,o),c.addEventListener("pointerdown",_,o)}),a}const Sy=(n,e)=>e?n===e?!0:Sy(n,e.parentElement):!1,om=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,t1=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function n1(n){return t1.has(n.tagName)||n.isContentEditable===!0}const i1=new Set(["INPUT","SELECT","TEXTAREA"]);function r1(n){return i1.has(n.tagName)||n.isContentEditable===!0}const nu=new WeakSet;function vv(n){return e=>{e.key==="Enter"&&n(e)}}function Ad(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const s1=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=vv(()=>{if(nu.has(t))return;Ad(t,"down");const o=vv(()=>{Ad(t,"up")}),a=()=>Ad(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function xv(n){return om(n)&&!_y()}const _v=new WeakSet;function o1(n,e,t={}){const[r,o,a]=yy(n,t),c=u=>{const d=u.currentTarget;if(!xv(u)||_v.has(u))return;nu.add(d),t.stopPropagation&&_v.add(u);const h=e(d,u),p=(_,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",g),nu.has(d)&&nu.delete(d),xv(_)&&typeof h=="function"&&h(_,{success:M})},v=_=>{p(_,d===window||d===document||t.useGlobalTarget||Sy(d,_.target))},g=_=>{p(_,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",g,o)};return r.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),tu(u)&&(u.addEventListener("focus",h=>s1(h,o)),!n1(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),a}function am(n){return E_(n)&&"ownerSVGElement"in n}const iu=new WeakMap;let ns;const My=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:am(r)&&"getBBox"in r?r.getBBox()[e]:r[t],a1=My("inline","width","offsetWidth"),l1=My("block","height","offsetHeight");function c1({target:n,borderBoxSize:e}){var t;(t=iu.get(n))==null||t.forEach(r=>{r(n,{get width(){return a1(n,e)},get height(){return l1(n,e)}})})}function u1(n){n.forEach(c1)}function f1(){typeof ResizeObserver>"u"||(ns=new ResizeObserver(u1))}function d1(n,e){ns||f1();const t=vy(n);return t.forEach(r=>{let o=iu.get(r);o||(o=new Set,iu.set(r,o)),o.add(e),ns==null||ns.observe(r)}),()=>{t.forEach(r=>{const o=iu.get(r);o==null||o.delete(e),o!=null&&o.size||ns==null||ns.unobserve(r)})}}const ru=new Set;let No;function h1(){No=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};ru.forEach(e=>e(n))},window.addEventListener("resize",No)}function p1(n){return ru.add(n),No||h1(),()=>{ru.delete(n),!ru.size&&typeof No=="function"&&(window.removeEventListener("resize",No),No=void 0)}}function yv(n,e){return typeof n=="function"?p1(n):d1(n,e)}function m1(n){return am(n)&&n.tagName==="svg"}function g1(...n){const e=!Array.isArray(n[0]),t=e?0:-1,r=n[0+t],o=n[1+t],a=n[2+t],c=n[3+t],u=q_(o,a,c);return e?u(r):u}function v1(n,e,t={}){const r=n.get();let o=null,a=r,c;const u=typeof r=="string"?r.replace(/[\d.-]/g,""):void 0,d=()=>{o&&(o.stop(),o=null),n.animation=void 0},h=()=>{const v=Sv(n.get()),g=Sv(a);if(v===g){d();return}const _=o?o.getGeneratorVelocity():n.getVelocity();d(),o=new Ja({keyframes:[v,g],velocity:_,type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:c})},p=()=>{var v;h(),n.animation=o??void 0,(v=n.events.animationStart)==null||v.notify(),o==null||o.then(()=>{var g;n.animation=void 0,(g=n.events.animationComplete)==null||g.notify()})};if(n.attach((v,g)=>{a=v,c=_=>g(Cd(_,u)),Ft.postRender(p)},d),hn(e)){let v=t.skipInitialAnimation===!0;const g=e.on("change",M=>{v?(v=!1,n.jump(Cd(M,u),!1)):n.set(Cd(M,u))}),_=n.on("destroy",g);return()=>{g(),_()}}return d}function Cd(n,e){return e?n+e:n}function Sv(n){return typeof n=="number"?n:parseFloat(n)}const x1=[...py,an,Ii],_1=n=>x1.find(hy(n)),Mv=()=>({translate:0,scale:1,origin:0,originPoint:0}),Uo=()=>({x:Mv(),y:Mv()}),Ev=()=>({min:0,max:0}),dn=()=>({x:Ev(),y:Ev()}),y1=new WeakMap;function Ru(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function el(n){return typeof n=="string"||Array.isArray(n)}const lm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],cm=["initial",...lm];function Pu(n){return Ru(n.animate)||cm.some(e=>el(n[e]))}function Ey(n){return!!(Pu(n)||n.variants)}function S1(n,e,t){for(const r in e){const o=e[r],a=t[r];if(hn(o))n.addValue(r,o);else if(hn(a))n.addValue(r,Ws(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,Ws(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const kh={current:null},wy={current:!1},M1=typeof window<"u";function E1(){if(wy.current=!0,!!M1)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>kh.current=n.matches;n.addEventListener("change",e),e()}else kh.current=!1}const wv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let xu={};function Ty(n){xu=n}function w1(){return xu}class T1{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Jp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Fn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Ft.render(this.render,!1,!0))};const{latestValues:h,renderState:p}=u;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=p,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=d,this.blockInitialAnimation=!!c,this.isControllingVariants=Pu(t),this.isVariantNode=Ey(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in g){const M=g[_];h[_]!==void 0&&hn(M)&&M.set(h[_])}}mount(e){var t,r;if(this.hasBeenMounted)for(const o in this.initialValues)(t=this.values.get(o))==null||t.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,y1.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,a)=>this.bindToMotionValue(a,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(wy.current||E1(),this.shouldReduceMotion=kh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),Mr(this.notifyUpdate),Mr(this.render),this.valueSubscriptions.forEach(t=>t()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const t in this.events)this.events[t].clear();for(const t in this.features){const r=this.features[t];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&sy.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:u,times:d,ease:h,duration:p}=t.accelerate,v=new iy({element:this.current,name:e,keyframes:u,times:d,ease:h,duration:ni(p)}),g=c(v);this.valueSubscriptions.set(e,()=>{g(),v.cancel()});return}const r=Xo.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Ft.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in xu){const t=xu[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):dn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<wv.length;r++){const o=wv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=S1(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Ws(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(M_(r)||w_(r))?r=parseFloat(r):!_1(r)&&Ii.test(t)&&(r=gy(e,t)),this.setBaseTarget(e,hn(r)?r.get():r)),hn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var a;const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const c=nm(this.props,t,(a=this.presenceContext)==null?void 0:a.custom);c&&(r=c[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!hn(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Wp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){sm.render(this.render)}}class by extends T1{constructor(){super(...arguments),this.KeyframeResolver=ZT}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const r=e.style;return r?r[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;hn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class ls{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Ay({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function b1({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function A1(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Rd(n){return n===void 0||n===1}function Oh({scale:n,scaleX:e,scaleY:t}){return!Rd(n)||!Rd(e)||!Rd(t)}function Ls(n){return Oh(n)||Cy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Cy(n){return Tv(n.x)||Tv(n.y)}function Tv(n){return n&&n!=="0%"}function _u(n,e,t){const r=n-t,o=e*r;return t+o}function bv(n,e,t,r,o){return o!==void 0&&(n=_u(n,o,r)),_u(n,t,r)+e}function Bh(n,e=0,t=1,r,o){n.min=bv(n.min,e,t,r,o),n.max=bv(n.max,e,t,r,o)}function Ry(n,{x:e,y:t}){Bh(n.x,e.translate,e.scale,e.originPoint),Bh(n.y,t.translate,t.scale,t.originPoint)}const Av=.999999999999,Cv=1.0000000000001;function C1(n,e,t,r=!1){var u;const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let d=0;d<o;d++){a=t[d],c=a.projectionDelta;const{visualElement:h}=a.options;h&&h.props.style&&h.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&(Wi(n.x,-a.scroll.offset.x),Wi(n.y,-a.scroll.offset.y)),c&&(e.x*=c.x.scale,e.y*=c.y.scale,Ry(n,c)),r&&Ls(a.latestValues)&&su(n,a.latestValues,(u=a.layout)==null?void 0:u.layoutBox))}e.x<Cv&&e.x>Av&&(e.x=1),e.y<Cv&&e.y>Av&&(e.y=1)}function Wi(n,e){n.min+=e,n.max+=e}function Rv(n,e,t,r,o=.5){const a=Xt(n.min,n.max,o);Bh(n,e,t,a,r)}function Pv(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function su(n,e,t){const r=t??n;Rv(n.x,Pv(e.x,r.x),e.scaleX,e.scale,e.originX),Rv(n.y,Pv(e.y,r.y),e.scaleY,e.scale,e.originY)}function Py(n,e){return Ay(A1(n.getBoundingClientRect(),e))}function R1(n,e,t){const r=Py(n,t),{scroll:o}=e;return o&&(Wi(r.x,o.offset.x),Wi(r.y,o.offset.y)),r}const P1={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},D1=jo.length;function L1(n,e,t){let r="",o=!0;for(let a=0;a<D1;a++){const c=jo[a],u=n[c];if(u===void 0)continue;let d=!0;if(typeof u=="number")d=u===(c.startsWith("scale")?1:0);else{const h=parseFloat(u);d=c.startsWith("scale")?h===1:h===0}if(!d||t){const h=xy(u,rm[c]);if(!d){o=!1;const p=P1[c]||c;r+=`${p}(${h}) `}t&&(e[c]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function um(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const d in e){const h=e[d];if(Xo.has(d)){c=!0;continue}else if(B_(d)){o[d]=h;continue}else{const p=xy(h,rm[d]);d.startsWith("origin")?(u=!0,a[d]=p):r[d]=p}}if(e.transform||(c||t?r.transform=L1(e,n.transform,t):r.transform&&(r.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;r.transformOrigin=`${d} ${h} ${p}`}}function Dy(n,{style:e,vars:t},r,o){const a=n.style;let c;for(c in e)a[c]=e[c];o==null||o.applyProjectionStyles(a,r);for(c in t)a.setProperty(c,t[c])}function Dv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const La={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(Ye.test(n))n=parseFloat(n);else return n;const t=Dv(n,e.target.x),r=Dv(n,e.target.y);return`${t}% ${r}%`}},I1={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Ii.parse(n);if(o.length>5)return r;const a=Ii.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=d;const h=Xt(u,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}},zh={borderRadius:{...La,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:La,borderTopRightRadius:La,borderBottomLeftRadius:La,borderBottomRightRadius:La,boxShadow:I1};function Ly(n,{layout:e,layoutId:t}){return Xo.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!zh[n]||n==="opacity")}function fm(n,e,t){var c;const r=n.style,o=e==null?void 0:e.style,a={};if(!r)return a;for(const u in r)(hn(r[u])||o&&hn(o[u])||Ly(u,n)||((c=t==null?void 0:t.getValue(u))==null?void 0:c.liveStyle)!==void 0)&&(a[u]=r[u]);return a}function N1(n){return window.getComputedStyle(n)}class U1 extends by{constructor(){super(...arguments),this.type="html",this.renderInstance=Dy}readValueFromInstance(e,t){var r;if(Xo.has(t))return(r=this.projection)!=null&&r.isProjecting?bh(t):Jw(e,t);{const o=N1(e),a=(B_(t)?o.getPropertyValue(t):o[t])||0;return typeof a=="string"?a.trim():a}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Py(e,t)}build(e,t,r){um(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return fm(e,t,r)}}const F1={offset:"stroke-dashoffset",array:"stroke-dasharray"},k1={offset:"strokeDashoffset",array:"strokeDasharray"};function O1(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?F1:k1;n[a.offset]=`${-r}`,n[a.array]=`${e} ${t}`}const B1=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function Iy(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...u},d,h,p){if(um(n,u,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:g}=n;v.transform&&(g.transform=v.transform,delete v.transform),(g.transform||v.transformOrigin)&&(g.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),g.transform&&(g.transformBox=(p==null?void 0:p.transformBox)??"fill-box",delete v.transformBox);for(const _ of B1)v[_]!==void 0&&(g[_]=v[_],delete v[_]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),o!==void 0&&O1(v,o,a,c,!1)}const Ny=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),Uy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function z1(n,e,t,r){Dy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(Ny.has(o)?o:im(o),e.attrs[o])}function Fy(n,e,t){const r=fm(n,e,t);for(const o in n)if(hn(n[o])||hn(e[o])){const a=jo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}class V1 extends by{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=dn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Xo.has(t)){const r=my(t);return r&&r.default||0}return t=Ny.has(t)?t:im(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Fy(e,t,r)}build(e,t,r){Iy(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){z1(e,t,r,o)}mount(e){this.isSVGTag=Uy(e.tagName),super.mount(e)}}const H1=cm.length;function ky(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?ky(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<H1;t++){const r=cm[t],o=n.props[r];(el(o)||o===!1)&&(e[r]=o)}return e}function Oy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const G1=[...lm].reverse(),W1=lm.length;function j1(n){return e=>Promise.all(e.map(({animation:t,options:r})=>zT(n,t,r)))}function X1(n){let e=j1(n),t=Lv(),r=!0,o=!1;const a=h=>(p,v)=>{var _;const g=Hs(n,v,h==="exit"?(_=n.presenceContext)==null?void 0:_.custom:void 0);if(g){const{transition:M,transitionEnd:T,...y}=g;p={...p,...y,...T}}return p};function c(h){e=h(n)}function u(h){const{props:p}=n,v=ky(n.parent)||{},g=[],_=new Set;let M={},T=1/0;for(let S=0;S<W1;S++){const C=G1[S],P=t[C],R=p[C]!==void 0?p[C]:v[C],I=el(R),N=C===h?P.isActive:null;N===!1&&(T=S);let O=R===v[C]&&R!==p[C]&&I;if(O&&(r||o)&&n.manuallyAnimateOnMount&&(O=!1),P.protectedKeys={...M},!P.isActive&&N===null||!R&&!P.prevProp||Ru(R)||typeof R=="boolean")continue;if(C==="exit"&&P.isActive&&N!==!0){P.prevResolvedValues&&(M={...M,...P.prevResolvedValues});continue}const E=Y1(P.prevProp,R);let D=E||C===h&&P.isActive&&!O&&I||S>T&&I,Y=!1;const k=Array.isArray(R)?R:[R];let $=k.reduce(a(C),{});N===!1&&($={});const{prevResolvedValues:J={}}=P,oe={...J,...$},K=B=>{D=!0,_.has(B)&&(Y=!0,_.delete(B)),P.needsAnimating[B]=!0;const te=n.getValue(B);te&&(te.liveStyle=!1)};for(const B in oe){const te=$[B],le=J[B];if(M.hasOwnProperty(B))continue;let F=!1;Lh(te)&&Lh(le)?F=!Oy(te,le):F=te!==le,F?te!=null?K(B):_.add(B):te!==void 0&&_.has(B)?K(B):P.protectedKeys[B]=!0}P.prevProp=R,P.prevResolvedValues=$,P.isActive&&(M={...M,...$}),(r||o)&&n.blockInitialAnimation&&(D=!1);const Z=O&&E;D&&(!Z||Y)&&g.push(...k.map(B=>{const te={type:C};if(typeof B=="string"&&(r||o)&&!Z&&n.manuallyAnimateOnMount&&n.parent){const{parent:le}=n,F=Hs(le,B);if(le.enteringChildren&&F){const{delayChildren:q}=F.transition||{};te.delay=oy(le.enteringChildren,n,q)}}return{animation:B,options:te}}))}if(_.size){const S={};if(typeof p.initial!="boolean"){const C=Hs(n,Array.isArray(p.initial)?p.initial[0]:p.initial);C&&C.transition&&(S.transition=C.transition)}_.forEach(C=>{const P=n.getBaseTarget(C),R=n.getValue(C);R&&(R.liveStyle=!0),S[C]=P??null}),g.push({animation:S})}let y=!!g.length;return r&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(y=!1),r=!1,o=!1,y?e(g):Promise.resolve()}function d(h,p){var g;if(t[h].isActive===p)return Promise.resolve();(g=n.variantChildren)==null||g.forEach(_=>{var M;return(M=_.animationState)==null?void 0:M.setActive(h,p)}),t[h].isActive=p;const v=u(h);for(const _ in t)t[_].protectedKeys={};return v}return{animateChanges:u,setActive:d,setAnimateFunction:c,getState:()=>t,reset:()=>{t=Lv(),o=!0}}}function Y1(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Oy(e,n):!1}function ws(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Lv(){return{animate:ws(!0),whileInView:ws(),whileHover:ws(),whileTap:ws(),whileDrag:ws(),whileFocus:ws(),exit:ws()}}function Vh(n,e){n.min=e.min,n.max=e.max}function Ti(n,e){Vh(n.x,e.x),Vh(n.y,e.y)}function Iv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const By=1e-4,q1=1-By,$1=1+By,zy=.01,K1=0-zy,Z1=0+zy;function kn(n){return n.max-n.min}function Q1(n,e,t){return Math.abs(n-e)<=t}function Nv(n,e,t,r=.5){n.origin=r,n.originPoint=Xt(e.min,e.max,n.origin),n.scale=kn(t)/kn(e),n.translate=Xt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=q1&&n.scale<=$1||isNaN(n.scale))&&(n.scale=1),(n.translate>=K1&&n.translate<=Z1||isNaN(n.translate))&&(n.translate=0)}function $a(n,e,t,r){Nv(n.x,e.x,t.x,r?r.originX:void 0),Nv(n.y,e.y,t.y,r?r.originY:void 0)}function Uv(n,e,t,r=0){const o=r?Xt(t.min,t.max,r):t.min;n.min=o+e.min,n.max=n.min+kn(e)}function J1(n,e,t,r){Uv(n.x,e.x,t.x,r==null?void 0:r.x),Uv(n.y,e.y,t.y,r==null?void 0:r.y)}function Fv(n,e,t,r=0){const o=r?Xt(t.min,t.max,r):t.min;n.min=e.min-o,n.max=n.min+kn(e)}function yu(n,e,t,r){Fv(n.x,e.x,t.x,r==null?void 0:r.x),Fv(n.y,e.y,t.y,r==null?void 0:r.y)}function kv(n,e,t,r,o){return n-=e,n=_u(n,1/t,r),o!==void 0&&(n=_u(n,1/o,r)),n}function eb(n,e=0,t=1,r=.5,o,a=n,c=n){if(qi.test(e)&&(e=parseFloat(e),e=Xt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=Xt(a.min,a.max,r);n===a&&(u-=e),n.min=kv(n.min,e,t,u,o),n.max=kv(n.max,e,t,u,o)}function Ov(n,e,[t,r,o],a,c){eb(n,e[t],e[r],e[o],e.scale,a,c)}const tb=["x","scaleX","originX"],nb=["y","scaleY","originY"];function Bv(n,e,t,r){Ov(n.x,e,tb,t?t.x:void 0,r?r.x:void 0),Ov(n.y,e,nb,t?t.y:void 0,r?r.y:void 0)}function zv(n){return n.translate===0&&n.scale===1}function Vy(n){return zv(n.x)&&zv(n.y)}function Vv(n,e){return n.min===e.min&&n.max===e.max}function ib(n,e){return Vv(n.x,e.x)&&Vv(n.y,e.y)}function Hv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Hy(n,e){return Hv(n.x,e.x)&&Hv(n.y,e.y)}function Gv(n){return kn(n.x)/kn(n.y)}function Wv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Gi(n){return[n("x"),n("y")]}function rb(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=(t==null?void 0:t.z)||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:v,rotateY:g,skewX:_,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),v&&(r+=`rotateX(${v}deg) `),g&&(r+=`rotateY(${g}deg) `),_&&(r+=`skewX(${_}deg) `),M&&(r+=`skewY(${M}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(r+=`scale(${u}, ${d})`),r||"none"}const Gy=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],sb=Gy.length,jv=n=>typeof n=="string"?parseFloat(n):n,Xv=n=>typeof n=="number"||Ye.test(n);function ob(n,e,t,r,o,a){o?(n.opacity=Xt(0,t.opacity??1,ab(r)),n.opacityExit=Xt(e.opacity??1,0,lb(r))):a&&(n.opacity=Xt(e.opacity??1,t.opacity??1,r));for(let c=0;c<sb;c++){const u=Gy[c];let d=Yv(e,u),h=Yv(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Xv(d)===Xv(h)?(n[u]=Math.max(Xt(jv(d),jv(h),r),0),(qi.test(h)||qi.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=Xt(e.rotate||0,t.rotate||0,r))}function Yv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const ab=Wy(0,.5,I_),lb=Wy(.5,.95,vi);function Wy(n,e,t){return r=>r<n?0:r>e?1:t(Za(n,e,r))}function cb(n,e,t){const r=hn(n)?n:Ws(n);return r.start(tm("",r,e,t)),r.animation}function tl(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}const ub=(n,e)=>n.depth-e.depth;class fb{constructor(){this.children=[],this.isDirty=!1}add(e){Hp(this.children,e),this.isDirty=!0}remove(e){pu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ub),this.isDirty=!1,this.children.forEach(e)}}function db(n,e){const t=Fn.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(Mr(r),n(a-e))};return Ft.setup(r,!0),()=>Mr(r)}function ou(n){return hn(n)?n.get():n}class hb{constructor(){this.members=[]}add(e){Hp(this.members,e);for(let t=this.members.length-1;t>=0;t--){const r=this.members[t];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(pu(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(pu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){var t;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((t=o.instance)==null?void 0:t.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,t){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:a}=r.options,{layoutDependency:c}=e.options;(a===void 0||a!==c)&&(e.resumeFrom=r,t&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var t,r,o,a,c;(r=(t=e.options).onExitComplete)==null||r.call(t),(c=(o=e.resumingFrom)==null?void 0:(a=o.options).onExitComplete)==null||c.call(a)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const au={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Pd=["","X","Y","Z"],pb=1e3;let mb=0;function Dd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function jy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=fy(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Ft,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&jy(r)}function Xy({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},u=e==null?void 0:e()){this.id=mb++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(xb),this.nodes.forEach(wb),this.nodes.forEach(Tb),this.nodes.forEach(_b)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new fb)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Wp),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=am(c)&&!m1(c),this.instance=c;const{layoutId:u,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||u)&&(this.isLayoutDirty=!0),n){let p,v=0;const g=()=>this.root.updateBlockedByResize=!1;Ft.read(()=>{v=window.innerWidth}),n(c,()=>{const _=window.innerWidth;_!==v&&(v=_,this.root.updateBlockedByResize=!0,p&&p(),p=db(g,250),au.hasAnimatedSinceResize&&(au.hasAnimatedSinceResize=!1,this.nodes.forEach(Kv)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:v,hasRelativeLayoutChanged:g,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||Pb,{onLayoutAnimationStart:T,onLayoutAnimationComplete:y}=h.getProps(),S=!this.targetLayout||!Hy(this.targetLayout,_),C=!v&&g;if(this.options.layoutRoot||this.resumeFrom||C||v&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const P={...em(M,"layout"),onPlay:T,onComplete:y};(h.shouldReduceMotion||this.options.layoutRoot)&&(P.delay=0,P.type=!1),this.startAnimation(P),this.setAnimationOrigin(p,C)}else v||Kv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),Mr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bb),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&jy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const v=this.path[p];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const d=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),d&&this.nodes.forEach(Sb),this.nodes.forEach(qv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach($v);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Mb),this.nodes.forEach(Eb),this.nodes.forEach(gb),this.nodes.forEach(vb)):this.nodes.forEach($v),this.clearAllSnapshots();const u=Fn.now();Mn.delta=Qi(0,1e3/60,u-Mn.timestamp),Mn.timestamp=u,Mn.isProcessing=!0,Sd.update.process(Mn),Sd.preRender.process(Mn),Sd.render.process(Mn),Mn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,sm.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(yb),this.sharedNodes.forEach(Ab)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ft.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ft.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!kn(this.snapshot.measuredBox.x)&&!kn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=dn()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!Vy(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&this.instance&&(u||Ls(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),Db(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var h;const{visualElement:c}=this.options;if(!c)return dn();const u=c.measureViewportBox();if(!(((h=this.scroll)==null?void 0:h.wasRoot)||this.path.some(Lb))){const{scroll:p}=this.root;p&&(Wi(u.x,p.offset.x),Wi(u.y,p.offset.y))}return u}removeElementScroll(c){var d;const u=dn();if(Ti(u,c),(d=this.scroll)!=null&&d.wasRoot)return u;for(let h=0;h<this.path.length;h++){const p=this.path[h],{scroll:v,options:g}=p;p!==this.root&&v&&g.layoutScroll&&(v.wasRoot&&Ti(u,c),Wi(u.x,v.offset.x),Wi(u.y,v.offset.y))}return u}applyTransform(c,u=!1,d){var p,v;const h=d||dn();Ti(h,c);for(let g=0;g<this.path.length;g++){const _=this.path[g];!u&&_.options.layoutScroll&&_.scroll&&_!==_.root&&(Wi(h.x,-_.scroll.offset.x),Wi(h.y,-_.scroll.offset.y)),Ls(_.latestValues)&&su(h,_.latestValues,(p=_.layout)==null?void 0:p.layoutBox)}return Ls(this.latestValues)&&su(h,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),h}removeTransform(c){var d;const u=dn();Ti(u,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];if(!Ls(p.latestValues))continue;let v;p.instance&&(Oh(p.latestValues)&&p.updateSnapshot(),v=dn(),Ti(v,p.measurePageBox())),Bv(u,p.latestValues,(d=p.snapshot)==null?void 0:d.layoutBox,v)}return Ls(this.latestValues)&&Bv(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Mn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){var _;const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||(_=this.parent)!=null&&_.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:v}=this.options;if(!this.layout||!(p||v))return;this.resolvedRelativeTargetAt=Mn.timestamp;const g=this.getClosestProjectingParent();g&&this.linkedParentVersion!==g.layoutVersion&&!g.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&g&&g.layout?this.createRelativeTarget(g,this.layout.layoutBox,g.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=dn(),this.targetWithTransforms=dn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),J1(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Ti(this.target,this.layout.layoutBox),Ry(this.target,this.targetDelta)):Ti(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?this.createRelativeTarget(g,this.target,g.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Oh(this.parent.latestValues)||Cy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,u,d){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=dn(),this.relativeTargetOrigin=dn(),yu(this.relativeTargetOrigin,u,d,this.options.layoutAnchor||void 0),Ti(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var M;const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||(M=this.parent)!=null&&M.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===Mn.timestamp&&(d=!1),d)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;Ti(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,g=this.treeScale.y;C1(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=dn());const{target:_}=c;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Iv(this.prevProjectionDelta.x,this.projectionDelta.x),Iv(this.prevProjectionDelta.y,this.projectionDelta.y)),$a(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==g||!Wv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Wv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){var u;if((u=this.options.visualElement)==null||u.scheduleRender(),c){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=Uo(),this.projectionDelta=Uo(),this.projectionDeltaWithTransform=Uo()}setAnimationOrigin(c,u=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},v=Uo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const g=dn(),_=d?d.source:void 0,M=this.layout?this.layout.source:void 0,T=_!==M,y=this.getStack(),S=!y||y.members.length<=1,C=!!(T&&!S&&this.options.crossfade===!0&&!this.path.some(Rb));this.animationProgress=0;let P;this.mixTargetDelta=R=>{const I=R/1e3;Zv(v.x,c.x,I),Zv(v.y,c.y,I),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(yu(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Cb(this.relativeTarget,this.relativeTargetOrigin,g,I),P&&ib(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=dn()),Ti(P,this.relativeTarget)),T&&(this.animationValues=p,ob(p,h,this.latestValues,I,C,S)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=I},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){var u,d,h;this.notifyListeners("animationStart"),(u=this.currentAnimation)==null||u.stop(),(h=(d=this.resumingFrom)==null?void 0:d.currentAnimation)==null||h.stop(),this.pendingAnimation&&(Mr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ft.update(()=>{au.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Ws(0)),this.motionValue.jump(0,!1),this.currentAnimation=cb(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:p=>{this.mixTargetDelta(p),c.onUpdate&&c.onUpdate(p)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(pb),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:p}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&Yy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||dn();const v=kn(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const g=kn(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+g}Ti(u,d),su(u,p),$a(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new hb),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())==null?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())==null?void 0:u.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&Dd("z",c,h,this.animationValues);for(let p=0;p<Pd.length;p++)Dd(`rotate${Pd[p]}`,c,h,this.animationValues),Dd(`skew${Pd[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=ou(u==null?void 0:u.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=ou(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!Ls(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const p=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=rb(this.projectionDeltaWithTransform,this.treeScale,p);d&&(v=d(p,v)),c.transform=v;const{x:g,y:_}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${_.origin*100}% 0`,h.animationValues?c.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const M in zh){if(p[M]===void 0)continue;const{correct:T,applyTo:y,isCSSVariable:S}=zh[M],C=v==="none"?p[M]:T(p[M],h);if(y){const P=y.length;for(let R=0;R<P;R++)c[y[R]]=C}else S?this.options.visualElement.renderState.vars[M]=C:c[M]=C}this.options.layoutId&&(c.pointerEvents=h===this?ou(u==null?void 0:u.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>{var u;return(u=c.currentAnimation)==null?void 0:u.stop()}),this.root.nodes.forEach(qv),this.root.sharedNodes.clear()}}}function gb(n){n.updateLayout()}function vb(n){var t;const e=((t=n.resumeFrom)==null?void 0:t.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:a}=n.options,c=e.source!==n.layout.source;if(a==="size")Gi(v=>{const g=c?e.measuredBox[v]:e.layoutBox[v],_=kn(g);g.min=r[v].min,g.max=g.min+_});else if(a==="x"||a==="y"){const v=a==="x"?"y":"x";Vh(c?e.measuredBox[v]:e.layoutBox[v],r[v])}else Yy(a,e.layoutBox,r)&&Gi(v=>{const g=c?e.measuredBox[v]:e.layoutBox[v],_=kn(r[v]);g.max=g.min+_,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[v].max=n.relativeTarget[v].min+_)});const u=Uo();$a(u,r,e.layoutBox);const d=Uo();c?$a(d,n.applyTransform(o,!0),e.measuredBox):$a(d,r,e.layoutBox);const h=!Vy(u);let p=!1;if(!n.resumeFrom){const v=n.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:g,layout:_}=v;if(g&&_){const M=n.options.layoutAnchor||void 0,T=dn();yu(T,e.layoutBox,g.layoutBox,M);const y=dn();yu(y,r,_.layoutBox,M),Hy(T,y)||(p=!0),v.options.layoutRoot&&(n.relativeTarget=y,n.relativeTargetOrigin=T,n.relativeParent=v)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:d,layoutDelta:u,hasLayoutChanged:h,hasRelativeLayoutChanged:p})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function xb(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function _b(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function yb(n){n.clearSnapshot()}function qv(n){n.clearMeasurements()}function Sb(n){n.isLayoutDirty=!0,n.updateLayout()}function $v(n){n.isLayoutDirty=!1}function Mb(n){n.isAnimationBlocked&&n.layout&&!n.isLayoutDirty&&(n.snapshot=n.layout,n.isLayoutDirty=!0)}function Eb(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Kv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function wb(n){n.resolveTargetDelta()}function Tb(n){n.calcProjection()}function bb(n){n.resetSkewAndRotation()}function Ab(n){n.removeLeadSnapshot()}function Zv(n,e,t){n.translate=Xt(e.translate,0,t),n.scale=Xt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Qv(n,e,t,r){n.min=Xt(e.min,t.min,r),n.max=Xt(e.max,t.max,r)}function Cb(n,e,t,r){Qv(n.x,e.x,t.x,r),Qv(n.y,e.y,t.y,r)}function Rb(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const Pb={duration:.45,ease:[.4,0,.1,1]},Jv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),ex=Jv("applewebkit/")&&!Jv("chrome/")?Math.round:vi;function tx(n){n.min=ex(n.min),n.max=ex(n.max)}function Db(n){tx(n.x),tx(n.y)}function Yy(n,e,t){return n==="position"||n==="preserve-aspect"&&!Q1(Gv(e),Gv(t),.2)}function Lb(n){var e;return n!==n.root&&((e=n.scroll)==null?void 0:e.wasRoot)}const Ib=Xy({attachResizeListener:(n,e)=>tl(n,"resize",e),measureScroll:()=>{var n,e;return{x:document.documentElement.scrollLeft||((n=document.body)==null?void 0:n.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Ld={current:void 0},qy=Xy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Ld.current){const n=new Ib({});n.mount(window),n.setOptions({layoutScroll:!0}),Ld.current=n}return Ld.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),ll=_e.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function nx(n,e){if(typeof n=="function")return n(e);n!=null&&(n.current=e)}function Nb(...n){return e=>{let t=!1;const r=n.map(o=>{const a=nx(o,e);return!t&&typeof a=="function"&&(t=!0),a});if(t)return()=>{for(let o=0;o<r.length;o++){const a=r[o];typeof a=="function"?a():nx(n[o],null)}}}}function Ub(...n){return _e.useCallback(Nb(...n),n)}class Fb extends _e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(tu(t)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=t.offsetParent,o=tu(r)&&r.offsetWidth||0,a=tu(r)&&r.offsetHeight||0,c=getComputedStyle(t),u=this.props.sizeRef.current;u.height=parseFloat(c.height),u.width=parseFloat(c.width),u.top=t.offsetTop,u.left=t.offsetLeft,u.right=o-u.width-u.left,u.bottom=a-u.height-u.top}return null}componentDidUpdate(){}render(){return this.props.children}}function kb({children:n,isPresent:e,anchorX:t,anchorY:r,root:o,pop:a}){var g;const c=_e.useId(),u=_e.useRef(null),d=_e.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0}),{nonce:h}=_e.useContext(ll),p=((g=n.props)==null?void 0:g.ref)??(n==null?void 0:n.ref),v=Ub(u,p);return _e.useInsertionEffect(()=>{const{width:_,height:M,top:T,left:y,right:S,bottom:C}=d.current;if(e||a===!1||!u.current||!_||!M)return;const P=t==="left"?`left: ${y}`:`right: ${S}`,R=r==="bottom"?`bottom: ${C}`:`top: ${T}`;u.current.dataset.motionPopId=c;const I=document.createElement("style");h&&(I.nonce=h);const N=o??document.head;return N.appendChild(I),I.sheet&&I.sheet.insertRule(`
          [data-motion-pop-id="${c}"] {
            position: absolute !important;
            width: ${_}px !important;
            height: ${M}px !important;
            ${P}px !important;
            ${R}px !important;
          }
        `),()=>{var O;(O=u.current)==null||O.removeAttribute("data-motion-pop-id"),N.contains(I)&&N.removeChild(I)}},[e]),Q.jsx(Fb,{isPresent:e,childRef:u,sizeRef:d,pop:a,children:a===!1?n:_e.cloneElement(n,{ref:v})})}const Ob=({children:n,initial:e,isPresent:t,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:c,anchorX:u,anchorY:d,root:h})=>{const p=Gs(Bb),v=_e.useId();let g=!0,_=_e.useMemo(()=>(g=!1,{id:v,initial:e,isPresent:t,custom:o,onExitComplete:M=>{p.set(M,!0);for(const T of p.values())if(!T)return;r&&r()},register:M=>(p.set(M,!1),()=>p.delete(M))}),[t,p,r]);return a&&g&&(_={..._}),_e.useMemo(()=>{p.forEach((M,T)=>p.set(T,!1))},[t]),_e.useEffect(()=>{!t&&!p.size&&r&&r()},[t]),n=Q.jsx(kb,{pop:c==="popLayout",isPresent:t,anchorX:u,anchorY:d,root:h,children:n}),Q.jsx(Au.Provider,{value:_,children:n})};function Bb(){return new Map}function $y(n=!0){const e=_e.useContext(Au);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=_e.useId();_e.useEffect(()=>{if(n)return o(a)},[n]);const c=_e.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const Tc=n=>n.key||"";function ix(n){const e=[];return _e.Children.forEach(n,t=>{_e.isValidElement(t)&&e.push(t)}),e}const Ky=({children:n,custom:e,initial:t=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:a="sync",propagate:c=!1,anchorX:u="left",anchorY:d="top",root:h})=>{const[p,v]=$y(c),g=_e.useMemo(()=>ix(n),[n]),_=c&&!p?[]:g.map(Tc),M=_e.useRef(!0),T=_e.useRef(g),y=Gs(()=>new Map),S=_e.useRef(new Set),[C,P]=_e.useState(g),[R,I]=_e.useState(g);Vp(()=>{M.current=!1,T.current=g;for(let E=0;E<R.length;E++){const D=Tc(R[E]);_.includes(D)?(y.delete(D),S.current.delete(D)):y.get(D)!==!0&&y.set(D,!1)}},[R,_.length,_.join("-")]);const N=[];if(g!==C){let E=[...g];for(let D=0;D<R.length;D++){const Y=R[D],k=Tc(Y);_.includes(k)||(E.splice(D,0,Y),N.push(Y))}return a==="wait"&&N.length&&(E=N),I(ix(E)),P(g),null}const{forceRender:O}=_e.useContext(zp);return Q.jsx(Q.Fragment,{children:R.map(E=>{const D=Tc(E),Y=c&&!p?!1:g===R||_.includes(D),k=()=>{if(S.current.has(D))return;if(y.has(D))S.current.add(D),y.set(D,!0);else return;let $=!0;y.forEach(J=>{J||($=!1)}),$&&(O==null||O(),I(T.current),c&&(v==null||v()),r&&r())};return Q.jsx(Ob,{isPresent:Y,initial:!M.current||t?void 0:!1,custom:e,presenceAffectsLayout:o,mode:a,root:h,onExitComplete:Y?void 0:k,anchorX:u,anchorY:d,children:E},D)})})},Zy=_e.createContext({strict:!1}),rx={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let sx=!1;function zb(){if(sx)return;const n={};for(const e in rx)n[e]={isEnabled:t=>rx[e].some(r=>!!t[r])};Ty(n),sx=!0}function Qy(){return zb(),w1()}function Vb(n){const e=Qy();for(const t in n)e[t]={...e[t],...n[t]};Ty(e)}const Hb=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function Su(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||Hb.has(n)}let Jy=n=>!Su(n);function Gb(n){typeof n=="function"&&(Jy=e=>e.startsWith("on")?!Su(e):n(e))}try{Gb(require("@emotion/is-prop-valid").default)}catch{}function Wb(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||hn(n[o])||(Jy(o)||t===!0&&Su(o)||!e&&!Su(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Du=_e.createContext({});function jb(n,e){if(Pu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||el(t)?t:void 0,animate:el(r)?r:void 0}}return n.inherit!==!1?e:{}}function Xb(n){const{initial:e,animate:t}=jb(n,_e.useContext(Du));return _e.useMemo(()=>({initial:e,animate:t}),[ox(e),ox(t)])}function ox(n){return Array.isArray(n)?n.join(" "):n}const dm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function eS(n,e,t){for(const r in e)!hn(e[r])&&!Ly(r,t)&&(n[r]=e[r])}function Yb({transformTemplate:n},e){return _e.useMemo(()=>{const t=dm();return um(t,e,n),Object.assign({},t.vars,t.style)},[e])}function qb(n,e){const t=n.style||{},r={};return eS(r,t,n),Object.assign(r,Yb(n,e)),r}function $b(n,e){const t={},r=qb(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const tS=()=>({...dm(),attrs:{}});function Kb(n,e,t,r){const o=_e.useMemo(()=>{const a=tS();return Iy(a,e,Uy(r),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};eS(a,n.style,n),o.style={...a,...o.style}}return o}const Zb=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function hm(n){return typeof n!="string"||n.includes("-")?!1:!!(Zb.indexOf(n)>-1||/[A-Z]/u.test(n))}function Qb(n,e,t,{latestValues:r},o,a=!1,c){const d=(c??hm(n)?Kb:$b)(e,r,o,n),h=Wb(e,typeof n=="string",a),p=n!==_e.Fragment?{...h,...d,ref:t}:{},{children:v}=e,g=_e.useMemo(()=>hn(v)?v.get():v,[v]);return _e.createElement(n,{...p,children:g})}function Jb({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:eA(t,r,o,n),renderState:e()}}function eA(n,e,t,r){const o={},a=r(n,{});for(const g in a)o[g]=ou(a[g]);let{initial:c,animate:u}=n;const d=Pu(n),h=Ey(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const v=p?u:c;if(v&&typeof v!="boolean"&&!Ru(v)){const g=Array.isArray(v)?v:[v];for(let _=0;_<g.length;_++){const M=nm(n,g[_]);if(M){const{transitionEnd:T,transition:y,...S}=M;for(const C in S){let P=S[C];if(Array.isArray(P)){const R=p?P.length-1:0;P=P[R]}P!==null&&(o[C]=P)}for(const C in T)o[C]=T[C]}}}return o}const nS=n=>(e,t)=>{const r=_e.useContext(Du),o=_e.useContext(Au),a=()=>Jb(n,e,r,o);return t?a():Gs(a)},tA=nS({scrapeMotionValuesFromProps:fm,createRenderState:dm}),nA=nS({scrapeMotionValuesFromProps:Fy,createRenderState:tS}),iA=Symbol.for("motionComponentSymbol");function rA(n,e,t){const r=_e.useRef(t);_e.useInsertionEffect(()=>{r.current=t});const o=_e.useRef(null);return _e.useCallback(a=>{var u;a&&((u=n.onMount)==null||u.call(n,a));const c=r.current;if(typeof c=="function")if(a){const d=c(a);typeof d=="function"&&(o.current=d)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a);e&&(a?e.mount(a):e.unmount())},[e])}const iS=_e.createContext({});function Lo(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function sA(n,e,t,r,o,a){var P,R;const{visualElement:c}=_e.useContext(Du),u=_e.useContext(Zy),d=_e.useContext(Au),h=_e.useContext(ll),p=h.reducedMotion,v=h.skipAnimations,g=_e.useRef(null),_=_e.useRef(!1);r=r||u.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p,skipAnimations:v,isSVG:a}),_.current&&g.current&&(g.current.manuallyAnimateOnMount=!0));const M=g.current,T=_e.useContext(iS);M&&!M.projection&&o&&(M.type==="html"||M.type==="svg")&&oA(g.current,t,o,T);const y=_e.useRef(!1);_e.useInsertionEffect(()=>{M&&y.current&&M.update(t,d)});const S=t[uy],C=_e.useRef(!!S&&typeof window<"u"&&!((P=window.MotionHandoffIsComplete)!=null&&P.call(window,S))&&((R=window.MotionHasOptimisedAnimation)==null?void 0:R.call(window,S)));return Vp(()=>{_.current=!0,M&&(y.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),C.current&&M.animationState&&M.animationState.animateChanges())}),_e.useEffect(()=>{M&&(!C.current&&M.animationState&&M.animationState.animateChanges(),C.current&&(queueMicrotask(()=>{var I;(I=window.MotionHandoffMarkAsComplete)==null||I.call(window,S)}),C.current=!1),M.enteringChildren=void 0)}),M}function oA(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h,layoutAnchor:p,layoutCrossfade:v}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:rS(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&Lo(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:d,layoutRoot:h,layoutAnchor:p})}function rS(n){if(n)return n.options.allowProjection!==!1?n.projection:rS(n.parent)}function Id(n,{forwardMotionProps:e=!1,type:t}={},r,o){r&&Vb(r);const a=t?t==="svg":hm(n),c=a?nA:tA;function u(h,p){let v;const g={..._e.useContext(ll),...h,layoutId:aA(h)},{isStatic:_}=g,M=Xb(h),T=c(h,_);if(!_&&typeof window<"u"){lA();const y=cA(g);v=y.MeasureLayout,M.visualElement=sA(n,T,g,o,y.ProjectionNode,a)}return Q.jsxs(Du.Provider,{value:M,children:[v&&M.visualElement?Q.jsx(v,{visualElement:M.visualElement,...g}):null,Qb(n,h,rA(T,M.visualElement,p),T,_,e,a)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=_e.forwardRef(u);return d[iA]=n,d}function aA({layoutId:n}){const e=_e.useContext(zp).id;return e&&n!==void 0?e+"-"+n:n}function lA(n,e){_e.useContext(Zy).strict}function cA(n){const e=Qy(),{drag:t,layout:r}=e;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t!=null&&t.isEnabled(n)||r!=null&&r.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function uA(n,e){if(typeof Proxy>"u")return Id;const t=new Map,r=(a,c)=>Id(a,c,n,e),o=(a,c)=>r(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?r:(t.has(c)||t.set(c,Id(c,void 0,n,e)),t.get(c))})}const fA=(n,e)=>e.isSVG??hm(n)?new V1(e):new U1(e,{allowProjection:n!==_e.Fragment});class dA extends ls{constructor(e){super(e),e.animationState||(e.animationState=X1(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ru(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let hA=0;class pA extends ls{constructor(){super(...arguments),this.id=hA++,this.isExitComplete=!1}update(){var a;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:c,custom:u}=this.node.getProps();if(typeof c=="string"){const d=Hs(this.node,c,u);if(d){const{transition:h,transitionEnd:p,...v}=d;for(const g in v)(a=this.node.getValue(g))==null||a.jump(v[g])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const mA={animation:{Feature:dA},exit:{Feature:pA}};function cl(n){return{point:{x:n.pageX,y:n.pageY}}}const gA=n=>e=>om(e)&&n(e,cl(e));function Ka(n,e,t,r){return tl(n,e,gA(t),r)}const sS=({current:n})=>n?n.ownerDocument.defaultView:null,ax=(n,e)=>Math.abs(n-e);function vA(n,e){const t=ax(n.x,e.x),r=ax(n.y,e.y);return Math.sqrt(t**2+r**2)}const lx=new Set(["auto","scroll"]);class oS{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:u}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=_=>{this.handleScroll(_.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=bc(this.lastRawMoveEventInfo,this.transformPagePoint));const _=Nd(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,T=vA(_.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!T)return;const{point:y}=_,{timestamp:S}=Mn;this.history.push({...y,timestamp:S});const{onStart:C,onMove:P}=this.handlers;M||(C&&C(this.lastMoveEvent,_),this.startEvent=this.lastMoveEvent),P&&P(this.lastMoveEvent,_)},this.handlePointerMove=(_,M)=>{this.lastMoveEvent=_,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=bc(M,this.transformPagePoint),Ft.update(this.updatePoint,!0)},this.handlePointerUp=(_,M)=>{this.end();const{onEnd:T,onSessionEnd:y,resumeAnimation:S}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&S&&S(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const C=Nd(_.type==="pointercancel"?this.lastMoveEventInfo:bc(M,this.transformPagePoint),this.history);this.startEvent&&T&&T(_,C),y&&y(_,C)},!om(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=o||window;const d=cl(e),h=bc(d,this.transformPagePoint),{point:p}=h,{timestamp:v}=Mn;this.history=[{...p,timestamp:v}];const{onSessionStart:g}=t;g&&g(e,Nd(h,this.history)),this.removeListeners=sl(Ka(this.contextWindow,"pointermove",this.handlePointerMove),Ka(this.contextWindow,"pointerup",this.handlePointerUp),Ka(this.contextWindow,"pointercancel",this.handlePointerUp)),u&&this.startScrollTracking(u)}startScrollTracking(e){let t=e.parentElement;for(;t;){const r=getComputedStyle(t);(lx.has(r.overflowX)||lx.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),Ft.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),Mr(this.updatePoint)}}function bc(n,e){return e?{point:e(n.point)}:n}function cx(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Nd({point:n},e){return{point:n,delta:cx(n,aS(e)),offset:cx(n,xA(e)),velocity:_A(e,.1)}}function xA(n){return n[0]}function aS(n){return n[n.length-1]}function _A(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=aS(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>ni(e)));)t--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&o.timestamp-r.timestamp>ni(e)*2&&(r=n[1]);const a=gi(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function yA(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Xt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Xt(t,n,r.max):Math.min(n,t)),n}function ux(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function SA(n,{top:e,left:t,bottom:r,right:o}){return{x:ux(n.x,t,o),y:ux(n.y,e,r)}}function fx(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function MA(n,e){return{x:fx(n.x,e.x),y:fx(n.y,e.y)}}function EA(n,e){let t=.5;const r=kn(n),o=kn(e);return o>r?t=Za(e.min,e.max-r,n.min):r>o&&(t=Za(n.min,n.max-o,e.min)),Qi(0,1,t)}function wA(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Hh=.35;function TA(n=Hh){return n===!1?n=0:n===!0&&(n=Hh),{x:dx(n,"left","right"),y:dx(n,"top","bottom")}}function dx(n,e,t){return{min:hx(n,e),max:hx(n,t)}}function hx(n,e){return typeof n=="number"?n:n[e]||0}const bA=new WeakMap;class AA{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=dn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=v=>{t&&this.snapToCursor(cl(v).point),this.stopAnimation()},c=(v,g)=>{const{drag:_,dragPropagation:M,onDragStart:T}=this.getProps();if(_&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=QT(_),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=g,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Gi(S=>{let C=this.getAxisMotionValue(S).get()||0;if(qi.test(C)){const{projection:P}=this.visualElement;if(P&&P.layout){const R=P.layout.layoutBox[S];R&&(C=kn(R)*(parseFloat(C)/100))}}this.originPoint[S]=C}),T&&Ft.update(()=>T(v,g),!1,!0),Ih(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},u=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g;const{dragPropagation:_,dragDirectionLock:M,onDirectionLock:T,onDrag:y}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:S}=g;if(M&&this.currentDirection===null){this.currentDirection=RA(S),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),y&&Ft.update(()=>y(v,g),!1,!0)},d=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g,this.stop(v,g),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:p}=this.getProps();this.panSession=new oS(e,{onSessionStart:a,onStart:c,onMove:u,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:r,contextWindow:sS(this.visualElement),element:this.visualElement.current})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!r)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&Ft.postRender(()=>u(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Ac(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=yA(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){var a;const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(a=this.visualElement.projection)==null?void 0:a.layout,o=this.constraints;e&&Lo(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=SA(r.layoutBox,e):this.constraints=!1,this.elastic=TA(t),o!==this.constraints&&!Lo(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Gi(c=>{this.constraints!==!1&&this.getAxisMotionValue(c)&&(this.constraints[c]=wA(r.layoutBox[c],this.constraints[c]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Lo(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=R1(r,o.root,this.visualElement.getTransformPagePoint());let c=MA(o.layout.layoutBox,a);if(t){const u=t(b1(c));this.hasMutatedConstraints=!!u,u&&(c=Ay(u))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=Gi(p=>{if(!Ac(p,t,this.currentDirection))return;let v=d&&d[p]||{};(c===!0||c===p)&&(v={min:0,max:0});const g=o?200:1e6,_=o?40:1e7,M={type:"inertia",velocity:r?e[p]:0,bounceStiffness:g,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Ih(this.visualElement,e),r.start(tm(e,r,0,t,this.visualElement,!1))}stopAnimation(){Gi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Gi(t=>{const{drag:r}=this.getProps();if(!Ac(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t],d=a.get()||0;a.set(e[t]-Xt(c,u,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Lo(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Gi(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();o[c]=EA({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Gi(c=>{if(!Ac(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(Xt(d,h,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;bA.set(this.visualElement,this);const e=this.visualElement.current,t=Ka(e,"pointerdown",h=>{const{drag:p,dragListener:v=!0}=this.getProps(),g=h.target,_=g!==e&&r1(g);p&&v&&!_&&this.start(h)});let r;const o=()=>{const{dragConstraints:h}=this.getProps();Lo(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),r||(r=CA(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Ft.read(o);const u=tl(window,"resize",()=>this.scalePositionWithinConstraints()),d=a.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Gi(v=>{const g=this.getAxisMotionValue(v);g&&(this.originPoint[v]+=h[v].translate,g.set(g.get()+h[v].translate))}),this.visualElement.render())}));return()=>{u(),t(),c(),d&&d(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=Hh,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function px(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function CA(n,e,t){const r=yv(n,px(t)),o=yv(e,px(t));return()=>{r(),o()}}function Ac(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function RA(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class PA extends ls{constructor(e){super(e),this.removeGroupControls=vi,this.removeListeners=vi,this.controls=new AA(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||vi}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Ud=n=>(e,t)=>{n&&Ft.update(()=>n(e,t),!1,!0)};class DA extends ls{constructor(){super(...arguments),this.removePointerDownListener=vi}onPointerDown(e){this.session=new oS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:sS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Ud(e),onStart:Ud(t),onMove:Ud(r),onEnd:(a,c)=>{delete this.session,o&&Ft.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=Ka(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Fd=!1;class LA extends _e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),Fd&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),au.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,{projection:c}=r;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),Fd=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Ft.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:t}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=t,r.root.didUpdate(),sm.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;Fd=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function lS(n){const[e,t]=$y(),r=_e.useContext(zp);return Q.jsx(LA,{...n,layoutGroup:r,switchLayoutGroup:_e.useContext(iS),isPresent:e,safeToRemove:t})}const IA={pan:{Feature:DA},drag:{Feature:PA,ProjectionNode:qy,MeasureLayout:lS}};function mx(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&Ft.postRender(()=>a(e,cl(e)))}class NA extends ls{mount(){const{current:e}=this.node;e&&(this.unmount=e1(e,(t,r)=>(mx(this.node,r,"Start"),o=>mx(this.node,o,"End"))))}unmount(){}}class UA extends ls{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=sl(tl(this.node.current,"focus",()=>this.onFocus()),tl(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function gx(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&Ft.postRender(()=>a(e,cl(e)))}class FA extends ls{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:r}=this.node.props;this.unmount=o1(e,(o,a)=>(gx(this.node,a,"Start"),(c,{success:u})=>gx(this.node,c,u?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Gh=new WeakMap,kd=new WeakMap,kA=n=>{const e=Gh.get(n.target);e&&e(n)},OA=n=>{n.forEach(kA)};function BA({root:n,...e}){const t=n||document;kd.has(t)||kd.set(t,{});const r=kd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(OA,{root:n,...e})),r[o]}function zA(n,e,t){const r=BA(e);return Gh.set(n,t),r.observe(n),()=>{Gh.delete(n),r.unobserve(n)}}const VA={some:0,all:1};class HA extends ls{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var d;(d=this.stopObserver)==null||d.call(this);const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:VA[o]},u=h=>{const{isIntersecting:p}=h;if(this.isInView===p||(this.isInView=p,a&&!p&&this.hasEnteredView))return;p&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",p);const{onViewportEnter:v,onViewportLeave:g}=this.node.getProps(),_=p?v:g;_&&_(h)};this.stopObserver=zA(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(GA(e,t))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function GA({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const WA={inView:{Feature:HA},tap:{Feature:FA},focus:{Feature:UA},hover:{Feature:NA}},jA={layout:{ProjectionNode:qy,MeasureLayout:lS}},XA={...mA,...WA,...IA,...jA},Zt=uA(XA,fA);function Lu(n){const e=Gs(()=>Ws(n)),{isStatic:t}=_e.useContext(ll);if(t){const[,r]=_e.useState(n);_e.useEffect(()=>e.on("change",r),[])}return e}function cS(n,e){const t=Lu(e()),r=()=>t.set(e());return r(),Vp(()=>{const o=()=>Ft.preRender(r,!1,!0),a=n.map(c=>c.on("change",o));return()=>{a.forEach(c=>c()),Mr(r)}}),t}function YA(n){qa.current=[],n();const e=cS(qa.current,n);return qa.current=void 0,e}function Mu(n,e,t,r){if(typeof n=="function")return YA(n);if(t!==void 0&&!Array.isArray(t)&&typeof e!="function")return qA(n,e,t,r);const c=typeof e=="function"?e:g1(e,t,r),u=Array.isArray(n)?vx(n,c):vx([n],([h])=>c(h)),d=Array.isArray(n)?void 0:n.accelerate;return d&&!d.isTransformed&&typeof e!="function"&&Array.isArray(t)&&(r==null?void 0:r.clamp)!==!1&&(u.accelerate={...d,times:e,keyframes:t,isTransformed:!0}),u}function vx(n,e){const t=Gs(()=>[]);return cS(n,()=>{t.length=0;const r=n.length;for(let o=0;o<r;o++)t[o]=n[o].get();return e(t)})}function qA(n,e,t,r){const o=Gs(()=>Object.keys(t)),a=Gs(()=>({}));for(const c of o)a[c]=Mu(n,e,t[c],r);return a}function $A(n,e={}){const{isStatic:t}=_e.useContext(ll),r=()=>hn(n)?n.get():n;if(t)return Mu(r);const o=Lu(r());return _e.useInsertionEffect(()=>v1(o,n,e),[o,JSON.stringify(e)]),o}function KA(n,e={}){return $A(n,{type:"spring",...e})}/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZA=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),QA=n=>n.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),xx=n=>{const e=QA(n);return e.charAt(0).toUpperCase()+e.slice(1)},uS=(...n)=>n.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var JA={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eC=_e.forwardRef(({color:n="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:a,iconNode:c,...u},d)=>_e.createElement("svg",{ref:d,...JA,width:e,height:e,stroke:n,strokeWidth:r?Number(t)*24/Number(e):t,className:uS("lucide",o),...u},[...c.map(([h,p])=>_e.createElement(h,p)),...Array.isArray(a)?a:[a]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=(n,e)=>{const t=_e.forwardRef(({className:r,...o},a)=>_e.createElement(eC,{ref:a,iconNode:e,className:uS(`lucide-${ZA(xx(n))}`,`lucide-${n}`,r),...o}));return t.displayName=xx(n),t};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tC=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],_x=Ui("arrow-right",tC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nC=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],Ia=Ui("book-open",nC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],rC=Ui("chevron-left",iC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sC=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],oC=Ui("external-link",sC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],yx=Ui("graduation-cap",aC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],cC=Ui("info",lC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uC=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],fC=Ui("linkedin",uC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dC=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],Na=Ui("message-circle",dC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hC=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],pC=Ui("star",hC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mC=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],gC=Ui("users",mC);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vC=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],xC=Ui("zap",vC);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pm="183",_C=0,Sx=1,yC=2,lu=1,SC=2,Wa=3,as=0,qn=1,vr=2,_r=0,Fo=1,Mx=2,Ex=3,wx=4,MC=5,Ns=100,EC=101,wC=102,TC=103,bC=104,AC=200,CC=201,RC=202,PC=203,Wh=204,jh=205,DC=206,LC=207,IC=208,NC=209,UC=210,FC=211,kC=212,OC=213,BC=214,Xh=0,Yh=1,qh=2,Bo=3,$h=4,Kh=5,Zh=6,Qh=7,fS=0,zC=1,VC=2,$i=0,dS=1,hS=2,pS=3,mS=4,gS=5,vS=6,xS=7,_S=300,js=301,zo=302,Od=303,Bd=304,Iu=306,Jh=1e3,xr=1001,ep=1002,En=1003,HC=1004,Cc=1005,Pn=1006,zd=1007,Bs=1008,mi=1009,yS=1010,SS=1011,nl=1012,mm=1013,Ji=1014,Xi=1015,Er=1016,gm=1017,vm=1018,il=1020,MS=35902,ES=35899,wS=1021,TS=1022,Li=1023,wr=1026,zs=1027,bS=1028,xm=1029,Vo=1030,_m=1031,ym=1033,cu=33776,uu=33777,fu=33778,du=33779,tp=35840,np=35841,ip=35842,rp=35843,sp=36196,op=37492,ap=37496,lp=37488,cp=37489,up=37490,fp=37491,dp=37808,hp=37809,pp=37810,mp=37811,gp=37812,vp=37813,xp=37814,_p=37815,yp=37816,Sp=37817,Mp=37818,Ep=37819,wp=37820,Tp=37821,bp=36492,Ap=36494,Cp=36495,Rp=36283,Pp=36284,Dp=36285,Lp=36286,GC=3200,WC=0,jC=1,is="",pi="srgb",Ho="srgb-linear",Eu="linear",Ut="srgb",vo=7680,Tx=519,XC=512,YC=513,qC=514,Sm=515,$C=516,KC=517,Mm=518,ZC=519,bx=35044,Ax="300 es",Yi=2e3,wu=2001;function QC(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Tu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function JC(){const n=Tu("canvas");return n.style.display="block",n}const Cx={};function Rx(...n){const e="THREE."+n.shift();console.log(e,...n)}function AS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ft(...n){n=AS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Pt(...n){n=AS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function bu(...n){const e=n.join(" ");e in Cx||(Cx[e]=!0,ft(...n))}function eR(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const tR={[Xh]:Yh,[qh]:Zh,[$h]:Qh,[Bo]:Kh,[Yh]:Xh,[Zh]:qh,[Qh]:$h,[Kh]:Bo};class Yo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vd=Math.PI/180,Ip=180/Math.PI;function ul(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Cn[n&255]+Cn[n>>8&255]+Cn[n>>16&255]+Cn[n>>24&255]+"-"+Cn[e&255]+Cn[e>>8&255]+"-"+Cn[e>>16&15|64]+Cn[e>>24&255]+"-"+Cn[t&63|128]+Cn[t>>8&255]+"-"+Cn[t>>16&255]+Cn[t>>24&255]+Cn[r&255]+Cn[r>>8&255]+Cn[r>>16&255]+Cn[r>>24&255]).toLowerCase()}function Mt(n,e,t){return Math.max(e,Math.min(t,n))}function nR(n,e){return(n%e+e)%e}function Hd(n,e,t){return(1-t)*n+t*e}function Ua(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class kt{constructor(e=0,t=0){kt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,u){let d=r[o+0],h=r[o+1],p=r[o+2],v=r[o+3],g=a[c+0],_=a[c+1],M=a[c+2],T=a[c+3];if(v!==T||d!==g||h!==_||p!==M){let y=d*g+h*_+p*M+v*T;y<0&&(g=-g,_=-_,M=-M,T=-T,y=-y);let S=1-u;if(y<.9995){const C=Math.acos(y),P=Math.sin(C);S=Math.sin(S*C)/P,u=Math.sin(u*C)/P,d=d*S+g*u,h=h*S+_*u,p=p*S+M*u,v=v*S+T*u}else{d=d*S+g*u,h=h*S+_*u,p=p*S+M*u,v=v*S+T*u;const C=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=C,h*=C,p*=C,v*=C}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,c){const u=r[o],d=r[o+1],h=r[o+2],p=r[o+3],v=a[c],g=a[c+1],_=a[c+2],M=a[c+3];return e[t]=u*M+p*v+d*_-h*g,e[t+1]=d*M+p*g+h*v-u*_,e[t+2]=h*M+p*_+u*g-d*v,e[t+3]=p*M-u*v-d*g-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(r/2),p=u(o/2),v=u(a/2),g=d(r/2),_=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=g*p*v+h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v-g*_*M;break;case"YXZ":this._x=g*p*v+h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v+g*_*M;break;case"ZXY":this._x=g*p*v-h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v-g*_*M;break;case"ZYX":this._x=g*p*v-h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v+g*_*M;break;case"YZX":this._x=g*p*v+h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v-g*_*M;break;case"XZY":this._x=g*p*v-h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v+g*_*M;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],v=t[10],g=r+u+v;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(p-d)*_,this._y=(a-h)*_,this._z=(c-o)*_}else if(r>u&&r>v){const _=2*Math.sqrt(1+r-u-v);this._w=(p-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(a+h)/_}else if(u>v){const _=2*Math.sqrt(1+u-r-v);this._w=(a-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+v-r-u);this._w=(c-o)/_,this._x=(a+h)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+c*u+o*h-a*d,this._y=o*p+c*d+a*u-r*h,this._z=a*p+c*h+r*d-o*u,this._w=c*p-r*u-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(r=-r,o=-o,a=-a,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(e=0,t=0,r=0){ce.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Px.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Px.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*o-u*r),p=2*(u*t-a*o),v=2*(a*r-c*t);return this.x=t+d*h+c*v-u*p,this.y=r+d*p+u*h-a*v,this.z=o+d*v+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-r*d,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Gd.copy(this).projectOnVector(e),this.sub(Gd)}reflect(e){return this.sub(Gd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Gd=new ce,Px=new qo;class mt{constructor(e,t,r,o,a,c,u,d,h){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,d,h)}set(e,t,r,o,a,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[3],d=r[6],h=r[1],p=r[4],v=r[7],g=r[2],_=r[5],M=r[8],T=o[0],y=o[3],S=o[6],C=o[1],P=o[4],R=o[7],I=o[2],N=o[5],O=o[8];return a[0]=c*T+u*C+d*I,a[3]=c*y+u*P+d*N,a[6]=c*S+u*R+d*O,a[1]=h*T+p*C+v*I,a[4]=h*y+p*P+v*N,a[7]=h*S+p*R+v*O,a[2]=g*T+_*C+M*I,a[5]=g*y+_*P+M*N,a[8]=g*S+_*R+M*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-r*a*p+r*u*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=p*c-u*h,g=u*d-p*a,_=h*a-c*d,M=t*v+r*g+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(o*h-p*r)*T,e[2]=(u*r-o*c)*T,e[3]=g*T,e[4]=(p*t-o*d)*T,e[5]=(o*a-u*t)*T,e[6]=_*T,e[7]=(r*d-h*t)*T,e[8]=(c*t-r*a)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*c+h*u)+c+e,-o*h,o*d,-o*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(Wd.makeScale(e,t)),this}rotate(e){return this.premultiply(Wd.makeRotation(-e)),this}translate(e,t){return this.premultiply(Wd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wd=new mt,Dx=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lx=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function iR(){const n={enabled:!0,workingColorSpace:Ho,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Ut&&(o.r=yr(o.r),o.g=yr(o.g),o.b=yr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Ut&&(o.r=ko(o.r),o.g=ko(o.g),o.b=ko(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===is?Eu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return bu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return bu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ho]:{primaries:e,whitePoint:r,transfer:Eu,toXYZ:Dx,fromXYZ:Lx,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:Ut,toXYZ:Dx,fromXYZ:Lx,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),n}const Ct=iR();function yr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ko(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xo;class rR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{xo===void 0&&(xo=Tu("canvas")),xo.width=e.width,xo.height=e.height;const o=xo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=xo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Tu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=yr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(yr(t[r]/255)*255):t[r]=yr(t[r]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sR=0;class Em{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=ul(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(jd(o[c].image)):a.push(jd(o[c]))}else a=jd(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function jd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let oR=0;const Xd=new ce;class On extends Yo{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=xr,o=xr,a=Pn,c=Bs,u=Li,d=mi,h=On.DEFAULT_ANISOTROPY,p=is){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oR++}),this.uuid=ul(),this.name="",this.source=new Em(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xd).x}get height(){return this.source.getSize(Xd).y}get depth(){return this.source.getSize(Xd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_S)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jh:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case ep:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jh:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case ep:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=_S;On.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,t=0,r=0,o=1){rn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],p=d[4],v=d[8],g=d[1],_=d[5],M=d[9],T=d[2],y=d[6],S=d[10];if(Math.abs(p-g)<.01&&Math.abs(v-T)<.01&&Math.abs(M-y)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+T)<.1&&Math.abs(M+y)<.1&&Math.abs(h+_+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const P=(h+1)/2,R=(_+1)/2,I=(S+1)/2,N=(p+g)/4,O=(v+T)/4,E=(M+y)/4;return P>R&&P>I?P<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(P),o=N/r,a=O/r):R>I?R<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(R),r=N/o,a=E/o):I<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(I),r=O/a,o=E/a),this.set(r,o,a,t),this}let C=Math.sqrt((y-M)*(y-M)+(v-T)*(v-T)+(g-p)*(g-p));return Math.abs(C)<.001&&(C=1),this.x=(y-M)/C,this.y=(v-T)/C,this.z=(g-p)/C,this.w=Math.acos((h+_+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Mt(this.x,e.x,t.x),this.y=Mt(this.y,e.y,t.y),this.z=Mt(this.z,e.z,t.z),this.w=Mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Mt(this.x,e,t),this.y=Mt(this.y,e,t),this.z=Mt(this.z,e,t),this.w=Mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aR extends Yo{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new On(o),c=r.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Em(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends aR{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class CS extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=En,this.minFilter=En,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class lR extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=En,this.minFilter=En,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ln{constructor(e,t,r,o,a,c,u,d,h,p,v,g,_,M,T,y){ln.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,d,h,p,v,g,_,M,T,y)}set(e,t,r,o,a,c,u,d,h,p,v,g,_,M,T,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=r,S[12]=o,S[1]=a,S[5]=c,S[9]=u,S[13]=d,S[2]=h,S[6]=p,S[10]=v,S[14]=g,S[3]=_,S[7]=M,S[11]=T,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ln().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/_o.setFromMatrixColumn(e,0).length(),a=1/_o.setFromMatrixColumn(e,1).length(),c=1/_o.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),u=Math.sin(r),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const g=c*p,_=c*v,M=u*p,T=u*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=_+M*h,t[5]=g-T*h,t[9]=-u*d,t[2]=T-g*h,t[6]=M+_*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,_=d*v,M=h*p,T=h*v;t[0]=g+T*u,t[4]=M*u-_,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=_*u-M,t[6]=T+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,_=d*v,M=h*p,T=h*v;t[0]=g-T*u,t[4]=-c*v,t[8]=M+_*u,t[1]=_+M*u,t[5]=c*p,t[9]=T-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,_=c*v,M=u*p,T=u*v;t[0]=d*p,t[4]=M*h-_,t[8]=g*h+T,t[1]=d*v,t[5]=T*h+g,t[9]=_*h-M,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,_=c*h,M=u*d,T=u*h;t[0]=d*p,t[4]=T-g*v,t[8]=M*v+_,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=_*v+M,t[10]=g-T*v}else if(e.order==="XZY"){const g=c*d,_=c*h,M=u*d,T=u*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=g*v+T,t[5]=c*p,t[9]=_*v-M,t[2]=M*v-_,t[6]=u*p,t[10]=T*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(cR,e,uR)}lookAt(e,t,r){const o=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),qr.crossVectors(r,ei),qr.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),qr.crossVectors(r,ei)),qr.normalize(),Rc.crossVectors(ei,qr),o[0]=qr.x,o[4]=Rc.x,o[8]=ei.x,o[1]=qr.y,o[5]=Rc.y,o[9]=ei.y,o[2]=qr.z,o[6]=Rc.z,o[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[4],d=r[8],h=r[12],p=r[1],v=r[5],g=r[9],_=r[13],M=r[2],T=r[6],y=r[10],S=r[14],C=r[3],P=r[7],R=r[11],I=r[15],N=o[0],O=o[4],E=o[8],D=o[12],Y=o[1],k=o[5],$=o[9],J=o[13],oe=o[2],K=o[6],Z=o[10],W=o[14],B=o[3],te=o[7],le=o[11],F=o[15];return a[0]=c*N+u*Y+d*oe+h*B,a[4]=c*O+u*k+d*K+h*te,a[8]=c*E+u*$+d*Z+h*le,a[12]=c*D+u*J+d*W+h*F,a[1]=p*N+v*Y+g*oe+_*B,a[5]=p*O+v*k+g*K+_*te,a[9]=p*E+v*$+g*Z+_*le,a[13]=p*D+v*J+g*W+_*F,a[2]=M*N+T*Y+y*oe+S*B,a[6]=M*O+T*k+y*K+S*te,a[10]=M*E+T*$+y*Z+S*le,a[14]=M*D+T*J+y*W+S*F,a[3]=C*N+P*Y+R*oe+I*B,a[7]=C*O+P*k+R*K+I*te,a[11]=C*E+P*$+R*Z+I*le,a[15]=C*D+P*J+R*W+I*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],v=e[6],g=e[10],_=e[14],M=e[3],T=e[7],y=e[11],S=e[15],C=d*_-h*g,P=u*_-h*v,R=u*g-d*v,I=c*_-h*p,N=c*g-d*p,O=c*v-u*p;return t*(T*C-y*P+S*R)-r*(M*C-y*I+S*N)+o*(M*P-T*I+S*O)-a*(M*R-T*N+y*O)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=e[9],g=e[10],_=e[11],M=e[12],T=e[13],y=e[14],S=e[15],C=t*u-r*c,P=t*d-o*c,R=t*h-a*c,I=r*d-o*u,N=r*h-a*u,O=o*h-a*d,E=p*T-v*M,D=p*y-g*M,Y=p*S-_*M,k=v*y-g*T,$=v*S-_*T,J=g*S-_*y,oe=C*J-P*$+R*k+I*Y-N*D+O*E;if(oe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const K=1/oe;return e[0]=(u*J-d*$+h*k)*K,e[1]=(o*$-r*J-a*k)*K,e[2]=(T*O-y*N+S*I)*K,e[3]=(g*N-v*O-_*I)*K,e[4]=(d*Y-c*J-h*D)*K,e[5]=(t*J-o*Y+a*D)*K,e[6]=(y*R-M*O-S*P)*K,e[7]=(p*O-g*R+_*P)*K,e[8]=(c*$-u*Y+h*E)*K,e[9]=(r*Y-t*$-a*E)*K,e[10]=(M*N-T*R+S*C)*K,e[11]=(v*R-p*N-_*C)*K,e[12]=(u*D-c*k-d*E)*K,e[13]=(t*k-r*D+o*E)*K,e[14]=(T*P-M*I-y*C)*K,e[15]=(p*I-v*P+g*C)*K,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,u=e.y,d=e.z,h=a*c,p=a*u;return this.set(h*c+r,h*u-o*d,h*d+o*u,0,h*u+o*d,p*u+r,p*d-o*c,0,h*d-o*u,p*d+o*c,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,p=c+c,v=u+u,g=a*h,_=a*p,M=a*v,T=c*p,y=c*v,S=u*v,C=d*h,P=d*p,R=d*v,I=r.x,N=r.y,O=r.z;return o[0]=(1-(T+S))*I,o[1]=(_+R)*I,o[2]=(M-P)*I,o[3]=0,o[4]=(_-R)*N,o[5]=(1-(g+S))*N,o[6]=(y+C)*N,o[7]=0,o[8]=(M+P)*O,o[9]=(y-C)*O,o[10]=(1-(g+T))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return r.set(1,1,1),t.identity(),this;let c=_o.set(o[0],o[1],o[2]).length();const u=_o.set(o[4],o[5],o[6]).length(),d=_o.set(o[8],o[9],o[10]).length();a<0&&(c=-c),bi.copy(this);const h=1/c,p=1/u,v=1/d;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=p,bi.elements[5]*=p,bi.elements[6]*=p,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,t.setFromRotationMatrix(bi),r.x=c,r.y=u,r.z=d,this}makePerspective(e,t,r,o,a,c,u=Yi,d=!1){const h=this.elements,p=2*a/(t-e),v=2*a/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let M,T;if(d)M=a/(c-a),T=c*a/(c-a);else if(u===Yi)M=-(c+a)/(c-a),T=-2*c*a/(c-a);else if(u===wu)M=-c/(c-a),T=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,c,u=Yi,d=!1){const h=this.elements,p=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),_=-(r+o)/(r-o);let M,T;if(d)M=1/(c-a),T=c/(c-a);else if(u===Yi)M=-2/(c-a),T=-(c+a)/(c-a);else if(u===wu)M=-1/(c-a),T=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const _o=new ce,bi=new ln,cR=new ce(0,0,0),uR=new ce(1,1,1),qr=new ce,Rc=new ce,ei=new ce,Ix=new ln,Nx=new qo;class Tr{constructor(e=0,t=0,r=0,o=Tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],h=o[5],p=o[9],v=o[2],g=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(Mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-Mt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-Mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Ix.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ix,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nx.setFromEuler(this),this.setFromQuaternion(Nx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tr.DEFAULT_ORDER="XYZ";class RS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fR=0;const Ux=new ce,yo=new qo,fr=new ln,Pc=new ce,Fa=new ce,dR=new ce,hR=new qo,Fx=new ce(1,0,0),kx=new ce(0,1,0),Ox=new ce(0,0,1),Bx={type:"added"},pR={type:"removed"},So={type:"childadded",child:null},Yd={type:"childremoved",child:null};class ii extends Yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fR++}),this.uuid=ul(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ii.DEFAULT_UP.clone();const e=new ce,t=new Tr,r=new qo,o=new ce(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new ln},normalMatrix:{value:new mt}}),this.matrix=new ln,this.matrixWorld=new ln,this.matrixAutoUpdate=ii.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new RS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yo.setFromAxisAngle(e,t),this.quaternion.multiply(yo),this}rotateOnWorldAxis(e,t){return yo.setFromAxisAngle(e,t),this.quaternion.premultiply(yo),this}rotateX(e){return this.rotateOnAxis(Fx,e)}rotateY(e){return this.rotateOnAxis(kx,e)}rotateZ(e){return this.rotateOnAxis(Ox,e)}translateOnAxis(e,t){return Ux.copy(e).applyQuaternion(this.quaternion),this.position.add(Ux.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fx,e)}translateY(e){return this.translateOnAxis(kx,e)}translateZ(e){return this.translateOnAxis(Ox,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Pc.copy(e):Pc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(Fa,Pc,this.up):fr.lookAt(Pc,Fa,this.up),this.quaternion.setFromRotationMatrix(fr),o&&(fr.extractRotation(o.matrixWorld),yo.setFromRotationMatrix(fr),this.quaternion.premultiply(yo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bx),So.child=e,this.dispatchEvent(So),So.child=null):Pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pR),Yd.child=e,this.dispatchEvent(Yd),Yd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fr.multiply(e.parent.matrixWorld)),e.applyMatrix4(fr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bx),So.child=e,this.dispatchEvent(So),So.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,dR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,hR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),g=c(e.skeletons),_=c(e.animations),M=c(e.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),_.length>0&&(r.animations=_),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}ii.DEFAULT_UP=new ce(0,1,0);ii.DEFAULT_MATRIX_AUTO_UPDATE=!0;ii.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Dc extends ii{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mR={type:"move"};class qd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const y=t.getJointPose(T,r),S=this._getHandJoint(h,T);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),_=.02,M=.005;h.inputState.pinching&&g>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(mR)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Dc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const PS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function $d(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ot{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Ct.workingColorSpace){if(e=nR(e,1),t=Mt(t,0,1),r=Mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=$d(c,a,e+1/3),this.g=$d(c,a,e),this.b=$d(c,a,e-1/3)}return Ct.colorSpaceToWorking(this,o),this}setStyle(e,t=pi){function r(a){a!==void 0&&parseFloat(a)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const r=PS[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yr(e.r),this.g=yr(e.g),this.b=yr(e.b),this}copyLinearToSRGB(e){return this.r=ko(e.r),this.g=ko(e.g),this.b=ko(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Ct.workingToColorSpace(Rn.copy(this),e),Math.round(Mt(Rn.r*255,0,255))*65536+Math.round(Mt(Rn.g*255,0,255))*256+Math.round(Mt(Rn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Rn.copy(this),t);const r=Rn.r,o=Rn.g,a=Rn.b,c=Math.max(r,o,a),u=Math.min(r,o,a);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const v=c-u;switch(h=p<=.5?v/(c+u):v/(2-c-u),c){case r:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-r)/v+2;break;case a:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=pi){Ct.workingToColorSpace(Rn.copy(this),e);const t=Rn.r,r=Rn.g,o=Rn.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL($r),this.setHSL($r.h+e,$r.s+t,$r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL($r),e.getHSL(Lc);const r=Hd($r.h,Lc.h,t),o=Hd($r.s,Lc.s,t),a=Hd($r.l,Lc.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Ot;Ot.NAMES=PS;class gR extends ii{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tr,this.environmentIntensity=1,this.environmentRotation=new Tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ai=new ce,dr=new ce,Kd=new ce,hr=new ce,Mo=new ce,Eo=new ce,zx=new ce,Zd=new ce,Qd=new ce,Jd=new ce,eh=new rn,th=new rn,nh=new rn;class Di{constructor(e=new ce,t=new ce,r=new ce){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Ai.subVectors(e,t),o.cross(Ai);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Ai.subVectors(o,t),dr.subVectors(r,t),Kd.subVectors(e,t);const c=Ai.dot(Ai),u=Ai.dot(dr),d=Ai.dot(Kd),h=dr.dot(dr),p=dr.dot(Kd),v=c*h-u*u;if(v===0)return a.set(0,0,0),null;const g=1/v,_=(h*d-u*p)*g,M=(c*p-u*d)*g;return a.set(1-_-M,M,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,hr)===null?!1:hr.x>=0&&hr.y>=0&&hr.x+hr.y<=1}static getInterpolation(e,t,r,o,a,c,u,d){return this.getBarycoord(e,t,r,o,hr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,hr.x),d.addScaledVector(c,hr.y),d.addScaledVector(u,hr.z),d)}static getInterpolatedAttribute(e,t,r,o,a,c){return eh.setScalar(0),th.setScalar(0),nh.setScalar(0),eh.fromBufferAttribute(e,t),th.fromBufferAttribute(e,r),nh.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(eh,a.x),c.addScaledVector(th,a.y),c.addScaledVector(nh,a.z),c}static isFrontFacing(e,t,r,o){return Ai.subVectors(r,t),dr.subVectors(e,t),Ai.cross(dr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),dr.subVectors(this.a,this.b),Ai.cross(dr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Di.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,u;Mo.subVectors(o,r),Eo.subVectors(a,r),Zd.subVectors(e,r);const d=Mo.dot(Zd),h=Eo.dot(Zd);if(d<=0&&h<=0)return t.copy(r);Qd.subVectors(e,o);const p=Mo.dot(Qd),v=Eo.dot(Qd);if(p>=0&&v<=p)return t.copy(o);const g=d*v-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(r).addScaledVector(Mo,c);Jd.subVectors(e,a);const _=Mo.dot(Jd),M=Eo.dot(Jd);if(M>=0&&_<=M)return t.copy(a);const T=_*h-d*M;if(T<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(r).addScaledVector(Eo,u);const y=p*M-_*v;if(y<=0&&v-p>=0&&_-M>=0)return zx.subVectors(a,o),u=(v-p)/(v-p+(_-M)),t.copy(o).addScaledVector(zx,u);const S=1/(y+T+g);return c=T*S,u=g*S,t.copy(r).addScaledVector(Mo,c).addScaledVector(Eo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class fl{constructor(e=new ce(1/0,1/0,1/0),t=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Ci):Ci.fromBufferAttribute(a,c),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ic.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ic.copy(r.boundingBox)),Ic.applyMatrix4(e.matrixWorld),this.union(Ic)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ka),Nc.subVectors(this.max,ka),wo.subVectors(e.a,ka),To.subVectors(e.b,ka),bo.subVectors(e.c,ka),Kr.subVectors(To,wo),Zr.subVectors(bo,To),Ts.subVectors(wo,bo);let t=[0,-Kr.z,Kr.y,0,-Zr.z,Zr.y,0,-Ts.z,Ts.y,Kr.z,0,-Kr.x,Zr.z,0,-Zr.x,Ts.z,0,-Ts.x,-Kr.y,Kr.x,0,-Zr.y,Zr.x,0,-Ts.y,Ts.x,0];return!ih(t,wo,To,bo,Nc)||(t=[1,0,0,0,1,0,0,0,1],!ih(t,wo,To,bo,Nc))?!1:(Uc.crossVectors(Kr,Zr),t=[Uc.x,Uc.y,Uc.z],ih(t,wo,To,bo,Nc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pr=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],Ci=new ce,Ic=new fl,wo=new ce,To=new ce,bo=new ce,Kr=new ce,Zr=new ce,Ts=new ce,ka=new ce,Nc=new ce,Uc=new ce,bs=new ce;function ih(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){bs.fromArray(n,a);const u=o.x*Math.abs(bs.x)+o.y*Math.abs(bs.y)+o.z*Math.abs(bs.z),d=e.dot(bs),h=t.dot(bs),p=r.dot(bs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const on=new ce,Fc=new kt;let vR=0;class Zi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:vR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=bx,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Fc.fromBufferAttribute(this,t),Fc.applyMatrix3(e),this.setXY(t,Fc.x,Fc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ua(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Yn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),r=Yn(r,this.array),o=Yn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),r=Yn(r,this.array),o=Yn(o,this.array),a=Yn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==bx&&(e.usage=this.usage),e}}class DS extends Zi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class LS extends Zi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Sr extends Zi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const xR=new fl,Oa=new ce,rh=new ce;class wm{constructor(e=new ce,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):xR.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Oa,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(rh)),this.expandByPoint(Oa.copy(e.center).sub(rh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _R=0;const hi=new ln,sh=new ii,Ao=new ce,ti=new fl,Ba=new fl,_n=new ce;class br extends Yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_R++}),this.uuid=ul(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(QC(e)?LS:DS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new mt().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,r){return hi.makeTranslation(e,t,r),this.applyMatrix4(hi),this}scale(e,t,r){return hi.makeScale(e,t,r),this.applyMatrix4(hi),this}lookAt(e){return sh.lookAt(e),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Sr(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ti.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wm);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];Ba.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(ti.min,Ba.min),ti.expandByPoint(_n),_n.addVectors(ti.max,Ba.max),ti.expandByPoint(_n)):(ti.expandByPoint(Ba.min),ti.expandByPoint(Ba.max))}ti.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)_n.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(_n));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)_n.fromBufferAttribute(u,h),d&&(Ao.fromBufferAttribute(e,h),_n.add(Ao)),o=Math.max(o,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let E=0;E<r.count;E++)u[E]=new ce,d[E]=new ce;const h=new ce,p=new ce,v=new ce,g=new kt,_=new kt,M=new kt,T=new ce,y=new ce;function S(E,D,Y){h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,D),v.fromBufferAttribute(r,Y),g.fromBufferAttribute(a,E),_.fromBufferAttribute(a,D),M.fromBufferAttribute(a,Y),p.sub(h),v.sub(h),_.sub(g),M.sub(g);const k=1/(_.x*M.y-M.x*_.y);isFinite(k)&&(T.copy(p).multiplyScalar(M.y).addScaledVector(v,-_.y).multiplyScalar(k),y.copy(v).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(k),u[E].add(T),u[D].add(T),u[Y].add(T),d[E].add(y),d[D].add(y),d[Y].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let E=0,D=C.length;E<D;++E){const Y=C[E],k=Y.start,$=Y.count;for(let J=k,oe=k+$;J<oe;J+=3)S(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const P=new ce,R=new ce,I=new ce,N=new ce;function O(E){I.fromBufferAttribute(o,E),N.copy(I);const D=u[E];P.copy(D),P.sub(I.multiplyScalar(I.dot(D))).normalize(),R.crossVectors(N,D);const k=R.dot(d[E])<0?-1:1;c.setXYZW(E,P.x,P.y,P.z,k)}for(let E=0,D=C.length;E<D;++E){const Y=C[E],k=Y.start,$=Y.count;for(let J=k,oe=k+$;J<oe;J+=3)O(e.getX(J+0)),O(e.getX(J+1)),O(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Zi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,_=r.count;g<_;g++)r.setXYZ(g,0,0,0);const o=new ce,a=new ce,c=new ce,u=new ce,d=new ce,h=new ce,p=new ce,v=new ce;if(e)for(let g=0,_=e.count;g<_;g+=3){const M=e.getX(g+0),T=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,T),c.fromBufferAttribute(t,y),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,y),u.add(p),d.add(p),h.add(p),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(y,h.x,h.y,h.z)}else for(let g=0,_=t.count;g<_;g+=3)o.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,v=u.normalized,g=new h.constructor(d.length*p);let _=0,M=0;for(let T=0,y=d.length;T<y;T++){u.isInterleavedBufferAttribute?_=d[T]*u.data.stride+u.offset:_=d[T]*p;for(let S=0;S<p;S++)g[M++]=h[_++]}return new Zi(g,p,v)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new br,r=this.index.array,o=this.attributes;for(const u in o){const d=o[u],h=e(d,r);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let p=0,v=h.length;p<v;p++){const g=h[p],_=e(g,r);d.push(_)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,g=h.length;v<g;v++){const _=h[v];p.push(_.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let g=0,_=v.length;g<_;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let yR=0;class Nu extends Yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yR++}),this.uuid=ul(),this.name="",this.type="Material",this.blending=Fo,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wh,this.blendDst=jh,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=Bo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(r.blending=this.blending),this.side!==as&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Wh&&(r.blendSrc=this.blendSrc),this.blendDst!==jh&&(r.blendDst=this.blendDst),this.blendEquation!==Ns&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Bo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(r.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mr=new ce,oh=new ce,kc=new ce,Qr=new ce,ah=new ce,Oc=new ce,lh=new ce;class SR{constructor(e=new ce,t=new ce(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mr.copy(this.origin).addScaledVector(this.direction,t),mr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){oh.copy(e).add(t).multiplyScalar(.5),kc.copy(t).sub(e).normalize(),Qr.copy(this.origin).sub(oh);const a=e.distanceTo(t)*.5,c=-this.direction.dot(kc),u=Qr.dot(this.direction),d=-Qr.dot(kc),h=Qr.lengthSq(),p=Math.abs(1-c*c);let v,g,_,M;if(p>0)if(v=c*d-u,g=c*u-d,M=a*p,v>=0)if(g>=-M)if(g<=M){const T=1/p;v*=T,g*=T,_=v*(v+c*g+2*u)+g*(c*v+g+2*d)+h}else g=a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*d)+h;else g=-a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*d)+h;else g<=-M?(v=Math.max(0,-(-c*a+u)),g=v>0?-a:Math.min(Math.max(-a,-d),a),_=-v*v+g*(g+2*d)+h):g<=M?(v=0,g=Math.min(Math.max(-a,-d),a),_=g*(g+2*d)+h):(v=Math.max(0,-(c*a+u)),g=v>0?a:Math.min(Math.max(-a,-d),a),_=-v*v+g*(g+2*d)+h);else g=c>0?-a:a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(oh).addScaledVector(kc,g),_}intersectSphere(e,t){mr.subVectors(e.center,this.origin);const r=mr.dot(this.direction),o=mr.dot(mr)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=r-c,d=r+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),v>=0?(u=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(u=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),r>d||u>o)||((u>r||r!==r)&&(r=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,mr)!==null}intersectTriangle(e,t,r,o,a){ah.subVectors(t,e),Oc.subVectors(r,e),lh.crossVectors(ah,Oc);let c=this.direction.dot(lh),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Qr.subVectors(this.origin,e);const d=u*this.direction.dot(Oc.crossVectors(Qr,Oc));if(d<0)return null;const h=u*this.direction.dot(ah.cross(Qr));if(h<0||d+h>c)return null;const p=-u*Qr.dot(lh);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class IS extends Nu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=fS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vx=new ln,As=new SR,Bc=new wm,Hx=new ce,zc=new ce,Vc=new ce,Hc=new ce,ch=new ce,Gc=new ce,Gx=new ce,Wc=new ce;class er extends ii{constructor(e=new br,t=new IS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Gc.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=u[d],v=a[d];p!==0&&(ch.fromBufferAttribute(v,e),c?Gc.addScaledVector(ch,p):Gc.addScaledVector(ch.sub(t),p))}t.add(Gc)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Bc.copy(r.boundingSphere),Bc.applyMatrix4(a),As.copy(e.ray).recast(e.near),!(Bc.containsPoint(As.origin)===!1&&(As.intersectSphere(Bc,Hx)===null||As.origin.distanceToSquared(Hx)>(e.far-e.near)**2))&&(Vx.copy(a).invert(),As.copy(e.ray).applyMatrix4(Vx),!(r.boundingBox!==null&&As.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,As)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,g=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,T=g.length;M<T;M++){const y=g[M],S=c[y.materialIndex],C=Math.max(y.start,_.start),P=Math.min(u.count,Math.min(y.start+y.count,_.start+_.count));for(let R=C,I=P;R<I;R+=3){const N=u.getX(R),O=u.getX(R+1),E=u.getX(R+2);o=jc(this,S,e,r,h,p,v,N,O,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),T=Math.min(u.count,_.start+_.count);for(let y=M,S=T;y<S;y+=3){const C=u.getX(y),P=u.getX(y+1),R=u.getX(y+2);o=jc(this,c,e,r,h,p,v,C,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,T=g.length;M<T;M++){const y=g[M],S=c[y.materialIndex],C=Math.max(y.start,_.start),P=Math.min(d.count,Math.min(y.start+y.count,_.start+_.count));for(let R=C,I=P;R<I;R+=3){const N=R,O=R+1,E=R+2;o=jc(this,S,e,r,h,p,v,N,O,E),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),T=Math.min(d.count,_.start+_.count);for(let y=M,S=T;y<S;y+=3){const C=y,P=y+1,R=y+2;o=jc(this,c,e,r,h,p,v,C,P,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function MR(n,e,t,r,o,a,c,u){let d;if(e.side===qn?d=r.intersectTriangle(c,a,o,!0,u):d=r.intersectTriangle(o,a,c,e.side===as,u),d===null)return null;Wc.copy(u),Wc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(Wc);return h<t.near||h>t.far?null:{distance:h,point:Wc.clone(),object:n}}function jc(n,e,t,r,o,a,c,u,d,h){n.getVertexPosition(u,zc),n.getVertexPosition(d,Vc),n.getVertexPosition(h,Hc);const p=MR(n,e,t,r,zc,Vc,Hc,Gx);if(p){const v=new ce;Di.getBarycoord(Gx,zc,Vc,Hc,v),o&&(p.uv=Di.getInterpolatedAttribute(o,u,d,h,v,new kt)),a&&(p.uv1=Di.getInterpolatedAttribute(a,u,d,h,v,new kt)),c&&(p.normal=Di.getInterpolatedAttribute(c,u,d,h,v,new ce),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:d,c:h,normal:new ce,materialIndex:0};Di.getNormal(zc,Vc,Hc,g.normal),p.face=g,p.barycoord=v}return p}class ER extends On{constructor(e=null,t=1,r=1,o,a,c,u,d,h=En,p=En,v,g){super(null,c,u,d,h,p,o,a,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const uh=new ce,wR=new ce,TR=new mt;class Is{constructor(e=new ce(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=uh.subVectors(r,t).cross(wR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(uh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||TR.getNormalMatrix(e),o=this.coplanarPoint(uh).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cs=new wm,bR=new kt(.5,.5),Xc=new ce;class NS{constructor(e=new Is,t=new Is,r=new Is,o=new Is,a=new Is,c=new Is){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Yi,r=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],p=a[4],v=a[5],g=a[6],_=a[7],M=a[8],T=a[9],y=a[10],S=a[11],C=a[12],P=a[13],R=a[14],I=a[15];if(o[0].setComponents(h-c,_-p,S-M,I-C).normalize(),o[1].setComponents(h+c,_+p,S+M,I+C).normalize(),o[2].setComponents(h+u,_+v,S+T,I+P).normalize(),o[3].setComponents(h-u,_-v,S-T,I-P).normalize(),r)o[4].setComponents(d,g,y,R).normalize(),o[5].setComponents(h-d,_-g,S-y,I-R).normalize();else if(o[4].setComponents(h-d,_-g,S-y,I-R).normalize(),t===Yi)o[5].setComponents(h+d,_+g,S+y,I+R).normalize();else if(t===wu)o[5].setComponents(d,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cs)}intersectsSprite(e){Cs.center.set(0,0,0);const t=bR.distanceTo(e.center);return Cs.radius=.7071067811865476+t,Cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Xc.x=o.normal.x>0?e.max.x:e.min.x,Xc.y=o.normal.y>0?e.max.y:e.min.y,Xc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Xc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class US extends On{constructor(e=[],t=js,r,o,a,c,u,d,h,p){super(e,t,r,o,a,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rl extends On{constructor(e,t,r=Ji,o,a,c,u=En,d=En,h,p=wr,v=1){if(p!==wr&&p!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,a,c,u,d,p,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Em(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class AR extends rl{constructor(e,t=Ji,r=js,o,a,c=En,u=En,d,h=wr){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,r,o,a,c,u,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class FS extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class dl extends br{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],p=[],v=[];let g=0,_=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new Sr(h,3)),this.setAttribute("normal",new Sr(p,3)),this.setAttribute("uv",new Sr(v,2));function M(T,y,S,C,P,R,I,N,O,E,D){const Y=R/O,k=I/E,$=R/2,J=I/2,oe=N/2,K=O+1,Z=E+1;let W=0,B=0;const te=new ce;for(let le=0;le<Z;le++){const F=le*k-J;for(let q=0;q<K;q++){const ye=q*Y-$;te[T]=ye*C,te[y]=F*P,te[S]=oe,h.push(te.x,te.y,te.z),te[T]=0,te[y]=0,te[S]=N>0?1:-1,p.push(te.x,te.y,te.z),v.push(q/O),v.push(1-le/E),W+=1}}for(let le=0;le<E;le++)for(let F=0;F<O;F++){const q=g+F+K*le,ye=g+F+K*(le+1),Pe=g+(F+1)+K*(le+1),qe=g+(F+1)+K*le;d.push(q,ye,qe),d.push(ye,Pe,qe),B+=6}u.addGroup(_,B,D),_+=B,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class hl extends br{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(r),d=Math.floor(o),h=u+1,p=d+1,v=e/u,g=t/d,_=[],M=[],T=[],y=[];for(let S=0;S<p;S++){const C=S*g-c;for(let P=0;P<h;P++){const R=P*v-a;M.push(R,-C,0),T.push(0,0,1),y.push(P/u),y.push(1-S/d)}}for(let S=0;S<d;S++)for(let C=0;C<u;C++){const P=C+h*S,R=C+h*(S+1),I=C+1+h*(S+1),N=C+1+h*S;_.push(P,R,N),_.push(R,I,N)}this.setIndex(_),this.setAttribute("position",new Sr(M,3)),this.setAttribute("normal",new Sr(T,3)),this.setAttribute("uv",new Sr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Go(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Un(n){const e={};for(let t=0;t<n.length;t++){const r=Go(n[t]);for(const o in r)e[o]=r[o]}return e}function CR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function kS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const RR={clone:Go,merge:Un};var PR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,DR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends Nu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=PR,this.fragmentShader=DR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Go(e.uniforms),this.uniformsGroups=CR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class LR extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class IR extends Nu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class NR extends Nu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Yc=new ce,qc=new qo,Vi=new ce;class Tm extends ii{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ln,this.projectionMatrix=new ln,this.projectionMatrixInverse=new ln,this.coordinateSystem=Yi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Yc,qc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,qc,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Yc,qc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yc,qc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Jr=new ce,Wx=new kt,jx=new kt;class Pi extends Tm{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ip*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ip*2*Math.atan(Math.tan(Vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,Wx,jx),t.subVectors(jx,Wx)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Vd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class OS extends Tm{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Co=-90,Ro=1;class UR extends ii{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Pi(Co,Ro,e,t);o.layers=this.layers,this.add(o);const a=new Pi(Co,Ro,e,t);a.layers=this.layers,this.add(a);const c=new Pi(Co,Ro,e,t);c.layers=this.layers,this.add(c);const u=new Pi(Co,Ro,e,t);u.layers=this.layers,this.add(u);const d=new Pi(Co,Ro,e,t);d.layers=this.layers,this.add(d);const h=new Pi(Co,Ro,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===wu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,g,_),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class FR extends Pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Xx(n,e,t,r){const o=kR(r);switch(t){case wS:return n*e;case bS:return n*e/o.components*o.byteLength;case xm:return n*e/o.components*o.byteLength;case Vo:return n*e*2/o.components*o.byteLength;case _m:return n*e*2/o.components*o.byteLength;case TS:return n*e*3/o.components*o.byteLength;case Li:return n*e*4/o.components*o.byteLength;case ym:return n*e*4/o.components*o.byteLength;case cu:case uu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case fu:case du:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case np:case rp:return Math.max(n,16)*Math.max(e,8)/4;case tp:case ip:return Math.max(n,8)*Math.max(e,8)/2;case sp:case op:case lp:case cp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case ap:case up:case fp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case dp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case hp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case pp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case mp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case gp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case vp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case xp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case _p:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case yp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ep:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case wp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Tp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case bp:case Ap:case Cp:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Rp:case Pp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Dp:case Lp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kR(n){switch(n){case mi:case yS:return{byteLength:1,components:1};case nl:case SS:case Er:return{byteLength:2,components:1};case gm:case vm:return{byteLength:2,components:4};case Ji:case mm:case Xi:return{byteLength:4,components:1};case MS:case ES:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pm}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pm);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function BS(){let n=null,e=!1,t=null,r=null;function o(a,c){t(a,c),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function OR(n){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,p),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:v}}function r(u,d,h){const p=d.array,v=d.updateRanges;if(n.bindBuffer(h,u),v.length===0)n.bufferSubData(h,0,p);else{v.sort((_,M)=>_.start-M.start);let g=0;for(let _=1;_<v.length;_++){const M=v[g],T=v[_];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++g,v[g]=T)}v.length=g+1;for(let _=0,M=v.length;_<M;_++){const T=v[_];n.bufferSubData(h,T.start*p.BYTES_PER_ELEMENT,p,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,d),h.version=u.version}}return{get:o,remove:a,update:c}}var BR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,VR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,HR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,WR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,XR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,YR=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$R=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,KR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ZR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,QR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eP=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nP=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iP=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,oP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,aP=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lP=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cP=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uP=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,fP=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,dP=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hP=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pP=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mP="gl_FragColor = linearToOutputTexel( gl_FragColor );",gP=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,xP=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_P=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yP=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SP=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,EP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bP=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,RP=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PP=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,DP=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,LP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IP=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,UP=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FP=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kP=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,OP=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zP=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,qP=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$P=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,e2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,t2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,n2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,i2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,r2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,s2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,o2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,a2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,l2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,c2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,u2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,f2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,d2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,p2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,m2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,g2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,x2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,S2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,M2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,E2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,w2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,T2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,b2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,C2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,R2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,P2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,D2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,L2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,I2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,F2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const O2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,B2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,V2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,G2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,j2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,X2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Y2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,q2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$2=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K2=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Z2=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Q2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,J2=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t3=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,i3=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,s3=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,o3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,a3=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,c3=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f3=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d3=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,p3=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,m3=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,g3=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,v3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:BR,alphahash_pars_fragment:zR,alphamap_fragment:VR,alphamap_pars_fragment:HR,alphatest_fragment:GR,alphatest_pars_fragment:WR,aomap_fragment:jR,aomap_pars_fragment:XR,batching_pars_vertex:YR,batching_vertex:qR,begin_vertex:$R,beginnormal_vertex:KR,bsdfs:ZR,iridescence_fragment:QR,bumpmap_pars_fragment:JR,clipping_planes_fragment:eP,clipping_planes_pars_fragment:tP,clipping_planes_pars_vertex:nP,clipping_planes_vertex:iP,color_fragment:rP,color_pars_fragment:sP,color_pars_vertex:oP,color_vertex:aP,common:lP,cube_uv_reflection_fragment:cP,defaultnormal_vertex:uP,displacementmap_pars_vertex:fP,displacementmap_vertex:dP,emissivemap_fragment:hP,emissivemap_pars_fragment:pP,colorspace_fragment:mP,colorspace_pars_fragment:gP,envmap_fragment:vP,envmap_common_pars_fragment:xP,envmap_pars_fragment:_P,envmap_pars_vertex:yP,envmap_physical_pars_fragment:DP,envmap_vertex:SP,fog_vertex:MP,fog_pars_vertex:EP,fog_fragment:wP,fog_pars_fragment:TP,gradientmap_pars_fragment:bP,lightmap_pars_fragment:AP,lights_lambert_fragment:CP,lights_lambert_pars_fragment:RP,lights_pars_begin:PP,lights_toon_fragment:LP,lights_toon_pars_fragment:IP,lights_phong_fragment:NP,lights_phong_pars_fragment:UP,lights_physical_fragment:FP,lights_physical_pars_fragment:kP,lights_fragment_begin:OP,lights_fragment_maps:BP,lights_fragment_end:zP,logdepthbuf_fragment:VP,logdepthbuf_pars_fragment:HP,logdepthbuf_pars_vertex:GP,logdepthbuf_vertex:WP,map_fragment:jP,map_pars_fragment:XP,map_particle_fragment:YP,map_particle_pars_fragment:qP,metalnessmap_fragment:$P,metalnessmap_pars_fragment:KP,morphinstance_vertex:ZP,morphcolor_vertex:QP,morphnormal_vertex:JP,morphtarget_pars_vertex:e2,morphtarget_vertex:t2,normal_fragment_begin:n2,normal_fragment_maps:i2,normal_pars_fragment:r2,normal_pars_vertex:s2,normal_vertex:o2,normalmap_pars_fragment:a2,clearcoat_normal_fragment_begin:l2,clearcoat_normal_fragment_maps:c2,clearcoat_pars_fragment:u2,iridescence_pars_fragment:f2,opaque_fragment:d2,packing:h2,premultiplied_alpha_fragment:p2,project_vertex:m2,dithering_fragment:g2,dithering_pars_fragment:v2,roughnessmap_fragment:x2,roughnessmap_pars_fragment:_2,shadowmap_pars_fragment:y2,shadowmap_pars_vertex:S2,shadowmap_vertex:M2,shadowmask_pars_fragment:E2,skinbase_vertex:w2,skinning_pars_vertex:T2,skinning_vertex:b2,skinnormal_vertex:A2,specularmap_fragment:C2,specularmap_pars_fragment:R2,tonemapping_fragment:P2,tonemapping_pars_fragment:D2,transmission_fragment:L2,transmission_pars_fragment:I2,uv_pars_fragment:N2,uv_pars_vertex:U2,uv_vertex:F2,worldpos_vertex:k2,background_vert:O2,background_frag:B2,backgroundCube_vert:z2,backgroundCube_frag:V2,cube_vert:H2,cube_frag:G2,depth_vert:W2,depth_frag:j2,distance_vert:X2,distance_frag:Y2,equirect_vert:q2,equirect_frag:$2,linedashed_vert:K2,linedashed_frag:Z2,meshbasic_vert:Q2,meshbasic_frag:J2,meshlambert_vert:e3,meshlambert_frag:t3,meshmatcap_vert:n3,meshmatcap_frag:i3,meshnormal_vert:r3,meshnormal_frag:s3,meshphong_vert:o3,meshphong_frag:a3,meshphysical_vert:l3,meshphysical_frag:c3,meshtoon_vert:u3,meshtoon_frag:f3,points_vert:d3,points_frag:h3,shadow_vert:p3,shadow_frag:m3,sprite_vert:g3,sprite_frag:v3},Le={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ji={basic:{uniforms:Un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:Un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:Un([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:Un([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:Un([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Ot(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:Un([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:Un([Le.points,Le.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:Un([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:Un([Le.common,Le.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:Un([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:Un([Le.sprite,Le.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distance:{uniforms:Un([Le.common,Le.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distance_vert,fragmentShader:gt.distance_frag},shadow:{uniforms:Un([Le.lights,Le.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};ji.physical={uniforms:Un([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const $c={r:0,b:0,g:0},Rs=new Tr,x3=new ln;function _3(n,e,t,r,o,a){const c=new Ot(0);let u=o===!0?0:1,d,h,p=null,v=0,g=null;function _(C){let P=C.isScene===!0?C.background:null;if(P&&P.isTexture){const R=C.backgroundBlurriness>0;P=e.get(P,R)}return P}function M(C){let P=!1;const R=_(C);R===null?y(c,u):R&&R.isColor&&(y(R,1),P=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||P)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(C,P){const R=_(P);R&&(R.isCubeTexture||R.mapping===Iu)?(h===void 0&&(h=new er(new dl(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Go(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,N,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Rs.copy(P.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),h.material.uniforms.envMap.value=R,h.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(x3.makeRotationFromEuler(Rs)),h.material.toneMapped=Ct.getTransfer(R.colorSpace)!==Ut,(p!==R||v!==R.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,p=R,v=R.version,g=n.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new er(new hl(2,2),new Ni({name:"BackgroundMaterial",uniforms:Go(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,d.material.toneMapped=Ct.getTransfer(R.colorSpace)!==Ut,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||v!==R.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,p=R,v=R.version,g=n.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null))}function y(C,P){C.getRGB($c,kS(n)),t.buffers.color.setClear($c.r,$c.g,$c.b,P,a)}function S(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,P=1){c.set(C),u=P,y(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(C){u=C,y(c,u)},render:M,addToRenderList:T,dispose:S}}function y3(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let a=o,c=!1;function u(k,$,J,oe,K){let Z=!1;const W=v(k,oe,J,$);a!==W&&(a=W,h(a.object)),Z=_(k,oe,J,K),Z&&M(k,oe,J,K),K!==null&&e.update(K,n.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,R(k,$,J,oe),K!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function d(){return n.createVertexArray()}function h(k){return n.bindVertexArray(k)}function p(k){return n.deleteVertexArray(k)}function v(k,$,J,oe){const K=oe.wireframe===!0;let Z=r[$.id];Z===void 0&&(Z={},r[$.id]=Z);const W=k.isInstancedMesh===!0?k.id:0;let B=Z[W];B===void 0&&(B={},Z[W]=B);let te=B[J.id];te===void 0&&(te={},B[J.id]=te);let le=te[K];return le===void 0&&(le=g(d()),te[K]=le),le}function g(k){const $=[],J=[],oe=[];for(let K=0;K<t;K++)$[K]=0,J[K]=0,oe[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:J,attributeDivisors:oe,object:k,attributes:{},index:null}}function _(k,$,J,oe){const K=a.attributes,Z=$.attributes;let W=0;const B=J.getAttributes();for(const te in B)if(B[te].location>=0){const F=K[te];let q=Z[te];if(q===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(q=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(q=k.instanceColor)),F===void 0||F.attribute!==q||q&&F.data!==q.data)return!0;W++}return a.attributesNum!==W||a.index!==oe}function M(k,$,J,oe){const K={},Z=$.attributes;let W=0;const B=J.getAttributes();for(const te in B)if(B[te].location>=0){let F=Z[te];F===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(F=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(F=k.instanceColor));const q={};q.attribute=F,F&&F.data&&(q.data=F.data),K[te]=q,W++}a.attributes=K,a.attributesNum=W,a.index=oe}function T(){const k=a.newAttributes;for(let $=0,J=k.length;$<J;$++)k[$]=0}function y(k){S(k,0)}function S(k,$){const J=a.newAttributes,oe=a.enabledAttributes,K=a.attributeDivisors;J[k]=1,oe[k]===0&&(n.enableVertexAttribArray(k),oe[k]=1),K[k]!==$&&(n.vertexAttribDivisor(k,$),K[k]=$)}function C(){const k=a.newAttributes,$=a.enabledAttributes;for(let J=0,oe=$.length;J<oe;J++)$[J]!==k[J]&&(n.disableVertexAttribArray(J),$[J]=0)}function P(k,$,J,oe,K,Z,W){W===!0?n.vertexAttribIPointer(k,$,J,K,Z):n.vertexAttribPointer(k,$,J,oe,K,Z)}function R(k,$,J,oe){T();const K=oe.attributes,Z=J.getAttributes(),W=$.defaultAttributeValues;for(const B in Z){const te=Z[B];if(te.location>=0){let le=K[B];if(le===void 0&&(B==="instanceMatrix"&&k.instanceMatrix&&(le=k.instanceMatrix),B==="instanceColor"&&k.instanceColor&&(le=k.instanceColor)),le!==void 0){const F=le.normalized,q=le.itemSize,ye=e.get(le);if(ye===void 0)continue;const Pe=ye.buffer,qe=ye.type,se=ye.bytesPerElement,he=qe===n.INT||qe===n.UNSIGNED_INT||le.gpuType===mm;if(le.isInterleavedBufferAttribute){const me=le.data,Ue=me.stride,Be=le.offset;if(me.isInstancedInterleavedBuffer){for(let it=0;it<te.locationSize;it++)S(te.location+it,me.meshPerAttribute);k.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let it=0;it<te.locationSize;it++)y(te.location+it);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let it=0;it<te.locationSize;it++)P(te.location+it,q/te.locationSize,qe,F,Ue*se,(Be+q/te.locationSize*it)*se,he)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<te.locationSize;me++)S(te.location+me,le.meshPerAttribute);k.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<te.locationSize;me++)y(te.location+me);n.bindBuffer(n.ARRAY_BUFFER,Pe);for(let me=0;me<te.locationSize;me++)P(te.location+me,q/te.locationSize,qe,F,q*se,q/te.locationSize*me*se,he)}}else if(W!==void 0){const F=W[B];if(F!==void 0)switch(F.length){case 2:n.vertexAttrib2fv(te.location,F);break;case 3:n.vertexAttrib3fv(te.location,F);break;case 4:n.vertexAttrib4fv(te.location,F);break;default:n.vertexAttrib1fv(te.location,F)}}}}C()}function I(){D();for(const k in r){const $=r[k];for(const J in $){const oe=$[J];for(const K in oe){const Z=oe[K];for(const W in Z)p(Z[W].object),delete Z[W];delete oe[K]}}delete r[k]}}function N(k){if(r[k.id]===void 0)return;const $=r[k.id];for(const J in $){const oe=$[J];for(const K in oe){const Z=oe[K];for(const W in Z)p(Z[W].object),delete Z[W];delete oe[K]}}delete r[k.id]}function O(k){for(const $ in r){const J=r[$];for(const oe in J){const K=J[oe];if(K[k.id]===void 0)continue;const Z=K[k.id];for(const W in Z)p(Z[W].object),delete Z[W];delete K[k.id]}}}function E(k){for(const $ in r){const J=r[$],oe=k.isInstancedMesh===!0?k.id:0,K=J[oe];if(K!==void 0){for(const Z in K){const W=K[Z];for(const B in W)p(W[B].object),delete W[B];delete K[Z]}delete J[oe],Object.keys(J).length===0&&delete r[$]}}}function D(){Y(),c=!0,a!==o&&(a=o,h(a.object))}function Y(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:D,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:N,releaseStatesOfObject:E,releaseStatesOfProgram:O,initAttributes:T,enableAttribute:y,disableUnusedAttributes:C}}function S3(n,e,t){let r;function o(h){r=h}function a(h,p){n.drawArrays(r,h,p),t.update(p,r,1)}function c(h,p,v){v!==0&&(n.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let _=0;for(let M=0;M<v;M++)_+=p[M];t.update(_,r,1)}function d(h,p,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<h.length;M++)c(h[M],p[M],g[M]);else{_.multiDrawArraysInstancedWEBGL(r,h,0,p,0,g,0,v);let M=0;for(let T=0;T<v;T++)M+=p[T]*g[T];t.update(M,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function M3(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==Li&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const E=O===Er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==mi&&r.convert(O)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Xi&&!E)}function d(O){if(O==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(ft("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),y=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),S=n.getParameter(n.MAX_VERTEX_ATTRIBS),C=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),P=n.getParameter(n.MAX_VARYING_VECTORS),R=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),N=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:C,maxVaryings:P,maxFragmentUniforms:R,maxSamples:I,samples:N}}function E3(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new Is,u=new mt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const _=v.length!==0||g||r!==0||o;return o=g,r=v.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,_){const M=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,S=n.get(v);if(!o||M===null||M.length===0||a&&!y)a?p(null):h();else{const C=a?0:r,P=C*4;let R=S.clippingState||null;d.value=R,R=p(M,g,P,_);for(let I=0;I!==P;++I)R[I]=t[I];S.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(v,g,_,M){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=d.value,M!==!0||y===null){const S=_+T*4,C=g.matrixWorldInverse;u.getNormalMatrix(C),(y===null||y.length<S)&&(y=new Float32Array(S));for(let P=0,R=_;P!==T;++P,R+=4)c.copy(v[P]).applyMatrix4(C,u),c.normal.toArray(y,R),y[R+3]=c.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}const ss=4,Yx=[.125,.215,.35,.446,.526,.582],Us=20,w3=256,za=new OS,qx=new Ot;let fh=null,dh=0,hh=0,ph=!1;const T3=new ce;class $x{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:u=T3}=a;fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fh,dh,hh),this._renderer.xr.enabled=ph,e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===js||e.mapping===zo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fh=this._renderer.getRenderTarget(),dh=this._renderer.getActiveCubeFace(),hh=this._renderer.getActiveMipmapLevel(),ph=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Er,format:Li,colorSpace:Ho,depthBuffer:!1},o=Kx(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kx(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=b3(a)),this._blurMaterial=C3(a,e,t),this._ggxMaterial=A3(a,e,t)}return o}_compileMaterial(e){const t=new er(new br,e);this._renderer.compile(t,za)}_sceneToCubeUV(e,t,r,o,a){const d=new Pi(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,_=v.toneMapping;v.getClearColor(qx),v.toneMapping=$i,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new er(new dl,new IS({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,y=T.material;let S=!1;const C=e.background;C?C.isColor&&(y.color.copy(C),e.background=null,S=!0):(y.color.copy(qx),S=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(d.up.set(0,h[P],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[P],a.y,a.z)):R===1?(d.up.set(0,0,h[P]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[P],a.z)):(d.up.set(0,h[P],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[P]));const I=this._cubeSize;Po(o,R*I,P>2?I:0,I,I),v.setRenderTarget(o),S&&v.render(T,d),v.render(e,d)}v.toneMapping=_,v.autoClear=g,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===js||e.mapping===zo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zx());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;Po(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,za)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),g=0+h*1.25,_=v*g,{_lodMax:M}=this,T=this._sizeLods[r],y=3*T*(r>M-ss?r-M+ss:0),S=4*(this._cubeSize-T);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=M-t,Po(a,y,S,3*T,2*T),o.setRenderTarget(a),o.render(u,za),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-r,Po(e,y,S,3*T,2*T),o.setRenderTarget(e),o.render(u,za)}_blur(e,t,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Pt("blur direction must be either latitudinal or longitudinal!");const p=3,v=this._lodMeshes[o];v.material=h;const g=h.uniforms,_=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Us-1),T=a/M,y=isFinite(a)?1+Math.floor(p*T):Us;y>Us&&ft(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Us}`);const S=[];let C=0;for(let O=0;O<Us;++O){const E=O/T,D=Math.exp(-E*E/2);S.push(D),O===0?C+=D:O<y&&(C+=2*D)}for(let O=0;O<S.length;O++)S[O]=S[O]/C;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=S,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:P}=this;g.dTheta.value=M,g.mipInt.value=P-r;const R=this._sizeLods[o],I=3*R*(o>P-ss?o-P+ss:0),N=4*(this._cubeSize-R);Po(t,I,N,3*R,2*R),d.setRenderTarget(t),d.render(v,za)}}function b3(n){const e=[],t=[],r=[];let o=n;const a=n-ss+1+Yx.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);e.push(u);let d=1/u;c>n-ss?d=Yx[c-n+ss-1]:c===0&&(d=0),t.push(d);const h=1/(u-2),p=-h,v=1+h,g=[p,p,v,p,v,v,p,p,v,v,p,v],_=6,M=6,T=3,y=2,S=1,C=new Float32Array(T*M*_),P=new Float32Array(y*M*_),R=new Float32Array(S*M*_);for(let N=0;N<_;N++){const O=N%3*2/3-1,E=N>2?0:-1,D=[O,E,0,O+2/3,E,0,O+2/3,E+1,0,O,E,0,O+2/3,E+1,0,O,E+1,0];C.set(D,T*M*N),P.set(g,y*M*N);const Y=[N,N,N,N,N,N];R.set(Y,S*M*N)}const I=new br;I.setAttribute("position",new Zi(C,T)),I.setAttribute("uv",new Zi(P,y)),I.setAttribute("faceIndex",new Zi(R,S)),r.push(new er(I,null)),o>ss&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Kx(n,e,t){const r=new Ki(n,e,t);return r.texture.mapping=Iu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Po(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function A3(n,e,t){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:w3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function C3(n,e,t){const r=new Float32Array(Us),o=new ce(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Zx(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Qx(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:_r,depthTest:!1,depthWrite:!1})}function Uu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class zS extends Ki{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new US(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new dl(5,5,5),a=new Ni({name:"CubemapFromEquirect",uniforms:Go(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:qn,blending:_r});a.uniforms.tEquirect.value=t;const c=new er(o,a),u=t.minFilter;return t.minFilter===Bs&&(t.minFilter=Pn),new UR(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function R3(n){let e=new WeakMap,t=new WeakMap,r=null;function o(g,_=!1){return g==null?null:_?c(g):a(g)}function a(g){if(g&&g.isTexture){const _=g.mapping;if(_===Od||_===Bd)if(e.has(g)){const M=e.get(g).texture;return u(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const T=new zS(M.height);return T.fromEquirectangularTexture(n,g),e.set(g,T),g.addEventListener("dispose",h),u(T.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const _=g.mapping,M=_===Od||_===Bd,T=_===js||_===zo;if(M||T){let y=t.get(g);const S=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==S)return r===null&&(r=new $x(n)),y=M?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const C=g.image;return M&&C&&C.height>0||T&&C&&d(C)?(r===null&&(r=new $x(n)),y=M?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",p),y.texture):null}}}return g}function u(g,_){return _===Od?g.mapping=js:_===Bd&&(g.mapping=zo),g}function d(g){let _=0;const M=6;for(let T=0;T<M;T++)g[T]!==void 0&&_++;return _===M}function h(g){const _=g.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(g){const _=g.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function P3(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&bu("WebGLRenderer: "+r+" extension not supported."),o}}}function D3(n,e,t,r){const o={},a=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete o[g.id];const _=a.get(g);_&&(e.remove(_),a.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(v,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const _ in g)e.update(g[_],n.ARRAY_BUFFER)}function h(v){const g=[],_=v.index,M=v.attributes.position;let T=0;if(M===void 0)return;if(_!==null){const C=_.array;T=_.version;for(let P=0,R=C.length;P<R;P+=3){const I=C[P+0],N=C[P+1],O=C[P+2];g.push(I,N,N,O,O,I)}}else{const C=M.array;T=M.version;for(let P=0,R=C.length/3-1;P<R;P+=3){const I=P+0,N=P+1,O=P+2;g.push(I,N,N,O,O,I)}}const y=new(M.count>=65535?LS:DS)(g,1);y.version=T;const S=a.get(v);S&&e.remove(S),a.set(v,y)}function p(v){const g=a.get(v);if(g){const _=v.index;_!==null&&g.version<_.version&&h(v)}else h(v);return a.get(v)}return{get:u,update:d,getWireframeAttribute:p}}function L3(n,e,t){let r;function o(g){r=g}let a,c;function u(g){a=g.type,c=g.bytesPerElement}function d(g,_){n.drawElements(r,_,a,g*c),t.update(_,r,1)}function h(g,_,M){M!==0&&(n.drawElementsInstanced(r,_,a,g*c,M),t.update(_,r,M))}function p(g,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,a,g,0,M);let y=0;for(let S=0;S<M;S++)y+=_[S];t.update(y,r,1)}function v(g,_,M,T){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<g.length;S++)h(g[S]/c,_[S],T[S]);else{y.multiDrawElementsInstancedWEBGL(r,_,0,a,g,0,T,0,M);let S=0;for(let C=0;C<M;C++)S+=_[C]*T[C];t.update(S,r,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=v}function I3(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Pt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function N3(n,e,t){const r=new WeakMap,o=new rn;function a(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let g=r.get(u);if(g===void 0||g.count!==v){let Y=function(){E.dispose(),r.delete(u),u.removeEventListener("dispose",Y)};var _=Y;g!==void 0&&g.texture.dispose();const M=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,y=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],C=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let R=0;M===!0&&(R=1),T===!0&&(R=2),y===!0&&(R=3);let I=u.attributes.position.count*R,N=1;I>e.maxTextureSize&&(N=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const O=new Float32Array(I*N*4*v),E=new CS(O,I,N,v);E.type=Xi,E.needsUpdate=!0;const D=R*4;for(let k=0;k<v;k++){const $=S[k],J=C[k],oe=P[k],K=I*N*4*k;for(let Z=0;Z<$.count;Z++){const W=Z*D;M===!0&&(o.fromBufferAttribute($,Z),O[K+W+0]=o.x,O[K+W+1]=o.y,O[K+W+2]=o.z,O[K+W+3]=0),T===!0&&(o.fromBufferAttribute(J,Z),O[K+W+4]=o.x,O[K+W+5]=o.y,O[K+W+6]=o.z,O[K+W+7]=0),y===!0&&(o.fromBufferAttribute(oe,Z),O[K+W+8]=o.x,O[K+W+9]=o.y,O[K+W+10]=o.z,O[K+W+11]=oe.itemSize===4?o.w:1)}}g={count:v,texture:E,size:new kt(I,N)},r.set(u,g),u.addEventListener("dispose",Y)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let M=0;for(let y=0;y<h.length;y++)M+=h[y];const T=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",T),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:a}}function U3(n,e,t,r,o){let a=new WeakMap;function c(h){const p=o.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return g}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),r.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const F3={[dS]:"LINEAR_TONE_MAPPING",[hS]:"REINHARD_TONE_MAPPING",[pS]:"CINEON_TONE_MAPPING",[mS]:"ACES_FILMIC_TONE_MAPPING",[vS]:"AGX_TONE_MAPPING",[xS]:"NEUTRAL_TONE_MAPPING",[gS]:"CUSTOM_TONE_MAPPING"};function k3(n,e,t,r,o){const a=new Ki(e,t,{type:n,depthBuffer:r,stencilBuffer:o}),c=new Ki(e,t,{type:Er,depthBuffer:!1,stencilBuffer:!1}),u=new br;u.setAttribute("position",new Sr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Sr([0,2,0,0,2,0],2));const d=new LR({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new er(u,d),p=new OS(-1,1,1,-1,0,1);let v=null,g=null,_=!1,M,T=null,y=[],S=!1;this.setSize=function(C,P){a.setSize(C,P),c.setSize(C,P);for(let R=0;R<y.length;R++){const I=y[R];I.setSize&&I.setSize(C,P)}},this.setEffects=function(C){y=C,S=y.length>0&&y[0].isRenderPass===!0;const P=a.width,R=a.height;for(let I=0;I<y.length;I++){const N=y[I];N.setSize&&N.setSize(P,R)}},this.begin=function(C,P){if(_||C.toneMapping===$i&&y.length===0)return!1;if(T=P,P!==null){const R=P.width,I=P.height;(a.width!==R||a.height!==I)&&this.setSize(R,I)}return S===!1&&C.setRenderTarget(a),M=C.toneMapping,C.toneMapping=$i,!0},this.hasRenderPass=function(){return S},this.end=function(C,P){C.toneMapping=M,_=!0;let R=a,I=c;for(let N=0;N<y.length;N++){const O=y[N];if(O.enabled!==!1&&(O.render(C,I,R,P),O.needsSwap!==!1)){const E=R;R=I,I=E}}if(v!==C.outputColorSpace||g!==C.toneMapping){v=C.outputColorSpace,g=C.toneMapping,d.defines={},Ct.getTransfer(v)===Ut&&(d.defines.SRGB_TRANSFER="");const N=F3[g];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=R.texture,C.setRenderTarget(T),C.render(h,p),T=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),c.dispose(),u.dispose(),d.dispose()}}const VS=new On,Np=new rl(1,1),HS=new CS,GS=new lR,WS=new US,Jx=[],e_=[],t_=new Float32Array(16),n_=new Float32Array(9),i_=new Float32Array(4);function $o(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=Jx[o];if(a===void 0&&(a=new Float32Array(o),Jx[o]=a),e!==0){r.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function pn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function mn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Fu(n,e){let t=e_[e];t===void 0&&(t=new Int32Array(e),e_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function O3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function B3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2fv(this.addr,e),mn(t,e)}}function z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pn(t,e))return;n.uniform3fv(this.addr,e),mn(t,e)}}function V3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4fv(this.addr,e),mn(t,e)}}function H3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;i_.set(r),n.uniformMatrix2fv(this.addr,!1,i_),mn(t,r)}}function G3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;n_.set(r),n.uniformMatrix3fv(this.addr,!1,n_),mn(t,r)}}function W3(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(pn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(pn(t,r))return;t_.set(r),n.uniformMatrix4fv(this.addr,!1,t_),mn(t,r)}}function j3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function X3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2iv(this.addr,e),mn(t,e)}}function Y3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3iv(this.addr,e),mn(t,e)}}function q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4iv(this.addr,e),mn(t,e)}}function $3(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function K3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pn(t,e))return;n.uniform2uiv(this.addr,e),mn(t,e)}}function Z3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pn(t,e))return;n.uniform3uiv(this.addr,e),mn(t,e)}}function Q3(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pn(t,e))return;n.uniform4uiv(this.addr,e),mn(t,e)}}function J3(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Np.compareFunction=t.isReversedDepthBuffer()?Mm:Sm,a=Np):a=VS,t.setTexture2D(e||a,o)}function eD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||GS,o)}function tD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||WS,o)}function nD(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||HS,o)}function iD(n){switch(n){case 5126:return O3;case 35664:return B3;case 35665:return z3;case 35666:return V3;case 35674:return H3;case 35675:return G3;case 35676:return W3;case 5124:case 35670:return j3;case 35667:case 35671:return X3;case 35668:case 35672:return Y3;case 35669:case 35673:return q3;case 5125:return $3;case 36294:return K3;case 36295:return Z3;case 36296:return Q3;case 35678:case 36198:case 36298:case 36306:case 35682:return J3;case 35679:case 36299:case 36307:return eD;case 35680:case 36300:case 36308:case 36293:return tD;case 36289:case 36303:case 36311:case 36292:return nD}}function rD(n,e){n.uniform1fv(this.addr,e)}function sD(n,e){const t=$o(e,this.size,2);n.uniform2fv(this.addr,t)}function oD(n,e){const t=$o(e,this.size,3);n.uniform3fv(this.addr,t)}function aD(n,e){const t=$o(e,this.size,4);n.uniform4fv(this.addr,t)}function lD(n,e){const t=$o(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cD(n,e){const t=$o(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function uD(n,e){const t=$o(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function fD(n,e){n.uniform1iv(this.addr,e)}function dD(n,e){n.uniform2iv(this.addr,e)}function hD(n,e){n.uniform3iv(this.addr,e)}function pD(n,e){n.uniform4iv(this.addr,e)}function mD(n,e){n.uniform1uiv(this.addr,e)}function gD(n,e){n.uniform2uiv(this.addr,e)}function vD(n,e){n.uniform3uiv(this.addr,e)}function xD(n,e){n.uniform4uiv(this.addr,e)}function _D(n,e,t){const r=this.cache,o=e.length,a=Fu(t,o);pn(r,a)||(n.uniform1iv(this.addr,a),mn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=Np:c=VS;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function yD(n,e,t){const r=this.cache,o=e.length,a=Fu(t,o);pn(r,a)||(n.uniform1iv(this.addr,a),mn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||GS,a[c])}function SD(n,e,t){const r=this.cache,o=e.length,a=Fu(t,o);pn(r,a)||(n.uniform1iv(this.addr,a),mn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||WS,a[c])}function MD(n,e,t){const r=this.cache,o=e.length,a=Fu(t,o);pn(r,a)||(n.uniform1iv(this.addr,a),mn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||HS,a[c])}function ED(n){switch(n){case 5126:return rD;case 35664:return sD;case 35665:return oD;case 35666:return aD;case 35674:return lD;case 35675:return cD;case 35676:return uD;case 5124:case 35670:return fD;case 35667:case 35671:return dD;case 35668:case 35672:return hD;case 35669:case 35673:return pD;case 5125:return mD;case 36294:return gD;case 36295:return vD;case 36296:return xD;case 35678:case 36198:case 36298:case 36306:case 35682:return _D;case 35679:case 36299:case 36307:return yD;case 35680:case 36300:case 36308:case 36293:return SD;case 36289:case 36303:case 36311:case 36292:return MD}}class wD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=iD(t.type)}}class TD{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ED(t.type)}}class bD{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],r)}}}const mh=/(\w+)(\])?(\[|\.)?/g;function r_(n,e){n.seq.push(e),n.map[e.id]=e}function AD(n,e,t){const r=n.name,o=r.length;for(mh.lastIndex=0;;){const a=mh.exec(r),c=mh.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===o){r_(t,h===void 0?new wD(u,n,e):new TD(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new bD(u),r_(t,v)),t=v}}}class hu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);AD(u,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=r[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function s_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const CD=37297;let RD=0;function PD(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const o_=new mt;function DD(n){Ct._getMatrix(o_,Ct.workingColorSpace,n);const e=`mat3( ${o_.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(n)){case Eu:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function a_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+PD(n.getShaderSource(e),u)}else return a}function LD(n,e){const t=DD(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const ID={[dS]:"Linear",[hS]:"Reinhard",[pS]:"Cineon",[mS]:"ACESFilmic",[vS]:"AgX",[xS]:"Neutral",[gS]:"Custom"};function ND(n,e){const t=ID[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Kc=new ce;function UD(){Ct.getLuminanceCoefficients(Kc);const n=Kc.x.toFixed(4),e=Kc.y.toFixed(4),t=Kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function FD(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function kD(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function OD(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function ja(n){return n!==""}function l_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function c_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const BD=/^[ \t]*#include +<([\w\d./]+)>/gm;function Up(n){return n.replace(BD,VD)}const zD=new Map;function VD(n,e){let t=gt[e];if(t===void 0){const r=zD.get(e);if(r!==void 0)t=gt[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Up(t)}const HD=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function u_(n){return n.replace(HD,GD)}function GD(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function f_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const WD={[lu]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function jD(n){return WD[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const XD={[js]:"ENVMAP_TYPE_CUBE",[zo]:"ENVMAP_TYPE_CUBE",[Iu]:"ENVMAP_TYPE_CUBE_UV"};function YD(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":XD[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const qD={[zo]:"ENVMAP_MODE_REFRACTION"};function $D(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":qD[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const KD={[fS]:"ENVMAP_BLENDING_MULTIPLY",[zC]:"ENVMAP_BLENDING_MIX",[VC]:"ENVMAP_BLENDING_ADD"};function ZD(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":KD[n.combine]||"ENVMAP_BLENDING_NONE"}function QD(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function JD(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=jD(t),h=YD(t),p=$D(t),v=ZD(t),g=QD(t),_=FD(t),M=kD(a),T=o.createProgram();let y,S,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ja).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ja).join(`
`),S.length>0&&(S+=`
`)):(y=[f_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),S=[f_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==$i?"#define TONE_MAPPING":"",t.toneMapping!==$i?gt.tonemapping_pars_fragment:"",t.toneMapping!==$i?ND("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,LD("linearToOutputTexel",t.outputColorSpace),UD(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),c=Up(c),c=l_(c,t),c=c_(c,t),u=Up(u),u=l_(u,t),u=c_(u,t),c=u_(c),u=u_(u),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Ax?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ax?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const P=C+y+c,R=C+S+u,I=s_(o,o.VERTEX_SHADER,P),N=s_(o,o.FRAGMENT_SHADER,R);o.attachShader(T,I),o.attachShader(T,N),t.index0AttributeName!==void 0?o.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(T,0,"position"),o.linkProgram(T);function O(k){if(n.debug.checkShaderErrors){const $=o.getProgramInfoLog(T)||"",J=o.getShaderInfoLog(I)||"",oe=o.getShaderInfoLog(N)||"",K=$.trim(),Z=J.trim(),W=oe.trim();let B=!0,te=!0;if(o.getProgramParameter(T,o.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,T,I,N);else{const le=a_(o,I,"vertex"),F=a_(o,N,"fragment");Pt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(T,o.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+K+`
`+le+`
`+F)}else K!==""?ft("WebGLProgram: Program Info Log:",K):(Z===""||W==="")&&(te=!1);te&&(k.diagnostics={runnable:B,programLog:K,vertexShader:{log:Z,prefix:y},fragmentShader:{log:W,prefix:S}})}o.deleteShader(I),o.deleteShader(N),E=new hu(o,T),D=OD(o,T)}let E;this.getUniforms=function(){return E===void 0&&O(this),E};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let Y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Y===!1&&(Y=o.getProgramParameter(T,CD)),Y},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RD++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=N,this}let eL=0;class tL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new nL(e),t.set(e,r)),r}}class nL{constructor(e){this.id=eL++,this.code=e,this.usedTimes=0}}function iL(n,e,t,r,o,a){const c=new RS,u=new tL,d=new Set,h=[],p=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(E){return d.add(E),E===0?"uv":`uv${E}`}function T(E,D,Y,k,$){const J=k.fog,oe=$.geometry,K=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?k.environment:null,Z=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,W=e.get(E.envMap||K,Z),B=W&&W.mapping===Iu?W.image.height:null,te=_[E.type];E.precision!==null&&(g=r.getMaxPrecision(E.precision),g!==E.precision&&ft("WebGLProgram.getParameters:",E.precision,"not supported, using",g,"instead."));const le=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,F=le!==void 0?le.length:0;let q=0;oe.morphAttributes.position!==void 0&&(q=1),oe.morphAttributes.normal!==void 0&&(q=2),oe.morphAttributes.color!==void 0&&(q=3);let ye,Pe,qe,se;if(te){const bt=ji[te];ye=bt.vertexShader,Pe=bt.fragmentShader}else ye=E.vertexShader,Pe=E.fragmentShader,u.update(E),qe=u.getVertexShaderID(E),se=u.getFragmentShaderID(E);const he=n.getRenderTarget(),me=n.state.buffers.depth.getReversed(),Ue=$.isInstancedMesh===!0,Be=$.isBatchedMesh===!0,it=!!E.map,zt=!!E.matcap,xt=!!W,wt=!!E.aoMap,Lt=!!E.lightMap,ht=!!E.bumpMap,Gt=!!E.normalMap,V=!!E.displacementMap,Yt=!!E.emissiveMap,yt=!!E.metalnessMap,Tt=!!E.roughnessMap,$e=E.anisotropy>0,L=E.clearcoat>0,w=E.dispersion>0,j=E.iridescence>0,pe=E.sheen>0,ge=E.transmission>0,fe=$e&&!!E.anisotropyMap,Ve=L&&!!E.clearcoatMap,Ae=L&&!!E.clearcoatNormalMap,Je=L&&!!E.clearcoatRoughnessMap,at=j&&!!E.iridescenceMap,Me=j&&!!E.iridescenceThicknessMap,be=pe&&!!E.sheenColorMap,Ke=pe&&!!E.sheenRoughnessMap,He=!!E.specularMap,Ie=!!E.specularColorMap,dt=!!E.specularIntensityMap,H=ge&&!!E.transmissionMap,Ce=ge&&!!E.thicknessMap,we=!!E.gradientMap,Ne=!!E.alphaMap,Ee=E.alphaTest>0,de=!!E.alphaHash,Ge=!!E.extensions;let lt=$i;E.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(lt=n.toneMapping);const Nt={shaderID:te,shaderType:E.type,shaderName:E.name,vertexShader:ye,fragmentShader:Pe,defines:E.defines,customVertexShaderID:qe,customFragmentShaderID:se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:g,batching:Be,batchingColor:Be&&$._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&$.instanceColor!==null,instancingMorph:Ue&&$.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Ho,alphaToCoverage:!!E.alphaToCoverage,map:it,matcap:zt,envMap:xt,envMapMode:xt&&W.mapping,envMapCubeUVHeight:B,aoMap:wt,lightMap:Lt,bumpMap:ht,normalMap:Gt,displacementMap:V,emissiveMap:Yt,normalMapObjectSpace:Gt&&E.normalMapType===jC,normalMapTangentSpace:Gt&&E.normalMapType===WC,metalnessMap:yt,roughnessMap:Tt,anisotropy:$e,anisotropyMap:fe,clearcoat:L,clearcoatMap:Ve,clearcoatNormalMap:Ae,clearcoatRoughnessMap:Je,dispersion:w,iridescence:j,iridescenceMap:at,iridescenceThicknessMap:Me,sheen:pe,sheenColorMap:be,sheenRoughnessMap:Ke,specularMap:He,specularColorMap:Ie,specularIntensityMap:dt,transmission:ge,transmissionMap:H,thicknessMap:Ce,gradientMap:we,opaque:E.transparent===!1&&E.blending===Fo&&E.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Ee,alphaHash:de,combine:E.combine,mapUv:it&&M(E.map.channel),aoMapUv:wt&&M(E.aoMap.channel),lightMapUv:Lt&&M(E.lightMap.channel),bumpMapUv:ht&&M(E.bumpMap.channel),normalMapUv:Gt&&M(E.normalMap.channel),displacementMapUv:V&&M(E.displacementMap.channel),emissiveMapUv:Yt&&M(E.emissiveMap.channel),metalnessMapUv:yt&&M(E.metalnessMap.channel),roughnessMapUv:Tt&&M(E.roughnessMap.channel),anisotropyMapUv:fe&&M(E.anisotropyMap.channel),clearcoatMapUv:Ve&&M(E.clearcoatMap.channel),clearcoatNormalMapUv:Ae&&M(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Je&&M(E.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&M(E.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&M(E.iridescenceThicknessMap.channel),sheenColorMapUv:be&&M(E.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&M(E.sheenRoughnessMap.channel),specularMapUv:He&&M(E.specularMap.channel),specularColorMapUv:Ie&&M(E.specularColorMap.channel),specularIntensityMapUv:dt&&M(E.specularIntensityMap.channel),transmissionMapUv:H&&M(E.transmissionMap.channel),thicknessMapUv:Ce&&M(E.thicknessMap.channel),alphaMapUv:Ne&&M(E.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(Gt||$e),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!oe.attributes.uv&&(it||Ne),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||oe.attributes.normal===void 0&&Gt===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:me,skinning:$.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:q,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:lt,decodeVideoTexture:it&&E.map.isVideoTexture===!0&&Ct.getTransfer(E.map.colorSpace)===Ut,decodeVideoTextureEmissive:Yt&&E.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(E.emissiveMap.colorSpace)===Ut,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===vr,flipSided:E.side===qn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ge&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&E.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Nt.vertexUv1s=d.has(1),Nt.vertexUv2s=d.has(2),Nt.vertexUv3s=d.has(3),d.clear(),Nt}function y(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const Y in E.defines)D.push(Y),D.push(E.defines[Y]);return E.isRawShaderMaterial===!1&&(S(D,E),C(D,E),D.push(n.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function S(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapCubeUVHeight),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.morphAttributeCount),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function C(E,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),E.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),E.push(c.mask)}function P(E){const D=_[E.type];let Y;if(D){const k=ji[D];Y=RR.clone(k.uniforms)}else Y=E.uniforms;return Y}function R(E,D){let Y=p.get(D);return Y!==void 0?++Y.usedTimes:(Y=new JD(n,D,E,o),h.push(Y),p.set(D,Y)),Y}function I(E){if(--E.usedTimes===0){const D=h.indexOf(E);h[D]=h[h.length-1],h.pop(),p.delete(E.cacheKey),E.destroy()}}function N(E){u.remove(E)}function O(){u.dispose()}return{getParameters:T,getProgramCacheKey:y,getUniforms:P,acquireProgram:R,releaseProgram:I,releaseShaderCache:N,programs:h,dispose:O}}function rL(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function o(c,u,d){n.get(c)[u]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function sL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function d_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function h_(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function u(g,_,M,T,y,S){let C=n[e];return C===void 0?(C={id:g.id,object:g,geometry:_,material:M,materialVariant:c(g),groupOrder:T,renderOrder:g.renderOrder,z:y,group:S},n[e]=C):(C.id=g.id,C.object=g,C.geometry=_,C.material=M,C.materialVariant=c(g),C.groupOrder=T,C.renderOrder=g.renderOrder,C.z=y,C.group=S),e++,C}function d(g,_,M,T,y,S){const C=u(g,_,M,T,y,S);M.transmission>0?r.push(C):M.transparent===!0?o.push(C):t.push(C)}function h(g,_,M,T,y,S){const C=u(g,_,M,T,y,S);M.transmission>0?r.unshift(C):M.transparent===!0?o.unshift(C):t.unshift(C)}function p(g,_){t.length>1&&t.sort(g||sL),r.length>1&&r.sort(_||d_),o.length>1&&o.sort(_||d_)}function v(){for(let g=e,_=n.length;g<_;g++){const M=n[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:d,unshift:h,finish:v,sort:p}}function oL(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new h_,n.set(r,[c])):o>=a.length?(c=new h_,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function aL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ce,color:new Ot};break;case"SpotLight":t={position:new ce,direction:new ce,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ce,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ce,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return n[e.id]=t,t}}}function lL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let cL=0;function uL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function fL(n){const e=new aL,t=lL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ce);const o=new ce,a=new ln,c=new ln;function u(h){let p=0,v=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let _=0,M=0,T=0,y=0,S=0,C=0,P=0,R=0,I=0,N=0,O=0;h.sort(uL);for(let D=0,Y=h.length;D<Y;D++){const k=h[D],$=k.color,J=k.intensity,oe=k.distance;let K=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Vo?K=k.shadow.map.texture:K=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)p+=$.r*J,v+=$.g*J,g+=$.b*J;else if(k.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(k.sh.coefficients[Z],J);O++}else if(k.isDirectionalLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const W=k.shadow,B=t.get(k);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,r.directionalShadow[_]=B,r.directionalShadowMap[_]=K,r.directionalShadowMatrix[_]=k.shadow.matrix,C++}r.directional[_]=Z,_++}else if(k.isSpotLight){const Z=e.get(k);Z.position.setFromMatrixPosition(k.matrixWorld),Z.color.copy($).multiplyScalar(J),Z.distance=oe,Z.coneCos=Math.cos(k.angle),Z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),Z.decay=k.decay,r.spot[T]=Z;const W=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,W.updateMatrices(k),k.castShadow&&N++),r.spotLightMatrix[T]=W.matrix,k.castShadow){const B=t.get(k);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,r.spotShadow[T]=B,r.spotShadowMap[T]=K,R++}T++}else if(k.isRectAreaLight){const Z=e.get(k);Z.color.copy($).multiplyScalar(J),Z.halfWidth.set(k.width*.5,0,0),Z.halfHeight.set(0,k.height*.5,0),r.rectArea[y]=Z,y++}else if(k.isPointLight){const Z=e.get(k);if(Z.color.copy(k.color).multiplyScalar(k.intensity),Z.distance=k.distance,Z.decay=k.decay,k.castShadow){const W=k.shadow,B=t.get(k);B.shadowIntensity=W.intensity,B.shadowBias=W.bias,B.shadowNormalBias=W.normalBias,B.shadowRadius=W.radius,B.shadowMapSize=W.mapSize,B.shadowCameraNear=W.camera.near,B.shadowCameraFar=W.camera.far,r.pointShadow[M]=B,r.pointShadowMap[M]=K,r.pointShadowMatrix[M]=k.shadow.matrix,P++}r.point[M]=Z,M++}else if(k.isHemisphereLight){const Z=e.get(k);Z.skyColor.copy(k.color).multiplyScalar(J),Z.groundColor.copy(k.groundColor).multiplyScalar(J),r.hemi[S]=Z,S++}}y>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=v,r.ambient[2]=g;const E=r.hash;(E.directionalLength!==_||E.pointLength!==M||E.spotLength!==T||E.rectAreaLength!==y||E.hemiLength!==S||E.numDirectionalShadows!==C||E.numPointShadows!==P||E.numSpotShadows!==R||E.numSpotMaps!==I||E.numLightProbes!==O)&&(r.directional.length=_,r.spot.length=T,r.rectArea.length=y,r.point.length=M,r.hemi.length=S,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=R+I-N,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=O,E.directionalLength=_,E.pointLength=M,E.spotLength=T,E.rectAreaLength=y,E.hemiLength=S,E.numDirectionalShadows=C,E.numPointShadows=P,E.numSpotShadows=R,E.numSpotMaps=I,E.numLightProbes=O,r.version=cL++)}function d(h,p){let v=0,g=0,_=0,M=0,T=0;const y=p.matrixWorldInverse;for(let S=0,C=h.length;S<C;S++){const P=h[S];if(P.isDirectionalLight){const R=r.directional[v];R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),v++}else if(P.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(P.matrixWorld),o.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(P.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),c.identity(),a.copy(P.matrixWorld),a.premultiply(y),c.extractRotation(a),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),M++}else if(P.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(y),g++}else if(P.isHemisphereLight){const R=r.hemi[T];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(y),T++}}}return{setup:u,setupView:d,state:r}}function p_(n){const e=new fL(n),t=[],r=[];function o(p){h.camera=p,t.length=0,r.length=0}function a(p){t.push(p)}function c(p){r.push(p)}function u(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:c}}function dL(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new p_(n),e.set(o,[u])):a>=c.length?(u=new p_(n),c.push(u)):u=c[a],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const hL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pL=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,mL=[new ce(1,0,0),new ce(-1,0,0),new ce(0,1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1)],gL=[new ce(0,-1,0),new ce(0,-1,0),new ce(0,0,1),new ce(0,0,-1),new ce(0,-1,0),new ce(0,-1,0)],m_=new ln,Va=new ce,gh=new ce;function vL(n,e,t){let r=new NS;const o=new kt,a=new kt,c=new rn,u=new IR,d=new NR,h={},p=t.maxTextureSize,v={[as]:qn,[qn]:as,[vr]:vr},g=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:hL,fragmentShader:pL}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const M=new br;M.setAttribute("position",new Zi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new er(M,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let S=this.type;this.render=function(N,O,E){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===SC&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=lu);const D=n.getRenderTarget(),Y=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),$=n.state;$.setBlending(_r),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const J=S!==this.type;J&&O.traverse(function(oe){oe.material&&(Array.isArray(oe.material)?oe.material.forEach(K=>K.needsUpdate=!0):oe.material.needsUpdate=!0)});for(let oe=0,K=N.length;oe<K;oe++){const Z=N[oe],W=Z.shadow;if(W===void 0){ft("WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const B=W.getFrameExtents();o.multiply(B),a.copy(W.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/B.x),o.x=a.x*B.x,W.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/B.y),o.y=a.y*B.y,W.mapSize.y=a.y));const te=n.state.buffers.depth.getReversed();if(W.camera._reversedDepth=te,W.map===null||J===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Wa){if(Z.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ki(o.x,o.y,{format:Vo,type:Er,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),W.map.texture.name=Z.name+".shadowMap",W.map.depthTexture=new rl(o.x,o.y,Xi),W.map.depthTexture.name=Z.name+".shadowMapDepth",W.map.depthTexture.format=wr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=En,W.map.depthTexture.magFilter=En}else Z.isPointLight?(W.map=new zS(o.x),W.map.depthTexture=new AR(o.x,Ji)):(W.map=new Ki(o.x,o.y),W.map.depthTexture=new rl(o.x,o.y,Ji)),W.map.depthTexture.name=Z.name+".shadowMap",W.map.depthTexture.format=wr,this.type===lu?(W.map.depthTexture.compareFunction=te?Mm:Sm,W.map.depthTexture.minFilter=Pn,W.map.depthTexture.magFilter=Pn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=En,W.map.depthTexture.magFilter=En);W.camera.updateProjectionMatrix()}const le=W.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<le;F++){if(W.map.isWebGLCubeRenderTarget)n.setRenderTarget(W.map,F),n.clear();else{F===0&&(n.setRenderTarget(W.map),n.clear());const q=W.getViewport(F);c.set(a.x*q.x,a.y*q.y,a.x*q.z,a.y*q.w),$.viewport(c)}if(Z.isPointLight){const q=W.camera,ye=W.matrix,Pe=Z.distance||q.far;Pe!==q.far&&(q.far=Pe,q.updateProjectionMatrix()),Va.setFromMatrixPosition(Z.matrixWorld),q.position.copy(Va),gh.copy(q.position),gh.add(mL[F]),q.up.copy(gL[F]),q.lookAt(gh),q.updateMatrixWorld(),ye.makeTranslation(-Va.x,-Va.y,-Va.z),m_.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),W._frustum.setFromProjectionMatrix(m_,q.coordinateSystem,q.reversedDepth)}else W.updateMatrices(Z);r=W.getFrustum(),R(O,E,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Wa&&C(W,E),W.needsUpdate=!1}S=this.type,y.needsUpdate=!1,n.setRenderTarget(D,Y,k)};function C(N,O){const E=e.update(T);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Ki(o.x,o.y,{format:Vo,type:Er})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(O,null,E,g,T,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(O,null,E,_,T,null)}function P(N,O,E,D){let Y=null;const k=E.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(k!==void 0)Y=k;else if(Y=E.isPointLight===!0?d:u,n.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const $=Y.uuid,J=O.uuid;let oe=h[$];oe===void 0&&(oe={},h[$]=oe);let K=oe[J];K===void 0&&(K=Y.clone(),oe[J]=K,O.addEventListener("dispose",I)),Y=K}if(Y.visible=O.visible,Y.wireframe=O.wireframe,D===Wa?Y.side=O.shadowSide!==null?O.shadowSide:O.side:Y.side=O.shadowSide!==null?O.shadowSide:v[O.side],Y.alphaMap=O.alphaMap,Y.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,Y.map=O.map,Y.clipShadows=O.clipShadows,Y.clippingPlanes=O.clippingPlanes,Y.clipIntersection=O.clipIntersection,Y.displacementMap=O.displacementMap,Y.displacementScale=O.displacementScale,Y.displacementBias=O.displacementBias,Y.wireframeLinewidth=O.wireframeLinewidth,Y.linewidth=O.linewidth,E.isPointLight===!0&&Y.isMeshDistanceMaterial===!0){const $=n.properties.get(Y);$.light=E}return Y}function R(N,O,E,D,Y){if(N.visible===!1)return;if(N.layers.test(O.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&Y===Wa)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,N.matrixWorld);const J=e.update(N),oe=N.material;if(Array.isArray(oe)){const K=J.groups;for(let Z=0,W=K.length;Z<W;Z++){const B=K[Z],te=oe[B.materialIndex];if(te&&te.visible){const le=P(N,te,D,Y);N.onBeforeShadow(n,N,O,E,J,le,B),n.renderBufferDirect(E,null,J,le,N,B),N.onAfterShadow(n,N,O,E,J,le,B)}}}else if(oe.visible){const K=P(N,oe,D,Y);N.onBeforeShadow(n,N,O,E,J,K,null),n.renderBufferDirect(E,null,J,K,N,null),N.onAfterShadow(n,N,O,E,J,K,null)}}const $=N.children;for(let J=0,oe=$.length;J<oe;J++)R($[J],O,E,D,Y)}function I(N){N.target.removeEventListener("dispose",I);for(const E in h){const D=h[E],Y=N.target.uuid;Y in D&&(D[Y].dispose(),delete D[Y])}}}function xL(n,e){function t(){let H=!1;const Ce=new rn;let we=null;const Ne=new rn(0,0,0,0);return{setMask:function(Ee){we!==Ee&&!H&&(n.colorMask(Ee,Ee,Ee,Ee),we=Ee)},setLocked:function(Ee){H=Ee},setClear:function(Ee,de,Ge,lt,Nt){Nt===!0&&(Ee*=lt,de*=lt,Ge*=lt),Ce.set(Ee,de,Ge,lt),Ne.equals(Ce)===!1&&(n.clearColor(Ee,de,Ge,lt),Ne.copy(Ce))},reset:function(){H=!1,we=null,Ne.set(-1,0,0,0)}}}function r(){let H=!1,Ce=!1,we=null,Ne=null,Ee=null;return{setReversed:function(de){if(Ce!==de){const Ge=e.get("EXT_clip_control");de?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),Ce=de;const lt=Ee;Ee=null,this.setClear(lt)}},getReversed:function(){return Ce},setTest:function(de){de?he(n.DEPTH_TEST):me(n.DEPTH_TEST)},setMask:function(de){we!==de&&!H&&(n.depthMask(de),we=de)},setFunc:function(de){if(Ce&&(de=tR[de]),Ne!==de){switch(de){case Xh:n.depthFunc(n.NEVER);break;case Yh:n.depthFunc(n.ALWAYS);break;case qh:n.depthFunc(n.LESS);break;case Bo:n.depthFunc(n.LEQUAL);break;case $h:n.depthFunc(n.EQUAL);break;case Kh:n.depthFunc(n.GEQUAL);break;case Zh:n.depthFunc(n.GREATER);break;case Qh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ne=de}},setLocked:function(de){H=de},setClear:function(de){Ee!==de&&(Ee=de,Ce&&(de=1-de),n.clearDepth(de))},reset:function(){H=!1,we=null,Ne=null,Ee=null,Ce=!1}}}function o(){let H=!1,Ce=null,we=null,Ne=null,Ee=null,de=null,Ge=null,lt=null,Nt=null;return{setTest:function(bt){H||(bt?he(n.STENCIL_TEST):me(n.STENCIL_TEST))},setMask:function(bt){Ce!==bt&&!H&&(n.stencilMask(bt),Ce=bt)},setFunc:function(bt,ri,Dn){(we!==bt||Ne!==ri||Ee!==Dn)&&(n.stencilFunc(bt,ri,Dn),we=bt,Ne=ri,Ee=Dn)},setOp:function(bt,ri,Dn){(de!==bt||Ge!==ri||lt!==Dn)&&(n.stencilOp(bt,ri,Dn),de=bt,Ge=ri,lt=Dn)},setLocked:function(bt){H=bt},setClear:function(bt){Nt!==bt&&(n.clearStencil(bt),Nt=bt)},reset:function(){H=!1,Ce=null,we=null,Ne=null,Ee=null,de=null,Ge=null,lt=null,Nt=null}}}const a=new t,c=new r,u=new o,d=new WeakMap,h=new WeakMap;let p={},v={},g=new WeakMap,_=[],M=null,T=!1,y=null,S=null,C=null,P=null,R=null,I=null,N=null,O=new Ot(0,0,0),E=0,D=!1,Y=null,k=null,$=null,J=null,oe=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,W=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(B)[1]),Z=W>=1):B.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),Z=W>=2);let te=null,le={};const F=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ye=new rn().fromArray(F),Pe=new rn().fromArray(q);function qe(H,Ce,we,Ne){const Ee=new Uint8Array(4),de=n.createTexture();n.bindTexture(H,de),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ge=0;Ge<we;Ge++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Ce,0,n.RGBA,1,1,Ne,0,n.RGBA,n.UNSIGNED_BYTE,Ee):n.texImage2D(Ce+Ge,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ee);return de}const se={};se[n.TEXTURE_2D]=qe(n.TEXTURE_2D,n.TEXTURE_2D,1),se[n.TEXTURE_CUBE_MAP]=qe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[n.TEXTURE_2D_ARRAY]=qe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),se[n.TEXTURE_3D]=qe(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),he(n.DEPTH_TEST),c.setFunc(Bo),ht(!1),Gt(Sx),he(n.CULL_FACE),wt(_r);function he(H){p[H]!==!0&&(n.enable(H),p[H]=!0)}function me(H){p[H]!==!1&&(n.disable(H),p[H]=!1)}function Ue(H,Ce){return v[H]!==Ce?(n.bindFramebuffer(H,Ce),v[H]=Ce,H===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=Ce),H===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=Ce),!0):!1}function Be(H,Ce){let we=_,Ne=!1;if(H){we=g.get(Ce),we===void 0&&(we=[],g.set(Ce,we));const Ee=H.textures;if(we.length!==Ee.length||we[0]!==n.COLOR_ATTACHMENT0){for(let de=0,Ge=Ee.length;de<Ge;de++)we[de]=n.COLOR_ATTACHMENT0+de;we.length=Ee.length,Ne=!0}}else we[0]!==n.BACK&&(we[0]=n.BACK,Ne=!0);Ne&&n.drawBuffers(we)}function it(H){return M!==H?(n.useProgram(H),M=H,!0):!1}const zt={[Ns]:n.FUNC_ADD,[EC]:n.FUNC_SUBTRACT,[wC]:n.FUNC_REVERSE_SUBTRACT};zt[TC]=n.MIN,zt[bC]=n.MAX;const xt={[AC]:n.ZERO,[CC]:n.ONE,[RC]:n.SRC_COLOR,[Wh]:n.SRC_ALPHA,[UC]:n.SRC_ALPHA_SATURATE,[IC]:n.DST_COLOR,[DC]:n.DST_ALPHA,[PC]:n.ONE_MINUS_SRC_COLOR,[jh]:n.ONE_MINUS_SRC_ALPHA,[NC]:n.ONE_MINUS_DST_COLOR,[LC]:n.ONE_MINUS_DST_ALPHA,[FC]:n.CONSTANT_COLOR,[kC]:n.ONE_MINUS_CONSTANT_COLOR,[OC]:n.CONSTANT_ALPHA,[BC]:n.ONE_MINUS_CONSTANT_ALPHA};function wt(H,Ce,we,Ne,Ee,de,Ge,lt,Nt,bt){if(H===_r){T===!0&&(me(n.BLEND),T=!1);return}if(T===!1&&(he(n.BLEND),T=!0),H!==MC){if(H!==y||bt!==D){if((S!==Ns||R!==Ns)&&(n.blendEquation(n.FUNC_ADD),S=Ns,R=Ns),bt)switch(H){case Fo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mx:n.blendFunc(n.ONE,n.ONE);break;case Ex:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wx:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Pt("WebGLState: Invalid blending: ",H);break}else switch(H){case Fo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mx:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Ex:Pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wx:Pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pt("WebGLState: Invalid blending: ",H);break}C=null,P=null,I=null,N=null,O.set(0,0,0),E=0,y=H,D=bt}return}Ee=Ee||Ce,de=de||we,Ge=Ge||Ne,(Ce!==S||Ee!==R)&&(n.blendEquationSeparate(zt[Ce],zt[Ee]),S=Ce,R=Ee),(we!==C||Ne!==P||de!==I||Ge!==N)&&(n.blendFuncSeparate(xt[we],xt[Ne],xt[de],xt[Ge]),C=we,P=Ne,I=de,N=Ge),(lt.equals(O)===!1||Nt!==E)&&(n.blendColor(lt.r,lt.g,lt.b,Nt),O.copy(lt),E=Nt),y=H,D=!1}function Lt(H,Ce){H.side===vr?me(n.CULL_FACE):he(n.CULL_FACE);let we=H.side===qn;Ce&&(we=!we),ht(we),H.blending===Fo&&H.transparent===!1?wt(_r):wt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),c.setFunc(H.depthFunc),c.setTest(H.depthTest),c.setMask(H.depthWrite),a.setMask(H.colorWrite);const Ne=H.stencilWrite;u.setTest(Ne),Ne&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Yt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):me(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(H){Y!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),Y=H)}function Gt(H){H!==_C?(he(n.CULL_FACE),H!==k&&(H===Sx?n.cullFace(n.BACK):H===yC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):me(n.CULL_FACE),k=H}function V(H){H!==$&&(Z&&n.lineWidth(H),$=H)}function Yt(H,Ce,we){H?(he(n.POLYGON_OFFSET_FILL),(J!==Ce||oe!==we)&&(J=Ce,oe=we,c.getReversed()&&(Ce=-Ce),n.polygonOffset(Ce,we))):me(n.POLYGON_OFFSET_FILL)}function yt(H){H?he(n.SCISSOR_TEST):me(n.SCISSOR_TEST)}function Tt(H){H===void 0&&(H=n.TEXTURE0+K-1),te!==H&&(n.activeTexture(H),te=H)}function $e(H,Ce,we){we===void 0&&(te===null?we=n.TEXTURE0+K-1:we=te);let Ne=le[we];Ne===void 0&&(Ne={type:void 0,texture:void 0},le[we]=Ne),(Ne.type!==H||Ne.texture!==Ce)&&(te!==we&&(n.activeTexture(we),te=we),n.bindTexture(H,Ce||se[H]),Ne.type=H,Ne.texture=Ce)}function L(){const H=le[te];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function w(){try{n.compressedTexImage2D(...arguments)}catch(H){Pt("WebGLState:",H)}}function j(){try{n.compressedTexImage3D(...arguments)}catch(H){Pt("WebGLState:",H)}}function pe(){try{n.texSubImage2D(...arguments)}catch(H){Pt("WebGLState:",H)}}function ge(){try{n.texSubImage3D(...arguments)}catch(H){Pt("WebGLState:",H)}}function fe(){try{n.compressedTexSubImage2D(...arguments)}catch(H){Pt("WebGLState:",H)}}function Ve(){try{n.compressedTexSubImage3D(...arguments)}catch(H){Pt("WebGLState:",H)}}function Ae(){try{n.texStorage2D(...arguments)}catch(H){Pt("WebGLState:",H)}}function Je(){try{n.texStorage3D(...arguments)}catch(H){Pt("WebGLState:",H)}}function at(){try{n.texImage2D(...arguments)}catch(H){Pt("WebGLState:",H)}}function Me(){try{n.texImage3D(...arguments)}catch(H){Pt("WebGLState:",H)}}function be(H){ye.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),ye.copy(H))}function Ke(H){Pe.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),Pe.copy(H))}function He(H,Ce){let we=h.get(Ce);we===void 0&&(we=new WeakMap,h.set(Ce,we));let Ne=we.get(H);Ne===void 0&&(Ne=n.getUniformBlockIndex(Ce,H.name),we.set(H,Ne))}function Ie(H,Ce){const Ne=h.get(Ce).get(H);d.get(Ce)!==Ne&&(n.uniformBlockBinding(Ce,Ne,H.__bindingPointIndex),d.set(Ce,Ne))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},te=null,le={},v={},g=new WeakMap,_=[],M=null,T=!1,y=null,S=null,C=null,P=null,R=null,I=null,N=null,O=new Ot(0,0,0),E=0,D=!1,Y=null,k=null,$=null,J=null,oe=null,ye.set(0,0,n.canvas.width,n.canvas.height),Pe.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:he,disable:me,bindFramebuffer:Ue,drawBuffers:Be,useProgram:it,setBlending:wt,setMaterial:Lt,setFlipSided:ht,setCullFace:Gt,setLineWidth:V,setPolygonOffset:Yt,setScissorTest:yt,activeTexture:Tt,bindTexture:$e,unbindTexture:L,compressedTexImage2D:w,compressedTexImage3D:j,texImage2D:at,texImage3D:Me,updateUBOMapping:He,uniformBlockBinding:Ie,texStorage2D:Ae,texStorage3D:Je,texSubImage2D:pe,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:Ve,scissor:be,viewport:Ke,reset:dt}}function _L(n,e,t,r,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,p=new WeakMap;let v;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,w){return _?new OffscreenCanvas(L,w):Tu("canvas")}function T(L,w,j){let pe=1;const ge=$e(L);if((ge.width>j||ge.height>j)&&(pe=j/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(pe*ge.width),Ve=Math.floor(pe*ge.height);v===void 0&&(v=M(fe,Ve));const Ae=w?M(fe,Ve):v;return Ae.width=fe,Ae.height=Ve,Ae.getContext("2d").drawImage(L,0,0,fe,Ve),ft("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+Ve+")."),Ae}else return"data"in L&&ft("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function y(L){return L.generateMipmaps}function S(L){n.generateMipmap(L)}function C(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function P(L,w,j,pe,ge=!1){if(L!==null){if(n[L]!==void 0)return n[L];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=w;if(w===n.RED&&(j===n.FLOAT&&(fe=n.R32F),j===n.HALF_FLOAT&&(fe=n.R16F),j===n.UNSIGNED_BYTE&&(fe=n.R8)),w===n.RED_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.R8UI),j===n.UNSIGNED_SHORT&&(fe=n.R16UI),j===n.UNSIGNED_INT&&(fe=n.R32UI),j===n.BYTE&&(fe=n.R8I),j===n.SHORT&&(fe=n.R16I),j===n.INT&&(fe=n.R32I)),w===n.RG&&(j===n.FLOAT&&(fe=n.RG32F),j===n.HALF_FLOAT&&(fe=n.RG16F),j===n.UNSIGNED_BYTE&&(fe=n.RG8)),w===n.RG_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RG8UI),j===n.UNSIGNED_SHORT&&(fe=n.RG16UI),j===n.UNSIGNED_INT&&(fe=n.RG32UI),j===n.BYTE&&(fe=n.RG8I),j===n.SHORT&&(fe=n.RG16I),j===n.INT&&(fe=n.RG32I)),w===n.RGB_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGB8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGB16UI),j===n.UNSIGNED_INT&&(fe=n.RGB32UI),j===n.BYTE&&(fe=n.RGB8I),j===n.SHORT&&(fe=n.RGB16I),j===n.INT&&(fe=n.RGB32I)),w===n.RGBA_INTEGER&&(j===n.UNSIGNED_BYTE&&(fe=n.RGBA8UI),j===n.UNSIGNED_SHORT&&(fe=n.RGBA16UI),j===n.UNSIGNED_INT&&(fe=n.RGBA32UI),j===n.BYTE&&(fe=n.RGBA8I),j===n.SHORT&&(fe=n.RGBA16I),j===n.INT&&(fe=n.RGBA32I)),w===n.RGB&&(j===n.UNSIGNED_INT_5_9_9_9_REV&&(fe=n.RGB9_E5),j===n.UNSIGNED_INT_10F_11F_11F_REV&&(fe=n.R11F_G11F_B10F)),w===n.RGBA){const Ve=ge?Eu:Ct.getTransfer(pe);j===n.FLOAT&&(fe=n.RGBA32F),j===n.HALF_FLOAT&&(fe=n.RGBA16F),j===n.UNSIGNED_BYTE&&(fe=Ve===Ut?n.SRGB8_ALPHA8:n.RGBA8),j===n.UNSIGNED_SHORT_4_4_4_4&&(fe=n.RGBA4),j===n.UNSIGNED_SHORT_5_5_5_1&&(fe=n.RGB5_A1)}return(fe===n.R16F||fe===n.R32F||fe===n.RG16F||fe===n.RG32F||fe===n.RGBA16F||fe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(L,w){let j;return L?w===null||w===Ji||w===il?j=n.DEPTH24_STENCIL8:w===Xi?j=n.DEPTH32F_STENCIL8:w===nl&&(j=n.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ji||w===il?j=n.DEPTH_COMPONENT24:w===Xi?j=n.DEPTH_COMPONENT32F:w===nl&&(j=n.DEPTH_COMPONENT16),j}function I(L,w){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==En&&L.minFilter!==Pn?Math.log2(Math.max(w.width,w.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?w.mipmaps.length:1}function N(L){const w=L.target;w.removeEventListener("dispose",N),E(w),w.isVideoTexture&&p.delete(w)}function O(L){const w=L.target;w.removeEventListener("dispose",O),Y(w)}function E(L){const w=r.get(L);if(w.__webglInit===void 0)return;const j=L.source,pe=g.get(j);if(pe){const ge=pe[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&D(L),Object.keys(pe).length===0&&g.delete(j)}r.remove(L)}function D(L){const w=r.get(L);n.deleteTexture(w.__webglTexture);const j=L.source,pe=g.get(j);delete pe[w.__cacheKey],c.memory.textures--}function Y(L){const w=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ge=0;ge<w.__webglFramebuffer[pe].length;ge++)n.deleteFramebuffer(w.__webglFramebuffer[pe][ge]);else n.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)n.deleteFramebuffer(w.__webglFramebuffer[pe]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const j=L.textures;for(let pe=0,ge=j.length;pe<ge;pe++){const fe=r.get(j[pe]);fe.__webglTexture&&(n.deleteTexture(fe.__webglTexture),c.memory.textures--),r.remove(j[pe])}r.remove(L)}let k=0;function $(){k=0}function J(){const L=k;return L>=o.maxTextures&&ft("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),k+=1,L}function oe(L){const w=[];return w.push(L.wrapS),w.push(L.wrapT),w.push(L.wrapR||0),w.push(L.magFilter),w.push(L.minFilter),w.push(L.anisotropy),w.push(L.internalFormat),w.push(L.format),w.push(L.type),w.push(L.generateMipmaps),w.push(L.premultiplyAlpha),w.push(L.flipY),w.push(L.unpackAlignment),w.push(L.colorSpace),w.join()}function K(L,w){const j=r.get(L);if(L.isVideoTexture&&yt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&j.__version!==L.version){const pe=L.image;if(pe===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{se(j,L,w);return}}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,j.__webglTexture,n.TEXTURE0+w)}function Z(L,w){const j=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){se(j,L,w);return}else L.isExternalTexture&&(j.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,j.__webglTexture,n.TEXTURE0+w)}function W(L,w){const j=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&j.__version!==L.version){se(j,L,w);return}t.bindTexture(n.TEXTURE_3D,j.__webglTexture,n.TEXTURE0+w)}function B(L,w){const j=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&j.__version!==L.version){he(j,L,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,j.__webglTexture,n.TEXTURE0+w)}const te={[Jh]:n.REPEAT,[xr]:n.CLAMP_TO_EDGE,[ep]:n.MIRRORED_REPEAT},le={[En]:n.NEAREST,[HC]:n.NEAREST_MIPMAP_NEAREST,[Cc]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[zd]:n.LINEAR_MIPMAP_NEAREST,[Bs]:n.LINEAR_MIPMAP_LINEAR},F={[XC]:n.NEVER,[ZC]:n.ALWAYS,[YC]:n.LESS,[Sm]:n.LEQUAL,[qC]:n.EQUAL,[Mm]:n.GEQUAL,[$C]:n.GREATER,[KC]:n.NOTEQUAL};function q(L,w){if(w.type===Xi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Pn||w.magFilter===zd||w.magFilter===Cc||w.magFilter===Bs||w.minFilter===Pn||w.minFilter===zd||w.minFilter===Cc||w.minFilter===Bs)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,te[w.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,te[w.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,te[w.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,le[w.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,le[w.minFilter]),w.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,F[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===En||w.minFilter!==Cc&&w.minFilter!==Bs||w.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const j=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function ye(L,w){let j=!1;L.__webglInit===void 0&&(L.__webglInit=!0,w.addEventListener("dispose",N));const pe=w.source;let ge=g.get(pe);ge===void 0&&(ge={},g.set(pe,ge));const fe=oe(w);if(fe!==L.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,j=!0),ge[fe].usedTimes++;const Ve=ge[L.__cacheKey];Ve!==void 0&&(ge[L.__cacheKey].usedTimes--,Ve.usedTimes===0&&D(w)),L.__cacheKey=fe,L.__webglTexture=ge[fe].texture}return j}function Pe(L,w,j){return Math.floor(Math.floor(L/j)/w)}function qe(L,w,j,pe){const fe=L.updateRanges;if(fe.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,w.width,w.height,j,pe,w.data);else{fe.sort((Me,be)=>Me.start-be.start);let Ve=0;for(let Me=1;Me<fe.length;Me++){const be=fe[Ve],Ke=fe[Me],He=be.start+be.count,Ie=Pe(Ke.start,w.width,4),dt=Pe(be.start,w.width,4);Ke.start<=He+1&&Ie===dt&&Pe(Ke.start+Ke.count-1,w.width,4)===Ie?be.count=Math.max(be.count,Ke.start+Ke.count-be.start):(++Ve,fe[Ve]=Ke)}fe.length=Ve+1;const Ae=n.getParameter(n.UNPACK_ROW_LENGTH),Je=n.getParameter(n.UNPACK_SKIP_PIXELS),at=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,w.width);for(let Me=0,be=fe.length;Me<be;Me++){const Ke=fe[Me],He=Math.floor(Ke.start/4),Ie=Math.ceil(Ke.count/4),dt=He%w.width,H=Math.floor(He/w.width),Ce=Ie,we=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),n.pixelStorei(n.UNPACK_SKIP_ROWS,H),t.texSubImage2D(n.TEXTURE_2D,0,dt,H,Ce,we,j,pe,w.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Je),n.pixelStorei(n.UNPACK_SKIP_ROWS,at)}}function se(L,w,j){let pe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=n.TEXTURE_3D);const ge=ye(L,w),fe=w.source;t.bindTexture(pe,L.__webglTexture,n.TEXTURE0+j);const Ve=r.get(fe);if(fe.version!==Ve.__version||ge===!0){t.activeTexture(n.TEXTURE0+j);const Ae=Ct.getPrimaries(Ct.workingColorSpace),Je=w.colorSpace===is?null:Ct.getPrimaries(w.colorSpace),at=w.colorSpace===is||Ae===Je?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,at);let Me=T(w.image,!1,o.maxTextureSize);Me=Tt(w,Me);const be=a.convert(w.format,w.colorSpace),Ke=a.convert(w.type);let He=P(w.internalFormat,be,Ke,w.colorSpace,w.isVideoTexture);q(pe,w);let Ie;const dt=w.mipmaps,H=w.isVideoTexture!==!0,Ce=Ve.__version===void 0||ge===!0,we=fe.dataReady,Ne=I(w,Me);if(w.isDepthTexture)He=R(w.format===zs,w.type),Ce&&(H?t.texStorage2D(n.TEXTURE_2D,1,He,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,He,Me.width,Me.height,0,be,Ke,null));else if(w.isDataTexture)if(dt.length>0){H&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ne,He,dt[0].width,dt[0].height);for(let Ee=0,de=dt.length;Ee<de;Ee++)Ie=dt[Ee],H?we&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Ie.width,Ie.height,be,Ke,Ie.data):t.texImage2D(n.TEXTURE_2D,Ee,He,Ie.width,Ie.height,0,be,Ke,Ie.data);w.generateMipmaps=!1}else H?(Ce&&t.texStorage2D(n.TEXTURE_2D,Ne,He,Me.width,Me.height),we&&qe(w,Me,be,Ke)):t.texImage2D(n.TEXTURE_2D,0,He,Me.width,Me.height,0,be,Ke,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){H&&Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,He,dt[0].width,dt[0].height,Me.depth);for(let Ee=0,de=dt.length;Ee<de;Ee++)if(Ie=dt[Ee],w.format!==Li)if(be!==null)if(H){if(we)if(w.layerUpdates.size>0){const Ge=Xx(Ie.width,Ie.height,w.format,w.type);for(const lt of w.layerUpdates){const Nt=Ie.data.subarray(lt*Ge/Ie.data.BYTES_PER_ELEMENT,(lt+1)*Ge/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,lt,Ie.width,Ie.height,1,be,Nt)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Ie.width,Ie.height,Me.depth,be,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Ee,He,Ie.width,Ie.height,Me.depth,0,Ie.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?we&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Ee,0,0,0,Ie.width,Ie.height,Me.depth,be,Ke,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Ee,He,Ie.width,Ie.height,Me.depth,0,be,Ke,Ie.data)}else{H&&Ce&&t.texStorage2D(n.TEXTURE_2D,Ne,He,dt[0].width,dt[0].height);for(let Ee=0,de=dt.length;Ee<de;Ee++)Ie=dt[Ee],w.format!==Li?be!==null?H?we&&t.compressedTexSubImage2D(n.TEXTURE_2D,Ee,0,0,Ie.width,Ie.height,be,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,Ee,He,Ie.width,Ie.height,0,Ie.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?we&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,Ie.width,Ie.height,be,Ke,Ie.data):t.texImage2D(n.TEXTURE_2D,Ee,He,Ie.width,Ie.height,0,be,Ke,Ie.data)}else if(w.isDataArrayTexture)if(H){if(Ce&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ne,He,Me.width,Me.height,Me.depth),we)if(w.layerUpdates.size>0){const Ee=Xx(Me.width,Me.height,w.format,w.type);for(const de of w.layerUpdates){const Ge=Me.data.subarray(de*Ee/Me.data.BYTES_PER_ELEMENT,(de+1)*Ee/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,Me.width,Me.height,1,be,Ke,Ge)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,be,Ke,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,He,Me.width,Me.height,Me.depth,0,be,Ke,Me.data);else if(w.isData3DTexture)H?(Ce&&t.texStorage3D(n.TEXTURE_3D,Ne,He,Me.width,Me.height,Me.depth),we&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,be,Ke,Me.data)):t.texImage3D(n.TEXTURE_3D,0,He,Me.width,Me.height,Me.depth,0,be,Ke,Me.data);else if(w.isFramebufferTexture){if(Ce)if(H)t.texStorage2D(n.TEXTURE_2D,Ne,He,Me.width,Me.height);else{let Ee=Me.width,de=Me.height;for(let Ge=0;Ge<Ne;Ge++)t.texImage2D(n.TEXTURE_2D,Ge,He,Ee,de,0,be,Ke,null),Ee>>=1,de>>=1}}else if(dt.length>0){if(H&&Ce){const Ee=$e(dt[0]);t.texStorage2D(n.TEXTURE_2D,Ne,He,Ee.width,Ee.height)}for(let Ee=0,de=dt.length;Ee<de;Ee++)Ie=dt[Ee],H?we&&t.texSubImage2D(n.TEXTURE_2D,Ee,0,0,be,Ke,Ie):t.texImage2D(n.TEXTURE_2D,Ee,He,be,Ke,Ie);w.generateMipmaps=!1}else if(H){if(Ce){const Ee=$e(Me);t.texStorage2D(n.TEXTURE_2D,Ne,He,Ee.width,Ee.height)}we&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,be,Ke,Me)}else t.texImage2D(n.TEXTURE_2D,0,He,be,Ke,Me);y(w)&&S(pe),Ve.__version=fe.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function he(L,w,j){if(w.image.length!==6)return;const pe=ye(L,w),ge=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+j);const fe=r.get(ge);if(ge.version!==fe.__version||pe===!0){t.activeTexture(n.TEXTURE0+j);const Ve=Ct.getPrimaries(Ct.workingColorSpace),Ae=w.colorSpace===is?null:Ct.getPrimaries(w.colorSpace),Je=w.colorSpace===is||Ve===Ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je);const at=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,be=[];for(let de=0;de<6;de++)!at&&!Me?be[de]=T(w.image[de],!0,o.maxCubemapSize):be[de]=Me?w.image[de].image:w.image[de],be[de]=Tt(w,be[de]);const Ke=be[0],He=a.convert(w.format,w.colorSpace),Ie=a.convert(w.type),dt=P(w.internalFormat,He,Ie,w.colorSpace),H=w.isVideoTexture!==!0,Ce=fe.__version===void 0||pe===!0,we=ge.dataReady;let Ne=I(w,Ke);q(n.TEXTURE_CUBE_MAP,w);let Ee;if(at){H&&Ce&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,dt,Ke.width,Ke.height);for(let de=0;de<6;de++){Ee=be[de].mipmaps;for(let Ge=0;Ge<Ee.length;Ge++){const lt=Ee[Ge];w.format!==Li?He!==null?H?we&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,0,0,lt.width,lt.height,He,lt.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,dt,lt.width,lt.height,0,lt.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,0,0,lt.width,lt.height,He,Ie,lt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge,dt,lt.width,lt.height,0,He,Ie,lt.data)}}}else{if(Ee=w.mipmaps,H&&Ce){Ee.length>0&&Ne++;const de=$e(be[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ne,dt,de.width,de.height)}for(let de=0;de<6;de++)if(Me){H?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,be[de].width,be[de].height,He,Ie,be[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,dt,be[de].width,be[de].height,0,He,Ie,be[de].data);for(let Ge=0;Ge<Ee.length;Ge++){const Nt=Ee[Ge].image[de].image;H?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,0,0,Nt.width,Nt.height,He,Ie,Nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,dt,Nt.width,Nt.height,0,He,Ie,Nt.data)}}else{H?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,He,Ie,be[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,dt,He,Ie,be[de]);for(let Ge=0;Ge<Ee.length;Ge++){const lt=Ee[Ge];H?we&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,0,0,He,Ie,lt.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ge+1,dt,He,Ie,lt.image[de])}}}y(w)&&S(n.TEXTURE_CUBE_MAP),fe.__version=ge.version,w.onUpdate&&w.onUpdate(w)}L.__version=w.version}function me(L,w,j,pe,ge,fe){const Ve=a.convert(j.format,j.colorSpace),Ae=a.convert(j.type),Je=P(j.internalFormat,Ve,Ae,j.colorSpace),at=r.get(w),Me=r.get(j);if(Me.__renderTarget=w,!at.__hasExternalTextures){const be=Math.max(1,w.width>>fe),Ke=Math.max(1,w.height>>fe);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,fe,Je,be,Ke,w.depth,0,Ve,Ae,null):t.texImage2D(ge,fe,Je,be,Ke,0,Ve,Ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),Yt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,V(w)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ge,Me.__webglTexture,fe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(L,w,j){if(n.bindRenderbuffer(n.RENDERBUFFER,L),w.depthBuffer){const pe=w.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,fe=R(w.stencilBuffer,ge),Ve=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Yt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V(w),fe,w.width,w.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,V(w),fe,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,fe,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ve,n.RENDERBUFFER,L)}else{const pe=w.textures;for(let ge=0;ge<pe.length;ge++){const fe=pe[ge],Ve=a.convert(fe.format,fe.colorSpace),Ae=a.convert(fe.type),Je=P(fe.internalFormat,Ve,Ae,fe.colorSpace);Yt(w)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,V(w),Je,w.width,w.height):j?n.renderbufferStorageMultisample(n.RENDERBUFFER,V(w),Je,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Je,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Be(L,w,j){const pe=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(w.depthTexture);if(ge.__renderTarget=w,(!ge.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,w.depthTexture.addEventListener("dispose",N)),ge.__webglTexture===void 0){ge.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ge.__webglTexture),q(n.TEXTURE_CUBE_MAP,w.depthTexture);const at=a.convert(w.depthTexture.format),Me=a.convert(w.depthTexture.type);let be;w.depthTexture.format===wr?be=n.DEPTH_COMPONENT24:w.depthTexture.format===zs&&(be=n.DEPTH24_STENCIL8);for(let Ke=0;Ke<6;Ke++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ke,0,be,w.width,w.height,0,at,Me,null)}}else K(w.depthTexture,0);const fe=ge.__webglTexture,Ve=V(w),Ae=pe?n.TEXTURE_CUBE_MAP_POSITIVE_X+j:n.TEXTURE_2D,Je=w.depthTexture.format===zs?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(w.depthTexture.format===wr)Yt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Je,Ae,fe,0,Ve):n.framebufferTexture2D(n.FRAMEBUFFER,Je,Ae,fe,0);else if(w.depthTexture.format===zs)Yt(w)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Je,Ae,fe,0,Ve):n.framebufferTexture2D(n.FRAMEBUFFER,Je,Ae,fe,0);else throw new Error("Unknown depthTexture format")}function it(L){const w=r.get(L),j=L.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==L.depthTexture){const pe=L.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=pe}if(L.depthTexture&&!w.__autoAllocateDepthBuffer)if(j)for(let pe=0;pe<6;pe++)Be(w.__webglFramebuffer[pe],L,pe);else{const pe=L.texture.mipmaps;pe&&pe.length>0?Be(w.__webglFramebuffer[0],L,0):Be(w.__webglFramebuffer,L,0)}else if(j){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=n.createRenderbuffer(),Ue(w.__webglDepthbuffer[pe],L,!1);else{const ge=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,fe)}}else{const pe=L.texture.mipmaps;if(pe&&pe.length>0?t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),Ue(w.__webglDepthbuffer,L,!1);else{const ge=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,fe=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,fe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,fe)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(L,w,j){const pe=r.get(L);w!==void 0&&me(pe.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),j!==void 0&&it(L)}function xt(L){const w=L.texture,j=r.get(L),pe=r.get(w);L.addEventListener("dispose",O);const ge=L.textures,fe=L.isWebGLCubeRenderTarget===!0,Ve=ge.length>1;if(Ve||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=w.version,c.memory.textures++),fe){j.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer[Ae]=[];for(let Je=0;Je<w.mipmaps.length;Je++)j.__webglFramebuffer[Ae][Je]=n.createFramebuffer()}else j.__webglFramebuffer[Ae]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){j.__webglFramebuffer=[];for(let Ae=0;Ae<w.mipmaps.length;Ae++)j.__webglFramebuffer[Ae]=n.createFramebuffer()}else j.__webglFramebuffer=n.createFramebuffer();if(Ve)for(let Ae=0,Je=ge.length;Ae<Je;Ae++){const at=r.get(ge[Ae]);at.__webglTexture===void 0&&(at.__webglTexture=n.createTexture(),c.memory.textures++)}if(L.samples>0&&Yt(L)===!1){j.__webglMultisampledFramebuffer=n.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Ae=0;Ae<ge.length;Ae++){const Je=ge[Ae];j.__webglColorRenderbuffer[Ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,j.__webglColorRenderbuffer[Ae]);const at=a.convert(Je.format,Je.colorSpace),Me=a.convert(Je.type),be=P(Je.internalFormat,at,Me,Je.colorSpace,L.isXRRenderTarget===!0),Ke=V(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ke,be,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ae,n.RENDERBUFFER,j.__webglColorRenderbuffer[Ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(j.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(j.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(fe){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),q(n.TEXTURE_CUBE_MAP,w);for(let Ae=0;Ae<6;Ae++)if(w.mipmaps&&w.mipmaps.length>0)for(let Je=0;Je<w.mipmaps.length;Je++)me(j.__webglFramebuffer[Ae][Je],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Je);else me(j.__webglFramebuffer[Ae],L,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(w)&&S(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ve){for(let Ae=0,Je=ge.length;Ae<Je;Ae++){const at=ge[Ae],Me=r.get(at);let be=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(be,Me.__webglTexture),q(be,at),me(j.__webglFramebuffer,L,at,n.COLOR_ATTACHMENT0+Ae,be,0),y(at)&&S(be)}t.unbindTexture()}else{let Ae=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,pe.__webglTexture),q(Ae,w),w.mipmaps&&w.mipmaps.length>0)for(let Je=0;Je<w.mipmaps.length;Je++)me(j.__webglFramebuffer[Je],L,w,n.COLOR_ATTACHMENT0,Ae,Je);else me(j.__webglFramebuffer,L,w,n.COLOR_ATTACHMENT0,Ae,0);y(w)&&S(Ae),t.unbindTexture()}L.depthBuffer&&it(L)}function wt(L){const w=L.textures;for(let j=0,pe=w.length;j<pe;j++){const ge=w[j];if(y(ge)){const fe=C(L),Ve=r.get(ge).__webglTexture;t.bindTexture(fe,Ve),S(fe),t.unbindTexture()}}}const Lt=[],ht=[];function Gt(L){if(L.samples>0){if(Yt(L)===!1){const w=L.textures,j=L.width,pe=L.height;let ge=n.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ve=r.get(L),Ae=w.length>1;if(Ae)for(let at=0;at<w.length;at++)t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer);const Je=L.texture.mipmaps;Je&&Je.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglFramebuffer);for(let at=0;at<w.length;at++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),Ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[at]);const Me=r.get(w[at]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,j,pe,0,0,j,pe,ge,n.NEAREST),d===!0&&(Lt.length=0,ht.length=0,Lt.push(n.COLOR_ATTACHMENT0+at),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Lt.push(fe),ht.push(fe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,ht)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ae)for(let at=0;at<w.length;at++){t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.RENDERBUFFER,Ve.__webglColorRenderbuffer[at]);const Me=r.get(w[at]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+at,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ve.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const w=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function V(L){return Math.min(o.maxSamples,L.samples)}function Yt(L){const w=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function yt(L){const w=c.render.frame;p.get(L)!==w&&(p.set(L,w),L.update())}function Tt(L,w){const j=L.colorSpace,pe=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||j!==Ho&&j!==is&&(Ct.getTransfer(j)===Ut?(pe!==Li||ge!==mi)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pt("WebGLTextures: Unsupported texture color space:",j)),w}function $e(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=$,this.setTexture2D=K,this.setTexture2DArray=Z,this.setTexture3D=W,this.setTextureCube=B,this.rebindTextures=zt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function yL(n,e){function t(r,o=is){let a;const c=Ct.getTransfer(o);if(r===mi)return n.UNSIGNED_BYTE;if(r===gm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===vm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===MS)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===ES)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===yS)return n.BYTE;if(r===SS)return n.SHORT;if(r===nl)return n.UNSIGNED_SHORT;if(r===mm)return n.INT;if(r===Ji)return n.UNSIGNED_INT;if(r===Xi)return n.FLOAT;if(r===Er)return n.HALF_FLOAT;if(r===wS)return n.ALPHA;if(r===TS)return n.RGB;if(r===Li)return n.RGBA;if(r===wr)return n.DEPTH_COMPONENT;if(r===zs)return n.DEPTH_STENCIL;if(r===bS)return n.RED;if(r===xm)return n.RED_INTEGER;if(r===Vo)return n.RG;if(r===_m)return n.RG_INTEGER;if(r===ym)return n.RGBA_INTEGER;if(r===cu||r===uu||r===fu||r===du)if(c===Ut)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===cu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===uu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===fu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===du)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===cu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===uu)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===fu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===du)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===tp||r===np||r===ip||r===rp)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===tp)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===np)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===ip)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===rp)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===sp||r===op||r===ap||r===lp||r===cp||r===up||r===fp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===sp||r===op)return c===Ut?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ap)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===lp)return a.COMPRESSED_R11_EAC;if(r===cp)return a.COMPRESSED_SIGNED_R11_EAC;if(r===up)return a.COMPRESSED_RG11_EAC;if(r===fp)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===dp||r===hp||r===pp||r===mp||r===gp||r===vp||r===xp||r===_p||r===yp||r===Sp||r===Mp||r===Ep||r===wp||r===Tp)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===dp)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===hp)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===pp)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mp)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gp)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vp)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xp)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===_p)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yp)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Sp)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Mp)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ep)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===wp)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tp)return c===Ut?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===bp||r===Ap||r===Cp)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===bp)return c===Ut?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Ap)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Cp)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rp||r===Pp||r===Dp||r===Lp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Rp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Pp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Dp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===il?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const SL=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ML=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class EL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new FS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ni({vertexShader:SL,fragmentShader:ML,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new er(new hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wL extends Yo{constructor(e,t){super();const r=this;let o=null,a=1,c=null,u="local-floor",d=1,h=null,p=null,v=null,g=null,_=null,M=null;const T=typeof XRWebGLBinding<"u",y=new EL,S={},C=t.getContextAttributes();let P=null,R=null;const I=[],N=[],O=new kt;let E=null;const D=new Pi;D.viewport=new rn;const Y=new Pi;Y.viewport=new rn;const k=[D,Y],$=new FR;let J=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let he=I[se];return he===void 0&&(he=new qd,I[se]=he),he.getTargetRaySpace()},this.getControllerGrip=function(se){let he=I[se];return he===void 0&&(he=new qd,I[se]=he),he.getGripSpace()},this.getHand=function(se){let he=I[se];return he===void 0&&(he=new qd,I[se]=he),he.getHandSpace()};function K(se){const he=N.indexOf(se.inputSource);if(he===-1)return;const me=I[he];me!==void 0&&(me.update(se.inputSource,se.frame,h||c),me.dispatchEvent({type:se.type,data:se.inputSource}))}function Z(){o.removeEventListener("select",K),o.removeEventListener("selectstart",K),o.removeEventListener("selectend",K),o.removeEventListener("squeeze",K),o.removeEventListener("squeezestart",K),o.removeEventListener("squeezeend",K),o.removeEventListener("end",Z),o.removeEventListener("inputsourceschange",W);for(let se=0;se<I.length;se++){const he=N[se];he!==null&&(N[se]=null,I[se].disconnect(he))}J=null,oe=null,y.reset();for(const se in S)delete S[se];e.setRenderTarget(P),_=null,g=null,v=null,o=null,R=null,qe.stop(),r.isPresenting=!1,e.setPixelRatio(E),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){a=se,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){u=se,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(se){h=se},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(se){if(o=se,o!==null){if(P=e.getRenderTarget(),o.addEventListener("select",K),o.addEventListener("selectstart",K),o.addEventListener("selectend",K),o.addEventListener("squeeze",K),o.addEventListener("squeezestart",K),o.addEventListener("squeezeend",K),o.addEventListener("end",Z),o.addEventListener("inputsourceschange",W),C.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(O),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,Be=null;C.depth&&(Be=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=C.stencil?zs:wr,Ue=C.stencil?il:Ji);const it={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:a};v=this.getBinding(),g=v.createProjectionLayer(it),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Ki(g.textureWidth,g.textureHeight,{format:Li,type:mi,depthTexture:new rl(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,me),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new Ki(_.framebufferWidth,_.framebufferHeight,{format:Li,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(u),qe.setContext(o),qe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function W(se){for(let he=0;he<se.removed.length;he++){const me=se.removed[he],Ue=N.indexOf(me);Ue>=0&&(N[Ue]=null,I[Ue].disconnect(me))}for(let he=0;he<se.added.length;he++){const me=se.added[he];let Ue=N.indexOf(me);if(Ue===-1){for(let it=0;it<I.length;it++)if(it>=N.length){N.push(me),Ue=it;break}else if(N[it]===null){N[it]=me,Ue=it;break}if(Ue===-1)break}const Be=I[Ue];Be&&Be.connect(me)}}const B=new ce,te=new ce;function le(se,he,me){B.setFromMatrixPosition(he.matrixWorld),te.setFromMatrixPosition(me.matrixWorld);const Ue=B.distanceTo(te),Be=he.projectionMatrix.elements,it=me.projectionMatrix.elements,zt=Be[14]/(Be[10]-1),xt=Be[14]/(Be[10]+1),wt=(Be[9]+1)/Be[5],Lt=(Be[9]-1)/Be[5],ht=(Be[8]-1)/Be[0],Gt=(it[8]+1)/it[0],V=zt*ht,Yt=zt*Gt,yt=Ue/(-ht+Gt),Tt=yt*-ht;if(he.matrixWorld.decompose(se.position,se.quaternion,se.scale),se.translateX(Tt),se.translateZ(yt),se.matrixWorld.compose(se.position,se.quaternion,se.scale),se.matrixWorldInverse.copy(se.matrixWorld).invert(),Be[10]===-1)se.projectionMatrix.copy(he.projectionMatrix),se.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const $e=zt+yt,L=xt+yt,w=V-Tt,j=Yt+(Ue-Tt),pe=wt*xt/L*$e,ge=Lt*xt/L*$e;se.projectionMatrix.makePerspective(w,j,pe,ge,$e,L),se.projectionMatrixInverse.copy(se.projectionMatrix).invert()}}function F(se,he){he===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(he.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(o===null)return;let he=se.near,me=se.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(me=y.depthFar)),$.near=Y.near=D.near=he,$.far=Y.far=D.far=me,(J!==$.near||oe!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),J=$.near,oe=$.far),$.layers.mask=se.layers.mask|6,D.layers.mask=$.layers.mask&-5,Y.layers.mask=$.layers.mask&-3;const Ue=se.parent,Be=$.cameras;F($,Ue);for(let it=0;it<Be.length;it++)F(Be[it],Ue);Be.length===2?le($,D,Y):$.projectionMatrix.copy(D.projectionMatrix),q(se,$,Ue)};function q(se,he,me){me===null?se.matrix.copy(he.matrixWorld):(se.matrix.copy(me.matrixWorld),se.matrix.invert(),se.matrix.multiply(he.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(he.projectionMatrix),se.projectionMatrixInverse.copy(he.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Ip*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&_===null))return d},this.setFoveation=function(se){d=se,g!==null&&(g.fixedFoveation=se),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=se)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh($)},this.getCameraTexture=function(se){return S[se]};let ye=null;function Pe(se,he){if(p=he.getViewerPose(h||c),M=he,p!==null){const me=p.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let Ue=!1;me.length!==$.cameras.length&&($.cameras.length=0,Ue=!0);for(let xt=0;xt<me.length;xt++){const wt=me[xt];let Lt=null;if(_!==null)Lt=_.getViewport(wt);else{const Gt=v.getViewSubImage(g,wt);Lt=Gt.viewport,xt===0&&(e.setRenderTargetTextures(R,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(R))}let ht=k[xt];ht===void 0&&(ht=new Pi,ht.layers.enable(xt),ht.viewport=new rn,k[xt]=ht),ht.matrix.fromArray(wt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(wt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),xt===0&&($.matrix.copy(ht.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Ue===!0&&$.cameras.push(ht)}const Be=o.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&T){v=r.getBinding();const xt=v.getDepthInformation(me[0]);xt&&xt.isValid&&xt.texture&&y.init(xt,o.renderState)}if(Be&&Be.includes("camera-access")&&T){e.state.unbindTexture(),v=r.getBinding();for(let xt=0;xt<me.length;xt++){const wt=me[xt].camera;if(wt){let Lt=S[wt];Lt||(Lt=new FS,S[wt]=Lt);const ht=v.getCameraImage(wt);Lt.sourceTexture=ht}}}}for(let me=0;me<I.length;me++){const Ue=N[me],Be=I[me];Ue!==null&&Be!==void 0&&Be.update(Ue,he,h||c)}ye&&ye(se,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),M=null}const qe=new BS;qe.setAnimationLoop(Pe),this.setAnimationLoop=function(se){ye=se},this.dispose=function(){}}}const Ps=new Tr,TL=new ln;function bL(n,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function r(y,S){S.color.getRGB(y.fogColor.value,kS(n)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,C,P,R){S.isMeshBasicMaterial?a(y,S):S.isMeshLambertMaterial?(a(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(a(y,S),v(y,S)):S.isMeshPhongMaterial?(a(y,S),p(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(a(y,S),g(y,S),S.isMeshPhysicalMaterial&&_(y,S,R)):S.isMeshMatcapMaterial?(a(y,S),M(y,S)):S.isMeshDepthMaterial?a(y,S):S.isMeshDistanceMaterial?(a(y,S),T(y,S)):S.isMeshNormalMaterial?a(y,S):S.isLineBasicMaterial?(c(y,S),S.isLineDashedMaterial&&u(y,S)):S.isPointsMaterial?d(y,S,C,P):S.isSpriteMaterial?h(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function a(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===qn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===qn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const C=e.get(S),P=C.envMap,R=C.envMapRotation;P&&(y.envMap.value=P,Ps.copy(R),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),y.envMapRotation.value.setFromMatrix4(TL.makeRotationFromEuler(Ps)),y.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function c(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function u(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function d(y,S,C,P){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*C,y.scale.value=P*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function v(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function g(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function _(y,S,C){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===qn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,S){S.matcap&&(y.matcap.value=S.matcap)}function T(y,S){const C=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function AL(n,e,t,r){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(C,P){const R=P.program;r.uniformBlockBinding(C,R)}function h(C,P){let R=o[C.id];R===void 0&&(M(C),R=p(C),o[C.id]=R,C.addEventListener("dispose",y));const I=P.program;r.updateUBOMapping(C,I);const N=e.render.frame;a[C.id]!==N&&(g(C),a[C.id]=N)}function p(C){const P=v();C.__bindingPointIndex=P;const R=n.createBuffer(),I=C.__size,N=C.usage;return n.bindBuffer(n.UNIFORM_BUFFER,R),n.bufferData(n.UNIFORM_BUFFER,I,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,P,R),R}function v(){for(let C=0;C<u;C++)if(c.indexOf(C)===-1)return c.push(C),C;return Pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const P=o[C.id],R=C.uniforms,I=C.__cache;n.bindBuffer(n.UNIFORM_BUFFER,P);for(let N=0,O=R.length;N<O;N++){const E=Array.isArray(R[N])?R[N]:[R[N]];for(let D=0,Y=E.length;D<Y;D++){const k=E[D];if(_(k,N,D,I)===!0){const $=k.__offset,J=Array.isArray(k.value)?k.value:[k.value];let oe=0;for(let K=0;K<J.length;K++){const Z=J[K],W=T(Z);typeof Z=="number"||typeof Z=="boolean"?(k.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,$+oe,k.__data)):Z.isMatrix3?(k.__data[0]=Z.elements[0],k.__data[1]=Z.elements[1],k.__data[2]=Z.elements[2],k.__data[3]=0,k.__data[4]=Z.elements[3],k.__data[5]=Z.elements[4],k.__data[6]=Z.elements[5],k.__data[7]=0,k.__data[8]=Z.elements[6],k.__data[9]=Z.elements[7],k.__data[10]=Z.elements[8],k.__data[11]=0):(Z.toArray(k.__data,oe),oe+=W.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,k.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(C,P,R,I){const N=C.value,O=P+"_"+R;if(I[O]===void 0)return typeof N=="number"||typeof N=="boolean"?I[O]=N:I[O]=N.clone(),!0;{const E=I[O];if(typeof N=="number"||typeof N=="boolean"){if(E!==N)return I[O]=N,!0}else if(E.equals(N)===!1)return E.copy(N),!0}return!1}function M(C){const P=C.uniforms;let R=0;const I=16;for(let O=0,E=P.length;O<E;O++){const D=Array.isArray(P[O])?P[O]:[P[O]];for(let Y=0,k=D.length;Y<k;Y++){const $=D[Y],J=Array.isArray($.value)?$.value:[$.value];for(let oe=0,K=J.length;oe<K;oe++){const Z=J[oe],W=T(Z),B=R%I,te=B%W.boundary,le=B+te;R+=te,le!==0&&I-le<W.storage&&(R+=I-le),$.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=R,R+=W.storage}}}const N=R%I;return N>0&&(R+=I-N),C.__size=R,C.__cache={},this}function T(C){const P={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(P.boundary=4,P.storage=4):C.isVector2?(P.boundary=8,P.storage=8):C.isVector3||C.isColor?(P.boundary=16,P.storage=12):C.isVector4?(P.boundary=16,P.storage=16):C.isMatrix3?(P.boundary=48,P.storage=48):C.isMatrix4?(P.boundary=64,P.storage=64):C.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ft("WebGLRenderer: Unsupported uniform value type.",C),P}function y(C){const P=C.target;P.removeEventListener("dispose",y);const R=c.indexOf(P.__bindingPointIndex);c.splice(R,1),n.deleteBuffer(o[P.id]),delete o[P.id],delete a[P.id]}function S(){for(const C in o)n.deleteBuffer(o[C]);c=[],o={},a={}}return{bind:d,update:h,dispose:S}}const CL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function RL(){return Hi===null&&(Hi=new ER(CL,16,16,Vo,Er),Hi.name="DFG_LUT",Hi.minFilter=Pn,Hi.magFilter=Pn,Hi.wrapS=xr,Hi.wrapT=xr,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class PL{constructor(e={}){const{canvas:t=JC(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:_=mi}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const T=_,y=new Set([ym,_m,xm]),S=new Set([mi,Ji,nl,il,gm,vm]),C=new Uint32Array(4),P=new Int32Array(4);let R=null,I=null;const N=[],O=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let Y=!1;this._outputColorSpace=pi;let k=0,$=0,J=null,oe=-1,K=null;const Z=new rn,W=new rn;let B=null;const te=new Ot(0);let le=0,F=t.width,q=t.height,ye=1,Pe=null,qe=null;const se=new rn(0,0,F,q),he=new rn(0,0,F,q);let me=!1;const Ue=new NS;let Be=!1,it=!1;const zt=new ln,xt=new ce,wt=new rn,Lt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Gt(){return J===null?ye:1}let V=r;function Yt(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${pm}`),t.addEventListener("webglcontextlost",Ge,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",Nt,!1),V===null){const X="webgl2";if(V=Yt(X,A),V===null)throw Yt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Pt("WebGLRenderer: "+A.message),A}let yt,Tt,$e,L,w,j,pe,ge,fe,Ve,Ae,Je,at,Me,be,Ke,He,Ie,dt,H,Ce,we,Ne;function Ee(){yt=new P3(V),yt.init(),Ce=new yL(V,yt),Tt=new M3(V,yt,e,Ce),$e=new xL(V,yt),Tt.reversedDepthBuffer&&g&&$e.buffers.depth.setReversed(!0),L=new I3(V),w=new rL,j=new _L(V,yt,$e,w,Tt,Ce,L),pe=new R3(D),ge=new OR(V),we=new y3(V,ge),fe=new D3(V,ge,L,we),Ve=new U3(V,fe,ge,we,L),Ie=new N3(V,Tt,j),be=new E3(w),Ae=new iL(D,pe,yt,Tt,we,be),Je=new bL(D,w),at=new oL,Me=new dL(yt),He=new _3(D,pe,$e,Ve,M,d),Ke=new vL(D,Ve,Tt),Ne=new AL(V,L,Tt,$e),dt=new S3(V,yt,L),H=new L3(V,yt,L),L.programs=Ae.programs,D.capabilities=Tt,D.extensions=yt,D.properties=w,D.renderLists=at,D.shadowMap=Ke,D.state=$e,D.info=L}Ee(),T!==mi&&(E=new k3(T,t.width,t.height,o,a));const de=new wL(D,V);this.xr=de,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=yt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=yt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(A){A!==void 0&&(ye=A,this.setSize(F,q,!1))},this.getSize=function(A){return A.set(F,q)},this.setSize=function(A,X,ue=!0){if(de.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}F=A,q=X,t.width=Math.floor(A*ye),t.height=Math.floor(X*ye),ue===!0&&(t.style.width=A+"px",t.style.height=X+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(F*ye,q*ye).floor()},this.setDrawingBufferSize=function(A,X,ue){F=A,q=X,ye=ue,t.width=Math.floor(A*ue),t.height=Math.floor(X*ue),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(T===mi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Z)},this.getViewport=function(A){return A.copy(se)},this.setViewport=function(A,X,ue,re){A.isVector4?se.set(A.x,A.y,A.z,A.w):se.set(A,X,ue,re),$e.viewport(Z.copy(se).multiplyScalar(ye).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,X,ue,re){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,X,ue,re),$e.scissor(W.copy(he).multiplyScalar(ye).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(A){$e.setScissorTest(me=A)},this.setOpaqueSort=function(A){Pe=A},this.setTransparentSort=function(A){qe=A},this.getClearColor=function(A){return A.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,ue=!0){let re=0;if(A){let ne=!1;if(J!==null){const De=J.texture.format;ne=y.has(De)}if(ne){const De=J.texture.type,Oe=S.has(De),Re=He.getClearColor(),Fe=He.getClearAlpha(),tt=Re.r,rt=Re.g,pt=Re.b;Oe?(C[0]=tt,C[1]=rt,C[2]=pt,C[3]=Fe,V.clearBufferuiv(V.COLOR,0,C)):(P[0]=tt,P[1]=rt,P[2]=pt,P[3]=Fe,V.clearBufferiv(V.COLOR,0,P))}else re|=V.COLOR_BUFFER_BIT}X&&(re|=V.DEPTH_BUFFER_BIT),ue&&(re|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&V.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ge,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",Nt,!1),He.dispose(),at.dispose(),Me.dispose(),w.dispose(),pe.dispose(),Ve.dispose(),we.dispose(),Ne.dispose(),Ae.dispose(),de.dispose(),de.removeEventListener("sessionstart",Ar),de.removeEventListener("sessionend",cs),si.stop()};function Ge(A){A.preventDefault(),Rx("WebGLRenderer: Context Lost."),Y=!0}function lt(){Rx("WebGLRenderer: Context Restored."),Y=!1;const A=L.autoReset,X=Ke.enabled,ue=Ke.autoUpdate,re=Ke.needsUpdate,ne=Ke.type;Ee(),L.autoReset=A,Ke.enabled=X,Ke.autoUpdate=ue,Ke.needsUpdate=re,Ke.type=ne}function Nt(A){Pt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function bt(A){const X=A.target;X.removeEventListener("dispose",bt),ri(X)}function ri(A){Dn(A),w.remove(A)}function Dn(A){const X=w.get(A).programs;X!==void 0&&(X.forEach(function(ue){Ae.releaseProgram(ue)}),A.isShaderMaterial&&Ae.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,ue,re,ne,De){X===null&&(X=Lt);const Oe=ne.isMesh&&ne.matrixWorld.determinant()<0,Re=vl(A,X,ue,re,ne);$e.setMaterial(re,Oe);let Fe=ue.index,tt=1;if(re.wireframe===!0){if(Fe=fe.getWireframeAttribute(ue),Fe===void 0)return;tt=2}const rt=ue.drawRange,pt=ue.attributes.position;let nt=rt.start*tt,It=(rt.start+rt.count)*tt;De!==null&&(nt=Math.max(nt,De.start*tt),It=Math.min(It,(De.start+De.count)*tt)),Fe!==null?(nt=Math.max(nt,0),It=Math.min(It,Fe.count)):pt!=null&&(nt=Math.max(nt,0),It=Math.min(It,pt.count));const Vt=It-nt;if(Vt<0||Vt===1/0)return;we.setup(ne,re,Re,ue,Fe);let Bt,Et=dt;if(Fe!==null&&(Bt=ge.get(Fe),Et=H,Et.setIndex(Bt)),ne.isMesh)re.wireframe===!0?($e.setLineWidth(re.wireframeLinewidth*Gt()),Et.setMode(V.LINES)):Et.setMode(V.TRIANGLES);else if(ne.isLine){let en=re.linewidth;en===void 0&&(en=1),$e.setLineWidth(en*Gt()),ne.isLineSegments?Et.setMode(V.LINES):ne.isLineLoop?Et.setMode(V.LINE_LOOP):Et.setMode(V.LINE_STRIP)}else ne.isPoints?Et.setMode(V.POINTS):ne.isSprite&&Et.setMode(V.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)bu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Et.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Et.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const en=ne._multiDrawStarts,Qe=ne._multiDrawCounts,Ln=ne._multiDrawCount,St=Fe?ge.get(Fe).bytesPerElement:1,Bn=w.get(re).currentProgram.getUniforms();for(let zn=0;zn<Ln;zn++)Bn.setValue(V,"_gl_DrawID",zn),Et.render(en[zn]/St,Qe[zn])}else if(ne.isInstancedMesh)Et.renderInstances(nt,Vt,ne.count);else if(ue.isInstancedBufferGeometry){const en=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Qe=Math.min(ue.instanceCount,en);Et.renderInstances(nt,Vt,Qe)}else Et.render(nt,Vt)};function Xs(A,X,ue){A.transparent===!0&&A.side===vr&&A.forceSinglePass===!1?(A.side=qn,A.needsUpdate=!0,fs(A,X,ue),A.side=as,A.needsUpdate=!0,fs(A,X,ue),A.side=vr):fs(A,X,ue)}this.compile=function(A,X,ue=null){ue===null&&(ue=A),I=Me.get(ue),I.init(X),O.push(I),ue.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(I.pushLight(ne),ne.castShadow&&I.pushShadow(ne))}),A!==ue&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(I.pushLight(ne),ne.castShadow&&I.pushShadow(ne))}),I.setupLights();const re=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const De=ne.material;if(De)if(Array.isArray(De))for(let Oe=0;Oe<De.length;Oe++){const Re=De[Oe];Xs(Re,ue,ne),re.add(Re)}else Xs(De,ue,ne),re.add(De)}),I=O.pop(),re},this.compileAsync=function(A,X,ue=null){const re=this.compile(A,X,ue);return new Promise(ne=>{function De(){if(re.forEach(function(Oe){w.get(Oe).currentProgram.isReady()&&re.delete(Oe)}),re.size===0){ne(A);return}setTimeout(De,10)}yt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let tr=null;function ku(A){tr&&tr(A)}function Ar(){si.stop()}function cs(){si.start()}const si=new BS;si.setAnimationLoop(ku),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(A){tr=A,de.setAnimationLoop(A),A===null?si.stop():si.start()},de.addEventListener("sessionstart",Ar),de.addEventListener("sessionend",cs),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){Pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;const ue=de.enabled===!0&&de.isPresenting===!0,re=E!==null&&(J===null||ue)&&E.begin(D,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(X),X=de.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,X,J),I=Me.get(A,O.length),I.init(X),O.push(I),zt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ue.setFromProjectionMatrix(zt,Yi,X.reversedDepth),it=this.localClippingEnabled,Be=be.init(this.clippingPlanes,it),R=at.get(A,N.length),R.init(),N.push(R),de.enabled===!0&&de.isPresenting===!0){const Oe=D.xr.getDepthSensingMesh();Oe!==null&&us(Oe,X,-1/0,D.sortObjects)}us(A,X,0,D.sortObjects),R.finish(),D.sortObjects===!0&&R.sort(Pe,qe),ht=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ht&&He.addToRenderList(R,A),this.info.render.frame++,Be===!0&&be.beginShadows();const ne=I.state.shadowsArray;if(Ke.render(ne,A,X),Be===!0&&be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&E.hasRenderPass())===!1){const Oe=R.opaque,Re=R.transmissive;if(I.setupLights(),X.isArrayCamera){const Fe=X.cameras;if(Re.length>0)for(let tt=0,rt=Fe.length;tt<rt;tt++){const pt=Fe[tt];ml(Oe,Re,A,pt)}ht&&He.render(A);for(let tt=0,rt=Fe.length;tt<rt;tt++){const pt=Fe[tt];pl(R,A,pt,pt.viewport)}}else Re.length>0&&ml(Oe,Re,A,X),ht&&He.render(A),pl(R,A,X)}J!==null&&$===0&&(j.updateMultisampleRenderTarget(J),j.updateRenderTargetMipmap(J)),re&&E.end(D),A.isScene===!0&&A.onAfterRender(D,A,X),we.resetDefaultState(),oe=-1,K=null,O.pop(),O.length>0?(I=O[O.length-1],Be===!0&&be.setGlobalState(D.clippingPlanes,I.state.camera)):I=null,N.pop(),N.length>0?R=N[N.length-1]:R=null};function us(A,X,ue,re){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)ue=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ue.intersectsSprite(A)){re&&wt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(zt);const Oe=Ve.update(A),Re=A.material;Re.visible&&R.push(A,Oe,Re,ue,wt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ue.intersectsObject(A))){const Oe=Ve.update(A),Re=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),wt.copy(A.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),wt.copy(Oe.boundingSphere.center)),wt.applyMatrix4(A.matrixWorld).applyMatrix4(zt)),Array.isArray(Re)){const Fe=Oe.groups;for(let tt=0,rt=Fe.length;tt<rt;tt++){const pt=Fe[tt],nt=Re[pt.materialIndex];nt&&nt.visible&&R.push(A,Oe,nt,ue,wt.z,pt)}}else Re.visible&&R.push(A,Oe,Re,ue,wt.z,null)}}const De=A.children;for(let Oe=0,Re=De.length;Oe<Re;Oe++)us(De[Oe],X,ue,re)}function pl(A,X,ue,re){const{opaque:ne,transmissive:De,transparent:Oe}=A;I.setupLightsView(ue),Be===!0&&be.setGlobalState(D.clippingPlanes,ue),re&&$e.viewport(Z.copy(re)),ne.length>0&&Ys(ne,X,ue),De.length>0&&Ys(De,X,ue),Oe.length>0&&Ys(Oe,X,ue),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function ml(A,X,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[re.id]===void 0){const nt=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[re.id]=new Ki(1,1,{generateMipmaps:!0,type:nt?Er:mi,minFilter:Bs,samples:Math.max(4,Tt.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const De=I.state.transmissionRenderTarget[re.id],Oe=re.viewport||Z;De.setSize(Oe.z*D.transmissionResolutionScale,Oe.w*D.transmissionResolutionScale);const Re=D.getRenderTarget(),Fe=D.getActiveCubeFace(),tt=D.getActiveMipmapLevel();D.setRenderTarget(De),D.getClearColor(te),le=D.getClearAlpha(),le<1&&D.setClearColor(16777215,.5),D.clear(),ht&&He.render(ue);const rt=D.toneMapping;D.toneMapping=$i;const pt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),I.setupLightsView(re),Be===!0&&be.setGlobalState(D.clippingPlanes,re),Ys(A,ue,re),j.updateMultisampleRenderTarget(De),j.updateRenderTargetMipmap(De),yt.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let It=0,Vt=X.length;It<Vt;It++){const Bt=X[It],{object:Et,geometry:en,material:Qe,group:Ln}=Bt;if(Qe.side===vr&&Et.layers.test(re.layers)){const St=Qe.side;Qe.side=qn,Qe.needsUpdate=!0,Fi(Et,ue,re,en,Qe,Ln),Qe.side=St,Qe.needsUpdate=!0,nt=!0}}nt===!0&&(j.updateMultisampleRenderTarget(De),j.updateRenderTargetMipmap(De))}D.setRenderTarget(Re,Fe,tt),D.setClearColor(te,le),pt!==void 0&&(re.viewport=pt),D.toneMapping=rt}function Ys(A,X,ue){const re=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,De=A.length;ne<De;ne++){const Oe=A[ne],{object:Re,geometry:Fe,group:tt}=Oe;let rt=Oe.material;rt.allowOverride===!0&&re!==null&&(rt=re),Re.layers.test(ue.layers)&&Fi(Re,X,ue,Fe,rt,tt)}}function Fi(A,X,ue,re,ne,De){A.onBeforeRender(D,X,ue,re,ne,De),A.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(D,X,ue,re,A,De),ne.transparent===!0&&ne.side===vr&&ne.forceSinglePass===!1?(ne.side=qn,ne.needsUpdate=!0,D.renderBufferDirect(ue,X,re,ne,A,De),ne.side=as,ne.needsUpdate=!0,D.renderBufferDirect(ue,X,re,ne,A,De),ne.side=vr):D.renderBufferDirect(ue,X,re,ne,A,De),A.onAfterRender(D,X,ue,re,ne,De)}function fs(A,X,ue){X.isScene!==!0&&(X=Lt);const re=w.get(A),ne=I.state.lights,De=I.state.shadowsArray,Oe=ne.state.version,Re=Ae.getParameters(A,ne.state,De,X,ue),Fe=Ae.getProgramCacheKey(Re);let tt=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,re.fog=X.fog;const rt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=pe.get(A.envMap||re.environment,rt),re.envMapRotation=re.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,tt===void 0&&(A.addEventListener("dispose",bt),tt=new Map,re.programs=tt);let pt=tt.get(Fe);if(pt!==void 0){if(re.currentProgram===pt&&re.lightsStateVersion===Oe)return gl(A,Re),pt}else Re.uniforms=Ae.getUniforms(A),A.onBeforeCompile(Re,D),pt=Ae.acquireProgram(Re,Fe),tt.set(Fe,pt),re.uniforms=Re.uniforms;const nt=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(nt.clippingPlanes=be.uniform),gl(A,Re),re.needsLights=_l(A),re.lightsStateVersion=Oe,re.needsLights&&(nt.ambientLightColor.value=ne.state.ambient,nt.lightProbe.value=ne.state.probe,nt.directionalLights.value=ne.state.directional,nt.directionalLightShadows.value=ne.state.directionalShadow,nt.spotLights.value=ne.state.spot,nt.spotLightShadows.value=ne.state.spotShadow,nt.rectAreaLights.value=ne.state.rectArea,nt.ltc_1.value=ne.state.rectAreaLTC1,nt.ltc_2.value=ne.state.rectAreaLTC2,nt.pointLights.value=ne.state.point,nt.pointLightShadows.value=ne.state.pointShadow,nt.hemisphereLights.value=ne.state.hemi,nt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,nt.spotLightMatrix.value=ne.state.spotLightMatrix,nt.spotLightMap.value=ne.state.spotLightMap,nt.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.currentProgram=pt,re.uniformsList=null,pt}function Qo(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=hu.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function gl(A,X){const ue=w.get(A);ue.outputColorSpace=X.outputColorSpace,ue.batching=X.batching,ue.batchingColor=X.batchingColor,ue.instancing=X.instancing,ue.instancingColor=X.instancingColor,ue.instancingMorph=X.instancingMorph,ue.skinning=X.skinning,ue.morphTargets=X.morphTargets,ue.morphNormals=X.morphNormals,ue.morphColors=X.morphColors,ue.morphTargetsCount=X.morphTargetsCount,ue.numClippingPlanes=X.numClippingPlanes,ue.numIntersection=X.numClipIntersection,ue.vertexAlphas=X.vertexAlphas,ue.vertexTangents=X.vertexTangents,ue.toneMapping=X.toneMapping}function vl(A,X,ue,re,ne){X.isScene!==!0&&(X=Lt),j.resetTextureUnits();const De=X.fog,Oe=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?X.environment:null,Re=J===null?D.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ho,Fe=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,tt=pe.get(re.envMap||Oe,Fe),rt=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pt=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),nt=!!ue.morphAttributes.position,It=!!ue.morphAttributes.normal,Vt=!!ue.morphAttributes.color;let Bt=$i;re.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Bt=D.toneMapping);const Et=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,en=Et!==void 0?Et.length:0,Qe=w.get(re),Ln=I.state.lights;if(Be===!0&&(it===!0||A!==K)){const tn=A===K&&re.id===oe;be.setState(re,A,tn)}let St=!1;re.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Ln.state.version||Qe.outputColorSpace!==Re||ne.isBatchedMesh&&Qe.batching===!1||!ne.isBatchedMesh&&Qe.batching===!0||ne.isBatchedMesh&&Qe.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Qe.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Qe.instancing===!1||!ne.isInstancedMesh&&Qe.instancing===!0||ne.isSkinnedMesh&&Qe.skinning===!1||!ne.isSkinnedMesh&&Qe.skinning===!0||ne.isInstancedMesh&&Qe.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Qe.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Qe.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Qe.instancingMorph===!1&&ne.morphTexture!==null||Qe.envMap!==tt||re.fog===!0&&Qe.fog!==De||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==be.numPlanes||Qe.numIntersection!==be.numIntersection)||Qe.vertexAlphas!==rt||Qe.vertexTangents!==pt||Qe.morphTargets!==nt||Qe.morphNormals!==It||Qe.morphColors!==Vt||Qe.toneMapping!==Bt||Qe.morphTargetsCount!==en)&&(St=!0):(St=!0,Qe.__version=re.version);let Bn=Qe.currentProgram;St===!0&&(Bn=fs(re,X,ne));let zn=!1,$n=!1,Cr=!1;const Dt=Bn.getUniforms(),ct=Qe.uniforms;if($e.useProgram(Bn.program)&&(zn=!0,$n=!0,Cr=!0),re.id!==oe&&(oe=re.id,$n=!0),zn||K!==A){$e.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Dt.setValue(V,"projectionMatrix",A.projectionMatrix),Dt.setValue(V,"viewMatrix",A.matrixWorldInverse);const oi=Dt.map.cameraPosition;oi!==void 0&&oi.setValue(V,xt.setFromMatrixPosition(A.matrixWorld)),Tt.logarithmicDepthBuffer&&Dt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Dt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),K!==A&&(K=A,$n=!0,Cr=!0)}if(Qe.needsLights&&(Ln.state.directionalShadowMap.length>0&&Dt.setValue(V,"directionalShadowMap",Ln.state.directionalShadowMap,j),Ln.state.spotShadowMap.length>0&&Dt.setValue(V,"spotShadowMap",Ln.state.spotShadowMap,j),Ln.state.pointShadowMap.length>0&&Dt.setValue(V,"pointShadowMap",Ln.state.pointShadowMap,j)),ne.isSkinnedMesh){Dt.setOptional(V,ne,"bindMatrix"),Dt.setOptional(V,ne,"bindMatrixInverse");const tn=ne.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Dt.setValue(V,"boneTexture",tn.boneTexture,j))}ne.isBatchedMesh&&(Dt.setOptional(V,ne,"batchingTexture"),Dt.setValue(V,"batchingTexture",ne._matricesTexture,j),Dt.setOptional(V,ne,"batchingIdTexture"),Dt.setValue(V,"batchingIdTexture",ne._indirectTexture,j),Dt.setOptional(V,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Dt.setValue(V,"batchingColorTexture",ne._colorsTexture,j));const xi=ue.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&Ie.update(ne,ue,Bn),($n||Qe.receiveShadow!==ne.receiveShadow)&&(Qe.receiveShadow=ne.receiveShadow,Dt.setValue(V,"receiveShadow",ne.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&X.environment!==null&&(ct.envMapIntensity.value=X.environmentIntensity),ct.dfgLUT!==void 0&&(ct.dfgLUT.value=RL()),$n&&(Dt.setValue(V,"toneMappingExposure",D.toneMappingExposure),Qe.needsLights&&xl(ct,Cr),De&&re.fog===!0&&Je.refreshFogUniforms(ct,De),Je.refreshMaterialUniforms(ct,re,ye,q,I.state.transmissionRenderTarget[A.id]),hu.upload(V,Qo(Qe),ct,j)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(hu.upload(V,Qo(Qe),ct,j),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Dt.setValue(V,"center",ne.center),Dt.setValue(V,"modelViewMatrix",ne.modelViewMatrix),Dt.setValue(V,"normalMatrix",ne.normalMatrix),Dt.setValue(V,"modelMatrix",ne.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const tn=re.uniformsGroups;for(let oi=0,nr=tn.length;oi<nr;oi++){const Jo=tn[oi];Ne.update(Jo,Bn),Ne.bind(Jo,Bn)}}return Bn}function xl(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function _l(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,X,ue){const re=w.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),w.get(A.texture).__webglTexture=X,w.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ue,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const ue=w.get(A);ue.__webglFramebuffer=X,ue.__useDefaultFramebuffer=X===void 0};const yl=V.createFramebuffer();this.setRenderTarget=function(A,X=0,ue=0){J=A,k=X,$=ue;let re=null,ne=!1,De=!1;if(A){const Re=w.get(A);if(Re.__useDefaultFramebuffer!==void 0){$e.bindFramebuffer(V.FRAMEBUFFER,Re.__webglFramebuffer),Z.copy(A.viewport),W.copy(A.scissor),B=A.scissorTest,$e.viewport(Z),$e.scissor(W),$e.setScissorTest(B),oe=-1;return}else if(Re.__webglFramebuffer===void 0)j.setupRenderTarget(A);else if(Re.__hasExternalTextures)j.rebindTextures(A,w.get(A.texture).__webglTexture,w.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const rt=A.depthTexture;if(Re.__boundDepthTexture!==rt){if(rt!==null&&w.has(rt)&&(A.width!==rt.image.width||A.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");j.setupDepthRenderbuffer(A)}}const Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(De=!0);const tt=w.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?re=tt[X][ue]:re=tt[X],ne=!0):A.samples>0&&j.useMultisampledRTT(A)===!1?re=w.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?re=tt[ue]:re=tt,Z.copy(A.viewport),W.copy(A.scissor),B=A.scissorTest}else Z.copy(se).multiplyScalar(ye).floor(),W.copy(he).multiplyScalar(ye).floor(),B=me;if(ue!==0&&(re=yl),$e.bindFramebuffer(V.FRAMEBUFFER,re)&&$e.drawBuffers(A,re),$e.viewport(Z),$e.scissor(W),$e.setScissorTest(B),ne){const Re=w.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Re.__webglTexture,ue)}else if(De){const Re=X;for(let Fe=0;Fe<A.textures.length;Fe++){const tt=w.get(A.textures[Fe]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+Fe,tt.__webglTexture,ue,Re)}}else if(A!==null&&ue!==0){const Re=w.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Re.__webglTexture,ue)}oe=-1},this.readRenderTargetPixels=function(A,X,ue,re,ne,De,Oe,Re=0){if(!(A&&A.isWebGLRenderTarget)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(Fe=Fe[Oe]),Fe){$e.bindFramebuffer(V.FRAMEBUFFER,Fe);try{const tt=A.textures[Re],rt=tt.format,pt=tt.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Re),!Tt.textureFormatReadable(rt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Tt.textureTypeReadable(pt)){Pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-re&&ue>=0&&ue<=A.height-ne&&V.readPixels(X,ue,re,ne,Ce.convert(rt),Ce.convert(pt),De)}finally{const tt=J!==null?w.get(J).__webglFramebuffer:null;$e.bindFramebuffer(V.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(A,X,ue,re,ne,De,Oe,Re=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=w.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Oe!==void 0&&(Fe=Fe[Oe]),Fe)if(X>=0&&X<=A.width-re&&ue>=0&&ue<=A.height-ne){$e.bindFramebuffer(V.FRAMEBUFFER,Fe);const tt=A.textures[Re],rt=tt.format,pt=tt.type;if(A.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Re),!Tt.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Tt.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,nt),V.bufferData(V.PIXEL_PACK_BUFFER,De.byteLength,V.STREAM_READ),V.readPixels(X,ue,re,ne,Ce.convert(rt),Ce.convert(pt),0);const It=J!==null?w.get(J).__webglFramebuffer:null;$e.bindFramebuffer(V.FRAMEBUFFER,It);const Vt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await eR(V,Vt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,nt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,De),V.deleteBuffer(nt),V.deleteSync(Vt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,ue=0){const re=Math.pow(2,-ue),ne=Math.floor(A.image.width*re),De=Math.floor(A.image.height*re),Oe=X!==null?X.x:0,Re=X!==null?X.y:0;j.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,ue,0,0,Oe,Re,ne,De),$e.unbindTexture()};const Ou=V.createFramebuffer(),Bu=V.createFramebuffer();this.copyTextureToTexture=function(A,X,ue=null,re=null,ne=0,De=0){let Oe,Re,Fe,tt,rt,pt,nt,It,Vt;const Bt=A.isCompressedTexture?A.mipmaps[De]:A.image;if(ue!==null)Oe=ue.max.x-ue.min.x,Re=ue.max.y-ue.min.y,Fe=ue.isBox3?ue.max.z-ue.min.z:1,tt=ue.min.x,rt=ue.min.y,pt=ue.isBox3?ue.min.z:0;else{const ct=Math.pow(2,-ne);Oe=Math.floor(Bt.width*ct),Re=Math.floor(Bt.height*ct),A.isDataArrayTexture?Fe=Bt.depth:A.isData3DTexture?Fe=Math.floor(Bt.depth*ct):Fe=1,tt=0,rt=0,pt=0}re!==null?(nt=re.x,It=re.y,Vt=re.z):(nt=0,It=0,Vt=0);const Et=Ce.convert(X.format),en=Ce.convert(X.type);let Qe;X.isData3DTexture?(j.setTexture3D(X,0),Qe=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(j.setTexture2DArray(X,0),Qe=V.TEXTURE_2D_ARRAY):(j.setTexture2D(X,0),Qe=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const Ln=V.getParameter(V.UNPACK_ROW_LENGTH),St=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Bn=V.getParameter(V.UNPACK_SKIP_PIXELS),zn=V.getParameter(V.UNPACK_SKIP_ROWS),$n=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Bt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Bt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,tt),V.pixelStorei(V.UNPACK_SKIP_ROWS,rt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,pt);const Cr=A.isDataArrayTexture||A.isData3DTexture,Dt=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const ct=w.get(A),xi=w.get(X),tn=w.get(ct.__renderTarget),oi=w.get(xi.__renderTarget);$e.bindFramebuffer(V.READ_FRAMEBUFFER,tn.__webglFramebuffer),$e.bindFramebuffer(V.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let nr=0;nr<Fe;nr++)Cr&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,w.get(A).__webglTexture,ne,pt+nr),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,w.get(X).__webglTexture,De,Vt+nr)),V.blitFramebuffer(tt,rt,Oe,Re,nt,It,Oe,Re,V.DEPTH_BUFFER_BIT,V.NEAREST);$e.bindFramebuffer(V.READ_FRAMEBUFFER,null),$e.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||w.has(A)){const ct=w.get(A),xi=w.get(X);$e.bindFramebuffer(V.READ_FRAMEBUFFER,Ou),$e.bindFramebuffer(V.DRAW_FRAMEBUFFER,Bu);for(let tn=0;tn<Fe;tn++)Cr?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,ct.__webglTexture,ne,pt+tn):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ct.__webglTexture,ne),Dt?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,xi.__webglTexture,De,Vt+tn):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,xi.__webglTexture,De),ne!==0?V.blitFramebuffer(tt,rt,Oe,Re,nt,It,Oe,Re,V.COLOR_BUFFER_BIT,V.NEAREST):Dt?V.copyTexSubImage3D(Qe,De,nt,It,Vt+tn,tt,rt,Oe,Re):V.copyTexSubImage2D(Qe,De,nt,It,tt,rt,Oe,Re);$e.bindFramebuffer(V.READ_FRAMEBUFFER,null),$e.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Dt?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Qe,De,nt,It,Vt,Oe,Re,Fe,Et,en,Bt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Qe,De,nt,It,Vt,Oe,Re,Fe,Et,Bt.data):V.texSubImage3D(Qe,De,nt,It,Vt,Oe,Re,Fe,Et,en,Bt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,De,nt,It,Oe,Re,Et,en,Bt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,De,nt,It,Bt.width,Bt.height,Et,Bt.data):V.texSubImage2D(V.TEXTURE_2D,De,nt,It,Oe,Re,Et,en,Bt);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ln),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,St),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Bn),V.pixelStorei(V.UNPACK_SKIP_ROWS,zn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,$n),De===0&&X.generateMipmaps&&V.generateMipmap(Qe),$e.unbindTexture()},this.initRenderTarget=function(A){w.get(A).__webglFramebuffer===void 0&&j.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?j.setTextureCube(A,0):A.isData3DTexture?j.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?j.setTexture2DArray(A,0):j.setTexture2D(A,0),$e.unbindTexture()},this.resetState=function(){k=0,$=0,J=null,$e.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}function DL(){const n=_e.useRef(null),e=_e.useRef(null);return _e.useEffect(()=>{if(!n.current)return;const t=n.current,r=`
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `,o=`
      #define TWO_PI 6.2831853072
      #define PI 3.14159265359

      precision highp float;
      uniform vec2 resolution;
      uniform float time;

      void main(void) {
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
        float t = time*0.05;
        float lineWidth = 0.002;
        float len = length(uv);
        float wave = mod(uv.x+uv.y, 0.2);

        float r = 0.0;
        float g = 0.0;
        float b = 0.0;

        for(int i = 0; i < 5; i++){
          float fi = float(i);
          float ii = fi * fi;
          float offset = fi * 0.01;
          r += lineWidth * ii / abs(fract(t + offset) * 5.0 - len + wave);
          g += lineWidth * ii / abs(fract(t - 0.01 + offset) * 5.0 - len + wave);
          b += lineWidth * ii / abs(fract(t - 0.02 + offset) * 5.0 - len + wave);
        }

        gl_FragColor = vec4(r, g, b, 1.0);
      }
    `,a=new Tm;a.position.z=1;const c=new gR,u=new hl(2,2),d={time:{type:"f",value:1},resolution:{type:"v2",value:new kt}},h=new Ni({uniforms:d,vertexShader:r,fragmentShader:o}),p=new er(u,h);c.add(p);const v=new PL({antialias:!0});v.setPixelRatio(window.devicePixelRatio),t.appendChild(v.domElement);const g=()=>{const M=t.clientWidth,T=t.clientHeight;v.setSize(M,T),d.resolution.value.x=v.domElement.width,d.resolution.value.y=v.domElement.height};g(),window.addEventListener("resize",g,!1);const _=()=>{const M=requestAnimationFrame(_);d.time.value+=.05,v.render(c,a),e.current&&(e.current.animationId=M)};return e.current={camera:a,scene:c,renderer:v,uniforms:d,animationId:0},_(),()=>{if(window.removeEventListener("resize",g),e.current){if(cancelAnimationFrame(e.current.animationId),t&&e.current.renderer.domElement)try{t.removeChild(e.current.renderer.domElement)}catch{}e.current.renderer.dispose(),u.dispose(),h.dispose()}}},[]),Q.jsx("div",{ref:n,className:"absolute inset-0 w-full h-full",style:{background:"#000",overflow:"hidden"}})}function jS(n){var e,t,r="";if(typeof n=="string"||typeof n=="number")r+=n;else if(typeof n=="object")if(Array.isArray(n)){var o=n.length;for(e=0;e<o;e++)n[e]&&(t=jS(n[e]))&&(r&&(r+=" "),r+=t)}else for(t in n)n[t]&&(r&&(r+=" "),r+=t);return r}function LL(){for(var n,e,t=0,r="",o=arguments.length;t<o;t++)(n=arguments[t])&&(e=jS(n))&&(r&&(r+=" "),r+=e);return r}const bm="-",IL=n=>{const e=UL(n),{conflictingClassGroups:t,conflictingClassGroupModifiers:r}=n;return{getClassGroupId:c=>{const u=c.split(bm);return u[0]===""&&u.length!==1&&u.shift(),XS(u,e)||NL(c)},getConflictingClassGroupIds:(c,u)=>{const d=t[c]||[];return u&&r[c]?[...d,...r[c]]:d}}},XS=(n,e)=>{var c;if(n.length===0)return e.classGroupId;const t=n[0],r=e.nextPart.get(t),o=r?XS(n.slice(1),r):void 0;if(o)return o;if(e.validators.length===0)return;const a=n.join(bm);return(c=e.validators.find(({validator:u})=>u(a)))==null?void 0:c.classGroupId},g_=/^\[(.+)\]$/,NL=n=>{if(g_.test(n)){const e=g_.exec(n)[1],t=e==null?void 0:e.substring(0,e.indexOf(":"));if(t)return"arbitrary.."+t}},UL=n=>{const{theme:e,classGroups:t}=n,r={nextPart:new Map,validators:[]};for(const o in t)Fp(t[o],r,o,e);return r},Fp=(n,e,t,r)=>{n.forEach(o=>{if(typeof o=="string"){const a=o===""?e:v_(e,o);a.classGroupId=t;return}if(typeof o=="function"){if(FL(o)){Fp(o(r),e,t,r);return}e.validators.push({validator:o,classGroupId:t});return}Object.entries(o).forEach(([a,c])=>{Fp(c,v_(e,a),t,r)})})},v_=(n,e)=>{let t=n;return e.split(bm).forEach(r=>{t.nextPart.has(r)||t.nextPart.set(r,{nextPart:new Map,validators:[]}),t=t.nextPart.get(r)}),t},FL=n=>n.isThemeGetter,kL=n=>{if(n<1)return{get:()=>{},set:()=>{}};let e=0,t=new Map,r=new Map;const o=(a,c)=>{t.set(a,c),e++,e>n&&(e=0,r=t,t=new Map)};return{get(a){let c=t.get(a);if(c!==void 0)return c;if((c=r.get(a))!==void 0)return o(a,c),c},set(a,c){t.has(a)?t.set(a,c):o(a,c)}}},kp="!",Op=":",OL=Op.length,BL=n=>{const{prefix:e,experimentalParseClassName:t}=n;let r=o=>{const a=[];let c=0,u=0,d=0,h;for(let M=0;M<o.length;M++){let T=o[M];if(c===0&&u===0){if(T===Op){a.push(o.slice(d,M)),d=M+OL;continue}if(T==="/"){h=M;continue}}T==="["?c++:T==="]"?c--:T==="("?u++:T===")"&&u--}const p=a.length===0?o:o.substring(d),v=zL(p),g=v!==p,_=h&&h>d?h-d:void 0;return{modifiers:a,hasImportantModifier:g,baseClassName:v,maybePostfixModifierPosition:_}};if(e){const o=e+Op,a=r;r=c=>c.startsWith(o)?a(c.substring(o.length)):{isExternal:!0,modifiers:[],hasImportantModifier:!1,baseClassName:c,maybePostfixModifierPosition:void 0}}if(t){const o=r;r=a=>t({className:a,parseClassName:o})}return r},zL=n=>n.endsWith(kp)?n.substring(0,n.length-1):n.startsWith(kp)?n.substring(1):n,VL=n=>{const e=Object.fromEntries(n.orderSensitiveModifiers.map(r=>[r,!0]));return r=>{if(r.length<=1)return r;const o=[];let a=[];return r.forEach(c=>{c[0]==="["||e[c]?(o.push(...a.sort(),c),a=[]):a.push(c)}),o.push(...a.sort()),o}},HL=n=>({cache:kL(n.cacheSize),parseClassName:BL(n),sortModifiers:VL(n),...IL(n)}),GL=/\s+/,WL=(n,e)=>{const{parseClassName:t,getClassGroupId:r,getConflictingClassGroupIds:o,sortModifiers:a}=e,c=[],u=n.trim().split(GL);let d="";for(let h=u.length-1;h>=0;h-=1){const p=u[h],{isExternal:v,modifiers:g,hasImportantModifier:_,baseClassName:M,maybePostfixModifierPosition:T}=t(p);if(v){d=p+(d.length>0?" "+d:d);continue}let y=!!T,S=r(y?M.substring(0,T):M);if(!S){if(!y){d=p+(d.length>0?" "+d:d);continue}if(S=r(M),!S){d=p+(d.length>0?" "+d:d);continue}y=!1}const C=a(g).join(":"),P=_?C+kp:C,R=P+S;if(c.includes(R))continue;c.push(R);const I=o(S,y);for(let N=0;N<I.length;++N){const O=I[N];c.push(P+O)}d=p+(d.length>0?" "+d:d)}return d};function jL(){let n=0,e,t,r="";for(;n<arguments.length;)(e=arguments[n++])&&(t=YS(e))&&(r&&(r+=" "),r+=t);return r}const YS=n=>{if(typeof n=="string")return n;let e,t="";for(let r=0;r<n.length;r++)n[r]&&(e=YS(n[r]))&&(t&&(t+=" "),t+=e);return t};function XL(n,...e){let t,r,o,a=c;function c(d){const h=e.reduce((p,v)=>v(p),n());return t=HL(h),r=t.cache.get,o=t.cache.set,a=u,u(d)}function u(d){const h=r(d);if(h)return h;const p=WL(d,t);return o(d,p),p}return function(){return a(jL.apply(null,arguments))}}const fn=n=>{const e=t=>t[n]||[];return e.isThemeGetter=!0,e},qS=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,$S=/^\((?:(\w[\w-]*):)?(.+)\)$/i,YL=/^\d+\/\d+$/,qL=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,$L=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,KL=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ZL=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,QL=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Do=n=>YL.test(n),vt=n=>!!n&&!Number.isNaN(Number(n)),es=n=>!!n&&Number.isInteger(Number(n)),vh=n=>n.endsWith("%")&&vt(n.slice(0,-1)),gr=n=>qL.test(n),JL=()=>!0,eI=n=>$L.test(n)&&!KL.test(n),KS=()=>!1,tI=n=>ZL.test(n),nI=n=>QL.test(n),iI=n=>!je(n)&&!Xe(n),rI=n=>Ko(n,JS,KS),je=n=>qS.test(n),Ds=n=>Ko(n,eM,eI),xh=n=>Ko(n,cI,vt),x_=n=>Ko(n,ZS,KS),sI=n=>Ko(n,QS,nI),Zc=n=>Ko(n,tM,tI),Xe=n=>$S.test(n),Ha=n=>Zo(n,eM),oI=n=>Zo(n,uI),__=n=>Zo(n,ZS),aI=n=>Zo(n,JS),lI=n=>Zo(n,QS),Qc=n=>Zo(n,tM,!0),Ko=(n,e,t)=>{const r=qS.exec(n);return r?r[1]?e(r[1]):t(r[2]):!1},Zo=(n,e,t=!1)=>{const r=$S.exec(n);return r?r[1]?e(r[1]):t:!1},ZS=n=>n==="position"||n==="percentage",QS=n=>n==="image"||n==="url",JS=n=>n==="length"||n==="size"||n==="bg-size",eM=n=>n==="length",cI=n=>n==="number",uI=n=>n==="family-name",tM=n=>n==="shadow",fI=()=>{const n=fn("color"),e=fn("font"),t=fn("text"),r=fn("font-weight"),o=fn("tracking"),a=fn("leading"),c=fn("breakpoint"),u=fn("container"),d=fn("spacing"),h=fn("radius"),p=fn("shadow"),v=fn("inset-shadow"),g=fn("text-shadow"),_=fn("drop-shadow"),M=fn("blur"),T=fn("perspective"),y=fn("aspect"),S=fn("ease"),C=fn("animate"),P=()=>["auto","avoid","all","avoid-page","page","left","right","column"],R=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],I=()=>[...R(),Xe,je],N=()=>["auto","hidden","clip","visible","scroll"],O=()=>["auto","contain","none"],E=()=>[Xe,je,d],D=()=>[Do,"full","auto",...E()],Y=()=>[es,"none","subgrid",Xe,je],k=()=>["auto",{span:["full",es,Xe,je]},es,Xe,je],$=()=>[es,"auto",Xe,je],J=()=>["auto","min","max","fr",Xe,je],oe=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],K=()=>["start","end","center","stretch","center-safe","end-safe"],Z=()=>["auto",...E()],W=()=>[Do,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...E()],B=()=>[n,Xe,je],te=()=>[...R(),__,x_,{position:[Xe,je]}],le=()=>["no-repeat",{repeat:["","x","y","space","round"]}],F=()=>["auto","cover","contain",aI,rI,{size:[Xe,je]}],q=()=>[vh,Ha,Ds],ye=()=>["","none","full",h,Xe,je],Pe=()=>["",vt,Ha,Ds],qe=()=>["solid","dashed","dotted","double"],se=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],he=()=>[vt,vh,__,x_],me=()=>["","none",M,Xe,je],Ue=()=>["none",vt,Xe,je],Be=()=>["none",vt,Xe,je],it=()=>[vt,Xe,je],zt=()=>[Do,"full",...E()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[gr],breakpoint:[gr],color:[JL],container:[gr],"drop-shadow":[gr],ease:["in","out","in-out"],font:[iI],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[gr],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[gr],shadow:[gr],spacing:["px",vt],text:[gr],"text-shadow":[gr],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Do,je,Xe,y]}],container:["container"],columns:[{columns:[vt,je,Xe,u]}],"break-after":[{"break-after":P()}],"break-before":[{"break-before":P()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:I()}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:O()}],"overscroll-x":[{"overscroll-x":O()}],"overscroll-y":[{"overscroll-y":O()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:D()}],"inset-x":[{"inset-x":D()}],"inset-y":[{"inset-y":D()}],start:[{start:D()}],end:[{end:D()}],top:[{top:D()}],right:[{right:D()}],bottom:[{bottom:D()}],left:[{left:D()}],visibility:["visible","invisible","collapse"],z:[{z:[es,"auto",Xe,je]}],basis:[{basis:[Do,"full","auto",u,...E()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[vt,Do,"auto","initial","none",je]}],grow:[{grow:["",vt,Xe,je]}],shrink:[{shrink:["",vt,Xe,je]}],order:[{order:[es,"first","last","none",Xe,je]}],"grid-cols":[{"grid-cols":Y()}],"col-start-end":[{col:k()}],"col-start":[{"col-start":$()}],"col-end":[{"col-end":$()}],"grid-rows":[{"grid-rows":Y()}],"row-start-end":[{row:k()}],"row-start":[{"row-start":$()}],"row-end":[{"row-end":$()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":J()}],"auto-rows":[{"auto-rows":J()}],gap:[{gap:E()}],"gap-x":[{"gap-x":E()}],"gap-y":[{"gap-y":E()}],"justify-content":[{justify:[...oe(),"normal"]}],"justify-items":[{"justify-items":[...K(),"normal"]}],"justify-self":[{"justify-self":["auto",...K()]}],"align-content":[{content:["normal",...oe()]}],"align-items":[{items:[...K(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...K(),{baseline:["","last"]}]}],"place-content":[{"place-content":oe()}],"place-items":[{"place-items":[...K(),"baseline"]}],"place-self":[{"place-self":["auto",...K()]}],p:[{p:E()}],px:[{px:E()}],py:[{py:E()}],ps:[{ps:E()}],pe:[{pe:E()}],pt:[{pt:E()}],pr:[{pr:E()}],pb:[{pb:E()}],pl:[{pl:E()}],m:[{m:Z()}],mx:[{mx:Z()}],my:[{my:Z()}],ms:[{ms:Z()}],me:[{me:Z()}],mt:[{mt:Z()}],mr:[{mr:Z()}],mb:[{mb:Z()}],ml:[{ml:Z()}],"space-x":[{"space-x":E()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":E()}],"space-y-reverse":["space-y-reverse"],size:[{size:W()}],w:[{w:[u,"screen",...W()]}],"min-w":[{"min-w":[u,"screen","none",...W()]}],"max-w":[{"max-w":[u,"screen","none","prose",{screen:[c]},...W()]}],h:[{h:["screen",...W()]}],"min-h":[{"min-h":["screen","none",...W()]}],"max-h":[{"max-h":["screen",...W()]}],"font-size":[{text:["base",t,Ha,Ds]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Xe,xh]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",vh,je]}],"font-family":[{font:[oI,je,e]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[o,Xe,je]}],"line-clamp":[{"line-clamp":[vt,"none",Xe,xh]}],leading:[{leading:[a,...E()]}],"list-image":[{"list-image":["none",Xe,je]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",Xe,je]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:B()}],"text-color":[{text:B()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...qe(),"wavy"]}],"text-decoration-thickness":[{decoration:[vt,"from-font","auto",Xe,Ds]}],"text-decoration-color":[{decoration:B()}],"underline-offset":[{"underline-offset":[vt,"auto",Xe,je]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:E()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Xe,je]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Xe,je]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:te()}],"bg-repeat":[{bg:le()}],"bg-size":[{bg:F()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},es,Xe,je],radial:["",Xe,je],conic:[es,Xe,je]},lI,sI]}],"bg-color":[{bg:B()}],"gradient-from-pos":[{from:q()}],"gradient-via-pos":[{via:q()}],"gradient-to-pos":[{to:q()}],"gradient-from":[{from:B()}],"gradient-via":[{via:B()}],"gradient-to":[{to:B()}],rounded:[{rounded:ye()}],"rounded-s":[{"rounded-s":ye()}],"rounded-e":[{"rounded-e":ye()}],"rounded-t":[{"rounded-t":ye()}],"rounded-r":[{"rounded-r":ye()}],"rounded-b":[{"rounded-b":ye()}],"rounded-l":[{"rounded-l":ye()}],"rounded-ss":[{"rounded-ss":ye()}],"rounded-se":[{"rounded-se":ye()}],"rounded-ee":[{"rounded-ee":ye()}],"rounded-es":[{"rounded-es":ye()}],"rounded-tl":[{"rounded-tl":ye()}],"rounded-tr":[{"rounded-tr":ye()}],"rounded-br":[{"rounded-br":ye()}],"rounded-bl":[{"rounded-bl":ye()}],"border-w":[{border:Pe()}],"border-w-x":[{"border-x":Pe()}],"border-w-y":[{"border-y":Pe()}],"border-w-s":[{"border-s":Pe()}],"border-w-e":[{"border-e":Pe()}],"border-w-t":[{"border-t":Pe()}],"border-w-r":[{"border-r":Pe()}],"border-w-b":[{"border-b":Pe()}],"border-w-l":[{"border-l":Pe()}],"divide-x":[{"divide-x":Pe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":Pe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...qe(),"hidden","none"]}],"divide-style":[{divide:[...qe(),"hidden","none"]}],"border-color":[{border:B()}],"border-color-x":[{"border-x":B()}],"border-color-y":[{"border-y":B()}],"border-color-s":[{"border-s":B()}],"border-color-e":[{"border-e":B()}],"border-color-t":[{"border-t":B()}],"border-color-r":[{"border-r":B()}],"border-color-b":[{"border-b":B()}],"border-color-l":[{"border-l":B()}],"divide-color":[{divide:B()}],"outline-style":[{outline:[...qe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[vt,Xe,je]}],"outline-w":[{outline:["",vt,Ha,Ds]}],"outline-color":[{outline:B()}],shadow:[{shadow:["","none",p,Qc,Zc]}],"shadow-color":[{shadow:B()}],"inset-shadow":[{"inset-shadow":["none",v,Qc,Zc]}],"inset-shadow-color":[{"inset-shadow":B()}],"ring-w":[{ring:Pe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:B()}],"ring-offset-w":[{"ring-offset":[vt,Ds]}],"ring-offset-color":[{"ring-offset":B()}],"inset-ring-w":[{"inset-ring":Pe()}],"inset-ring-color":[{"inset-ring":B()}],"text-shadow":[{"text-shadow":["none",g,Qc,Zc]}],"text-shadow-color":[{"text-shadow":B()}],opacity:[{opacity:[vt,Xe,je]}],"mix-blend":[{"mix-blend":[...se(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":se()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[vt]}],"mask-image-linear-from-pos":[{"mask-linear-from":he()}],"mask-image-linear-to-pos":[{"mask-linear-to":he()}],"mask-image-linear-from-color":[{"mask-linear-from":B()}],"mask-image-linear-to-color":[{"mask-linear-to":B()}],"mask-image-t-from-pos":[{"mask-t-from":he()}],"mask-image-t-to-pos":[{"mask-t-to":he()}],"mask-image-t-from-color":[{"mask-t-from":B()}],"mask-image-t-to-color":[{"mask-t-to":B()}],"mask-image-r-from-pos":[{"mask-r-from":he()}],"mask-image-r-to-pos":[{"mask-r-to":he()}],"mask-image-r-from-color":[{"mask-r-from":B()}],"mask-image-r-to-color":[{"mask-r-to":B()}],"mask-image-b-from-pos":[{"mask-b-from":he()}],"mask-image-b-to-pos":[{"mask-b-to":he()}],"mask-image-b-from-color":[{"mask-b-from":B()}],"mask-image-b-to-color":[{"mask-b-to":B()}],"mask-image-l-from-pos":[{"mask-l-from":he()}],"mask-image-l-to-pos":[{"mask-l-to":he()}],"mask-image-l-from-color":[{"mask-l-from":B()}],"mask-image-l-to-color":[{"mask-l-to":B()}],"mask-image-x-from-pos":[{"mask-x-from":he()}],"mask-image-x-to-pos":[{"mask-x-to":he()}],"mask-image-x-from-color":[{"mask-x-from":B()}],"mask-image-x-to-color":[{"mask-x-to":B()}],"mask-image-y-from-pos":[{"mask-y-from":he()}],"mask-image-y-to-pos":[{"mask-y-to":he()}],"mask-image-y-from-color":[{"mask-y-from":B()}],"mask-image-y-to-color":[{"mask-y-to":B()}],"mask-image-radial":[{"mask-radial":[Xe,je]}],"mask-image-radial-from-pos":[{"mask-radial-from":he()}],"mask-image-radial-to-pos":[{"mask-radial-to":he()}],"mask-image-radial-from-color":[{"mask-radial-from":B()}],"mask-image-radial-to-color":[{"mask-radial-to":B()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":R()}],"mask-image-conic-pos":[{"mask-conic":[vt]}],"mask-image-conic-from-pos":[{"mask-conic-from":he()}],"mask-image-conic-to-pos":[{"mask-conic-to":he()}],"mask-image-conic-from-color":[{"mask-conic-from":B()}],"mask-image-conic-to-color":[{"mask-conic-to":B()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:te()}],"mask-repeat":[{mask:le()}],"mask-size":[{mask:F()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",Xe,je]}],filter:[{filter:["","none",Xe,je]}],blur:[{blur:me()}],brightness:[{brightness:[vt,Xe,je]}],contrast:[{contrast:[vt,Xe,je]}],"drop-shadow":[{"drop-shadow":["","none",_,Qc,Zc]}],"drop-shadow-color":[{"drop-shadow":B()}],grayscale:[{grayscale:["",vt,Xe,je]}],"hue-rotate":[{"hue-rotate":[vt,Xe,je]}],invert:[{invert:["",vt,Xe,je]}],saturate:[{saturate:[vt,Xe,je]}],sepia:[{sepia:["",vt,Xe,je]}],"backdrop-filter":[{"backdrop-filter":["","none",Xe,je]}],"backdrop-blur":[{"backdrop-blur":me()}],"backdrop-brightness":[{"backdrop-brightness":[vt,Xe,je]}],"backdrop-contrast":[{"backdrop-contrast":[vt,Xe,je]}],"backdrop-grayscale":[{"backdrop-grayscale":["",vt,Xe,je]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[vt,Xe,je]}],"backdrop-invert":[{"backdrop-invert":["",vt,Xe,je]}],"backdrop-opacity":[{"backdrop-opacity":[vt,Xe,je]}],"backdrop-saturate":[{"backdrop-saturate":[vt,Xe,je]}],"backdrop-sepia":[{"backdrop-sepia":["",vt,Xe,je]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":E()}],"border-spacing-x":[{"border-spacing-x":E()}],"border-spacing-y":[{"border-spacing-y":E()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",Xe,je]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[vt,"initial",Xe,je]}],ease:[{ease:["linear","initial",S,Xe,je]}],delay:[{delay:[vt,Xe,je]}],animate:[{animate:["none",C,Xe,je]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[T,Xe,je]}],"perspective-origin":[{"perspective-origin":I()}],rotate:[{rotate:Ue()}],"rotate-x":[{"rotate-x":Ue()}],"rotate-y":[{"rotate-y":Ue()}],"rotate-z":[{"rotate-z":Ue()}],scale:[{scale:Be()}],"scale-x":[{"scale-x":Be()}],"scale-y":[{"scale-y":Be()}],"scale-z":[{"scale-z":Be()}],"scale-3d":["scale-3d"],skew:[{skew:it()}],"skew-x":[{"skew-x":it()}],"skew-y":[{"skew-y":it()}],transform:[{transform:[Xe,je,"","none","gpu","cpu"]}],"transform-origin":[{origin:I()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:zt()}],"translate-x":[{"translate-x":zt()}],"translate-y":[{"translate-y":zt()}],"translate-z":[{"translate-z":zt()}],"translate-none":["translate-none"],accent:[{accent:B()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:B()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Xe,je]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Xe,je]}],fill:[{fill:["none",...B()]}],"stroke-w":[{stroke:[vt,Ha,Ds,xh]}],stroke:[{stroke:["none",...B()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},dI=XL(fI);function y_(...n){return dI(LL(n))}function S_({children:n,containerClassName:e,className:t,as:r="button",duration:o=1,clockwise:a=!0,...c}){const[u,d]=_e.useState(!1),[h,p]=_e.useState("TOP"),v=M=>{const T=["TOP","LEFT","BOTTOM","RIGHT"],y=T.indexOf(M),S=a?(y-1+T.length)%T.length:(y+1)%T.length;return T[S]},g={TOP:"radial-gradient(20.7% 50% at 50% 0%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",LEFT:"radial-gradient(16.6% 43.1% at 0% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",BOTTOM:"radial-gradient(20.7% 50% at 50% 100%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)",RIGHT:"radial-gradient(16.2% 41.2% at 100% 50%, hsl(0, 0%, 100%) 0%, rgba(255, 255, 255, 0) 100%)"},_="radial-gradient(75% 181.15942028985506% at 50% 50%, #3275F8 0%, rgba(255, 255, 255, 0) 100%)";return _e.useEffect(()=>{if(!u){const M=setInterval(()=>{p(T=>v(T))},o*1e3);return()=>clearInterval(M)}},[u]),Q.jsxs(r,{onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),className:y_("relative flex rounded-full border content-center bg-black/20 hover:bg-black/10 transition duration-500 items-center flex-col flex-nowrap gap-10 h-min justify-center overflow-visible p-px decoration-clone w-fit",e),...c,children:[Q.jsx("div",{className:y_("w-auto text-white z-10 bg-black px-4 py-2 rounded-[inherit]",t),children:n}),Q.jsx(Zt.div,{className:"flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]",style:{filter:"blur(2px)",position:"absolute",width:"100%",height:"100%"},initial:{background:g[h]},animate:{background:u?[g[h],_]:g[h]},transition:{ease:"linear",duration:o??1}}),Q.jsx("div",{className:"bg-black absolute z-[1] flex-none inset-[2px] rounded-[100px]"})]})}const nM=60,iM=140,rM=Mc.forwardRef(({className:n="",children:e,magnification:t=nM,distance:r=iM,direction:o="bottom"},a)=>{const c=Lu(1/0),u=o==="top"?"items-start":o==="middle"?"items-center":"items-end",d=()=>Mc.Children.map(e,h=>Mc.isValidElement(h)&&h.type===Fs?Mc.cloneElement(h,{...h.props,mouseX:c,magnification:t,distance:r}):h);return Q.jsx(Zt.div,{ref:a,onMouseMove:h=>c.set(h.pageX),onMouseLeave:()=>c.set(1/0),className:`flex gap-2 rounded-2xl border border-white/20 bg-black/50 p-2 backdrop-blur-xl ${u} ${n}`,style:{height:58,width:"max-content"},children:d()})});rM.displayName="Dock";const Fs=({magnification:n=nM,distance:e=iM,mouseX:t,className:r="",children:o,onClick:a,title:c})=>{const u=_e.useRef(null),d=t??Lu(1/0),h=Mu(d,g=>{var M;const _=((M=u.current)==null?void 0:M.getBoundingClientRect())??{x:0,width:0};return g-_.x-_.width/2}),p=Mu(h,[-e,0,e],[40,n,40]),v=KA(p,{mass:.1,stiffness:150,damping:12});return Q.jsx(Zt.div,{ref:u,style:{width:v},className:`flex aspect-square cursor-pointer items-center justify-center rounded-full ${r}`,onClick:a,title:c,children:o})};Fs.displayName="DockIcon";function hI({text:n="STUNNING",textColor:e="text-white",overlayColor:t="text-red-500",fontSize:r="text-[250px]",letterDelay:o=.08,overlayDelay:a=.05,overlayDuration:c=.4,springDuration:u=600,letterImages:d=["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1519904981063-b0cf448d479e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"]}){const[h,p]=_e.useState(null),[v,g]=_e.useState(!1);return _e.useEffect(()=>{const M=(n.length-1)*o*1e3+u,T=setTimeout(()=>g(!0),M);return()=>clearTimeout(T)},[n.length,o,u]),Q.jsx("div",{className:"flex items-center justify-center relative",children:Q.jsx("div",{className:"flex",children:n.split("").map((_,M)=>Q.jsxs(Zt.span,{onMouseEnter:()=>p(M),onMouseLeave:()=>p(null),className:`${r} font-black tracking-tight cursor-pointer relative overflow-hidden`,initial:{scale:0,opacity:0},animate:{scale:1,opacity:1},transition:{delay:M*o,type:"spring",damping:8,stiffness:200,mass:.8},children:[Q.jsx(Zt.span,{className:`absolute inset-0 ${e}`,animate:{opacity:h===M?0:1},transition:{duration:.1},children:_}),Q.jsx(Zt.span,{className:"text-transparent bg-clip-text bg-cover bg-no-repeat",animate:{opacity:h===M?1:0,backgroundPosition:h===M?"10% center":"0% center"},transition:{opacity:{duration:.1},backgroundPosition:{duration:3,ease:"easeInOut"}},style:{backgroundImage:`url('${d[M%d.length]}')`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:_}),v&&Q.jsx(Zt.span,{className:`absolute inset-0 ${t} pointer-events-none`,initial:{opacity:0},animate:{opacity:[0,1,1,0]},transition:{delay:M*a,duration:c,times:[0,.1,.7,1],ease:"easeInOut"},children:_})]},M))})})}class pI{constructor(e,t,r,o,a,c,u){this.width=e.width,this.height=e.height,this.ctx=t,this.x=r,this.y=o,this.color=a,this.speed=this.getRandomValue(.1,.9)*c,this.size=0,this.sizeStep=Math.random()*.4,this.minSize=.5,this.maxSizeInteger=2,this.maxSize=this.getRandomValue(this.minSize,this.maxSizeInteger),this.delay=u,this.counter=0,this.counterStep=Math.random()*4+(this.width+this.height)*.01,this.isIdle=!1,this.isReverse=!1,this.isShimmer=!1}getRandomValue(e,t){return Math.random()*(t-e)+e}draw(){const e=this.maxSizeInteger*.5-this.size*.5;this.ctx.fillStyle=this.color,this.ctx.fillRect(this.x+e,this.y+e,this.size,this.size)}appear(){if(this.isIdle=!1,this.counter<=this.delay){this.counter+=this.counterStep;return}this.size>=this.maxSize&&(this.isShimmer=!0),this.isShimmer?this.shimmer():this.size+=this.sizeStep,this.draw()}disappear(){if(this.isShimmer=!1,this.counter=0,this.size<=0){this.isIdle=!0;return}else this.size-=.1;this.draw()}shimmer(){this.size>=this.maxSize?this.isReverse=!0:this.size<=this.minSize&&(this.isReverse=!1),this.isReverse?this.size-=this.speed:this.size+=this.speed}}class mI extends HTMLElement{constructor(){super(),this.pixels=[],this.animation=null,this.timeInterval=1e3/60,this.timePrevious=performance.now(),this._initialized=!1,this._resizeObserver=null,this._parent=null,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches;const e=this.attachShadow({mode:"open"}),t=document.createElement("style");t.textContent=":host { display: grid; inline-size: 100%; block-size: 100%; overflow: hidden; }",e.appendChild(t),e.appendChild(this.canvas)}get colors(){var e;return((e=this.dataset.colors)==null?void 0:e.split(","))||["#f8fafc","#f1f5f9","#cbd5e1"]}get gap(){const e=Number(this.dataset.gap)||5;return Math.max(4,Math.min(50,e))}get speed(){const e=Number(this.dataset.speed)||35;return this.reducedMotion?0:Math.max(0,Math.min(100,e))*.001}get noFocus(){return this.hasAttribute("data-no-focus")}get variant(){return this.dataset.variant||"default"}connectedCallback(){var e,t,r,o;this._initialized||(this._initialized=!0,this._parent=this.parentElement,requestAnimationFrame(()=>{this.handleResize();const a=new ResizeObserver(c=>{c.length&&requestAnimationFrame(()=>this.handleResize())});a.observe(this),this._resizeObserver=a}),(e=this._parent)==null||e.addEventListener("mouseenter",()=>this.handleAnimation("appear")),(t=this._parent)==null||t.addEventListener("mouseleave",()=>this.handleAnimation("disappear")),this.noFocus||((r=this._parent)==null||r.addEventListener("focus",()=>this.handleAnimation("appear"),{capture:!0}),(o=this._parent)==null||o.addEventListener("blur",()=>this.handleAnimation("disappear"),{capture:!0})))}disconnectedCallback(){var e,t,r,o,a;this._initialized=!1,(e=this._resizeObserver)==null||e.disconnect(),(t=this._parent)==null||t.removeEventListener("mouseenter",()=>this.handleAnimation("appear")),(r=this._parent)==null||r.removeEventListener("mouseleave",()=>this.handleAnimation("disappear")),this.noFocus||((o=this._parent)==null||o.removeEventListener("focus",()=>this.handleAnimation("appear")),(a=this._parent)==null||a.removeEventListener("blur",()=>this.handleAnimation("disappear"))),this.animation&&(cancelAnimationFrame(this.animation),this.animation=null),this._parent=null}handleResize(){if(!this.ctx||!this._initialized)return;const e=this.getBoundingClientRect();if(e.width===0||e.height===0)return;const t=Math.floor(e.width),r=Math.floor(e.height),o=window.devicePixelRatio||1;this.canvas.width=t*o,this.canvas.height=r*o,this.canvas.style.width=`${t}px`,this.canvas.style.height=`${r}px`,this.ctx.setTransform(1,0,0,1,0,0),this.ctx.scale(o,o),this.createPixels()}getDistanceToCenter(e,t){const r=e-this.canvas.width/2,o=t-this.canvas.height/2;return Math.sqrt(r*r+o*o)}getDistanceToBottomLeft(e,t){const r=e,o=this.canvas.height-t;return Math.sqrt(r*r+o*o)}createPixels(){if(this.ctx){this.pixels=[];for(let e=0;e<this.canvas.width;e+=this.gap)for(let t=0;t<this.canvas.height;t+=this.gap){const r=this.colors[Math.floor(Math.random()*this.colors.length)],o=this.reducedMotion?0:this.variant==="icon"?this.getDistanceToCenter(e,t):this.getDistanceToBottomLeft(e,t);this.pixels.push(new pI(this.canvas,this.ctx,e,t,r,this.speed,o))}}}handleAnimation(e){this.animation&&cancelAnimationFrame(this.animation);const t=()=>{this.animation=requestAnimationFrame(t);const r=performance.now(),o=r-this.timePrevious;if(o<this.timeInterval||(this.timePrevious=r-o%this.timeInterval,!this.ctx))return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let a=!0;for(const c of this.pixels)c[e](),c.isIdle||(a=!1);a&&(cancelAnimationFrame(this.animation),this.animation=null)};t()}}const sM=_e.forwardRef(({gap:n,speed:e,colors:t,variant:r,noFocus:o,style:a,...c},u)=>(_e.useEffect(()=>{typeof window<"u"&&!customElements.get("pixel-canvas")&&customElements.define("pixel-canvas",mI)},[]),_e.createElement("pixel-canvas",{ref:u,"data-gap":n,"data-speed":e,"data-colors":t==null?void 0:t.join(","),"data-variant":r,...o?{"data-no-focus":""}:{},style:{position:"absolute",inset:0,pointerEvents:"none",width:"100%",height:"100%",...a},...c})));sM.displayName="PixelCanvas";const gI=`
@import url("https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,500&display=swap");

@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
@property --gradient-angle-offset {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
@property --gradient-percent {
  syntax: "<percentage>";
  initial-value: 5%;
  inherits: false;
}
@property --gradient-shine {
  syntax: "<color>";
  initial-value: white;
  inherits: false;
}

.shiny-cta {
  --shiny-cta-bg: #000000;
  --shiny-cta-bg-subtle: #1a1818;
  --shiny-cta-fg: #ffffff;
  --shiny-cta-highlight: blue;
  --shiny-cta-highlight-subtle: #8484ff;
  --animation: gradient-angle linear infinite;
  --duration: 3s;
  --shadow-size: 2px;
  --transition: 800ms cubic-bezier(0.25, 1, 0.5, 1);

  isolation: isolate;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  outline-offset: 4px;
  padding: 1.25rem 2.5rem;
  font-family: "Inter", sans-serif;
  font-size: 1.125rem;
  line-height: 1.2;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 360px;
  color: var(--shiny-cta-fg);
  background:
    linear-gradient(var(--shiny-cta-bg), var(--shiny-cta-bg)) padding-box,
    conic-gradient(
      from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
      transparent,
      var(--shiny-cta-highlight) var(--gradient-percent),
      var(--gradient-shine) calc(var(--gradient-percent) * 2),
      var(--shiny-cta-highlight) calc(var(--gradient-percent) * 3),
      transparent calc(var(--gradient-percent) * 4)
    ) border-box;
  box-shadow: inset 0 0 0 1px var(--shiny-cta-bg-subtle);
  transition: var(--transition);
  transition-property: --gradient-angle-offset, --gradient-percent, --gradient-shine;
}

.shiny-cta::before,
.shiny-cta::after,
.shiny-cta span::before {
  content: "";
  pointer-events: none;
  position: absolute;
  inset-inline-start: 50%;
  inset-block-start: 50%;
  translate: -50% -50%;
  z-index: -1;
}

.shiny-cta:active {
  translate: 0 1px;
}

/* Dots pattern */
.shiny-cta::before {
  --size: calc(100% - var(--shadow-size) * 3);
  --position: 2px;
  --space: calc(var(--position) * 2);
  width: var(--size);
  height: var(--size);
  background: radial-gradient(
    circle at var(--position) var(--position),
    white calc(var(--position) / 4),
    transparent 0
  ) padding-box;
  background-size: var(--space) var(--space);
  background-repeat: space;
  mask-image: conic-gradient(
    from calc(var(--gradient-angle) + 45deg),
    black,
    transparent 10% 90%,
    black
  );
  border-radius: inherit;
  opacity: 0.4;
  z-index: -1;
}

/* Inner shimmer */
.shiny-cta::after {
  --animation: shimmer linear infinite;
  width: 100%;
  aspect-ratio: 1;
  background: linear-gradient(
    -50deg,
    transparent,
    var(--shiny-cta-highlight),
    transparent
  );
  mask-image: radial-gradient(circle at bottom, transparent 40%, black);
  opacity: 0.6;
}

.shiny-cta span {
  z-index: 1;
}

.shiny-cta span::before {
  --size: calc(100% + 1rem);
  width: var(--size);
  height: var(--size);
  box-shadow: inset 0 -1ex 2rem 4px var(--shiny-cta-highlight);
  opacity: 0;
  transition: opacity var(--transition);
  animation: calc(var(--duration) * 1.5) breathe linear infinite;
}

/* Animate */
.shiny-cta,
.shiny-cta::before,
.shiny-cta::after {
  animation: var(--animation) var(--duration),
    var(--animation) calc(var(--duration) / 0.4) reverse paused;
  animation-composition: add;
}

.shiny-cta:is(:hover, :focus-visible) {
  --gradient-percent: 20%;
  --gradient-angle-offset: 95deg;
  --gradient-shine: var(--shiny-cta-highlight-subtle);
}

.shiny-cta:is(:hover, :focus-visible),
.shiny-cta:is(:hover, :focus-visible)::before,
.shiny-cta:is(:hover, :focus-visible)::after {
  animation-play-state: running;
}

.shiny-cta:is(:hover, :focus-visible) span::before {
  opacity: 1;
}

/* Compact card variant */
.shiny-cta-compact {
  padding: 0.625rem 1rem;
  font-size: 0.875rem;
  border-radius: 0.75rem;
  width: 100%;
}

@keyframes gradient-angle {
  to { --gradient-angle: 360deg; }
}
@keyframes shimmer {
  to { rotate: 360deg; }
}
@keyframes breathe {
  from, to { scale: 1; }
  50% { scale: 1.2; }
}
`;let _h=!1;function vI(){if(_h||typeof document>"u")return;if(document.getElementById("shiny-cta-styles")){_h=!0;return}const n=document.createElement("style");n.id="shiny-cta-styles",n.textContent=gI,document.head.appendChild(n),_h=!0}function xI({children:n,onClick:e,className:t="",compact:r=!1,highlightColor:o,highlightSubtle:a}){_e.useEffect(()=>{vI()},[]);const c=["shiny-cta",r?"shiny-cta-compact":"",t].filter(Boolean).join(" "),u={};return o&&(u["--shiny-cta-highlight"]=o),a&&(u["--shiny-cta-highlight-subtle"]=a),Q.jsx("button",{className:c,onClick:e,style:u,children:Q.jsx("span",{children:n})})}const _I=[{id:"fe",name:"Engineering Science",shortName:"FE",icon:"⚗️",color:"from-violet-600 to-indigo-600",pixelColors:["#7c3aed","#6366f1","#a78bfa"],description:"First Year Engineering",subjects:[{id:"fe-1",name:"Engineering Mathematics I",driveLink:"https://drive.google.com/placeholder"},{id:"fe-2",name:"Engineering Physics",driveLink:"https://drive.google.com/placeholder"},{id:"fe-3",name:"Engineering Chemistry",driveLink:"https://drive.google.com/placeholder"},{id:"fe-4",name:"Basic Electrical Engineering",driveLink:"https://drive.google.com/placeholder"},{id:"fe-5",name:"Engineering Mechanics",driveLink:"https://drive.google.com/placeholder"},{id:"fe-6",name:"Programming & Problem Solving",driveLink:"https://drive.google.com/placeholder"},{id:"fe-7",name:"Engineering Graphics",driveLink:"https://drive.google.com/placeholder"},{id:"fe-8",name:"Communication Skills",driveLink:"https://drive.google.com/placeholder"}]},{id:"comp",name:"Computer Engineering",shortName:"COMP",icon:"💻",color:"from-cyan-500 to-blue-600",pixelColors:["#0891b2","#2563eb","#67e8f9"],description:"SE / TE / BE Full Curriculum",subjects:[{id:"comp-1",name:"Data Structures & Algorithms",driveLink:"https://drive.google.com/placeholder"},{id:"comp-2",name:"Database Management Systems",driveLink:"https://drive.google.com/placeholder"},{id:"comp-3",name:"Operating Systems",driveLink:"https://drive.google.com/placeholder"},{id:"comp-4",name:"Computer Networks",driveLink:"https://drive.google.com/placeholder"},{id:"comp-5",name:"Theory of Computation",driveLink:"https://drive.google.com/placeholder"},{id:"comp-6",name:"Software Engineering",driveLink:"https://drive.google.com/placeholder"},{id:"comp-7",name:"Machine Learning",driveLink:"https://drive.google.com/placeholder"},{id:"comp-8",name:"Web Technology",driveLink:"https://drive.google.com/placeholder"},{id:"comp-9",name:"Compiler Design",driveLink:"https://drive.google.com/placeholder"},{id:"comp-10",name:"Cryptography & System Security",driveLink:"https://drive.google.com/placeholder"}]},{id:"entc",name:"Electronics & TC",shortName:"ENTC",icon:"📡",color:"from-orange-500 to-pink-600",pixelColors:["#ea580c","#db2777","#fb923c"],description:"SE / TE / BE Full Curriculum",subjects:[{id:"entc-1",name:"Analog Electronics",driveLink:"https://drive.google.com/placeholder"},{id:"entc-2",name:"Digital Electronics",driveLink:"https://drive.google.com/placeholder"},{id:"entc-3",name:"Signals & Systems",driveLink:"https://drive.google.com/placeholder"},{id:"entc-4",name:"Microprocessors & Microcontrollers",driveLink:"https://drive.google.com/placeholder"},{id:"entc-5",name:"Electronic Instrumentation",driveLink:"https://drive.google.com/placeholder"},{id:"entc-6",name:"Communication Systems",driveLink:"https://drive.google.com/placeholder"},{id:"entc-7",name:"VLSI Design",driveLink:"https://drive.google.com/placeholder"},{id:"entc-8",name:"Embedded Systems",driveLink:"https://drive.google.com/placeholder"},{id:"entc-9",name:"Digital Signal Processing",driveLink:"https://drive.google.com/placeholder"}]},{id:"mech",name:"Mechanical Engineering",shortName:"MECH",icon:"⚙️",color:"from-emerald-500 to-teal-600",pixelColors:["#059669","#0d9488","#6ee7b7"],description:"SE / TE / BE Full Curriculum",subjects:[{id:"mech-1",name:"Engineering Thermodynamics",driveLink:"https://drive.google.com/placeholder"},{id:"mech-2",name:"Fluid Mechanics",driveLink:"https://drive.google.com/placeholder"},{id:"mech-3",name:"Theory of Machines",driveLink:"https://drive.google.com/placeholder"},{id:"mech-4",name:"Strength of Materials",driveLink:"https://drive.google.com/placeholder"},{id:"mech-5",name:"Machine Design",driveLink:"https://drive.google.com/placeholder"},{id:"mech-6",name:"Heat Transfer",driveLink:"https://drive.google.com/placeholder"},{id:"mech-7",name:"Manufacturing Processes",driveLink:"https://drive.google.com/placeholder"},{id:"mech-8",name:"Industrial Engineering",driveLink:"https://drive.google.com/placeholder"}]}],yI=[{id:"wa-fe",name:"FE Engineering (1st Year)",category:"Branch-wise",description:"Notes, updates & doubt clearing for FE students",link:"https://chat.whatsapp.com/placeholder",icon:"⚗️"},{id:"wa-comp",name:"Computer Engineering",category:"Branch-wise",description:"Assignments, projects & exam resources for COMP",link:"https://chat.whatsapp.com/placeholder",icon:"💻"},{id:"wa-entc",name:"Electronics & TC",category:"Branch-wise",description:"Notes, lab work & exam prep for ENTC",link:"https://chat.whatsapp.com/placeholder",icon:"📡"},{id:"wa-mech",name:"Mechanical Engineering",category:"Branch-wise",description:"Drawings, theory & practicals for MECH",link:"https://chat.whatsapp.com/placeholder",icon:"⚙️"},{id:"wa-se",name:"Second Year (SE)",category:"Year-wise",description:"Common resources for SE students across all branches",link:"https://chat.whatsapp.com/placeholder",icon:"📚"},{id:"wa-te",name:"Third Year (TE)",category:"Year-wise",description:"Mini projects, internships & notes for TE students",link:"https://chat.whatsapp.com/placeholder",icon:"🎓"},{id:"wa-be",name:"Final Year (BE)",category:"Year-wise",description:"Major projects, placements & exams for BE students",link:"https://chat.whatsapp.com/placeholder",icon:"🏆"}];function Jc({label:n,children:e}){const[t,r]=_e.useState(!1);return Q.jsxs("div",{className:"relative flex flex-col items-center",onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[e,Q.jsx(Ky,{children:t&&Q.jsx(Zt.div,{initial:{opacity:0,y:4},animate:{opacity:1,y:0},exit:{opacity:0,y:4},transition:{duration:.15},className:"absolute -top-9 px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs whitespace-nowrap pointer-events-none",children:n})})]})}function SI(){const[n,e]=_e.useState(null),t=_e.useRef(null),r=_e.useRef(null),o=_e.useRef(null),a=_e.useRef(null),c=u=>{var d;(d=u.current)==null||d.scrollIntoView({behavior:"smooth"})};return Q.jsxs("div",{className:"min-h-screen bg-black text-white overflow-x-hidden",children:[Q.jsx(Zt.header,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.7,delay:.3},className:"fixed top-5 left-0 right-0 z-50 flex justify-center pointer-events-none",children:Q.jsx("div",{className:"pointer-events-auto",children:Q.jsxs(rM,{direction:"middle",magnification:56,distance:120,children:[Q.jsx(Fs,{onClick:()=>c(t),children:Q.jsx(Jc,{label:"Home",children:Q.jsx("div",{className:"w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20",children:Q.jsx(Ia,{size:16,className:"text-white"})})})}),Q.jsx("div",{className:"w-px h-7 bg-white/15 self-center mx-1 flex-shrink-0"}),Q.jsx(Fs,{onClick:()=>c(r),children:Q.jsx(Jc,{label:"Branches",children:Q.jsx("div",{className:"w-9 h-9 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 flex items-center justify-center transition-colors duration-200",children:Q.jsx(yx,{size:17,className:"text-white/80"})})})}),Q.jsx(Fs,{onClick:()=>c(o),children:Q.jsx(Jc,{label:"WhatsApp",children:Q.jsx("div",{className:"w-9 h-9 rounded-xl bg-white/8 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/30 flex items-center justify-center transition-colors duration-200",children:Q.jsx(Na,{size:17,className:"text-white/80 group-hover:text-[#25D366]"})})})}),Q.jsx(Fs,{onClick:()=>c(a),children:Q.jsx(Jc,{label:"About",children:Q.jsx("div",{className:"w-9 h-9 rounded-xl bg-white/8 hover:bg-violet-500/20 border border-white/10 hover:border-violet-500/30 flex items-center justify-center transition-colors duration-200",children:Q.jsx(cC,{size:17,className:"text-white/80"})})})}),Q.jsx("div",{className:"w-px h-7 bg-white/15 self-center mx-1 flex-shrink-0"}),Q.jsx(Fs,{children:Q.jsx("img",{src:"/logo.png",alt:"Campus Link",style:{height:32,width:"auto",mixBlendMode:"screen",cursor:"default",userSelect:"none",pointerEvents:"none"}})})]})})}),Q.jsxs("section",{ref:t,className:"relative min-h-screen flex items-center justify-center overflow-hidden",children:[Q.jsx(DL,{}),Q.jsx("div",{className:"absolute inset-0 bg-black/60 z-[1]"}),Q.jsxs("div",{className:"absolute inset-0 z-[2] pointer-events-none",children:[Q.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]"}),Q.jsx("div",{className:"absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-violet-600/10 blur-[80px]"})]}),Q.jsxs("div",{className:"relative z-[3] text-center px-6 max-w-5xl mx-auto",children:[Q.jsx(Zt.h1,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.35},className:"text-white mb-4",style:{fontSize:"clamp(3.5rem, 10vw, 7rem)",fontWeight:800,letterSpacing:"-0.04em",lineHeight:1,background:"linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"Campus Link"}),Q.jsxs(Zt.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.5},className:"text-white/50 mb-12 max-w-xl mx-auto",style:{fontSize:"clamp(1rem, 2vw, 1.2rem)",lineHeight:1.6},children:["Your one-stop hub for"," ",Q.jsx("span",{className:"text-blue-400",children:"engineering notes"}),", organized, accessible, and always up-to-date."]}),Q.jsxs(Zt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.65},className:"flex flex-col sm:flex-row gap-4 justify-center items-center",children:[Q.jsxs(S_,{containerClassName:"rounded-full",className:"flex items-center gap-2 px-7 py-3 text-sm",onClick:()=>c(r),children:[Q.jsx(Ia,{size:15}),"Explore Notes",Q.jsx(_x,{size:14})]}),Q.jsxs(S_,{containerClassName:"rounded-full",className:"flex items-center gap-2 px-7 py-3 text-sm",onClick:()=>c(o),children:[Q.jsx(Na,{size:15,className:"text-green-400"}),"Join WhatsApp Groups"]})]}),Q.jsx(Zt.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7,delay:.85},className:"mt-16 flex flex-wrap justify-center gap-8",children:[{icon:Q.jsx(yx,{size:18}),label:"4 Branches",sub:"Covered"},{icon:Q.jsx(Ia,{size:18}),label:"40+ Subjects",sub:"Available"},{icon:Q.jsx(gC,{size:18}),label:"Active Groups",sub:"WhatsApp"},{icon:Q.jsx(xC,{size:18}),label:"Free Access",sub:"Always"}].map((u,d)=>Q.jsxs("div",{className:"flex flex-col items-center gap-1 text-white/40",children:[Q.jsx("div",{className:"text-blue-400",children:u.icon}),Q.jsx("span",{className:"text-white text-sm",style:{fontWeight:600},children:u.label}),Q.jsx("span",{className:"text-xs",children:u.sub})]},d))})]}),Q.jsxs(Zt.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:1.5,duration:.5},className:"absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2",children:[Q.jsx("span",{className:"text-white/30 text-xs",children:"Scroll to explore"}),Q.jsx(Zt.div,{animate:{y:[0,6,0]},transition:{repeat:1/0,duration:1.5,ease:"easeInOut"},className:"w-px h-8 bg-gradient-to-b from-white/30 to-transparent"})]})]}),Q.jsxs("section",{ref:r,className:"py-28 px-6 relative",children:[Q.jsxs("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:[Q.jsx("div",{className:"absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-900/20 blur-[100px]"}),Q.jsx("div",{className:"absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-blue-900/20 blur-[80px]"})]}),Q.jsxs("div",{className:"max-w-7xl mx-auto relative",children:[Q.jsxs(Zt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"text-center mb-16",children:[Q.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs mb-5",children:[Q.jsx(Ia,{size:11}),"Academic Notes"]}),Q.jsx("h2",{className:"text-white mb-4",style:{fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:700,letterSpacing:"-0.03em"},children:"Choose Your Branch"}),Q.jsx("p",{className:"text-white/40 max-w-md mx-auto",style:{fontSize:"0.95rem"},children:"Organized notes for all branches. Click a branch to explore subjects."})]}),Q.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:_I.map((u,d)=>Q.jsxs(Zt.div,{initial:{opacity:0,y:40},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:d*.1},viewport:{once:!0},whileHover:{y:-6,scale:1.01},onClick:()=>e(u),className:"group relative cursor-pointer rounded-2xl border border-white/10 bg-[#0a0a0a] p-7 overflow-hidden transition-all duration-300 hover:border-white/20",children:[Q.jsx(sM,{gap:8,speed:30,colors:u.pixelColors,variant:"default",noFocus:!0}),Q.jsx("div",{className:`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${u.color} opacity-50 group-hover:opacity-100 transition-opacity`}),Q.jsxs("div",{className:"relative z-10",children:[Q.jsx("span",{className:"text-4xl mb-4 block",children:u.icon}),Q.jsx("h3",{className:"text-white mb-1",style:{fontWeight:600,fontSize:"1.05rem",letterSpacing:"-0.01em"},children:u.name}),Q.jsx("p",{className:"text-white/40 text-xs mb-5",children:u.description}),Q.jsxs("div",{className:"flex items-center justify-between mb-4",children:[Q.jsxs("span",{className:"text-xs text-white/30",children:[u.subjects.length," subjects"]}),Q.jsxs("div",{className:"flex items-center gap-1 text-blue-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity",children:["View ",Q.jsx(_x,{size:12})]})]}),Q.jsx(xI,{compact:!0,highlightColor:u.pixelColors[0],highlightSubtle:u.pixelColors[2],onClick:h=>{h.stopPropagation(),e(u)},children:"View Subjects"})]})]},u.id))})]})]}),Q.jsx(Ky,{children:n&&Q.jsxs(Zt.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},className:"fixed inset-0 z-[60] flex items-center justify-center px-4",onClick:()=>e(null),children:[Q.jsx("div",{className:"absolute inset-0 bg-black/80 backdrop-blur-md"}),Q.jsxs(Zt.div,{initial:{opacity:0,scale:.92,y:40},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.92,y:40},transition:{type:"spring",damping:22,stiffness:300},onClick:u=>u.stopPropagation(),className:"relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-white/15 bg-[#0a0a0a] shadow-2xl",children:[Q.jsxs("div",{className:"sticky top-0 z-10 bg-[#0a0a0a]/95 backdrop-blur-xl px-7 py-5 border-b border-white/10 flex items-center gap-4",children:[Q.jsxs("button",{onClick:()=>e(null),className:"flex items-center gap-1 text-white/40 hover:text-white transition-colors text-sm",children:[Q.jsx(rC,{size:16})," Back"]}),Q.jsx("span",{className:"text-white/20",children:"|"}),Q.jsx("span",{className:"text-2xl",children:n.icon}),Q.jsxs("div",{children:[Q.jsx("h3",{className:"text-white",style:{fontWeight:600,fontSize:"1.05rem"},children:n.name}),Q.jsxs("p",{className:"text-white/40 text-xs",children:[n.subjects.length," subjects available"]})]})]}),Q.jsx("div",{className:"p-7 grid gap-3",children:n.subjects.map((u,d)=>Q.jsxs(Zt.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{delay:d*.05},className:"group flex items-center justify-between p-4 rounded-xl border border-white/8 bg-white/3 hover:border-white/20 hover:bg-white/7 transition-all duration-200",children:[Q.jsxs("div",{className:"flex items-center gap-3",children:[Q.jsx("div",{className:`w-2 h-2 rounded-full bg-gradient-to-r ${n.color}`}),Q.jsx("span",{className:"text-white/80 text-sm",style:{fontWeight:500},children:u.name})]}),Q.jsxs("a",{href:u.driveLink,target:"_blank",rel:"noopener noreferrer",onClick:h=>h.stopPropagation(),className:"flex items-center gap-1.5 text-xs text-blue-400 hover:text-blue-300 opacity-0 group-hover:opacity-100 transition-all duration-200 border border-blue-500/30 bg-blue-500/10 px-3 py-1.5 rounded-lg",children:[Q.jsx(Ia,{size:11}),"View Notes",Q.jsx(oC,{size:10})]})]},u.id))})]})]})}),Q.jsxs("section",{ref:o,className:"py-28 px-6 relative",children:[Q.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:Q.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-green-900/10 blur-[120px]"})}),Q.jsxs("div",{className:"max-w-7xl mx-auto relative",children:[Q.jsxs(Zt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.6},viewport:{once:!0},className:"text-center mb-16",children:[Q.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-xs mb-5",children:[Q.jsx(Na,{size:11}),"Community"]}),Q.jsx("h2",{className:"text-white mb-4",style:{fontSize:"clamp(2rem, 5vw, 3.5rem)",fontWeight:700,letterSpacing:"-0.03em"},children:"Join Student Communities"}),Q.jsx("p",{className:"text-white/40 max-w-md mx-auto",style:{fontSize:"0.95rem"},children:"Connect with peers, share notes, and stay updated on exams and events."}),Q.jsx("p",{className:"text-white/25 text-xs mt-3 max-w-sm mx-auto",children:"Unofficial groups & communities created by students, CRs and cultural heads"})]}),Q.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5",children:yI.map((u,d)=>Q.jsxs(Zt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:d*.08},viewport:{once:!0},whileHover:{y:-5},className:"group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 overflow-hidden transition-all duration-300 hover:border-green-500/30",children:[Q.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-transparent transition-all duration-300 rounded-2xl"}),Q.jsx("div",{className:"inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/40 text-[10px] mb-4",children:u.category}),Q.jsxs("div",{className:"relative z-10",children:[Q.jsx("span",{className:"text-3xl mb-3 block",children:u.icon}),Q.jsx("h3",{className:"text-white mb-2",style:{fontWeight:600,fontSize:"0.95rem"},children:u.name}),Q.jsx("p",{className:"text-white/40 text-xs mb-5 leading-relaxed",children:u.description}),Q.jsxs("a",{href:u.link,target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] text-sm hover:bg-[#25D366]/25 transition-all duration-200",style:{fontWeight:500},children:[Q.jsx(Na,{size:14}),"Join Now"]})]})]},u.id))})]})]}),Q.jsxs("section",{ref:a,className:"py-28 px-6 relative",children:[Q.jsx("div",{className:"absolute inset-0 pointer-events-none overflow-hidden",children:Q.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-indigo-900/15 blur-[120px]"})}),Q.jsx("div",{className:"max-w-4xl mx-auto relative text-center",children:Q.jsxs(Zt.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.7},viewport:{once:!0},children:[Q.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs mb-8",children:[Q.jsx(pC,{size:11,className:"fill-violet-400"}),"About Us"]}),Q.jsxs("h2",{className:"text-white mb-6",style:{fontSize:"clamp(2rem, 5vw, 3.2rem)",fontWeight:700,letterSpacing:"-0.03em"},children:["Built for students,",Q.jsx("br",{}),Q.jsx("span",{style:{background:"linear-gradient(90deg, #818cf8, #60a5fa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"by a student"})]}),Q.jsx("p",{className:"text-white/50 mb-8 max-w-2xl mx-auto",style:{fontSize:"1rem",lineHeight:1.8},children:"Campus Link is a student-driven platform built to simplify access to quality engineering notes. No more scattered Google Drive links or lost WhatsApp messages. Everything is organized, searchable, and free."})]})})]}),Q.jsx("footer",{className:"relative border-t border-white/10 overflow-hidden bg-black",style:{minHeight:320},children:Q.jsxs("div",{className:"relative z-10 py-16 px-6",children:[Q.jsx("div",{className:"text-center mb-12",children:Q.jsx(hI,{text:"SHRA1",textColor:"text-white/80",overlayColor:"text-blue-400",fontSize:"text-[clamp(4rem,15vw,10rem)]",letterDelay:.1,overlayDelay:.06,overlayDuration:.45,springDuration:700,letterImages:["https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=2070&q=80","https://images.unsplash.com/photo-1462275646964-a0e3386b89fa?auto=format&fit=crop&w=2070&q=80"]})}),Q.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",children:[Q.jsx("div",{className:"flex items-center",children:Q.jsx("img",{src:"/logo.png",alt:"Campus Link",style:{height:28,width:"auto",mixBlendMode:"screen"}})}),Q.jsxs("div",{className:"flex items-center gap-3",children:[Q.jsxs("a",{href:"https://wa.link/s4ixn9",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 px-4 py-2 rounded-full border border-[#25D366]/30 bg-[#25D366]/10 text-[#25D366] text-xs hover:bg-[#25D366]/20 transition-colors",children:[Q.jsx(Na,{size:12})," WhatsApp"]}),Q.jsxs("a",{href:"https://www.linkedin.com/in/shravan-wadnerkar-29926238a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-1.5 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs hover:bg-blue-500/20 transition-colors",children:[Q.jsx(fC,{size:12})," LinkedIn"]})]})]}),Q.jsx("div",{className:"max-w-7xl mx-auto mt-6 pt-6 border-t border-white/5 text-center",children:Q.jsx("p",{className:"text-white/20 text-xs",children:"© 2026 Campus Link · All resources are for educational purposes only"})})]})})]})}YE.createRoot(document.getElementById("root")).render(Q.jsx(SI,{}));
