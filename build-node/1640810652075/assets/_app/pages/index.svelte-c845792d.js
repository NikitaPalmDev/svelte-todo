import{C as ve,S as F,i as U,s as V,e as g,t as Q,c as b,a as k,g as W,d as m,b as v,K as R,f as w,D as T,L,M as X,h as Y,E as A,N as Z,O as z,v as O,w as B,x as P,P as G,Q as H,R as J,p as N,T as $,U as x,n as D,V as ee,A as q,m as te,W as le,o as se,X as ge,Y as ae,Z as ne,_ as be,$ as ie,a0 as ke,a1 as pe,j as Ee,a2 as Te,l as ye}from"../chunks/vendor-174655a0.js";const M=ve([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);function Ie(i){let e,t,s,l,r,n,a,o,u,d,_,p,y,E;return{c(){e=g("div"),t=g("div"),s=g("p"),l=Q(i[1]),r=g("div"),n=g("button"),a=g("span"),o=g("ul"),u=g("li"),d=g("button"),this.h()},l(f){e=b(f,"DIV",{class:!0});var c=k(e);t=b(c,"DIV",{class:!0});var h=k(t);s=b(h,"P",{class:!0});var C=k(s);l=W(C,i[1]),C.forEach(m),h.forEach(m),r=b(c,"DIV",{class:!0});var S=k(r);n=b(S,"BUTTON",{class:!0});var I=k(n);a=b(I,"SPAN",{class:!0}),k(a).forEach(m),I.forEach(m),S.forEach(m),o=b(c,"UL",{class:!0,style:!0});var j=k(o);u=b(j,"LI",{class:!0});var K=k(u);d=b(K,"BUTTON",{class:!0}),k(d).forEach(m),K.forEach(m),j.forEach(m),c.forEach(m),this.h()},h(){v(s,"class","svelte-1bg9tnc"),v(t,"class","task__main svelte-1bg9tnc"),v(a,"class","svg-image-del svelte-1bg9tnc"),v(n,"class","task__menu-btn task__menu-btn_del svelte-1bg9tnc"),v(r,"class","task__circle task__menu svelte-1bg9tnc"),v(d,"class","task__color-btn svelte-1bg9tnc"),v(u,"class","task__color-item svelte-1bg9tnc"),v(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1bg9tnc"),v(o,"style",_=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",p="task "+i[0]+" svelte-1bg9tnc"),R(e,"isDisabled",i[3])},m(f,c){w(f,e,c),T(e,t),T(t,s),T(s,l),T(e,r),T(r,n),T(n,a),T(e,o),T(o,u),T(u,d),y||(E=[L(t,"click",i[4]),L(n,"click",X(i[5]))],y=!0)},p(f,[c]){c&2&&Y(l,f[1]),c&4&&_!==(_=`background-color: ${f[2]!=null?f[2]:"#0029FF"}`)&&v(o,"style",_),c&1&&p!==(p="task "+f[0]+" svelte-1bg9tnc")&&v(e,"class",p),c&9&&R(e,"isDisabled",f[3])},i:A,o:A,d(f){f&&m(e),y=!1,Z(E)}}}function we(i,e,t){let s;z(i,M,_=>t(7,s=_));let{class:l=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:o=null}=e;const u=()=>{let _=s.map(p=>(o===p.id&&(p.done=!p.done),p));M.set(_)},d=()=>{let _=s.filter(p=>p.id!=o);M.set(_),console.log("del",o)};return i.$$set=_=>{"class"in _&&t(0,l=_.class),"text"in _&&t(1,r=_.text),"color"in _&&t(2,n=_.color),"disabled"in _&&t(3,a=_.disabled),"id"in _&&t(6,o=_.id)},[l,r,n,a,u,d,o]}class re extends F{constructor(e){super();U(this,e,we,Ie,V,{class:0,text:1,color:2,disabled:3,id:6})}}function oe(i,e,t){const s=i.slice();return s[4]=e[t],s}function ce(i,e,t){const s=i.slice();return s[4]=e[t],s}function ue(i,e){let t,s,l,r,n,a=A,o;return s=new re({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=g("li"),O(s.$$.fragment),this.h()},l(u){t=b(u,"LI",{class:!0});var d=k(t);B(s.$$.fragment,d),d.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,d){w(u,t,d),P(s,t,null),o=!0},p(u,d){e=u;const _={};d&2&&(_.text=e[4].text),d&2&&(_.color=e[4].color?e[4].color:null),d&2&&(_.id=e[4].id),s.$set(_)},r(){n=t.getBoundingClientRect()},f(){G(t),a(),H(t,n)},a(){a(),a=J(t,n,ae,{duration:300})},i(u){o||(N(s.$$.fragment,u),$(()=>{r&&r.end(1),l=x(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(u){D(s.$$.fragment,u),l&&l.invalidate(),r=ee(t,e[2],{key:e[4].id}),o=!1},d(u){u&&m(t),q(s),u&&r&&r.end()}}}function fe(i,e){let t,s,l,r,n,a=A,o;return s=new re({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=g("li"),O(s.$$.fragment),this.h()},l(u){t=b(u,"LI",{class:!0});var d=k(t);B(s.$$.fragment,d),d.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,d){w(u,t,d),P(s,t,null),o=!0},p(u,d){e=u;const _={};d&2&&(_.text=e[4].text),d&2&&(_.color=e[4].color?e[4].color:null),d&2&&(_.id=e[4].id),s.$set(_)},r(){n=t.getBoundingClientRect()},f(){G(t),a(),H(t,n)},a(){a(),a=J(t,n,ae,{duration:300})},i(u){o||(N(s.$$.fragment,u),$(()=>{r&&r.end(1),l=x(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(u){D(s.$$.fragment,u),l&&l.invalidate(),r=ee(t,e[2],{key:e[4].id}),o=!1},d(u){u&&m(t),q(s),u&&r&&r.end()}}}function Ne(i){let e,t,s,l=[],r=new Map,n,a=[],o=new Map,u,d,_=i[1].filter(_e);const p=f=>f[4].id;for(let f=0;f<_.length;f+=1){let c=ce(i,_,f),h=p(c);r.set(h,l[f]=ue(h,c))}let y=i[1].filter(de);const E=f=>f[4].id;for(let f=0;f<y.length;f+=1){let c=oe(i,y,f),h=E(c);o.set(h,a[f]=fe(h,c))}return{c(){e=g("section"),t=g("div"),s=g("ul");for(let f=0;f<l.length;f+=1)l[f].c();n=g("ul");for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){e=b(f,"SECTION",{class:!0});var c=k(e);t=b(c,"DIV",{class:!0});var h=k(t);s=b(h,"UL",{class:!0});var C=k(s);for(let I=0;I<l.length;I+=1)l[I].l(C);C.forEach(m),n=b(h,"UL",{class:!0});var S=k(n);for(let I=0;I<a.length;I+=1)a[I].l(S);S.forEach(m),h.forEach(m),c.forEach(m),this.h()},h(){v(s,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",u="task-section "+i[0]+" svelte-1rib3cm")},m(f,c){w(f,e,c),T(e,t),T(t,s);for(let h=0;h<l.length;h+=1)l[h].m(s,null);T(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);d=!0},p(f,[c]){if(c&2){_=f[1].filter(_e),te();for(let h=0;h<l.length;h+=1)l[h].r();l=le(l,c,p,1,f,_,r,s,ne,ue,null,ce);for(let h=0;h<l.length;h+=1)l[h].a();se()}if(c&2){y=f[1].filter(de),te();for(let h=0;h<a.length;h+=1)a[h].r();a=le(a,c,E,1,f,y,o,n,ne,fe,null,oe);for(let h=0;h<a.length;h+=1)a[h].a();se()}(!d||c&1&&u!==(u="task-section "+f[0]+" svelte-1rib3cm"))&&v(e,"class",u)},i(f){if(!d){for(let c=0;c<_.length;c+=1)N(l[c]);for(let c=0;c<y.length;c+=1)N(a[c]);d=!0}},o(f){for(let c=0;c<l.length;c+=1)D(l[c]);for(let c=0;c<a.length;c+=1)D(a[c]);d=!1},d(f){f&&m(e);for(let c=0;c<l.length;c+=1)l[c].d();for(let c=0;c<a.length;c+=1)a[c].d()}}}const _e=i=>!i.done,de=i=>i.done;function De(i,e,t){let s;z(i,M,a=>t(1,s=a));let{class:l=""}=e;const[r,n]=ge({duration:a=>Math.sqrt(a*200),fallback(a,o){const u=getComputedStyle(a),d=u.transform==="none"?"":u.transform;return{duration:600,easing:be,css:_=>`
					transform: ${d} scale(${_});
					opacity: ${_}
				`}}});return i.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,s,r,n]}class Ae extends F{constructor(e){super();U(this,e,De,Ne,V,{class:0})}}function he(i){let e,t,s,l=i[2].text&&me(i);return{c(){e=g("button"),l&&l.c(),this.h()},l(r){e=b(r,"BUTTON",{class:!0});var n=k(e);l&&l.l(n),n.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(r,n){w(r,e,n),l&&l.m(e,null),t||(s=L(e,"click",X(i[6])),t=!0)},p(r,n){r[2].text?l?l.p(r,n):(l=me(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&m(e),l&&l.d(),t=!1,s()}}}function me(i){let e=i[2].text+"",t;return{c(){t=Q(e)},l(s){t=W(s,e)},m(s,l){w(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&Y(t,e)},d(s){s&&m(t)}}}function Ce(i){let e,t,s,l,r,n=i[2]&&he(i);return{c(){e=g("div"),t=g("input"),n&&n.c(),this.h()},l(a){e=b(a,"DIV",{class:!0});var o=k(e);t=b(o,"INPUT",{placeholder:!0,class:!0}),n&&n.l(o),o.forEach(m),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",s="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),R(e,"isError",i[5])},m(a,o){w(a,e,o),T(e,t),ie(t,i[4]),n&&n.m(e,null),i[9](e),l||(r=[L(t,"input",i[8]),L(t,"input",i[7])],l=!0)},p(a,[o]){o&2&&v(t,"placeholder",a[1]),o&16&&t.value!==a[4]&&ie(t,a[4]),a[2]?n?n.p(a,o):(n=he(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",s),o&37&&R(e,"isError",a[5])},i:A,o:A,d(a){a&&m(e),n&&n.d(),i[9](null),l=!1,Z(r)}}}function Se(i,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:r=null}=e,n,a,o=!1;const u=ke(),d=()=>{a?(u("submit",{value:a}),t(4,a="")):t(5,o=!0)},_=()=>{t(5,o=!1)};function p(){a=this.value,t(4,a)}function y(E){pe[E?"unshift":"push"](()=>{n=E,t(3,n)})}return i.$$set=E=>{"class"in E&&t(0,s=E.class),"placeholder"in E&&t(1,l=E.placeholder),"btn"in E&&t(2,r=E.btn)},[s,l,r,n,a,o,d,_,p,y]}class Fe extends F{constructor(e){super();U(this,e,Se,Ce,V,{class:0,placeholder:1,btn:2})}}function Ue(i){let e,t,s,l;return t=new Fe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=g("div"),O(t.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var n=k(e);B(t.$$.fragment,n),n.forEach(m),this.h()},h(){v(e,"class",s="add-todo "+i[0]+" svelte-hols8d")},m(r,n){w(r,e,n),P(t,e,null),l=!0},p(r,[n]){(!l||n&1&&s!==(s="add-todo "+r[0]+" svelte-hols8d"))&&v(e,"class",s)},i(r){l||(N(t.$$.fragment,r),l=!0)},o(r){D(t.$$.fragment,r),l=!1},d(r){r&&m(e),q(t)}}}function Ve(i,e,t){let{class:s=""}=e;const l=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};M.update(a=>a=[n,...a])};return i.$$set=r=>{"class"in r&&t(0,s=r.class)},[s,l]}class Le extends F{constructor(e){super();U(this,e,Ve,Ue,V,{class:0})}}function Oe(i){let e,t,s,l,r,n,a;return l=new Le({}),n=new Ae({props:{class:"mt-50"}}),{c(){e=Ee(),t=g("section"),s=g("div"),O(l.$$.fragment),O(n.$$.fragment),this.h()},l(o){Te('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=ye(o),t=b(o,"SECTION",{class:!0});var d=k(t);s=b(d,"DIV",{class:!0});var _=k(s);B(l.$$.fragment,_),_.forEach(m),d.forEach(m),B(n.$$.fragment,o),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(s,"class","container"),v(t,"class",r=""+(i[0]+" mt-50 svelte-hols8d"))},m(o,u){w(o,e,u),w(o,t,u),T(t,s),P(l,s,null),P(n,o,u),a=!0},p(o,[u]){(!a||u&1&&r!==(r=""+(o[0]+" mt-50 svelte-hols8d")))&&v(t,"class",r)},i(o){a||(N(l.$$.fragment,o),N(n.$$.fragment,o),a=!0)},o(o){D(l.$$.fragment,o),D(n.$$.fragment,o),a=!1},d(o){o&&m(e),o&&m(t),q(l),q(n,o)}}}function Be(i,e,t){let{class:s=""}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class qe extends F{constructor(e){super();U(this,e,Be,Oe,V,{class:0})}}export{qe as default};
