import{C as fe,S as N,i as F,s as V,e as v,t as q,c as g,a as p,g as J,d,b as h,J as O,f as E,D as I,h as K,E as D,v as C,w as S,x as A,K as Q,L as W,M as X,p as w,N as Y,O as P,n as j,A as L,m as Z,P as G,o as H,Q as _e,R as x,T as R,U as $,V as z,W as de,X as ee,Y as he,Z as me,_ as ve,j as ge,$ as pe,l as ke}from"../chunks/vendor-d493b39c.js";const te=fe([{id:1,text:"test task",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"},{id:2,text:"test task 2",done:!0,color:"#FF9900"}]);function be(o){let e,t,n,l,a,r,s;return{c(){e=v("div"),t=v("div"),n=v("p"),l=q(o[1]),a=v("div"),this.h()},l(i){e=g(i,"DIV",{class:!0});var u=p(e);t=g(u,"DIV",{class:!0});var m=p(t);n=g(m,"P",{class:!0});var b=p(n);l=J(b,o[1]),b.forEach(d),m.forEach(d),a=g(u,"DIV",{class:!0,style:!0}),p(a).forEach(d),u.forEach(d),this.h()},h(){h(n,"class","svelte-jese6r"),h(t,"class","task__main svelte-jese6r"),h(a,"class","task__menu svelte-jese6r"),h(a,"style",r=`background-color: ${o[2]!=null?o[2]:"#0029FF"}`),h(e,"class",s="task "+o[0]+" svelte-jese6r"),O(e,"isDisabled",o[3])},m(i,u){E(i,e,u),I(e,t),I(t,n),I(n,l),I(e,a)},p(i,[u]){u&2&&K(l,i[1]),u&4&&r!==(r=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`)&&h(a,"style",r),u&1&&s!==(s="task "+i[0]+" svelte-jese6r")&&h(e,"class",s),u&9&&O(e,"isDisabled",i[3])},i:D,o:D,d(i){i&&d(e)}}}function Ee(o,e,t){let{class:n=""}=e,{text:l=""}=e,{color:a=null}=e,{disabled:r=!1}=e;return o.$$set=s=>{"class"in s&&t(0,n=s.class),"text"in s&&t(1,l=s.text),"color"in s&&t(2,a=s.color),"disabled"in s&&t(3,r=s.disabled)},[n,l,a,r]}class le extends N{constructor(e){super();F(this,e,Ee,be,V,{class:0,text:1,color:2,disabled:3})}}function se(o,e,t){const n=o.slice();return n[2]=e[t],n}function ne(o,e,t){const n=o.slice();return n[2]=e[t],n}function ae(o,e){let t,n,l,a,r=D,s;return n=new le({props:{text:e[2].text,color:e[2].color?e[2].color:null}}),{key:o,first:null,c(){t=v("li"),C(n.$$.fragment),this.h()},l(i){t=g(i,"LI",{class:!0});var u=p(t);S(n.$$.fragment,u),u.forEach(d),this.h()},h(){h(t,"class","task-section__item"),this.first=t},m(i,u){E(i,t,u),A(n,t,null),s=!0},p(i,u){e=i;const m={};u&2&&(m.text=e[2].text),u&2&&(m.color=e[2].color?e[2].color:null),n.$set(m)},r(){a=t.getBoundingClientRect()},f(){Q(t),r(),W(t,a)},a(){r(),r=X(t,a,x,{duration:300})},i(i){s||(w(n.$$.fragment,i),Y(()=>{l||(l=P(t,R,{},!0)),l.run(1)}),s=!0)},o(i){j(n.$$.fragment,i),l||(l=P(t,R,{},!1)),l.run(0),s=!1},d(i){i&&d(t),L(n),i&&l&&l.end()}}}function re(o,e){let t,n,l,a,r=D,s;return n=new le({props:{text:e[2].text,color:e[2].color?e[2].color:null,disabled:!0}}),{key:o,first:null,c(){t=v("li"),C(n.$$.fragment),this.h()},l(i){t=g(i,"LI",{class:!0});var u=p(t);S(n.$$.fragment,u),u.forEach(d),this.h()},h(){h(t,"class","task-section__item"),this.first=t},m(i,u){E(i,t,u),A(n,t,null),s=!0},p(i,u){e=i;const m={};u&2&&(m.text=e[2].text),u&2&&(m.color=e[2].color?e[2].color:null),n.$set(m)},r(){a=t.getBoundingClientRect()},f(){Q(t),r(),W(t,a)},a(){r(),r=X(t,a,x,{duration:300})},i(i){s||(w(n.$$.fragment,i),Y(()=>{l||(l=P(t,R,{},!0)),l.run(1)}),s=!0)},o(i){j(n.$$.fragment,i),l||(l=P(t,R,{},!1)),l.run(0),s=!1},d(i){i&&d(t),L(n),i&&l&&l.end()}}}function Ie(o){let e,t,n,l=[],a=new Map,r,s=[],i=new Map,u,m,b=o[1].filter(ie);const U=f=>f[2].id;for(let f=0;f<b.length;f+=1){let c=ne(o,b,f),_=U(c);a.set(_,l[f]=ae(_,c))}let T=o[1].filter(oe);const k=f=>f[2].id;for(let f=0;f<T.length;f+=1){let c=se(o,T,f),_=k(c);i.set(_,s[f]=re(_,c))}return{c(){e=v("section"),t=v("div"),n=v("ul");for(let f=0;f<l.length;f+=1)l[f].c();r=v("ul");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){e=g(f,"SECTION",{class:!0});var c=p(e);t=g(c,"DIV",{class:!0});var _=p(t);n=g(_,"UL",{class:!0});var B=p(n);for(let y=0;y<l.length;y+=1)l[y].l(B);B.forEach(d),r=g(_,"UL",{class:!0});var M=p(r);for(let y=0;y<s.length;y+=1)s[y].l(M);M.forEach(d),_.forEach(d),c.forEach(d),this.h()},h(){h(n,"class","task-section__col"),h(r,"class","task-section__col"),h(t,"class","container task-section__grid svelte-ezmjle"),h(e,"class",u="task-section "+o[0]+" svelte-ezmjle")},m(f,c){E(f,e,c),I(e,t),I(t,n);for(let _=0;_<l.length;_+=1)l[_].m(n,null);I(t,r);for(let _=0;_<s.length;_+=1)s[_].m(r,null);m=!0},p(f,[c]){if(c&2){b=f[1].filter(ie),Z();for(let _=0;_<l.length;_+=1)l[_].r();l=G(l,c,U,1,f,b,a,n,$,ae,null,ne);for(let _=0;_<l.length;_+=1)l[_].a();H()}if(c&2){T=f[1].filter(oe),Z();for(let _=0;_<s.length;_+=1)s[_].r();s=G(s,c,k,1,f,T,i,r,$,re,null,se);for(let _=0;_<s.length;_+=1)s[_].a();H()}(!m||c&1&&u!==(u="task-section "+f[0]+" svelte-ezmjle"))&&h(e,"class",u)},i(f){if(!m){for(let c=0;c<b.length;c+=1)w(l[c]);for(let c=0;c<T.length;c+=1)w(s[c]);m=!0}},o(f){for(let c=0;c<l.length;c+=1)j(l[c]);for(let c=0;c<s.length;c+=1)j(s[c]);m=!1},d(f){f&&d(e);for(let c=0;c<l.length;c+=1)l[c].d();for(let c=0;c<s.length;c+=1)s[c].d()}}}const ie=o=>!o.done,oe=o=>o.done;function Te(o,e,t){let n;_e(o,te,a=>t(1,n=a));let{class:l=""}=e;return o.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,n]}class ye extends N{constructor(e){super();F(this,e,Te,Ie,V,{class:0})}}function ce(o){let e,t,n,l=o[2].text&&ue(o);return{c(){e=v("button"),l&&l.c(),this.h()},l(a){e=g(a,"BUTTON",{class:!0});var r=p(e);l&&l.l(r),r.forEach(d),this.h()},h(){h(e,"class","btn svelte-lxnxhr")},m(a,r){E(a,e,r),l&&l.m(e,null),t||(n=z(e,"click",de(o[6])),t=!0)},p(a,r){a[2].text?l?l.p(a,r):(l=ue(a),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(a){a&&d(e),l&&l.d(),t=!1,n()}}}function ue(o){let e=o[2].text+"",t;return{c(){t=q(e)},l(n){t=J(n,e)},m(n,l){E(n,t,l)},p(n,l){l&4&&e!==(e=n[2].text+"")&&K(t,e)},d(n){n&&d(t)}}}function De(o){let e,t,n,l,a,r=o[2]&&ce(o);return{c(){e=v("div"),t=v("input"),r&&r.c(),this.h()},l(s){e=g(s,"DIV",{class:!0});var i=p(e);t=g(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(d),this.h()},h(){h(t,"placeholder",o[1]),h(t,"class","svelte-lxnxhr"),h(e,"class",n="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-lxnxhr"),O(e,"isError",o[5])},m(s,i){E(s,e,i),I(e,t),ee(t,o[4]),r&&r.m(e,null),o[9](e),l||(a=[z(t,"input",o[8]),z(t,"input",o[7])],l=!0)},p(s,[i]){i&2&&h(t,"placeholder",s[1]),i&16&&t.value!==s[4]&&ee(t,s[4]),s[2]?r?r.p(s,i):(r=ce(s),r.c(),r.m(e,null)):r&&(r.d(1),r=null),i&5&&n!==(n="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-lxnxhr")&&h(e,"class",n),i&37&&O(e,"isError",s[5])},i:D,o:D,d(s){s&&d(e),r&&r.d(),o[9](null),l=!1,he(a)}}}function we(o,e,t){let{class:n=""}=e,{placeholder:l="Placeholer"}=e,{btn:a=null}=e,r,s,i=!1;const u=me(),m=()=>{s?(u("submit",{value:s}),t(4,s="")):t(5,i=!0)},b=()=>{t(5,i=!1)};function U(){s=this.value,t(4,s)}function T(k){ve[k?"unshift":"push"](()=>{r=k,t(3,r)})}return o.$$set=k=>{"class"in k&&t(0,n=k.class),"placeholder"in k&&t(1,l=k.placeholder),"btn"in k&&t(2,a=k.btn)},[n,l,a,r,s,i,m,b,U,T]}class je extends N{constructor(e){super();F(this,e,we,De,V,{class:0,placeholder:1,btn:2})}}function Ne(o){let e,t,n,l;return t=new je({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",o[1]),{c(){e=v("div"),C(t.$$.fragment),this.h()},l(a){e=g(a,"DIV",{class:!0});var r=p(e);S(t.$$.fragment,r),r.forEach(d),this.h()},h(){h(e,"class",n="add-todo "+o[0]+" svelte-xriol")},m(a,r){E(a,e,r),A(t,e,null),l=!0},p(a,[r]){(!l||r&1&&n!==(n="add-todo "+a[0]+" svelte-xriol"))&&h(e,"class",n)},i(a){l||(w(t.$$.fragment,a),l=!0)},o(a){j(t.$$.fragment,a),l=!1},d(a){a&&d(e),L(t)}}}function Fe(o,e,t){let{class:n}=e;const l=a=>{let r={id:Date.now(),text:a.detail.value,color:null,done:!1};te.update(s=>s=[r,...s]),console.log(r)};return o.$$set=a=>{"class"in a&&t(0,n=a.class)},[n,l]}class Ve extends N{constructor(e){super();F(this,e,Fe,Ne,V,{class:0})}}function Ce(o){let e,t,n,l,a,r;return l=new Ve({}),a=new ye({props:{class:"mt-50"}}),{c(){e=ge(),t=v("section"),n=v("div"),C(l.$$.fragment),C(a.$$.fragment),this.h()},l(s){pe('[data-svelte="svelte-8twn25"]',document.head).forEach(d),e=ke(s),t=g(s,"SECTION",{class:!0});var u=p(t);n=g(u,"DIV",{class:!0});var m=p(n);S(l.$$.fragment,m),m.forEach(d),u.forEach(d),S(a.$$.fragment,s),this.h()},h(){document.title="ToDo",h(n,"class","container"),h(t,"class","mt-50")},m(s,i){E(s,e,i),E(s,t,i),I(t,n),A(l,n,null),A(a,s,i),r=!0},p:D,i(s){r||(w(l.$$.fragment,s),w(a.$$.fragment,s),r=!0)},o(s){j(l.$$.fragment,s),j(a.$$.fragment,s),r=!1},d(s){s&&d(e),s&&d(t),L(l),L(a,s)}}}class Ae extends N{constructor(e){super();F(this,e,null,Ce,V,{})}}export{Ae as default};
