import{S as g,i as b,s as k,e as d,t as S,c as _,a as v,g as w,d as r,b as u,f as m,D as p,h as j,E,v as T,w as $,x as y,p as x,n as I,A as N,J as U,K as V,L as A,M as O,j as P,N as q,l as B}from"../chunks/vendor-cba0ff05.js";function J(i){let e,l,a,t;return{c(){e=d("li"),l=d("p"),a=S(i[1]),this.h()},l(s){e=_(s,"LI",{class:!0});var n=v(e);l=_(n,"P",{class:!0});var c=v(l);a=w(c,i[1]),c.forEach(r),n.forEach(r),this.h()},h(){u(l,"class","svelte-x81jgd"),u(e,"class",t="task "+i[0]+" svelte-x81jgd")},m(s,n){m(s,e,n),p(e,l),p(l,a)},p(s,[n]){n&2&&j(a,s[1]),n&1&&t!==(t="task "+s[0]+" svelte-x81jgd")&&u(e,"class",t)},i:E,o:E,d(s){s&&r(e)}}}function K(i,e,l){let{class:a}=e,{text:t}=e;return i.$$set=s=>{"class"in s&&l(0,a=s.class),"text"in s&&l(1,t=s.text)},[a,t]}class M extends g{constructor(e){super();b(this,e,K,J,k,{class:0,text:1})}}function R(i){let e,l,a,t,s,n,c;return t=new M({props:{text:"Test text"}}),{c(){e=d("section"),l=d("div"),a=d("ul"),T(t.$$.fragment),s=d("ul"),this.h()},l(o){e=_(o,"SECTION",{class:!0});var h=v(e);l=_(h,"DIV",{class:!0});var f=v(l);a=_(f,"UL",{class:!0});var D=v(a);$(t.$$.fragment,D),D.forEach(r),s=_(f,"UL",{class:!0}),v(s).forEach(r),f.forEach(r),h.forEach(r),this.h()},h(){u(a,"class","task-section__col"),u(s,"class","task-section__col"),u(l,"class","container task-section__grid"),u(e,"class",n="task-section "+i[0]+" svelte-xriol")},m(o,h){m(o,e,h),p(e,l),p(l,a),y(t,a,null),p(l,s),c=!0},p(o,[h]){(!c||h&1&&n!==(n="task-section "+o[0]+" svelte-xriol"))&&u(e,"class",n)},i(o){c||(x(t.$$.fragment,o),c=!0)},o(o){I(t.$$.fragment,o),c=!1},d(o){o&&r(e),N(t)}}}function z(i,e,l){let{class:a}=e;return i.$$set=t=>{"class"in t&&l(0,a=t.class)},[a]}class F extends g{constructor(e){super();b(this,e,z,R,k,{class:0})}}function C(i){let e,l,a,t=i[2].text&&L(i);return{c(){e=d("button"),t&&t.c(),this.h()},l(s){e=_(s,"BUTTON",{class:!0});var n=v(e);t&&t.l(n),n.forEach(r),this.h()},h(){u(e,"class","btn svelte-1td548p")},m(s,n){m(s,e,n),t&&t.m(e,null),l||(a=U(e,"click",V(i[4])),l=!0)},p(s,n){s[2].text?t?t.p(s,n):(t=L(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&r(e),t&&t.d(),l=!1,a()}}}function L(i){let e=i[2].text+"",l;return{c(){l=S(e)},l(a){l=w(a,e)},m(a,t){m(a,l,t)},p(a,t){t&4&&e!==(e=a[2].text+"")&&j(l,e)},d(a){a&&r(l)}}}function G(i){let e,l,a,t=i[2]&&C(i);return{c(){e=d("div"),l=d("input"),t&&t.c(),this.h()},l(s){e=_(s,"DIV",{class:!0});var n=v(e);l=_(n,"INPUT",{placeholder:!0,class:!0}),t&&t.l(n),n.forEach(r),this.h()},h(){u(l,"placeholder",i[1]),u(l,"class","svelte-1td548p"),u(e,"class",a="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-1td548p")},m(s,n){m(s,e,n),p(e,l),t&&t.m(e,null),i[5](e)},p(s,[n]){n&2&&u(l,"placeholder",s[1]),s[2]?t?t.p(s,n):(t=C(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null),n&5&&a!==(a="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1td548p")&&u(e,"class",a)},i:E,o:E,d(s){s&&r(e),t&&t.d(),i[5](null)}}}function H(i,e,l){let{class:a}=e,{placeholder:t="Placeholer"}=e,{btn:s=null}=e,n;const c=A(),o=()=>{c("submit",{value:"value"})};function h(f){O[f?"unshift":"push"](()=>{n=f,l(3,n)})}return i.$$set=f=>{"class"in f&&l(0,a=f.class),"placeholder"in f&&l(1,t=f.placeholder),"btn"in f&&l(2,s=f.btn)},[a,t,s,n,o,h]}class Q extends g{constructor(e){super();b(this,e,H,G,k,{class:0,placeholder:1,btn:2})}}function W(i){let e,l,a,t;return l=new Q({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),l.$on("submit",i[1]),{c(){e=d("div"),T(l.$$.fragment),this.h()},l(s){e=_(s,"DIV",{class:!0});var n=v(e);$(l.$$.fragment,n),n.forEach(r),this.h()},h(){u(e,"class",a="add-todo "+i[0]+" svelte-xriol")},m(s,n){m(s,e,n),y(l,e,null),t=!0},p(s,[n]){(!t||n&1&&a!==(a="add-todo "+s[0]+" svelte-xriol"))&&u(e,"class",a)},i(s){t||(x(l.$$.fragment,s),t=!0)},o(s){I(l.$$.fragment,s),t=!1},d(s){s&&r(e),N(l)}}}function X(i,e,l){let{class:a}=e;const t=s=>{console.log("submit",s)};return i.$$set=s=>{"class"in s&&l(0,a=s.class)},[a,t]}class Y extends g{constructor(e){super();b(this,e,X,W,k,{class:0})}}function Z(i){let e,l,a,t,s,n;return t=new Y({}),s=new F({props:{class:"mt-50"}}),{c(){e=P(),l=d("section"),a=d("div"),T(t.$$.fragment),T(s.$$.fragment),this.h()},l(c){q('[data-svelte="svelte-8twn25"]',document.head).forEach(r),e=B(c),l=_(c,"SECTION",{class:!0});var h=v(l);a=_(h,"DIV",{class:!0});var f=v(a);$(t.$$.fragment,f),f.forEach(r),h.forEach(r),$(s.$$.fragment,c),this.h()},h(){document.title="ToDo",u(a,"class","container"),u(l,"class","mt-50")},m(c,o){m(c,e,o),m(c,l,o),p(l,a),y(t,a,null),y(s,c,o),n=!0},p:E,i(c){n||(x(t.$$.fragment,c),x(s.$$.fragment,c),n=!0)},o(c){I(t.$$.fragment,c),I(s.$$.fragment,c),n=!1},d(c){c&&r(e),c&&r(l),N(t),N(s,c)}}}class te extends g{constructor(e){super();b(this,e,null,Z,k,{})}}export{te as default};
