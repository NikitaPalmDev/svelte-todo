import{C as ve,S as F,i as U,s as V,e as k,t as Q,c as g,a as b,g as W,d as m,b as v,K as R,f as w,D as T,L,M as X,h as Y,E as A,N as Z,O as z,v as O,w as B,x as P,P as G,Q as H,R as J,p as N,T as $,U as x,n as D,V as ee,A as q,m as te,W as se,o as le,X as ke,Y as ae,Z as ne,_ as ge,$ as ie,a0 as be,a1 as pe,j as Ee,a2 as Te,l as ye}from"../chunks/vendor-174655a0.js";const M=ve([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);function Ie(i){let e,t,l,s,r,n,a,o,u,d,_,p,y,E;return{c(){e=k("div"),t=k("div"),l=k("p"),s=Q(i[1]),r=k("div"),n=k("button"),a=k("span"),o=k("ul"),u=k("li"),d=k("button"),this.h()},l(f){e=g(f,"DIV",{class:!0});var c=b(e);t=g(c,"DIV",{class:!0});var h=b(t);l=g(h,"P",{class:!0});var C=b(l);s=W(C,i[1]),C.forEach(m),h.forEach(m),r=g(c,"DIV",{class:!0});var S=b(r);n=g(S,"BUTTON",{class:!0});var I=b(n);a=g(I,"SPAN",{class:!0}),b(a).forEach(m),I.forEach(m),S.forEach(m),o=g(c,"UL",{class:!0,style:!0});var j=b(o);u=g(j,"LI",{class:!0});var K=b(u);d=g(K,"BUTTON",{class:!0}),b(d).forEach(m),K.forEach(m),j.forEach(m),c.forEach(m),this.h()},h(){v(l,"class","svelte-1ksxemk"),v(t,"class","task__main svelte-1ksxemk"),v(a,"class","svg-image-del svelte-1ksxemk"),v(n,"class","task__menu-btn task__menu-btn_del svelte-1ksxemk"),v(r,"class","task__circle task__menu svelte-1ksxemk"),v(d,"class","task__color-btn svelte-1ksxemk"),v(u,"class","task__color-item svelte-1ksxemk"),v(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1ksxemk"),v(o,"style",_=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",p="task "+i[0]+" svelte-1ksxemk"),R(e,"isDisabled",i[3])},m(f,c){w(f,e,c),T(e,t),T(t,l),T(l,s),T(e,r),T(r,n),T(n,a),T(e,o),T(o,u),T(u,d),y||(E=[L(t,"click",i[4]),L(n,"click",X(i[5]))],y=!0)},p(f,[c]){c&2&&Y(s,f[1]),c&4&&_!==(_=`background-color: ${f[2]!=null?f[2]:"#0029FF"}`)&&v(o,"style",_),c&1&&p!==(p="task "+f[0]+" svelte-1ksxemk")&&v(e,"class",p),c&9&&R(e,"isDisabled",f[3])},i:A,o:A,d(f){f&&m(e),y=!1,Z(E)}}}function we(i,e,t){let l;z(i,M,_=>t(7,l=_));let{class:s=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:o=null}=e;const u=()=>{let _=l.map(p=>(o===p.id&&(p.done=!p.done),p));M.set(_)},d=()=>{let _=l.filter(p=>p.id!=o);M.set(_),console.log("del",o)};return i.$$set=_=>{"class"in _&&t(0,s=_.class),"text"in _&&t(1,r=_.text),"color"in _&&t(2,n=_.color),"disabled"in _&&t(3,a=_.disabled),"id"in _&&t(6,o=_.id)},[s,r,n,a,u,d,o]}class re extends F{constructor(e){super();U(this,e,we,Ie,V,{class:0,text:1,color:2,disabled:3,id:6})}}function oe(i,e,t){const l=i.slice();return l[4]=e[t],l}function ce(i,e,t){const l=i.slice();return l[4]=e[t],l}function ue(i,e){let t,l,s,r,n,a=A,o;return l=new re({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=k("li"),O(l.$$.fragment),this.h()},l(u){t=g(u,"LI",{class:!0});var d=b(t);B(l.$$.fragment,d),d.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,d){w(u,t,d),P(l,t,null),o=!0},p(u,d){e=u;const _={};d&2&&(_.text=e[4].text),d&2&&(_.color=e[4].color?e[4].color:null),d&2&&(_.id=e[4].id),l.$set(_)},r(){n=t.getBoundingClientRect()},f(){G(t),a(),H(t,n)},a(){a(),a=J(t,n,ae,{duration:300})},i(u){o||(N(l.$$.fragment,u),$(()=>{r&&r.end(1),s=x(t,e[3],{key:e[4].id}),s.start()}),o=!0)},o(u){D(l.$$.fragment,u),s&&s.invalidate(),r=ee(t,e[2],{key:e[4].id}),o=!1},d(u){u&&m(t),q(l),u&&r&&r.end()}}}function fe(i,e){let t,l,s,r,n,a=A,o;return l=new re({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=k("li"),O(l.$$.fragment),this.h()},l(u){t=g(u,"LI",{class:!0});var d=b(t);B(l.$$.fragment,d),d.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,d){w(u,t,d),P(l,t,null),o=!0},p(u,d){e=u;const _={};d&2&&(_.text=e[4].text),d&2&&(_.color=e[4].color?e[4].color:null),d&2&&(_.id=e[4].id),l.$set(_)},r(){n=t.getBoundingClientRect()},f(){G(t),a(),H(t,n)},a(){a(),a=J(t,n,ae,{duration:300})},i(u){o||(N(l.$$.fragment,u),$(()=>{r&&r.end(1),s=x(t,e[3],{key:e[4].id}),s.start()}),o=!0)},o(u){D(l.$$.fragment,u),s&&s.invalidate(),r=ee(t,e[2],{key:e[4].id}),o=!1},d(u){u&&m(t),q(l),u&&r&&r.end()}}}function Ne(i){let e,t,l,s=[],r=new Map,n,a=[],o=new Map,u,d,_=i[1].filter(_e);const p=f=>f[4].id;for(let f=0;f<_.length;f+=1){let c=ce(i,_,f),h=p(c);r.set(h,s[f]=ue(h,c))}let y=i[1].filter(de);const E=f=>f[4].id;for(let f=0;f<y.length;f+=1){let c=oe(i,y,f),h=E(c);o.set(h,a[f]=fe(h,c))}return{c(){e=k("section"),t=k("div"),l=k("ul");for(let f=0;f<s.length;f+=1)s[f].c();n=k("ul");for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){e=g(f,"SECTION",{class:!0});var c=b(e);t=g(c,"DIV",{class:!0});var h=b(t);l=g(h,"UL",{class:!0});var C=b(l);for(let I=0;I<s.length;I+=1)s[I].l(C);C.forEach(m),n=g(h,"UL",{class:!0});var S=b(n);for(let I=0;I<a.length;I+=1)a[I].l(S);S.forEach(m),h.forEach(m),c.forEach(m),this.h()},h(){v(l,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",u="task-section "+i[0]+" svelte-1rib3cm")},m(f,c){w(f,e,c),T(e,t),T(t,l);for(let h=0;h<s.length;h+=1)s[h].m(l,null);T(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);d=!0},p(f,[c]){if(c&2){_=f[1].filter(_e),te();for(let h=0;h<s.length;h+=1)s[h].r();s=se(s,c,p,1,f,_,r,l,ne,ue,null,ce);for(let h=0;h<s.length;h+=1)s[h].a();le()}if(c&2){y=f[1].filter(de),te();for(let h=0;h<a.length;h+=1)a[h].r();a=se(a,c,E,1,f,y,o,n,ne,fe,null,oe);for(let h=0;h<a.length;h+=1)a[h].a();le()}(!d||c&1&&u!==(u="task-section "+f[0]+" svelte-1rib3cm"))&&v(e,"class",u)},i(f){if(!d){for(let c=0;c<_.length;c+=1)N(s[c]);for(let c=0;c<y.length;c+=1)N(a[c]);d=!0}},o(f){for(let c=0;c<s.length;c+=1)D(s[c]);for(let c=0;c<a.length;c+=1)D(a[c]);d=!1},d(f){f&&m(e);for(let c=0;c<s.length;c+=1)s[c].d();for(let c=0;c<a.length;c+=1)a[c].d()}}}const _e=i=>!i.done,de=i=>i.done;function De(i,e,t){let l;z(i,M,a=>t(1,l=a));let{class:s=""}=e;const[r,n]=ke({duration:a=>Math.sqrt(a*200),fallback(a,o){const u=getComputedStyle(a),d=u.transform==="none"?"":u.transform;return{duration:600,easing:ge,css:_=>`
					transform: ${d} scale(${_});
					opacity: ${_}
				`}}});return i.$$set=a=>{"class"in a&&t(0,s=a.class)},[s,l,r,n]}class Ae extends F{constructor(e){super();U(this,e,De,Ne,V,{class:0})}}function he(i){let e,t,l,s=i[2].text&&me(i);return{c(){e=k("button"),s&&s.c(),this.h()},l(r){e=g(r,"BUTTON",{class:!0});var n=b(e);s&&s.l(n),n.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(r,n){w(r,e,n),s&&s.m(e,null),t||(l=L(e,"click",X(i[6])),t=!0)},p(r,n){r[2].text?s?s.p(r,n):(s=me(r),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(r){r&&m(e),s&&s.d(),t=!1,l()}}}function me(i){let e=i[2].text+"",t;return{c(){t=Q(e)},l(l){t=W(l,e)},m(l,s){w(l,t,s)},p(l,s){s&4&&e!==(e=l[2].text+"")&&Y(t,e)},d(l){l&&m(t)}}}function Ce(i){let e,t,l,s,r,n=i[2]&&he(i);return{c(){e=k("div"),t=k("input"),n&&n.c(),this.h()},l(a){e=g(a,"DIV",{class:!0});var o=b(e);t=g(o,"INPUT",{placeholder:!0,class:!0}),n&&n.l(o),o.forEach(m),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",l="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),R(e,"isError",i[5])},m(a,o){w(a,e,o),T(e,t),ie(t,i[4]),n&&n.m(e,null),i[9](e),s||(r=[L(t,"input",i[8]),L(t,"input",i[7])],s=!0)},p(a,[o]){o&2&&v(t,"placeholder",a[1]),o&16&&t.value!==a[4]&&ie(t,a[4]),a[2]?n?n.p(a,o):(n=he(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",l),o&37&&R(e,"isError",a[5])},i:A,o:A,d(a){a&&m(e),n&&n.d(),i[9](null),s=!1,Z(r)}}}function Se(i,e,t){let{class:l=""}=e,{placeholder:s="Placeholer"}=e,{btn:r=null}=e,n,a,o=!1;const u=be(),d=()=>{a?(u("submit",{value:a}),t(4,a="")):t(5,o=!0)},_=()=>{t(5,o=!1)};function p(){a=this.value,t(4,a)}function y(E){pe[E?"unshift":"push"](()=>{n=E,t(3,n)})}return i.$$set=E=>{"class"in E&&t(0,l=E.class),"placeholder"in E&&t(1,s=E.placeholder),"btn"in E&&t(2,r=E.btn)},[l,s,r,n,a,o,d,_,p,y]}class Fe extends F{constructor(e){super();U(this,e,Se,Ce,V,{class:0,placeholder:1,btn:2})}}function Ue(i){let e,t,l,s;return t=new Fe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=k("div"),O(t.$$.fragment),this.h()},l(r){e=g(r,"DIV",{class:!0});var n=b(e);B(t.$$.fragment,n),n.forEach(m),this.h()},h(){v(e,"class",l="add-todo "+i[0]+" svelte-hols8d")},m(r,n){w(r,e,n),P(t,e,null),s=!0},p(r,[n]){(!s||n&1&&l!==(l="add-todo "+r[0]+" svelte-hols8d"))&&v(e,"class",l)},i(r){s||(N(t.$$.fragment,r),s=!0)},o(r){D(t.$$.fragment,r),s=!1},d(r){r&&m(e),q(t)}}}function Ve(i,e,t){let{class:l=""}=e;const s=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};M.update(a=>a=[n,...a])};return i.$$set=r=>{"class"in r&&t(0,l=r.class)},[l,s]}class Le extends F{constructor(e){super();U(this,e,Ve,Ue,V,{class:0})}}function Oe(i){let e,t,l,s,r,n,a;return s=new Le({}),n=new Ae({props:{class:"mt-50"}}),{c(){e=Ee(),t=k("section"),l=k("div"),O(s.$$.fragment),O(n.$$.fragment),this.h()},l(o){Te('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=ye(o),t=g(o,"SECTION",{class:!0});var d=b(t);l=g(d,"DIV",{class:!0});var _=b(l);B(s.$$.fragment,_),_.forEach(m),d.forEach(m),B(n.$$.fragment,o),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(l,"class","container"),v(t,"class",r=""+(i[0]+" mt-50 svelte-hols8d"))},m(o,u){w(o,e,u),w(o,t,u),T(t,l),P(s,l,null),P(n,o,u),a=!0},p(o,[u]){(!a||u&1&&r!==(r=""+(o[0]+" mt-50 svelte-hols8d")))&&v(t,"class",r)},i(o){a||(N(s.$$.fragment,o),N(n.$$.fragment,o),a=!0)},o(o){D(s.$$.fragment,o),D(n.$$.fragment,o),a=!1},d(o){o&&m(e),o&&m(t),q(s),q(n,o)}}}function Be(i,e,t){let{class:l=""}=e;return i.$$set=s=>{"class"in s&&t(0,l=s.class)},[l]}class qe extends F{constructor(e){super();U(this,e,Be,Oe,V,{class:0})}}export{qe as default};
