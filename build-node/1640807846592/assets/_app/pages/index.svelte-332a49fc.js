import{C as _e,S,i as V,s as A,e as p,t as j,c as b,a as E,g as K,d as m,b as v,K as P,f as I,D as y,L as B,h as Q,E as N,M as W,v as F,w as O,x as U,N as X,O as Y,P as Z,p as q,Q as z,R as G,n as w,T as H,A as L,m as J,U as $,o as x,V as de,W as ee,X as te,Y as he,Z as me,_ as le,$ as ve,a0 as ge,a1 as ke,j as pe,a2 as be,l as Ee}from"../chunks/vendor-697af2bf.js";const M=_e([{id:1,text:"test task 1",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"},{id:3,text:"test task 3",done:!0,color:"#FF9900"}]);function ye(i){let e,t,s,l,r,a,n,o,u,c,h,T;return{c(){e=p("div"),t=p("div"),s=p("p"),l=j(i[1]),r=p("div"),a=p("button"),n=p("span"),o=p("div"),this.h()},l(k){e=b(k,"DIV",{class:!0});var g=E(e);t=b(g,"DIV",{class:!0});var _=E(t);s=b(_,"P",{class:!0});var f=E(s);l=K(f,i[1]),f.forEach(m),_.forEach(m),r=b(g,"DIV",{class:!0});var d=E(r);a=b(d,"BUTTON",{class:!0});var C=E(a);n=b(C,"SPAN",{class:!0}),E(n).forEach(m),C.forEach(m),d.forEach(m),o=b(g,"DIV",{class:!0,style:!0}),E(o).forEach(m),g.forEach(m),this.h()},h(){v(s,"class","svelte-1nn45qg"),v(t,"class","task__main svelte-1nn45qg"),v(n,"class","svg-image-del svelte-1nn45qg"),v(a,"class","task__menu-btn svelte-1nn45qg"),v(r,"class","task__circle task__menu svelte-1nn45qg"),v(o,"class","task__circle task__circle_visible task__circle_r-t svelte-1nn45qg"),v(o,"style",u=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",c="task "+i[0]+" svelte-1nn45qg"),P(e,"isDisabled",i[3])},m(k,g){I(k,e,g),y(e,t),y(t,s),y(s,l),y(e,r),y(r,a),y(a,n),y(e,o),h||(T=B(t,"click",i[4]),h=!0)},p(k,[g]){g&2&&Q(l,k[1]),g&4&&u!==(u=`background-color: ${k[2]!=null?k[2]:"#0029FF"}`)&&v(o,"style",u),g&1&&c!==(c="task "+k[0]+" svelte-1nn45qg")&&v(e,"class",c),g&9&&P(e,"isDisabled",k[3])},i:N,o:N,d(k){k&&m(e),h=!1,T()}}}function Ie(i,e,t){let s;W(i,M,c=>t(6,s=c));let{class:l=""}=e,{text:r=""}=e,{color:a=null}=e,{disabled:n=!1}=e,{id:o=null}=e;const u=()=>{let c=s.map(h=>(o===h.id&&(h.done=!h.done),h));M.set(c)};return i.$$set=c=>{"class"in c&&t(0,l=c.class),"text"in c&&t(1,r=c.text),"color"in c&&t(2,a=c.color),"disabled"in c&&t(3,n=c.disabled),"id"in c&&t(5,o=c.id)},[l,r,a,n,u,o]}class se extends S{constructor(e){super();V(this,e,Ie,ye,A,{class:0,text:1,color:2,disabled:3,id:5})}}function ne(i,e,t){const s=i.slice();return s[4]=e[t],s}function ae(i,e,t){const s=i.slice();return s[4]=e[t],s}function ie(i,e){let t,s,l,r,a,n=N,o;return s=new se({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=p("li"),F(s.$$.fragment),this.h()},l(u){t=b(u,"LI",{class:!0});var c=E(t);O(s.$$.fragment,c),c.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,c){I(u,t,c),U(s,t,null),o=!0},p(u,c){e=u;const h={};c&2&&(h.text=e[4].text),c&2&&(h.color=e[4].color?e[4].color:null),c&2&&(h.id=e[4].id),s.$set(h)},r(){a=t.getBoundingClientRect()},f(){X(t),n(),Y(t,a)},a(){n(),n=Z(t,a,ee,{duration:300})},i(u){o||(q(s.$$.fragment,u),z(()=>{r&&r.end(1),l=G(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(u){w(s.$$.fragment,u),l&&l.invalidate(),r=H(t,e[2],{key:e[4].id}),o=!1},d(u){u&&m(t),L(s),u&&r&&r.end()}}}function re(i,e){let t,s,l,r,a,n=N,o;return s=new se({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=p("li"),F(s.$$.fragment),this.h()},l(u){t=b(u,"LI",{class:!0});var c=E(t);O(s.$$.fragment,c),c.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,c){I(u,t,c),U(s,t,null),o=!0},p(u,c){e=u;const h={};c&2&&(h.text=e[4].text),c&2&&(h.color=e[4].color?e[4].color:null),c&2&&(h.id=e[4].id),s.$set(h)},r(){a=t.getBoundingClientRect()},f(){X(t),n(),Y(t,a)},a(){n(),n=Z(t,a,ee,{duration:300})},i(u){o||(q(s.$$.fragment,u),z(()=>{r&&r.end(1),l=G(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(u){w(s.$$.fragment,u),l&&l.invalidate(),r=H(t,e[2],{key:e[4].id}),o=!1},d(u){u&&m(t),L(s),u&&r&&r.end()}}}function Te(i){let e,t,s,l=[],r=new Map,a,n=[],o=new Map,u,c,h=i[1].filter(oe);const T=_=>_[4].id;for(let _=0;_<h.length;_+=1){let f=ae(i,h,_),d=T(f);r.set(d,l[_]=ie(d,f))}let k=i[1].filter(ce);const g=_=>_[4].id;for(let _=0;_<k.length;_+=1){let f=ne(i,k,_),d=g(f);o.set(d,n[_]=re(d,f))}return{c(){e=p("section"),t=p("div"),s=p("ul");for(let _=0;_<l.length;_+=1)l[_].c();a=p("ul");for(let _=0;_<n.length;_+=1)n[_].c();this.h()},l(_){e=b(_,"SECTION",{class:!0});var f=E(e);t=b(f,"DIV",{class:!0});var d=E(t);s=b(d,"UL",{class:!0});var C=E(s);for(let D=0;D<l.length;D+=1)l[D].l(C);C.forEach(m),a=b(d,"UL",{class:!0});var R=E(a);for(let D=0;D<n.length;D+=1)n[D].l(R);R.forEach(m),d.forEach(m),f.forEach(m),this.h()},h(){v(s,"class","task-section__col"),v(a,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",u="task-section "+i[0]+" svelte-1rib3cm")},m(_,f){I(_,e,f),y(e,t),y(t,s);for(let d=0;d<l.length;d+=1)l[d].m(s,null);y(t,a);for(let d=0;d<n.length;d+=1)n[d].m(a,null);c=!0},p(_,[f]){if(f&2){h=_[1].filter(oe),J();for(let d=0;d<l.length;d+=1)l[d].r();l=$(l,f,T,1,_,h,r,s,te,ie,null,ae);for(let d=0;d<l.length;d+=1)l[d].a();x()}if(f&2){k=_[1].filter(ce),J();for(let d=0;d<n.length;d+=1)n[d].r();n=$(n,f,g,1,_,k,o,a,te,re,null,ne);for(let d=0;d<n.length;d+=1)n[d].a();x()}(!c||f&1&&u!==(u="task-section "+_[0]+" svelte-1rib3cm"))&&v(e,"class",u)},i(_){if(!c){for(let f=0;f<h.length;f+=1)q(l[f]);for(let f=0;f<k.length;f+=1)q(n[f]);c=!0}},o(_){for(let f=0;f<l.length;f+=1)w(l[f]);for(let f=0;f<n.length;f+=1)w(n[f]);c=!1},d(_){_&&m(e);for(let f=0;f<l.length;f+=1)l[f].d();for(let f=0;f<n.length;f+=1)n[f].d()}}}const oe=i=>!i.done,ce=i=>i.done;function De(i,e,t){let s;W(i,M,n=>t(1,s=n));let{class:l=""}=e;const[r,a]=de({duration:n=>Math.sqrt(n*200),fallback(n,o){const u=getComputedStyle(n),c=u.transform==="none"?"":u.transform;return{duration:600,easing:he,css:h=>`
					transform: ${c} scale(${h});
					opacity: ${h}
				`}}});return i.$$set=n=>{"class"in n&&t(0,l=n.class)},[l,s,r,a]}class qe extends S{constructor(e){super();V(this,e,De,Te,A,{class:0})}}function ue(i){let e,t,s,l=i[2].text&&fe(i);return{c(){e=p("button"),l&&l.c(),this.h()},l(r){e=b(r,"BUTTON",{class:!0});var a=E(e);l&&l.l(a),a.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(r,a){I(r,e,a),l&&l.m(e,null),t||(s=B(e,"click",me(i[6])),t=!0)},p(r,a){r[2].text?l?l.p(r,a):(l=fe(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&m(e),l&&l.d(),t=!1,s()}}}function fe(i){let e=i[2].text+"",t;return{c(){t=j(e)},l(s){t=K(s,e)},m(s,l){I(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&Q(t,e)},d(s){s&&m(t)}}}function we(i){let e,t,s,l,r,a=i[2]&&ue(i);return{c(){e=p("div"),t=p("input"),a&&a.c(),this.h()},l(n){e=b(n,"DIV",{class:!0});var o=E(e);t=b(o,"INPUT",{placeholder:!0,class:!0}),a&&a.l(o),o.forEach(m),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",s="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),P(e,"isError",i[5])},m(n,o){I(n,e,o),y(e,t),le(t,i[4]),a&&a.m(e,null),i[9](e),l||(r=[B(t,"input",i[8]),B(t,"input",i[7])],l=!0)},p(n,[o]){o&2&&v(t,"placeholder",n[1]),o&16&&t.value!==n[4]&&le(t,n[4]),n[2]?a?a.p(n,o):(a=ue(n),a.c(),a.m(e,null)):a&&(a.d(1),a=null),o&5&&s!==(s="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",s),o&37&&P(e,"isError",n[5])},i:N,o:N,d(n){n&&m(e),a&&a.d(),i[9](null),l=!1,ve(r)}}}function Ne(i,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:r=null}=e,a,n,o=!1;const u=ge(),c=()=>{n?(u("submit",{value:n}),t(4,n="")):t(5,o=!0)},h=()=>{t(5,o=!1)};function T(){n=this.value,t(4,n)}function k(g){ke[g?"unshift":"push"](()=>{a=g,t(3,a)})}return i.$$set=g=>{"class"in g&&t(0,s=g.class),"placeholder"in g&&t(1,l=g.placeholder),"btn"in g&&t(2,r=g.btn)},[s,l,r,a,n,o,c,h,T,k]}class Ce extends S{constructor(e){super();V(this,e,Ne,we,A,{class:0,placeholder:1,btn:2})}}function Se(i){let e,t,s,l;return t=new Ce({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=p("div"),F(t.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var a=E(e);O(t.$$.fragment,a),a.forEach(m),this.h()},h(){v(e,"class",s="add-todo "+i[0]+" svelte-hols8d")},m(r,a){I(r,e,a),U(t,e,null),l=!0},p(r,[a]){(!l||a&1&&s!==(s="add-todo "+r[0]+" svelte-hols8d"))&&v(e,"class",s)},i(r){l||(q(t.$$.fragment,r),l=!0)},o(r){w(t.$$.fragment,r),l=!1},d(r){r&&m(e),L(t)}}}function Ve(i,e,t){let{class:s=""}=e;const l=r=>{let a={id:Date.now(),text:r.detail.value,color:null,done:!1};M.update(n=>n=[a,...n])};return i.$$set=r=>{"class"in r&&t(0,s=r.class)},[s,l]}class Ae extends S{constructor(e){super();V(this,e,Ve,Se,A,{class:0})}}function Fe(i){let e,t,s,l,r,a,n;return l=new Ae({}),a=new qe({props:{class:"mt-50"}}),{c(){e=pe(),t=p("section"),s=p("div"),F(l.$$.fragment),F(a.$$.fragment),this.h()},l(o){be('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=Ee(o),t=b(o,"SECTION",{class:!0});var c=E(t);s=b(c,"DIV",{class:!0});var h=E(s);O(l.$$.fragment,h),h.forEach(m),c.forEach(m),O(a.$$.fragment,o),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(s,"class","container"),v(t,"class",r=""+(i[0]+" mt-50 svelte-hols8d"))},m(o,u){I(o,e,u),I(o,t,u),y(t,s),U(l,s,null),U(a,o,u),n=!0},p(o,[u]){(!n||u&1&&r!==(r=""+(o[0]+" mt-50 svelte-hols8d")))&&v(t,"class",r)},i(o){n||(q(l.$$.fragment,o),q(a.$$.fragment,o),n=!0)},o(o){w(l.$$.fragment,o),w(a.$$.fragment,o),n=!1},d(o){o&&m(e),o&&m(t),L(l),L(a,o)}}}function Oe(i,e,t){let{class:s=""}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class Le extends S{constructor(e){super();V(this,e,Oe,Fe,A,{class:0})}}export{Le as default};
