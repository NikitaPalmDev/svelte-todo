import{C as _e,S as V,i as A,s as F,e as k,t as j,c as p,a as y,g as K,d as m,b as v,K as q,f as I,D as E,L as B,h as Q,E as C,M as W,v as O,w as U,x as L,N as X,O as Y,P as Z,p as w,Q as z,R as G,n as N,T as H,A as P,m as J,U as $,o as x,V as de,W as ee,X as te,Y as he,Z as me,_ as le,$ as ve,a0 as ge,a1 as be,j as ke,a2 as pe,l as ye}from"../chunks/vendor-697af2bf.js";const M=_e([{id:1,text:"test task 1",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"},{id:3,text:"test task 3",done:!0,color:"#FF9900"}]);function Ee(i){let e,t,s,l,o,n,a,r,u,c,h,T;return{c(){e=k("div"),t=k("div"),s=k("p"),l=j(i[1]),o=k("div"),n=k("button"),a=k("span"),r=k("div"),this.h()},l(b){e=p(b,"DIV",{class:!0});var g=y(e);t=p(g,"DIV",{class:!0});var _=y(t);s=p(_,"P",{class:!0});var f=y(s);l=K(f,i[1]),f.forEach(m),_.forEach(m),o=p(g,"DIV",{class:!0});var d=y(o);n=p(d,"BUTTON",{class:!0});var S=y(n);a=p(S,"SPAN",{class:!0}),y(a).forEach(m),S.forEach(m),d.forEach(m),r=p(g,"DIV",{class:!0,style:!0}),y(r).forEach(m),g.forEach(m),this.h()},h(){v(s,"class","svelte-lbo0y3"),v(t,"class","task__main svelte-lbo0y3"),v(a,"class","svg-image-del svelte-lbo0y3"),v(n,"class","task__menu-btn svelte-lbo0y3"),v(o,"class","task__circle task__menu svelte-lbo0y3"),v(r,"class","task__circle task__circle_visible task__circle_r-t svelte-lbo0y3"),v(r,"style",u=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",c="task "+i[0]+" svelte-lbo0y3"),q(e,"isDisabled",i[3])},m(b,g){I(b,e,g),E(e,t),E(t,s),E(s,l),E(e,o),E(o,n),E(n,a),E(e,r),h||(T=B(t,"click",i[4]),h=!0)},p(b,[g]){g&2&&Q(l,b[1]),g&4&&u!==(u=`background-color: ${b[2]!=null?b[2]:"#0029FF"}`)&&v(r,"style",u),g&1&&c!==(c="task "+b[0]+" svelte-lbo0y3")&&v(e,"class",c),g&9&&q(e,"isDisabled",b[3])},i:C,o:C,d(b){b&&m(e),h=!1,T()}}}function Ie(i,e,t){let s;W(i,M,c=>t(6,s=c));let{class:l=""}=e,{text:o=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:r=null}=e;const u=()=>{let c=s.map(h=>(r===h.id&&(h.done=!h.done),h));M.set(c)};return i.$$set=c=>{"class"in c&&t(0,l=c.class),"text"in c&&t(1,o=c.text),"color"in c&&t(2,n=c.color),"disabled"in c&&t(3,a=c.disabled),"id"in c&&t(5,r=c.id)},[l,o,n,a,u,r]}class se extends V{constructor(e){super();A(this,e,Ie,Ee,F,{class:0,text:1,color:2,disabled:3,id:5})}}function ae(i,e,t){const s=i.slice();return s[4]=e[t],s}function ne(i,e,t){const s=i.slice();return s[4]=e[t],s}function ie(i,e){let t,s,l,o,n,a=C,r;return s=new se({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=k("li"),O(s.$$.fragment),this.h()},l(u){t=p(u,"LI",{class:!0});var c=y(t);U(s.$$.fragment,c),c.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,c){I(u,t,c),L(s,t,null),r=!0},p(u,c){e=u;const h={};c&2&&(h.text=e[4].text),c&2&&(h.color=e[4].color?e[4].color:null),c&2&&(h.id=e[4].id),s.$set(h)},r(){n=t.getBoundingClientRect()},f(){X(t),a(),Y(t,n)},a(){a(),a=Z(t,n,ee,{duration:300})},i(u){r||(w(s.$$.fragment,u),z(()=>{o&&o.end(1),l=G(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(u){N(s.$$.fragment,u),l&&l.invalidate(),o=H(t,e[2],{key:e[4].id}),r=!1},d(u){u&&m(t),P(s),u&&o&&o.end()}}}function oe(i,e){let t,s,l,o,n,a=C,r;return s=new se({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=k("li"),O(s.$$.fragment),this.h()},l(u){t=p(u,"LI",{class:!0});var c=y(t);U(s.$$.fragment,c),c.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,c){I(u,t,c),L(s,t,null),r=!0},p(u,c){e=u;const h={};c&2&&(h.text=e[4].text),c&2&&(h.color=e[4].color?e[4].color:null),c&2&&(h.id=e[4].id),s.$set(h)},r(){n=t.getBoundingClientRect()},f(){X(t),a(),Y(t,n)},a(){a(),a=Z(t,n,ee,{duration:300})},i(u){r||(w(s.$$.fragment,u),z(()=>{o&&o.end(1),l=G(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(u){N(s.$$.fragment,u),l&&l.invalidate(),o=H(t,e[2],{key:e[4].id}),r=!1},d(u){u&&m(t),P(s),u&&o&&o.end()}}}function Te(i){let e,t,s,l=[],o=new Map,n,a=[],r=new Map,u,c,h=i[1].filter(re);const T=_=>_[4].id;for(let _=0;_<h.length;_+=1){let f=ne(i,h,_),d=T(f);o.set(d,l[_]=ie(d,f))}let b=i[1].filter(ce);const g=_=>_[4].id;for(let _=0;_<b.length;_+=1){let f=ae(i,b,_),d=g(f);r.set(d,a[_]=oe(d,f))}return{c(){e=k("section"),t=k("div"),s=k("ul");for(let _=0;_<l.length;_+=1)l[_].c();n=k("ul");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){e=p(_,"SECTION",{class:!0});var f=y(e);t=p(f,"DIV",{class:!0});var d=y(t);s=p(d,"UL",{class:!0});var S=y(s);for(let D=0;D<l.length;D+=1)l[D].l(S);S.forEach(m),n=p(d,"UL",{class:!0});var R=y(n);for(let D=0;D<a.length;D+=1)a[D].l(R);R.forEach(m),d.forEach(m),f.forEach(m),this.h()},h(){v(s,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",u="task-section "+i[0]+" svelte-1rib3cm")},m(_,f){I(_,e,f),E(e,t),E(t,s);for(let d=0;d<l.length;d+=1)l[d].m(s,null);E(t,n);for(let d=0;d<a.length;d+=1)a[d].m(n,null);c=!0},p(_,[f]){if(f&2){h=_[1].filter(re),J();for(let d=0;d<l.length;d+=1)l[d].r();l=$(l,f,T,1,_,h,o,s,te,ie,null,ne);for(let d=0;d<l.length;d+=1)l[d].a();x()}if(f&2){b=_[1].filter(ce),J();for(let d=0;d<a.length;d+=1)a[d].r();a=$(a,f,g,1,_,b,r,n,te,oe,null,ae);for(let d=0;d<a.length;d+=1)a[d].a();x()}(!c||f&1&&u!==(u="task-section "+_[0]+" svelte-1rib3cm"))&&v(e,"class",u)},i(_){if(!c){for(let f=0;f<h.length;f+=1)w(l[f]);for(let f=0;f<b.length;f+=1)w(a[f]);c=!0}},o(_){for(let f=0;f<l.length;f+=1)N(l[f]);for(let f=0;f<a.length;f+=1)N(a[f]);c=!1},d(_){_&&m(e);for(let f=0;f<l.length;f+=1)l[f].d();for(let f=0;f<a.length;f+=1)a[f].d()}}}const re=i=>!i.done,ce=i=>i.done;function De(i,e,t){let s;W(i,M,a=>t(1,s=a));let{class:l=""}=e;const[o,n]=de({duration:a=>Math.sqrt(a*200),fallback(a,r){const u=getComputedStyle(a),c=u.transform==="none"?"":u.transform;return{duration:600,easing:he,css:h=>`
					transform: ${c} scale(${h});
					opacity: ${h}
				`}}});return i.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,s,o,n]}class we extends V{constructor(e){super();A(this,e,De,Te,F,{class:0})}}function ue(i){let e,t,s,l=i[2].text&&fe(i);return{c(){e=k("button"),l&&l.c(),this.h()},l(o){e=p(o,"BUTTON",{class:!0});var n=y(e);l&&l.l(n),n.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(o,n){I(o,e,n),l&&l.m(e,null),t||(s=B(e,"click",me(i[6])),t=!0)},p(o,n){o[2].text?l?l.p(o,n):(l=fe(o),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(o){o&&m(e),l&&l.d(),t=!1,s()}}}function fe(i){let e=i[2].text+"",t;return{c(){t=j(e)},l(s){t=K(s,e)},m(s,l){I(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&Q(t,e)},d(s){s&&m(t)}}}function Ne(i){let e,t,s,l,o,n=i[2]&&ue(i);return{c(){e=k("div"),t=k("input"),n&&n.c(),this.h()},l(a){e=p(a,"DIV",{class:!0});var r=y(e);t=p(r,"INPUT",{placeholder:!0,class:!0}),n&&n.l(r),r.forEach(m),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",s="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),q(e,"isError",i[5])},m(a,r){I(a,e,r),E(e,t),le(t,i[4]),n&&n.m(e,null),i[9](e),l||(o=[B(t,"input",i[8]),B(t,"input",i[7])],l=!0)},p(a,[r]){r&2&&v(t,"placeholder",a[1]),r&16&&t.value!==a[4]&&le(t,a[4]),a[2]?n?n.p(a,r):(n=ue(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),r&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",s),r&37&&q(e,"isError",a[5])},i:C,o:C,d(a){a&&m(e),n&&n.d(),i[9](null),l=!1,ve(o)}}}function Ce(i,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:o=null}=e,n,a,r=!1;const u=ge(),c=()=>{a?(u("submit",{value:a}),t(4,a="")):t(5,r=!0)},h=()=>{t(5,r=!1)};function T(){a=this.value,t(4,a)}function b(g){be[g?"unshift":"push"](()=>{n=g,t(3,n)})}return i.$$set=g=>{"class"in g&&t(0,s=g.class),"placeholder"in g&&t(1,l=g.placeholder),"btn"in g&&t(2,o=g.btn)},[s,l,o,n,a,r,c,h,T,b]}class Se extends V{constructor(e){super();A(this,e,Ce,Ne,F,{class:0,placeholder:1,btn:2})}}function Ve(i){let e,t,s,l;return t=new Se({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=k("div"),O(t.$$.fragment),this.h()},l(o){e=p(o,"DIV",{class:!0});var n=y(e);U(t.$$.fragment,n),n.forEach(m),this.h()},h(){v(e,"class",s="add-todo "+i[0]+" svelte-hols8d")},m(o,n){I(o,e,n),L(t,e,null),l=!0},p(o,[n]){(!l||n&1&&s!==(s="add-todo "+o[0]+" svelte-hols8d"))&&v(e,"class",s)},i(o){l||(w(t.$$.fragment,o),l=!0)},o(o){N(t.$$.fragment,o),l=!1},d(o){o&&m(e),P(t)}}}function Ae(i,e,t){let{class:s=""}=e;const l=o=>{let n={id:Date.now(),text:o.detail.value,color:null,done:!1};M.update(a=>a=[n,...a])};return i.$$set=o=>{"class"in o&&t(0,s=o.class)},[s,l]}class Fe extends V{constructor(e){super();A(this,e,Ae,Ve,F,{class:0})}}function Oe(i){let e,t,s,l,o,n,a;return l=new Fe({}),n=new we({props:{class:"mt-50"}}),{c(){e=ke(),t=k("section"),s=k("div"),O(l.$$.fragment),O(n.$$.fragment),this.h()},l(r){pe('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=ye(r),t=p(r,"SECTION",{class:!0});var c=y(t);s=p(c,"DIV",{class:!0});var h=y(s);U(l.$$.fragment,h),h.forEach(m),c.forEach(m),U(n.$$.fragment,r),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(s,"class","container"),v(t,"class",o=""+(i[0]+" mt-50 svelte-hols8d"))},m(r,u){I(r,e,u),I(r,t,u),E(t,s),L(l,s,null),L(n,r,u),a=!0},p(r,[u]){(!a||u&1&&o!==(o=""+(r[0]+" mt-50 svelte-hols8d")))&&v(t,"class",o)},i(r){a||(w(l.$$.fragment,r),w(n.$$.fragment,r),a=!0)},o(r){N(l.$$.fragment,r),N(n.$$.fragment,r),a=!1},d(r){r&&m(e),r&&m(t),P(l),P(n,r)}}}function Ue(i,e,t){let{class:s=""}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class Pe extends V{constructor(e){super();A(this,e,Ue,Oe,F,{class:0})}}export{Pe as default};
