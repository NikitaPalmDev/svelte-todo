import{K as pe,C as Ee,S,i as V,s as F,e as k,c as b,a as E,d as m,b as v,f as N,D as y,L as O,M as K,N as ye,t as z,g as G,O as P,h as H,P as Q,Q as Te,E as U,R as J,T as W,v as j,w as B,x as L,U as $,V as x,W as ee,p as A,X as te,Y as le,n as C,Z as se,A as M,m as ae,o as ne,_ as Ie,$ as oe,a0 as re,a1 as we,a2 as ie,a3 as Ne,a4 as De,j as Ae,a5 as Ce,l as qe}from"../chunks/vendor-1db80630.js";const q=Ee([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),Oe=pe(q,(r,e)=>{let t=r.filter(i=>i.color).map(i=>i.color),s=t.filter((i,o)=>t.indexOf(i)===o).map((i,o)=>({id:o,color:i}));e(s)});function ce(r,e,t){const l=r.slice();return l[11]=e[t],l}function ue(r,e){let t,l,s,i,o;return{key:r,first:null,c(){t=k("li"),l=k("button"),this.h()},l(a){t=b(a,"LI",{class:!0});var n=E(t);l=b(n,"BUTTON",{class:!0,style:!0}),E(l).forEach(m),n.forEach(m),this.h()},h(){v(l,"class","task__color-btn svelte-100588h"),v(l,"style",s=`background-color: ${e[11].color}`),v(t,"class","task__color-item svelte-100588h"),this.first=t},m(a,n){N(a,t,n),y(t,l),i||(o=O(l,"click",K(function(){ye(e[7](e[11].color))&&e[7](e[11].color).apply(this,arguments)})),i=!0)},p(a,n){e=a,n&20&&s!==(s=`background-color: ${e[11].color}`)&&v(l,"style",s)},d(a){a&&m(t),i=!1,o()}}}function Ue(r){let e,t,l,s,i,o,a,n,c=[],d=new Map,g,w,T,h,f=r[4].filter(r[9]);const _=u=>u[11].id;for(let u=0;u<f.length;u+=1){let p=ce(r,f,u),I=_(p);d.set(I,c[u]=ue(I,p))}return{c(){e=k("div"),t=k("div"),l=k("p"),s=z(r[1]),i=k("div"),o=k("button"),a=k("span"),n=k("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=b(u,"DIV",{class:!0});var p=E(e);t=b(p,"DIV",{class:!0});var I=E(t);l=b(I,"P",{class:!0});var D=E(l);s=G(D,r[1]),D.forEach(m),I.forEach(m),i=b(p,"DIV",{class:!0});var X=E(i);o=b(X,"BUTTON",{class:!0});var Y=E(o);a=b(Y,"SPAN",{class:!0}),E(a).forEach(m),Y.forEach(m),X.forEach(m),n=b(p,"UL",{class:!0,style:!0});var Z=E(n);for(let R=0;R<c.length;R+=1)c[R].l(Z);Z.forEach(m),p.forEach(m),this.h()},h(){v(l,"class","svelte-100588h"),v(t,"class","task__main svelte-100588h"),v(a,"class","svg-image-del svelte-100588h"),v(o,"class","task__menu-btn task__menu-btn_del svelte-100588h"),v(i,"class","task__circle task__menu svelte-100588h"),v(n,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),v(n,"style",g=`background-color: ${r[2]}`),v(e,"class",w="task "+r[0]+" svelte-100588h"),P(e,"isDisabled",r[3])},m(u,p){N(u,e,p),y(e,t),y(t,l),y(l,s),y(e,i),y(i,o),y(o,a),y(e,n);for(let I=0;I<c.length;I+=1)c[I].m(n,null);T||(h=[O(t,"click",r[5]),O(o,"click",K(r[6]))],T=!0)},p(u,[p]){p&2&&H(s,u[1]),p&148&&(f=u[4].filter(u[9]),c=Q(c,p,_,1,u,f,d,n,Te,ue,null,ce)),p&4&&g!==(g=`background-color: ${u[2]}`)&&v(n,"style",g),p&1&&w!==(w="task "+u[0]+" svelte-100588h")&&v(e,"class",w),p&9&&P(e,"isDisabled",u[3])},i:U,o:U,d(u){u&&m(e);for(let p=0;p<c.length;p+=1)c[p].d();T=!1,J(h)}}}function Se(r,e,t){let l,s;W(r,q,h=>t(10,l=h)),W(r,Oe,h=>t(4,s=h));let{class:i=""}=e,{text:o=""}=e,{color:a="#0029FF"}=e,{disabled:n=!1}=e,{id:c=null}=e;const d=()=>{let h=l.map(f=>(c===f.id&&(f.done=!f.done),f));q.set(h)},g=()=>{let h=l.filter(f=>f.id!=c);q.set(h),console.log("del",c)},w=h=>{let f=l.map(_=>(c===_.id&&(_.color=h),_));q.set(f)},T=h=>h.color!=a;return r.$$set=h=>{"class"in h&&t(0,i=h.class),"text"in h&&t(1,o=h.text),"color"in h&&t(2,a=h.color),"disabled"in h&&t(3,n=h.disabled),"id"in h&&t(8,c=h.id)},[i,o,a,n,s,d,g,w,c,T]}class fe extends S{constructor(e){super();V(this,e,Se,Ue,F,{class:0,text:1,color:2,disabled:3,id:8})}}function _e(r,e,t){const l=r.slice();return l[4]=e[t],l}function de(r,e,t){const l=r.slice();return l[4]=e[t],l}function he(r,e){let t,l,s,i,o,a=U,n;return l=new fe({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:r,first:null,c(){t=k("li"),j(l.$$.fragment),this.h()},l(c){t=b(c,"LI",{class:!0});var d=E(t);B(l.$$.fragment,d),d.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,d){N(c,t,d),L(l,t,null),n=!0},p(c,d){e=c;const g={};d&2&&(g.text=e[4].text),d&2&&(g.color=e[4].color?e[4].color:null),d&2&&(g.id=e[4].id),l.$set(g)},r(){o=t.getBoundingClientRect()},f(){$(t),a(),x(t,o)},a(){a(),a=ee(t,o,oe,{duration:300})},i(c){n||(A(l.$$.fragment,c),te(()=>{i&&i.end(1),s=le(t,e[3],{key:e[4].id}),s.start()}),n=!0)},o(c){C(l.$$.fragment,c),s&&s.invalidate(),i=se(t,e[2],{key:e[4].id}),n=!1},d(c){c&&m(t),M(l),c&&i&&i.end()}}}function me(r,e){let t,l,s,i,o,a=U,n;return l=new fe({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:r,first:null,c(){t=k("li"),j(l.$$.fragment),this.h()},l(c){t=b(c,"LI",{class:!0});var d=E(t);B(l.$$.fragment,d),d.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,d){N(c,t,d),L(l,t,null),n=!0},p(c,d){e=c;const g={};d&2&&(g.text=e[4].text),d&2&&(g.color=e[4].color?e[4].color:null),d&2&&(g.id=e[4].id),l.$set(g)},r(){o=t.getBoundingClientRect()},f(){$(t),a(),x(t,o)},a(){a(),a=ee(t,o,oe,{duration:300})},i(c){n||(A(l.$$.fragment,c),te(()=>{i&&i.end(1),s=le(t,e[3],{key:e[4].id}),s.start()}),n=!0)},o(c){C(l.$$.fragment,c),s&&s.invalidate(),i=se(t,e[2],{key:e[4].id}),n=!1},d(c){c&&m(t),M(l),c&&i&&i.end()}}}function Ve(r){let e,t,l,s=[],i=new Map,o,a=[],n=new Map,c,d,g=r[1].filter(ve);const w=f=>f[4].id;for(let f=0;f<g.length;f+=1){let _=de(r,g,f),u=w(_);i.set(u,s[f]=he(u,_))}let T=r[1].filter(ge);const h=f=>f[4].id;for(let f=0;f<T.length;f+=1){let _=_e(r,T,f),u=h(_);n.set(u,a[f]=me(u,_))}return{c(){e=k("section"),t=k("div"),l=k("ul");for(let f=0;f<s.length;f+=1)s[f].c();o=k("ul");for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){e=b(f,"SECTION",{class:!0});var _=E(e);t=b(_,"DIV",{class:!0});var u=E(t);l=b(u,"UL",{class:!0});var p=E(l);for(let D=0;D<s.length;D+=1)s[D].l(p);p.forEach(m),o=b(u,"UL",{class:!0});var I=E(o);for(let D=0;D<a.length;D+=1)a[D].l(I);I.forEach(m),u.forEach(m),_.forEach(m),this.h()},h(){v(l,"class","task-section__col"),v(o,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",c="task-section "+r[0]+" svelte-1rib3cm")},m(f,_){N(f,e,_),y(e,t),y(t,l);for(let u=0;u<s.length;u+=1)s[u].m(l,null);y(t,o);for(let u=0;u<a.length;u+=1)a[u].m(o,null);d=!0},p(f,[_]){if(_&2){g=f[1].filter(ve),ae();for(let u=0;u<s.length;u+=1)s[u].r();s=Q(s,_,w,1,f,g,i,l,re,he,null,de);for(let u=0;u<s.length;u+=1)s[u].a();ne()}if(_&2){T=f[1].filter(ge),ae();for(let u=0;u<a.length;u+=1)a[u].r();a=Q(a,_,h,1,f,T,n,o,re,me,null,_e);for(let u=0;u<a.length;u+=1)a[u].a();ne()}(!d||_&1&&c!==(c="task-section "+f[0]+" svelte-1rib3cm"))&&v(e,"class",c)},i(f){if(!d){for(let _=0;_<g.length;_+=1)A(s[_]);for(let _=0;_<T.length;_+=1)A(a[_]);d=!0}},o(f){for(let _=0;_<s.length;_+=1)C(s[_]);for(let _=0;_<a.length;_+=1)C(a[_]);d=!1},d(f){f&&m(e);for(let _=0;_<s.length;_+=1)s[_].d();for(let _=0;_<a.length;_+=1)a[_].d()}}}const ve=r=>!r.done,ge=r=>r.done;function Fe(r,e,t){let l;W(r,q,a=>t(1,l=a));let{class:s=""}=e;const[i,o]=Ie({duration:a=>Math.sqrt(a*200),fallback(a,n){const c=getComputedStyle(a),d=c.transform==="none"?"":c.transform;return{duration:600,easing:we,css:g=>`
					transform: ${d} scale(${g});
					opacity: ${g}
				`}}});return r.$$set=a=>{"class"in a&&t(0,s=a.class)},[s,l,i,o]}class je extends S{constructor(e){super();V(this,e,Fe,Ve,F,{class:0})}}function ke(r){let e,t,l,s=r[2].text&&be(r);return{c(){e=k("button"),s&&s.c(),this.h()},l(i){e=b(i,"BUTTON",{class:!0});var o=E(e);s&&s.l(o),o.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(i,o){N(i,e,o),s&&s.m(e,null),t||(l=O(e,"click",K(r[6])),t=!0)},p(i,o){i[2].text?s?s.p(i,o):(s=be(i),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(i){i&&m(e),s&&s.d(),t=!1,l()}}}function be(r){let e=r[2].text+"",t;return{c(){t=z(e)},l(l){t=G(l,e)},m(l,s){N(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&H(t,e)},d(l){l&&m(t)}}}function Be(r){let e,t,l,s,i,o=r[2]&&ke(r);return{c(){e=k("div"),t=k("input"),o&&o.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var n=E(e);t=b(n,"INPUT",{placeholder:!0,class:!0}),o&&o.l(n),n.forEach(m),this.h()},h(){v(t,"placeholder",r[1]),v(t,"class","svelte-12pihab"),v(e,"class",l="input-group "+r[0]+" "+(r[2]?"input-group_btn":"")+" svelte-12pihab"),P(e,"isError",r[5])},m(a,n){N(a,e,n),y(e,t),ie(t,r[4]),o&&o.m(e,null),r[9](e),s||(i=[O(t,"input",r[8]),O(t,"input",r[7])],s=!0)},p(a,[n]){n&2&&v(t,"placeholder",a[1]),n&16&&t.value!==a[4]&&ie(t,a[4]),a[2]?o?o.p(a,n):(o=ke(a),o.c(),o.m(e,null)):o&&(o.d(1),o=null),n&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",l),n&37&&P(e,"isError",a[5])},i:U,o:U,d(a){a&&m(e),o&&o.d(),r[9](null),s=!1,J(i)}}}function Le(r,e,t){let{class:l=""}=e,{placeholder:s="Placeholer"}=e,{btn:i=null}=e,o,a,n=!1;const c=Ne(),d=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,n=!0)},g=()=>{t(5,n=!1)};function w(){a=this.value,t(4,a)}function T(h){De[h?"unshift":"push"](()=>{o=h,t(3,o)})}return r.$$set=h=>{"class"in h&&t(0,l=h.class),"placeholder"in h&&t(1,s=h.placeholder),"btn"in h&&t(2,i=h.btn)},[l,s,i,o,a,n,d,g,w,T]}class Me extends S{constructor(e){super();V(this,e,Le,Be,F,{class:0,placeholder:1,btn:2})}}function Pe(r){let e,t,l,s,i,o,a;return i=new Me({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),i.$on("submit",r[1]),{c(){e=k("div"),t=k("div"),l=k("button"),s=k("button"),j(i.$$.fragment),this.h()},l(n){e=b(n,"DIV",{class:!0});var c=E(e);t=b(c,"DIV",{class:!0});var d=E(t);l=b(d,"BUTTON",{class:!0}),E(l).forEach(m),s=b(d,"BUTTON",{class:!0}),E(s).forEach(m),d.forEach(m),B(i.$$.fragment,c),c.forEach(m),this.h()},h(){v(l,"class","add-todo__color add-todo__color_main svelte-1q9ehjs"),v(s,"class","add-todo__color svelte-1q9ehjs"),v(t,"class","add-todo__color-list svelte-1q9ehjs"),v(e,"class",o="add-todo "+r[0]+" svelte-1q9ehjs")},m(n,c){N(n,e,c),y(e,t),y(t,l),y(t,s),L(i,e,null),a=!0},p(n,[c]){(!a||c&1&&o!==(o="add-todo "+n[0]+" svelte-1q9ehjs"))&&v(e,"class",o)},i(n){a||(A(i.$$.fragment,n),a=!0)},o(n){C(i.$$.fragment,n),a=!1},d(n){n&&m(e),M(i)}}}function Re(r,e,t){let{class:l=""}=e;const s=i=>{let o={id:Date.now(),text:i.detail.value,color:"#000",done:!1};q.update(a=>a=[o,...a])};return r.$$set=i=>{"class"in i&&t(0,l=i.class)},[l,s]}class Ke extends S{constructor(e){super();V(this,e,Re,Pe,F,{class:0})}}function Qe(r){let e,t,l,s,i,o,a;return s=new Ke({}),o=new je({props:{class:"mt-50"}}),{c(){e=Ae(),t=k("section"),l=k("div"),j(s.$$.fragment),j(o.$$.fragment),this.h()},l(n){Ce('[data-svelte="svelte-1lxmpr"]',document.head).forEach(m),e=qe(n),t=b(n,"SECTION",{class:!0});var d=E(t);l=b(d,"DIV",{class:!0});var g=E(l);B(s.$$.fragment,g),g.forEach(m),d.forEach(m),B(o.$$.fragment,n),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",v(l,"class","container"),v(t,"class",i=""+(r[0]+" mt-50 svelte-hols8d"))},m(n,c){N(n,e,c),N(n,t,c),y(t,l),L(s,l,null),L(o,n,c),a=!0},p(n,[c]){(!a||c&1&&i!==(i=""+(n[0]+" mt-50 svelte-hols8d")))&&v(t,"class",i)},i(n){a||(A(s.$$.fragment,n),A(o.$$.fragment,n),a=!0)},o(n){C(s.$$.fragment,n),C(o.$$.fragment,n),a=!1},d(n){n&&m(e),n&&m(t),M(s),M(o,n)}}}function We(r,e,t){let{class:l=""}=e;return r.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class Ye extends S{constructor(e){super();V(this,e,We,Qe,F,{class:0})}}export{Ye as default};
