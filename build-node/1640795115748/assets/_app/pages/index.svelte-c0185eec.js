import{C as q,S as T,i as I,s as N,e as h,t as V,c as v,a as m,g as L,d as f,b as _,f as p,D as b,h as O,E as D,v as w,w as S,x as F,p as k,n as E,A,m as x,o as B,J,K,L as M,M as R,N as z,O as G,j as H,P as Q,l as W}from"../chunks/vendor-7d83252f.js";const X=q([{text:"test task",done:!1},{text:"test task 2",done:!1,color:"#FF9900"}]);function Y(c){let e,l,a,t,s,n;return{c(){e=h("li"),l=h("p"),a=V(c[1]),t=h("div"),this.h()},l(r){e=v(r,"LI",{class:!0});var o=m(e);l=v(o,"P",{class:!0});var g=m(l);a=L(g,c[1]),g.forEach(f),t=v(o,"DIV",{class:!0,style:!0}),m(t).forEach(f),o.forEach(f),this.h()},h(){_(l,"class","svelte-1s64vcb"),_(t,"class","task__menu svelte-1s64vcb"),_(t,"style",s=`background-color: ${c[2]!=null?c[2]:"#0029FF"}`),_(e,"class",n="task "+c[0]+" svelte-1s64vcb")},m(r,o){p(r,e,o),b(e,l),b(l,a),b(e,t)},p(r,[o]){o&2&&O(a,r[1]),o&4&&s!==(s=`background-color: ${r[2]!=null?r[2]:"#0029FF"}`)&&_(t,"style",s),o&1&&n!==(n="task "+r[0]+" svelte-1s64vcb")&&_(e,"class",n)},i:D,o:D,d(r){r&&f(e)}}}function Z(c,e,l){let{class:a}=e,{text:t=""}=e,{color:s=null}=e;return c.$$set=n=>{"class"in n&&l(0,a=n.class),"text"in n&&l(1,t=n.text),"color"in n&&l(2,s=n.color)},[a,t,s]}class ee extends T{constructor(e){super();I(this,e,Z,Y,N,{class:0,text:1,color:2})}}function P(c,e,l){const a=c.slice();return a[2]=e[l],a}function U(c){let e,l;return e=new ee({props:{class:"task-section__item",text:c[2].text,color:c[2].color?c[2].color:null}}),{c(){w(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,t){F(e,a,t),l=!0},p(a,t){const s={};t&2&&(s.text=a[2].text),t&2&&(s.color=a[2].color?a[2].color:null),e.$set(s)},i(a){l||(k(e.$$.fragment,a),l=!0)},o(a){E(e.$$.fragment,a),l=!1},d(a){A(e,a)}}}function te(c){let e,l,a,t,s,n,r=c[1],o=[];for(let i=0;i<r.length;i+=1)o[i]=U(P(c,r,i));const g=i=>E(o[i],1,1,()=>{o[i]=null});return{c(){e=h("section"),l=h("div"),a=h("ul");for(let i=0;i<o.length;i+=1)o[i].c();t=h("ul"),this.h()},l(i){e=v(i,"SECTION",{class:!0});var d=m(e);l=v(d,"DIV",{class:!0});var u=m(l);a=v(u,"UL",{class:!0});var y=m(a);for(let C=0;C<o.length;C+=1)o[C].l(y);y.forEach(f),t=v(u,"UL",{class:!0}),m(t).forEach(f),u.forEach(f),d.forEach(f),this.h()},h(){_(a,"class","task-section__col"),_(t,"class","task-section__col"),_(l,"class","container task-section__grid"),_(e,"class",s="task-section "+c[0]+" svelte-xriol")},m(i,d){p(i,e,d),b(e,l),b(l,a);for(let u=0;u<o.length;u+=1)o[u].m(a,null);b(l,t),n=!0},p(i,[d]){if(d&2){r=i[1];let u;for(u=0;u<r.length;u+=1){const y=P(i,r,u);o[u]?(o[u].p(y,d),k(o[u],1)):(o[u]=U(y),o[u].c(),k(o[u],1),o[u].m(a,null))}for(x(),u=r.length;u<o.length;u+=1)g(u);B()}(!n||d&1&&s!==(s="task-section "+i[0]+" svelte-xriol"))&&_(e,"class",s)},i(i){if(!n){for(let d=0;d<r.length;d+=1)k(o[d]);n=!0}},o(i){o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)E(o[d]);n=!1},d(i){i&&f(e),J(o,i)}}}function se(c,e,l){let a;K(c,X,s=>l(1,a=s));let{class:t}=e;return c.$$set=s=>{"class"in s&&l(0,t=s.class)},[t,a]}class le extends T{constructor(e){super();I(this,e,se,te,N,{class:0})}}function $(c){let e,l,a,t=c[2].text&&j(c);return{c(){e=h("button"),t&&t.c(),this.h()},l(s){e=v(s,"BUTTON",{class:!0});var n=m(e);t&&t.l(n),n.forEach(f),this.h()},h(){_(e,"class","btn svelte-1td548p")},m(s,n){p(s,e,n),t&&t.m(e,null),l||(a=M(e,"click",R(c[4])),l=!0)},p(s,n){s[2].text?t?t.p(s,n):(t=j(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&f(e),t&&t.d(),l=!1,a()}}}function j(c){let e=c[2].text+"",l;return{c(){l=V(e)},l(a){l=L(a,e)},m(a,t){p(a,l,t)},p(a,t){t&4&&e!==(e=a[2].text+"")&&O(l,e)},d(a){a&&f(l)}}}function ae(c){let e,l,a,t=c[2]&&$(c);return{c(){e=h("div"),l=h("input"),t&&t.c(),this.h()},l(s){e=v(s,"DIV",{class:!0});var n=m(e);l=v(n,"INPUT",{placeholder:!0,class:!0}),t&&t.l(n),n.forEach(f),this.h()},h(){_(l,"placeholder",c[1]),_(l,"class","svelte-1td548p"),_(e,"class",a="input-group "+c[0]+" "+(c[2]?"input-group_btn":"")+" svelte-1td548p")},m(s,n){p(s,e,n),b(e,l),t&&t.m(e,null),c[5](e)},p(s,[n]){n&2&&_(l,"placeholder",s[1]),s[2]?t?t.p(s,n):(t=$(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null),n&5&&a!==(a="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1td548p")&&_(e,"class",a)},i:D,o:D,d(s){s&&f(e),t&&t.d(),c[5](null)}}}function ne(c,e,l){let{class:a}=e,{placeholder:t="Placeholer"}=e,{btn:s=null}=e,n;const r=z(),o=()=>{r("submit",{value:"value"})};function g(i){G[i?"unshift":"push"](()=>{n=i,l(3,n)})}return c.$$set=i=>{"class"in i&&l(0,a=i.class),"placeholder"in i&&l(1,t=i.placeholder),"btn"in i&&l(2,s=i.btn)},[a,t,s,n,o,g]}class ce extends T{constructor(e){super();I(this,e,ne,ae,N,{class:0,placeholder:1,btn:2})}}function oe(c){let e,l,a,t;return l=new ce({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),l.$on("submit",c[1]),{c(){e=h("div"),w(l.$$.fragment),this.h()},l(s){e=v(s,"DIV",{class:!0});var n=m(e);S(l.$$.fragment,n),n.forEach(f),this.h()},h(){_(e,"class",a="add-todo "+c[0]+" svelte-xriol")},m(s,n){p(s,e,n),F(l,e,null),t=!0},p(s,[n]){(!t||n&1&&a!==(a="add-todo "+s[0]+" svelte-xriol"))&&_(e,"class",a)},i(s){t||(k(l.$$.fragment,s),t=!0)},o(s){E(l.$$.fragment,s),t=!1},d(s){s&&f(e),A(l)}}}function re(c,e,l){let{class:a}=e;const t=s=>{console.log("submit",s)};return c.$$set=s=>{"class"in s&&l(0,a=s.class)},[a,t]}class ie extends T{constructor(e){super();I(this,e,re,oe,N,{class:0})}}function ue(c){let e,l,a,t,s,n;return t=new ie({}),s=new le({props:{class:"mt-50"}}),{c(){e=H(),l=h("section"),a=h("div"),w(t.$$.fragment),w(s.$$.fragment),this.h()},l(r){Q('[data-svelte="svelte-8twn25"]',document.head).forEach(f),e=W(r),l=v(r,"SECTION",{class:!0});var g=m(l);a=v(g,"DIV",{class:!0});var i=m(a);S(t.$$.fragment,i),i.forEach(f),g.forEach(f),S(s.$$.fragment,r),this.h()},h(){document.title="ToDo",_(a,"class","container"),_(l,"class","mt-50")},m(r,o){p(r,e,o),p(r,l,o),b(l,a),F(t,a,null),F(s,r,o),n=!0},p:D,i(r){n||(k(t.$$.fragment,r),k(s.$$.fragment,r),n=!0)},o(r){E(t.$$.fragment,r),E(s.$$.fragment,r),n=!1},d(r){r&&f(e),r&&f(l),A(t),A(s,r)}}}class _e extends T{constructor(e){super();I(this,e,null,ue,N,{})}}export{_e as default};
