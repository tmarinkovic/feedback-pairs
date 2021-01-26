(this["webpackJsonpmeetings-creator"]=this["webpackJsonpmeetings-creator"]||[]).push([[0],{127:function(t,e,n){"use strict";n.r(e);var c=n(6),i=n(0),r=n(14),a=n.n(r),s=(n(93),n(11)),o=n(17),u=(n(94),n(77)),l=n.n(u),p=n(151),f=n(31),j=n(42),b="UPDATE_PARTICIPANTS",h="REMOVE_PARTICIPANTS",O={participants:[]},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b:return Object(j.a)(Object(j.a)({},t),{},{participants:[].concat(Object(s.a)(t.participants),[e.participant])});case h:var n=Object(s.a)(t.participants),c=n.indexOf(e.participant);return n.splice(c,1),Object(j.a)(Object(j.a)({},t),{},{participants:n});default:return t}},x=function(){var t=Object(p.a)({input:{borderBottom:"1px solid #e94560 !important",color:"white"},chip:{background:"#0f3460",color:"white","&:hover":{background:"#1958A2"}}}),e=Object(i.useState)([]),n=Object(o.a)(e,2),r=n[0],a=n[1],u=t(),j=Object(f.b)(),O=function(){return Object(c.jsx)("span",{className:"chip-input-label",children:"Participants"})};return Object(c.jsx)("div",{className:"participant-input",children:Object(c.jsx)(l.a,{label:Object(c.jsx)(O,{}),classes:{input:u.input,chip:u.chip},value:r,onAdd:function(t){return function(t){a([].concat(Object(s.a)(r),[t])),j({type:b,participant:t})}(t)},onDelete:function(t,e){return function(t){var e=Object(s.a)(r),n=e.indexOf(t);e.splice(n,1),a(e),j({type:h,participant:t})}(t)}})})},m=n(155),v=n(152),g=n(153),N=function(t){var e=t.pair,n=t.colors;return Object(c.jsx)(v.a,{item:!0,xs:6,sm:6,md:4,lg:3,xl:3,children:Object(c.jsxs)(g.a,{className:"paper",children:[Object(c.jsx)("span",{style:{color:n[e[0]]},children:e[0]})," - ",Object(c.jsx)("span",{style:{color:n[e[1]]},children:e[1]})]},"paper-".concat(e))})},w=function(t){var e=t.session,n=t.sessionNumber,i=t.colors;return Object(c.jsxs)(v.a,{className:"session",item:!0,container:!0,xs:12,sm:8,md:8,lg:8,xl:8,children:[Object(c.jsx)("span",{className:"session-title",children:n}),e.map((function(t){return Object(c.jsx)(N,{colors:i,pair:t},"pair-".concat(t))}))]})},E=function(t){var e=t.schedule,n=t.colors,i=0;return e.map((function(t){return i++,Object(c.jsx)(w,{colors:n,session:t,sessionNumber:i},"session-".concat(i))}))},y=n(154),_=function(t){var e=t.display;return Object(c.jsx)(y.a,{color:"inherit",className:"loading",style:{display:e}})},P=n(156),S=n(157),T=function(t){var e=t.notification,n=t.setNotification,i=function(){n(!1,"")};return Object(c.jsx)(P.a,{className:"notification",onClose:i,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:3e3,open:e.show,children:Object(c.jsx)(S.a,{onClose:i,severity:"info",children:e.text})})},A=function(t){var e=0,n=[],c=[],i=0;return function(){t.length%2!==0&&t.push("Wait");var r=t.length/2,a=t.length-1,o=function(t){for(var e=[],n=0;n<t.length;n++)for(var c=n+1;c<t.length;c++)e.push([t[n],t[c]]);return e}(t);return new Promise((function(t,u){(function(t,r,a){return new Promise((function(o,u){for(var l=Object(s.a)(t);c.length!==a;){for(var p=t,f=[],j=[];f.length!==r;){var b=Math.floor(Math.random()*t.length),h=t[b];if(!n.includes(h))if(void 0===h||j.includes(h[0])||j.includes(h[1])){if(++i>100)break}else i=0,f.push(t[b]),j.push(h[0]),j.push(h[1]),p.splice(b,1)}i>100?(++e>1e5&&u(new Error("Execution timed out")),t=Object(s.a)(l),n=[],c=[],i=0):(c.push(f),t=p)}o(c)}))})(o,r,a).then((function(e){return t(e)})).catch((function(t){return u(new Error(t))}))}))}()},C=function(){var t=Object(f.c)((function(t){return t.participants})),e=Object(i.useState)([]),n=Object(o.a)(e,2),r=n[0],a=n[1],u=Object(i.useState)({}),l=Object(o.a)(u,2),p=l[0],j=l[1],b=Object(i.useState)("none"),h=Object(o.a)(b,2),O=h[0],d=h[1],v=Object(i.useState)({show:!1,text:""}),g=Object(o.a)(v,2),N=g[0],w=g[1];return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(_,{display:O}),Object(c.jsxs)("div",{className:"middle",children:[Object(c.jsx)(T,{notification:N,setNotification:w}),Object(c.jsx)(x,{}),Object(c.jsx)(m.a,{className:"create-pairs-button",variant:"contained",color:"primary",onClick:function(){t.length<3?w({show:!0,text:"Less than 3 participants is not supported!"}):t.length>14?w({show:!0,text:"More than 14 participants is not supported!"}):0!==t.length&&(d("block"),setTimeout((function(){return A(Object(s.a)(t)).then((function(t){return j(function(t){var e={},n=["#b9f261","#f76865","#41a6f6","#fae058","#73eff7","#94b0c2","#99b851","#bf585e","#61f2ca","#51b892","#ffbf54","#f4f4f4","#ffcd75","#38b764"],c=0;return t.forEach((function(t){t.forEach((function(t){e[t]=n[c],c++}))})),e}(t[0])),a(t)})).then((function(t){return d("none")})).catch((function(t){w({show:!0,text:"We are having issue computing this! Please try again or try with less participants."}),d("none")}))}),500))},children:"Pair"})]}),Object(c.jsx)(E,{schedule:r,colors:p})]})},D=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,158)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))},I=n(54),k=Object(I.b)(d,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(c.jsx)(f.a,{store:k,children:Object(c.jsx)(C,{})}),document.getElementById("root")),D()},93:function(t,e,n){},94:function(t,e,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.78df5897.chunk.js.map