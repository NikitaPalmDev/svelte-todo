import{K as Ie,C as Ne,S as O,i as U,s as V,k as P,f as I,p as D,e as E,c as y,a as T,d as m,b as v,D as N,L as F,M as X,N as Ae,O as Y,P as x,m as R,n as C,o as j,t as ee,g as te,Q as K,h as le,R as Z,T as De,U as se,V as z,W as ne,v as L,w as q,x as B,X as ae,Y as ie,Z as oe,_ as re,$ as ce,A as M,a0 as Ce,a1 as ue,a2 as fe,a3 as Se,E as Q,a4 as _e,a5 as Fe,a6 as Oe,j as Ue,a7 as Ve,l as Le}from"../chunks/vendor-3d44b8fd.js";const S=Ne([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),qe=Ie(S,(o,e)=>{let t=o.filter(s=>s.color).map(s=>s.color),l=t.filter((s,a)=>t.indexOf(s)===a).map((s,a)=>({id:a,color:s}));e(l)});function de(o,e,t){const n=o.slice();return n[10]=e[t],n}function he(o){let e,t,n,l,s,a,i;return{c(){e=E("li"),t=E("button"),this.h()},l(r){e=y(r,"LI",{class:!0,"animation:flip":!0});var c=T(e);t=y(c,"BUTTON",{class:!0,style:!0}),T(t).forEach(m),c.forEach(m),this.h()},h(){v(t,"class","task__color-btn svelte-100588h"),v(t,"style",n=`background-color: ${o[10].color}`),v(e,"class","task__color-item svelte-100588h"),v(e,"animation:flip","")},m(r,c){I(r,e,c),N(e,t),s=!0,a||(i=F(t,"click",X(function(){Ae(o[7](o[10].color))&&o[7](o[10].color).apply(this,arguments)})),a=!0)},p(r,c){o=r,(!s||c&16&&n!==(n=`background-color: ${o[10].color}`))&&v(t,"style",n)},i(r){s||(Y(()=>{l||(l=x(e,ne,{},!0)),l.run(1)}),s=!0)},o(r){l||(l=x(e,ne,{},!1)),l.run(0),s=!1},d(r){r&&m(e),r&&l&&l.end(),a=!1,i()}}}function me(o,e){let t,n,l,s=e[10]!=e[2]&&he(e);return{key:o,first:null,c(){t=P(),s&&s.c(),n=P(),this.h()},l(a){t=P(),s&&s.l(a),n=P(),this.h()},h(){this.first=t},m(a,i){I(a,t,i),s&&s.m(a,i),I(a,n,i),l=!0},p(a,i){e=a,e[10]!=e[2]?s?(s.p(e,i),i&20&&D(s,1)):(s=he(e),s.c(),D(s,1),s.m(n.parentNode,n)):s&&(R(),C(s,1,1,()=>{s=null}),j())},i(a){l||(D(s),l=!0)},o(a){C(s),l=!1},d(a){a&&m(t),s&&s.d(a),a&&m(n)}}}function Be(o){let e,t,n,l,s,a,i,r,c=[],h=new Map,k,A,_,b,f,u=o[4];const d=p=>p[10].id;for(let p=0;p<u.length;p+=1){let g=de(o,u,p),w=d(g);h.set(w,c[p]=me(w,g))}return{c(){e=E("div"),t=E("div"),n=E("p"),l=ee(o[1]),s=E("div"),a=E("button"),i=E("span"),r=E("ul");for(let p=0;p<c.length;p+=1)c[p].c();this.h()},l(p){e=y(p,"DIV",{class:!0});var g=T(e);t=y(g,"DIV",{class:!0});var w=T(t);n=y(w,"P",{class:!0});var G=T(n);l=te(G,o[1]),G.forEach(m),w.forEach(m),s=y(g,"DIV",{class:!0});var H=T(s);a=y(H,"BUTTON",{class:!0});var J=T(a);i=y(J,"SPAN",{class:!0}),T(i).forEach(m),J.forEach(m),H.forEach(m),r=y(g,"UL",{class:!0,style:!0});var $=T(r);for(let W=0;W<c.length;W+=1)c[W].l($);$.forEach(m),g.forEach(m),this.h()},h(){v(n,"class","svelte-100588h"),v(t,"class","task__main svelte-100588h"),v(i,"class","svg-image-del svelte-100588h"),v(a,"class","task__menu-btn task__menu-btn_del svelte-100588h"),v(s,"class","task__circle task__menu svelte-100588h"),v(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),v(r,"style",k=`background-color: ${o[2]}`),v(e,"class",A="task "+o[0]+" svelte-100588h"),K(e,"isDisabled",o[3])},m(p,g){I(p,e,g),N(e,t),N(t,n),N(n,l),N(e,s),N(s,a),N(a,i),N(e,r);for(let w=0;w<c.length;w+=1)c[w].m(r,null);_=!0,b||(f=[F(t,"click",o[5]),F(a,"click",X(o[6]))],b=!0)},p(p,[g]){(!_||g&2)&&le(l,p[1]),g&148&&(u=p[4],R(),c=Z(c,g,d,1,p,u,h,r,De,me,null,de),j()),(!_||g&4&&k!==(k=`background-color: ${p[2]}`))&&v(r,"style",k),(!_||g&1&&A!==(A="task "+p[0]+" svelte-100588h"))&&v(e,"class",A),g&9&&K(e,"isDisabled",p[3])},i(p){if(!_){for(let g=0;g<u.length;g+=1)D(c[g]);_=!0}},o(p){for(let g=0;g<c.length;g+=1)C(c[g]);_=!1},d(p){p&&m(e);for(let g=0;g<c.length;g+=1)c[g].d();b=!1,se(f)}}}function Me(o,e,t){let n,l;z(o,qe,_=>t(4,n=_)),z(o,S,_=>t(9,l=_));let{class:s=""}=e,{text:a=""}=e,{color:i="#0029FF"}=e,{disabled:r=!1}=e,{id:c=null}=e;const h=()=>{let _=l.map(b=>(c===b.id&&(b.done=!b.done),b));S.set(_)},k=()=>{let _=l.filter(b=>b.id!=c);S.set(_),console.log("del",c)},A=_=>{let b=l.map(f=>(c===f.id&&(f.color=_),f));S.set(b)};return console.log(n),o.$$set=_=>{"class"in _&&t(0,s=_.class),"text"in _&&t(1,a=_.text),"color"in _&&t(2,i=_.color),"disabled"in _&&t(3,r=_.disabled),"id"in _&&t(8,c=_.id)},[s,a,i,r,n,h,k,A,c]}class ve extends O{constructor(e){super();U(this,e,Me,Be,V,{class:0,text:1,color:2,disabled:3,id:8})}}function ge(o,e,t){const n=o.slice();return n[4]=e[t],n}function ke(o,e,t){const n=o.slice();return n[4]=e[t],n}function pe(o,e){let t,n,l,s,a,i=Q,r;return n=new ve({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:o,first:null,c(){t=E("li"),L(n.$$.fragment),this.h()},l(c){t=y(c,"LI",{class:!0});var h=T(t);q(n.$$.fragment,h),h.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,h){I(c,t,h),B(n,t,null),r=!0},p(c,h){e=c;const k={};h&2&&(k.text=e[4].text),h&2&&(k.color=e[4].color?e[4].color:null),h&2&&(k.id=e[4].id),n.$set(k)},r(){a=t.getBoundingClientRect()},f(){ae(t),i(),ie(t,a)},a(){i(),i=oe(t,a,ue,{duration:300})},i(c){r||(D(n.$$.fragment,c),Y(()=>{s&&s.end(1),l=re(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(c){C(n.$$.fragment,c),l&&l.invalidate(),s=ce(t,e[2],{key:e[4].id}),r=!1},d(c){c&&m(t),M(n),c&&s&&s.end()}}}function be(o,e){let t,n,l,s,a,i=Q,r;return n=new ve({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:o,first:null,c(){t=E("li"),L(n.$$.fragment),this.h()},l(c){t=y(c,"LI",{class:!0});var h=T(t);q(n.$$.fragment,h),h.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,h){I(c,t,h),B(n,t,null),r=!0},p(c,h){e=c;const k={};h&2&&(k.text=e[4].text),h&2&&(k.color=e[4].color?e[4].color:null),h&2&&(k.id=e[4].id),n.$set(k)},r(){a=t.getBoundingClientRect()},f(){ae(t),i(),ie(t,a)},a(){i(),i=oe(t,a,ue,{duration:300})},i(c){r||(D(n.$$.fragment,c),Y(()=>{s&&s.end(1),l=re(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(c){C(n.$$.fragment,c),l&&l.invalidate(),s=ce(t,e[2],{key:e[4].id}),r=!1},d(c){c&&m(t),M(n),c&&s&&s.end()}}}function Pe(o){let e,t,n,l=[],s=new Map,a,i=[],r=new Map,c,h,k=o[1].filter(Ee);const A=f=>f[4].id;for(let f=0;f<k.length;f+=1){let u=ke(o,k,f),d=A(u);s.set(d,l[f]=pe(d,u))}let _=o[1].filter(ye);const b=f=>f[4].id;for(let f=0;f<_.length;f+=1){let u=ge(o,_,f),d=b(u);r.set(d,i[f]=be(d,u))}return{c(){e=E("section"),t=E("div"),n=E("ul");for(let f=0;f<l.length;f+=1)l[f].c();a=E("ul");for(let f=0;f<i.length;f+=1)i[f].c();this.h()},l(f){e=y(f,"SECTION",{class:!0});var u=T(e);t=y(u,"DIV",{class:!0});var d=T(t);n=y(d,"UL",{class:!0});var p=T(n);for(let w=0;w<l.length;w+=1)l[w].l(p);p.forEach(m),a=y(d,"UL",{class:!0});var g=T(a);for(let w=0;w<i.length;w+=1)i[w].l(g);g.forEach(m),d.forEach(m),u.forEach(m),this.h()},h(){v(n,"class","task-section__col"),v(a,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",c="task-section "+o[0]+" svelte-1rib3cm")},m(f,u){I(f,e,u),N(e,t),N(t,n);for(let d=0;d<l.length;d+=1)l[d].m(n,null);N(t,a);for(let d=0;d<i.length;d+=1)i[d].m(a,null);h=!0},p(f,[u]){if(u&2){k=f[1].filter(Ee),R();for(let d=0;d<l.length;d+=1)l[d].r();l=Z(l,u,A,1,f,k,s,n,fe,pe,null,ke);for(let d=0;d<l.length;d+=1)l[d].a();j()}if(u&2){_=f[1].filter(ye),R();for(let d=0;d<i.length;d+=1)i[d].r();i=Z(i,u,b,1,f,_,r,a,fe,be,null,ge);for(let d=0;d<i.length;d+=1)i[d].a();j()}(!h||u&1&&c!==(c="task-section "+f[0]+" svelte-1rib3cm"))&&v(e,"class",c)},i(f){if(!h){for(let u=0;u<k.length;u+=1)D(l[u]);for(let u=0;u<_.length;u+=1)D(i[u]);h=!0}},o(f){for(let u=0;u<l.length;u+=1)C(l[u]);for(let u=0;u<i.length;u+=1)C(i[u]);h=!1},d(f){f&&m(e);for(let u=0;u<l.length;u+=1)l[u].d();for(let u=0;u<i.length;u+=1)i[u].d()}}}const Ee=o=>!o.done,ye=o=>o.done;function Re(o,e,t){let n;z(o,S,i=>t(1,n=i));let{class:l=""}=e;const[s,a]=Ce({duration:i=>Math.sqrt(i*200),fallback(i,r){const c=getComputedStyle(i),h=c.transform==="none"?"":c.transform;return{duration:600,easing:Se,css:k=>`
					transform: ${h} scale(${k});
					opacity: ${k}
				`}}});return o.$$set=i=>{"class"in i&&t(0,l=i.class)},[l,n,s,a]}class je extends O{constructor(e){super();U(this,e,Re,Pe,V,{class:0})}}function Te(o){let e,t,n,l=o[2].text&&we(o);return{c(){e=E("button"),l&&l.c(),this.h()},l(s){e=y(s,"BUTTON",{class:!0});var a=T(e);l&&l.l(a),a.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(s,a){I(s,e,a),l&&l.m(e,null),t||(n=F(e,"click",X(o[6])),t=!0)},p(s,a){s[2].text?l?l.p(s,a):(l=we(s),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(s){s&&m(e),l&&l.d(),t=!1,n()}}}function we(o){let e=o[2].text+"",t;return{c(){t=ee(e)},l(n){t=te(n,e)},m(n,l){I(n,t,l)},p(n,l){l&4&&e!==(e=n[2].text+"")&&le(t,e)},d(n){n&&m(t)}}}function Ke(o){let e,t,n,l,s,a=o[2]&&Te(o);return{c(){e=E("div"),t=E("input"),a&&a.c(),this.h()},l(i){e=y(i,"DIV",{class:!0});var r=T(e);t=y(r,"INPUT",{placeholder:!0,class:!0}),a&&a.l(r),r.forEach(m),this.h()},h(){v(t,"placeholder",o[1]),v(t,"class","svelte-12pihab"),v(e,"class",n="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),K(e,"isError",o[5])},m(i,r){I(i,e,r),N(e,t),_e(t,o[4]),a&&a.m(e,null),o[9](e),l||(s=[F(t,"input",o[8]),F(t,"input",o[7])],l=!0)},p(i,[r]){r&2&&v(t,"placeholder",i[1]),r&16&&t.value!==i[4]&&_e(t,i[4]),i[2]?a?a.p(i,r):(a=Te(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null),r&5&&n!==(n="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",n),r&37&&K(e,"isError",i[5])},i:Q,o:Q,d(i){i&&m(e),a&&a.d(),o[9](null),l=!1,se(s)}}}function Qe(o,e,t){let{class:n=""}=e,{placeholder:l="Placeholer"}=e,{btn:s=null}=e,a,i,r=!1;const c=Fe(),h=()=>{i?(c("submit",{value:i}),t(4,i="")):t(5,r=!0)},k=()=>{t(5,r=!1)};function A(){i=this.value,t(4,i)}function _(b){Oe[b?"unshift":"push"](()=>{a=b,t(3,a)})}return o.$$set=b=>{"class"in b&&t(0,n=b.class),"placeholder"in b&&t(1,l=b.placeholder),"btn"in b&&t(2,s=b.btn)},[n,l,s,a,i,r,h,k,A,_]}class We extends O{constructor(e){super();U(this,e,Qe,Ke,V,{class:0,placeholder:1,btn:2})}}function Xe(o){let e,t,n,l;return t=new We({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",o[1]),{c(){e=E("div"),L(t.$$.fragment),this.h()},l(s){e=y(s,"DIV",{class:!0});var a=T(e);q(t.$$.fragment,a),a.forEach(m),this.h()},h(){v(e,"class",n="add-todo "+o[0]+" svelte-hols8d")},m(s,a){I(s,e,a),B(t,e,null),l=!0},p(s,[a]){(!l||a&1&&n!==(n="add-todo "+s[0]+" svelte-hols8d"))&&v(e,"class",n)},i(s){l||(D(t.$$.fragment,s),l=!0)},o(s){C(t.$$.fragment,s),l=!1},d(s){s&&m(e),M(t)}}}function Ye(o,e,t){let{class:n=""}=e;const l=s=>{let a={id:Date.now(),text:s.detail.value,color:"#000",done:!1};S.update(i=>i=[a,...i])};return o.$$set=s=>{"class"in s&&t(0,n=s.class)},[n,l]}class Ze extends O{constructor(e){super();U(this,e,Ye,Xe,V,{class:0})}}function ze(o){let e,t,n,l,s,a,i;return l=new Ze({}),a=new je({props:{class:"mt-50"}}),{c(){e=Ue(),t=E("section"),n=E("div"),L(l.$$.fragment),L(a.$$.fragment),this.h()},l(r){Ve('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=Le(r),t=y(r,"SECTION",{class:!0});var h=T(t);n=y(h,"DIV",{class:!0});var k=T(n);q(l.$$.fragment,k),k.forEach(m),h.forEach(m),q(a.$$.fragment,r),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(n,"class","container"),v(t,"class",s=""+(o[0]+" mt-50 svelte-hols8d"))},m(r,c){I(r,e,c),I(r,t,c),N(t,n),B(l,n,null),B(a,r,c),i=!0},p(r,[c]){(!i||c&1&&s!==(s=""+(r[0]+" mt-50 svelte-hols8d")))&&v(t,"class",s)},i(r){i||(D(l.$$.fragment,r),D(a.$$.fragment,r),i=!0)},o(r){C(l.$$.fragment,r),C(a.$$.fragment,r),i=!1},d(r){r&&m(e),r&&m(t),M(l),M(a,r)}}}function Ge(o,e,t){let{class:n=""}=e;return o.$$set=l=>{"class"in l&&t(0,n=l.class)},[n]}class Je extends O{constructor(e){super();U(this,e,Ge,ze,V,{class:0})}}export{Je as default};
