import{C as _e,S as V,i as F,s as S,e as g,t as j,c as k,a as b,g as J,d as m,b as v,J as q,f as y,D as I,K as M,h as K,E as C,L as Q,v as A,w as L,x as O,M as W,N as X,O as Y,p as T,P as Z,Q as z,n as N,R as G,A as U,m as H,T as $,o as x,U as de,V as ee,W as te,X as he,Y as me,Z as le,_ as ve,$ as ge,a0 as ke,j as pe,a1 as be,l as we}from"../chunks/vendor-3f07ee1b.js";const P=_e([{id:1,text:"test task 1",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"},{id:3,text:"test task 3",done:!0,color:"#FF9900"}]);function Ee(i){let e,t,s,l,r,n,a,o,c,u;return{c(){e=g("div"),t=g("div"),s=g("p"),l=j(i[1]),r=g("div"),n=g("div"),this.h()},l(f){e=k(f,"DIV",{class:!0});var p=b(e);t=k(p,"DIV",{class:!0});var E=b(t);s=k(E,"P",{class:!0});var w=b(s);l=J(w,i[1]),w.forEach(m),E.forEach(m),r=k(p,"DIV",{class:!0}),b(r).forEach(m),n=k(p,"DIV",{class:!0,style:!0}),b(n).forEach(m),p.forEach(m),this.h()},h(){v(s,"class","svelte-1ea2sbw"),v(t,"class","task__main svelte-1ea2sbw"),v(r,"class","task__circle task__menu svelte-1ea2sbw"),v(n,"class","task__circle task__circle_visible task__circle_r-t svelte-1ea2sbw"),v(n,"style",a=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",o="task "+i[0]+" svelte-1ea2sbw"),q(e,"isDisabled",i[3])},m(f,p){y(f,e,p),I(e,t),I(t,s),I(s,l),I(e,r),I(e,n),c||(u=M(t,"click",i[4]),c=!0)},p(f,[p]){p&2&&K(l,f[1]),p&4&&a!==(a=`background-color: ${f[2]!=null?f[2]:"#0029FF"}`)&&v(n,"style",a),p&1&&o!==(o="task "+f[0]+" svelte-1ea2sbw")&&v(e,"class",o),p&9&&q(e,"isDisabled",f[3])},i:C,o:C,d(f){f&&m(e),c=!1,u()}}}function ye(i,e,t){let s;Q(i,P,u=>t(6,s=u));let{class:l=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:o=null}=e;const c=()=>{let u=s.map(f=>(o===f.id&&(f.done=!f.done),f));P.set(u)};return i.$$set=u=>{"class"in u&&t(0,l=u.class),"text"in u&&t(1,r=u.text),"color"in u&&t(2,n=u.color),"disabled"in u&&t(3,a=u.disabled),"id"in u&&t(5,o=u.id)},[l,r,n,a,c,o]}class se extends V{constructor(e){super();F(this,e,ye,Ee,S,{class:0,text:1,color:2,disabled:3,id:5})}}function ae(i,e,t){const s=i.slice();return s[4]=e[t],s}function ne(i,e,t){const s=i.slice();return s[4]=e[t],s}function ie(i,e){let t,s,l,r,n,a=C,o;return s=new se({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=g("li"),A(s.$$.fragment),this.h()},l(c){t=k(c,"LI",{class:!0});var u=b(t);L(s.$$.fragment,u),u.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,u){y(c,t,u),O(s,t,null),o=!0},p(c,u){e=c;const f={};u&2&&(f.text=e[4].text),u&2&&(f.color=e[4].color?e[4].color:null),u&2&&(f.id=e[4].id),s.$set(f)},r(){n=t.getBoundingClientRect()},f(){W(t),a(),X(t,n)},a(){a(),a=Y(t,n,ee,{duration:300})},i(c){o||(T(s.$$.fragment,c),Z(()=>{r&&r.end(1),l=z(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(c){N(s.$$.fragment,c),l&&l.invalidate(),r=G(t,e[2],{key:e[4].id}),o=!1},d(c){c&&m(t),U(s),c&&r&&r.end()}}}function re(i,e){let t,s,l,r,n,a=C,o;return s=new se({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=g("li"),A(s.$$.fragment),this.h()},l(c){t=k(c,"LI",{class:!0});var u=b(t);L(s.$$.fragment,u),u.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,u){y(c,t,u),O(s,t,null),o=!0},p(c,u){e=c;const f={};u&2&&(f.text=e[4].text),u&2&&(f.color=e[4].color?e[4].color:null),u&2&&(f.id=e[4].id),s.$set(f)},r(){n=t.getBoundingClientRect()},f(){W(t),a(),X(t,n)},a(){a(),a=Y(t,n,ee,{duration:300})},i(c){o||(T(s.$$.fragment,c),Z(()=>{r&&r.end(1),l=z(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(c){N(s.$$.fragment,c),l&&l.invalidate(),r=G(t,e[2],{key:e[4].id}),o=!1},d(c){c&&m(t),U(s),c&&r&&r.end()}}}function Ie(i){let e,t,s,l=[],r=new Map,n,a=[],o=new Map,c,u,f=i[1].filter(oe);const p=d=>d[4].id;for(let d=0;d<f.length;d+=1){let _=ne(i,f,d),h=p(_);r.set(h,l[d]=ie(h,_))}let E=i[1].filter(ce);const w=d=>d[4].id;for(let d=0;d<E.length;d+=1){let _=ae(i,E,d),h=w(_);o.set(h,a[d]=re(h,_))}return{c(){e=g("section"),t=g("div"),s=g("ul");for(let d=0;d<l.length;d+=1)l[d].c();n=g("ul");for(let d=0;d<a.length;d+=1)a[d].c();this.h()},l(d){e=k(d,"SECTION",{class:!0});var _=b(e);t=k(_,"DIV",{class:!0});var h=b(t);s=k(h,"UL",{class:!0});var R=b(s);for(let D=0;D<l.length;D+=1)l[D].l(R);R.forEach(m),n=k(h,"UL",{class:!0});var B=b(n);for(let D=0;D<a.length;D+=1)a[D].l(B);B.forEach(m),h.forEach(m),_.forEach(m),this.h()},h(){v(s,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-v0wwi"),v(e,"class",c="task-section "+i[0]+" svelte-v0wwi")},m(d,_){y(d,e,_),I(e,t),I(t,s);for(let h=0;h<l.length;h+=1)l[h].m(s,null);I(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);u=!0},p(d,[_]){if(_&2){f=d[1].filter(oe),H();for(let h=0;h<l.length;h+=1)l[h].r();l=$(l,_,p,1,d,f,r,s,te,ie,null,ne);for(let h=0;h<l.length;h+=1)l[h].a();x()}if(_&2){E=d[1].filter(ce),H();for(let h=0;h<a.length;h+=1)a[h].r();a=$(a,_,w,1,d,E,o,n,te,re,null,ae);for(let h=0;h<a.length;h+=1)a[h].a();x()}(!u||_&1&&c!==(c="task-section "+d[0]+" svelte-v0wwi"))&&v(e,"class",c)},i(d){if(!u){for(let _=0;_<f.length;_+=1)T(l[_]);for(let _=0;_<E.length;_+=1)T(a[_]);u=!0}},o(d){for(let _=0;_<l.length;_+=1)N(l[_]);for(let _=0;_<a.length;_+=1)N(a[_]);u=!1},d(d){d&&m(e);for(let _=0;_<l.length;_+=1)l[_].d();for(let _=0;_<a.length;_+=1)a[_].d()}}}const oe=i=>!i.done,ce=i=>i.done;function De(i,e,t){let s;Q(i,P,a=>t(1,s=a));let{class:l=""}=e;const[r,n]=de({duration:a=>Math.sqrt(a*200),fallback(a,o){const c=getComputedStyle(a),u=c.transform==="none"?"":c.transform;return{duration:600,easing:he,css:f=>`
					transform: ${u} scale(${f});
					opacity: ${f}
				`}}});return i.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,s,r,n]}class Te extends V{constructor(e){super();F(this,e,De,Ie,S,{class:0})}}function ue(i){let e,t,s,l=i[2].text&&fe(i);return{c(){e=g("button"),l&&l.c(),this.h()},l(r){e=k(r,"BUTTON",{class:!0});var n=b(e);l&&l.l(n),n.forEach(m),this.h()},h(){v(e,"class","btn svelte-lxnxhr")},m(r,n){y(r,e,n),l&&l.m(e,null),t||(s=M(e,"click",me(i[6])),t=!0)},p(r,n){r[2].text?l?l.p(r,n):(l=fe(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&m(e),l&&l.d(),t=!1,s()}}}function fe(i){let e=i[2].text+"",t;return{c(){t=j(e)},l(s){t=J(s,e)},m(s,l){y(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&K(t,e)},d(s){s&&m(t)}}}function Ne(i){let e,t,s,l,r,n=i[2]&&ue(i);return{c(){e=g("div"),t=g("input"),n&&n.c(),this.h()},l(a){e=k(a,"DIV",{class:!0});var o=b(e);t=k(o,"INPUT",{placeholder:!0,class:!0}),n&&n.l(o),o.forEach(m),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-lxnxhr"),v(e,"class",s="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-lxnxhr"),q(e,"isError",i[5])},m(a,o){y(a,e,o),I(e,t),le(t,i[4]),n&&n.m(e,null),i[9](e),l||(r=[M(t,"input",i[8]),M(t,"input",i[7])],l=!0)},p(a,[o]){o&2&&v(t,"placeholder",a[1]),o&16&&t.value!==a[4]&&le(t,a[4]),a[2]?n?n.p(a,o):(n=ue(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-lxnxhr")&&v(e,"class",s),o&37&&q(e,"isError",a[5])},i:C,o:C,d(a){a&&m(e),n&&n.d(),i[9](null),l=!1,ve(r)}}}function Ce(i,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:r=null}=e,n,a,o=!1;const c=ge(),u=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,o=!0)},f=()=>{t(5,o=!1)};function p(){a=this.value,t(4,a)}function E(w){ke[w?"unshift":"push"](()=>{n=w,t(3,n)})}return i.$$set=w=>{"class"in w&&t(0,s=w.class),"placeholder"in w&&t(1,l=w.placeholder),"btn"in w&&t(2,r=w.btn)},[s,l,r,n,a,o,u,f,p,E]}class Ve extends V{constructor(e){super();F(this,e,Ce,Ne,S,{class:0,placeholder:1,btn:2})}}function Fe(i){let e,t,s,l;return t=new Ve({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=g("div"),A(t.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var n=b(e);L(t.$$.fragment,n),n.forEach(m),this.h()},h(){v(e,"class",s="add-todo "+i[0]+" svelte-xriol")},m(r,n){y(r,e,n),O(t,e,null),l=!0},p(r,[n]){(!l||n&1&&s!==(s="add-todo "+r[0]+" svelte-xriol"))&&v(e,"class",s)},i(r){l||(T(t.$$.fragment,r),l=!0)},o(r){N(t.$$.fragment,r),l=!1},d(r){r&&m(e),U(t)}}}function Se(i,e,t){let{class:s=""}=e;const l=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};P.update(a=>a=[n,...a])};return i.$$set=r=>{"class"in r&&t(0,s=r.class)},[s,l]}class Ae extends V{constructor(e){super();F(this,e,Se,Fe,S,{class:0})}}function Le(i){let e,t,s,l,r,n,a;return l=new Ae({}),n=new Te({props:{class:"mt-50"}}),{c(){e=pe(),t=g("section"),s=g("div"),A(l.$$.fragment),A(n.$$.fragment),this.h()},l(o){be('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=we(o),t=k(o,"SECTION",{class:!0});var u=b(t);s=k(u,"DIV",{class:!0});var f=b(s);L(l.$$.fragment,f),f.forEach(m),u.forEach(m),L(n.$$.fragment,o),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(s,"class","container"),v(t,"class",r=""+(i[0]+" mt-50 svelte-xriol"))},m(o,c){y(o,e,c),y(o,t,c),I(t,s),O(l,s,null),O(n,o,c),a=!0},p(o,[c]){(!a||c&1&&r!==(r=""+(o[0]+" mt-50 svelte-xriol")))&&v(t,"class",r)},i(o){a||(T(l.$$.fragment,o),T(n.$$.fragment,o),a=!0)},o(o){N(l.$$.fragment,o),N(n.$$.fragment,o),a=!1},d(o){o&&m(e),o&&m(t),U(l),U(n,o)}}}function Oe(i,e,t){let{class:s=""}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class qe extends V{constructor(e){super();F(this,e,Oe,Le,S,{class:0})}}export{qe as default};
