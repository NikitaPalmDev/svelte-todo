import{K as Ie,C as Fe,S as U,i as V,s as L,e as b,c as y,a as T,d as p,b as k,f as I,D as w,L as D,M as R,N as le,t as se,g as ne,O as j,h as oe,P as K,Q as De,E as O,R as ae,T as Q,v as B,w as q,x as M,U as X,V as Y,W as Z,p as N,X as z,Y as re,n as A,Z as ie,A as P,m as G,o as H,_ as Ne,$ as J,a0 as $,a1 as Ae,a2 as ce,a3 as Oe,a4 as Se,a5 as ue,a6 as fe,j as Ue,a7 as Ve,l as Le}from"../chunks/vendor-935e33b2.js";const S=Fe([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),_e=Ie(S,(o,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000"];let n=o.filter(s=>s.color).map(s=>s.color).concat(e),i=n.filter((s,a)=>n.indexOf(s)===a).map((s,a)=>({id:a,color:s}));t(i)});function de(o,t,e){const l=o.slice();return l[11]=t[e],l}function he(o,t){let e,l,n,r,i;return{key:o,first:null,c(){e=b("li"),l=b("button"),this.h()},l(s){e=y(s,"LI",{class:!0});var a=T(e);l=y(a,"BUTTON",{class:!0,style:!0}),T(l).forEach(p),a.forEach(p),this.h()},h(){k(l,"class","task__color-btn svelte-100588h"),k(l,"style",n=`background-color: ${t[11].color}`),k(e,"class","task__color-item svelte-100588h"),this.first=e},m(s,a){I(s,e,a),w(e,l),r||(i=D(l,"click",R(function(){le(t[7](t[11].color))&&t[7](t[11].color).apply(this,arguments)})),r=!0)},p(s,a){t=s,a&20&&n!==(n=`background-color: ${t[11].color}`)&&k(l,"style",n)},d(s){s&&p(e),r=!1,i()}}}function Be(o){let t,e,l,n,r,i,s,a,c=[],u=new Map,v,m,g,h,d=o[4].filter(o[9]);const f=_=>_[11].id;for(let _=0;_<d.length;_+=1){let E=de(o,d,_),C=f(E);u.set(C,c[_]=he(C,E))}return{c(){t=b("div"),e=b("div"),l=b("p"),n=se(o[1]),r=b("div"),i=b("button"),s=b("span"),a=b("ul");for(let _=0;_<c.length;_+=1)c[_].c();this.h()},l(_){t=y(_,"DIV",{class:!0});var E=T(t);e=y(E,"DIV",{class:!0});var C=T(e);l=y(C,"P",{class:!0});var F=T(l);n=ne(F,o[1]),F.forEach(p),C.forEach(p),r=y(E,"DIV",{class:!0});var x=T(r);i=y(x,"BUTTON",{class:!0});var ee=T(i);s=y(ee,"SPAN",{class:!0}),T(s).forEach(p),ee.forEach(p),x.forEach(p),a=y(E,"UL",{class:!0,style:!0});var te=T(a);for(let W=0;W<c.length;W+=1)c[W].l(te);te.forEach(p),E.forEach(p),this.h()},h(){k(l,"class","svelte-100588h"),k(e,"class","task__main svelte-100588h"),k(s,"class","svg-image-del svelte-100588h"),k(i,"class","task__menu-btn task__menu-btn_del svelte-100588h"),k(r,"class","task__circle task__menu svelte-100588h"),k(a,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),k(a,"style",v=`background-color: ${o[2]}`),k(t,"class",m="task "+o[0]+" svelte-100588h"),j(t,"isDisabled",o[3])},m(_,E){I(_,t,E),w(t,e),w(e,l),w(l,n),w(t,r),w(r,i),w(i,s),w(t,a);for(let C=0;C<c.length;C+=1)c[C].m(a,null);g||(h=[D(e,"click",o[5]),D(i,"click",R(o[6]))],g=!0)},p(_,[E]){E&2&&oe(n,_[1]),E&148&&(d=_[4].filter(_[9]),c=K(c,E,f,1,_,d,u,a,De,he,null,de)),E&4&&v!==(v=`background-color: ${_[2]}`)&&k(a,"style",v),E&1&&m!==(m="task "+_[0]+" svelte-100588h")&&k(t,"class",m),E&9&&j(t,"isDisabled",_[3])},i:O,o:O,d(_){_&&p(t);for(let E=0;E<c.length;E+=1)c[E].d();g=!1,ae(h)}}}function qe(o,t,e){let l,n;Q(o,S,h=>e(10,l=h)),Q(o,_e,h=>e(4,n=h));let{class:r=""}=t,{text:i=""}=t,{color:s="#0029FF"}=t,{disabled:a=!1}=t,{id:c=null}=t;const u=()=>{let h=l.map(d=>(c===d.id&&(d.done=!d.done),d));S.set(h)},v=()=>{let h=l.filter(d=>d.id!=c);S.set(h),console.log("del",c)},m=h=>{let d=l.map(f=>(c===f.id&&(f.color=h),f));S.set(d)},g=h=>h.color!=s;return o.$$set=h=>{"class"in h&&e(0,r=h.class),"text"in h&&e(1,i=h.text),"color"in h&&e(2,s=h.color),"disabled"in h&&e(3,a=h.disabled),"id"in h&&e(8,c=h.id)},[r,i,s,a,n,u,v,m,c,g]}class me extends U{constructor(t){super();V(this,t,qe,Be,L,{class:0,text:1,color:2,disabled:3,id:8})}}function ve(o,t,e){const l=o.slice();return l[4]=t[e],l}function ge(o,t,e){const l=o.slice();return l[4]=t[e],l}function ke(o,t){let e,l,n,r,i,s=O,a;return l=new me({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:o,first:null,c(){e=b("li"),B(l.$$.fragment),this.h()},l(c){e=y(c,"LI",{class:!0});var u=T(e);q(l.$$.fragment,u),u.forEach(p),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(c,u){I(c,e,u),M(l,e,null),a=!0},p(c,u){t=c;const v={};u&2&&(v.text=t[4].text),u&2&&(v.color=t[4].color?t[4].color:null),u&2&&(v.id=t[4].id),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){X(e),s(),Y(e,i)},a(){s(),s=Z(e,i,J,{duration:300})},i(c){a||(N(l.$$.fragment,c),z(()=>{r&&r.end(1),n=re(e,t[3],{key:t[4].id}),n.start()}),a=!0)},o(c){A(l.$$.fragment,c),n&&n.invalidate(),r=ie(e,t[2],{key:t[4].id}),a=!1},d(c){c&&p(e),P(l),c&&r&&r.end()}}}function pe(o,t){let e,l,n,r,i,s=O,a;return l=new me({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:o,first:null,c(){e=b("li"),B(l.$$.fragment),this.h()},l(c){e=y(c,"LI",{class:!0});var u=T(e);q(l.$$.fragment,u),u.forEach(p),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(c,u){I(c,e,u),M(l,e,null),a=!0},p(c,u){t=c;const v={};u&2&&(v.text=t[4].text),u&2&&(v.color=t[4].color?t[4].color:null),u&2&&(v.id=t[4].id),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){X(e),s(),Y(e,i)},a(){s(),s=Z(e,i,J,{duration:300})},i(c){a||(N(l.$$.fragment,c),z(()=>{r&&r.end(1),n=re(e,t[3],{key:t[4].id}),n.start()}),a=!0)},o(c){A(l.$$.fragment,c),n&&n.invalidate(),r=ie(e,t[2],{key:t[4].id}),a=!1},d(c){c&&p(e),P(l),c&&r&&r.end()}}}function Me(o){let t,e,l,n=[],r=new Map,i,s=[],a=new Map,c,u,v=o[1].filter(be);const m=d=>d[4].id;for(let d=0;d<v.length;d+=1){let f=ge(o,v,d),_=m(f);r.set(_,n[d]=ke(_,f))}let g=o[1].filter(ye);const h=d=>d[4].id;for(let d=0;d<g.length;d+=1){let f=ve(o,g,d),_=h(f);a.set(_,s[d]=pe(_,f))}return{c(){t=b("section"),e=b("div"),l=b("ul");for(let d=0;d<n.length;d+=1)n[d].c();i=b("ul");for(let d=0;d<s.length;d+=1)s[d].c();this.h()},l(d){t=y(d,"SECTION",{class:!0});var f=T(t);e=y(f,"DIV",{class:!0});var _=T(e);l=y(_,"UL",{class:!0});var E=T(l);for(let F=0;F<n.length;F+=1)n[F].l(E);E.forEach(p),i=y(_,"UL",{class:!0});var C=T(i);for(let F=0;F<s.length;F+=1)s[F].l(C);C.forEach(p),_.forEach(p),f.forEach(p),this.h()},h(){k(l,"class","task-section__col"),k(i,"class","task-section__col"),k(e,"class","container task-section__grid svelte-1rib3cm"),k(t,"class",c="task-section "+o[0]+" svelte-1rib3cm")},m(d,f){I(d,t,f),w(t,e),w(e,l);for(let _=0;_<n.length;_+=1)n[_].m(l,null);w(e,i);for(let _=0;_<s.length;_+=1)s[_].m(i,null);u=!0},p(d,[f]){if(f&2){v=d[1].filter(be),G();for(let _=0;_<n.length;_+=1)n[_].r();n=K(n,f,m,1,d,v,r,l,$,ke,null,ge);for(let _=0;_<n.length;_+=1)n[_].a();H()}if(f&2){g=d[1].filter(ye),G();for(let _=0;_<s.length;_+=1)s[_].r();s=K(s,f,h,1,d,g,a,i,$,pe,null,ve);for(let _=0;_<s.length;_+=1)s[_].a();H()}(!u||f&1&&c!==(c="task-section "+d[0]+" svelte-1rib3cm"))&&k(t,"class",c)},i(d){if(!u){for(let f=0;f<v.length;f+=1)N(n[f]);for(let f=0;f<g.length;f+=1)N(s[f]);u=!0}},o(d){for(let f=0;f<n.length;f+=1)A(n[f]);for(let f=0;f<s.length;f+=1)A(s[f]);u=!1},d(d){d&&p(t);for(let f=0;f<n.length;f+=1)n[f].d();for(let f=0;f<s.length;f+=1)s[f].d()}}}const be=o=>!o.done,ye=o=>o.done;function Pe(o,t,e){let l;Q(o,S,s=>e(1,l=s));let{class:n=""}=t;const[r,i]=Ne({duration:s=>Math.sqrt(s*200),fallback(s,a){const c=getComputedStyle(s),u=c.transform==="none"?"":c.transform;return{duration:600,easing:Ae,css:v=>`
					transform: ${u} scale(${v});
					opacity: ${v}
				`}}});return o.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,r,i]}class Re extends U{constructor(t){super();V(this,t,Pe,Me,L,{class:0})}}function Ee(o){let t,e,l,n=o[2].text&&Te(o);return{c(){t=b("button"),n&&n.c(),this.h()},l(r){t=y(r,"BUTTON",{class:!0});var i=T(t);n&&n.l(i),i.forEach(p),this.h()},h(){k(t,"class","btn svelte-12pihab")},m(r,i){I(r,t,i),n&&n.m(t,null),e||(l=D(t,"click",R(o[6])),e=!0)},p(r,i){r[2].text?n?n.p(r,i):(n=Te(r),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(r){r&&p(t),n&&n.d(),e=!1,l()}}}function Te(o){let t=o[2].text+"",e;return{c(){e=se(t)},l(l){e=ne(l,t)},m(l,n){I(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&oe(e,t)},d(l){l&&p(e)}}}function je(o){let t,e,l,n,r,i=o[2]&&Ee(o);return{c(){t=b("div"),e=b("input"),i&&i.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var a=T(t);e=y(a,"INPUT",{placeholder:!0,class:!0}),i&&i.l(a),a.forEach(p),this.h()},h(){k(e,"placeholder",o[1]),k(e,"class","svelte-12pihab"),k(t,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),j(t,"isError",o[5])},m(s,a){I(s,t,a),w(t,e),ce(e,o[4]),i&&i.m(t,null),o[11](t),n||(r=[D(e,"input",o[9]),D(e,"input",o[7]),D(e,"keydown",o[10])],n=!0)},p(s,[a]){a&2&&k(e,"placeholder",s[1]),a&16&&e.value!==s[4]&&ce(e,s[4]),s[2]?i?i.p(s,a):(i=Ee(s),i.c(),i.m(t,null)):i&&(i.d(1),i=null),a&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-12pihab")&&k(t,"class",l),a&37&&j(t,"isError",s[5])},i:O,o:O,d(s){s&&p(t),i&&i.d(),o[11](null),n=!1,ae(r)}}}function Ke(o,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:r=null}=t,i,s,a=!1;const c=Oe(),u=()=>{s?(c("submit",{value:s}),e(4,s="")):e(5,a=!0)},v=()=>{e(5,a=!1)},m=f=>{let _=f.key;_==="Control"&&c("color"),_==="Enter"&&u()};function g(){s=this.value,e(4,s)}const h=f=>m(f);function d(f){Se[f?"unshift":"push"](()=>{i=f,e(3,i)})}return o.$$set=f=>{"class"in f&&e(0,l=f.class),"placeholder"in f&&e(1,n=f.placeholder),"btn"in f&&e(2,r=f.btn)},[l,n,r,i,s,a,u,v,m,g,h,d]}class Qe extends U{constructor(t){super();V(this,t,Ke,je,L,{class:0,placeholder:1,btn:2})}}function we(o,t,e){const l=o.slice();return l[7]=t[e],l[9]=e,l}function Ce(o,t){let e,l,n,r,i=O,s,a,c;return{key:o,first:null,c(){e=b("button"),this.h()},l(u){e=y(u,"BUTTON",{class:!0,style:!0}),T(e).forEach(p),this.h()},h(){k(e,"class","add-todo__color svelte-13xn9ef"),k(e,"style",l=`color: ${t[7].color}; transition-delay: ${50*t[9]}ms`),this.first=e},m(u,v){I(u,e,v),s=!0,a||(c=D(e,"click",R(function(){le(t[4](t[7].color))&&t[4](t[7].color).apply(this,arguments)})),a=!0)},p(u,v){t=u,(!s||v&6&&l!==(l=`color: ${t[7].color}; transition-delay: ${50*t[9]}ms`))&&k(e,"style",l)},r(){r=e.getBoundingClientRect()},f(){X(e),i(),Y(e,r)},a(){i(),i=Z(e,r,J,{})},i(u){s||(z(()=>{n||(n=ue(e,fe,{},!0)),n.run(1)}),s=!0)},o(u){n||(n=ue(e,fe,{},!1)),n.run(0),s=!1},d(u){u&&p(e),u&&n&&n.end(),a=!1,c()}}}function We(o){let t,e,l,n,r=[],i=new Map,s,a,c,u=o[2].filter(o[6]);const v=m=>m[7].id;for(let m=0;m<u.length;m+=1){let g=we(o,u,m),h=v(g);i.set(h,r[m]=Ce(h,g))}return s=new Qe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",o[5]),s.$on("submit",o[3]),{c(){t=b("div"),e=b("div"),l=b("span");for(let m=0;m<r.length;m+=1)r[m].c();B(s.$$.fragment),this.h()},l(m){t=y(m,"DIV",{class:!0});var g=T(t);e=y(g,"DIV",{class:!0});var h=T(e);l=y(h,"SPAN",{class:!0,style:!0}),T(l).forEach(p);for(let d=0;d<r.length;d+=1)r[d].l(h);h.forEach(p),q(s.$$.fragment,g),g.forEach(p),this.h()},h(){k(l,"class","add-todo__color add-todo__color_main svelte-13xn9ef"),k(l,"style",n=`color: ${o[1]}`),k(e,"class","add-todo__color-list svelte-13xn9ef"),k(t,"class",a="add-todo "+o[0]+" svelte-13xn9ef")},m(m,g){I(m,t,g),w(t,e),w(e,l);for(let h=0;h<r.length;h+=1)r[h].m(e,null);M(s,t,null),c=!0},p(m,[g]){if((!c||g&2&&n!==(n=`color: ${m[1]}`))&&k(l,"style",n),g&22){u=m[2].filter(m[6]),G();for(let h=0;h<r.length;h+=1)r[h].r();r=K(r,g,v,1,m,u,i,e,$,Ce,null,we);for(let h=0;h<r.length;h+=1)r[h].a();H()}(!c||g&1&&a!==(a="add-todo "+m[0]+" svelte-13xn9ef"))&&k(t,"class",a)},i(m){if(!c){for(let g=0;g<u.length;g+=1)N(r[g]);N(s.$$.fragment,m),c=!0}},o(m){for(let g=0;g<r.length;g+=1)A(r[g]);A(s.$$.fragment,m),c=!1},d(m){m&&p(t);for(let g=0;g<r.length;g+=1)r[g].d();P(s)}}}function Xe(o,t,e){let l;Q(o,_e,u=>e(2,l=u));let{class:n=""}=t,r="#0029FF";const i=u=>{let v={id:Date.now(),text:u.detail.value,color:r,done:!1};S.update(m=>m=[v,...m])},s=u=>u&&e(1,r=u),a=()=>{console.log("color open")},c=u=>u.color!=r;return o.$$set=u=>{"class"in u&&e(0,n=u.class)},[n,r,l,i,s,a,c]}class Ye extends U{constructor(t){super();V(this,t,Xe,We,L,{class:0})}}function Ze(o){let t,e,l,n,r,i,s;return n=new Ye({}),i=new Re({props:{class:"mt-50"}}),{c(){t=Ue(),e=b("section"),l=b("div"),B(n.$$.fragment),B(i.$$.fragment),this.h()},l(a){Ve('[data-svelte="svelte-1lxmpr"]',document.head).forEach(p),t=Le(a),e=y(a,"SECTION",{class:!0});var u=T(e);l=y(u,"DIV",{class:!0});var v=T(l);q(n.$$.fragment,v),v.forEach(p),u.forEach(p),q(i.$$.fragment,a),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",k(l,"class","container"),k(e,"class",r=""+(o[0]+" mt-50 svelte-hols8d"))},m(a,c){I(a,t,c),I(a,e,c),w(e,l),M(n,l,null),M(i,a,c),s=!0},p(a,[c]){(!s||c&1&&r!==(r=""+(a[0]+" mt-50 svelte-hols8d")))&&k(e,"class",r)},i(a){s||(N(n.$$.fragment,a),N(i.$$.fragment,a),s=!0)},o(a){A(n.$$.fragment,a),A(i.$$.fragment,a),s=!1},d(a){a&&p(t),a&&p(e),P(n),P(i,a)}}}function ze(o,t,e){let{class:l=""}=t;return o.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class He extends U{constructor(t){super();V(this,t,ze,Ze,L,{class:0})}}export{He as default};
