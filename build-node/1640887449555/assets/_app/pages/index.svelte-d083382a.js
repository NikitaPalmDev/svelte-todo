import{K as De,C as Ae,S as B,i as L,s as P,e as y,c as E,a as T,d as k,b as m,f as F,D as C,L as N,M as q,N as oe,t as ae,g as re,O as U,h as ie,P as Q,Q as Oe,E as O,R as ce,T as W,v as M,w as R,x as j,U as Y,V as Z,W as z,p as D,X as G,Y as ue,n as A,Z as fe,A as K,m as H,o as J,_ as Se,$,a0 as x,a1 as Ue,a2 as _e,a3 as Ve,a4 as Be,a5 as de,a6 as he,j as Le,a7 as Pe,l as qe}from"../chunks/vendor-935e33b2.js";const S=Ae([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),me=De(S,(o,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=o.filter(s=>s.color).map(s=>s.color).concat(e),r=n.filter((s,a)=>n.indexOf(s)===a).map((s,a)=>({id:a,color:s}));t(r)});function ve(o,t,e){const l=o.slice();return l[11]=t[e],l}function ke(o,t){let e,l,n,i,r;return{key:o,first:null,c(){e=y("li"),l=y("button"),this.h()},l(s){e=E(s,"LI",{class:!0});var a=T(e);l=E(a,"BUTTON",{class:!0,style:!0}),T(l).forEach(k),a.forEach(k),this.h()},h(){m(l,"class","task__color-btn svelte-slbxf5"),m(l,"style",n=`background-color: ${t[11].color}`),m(e,"class","task__color-item svelte-slbxf5"),this.first=e},m(s,a){F(s,e,a),C(e,l),i||(r=N(l,"click",q(function(){oe(t[7](t[11].color))&&t[7](t[11].color).apply(this,arguments)})),i=!0)},p(s,a){t=s,a&20&&n!==(n=`background-color: ${t[11].color}`)&&m(l,"style",n)},d(s){s&&k(e),i=!1,r()}}}function Me(o){let t,e,l,n,i,r,s,a,f=[],d=new Map,v,g,w,_,u,c,h=o[4].filter(o[9]);const V=p=>p[11].id;for(let p=0;p<h.length;p+=1){let b=ve(o,h,p),I=V(b);d.set(I,f[p]=ke(I,b))}return{c(){t=y("div"),e=y("div"),l=y("p"),n=ae(o[1]),i=y("div"),r=y("button"),s=y("span"),a=y("ul");for(let p=0;p<f.length;p+=1)f[p].c();g=y("button"),w=y("span"),this.h()},l(p){t=E(p,"DIV",{class:!0});var b=T(t);e=E(b,"DIV",{class:!0});var I=T(e);l=E(I,"P",{class:!0});var ee=T(l);n=re(ee,o[1]),ee.forEach(k),I.forEach(k),i=E(b,"DIV",{class:!0});var te=T(i);r=E(te,"BUTTON",{class:!0});var le=T(r);s=E(le,"SPAN",{class:!0}),T(s).forEach(k),le.forEach(k),te.forEach(k),a=E(b,"UL",{class:!0,style:!0});var se=T(a);for(let X=0;X<f.length;X+=1)f[X].l(se);se.forEach(k),g=E(b,"BUTTON",{class:!0});var ne=T(g);w=E(ne,"SPAN",{class:!0}),T(w).forEach(k),ne.forEach(k),b.forEach(k),this.h()},h(){m(l,"class","svelte-slbxf5"),m(e,"class","task__main svelte-slbxf5"),m(s,"class","svg-image-del svelte-slbxf5"),m(r,"class","task__menu-btn task__menu-btn_del svelte-slbxf5"),m(i,"class","task__circle task__menu svelte-slbxf5"),m(a,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-slbxf5"),m(a,"style",v=`background-color: ${o[2]}`),m(w,"class","svelte-slbxf5"),m(g,"class","task__info-open svelte-slbxf5"),m(t,"class",_="task "+o[0]+" svelte-slbxf5"),U(t,"isDisabled",o[3])},m(p,b){F(p,t,b),C(t,e),C(e,l),C(l,n),C(t,i),C(i,r),C(r,s),C(t,a);for(let I=0;I<f.length;I+=1)f[I].m(a,null);C(t,g),C(g,w),u||(c=[N(e,"click",o[5]),N(r,"click",q(o[6]))],u=!0)},p(p,[b]){b&2&&ie(n,p[1]),b&148&&(h=p[4].filter(p[9]),f=Q(f,b,V,1,p,h,d,a,Oe,ke,null,ve)),b&4&&v!==(v=`background-color: ${p[2]}`)&&m(a,"style",v),b&1&&_!==(_="task "+p[0]+" svelte-slbxf5")&&m(t,"class",_),b&9&&U(t,"isDisabled",p[3])},i:O,o:O,d(p){p&&k(t);for(let b=0;b<f.length;b+=1)f[b].d();u=!1,ce(c)}}}function Re(o,t,e){let l,n;W(o,S,_=>e(10,l=_)),W(o,me,_=>e(4,n=_));let{class:i=""}=t,{text:r=""}=t,{color:s="#0029FF"}=t,{disabled:a=!1}=t,{id:f=null}=t;const d=()=>{let _=l.map(u=>(f===u.id&&(u.done=!u.done),u));S.set(_)},v=()=>{let _=l.filter(u=>u.id!=f);S.set(_),console.log("del",f)},g=_=>{let u=l.map(c=>(f===c.id&&(c.color=_),c));S.set(u)},w=_=>_.color!=s;return o.$$set=_=>{"class"in _&&e(0,i=_.class),"text"in _&&e(1,r=_.text),"color"in _&&e(2,s=_.color),"disabled"in _&&e(3,a=_.disabled),"id"in _&&e(8,f=_.id)},[i,r,s,a,n,d,v,g,f,w]}class ge extends B{constructor(t){super();L(this,t,Re,Me,P,{class:0,text:1,color:2,disabled:3,id:8})}}function be(o,t,e){const l=o.slice();return l[4]=t[e],l}function pe(o,t,e){const l=o.slice();return l[4]=t[e],l}function ye(o,t){let e,l,n,i,r,s=O,a;return l=new ge({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:o,first:null,c(){e=y("li"),M(l.$$.fragment),this.h()},l(f){e=E(f,"LI",{class:!0});var d=T(e);R(l.$$.fragment,d),d.forEach(k),this.h()},h(){m(e,"class","task-section__item"),this.first=e},m(f,d){F(f,e,d),j(l,e,null),a=!0},p(f,d){t=f;const v={};d&2&&(v.text=t[4].text),d&2&&(v.color=t[4].color?t[4].color:null),d&2&&(v.id=t[4].id),l.$set(v)},r(){r=e.getBoundingClientRect()},f(){Y(e),s(),Z(e,r)},a(){s(),s=z(e,r,$,{duration:300})},i(f){a||(D(l.$$.fragment,f),G(()=>{i&&i.end(1),n=ue(e,t[3],{key:t[4].id}),n.start()}),a=!0)},o(f){A(l.$$.fragment,f),n&&n.invalidate(),i=fe(e,t[2],{key:t[4].id}),a=!1},d(f){f&&k(e),K(l),f&&i&&i.end()}}}function Ee(o,t){let e,l,n,i,r,s=O,a;return l=new ge({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:o,first:null,c(){e=y("li"),M(l.$$.fragment),this.h()},l(f){e=E(f,"LI",{class:!0});var d=T(e);R(l.$$.fragment,d),d.forEach(k),this.h()},h(){m(e,"class","task-section__item"),this.first=e},m(f,d){F(f,e,d),j(l,e,null),a=!0},p(f,d){t=f;const v={};d&2&&(v.text=t[4].text),d&2&&(v.color=t[4].color?t[4].color:null),d&2&&(v.id=t[4].id),l.$set(v)},r(){r=e.getBoundingClientRect()},f(){Y(e),s(),Z(e,r)},a(){s(),s=z(e,r,$,{duration:300})},i(f){a||(D(l.$$.fragment,f),G(()=>{i&&i.end(1),n=ue(e,t[3],{key:t[4].id}),n.start()}),a=!0)},o(f){A(l.$$.fragment,f),n&&n.invalidate(),i=fe(e,t[2],{key:t[4].id}),a=!1},d(f){f&&k(e),K(l),f&&i&&i.end()}}}function je(o){let t,e,l,n=[],i=new Map,r,s=[],a=new Map,f,d,v=o[1].filter(Te);const g=u=>u[4].id;for(let u=0;u<v.length;u+=1){let c=pe(o,v,u),h=g(c);i.set(h,n[u]=ye(h,c))}let w=o[1].filter(we);const _=u=>u[4].id;for(let u=0;u<w.length;u+=1){let c=be(o,w,u),h=_(c);a.set(h,s[u]=Ee(h,c))}return{c(){t=y("section"),e=y("div"),l=y("ul");for(let u=0;u<n.length;u+=1)n[u].c();r=y("ul");for(let u=0;u<s.length;u+=1)s[u].c();this.h()},l(u){t=E(u,"SECTION",{class:!0});var c=T(t);e=E(c,"DIV",{class:!0});var h=T(e);l=E(h,"UL",{class:!0});var V=T(l);for(let b=0;b<n.length;b+=1)n[b].l(V);V.forEach(k),r=E(h,"UL",{class:!0});var p=T(r);for(let b=0;b<s.length;b+=1)s[b].l(p);p.forEach(k),h.forEach(k),c.forEach(k),this.h()},h(){m(l,"class","task-section__col"),m(r,"class","task-section__col"),m(e,"class","container task-section__grid svelte-1rib3cm"),m(t,"class",f="task-section "+o[0]+" svelte-1rib3cm")},m(u,c){F(u,t,c),C(t,e),C(e,l);for(let h=0;h<n.length;h+=1)n[h].m(l,null);C(e,r);for(let h=0;h<s.length;h+=1)s[h].m(r,null);d=!0},p(u,[c]){if(c&2){v=u[1].filter(Te),H();for(let h=0;h<n.length;h+=1)n[h].r();n=Q(n,c,g,1,u,v,i,l,x,ye,null,pe);for(let h=0;h<n.length;h+=1)n[h].a();J()}if(c&2){w=u[1].filter(we),H();for(let h=0;h<s.length;h+=1)s[h].r();s=Q(s,c,_,1,u,w,a,r,x,Ee,null,be);for(let h=0;h<s.length;h+=1)s[h].a();J()}(!d||c&1&&f!==(f="task-section "+u[0]+" svelte-1rib3cm"))&&m(t,"class",f)},i(u){if(!d){for(let c=0;c<v.length;c+=1)D(n[c]);for(let c=0;c<w.length;c+=1)D(s[c]);d=!0}},o(u){for(let c=0;c<n.length;c+=1)A(n[c]);for(let c=0;c<s.length;c+=1)A(s[c]);d=!1},d(u){u&&k(t);for(let c=0;c<n.length;c+=1)n[c].d();for(let c=0;c<s.length;c+=1)s[c].d()}}}const Te=o=>!o.done,we=o=>o.done;function Ke(o,t,e){let l;W(o,S,s=>e(1,l=s));let{class:n=""}=t;const[i,r]=Se({duration:s=>Math.sqrt(s*200),fallback(s,a){const f=getComputedStyle(s),d=f.transform==="none"?"":f.transform;return{duration:600,easing:Ue,css:v=>`
					transform: ${d} scale(${v});
					opacity: ${v}
				`}}});return o.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,i,r]}class Qe extends B{constructor(t){super();L(this,t,Ke,je,P,{class:0})}}function Ce(o){let t,e,l,n=o[2].text&&Fe(o);return{c(){t=y("button"),n&&n.c(),this.h()},l(i){t=E(i,"BUTTON",{class:!0});var r=T(t);n&&n.l(r),r.forEach(k),this.h()},h(){m(t,"class","btn svelte-12pihab")},m(i,r){F(i,t,r),n&&n.m(t,null),e||(l=N(t,"click",q(o[6])),e=!0)},p(i,r){i[2].text?n?n.p(i,r):(n=Fe(i),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(i){i&&k(t),n&&n.d(),e=!1,l()}}}function Fe(o){let t=o[2].text+"",e;return{c(){e=ae(t)},l(l){e=re(l,t)},m(l,n){F(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&ie(e,t)},d(l){l&&k(e)}}}function We(o){let t,e,l,n,i,r=o[2]&&Ce(o);return{c(){t=y("div"),e=y("input"),r&&r.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var a=T(t);e=E(a,"INPUT",{placeholder:!0,class:!0}),r&&r.l(a),a.forEach(k),this.h()},h(){m(e,"placeholder",o[1]),m(e,"class","svelte-12pihab"),m(t,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),U(t,"isError",o[5])},m(s,a){F(s,t,a),C(t,e),_e(e,o[4]),r&&r.m(t,null),o[11](t),n||(i=[N(e,"input",o[9]),N(e,"input",o[7]),N(e,"keydown",o[10])],n=!0)},p(s,[a]){a&2&&m(e,"placeholder",s[1]),a&16&&e.value!==s[4]&&_e(e,s[4]),s[2]?r?r.p(s,a):(r=Ce(s),r.c(),r.m(t,null)):r&&(r.d(1),r=null),a&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-12pihab")&&m(t,"class",l),a&37&&U(t,"isError",s[5])},i:O,o:O,d(s){s&&k(t),r&&r.d(),o[11](null),n=!1,ce(i)}}}function Xe(o,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:i=null}=t,r,s,a=!1;const f=Ve(),d=()=>{s?(f("submit",{value:s}),e(4,s="")):e(5,a=!0)},v=()=>{e(5,a=!1)},g=c=>{let h=c.key;h==="Control"&&f("color"),h==="Enter"&&d()};function w(){s=this.value,e(4,s)}const _=c=>g(c);function u(c){Be[c?"unshift":"push"](()=>{r=c,e(3,r)})}return o.$$set=c=>{"class"in c&&e(0,l=c.class),"placeholder"in c&&e(1,n=c.placeholder),"btn"in c&&e(2,i=c.btn)},[l,n,i,r,s,a,d,v,g,w,_,u]}class Ye extends B{constructor(t){super();L(this,t,Xe,We,P,{class:0,placeholder:1,btn:2})}}function Ie(o,t,e){const l=o.slice();return l[9]=t[e],l[11]=e,l}function Ne(o,t){let e,l,n,i,r=O,s,a,f;return{key:o,first:null,c(){e=y("button"),this.h()},l(d){e=E(d,"BUTTON",{class:!0,style:!0}),T(e).forEach(k),this.h()},h(){m(e,"class","add-todo__color svelte-y5nf6k"),m(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(d,v){F(d,e,v),s=!0,a||(f=N(e,"click",q(function(){oe(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),a=!0)},p(d,v){t=d,(!s||v&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",l)},r(){i=e.getBoundingClientRect()},f(){Y(e),r(),Z(e,i)},a(){r(),r=z(e,i,$,{})},i(d){s||(G(()=>{n||(n=de(e,he,{},!0)),n.run(1)}),s=!0)},o(d){n||(n=de(e,he,{},!1)),n.run(0),s=!1},d(d){d&&k(e),d&&n&&n.end(),a=!1,f()}}}function Ze(o){let t,e,l,n,i=[],r=new Map,s,a,f,d,v,g=o[3].filter(o[7]);const w=_=>_[9].id;for(let _=0;_<g.length;_+=1){let u=Ie(o,g,_),c=w(u);r.set(c,i[_]=Ne(c,u))}return s=new Ye({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",o[8]),s.$on("submit",o[4]),{c(){t=y("div"),e=y("div"),l=y("span");for(let _=0;_<i.length;_+=1)i[_].c();M(s.$$.fragment),this.h()},l(_){t=E(_,"DIV",{class:!0});var u=T(t);e=E(u,"DIV",{class:!0});var c=T(e);l=E(c,"SPAN",{class:!0,style:!0}),T(l).forEach(k);for(let h=0;h<i.length;h+=1)i[h].l(c);c.forEach(k),R(s.$$.fragment,u),u.forEach(k),this.h()},h(){m(l,"class","add-todo__color add-todo__color_main svelte-y5nf6k"),m(l,"style",n=`color: ${o[1]}`),m(e,"class","add-todo__color-list svelte-y5nf6k"),U(e,"isOpen",o[2]),m(t,"class",a="add-todo "+o[0]+" svelte-y5nf6k")},m(_,u){F(_,t,u),C(t,e),C(e,l);for(let c=0;c<i.length;c+=1)i[c].m(e,null);j(s,t,null),f=!0,d||(v=N(l,"click",q(o[6])),d=!0)},p(_,[u]){if((!f||u&2&&n!==(n=`color: ${_[1]}`))&&m(l,"style",n),u&42){g=_[3].filter(_[7]),H();for(let c=0;c<i.length;c+=1)i[c].r();i=Q(i,u,w,1,_,g,r,e,x,Ne,null,Ie);for(let c=0;c<i.length;c+=1)i[c].a();J()}u&4&&U(e,"isOpen",_[2]),(!f||u&1&&a!==(a="add-todo "+_[0]+" svelte-y5nf6k"))&&m(t,"class",a)},i(_){if(!f){for(let u=0;u<g.length;u+=1)D(i[u]);D(s.$$.fragment,_),f=!0}},o(_){for(let u=0;u<i.length;u+=1)A(i[u]);A(s.$$.fragment,_),f=!1},d(_){_&&k(t);for(let u=0;u<i.length;u+=1)i[u].d();K(s),d=!1,v()}}}function ze(o,t,e){let l;W(o,me,g=>e(3,l=g));let{class:n=""}=t,i="#0029FF",r=!1;const s=g=>{let w={id:Date.now(),text:g.detail.value,color:i,done:!1};S.update(_=>_=[w,..._])},a=g=>g&&e(1,i=g),f=()=>e(2,r=!r),d=g=>g.color!=i,v=()=>e(2,r=!r);return o.$$set=g=>{"class"in g&&e(0,n=g.class)},[n,i,r,l,s,a,f,d,v]}class Ge extends B{constructor(t){super();L(this,t,ze,Ze,P,{class:0})}}function He(o){let t,e,l,n,i,r,s;return n=new Ge({}),r=new Qe({props:{class:"mt-50"}}),{c(){t=Le(),e=y("section"),l=y("div"),M(n.$$.fragment),M(r.$$.fragment),this.h()},l(a){Pe('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=qe(a),e=E(a,"SECTION",{class:!0});var d=T(e);l=E(d,"DIV",{class:!0});var v=T(l);R(n.$$.fragment,v),v.forEach(k),d.forEach(k),R(r.$$.fragment,a),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(l,"class","container"),m(e,"class",i=""+(o[0]+" mt-50 svelte-hols8d"))},m(a,f){F(a,t,f),F(a,e,f),C(e,l),j(n,l,null),j(r,a,f),s=!0},p(a,[f]){(!s||f&1&&i!==(i=""+(a[0]+" mt-50 svelte-hols8d")))&&m(e,"class",i)},i(a){s||(D(n.$$.fragment,a),D(r.$$.fragment,a),s=!0)},o(a){A(n.$$.fragment,a),A(r.$$.fragment,a),s=!1},d(a){a&&k(t),a&&k(e),K(n),K(r,a)}}}function Je(o,t,e){let{class:l=""}=t;return o.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class xe extends B{constructor(t){super();L(this,t,Je,He,P,{class:0})}}export{xe as default};
