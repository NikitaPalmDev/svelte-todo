import{C as Te,S as L,i as O,s as S,e as p,t as G,c as k,a as g,g as H,d as v,b as m,K as j,f as w,D as T,L as F,M as J,h as $,E as A,N as x,O as ee,v as V,w as B,x as P,P as te,Q as le,R as se,p as D,T as ae,U as ne,n as U,V as oe,A as q,m as re,W as ie,o as ce,X as ye,Y as ue,Z as fe,_ as Ie,$ as _e,a0 as Ne,a1 as we,j as De,a2 as Ue,l as Ae}from"../chunks/vendor-174655a0.js";const M=Te([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);function Ce(o){let e,t,s,l,i,n,a,r,c,d,u,y,I,E,_,f,h,C;return{c(){e=p("div"),t=p("div"),s=p("p"),l=G(o[1]),i=p("div"),n=p("button"),a=p("span"),r=p("ul"),c=p("li"),d=p("button"),u=p("li"),y=p("button"),I=p("li"),E=p("button"),this.h()},l(N){e=k(N,"DIV",{class:!0});var b=g(e);t=k(b,"DIV",{class:!0});var K=g(t);s=k(K,"P",{class:!0});var Q=g(s);l=H(Q,o[1]),Q.forEach(v),K.forEach(v),i=k(b,"DIV",{class:!0});var W=g(i);n=k(W,"BUTTON",{class:!0});var X=g(n);a=k(X,"SPAN",{class:!0}),g(a).forEach(v),X.forEach(v),W.forEach(v),r=k(b,"UL",{class:!0,style:!0});var R=g(r);c=k(R,"LI",{class:!0});var Y=g(c);d=k(Y,"BUTTON",{class:!0}),g(d).forEach(v),Y.forEach(v),u=k(R,"LI",{class:!0});var Z=g(u);y=k(Z,"BUTTON",{class:!0}),g(y).forEach(v),Z.forEach(v),I=k(R,"LI",{class:!0});var z=g(I);E=k(z,"BUTTON",{class:!0}),g(E).forEach(v),z.forEach(v),R.forEach(v),b.forEach(v),this.h()},h(){m(s,"class","svelte-pv82ro"),m(t,"class","task__main svelte-pv82ro"),m(a,"class","svg-image-del svelte-pv82ro"),m(n,"class","task__menu-btn task__menu-btn_del svelte-pv82ro"),m(i,"class","task__circle task__menu svelte-pv82ro"),m(d,"class","task__color-btn svelte-pv82ro"),m(c,"class","task__color-item svelte-pv82ro"),m(y,"class","task__color-btn svelte-pv82ro"),m(u,"class","task__color-item svelte-pv82ro"),m(E,"class","task__color-btn svelte-pv82ro"),m(I,"class","task__color-item svelte-pv82ro"),m(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-pv82ro"),m(r,"style",_=`background-color: ${o[2]!=null?o[2]:"#0029FF"}`),m(e,"class",f="task "+o[0]+" svelte-pv82ro"),j(e,"isDisabled",o[3])},m(N,b){w(N,e,b),T(e,t),T(t,s),T(s,l),T(e,i),T(i,n),T(n,a),T(e,r),T(r,c),T(c,d),T(r,u),T(u,y),T(r,I),T(I,E),h||(C=[F(t,"click",o[4]),F(n,"click",J(o[5]))],h=!0)},p(N,[b]){b&2&&$(l,N[1]),b&4&&_!==(_=`background-color: ${N[2]!=null?N[2]:"#0029FF"}`)&&m(r,"style",_),b&1&&f!==(f="task "+N[0]+" svelte-pv82ro")&&m(e,"class",f),b&9&&j(e,"isDisabled",N[3])},i:A,o:A,d(N){N&&v(e),h=!1,x(C)}}}function Le(o,e,t){let s;ee(o,M,u=>t(7,s=u));let{class:l=""}=e,{text:i=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:r=null}=e;const c=()=>{let u=s.map(y=>(r===y.id&&(y.done=!y.done),y));M.set(u)},d=()=>{let u=s.filter(y=>y.id!=r);M.set(u),console.log("del",r)};return o.$$set=u=>{"class"in u&&t(0,l=u.class),"text"in u&&t(1,i=u.text),"color"in u&&t(2,n=u.color),"disabled"in u&&t(3,a=u.disabled),"id"in u&&t(6,r=u.id)},[l,i,n,a,c,d,r]}class de extends L{constructor(e){super();O(this,e,Le,Ce,S,{class:0,text:1,color:2,disabled:3,id:6})}}function he(o,e,t){const s=o.slice();return s[4]=e[t],s}function ve(o,e,t){const s=o.slice();return s[4]=e[t],s}function me(o,e){let t,s,l,i,n,a=A,r;return s=new de({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:o,first:null,c(){t=p("li"),V(s.$$.fragment),this.h()},l(c){t=k(c,"LI",{class:!0});var d=g(t);B(s.$$.fragment,d),d.forEach(v),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(c,d){w(c,t,d),P(s,t,null),r=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),s.$set(u)},r(){n=t.getBoundingClientRect()},f(){te(t),a(),le(t,n)},a(){a(),a=se(t,n,ue,{duration:300})},i(c){r||(D(s.$$.fragment,c),ae(()=>{i&&i.end(1),l=ne(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(c){U(s.$$.fragment,c),l&&l.invalidate(),i=oe(t,e[2],{key:e[4].id}),r=!1},d(c){c&&v(t),q(s),c&&i&&i.end()}}}function pe(o,e){let t,s,l,i,n,a=A,r;return s=new de({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:o,first:null,c(){t=p("li"),V(s.$$.fragment),this.h()},l(c){t=k(c,"LI",{class:!0});var d=g(t);B(s.$$.fragment,d),d.forEach(v),this.h()},h(){m(t,"class","task-section__item"),this.first=t},m(c,d){w(c,t,d),P(s,t,null),r=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),s.$set(u)},r(){n=t.getBoundingClientRect()},f(){te(t),a(),le(t,n)},a(){a(),a=se(t,n,ue,{duration:300})},i(c){r||(D(s.$$.fragment,c),ae(()=>{i&&i.end(1),l=ne(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(c){U(s.$$.fragment,c),l&&l.invalidate(),i=oe(t,e[2],{key:e[4].id}),r=!1},d(c){c&&v(t),q(s),c&&i&&i.end()}}}function Oe(o){let e,t,s,l=[],i=new Map,n,a=[],r=new Map,c,d,u=o[1].filter(ke);const y=_=>_[4].id;for(let _=0;_<u.length;_+=1){let f=ve(o,u,_),h=y(f);i.set(h,l[_]=me(h,f))}let I=o[1].filter(ge);const E=_=>_[4].id;for(let _=0;_<I.length;_+=1){let f=he(o,I,_),h=E(f);r.set(h,a[_]=pe(h,f))}return{c(){e=p("section"),t=p("div"),s=p("ul");for(let _=0;_<l.length;_+=1)l[_].c();n=p("ul");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){e=k(_,"SECTION",{class:!0});var f=g(e);t=k(f,"DIV",{class:!0});var h=g(t);s=k(h,"UL",{class:!0});var C=g(s);for(let b=0;b<l.length;b+=1)l[b].l(C);C.forEach(v),n=k(h,"UL",{class:!0});var N=g(n);for(let b=0;b<a.length;b+=1)a[b].l(N);N.forEach(v),h.forEach(v),f.forEach(v),this.h()},h(){m(s,"class","task-section__col"),m(n,"class","task-section__col"),m(t,"class","container task-section__grid svelte-1rib3cm"),m(e,"class",c="task-section "+o[0]+" svelte-1rib3cm")},m(_,f){w(_,e,f),T(e,t),T(t,s);for(let h=0;h<l.length;h+=1)l[h].m(s,null);T(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);d=!0},p(_,[f]){if(f&2){u=_[1].filter(ke),re();for(let h=0;h<l.length;h+=1)l[h].r();l=ie(l,f,y,1,_,u,i,s,fe,me,null,ve);for(let h=0;h<l.length;h+=1)l[h].a();ce()}if(f&2){I=_[1].filter(ge),re();for(let h=0;h<a.length;h+=1)a[h].r();a=ie(a,f,E,1,_,I,r,n,fe,pe,null,he);for(let h=0;h<a.length;h+=1)a[h].a();ce()}(!d||f&1&&c!==(c="task-section "+_[0]+" svelte-1rib3cm"))&&m(e,"class",c)},i(_){if(!d){for(let f=0;f<u.length;f+=1)D(l[f]);for(let f=0;f<I.length;f+=1)D(a[f]);d=!0}},o(_){for(let f=0;f<l.length;f+=1)U(l[f]);for(let f=0;f<a.length;f+=1)U(a[f]);d=!1},d(_){_&&v(e);for(let f=0;f<l.length;f+=1)l[f].d();for(let f=0;f<a.length;f+=1)a[f].d()}}}const ke=o=>!o.done,ge=o=>o.done;function Se(o,e,t){let s;ee(o,M,a=>t(1,s=a));let{class:l=""}=e;const[i,n]=ye({duration:a=>Math.sqrt(a*200),fallback(a,r){const c=getComputedStyle(a),d=c.transform==="none"?"":c.transform;return{duration:600,easing:Ie,css:u=>`
					transform: ${d} scale(${u});
					opacity: ${u}
				`}}});return o.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,s,i,n]}class Fe extends L{constructor(e){super();O(this,e,Se,Oe,S,{class:0})}}function be(o){let e,t,s,l=o[2].text&&Ee(o);return{c(){e=p("button"),l&&l.c(),this.h()},l(i){e=k(i,"BUTTON",{class:!0});var n=g(e);l&&l.l(n),n.forEach(v),this.h()},h(){m(e,"class","btn svelte-12pihab")},m(i,n){w(i,e,n),l&&l.m(e,null),t||(s=F(e,"click",J(o[6])),t=!0)},p(i,n){i[2].text?l?l.p(i,n):(l=Ee(i),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(i){i&&v(e),l&&l.d(),t=!1,s()}}}function Ee(o){let e=o[2].text+"",t;return{c(){t=G(e)},l(s){t=H(s,e)},m(s,l){w(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&$(t,e)},d(s){s&&v(t)}}}function Ve(o){let e,t,s,l,i,n=o[2]&&be(o);return{c(){e=p("div"),t=p("input"),n&&n.c(),this.h()},l(a){e=k(a,"DIV",{class:!0});var r=g(e);t=k(r,"INPUT",{placeholder:!0,class:!0}),n&&n.l(r),r.forEach(v),this.h()},h(){m(t,"placeholder",o[1]),m(t,"class","svelte-12pihab"),m(e,"class",s="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),j(e,"isError",o[5])},m(a,r){w(a,e,r),T(e,t),_e(t,o[4]),n&&n.m(e,null),o[9](e),l||(i=[F(t,"input",o[8]),F(t,"input",o[7])],l=!0)},p(a,[r]){r&2&&m(t,"placeholder",a[1]),r&16&&t.value!==a[4]&&_e(t,a[4]),a[2]?n?n.p(a,r):(n=be(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),r&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&m(e,"class",s),r&37&&j(e,"isError",a[5])},i:A,o:A,d(a){a&&v(e),n&&n.d(),o[9](null),l=!1,x(i)}}}function Be(o,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:i=null}=e,n,a,r=!1;const c=Ne(),d=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,r=!0)},u=()=>{t(5,r=!1)};function y(){a=this.value,t(4,a)}function I(E){we[E?"unshift":"push"](()=>{n=E,t(3,n)})}return o.$$set=E=>{"class"in E&&t(0,s=E.class),"placeholder"in E&&t(1,l=E.placeholder),"btn"in E&&t(2,i=E.btn)},[s,l,i,n,a,r,d,u,y,I]}class Pe extends L{constructor(e){super();O(this,e,Be,Ve,S,{class:0,placeholder:1,btn:2})}}function qe(o){let e,t,s,l;return t=new Pe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",o[1]),{c(){e=p("div"),V(t.$$.fragment),this.h()},l(i){e=k(i,"DIV",{class:!0});var n=g(e);B(t.$$.fragment,n),n.forEach(v),this.h()},h(){m(e,"class",s="add-todo "+o[0]+" svelte-hols8d")},m(i,n){w(i,e,n),P(t,e,null),l=!0},p(i,[n]){(!l||n&1&&s!==(s="add-todo "+i[0]+" svelte-hols8d"))&&m(e,"class",s)},i(i){l||(D(t.$$.fragment,i),l=!0)},o(i){U(t.$$.fragment,i),l=!1},d(i){i&&v(e),q(t)}}}function Me(o,e,t){let{class:s=""}=e;const l=i=>{let n={id:Date.now(),text:i.detail.value,color:null,done:!1};M.update(a=>a=[n,...a])};return o.$$set=i=>{"class"in i&&t(0,s=i.class)},[s,l]}class Re extends L{constructor(e){super();O(this,e,Me,qe,S,{class:0})}}function je(o){let e,t,s,l,i,n,a;return l=new Re({}),n=new Fe({props:{class:"mt-50"}}),{c(){e=De(),t=p("section"),s=p("div"),V(l.$$.fragment),V(n.$$.fragment),this.h()},l(r){Ue('[data-svelte="svelte-1ms75pp"]',document.head).forEach(v),e=Ae(r),t=k(r,"SECTION",{class:!0});var d=g(t);s=k(d,"DIV",{class:!0});var u=g(s);B(l.$$.fragment,u),u.forEach(v),d.forEach(v),B(n.$$.fragment,r),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",m(s,"class","container"),m(t,"class",i=""+(o[0]+" mt-50 svelte-hols8d"))},m(r,c){w(r,e,c),w(r,t,c),T(t,s),P(l,s,null),P(n,r,c),a=!0},p(r,[c]){(!a||c&1&&i!==(i=""+(r[0]+" mt-50 svelte-hols8d")))&&m(t,"class",i)},i(r){a||(D(l.$$.fragment,r),D(n.$$.fragment,r),a=!0)},o(r){U(l.$$.fragment,r),U(n.$$.fragment,r),a=!1},d(r){r&&v(e),r&&v(t),q(l),q(n,r)}}}function Ke(o,e,t){let{class:s=""}=e;return o.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class We extends L{constructor(e){super();O(this,e,Ke,je,S,{class:0})}}export{We as default};
