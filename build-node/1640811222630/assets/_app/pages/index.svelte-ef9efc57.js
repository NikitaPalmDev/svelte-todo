import{C as ye,S as B,i as F,s as V,e as k,t as $,c as g,a as b,g as x,d as v,b as m,K as Q,f as D,D as p,L as P,M as ee,h as te,E as C,N as se,O as le,v as q,w as M,x as R,P as ae,Q as ne,R as ie,p as L,T as oe,U as re,n as O,V as ce,A as j,m as ue,W as fe,o as _e,X as Ne,Y as de,Z as he,_ as De,$ as ve,a0 as Ue,a1 as Le,j as Oe,a2 as Ae,l as Ce}from"../chunks/vendor-174655a0.js";const K=ye([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);function Se(o){let e,t,l,s,r,n,a,i,c,d,u,w,T,E,_,f,h,U,A,N;return{c(){e=k("div"),t=k("div"),l=k("p"),s=$(o[1]),r=k("div"),n=k("button"),a=k("span"),i=k("ul"),c=k("li"),d=k("button"),u=k("li"),w=k("button"),T=k("li"),E=k("button"),_=k("li"),f=k("button"),this.h()},l(I){e=g(I,"DIV",{class:!0});var y=b(e);t=g(y,"DIV",{class:!0});var W=b(t);l=g(W,"P",{class:!0});var X=b(l);s=x(X,o[1]),X.forEach(v),W.forEach(v),r=g(y,"DIV",{class:!0});var Y=b(r);n=g(Y,"BUTTON",{class:!0});var Z=b(n);a=g(Z,"SPAN",{class:!0}),b(a).forEach(v),Z.forEach(v),Y.forEach(v),i=g(y,"UL",{class:!0,style:!0});var S=b(i);c=g(S,"LI",{class:!0});var z=b(c);d=g(z,"BUTTON",{class:!0}),b(d).forEach(v),z.forEach(v),u=g(S,"LI",{class:!0});var G=b(u);w=g(G,"BUTTON",{class:!0}),b(w).forEach(v),G.forEach(v),T=g(S,"LI",{class:!0});var H=b(T);E=g(H,"BUTTON",{class:!0}),b(E).forEach(v),H.forEach(v),_=g(S,"LI",{class:!0});var J=b(_);f=g(J,"BUTTON",{class:!0}),b(f).forEach(v),J.forEach(v),S.forEach(v),y.forEach(v),this.h()},h(){m(l,"class","svelte-6ws047"),m(t,"class","task__main svelte-6ws047"),m(a,"class","svg-image-del svelte-6ws047"),m(n,"class","task__menu-btn task__menu-btn_del svelte-6ws047"),m(r,"class","task__circle task__menu svelte-6ws047"),m(d,"class","task__color-btn svelte-6ws047"),m(c,"class","task__color-item svelte-6ws047"),m(w,"class","task__color-btn svelte-6ws047"),m(u,"class","task__color-item svelte-6ws047"),m(E,"class","task__color-btn svelte-6ws047"),m(T,"class","task__color-item svelte-6ws047"),m(f,"class","task__color-btn svelte-6ws047"),m(_,"class","task__color-item svelte-6ws047"),m(i,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-6ws047"),m(i,"style",h=`background-color: ${o[2]!=null?o[2]:"#0029FF"}`),m(e,"class",U="task "+o[0]+" svelte-6ws047"),Q(e,"isDisabled",o[3])},m(I,y){D(I,e,y),p(e,t),p(t,l),p(l,s),p(e,r),p(r,n),p(n,a),p(e,i),p(i,c),p(c,d),p(i,u),p(u,w),p(i,T),p(T,E),p(i,_),p(_,f),A||(N=[P(t,"click",o[4]),P(n,"click",ee(o[5]))],A=!0)},p(I,[y]){y&2&&te(s,I[1]),y&4&&h!==(h=`background-color: ${I[2]!=null?I[2]:"#0029FF"}`)&&m(i,"style",h),y&1&&U!==(U="task "+I[0]+" svelte-6ws047")&&m(e,"class",U),y&9&&Q(e,"isDisabled",I[3])},i:C,o:C,d(I){I&&v(e),A=!1,se(N)}}}function Be(o,e,t){let l;le(o,K,u=>t(7,l=u));let{class:s=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:i=null}=e;const c=()=>{let u=l.map(w=>(i===w.id&&(w.done=!w.done),w));K.set(u)},d=()=>{let u=l.filter(w=>w.id!=i);K.set(u),console.log("del",i)};return o.$$set=u=>{"class"in u&&t(0,s=u.class),"text"in u&&t(1,r=u.text),"color"in u&&t(2,n=u.color),"disabled"in u&&t(3,a=u.disabled),"id"in u&&t(6,i=u.id)},[s,r,n,a,c,d,i]}class me extends B{constructor(e){super();F(this,e,Be,Se,V,{class:0,text:1,color:2,disabled:3,id:6})}}function ke(o,e,t){const l=o.slice();return l[4]=e[t],l}function ge(o,e,t){const l=o.slice();return l[4]=e[t],l}function be(o,e){let t,l,s,r,n,a=C,i;return l=new me({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:o,first:null,c(){t=k("li"),q(l.$$.fragment),this.h()},l(c){t=g(c,"LI",{class:!0});var d=b(t);M(l.$$.fragment,d),d.forEach(v),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(c,d){D(c,t,d),R(l,t,null),i=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),l.$set(u)},r(){n=t.getBoundingClientRect()},f(){ae(t),a(),ne(t,n)},a(){a(),a=ie(t,n,de,{duration:300})},i(c){i||(L(l.$$.fragment,c),oe(()=>{r&&r.end(1),s=re(t,e[3],{key:e[4].id}),s.start()}),i=!0)},o(c){O(l.$$.fragment,c),s&&s.invalidate(),r=ce(t,e[2],{key:e[4].id}),i=!1},d(c){c&&v(t),j(l),c&&r&&r.end()}}}function pe(o,e){let t,l,s,r,n,a=C,i;return l=new me({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:o,first:null,c(){t=k("li"),q(l.$$.fragment),this.h()},l(c){t=g(c,"LI",{class:!0});var d=b(t);M(l.$$.fragment,d),d.forEach(v),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(c,d){D(c,t,d),R(l,t,null),i=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),l.$set(u)},r(){n=t.getBoundingClientRect()},f(){ae(t),a(),ne(t,n)},a(){a(),a=ie(t,n,de,{duration:300})},i(c){i||(L(l.$$.fragment,c),oe(()=>{r&&r.end(1),s=re(t,e[3],{key:e[4].id}),s.start()}),i=!0)},o(c){O(l.$$.fragment,c),s&&s.invalidate(),r=ce(t,e[2],{key:e[4].id}),i=!1},d(c){c&&v(t),j(l),c&&r&&r.end()}}}function Fe(o){let e,t,l,s=[],r=new Map,n,a=[],i=new Map,c,d,u=o[1].filter(Ee);const w=_=>_[4].id;for(let _=0;_<u.length;_+=1){let f=ge(o,u,_),h=w(f);r.set(h,s[_]=be(h,f))}let T=o[1].filter(we);const E=_=>_[4].id;for(let _=0;_<T.length;_+=1){let f=ke(o,T,_),h=E(f);i.set(h,a[_]=pe(h,f))}return{c(){e=k("section"),t=k("div"),l=k("ul");for(let _=0;_<s.length;_+=1)s[_].c();n=k("ul");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){e=g(_,"SECTION",{class:!0});var f=b(e);t=g(f,"DIV",{class:!0});var h=b(t);l=g(h,"UL",{class:!0});var U=b(l);for(let N=0;N<s.length;N+=1)s[N].l(U);U.forEach(v),n=g(h,"UL",{class:!0});var A=b(n);for(let N=0;N<a.length;N+=1)a[N].l(A);A.forEach(v),h.forEach(v),f.forEach(v),this.h()},h(){m(l,"class","task-section__col"),m(n,"class","task-section__col"),m(t,"class","container task-section__grid svelte-1rib3cm"),m(e,"class",c="task-section "+o[0]+" svelte-1rib3cm")},m(_,f){D(_,e,f),p(e,t),p(t,l);for(let h=0;h<s.length;h+=1)s[h].m(l,null);p(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);d=!0},p(_,[f]){if(f&2){u=_[1].filter(Ee),ue();for(let h=0;h<s.length;h+=1)s[h].r();s=fe(s,f,w,1,_,u,r,l,he,be,null,ge);for(let h=0;h<s.length;h+=1)s[h].a();_e()}if(f&2){T=_[1].filter(we),ue();for(let h=0;h<a.length;h+=1)a[h].r();a=fe(a,f,E,1,_,T,i,n,he,pe,null,ke);for(let h=0;h<a.length;h+=1)a[h].a();_e()}(!d||f&1&&c!==(c="task-section "+_[0]+" svelte-1rib3cm"))&&m(e,"class",c)},i(_){if(!d){for(let f=0;f<u.length;f+=1)L(s[f]);for(let f=0;f<T.length;f+=1)L(a[f]);d=!0}},o(_){for(let f=0;f<s.length;f+=1)O(s[f]);for(let f=0;f<a.length;f+=1)O(a[f]);d=!1},d(_){_&&v(e);for(let f=0;f<s.length;f+=1)s[f].d();for(let f=0;f<a.length;f+=1)a[f].d()}}}const Ee=o=>!o.done,we=o=>o.done;function Ve(o,e,t){let l;le(o,K,a=>t(1,l=a));let{class:s=""}=e;const[r,n]=Ne({duration:a=>Math.sqrt(a*200),fallback(a,i){const c=getComputedStyle(a),d=c.transform==="none"?"":c.transform;return{duration:600,easing:De,css:u=>`
					transform: ${d} scale(${u});
					opacity: ${u}
				`}}});return o.$$set=a=>{"class"in a&&t(0,s=a.class)},[s,l,r,n]}class Pe extends B{constructor(e){super();F(this,e,Ve,Fe,V,{class:0})}}function Te(o){let e,t,l,s=o[2].text&&Ie(o);return{c(){e=k("button"),s&&s.c(),this.h()},l(r){e=g(r,"BUTTON",{class:!0});var n=b(e);s&&s.l(n),n.forEach(v),this.h()},h(){m(e,"class","btn svelte-12pihab")},m(r,n){D(r,e,n),s&&s.m(e,null),t||(l=P(e,"click",ee(o[6])),t=!0)},p(r,n){r[2].text?s?s.p(r,n):(s=Ie(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(r){r&&v(e),s&&s.d(),t=!1,l()}}}function Ie(o){let e=o[2].text+"",t;return{c(){t=$(e)},l(l){t=x(l,e)},m(l,s){D(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&te(t,e)},d(l){l&&v(t)}}}function qe(o){let e,t,l,s,r,n=o[2]&&Te(o);return{c(){e=k("div"),t=k("input"),n&&n.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var i=b(e);t=g(i,"INPUT",{placeholder:!0,class:!0}),n&&n.l(i),i.forEach(v),this.h()},h(){m(t,"placeholder",o[1]),m(t,"class","svelte-12pihab"),m(e,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),Q(e,"isError",o[5])},m(a,i){D(a,e,i),p(e,t),ve(t,o[4]),n&&n.m(e,null),o[9](e),s||(r=[P(t,"input",o[8]),P(t,"input",o[7])],s=!0)},p(a,[i]){i&2&&m(t,"placeholder",a[1]),i&16&&t.value!==a[4]&&ve(t,a[4]),a[2]?n?n.p(a,i):(n=Te(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),i&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&m(e,"class",l),i&37&&Q(e,"isError",a[5])},i:C,o:C,d(a){a&&v(e),n&&n.d(),o[9](null),s=!1,se(r)}}}function Me(o,e,t){let{class:l=""}=e,{placeholder:s="Placeholer"}=e,{btn:r=null}=e,n,a,i=!1;const c=Ue(),d=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,i=!0)},u=()=>{t(5,i=!1)};function w(){a=this.value,t(4,a)}function T(E){Le[E?"unshift":"push"](()=>{n=E,t(3,n)})}return o.$$set=E=>{"class"in E&&t(0,l=E.class),"placeholder"in E&&t(1,s=E.placeholder),"btn"in E&&t(2,r=E.btn)},[l,s,r,n,a,i,d,u,w,T]}class Re extends B{constructor(e){super();F(this,e,Me,qe,V,{class:0,placeholder:1,btn:2})}}function je(o){let e,t,l,s;return t=new Re({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",o[1]),{c(){e=k("div"),q(t.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0});var n=b(e);M(t.$$.fragment,n),n.forEach(v),this.h()},h(){m(e,"class",l="add-todo "+o[0]+" svelte-hols8d")},m(r,n){D(r,e,n),R(t,e,null),s=!0},p(r,[n]){(!s||n&1&&l!==(l="add-todo "+r[0]+" svelte-hols8d"))&&m(e,"class",l)},i(r){s||(L(t.$$.fragment,r),s=!0)},o(r){O(t.$$.fragment,r),s=!1},d(r){r&&v(e),j(t)}}}function Ke(o,e,t){let{class:l=""}=e;const s=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};K.update(a=>a=[n,...a])};return o.$$set=r=>{"class"in r&&t(0,l=r.class)},[l,s]}class Qe extends B{constructor(e){super();F(this,e,Ke,je,V,{class:0})}}function We(o){let e,t,l,s,r,n,a;return s=new Qe({}),n=new Pe({props:{class:"mt-50"}}),{c(){e=Oe(),t=k("section"),l=k("div"),q(s.$$.fragment),q(n.$$.fragment),this.h()},l(i){Ae('[data-svelte="svelte-1ms75pp"]',document.head).forEach(v),e=Ce(i),t=g(i,"SECTION",{class:!0});var d=b(t);l=g(d,"DIV",{class:!0});var u=b(l);M(s.$$.fragment,u),u.forEach(v),d.forEach(v),M(n.$$.fragment,i),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",m(l,"class","container"),m(t,"class",r=""+(o[0]+" mt-50 svelte-hols8d"))},m(i,c){D(i,e,c),D(i,t,c),p(t,l),R(s,l,null),R(n,i,c),a=!0},p(i,[c]){(!a||c&1&&r!==(r=""+(i[0]+" mt-50 svelte-hols8d")))&&m(t,"class",r)},i(i){a||(L(s.$$.fragment,i),L(n.$$.fragment,i),a=!0)},o(i){O(s.$$.fragment,i),O(n.$$.fragment,i),a=!1},d(i){i&&v(e),i&&v(t),j(s),j(n,i)}}}function Xe(o,e,t){let{class:l=""}=e;return o.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class Ze extends B{constructor(e){super();F(this,e,Xe,We,V,{class:0})}}export{Ze as default};
