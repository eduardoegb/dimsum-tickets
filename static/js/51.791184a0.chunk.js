(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[51],{164:function(e,a,n){"use strict";n.r(a);var t=n(81),r=n(0),o=n.n(r),i=n(2),l=n(3),c=n.n(l),u=n(28),s=n(32),d=Object(u.b)("div")("counter","textarea",(function(e){return{"limit-error":e.limitError}})),m=function(e){var a=e.containerProps,n=void 0===a?{}:a,t=e.autoFocus,l=void 0!==t&&t,c=e.className,u=void 0===c?"":c,m=e.disabled,v=void 0!==m&&m,b=e.name,h=void 0===b?"":b,g=e.id,p=void 0===g?null:g,f=e.maxLength,x=void 0===f?null:f,y=e.minLength,E=void 0===y?0:y,L=e.placeholder,C=void 0===L?"":L,w=e.onClick,O=void 0===w?function(){return null}:w,P=e.onChange,k=void 0===P?function(){return null}:P,N=e.onFocus,F=void 0===N?function(){return null}:N,j=e.onBlur,K=void 0===j?function(){return null}:j,S=e.onKeyUp,B=void 0===S?function(){return null}:S,q=e.onKeyDown,z=void 0===q?function(){return null}:q,D=e.onPaste,I=void 0===D?function(){return null}:D,T=e.value,U=void 0===T?"":T,A=e.hasError,J=void 0!==A&&A,M=e.required,R=void 0!==M&&M,H=e.readOnly,_=void 0!==H&&H,G=e.resize,Q=void 0===G?"vertical":G,V=e.innerRef,W=void 0===V?null:V,X=e.ariaLabel,Y=void 0===X?"Enter text":X,Z=e.ariaAutocomplete,$=void 0===Z?"none":Z,ee=e.role,ae=void 0===ee?"textbox":ee,ne=e.characterLimitCounter,te=void 0===ne?0:ne,re=e.rows,oe=void 0===re?3:re,ie=e.errorLimit,le=void 0===ie?"Please limit your entry to":ie,ce=e.tabIndex,ue=void 0===ce?"":ce,se=Object(r.useMemo)((function(){return te<String(U).length&&te>0}),[te,U]),de=Object(s.b)("form-element-textarea","text",{hasError:se||J,readOnly:_,disabled:v}),me=de.cssClassName,ve=de.classNameElement,be=de.classNameBlock;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",Object(i.a)({},n,{className:"".concat(me," ").concat(u)}),o.a.createElement("div",{className:be("wrapper")},o.a.createElement("textarea",{ref:W,"aria-autocomplete":$,"aria-label":Y,"aria-multiline":!0,"aria-placeholder":C,"aria-required":R,autoFocus:l,className:ve("textarea"),"data-testid":"ds-large-input_main-component",disabled:v,id:p,maxLength:x,minLength:E,name:h,onBlur:K,onChange:k,onClick:O,onFocus:F,onKeyDown:z,onKeyUp:function(e){B(e)},onPaste:I,placeholder:C,role:ae,rows:String(oe),style:{resize:Q},value:U,tabIndex:ue}))),te>0&&o.a.createElement(d,{classProps:{limitError:se},"data-testid":"counter-area"},"".concat(se?"".concat(le," ").concat(te," characters.   "):"").concat(String(U).length," / ").concat(te)))};m.propTypes={containerProps:c.a.shape({}),autoFocus:c.a.bool,className:c.a.string,disabled:c.a.bool,name:c.a.string,id:c.a.number,maxLength:c.a.number,minLength:c.a.number,placeholder:c.a.string,onClick:c.a.func,onChange:c.a.func,onFocus:c.a.func,onBlur:c.a.func,onKeyUp:c.a.func,onKeyDown:c.a.func,onPaste:c.a.func,value:c.a.string,hasError:c.a.bool,required:c.a.bool,readOnly:c.a.bool,resize:c.a.string,innerRef:c.a.func,ariaLabel:c.a.string,ariaAutocomplete:c.a.string,role:c.a.string,characterLimitCounter:c.a.number,tabIndex:c.a.string};var v=m,b=n(821);a.default=function(){var e=Object(r.useState)(),a=Object(t.a)(e,2),n=a[0],i=a[1],l=function(e){var a=e.target.value;return i(a)};return o.a.createElement("div",null,o.a.createElement(v,{characterLimitCounter:20,containerProps:{id:"my-custom-id"},maxLength:500,onChange:l,rows:6,value:n}),o.a.createElement("div",{style:{height:"2rem"}}),o.a.createElement(b.a,{containerProps:{id:"my-custom-id"},feedbackMessage:"Some feedback from de user...",inputComponent:v,labelText:"Label text",onChange:l,placeholder:"Hint Text",value:n}))}}}]);
//# sourceMappingURL=51.791184a0.chunk.js.map