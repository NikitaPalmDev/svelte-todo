import{C as ye,S,i as B,s as F,e as k,t as $,c as g,a as b,g as x,d as v,b as m,K as Q,f as w,D as p,L as V,M as ee,h as te,E as A,N as le,O as se,v as P,w as q,x as M,P as ae,Q as ne,R as oe,p as U,T as ie,U as re,n as L,V as ce,A as R,m as ue,W as fe,o as _e,X as Ne,Y as de,Z as he,_ as we,$ as ve,a0 as De,a1 as Ue,j as Le,a2 as Oe,l as Ae}from"../chunks/vendor-174655a0.js";const K=ye([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);function Ce(i){let e,t,s,l,r,n,a,o,c,d,u,T,I,E,_,f,h,D,O,N;return{c(){e=k("div"),t=k("div"),s=k("p"),l=$(i[1]),r=k("div"),n=k("button"),a=k("span"),o=k("ul"),c=k("li"),d=k("button"),u=k("li"),T=k("button"),I=k("li"),E=k("button"),_=k("li"),f=k("button"),this.h()},l(j){e=g(j,"DIV",{class:!0});var y=b(e);t=g(y,"DIV",{class:!0});var W=b(t);s=g(W,"P",{class:!0});var X=b(s);l=x(X,i[1]),X.forEach(v),W.forEach(v),r=g(y,"DIV",{class:!0});var Y=b(r);n=g(Y,"BUTTON",{class:!0});var Z=b(n);a=g(Z,"SPAN",{class:!0}),b(a).forEach(v),Z.forEach(v),Y.forEach(v),o=g(y,"UL",{class:!0,style:!0});var C=b(o);c=g(C,"LI",{class:!0});var z=b(c);d=g(z,"BUTTON",{class:!0}),b(d).forEach(v),z.forEach(v),u=g(C,"LI",{class:!0});var G=b(u);T=g(G,"BUTTON",{class:!0}),b(T).forEach(v),G.forEach(v),I=g(C,"LI",{class:!0});var H=b(I);E=g(H,"BUTTON",{class:!0}),b(E).forEach(v),H.forEach(v),_=g(C,"LI",{class:!0});var J=b(_);f=g(J,"BUTTON",{class:!0}),b(f).forEach(v),J.forEach(v),C.forEach(v),y.forEach(v),this.h()},h(){m(s,"class","svelte-nou3j7"),m(t,"class","task__main svelte-nou3j7"),m(a,"class","svg-image-del svelte-nou3j7"),m(n,"class","task__menu-btn task__menu-btn_del svelte-nou3j7"),m(r,"class","task__circle task__menu svelte-nou3j7"),m(d,"class","task__color-btn svelte-nou3j7"),m(c,"class","task__color-item svelte-nou3j7"),m(T,"class","task__color-btn svelte-nou3j7"),m(u,"class","task__color-item svelte-nou3j7"),m(E,"class","task__color-btn svelte-nou3j7"),m(I,"class","task__color-item svelte-nou3j7"),m(f,"class","task__color-btn svelte-nou3j7"),m(_,"class","task__color-item svelte-nou3j7"),m(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-nou3j7"),m(o,"style",h=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),m(e,"class",D="task "+i[0]+" svelte-nou3j7"),Q(e,"isDisabled",i[3])},m(j,y){w(j,e,y),p(e,t),p(t,s),p(s,l),p(e,r),p(r,n),p(n,a),p(e,o),p(o,c),p(c,d),p(o,u),p(u,T),p(o,I),p(I,E),p(o,_),p(_,f),O||(N=[V(t,"click",i[4]),V(n,"click",ee(i[5]))],O=!0)},p(j,[y]){y&2&&te(l,j[1]),y&4&&h!==(h=`background-color: ${j[2]!=null?j[2]:"#0029FF"}`)&&m(o,"style",h),y&1&&D!==(D="task "+j[0]+" svelte-nou3j7")&&m(e,"class",D),y&9&&Q(e,"isDisabled",j[3])},i:A,o:A,d(j){j&&v(e),O=!1,le(N)}}}function Se(i,e,t){let s;se(i,K,u=>t(7,s=u));let{class:l=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:o=null}=e;const c=()=>{let u=s.map(T=>(o===T.id&&(T.done=!T.done),T));K.set(u)},d=()=>{let u=s.filter(T=>T.id!=o);K.set(u),console.log("del",o)};return i.$$set=u=>{"class"in u&&t(0,l=u.class),"text"in u&&t(1,r=u.text),"color"in u&&t(2,n=u.color),"disabled"in u&&t(3,a=u.disabled),"id"in u&&t(6,o=u.id)},[l,r,n,a,c,d,o]}class me extends S{constructor(e){super();B(this,e,Se,Ce,F,{class:0,text:1,color:2,disabled:3,id:6})}}function ke(i,e,t){const s=i.slice();return s[4]=e[t],s}function ge(i,e,t){const s=i.slice();return s[4]=e[t],s}function be(i,e){let t,s,l,r,n,a=A,o;return s=new me({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=k("li"),P(s.$$.fragment),this.h()},l(c){t=g(c,"LI",{class:!0});var d=b(t);q(s.$$.fragment,d),d.forEach(v),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(c,d){w(c,t,d),M(s,t,null),o=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),s.$set(u)},r(){n=t.getBoundingClientRect()},f(){ae(t),a(),ne(t,n)},a(){a(),a=oe(t,n,de,{duration:300})},i(c){o||(U(s.$$.fragment,c),ie(()=>{r&&r.end(1),l=re(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(c){L(s.$$.fragment,c),l&&l.invalidate(),r=ce(t,e[2],{key:e[4].id}),o=!1},d(c){c&&v(t),R(s),c&&r&&r.end()}}}function pe(i,e){let t,s,l,r,n,a=A,o;return s=new me({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=k("li"),P(s.$$.fragment),this.h()},l(c){t=g(c,"LI",{class:!0});var d=b(t);q(s.$$.fragment,d),d.forEach(v),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(c,d){w(c,t,d),M(s,t,null),o=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),s.$set(u)},r(){n=t.getBoundingClientRect()},f(){ae(t),a(),ne(t,n)},a(){a(),a=oe(t,n,de,{duration:300})},i(c){o||(U(s.$$.fragment,c),ie(()=>{r&&r.end(1),l=re(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(c){L(s.$$.fragment,c),l&&l.invalidate(),r=ce(t,e[2],{key:e[4].id}),o=!1},d(c){c&&v(t),R(s),c&&r&&r.end()}}}function Be(i){let e,t,s,l=[],r=new Map,n,a=[],o=new Map,c,d,u=i[1].filter(Ee);const T=_=>_[4].id;for(let _=0;_<u.length;_+=1){let f=ge(i,u,_),h=T(f);r.set(h,l[_]=be(h,f))}let I=i[1].filter(Te);const E=_=>_[4].id;for(let _=0;_<I.length;_+=1){let f=ke(i,I,_),h=E(f);o.set(h,a[_]=pe(h,f))}return{c(){e=k("section"),t=k("div"),s=k("ul");for(let _=0;_<l.length;_+=1)l[_].c();n=k("ul");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){e=g(_,"SECTION",{class:!0});var f=b(e);t=g(f,"DIV",{class:!0});var h=b(t);s=g(h,"UL",{class:!0});var D=b(s);for(let N=0;N<l.length;N+=1)l[N].l(D);D.forEach(v),n=g(h,"UL",{class:!0});var O=b(n);for(let N=0;N<a.length;N+=1)a[N].l(O);O.forEach(v),h.forEach(v),f.forEach(v),this.h()},h(){m(s,"class","task-section__col"),m(n,"class","task-section__col"),m(t,"class","container task-section__grid svelte-1rib3cm"),m(e,"class",c="task-section "+i[0]+" svelte-1rib3cm")},m(_,f){w(_,e,f),p(e,t),p(t,s);for(let h=0;h<l.length;h+=1)l[h].m(s,null);p(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);d=!0},p(_,[f]){if(f&2){u=_[1].filter(Ee),ue();for(let h=0;h<l.length;h+=1)l[h].r();l=fe(l,f,T,1,_,u,r,s,he,be,null,ge);for(let h=0;h<l.length;h+=1)l[h].a();_e()}if(f&2){I=_[1].filter(Te),ue();for(let h=0;h<a.length;h+=1)a[h].r();a=fe(a,f,E,1,_,I,o,n,he,pe,null,ke);for(let h=0;h<a.length;h+=1)a[h].a();_e()}(!d||f&1&&c!==(c="task-section "+_[0]+" svelte-1rib3cm"))&&m(e,"class",c)},i(_){if(!d){for(let f=0;f<u.length;f+=1)U(l[f]);for(let f=0;f<I.length;f+=1)U(a[f]);d=!0}},o(_){for(let f=0;f<l.length;f+=1)L(l[f]);for(let f=0;f<a.length;f+=1)L(a[f]);d=!1},d(_){_&&v(e);for(let f=0;f<l.length;f+=1)l[f].d();for(let f=0;f<a.length;f+=1)a[f].d()}}}const Ee=i=>!i.done,Te=i=>i.done;function Fe(i,e,t){let s;se(i,K,a=>t(1,s=a));let{class:l=""}=e;const[r,n]=Ne({duration:a=>Math.sqrt(a*200),fallback(a,o){const c=getComputedStyle(a),d=c.transform==="none"?"":c.transform;return{duration:600,easing:we,css:u=>`
					transform: ${d} scale(${u});
					opacity: ${u}
				`}}});return i.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,s,r,n]}class Ve extends S{constructor(e){super();B(this,e,Fe,Be,F,{class:0})}}function Ie(i){let e,t,s,l=i[2].text&&je(i);return{c(){e=k("button"),l&&l.c(),this.h()},l(r){e=g(r,"BUTTON",{class:!0});var n=b(e);l&&l.l(n),n.forEach(v),this.h()},h(){m(e,"class","btn svelte-12pihab")},m(r,n){w(r,e,n),l&&l.m(e,null),t||(s=V(e,"click",ee(i[6])),t=!0)},p(r,n){r[2].text?l?l.p(r,n):(l=je(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&v(e),l&&l.d(),t=!1,s()}}}function je(i){let e=i[2].text+"",t;return{c(){t=$(e)},l(s){t=x(s,e)},m(s,l){w(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&te(t,e)},d(s){s&&v(t)}}}function Pe(i){let e,t,s,l,r,n=i[2]&&Ie(i);return{c(){e=k("div"),t=k("input"),n&&n.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var o=b(e);t=g(o,"INPUT",{placeholder:!0,class:!0}),n&&n.l(o),o.forEach(v),this.h()},h(){m(t,"placeholder",i[1]),m(t,"class","svelte-12pihab"),m(e,"class",s="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),Q(e,"isError",i[5])},m(a,o){w(a,e,o),p(e,t),ve(t,i[4]),n&&n.m(e,null),i[9](e),l||(r=[V(t,"input",i[8]),V(t,"input",i[7])],l=!0)},p(a,[o]){o&2&&m(t,"placeholder",a[1]),o&16&&t.value!==a[4]&&ve(t,a[4]),a[2]?n?n.p(a,o):(n=Ie(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&m(e,"class",s),o&37&&Q(e,"isError",a[5])},i:A,o:A,d(a){a&&v(e),n&&n.d(),i[9](null),l=!1,le(r)}}}function qe(i,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:r=null}=e,n,a,o=!1;const c=De(),d=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,o=!0)},u=()=>{t(5,o=!1)};function T(){a=this.value,t(4,a)}function I(E){Ue[E?"unshift":"push"](()=>{n=E,t(3,n)})}return i.$$set=E=>{"class"in E&&t(0,s=E.class),"placeholder"in E&&t(1,l=E.placeholder),"btn"in E&&t(2,r=E.btn)},[s,l,r,n,a,o,d,u,T,I]}class Me extends S{constructor(e){super();B(this,e,qe,Pe,F,{class:0,placeholder:1,btn:2})}}function Re(i){let e,t,s,l;return t=new Me({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=k("div"),P(t.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0});var n=b(e);q(t.$$.fragment,n),n.forEach(v),this.h()},h(){m(e,"class",s="add-todo "+i[0]+" svelte-hols8d")},m(r,n){w(r,e,n),M(t,e,null),l=!0},p(r,[n]){(!l||n&1&&s!==(s="add-todo "+r[0]+" svelte-hols8d"))&&m(e,"class",s)},i(r){l||(U(t.$$.fragment,r),l=!0)},o(r){L(t.$$.fragment,r),l=!1},d(r){r&&v(e),R(t)}}}function Ke(i,e,t){let{class:s=""}=e;const l=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};K.update(a=>a=[n,...a])};return i.$$set=r=>{"class"in r&&t(0,s=r.class)},[s,l]}class Qe extends S{constructor(e){super();B(this,e,Ke,Re,F,{class:0})}}function We(i){let e,t,s,l,r,n,a;return l=new Qe({}),n=new Ve({props:{class:"mt-50"}}),{c(){e=Le(),t=k("section"),s=k("div"),P(l.$$.fragment),P(n.$$.fragment),this.h()},l(o){Oe('[data-svelte="svelte-1ms75pp"]',document.head).forEach(v),e=Ae(o),t=g(o,"SECTION",{class:!0});var d=b(t);s=g(d,"DIV",{class:!0});var u=b(s);q(l.$$.fragment,u),u.forEach(v),d.forEach(v),q(n.$$.fragment,o),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",m(s,"class","container"),m(t,"class",r=""+(i[0]+" mt-50 svelte-hols8d"))},m(o,c){w(o,e,c),w(o,t,c),p(t,s),M(l,s,null),M(n,o,c),a=!0},p(o,[c]){(!a||c&1&&r!==(r=""+(o[0]+" mt-50 svelte-hols8d")))&&m(t,"class",r)},i(o){a||(U(l.$$.fragment,o),U(n.$$.fragment,o),a=!0)},o(o){L(l.$$.fragment,o),L(n.$$.fragment,o),a=!1},d(o){o&&v(e),o&&v(t),R(l),R(n,o)}}}function Xe(i,e,t){let{class:s=""}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class Ze extends S{constructor(e){super();B(this,e,Xe,We,F,{class:0})}}export{Ze as default};
