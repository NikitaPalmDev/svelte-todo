import{C as re,S as N,i as F,s as S,e as m,t as P,c as v,a as g,g as z,d as f,b as _,f as y,D as E,h as R,E as V,v as C,w as j,x as A,p as w,J as B,K as J,n as D,L as K,A as L,m as Q,M as W,o as X,N as ie,O as ce,P as Y,Q as ue,R as U,T as fe,U as Z,V as G,W as _e,X as de,Y as he,j as me,Z as ve,l as ge}from"../chunks/vendor-83565f0b.js";const H=re([{id:1,text:"test task",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"},{id:2,text:"test task 2",done:!0,color:"#FF9900"}]);function ke(r){let e,l,n,s,o,a;return{c(){e=m("div"),l=m("p"),n=P(r[1]),s=m("div"),this.h()},l(t){e=v(t,"DIV",{class:!0});var i=g(e);l=v(i,"P",{class:!0});var d=g(l);n=z(d,r[1]),d.forEach(f),s=v(i,"DIV",{class:!0,style:!0}),g(s).forEach(f),i.forEach(f),this.h()},h(){_(l,"class","svelte-1s64vcb"),_(s,"class","task__menu svelte-1s64vcb"),_(s,"style",o=`background-color: ${r[2]!=null?r[2]:"#0029FF"}`),_(e,"class",a="task "+r[0]+" svelte-1s64vcb")},m(t,i){y(t,e,i),E(e,l),E(l,n),E(e,s)},p(t,[i]){i&2&&R(n,t[1]),i&4&&o!==(o=`background-color: ${t[2]!=null?t[2]:"#0029FF"}`)&&_(s,"style",o),i&1&&a!==(a="task "+t[0]+" svelte-1s64vcb")&&_(e,"class",a)},i:V,o:V,d(t){t&&f(e)}}}function pe(r,e,l){let{class:n}=e,{text:s=""}=e,{color:o=null}=e,{key:a=0}=e;return r.$$set=t=>{"class"in t&&l(0,n=t.class),"text"in t&&l(1,s=t.text),"color"in t&&l(2,o=t.color),"key"in t&&l(3,a=t.key)},[n,s,o,a]}class $ extends N{constructor(e){super();F(this,e,pe,ke,S,{class:0,text:1,color:2,key:3})}}function x(r,e,l){const n=r.slice();return n[4]=e[l],n}function ee(r,e,l){const n=r.slice();return n[4]=e[l],n}function te(r,e){let l,n,s,o,a;return n=new $({props:{text:e[4].text,color:e[4].color?e[4].color:null}}),{key:r,first:null,c(){l=m("li"),C(n.$$.fragment),this.h()},l(t){l=v(t,"LI",{class:!0,"animation:flip":!0});var i=g(l);j(n.$$.fragment,i),i.forEach(f),this.h()},h(){_(l,"class","task-section__item"),_(l,"animation:flip",""),this.first=l},m(t,i){y(t,l,i),A(n,l,null),a=!0},p(t,i){e=t;const d={};i&2&&(d.text=e[4].text),i&2&&(d.color=e[4].color?e[4].color:null),n.$set(d)},i(t){a||(w(n.$$.fragment,t),B(()=>{o&&o.end(1),s=J(l,e[3],{key:e[4].id}),s.start()}),a=!0)},o(t){D(n.$$.fragment,t),s&&s.invalidate(),o=K(l,e[2],{key:e[4].id}),a=!1},d(t){t&&f(l),L(n),t&&o&&o.end()}}}function le(r,e){let l,n,s,o,a;return n=new $({props:{text:e[4].text,color:e[4].color?e[4].color:null}}),{key:r,first:null,c(){l=m("li"),C(n.$$.fragment),this.h()},l(t){l=v(t,"LI",{class:!0,"animation:flip":!0});var i=g(l);j(n.$$.fragment,i),i.forEach(f),this.h()},h(){_(l,"class","task-section__item"),_(l,"animation:flip",""),this.first=l},m(t,i){y(t,l,i),A(n,l,null),a=!0},p(t,i){e=t;const d={};i&2&&(d.text=e[4].text),i&2&&(d.color=e[4].color?e[4].color:null),n.$set(d)},i(t){a||(w(n.$$.fragment,t),B(()=>{o&&o.end(1),s=J(l,e[3],{key:e[4].id}),s.start()}),a=!0)},o(t){D(n.$$.fragment,t),s&&s.invalidate(),o=K(l,e[2],{key:e[4].id}),a=!1},d(t){t&&f(l),L(n),t&&o&&o.end()}}}function be(r){let e,l,n,s=[],o=new Map,a,t=[],i=new Map,d,k,b=r[1].filter(se);const O=u=>u[4].id;for(let u=0;u<b.length;u+=1){let c=ee(r,b,u),h=O(c);o.set(h,s[u]=te(h,c))}let I=r[1].filter(ne);const p=u=>u[4].id;for(let u=0;u<I.length;u+=1){let c=x(r,I,u),h=p(c);i.set(h,t[u]=le(h,c))}return{c(){e=m("section"),l=m("div"),n=m("ul");for(let u=0;u<s.length;u+=1)s[u].c();a=m("ul");for(let u=0;u<t.length;u+=1)t[u].c();this.h()},l(u){e=v(u,"SECTION",{class:!0});var c=g(e);l=v(c,"DIV",{class:!0});var h=g(l);n=v(h,"UL",{class:!0});var q=g(n);for(let T=0;T<s.length;T+=1)s[T].l(q);q.forEach(f),a=v(h,"UL",{class:!0});var M=g(a);for(let T=0;T<t.length;T+=1)t[T].l(M);M.forEach(f),h.forEach(f),c.forEach(f),this.h()},h(){_(n,"class","task-section__col"),_(a,"class","task-section__col"),_(l,"class","container task-section__grid svelte-ezmjle"),_(e,"class",d="task-section "+r[0]+" svelte-ezmjle")},m(u,c){y(u,e,c),E(e,l),E(l,n);for(let h=0;h<s.length;h+=1)s[h].m(n,null);E(l,a);for(let h=0;h<t.length;h+=1)t[h].m(a,null);k=!0},p(u,[c]){c&2&&(b=u[1].filter(se),Q(),s=W(s,c,O,1,u,b,o,n,Y,te,null,ee),X()),c&2&&(I=u[1].filter(ne),Q(),t=W(t,c,p,1,u,I,i,a,Y,le,null,x),X()),(!k||c&1&&d!==(d="task-section "+u[0]+" svelte-ezmjle"))&&_(e,"class",d)},i(u){if(!k){for(let c=0;c<b.length;c+=1)w(s[c]);for(let c=0;c<I.length;c+=1)w(t[c]);k=!0}},o(u){for(let c=0;c<s.length;c+=1)D(s[c]);for(let c=0;c<t.length;c+=1)D(t[c]);k=!1},d(u){u&&f(e);for(let c=0;c<s.length;c+=1)s[c].d();for(let c=0;c<t.length;c+=1)t[c].d()}}}const se=r=>!r.done,ne=r=>r.done;function ye(r,e,l){let n;ie(r,H,t=>l(1,n=t));const[s,o]=ce({duration:t=>Math.sqrt(t*200),fallback(t,i){const d=getComputedStyle(t),k=d.transform==="none"?"":d.transform;return{duration:600,easing:ue,css:b=>`
					transform: ${k} scale(${b});
					opacity: ${b}
				`}}});let{class:a}=e;return r.$$set=t=>{"class"in t&&l(0,a=t.class)},[a,n,s,o]}class Ee extends N{constructor(e){super();F(this,e,ye,be,S,{class:0})}}function ae(r){let e,l,n,s=r[2].text&&oe(r);return{c(){e=m("button"),s&&s.c(),this.h()},l(o){e=v(o,"BUTTON",{class:!0});var a=g(e);s&&s.l(a),a.forEach(f),this.h()},h(){_(e,"class","btn svelte-lxnxhr")},m(o,a){y(o,e,a),s&&s.m(e,null),l||(n=U(e,"click",fe(r[6])),l=!0)},p(o,a){o[2].text?s?s.p(o,a):(s=oe(o),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(o){o&&f(e),s&&s.d(),l=!1,n()}}}function oe(r){let e=r[2].text+"",l;return{c(){l=P(e)},l(n){l=z(n,e)},m(n,s){y(n,l,s)},p(n,s){s&4&&e!==(e=n[2].text+"")&&R(l,e)},d(n){n&&f(l)}}}function Ie(r){let e,l,n,s,o,a=r[2]&&ae(r);return{c(){e=m("div"),l=m("input"),a&&a.c(),this.h()},l(t){e=v(t,"DIV",{class:!0});var i=g(e);l=v(i,"INPUT",{placeholder:!0,class:!0}),a&&a.l(i),i.forEach(f),this.h()},h(){_(l,"placeholder",r[1]),_(l,"class","svelte-lxnxhr"),_(e,"class",n="input-group "+r[0]+" "+(r[2]?"input-group_btn":"")+" svelte-lxnxhr"),Z(e,"isError",r[5])},m(t,i){y(t,e,i),E(e,l),G(l,r[4]),a&&a.m(e,null),r[9](e),s||(o=[U(l,"input",r[8]),U(l,"input",r[7])],s=!0)},p(t,[i]){i&2&&_(l,"placeholder",t[1]),i&16&&l.value!==t[4]&&G(l,t[4]),t[2]?a?a.p(t,i):(a=ae(t),a.c(),a.m(e,null)):a&&(a.d(1),a=null),i&5&&n!==(n="input-group "+t[0]+" "+(t[2]?"input-group_btn":"")+" svelte-lxnxhr")&&_(e,"class",n),i&37&&Z(e,"isError",t[5])},i:V,o:V,d(t){t&&f(e),a&&a.d(),r[9](null),s=!1,_e(o)}}}function Te(r,e,l){let{class:n}=e,{placeholder:s="Placeholer"}=e,{btn:o=null}=e,a,t,i=!1;const d=de(),k=()=>{t?(d("submit",{value:t}),l(4,t="")):l(5,i=!0)},b=()=>{l(5,i=!1)};function O(){t=this.value,l(4,t)}function I(p){he[p?"unshift":"push"](()=>{a=p,l(3,a)})}return r.$$set=p=>{"class"in p&&l(0,n=p.class),"placeholder"in p&&l(1,s=p.placeholder),"btn"in p&&l(2,o=p.btn)},[n,s,o,a,t,i,k,b,O,I]}class we extends N{constructor(e){super();F(this,e,Te,Ie,S,{class:0,placeholder:1,btn:2})}}function De(r){let e,l,n,s;return l=new we({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),l.$on("submit",r[1]),{c(){e=m("div"),C(l.$$.fragment),this.h()},l(o){e=v(o,"DIV",{class:!0});var a=g(e);j(l.$$.fragment,a),a.forEach(f),this.h()},h(){_(e,"class",n="add-todo "+r[0]+" svelte-xriol")},m(o,a){y(o,e,a),A(l,e,null),s=!0},p(o,[a]){(!s||a&1&&n!==(n="add-todo "+o[0]+" svelte-xriol"))&&_(e,"class",n)},i(o){s||(w(l.$$.fragment,o),s=!0)},o(o){D(l.$$.fragment,o),s=!1},d(o){o&&f(e),L(l)}}}function Ne(r,e,l){let{class:n}=e;const s=o=>{let a={id:Date.now(),text:o.detail.value,color:null,done:!1};H.update(t=>t=[a,...t]),console.log(a)};return r.$$set=o=>{"class"in o&&l(0,n=o.class)},[n,s]}class Fe extends N{constructor(e){super();F(this,e,Ne,De,S,{class:0})}}function Se(r){let e,l,n,s,o,a;return s=new Fe({}),o=new Ee({props:{class:"mt-50"}}),{c(){e=me(),l=m("section"),n=m("div"),C(s.$$.fragment),C(o.$$.fragment),this.h()},l(t){ve('[data-svelte="svelte-8twn25"]',document.head).forEach(f),e=ge(t),l=v(t,"SECTION",{class:!0});var d=g(l);n=v(d,"DIV",{class:!0});var k=g(n);j(s.$$.fragment,k),k.forEach(f),d.forEach(f),j(o.$$.fragment,t),this.h()},h(){document.title="ToDo",_(n,"class","container"),_(l,"class","mt-50")},m(t,i){y(t,e,i),y(t,l,i),E(l,n),A(s,n,null),A(o,t,i),a=!0},p:V,i(t){a||(w(s.$$.fragment,t),w(o.$$.fragment,t),a=!0)},o(t){D(s.$$.fragment,t),D(o.$$.fragment,t),a=!1},d(t){t&&f(e),t&&f(l),L(s),L(o,t)}}}class Ce extends N{constructor(e){super();F(this,e,null,Se,S,{})}}export{Ce as default};
