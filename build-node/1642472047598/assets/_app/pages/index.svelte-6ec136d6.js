import{K as Qe,C as We,S as W,i as Z,L as Ze,e as y,c as T,a as w,d as g,b as m,f as q,D as F,M as A,N as R,O as Te,t as we,g as Ce,P as z,Q as ae,h as ze,R as oe,T as Ge,E as H,U as Ie,V as ie,u as Je,W as _e,s as re,v as G,w as J,x as $,X as de,Y as he,Z as me,p as U,_ as ke,$ as Fe,n as B,a0 as De,A as x,m as ge,o as ve,a1 as $e,a2 as pe,a3 as be,a4 as xe,a5 as et,a6 as Oe,a7 as Se,j as tt,a8 as lt,l as st}from"../chunks/vendor-6ec25659.js";const M=We([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ae=Qe(M,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=l.filter(n=>n.color).map(n=>n.color).concat(e),i=a.filter((n,c)=>a.indexOf(n)===c).map((n,c)=>({id:c,color:n}));t(i)}),nt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},ce=(l,t)=>getComputedStyle(l)[t];function Ne(l,t,e){const s=l.slice();return s[35]=t[e],s}function qe(l,t){let e,s,a,r,i;return{key:l,first:null,c(){e=y("li"),s=y("button"),this.h()},l(n){e=T(n,"LI",{class:!0});var c=w(e);s=T(c,"BUTTON",{class:!0,style:!0}),w(s).forEach(g),c.forEach(g),this.h()},h(){m(s,"class","task__color-btn svelte-zbx8kf"),m(s,"style",a=`background-color: ${t[35].color}`),m(e,"class","task__color-item svelte-zbx8kf"),this.first=e},m(n,c){q(n,e,c),F(e,s),r||(i=A(s,"click",R(function(){Te(t[16](t[35].color))&&t[16](t[35].color).apply(this,arguments)})),r=!0)},p(n,c){t=n,c[0]&4100&&a!==(a=`background-color: ${t[35].color}`)&&m(s,"style",a)},d(n){n&&g(e),r=!1,i()}}}function at(l){let t,e,s,a,r,i,n,c,u,_,v,E,I,k,o,f,h,C=[],P=new Map,S,L,V,j,K,X,Y=l[12].filter(l[27]);const ee=p=>p[35].id;for(let p=0;p<Y.length;p+=1){let b=Ne(l,Y,p),N=ee(b);P.set(N,C[p]=qe(N,b))}return{c(){t=y("article"),e=y("div"),s=y("div"),a=y("div"),r=y("p"),i=y("textarea"),c=y("div"),u=y("div"),_=y("span"),v=we(l[4]),E=y("div"),I=y("button"),k=y("span"),o=y("button"),f=y("span"),h=y("ul");for(let p=0;p<C.length;p+=1)C[p].c();L=y("button"),V=y("span"),this.h()},l(p){t=T(p,"ARTICLE",{class:!0});var b=w(t);e=T(b,"DIV",{class:!0});var N=w(e);s=T(N,"DIV",{class:!0});var te=w(s);a=T(te,"DIV",{class:!0});var Q=w(a);r=T(Q,"P",{class:!0});var fe=w(r);fe.forEach(g),i=T(Q,"TEXTAREA",{class:!0}),w(i).forEach(g),Q.forEach(g),te.forEach(g),c=T(N,"DIV",{class:!0});var le=w(c);u=T(le,"DIV",{class:!0});var se=w(u);_=T(se,"SPAN",{class:!0});var ne=w(_);v=Ce(ne,l[4]),ne.forEach(g),se.forEach(g),le.forEach(g),N.forEach(g),E=T(b,"DIV",{class:!0});var d=w(E);I=T(d,"BUTTON",{class:!0});var D=w(I);k=T(D,"SPAN",{class:!0}),w(k).forEach(g),D.forEach(g),o=T(d,"BUTTON",{class:!0});var O=w(o);f=T(O,"SPAN",{class:!0}),w(f).forEach(g),O.forEach(g),d.forEach(g),h=T(b,"UL",{class:!0,style:!0});var Ee=w(h);for(let ue=0;ue<C.length;ue+=1)C[ue].l(Ee);Ee.forEach(g),L=T(b,"BUTTON",{class:!0});var ye=w(L);V=T(ye,"SPAN",{class:!0}),w(V).forEach(g),ye.forEach(g),b.forEach(g),this.h()},h(){m(r,"class","task__main-content svelte-zbx8kf"),z(r,"isEdit",l[7]),m(i,"class","task__main-content svelte-zbx8kf"),i.disabled=n=!l[7],z(i,"addTransition",l[10]),m(a,"class","task__main-content-wrapper svelte-zbx8kf"),m(s,"class","task__main-container svelte-zbx8kf"),m(_,"class","svelte-zbx8kf"),m(u,"class","task__info-content svelte-zbx8kf"),m(c,"class","task__info svelte-zbx8kf"),m(e,"class","task__main svelte-zbx8kf"),z(e,"isEdit",l[7]),m(k,"class","svg-image-del svelte-zbx8kf"),m(I,"class","task__menu-btn task__menu-btn_del svelte-zbx8kf"),m(f,"class","svg-image-pen svelte-zbx8kf"),m(o,"class","task__menu-btn task__menu-btn_edit svelte-zbx8kf"),z(o,"isSelect",l[7]),z(o,"isChanged",l[8]),z(o,"isSave",l[9]),m(E,"class","task__circle task__menu svelte-zbx8kf"),z(E,"isOpen",l[7]),m(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-zbx8kf"),m(h,"style",S=`background-color: ${l[2]}`),z(h,"isOpen",l[7]),m(V,"class","svelte-zbx8kf"),m(L,"class","task__info-open svelte-zbx8kf"),z(L,"isHidden",l[7]),m(t,"class",j="task "+l[1]+" svelte-zbx8kf"),z(t,"isDisabled",l[3]),z(t,"isInfoOpen",l[5]),z(t,"isEdit",l[7])},m(p,b){q(p,t,b),F(t,e),F(e,s),F(s,a),F(a,r),r.innerHTML=l[0],F(a,i),l[22](i),ae(i,l[0]),F(e,c),F(c,u),F(u,_),F(_,v),l[25](c),F(t,E),F(E,I),F(I,k),F(E,o),F(o,f),F(t,h);for(let N=0;N<C.length;N+=1)C[N].m(h,null);F(t,L),F(L,V),K||(X=[A(i,"input",l[23]),A(i,"input",l[24]),A(i,"keydown",l[18]),A(e,"click",l[13]),A(I,"click",R(l[14])),A(o,"click",R(l[26])),A(L,"click",R(l[28]))],K=!0)},p(p,b){b[0]&1&&(r.innerHTML=p[0]),b[0]&128&&z(r,"isEdit",p[7]),b[0]&128&&n!==(n=!p[7])&&(i.disabled=n),b[0]&1&&ae(i,p[0]),b[0]&1024&&z(i,"addTransition",p[10]),b[0]&16&&ze(v,p[4]),b[0]&128&&z(e,"isEdit",p[7]),b[0]&128&&z(o,"isSelect",p[7]),b[0]&256&&z(o,"isChanged",p[8]),b[0]&512&&z(o,"isSave",p[9]),b[0]&128&&z(E,"isOpen",p[7]),b[0]&69636&&(Y=p[12].filter(p[27]),C=oe(C,b,ee,1,p,Y,P,h,Ge,qe,null,Ne)),b[0]&4&&S!==(S=`background-color: ${p[2]}`)&&m(h,"style",S),b[0]&128&&z(h,"isOpen",p[7]),b[0]&128&&z(L,"isHidden",p[7]),b[0]&2&&j!==(j="task "+p[1]+" svelte-zbx8kf")&&m(t,"class",j),b[0]&10&&z(t,"isDisabled",p[3]),b[0]&34&&z(t,"isInfoOpen",p[5]),b[0]&130&&z(t,"isEdit",p[7])},i:H,o:H,d(p){p&&g(t),l[22](null),l[25](null);for(let b=0;b<C.length;b+=1)C[b].d();K=!1,Ie(X)}}}let Le=new Set;function ot(){Le.forEach(l=>{l.edit(!1)})}function it(l,t,e){let s,a;ie(l,M,d=>e(30,s=d)),ie(l,Ae,d=>e(12,a=d));let{class:r=""}=t,{text:i=""}=t,{color:n="#0029FF"}=t,{disabled:c=!1}=t,{id:u=null}=t,{date:_=""}=t,v=i,E=!1,I,k=!1,o=!1,f=!1,h=!1,C,P;const S=()=>{if(k===!1){let d=s.map(D=>(u===D.id&&(D.done=!D.done),D));M.set(d)}},L=()=>{let d=s.filter(D=>D.id!=u);M.set(d)};function V(d){e(7,k=d!=null?d:!k),k===!1&&X()}const j=d=>{let D=s.map(O=>(u===O.id&&(O.color=d),O));M.set(D)};function K(d){e(5,E=d!=null?d:!E);let D=0;I.childNodes.forEach(O=>D+=O.clientHeight),I.style.setProperty("--taskInfoHeight",`${E?D:0}px`)}function X(){o&&Y(i).then(()=>{e(8,o=!1),clearTimeout(P),e(9,f=!0),P=setTimeout(()=>{e(9,f=!1)},500)})}function Y(d){if(typeof d=="string")return new Promise(D=>{M.set(s.map(O=>(O.id===u&&(O.text=d),O))),D()});throw new Error("The value is not equal to the string")}function ee(d){let D=d.ctrlKey?!1:d.metaKey,O=d.keyCode;if(D&&O===83)return d.preventDefault(),X(),!1}function p(d=i){return e(8,o=d!==v)}function b(){e(11,C.rows=1,C);const d=parseFloat(ce(C,"padding-top"))+parseFloat(ce(C,"padding-bottom")),D=C.scrollHeight-d,O=parseFloat(ce(C,"line-height"));O==="normal"&&(O=parseFloat(ce(C,"font-size"))),console.log(D),e(11,C.rows=D/O,C)}Je(()=>{console.log(C.rows),b(),console.log(C.rows),e(10,h=!0)}),Le.add({save(){X()},edit(d){V(d)}});function N(d){_e[d?"unshift":"push"](()=>{C=d,e(11,C)})}function te(){i=this.value,e(0,i)}const Q=()=>{p(),b()};function fe(d){_e[d?"unshift":"push"](()=>{I=d,e(6,I)})}const le=()=>{k===!1&&ot(),V()},se=d=>d.color!=n,ne=()=>K();return l.$$set=d=>{"class"in d&&e(1,r=d.class),"text"in d&&e(0,i=d.text),"color"in d&&e(2,n=d.color),"disabled"in d&&e(3,c=d.disabled),"id"in d&&e(21,u=d.id),"date"in d&&e(4,_=d.date)},[i,r,n,c,_,E,I,k,o,f,h,C,a,S,L,V,j,K,ee,p,b,u,N,te,Q,fe,le,se,ne]}class Ve extends W{constructor(t){super();Z(this,t,it,at,Ze,{class:1,text:0,color:2,disabled:3,id:21,date:4},null,[-1,-1])}}function Pe(l,t,e){const s=l.slice();return s[4]=t[e],s}function Ue(l,t,e){const s=l.slice();return s[4]=t[e],s}function Be(l,t){let e,s,a,r,i,n=H,c;return s=new Ve({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),G(s.$$.fragment),this.h()},l(u){e=T(u,"LI",{class:!0});var _=w(e);J(s.$$.fragment,_),_.forEach(g),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(u,_){q(u,e,_),$(s,e,null),c=!0},p(u,_){t=u;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),s.$set(v)},r(){i=e.getBoundingClientRect()},f(){de(e),n(),he(e,i)},a(){n(),n=me(e,i,pe,{duration:300})},i(u){c||(U(s.$$.fragment,u),ke(()=>{r&&r.end(1),a=Fe(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(u){B(s.$$.fragment,u),a&&a.invalidate(),r=De(e,t[2],{key:t[4].id}),c=!1},d(u){u&&g(e),x(s),u&&r&&r.end()}}}function Me(l,t){let e,s,a,r,i,n=H,c;return s=new Ve({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),G(s.$$.fragment),this.h()},l(u){e=T(u,"LI",{class:!0});var _=w(e);J(s.$$.fragment,_),_.forEach(g),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(u,_){q(u,e,_),$(s,e,null),c=!0},p(u,_){t=u;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),s.$set(v)},r(){i=e.getBoundingClientRect()},f(){de(e),n(),he(e,i)},a(){n(),n=me(e,i,pe,{duration:300})},i(u){c||(U(s.$$.fragment,u),ke(()=>{r&&r.end(1),a=Fe(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(u){B(s.$$.fragment,u),a&&a.invalidate(),r=De(e,t[2],{key:t[4].id}),c=!1},d(u){u&&g(e),x(s),u&&r&&r.end()}}}function rt(l){let t,e,s,a=[],r=new Map,i,n=[],c=new Map,u,_,v=l[1].filter(Re);const E=o=>o[4].id;for(let o=0;o<v.length;o+=1){let f=Ue(l,v,o),h=E(f);r.set(h,a[o]=Be(h,f))}let I=l[1].filter(He);const k=o=>o[4].id;for(let o=0;o<I.length;o+=1){let f=Pe(l,I,o),h=k(f);c.set(h,n[o]=Me(h,f))}return{c(){t=y("section"),e=y("div"),s=y("ul");for(let o=0;o<a.length;o+=1)a[o].c();i=y("ul");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=T(o,"SECTION",{class:!0});var f=w(t);e=T(f,"DIV",{class:!0});var h=w(e);s=T(h,"UL",{class:!0});var C=w(s);for(let S=0;S<a.length;S+=1)a[S].l(C);C.forEach(g),i=T(h,"UL",{class:!0});var P=w(i);for(let S=0;S<n.length;S+=1)n[S].l(P);P.forEach(g),h.forEach(g),f.forEach(g),this.h()},h(){m(s,"class","task-section__col"),m(i,"class","task-section__col"),m(e,"class","container task-section__grid svelte-te6j4q"),m(t,"class",u="task-section "+l[0]+" svelte-te6j4q")},m(o,f){q(o,t,f),F(t,e),F(e,s);for(let h=0;h<a.length;h+=1)a[h].m(s,null);F(e,i);for(let h=0;h<n.length;h+=1)n[h].m(i,null);_=!0},p(o,[f]){if(f&2){v=o[1].filter(Re),ge();for(let h=0;h<a.length;h+=1)a[h].r();a=oe(a,f,E,1,o,v,r,s,be,Be,null,Ue);for(let h=0;h<a.length;h+=1)a[h].a();ve()}if(f&2){I=o[1].filter(He),ge();for(let h=0;h<n.length;h+=1)n[h].r();n=oe(n,f,k,1,o,I,c,i,be,Me,null,Pe);for(let h=0;h<n.length;h+=1)n[h].a();ve()}(!_||f&1&&u!==(u="task-section "+o[0]+" svelte-te6j4q"))&&m(t,"class",u)},i(o){if(!_){for(let f=0;f<v.length;f+=1)U(a[f]);for(let f=0;f<I.length;f+=1)U(n[f]);_=!0}},o(o){for(let f=0;f<a.length;f+=1)B(a[f]);for(let f=0;f<n.length;f+=1)B(n[f]);_=!1},d(o){o&&g(t);for(let f=0;f<a.length;f+=1)a[f].d();for(let f=0;f<n.length;f+=1)n[f].d()}}}const Re=l=>!l.done,He=l=>l.done;function ct(l,t,e){let s;ie(l,M,n=>e(1,s=n));let{class:a=""}=t;const[r,i]=$e({duration:n=>Math.sqrt(n*200),fallback(n,c){const u=getComputedStyle(n),_=u.transform==="none"?"":u.transform;return{duration:600,easing:xe,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return l.$$set=n=>{"class"in n&&e(0,a=n.class)},[a,s,r,i]}class ft extends W{constructor(t){super();Z(this,t,ct,rt,re,{class:0})}}function je(l){let t,e,s,a=l[2].text&&Ke(l);return{c(){t=y("button"),a&&a.c(),this.h()},l(r){t=T(r,"BUTTON",{class:!0});var i=w(t);a&&a.l(i),i.forEach(g),this.h()},h(){m(t,"class","btn svelte-1yy2xse")},m(r,i){q(r,t,i),a&&a.m(t,null),e||(s=A(t,"click",R(l[6])),e=!0)},p(r,i){r[2].text?a?a.p(r,i):(a=Ke(r),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(r){r&&g(t),a&&a.d(),e=!1,s()}}}function Ke(l){let t=l[2].text+"",e;return{c(){e=we(t)},l(s){e=Ce(s,t)},m(s,a){q(s,e,a)},p(s,a){a&4&&t!==(t=s[2].text+"")&&ze(e,t)},d(s){s&&g(e)}}}function ut(l){let t,e,s,a,r,i=l[2]&&je(l);return{c(){t=y("div"),e=y("input"),i&&i.c(),this.h()},l(n){t=T(n,"DIV",{class:!0});var c=w(t);e=T(c,"INPUT",{placeholder:!0,class:!0}),i&&i.l(c),c.forEach(g),this.h()},h(){m(e,"placeholder",l[1]),m(e,"class","svelte-1yy2xse"),m(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),z(t,"isError",l[5])},m(n,c){q(n,t,c),F(t,e),ae(e,l[4]),i&&i.m(t,null),l[10](t),a||(r=[A(e,"input",l[9]),A(e,"input",l[7]),A(e,"keydown",l[8])],a=!0)},p(n,[c]){c&2&&m(e,"placeholder",n[1]),c&16&&e.value!==n[4]&&ae(e,n[4]),n[2]?i?i.p(n,c):(i=je(n),i.c(),i.m(t,null)):i&&(i.d(1),i=null),c&5&&s!==(s="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse")&&m(t,"class",s),c&37&&z(t,"isError",n[5])},i:H,o:H,d(n){n&&g(t),i&&i.d(),l[10](null),a=!1,Ie(r)}}}function _t(l,t,e){let{class:s=""}=t,{placeholder:a="Placeholer"}=t,{btn:r=null}=t,i,n,c=!1;const u=et(),_=()=>{n?(u("submit",{value:n}),e(4,n="")):e(5,c=!0)},v=()=>{e(5,c=!1)},E=o=>{let f=o.key,h=o.ctrlKey,C=o.shiftKey;o.keyCode,h&&C&&u("color"),f==="Enter"&&_()};function I(){n=this.value,e(4,n)}function k(o){_e[o?"unshift":"push"](()=>{i=o,e(3,i)})}return l.$$set=o=>{"class"in o&&e(0,s=o.class),"placeholder"in o&&e(1,a=o.placeholder),"btn"in o&&e(2,r=o.btn)},[s,a,r,i,n,c,_,v,E,I,k]}class dt extends W{constructor(t){super();Z(this,t,_t,ut,re,{class:0,placeholder:1,btn:2})}}function Xe(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Ye(l,t){let e,s,a,r,i=H,n,c,u;return{key:l,first:null,c(){e=y("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(g),this.h()},h(){m(e,"class","add-todo__color svelte-1hafqlz"),m(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){q(_,e,v),n=!0,c||(u=A(e,"click",R(function(){Te(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(_,v){t=_,(!n||v&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",s)},r(){r=e.getBoundingClientRect()},f(){de(e),i(),he(e,r)},a(){i(),i=me(e,r,pe,{})},i(_){n||(ke(()=>{a||(a=Oe(e,Se,{},!0)),a.run(1)}),n=!0)},o(_){a||(a=Oe(e,Se,{},!1)),a.run(0),n=!1},d(_){_&&g(e),_&&a&&a.end(),c=!1,u()}}}function ht(l){let t,e,s,a,r=[],i=new Map,n,c,u,_,v,E=l[3].filter(l[7]);const I=k=>k[9].id;for(let k=0;k<E.length;k+=1){let o=Xe(l,E,k),f=I(o);i.set(f,r[k]=Ye(f,o))}return n=new dt({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("color",l[8]),n.$on("submit",l[4]),{c(){t=y("div"),e=y("div"),s=y("span");for(let k=0;k<r.length;k+=1)r[k].c();G(n.$$.fragment),this.h()},l(k){t=T(k,"DIV",{class:!0});var o=w(t);e=T(o,"DIV",{class:!0});var f=w(e);s=T(f,"SPAN",{class:!0,style:!0}),w(s).forEach(g);for(let h=0;h<r.length;h+=1)r[h].l(f);f.forEach(g),J(n.$$.fragment,o),o.forEach(g),this.h()},h(){m(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),m(s,"style",a=`color: ${l[1]}`),m(e,"class","add-todo__color-list svelte-1hafqlz"),z(e,"isOpen",l[2]),m(t,"class",c="add-todo "+l[0]+" svelte-1hafqlz")},m(k,o){q(k,t,o),F(t,e),F(e,s);for(let f=0;f<r.length;f+=1)r[f].m(e,null);$(n,t,null),u=!0,_||(v=A(s,"click",R(l[6])),_=!0)},p(k,[o]){if((!u||o&2&&a!==(a=`color: ${k[1]}`))&&m(s,"style",a),o&42){E=k[3].filter(k[7]),ge();for(let f=0;f<r.length;f+=1)r[f].r();r=oe(r,o,I,1,k,E,i,e,be,Ye,null,Xe);for(let f=0;f<r.length;f+=1)r[f].a();ve()}o&4&&z(e,"isOpen",k[2]),(!u||o&1&&c!==(c="add-todo "+k[0]+" svelte-1hafqlz"))&&m(t,"class",c)},i(k){if(!u){for(let o=0;o<E.length;o+=1)U(r[o]);U(n.$$.fragment,k),u=!0}},o(k){for(let o=0;o<r.length;o+=1)B(r[o]);B(n.$$.fragment,k),u=!1},d(k){k&&g(t);for(let o=0;o<r.length;o+=1)r[o].d();x(n),_=!1,v()}}}function mt(l,t,e){let s;ie(l,Ae,E=>e(3,s=E));let{class:a=""}=t,r="#0029FF",i=!1;const n=E=>{let I={id:Date.now(),text:E.detail.value,color:r,done:!1,date:nt(new Date,"dot")};M.update(k=>k=[I,...k])},c=E=>E&&e(1,r=E),u=()=>e(2,i=!i),_=E=>E.color!=r,v=()=>e(2,i=!i);return l.$$set=E=>{"class"in E&&e(0,a=E.class)},[a,r,i,s,n,c,u,_,v]}class kt extends W{constructor(t){super();Z(this,t,mt,ht,re,{class:0})}}function gt(l){let t,e,s,a,r,i,n;return a=new kt({}),i=new ft({props:{class:"mt-50"}}),{c(){t=tt(),e=y("section"),s=y("div"),G(a.$$.fragment),G(i.$$.fragment),this.h()},l(c){lt('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=st(c),e=T(c,"SECTION",{class:!0});var _=w(e);s=T(_,"DIV",{class:!0});var v=w(s);J(a.$$.fragment,v),v.forEach(g),_.forEach(g),J(i.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(s,"class","container"),m(e,"class",r=""+(l[0]+" mt-50 svelte-110abfo"))},m(c,u){q(c,t,u),q(c,e,u),F(e,s),$(a,s,null),$(i,c,u),n=!0},p(c,[u]){(!n||u&1&&r!==(r=""+(c[0]+" mt-50 svelte-110abfo")))&&m(e,"class",r)},i(c){n||(U(a.$$.fragment,c),U(i.$$.fragment,c),n=!0)},o(c){B(a.$$.fragment,c),B(i.$$.fragment,c),n=!1},d(c){c&&g(t),c&&g(e),x(a),x(i,c)}}}function vt(l,t,e){let{class:s=""}=t;return l.$$set=a=>{"class"in a&&e(0,s=a.class)},[s]}class bt extends W{constructor(t){super();Z(this,t,vt,gt,re,{class:0})}}export{bt as default};
