import{K as Oe,C as De,S as L,i as P,s as q,e as y,c as E,a as T,d as k,b as m,f as F,D as C,L as I,M as B,N as oe,t as ae,g as re,O as D,h as ie,P as Q,Q as Ae,E as U,R as ce,T as W,v as M,w as R,x as j,U as Y,V as Z,W as z,p as A,X as G,Y as ue,n as S,Z as fe,A as K,m as H,o as J,_ as Se,$,a0 as x,a1 as Ue,a2 as _e,a3 as Ve,a4 as Be,a5 as he,a6 as de,j as Le,a7 as Pe,l as qe}from"../chunks/vendor-935e33b2.js";const V=De([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),me=Oe(V,(a,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=a.filter(s=>s.color).map(s=>s.color).concat(e),i=n.filter((s,r)=>n.indexOf(s)===r).map((s,r)=>({id:r,color:s}));t(i)});function ve(a,t,e){const l=a.slice();return l[13]=t[e],l}function ke(a,t){let e,l,n,c,i;return{key:a,first:null,c(){e=y("li"),l=y("button"),this.h()},l(s){e=E(s,"LI",{class:!0});var r=T(e);l=E(r,"BUTTON",{class:!0,style:!0}),T(l).forEach(k),r.forEach(k),this.h()},h(){m(l,"class","task__color-btn svelte-1hhnnxh"),m(l,"style",n=`background-color: ${t[13].color}`),m(e,"class","task__color-item svelte-1hhnnxh"),this.first=e},m(s,r){F(s,e,r),C(e,l),c||(i=I(l,"click",B(function(){oe(t[8](t[13].color))&&t[8](t[13].color).apply(this,arguments)})),c=!0)},p(s,r){t=s,r&36&&n!==(n=`background-color: ${t[13].color}`)&&m(l,"style",n)},d(s){s&&k(e),c=!1,i()}}}function Me(a){let t,e,l,n,c,i,s,r,u=[],_=new Map,v,g,w,d,f,o,h=a[5].filter(a[10]);const N=b=>b[13].id;for(let b=0;b<h.length;b+=1){let p=ve(a,h,b),O=N(p);_.set(O,u[b]=ke(O,p))}return{c(){t=y("div"),e=y("div"),l=y("p"),n=ae(a[1]),c=y("div"),i=y("button"),s=y("span"),r=y("ul");for(let b=0;b<u.length;b+=1)u[b].c();g=y("button"),w=y("span"),this.h()},l(b){t=E(b,"DIV",{class:!0});var p=T(t);e=E(p,"DIV",{class:!0});var O=T(e);l=E(O,"P",{class:!0});var ee=T(l);n=re(ee,a[1]),ee.forEach(k),O.forEach(k),c=E(p,"DIV",{class:!0});var te=T(c);i=E(te,"BUTTON",{class:!0});var le=T(i);s=E(le,"SPAN",{class:!0}),T(s).forEach(k),le.forEach(k),te.forEach(k),r=E(p,"UL",{class:!0,style:!0});var se=T(r);for(let X=0;X<u.length;X+=1)u[X].l(se);se.forEach(k),g=E(p,"BUTTON",{class:!0});var ne=T(g);w=E(ne,"SPAN",{class:!0}),T(w).forEach(k),ne.forEach(k),p.forEach(k),this.h()},h(){m(l,"class","svelte-1hhnnxh"),m(e,"class","task__main svelte-1hhnnxh"),m(s,"class","svg-image-del svelte-1hhnnxh"),m(i,"class","task__menu-btn task__menu-btn_del svelte-1hhnnxh"),m(c,"class","task__circle task__menu svelte-1hhnnxh"),m(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1hhnnxh"),m(r,"style",v=`background-color: ${a[2]}`),m(w,"class","svelte-1hhnnxh"),m(g,"class","task__info-open svelte-1hhnnxh"),m(t,"class",d="task "+a[0]+" svelte-1hhnnxh"),D(t,"isDisabled",a[3]),D(t,"isOpen",a[4])},m(b,p){F(b,t,p),C(t,e),C(e,l),C(l,n),C(t,c),C(c,i),C(i,s),C(t,r);for(let O=0;O<u.length;O+=1)u[O].m(r,null);C(t,g),C(g,w),f||(o=[I(e,"click",a[6]),I(i,"click",B(a[7])),I(g,"click",B(a[11]))],f=!0)},p(b,[p]){p&2&&ie(n,b[1]),p&292&&(h=b[5].filter(b[10]),u=Q(u,p,N,1,b,h,_,r,Ae,ke,null,ve)),p&4&&v!==(v=`background-color: ${b[2]}`)&&m(r,"style",v),p&1&&d!==(d="task "+b[0]+" svelte-1hhnnxh")&&m(t,"class",d),p&9&&D(t,"isDisabled",b[3]),p&17&&D(t,"isOpen",b[4])},i:U,o:U,d(b){b&&k(t);for(let p=0;p<u.length;p+=1)u[p].d();f=!1,ce(o)}}}function Re(a,t,e){let l,n;W(a,V,o=>e(12,l=o)),W(a,me,o=>e(5,n=o));let{class:c=""}=t,{text:i=""}=t,{color:s="#0029FF"}=t,{disabled:r=!1}=t,{id:u=null}=t,_=!1;const v=()=>{let o=l.map(h=>(u===h.id&&(h.done=!h.done),h));V.set(o)},g=()=>{let o=l.filter(h=>h.id!=u);V.set(o),console.log("del",u)},w=o=>{let h=l.map(N=>(u===N.id&&(N.color=o),N));V.set(h)},d=o=>o.color!=s,f=()=>e(4,_=!_);return a.$$set=o=>{"class"in o&&e(0,c=o.class),"text"in o&&e(1,i=o.text),"color"in o&&e(2,s=o.color),"disabled"in o&&e(3,r=o.disabled),"id"in o&&e(9,u=o.id)},[c,i,s,r,_,n,v,g,w,u,d,f]}class ge extends L{constructor(t){super();P(this,t,Re,Me,q,{class:0,text:1,color:2,disabled:3,id:9})}}function pe(a,t,e){const l=a.slice();return l[4]=t[e],l}function be(a,t,e){const l=a.slice();return l[4]=t[e],l}function ye(a,t){let e,l,n,c,i,s=U,r;return l=new ge({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:a,first:null,c(){e=y("li"),M(l.$$.fragment),this.h()},l(u){e=E(u,"LI",{class:!0});var _=T(e);R(l.$$.fragment,_),_.forEach(k),this.h()},h(){m(e,"class","task-section__item"),this.first=e},m(u,_){F(u,e,_),j(l,e,null),r=!0},p(u,_){t=u;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){Y(e),s(),Z(e,i)},a(){s(),s=z(e,i,$,{duration:300})},i(u){r||(A(l.$$.fragment,u),G(()=>{c&&c.end(1),n=ue(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){S(l.$$.fragment,u),n&&n.invalidate(),c=fe(e,t[2],{key:t[4].id}),r=!1},d(u){u&&k(e),K(l),u&&c&&c.end()}}}function Ee(a,t){let e,l,n,c,i,s=U,r;return l=new ge({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:a,first:null,c(){e=y("li"),M(l.$$.fragment),this.h()},l(u){e=E(u,"LI",{class:!0});var _=T(e);R(l.$$.fragment,_),_.forEach(k),this.h()},h(){m(e,"class","task-section__item"),this.first=e},m(u,_){F(u,e,_),j(l,e,null),r=!0},p(u,_){t=u;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){Y(e),s(),Z(e,i)},a(){s(),s=z(e,i,$,{duration:300})},i(u){r||(A(l.$$.fragment,u),G(()=>{c&&c.end(1),n=ue(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){S(l.$$.fragment,u),n&&n.invalidate(),c=fe(e,t[2],{key:t[4].id}),r=!1},d(u){u&&k(e),K(l),u&&c&&c.end()}}}function je(a){let t,e,l,n=[],c=new Map,i,s=[],r=new Map,u,_,v=a[1].filter(Te);const g=f=>f[4].id;for(let f=0;f<v.length;f+=1){let o=be(a,v,f),h=g(o);c.set(h,n[f]=ye(h,o))}let w=a[1].filter(we);const d=f=>f[4].id;for(let f=0;f<w.length;f+=1){let o=pe(a,w,f),h=d(o);r.set(h,s[f]=Ee(h,o))}return{c(){t=y("section"),e=y("div"),l=y("ul");for(let f=0;f<n.length;f+=1)n[f].c();i=y("ul");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){t=E(f,"SECTION",{class:!0});var o=T(t);e=E(o,"DIV",{class:!0});var h=T(e);l=E(h,"UL",{class:!0});var N=T(l);for(let p=0;p<n.length;p+=1)n[p].l(N);N.forEach(k),i=E(h,"UL",{class:!0});var b=T(i);for(let p=0;p<s.length;p+=1)s[p].l(b);b.forEach(k),h.forEach(k),o.forEach(k),this.h()},h(){m(l,"class","task-section__col"),m(i,"class","task-section__col"),m(e,"class","container task-section__grid svelte-1rib3cm"),m(t,"class",u="task-section "+a[0]+" svelte-1rib3cm")},m(f,o){F(f,t,o),C(t,e),C(e,l);for(let h=0;h<n.length;h+=1)n[h].m(l,null);C(e,i);for(let h=0;h<s.length;h+=1)s[h].m(i,null);_=!0},p(f,[o]){if(o&2){v=f[1].filter(Te),H();for(let h=0;h<n.length;h+=1)n[h].r();n=Q(n,o,g,1,f,v,c,l,x,ye,null,be);for(let h=0;h<n.length;h+=1)n[h].a();J()}if(o&2){w=f[1].filter(we),H();for(let h=0;h<s.length;h+=1)s[h].r();s=Q(s,o,d,1,f,w,r,i,x,Ee,null,pe);for(let h=0;h<s.length;h+=1)s[h].a();J()}(!_||o&1&&u!==(u="task-section "+f[0]+" svelte-1rib3cm"))&&m(t,"class",u)},i(f){if(!_){for(let o=0;o<v.length;o+=1)A(n[o]);for(let o=0;o<w.length;o+=1)A(s[o]);_=!0}},o(f){for(let o=0;o<n.length;o+=1)S(n[o]);for(let o=0;o<s.length;o+=1)S(s[o]);_=!1},d(f){f&&k(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<s.length;o+=1)s[o].d()}}}const Te=a=>!a.done,we=a=>a.done;function Ke(a,t,e){let l;W(a,V,s=>e(1,l=s));let{class:n=""}=t;const[c,i]=Se({duration:s=>Math.sqrt(s*200),fallback(s,r){const u=getComputedStyle(s),_=u.transform==="none"?"":u.transform;return{duration:600,easing:Ue,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return a.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,c,i]}class Qe extends L{constructor(t){super();P(this,t,Ke,je,q,{class:0})}}function Ce(a){let t,e,l,n=a[2].text&&Fe(a);return{c(){t=y("button"),n&&n.c(),this.h()},l(c){t=E(c,"BUTTON",{class:!0});var i=T(t);n&&n.l(i),i.forEach(k),this.h()},h(){m(t,"class","btn svelte-12pihab")},m(c,i){F(c,t,i),n&&n.m(t,null),e||(l=I(t,"click",B(a[6])),e=!0)},p(c,i){c[2].text?n?n.p(c,i):(n=Fe(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&k(t),n&&n.d(),e=!1,l()}}}function Fe(a){let t=a[2].text+"",e;return{c(){e=ae(t)},l(l){e=re(l,t)},m(l,n){F(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&ie(e,t)},d(l){l&&k(e)}}}function We(a){let t,e,l,n,c,i=a[2]&&Ce(a);return{c(){t=y("div"),e=y("input"),i&&i.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var r=T(t);e=E(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){m(e,"placeholder",a[1]),m(e,"class","svelte-12pihab"),m(t,"class",l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab"),D(t,"isError",a[5])},m(s,r){F(s,t,r),C(t,e),_e(e,a[4]),i&&i.m(t,null),a[11](t),n||(c=[I(e,"input",a[9]),I(e,"input",a[7]),I(e,"keydown",a[10])],n=!0)},p(s,[r]){r&2&&m(e,"placeholder",s[1]),r&16&&e.value!==s[4]&&_e(e,s[4]),s[2]?i?i.p(s,r):(i=Ce(s),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-12pihab")&&m(t,"class",l),r&37&&D(t,"isError",s[5])},i:U,o:U,d(s){s&&k(t),i&&i.d(),a[11](null),n=!1,ce(c)}}}function Xe(a,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,i,s,r=!1;const u=Ve(),_=()=>{s?(u("submit",{value:s}),e(4,s="")):e(5,r=!0)},v=()=>{e(5,r=!1)},g=o=>{let h=o.key;h==="Control"&&u("color"),h==="Enter"&&_()};function w(){s=this.value,e(4,s)}const d=o=>g(o);function f(o){Be[o?"unshift":"push"](()=>{i=o,e(3,i)})}return a.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,c=o.btn)},[l,n,c,i,s,r,_,v,g,w,d,f]}class Ye extends L{constructor(t){super();P(this,t,Xe,We,q,{class:0,placeholder:1,btn:2})}}function Ie(a,t,e){const l=a.slice();return l[9]=t[e],l[11]=e,l}function Ne(a,t){let e,l,n,c,i=U,s,r,u;return{key:a,first:null,c(){e=y("button"),this.h()},l(_){e=E(_,"BUTTON",{class:!0,style:!0}),T(e).forEach(k),this.h()},h(){m(e,"class","add-todo__color svelte-y5nf6k"),m(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){F(_,e,v),s=!0,r||(u=I(e,"click",B(function(){oe(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,v){t=_,(!s||v&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",l)},r(){c=e.getBoundingClientRect()},f(){Y(e),i(),Z(e,c)},a(){i(),i=z(e,c,$,{})},i(_){s||(G(()=>{n||(n=he(e,de,{},!0)),n.run(1)}),s=!0)},o(_){n||(n=he(e,de,{},!1)),n.run(0),s=!1},d(_){_&&k(e),_&&n&&n.end(),r=!1,u()}}}function Ze(a){let t,e,l,n,c=[],i=new Map,s,r,u,_,v,g=a[3].filter(a[7]);const w=d=>d[9].id;for(let d=0;d<g.length;d+=1){let f=Ie(a,g,d),o=w(f);i.set(o,c[d]=Ne(o,f))}return s=new Ye({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",a[8]),s.$on("submit",a[4]),{c(){t=y("div"),e=y("div"),l=y("span");for(let d=0;d<c.length;d+=1)c[d].c();M(s.$$.fragment),this.h()},l(d){t=E(d,"DIV",{class:!0});var f=T(t);e=E(f,"DIV",{class:!0});var o=T(e);l=E(o,"SPAN",{class:!0,style:!0}),T(l).forEach(k);for(let h=0;h<c.length;h+=1)c[h].l(o);o.forEach(k),R(s.$$.fragment,f),f.forEach(k),this.h()},h(){m(l,"class","add-todo__color add-todo__color_main svelte-y5nf6k"),m(l,"style",n=`color: ${a[1]}`),m(e,"class","add-todo__color-list svelte-y5nf6k"),D(e,"isOpen",a[2]),m(t,"class",r="add-todo "+a[0]+" svelte-y5nf6k")},m(d,f){F(d,t,f),C(t,e),C(e,l);for(let o=0;o<c.length;o+=1)c[o].m(e,null);j(s,t,null),u=!0,_||(v=I(l,"click",B(a[6])),_=!0)},p(d,[f]){if((!u||f&2&&n!==(n=`color: ${d[1]}`))&&m(l,"style",n),f&42){g=d[3].filter(d[7]),H();for(let o=0;o<c.length;o+=1)c[o].r();c=Q(c,f,w,1,d,g,i,e,x,Ne,null,Ie);for(let o=0;o<c.length;o+=1)c[o].a();J()}f&4&&D(e,"isOpen",d[2]),(!u||f&1&&r!==(r="add-todo "+d[0]+" svelte-y5nf6k"))&&m(t,"class",r)},i(d){if(!u){for(let f=0;f<g.length;f+=1)A(c[f]);A(s.$$.fragment,d),u=!0}},o(d){for(let f=0;f<c.length;f+=1)S(c[f]);S(s.$$.fragment,d),u=!1},d(d){d&&k(t);for(let f=0;f<c.length;f+=1)c[f].d();K(s),_=!1,v()}}}function ze(a,t,e){let l;W(a,me,g=>e(3,l=g));let{class:n=""}=t,c="#0029FF",i=!1;const s=g=>{let w={id:Date.now(),text:g.detail.value,color:c,done:!1};V.update(d=>d=[w,...d])},r=g=>g&&e(1,c=g),u=()=>e(2,i=!i),_=g=>g.color!=c,v=()=>e(2,i=!i);return a.$$set=g=>{"class"in g&&e(0,n=g.class)},[n,c,i,l,s,r,u,_,v]}class Ge extends L{constructor(t){super();P(this,t,ze,Ze,q,{class:0})}}function He(a){let t,e,l,n,c,i,s;return n=new Ge({}),i=new Qe({props:{class:"mt-50"}}),{c(){t=Le(),e=y("section"),l=y("div"),M(n.$$.fragment),M(i.$$.fragment),this.h()},l(r){Pe('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=qe(r),e=E(r,"SECTION",{class:!0});var _=T(e);l=E(_,"DIV",{class:!0});var v=T(l);R(n.$$.fragment,v),v.forEach(k),_.forEach(k),R(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(l,"class","container"),m(e,"class",c=""+(a[0]+" mt-50 svelte-hols8d"))},m(r,u){F(r,t,u),F(r,e,u),C(e,l),j(n,l,null),j(i,r,u),s=!0},p(r,[u]){(!s||u&1&&c!==(c=""+(r[0]+" mt-50 svelte-hols8d")))&&m(e,"class",c)},i(r){s||(A(n.$$.fragment,r),A(i.$$.fragment,r),s=!0)},o(r){S(n.$$.fragment,r),S(i.$$.fragment,r),s=!1},d(r){r&&k(t),r&&k(e),K(n),K(i,r)}}}function Je(a,t,e){let{class:l=""}=t;return a.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class xe extends L{constructor(t){super();P(this,t,Je,He,q,{class:0})}}export{xe as default};
