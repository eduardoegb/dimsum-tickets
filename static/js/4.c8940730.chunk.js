(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[4],{209:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var o=n(0),i=n.n(o).a.createContext()},218:function(t,e,n){"use strict";function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return o}))},231:function(t,e,n){"use strict";function o(t){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e&&s(t.prototype,e),n&&s(t,n),t}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function a(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function f(t,e){return!e||"object"!==o(e)&&"function"!==typeof e?i(t):e}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return a})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return f})),n.d(e,"g",(function(){return i}))},237:function(t,e,n){"use strict";n.d(e,"a",(function(){return _}));var o=n(0),i=n.n(o),r=n(231),s=n(3),c=n(218),u=n(209),a="undefined"!==typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function f(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on".concat(e),(function(){n(window.event)}))}function l(t,e){for(var n=e.slice(0,e.length-1),o=0;o<n.length;o++)n[o]=t[n[o].toLowerCase()];return n}function h(t){"string"!==typeof t&&(t="");for(var e=(t=t.replace(/\s/g,"")).split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}for(var p={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"\u21ea":20,",":188,".":190,"/":191,"`":192,"-":a?173:189,"=":a?61:187,";":a?59:186,"'":222,"[":219,"]":221,"\\":220},d={"\u21e7":16,shift:16,"\u2325":18,alt:18,option:18,"\u2303":17,ctrl:17,control:17,"\u2318":91,cmd:91,command:91},y={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},v={16:!1,18:!1,17:!1,91:!1},m={},g=1;g<20;g++)p["f".concat(g)]=111+g;var b=[],O="all",k=[],w=function(t){return p[t.toLowerCase()]||d[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)};function x(t){O=t||"all"}function j(){return O||"all"}var I=function(t){var e=t.key,n=t.scope,o=t.method,i=t.splitKey,r=void 0===i?"+":i;h(e).forEach((function(t){var e=t.split(r),i=e.length,s=e[i-1],c="*"===s?"*":w(s);if(m[c]){n||(n=j());var u=i>1?l(d,e):[];m[c]=m[c].map((function(t){return(!o||t.method===o)&&t.scope===n&&function(t,e){for(var n=t.length>=e.length?t:e,o=t.length>=e.length?e:t,i=!0,r=0;r<n.length;r++)-1===o.indexOf(n[r])&&(i=!1);return i}(t.mods,u)?{}:t}))}}))};function P(t,e,n){var o;if(e.scope===n||"all"===e.scope){for(var i in o=e.mods.length>0,v)Object.prototype.hasOwnProperty.call(v,i)&&(!v[i]&&e.mods.indexOf(+i)>-1||v[i]&&-1===e.mods.indexOf(+i))&&(o=!1);(0!==e.mods.length||v[16]||v[18]||v[17]||v[91])&&!o&&"*"!==e.shortcut||!1===e.method(t,e)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}function F(t){var e=m["*"],n=t.keyCode||t.which||t.charCode;if(E.filter.call(this,t)){if(93!==n&&224!==n||(n=91),-1===b.indexOf(n)&&229!==n&&b.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(e){var n=y[e];t[e]&&-1===b.indexOf(n)?b.push(n):!t[e]&&b.indexOf(n)>-1?b.splice(b.indexOf(n),1):"metaKey"===e&&t[e]&&3===b.length&&(t.ctrlKey||t.shiftKey||t.altKey||(b=b.slice(b.indexOf(n))))})),n in v){for(var o in v[n]=!0,d)d[o]===n&&(E[o]=!0);if(!e)return}for(var i in v)Object.prototype.hasOwnProperty.call(v,i)&&(v[i]=t[y[i]]);t.getModifierState&&(!t.altKey||t.ctrlKey)&&t.getModifierState("AltGraph")&&(-1===b.indexOf(17)&&b.push(17),-1===b.indexOf(18)&&b.push(18),v[17]=!0,v[18]=!0);var r=j();if(e)for(var s=0;s<e.length;s++)e[s].scope===r&&("keydown"===t.type&&e[s].keydown||"keyup"===t.type&&e[s].keyup)&&P(t,e[s],r);if(n in m)for(var c=0;c<m[n].length;c++)if(("keydown"===t.type&&m[n][c].keydown||"keyup"===t.type&&m[n][c].keyup)&&m[n][c].key){for(var u=m[n][c],a=u.splitKey,f=u.key.split(a),l=[],h=0;h<f.length;h++)l.push(w(f[h]));l.sort().join("")===b.sort().join("")&&P(t,u,r)}}}function E(t,e,n){b=[];var o=h(t),i=[],r="all",s=document,c=0,u=!1,a=!0,p="+";for(void 0===n&&"function"===typeof e&&(n=e),"[object Object]"===Object.prototype.toString.call(e)&&(e.scope&&(r=e.scope),e.element&&(s=e.element),e.keyup&&(u=e.keyup),void 0!==e.keydown&&(a=e.keydown),"string"===typeof e.splitKey&&(p=e.splitKey)),"string"===typeof e&&(r=e);c<o.length;c++)i=[],(t=o[c].split(p)).length>1&&(i=l(d,t)),(t="*"===(t=t[t.length-1])?"*":w(t))in m||(m[t]=[]),m[t].push({keyup:u,keydown:a,scope:r,mods:i,shortcut:o[c],method:n,key:o[c],splitKey:p});"undefined"!==typeof s&&!function(t){return k.indexOf(t)>-1}(s)&&window&&(k.push(s),f(s,"keydown",(function(t){F(t)})),f(window,"focus",(function(){b=[]})),f(s,"keyup",(function(t){F(t),function(t){var e=t.keyCode||t.which||t.charCode,n=b.indexOf(e);if(n>=0&&b.splice(n,1),t.key&&"meta"===t.key.toLowerCase()&&b.splice(0,b.length),93!==e&&224!==e||(e=91),e in v)for(var o in v[e]=!1,d)d[o]===e&&(E[o]=!1)}(t)})))}var K={setScope:x,getScope:j,deleteScope:function(t,e){var n,o;for(var i in t||(t=j()),m)if(Object.prototype.hasOwnProperty.call(m,i))for(n=m[i],o=0;o<n.length;)n[o].scope===t?n.splice(o,1):o++;j()===t&&x(e||"all")},getPressedKeyCodes:function(){return b.slice(0)},isPressed:function(t){return"string"===typeof t&&(t=w(t)),-1!==b.indexOf(t)},filter:function(t){var e=t.target||t.srcElement,n=e.tagName,o=!0;return!e.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n&&"SELECT"!==n||e.readOnly)||(o=!1),o},unbind:function(t){if(t){if(Array.isArray(t))t.forEach((function(t){t.key&&I(t)}));else if("object"===Object(r.a)(t))t.key&&I(t);else if("string"===typeof t){for(var e=arguments.length,n=new Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var i=n[0],s=n[1];"function"===typeof i&&(s=i,i=""),I({key:t,scope:i,method:s,splitKey:"+"})}}else Object.keys(m).forEach((function(t){return delete m[t]}))}};for(var G in K)Object.prototype.hasOwnProperty.call(K,G)&&(E[G]=K[G]);if("undefined"!==typeof window){var B=window.hotkeys;E.noConflict=function(t){return t&&window.hotkeys===E&&(window.hotkeys=B),E},window.hotkeys=E}function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function C(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){Object(c.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var D={orientation:"vertical"},A=function(t,e){if(Object(s.isFunction)(e)){t.preventDefault();for(var n=arguments.length,o=new Array(n>2?n-2:0),i=2;i<n;i++)o[i-2]=arguments[i];e.apply(void 0,o)}},S=function(){return null},L=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(r.c)(this,t),Object(c.a)(this,"items",[]),this.options=C(C({},D),e);var n=this.options.orientation;this.keyBindings=C({ArrowUp:"horizontal"!==n&&"previous",ArrowRight:"vertical"!==n&&"next",ArrowDown:"horizontal"!==n&&"next",ArrowLeft:"vertical"!==n&&"previous",Home:"first",End:"last",PageUp:"first",PageDown:"last",Escape:"exit"},e.keyBindings),this.currentFocusedItem=null,this.currIndex=null,this.mapActions={previous:this.focusPrevious.bind(this),next:this.focusNext.bind(this),first:this.focusFirst.bind(this),last:this.focusLast.bind(this),exit:this.exit.bind(this),enter:function(){return null}},this.handleKeyDown=this.handleKeyDown.bind(this),this.register=this.register.bind(this),this.focusFirst=this.focusFirst.bind(this),this.focusLast=this.focusLast.bind(this),this.isGroupActive=this.isGroupActive.bind(this),this.focusNext=this.focusNext.bind(this),this.focusPrevious=this.focusPrevious.bind(this),this.focusItem=this.focusItem.bind(this),this.focusCurrent=this.focusCurrent.bind(this),this.getHotKeysParams=this.getHotKeysParams.bind(this)}return Object(r.b)(t,[{key:"getHotKeysParams",value:function(){var t=this.currentFocusedItem;return{item:t,index:Object(s.get)(t,["dataset"],{}).index}}},{key:"activate",value:function(){var t=this.options.getContainer;document.addEventListener("keydown",this.handleKeyDown,!0),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return document};Object.keys(t).forEach((function(o){var i=t[o],r=i.options,c=i.handler,u=i.allowDocumentHandler,a=void 0!==u&&u;E(o,C({element:n()},r),(function(t){var n=Object(s.isFunction)(e)?e():e;(a||n.item===document.activeElement)&&(t.preventDefault(),c(n))}))}))}(this.options.hotKeys,this.getHotKeysParams,t)}},{key:"deactivate",value:function(){document.removeEventListener("keydown",this.handleKeyDown,!0),function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object.keys(t).forEach((function(t){E.unbind(t)}))}(this.options.hotKeys)}},{key:"handleKeyDown",value:function(t){this.isGroupActive()&&this.executeActionByEvent(t)}},{key:"executeActionByEvent",value:function(t){var e=this;return(Array.isArray(this.keyBindings[t.key])?this.keyBindings[t.key]:[this.keyBindings[t.key]]).map((function(n){return A(t,"string"===typeof n?e.mapActions[n]:n)}))}},{key:"register",value:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=this.items.findIndex((function(e){return e.compareDocumentPosition(t)===Node.DOCUMENT_POSITION_PRECEDING}));t.specialOnFocus=n.onFocus||S,t.specialOnBlur=n.onBlur||S,t.onclick=function(){return e.focusItem(t)},t.onfocus=function(){e.focusItem(t)},-1===o?this.items.push(t):this.items.splice(o,0,t)}},{key:"unregister",value:function(t){var e=this.getItemIndexByNode(t);e>-1&&this.items.splice(e,1)}},{key:"exit",value:function(){(0,this.options.onExitFocusGroup)()}},{key:"focusItem",value:function(t){this.currentFocusedItem&&this.currentFocusedItem!==t&&(this.currentFocusedItem.specialOnBlur(),this.currentFocusedItem.setAttribute("tabindex",-1)),t&&(this.currentFocusedItem=t,t.setAttribute("tabindex",0),t.focus(),t.specialOnFocus())}},{key:"focusNext",value:function(){var t=this.getNextItem();this.focusItem(t)}},{key:"focusByNode",value:function(t){var e=this.getItemIndexByNode(t);this.focusByIndex(e)}},{key:"focusByIndex",value:function(t){var e=this.getItemByIndex(t);this.focusItem(e)}},{key:"focusPrevious",value:function(){var t=this.getPreviousItem();this.focusItem(t)}},{key:"focusFirst",value:function(){var t=this.getFirstItem();this.focusItem(t)}},{key:"focusLast",value:function(){var t=this.getLastItem();this.focusItem(t)}},{key:"focusCurrent",value:function(){this.focusItem(this.currentFocusedItem)}},{key:"focusNextGroup",value:function(){var t=this.options.onFocusNextGroup;this.exit(),t()}},{key:"focusPreviousGroup",value:function(){var t=this.options.onFocusPreviousGroup;this.exit(),t()}},{key:"getNextItem",value:function(){var t=this.options.loop,e=this.getFocusedIndex()+1;return this.checkCanFocusNext(e)?this.getItemByIndex(e):t?this.getFirstItem():this.focusNextGroup()}},{key:"getPreviousItem",value:function(){var t=this.options.loop,e=this.getFocusedIndex()-1;return this.checkCanFocusPrev(e)?this.getItemByIndex(e):t?this.getLastItem():this.focusPreviousGroup()}},{key:"checkCanFocusNext",value:function(t){return this.items.length>t}},{key:"checkCanFocusPrev",value:function(t){return t>=0}},{key:"getItemByIndex",value:function(t){return this.items[t]}},{key:"getItemIndexByNode",value:function(t){return this.items.findIndex((function(e){return e===t}))}},{key:"getFocusedIndex",value:function(){return this.getItemIndexByNode(document.activeElement)}},{key:"getFocusedItem",value:function(){var t=this.getFocusedIndex();return t>-1&&this.items[t]}},{key:"isGroupActive",value:function(){return-1!==this.getFocusedIndex()}},{key:"getFirstItem",value:function(){return!!this.items.length&&this.items[0]}},{key:"getLastItem",value:function(){return!!this.items.length&&this.items[this.items.length-1]}}]),t}();function R(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(r.e)(t);if(e){var i=Object(r.e)(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return Object(r.f)(this,n)}}var T=function(){return null},_=function(t){Object(r.d)(n,t);var e=R(n);function n(t){var o;return Object(r.c)(this,n),o=e.call(this,t),Object(c.a)(Object(r.g)(o),"activated",!1),o.focusGroup=new L(t),t.onFocusGroupSet(Object(r.g)(o)),o.actions={activate:o.activate.bind(Object(r.g)(o)),deactivate:o.deactivate.bind(Object(r.g)(o)),register:o.focusGroup.register,unregister:o.unregister.bind(Object(r.g)(o)),focusFirst:o.focusGroup.focusFirst,focusLast:o.focusGroup.focusLast,focusItemByIndex:o.focusItemByIndex.bind(Object(r.g)(o)),focusItemByNode:o.focusItemByNode.bind(Object(r.g)(o)),focus:o.focusGroup.focusCurrent,isGroupActive:o.focusGroup.isGroupActive,focusNext:o.focusGroup.focusNext,focusPrevious:o.focusGroup.focusPrevious},o}return Object(r.b)(n,[{key:"componentDidMount",value:function(){var t=this,e=this.props.autoFocusOnMount;this.activate(),e&&setTimeout((function(){t.actions.focusFirst()}),0)}},{key:"componentWillUnmount",value:function(){this.deactivate()}},{key:"activate",value:function(){var t=this.props.onActivate;this.focusGroup.activate(),this.activated=!0,Object(s.isFunction)(t)&&t()}},{key:"deactivate",value:function(){var t=this.props.onExitFocusGroup;this.activated=!1,this.focusGroup.deactivate(),Object(s.isFunction)(t)&&t()}},{key:"register",value:function(t){this.focusGroup.register(t)}},{key:"unregister",value:function(t){this.focusGroup.unregister(t)}},{key:"focusItemByIndex",value:function(t){var e=this;this.activated||this.activate(),setTimeout((function(){e.focusGroup.focusByIndex(t)}),200)}},{key:"focusItemByNode",value:function(t){this.activated||this.activate();var e=this.focusGroup.getItemIndexByNode(t);this.focusItemByIndex(e)}},{key:"render",value:function(){var t=this.props.children;return i.a.createElement(u.a.Provider,{value:this.actions},t)}}]),n}(o.Component);Object(c.a)(_,"defaultProps",{exitWhenNoPrevious:!1,exitWhenNoNext:!1,keyBindings:{},onFocus:T,onExitFocusGroup:T,onFocusPreviousGroup:T,onFocusNextGroup:T,onFocusGroupSet:T})},620:function(t,e,n){"use strict";var o=n(0),i=n.n(o),r=n(16);function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){Object(r.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return i.a.Children.map(t,(function(t){return t?Object(o.cloneElement)(t,c(c(c({},e),t.props),{},{className:"".concat(t.props.className," toolbar-item")})):t}),null)}},652:function(t,e,n){"use strict";var o=n(9),i=n(17),r=n(0),s=n.n(r),c=n(2),u=n.n(c),a=n(27),f=n(16),l=(n(3),n(237)),h=n(620),p=n(343),d=Object(a.a)("div")("toolbar",null,(function(t){var e,n=t.withDepth,o=t.alignment,i=t.size;return e={"without-depth":!n},Object(f.a)(e,o,!!o),Object(f.a)(e,i,i),e})),y=function(t){var e=t.containerProps,n=void 0===e?{}:e,c=t.innerRef,u=t.withDepth,a=void 0===u||u,f=t.alignment,y=void 0===f?"right":f,v=t.autoFocusOnMount,m=void 0===v||v,g=t.children,b=void 0===g?[]:g,O=t.size,k=void 0===O?"normal":O,w=Object(i.a)(t,["containerProps","innerRef","withDepth","alignment","autoFocusOnMount","children","size"]),x=Object(r.useRef)(null);return s.a.createElement(l.a,{autoFocusOnMount:m,getContainer:function(){return x.current},keyBindings:{Tab:"next"},orientation:"horizontal"},s.a.createElement(d,Object(o.a)({},n,w,{classProps:{withDepth:a,alignment:y,size:k},innerRef:Object(p.a)(c,x)}),Object(h.a)(b)))};y.propTypes={containerProps:u.a.shape({}),withDepth:u.a.bool,alignment:u.a.oneOf(["right","left"]),size:u.a.oneOf(["normal","compact"])},e.a=y}}]);
//# sourceMappingURL=4.c8940730.chunk.js.map