(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[30],{150:function(e,t,a){},231:function(e,t,a){e.exports=a(65)},321:function(e,t,a){var r={"./":[65,9],"./App":[75,9],"./App.js":[75,9],"./ComboBox/Overview":[214,7,20],"./ComboBox/Overview.js":[214,7,20],"./DataGrid/Overview":[228,9,0,1,3,2,5],"./DataGrid/Overview.js":[228,9,0,1,3,2,5],"./DataGrid/PUI-2089":[215,9,0,1,3,2,10],"./DataGrid/PUI-2089.js":[215,9,0,1,3,2,10],"./DataGrid/PUI-2090":[216,9,0,1,3,2,11],"./DataGrid/PUI-2090.js":[216,9,0,1,3,2,11],"./DataGrid/PUI-2098":[217,9,0,1,3,2,12],"./DataGrid/PUI-2098.js":[217,9,0,1,3,2,12],"./DataGrid/PUI-2512":[218,9,0,1,3,2,9],"./DataGrid/PUI-2512.js":[218,9,0,1,3,2,9],"./DataGrid/PUI-2604":[219,9,0,1,3,2,7],"./DataGrid/PUI-2604.js":[219,9,0,1,3,2,7],"./DataGrid/ToolbarIssues":[220,9,0,1,3,2,8],"./DataGrid/ToolbarIssues.js":[220,9,0,1,3,2,8],"./DataGrid/columns":[203,9,21],"./DataGrid/columns.js":[203,9,21],"./DataGrid/editableColumns":[196,9,1,3,29,14],"./DataGrid/editableColumns.js":[196,9,1,3,29,14],"./FormItemLayout/LargeInputText":[230,9,0,22],"./FormItemLayout/LargeInputText.js":[230,9,0,22],"./MainLayout":[76,9],"./MainLayout.js":[76,9],"./NotFound":[148,9,4],"./NotFound.js":[148,9,4],"./Shuttle/Overview":[221,9,2,13,23],"./Shuttle/Overview.js":[221,9,2,13,23],"./Tabs/PUI-X":[229,9,0,1,3,2,6],"./Tabs/PUI-X.js":[229,9,0,1,3,2,6],"./TooltipTextProvider/PUI-2468":[222,9,0,16],"./TooltipTextProvider/PUI-2468.js":[222,9,0,16],"./TreeView/ExpandAll":[223,9,17],"./TreeView/ExpandAll.js":[223,9,17],"./TreeView/Overview":[224,9,24],"./TreeView/Overview.js":[224,9,24],"./TreeView/PUI-2579":[225,9,1,15,25],"./TreeView/PUI-2579.js":[225,9,1,15,25],"./TreeView/PUI-2690":[227,9,19],"./TreeView/PUI-2690-B":[226,9,18],"./TreeView/PUI-2690-B.js":[226,9,18],"./TreeView/PUI-2690.js":[227,9,19],"./TreeView/nodes":[204,9,26],"./TreeView/nodes.js":[204,9,26],"./components/styled":[207,9,0,27],"./components/styled.js":[207,9,0,27],"./index":[65,9],"./index.js":[65,9],"./styles.scss":[150,7],"./tickets":[85,9],"./tickets.js":[85,9],"./utils/randomData":[192,9,28],"./utils/randomData.js":[192,9,28]};function n(e){if(!a.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],n=t[0];return Promise.all(t.slice(2).map(a.e)).then((function(){return a.t(n,t[1])}))}n.keys=function(){return Object.keys(r)},n.id=321,e.exports=n},65:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(16),c=a.n(i),o=a(75),u=document.getElementById("root");c.a.render(n.a.createElement(o.default,null),u)},75:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var r=a(42),n=a(0),i=a.n(n),c=(a(150),a(183),a(76)),o=a(41);function u(){var e=Object(r.a)(["\n  margin-bottom: 16px;\n  font-weight: bold;\n"]);return u=function(){return e},e}function l(){var e=Object(r.a)(["\n  padding: 8px;\n  height: 100vh;\n"]);return l=function(){return e},e}var s=o.a.div(l()),d=o.a.div(u());function j(){return i.a.createElement(s,null,i.a.createElement(d,null,"Select a ticket to render on the right pane"),i.a.createElement(c.default,null))}},76:function(e,t,a){"use strict";a.r(t);var r=a(134),n=a(42),i=a(0),c=a.n(i),o=a(102),u=a(139),l=a(140),s=a(85),d=a(41),j=a(178),O=a.n(j),b=a(125),p=a(129);function I(){var e=Object(n.a)(["\n  width: 100%;\n"]);return I=function(){return e},e}function v(){var e=Object(n.a)(["\n  display: flex !important;\n  height: 96%;\n"]);return v=function(){return e},e}var h=d.a.div(v()),P=d.a.div(I());t.default=function(){var e,t=Object(i.useState)(""),n=Object(r.a)(t,2),d=n[0],j=n[1],I=(e=d,O()({loader:function(){return a(321)("./".concat(e)).catch((function(){return a.e(4).then(a.bind(null,148))}))},loading:p.a}));return c.a.createElement(h,null,c.a.createElement(o.c,{data:s.default,fluid:!0,groupIcon:c.a.createElement(u.a,null),itemIcon:c.a.createElement(l.a,null),onItemClick:function(e){"group"!==e.type&&e.path&&j(e.path)},plugins:[o.b],showChildrenAmount:!0,width:256}),c.a.createElement(b.a,{orientation:"vertical",style:{height:"".concat(window.innerHeight-80,"px")}}),d&&c.a.createElement(P,null,c.a.createElement(I,null)))}},85:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(323),i=function(e){return{id:Object(n.a)(),name:e,type:"ticket",children:[]}};t.default=[Object(r.a)(Object(r.a)({},i("DataGrid")),{},{type:"group",children:[Object(r.a)(Object(r.a)({},i("Overview")),{},{path:"DataGrid/Overview"}),Object(r.a)(Object(r.a)({},i("PUI-2089")),{},{path:"DataGrid/PUI-2089"}),Object(r.a)(Object(r.a)({},i("PUI-2090")),{},{path:"DataGrid/PUI-2090"}),Object(r.a)(Object(r.a)({},i("PUI-2098")),{},{path:"DataGrid/PUI-2098"}),Object(r.a)(Object(r.a)({},i("PUI-2512")),{},{path:"DataGrid/PUI-2512"}),Object(r.a)(Object(r.a)({},i("PUI-2604")),{},{path:"DataGrid/PUI-2604"}),Object(r.a)(Object(r.a)({},i("ToolbarIssues")),{},{path:"DataGrid/ToolbarIssues"})]}),Object(r.a)(Object(r.a)({},i("FormItemLayout")),{},{type:"group",children:[Object(r.a)(Object(r.a)({},i("LargeInputText")),{},{path:"FormItemLayout/LargeInputText"})]}),Object(r.a)(Object(r.a)({},i("TooltipTextProvider")),{},{type:"group",children:[Object(r.a)(Object(r.a)({},i("PUI-2468")),{},{path:"TooltipTextProvider/PUI-2468"})]}),Object(r.a)(Object(r.a)({},i("TreeView")),{},{type:"group",children:[Object(r.a)(Object(r.a)({},i("Overview")),{},{path:"TreeView/Overview"}),Object(r.a)(Object(r.a)({},i("PUI-2579")),{},{path:"TreeView/PUI-2579"}),Object(r.a)(Object(r.a)({},i("PUI-2690-B")),{},{path:"TreeView/PUI-2690-B"}),Object(r.a)(Object(r.a)({},i("PUI-2690")),{},{path:"TreeView/PUI-2690"})]}),Object(r.a)(Object(r.a)({},i("Shuttle")),{},{type:"group",children:[Object(r.a)(Object(r.a)({},i("Overview")),{},{path:"Shuttle/Overview"})]})]}},[[231,31,32]]]);
//# sourceMappingURL=main.ec428e82.chunk.js.map