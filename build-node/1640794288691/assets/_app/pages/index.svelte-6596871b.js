import{S as g,i as b,s as k,e as _,t as w,c as h,a as v,g as $,d as o,b as u,f as m,D as p,h as V,E,v as y,w as T,x as I,p as x,n as N,A as D,J as U,K as A,L as O,M as P,j,N as q,l as F}from"../chunks/vendor-cba0ff05.js";function B(c){let e,l,a,t,s,n;return{c(){e=_("li"),l=_("p"),a=w(c[1]),t=_("div"),this.h()},l(i){e=h(i,"LI",{class:!0});var r=v(e);l=h(r,"P",{class:!0});var d=v(l);a=$(d,c[1]),d.forEach(o),t=h(r,"DIV",{class:!0,style:!0}),v(t).forEach(o),r.forEach(o),this.h()},h(){u(l,"class","svelte-18tgxds"),u(t,"class","task__menu svelte-18tgxds"),u(t,"style",s=`background-color: ${c[2]}`),u(e,"class",n="task "+c[0]+" svelte-18tgxds")},m(i,r){m(i,e,r),p(e,l),p(l,a),p(e,t)},p(i,[r]){r&2&&V(a,i[1]),r&4&&s!==(s=`background-color: ${i[2]}`)&&u(t,"style",s),r&1&&n!==(n="task "+i[0]+" svelte-18tgxds")&&u(e,"class",n)},i:E,o:E,d(i){i&&o(e)}}}function J(c,e,l){let{class:a}=e,{text:t=""}=e,{color:s="#0029FF"}=e;return c.$$set=n=>{"class"in n&&l(0,a=n.class),"text"in n&&l(1,t=n.text),"color"in n&&l(2,s=n.color)},[a,t,s]}class K extends g{constructor(e){super();b(this,e,J,B,k,{class:0,text:1,color:2})}}function M(c){let e,l,a,t,s,n,i;return t=new K({props:{text:"Test text"}}),{c(){e=_("section"),l=_("div"),a=_("ul"),y(t.$$.fragment),s=_("ul"),this.h()},l(r){e=h(r,"SECTION",{class:!0});var d=v(e);l=h(d,"DIV",{class:!0});var f=v(l);a=h(f,"UL",{class:!0});var S=v(a);T(t.$$.fragment,S),S.forEach(o),s=h(f,"UL",{class:!0}),v(s).forEach(o),f.forEach(o),d.forEach(o),this.h()},h(){u(a,"class","task-section__col"),u(s,"class","task-section__col"),u(l,"class","container task-section__grid"),u(e,"class",n="task-section "+c[0]+" svelte-xriol")},m(r,d){m(r,e,d),p(e,l),p(l,a),I(t,a,null),p(l,s),i=!0},p(r,[d]){(!i||d&1&&n!==(n="task-section "+r[0]+" svelte-xriol"))&&u(e,"class",n)},i(r){i||(x(t.$$.fragment,r),i=!0)},o(r){N(t.$$.fragment,r),i=!1},d(r){r&&o(e),D(t)}}}function R(c,e,l){let{class:a}=e;return c.$$set=t=>{"class"in t&&l(0,a=t.class)},[a]}class z extends g{constructor(e){super();b(this,e,R,M,k,{class:0})}}function C(c){let e,l,a,t=c[2].text&&L(c);return{c(){e=_("button"),t&&t.c(),this.h()},l(s){e=h(s,"BUTTON",{class:!0});var n=v(e);t&&t.l(n),n.forEach(o),this.h()},h(){u(e,"class","btn svelte-1td548p")},m(s,n){m(s,e,n),t&&t.m(e,null),l||(a=U(e,"click",A(c[4])),l=!0)},p(s,n){s[2].text?t?t.p(s,n):(t=L(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&o(e),t&&t.d(),l=!1,a()}}}function L(c){let e=c[2].text+"",l;return{c(){l=w(e)},l(a){l=$(a,e)},m(a,t){m(a,l,t)},p(a,t){t&4&&e!==(e=a[2].text+"")&&V(l,e)},d(a){a&&o(l)}}}function G(c){let e,l,a,t=c[2]&&C(c);return{c(){e=_("div"),l=_("input"),t&&t.c(),this.h()},l(s){e=h(s,"DIV",{class:!0});var n=v(e);l=h(n,"INPUT",{placeholder:!0,class:!0}),t&&t.l(n),n.forEach(o),this.h()},h(){u(l,"placeholder",c[1]),u(l,"class","svelte-1td548p"),u(e,"class",a="input-group "+c[0]+" "+(c[2]?"input-group_btn":"")+" svelte-1td548p")},m(s,n){m(s,e,n),p(e,l),t&&t.m(e,null),c[5](e)},p(s,[n]){n&2&&u(l,"placeholder",s[1]),s[2]?t?t.p(s,n):(t=C(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null),n&5&&a!==(a="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1td548p")&&u(e,"class",a)},i:E,o:E,d(s){s&&o(e),t&&t.d(),c[5](null)}}}function H(c,e,l){let{class:a}=e,{placeholder:t="Placeholer"}=e,{btn:s=null}=e,n;const i=O(),r=()=>{i("submit",{value:"value"})};function d(f){P[f?"unshift":"push"](()=>{n=f,l(3,n)})}return c.$$set=f=>{"class"in f&&l(0,a=f.class),"placeholder"in f&&l(1,t=f.placeholder),"btn"in f&&l(2,s=f.btn)},[a,t,s,n,r,d]}class Q extends g{constructor(e){super();b(this,e,H,G,k,{class:0,placeholder:1,btn:2})}}function W(c){let e,l,a,t;return l=new Q({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),l.$on("submit",c[1]),{c(){e=_("div"),y(l.$$.fragment),this.h()},l(s){e=h(s,"DIV",{class:!0});var n=v(e);T(l.$$.fragment,n),n.forEach(o),this.h()},h(){u(e,"class",a="add-todo "+c[0]+" svelte-xriol")},m(s,n){m(s,e,n),I(l,e,null),t=!0},p(s,[n]){(!t||n&1&&a!==(a="add-todo "+s[0]+" svelte-xriol"))&&u(e,"class",a)},i(s){t||(x(l.$$.fragment,s),t=!0)},o(s){N(l.$$.fragment,s),t=!1},d(s){s&&o(e),D(l)}}}function X(c,e,l){let{class:a}=e;const t=s=>{console.log("submit",s)};return c.$$set=s=>{"class"in s&&l(0,a=s.class)},[a,t]}class Y extends g{constructor(e){super();b(this,e,X,W,k,{class:0})}}function Z(c){let e,l,a,t,s,n;return t=new Y({}),s=new z({props:{class:"mt-50"}}),{c(){e=j(),l=_("section"),a=_("div"),y(t.$$.fragment),y(s.$$.fragment),this.h()},l(i){q('[data-svelte="svelte-8twn25"]',document.head).forEach(o),e=F(i),l=h(i,"SECTION",{class:!0});var d=v(l);a=h(d,"DIV",{class:!0});var f=v(a);T(t.$$.fragment,f),f.forEach(o),d.forEach(o),T(s.$$.fragment,i),this.h()},h(){document.title="ToDo",u(a,"class","container"),u(l,"class","mt-50")},m(i,r){m(i,e,r),m(i,l,r),p(l,a),I(t,a,null),I(s,i,r),n=!0},p:E,i(i){n||(x(t.$$.fragment,i),x(s.$$.fragment,i),n=!0)},o(i){N(t.$$.fragment,i),N(s.$$.fragment,i),n=!1},d(i){i&&o(e),i&&o(l),D(t),D(s,i)}}}class te extends g{constructor(e){super();b(this,e,null,Z,k,{})}}export{te as default};
