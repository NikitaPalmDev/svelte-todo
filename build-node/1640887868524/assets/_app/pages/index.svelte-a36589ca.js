import{K as Oe,C as De,S as L,i as P,s as q,e as y,c as E,a as T,d as v,b as k,f as F,D as C,L as I,M as B,N as oe,t as ae,g as re,O as D,h as ie,P as Q,Q as Ae,E as U,R as ce,T as W,v as M,w as R,x as j,U as Y,V as Z,W as z,p as A,X as G,Y as ue,n as S,Z as fe,A as K,m as H,o as J,_ as Se,$,a0 as x,a1 as Ue,a2 as _e,a3 as Ve,a4 as Be,a5 as de,a6 as he,j as Le,a7 as Pe,l as qe}from"../chunks/vendor-935e33b2.js";const V=De([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),ke=Oe(V,(a,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=a.filter(s=>s.color).map(s=>s.color).concat(e),i=n.filter((s,r)=>n.indexOf(s)===r).map((s,r)=>({id:r,color:s}));t(i)});function me(a,t,e){const l=a.slice();return l[13]=t[e],l}function ve(a,t){let e,l,n,c,i;return{key:a,first:null,c(){e=y("li"),l=y("button"),this.h()},l(s){e=E(s,"LI",{class:!0});var r=T(e);l=E(r,"BUTTON",{class:!0,style:!0}),T(l).forEach(v),r.forEach(v),this.h()},h(){k(l,"class","task__color-btn svelte-ctklk1"),k(l,"style",n=`background-color: ${t[13].color}`),k(e,"class","task__color-item svelte-ctklk1"),this.first=e},m(s,r){F(s,e,r),C(e,l),c||(i=I(l,"click",B(function(){oe(t[8](t[13].color))&&t[8](t[13].color).apply(this,arguments)})),c=!0)},p(s,r){t=s,r&36&&n!==(n=`background-color: ${t[13].color}`)&&k(l,"style",n)},d(s){s&&v(e),c=!1,i()}}}function Me(a){let t,e,l,n,c,i,s,r,u=[],_=new Map,m,g,w,h,f,o,d=a[5].filter(a[10]);const N=b=>b[13].id;for(let b=0;b<d.length;b+=1){let p=me(a,d,b),O=N(p);_.set(O,u[b]=ve(O,p))}return{c(){t=y("div"),e=y("div"),l=y("p"),n=ae(a[1]),c=y("div"),i=y("button"),s=y("span"),r=y("ul");for(let b=0;b<u.length;b+=1)u[b].c();g=y("button"),w=y("span"),this.h()},l(b){t=E(b,"DIV",{class:!0});var p=T(t);e=E(p,"DIV",{class:!0});var O=T(e);l=E(O,"P",{class:!0});var ee=T(l);n=re(ee,a[1]),ee.forEach(v),O.forEach(v),c=E(p,"DIV",{class:!0});var te=T(c);i=E(te,"BUTTON",{class:!0});var le=T(i);s=E(le,"SPAN",{class:!0}),T(s).forEach(v),le.forEach(v),te.forEach(v),r=E(p,"UL",{class:!0,style:!0});var se=T(r);for(let X=0;X<u.length;X+=1)u[X].l(se);se.forEach(v),g=E(p,"BUTTON",{class:!0});var ne=T(g);w=E(ne,"SPAN",{class:!0}),T(w).forEach(v),ne.forEach(v),p.forEach(v),this.h()},h(){k(l,"class","svelte-ctklk1"),k(e,"class","task__main svelte-ctklk1"),k(s,"class","svg-image-del svelte-ctklk1"),k(i,"class","task__menu-btn task__menu-btn_del svelte-ctklk1"),k(c,"class","task__circle task__menu svelte-ctklk1"),k(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-ctklk1"),k(r,"style",m=`background-color: ${a[2]}`),k(w,"class","svelte-ctklk1"),k(g,"class","task__info-open svelte-ctklk1"),k(t,"class",h="task "+a[0]+" svelte-ctklk1"),D(t,"isDisabled",a[3]),D(t,"isOpen",a[4])},m(b,p){F(b,t,p),C(t,e),C(e,l),C(l,n),C(t,c),C(c,i),C(i,s),C(t,r);for(let O=0;O<u.length;O+=1)u[O].m(r,null);C(t,g),C(g,w),f||(o=[I(e,"click",a[6]),I(i,"click",B(a[7])),I(g,"click",B(a[11]))],f=!0)},p(b,[p]){p&2&&ie(n,b[1]),p&292&&(d=b[5].filter(b[10]),u=Q(u,p,N,1,b,d,_,r,Ae,ve,null,me)),p&4&&m!==(m=`background-color: ${b[2]}`)&&k(r,"style",m),p&1&&h!==(h="task "+b[0]+" svelte-ctklk1")&&k(t,"class",h),p&9&&D(t,"isDisabled",b[3]),p&17&&D(t,"isOpen",b[4])},i:U,o:U,d(b){b&&v(t);for(let p=0;p<u.length;p+=1)u[p].d();f=!1,ce(o)}}}function Re(a,t,e){let l,n;W(a,V,o=>e(12,l=o)),W(a,ke,o=>e(5,n=o));let{class:c=""}=t,{text:i=""}=t,{color:s="#0029FF"}=t,{disabled:r=!1}=t,{id:u=null}=t,_=!1;const m=()=>{let o=l.map(d=>(u===d.id&&(d.done=!d.done),d));V.set(o)},g=()=>{let o=l.filter(d=>d.id!=u);V.set(o),console.log("del",u)},w=o=>{let d=l.map(N=>(u===N.id&&(N.color=o),N));V.set(d)},h=o=>o.color!=s,f=()=>e(4,_=!_);return a.$$set=o=>{"class"in o&&e(0,c=o.class),"text"in o&&e(1,i=o.text),"color"in o&&e(2,s=o.color),"disabled"in o&&e(3,r=o.disabled),"id"in o&&e(9,u=o.id)},[c,i,s,r,_,n,m,g,w,u,h,f]}class ge extends L{constructor(t){super();P(this,t,Re,Me,q,{class:0,text:1,color:2,disabled:3,id:9})}}function pe(a,t,e){const l=a.slice();return l[4]=t[e],l}function be(a,t,e){const l=a.slice();return l[4]=t[e],l}function ye(a,t){let e,l,n,c,i,s=U,r;return l=new ge({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:a,first:null,c(){e=y("li"),M(l.$$.fragment),this.h()},l(u){e=E(u,"LI",{class:!0});var _=T(e);R(l.$$.fragment,_),_.forEach(v),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(u,_){F(u,e,_),j(l,e,null),r=!0},p(u,_){t=u;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){Y(e),s(),Z(e,i)},a(){s(),s=z(e,i,$,{duration:300})},i(u){r||(A(l.$$.fragment,u),G(()=>{c&&c.end(1),n=ue(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){S(l.$$.fragment,u),n&&n.invalidate(),c=fe(e,t[2],{key:t[4].id}),r=!1},d(u){u&&v(e),K(l),u&&c&&c.end()}}}function Ee(a,t){let e,l,n,c,i,s=U,r;return l=new ge({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:a,first:null,c(){e=y("li"),M(l.$$.fragment),this.h()},l(u){e=E(u,"LI",{class:!0});var _=T(e);R(l.$$.fragment,_),_.forEach(v),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(u,_){F(u,e,_),j(l,e,null),r=!0},p(u,_){t=u;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){Y(e),s(),Z(e,i)},a(){s(),s=z(e,i,$,{duration:300})},i(u){r||(A(l.$$.fragment,u),G(()=>{c&&c.end(1),n=ue(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){S(l.$$.fragment,u),n&&n.invalidate(),c=fe(e,t[2],{key:t[4].id}),r=!1},d(u){u&&v(e),K(l),u&&c&&c.end()}}}function je(a){let t,e,l,n=[],c=new Map,i,s=[],r=new Map,u,_,m=a[1].filter(Te);const g=f=>f[4].id;for(let f=0;f<m.length;f+=1){let o=be(a,m,f),d=g(o);c.set(d,n[f]=ye(d,o))}let w=a[1].filter(we);const h=f=>f[4].id;for(let f=0;f<w.length;f+=1){let o=pe(a,w,f),d=h(o);r.set(d,s[f]=Ee(d,o))}return{c(){t=y("section"),e=y("div"),l=y("ul");for(let f=0;f<n.length;f+=1)n[f].c();i=y("ul");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){t=E(f,"SECTION",{class:!0});var o=T(t);e=E(o,"DIV",{class:!0});var d=T(e);l=E(d,"UL",{class:!0});var N=T(l);for(let p=0;p<n.length;p+=1)n[p].l(N);N.forEach(v),i=E(d,"UL",{class:!0});var b=T(i);for(let p=0;p<s.length;p+=1)s[p].l(b);b.forEach(v),d.forEach(v),o.forEach(v),this.h()},h(){k(l,"class","task-section__col"),k(i,"class","task-section__col"),k(e,"class","container task-section__grid svelte-1rib3cm"),k(t,"class",u="task-section "+a[0]+" svelte-1rib3cm")},m(f,o){F(f,t,o),C(t,e),C(e,l);for(let d=0;d<n.length;d+=1)n[d].m(l,null);C(e,i);for(let d=0;d<s.length;d+=1)s[d].m(i,null);_=!0},p(f,[o]){if(o&2){m=f[1].filter(Te),H();for(let d=0;d<n.length;d+=1)n[d].r();n=Q(n,o,g,1,f,m,c,l,x,ye,null,be);for(let d=0;d<n.length;d+=1)n[d].a();J()}if(o&2){w=f[1].filter(we),H();for(let d=0;d<s.length;d+=1)s[d].r();s=Q(s,o,h,1,f,w,r,i,x,Ee,null,pe);for(let d=0;d<s.length;d+=1)s[d].a();J()}(!_||o&1&&u!==(u="task-section "+f[0]+" svelte-1rib3cm"))&&k(t,"class",u)},i(f){if(!_){for(let o=0;o<m.length;o+=1)A(n[o]);for(let o=0;o<w.length;o+=1)A(s[o]);_=!0}},o(f){for(let o=0;o<n.length;o+=1)S(n[o]);for(let o=0;o<s.length;o+=1)S(s[o]);_=!1},d(f){f&&v(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<s.length;o+=1)s[o].d()}}}const Te=a=>!a.done,we=a=>a.done;function Ke(a,t,e){let l;W(a,V,s=>e(1,l=s));let{class:n=""}=t;const[c,i]=Se({duration:s=>Math.sqrt(s*200),fallback(s,r){const u=getComputedStyle(s),_=u.transform==="none"?"":u.transform;return{duration:600,easing:Ue,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return a.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,c,i]}class Qe extends L{constructor(t){super();P(this,t,Ke,je,q,{class:0})}}function Ce(a){let t,e,l,n=a[2].text&&Fe(a);return{c(){t=y("button"),n&&n.c(),this.h()},l(c){t=E(c,"BUTTON",{class:!0});var i=T(t);n&&n.l(i),i.forEach(v),this.h()},h(){k(t,"class","btn svelte-12pihab")},m(c,i){F(c,t,i),n&&n.m(t,null),e||(l=I(t,"click",B(a[6])),e=!0)},p(c,i){c[2].text?n?n.p(c,i):(n=Fe(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&v(t),n&&n.d(),e=!1,l()}}}function Fe(a){let t=a[2].text+"",e;return{c(){e=ae(t)},l(l){e=re(l,t)},m(l,n){F(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&ie(e,t)},d(l){l&&v(e)}}}function We(a){let t,e,l,n,c,i=a[2]&&Ce(a);return{c(){t=y("div"),e=y("input"),i&&i.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var r=T(t);e=E(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(v),this.h()},h(){k(e,"placeholder",a[1]),k(e,"class","svelte-12pihab"),k(t,"class",l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab"),D(t,"isError",a[5])},m(s,r){F(s,t,r),C(t,e),_e(e,a[4]),i&&i.m(t,null),a[11](t),n||(c=[I(e,"input",a[9]),I(e,"input",a[7]),I(e,"keydown",a[10])],n=!0)},p(s,[r]){r&2&&k(e,"placeholder",s[1]),r&16&&e.value!==s[4]&&_e(e,s[4]),s[2]?i?i.p(s,r):(i=Ce(s),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-12pihab")&&k(t,"class",l),r&37&&D(t,"isError",s[5])},i:U,o:U,d(s){s&&v(t),i&&i.d(),a[11](null),n=!1,ce(c)}}}function Xe(a,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,i,s,r=!1;const u=Ve(),_=()=>{s?(u("submit",{value:s}),e(4,s="")):e(5,r=!0)},m=()=>{e(5,r=!1)},g=o=>{let d=o.key;d==="Control"&&u("color"),d==="Enter"&&_()};function w(){s=this.value,e(4,s)}const h=o=>g(o);function f(o){Be[o?"unshift":"push"](()=>{i=o,e(3,i)})}return a.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,c=o.btn)},[l,n,c,i,s,r,_,m,g,w,h,f]}class Ye extends L{constructor(t){super();P(this,t,Xe,We,q,{class:0,placeholder:1,btn:2})}}function Ie(a,t,e){const l=a.slice();return l[9]=t[e],l[11]=e,l}function Ne(a,t){let e,l,n,c,i=U,s,r,u;return{key:a,first:null,c(){e=y("button"),this.h()},l(_){e=E(_,"BUTTON",{class:!0,style:!0}),T(e).forEach(v),this.h()},h(){k(e,"class","add-todo__color svelte-y5nf6k"),k(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,m){F(_,e,m),s=!0,r||(u=I(e,"click",B(function(){oe(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,m){t=_,(!s||m&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&k(e,"style",l)},r(){c=e.getBoundingClientRect()},f(){Y(e),i(),Z(e,c)},a(){i(),i=z(e,c,$,{})},i(_){s||(G(()=>{n||(n=de(e,he,{},!0)),n.run(1)}),s=!0)},o(_){n||(n=de(e,he,{},!1)),n.run(0),s=!1},d(_){_&&v(e),_&&n&&n.end(),r=!1,u()}}}function Ze(a){let t,e,l,n,c=[],i=new Map,s,r,u,_,m,g=a[3].filter(a[7]);const w=h=>h[9].id;for(let h=0;h<g.length;h+=1){let f=Ie(a,g,h),o=w(f);i.set(o,c[h]=Ne(o,f))}return s=new Ye({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",a[8]),s.$on("submit",a[4]),{c(){t=y("div"),e=y("div"),l=y("span");for(let h=0;h<c.length;h+=1)c[h].c();M(s.$$.fragment),this.h()},l(h){t=E(h,"DIV",{class:!0});var f=T(t);e=E(f,"DIV",{class:!0});var o=T(e);l=E(o,"SPAN",{class:!0,style:!0}),T(l).forEach(v);for(let d=0;d<c.length;d+=1)c[d].l(o);o.forEach(v),R(s.$$.fragment,f),f.forEach(v),this.h()},h(){k(l,"class","add-todo__color add-todo__color_main svelte-y5nf6k"),k(l,"style",n=`color: ${a[1]}`),k(e,"class","add-todo__color-list svelte-y5nf6k"),D(e,"isOpen",a[2]),k(t,"class",r="add-todo "+a[0]+" svelte-y5nf6k")},m(h,f){F(h,t,f),C(t,e),C(e,l);for(let o=0;o<c.length;o+=1)c[o].m(e,null);j(s,t,null),u=!0,_||(m=I(l,"click",B(a[6])),_=!0)},p(h,[f]){if((!u||f&2&&n!==(n=`color: ${h[1]}`))&&k(l,"style",n),f&42){g=h[3].filter(h[7]),H();for(let o=0;o<c.length;o+=1)c[o].r();c=Q(c,f,w,1,h,g,i,e,x,Ne,null,Ie);for(let o=0;o<c.length;o+=1)c[o].a();J()}f&4&&D(e,"isOpen",h[2]),(!u||f&1&&r!==(r="add-todo "+h[0]+" svelte-y5nf6k"))&&k(t,"class",r)},i(h){if(!u){for(let f=0;f<g.length;f+=1)A(c[f]);A(s.$$.fragment,h),u=!0}},o(h){for(let f=0;f<c.length;f+=1)S(c[f]);S(s.$$.fragment,h),u=!1},d(h){h&&v(t);for(let f=0;f<c.length;f+=1)c[f].d();K(s),_=!1,m()}}}function ze(a,t,e){let l;W(a,ke,g=>e(3,l=g));let{class:n=""}=t,c="#0029FF",i=!1;const s=g=>{let w={id:Date.now(),text:g.detail.value,color:c,done:!1};V.update(h=>h=[w,...h])},r=g=>g&&e(1,c=g),u=()=>e(2,i=!i),_=g=>g.color!=c,m=()=>e(2,i=!i);return a.$$set=g=>{"class"in g&&e(0,n=g.class)},[n,c,i,l,s,r,u,_,m]}class Ge extends L{constructor(t){super();P(this,t,ze,Ze,q,{class:0})}}function He(a){let t,e,l,n,c,i,s;return n=new Ge({}),i=new Qe({props:{class:"mt-50"}}),{c(){t=Le(),e=y("section"),l=y("div"),M(n.$$.fragment),M(i.$$.fragment),this.h()},l(r){Pe('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=qe(r),e=E(r,"SECTION",{class:!0});var _=T(e);l=E(_,"DIV",{class:!0});var m=T(l);R(n.$$.fragment,m),m.forEach(v),_.forEach(v),R(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",k(l,"class","container"),k(e,"class",c=""+(a[0]+" mt-50 svelte-hols8d"))},m(r,u){F(r,t,u),F(r,e,u),C(e,l),j(n,l,null),j(i,r,u),s=!0},p(r,[u]){(!s||u&1&&c!==(c=""+(r[0]+" mt-50 svelte-hols8d")))&&k(e,"class",c)},i(r){s||(A(n.$$.fragment,r),A(i.$$.fragment,r),s=!0)},o(r){S(n.$$.fragment,r),S(i.$$.fragment,r),s=!1},d(r){r&&v(t),r&&v(e),K(n),K(i,r)}}}function Je(a,t,e){let{class:l=""}=t;return a.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class xe extends L{constructor(t){super();P(this,t,Je,He,q,{class:0})}}export{xe as default};
