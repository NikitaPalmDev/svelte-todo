import{S as v,i as p,s as b,e as u,c as d,a as h,d as c,b as r,f,J as C,K as S,t as V,g as j,h as x,D as k,E as g,L as A,v as y,w as E,x as T,p as q,n as I,A as w,j as O,M as P,l as U}from"../chunks/vendor-6066ff60.js";function D(i){let t,n,a,e=i[2].text&&N(i);return{c(){t=u("button"),e&&e.c(),this.h()},l(l){t=d(l,"BUTTON",{class:!0});var s=h(t);e&&e.l(s),s.forEach(c),this.h()},h(){r(t,"class","btn svelte-h1qrlo")},m(l,s){f(l,t,s),e&&e.m(t,null),n||(a=C(t,"click",S(i[4])),n=!0)},p(l,s){l[2].text?e?e.p(l,s):(e=N(l),e.c(),e.m(t,null)):e&&(e.d(1),e=null)},d(l){l&&c(t),e&&e.d(),n=!1,a()}}}function N(i){let t=i[2].text+"",n;return{c(){n=V(t)},l(a){n=j(a,t)},m(a,e){f(a,n,e)},p(a,e){e&4&&t!==(t=a[2].text+"")&&x(n,t)},d(a){a&&c(n)}}}function B(i){let t,n,a,e=i[2]&&D(i);return{c(){t=u("div"),n=u("input"),e&&e.c(),this.h()},l(l){t=d(l,"DIV",{class:!0});var s=h(t);n=d(s,"INPUT",{placeholder:!0,class:!0}),e&&e.l(s),s.forEach(c),this.h()},h(){r(n,"placeholder",i[1]),r(n,"class","svelte-h1qrlo"),r(t,"class",a="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-h1qrlo")},m(l,s){f(l,t,s),k(t,n),e&&e.m(t,null),i[5](t)},p(l,[s]){s&2&&r(n,"placeholder",l[1]),l[2]?e?e.p(l,s):(e=D(l),e.c(),e.m(t,null)):e&&(e.d(1),e=null),s&5&&a!==(a="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-h1qrlo")&&r(t,"class",a)},i:g,o:g,d(l){l&&c(t),e&&e.d(),i[5](null)}}}function J(i,t,n){let{class:a}=t,{placeholder:e="Placeholer"}=t,{btn:l=null}=t,s;const _=()=>{console.log("click")};function m(o){A[o?"unshift":"push"](()=>{s=o,n(3,s)})}return i.$$set=o=>{"class"in o&&n(0,a=o.class),"placeholder"in o&&n(1,e=o.placeholder),"btn"in o&&n(2,l=o.btn)},[a,e,l,s,_,m]}class K extends v{constructor(t){super();p(this,t,J,B,b,{class:0,placeholder:1,btn:2})}}function L(i){let t,n,a,e;return n=new K({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),{c(){t=u("div"),y(n.$$.fragment),this.h()},l(l){t=d(l,"DIV",{class:!0});var s=h(t);E(n.$$.fragment,s),s.forEach(c),this.h()},h(){r(t,"class",a="add-todo "+i[0]+" svelte-xriol")},m(l,s){f(l,t,s),T(n,t,null),e=!0},p(l,[s]){(!e||s&1&&a!==(a="add-todo "+l[0]+" svelte-xriol"))&&r(t,"class",a)},i(l){e||(q(n.$$.fragment,l),e=!0)},o(l){I(n.$$.fragment,l),e=!1},d(l){l&&c(t),w(n)}}}function M(i,t,n){let{class:a}=t;return i.$$set=e=>{"class"in e&&n(0,a=e.class)},[a]}class R extends v{constructor(t){super();p(this,t,M,L,b,{class:0})}}function z(i){let t,n,a,e,l;return e=new R({}),{c(){t=O(),n=u("section"),a=u("div"),y(e.$$.fragment),this.h()},l(s){P('[data-svelte="svelte-8twn25"]',document.head).forEach(c),t=U(s),n=d(s,"SECTION",{class:!0});var m=h(n);a=d(m,"DIV",{class:!0});var o=h(a);E(e.$$.fragment,o),o.forEach(c),m.forEach(c),this.h()},h(){document.title="ToDo",r(a,"class","container"),r(n,"class","add-section svelte-xmnhfw")},m(s,_){f(s,t,_),f(s,n,_),k(n,a),T(e,a,null),l=!0},p:g,i(s){l||(q(e.$$.fragment,s),l=!0)},o(s){I(e.$$.fragment,s),l=!1},d(s){s&&c(t),s&&c(n),w(e)}}}class G extends v{constructor(t){super();p(this,t,null,z,b,{})}}export{G as default};
