(this["webpackJsonpthe-shoppies"]=this["webpackJsonpthe-shoppies"]||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(0),a=n(14),i=n.n(a),r=(n(21),n(15)),l=n(6),j=(n(22),n(12)),d=n(30),o=n(31),h=n(29),b=n(26),u=n(27),O=n(28);function x(e){var t=e.setTitle,n=e.setPage;return Object(c.jsx)("div",{children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(d.a.Header,{children:Object(c.jsx)("h5",{children:"Movie Title"})}),Object(c.jsx)(d.a.Body,{children:Object(c.jsx)("input",{onChange:function(e){t(e.target.value),n(1)},type:"text",id:"textInput",placeholder:"Please search with 3+ characters...",className:"w-100 p-3",style:{width:"100%"}})})]})})}function m(e){var t=e.title,n=e.page,a=e.setNominated,i=e.nominated,O=e.setPage,x=Object(s.useState)(null),m=Object(l.a)(x,2),f=m[0],p=m[1],g=Object(s.useState)(!1),v=Object(l.a)(g,2),y=v[0],N=v[1],S=Object(s.useState)(null),w=Object(l.a)(S,2),k=w[0],I=w[1];if(Object(s.useEffect)((function(){t&&t.length>=3&&(N(!0),fetch("https://www.omdbapi.com/?s=".concat(t,"&apikey=b29472dd&type=movie&page=").concat(n)).then((function(e){return e.json()})).then(p).then((function(){return N(!1)})).catch(I))}),[n,t]),t.length<3)return Object(c.jsx)(d.a.Header,{children:Object(c.jsx)("h5",{children:"Results"})});if(y)return Object(c.jsx)(d.a.Header,{children:Object(c.jsx)("h5",{children:"Loading..."})});if(k)return Object(c.jsx)("pre",{children:JSON.stringify(k,null,2)});if(!f)return null;if("False"===f.Response)return Object(c.jsx)(d.a.Header,{children:Object(c.jsxs)("h5",{children:['No results for "',t,'"']})});var C=[];C.push(Object(c.jsx)(o.a.First,{disabled:1===n,onClick:function(){return O(1)}})),C.push(Object(c.jsx)(o.a.Prev,{disabled:1===n,onClick:function(){return O(n-1)}}));var H=Math.max(n-2,1),T=Math.ceil(f.totalResults/10),J=Math.min(T,H+4);H>=2&&J-n===1?H-=1:H>=3&&J-n===0&&(H-=2);for(var P=function(e){C.push(Object(c.jsx)(o.a.Item,{className:"text-secondary",onClick:function(){return O(e)},active:e===n,children:e},e))},E=H;E<=J;E++)P(E);return C.push(Object(c.jsx)(o.a.Next,{disabled:n===T,onClick:function(){return O(n+1)}})),C.push(Object(c.jsx)(o.a.Last,{disabled:n===T,onClick:function(){return O(T)}})),Object(c.jsxs)("div",{children:[Object(c.jsx)(d.a.Header,{children:Object(c.jsxs)(d.a.Title,{children:['Results for "',t,'"']})}),Object(c.jsx)(d.a.Body,{style:{padding:"0"},children:Object(c.jsx)(h.a,{variant:"flush",children:f.Search.map((function(e){return Object(c.jsx)(h.a.Item,{eventKey:e.imdbID,children:Object(c.jsxs)(b.a,{className:"align-items-center",children:[Object(c.jsx)(u.a,{sm:"auto",style:{width:"auto"},children:Object(c.jsx)(j.a,{onClick:function(){i.list.length<5&&(a({list:[].concat(Object(r.a)(i.list),[e])}),localStorage.setItem("nominated",JSON.stringify(i)),console.log(i.list))},disabled:i.list.includes(e)||i.list.length>=5,variant:"secondary",size:"sm",name:"nominate",value:e,children:"Nominate"})}),Object(c.jsxs)(u.a,{children:[e.Title," (",e.Year,")"]})]})})}))})}),Object(c.jsx)(d.a.Footer,{children:Object(c.jsx)(b.a,{className:"justify-content-center",children:Object(c.jsx)(o.a,{children:C})})})]})}function f(e){var t=e.nominated,n=e.setNominated;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(d.a,{children:[Object(c.jsx)(d.a.Header,{children:Object(c.jsx)("h5",{children:"Nominations"})}),Object(c.jsx)(d.a.Body,{style:{minHeight:"0",padding:"0"},children:Object(c.jsx)(h.a,{variant:"flush",children:t.list.map((function(e){return Object(c.jsx)(h.a.Item,{children:Object(c.jsxs)(b.a,{className:"align-items-center",children:[Object(c.jsx)(u.a,{sm:"auto",style:{width:"auto"},children:Object(c.jsx)(j.a,{onClick:function(){return n({list:t.list.filter((function(t){return t!==e}))})},variant:"secondary",size:"sm",name:"remove",value:e.imdbID,children:"Remove"})}),Object(c.jsxs)(u.a,{children:[e.Title," (",e.Year,")"]})]})},e.imdbID)}))})})]})})}var p=function(){var e=Object(s.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],i=Object(s.useState)(1),r=Object(l.a)(i,2),j=r[0],o=r[1],h=JSON.parse(localStorage.getItem("nominated"));console.log(h);var p=Object(s.useState)(h||{list:[]}),g=Object(l.a)(p,2),v=g[0],y=g[1];return localStorage.setItem("nominatedList",JSON.stringify(v.list)),document.body.style="background: #E9E9EC;",Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(O.a,{children:[Object(c.jsx)(b.a,{children:Object(c.jsxs)(u.a,{className:"py-3",children:[Object(c.jsx)("h2",{children:"The Shoppies"}),Object(c.jsx)(x,{setTitle:a,setPage:o})]})}),Object(c.jsxs)(b.a,{children:[Object(c.jsx)(u.a,{className:"py-3",children:Object(c.jsx)(d.a,{className:"w-100",children:Object(c.jsx)(m,{title:n,page:j,setPage:o,setNominated:y,nominated:v})})}),Object(c.jsx)("div",{className:"d-md-none w-100"}),Object(c.jsx)(u.a,{className:"py-3",children:Object(c.jsx)(f,{nominated:v,setNominated:y})})]})]})})};n(23);i.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.c37574a6.chunk.js.map