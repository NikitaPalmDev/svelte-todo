import{C as j,S as T,i as w,s as I,e as h,t as V,c as m,a as v,g as q,d as f,b as _,f as g,D as k,h as L,E as N,v as D,w as S,x as F,p as b,n as E,A,m as z,o as B,J,K,L as M,M as R,N as x,O as G,j as H,P as Q,l as W}from"../chunks/vendor-7d83252f.js";const X=j([{text:"test task",done:!1},{text:"test task 2",done:!1,color:"#FF9900"}]);function Y(c){let e,l,n,t,s,a;return{c(){e=h("li"),l=h("p"),n=V(c[1]),t=h("div"),this.h()},l(r){e=m(r,"LI",{class:!0});var o=v(e);l=m(o,"P",{class:!0});var p=v(l);n=q(p,c[1]),p.forEach(f),t=m(o,"DIV",{class:!0,style:!0}),v(t).forEach(f),o.forEach(f),this.h()},h(){_(l,"class","svelte-3nrwy8"),_(t,"class","task__menu svelte-3nrwy8"),_(t,"style",s=`background-color: ${c[2]!=null?c[2]:"#0029FF"}`),_(e,"class",a="task "+c[0]+" svelte-3nrwy8")},m(r,o){g(r,e,o),k(e,l),k(l,n),k(e,t)},p(r,[o]){o&2&&L(n,r[1]),o&4&&s!==(s=`background-color: ${r[2]!=null?r[2]:"#0029FF"}`)&&_(t,"style",s),o&1&&a!==(a="task "+r[0]+" svelte-3nrwy8")&&_(e,"class",a)},i:N,o:N,d(r){r&&f(e)}}}function Z(c,e,l){let{class:n}=e,{text:t=""}=e,{color:s=null}=e;return c.$$set=a=>{"class"in a&&l(0,n=a.class),"text"in a&&l(1,t=a.text),"color"in a&&l(2,s=a.color)},[n,t,s]}class ee extends T{constructor(e){super();w(this,e,Z,Y,I,{class:0,text:1,color:2})}}function O(c,e,l){const n=c.slice();return n[2]=e[l],n}function P(c){let e,l;return e=new ee({props:{class:"task-section__item",text:c[2].text,color:c[2].color?c[2].color:null}}),{c(){D(e.$$.fragment)},l(n){S(e.$$.fragment,n)},m(n,t){F(e,n,t),l=!0},p(n,t){const s={};t&2&&(s.text=n[2].text),t&2&&(s.color=n[2].color?n[2].color:null),e.$set(s)},i(n){l||(b(e.$$.fragment,n),l=!0)},o(n){E(e.$$.fragment,n),l=!1},d(n){A(e,n)}}}function te(c){let e,l,n,t,s,a,r=c[1],o=[];for(let i=0;i<r.length;i+=1)o[i]=P(O(c,r,i));const p=i=>E(o[i],1,1,()=>{o[i]=null});return{c(){e=h("section"),l=h("div"),n=h("ul");for(let i=0;i<o.length;i+=1)o[i].c();t=h("ul"),this.h()},l(i){e=m(i,"SECTION",{class:!0});var d=v(e);l=m(d,"DIV",{class:!0});var u=v(l);n=m(u,"UL",{class:!0});var y=v(n);for(let C=0;C<o.length;C+=1)o[C].l(y);y.forEach(f),t=m(u,"UL",{class:!0}),v(t).forEach(f),u.forEach(f),d.forEach(f),this.h()},h(){_(n,"class","task-section__col"),_(t,"class","task-section__col"),_(l,"class","container task-section__grid"),_(e,"class",s="task-section "+c[0]+" svelte-10pzkbq")},m(i,d){g(i,e,d),k(e,l),k(l,n);for(let u=0;u<o.length;u+=1)o[u].m(n,null);k(l,t),a=!0},p(i,[d]){if(d&2){r=i[1];let u;for(u=0;u<r.length;u+=1){const y=O(i,r,u);o[u]?(o[u].p(y,d),b(o[u],1)):(o[u]=P(y),o[u].c(),b(o[u],1),o[u].m(n,null))}for(z(),u=r.length;u<o.length;u+=1)p(u);B()}(!a||d&1&&s!==(s="task-section "+i[0]+" svelte-10pzkbq"))&&_(e,"class",s)},i(i){if(!a){for(let d=0;d<r.length;d+=1)b(o[d]);a=!0}},o(i){o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)E(o[d]);a=!1},d(i){i&&f(e),J(o,i)}}}function se(c,e,l){let n;K(c,X,s=>l(1,n=s));let{class:t}=e;return c.$$set=s=>{"class"in s&&l(0,t=s.class)},[t,n]}class le extends T{constructor(e){super();w(this,e,se,te,I,{class:0})}}function U(c){let e,l,n,t=c[2].text&&$(c);return{c(){e=h("button"),t&&t.c(),this.h()},l(s){e=m(s,"BUTTON",{class:!0});var a=v(e);t&&t.l(a),a.forEach(f),this.h()},h(){_(e,"class","btn svelte-1td548p")},m(s,a){g(s,e,a),t&&t.m(e,null),l||(n=M(e,"click",R(c[4])),l=!0)},p(s,a){s[2].text?t?t.p(s,a):(t=$(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&f(e),t&&t.d(),l=!1,n()}}}function $(c){let e=c[2].text+"",l;return{c(){l=V(e)},l(n){l=q(n,e)},m(n,t){g(n,l,t)},p(n,t){t&4&&e!==(e=n[2].text+"")&&L(l,e)},d(n){n&&f(l)}}}function ne(c){let e,l,n,t=c[2]&&U(c);return{c(){e=h("div"),l=h("input"),t&&t.c(),this.h()},l(s){e=m(s,"DIV",{class:!0});var a=v(e);l=m(a,"INPUT",{placeholder:!0,class:!0}),t&&t.l(a),a.forEach(f),this.h()},h(){_(l,"placeholder",c[1]),_(l,"class","svelte-1td548p"),_(e,"class",n="input-group "+c[0]+" "+(c[2]?"input-group_btn":"")+" svelte-1td548p")},m(s,a){g(s,e,a),k(e,l),t&&t.m(e,null),c[5](e)},p(s,[a]){a&2&&_(l,"placeholder",s[1]),s[2]?t?t.p(s,a):(t=U(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null),a&5&&n!==(n="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1td548p")&&_(e,"class",n)},i:N,o:N,d(s){s&&f(e),t&&t.d(),c[5](null)}}}function ae(c,e,l){let{class:n}=e,{placeholder:t="Placeholer"}=e,{btn:s=null}=e,a;const r=x(),o=()=>{r("submit",{value:"value"})};function p(i){G[i?"unshift":"push"](()=>{a=i,l(3,a)})}return c.$$set=i=>{"class"in i&&l(0,n=i.class),"placeholder"in i&&l(1,t=i.placeholder),"btn"in i&&l(2,s=i.btn)},[n,t,s,a,o,p]}class ce extends T{constructor(e){super();w(this,e,ae,ne,I,{class:0,placeholder:1,btn:2})}}function oe(c){let e,l,n,t;return l=new ce({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),l.$on("submit",c[1]),{c(){e=h("div"),D(l.$$.fragment),this.h()},l(s){e=m(s,"DIV",{class:!0});var a=v(e);S(l.$$.fragment,a),a.forEach(f),this.h()},h(){_(e,"class",n="add-todo "+c[0]+" svelte-xriol")},m(s,a){g(s,e,a),F(l,e,null),t=!0},p(s,[a]){(!t||a&1&&n!==(n="add-todo "+s[0]+" svelte-xriol"))&&_(e,"class",n)},i(s){t||(b(l.$$.fragment,s),t=!0)},o(s){E(l.$$.fragment,s),t=!1},d(s){s&&f(e),A(l)}}}function re(c,e,l){let{class:n}=e;const t=s=>{console.log("submit",s)};return c.$$set=s=>{"class"in s&&l(0,n=s.class)},[n,t]}class ie extends T{constructor(e){super();w(this,e,re,oe,I,{class:0})}}function ue(c){let e,l,n,t,s,a;return t=new ie({}),s=new le({props:{class:"mt-50"}}),{c(){e=H(),l=h("section"),n=h("div"),D(t.$$.fragment),D(s.$$.fragment),this.h()},l(r){Q('[data-svelte="svelte-8twn25"]',document.head).forEach(f),e=W(r),l=m(r,"SECTION",{class:!0});var p=v(l);n=m(p,"DIV",{class:!0});var i=v(n);S(t.$$.fragment,i),i.forEach(f),p.forEach(f),S(s.$$.fragment,r),this.h()},h(){document.title="ToDo",_(n,"class","container"),_(l,"class","mt-50")},m(r,o){g(r,e,o),g(r,l,o),k(l,n),F(t,n,null),F(s,r,o),a=!0},p:N,i(r){a||(b(t.$$.fragment,r),b(s.$$.fragment,r),a=!0)},o(r){E(t.$$.fragment,r),E(s.$$.fragment,r),a=!1},d(r){r&&f(e),r&&f(l),A(t),A(s,r)}}}class _e extends T{constructor(e){super();w(this,e,null,ue,I,{})}}export{_e as default};
