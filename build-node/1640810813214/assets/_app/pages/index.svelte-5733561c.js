import{C as ve,S as F,i as U,s as V,e as g,t as Q,c as k,a as b,g as W,d as m,b as v,K as R,f as I,D as w,L,M as X,h as Y,E as A,N as Z,O as z,v as O,w as B,x as P,P as G,Q as H,R as J,p as N,T as $,U as x,n as D,V as ee,A as q,m as te,W as le,o as se,X as ge,Y as ae,Z as ne,_ as ke,$ as ie,a0 as be,a1 as pe,j as Ee,a2 as we,l as Te}from"../chunks/vendor-174655a0.js";const M=ve([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);function ye(i){let e,t,s,l,o,n,a,r,u,d,_,p,T,E;return{c(){e=g("div"),t=g("div"),s=g("p"),l=Q(i[1]),o=g("div"),n=g("button"),a=g("span"),r=g("ul"),u=g("li"),d=g("button"),this.h()},l(f){e=k(f,"DIV",{class:!0});var c=b(e);t=k(c,"DIV",{class:!0});var h=b(t);s=k(h,"P",{class:!0});var C=b(s);l=W(C,i[1]),C.forEach(m),h.forEach(m),o=k(c,"DIV",{class:!0});var S=b(o);n=k(S,"BUTTON",{class:!0});var y=b(n);a=k(y,"SPAN",{class:!0}),b(a).forEach(m),y.forEach(m),S.forEach(m),r=k(c,"UL",{class:!0,style:!0});var j=b(r);u=k(j,"LI",{class:!0});var K=b(u);d=k(K,"BUTTON",{class:!0}),b(d).forEach(m),K.forEach(m),j.forEach(m),c.forEach(m),this.h()},h(){v(s,"class","svelte-w0l3fo"),v(t,"class","task__main svelte-w0l3fo"),v(a,"class","svg-image-del svelte-w0l3fo"),v(n,"class","task__menu-btn task__menu-btn_del svelte-w0l3fo"),v(o,"class","task__circle task__menu svelte-w0l3fo"),v(d,"class","task__color-btn svelte-w0l3fo"),v(u,"class","task__color-item svelte-w0l3fo"),v(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-w0l3fo"),v(r,"style",_=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",p="task "+i[0]+" svelte-w0l3fo"),R(e,"isDisabled",i[3])},m(f,c){I(f,e,c),w(e,t),w(t,s),w(s,l),w(e,o),w(o,n),w(n,a),w(e,r),w(r,u),w(u,d),T||(E=[L(t,"click",i[4]),L(n,"click",X(i[5]))],T=!0)},p(f,[c]){c&2&&Y(l,f[1]),c&4&&_!==(_=`background-color: ${f[2]!=null?f[2]:"#0029FF"}`)&&v(r,"style",_),c&1&&p!==(p="task "+f[0]+" svelte-w0l3fo")&&v(e,"class",p),c&9&&R(e,"isDisabled",f[3])},i:A,o:A,d(f){f&&m(e),T=!1,Z(E)}}}function Ie(i,e,t){let s;z(i,M,_=>t(7,s=_));let{class:l=""}=e,{text:o=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:r=null}=e;const u=()=>{let _=s.map(p=>(r===p.id&&(p.done=!p.done),p));M.set(_)},d=()=>{let _=s.filter(p=>p.id!=r);M.set(_),console.log("del",r)};return i.$$set=_=>{"class"in _&&t(0,l=_.class),"text"in _&&t(1,o=_.text),"color"in _&&t(2,n=_.color),"disabled"in _&&t(3,a=_.disabled),"id"in _&&t(6,r=_.id)},[l,o,n,a,u,d,r]}class oe extends F{constructor(e){super();U(this,e,Ie,ye,V,{class:0,text:1,color:2,disabled:3,id:6})}}function re(i,e,t){const s=i.slice();return s[4]=e[t],s}function ce(i,e,t){const s=i.slice();return s[4]=e[t],s}function ue(i,e){let t,s,l,o,n,a=A,r;return s=new oe({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=g("li"),O(s.$$.fragment),this.h()},l(u){t=k(u,"LI",{class:!0});var d=b(t);B(s.$$.fragment,d),d.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,d){I(u,t,d),P(s,t,null),r=!0},p(u,d){e=u;const _={};d&2&&(_.text=e[4].text),d&2&&(_.color=e[4].color?e[4].color:null),d&2&&(_.id=e[4].id),s.$set(_)},r(){n=t.getBoundingClientRect()},f(){G(t),a(),H(t,n)},a(){a(),a=J(t,n,ae,{duration:300})},i(u){r||(N(s.$$.fragment,u),$(()=>{o&&o.end(1),l=x(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(u){D(s.$$.fragment,u),l&&l.invalidate(),o=ee(t,e[2],{key:e[4].id}),r=!1},d(u){u&&m(t),q(s),u&&o&&o.end()}}}function fe(i,e){let t,s,l,o,n,a=A,r;return s=new oe({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=g("li"),O(s.$$.fragment),this.h()},l(u){t=k(u,"LI",{class:!0});var d=b(t);B(s.$$.fragment,d),d.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(u,d){I(u,t,d),P(s,t,null),r=!0},p(u,d){e=u;const _={};d&2&&(_.text=e[4].text),d&2&&(_.color=e[4].color?e[4].color:null),d&2&&(_.id=e[4].id),s.$set(_)},r(){n=t.getBoundingClientRect()},f(){G(t),a(),H(t,n)},a(){a(),a=J(t,n,ae,{duration:300})},i(u){r||(N(s.$$.fragment,u),$(()=>{o&&o.end(1),l=x(t,e[3],{key:e[4].id}),l.start()}),r=!0)},o(u){D(s.$$.fragment,u),l&&l.invalidate(),o=ee(t,e[2],{key:e[4].id}),r=!1},d(u){u&&m(t),q(s),u&&o&&o.end()}}}function Ne(i){let e,t,s,l=[],o=new Map,n,a=[],r=new Map,u,d,_=i[1].filter(_e);const p=f=>f[4].id;for(let f=0;f<_.length;f+=1){let c=ce(i,_,f),h=p(c);o.set(h,l[f]=ue(h,c))}let T=i[1].filter(de);const E=f=>f[4].id;for(let f=0;f<T.length;f+=1){let c=re(i,T,f),h=E(c);r.set(h,a[f]=fe(h,c))}return{c(){e=g("section"),t=g("div"),s=g("ul");for(let f=0;f<l.length;f+=1)l[f].c();n=g("ul");for(let f=0;f<a.length;f+=1)a[f].c();this.h()},l(f){e=k(f,"SECTION",{class:!0});var c=b(e);t=k(c,"DIV",{class:!0});var h=b(t);s=k(h,"UL",{class:!0});var C=b(s);for(let y=0;y<l.length;y+=1)l[y].l(C);C.forEach(m),n=k(h,"UL",{class:!0});var S=b(n);for(let y=0;y<a.length;y+=1)a[y].l(S);S.forEach(m),h.forEach(m),c.forEach(m),this.h()},h(){v(s,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",u="task-section "+i[0]+" svelte-1rib3cm")},m(f,c){I(f,e,c),w(e,t),w(t,s);for(let h=0;h<l.length;h+=1)l[h].m(s,null);w(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);d=!0},p(f,[c]){if(c&2){_=f[1].filter(_e),te();for(let h=0;h<l.length;h+=1)l[h].r();l=le(l,c,p,1,f,_,o,s,ne,ue,null,ce);for(let h=0;h<l.length;h+=1)l[h].a();se()}if(c&2){T=f[1].filter(de),te();for(let h=0;h<a.length;h+=1)a[h].r();a=le(a,c,E,1,f,T,r,n,ne,fe,null,re);for(let h=0;h<a.length;h+=1)a[h].a();se()}(!d||c&1&&u!==(u="task-section "+f[0]+" svelte-1rib3cm"))&&v(e,"class",u)},i(f){if(!d){for(let c=0;c<_.length;c+=1)N(l[c]);for(let c=0;c<T.length;c+=1)N(a[c]);d=!0}},o(f){for(let c=0;c<l.length;c+=1)D(l[c]);for(let c=0;c<a.length;c+=1)D(a[c]);d=!1},d(f){f&&m(e);for(let c=0;c<l.length;c+=1)l[c].d();for(let c=0;c<a.length;c+=1)a[c].d()}}}const _e=i=>!i.done,de=i=>i.done;function De(i,e,t){let s;z(i,M,a=>t(1,s=a));let{class:l=""}=e;const[o,n]=ge({duration:a=>Math.sqrt(a*200),fallback(a,r){const u=getComputedStyle(a),d=u.transform==="none"?"":u.transform;return{duration:600,easing:ke,css:_=>`
					transform: ${d} scale(${_});
					opacity: ${_}
				`}}});return i.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,s,o,n]}class Ae extends F{constructor(e){super();U(this,e,De,Ne,V,{class:0})}}function he(i){let e,t,s,l=i[2].text&&me(i);return{c(){e=g("button"),l&&l.c(),this.h()},l(o){e=k(o,"BUTTON",{class:!0});var n=b(e);l&&l.l(n),n.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(o,n){I(o,e,n),l&&l.m(e,null),t||(s=L(e,"click",X(i[6])),t=!0)},p(o,n){o[2].text?l?l.p(o,n):(l=me(o),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(o){o&&m(e),l&&l.d(),t=!1,s()}}}function me(i){let e=i[2].text+"",t;return{c(){t=Q(e)},l(s){t=W(s,e)},m(s,l){I(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&Y(t,e)},d(s){s&&m(t)}}}function Ce(i){let e,t,s,l,o,n=i[2]&&he(i);return{c(){e=g("div"),t=g("input"),n&&n.c(),this.h()},l(a){e=k(a,"DIV",{class:!0});var r=b(e);t=k(r,"INPUT",{placeholder:!0,class:!0}),n&&n.l(r),r.forEach(m),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",s="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),R(e,"isError",i[5])},m(a,r){I(a,e,r),w(e,t),ie(t,i[4]),n&&n.m(e,null),i[9](e),l||(o=[L(t,"input",i[8]),L(t,"input",i[7])],l=!0)},p(a,[r]){r&2&&v(t,"placeholder",a[1]),r&16&&t.value!==a[4]&&ie(t,a[4]),a[2]?n?n.p(a,r):(n=he(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),r&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",s),r&37&&R(e,"isError",a[5])},i:A,o:A,d(a){a&&m(e),n&&n.d(),i[9](null),l=!1,Z(o)}}}function Se(i,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:o=null}=e,n,a,r=!1;const u=be(),d=()=>{a?(u("submit",{value:a}),t(4,a="")):t(5,r=!0)},_=()=>{t(5,r=!1)};function p(){a=this.value,t(4,a)}function T(E){pe[E?"unshift":"push"](()=>{n=E,t(3,n)})}return i.$$set=E=>{"class"in E&&t(0,s=E.class),"placeholder"in E&&t(1,l=E.placeholder),"btn"in E&&t(2,o=E.btn)},[s,l,o,n,a,r,d,_,p,T]}class Fe extends F{constructor(e){super();U(this,e,Se,Ce,V,{class:0,placeholder:1,btn:2})}}function Ue(i){let e,t,s,l;return t=new Fe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=g("div"),O(t.$$.fragment),this.h()},l(o){e=k(o,"DIV",{class:!0});var n=b(e);B(t.$$.fragment,n),n.forEach(m),this.h()},h(){v(e,"class",s="add-todo "+i[0]+" svelte-hols8d")},m(o,n){I(o,e,n),P(t,e,null),l=!0},p(o,[n]){(!l||n&1&&s!==(s="add-todo "+o[0]+" svelte-hols8d"))&&v(e,"class",s)},i(o){l||(N(t.$$.fragment,o),l=!0)},o(o){D(t.$$.fragment,o),l=!1},d(o){o&&m(e),q(t)}}}function Ve(i,e,t){let{class:s=""}=e;const l=o=>{let n={id:Date.now(),text:o.detail.value,color:null,done:!1};M.update(a=>a=[n,...a])};return i.$$set=o=>{"class"in o&&t(0,s=o.class)},[s,l]}class Le extends F{constructor(e){super();U(this,e,Ve,Ue,V,{class:0})}}function Oe(i){let e,t,s,l,o,n,a;return l=new Le({}),n=new Ae({props:{class:"mt-50"}}),{c(){e=Ee(),t=g("section"),s=g("div"),O(l.$$.fragment),O(n.$$.fragment),this.h()},l(r){we('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=Te(r),t=k(r,"SECTION",{class:!0});var d=b(t);s=k(d,"DIV",{class:!0});var _=b(s);B(l.$$.fragment,_),_.forEach(m),d.forEach(m),B(n.$$.fragment,r),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(s,"class","container"),v(t,"class",o=""+(i[0]+" mt-50 svelte-hols8d"))},m(r,u){I(r,e,u),I(r,t,u),w(t,s),P(l,s,null),P(n,r,u),a=!0},p(r,[u]){(!a||u&1&&o!==(o=""+(r[0]+" mt-50 svelte-hols8d")))&&v(t,"class",o)},i(r){a||(N(l.$$.fragment,r),N(n.$$.fragment,r),a=!0)},o(r){D(l.$$.fragment,r),D(n.$$.fragment,r),a=!1},d(r){r&&m(e),r&&m(t),q(l),q(n,r)}}}function Be(i,e,t){let{class:s=""}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class qe extends F{constructor(e){super();U(this,e,Be,Oe,V,{class:0})}}export{qe as default};
