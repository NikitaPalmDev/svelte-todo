import{K as we,C as Ie,S,i as V,s as B,e as p,c as y,a as T,d as g,b as v,f as N,D as w,L as O,M as W,N as Ne,t as z,g as G,O as R,h as H,P as j,Q as J,E as U,R as $,T as K,v as L,w as q,x as M,U as x,V as ee,W as te,p as A,X as le,Y as se,n as C,Z as ne,A as P,m as ae,o as oe,_ as De,$ as re,a0 as ie,a1 as Ae,a2 as ce,a3 as Ce,a4 as Fe,j as Oe,a5 as Ue,l as Se}from"../chunks/vendor-1db80630.js";const F=Ie([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),ue=we(F,(a,e)=>{let t=a.filter(c=>c.color).map(c=>c.color),l=t.filter((c,o)=>t.indexOf(c)===o).map((c,o)=>({id:o,color:c}));e(l)});function fe(a,e,t){const s=a.slice();return s[11]=e[t],s}function _e(a,e){let t,s,l,c,o;return{key:a,first:null,c(){t=p("li"),s=p("button"),this.h()},l(n){t=y(n,"LI",{class:!0});var r=T(t);s=y(r,"BUTTON",{class:!0,style:!0}),T(s).forEach(g),r.forEach(g),this.h()},h(){v(s,"class","task__color-btn svelte-100588h"),v(s,"style",l=`background-color: ${e[11].color}`),v(t,"class","task__color-item svelte-100588h"),this.first=t},m(n,r){N(n,t,r),w(t,s),c||(o=O(s,"click",W(function(){Ne(e[7](e[11].color))&&e[7](e[11].color).apply(this,arguments)})),c=!0)},p(n,r){e=n,r&20&&l!==(l=`background-color: ${e[11].color}`)&&v(s,"style",l)},d(n){n&&g(t),c=!1,o()}}}function Ve(a){let e,t,s,l,c,o,n,r,i=[],m=new Map,f,k,b,h,_=a[4].filter(a[9]);const d=u=>u[11].id;for(let u=0;u<_.length;u+=1){let E=fe(a,_,u),I=d(E);m.set(I,i[u]=_e(I,E))}return{c(){e=p("div"),t=p("div"),s=p("p"),l=z(a[1]),c=p("div"),o=p("button"),n=p("span"),r=p("ul");for(let u=0;u<i.length;u+=1)i[u].c();this.h()},l(u){e=y(u,"DIV",{class:!0});var E=T(e);t=y(E,"DIV",{class:!0});var I=T(t);s=y(I,"P",{class:!0});var D=T(s);l=G(D,a[1]),D.forEach(g),I.forEach(g),c=y(E,"DIV",{class:!0});var X=T(c);o=y(X,"BUTTON",{class:!0});var Y=T(o);n=y(Y,"SPAN",{class:!0}),T(n).forEach(g),Y.forEach(g),X.forEach(g),r=y(E,"UL",{class:!0,style:!0});var Z=T(r);for(let Q=0;Q<i.length;Q+=1)i[Q].l(Z);Z.forEach(g),E.forEach(g),this.h()},h(){v(s,"class","svelte-100588h"),v(t,"class","task__main svelte-100588h"),v(n,"class","svg-image-del svelte-100588h"),v(o,"class","task__menu-btn task__menu-btn_del svelte-100588h"),v(c,"class","task__circle task__menu svelte-100588h"),v(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),v(r,"style",f=`background-color: ${a[2]}`),v(e,"class",k="task "+a[0]+" svelte-100588h"),R(e,"isDisabled",a[3])},m(u,E){N(u,e,E),w(e,t),w(t,s),w(s,l),w(e,c),w(c,o),w(o,n),w(e,r);for(let I=0;I<i.length;I+=1)i[I].m(r,null);b||(h=[O(t,"click",a[5]),O(o,"click",W(a[6]))],b=!0)},p(u,[E]){E&2&&H(l,u[1]),E&148&&(_=u[4].filter(u[9]),i=j(i,E,d,1,u,_,m,r,J,_e,null,fe)),E&4&&f!==(f=`background-color: ${u[2]}`)&&v(r,"style",f),E&1&&k!==(k="task "+u[0]+" svelte-100588h")&&v(e,"class",k),E&9&&R(e,"isDisabled",u[3])},i:U,o:U,d(u){u&&g(e);for(let E=0;E<i.length;E+=1)i[E].d();b=!1,$(h)}}}function Be(a,e,t){let s,l;K(a,F,h=>t(10,s=h)),K(a,ue,h=>t(4,l=h));let{class:c=""}=e,{text:o=""}=e,{color:n="#0029FF"}=e,{disabled:r=!1}=e,{id:i=null}=e;const m=()=>{let h=s.map(_=>(i===_.id&&(_.done=!_.done),_));F.set(h)},f=()=>{let h=s.filter(_=>_.id!=i);F.set(h),console.log("del",i)},k=h=>{let _=s.map(d=>(i===d.id&&(d.color=h),d));F.set(_)},b=h=>h.color!=n;return a.$$set=h=>{"class"in h&&t(0,c=h.class),"text"in h&&t(1,o=h.text),"color"in h&&t(2,n=h.color),"disabled"in h&&t(3,r=h.disabled),"id"in h&&t(8,i=h.id)},[c,o,n,r,l,m,f,k,i,b]}class de extends S{constructor(e){super();V(this,e,Be,Ve,B,{class:0,text:1,color:2,disabled:3,id:8})}}function he(a,e,t){const s=a.slice();return s[4]=e[t],s}function me(a,e,t){const s=a.slice();return s[4]=e[t],s}function ve(a,e){let t,s,l,c,o,n=U,r;return s=new de({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:a,first:null,c(){t=p("li"),L(s.$$.fragment),this.h()},l(i){t=y(i,"LI",{class:!0});var m=T(t);q(s.$$.fragment,m),m.forEach(g),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(i,m){N(i,t,m),M(s,t,null),r=!0},p(i,m){e=i;const f={};m&2&&(f.text=e[4].text),m&2&&(f.color=e[4].color?e[4].color:null),m&2&&(f.id=e[4].id),s.$set(f)},r(){o=t.getBoundingClientRect()},f(){x(t),n(),ee(t,o)},a(){n(),n=te(t,o,re,{duration:300})},i(i){r||(A(s.$$.fragment,i),le(()=>{c&&c.end(1),l=se(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(i){C(s.$$.fragment,i),l&&l.invalidate(),c=ne(t,e[2],{key:e[4].id}),r=!1},d(i){i&&g(t),P(s),i&&c&&c.end()}}}function ge(a,e){let t,s,l,c,o,n=U,r;return s=new de({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:a,first:null,c(){t=p("li"),L(s.$$.fragment),this.h()},l(i){t=y(i,"LI",{class:!0});var m=T(t);q(s.$$.fragment,m),m.forEach(g),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(i,m){N(i,t,m),M(s,t,null),r=!0},p(i,m){e=i;const f={};m&2&&(f.text=e[4].text),m&2&&(f.color=e[4].color?e[4].color:null),m&2&&(f.id=e[4].id),s.$set(f)},r(){o=t.getBoundingClientRect()},f(){x(t),n(),ee(t,o)},a(){n(),n=te(t,o,re,{duration:300})},i(i){r||(A(s.$$.fragment,i),le(()=>{c&&c.end(1),l=se(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(i){C(s.$$.fragment,i),l&&l.invalidate(),c=ne(t,e[2],{key:e[4].id}),r=!1},d(i){i&&g(t),P(s),i&&c&&c.end()}}}function Le(a){let e,t,s,l=[],c=new Map,o,n=[],r=new Map,i,m,f=a[1].filter(ke);const k=_=>_[4].id;for(let _=0;_<f.length;_+=1){let d=me(a,f,_),u=k(d);c.set(u,l[_]=ve(u,d))}let b=a[1].filter(be);const h=_=>_[4].id;for(let _=0;_<b.length;_+=1){let d=he(a,b,_),u=h(d);r.set(u,n[_]=ge(u,d))}return{c(){e=p("section"),t=p("div"),s=p("ul");for(let _=0;_<l.length;_+=1)l[_].c();o=p("ul");for(let _=0;_<n.length;_+=1)n[_].c();this.h()},l(_){e=y(_,"SECTION",{class:!0});var d=T(e);t=y(d,"DIV",{class:!0});var u=T(t);s=y(u,"UL",{class:!0});var E=T(s);for(let D=0;D<l.length;D+=1)l[D].l(E);E.forEach(g),o=y(u,"UL",{class:!0});var I=T(o);for(let D=0;D<n.length;D+=1)n[D].l(I);I.forEach(g),u.forEach(g),d.forEach(g),this.h()},h(){v(s,"class","task-section__col"),v(o,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",i="task-section "+a[0]+" svelte-1rib3cm")},m(_,d){N(_,e,d),w(e,t),w(t,s);for(let u=0;u<l.length;u+=1)l[u].m(s,null);w(t,o);for(let u=0;u<n.length;u+=1)n[u].m(o,null);m=!0},p(_,[d]){if(d&2){f=_[1].filter(ke),ae();for(let u=0;u<l.length;u+=1)l[u].r();l=j(l,d,k,1,_,f,c,s,ie,ve,null,me);for(let u=0;u<l.length;u+=1)l[u].a();oe()}if(d&2){b=_[1].filter(be),ae();for(let u=0;u<n.length;u+=1)n[u].r();n=j(n,d,h,1,_,b,r,o,ie,ge,null,he);for(let u=0;u<n.length;u+=1)n[u].a();oe()}(!m||d&1&&i!==(i="task-section "+_[0]+" svelte-1rib3cm"))&&v(e,"class",i)},i(_){if(!m){for(let d=0;d<f.length;d+=1)A(l[d]);for(let d=0;d<b.length;d+=1)A(n[d]);m=!0}},o(_){for(let d=0;d<l.length;d+=1)C(l[d]);for(let d=0;d<n.length;d+=1)C(n[d]);m=!1},d(_){_&&g(e);for(let d=0;d<l.length;d+=1)l[d].d();for(let d=0;d<n.length;d+=1)n[d].d()}}}const ke=a=>!a.done,be=a=>a.done;function qe(a,e,t){let s;K(a,F,n=>t(1,s=n));let{class:l=""}=e;const[c,o]=De({duration:n=>Math.sqrt(n*200),fallback(n,r){const i=getComputedStyle(n),m=i.transform==="none"?"":i.transform;return{duration:600,easing:Ae,css:f=>`
					transform: ${m} scale(${f});
					opacity: ${f}
				`}}});return a.$$set=n=>{"class"in n&&t(0,l=n.class)},[l,s,c,o]}class Me extends S{constructor(e){super();V(this,e,qe,Le,B,{class:0})}}function pe(a){let e,t,s,l=a[2].text&&ye(a);return{c(){e=p("button"),l&&l.c(),this.h()},l(c){e=y(c,"BUTTON",{class:!0});var o=T(e);l&&l.l(o),o.forEach(g),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(c,o){N(c,e,o),l&&l.m(e,null),t||(s=O(e,"click",W(a[6])),t=!0)},p(c,o){c[2].text?l?l.p(c,o):(l=ye(c),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(c){c&&g(e),l&&l.d(),t=!1,s()}}}function ye(a){let e=a[2].text+"",t;return{c(){t=z(e)},l(s){t=G(s,e)},m(s,l){N(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&H(t,e)},d(s){s&&g(t)}}}function Pe(a){let e,t,s,l,c,o=a[2]&&pe(a);return{c(){e=p("div"),t=p("input"),o&&o.c(),this.h()},l(n){e=y(n,"DIV",{class:!0});var r=T(e);t=y(r,"INPUT",{placeholder:!0,class:!0}),o&&o.l(r),r.forEach(g),this.h()},h(){v(t,"placeholder",a[1]),v(t,"class","svelte-12pihab"),v(e,"class",s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab"),R(e,"isError",a[5])},m(n,r){N(n,e,r),w(e,t),ce(t,a[4]),o&&o.m(e,null),a[9](e),l||(c=[O(t,"input",a[8]),O(t,"input",a[7])],l=!0)},p(n,[r]){r&2&&v(t,"placeholder",n[1]),r&16&&t.value!==n[4]&&ce(t,n[4]),n[2]?o?o.p(n,r):(o=pe(n),o.c(),o.m(e,null)):o&&(o.d(1),o=null),r&5&&s!==(s="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",s),r&37&&R(e,"isError",n[5])},i:U,o:U,d(n){n&&g(e),o&&o.d(),a[9](null),l=!1,$(c)}}}function Re(a,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:c=null}=e,o,n,r=!1;const i=Ce(),m=()=>{n?(i("submit",{value:n}),t(4,n="")):t(5,r=!0)},f=()=>{t(5,r=!1)};function k(){n=this.value,t(4,n)}function b(h){Fe[h?"unshift":"push"](()=>{o=h,t(3,o)})}return a.$$set=h=>{"class"in h&&t(0,s=h.class),"placeholder"in h&&t(1,l=h.placeholder),"btn"in h&&t(2,c=h.btn)},[s,l,c,o,n,r,m,f,k,b]}class je extends S{constructor(e){super();V(this,e,Re,Pe,B,{class:0,placeholder:1,btn:2})}}function Ee(a,e,t){const s=a.slice();return s[4]=e[t],s[6]=t,s}function Te(a,e){let t,s;return{key:a,first:null,c(){t=p("button"),this.h()},l(l){t=y(l,"BUTTON",{class:!0,style:!0}),T(t).forEach(g),this.h()},h(){v(t,"class","add-todo__color svelte-9nykse"),v(t,"style",s=`color: ${e[4].color}; transition-delay: ${50*e[6]}ms`),this.first=t},m(l,c){N(l,t,c)},p(l,c){e=l,c&2&&s!==(s=`color: ${e[4].color}; transition-delay: ${50*e[6]}ms`)&&v(t,"style",s)},d(l){l&&g(t)}}}function Ke(a){let e,t,s,l=[],c=new Map,o,n,r,i=a[1].filter(a[3]);const m=f=>f[4].id;for(let f=0;f<i.length;f+=1){let k=Ee(a,i,f),b=m(k);c.set(b,l[f]=Te(b,k))}return o=new je({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),o.$on("submit",a[2]),{c(){e=p("div"),t=p("div"),s=p("button");for(let f=0;f<l.length;f+=1)l[f].c();L(o.$$.fragment),this.h()},l(f){e=y(f,"DIV",{class:!0});var k=T(e);t=y(k,"DIV",{class:!0});var b=T(t);s=y(b,"BUTTON",{class:!0}),T(s).forEach(g);for(let h=0;h<l.length;h+=1)l[h].l(b);b.forEach(g),q(o.$$.fragment,k),k.forEach(g),this.h()},h(){v(s,"class","add-todo__color add-todo__color_main svelte-9nykse"),v(t,"class","add-todo__color-list svelte-9nykse"),v(e,"class",n="add-todo "+a[0]+" svelte-9nykse")},m(f,k){N(f,e,k),w(e,t),w(t,s);for(let b=0;b<l.length;b+=1)l[b].m(t,null);M(o,e,null),r=!0},p(f,[k]){k&2&&(i=f[1].filter(f[3]),l=j(l,k,m,1,f,i,c,t,J,Te,null,Ee)),(!r||k&1&&n!==(n="add-todo "+f[0]+" svelte-9nykse"))&&v(e,"class",n)},i(f){r||(A(o.$$.fragment,f),r=!0)},o(f){C(o.$$.fragment,f),r=!1},d(f){f&&g(e);for(let k=0;k<l.length;k+=1)l[k].d();P(o)}}}let Qe="#0029FF";function We(a,e,t){let s;K(a,ue,n=>t(1,s=n));let{class:l=""}=e;const c=n=>{let r={id:Date.now(),text:n.detail.value,color:"#000",done:!1};F.update(i=>i=[r,...i])},o=n=>n.color!=Qe;return a.$$set=n=>{"class"in n&&t(0,l=n.class)},[l,s,c,o]}class Xe extends S{constructor(e){super();V(this,e,We,Ke,B,{class:0})}}function Ye(a){let e,t,s,l,c,o,n;return l=new Xe({}),o=new Me({props:{class:"mt-50"}}),{c(){e=Oe(),t=p("section"),s=p("div"),L(l.$$.fragment),L(o.$$.fragment),this.h()},l(r){Ue('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),e=Se(r),t=y(r,"SECTION",{class:!0});var m=T(t);s=y(m,"DIV",{class:!0});var f=T(s);q(l.$$.fragment,f),f.forEach(g),m.forEach(g),q(o.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",v(s,"class","container"),v(t,"class",c=""+(a[0]+" mt-50 svelte-hols8d"))},m(r,i){N(r,e,i),N(r,t,i),w(t,s),M(l,s,null),M(o,r,i),n=!0},p(r,[i]){(!n||i&1&&c!==(c=""+(r[0]+" mt-50 svelte-hols8d")))&&v(t,"class",c)},i(r){n||(A(l.$$.fragment,r),A(o.$$.fragment,r),n=!0)},o(r){C(l.$$.fragment,r),C(o.$$.fragment,r),n=!1},d(r){r&&g(e),r&&g(t),P(l),P(o,r)}}}function Ze(a,e,t){let{class:s=""}=e;return a.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class Ge extends S{constructor(e){super();V(this,e,Ze,Ye,B,{class:0})}}export{Ge as default};
