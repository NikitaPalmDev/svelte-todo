import{C as X,S as y,i as T,s as I,e as m,t as U,c as v,a as k,g as L,d as _,b as d,f as b,D as E,h as O,J as x,K as P,L as z,k as q,v as D,w as S,x as F,p as w,n as N,A as V,m as G,M as H,o as Y,N as Z,O as $,P as A,Q as ee,R as M,T as R,E as C,U as te,V as se,W as le,j as ae,X as ne,l as re}from"../chunks/vendor-7ebd48e4.js";const B=X([{id:1,text:"test task",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"}]);function oe(o){let e,t,n,s,l,a,r,i;return{c(){e=m("li"),t=m("p"),n=U(o[1]),s=m("div"),this.h()},l(f){e=v(f,"LI",{class:!0});var h=k(e);t=v(h,"P",{class:!0});var c=k(t);n=L(c,o[1]),c.forEach(_),s=v(h,"DIV",{class:!0,style:!0}),k(s).forEach(_),h.forEach(_),this.h()},h(){d(t,"class","svelte-1s64vcb"),d(s,"class","task__menu svelte-1s64vcb"),d(s,"style",l=`background-color: ${o[2]!=null?o[2]:"#0029FF"}`),d(e,"class",a="task "+o[0]+" svelte-1s64vcb")},m(f,h){b(f,e,h),E(e,t),E(t,n),E(e,s),i=!0},p(f,[h]){(!i||h&2)&&O(n,f[1]),(!i||h&4&&l!==(l=`background-color: ${f[2]!=null?f[2]:"#0029FF"}`))&&d(s,"style",l),(!i||h&1&&a!==(a="task "+f[0]+" svelte-1s64vcb"))&&d(e,"class",a)},i(f){i||(x(()=>{r||(r=P(e,z,{},!0)),r.run(1)}),i=!0)},o(f){r||(r=P(e,z,{},!1)),r.run(0),i=!1},d(f){f&&_(e),f&&r&&r.end()}}}function ie(o,e,t){let{class:n}=e,{text:s=""}=e,{color:l=null}=e;return o.$$set=a=>{"class"in a&&t(0,n=a.class),"text"in a&&t(1,s=a.text),"color"in a&&t(2,l=a.color)},[n,s,l]}class ce extends y{constructor(e){super();T(this,e,ie,oe,I,{class:0,text:1,color:2})}}function J(o,e,t){const n=o.slice();return n[2]=e[t],n}function K(o,e){let t,n,s;return n=new ce({props:{class:"task-section__item",text:e[2].text,color:e[2].color?e[2].color:null}}),{key:o,first:null,c(){t=q(),D(n.$$.fragment),this.h()},l(l){t=q(),S(n.$$.fragment,l),this.h()},h(){this.first=t},m(l,a){b(l,t,a),F(n,l,a),s=!0},p(l,a){e=l;const r={};a&2&&(r.text=e[2].text),a&2&&(r.color=e[2].color?e[2].color:null),n.$set(r)},i(l){s||(w(n.$$.fragment,l),s=!0)},o(l){N(n.$$.fragment,l),s=!1},d(l){l&&_(t),V(n,l)}}}function ue(o){let e,t,n,s=[],l=new Map,a,r,i,f=o[1];const h=c=>c[2].id;for(let c=0;c<f.length;c+=1){let u=J(o,f,c),p=h(u);l.set(p,s[c]=K(p,u))}return{c(){e=m("section"),t=m("div"),n=m("ul");for(let c=0;c<s.length;c+=1)s[c].c();a=m("ul"),this.h()},l(c){e=v(c,"SECTION",{class:!0});var u=k(e);t=v(u,"DIV",{class:!0});var p=k(t);n=v(p,"UL",{class:!0});var g=k(n);for(let j=0;j<s.length;j+=1)s[j].l(g);g.forEach(_),a=v(p,"UL",{class:!0}),k(a).forEach(_),p.forEach(_),u.forEach(_),this.h()},h(){d(n,"class","task-section__col"),d(a,"class","task-section__col"),d(t,"class","container task-section__grid svelte-ezmjle"),d(e,"class",r="task-section "+o[0]+" svelte-ezmjle")},m(c,u){b(c,e,u),E(e,t),E(t,n);for(let p=0;p<s.length;p+=1)s[p].m(n,null);E(t,a),i=!0},p(c,[u]){u&2&&(f=c[1],G(),s=H(s,u,h,1,c,f,l,n,$,K,null,J),Y()),(!i||u&1&&r!==(r="task-section "+c[0]+" svelte-ezmjle"))&&d(e,"class",r)},i(c){if(!i){for(let u=0;u<f.length;u+=1)w(s[u]);i=!0}},o(c){for(let u=0;u<s.length;u+=1)N(s[u]);i=!1},d(c){c&&_(e);for(let u=0;u<s.length;u+=1)s[u].d()}}}function fe(o,e,t){let n;Z(o,B,l=>t(1,n=l));let{class:s}=e;return o.$$set=l=>{"class"in l&&t(0,s=l.class)},[s,n]}class _e extends y{constructor(e){super();T(this,e,fe,ue,I,{class:0})}}function Q(o){let e,t,n,s=o[2].text&&W(o);return{c(){e=m("button"),s&&s.c(),this.h()},l(l){e=v(l,"BUTTON",{class:!0});var a=k(e);s&&s.l(a),a.forEach(_),this.h()},h(){d(e,"class","btn svelte-lxnxhr")},m(l,a){b(l,e,a),s&&s.m(e,null),t||(n=A(e,"click",ee(o[6])),t=!0)},p(l,a){l[2].text?s?s.p(l,a):(s=W(l),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(l){l&&_(e),s&&s.d(),t=!1,n()}}}function W(o){let e=o[2].text+"",t;return{c(){t=U(e)},l(n){t=L(n,e)},m(n,s){b(n,t,s)},p(n,s){s&4&&e!==(e=n[2].text+"")&&O(t,e)},d(n){n&&_(t)}}}function de(o){let e,t,n,s,l,a=o[2]&&Q(o);return{c(){e=m("div"),t=m("input"),a&&a.c(),this.h()},l(r){e=v(r,"DIV",{class:!0});var i=k(e);t=v(i,"INPUT",{placeholder:!0,class:!0}),a&&a.l(i),i.forEach(_),this.h()},h(){d(t,"placeholder",o[1]),d(t,"class","svelte-lxnxhr"),d(e,"class",n="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-lxnxhr"),M(e,"isError",o[5])},m(r,i){b(r,e,i),E(e,t),R(t,o[4]),a&&a.m(e,null),o[9](e),s||(l=[A(t,"input",o[8]),A(t,"input",o[7])],s=!0)},p(r,[i]){i&2&&d(t,"placeholder",r[1]),i&16&&t.value!==r[4]&&R(t,r[4]),r[2]?a?a.p(r,i):(a=Q(r),a.c(),a.m(e,null)):a&&(a.d(1),a=null),i&5&&n!==(n="input-group "+r[0]+" "+(r[2]?"input-group_btn":"")+" svelte-lxnxhr")&&d(e,"class",n),i&37&&M(e,"isError",r[5])},i:C,o:C,d(r){r&&_(e),a&&a.d(),o[9](null),s=!1,te(l)}}}function he(o,e,t){let{class:n}=e,{placeholder:s="Placeholer"}=e,{btn:l=null}=e,a,r,i=!1;const f=se(),h=()=>{r?(f("submit",{value:r}),t(4,r="")):t(5,i=!0)},c=()=>{t(5,i=!1)};function u(){r=this.value,t(4,r)}function p(g){le[g?"unshift":"push"](()=>{a=g,t(3,a)})}return o.$$set=g=>{"class"in g&&t(0,n=g.class),"placeholder"in g&&t(1,s=g.placeholder),"btn"in g&&t(2,l=g.btn)},[n,s,l,a,r,i,h,c,u,p]}class me extends y{constructor(e){super();T(this,e,he,de,I,{class:0,placeholder:1,btn:2})}}function ve(o){let e,t,n,s;return t=new me({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",o[1]),{c(){e=m("div"),D(t.$$.fragment),this.h()},l(l){e=v(l,"DIV",{class:!0});var a=k(e);S(t.$$.fragment,a),a.forEach(_),this.h()},h(){d(e,"class",n="add-todo "+o[0]+" svelte-xriol")},m(l,a){b(l,e,a),F(t,e,null),s=!0},p(l,[a]){(!s||a&1&&n!==(n="add-todo "+l[0]+" svelte-xriol"))&&d(e,"class",n)},i(l){s||(w(t.$$.fragment,l),s=!0)},o(l){N(t.$$.fragment,l),s=!1},d(l){l&&_(e),V(t)}}}function pe(o,e,t){let{class:n}=e;const s=l=>{let a={text:l.detail.value,color:null,done:!1};B.update(r=>r=[a,...r]),console.log(a)};return o.$$set=l=>{"class"in l&&t(0,n=l.class)},[n,s]}class ge extends y{constructor(e){super();T(this,e,pe,ve,I,{class:0})}}function ke(o){let e,t,n,s,l,a;return s=new ge({}),l=new _e({props:{class:"mt-50"}}),{c(){e=ae(),t=m("section"),n=m("div"),D(s.$$.fragment),D(l.$$.fragment),this.h()},l(r){ne('[data-svelte="svelte-8twn25"]',document.head).forEach(_),e=re(r),t=v(r,"SECTION",{class:!0});var f=k(t);n=v(f,"DIV",{class:!0});var h=k(n);S(s.$$.fragment,h),h.forEach(_),f.forEach(_),S(l.$$.fragment,r),this.h()},h(){document.title="ToDo",d(n,"class","container"),d(t,"class","mt-50")},m(r,i){b(r,e,i),b(r,t,i),E(t,n),F(s,n,null),F(l,r,i),a=!0},p:C,i(r){a||(w(s.$$.fragment,r),w(l.$$.fragment,r),a=!0)},o(r){N(s.$$.fragment,r),N(l.$$.fragment,r),a=!1},d(r){r&&_(e),r&&_(t),V(s),V(l,r)}}}class Ee extends y{constructor(e){super();T(this,e,null,ke,I,{})}}export{Ee as default};
