import{C as J,S as y,i as N,s as w,e as m,t as V,c as v,a as p,g as L,d as f,b as _,f as b,D as k,h as O,E as D,v as S,w as F,x as j,p as T,n as I,A,m as K,o as M,J as Q,K as G,L as C,M as H,N as P,O as U,P as W,Q as X,R as Y,j as Z,T as $,l as ee}from"../chunks/vendor-f2d32953.js";const z=J([{text:"test task",done:!1},{text:"test task 2",done:!1,color:"#FF9900"}]);function te(c){let e,t,s,l,n,o;return{c(){e=m("li"),t=m("p"),s=V(c[1]),l=m("div"),this.h()},l(a){e=v(a,"LI",{class:!0});var r=p(e);t=v(r,"P",{class:!0});var g=p(t);s=L(g,c[1]),g.forEach(f),l=v(r,"DIV",{class:!0,style:!0}),p(l).forEach(f),r.forEach(f),this.h()},h(){_(t,"class","svelte-1s64vcb"),_(l,"class","task__menu svelte-1s64vcb"),_(l,"style",n=`background-color: ${c[2]!=null?c[2]:"#0029FF"}`),_(e,"class",o="task "+c[0]+" svelte-1s64vcb")},m(a,r){b(a,e,r),k(e,t),k(t,s),k(e,l)},p(a,[r]){r&2&&O(s,a[1]),r&4&&n!==(n=`background-color: ${a[2]!=null?a[2]:"#0029FF"}`)&&_(l,"style",n),r&1&&o!==(o="task "+a[0]+" svelte-1s64vcb")&&_(e,"class",o)},i:D,o:D,d(a){a&&f(e)}}}function se(c,e,t){let{class:s}=e,{text:l=""}=e,{color:n=null}=e;return c.$$set=o=>{"class"in o&&t(0,s=o.class),"text"in o&&t(1,l=o.text),"color"in o&&t(2,n=o.color)},[s,l,n]}class le extends y{constructor(e){super();N(this,e,se,te,w,{class:0,text:1,color:2})}}function q(c,e,t){const s=c.slice();return s[2]=e[t],s}function x(c){let e,t;return e=new le({props:{class:"task-section__item",text:c[2].text,color:c[2].color?c[2].color:null}}),{c(){S(e.$$.fragment)},l(s){F(e.$$.fragment,s)},m(s,l){j(e,s,l),t=!0},p(s,l){const n={};l&2&&(n.text=s[2].text),l&2&&(n.color=s[2].color?s[2].color:null),e.$set(n)},i(s){t||(T(e.$$.fragment,s),t=!0)},o(s){I(e.$$.fragment,s),t=!1},d(s){A(e,s)}}}function ne(c){let e,t,s,l,n,o,a=c[1],r=[];for(let i=0;i<a.length;i+=1)r[i]=x(q(c,a,i));const g=i=>I(r[i],1,1,()=>{r[i]=null});return{c(){e=m("section"),t=m("div"),s=m("ul");for(let i=0;i<r.length;i+=1)r[i].c();l=m("ul"),this.h()},l(i){e=v(i,"SECTION",{class:!0});var h=p(e);t=v(h,"DIV",{class:!0});var u=p(t);s=v(u,"UL",{class:!0});var E=p(s);for(let d=0;d<r.length;d+=1)r[d].l(E);E.forEach(f),l=v(u,"UL",{class:!0}),p(l).forEach(f),u.forEach(f),h.forEach(f),this.h()},h(){_(s,"class","task-section__col"),_(l,"class","task-section__col"),_(t,"class","container task-section__grid svelte-ezmjle"),_(e,"class",n="task-section "+c[0]+" svelte-ezmjle")},m(i,h){b(i,e,h),k(e,t),k(t,s);for(let u=0;u<r.length;u+=1)r[u].m(s,null);k(t,l),o=!0},p(i,[h]){if(h&2){a=i[1];let u;for(u=0;u<a.length;u+=1){const E=q(i,a,u);r[u]?(r[u].p(E,h),T(r[u],1)):(r[u]=x(E),r[u].c(),T(r[u],1),r[u].m(s,null))}for(K(),u=a.length;u<r.length;u+=1)g(u);M()}(!o||h&1&&n!==(n="task-section "+i[0]+" svelte-ezmjle"))&&_(e,"class",n)},i(i){if(!o){for(let h=0;h<a.length;h+=1)T(r[h]);o=!0}},o(i){r=r.filter(Boolean);for(let h=0;h<r.length;h+=1)I(r[h]);o=!1},d(i){i&&f(e),Q(r,i)}}}function ae(c,e,t){let s;G(c,z,n=>t(1,s=n));let{class:l}=e;return c.$$set=n=>{"class"in n&&t(0,l=n.class)},[l,s]}class oe extends y{constructor(e){super();N(this,e,ae,ne,w,{class:0})}}function B(c){let e,t,s,l=c[2].text&&R(c);return{c(){e=m("button"),l&&l.c(),this.h()},l(n){e=v(n,"BUTTON",{class:!0});var o=p(e);l&&l.l(o),o.forEach(f),this.h()},h(){_(e,"class","btn svelte-lxnxhr")},m(n,o){b(n,e,o),l&&l.m(e,null),t||(s=C(e,"click",H(c[6])),t=!0)},p(n,o){n[2].text?l?l.p(n,o):(l=R(n),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(n){n&&f(e),l&&l.d(),t=!1,s()}}}function R(c){let e=c[2].text+"",t;return{c(){t=V(e)},l(s){t=L(s,e)},m(s,l){b(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&O(t,e)},d(s){s&&f(t)}}}function re(c){let e,t,s,l,n,o=c[2]&&B(c);return{c(){e=m("div"),t=m("input"),o&&o.c(),this.h()},l(a){e=v(a,"DIV",{class:!0});var r=p(e);t=v(r,"INPUT",{placeholder:!0,class:!0}),o&&o.l(r),r.forEach(f),this.h()},h(){_(t,"placeholder",c[1]),_(t,"class","svelte-lxnxhr"),_(e,"class",s="input-group "+c[0]+" "+(c[2]?"input-group_btn":"")+" svelte-lxnxhr"),P(e,"isError",c[5])},m(a,r){b(a,e,r),k(e,t),U(t,c[4]),o&&o.m(e,null),c[9](e),l||(n=[C(t,"input",c[8]),C(t,"input",c[7])],l=!0)},p(a,[r]){r&2&&_(t,"placeholder",a[1]),r&16&&t.value!==a[4]&&U(t,a[4]),a[2]?o?o.p(a,r):(o=B(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null),r&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-lxnxhr")&&_(e,"class",s),r&37&&P(e,"isError",a[5])},i:D,o:D,d(a){a&&f(e),o&&o.d(),c[9](null),l=!1,W(n)}}}function ce(c,e,t){let{class:s}=e,{placeholder:l="Placeholer"}=e,{btn:n=null}=e,o,a,r=!1;const g=X(),i=()=>{a?(g("submit",{value:a}),t(4,a="")):t(5,r=!0)},h=()=>{console.log("input")};function u(){a=this.value,t(4,a)}function E(d){Y[d?"unshift":"push"](()=>{o=d,t(3,o)})}return c.$$set=d=>{"class"in d&&t(0,s=d.class),"placeholder"in d&&t(1,l=d.placeholder),"btn"in d&&t(2,n=d.btn)},[s,l,n,o,a,r,i,h,u,E]}class ie extends y{constructor(e){super();N(this,e,ce,re,w,{class:0,placeholder:1,btn:2})}}function ue(c){let e,t,s,l;return t=new ie({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",c[1]),{c(){e=m("div"),S(t.$$.fragment),this.h()},l(n){e=v(n,"DIV",{class:!0});var o=p(e);F(t.$$.fragment,o),o.forEach(f),this.h()},h(){_(e,"class",s="add-todo "+c[0]+" svelte-xriol")},m(n,o){b(n,e,o),j(t,e,null),l=!0},p(n,[o]){(!l||o&1&&s!==(s="add-todo "+n[0]+" svelte-xriol"))&&_(e,"class",s)},i(n){l||(T(t.$$.fragment,n),l=!0)},o(n){I(t.$$.fragment,n),l=!1},d(n){n&&f(e),A(t)}}}function fe(c,e,t){let{class:s}=e;const l=n=>{let o={text:n.detail.value,color:null,done:!1};z.update(a=>a=[o,...a]),console.log(o)};return c.$$set=n=>{"class"in n&&t(0,s=n.class)},[s,l]}class _e extends y{constructor(e){super();N(this,e,fe,ue,w,{class:0})}}function he(c){let e,t,s,l,n,o;return l=new _e({}),n=new oe({props:{class:"mt-50"}}),{c(){e=Z(),t=m("section"),s=m("div"),S(l.$$.fragment),S(n.$$.fragment),this.h()},l(a){$('[data-svelte="svelte-8twn25"]',document.head).forEach(f),e=ee(a),t=v(a,"SECTION",{class:!0});var g=p(t);s=v(g,"DIV",{class:!0});var i=p(s);F(l.$$.fragment,i),i.forEach(f),g.forEach(f),F(n.$$.fragment,a),this.h()},h(){document.title="ToDo",_(s,"class","container"),_(t,"class","mt-50")},m(a,r){b(a,e,r),b(a,t,r),k(t,s),j(l,s,null),j(n,a,r),o=!0},p:D,i(a){o||(T(l.$$.fragment,a),T(n.$$.fragment,a),o=!0)},o(a){I(l.$$.fragment,a),I(n.$$.fragment,a),o=!1},d(a){a&&f(e),a&&f(t),A(l),A(n,a)}}}class me extends y{constructor(e){super();N(this,e,null,he,w,{})}}export{me as default};
