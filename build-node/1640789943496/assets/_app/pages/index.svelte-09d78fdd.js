import{S as h,i as m,s as v,e as o,c as u,a as f,d as r,b as c,f as d,t as D,g as N,h as S,D as x,E as p,v as y,w as E,x as T,p as j,n as q,A as I,j as V,J as $,l as A}from"../chunks/vendor-16222881.js";function k(i){let e,t=i[2].text&&w(i);return{c(){e=o("button"),t&&t.c(),this.h()},l(s){e=u(s,"BUTTON",{class:!0});var l=f(e);t&&t.l(l),l.forEach(r),this.h()},h(){c(e,"class","btn svelte-1drqjlx")},m(s,l){d(s,e,l),t&&t.m(e,null)},p(s,l){s[2].text?t?t.p(s,l):(t=w(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&r(e),t&&t.d()}}}function w(i){let e=i[2].text+"",t;return{c(){t=D(e)},l(s){t=N(s,e)},m(s,l){d(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&S(t,e)},d(s){s&&r(t)}}}function C(i){let e,t,s,l=i[2]&&k(i);return{c(){e=o("div"),t=o("input"),l&&l.c(),this.h()},l(n){e=u(n,"DIV",{class:!0});var a=f(e);t=u(a,"INPUT",{placeholder:!0,class:!0}),l&&l.l(a),a.forEach(r),this.h()},h(){c(t,"placeholder",i[0]),c(t,"class","svelte-1drqjlx"),c(e,"class",s="input-group "+i[1]+" "+(i[2]?"input-group_btn":"")+" svelte-1drqjlx")},m(n,a){d(n,e,a),x(e,t),l&&l.m(e,null)},p(n,[a]){a&1&&c(t,"placeholder",n[0]),n[2]?l?l.p(n,a):(l=k(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null),a&6&&s!==(s="input-group "+n[1]+" "+(n[2]?"input-group_btn":"")+" svelte-1drqjlx")&&c(e,"class",s)},i:p,o:p,d(n){n&&r(e),l&&l.d()}}}function O(i,e,t){let{placeholder:s="Placeholer"}=e,{class:l}=e,{btn:n=null}=e;return i.$$set=a=>{"placeholder"in a&&t(0,s=a.placeholder),"class"in a&&t(1,l=a.class),"btn"in a&&t(2,n=a.btn)},[s,l,n]}class P extends h{constructor(e){super();m(this,e,O,C,v,{placeholder:0,class:1,btn:2})}}function U(i){let e,t,s,l;return t=new P({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),{c(){e=o("div"),y(t.$$.fragment),this.h()},l(n){e=u(n,"DIV",{class:!0});var a=f(e);E(t.$$.fragment,a),a.forEach(r),this.h()},h(){c(e,"class",s="add-todo "+i[0]+" svelte-xriol")},m(n,a){d(n,e,a),T(t,e,null),l=!0},p(n,[a]){(!l||a&1&&s!==(s="add-todo "+n[0]+" svelte-xriol"))&&c(e,"class",s)},i(n){l||(j(t.$$.fragment,n),l=!0)},o(n){q(t.$$.fragment,n),l=!1},d(n){n&&r(e),I(t)}}}function B(i,e,t){let{class:s}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class J extends h{constructor(e){super();m(this,e,B,U,v,{class:0})}}function R(i){let e,t,s,l,n;return l=new J({}),{c(){e=V(),t=o("section"),s=o("div"),y(l.$$.fragment),this.h()},l(a){$('[data-svelte="svelte-8twn25"]',document.head).forEach(r),e=A(a),t=u(a,"SECTION",{class:!0});var g=f(t);s=u(g,"DIV",{class:!0});var b=f(s);E(l.$$.fragment,b),b.forEach(r),g.forEach(r),this.h()},h(){document.title="ToDo",c(s,"class","container"),c(t,"class","add-section svelte-xmnhfw")},m(a,_){d(a,e,_),d(a,t,_),x(t,s),T(l,s,null),n=!0},p,i(a){n||(j(l.$$.fragment,a),n=!0)},o(a){q(l.$$.fragment,a),n=!1},d(a){a&&r(e),a&&r(t),I(l)}}}class F extends h{constructor(e){super();m(this,e,null,R,v,{})}}export{F as default};
