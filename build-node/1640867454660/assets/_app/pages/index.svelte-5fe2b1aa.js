import{K as Fe,C as Ie,S as U,i as V,s as L,e as b,c as y,a as T,d as p,b as g,f as F,D as w,L as D,M as R,N as le,t as se,g as ne,O as j,h as ae,P as K,Q as De,E as O,R as oe,T as Q,v as B,w as q,x as M,U as X,V as Y,W as Z,p as N,X as z,Y as re,n as A,Z as ie,A as P,m as G,o as H,_ as Ne,$ as J,a0 as $,a1 as Ae,a2 as ce,a3 as Oe,a4 as Se,a5 as ue,a6 as fe,j as Ue,a7 as Ve,l as Le}from"../chunks/vendor-935e33b2.js";const S=Ie([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),_e=Fe(S,(a,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000"];let n=a.filter(s=>s.color).map(s=>s.color).concat(e),c=n.filter((s,o)=>n.indexOf(s)===o).map((s,o)=>({id:o,color:s}));t(c)});function de(a,t,e){const l=a.slice();return l[11]=t[e],l}function he(a,t){let e,l,n,i,c;return{key:a,first:null,c(){e=b("li"),l=b("button"),this.h()},l(s){e=y(s,"LI",{class:!0});var o=T(e);l=y(o,"BUTTON",{class:!0,style:!0}),T(l).forEach(p),o.forEach(p),this.h()},h(){g(l,"class","task__color-btn svelte-100588h"),g(l,"style",n=`background-color: ${t[11].color}`),g(e,"class","task__color-item svelte-100588h"),this.first=e},m(s,o){F(s,e,o),w(e,l),i||(c=D(l,"click",R(function(){le(t[7](t[11].color))&&t[7](t[11].color).apply(this,arguments)})),i=!0)},p(s,o){t=s,o&20&&n!==(n=`background-color: ${t[11].color}`)&&g(l,"style",n)},d(s){s&&p(e),i=!1,c()}}}function Be(a){let t,e,l,n,i,c,s,o,r=[],_=new Map,m,k,v,f,d=a[4].filter(a[9]);const h=u=>u[11].id;for(let u=0;u<d.length;u+=1){let E=de(a,d,u),C=h(E);_.set(C,r[u]=he(C,E))}return{c(){t=b("div"),e=b("div"),l=b("p"),n=se(a[1]),i=b("div"),c=b("button"),s=b("span"),o=b("ul");for(let u=0;u<r.length;u+=1)r[u].c();this.h()},l(u){t=y(u,"DIV",{class:!0});var E=T(t);e=y(E,"DIV",{class:!0});var C=T(e);l=y(C,"P",{class:!0});var I=T(l);n=ne(I,a[1]),I.forEach(p),C.forEach(p),i=y(E,"DIV",{class:!0});var x=T(i);c=y(x,"BUTTON",{class:!0});var ee=T(c);s=y(ee,"SPAN",{class:!0}),T(s).forEach(p),ee.forEach(p),x.forEach(p),o=y(E,"UL",{class:!0,style:!0});var te=T(o);for(let W=0;W<r.length;W+=1)r[W].l(te);te.forEach(p),E.forEach(p),this.h()},h(){g(l,"class","svelte-100588h"),g(e,"class","task__main svelte-100588h"),g(s,"class","svg-image-del svelte-100588h"),g(c,"class","task__menu-btn task__menu-btn_del svelte-100588h"),g(i,"class","task__circle task__menu svelte-100588h"),g(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),g(o,"style",m=`background-color: ${a[2]}`),g(t,"class",k="task "+a[0]+" svelte-100588h"),j(t,"isDisabled",a[3])},m(u,E){F(u,t,E),w(t,e),w(e,l),w(l,n),w(t,i),w(i,c),w(c,s),w(t,o);for(let C=0;C<r.length;C+=1)r[C].m(o,null);v||(f=[D(e,"click",a[5]),D(c,"click",R(a[6]))],v=!0)},p(u,[E]){E&2&&ae(n,u[1]),E&148&&(d=u[4].filter(u[9]),r=K(r,E,h,1,u,d,_,o,De,he,null,de)),E&4&&m!==(m=`background-color: ${u[2]}`)&&g(o,"style",m),E&1&&k!==(k="task "+u[0]+" svelte-100588h")&&g(t,"class",k),E&9&&j(t,"isDisabled",u[3])},i:O,o:O,d(u){u&&p(t);for(let E=0;E<r.length;E+=1)r[E].d();v=!1,oe(f)}}}function qe(a,t,e){let l,n;Q(a,S,f=>e(10,l=f)),Q(a,_e,f=>e(4,n=f));let{class:i=""}=t,{text:c=""}=t,{color:s="#0029FF"}=t,{disabled:o=!1}=t,{id:r=null}=t;const _=()=>{let f=l.map(d=>(r===d.id&&(d.done=!d.done),d));S.set(f)},m=()=>{let f=l.filter(d=>d.id!=r);S.set(f),console.log("del",r)},k=f=>{let d=l.map(h=>(r===h.id&&(h.color=f),h));S.set(d)},v=f=>f.color!=s;return a.$$set=f=>{"class"in f&&e(0,i=f.class),"text"in f&&e(1,c=f.text),"color"in f&&e(2,s=f.color),"disabled"in f&&e(3,o=f.disabled),"id"in f&&e(8,r=f.id)},[i,c,s,o,n,_,m,k,r,v]}class me extends U{constructor(t){super();V(this,t,qe,Be,L,{class:0,text:1,color:2,disabled:3,id:8})}}function ve(a,t,e){const l=a.slice();return l[4]=t[e],l}function ge(a,t,e){const l=a.slice();return l[4]=t[e],l}function ke(a,t){let e,l,n,i,c,s=O,o;return l=new me({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:a,first:null,c(){e=b("li"),B(l.$$.fragment),this.h()},l(r){e=y(r,"LI",{class:!0});var _=T(e);q(l.$$.fragment,_),_.forEach(p),this.h()},h(){g(e,"class","task-section__item"),this.first=e},m(r,_){F(r,e,_),M(l,e,null),o=!0},p(r,_){t=r;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),l.$set(m)},r(){c=e.getBoundingClientRect()},f(){X(e),s(),Y(e,c)},a(){s(),s=Z(e,c,J,{duration:300})},i(r){o||(N(l.$$.fragment,r),z(()=>{i&&i.end(1),n=re(e,t[3],{key:t[4].id}),n.start()}),o=!0)},o(r){A(l.$$.fragment,r),n&&n.invalidate(),i=ie(e,t[2],{key:t[4].id}),o=!1},d(r){r&&p(e),P(l),r&&i&&i.end()}}}function pe(a,t){let e,l,n,i,c,s=O,o;return l=new me({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:a,first:null,c(){e=b("li"),B(l.$$.fragment),this.h()},l(r){e=y(r,"LI",{class:!0});var _=T(e);q(l.$$.fragment,_),_.forEach(p),this.h()},h(){g(e,"class","task-section__item"),this.first=e},m(r,_){F(r,e,_),M(l,e,null),o=!0},p(r,_){t=r;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),l.$set(m)},r(){c=e.getBoundingClientRect()},f(){X(e),s(),Y(e,c)},a(){s(),s=Z(e,c,J,{duration:300})},i(r){o||(N(l.$$.fragment,r),z(()=>{i&&i.end(1),n=re(e,t[3],{key:t[4].id}),n.start()}),o=!0)},o(r){A(l.$$.fragment,r),n&&n.invalidate(),i=ie(e,t[2],{key:t[4].id}),o=!1},d(r){r&&p(e),P(l),r&&i&&i.end()}}}function Me(a){let t,e,l,n=[],i=new Map,c,s=[],o=new Map,r,_,m=a[1].filter(be);const k=d=>d[4].id;for(let d=0;d<m.length;d+=1){let h=ge(a,m,d),u=k(h);i.set(u,n[d]=ke(u,h))}let v=a[1].filter(ye);const f=d=>d[4].id;for(let d=0;d<v.length;d+=1){let h=ve(a,v,d),u=f(h);o.set(u,s[d]=pe(u,h))}return{c(){t=b("section"),e=b("div"),l=b("ul");for(let d=0;d<n.length;d+=1)n[d].c();c=b("ul");for(let d=0;d<s.length;d+=1)s[d].c();this.h()},l(d){t=y(d,"SECTION",{class:!0});var h=T(t);e=y(h,"DIV",{class:!0});var u=T(e);l=y(u,"UL",{class:!0});var E=T(l);for(let I=0;I<n.length;I+=1)n[I].l(E);E.forEach(p),c=y(u,"UL",{class:!0});var C=T(c);for(let I=0;I<s.length;I+=1)s[I].l(C);C.forEach(p),u.forEach(p),h.forEach(p),this.h()},h(){g(l,"class","task-section__col"),g(c,"class","task-section__col"),g(e,"class","container task-section__grid svelte-1rib3cm"),g(t,"class",r="task-section "+a[0]+" svelte-1rib3cm")},m(d,h){F(d,t,h),w(t,e),w(e,l);for(let u=0;u<n.length;u+=1)n[u].m(l,null);w(e,c);for(let u=0;u<s.length;u+=1)s[u].m(c,null);_=!0},p(d,[h]){if(h&2){m=d[1].filter(be),G();for(let u=0;u<n.length;u+=1)n[u].r();n=K(n,h,k,1,d,m,i,l,$,ke,null,ge);for(let u=0;u<n.length;u+=1)n[u].a();H()}if(h&2){v=d[1].filter(ye),G();for(let u=0;u<s.length;u+=1)s[u].r();s=K(s,h,f,1,d,v,o,c,$,pe,null,ve);for(let u=0;u<s.length;u+=1)s[u].a();H()}(!_||h&1&&r!==(r="task-section "+d[0]+" svelte-1rib3cm"))&&g(t,"class",r)},i(d){if(!_){for(let h=0;h<m.length;h+=1)N(n[h]);for(let h=0;h<v.length;h+=1)N(s[h]);_=!0}},o(d){for(let h=0;h<n.length;h+=1)A(n[h]);for(let h=0;h<s.length;h+=1)A(s[h]);_=!1},d(d){d&&p(t);for(let h=0;h<n.length;h+=1)n[h].d();for(let h=0;h<s.length;h+=1)s[h].d()}}}const be=a=>!a.done,ye=a=>a.done;function Pe(a,t,e){let l;Q(a,S,s=>e(1,l=s));let{class:n=""}=t;const[i,c]=Ne({duration:s=>Math.sqrt(s*200),fallback(s,o){const r=getComputedStyle(s),_=r.transform==="none"?"":r.transform;return{duration:600,easing:Ae,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return a.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,i,c]}class Re extends U{constructor(t){super();V(this,t,Pe,Me,L,{class:0})}}function Ee(a){let t,e,l,n=a[2].text&&Te(a);return{c(){t=b("button"),n&&n.c(),this.h()},l(i){t=y(i,"BUTTON",{class:!0});var c=T(t);n&&n.l(c),c.forEach(p),this.h()},h(){g(t,"class","btn svelte-12pihab")},m(i,c){F(i,t,c),n&&n.m(t,null),e||(l=D(t,"click",R(a[6])),e=!0)},p(i,c){i[2].text?n?n.p(i,c):(n=Te(i),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(i){i&&p(t),n&&n.d(),e=!1,l()}}}function Te(a){let t=a[2].text+"",e;return{c(){e=se(t)},l(l){e=ne(l,t)},m(l,n){F(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&ae(e,t)},d(l){l&&p(e)}}}function je(a){let t,e,l,n,i,c=a[2]&&Ee(a);return{c(){t=b("div"),e=b("input"),c&&c.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var o=T(t);e=y(o,"INPUT",{placeholder:!0,class:!0}),c&&c.l(o),o.forEach(p),this.h()},h(){g(e,"placeholder",a[1]),g(e,"class","svelte-12pihab"),g(t,"class",l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab"),j(t,"isError",a[5])},m(s,o){F(s,t,o),w(t,e),ce(e,a[4]),c&&c.m(t,null),a[9](t),n||(i=[D(e,"input",a[8]),D(e,"input",a[7]),D(e,"keydown",console.log(this))],n=!0)},p(s,[o]){o&2&&g(e,"placeholder",s[1]),o&16&&e.value!==s[4]&&ce(e,s[4]),s[2]?c?c.p(s,o):(c=Ee(s),c.c(),c.m(t,null)):c&&(c.d(1),c=null),o&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-12pihab")&&g(t,"class",l),o&37&&j(t,"isError",s[5])},i:O,o:O,d(s){s&&p(t),c&&c.d(),a[9](null),n=!1,oe(i)}}}function Ke(a,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:i=null}=t,c,s,o=!1;const r=Oe(),_=()=>{s?(r("submit",{value:s}),e(4,s="")):e(5,o=!0)},m=()=>{e(5,o=!1)};function k(){s=this.value,e(4,s)}function v(f){Se[f?"unshift":"push"](()=>{c=f,e(3,c)})}return a.$$set=f=>{"class"in f&&e(0,l=f.class),"placeholder"in f&&e(1,n=f.placeholder),"btn"in f&&e(2,i=f.btn)},[l,n,i,c,s,o,_,m,k,v]}class Qe extends U{constructor(t){super();V(this,t,Ke,je,L,{class:0,placeholder:1,btn:2})}}function we(a,t,e){const l=a.slice();return l[6]=t[e],l[8]=e,l}function Ce(a,t){let e,l,n,i,c=O,s,o,r;return{key:a,first:null,c(){e=b("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),T(e).forEach(p),this.h()},h(){g(e,"class","add-todo__color svelte-13xn9ef"),g(e,"style",l=`color: ${t[6].color}; transition-delay: ${50*t[8]}ms`),this.first=e},m(_,m){F(_,e,m),s=!0,o||(r=D(e,"click",R(function(){le(t[4](t[6].color))&&t[4](t[6].color).apply(this,arguments)})),o=!0)},p(_,m){t=_,(!s||m&6&&l!==(l=`color: ${t[6].color}; transition-delay: ${50*t[8]}ms`))&&g(e,"style",l)},r(){i=e.getBoundingClientRect()},f(){X(e),c(),Y(e,i)},a(){c(),c=Z(e,i,J,{})},i(_){s||(z(()=>{n||(n=ue(e,fe,{},!0)),n.run(1)}),s=!0)},o(_){n||(n=ue(e,fe,{},!1)),n.run(0),s=!1},d(_){_&&p(e),_&&n&&n.end(),o=!1,r()}}}function We(a){let t,e,l,n,i=[],c=new Map,s,o,r,_=a[2].filter(a[5]);const m=k=>k[6].id;for(let k=0;k<_.length;k+=1){let v=we(a,_,k),f=m(v);c.set(f,i[k]=Ce(f,v))}return s=new Qe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("submit",a[3]),{c(){t=b("div"),e=b("div"),l=b("span");for(let k=0;k<i.length;k+=1)i[k].c();B(s.$$.fragment),this.h()},l(k){t=y(k,"DIV",{class:!0});var v=T(t);e=y(v,"DIV",{class:!0});var f=T(e);l=y(f,"SPAN",{class:!0,style:!0}),T(l).forEach(p);for(let d=0;d<i.length;d+=1)i[d].l(f);f.forEach(p),q(s.$$.fragment,v),v.forEach(p),this.h()},h(){g(l,"class","add-todo__color add-todo__color_main svelte-13xn9ef"),g(l,"style",n=`color: ${a[1]}`),g(e,"class","add-todo__color-list svelte-13xn9ef"),g(t,"class",o="add-todo "+a[0]+" svelte-13xn9ef")},m(k,v){F(k,t,v),w(t,e),w(e,l);for(let f=0;f<i.length;f+=1)i[f].m(e,null);M(s,t,null),r=!0},p(k,[v]){if((!r||v&2&&n!==(n=`color: ${k[1]}`))&&g(l,"style",n),v&22){_=k[2].filter(k[5]),G();for(let f=0;f<i.length;f+=1)i[f].r();i=K(i,v,m,1,k,_,c,e,$,Ce,null,we);for(let f=0;f<i.length;f+=1)i[f].a();H()}(!r||v&1&&o!==(o="add-todo "+k[0]+" svelte-13xn9ef"))&&g(t,"class",o)},i(k){if(!r){for(let v=0;v<_.length;v+=1)N(i[v]);N(s.$$.fragment,k),r=!0}},o(k){for(let v=0;v<i.length;v+=1)A(i[v]);A(s.$$.fragment,k),r=!1},d(k){k&&p(t);for(let v=0;v<i.length;v+=1)i[v].d();P(s)}}}function Xe(a,t,e){let l;Q(a,_e,r=>e(2,l=r));let{class:n=""}=t,i="#0029FF";const c=r=>{let _={id:Date.now(),text:r.detail.value,color:i,done:!1};S.update(m=>m=[_,...m])},s=r=>r&&e(1,i=r),o=r=>r.color!=i;return a.$$set=r=>{"class"in r&&e(0,n=r.class)},[n,i,l,c,s,o]}class Ye extends U{constructor(t){super();V(this,t,Xe,We,L,{class:0})}}function Ze(a){let t,e,l,n,i,c,s;return n=new Ye({}),c=new Re({props:{class:"mt-50"}}),{c(){t=Ue(),e=b("section"),l=b("div"),B(n.$$.fragment),B(c.$$.fragment),this.h()},l(o){Ve('[data-svelte="svelte-1lxmpr"]',document.head).forEach(p),t=Le(o),e=y(o,"SECTION",{class:!0});var _=T(e);l=y(_,"DIV",{class:!0});var m=T(l);q(n.$$.fragment,m),m.forEach(p),_.forEach(p),q(c.$$.fragment,o),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",g(l,"class","container"),g(e,"class",i=""+(a[0]+" mt-50 svelte-hols8d"))},m(o,r){F(o,t,r),F(o,e,r),w(e,l),M(n,l,null),M(c,o,r),s=!0},p(o,[r]){(!s||r&1&&i!==(i=""+(o[0]+" mt-50 svelte-hols8d")))&&g(e,"class",i)},i(o){s||(N(n.$$.fragment,o),N(c.$$.fragment,o),s=!0)},o(o){A(n.$$.fragment,o),A(c.$$.fragment,o),s=!1},d(o){o&&p(t),o&&p(e),P(n),P(c,o)}}}function ze(a,t,e){let{class:l=""}=t;return a.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class He extends U{constructor(t){super();V(this,t,ze,Ze,L,{class:0})}}export{He as default};
