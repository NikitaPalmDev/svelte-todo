import{K as Ie,C as Fe,S as U,i as V,s as L,e as b,c as y,a as T,d as p,b as k,f as I,D as w,L as D,M as R,N as le,t as se,g as ne,O as j,h as oe,P as K,Q as De,E as O,R as ae,T as Q,v as B,w as q,x as M,U as X,V as Y,W as Z,p as N,X as z,Y as re,n as A,Z as ie,A as P,m as G,o as H,_ as Ne,$ as J,a0 as $,a1 as Ae,a2 as ce,a3 as Oe,a4 as Se,a5 as ue,a6 as fe,j as Ue,a7 as Ve,l as Le}from"../chunks/vendor-935e33b2.js";const S=Fe([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),_e=Ie(S,(o,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000"];let n=o.filter(s=>s.color).map(s=>s.color).concat(e),c=n.filter((s,a)=>n.indexOf(s)===a).map((s,a)=>({id:a,color:s}));t(c)});function de(o,t,e){const l=o.slice();return l[11]=t[e],l}function he(o,t){let e,l,n,i,c;return{key:o,first:null,c(){e=b("li"),l=b("button"),this.h()},l(s){e=y(s,"LI",{class:!0});var a=T(e);l=y(a,"BUTTON",{class:!0,style:!0}),T(l).forEach(p),a.forEach(p),this.h()},h(){k(l,"class","task__color-btn svelte-100588h"),k(l,"style",n=`background-color: ${t[11].color}`),k(e,"class","task__color-item svelte-100588h"),this.first=e},m(s,a){I(s,e,a),w(e,l),i||(c=D(l,"click",R(function(){le(t[7](t[11].color))&&t[7](t[11].color).apply(this,arguments)})),i=!0)},p(s,a){t=s,a&20&&n!==(n=`background-color: ${t[11].color}`)&&k(l,"style",n)},d(s){s&&p(e),i=!1,c()}}}function Be(o){let t,e,l,n,i,c,s,a,r=[],_=new Map,m,v,g,h,d=o[4].filter(o[9]);const u=f=>f[11].id;for(let f=0;f<d.length;f+=1){let E=de(o,d,f),C=u(E);_.set(C,r[f]=he(C,E))}return{c(){t=b("div"),e=b("div"),l=b("p"),n=se(o[1]),i=b("div"),c=b("button"),s=b("span"),a=b("ul");for(let f=0;f<r.length;f+=1)r[f].c();this.h()},l(f){t=y(f,"DIV",{class:!0});var E=T(t);e=y(E,"DIV",{class:!0});var C=T(e);l=y(C,"P",{class:!0});var F=T(l);n=ne(F,o[1]),F.forEach(p),C.forEach(p),i=y(E,"DIV",{class:!0});var x=T(i);c=y(x,"BUTTON",{class:!0});var ee=T(c);s=y(ee,"SPAN",{class:!0}),T(s).forEach(p),ee.forEach(p),x.forEach(p),a=y(E,"UL",{class:!0,style:!0});var te=T(a);for(let W=0;W<r.length;W+=1)r[W].l(te);te.forEach(p),E.forEach(p),this.h()},h(){k(l,"class","svelte-100588h"),k(e,"class","task__main svelte-100588h"),k(s,"class","svg-image-del svelte-100588h"),k(c,"class","task__menu-btn task__menu-btn_del svelte-100588h"),k(i,"class","task__circle task__menu svelte-100588h"),k(a,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),k(a,"style",m=`background-color: ${o[2]}`),k(t,"class",v="task "+o[0]+" svelte-100588h"),j(t,"isDisabled",o[3])},m(f,E){I(f,t,E),w(t,e),w(e,l),w(l,n),w(t,i),w(i,c),w(c,s),w(t,a);for(let C=0;C<r.length;C+=1)r[C].m(a,null);g||(h=[D(e,"click",o[5]),D(c,"click",R(o[6]))],g=!0)},p(f,[E]){E&2&&oe(n,f[1]),E&148&&(d=f[4].filter(f[9]),r=K(r,E,u,1,f,d,_,a,De,he,null,de)),E&4&&m!==(m=`background-color: ${f[2]}`)&&k(a,"style",m),E&1&&v!==(v="task "+f[0]+" svelte-100588h")&&k(t,"class",v),E&9&&j(t,"isDisabled",f[3])},i:O,o:O,d(f){f&&p(t);for(let E=0;E<r.length;E+=1)r[E].d();g=!1,ae(h)}}}function qe(o,t,e){let l,n;Q(o,S,h=>e(10,l=h)),Q(o,_e,h=>e(4,n=h));let{class:i=""}=t,{text:c=""}=t,{color:s="#0029FF"}=t,{disabled:a=!1}=t,{id:r=null}=t;const _=()=>{let h=l.map(d=>(r===d.id&&(d.done=!d.done),d));S.set(h)},m=()=>{let h=l.filter(d=>d.id!=r);S.set(h),console.log("del",r)},v=h=>{let d=l.map(u=>(r===u.id&&(u.color=h),u));S.set(d)},g=h=>h.color!=s;return o.$$set=h=>{"class"in h&&e(0,i=h.class),"text"in h&&e(1,c=h.text),"color"in h&&e(2,s=h.color),"disabled"in h&&e(3,a=h.disabled),"id"in h&&e(8,r=h.id)},[i,c,s,a,n,_,m,v,r,g]}class me extends U{constructor(t){super();V(this,t,qe,Be,L,{class:0,text:1,color:2,disabled:3,id:8})}}function ve(o,t,e){const l=o.slice();return l[4]=t[e],l}function ge(o,t,e){const l=o.slice();return l[4]=t[e],l}function ke(o,t){let e,l,n,i,c,s=O,a;return l=new me({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:o,first:null,c(){e=b("li"),B(l.$$.fragment),this.h()},l(r){e=y(r,"LI",{class:!0});var _=T(e);q(l.$$.fragment,_),_.forEach(p),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(r,_){I(r,e,_),M(l,e,null),a=!0},p(r,_){t=r;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),l.$set(m)},r(){c=e.getBoundingClientRect()},f(){X(e),s(),Y(e,c)},a(){s(),s=Z(e,c,J,{duration:300})},i(r){a||(N(l.$$.fragment,r),z(()=>{i&&i.end(1),n=re(e,t[3],{key:t[4].id}),n.start()}),a=!0)},o(r){A(l.$$.fragment,r),n&&n.invalidate(),i=ie(e,t[2],{key:t[4].id}),a=!1},d(r){r&&p(e),P(l),r&&i&&i.end()}}}function pe(o,t){let e,l,n,i,c,s=O,a;return l=new me({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:o,first:null,c(){e=b("li"),B(l.$$.fragment),this.h()},l(r){e=y(r,"LI",{class:!0});var _=T(e);q(l.$$.fragment,_),_.forEach(p),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(r,_){I(r,e,_),M(l,e,null),a=!0},p(r,_){t=r;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),l.$set(m)},r(){c=e.getBoundingClientRect()},f(){X(e),s(),Y(e,c)},a(){s(),s=Z(e,c,J,{duration:300})},i(r){a||(N(l.$$.fragment,r),z(()=>{i&&i.end(1),n=re(e,t[3],{key:t[4].id}),n.start()}),a=!0)},o(r){A(l.$$.fragment,r),n&&n.invalidate(),i=ie(e,t[2],{key:t[4].id}),a=!1},d(r){r&&p(e),P(l),r&&i&&i.end()}}}function Me(o){let t,e,l,n=[],i=new Map,c,s=[],a=new Map,r,_,m=o[1].filter(be);const v=d=>d[4].id;for(let d=0;d<m.length;d+=1){let u=ge(o,m,d),f=v(u);i.set(f,n[d]=ke(f,u))}let g=o[1].filter(ye);const h=d=>d[4].id;for(let d=0;d<g.length;d+=1){let u=ve(o,g,d),f=h(u);a.set(f,s[d]=pe(f,u))}return{c(){t=b("section"),e=b("div"),l=b("ul");for(let d=0;d<n.length;d+=1)n[d].c();c=b("ul");for(let d=0;d<s.length;d+=1)s[d].c();this.h()},l(d){t=y(d,"SECTION",{class:!0});var u=T(t);e=y(u,"DIV",{class:!0});var f=T(e);l=y(f,"UL",{class:!0});var E=T(l);for(let F=0;F<n.length;F+=1)n[F].l(E);E.forEach(p),c=y(f,"UL",{class:!0});var C=T(c);for(let F=0;F<s.length;F+=1)s[F].l(C);C.forEach(p),f.forEach(p),u.forEach(p),this.h()},h(){k(l,"class","task-section__col"),k(c,"class","task-section__col"),k(e,"class","container task-section__grid svelte-1rib3cm"),k(t,"class",r="task-section "+o[0]+" svelte-1rib3cm")},m(d,u){I(d,t,u),w(t,e),w(e,l);for(let f=0;f<n.length;f+=1)n[f].m(l,null);w(e,c);for(let f=0;f<s.length;f+=1)s[f].m(c,null);_=!0},p(d,[u]){if(u&2){m=d[1].filter(be),G();for(let f=0;f<n.length;f+=1)n[f].r();n=K(n,u,v,1,d,m,i,l,$,ke,null,ge);for(let f=0;f<n.length;f+=1)n[f].a();H()}if(u&2){g=d[1].filter(ye),G();for(let f=0;f<s.length;f+=1)s[f].r();s=K(s,u,h,1,d,g,a,c,$,pe,null,ve);for(let f=0;f<s.length;f+=1)s[f].a();H()}(!_||u&1&&r!==(r="task-section "+d[0]+" svelte-1rib3cm"))&&k(t,"class",r)},i(d){if(!_){for(let u=0;u<m.length;u+=1)N(n[u]);for(let u=0;u<g.length;u+=1)N(s[u]);_=!0}},o(d){for(let u=0;u<n.length;u+=1)A(n[u]);for(let u=0;u<s.length;u+=1)A(s[u]);_=!1},d(d){d&&p(t);for(let u=0;u<n.length;u+=1)n[u].d();for(let u=0;u<s.length;u+=1)s[u].d()}}}const be=o=>!o.done,ye=o=>o.done;function Pe(o,t,e){let l;Q(o,S,s=>e(1,l=s));let{class:n=""}=t;const[i,c]=Ne({duration:s=>Math.sqrt(s*200),fallback(s,a){const r=getComputedStyle(s),_=r.transform==="none"?"":r.transform;return{duration:600,easing:Ae,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return o.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,i,c]}class Re extends U{constructor(t){super();V(this,t,Pe,Me,L,{class:0})}}function Ee(o){let t,e,l,n=o[2].text&&Te(o);return{c(){t=b("button"),n&&n.c(),this.h()},l(i){t=y(i,"BUTTON",{class:!0});var c=T(t);n&&n.l(c),c.forEach(p),this.h()},h(){k(t,"class","btn svelte-12pihab")},m(i,c){I(i,t,c),n&&n.m(t,null),e||(l=D(t,"click",R(o[6])),e=!0)},p(i,c){i[2].text?n?n.p(i,c):(n=Te(i),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(i){i&&p(t),n&&n.d(),e=!1,l()}}}function Te(o){let t=o[2].text+"",e;return{c(){e=se(t)},l(l){e=ne(l,t)},m(l,n){I(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&oe(e,t)},d(l){l&&p(e)}}}function je(o){let t,e,l,n,i,c=o[2]&&Ee(o);return{c(){t=b("div"),e=b("input"),c&&c.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var a=T(t);e=y(a,"INPUT",{placeholder:!0,class:!0}),c&&c.l(a),a.forEach(p),this.h()},h(){k(e,"placeholder",o[1]),k(e,"class","svelte-12pihab"),k(t,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),j(t,"isError",o[5])},m(s,a){I(s,t,a),w(t,e),ce(e,o[4]),c&&c.m(t,null),o[11](t),n||(i=[D(e,"input",o[9]),D(e,"input",o[7]),D(e,"keydown",o[10])],n=!0)},p(s,[a]){a&2&&k(e,"placeholder",s[1]),a&16&&e.value!==s[4]&&ce(e,s[4]),s[2]?c?c.p(s,a):(c=Ee(s),c.c(),c.m(t,null)):c&&(c.d(1),c=null),a&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-12pihab")&&k(t,"class",l),a&37&&j(t,"isError",s[5])},i:O,o:O,d(s){s&&p(t),c&&c.d(),o[11](null),n=!1,ae(i)}}}function Ke(o,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:i=null}=t,c,s,a=!1;const r=Oe(),_=()=>{s?(r("submit",{value:s}),e(4,s="")):e(5,a=!0)},m=()=>{e(5,a=!1)},v=u=>{let f=u.key;f==="Control"&&r("color"),f==="Enter"&&_()};function g(){s=this.value,e(4,s)}const h=u=>v(u);function d(u){Se[u?"unshift":"push"](()=>{c=u,e(3,c)})}return o.$$set=u=>{"class"in u&&e(0,l=u.class),"placeholder"in u&&e(1,n=u.placeholder),"btn"in u&&e(2,i=u.btn)},[l,n,i,c,s,a,_,m,v,g,h,d]}class Qe extends U{constructor(t){super();V(this,t,Ke,je,L,{class:0,placeholder:1,btn:2})}}function we(o,t,e){const l=o.slice();return l[6]=t[e],l[8]=e,l}function Ce(o,t){let e,l,n,i,c=O,s,a,r;return{key:o,first:null,c(){e=b("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),T(e).forEach(p),this.h()},h(){k(e,"class","add-todo__color svelte-13xn9ef"),k(e,"style",l=`color: ${t[6].color}; transition-delay: ${50*t[8]}ms`),this.first=e},m(_,m){I(_,e,m),s=!0,a||(r=D(e,"click",R(function(){le(t[4](t[6].color))&&t[4](t[6].color).apply(this,arguments)})),a=!0)},p(_,m){t=_,(!s||m&6&&l!==(l=`color: ${t[6].color}; transition-delay: ${50*t[8]}ms`))&&k(e,"style",l)},r(){i=e.getBoundingClientRect()},f(){X(e),c(),Y(e,i)},a(){c(),c=Z(e,i,J,{})},i(_){s||(z(()=>{n||(n=ue(e,fe,{},!0)),n.run(1)}),s=!0)},o(_){n||(n=ue(e,fe,{},!1)),n.run(0),s=!1},d(_){_&&p(e),_&&n&&n.end(),a=!1,r()}}}function We(o){let t,e,l,n,i=[],c=new Map,s,a,r,_=o[2].filter(o[5]);const m=v=>v[6].id;for(let v=0;v<_.length;v+=1){let g=we(o,_,v),h=m(g);c.set(h,i[v]=Ce(h,g))}return s=new Qe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",!0),s.$on("submit",o[3]),{c(){t=b("div"),e=b("div"),l=b("span");for(let v=0;v<i.length;v+=1)i[v].c();B(s.$$.fragment),this.h()},l(v){t=y(v,"DIV",{class:!0});var g=T(t);e=y(g,"DIV",{class:!0});var h=T(e);l=y(h,"SPAN",{class:!0,style:!0}),T(l).forEach(p);for(let d=0;d<i.length;d+=1)i[d].l(h);h.forEach(p),q(s.$$.fragment,g),g.forEach(p),this.h()},h(){k(l,"class","add-todo__color add-todo__color_main svelte-13xn9ef"),k(l,"style",n=`color: ${o[1]}`),k(e,"class","add-todo__color-list svelte-13xn9ef"),k(t,"class",a="add-todo "+o[0]+" svelte-13xn9ef")},m(v,g){I(v,t,g),w(t,e),w(e,l);for(let h=0;h<i.length;h+=1)i[h].m(e,null);M(s,t,null),r=!0},p(v,[g]){if((!r||g&2&&n!==(n=`color: ${v[1]}`))&&k(l,"style",n),g&22){_=v[2].filter(v[5]),G();for(let h=0;h<i.length;h+=1)i[h].r();i=K(i,g,m,1,v,_,c,e,$,Ce,null,we);for(let h=0;h<i.length;h+=1)i[h].a();H()}(!r||g&1&&a!==(a="add-todo "+v[0]+" svelte-13xn9ef"))&&k(t,"class",a)},i(v){if(!r){for(let g=0;g<_.length;g+=1)N(i[g]);N(s.$$.fragment,v),r=!0}},o(v){for(let g=0;g<i.length;g+=1)A(i[g]);A(s.$$.fragment,v),r=!1},d(v){v&&p(t);for(let g=0;g<i.length;g+=1)i[g].d();P(s)}}}function Xe(o,t,e){let l;Q(o,_e,r=>e(2,l=r));let{class:n=""}=t,i="#0029FF";const c=r=>{let _={id:Date.now(),text:r.detail.value,color:i,done:!1};S.update(m=>m=[_,...m])},s=r=>r&&e(1,i=r),a=r=>r.color!=i;return o.$$set=r=>{"class"in r&&e(0,n=r.class)},[n,i,l,c,s,a]}class Ye extends U{constructor(t){super();V(this,t,Xe,We,L,{class:0})}}function Ze(o){let t,e,l,n,i,c,s;return n=new Ye({}),c=new Re({props:{class:"mt-50"}}),{c(){t=Ue(),e=b("section"),l=b("div"),B(n.$$.fragment),B(c.$$.fragment),this.h()},l(a){Ve('[data-svelte="svelte-1lxmpr"]',document.head).forEach(p),t=Le(a),e=y(a,"SECTION",{class:!0});var _=T(e);l=y(_,"DIV",{class:!0});var m=T(l);q(n.$$.fragment,m),m.forEach(p),_.forEach(p),q(c.$$.fragment,a),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",k(l,"class","container"),k(e,"class",i=""+(o[0]+" mt-50 svelte-hols8d"))},m(a,r){I(a,t,r),I(a,e,r),w(e,l),M(n,l,null),M(c,a,r),s=!0},p(a,[r]){(!s||r&1&&i!==(i=""+(a[0]+" mt-50 svelte-hols8d")))&&k(e,"class",i)},i(a){s||(N(n.$$.fragment,a),N(c.$$.fragment,a),s=!0)},o(a){A(n.$$.fragment,a),A(c.$$.fragment,a),s=!1},d(a){a&&p(t),a&&p(e),P(n),P(c,a)}}}function ze(o,t,e){let{class:l=""}=t;return o.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class He extends U{constructor(t){super();V(this,t,ze,Ze,L,{class:0})}}export{He as default};
