(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[40,51],{118:function(e,n,t){"use strict";t.r(n),t.d(n,"deepNodes",(function(){return i}));var c=t(1);function r(e,n){if(null==e)return{};var t,c,r=function(e,n){if(null==e)return{};var t,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)t=a[c],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=t(205),l=function(e){var n=e.children,t=void 0===n?[]:n,l=r(e,["children"]);return Object(c.a)({id:Object(a.a)(),name:"".concat(t.length?"Group":"Child"),children:t},l)},i=(n.default=[{id:"4548a528-a0b2-4ee5-8fb3-94628e3320a6",name:"Test123 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[{id:"4548a528-a0b2-4e44-8fb3-94628e3320a6",name:"Child 1 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]},{id:"0ba3e4bb-bce5-4c33-aafc-2f79670ac3b6",name:"Child 2 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}]},{id:"0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6",name:"Test (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}],[l({children:[l({children:[]}),l({children:[]}),l({children:[]})]}),l({children:[l({children:[l({children:[l({children:[]}),l({children:[]})]}),l({children:[l({children:[]})]})]}),l({children:[l({children:[l({children:[]}),l({children:[]}),l({children:[]})]}),l({children:[l({children:[]})]})]}),l({children:[]})]})])},156:function(e,n,t){"use strict";t.r(n);var c=t(79),r=t(0),a=t.n(r),l=t(204),i=t(206),d=t(81),o=t(82),h=t(118);n.default=function(){var e=Object(r.useState)(h.default),n=Object(c.a)(e,2),t=n[0],f=n[1],u=Object(r.useRef)(null),b=Object(r.useState)(""),s=Object(c.a)(b,2),p=s[0],O=s[1],m=Object(r.useState)(!1),j=Object(c.a)(m,2),g=j[0],y=j[1];return a.a.createElement(l.a,{key:g,data:t,fluid:!0,groupIcon:a.a.createElement(d.a,null),instanceRef:u,itemIcon:a.a.createElement(o.a,null),onOrderChange:f,onItemClick:function(e){var n;u.current.actions.select(e),p!==e.id?(n=!0,O(e.id)):u.current.state.selection[e.id]?(y(!g),console.log("Some clear selection logic here")):n=!0,n&&console.log("Some selection logic here")},plugins:[i.a],showChildrenAmount:!0,sortable:!0})}}}]);
//# sourceMappingURL=40.d845137c.chunk.js.map