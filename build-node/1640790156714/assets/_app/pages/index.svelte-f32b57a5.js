import{S as h,i as m,s as v,e as c,c as u,a as f,d as o,b as r,f as d,t as S,g as V,h as $,D as k,E as p,v as x,w as y,x as E,p as T,n as I,A as w,j,J as q,l as A}from"../chunks/vendor-16222881.js";function D(i){let e,t=i[2].text&&N(i);return{c(){e=c("button"),t&&t.c(),this.h()},l(l){e=u(l,"BUTTON",{class:!0});var s=f(e);t&&t.l(s),s.forEach(o),this.h()},h(){r(e,"class","btn svelte-1iookxb")},m(l,s){d(l,e,s),t&&t.m(e,null)},p(l,s){l[2].text?t?t.p(l,s):(t=N(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&o(e),t&&t.d()}}}function N(i){let e=i[2].text+"",t;return{c(){t=S(e)},l(l){t=V(l,e)},m(l,s){d(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&$(t,e)},d(l){l&&o(t)}}}function C(i){let e,t,l,s=i[2]&&D(i);return{c(){e=c("div"),t=c("input"),s&&s.c(),this.h()},l(n){e=u(n,"DIV",{class:!0});var a=f(e);t=u(a,"INPUT",{placeholder:!0,class:!0}),s&&s.l(a),a.forEach(o),this.h()},h(){r(t,"placeholder",i[0]),r(t,"class","svelte-1iookxb"),r(e,"class",l="input-group "+i[1]+" "+(i[2]?"input-group_btn":"")+" svelte-1iookxb")},m(n,a){d(n,e,a),k(e,t),s&&s.m(e,null)},p(n,[a]){a&1&&r(t,"placeholder",n[0]),n[2]?s?s.p(n,a):(s=D(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null),a&6&&l!==(l="input-group "+n[1]+" "+(n[2]?"input-group_btn":"")+" svelte-1iookxb")&&r(e,"class",l)},i:p,o:p,d(n){n&&o(e),s&&s.d()}}}function O(i,e,t){let{placeholder:l="Placeholer"}=e,{class:s}=e,{btn:n=null}=e;return i.$$set=a=>{"placeholder"in a&&t(0,l=a.placeholder),"class"in a&&t(1,s=a.class),"btn"in a&&t(2,n=a.btn)},[l,s,n]}class P extends h{constructor(e){super();m(this,e,O,C,v,{placeholder:0,class:1,btn:2})}}function U(i){let e,t,l,s;return t=new P({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),{c(){e=c("div"),x(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0});var a=f(e);y(t.$$.fragment,a),a.forEach(o),this.h()},h(){r(e,"class",l="add-todo "+i[0]+" svelte-xriol")},m(n,a){d(n,e,a),E(t,e,null),s=!0},p(n,[a]){(!s||a&1&&l!==(l="add-todo "+n[0]+" svelte-xriol"))&&r(e,"class",l)},i(n){s||(T(t.$$.fragment,n),s=!0)},o(n){I(t.$$.fragment,n),s=!1},d(n){n&&o(e),w(t)}}}function B(i,e,t){let{class:l}=e;return i.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class J extends h{constructor(e){super();m(this,e,B,U,v,{class:0})}}function R(i){let e,t,l,s,n;return s=new J({}),{c(){e=j(),t=c("section"),l=c("div"),x(s.$$.fragment),this.h()},l(a){q('[data-svelte="svelte-8twn25"]',document.head).forEach(o),e=A(a),t=u(a,"SECTION",{class:!0});var b=f(t);l=u(b,"DIV",{class:!0});var g=f(l);y(s.$$.fragment,g),g.forEach(o),b.forEach(o),this.h()},h(){document.title="ToDo",r(l,"class","container"),r(t,"class","add-section svelte-xmnhfw")},m(a,_){d(a,e,_),d(a,t,_),k(t,l),E(s,l,null),n=!0},p,i(a){n||(T(s.$$.fragment,a),n=!0)},o(a){I(s.$$.fragment,a),n=!1},d(a){a&&o(e),a&&o(t),w(s)}}}class F extends h{constructor(e){super();m(this,e,null,R,v,{})}}export{F as default};
