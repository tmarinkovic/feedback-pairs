(this["webpackJsonpmeetings-creator"]=this["webpackJsonpmeetings-creator"]||[]).push([[0],{129:function(t,e,n){"use strict";n.r(e);var i=n(5),c=n(0),o=n(14),a=n.n(o),r=(n(95),n(13)),s=n(18),u=(n(96),n(77)),l=n.n(u),p=n(155),d=n(24),f=n(16),h="UPDATE_PARTICIPANTS",b="REMOVE_PARTICIPANTS",j="STORE_ZOOM_CODE",O="STORE_SESSION_ID",m="STORE_ZOOM_URLS",v="SESSION_FETCHED",x={participants:[],sessionFetched:!1},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case m:return Object(f.a)(Object(f.a)({},t),{},{zoomUrls:e.zoomUrls});case j:return Object(f.a)(Object(f.a)({},t),{},{zoomCode:e.zoomCode});case v:return Object(f.a)(Object(f.a)({},t),{},{sessionFetched:!0});case O:return Object(f.a)(Object(f.a)({},t),{},{sessionId:e.sessionId});case h:return Object(f.a)(Object(f.a)({},t),{},{participants:[].concat(Object(r.a)(t.participants),[e.participant])});case b:var n=Object(r.a)(t.participants),i=n.indexOf(e.participant);return n.splice(i,1),Object(f.a)(Object(f.a)({},t),{},{participants:n});default:return t}},w=function(){var t=Object(p.a)({input:{borderBottom:"1px solid #e94560 !important",color:"white"},chip:{background:"#0f3460",color:"white","&:hover":{background:"#1958A2"}}}),e=Object(d.c)((function(t){return t.participants})),n=t(),c=Object(d.b)(),o=function(){return Object(i.jsx)("span",{className:"chip-input-label",children:"Participants"})};return Object(i.jsx)("div",{className:"participant-input",children:Object(i.jsx)(l.a,{label:Object(i.jsx)(o,{}),classes:{input:n.input,chip:n.chip},value:e,onAdd:function(t){return function(t){c({type:h,participant:t})}(t)},onDelete:function(t,e){return function(t){c({type:b,participant:t})}(t)}})})},N=n(159),S=n(156),y=n(157),E=function(t){var e=t.pair,n=t.colors;return Object(i.jsx)(S.a,{item:!0,xs:6,sm:6,md:4,lg:3,xl:3,children:Object(i.jsxs)(y.a,{className:"paper",children:[Object(i.jsx)("span",{style:{color:n[e[0]]},children:e[0]})," - ",Object(i.jsx)("span",{style:{color:n[e[1]]},children:e[1]})]},"paper-".concat(e))})},C=function(t){var e=t.session,n=t.sessionNumber,c=t.colors;return Object(i.jsxs)(S.a,{className:"session",item:!0,container:!0,xs:12,sm:8,md:8,lg:8,xl:8,children:[Object(i.jsx)("span",{className:"session-title",children:n}),e.map((function(t){return Object(i.jsx)(E,{colors:c,pair:t},"pair-".concat(t))}))]})},I=function(t){var e=t.schedule,n=t.colors,c=0;return e.map((function(t){return c++,Object(i.jsx)(C,{className:"sessions",colors:n,session:t,sessionNumber:c},"session-".concat(c))}))},T=n(158),_=function(t){var e=t.display;return Object(i.jsx)(T.a,{color:"inherit",className:"loading",style:{display:e}})},P=n(160),k=n(161),R=function(t){var e=t.notification,n=t.setNotification,c=function(){n(!1,"")};return Object(i.jsx)(P.a,{className:"notification",onClose:c,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:3e3,open:e.show,children:Object(i.jsx)(k.a,{onClose:c,severity:"info",children:e.text})})},D=function(t){var e=0,n=[],i=[],c=0;return function(){t.length%2!==0&&t.push("Wait");var o=t.length/2,a=t.length-1,s=function(t){for(var e=[],n=0;n<t.length;n++)for(var i=n+1;i<t.length;i++)e.push([t[n],t[i]]);return e}(t);return new Promise((function(t,u){(function(t,o,a){return new Promise((function(s,u){for(var l=Object(r.a)(t);i.length!==a;){for(var p=t,d=[],f=[];d.length!==o;){var h=Math.floor(Math.random()*t.length),b=t[h];if(!n.includes(b))if(void 0===b||f.includes(b[0])||f.includes(b[1])){if(++c>100)break}else c=0,d.push(t[h]),f.push(b[0]),f.push(b[1]),p.splice(h,1)}c>100?(++e>1e5&&u(new Error("Execution timed out")),t=Object(r.a)(l),n=[],i=[],c=0):(i.push(d),t=p)}s(i)}))})(s,o,a).then((function(e){return t(e)})).catch((function(t){return u(new Error(t))}))}))}()},L="https://quc7gr1g00.execute-api.eu-west-2.amazonaws.com/dev/",U=n(128),z=n(130).v4,A=function(){return new URLSearchParams(window.location.search).get("code")},F=function(t,e,n,i){if(void 0===i.sessionId){var c=new URLSearchParams(window.location.search).get("sessionId"),o=A();M(n,t,c).then((function(e){return W(o,t,c,e[0].length)}))}},J=function(t,e){U(L+"session/",{method:"PUT",body:JSON.stringify({id:e,pairs:t}),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return console.log(t)}))},M=function(t,e,n){null===n&&(n=z()),e({type:O,sessionId:n});var i="",c=A();return i=null===c?"?sessionId=".concat(n):"?code=".concat(c,"&sessionId=").concat(n),window.history.replaceState(null,null,window.location.pathname+i),X(t,e,n).then((function(t){return void 0===t?[[]]:JSON.parse(t.pairs.S)}))},W=function(t,e,n,i){null!==t&&(e({type:j,zoomCode:t}),function(t,e,n){var i={authCode:t,sessionId:e,pairsCount:n};U(L+"zoom/",{method:"POST",body:JSON.stringify(i),headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(t){return console.log(t)}))}(t,n,i))},X=function(t,e,n){return U(L+"session/"+n).then((function(t){return t.json()})).then((function(n){var i=n.response;if(void 0!==i){var c=JSON.parse(i.pairs.S);return 0!==c.length&&(t(c),c[0].flat().map((function(t){return e({type:h,participant:t})}))),e({type:v}),i}})).then((function(t){return t}))},B=n(80),V=n.p+"static/media/beep.9c48b6ff.mp3",H=function(){var t=Object(d.b)(),e=Object(d.c)((function(t){return t})),n=e.participants,o=Object(B.a)(V),a=Object(s.a)(o,1)[0],u=Object(c.useState)([]),l=Object(s.a)(u,2),p=l[0],f=l[1],h=Object(c.useState)({}),j=Object(s.a)(h,2),O=j[0],m=j[1],v=Object(c.useState)("none"),x=Object(s.a)(v,2),g=x[0],S=x[1],y=Object(c.useState)({show:!1,text:""}),E=Object(s.a)(y,2),C=E[0],T=E[1],P=(p.length,function(t){f(t),m(function(t){var e={},n=["#b9f261","#f76865","#41a6f6","#fae058","#73eff7","#94b0c2","#99b851","#bf585e","#61f2ca","#51b892","#ffbf54","#f4f4f4","#ffcd75","#38b764"],i=0;return t.forEach((function(t){t.forEach((function(t){e[t]=n[i],i++}))})),e}(t[0]))});F(t,0,P,e);return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(_,{display:g}),Object(i.jsxs)("div",{className:"middle",children:[Object(i.jsx)(R,{notification:C,setNotification:T}),Object(i.jsx)(w,{}),Object(i.jsxs)("div",{className:"tooltip-container",children:[Object(i.jsx)("span",{className:"tooltip",children:"add participant"}),Object(i.jsx)("img",{className:"enter-button",src:"/feedback-pairs/enter-key.png",alt:"enter key"})]}),Object(i.jsx)(N.a,{className:"create-pairs-button",variant:"contained",color:"primary",onClick:function(){n.length<3?T({show:!0,text:"Less than 3 participants is not supported!"}):n.length>14?T({show:!0,text:"More than 14 participants is not supported!"}):n.includes("Wait")?T({show:!0,text:"Wait is reserved word, please remove it from list of participants"}):0!==n.length&&(S("block"),setTimeout((function(){return D(Object(r.a)(n)).then((function(t){P(t),J(t,e.sessionId)})).then((function(t){return S("none")})).catch((function(t){T({show:!0,text:"We are having issue computing this! Please try again or try with less participants."}),S("none")}))}),500))},children:"Pair"}),Object(i.jsx)(N.a,{className:"clear-pairs-button",variant:"contained",color:"primary",onClick:function(){return a(),n.map((function(e){return t({type:b,participant:e})})),f([]),J([],e.sessionId),void T({show:!0,text:"Removed all participants!"})},children:"Clear"}),Object(i.jsx)(N.a,{className:"share-pairs-button",variant:"contained",color:"default",onClick:function(){return function(){var t=document.body.appendChild(document.createElement("input"));t.value=window.location,t.focus(),t.select(),document.execCommand("copy"),t.parentNode.removeChild(t),window.scrollTo(0,0),T({show:!0,text:"Link copied to clipboard! Session will be valid for 24hours!"})}()},children:"Share"})]}),Object(i.jsx)(I,{schedule:p,colors:O})]})},Z=function(t){t&&t instanceof Function&&n.e(4).then(n.bind(null,162)).then((function(e){var n=e.getCLS,i=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),i(t),c(t),o(t),a(t)}))},q=n(54),G=Object(q.b)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(i.jsx)(d.a,{store:G,children:Object(i.jsx)(H,{})}),document.getElementById("root")),Z()},95:function(t,e,n){},96:function(t,e,n){}},[[129,1,2]]]);
//# sourceMappingURL=main.c551b2d9.chunk.js.map