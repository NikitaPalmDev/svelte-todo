import{C as _e,S as V,i as F,s as S,e as g,t as j,c as p,a as b,g as K,d as m,b as v,K as q,f as T,D as I,L as B,h as Q,E as C,M as W,v as A,w as O,x as U,N as X,O as Y,P as Z,p as w,Q as z,R as G,n as N,T as H,A as L,m as J,U as $,o as x,V as de,W as ee,X as te,Y as he,Z as me,_ as le,$ as ve,a0 as ke,a1 as ge,j as pe,a2 as be,l as Ee}from"../chunks/vendor-697af2bf.js";const M=_e([{id:1,text:"test task 1",done:!1},{id:2,text:"test task 2",done:!1,color:"#FF9900"},{id:3,text:"test task 3",done:!0,color:"#FF9900"}]);function ye(i){let e,t,s,l,r,n,a,o,c,u,h;return{c(){e=g("div"),t=g("div"),s=g("p"),l=j(i[1]),r=g("div"),n=g("button"),a=g("div"),this.h()},l(E){e=p(E,"DIV",{class:!0});var k=b(e);t=p(k,"DIV",{class:!0});var y=b(t);s=p(y,"P",{class:!0});var _=b(s);l=K(_,i[1]),_.forEach(m),y.forEach(m),r=p(k,"DIV",{class:!0});var f=b(r);n=p(f,"BUTTON",{class:!0}),b(n).forEach(m),f.forEach(m),a=p(k,"DIV",{class:!0,style:!0}),b(a).forEach(m),k.forEach(m),this.h()},h(){v(s,"class","svelte-pe9b6k"),v(t,"class","task__main svelte-pe9b6k"),v(n,"class","task__menu-btn"),v(r,"class","task__circle task__menu svelte-pe9b6k"),v(a,"class","task__circle task__circle_visible task__circle_r-t svelte-pe9b6k"),v(a,"style",o=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",c="task "+i[0]+" svelte-pe9b6k"),q(e,"isDisabled",i[3])},m(E,k){T(E,e,k),I(e,t),I(t,s),I(s,l),I(e,r),I(r,n),I(e,a),u||(h=B(t,"click",i[4]),u=!0)},p(E,[k]){k&2&&Q(l,E[1]),k&4&&o!==(o=`background-color: ${E[2]!=null?E[2]:"#0029FF"}`)&&v(a,"style",o),k&1&&c!==(c="task "+E[0]+" svelte-pe9b6k")&&v(e,"class",c),k&9&&q(e,"isDisabled",E[3])},i:C,o:C,d(E){E&&m(e),u=!1,h()}}}function Ie(i,e,t){let s;W(i,M,u=>t(6,s=u));let{class:l=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:o=null}=e;const c=()=>{let u=s.map(h=>(o===h.id&&(h.done=!h.done),h));M.set(u)};return i.$$set=u=>{"class"in u&&t(0,l=u.class),"text"in u&&t(1,r=u.text),"color"in u&&t(2,n=u.color),"disabled"in u&&t(3,a=u.disabled),"id"in u&&t(5,o=u.id)},[l,r,n,a,c,o]}class se extends V{constructor(e){super();F(this,e,Ie,ye,S,{class:0,text:1,color:2,disabled:3,id:5})}}function ae(i,e,t){const s=i.slice();return s[4]=e[t],s}function ne(i,e,t){const s=i.slice();return s[4]=e[t],s}function ie(i,e){let t,s,l,r,n,a=C,o;return s=new se({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=g("li"),A(s.$$.fragment),this.h()},l(c){t=p(c,"LI",{class:!0});var u=b(t);O(s.$$.fragment,u),u.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,u){T(c,t,u),U(s,t,null),o=!0},p(c,u){e=c;const h={};u&2&&(h.text=e[4].text),u&2&&(h.color=e[4].color?e[4].color:null),u&2&&(h.id=e[4].id),s.$set(h)},r(){n=t.getBoundingClientRect()},f(){X(t),a(),Y(t,n)},a(){a(),a=Z(t,n,ee,{duration:300})},i(c){o||(w(s.$$.fragment,c),z(()=>{r&&r.end(1),l=G(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(c){N(s.$$.fragment,c),l&&l.invalidate(),r=H(t,e[2],{key:e[4].id}),o=!1},d(c){c&&m(t),L(s),c&&r&&r.end()}}}function re(i,e){let t,s,l,r,n,a=C,o;return s=new se({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=g("li"),A(s.$$.fragment),this.h()},l(c){t=p(c,"LI",{class:!0});var u=b(t);O(s.$$.fragment,u),u.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,u){T(c,t,u),U(s,t,null),o=!0},p(c,u){e=c;const h={};u&2&&(h.text=e[4].text),u&2&&(h.color=e[4].color?e[4].color:null),u&2&&(h.id=e[4].id),s.$set(h)},r(){n=t.getBoundingClientRect()},f(){X(t),a(),Y(t,n)},a(){a(),a=Z(t,n,ee,{duration:300})},i(c){o||(w(s.$$.fragment,c),z(()=>{r&&r.end(1),l=G(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(c){N(s.$$.fragment,c),l&&l.invalidate(),r=H(t,e[2],{key:e[4].id}),o=!1},d(c){c&&m(t),L(s),c&&r&&r.end()}}}function Te(i){let e,t,s,l=[],r=new Map,n,a=[],o=new Map,c,u,h=i[1].filter(oe);const E=_=>_[4].id;for(let _=0;_<h.length;_+=1){let f=ne(i,h,_),d=E(f);r.set(d,l[_]=ie(d,f))}let k=i[1].filter(ce);const y=_=>_[4].id;for(let _=0;_<k.length;_+=1){let f=ae(i,k,_),d=y(f);o.set(d,a[_]=re(d,f))}return{c(){e=g("section"),t=g("div"),s=g("ul");for(let _=0;_<l.length;_+=1)l[_].c();n=g("ul");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){e=p(_,"SECTION",{class:!0});var f=b(e);t=p(f,"DIV",{class:!0});var d=b(t);s=p(d,"UL",{class:!0});var P=b(s);for(let D=0;D<l.length;D+=1)l[D].l(P);P.forEach(m),n=p(d,"UL",{class:!0});var R=b(n);for(let D=0;D<a.length;D+=1)a[D].l(R);R.forEach(m),d.forEach(m),f.forEach(m),this.h()},h(){v(s,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",c="task-section "+i[0]+" svelte-1rib3cm")},m(_,f){T(_,e,f),I(e,t),I(t,s);for(let d=0;d<l.length;d+=1)l[d].m(s,null);I(t,n);for(let d=0;d<a.length;d+=1)a[d].m(n,null);u=!0},p(_,[f]){if(f&2){h=_[1].filter(oe),J();for(let d=0;d<l.length;d+=1)l[d].r();l=$(l,f,E,1,_,h,r,s,te,ie,null,ne);for(let d=0;d<l.length;d+=1)l[d].a();x()}if(f&2){k=_[1].filter(ce),J();for(let d=0;d<a.length;d+=1)a[d].r();a=$(a,f,y,1,_,k,o,n,te,re,null,ae);for(let d=0;d<a.length;d+=1)a[d].a();x()}(!u||f&1&&c!==(c="task-section "+_[0]+" svelte-1rib3cm"))&&v(e,"class",c)},i(_){if(!u){for(let f=0;f<h.length;f+=1)w(l[f]);for(let f=0;f<k.length;f+=1)w(a[f]);u=!0}},o(_){for(let f=0;f<l.length;f+=1)N(l[f]);for(let f=0;f<a.length;f+=1)N(a[f]);u=!1},d(_){_&&m(e);for(let f=0;f<l.length;f+=1)l[f].d();for(let f=0;f<a.length;f+=1)a[f].d()}}}const oe=i=>!i.done,ce=i=>i.done;function De(i,e,t){let s;W(i,M,a=>t(1,s=a));let{class:l=""}=e;const[r,n]=de({duration:a=>Math.sqrt(a*200),fallback(a,o){const c=getComputedStyle(a),u=c.transform==="none"?"":c.transform;return{duration:600,easing:he,css:h=>`
					transform: ${u} scale(${h});
					opacity: ${h}
				`}}});return i.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,s,r,n]}class we extends V{constructor(e){super();F(this,e,De,Te,S,{class:0})}}function ue(i){let e,t,s,l=i[2].text&&fe(i);return{c(){e=g("button"),l&&l.c(),this.h()},l(r){e=p(r,"BUTTON",{class:!0});var n=b(e);l&&l.l(n),n.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(r,n){T(r,e,n),l&&l.m(e,null),t||(s=B(e,"click",me(i[6])),t=!0)},p(r,n){r[2].text?l?l.p(r,n):(l=fe(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&m(e),l&&l.d(),t=!1,s()}}}function fe(i){let e=i[2].text+"",t;return{c(){t=j(e)},l(s){t=K(s,e)},m(s,l){T(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&Q(t,e)},d(s){s&&m(t)}}}function Ne(i){let e,t,s,l,r,n=i[2]&&ue(i);return{c(){e=g("div"),t=g("input"),n&&n.c(),this.h()},l(a){e=p(a,"DIV",{class:!0});var o=b(e);t=p(o,"INPUT",{placeholder:!0,class:!0}),n&&n.l(o),o.forEach(m),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",s="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),q(e,"isError",i[5])},m(a,o){T(a,e,o),I(e,t),le(t,i[4]),n&&n.m(e,null),i[9](e),l||(r=[B(t,"input",i[8]),B(t,"input",i[7])],l=!0)},p(a,[o]){o&2&&v(t,"placeholder",a[1]),o&16&&t.value!==a[4]&&le(t,a[4]),a[2]?n?n.p(a,o):(n=ue(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",s),o&37&&q(e,"isError",a[5])},i:C,o:C,d(a){a&&m(e),n&&n.d(),i[9](null),l=!1,ve(r)}}}function Ce(i,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:r=null}=e,n,a,o=!1;const c=ke(),u=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,o=!0)},h=()=>{t(5,o=!1)};function E(){a=this.value,t(4,a)}function k(y){ge[y?"unshift":"push"](()=>{n=y,t(3,n)})}return i.$$set=y=>{"class"in y&&t(0,s=y.class),"placeholder"in y&&t(1,l=y.placeholder),"btn"in y&&t(2,r=y.btn)},[s,l,r,n,a,o,u,h,E,k]}class Ve extends V{constructor(e){super();F(this,e,Ce,Ne,S,{class:0,placeholder:1,btn:2})}}function Fe(i){let e,t,s,l;return t=new Ve({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=g("div"),A(t.$$.fragment),this.h()},l(r){e=p(r,"DIV",{class:!0});var n=b(e);O(t.$$.fragment,n),n.forEach(m),this.h()},h(){v(e,"class",s="add-todo "+i[0]+" svelte-hols8d")},m(r,n){T(r,e,n),U(t,e,null),l=!0},p(r,[n]){(!l||n&1&&s!==(s="add-todo "+r[0]+" svelte-hols8d"))&&v(e,"class",s)},i(r){l||(w(t.$$.fragment,r),l=!0)},o(r){N(t.$$.fragment,r),l=!1},d(r){r&&m(e),L(t)}}}function Se(i,e,t){let{class:s=""}=e;const l=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};M.update(a=>a=[n,...a])};return i.$$set=r=>{"class"in r&&t(0,s=r.class)},[s,l]}class Ae extends V{constructor(e){super();F(this,e,Se,Fe,S,{class:0})}}function Oe(i){let e,t,s,l,r,n,a;return l=new Ae({}),n=new we({props:{class:"mt-50"}}),{c(){e=pe(),t=g("section"),s=g("div"),A(l.$$.fragment),A(n.$$.fragment),this.h()},l(o){be('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=Ee(o),t=p(o,"SECTION",{class:!0});var u=b(t);s=p(u,"DIV",{class:!0});var h=b(s);O(l.$$.fragment,h),h.forEach(m),u.forEach(m),O(n.$$.fragment,o),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(s,"class","container"),v(t,"class",r=""+(i[0]+" mt-50 svelte-hols8d"))},m(o,c){T(o,e,c),T(o,t,c),I(t,s),U(l,s,null),U(n,o,c),a=!0},p(o,[c]){(!a||c&1&&r!==(r=""+(o[0]+" mt-50 svelte-hols8d")))&&v(t,"class",r)},i(o){a||(w(l.$$.fragment,o),w(n.$$.fragment,o),a=!0)},o(o){N(l.$$.fragment,o),N(n.$$.fragment,o),a=!1},d(o){o&&m(e),o&&m(t),L(l),L(n,o)}}}function Ue(i,e,t){let{class:s=""}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class qe extends V{constructor(e){super();F(this,e,Ue,Oe,S,{class:0})}}export{qe as default};
