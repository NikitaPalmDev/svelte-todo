import{C as Ne,S as B,i as F,s as V,e as m,t as $,c as k,a as b,g as x,d as g,b as v,K as Q,f as D,D as p,L as P,M as ee,h as te,E as C,N as se,O as le,v as q,w as M,x as R,P as ae,Q as ne,R as oe,p as L,T as ie,U as re,n as O,V as ce,A as j,m as ue,W as fe,o as _e,X as we,Y as de,Z as he,_ as De,$ as ge,a0 as Ue,a1 as Le,j as Oe,a2 as Ae,l as Ce}from"../chunks/vendor-174655a0.js";const K=Ne([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);function Se(i){let e,t,l,s,r,n,a,o,c,d,u,T,I,E,_,f,h,U,A,w;return{c(){e=m("div"),t=m("div"),l=m("p"),s=$(i[1]),r=m("div"),n=m("button"),a=m("span"),o=m("ul"),c=m("li"),d=m("button"),u=m("li"),T=m("button"),I=m("li"),E=m("button"),_=m("li"),f=m("button"),this.h()},l(y){e=k(y,"DIV",{class:!0});var N=b(e);t=k(N,"DIV",{class:!0});var W=b(t);l=k(W,"P",{class:!0});var X=b(l);s=x(X,i[1]),X.forEach(g),W.forEach(g),r=k(N,"DIV",{class:!0});var Y=b(r);n=k(Y,"BUTTON",{class:!0});var Z=b(n);a=k(Z,"SPAN",{class:!0}),b(a).forEach(g),Z.forEach(g),Y.forEach(g),o=k(N,"UL",{class:!0,style:!0});var S=b(o);c=k(S,"LI",{class:!0});var z=b(c);d=k(z,"BUTTON",{class:!0}),b(d).forEach(g),z.forEach(g),u=k(S,"LI",{class:!0});var G=b(u);T=k(G,"BUTTON",{class:!0}),b(T).forEach(g),G.forEach(g),I=k(S,"LI",{class:!0});var H=b(I);E=k(H,"BUTTON",{class:!0}),b(E).forEach(g),H.forEach(g),_=k(S,"LI",{class:!0});var J=b(_);f=k(J,"BUTTON",{class:!0}),b(f).forEach(g),J.forEach(g),S.forEach(g),N.forEach(g),this.h()},h(){v(l,"class","svelte-go21sg"),v(t,"class","task__main svelte-go21sg"),v(a,"class","svg-image-del svelte-go21sg"),v(n,"class","task__menu-btn task__menu-btn_del svelte-go21sg"),v(r,"class","task__circle task__menu svelte-go21sg"),v(d,"class","task__color-btn svelte-go21sg"),v(c,"class","task__color-item svelte-go21sg"),v(T,"class","task__color-btn svelte-go21sg"),v(u,"class","task__color-item svelte-go21sg"),v(E,"class","task__color-btn svelte-go21sg"),v(I,"class","task__color-item svelte-go21sg"),v(f,"class","task__color-btn svelte-go21sg"),v(_,"class","task__color-item svelte-go21sg"),v(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-go21sg"),v(o,"style",h=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",U="task "+i[0]+" svelte-go21sg"),Q(e,"isDisabled",i[3])},m(y,N){D(y,e,N),p(e,t),p(t,l),p(l,s),p(e,r),p(r,n),p(n,a),p(e,o),p(o,c),p(c,d),p(o,u),p(u,T),p(o,I),p(I,E),p(o,_),p(_,f),A||(w=[P(t,"click",i[4]),P(n,"click",ee(i[5]))],A=!0)},p(y,[N]){N&2&&te(s,y[1]),N&4&&h!==(h=`background-color: ${y[2]!=null?y[2]:"#0029FF"}`)&&v(o,"style",h),N&1&&U!==(U="task "+y[0]+" svelte-go21sg")&&v(e,"class",U),N&9&&Q(e,"isDisabled",y[3])},i:C,o:C,d(y){y&&g(e),A=!1,se(w)}}}function Be(i,e,t){let l;le(i,K,u=>t(7,l=u));let{class:s=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:o=null}=e;const c=()=>{let u=l.map(T=>(o===T.id&&(T.done=!T.done),T));K.set(u)},d=()=>{let u=l.filter(T=>T.id!=o);K.set(u),console.log("del",o)};return i.$$set=u=>{"class"in u&&t(0,s=u.class),"text"in u&&t(1,r=u.text),"color"in u&&t(2,n=u.color),"disabled"in u&&t(3,a=u.disabled),"id"in u&&t(6,o=u.id)},[s,r,n,a,c,d,o]}class ve extends B{constructor(e){super();F(this,e,Be,Se,V,{class:0,text:1,color:2,disabled:3,id:6})}}function me(i,e,t){const l=i.slice();return l[4]=e[t],l}function ke(i,e,t){const l=i.slice();return l[4]=e[t],l}function be(i,e){let t,l,s,r,n,a=C,o;return l=new ve({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=m("li"),q(l.$$.fragment),this.h()},l(c){t=k(c,"LI",{class:!0});var d=b(t);M(l.$$.fragment,d),d.forEach(g),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,d){D(c,t,d),R(l,t,null),o=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),l.$set(u)},r(){n=t.getBoundingClientRect()},f(){ae(t),a(),ne(t,n)},a(){a(),a=oe(t,n,de,{duration:300})},i(c){o||(L(l.$$.fragment,c),ie(()=>{r&&r.end(1),s=re(t,e[3],{key:e[4].id}),s.start()}),o=!0)},o(c){O(l.$$.fragment,c),s&&s.invalidate(),r=ce(t,e[2],{key:e[4].id}),o=!1},d(c){c&&g(t),j(l),c&&r&&r.end()}}}function pe(i,e){let t,l,s,r,n,a=C,o;return l=new ve({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=m("li"),q(l.$$.fragment),this.h()},l(c){t=k(c,"LI",{class:!0});var d=b(t);M(l.$$.fragment,d),d.forEach(g),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,d){D(c,t,d),R(l,t,null),o=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),l.$set(u)},r(){n=t.getBoundingClientRect()},f(){ae(t),a(),ne(t,n)},a(){a(),a=oe(t,n,de,{duration:300})},i(c){o||(L(l.$$.fragment,c),ie(()=>{r&&r.end(1),s=re(t,e[3],{key:e[4].id}),s.start()}),o=!0)},o(c){O(l.$$.fragment,c),s&&s.invalidate(),r=ce(t,e[2],{key:e[4].id}),o=!1},d(c){c&&g(t),j(l),c&&r&&r.end()}}}function Fe(i){let e,t,l,s=[],r=new Map,n,a=[],o=new Map,c,d,u=i[1].filter(Ee);const T=_=>_[4].id;for(let _=0;_<u.length;_+=1){let f=ke(i,u,_),h=T(f);r.set(h,s[_]=be(h,f))}let I=i[1].filter(Te);const E=_=>_[4].id;for(let _=0;_<I.length;_+=1){let f=me(i,I,_),h=E(f);o.set(h,a[_]=pe(h,f))}return{c(){e=m("section"),t=m("div"),l=m("ul");for(let _=0;_<s.length;_+=1)s[_].c();n=m("ul");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){e=k(_,"SECTION",{class:!0});var f=b(e);t=k(f,"DIV",{class:!0});var h=b(t);l=k(h,"UL",{class:!0});var U=b(l);for(let w=0;w<s.length;w+=1)s[w].l(U);U.forEach(g),n=k(h,"UL",{class:!0});var A=b(n);for(let w=0;w<a.length;w+=1)a[w].l(A);A.forEach(g),h.forEach(g),f.forEach(g),this.h()},h(){v(l,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",c="task-section "+i[0]+" svelte-1rib3cm")},m(_,f){D(_,e,f),p(e,t),p(t,l);for(let h=0;h<s.length;h+=1)s[h].m(l,null);p(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);d=!0},p(_,[f]){if(f&2){u=_[1].filter(Ee),ue();for(let h=0;h<s.length;h+=1)s[h].r();s=fe(s,f,T,1,_,u,r,l,he,be,null,ke);for(let h=0;h<s.length;h+=1)s[h].a();_e()}if(f&2){I=_[1].filter(Te),ue();for(let h=0;h<a.length;h+=1)a[h].r();a=fe(a,f,E,1,_,I,o,n,he,pe,null,me);for(let h=0;h<a.length;h+=1)a[h].a();_e()}(!d||f&1&&c!==(c="task-section "+_[0]+" svelte-1rib3cm"))&&v(e,"class",c)},i(_){if(!d){for(let f=0;f<u.length;f+=1)L(s[f]);for(let f=0;f<I.length;f+=1)L(a[f]);d=!0}},o(_){for(let f=0;f<s.length;f+=1)O(s[f]);for(let f=0;f<a.length;f+=1)O(a[f]);d=!1},d(_){_&&g(e);for(let f=0;f<s.length;f+=1)s[f].d();for(let f=0;f<a.length;f+=1)a[f].d()}}}const Ee=i=>!i.done,Te=i=>i.done;function Ve(i,e,t){let l;le(i,K,a=>t(1,l=a));let{class:s=""}=e;const[r,n]=we({duration:a=>Math.sqrt(a*200),fallback(a,o){const c=getComputedStyle(a),d=c.transform==="none"?"":c.transform;return{duration:600,easing:De,css:u=>`
					transform: ${d} scale(${u});
					opacity: ${u}
				`}}});return i.$$set=a=>{"class"in a&&t(0,s=a.class)},[s,l,r,n]}class Pe extends B{constructor(e){super();F(this,e,Ve,Fe,V,{class:0})}}function Ie(i){let e,t,l,s=i[2].text&&ye(i);return{c(){e=m("button"),s&&s.c(),this.h()},l(r){e=k(r,"BUTTON",{class:!0});var n=b(e);s&&s.l(n),n.forEach(g),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(r,n){D(r,e,n),s&&s.m(e,null),t||(l=P(e,"click",ee(i[6])),t=!0)},p(r,n){r[2].text?s?s.p(r,n):(s=ye(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(r){r&&g(e),s&&s.d(),t=!1,l()}}}function ye(i){let e=i[2].text+"",t;return{c(){t=$(e)},l(l){t=x(l,e)},m(l,s){D(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&te(t,e)},d(l){l&&g(t)}}}function qe(i){let e,t,l,s,r,n=i[2]&&Ie(i);return{c(){e=m("div"),t=m("input"),n&&n.c(),this.h()},l(a){e=k(a,"DIV",{class:!0});var o=b(e);t=k(o,"INPUT",{placeholder:!0,class:!0}),n&&n.l(o),o.forEach(g),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",l="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),Q(e,"isError",i[5])},m(a,o){D(a,e,o),p(e,t),ge(t,i[4]),n&&n.m(e,null),i[9](e),s||(r=[P(t,"input",i[8]),P(t,"input",i[7])],s=!0)},p(a,[o]){o&2&&v(t,"placeholder",a[1]),o&16&&t.value!==a[4]&&ge(t,a[4]),a[2]?n?n.p(a,o):(n=Ie(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",l),o&37&&Q(e,"isError",a[5])},i:C,o:C,d(a){a&&g(e),n&&n.d(),i[9](null),s=!1,se(r)}}}function Me(i,e,t){let{class:l=""}=e,{placeholder:s="Placeholer"}=e,{btn:r=null}=e,n,a,o=!1;const c=Ue(),d=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,o=!0)},u=()=>{t(5,o=!1)};function T(){a=this.value,t(4,a)}function I(E){Le[E?"unshift":"push"](()=>{n=E,t(3,n)})}return i.$$set=E=>{"class"in E&&t(0,l=E.class),"placeholder"in E&&t(1,s=E.placeholder),"btn"in E&&t(2,r=E.btn)},[l,s,r,n,a,o,d,u,T,I]}class Re extends B{constructor(e){super();F(this,e,Me,qe,V,{class:0,placeholder:1,btn:2})}}function je(i){let e,t,l,s;return t=new Re({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=m("div"),q(t.$$.fragment),this.h()},l(r){e=k(r,"DIV",{class:!0});var n=b(e);M(t.$$.fragment,n),n.forEach(g),this.h()},h(){v(e,"class",l="add-todo "+i[0]+" svelte-hols8d")},m(r,n){D(r,e,n),R(t,e,null),s=!0},p(r,[n]){(!s||n&1&&l!==(l="add-todo "+r[0]+" svelte-hols8d"))&&v(e,"class",l)},i(r){s||(L(t.$$.fragment,r),s=!0)},o(r){O(t.$$.fragment,r),s=!1},d(r){r&&g(e),j(t)}}}function Ke(i,e,t){let{class:l=""}=e;const s=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};K.update(a=>a=[n,...a])};return i.$$set=r=>{"class"in r&&t(0,l=r.class)},[l,s]}class Qe extends B{constructor(e){super();F(this,e,Ke,je,V,{class:0})}}function We(i){let e,t,l,s,r,n,a;return s=new Qe({}),n=new Pe({props:{class:"mt-50"}}),{c(){e=Oe(),t=m("section"),l=m("div"),q(s.$$.fragment),q(n.$$.fragment),this.h()},l(o){Ae('[data-svelte="svelte-1ms75pp"]',document.head).forEach(g),e=Ce(o),t=k(o,"SECTION",{class:!0});var d=b(t);l=k(d,"DIV",{class:!0});var u=b(l);M(s.$$.fragment,u),u.forEach(g),d.forEach(g),M(n.$$.fragment,o),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(l,"class","container"),v(t,"class",r=""+(i[0]+" mt-50 svelte-hols8d"))},m(o,c){D(o,e,c),D(o,t,c),p(t,l),R(s,l,null),R(n,o,c),a=!0},p(o,[c]){(!a||c&1&&r!==(r=""+(o[0]+" mt-50 svelte-hols8d")))&&v(t,"class",r)},i(o){a||(L(s.$$.fragment,o),L(n.$$.fragment,o),a=!0)},o(o){O(s.$$.fragment,o),O(n.$$.fragment,o),a=!1},d(o){o&&g(e),o&&g(t),j(s),j(n,o)}}}function Xe(i,e,t){let{class:l=""}=e;return i.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class Ze extends B{constructor(e){super();F(this,e,Xe,We,V,{class:0})}}export{Ze as default};
