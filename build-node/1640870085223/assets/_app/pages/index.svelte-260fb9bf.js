import{K as Ie,C as Fe,S as V,i as L,s as B,e as b,c as y,a as w,d as p,b as k,f as I,D as T,L as D,M as j,N as le,t as se,g as ne,O as U,h as oe,P as K,Q as De,E as O,R as ae,T as Q,v as q,w as M,x as P,U as X,V as Y,W as Z,p as N,X as z,Y as re,n as A,Z as ie,A as R,m as G,o as H,_ as Ne,$ as J,a0 as $,a1 as Ae,a2 as ce,a3 as Oe,a4 as Se,a5 as ue,a6 as fe,j as Ue,a7 as Ve,l as Le}from"../chunks/vendor-935e33b2.js";const S=Fe([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),_e=Ie(S,(o,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000"];let n=o.filter(s=>s.color).map(s=>s.color).concat(e),i=n.filter((s,a)=>n.indexOf(s)===a).map((s,a)=>({id:a,color:s}));t(i)});function de(o,t,e){const l=o.slice();return l[11]=t[e],l}function he(o,t){let e,l,n,r,i;return{key:o,first:null,c(){e=b("li"),l=b("button"),this.h()},l(s){e=y(s,"LI",{class:!0});var a=w(e);l=y(a,"BUTTON",{class:!0,style:!0}),w(l).forEach(p),a.forEach(p),this.h()},h(){k(l,"class","task__color-btn svelte-100588h"),k(l,"style",n=`background-color: ${t[11].color}`),k(e,"class","task__color-item svelte-100588h"),this.first=e},m(s,a){I(s,e,a),T(e,l),r||(i=D(l,"click",j(function(){le(t[7](t[11].color))&&t[7](t[11].color).apply(this,arguments)})),r=!0)},p(s,a){t=s,a&20&&n!==(n=`background-color: ${t[11].color}`)&&k(l,"style",n)},d(s){s&&p(e),r=!1,i()}}}function Be(o){let t,e,l,n,r,i,s,a,c=[],_=new Map,h,g,v,m,d=o[4].filter(o[9]);const u=f=>f[11].id;for(let f=0;f<d.length;f+=1){let E=de(o,d,f),C=u(E);_.set(C,c[f]=he(C,E))}return{c(){t=b("div"),e=b("div"),l=b("p"),n=se(o[1]),r=b("div"),i=b("button"),s=b("span"),a=b("ul");for(let f=0;f<c.length;f+=1)c[f].c();this.h()},l(f){t=y(f,"DIV",{class:!0});var E=w(t);e=y(E,"DIV",{class:!0});var C=w(e);l=y(C,"P",{class:!0});var F=w(l);n=ne(F,o[1]),F.forEach(p),C.forEach(p),r=y(E,"DIV",{class:!0});var x=w(r);i=y(x,"BUTTON",{class:!0});var ee=w(i);s=y(ee,"SPAN",{class:!0}),w(s).forEach(p),ee.forEach(p),x.forEach(p),a=y(E,"UL",{class:!0,style:!0});var te=w(a);for(let W=0;W<c.length;W+=1)c[W].l(te);te.forEach(p),E.forEach(p),this.h()},h(){k(l,"class","svelte-100588h"),k(e,"class","task__main svelte-100588h"),k(s,"class","svg-image-del svelte-100588h"),k(i,"class","task__menu-btn task__menu-btn_del svelte-100588h"),k(r,"class","task__circle task__menu svelte-100588h"),k(a,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),k(a,"style",h=`background-color: ${o[2]}`),k(t,"class",g="task "+o[0]+" svelte-100588h"),U(t,"isDisabled",o[3])},m(f,E){I(f,t,E),T(t,e),T(e,l),T(l,n),T(t,r),T(r,i),T(i,s),T(t,a);for(let C=0;C<c.length;C+=1)c[C].m(a,null);v||(m=[D(e,"click",o[5]),D(i,"click",j(o[6]))],v=!0)},p(f,[E]){E&2&&oe(n,f[1]),E&148&&(d=f[4].filter(f[9]),c=K(c,E,u,1,f,d,_,a,De,he,null,de)),E&4&&h!==(h=`background-color: ${f[2]}`)&&k(a,"style",h),E&1&&g!==(g="task "+f[0]+" svelte-100588h")&&k(t,"class",g),E&9&&U(t,"isDisabled",f[3])},i:O,o:O,d(f){f&&p(t);for(let E=0;E<c.length;E+=1)c[E].d();v=!1,ae(m)}}}function qe(o,t,e){let l,n;Q(o,S,m=>e(10,l=m)),Q(o,_e,m=>e(4,n=m));let{class:r=""}=t,{text:i=""}=t,{color:s="#0029FF"}=t,{disabled:a=!1}=t,{id:c=null}=t;const _=()=>{let m=l.map(d=>(c===d.id&&(d.done=!d.done),d));S.set(m)},h=()=>{let m=l.filter(d=>d.id!=c);S.set(m),console.log("del",c)},g=m=>{let d=l.map(u=>(c===u.id&&(u.color=m),u));S.set(d)},v=m=>m.color!=s;return o.$$set=m=>{"class"in m&&e(0,r=m.class),"text"in m&&e(1,i=m.text),"color"in m&&e(2,s=m.color),"disabled"in m&&e(3,a=m.disabled),"id"in m&&e(8,c=m.id)},[r,i,s,a,n,_,h,g,c,v]}class me extends V{constructor(t){super();L(this,t,qe,Be,B,{class:0,text:1,color:2,disabled:3,id:8})}}function ve(o,t,e){const l=o.slice();return l[4]=t[e],l}function ge(o,t,e){const l=o.slice();return l[4]=t[e],l}function ke(o,t){let e,l,n,r,i,s=O,a;return l=new me({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:o,first:null,c(){e=b("li"),q(l.$$.fragment),this.h()},l(c){e=y(c,"LI",{class:!0});var _=w(e);M(l.$$.fragment,_),_.forEach(p),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(c,_){I(c,e,_),P(l,e,null),a=!0},p(c,_){t=c;const h={};_&2&&(h.text=t[4].text),_&2&&(h.color=t[4].color?t[4].color:null),_&2&&(h.id=t[4].id),l.$set(h)},r(){i=e.getBoundingClientRect()},f(){X(e),s(),Y(e,i)},a(){s(),s=Z(e,i,J,{duration:300})},i(c){a||(N(l.$$.fragment,c),z(()=>{r&&r.end(1),n=re(e,t[3],{key:t[4].id}),n.start()}),a=!0)},o(c){A(l.$$.fragment,c),n&&n.invalidate(),r=ie(e,t[2],{key:t[4].id}),a=!1},d(c){c&&p(e),R(l),c&&r&&r.end()}}}function pe(o,t){let e,l,n,r,i,s=O,a;return l=new me({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:o,first:null,c(){e=b("li"),q(l.$$.fragment),this.h()},l(c){e=y(c,"LI",{class:!0});var _=w(e);M(l.$$.fragment,_),_.forEach(p),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(c,_){I(c,e,_),P(l,e,null),a=!0},p(c,_){t=c;const h={};_&2&&(h.text=t[4].text),_&2&&(h.color=t[4].color?t[4].color:null),_&2&&(h.id=t[4].id),l.$set(h)},r(){i=e.getBoundingClientRect()},f(){X(e),s(),Y(e,i)},a(){s(),s=Z(e,i,J,{duration:300})},i(c){a||(N(l.$$.fragment,c),z(()=>{r&&r.end(1),n=re(e,t[3],{key:t[4].id}),n.start()}),a=!0)},o(c){A(l.$$.fragment,c),n&&n.invalidate(),r=ie(e,t[2],{key:t[4].id}),a=!1},d(c){c&&p(e),R(l),c&&r&&r.end()}}}function Me(o){let t,e,l,n=[],r=new Map,i,s=[],a=new Map,c,_,h=o[1].filter(be);const g=d=>d[4].id;for(let d=0;d<h.length;d+=1){let u=ge(o,h,d),f=g(u);r.set(f,n[d]=ke(f,u))}let v=o[1].filter(ye);const m=d=>d[4].id;for(let d=0;d<v.length;d+=1){let u=ve(o,v,d),f=m(u);a.set(f,s[d]=pe(f,u))}return{c(){t=b("section"),e=b("div"),l=b("ul");for(let d=0;d<n.length;d+=1)n[d].c();i=b("ul");for(let d=0;d<s.length;d+=1)s[d].c();this.h()},l(d){t=y(d,"SECTION",{class:!0});var u=w(t);e=y(u,"DIV",{class:!0});var f=w(e);l=y(f,"UL",{class:!0});var E=w(l);for(let F=0;F<n.length;F+=1)n[F].l(E);E.forEach(p),i=y(f,"UL",{class:!0});var C=w(i);for(let F=0;F<s.length;F+=1)s[F].l(C);C.forEach(p),f.forEach(p),u.forEach(p),this.h()},h(){k(l,"class","task-section__col"),k(i,"class","task-section__col"),k(e,"class","container task-section__grid svelte-1rib3cm"),k(t,"class",c="task-section "+o[0]+" svelte-1rib3cm")},m(d,u){I(d,t,u),T(t,e),T(e,l);for(let f=0;f<n.length;f+=1)n[f].m(l,null);T(e,i);for(let f=0;f<s.length;f+=1)s[f].m(i,null);_=!0},p(d,[u]){if(u&2){h=d[1].filter(be),G();for(let f=0;f<n.length;f+=1)n[f].r();n=K(n,u,g,1,d,h,r,l,$,ke,null,ge);for(let f=0;f<n.length;f+=1)n[f].a();H()}if(u&2){v=d[1].filter(ye),G();for(let f=0;f<s.length;f+=1)s[f].r();s=K(s,u,m,1,d,v,a,i,$,pe,null,ve);for(let f=0;f<s.length;f+=1)s[f].a();H()}(!_||u&1&&c!==(c="task-section "+d[0]+" svelte-1rib3cm"))&&k(t,"class",c)},i(d){if(!_){for(let u=0;u<h.length;u+=1)N(n[u]);for(let u=0;u<v.length;u+=1)N(s[u]);_=!0}},o(d){for(let u=0;u<n.length;u+=1)A(n[u]);for(let u=0;u<s.length;u+=1)A(s[u]);_=!1},d(d){d&&p(t);for(let u=0;u<n.length;u+=1)n[u].d();for(let u=0;u<s.length;u+=1)s[u].d()}}}const be=o=>!o.done,ye=o=>o.done;function Pe(o,t,e){let l;Q(o,S,s=>e(1,l=s));let{class:n=""}=t;const[r,i]=Ne({duration:s=>Math.sqrt(s*200),fallback(s,a){const c=getComputedStyle(s),_=c.transform==="none"?"":c.transform;return{duration:600,easing:Ae,css:h=>`
					transform: ${_} scale(${h});
					opacity: ${h}
				`}}});return o.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,r,i]}class Re extends V{constructor(t){super();L(this,t,Pe,Me,B,{class:0})}}function Ee(o){let t,e,l,n=o[2].text&&we(o);return{c(){t=b("button"),n&&n.c(),this.h()},l(r){t=y(r,"BUTTON",{class:!0});var i=w(t);n&&n.l(i),i.forEach(p),this.h()},h(){k(t,"class","btn svelte-12pihab")},m(r,i){I(r,t,i),n&&n.m(t,null),e||(l=D(t,"click",j(o[6])),e=!0)},p(r,i){r[2].text?n?n.p(r,i):(n=we(r),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(r){r&&p(t),n&&n.d(),e=!1,l()}}}function we(o){let t=o[2].text+"",e;return{c(){e=se(t)},l(l){e=ne(l,t)},m(l,n){I(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&oe(e,t)},d(l){l&&p(e)}}}function je(o){let t,e,l,n,r,i=o[2]&&Ee(o);return{c(){t=b("div"),e=b("input"),i&&i.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var a=w(t);e=y(a,"INPUT",{placeholder:!0,class:!0}),i&&i.l(a),a.forEach(p),this.h()},h(){k(e,"placeholder",o[1]),k(e,"class","svelte-12pihab"),k(t,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),U(t,"isError",o[5])},m(s,a){I(s,t,a),T(t,e),ce(e,o[4]),i&&i.m(t,null),o[11](t),n||(r=[D(e,"input",o[9]),D(e,"input",o[7]),D(e,"keydown",o[10])],n=!0)},p(s,[a]){a&2&&k(e,"placeholder",s[1]),a&16&&e.value!==s[4]&&ce(e,s[4]),s[2]?i?i.p(s,a):(i=Ee(s),i.c(),i.m(t,null)):i&&(i.d(1),i=null),a&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-12pihab")&&k(t,"class",l),a&37&&U(t,"isError",s[5])},i:O,o:O,d(s){s&&p(t),i&&i.d(),o[11](null),n=!1,ae(r)}}}function Ke(o,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:r=null}=t,i,s,a=!1;const c=Oe(),_=()=>{s?(c("submit",{value:s}),e(4,s="")):e(5,a=!0)},h=()=>{e(5,a=!1)},g=u=>{let f=u.key;f==="Control"&&c("color"),f==="Enter"&&_()};function v(){s=this.value,e(4,s)}const m=u=>g(u);function d(u){Se[u?"unshift":"push"](()=>{i=u,e(3,i)})}return o.$$set=u=>{"class"in u&&e(0,l=u.class),"placeholder"in u&&e(1,n=u.placeholder),"btn"in u&&e(2,r=u.btn)},[l,n,r,i,s,a,_,h,g,v,m,d]}class Qe extends V{constructor(t){super();L(this,t,Ke,je,B,{class:0,placeholder:1,btn:2})}}function Te(o,t,e){const l=o.slice();return l[8]=t[e],l[10]=e,l}function Ce(o,t){let e,l,n,r,i=O,s,a,c;return{key:o,first:null,c(){e=b("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(p),this.h()},h(){k(e,"class","add-todo__color svelte-1xx7yaw"),k(e,"style",l=`color: ${t[8].color}; transition-delay: ${50*t[10]}ms`),this.first=e},m(_,h){I(_,e,h),s=!0,a||(c=D(e,"click",j(function(){le(t[5](t[8].color))&&t[5](t[8].color).apply(this,arguments)})),a=!0)},p(_,h){t=_,(!s||h&10&&l!==(l=`color: ${t[8].color}; transition-delay: ${50*t[10]}ms`))&&k(e,"style",l)},r(){r=e.getBoundingClientRect()},f(){X(e),i(),Y(e,r)},a(){i(),i=Z(e,r,J,{})},i(_){s||(z(()=>{n||(n=ue(e,fe,{},!0)),n.run(1)}),s=!0)},o(_){n||(n=ue(e,fe,{},!1)),n.run(0),s=!1},d(_){_&&p(e),_&&n&&n.end(),a=!1,c()}}}function We(o){let t,e,l,n,r=[],i=new Map,s,a,c,_=o[3].filter(o[6]);const h=g=>g[8].id;for(let g=0;g<_.length;g+=1){let v=Te(o,_,g),m=h(v);i.set(m,r[g]=Ce(m,v))}return s=new Qe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",o[7]),s.$on("submit",o[4]),{c(){t=b("div"),e=b("div"),l=b("span");for(let g=0;g<r.length;g+=1)r[g].c();q(s.$$.fragment),this.h()},l(g){t=y(g,"DIV",{class:!0});var v=w(t);e=y(v,"DIV",{class:!0});var m=w(e);l=y(m,"SPAN",{class:!0,style:!0}),w(l).forEach(p);for(let d=0;d<r.length;d+=1)r[d].l(m);m.forEach(p),M(s.$$.fragment,v),v.forEach(p),this.h()},h(){k(l,"class","add-todo__color add-todo__color_main svelte-1xx7yaw"),k(l,"style",n=`color: ${o[1]}`),k(e,"class","add-todo__color-list svelte-1xx7yaw"),U(e,"isOpen",o[2]),k(t,"class",a="add-todo "+o[0]+" svelte-1xx7yaw")},m(g,v){I(g,t,v),T(t,e),T(e,l);for(let m=0;m<r.length;m+=1)r[m].m(e,null);P(s,t,null),c=!0},p(g,[v]){if((!c||v&2&&n!==(n=`color: ${g[1]}`))&&k(l,"style",n),v&42){_=g[3].filter(g[6]),G();for(let m=0;m<r.length;m+=1)r[m].r();r=K(r,v,h,1,g,_,i,e,$,Ce,null,Te);for(let m=0;m<r.length;m+=1)r[m].a();H()}v&4&&U(e,"isOpen",g[2]),(!c||v&1&&a!==(a="add-todo "+g[0]+" svelte-1xx7yaw"))&&k(t,"class",a)},i(g){if(!c){for(let v=0;v<_.length;v+=1)N(r[v]);N(s.$$.fragment,g),c=!0}},o(g){for(let v=0;v<r.length;v+=1)A(r[v]);A(s.$$.fragment,g),c=!1},d(g){g&&p(t);for(let v=0;v<r.length;v+=1)r[v].d();R(s)}}}function Xe(o,t,e){let l;Q(o,_e,h=>e(3,l=h));let{class:n=""}=t,r="#0029FF",i=!1;const s=h=>{let g={id:Date.now(),text:h.detail.value,color:r,done:!1};S.update(v=>v=[g,...v])},a=h=>h&&e(1,r=h),c=h=>h.color!=r,_=()=>e(2,i=!i);return o.$$set=h=>{"class"in h&&e(0,n=h.class)},[n,r,i,l,s,a,c,_]}class Ye extends V{constructor(t){super();L(this,t,Xe,We,B,{class:0})}}function Ze(o){let t,e,l,n,r,i,s;return n=new Ye({}),i=new Re({props:{class:"mt-50"}}),{c(){t=Ue(),e=b("section"),l=b("div"),q(n.$$.fragment),q(i.$$.fragment),this.h()},l(a){Ve('[data-svelte="svelte-1lxmpr"]',document.head).forEach(p),t=Le(a),e=y(a,"SECTION",{class:!0});var _=w(e);l=y(_,"DIV",{class:!0});var h=w(l);M(n.$$.fragment,h),h.forEach(p),_.forEach(p),M(i.$$.fragment,a),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",k(l,"class","container"),k(e,"class",r=""+(o[0]+" mt-50 svelte-hols8d"))},m(a,c){I(a,t,c),I(a,e,c),T(e,l),P(n,l,null),P(i,a,c),s=!0},p(a,[c]){(!s||c&1&&r!==(r=""+(a[0]+" mt-50 svelte-hols8d")))&&k(e,"class",r)},i(a){s||(N(n.$$.fragment,a),N(i.$$.fragment,a),s=!0)},o(a){A(n.$$.fragment,a),A(i.$$.fragment,a),s=!1},d(a){a&&p(t),a&&p(e),R(n),R(i,a)}}}function ze(o,t,e){let{class:l=""}=t;return o.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class He extends V{constructor(t){super();L(this,t,ze,Ze,B,{class:0})}}export{He as default};
