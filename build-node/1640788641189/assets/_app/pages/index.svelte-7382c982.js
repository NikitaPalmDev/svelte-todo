import{S as _,i as m,s as p,e as o,c as u,a as d,d as c,b as r,f,t as S,g as V,h as $,D as E,E as v,v as I,w as T,x as k,p as D,n as N,A as w,j,J as q,l as A}from"../chunks/vendor-16222881.js";function y(i){let e,t=i[2].text&&z(i);return{c(){e=o("button"),t&&t.c(),this.h()},l(l){e=u(l,"BUTTON",{class:!0});var s=d(e);t&&t.l(s),s.forEach(c),this.h()},h(){r(e,"class","btn")},m(l,s){f(l,e,s),t&&t.m(e,null)},p(l,s){l[2].text?t?t.p(l,s):(t=z(l),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(l){l&&c(e),t&&t.d()}}}function z(i){let e=i[2].text+"",t;return{c(){t=S(e)},l(l){t=V(l,e)},m(l,s){f(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&$(t,e)},d(l){l&&c(t)}}}function C(i){let e,t,l,s=i[2]&&y(i);return{c(){e=o("div"),t=o("input"),s&&s.c(),this.h()},l(n){e=u(n,"DIV",{class:!0});var a=d(e);t=u(a,"INPUT",{placeholder:!0,class:!0}),s&&s.l(a),a.forEach(c),this.h()},h(){r(t,"placeholder",i[0]),r(t,"class","svelte-f0rfhz"),r(e,"class",l="input-group "+i[1]+" "+(i[2]?"input-group_btn":"")+" svelte-f0rfhz")},m(n,a){f(n,e,a),E(e,t),s&&s.m(e,null)},p(n,[a]){a&1&&r(t,"placeholder",n[0]),n[2]?s?s.p(n,a):(s=y(n),s.c(),s.m(e,null)):s&&(s.d(1),s=null),a&6&&l!==(l="input-group "+n[1]+" "+(n[2]?"input-group_btn":"")+" svelte-f0rfhz")&&r(e,"class",l)},i:v,o:v,d(n){n&&c(e),s&&s.d()}}}function O(i,e,t){let{placeholder:l="Placeholer"}=e,{class:s}=e,{btn:n=null}=e;return i.$$set=a=>{"placeholder"in a&&t(0,l=a.placeholder),"class"in a&&t(1,s=a.class),"btn"in a&&t(2,n=a.btn)},[l,s,n]}class P extends _{constructor(e){super();m(this,e,O,C,p,{placeholder:0,class:1,btn:2})}}function U(i){let e,t,l,s;return t=new P({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),{c(){e=o("div"),I(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0});var a=d(e);T(t.$$.fragment,a),a.forEach(c),this.h()},h(){r(e,"class",l="add-todo "+i[0])},m(n,a){f(n,e,a),k(t,e,null),s=!0},p(n,[a]){(!s||a&1&&l!==(l="add-todo "+n[0]))&&r(e,"class",l)},i(n){s||(D(t.$$.fragment,n),s=!0)},o(n){N(t.$$.fragment,n),s=!1},d(n){n&&c(e),w(t)}}}function x(i,e,t){let{class:l}=e;return i.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class B extends _{constructor(e){super();m(this,e,x,U,p,{class:0})}}function J(i){let e,t,l,s,n;return s=new B({}),{c(){e=j(),t=o("section"),l=o("div"),I(s.$$.fragment),this.h()},l(a){q('[data-svelte="svelte-8twn25"]',document.head).forEach(c),e=A(a),t=u(a,"SECTION",{class:!0});var b=d(t);l=u(b,"DIV",{class:!0});var g=d(l);T(s.$$.fragment,g),g.forEach(c),b.forEach(c),this.h()},h(){document.title="ToDo",r(l,"class","container"),r(t,"class","add-section")},m(a,h){f(a,e,h),f(a,t,h),E(t,l),k(s,l,null),n=!0},p:v,i(a){n||(D(s.$$.fragment,a),n=!0)},o(a){N(s.$$.fragment,a),n=!1},d(a){a&&c(e),a&&c(t),w(s)}}}class F extends _{constructor(e){super();m(this,e,null,J,p,{})}}export{F as default};
