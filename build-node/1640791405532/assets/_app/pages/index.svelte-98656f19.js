import{S as v,i as p,s as b,e as u,c as d,a as h,d as o,b as r,f,J as C,K as S,t as V,g as j,h as A,D as E,E as g,L as O,v as k,w as y,x as T,p as q,n as w,A as I,M as P,j as U,N as x,l as B}from"../chunks/vendor-bcc337ec.js";function N(i){let t,n,a,e=i[2].text&&D(i);return{c(){t=u("button"),e&&e.c(),this.h()},l(s){t=d(s,"BUTTON",{class:!0});var l=h(t);e&&e.l(l),l.forEach(o),this.h()},h(){r(t,"class","btn svelte-h1qrlo")},m(s,l){f(s,t,l),e&&e.m(t,null),n||(a=C(t,"click",S(i[4])),n=!0)},p(s,l){s[2].text?e?e.p(s,l):(e=D(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(s){s&&o(t),e&&e.d(),n=!1,a()}}}function D(i){let t=i[2].text+"",n;return{c(){n=V(t)},l(a){n=j(a,t)},m(a,e){f(a,n,e)},p(a,e){e&4&&t!==(t=a[2].text+"")&&A(n,t)},d(a){a&&o(n)}}}function J(i){let t,n,a,e=i[2]&&N(i);return{c(){t=u("div"),n=u("input"),e&&e.c(),this.h()},l(s){t=d(s,"DIV",{class:!0});var l=h(t);n=d(l,"INPUT",{placeholder:!0,class:!0}),e&&e.l(l),l.forEach(o),this.h()},h(){r(n,"placeholder",i[1]),r(n,"class","svelte-h1qrlo"),r(t,"class",a="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-h1qrlo")},m(s,l){f(s,t,l),E(t,n),e&&e.m(t,null),i[5](t)},p(s,[l]){l&2&&r(n,"placeholder",s[1]),s[2]?e?e.p(s,l):(e=N(s),e.c(),e.m(t,null)):e&&(e.d(1),e=null),l&5&&a!==(a="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-h1qrlo")&&r(t,"class",a)},i:g,o:g,d(s){s&&o(t),e&&e.d(),i[5](null)}}}function K(i,t,n){let{class:a}=t,{placeholder:e="Placeholer"}=t,{btn:s=null}=t,l;const _=()=>{console.log("click"),l.dispatchEvent(new Event("submit"))};function m(c){O[c?"unshift":"push"](()=>{l=c,n(3,l)})}return i.$$set=c=>{"class"in c&&n(0,a=c.class),"placeholder"in c&&n(1,e=c.placeholder),"btn"in c&&n(2,s=c.btn)},[a,e,s,l,_,m]}class L extends v{constructor(t){super();p(this,t,K,J,b,{class:0,placeholder:1,btn:2})}}function M(i){let t,n,a,e;return n=new L({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("submit",i[1]),{c(){t=u("div"),k(n.$$.fragment),this.h()},l(s){t=d(s,"DIV",{class:!0});var l=h(t);y(n.$$.fragment,l),l.forEach(o),this.h()},h(){r(t,"class",a="add-todo "+i[0]+" svelte-xriol")},m(s,l){f(s,t,l),T(n,t,null),e=!0},p(s,[l]){(!e||l&1&&a!==(a="add-todo "+s[0]+" svelte-xriol"))&&r(t,"class",a)},i(s){e||(q(n.$$.fragment,s),e=!0)},o(s){w(n.$$.fragment,s),e=!1},d(s){s&&o(t),I(n)}}}function R(i,t,n){let{class:a}=t;function e(s){P.call(this,i,s)}return i.$$set=s=>{"class"in s&&n(0,a=s.class)},[a,e]}class z extends v{constructor(t){super();p(this,t,R,M,b,{class:0})}}function F(i){let t,n,a,e,s;return e=new z({}),{c(){t=U(),n=u("section"),a=u("div"),k(e.$$.fragment),this.h()},l(l){x('[data-svelte="svelte-8twn25"]',document.head).forEach(o),t=B(l),n=d(l,"SECTION",{class:!0});var m=h(n);a=d(m,"DIV",{class:!0});var c=h(a);y(e.$$.fragment,c),c.forEach(o),m.forEach(o),this.h()},h(){document.title="ToDo",r(a,"class","container"),r(n,"class","add-section svelte-xmnhfw")},m(l,_){f(l,t,_),f(l,n,_),E(n,a),T(e,a,null),s=!0},p:g,i(l){s||(q(e.$$.fragment,l),s=!0)},o(l){w(e.$$.fragment,l),s=!1},d(l){l&&o(t),l&&o(n),I(e)}}}class H extends v{constructor(t){super();p(this,t,null,F,b,{})}}export{H as default};
