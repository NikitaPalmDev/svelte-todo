import{C as fe,S as F,i as C,s as S,e as m,t as q,c as g,a as k,g as J,d as h,b as v,J as O,f as E,D as I,h as K,E as w,v as j,w as A,x as L,K as Q,L as W,M as X,p as N,N as Y,O as P,n as V,A as U,m as Z,P as G,o as H,Q as _e,R as x,T as R,U as $,V as z,W as de,X as ee,Y as he,Z as ve,_ as me,j as ge,$ as ke,l as pe}from"../chunks/vendor-d493b39c.js";const te=fe([{id:1,text:"test task",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"},{id:2,text:"test task 2",done:!0,color:"#FF9900"}]);function be(i){let e,t,n,l,r,a,s,o;return{c(){e=m("div"),t=m("div"),n=m("p"),l=q(i[1]),r=m("div"),a=m("div"),this.h()},l(u){e=g(u,"DIV",{class:!0});var d=k(e);t=g(d,"DIV",{class:!0});var b=k(t);n=g(b,"P",{class:!0});var D=k(n);l=J(D,i[1]),D.forEach(h),r=g(b,"DIV",{class:!0}),k(r).forEach(h),b.forEach(h),a=g(d,"DIV",{class:!0,style:!0}),k(a).forEach(h),d.forEach(h),this.h()},h(){v(n,"class","svelte-grfv80"),v(r,"class","task__circle svelte-grfv80"),v(t,"class","task__main svelte-grfv80"),v(a,"class","task__circle task__circle_visible task__circle_r-t svelte-grfv80"),v(a,"style",s=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",o="task "+i[0]+" svelte-grfv80"),O(e,"isDisabled",i[3])},m(u,d){E(u,e,d),I(e,t),I(t,n),I(n,l),I(t,r),I(e,a)},p(u,[d]){d&2&&K(l,u[1]),d&4&&s!==(s=`background-color: ${u[2]!=null?u[2]:"#0029FF"}`)&&v(a,"style",s),d&1&&o!==(o="task "+u[0]+" svelte-grfv80")&&v(e,"class",o),d&9&&O(e,"isDisabled",u[3])},i:w,o:w,d(u){u&&h(e)}}}function Ee(i,e,t){let{class:n=""}=e,{text:l=""}=e,{color:r=null}=e,{disabled:a=!1}=e;return i.$$set=s=>{"class"in s&&t(0,n=s.class),"text"in s&&t(1,l=s.text),"color"in s&&t(2,r=s.color),"disabled"in s&&t(3,a=s.disabled)},[n,l,r,a]}class le extends F{constructor(e){super();C(this,e,Ee,be,S,{class:0,text:1,color:2,disabled:3})}}function se(i,e,t){const n=i.slice();return n[2]=e[t],n}function ne(i,e,t){const n=i.slice();return n[2]=e[t],n}function ae(i,e){let t,n,l,r,a=w,s;return n=new le({props:{text:e[2].text,color:e[2].color?e[2].color:null}}),{key:i,first:null,c(){t=m("li"),j(n.$$.fragment),this.h()},l(o){t=g(o,"LI",{class:!0});var u=k(t);A(n.$$.fragment,u),u.forEach(h),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(o,u){E(o,t,u),L(n,t,null),s=!0},p(o,u){e=o;const d={};u&2&&(d.text=e[2].text),u&2&&(d.color=e[2].color?e[2].color:null),n.$set(d)},r(){r=t.getBoundingClientRect()},f(){Q(t),a(),W(t,r)},a(){a(),a=X(t,r,x,{duration:300})},i(o){s||(N(n.$$.fragment,o),Y(()=>{l||(l=P(t,R,{},!0)),l.run(1)}),s=!0)},o(o){V(n.$$.fragment,o),l||(l=P(t,R,{},!1)),l.run(0),s=!1},d(o){o&&h(t),U(n),o&&l&&l.end()}}}function re(i,e){let t,n,l,r,a=w,s;return n=new le({props:{text:e[2].text,color:e[2].color?e[2].color:null,disabled:!0}}),{key:i,first:null,c(){t=m("li"),j(n.$$.fragment),this.h()},l(o){t=g(o,"LI",{class:!0});var u=k(t);A(n.$$.fragment,u),u.forEach(h),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(o,u){E(o,t,u),L(n,t,null),s=!0},p(o,u){e=o;const d={};u&2&&(d.text=e[2].text),u&2&&(d.color=e[2].color?e[2].color:null),n.$set(d)},r(){r=t.getBoundingClientRect()},f(){Q(t),a(),W(t,r)},a(){a(),a=X(t,r,x,{duration:300})},i(o){s||(N(n.$$.fragment,o),Y(()=>{l||(l=P(t,R,{},!0)),l.run(1)}),s=!0)},o(o){V(n.$$.fragment,o),l||(l=P(t,R,{},!1)),l.run(0),s=!1},d(o){o&&h(t),U(n),o&&l&&l.end()}}}function Ie(i){let e,t,n,l=[],r=new Map,a,s=[],o=new Map,u,d,b=i[1].filter(ie);const D=f=>f[2].id;for(let f=0;f<b.length;f+=1){let c=ne(i,b,f),_=D(c);r.set(_,l[f]=ae(_,c))}let T=i[1].filter(oe);const p=f=>f[2].id;for(let f=0;f<T.length;f+=1){let c=se(i,T,f),_=p(c);o.set(_,s[f]=re(_,c))}return{c(){e=m("section"),t=m("div"),n=m("ul");for(let f=0;f<l.length;f+=1)l[f].c();a=m("ul");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){e=g(f,"SECTION",{class:!0});var c=k(e);t=g(c,"DIV",{class:!0});var _=k(t);n=g(_,"UL",{class:!0});var B=k(n);for(let y=0;y<l.length;y+=1)l[y].l(B);B.forEach(h),a=g(_,"UL",{class:!0});var M=k(a);for(let y=0;y<s.length;y+=1)s[y].l(M);M.forEach(h),_.forEach(h),c.forEach(h),this.h()},h(){v(n,"class","task-section__col"),v(a,"class","task-section__col"),v(t,"class","container task-section__grid svelte-ezmjle"),v(e,"class",u="task-section "+i[0]+" svelte-ezmjle")},m(f,c){E(f,e,c),I(e,t),I(t,n);for(let _=0;_<l.length;_+=1)l[_].m(n,null);I(t,a);for(let _=0;_<s.length;_+=1)s[_].m(a,null);d=!0},p(f,[c]){if(c&2){b=f[1].filter(ie),Z();for(let _=0;_<l.length;_+=1)l[_].r();l=G(l,c,D,1,f,b,r,n,$,ae,null,ne);for(let _=0;_<l.length;_+=1)l[_].a();H()}if(c&2){T=f[1].filter(oe),Z();for(let _=0;_<s.length;_+=1)s[_].r();s=G(s,c,p,1,f,T,o,a,$,re,null,se);for(let _=0;_<s.length;_+=1)s[_].a();H()}(!d||c&1&&u!==(u="task-section "+f[0]+" svelte-ezmjle"))&&v(e,"class",u)},i(f){if(!d){for(let c=0;c<b.length;c+=1)N(l[c]);for(let c=0;c<T.length;c+=1)N(s[c]);d=!0}},o(f){for(let c=0;c<l.length;c+=1)V(l[c]);for(let c=0;c<s.length;c+=1)V(s[c]);d=!1},d(f){f&&h(e);for(let c=0;c<l.length;c+=1)l[c].d();for(let c=0;c<s.length;c+=1)s[c].d()}}}const ie=i=>!i.done,oe=i=>i.done;function De(i,e,t){let n;_e(i,te,r=>t(1,n=r));let{class:l=""}=e;return i.$$set=r=>{"class"in r&&t(0,l=r.class)},[l,n]}class Te extends F{constructor(e){super();C(this,e,De,Ie,S,{class:0})}}function ce(i){let e,t,n,l=i[2].text&&ue(i);return{c(){e=m("button"),l&&l.c(),this.h()},l(r){e=g(r,"BUTTON",{class:!0});var a=k(e);l&&l.l(a),a.forEach(h),this.h()},h(){v(e,"class","btn svelte-lxnxhr")},m(r,a){E(r,e,a),l&&l.m(e,null),t||(n=z(e,"click",de(i[6])),t=!0)},p(r,a){r[2].text?l?l.p(r,a):(l=ue(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&h(e),l&&l.d(),t=!1,n()}}}function ue(i){let e=i[2].text+"",t;return{c(){t=q(e)},l(n){t=J(n,e)},m(n,l){E(n,t,l)},p(n,l){l&4&&e!==(e=n[2].text+"")&&K(t,e)},d(n){n&&h(t)}}}function ye(i){let e,t,n,l,r,a=i[2]&&ce(i);return{c(){e=m("div"),t=m("input"),a&&a.c(),this.h()},l(s){e=g(s,"DIV",{class:!0});var o=k(e);t=g(o,"INPUT",{placeholder:!0,class:!0}),a&&a.l(o),o.forEach(h),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-lxnxhr"),v(e,"class",n="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-lxnxhr"),O(e,"isError",i[5])},m(s,o){E(s,e,o),I(e,t),ee(t,i[4]),a&&a.m(e,null),i[9](e),l||(r=[z(t,"input",i[8]),z(t,"input",i[7])],l=!0)},p(s,[o]){o&2&&v(t,"placeholder",s[1]),o&16&&t.value!==s[4]&&ee(t,s[4]),s[2]?a?a.p(s,o):(a=ce(s),a.c(),a.m(e,null)):a&&(a.d(1),a=null),o&5&&n!==(n="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-lxnxhr")&&v(e,"class",n),o&37&&O(e,"isError",s[5])},i:w,o:w,d(s){s&&h(e),a&&a.d(),i[9](null),l=!1,he(r)}}}function we(i,e,t){let{class:n=""}=e,{placeholder:l="Placeholer"}=e,{btn:r=null}=e,a,s,o=!1;const u=ve(),d=()=>{s?(u("submit",{value:s}),t(4,s="")):t(5,o=!0)},b=()=>{t(5,o=!1)};function D(){s=this.value,t(4,s)}function T(p){me[p?"unshift":"push"](()=>{a=p,t(3,a)})}return i.$$set=p=>{"class"in p&&t(0,n=p.class),"placeholder"in p&&t(1,l=p.placeholder),"btn"in p&&t(2,r=p.btn)},[n,l,r,a,s,o,d,b,D,T]}class Ne extends F{constructor(e){super();C(this,e,we,ye,S,{class:0,placeholder:1,btn:2})}}function Ve(i){let e,t,n,l;return t=new Ne({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=m("div"),j(t.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0});var a=k(e);A(t.$$.fragment,a),a.forEach(h),this.h()},h(){v(e,"class",n="add-todo "+i[0]+" svelte-xriol")},m(r,a){E(r,e,a),L(t,e,null),l=!0},p(r,[a]){(!l||a&1&&n!==(n="add-todo "+r[0]+" svelte-xriol"))&&v(e,"class",n)},i(r){l||(N(t.$$.fragment,r),l=!0)},o(r){V(t.$$.fragment,r),l=!1},d(r){r&&h(e),U(t)}}}function Fe(i,e,t){let{class:n}=e;const l=r=>{let a={id:Date.now(),text:r.detail.value,color:null,done:!1};te.update(s=>s=[a,...s]),console.log(a)};return i.$$set=r=>{"class"in r&&t(0,n=r.class)},[n,l]}class Ce extends F{constructor(e){super();C(this,e,Fe,Ve,S,{class:0})}}function Se(i){let e,t,n,l,r,a;return l=new Ce({}),r=new Te({props:{class:"mt-50"}}),{c(){e=ge(),t=m("section"),n=m("div"),j(l.$$.fragment),j(r.$$.fragment),this.h()},l(s){ke('[data-svelte="svelte-8twn25"]',document.head).forEach(h),e=pe(s),t=g(s,"SECTION",{class:!0});var u=k(t);n=g(u,"DIV",{class:!0});var d=k(n);A(l.$$.fragment,d),d.forEach(h),u.forEach(h),A(r.$$.fragment,s),this.h()},h(){document.title="ToDo",v(n,"class","container"),v(t,"class","mt-50")},m(s,o){E(s,e,o),E(s,t,o),I(t,n),L(l,n,null),L(r,s,o),a=!0},p:w,i(s){a||(N(l.$$.fragment,s),N(r.$$.fragment,s),a=!0)},o(s){V(l.$$.fragment,s),V(r.$$.fragment,s),a=!1},d(s){s&&h(e),s&&h(t),U(l),U(r,s)}}}class Ae extends F{constructor(e){super();C(this,e,null,Se,S,{})}}export{Ae as default};
