import{C as $,S as y,i as I,s as N,e as h,t as C,c as v,a as m,g as V,d as f,b as _,f as g,D as b,h as L,E as w,v as D,w as S,x as F,p as k,n as E,A as j,m as J,o as K,J as M,K as Q,L as O,M as R,N as P,O as G,P as H,j as W,Q as X,l as Y}from"../chunks/vendor-e80d1b85.js";const Z=$([{text:"test task",done:!1},{text:"test task 2",done:!1,color:"#FF9900"}]);function x(r){let e,t,s,l,n,a;return{c(){e=h("li"),t=h("p"),s=C(r[1]),l=h("div"),this.h()},l(c){e=v(c,"LI",{class:!0});var o=m(e);t=v(o,"P",{class:!0});var p=m(t);s=V(p,r[1]),p.forEach(f),l=v(o,"DIV",{class:!0,style:!0}),m(l).forEach(f),o.forEach(f),this.h()},h(){_(t,"class","svelte-1s64vcb"),_(l,"class","task__menu svelte-1s64vcb"),_(l,"style",n=`background-color: ${r[2]!=null?r[2]:"#0029FF"}`),_(e,"class",a="task "+r[0]+" svelte-1s64vcb")},m(c,o){g(c,e,o),b(e,t),b(t,s),b(e,l)},p(c,[o]){o&2&&L(s,c[1]),o&4&&n!==(n=`background-color: ${c[2]!=null?c[2]:"#0029FF"}`)&&_(l,"style",n),o&1&&a!==(a="task "+c[0]+" svelte-1s64vcb")&&_(e,"class",a)},i:w,o:w,d(c){c&&f(e)}}}function ee(r,e,t){let{class:s}=e,{text:l=""}=e,{color:n=null}=e;return r.$$set=a=>{"class"in a&&t(0,s=a.class),"text"in a&&t(1,l=a.text),"color"in a&&t(2,n=a.color)},[s,l,n]}class te extends y{constructor(e){super();I(this,e,ee,x,N,{class:0,text:1,color:2})}}function U(r,e,t){const s=r.slice();return s[2]=e[t],s}function z(r){let e,t;return e=new te({props:{class:"task-section__item",text:r[2].text,color:r[2].color?r[2].color:null}}),{c(){D(e.$$.fragment)},l(s){S(e.$$.fragment,s)},m(s,l){F(e,s,l),t=!0},p(s,l){const n={};l&2&&(n.text=s[2].text),l&2&&(n.color=s[2].color?s[2].color:null),e.$set(n)},i(s){t||(k(e.$$.fragment,s),t=!0)},o(s){E(e.$$.fragment,s),t=!1},d(s){j(e,s)}}}function se(r){let e,t,s,l,n,a,c=r[1],o=[];for(let u=0;u<c.length;u+=1)o[u]=z(U(r,c,u));const p=u=>E(o[u],1,1,()=>{o[u]=null});return{c(){e=h("section"),t=h("div"),s=h("ul");for(let u=0;u<o.length;u+=1)o[u].c();l=h("ul"),this.h()},l(u){e=v(u,"SECTION",{class:!0});var d=m(e);t=v(d,"DIV",{class:!0});var i=m(t);s=v(i,"UL",{class:!0});var T=m(s);for(let A=0;A<o.length;A+=1)o[A].l(T);T.forEach(f),l=v(i,"UL",{class:!0}),m(l).forEach(f),i.forEach(f),d.forEach(f),this.h()},h(){_(s,"class","task-section__col"),_(l,"class","task-section__col"),_(t,"class","container task-section__grid svelte-ezmjle"),_(e,"class",n="task-section "+r[0]+" svelte-ezmjle")},m(u,d){g(u,e,d),b(e,t),b(t,s);for(let i=0;i<o.length;i+=1)o[i].m(s,null);b(t,l),a=!0},p(u,[d]){if(d&2){c=u[1];let i;for(i=0;i<c.length;i+=1){const T=U(u,c,i);o[i]?(o[i].p(T,d),k(o[i],1)):(o[i]=z(T),o[i].c(),k(o[i],1),o[i].m(s,null))}for(J(),i=c.length;i<o.length;i+=1)p(i);K()}(!a||d&1&&n!==(n="task-section "+u[0]+" svelte-ezmjle"))&&_(e,"class",n)},i(u){if(!a){for(let d=0;d<c.length;d+=1)k(o[d]);a=!0}},o(u){o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)E(o[d]);a=!1},d(u){u&&f(e),M(o,u)}}}function le(r,e,t){let s;Q(r,Z,n=>t(1,s=n));let{class:l}=e;return r.$$set=n=>{"class"in n&&t(0,l=n.class)},[l,s]}class ne extends y{constructor(e){super();I(this,e,le,se,N,{class:0})}}function q(r){let e,t,s,l=r[2].text&&B(r);return{c(){e=h("button"),l&&l.c(),this.h()},l(n){e=v(n,"BUTTON",{class:!0});var a=m(e);l&&l.l(a),a.forEach(f),this.h()},h(){_(e,"class","btn svelte-1td548p")},m(n,a){g(n,e,a),l&&l.m(e,null),t||(s=O(e,"click",R(r[5])),t=!0)},p(n,a){n[2].text?l?l.p(n,a):(l=B(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(n){n&&f(e),l&&l.d(),t=!1,s()}}}function B(r){let e=r[2].text+"",t;return{c(){t=C(e)},l(s){t=V(s,e)},m(s,l){g(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&L(t,e)},d(s){s&&f(t)}}}function ae(r){let e,t,s,l,n,a=r[2]&&q(r);return{c(){e=h("div"),t=h("input"),a&&a.c(),this.h()},l(c){e=v(c,"DIV",{class:!0});var o=m(e);t=v(o,"INPUT",{placeholder:!0,class:!0}),a&&a.l(o),o.forEach(f),this.h()},h(){_(t,"placeholder",r[1]),_(t,"class","svelte-1td548p"),_(e,"class",s="input-group "+r[0]+" "+(r[2]?"input-group_btn":"")+" svelte-1td548p")},m(c,o){g(c,e,o),b(e,t),P(t,r[4]),a&&a.m(e,null),r[7](e),l||(n=O(t,"input",r[6]),l=!0)},p(c,[o]){o&2&&_(t,"placeholder",c[1]),o&16&&t.value!==c[4]&&P(t,c[4]),c[2]?a?a.p(c,o):(a=q(c),a.c(),a.m(e,null)):a&&(a.d(1),a=null),o&5&&s!==(s="input-group "+c[0]+" "+(c[2]?"input-group_btn":"")+" svelte-1td548p")&&_(e,"class",s)},i:w,o:w,d(c){c&&f(e),a&&a.d(),r[7](null),l=!1,n()}}}function ce(r,e,t){let{class:s}=e,{placeholder:l="Placeholer"}=e,{btn:n=null}=e,a,c;const o=G(),p=()=>{c&&o("submit",{value:c})};function u(){c=this.value,t(4,c)}function d(i){H[i?"unshift":"push"](()=>{a=i,t(3,a)})}return r.$$set=i=>{"class"in i&&t(0,s=i.class),"placeholder"in i&&t(1,l=i.placeholder),"btn"in i&&t(2,n=i.btn)},[s,l,n,a,c,p,u,d]}class oe extends y{constructor(e){super();I(this,e,ce,ae,N,{class:0,placeholder:1,btn:2})}}function re(r){let e,t,s,l;return t=new oe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",r[1]),{c(){e=h("div"),D(t.$$.fragment),this.h()},l(n){e=v(n,"DIV",{class:!0});var a=m(e);S(t.$$.fragment,a),a.forEach(f),this.h()},h(){_(e,"class",s="add-todo "+r[0]+" svelte-xriol")},m(n,a){g(n,e,a),F(t,e,null),l=!0},p(n,[a]){(!l||a&1&&s!==(s="add-todo "+n[0]+" svelte-xriol"))&&_(e,"class",s)},i(n){l||(k(t.$$.fragment,n),l=!0)},o(n){E(t.$$.fragment,n),l=!1},d(n){n&&f(e),j(t)}}}function ie(r,e,t){let{class:s}=e;const l=n=>{let a={text:n.detail.value,color:null,done:!1};console.log(a)};return r.$$set=n=>{"class"in n&&t(0,s=n.class)},[s,l]}class ue extends y{constructor(e){super();I(this,e,ie,re,N,{class:0})}}function fe(r){let e,t,s,l,n,a;return l=new ue({}),n=new ne({props:{class:"mt-50"}}),{c(){e=W(),t=h("section"),s=h("div"),D(l.$$.fragment),D(n.$$.fragment),this.h()},l(c){X('[data-svelte="svelte-8twn25"]',document.head).forEach(f),e=Y(c),t=v(c,"SECTION",{class:!0});var p=m(t);s=v(p,"DIV",{class:!0});var u=m(s);S(l.$$.fragment,u),u.forEach(f),p.forEach(f),S(n.$$.fragment,c),this.h()},h(){document.title="ToDo",_(s,"class","container"),_(t,"class","mt-50")},m(c,o){g(c,e,o),g(c,t,o),b(t,s),F(l,s,null),F(n,c,o),a=!0},p:w,i(c){a||(k(l.$$.fragment,c),k(n.$$.fragment,c),a=!0)},o(c){E(l.$$.fragment,c),E(n.$$.fragment,c),a=!1},d(c){c&&f(e),c&&f(t),j(l),j(n,c)}}}class de extends y{constructor(e){super();I(this,e,null,fe,N,{})}}export{de as default};
