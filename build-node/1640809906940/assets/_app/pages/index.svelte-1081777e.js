import{C as he,S as C,i as S,s as V,e as b,t as R,c as p,a as E,g as K,d as m,b as v,K as B,f as I,D as T,L as F,M as Q,h as W,E as j,N as X,O as Y,v as O,w as U,x as L,P as Z,Q as z,R as G,p as D,T as H,U as J,n as N,V as $,A as P,m as x,W as ee,o as te,X as me,Y as le,Z as se,_ as ve,$ as ae,a0 as ge,a1 as ke,j as be,a2 as pe,l as Ee}from"../chunks/vendor-174655a0.js";const q=he([{id:1,text:"Test task 1",done:!1},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#FF9900"}]);function ye(i){let e,t,s,l,r,n,a,o,c,d,u,y;return{c(){e=b("div"),t=b("div"),s=b("p"),l=R(i[1]),r=b("div"),n=b("button"),a=b("span"),o=b("div"),this.h()},l(k){e=p(k,"DIV",{class:!0});var g=E(e);t=p(g,"DIV",{class:!0});var _=E(t);s=p(_,"P",{class:!0});var f=E(s);l=K(f,i[1]),f.forEach(m),_.forEach(m),r=p(g,"DIV",{class:!0});var h=E(r);n=p(h,"BUTTON",{class:!0});var A=E(n);a=p(A,"SPAN",{class:!0}),E(a).forEach(m),A.forEach(m),h.forEach(m),o=p(g,"DIV",{class:!0,style:!0}),E(o).forEach(m),g.forEach(m),this.h()},h(){v(s,"class","svelte-hcbhcj"),v(t,"class","task__main svelte-hcbhcj"),v(a,"class","svg-image-del svelte-hcbhcj"),v(n,"class","task__menu-btn task__menu-btn_del svelte-hcbhcj"),v(r,"class","task__circle task__menu svelte-hcbhcj"),v(o,"class","task__circle task__circle_visible task__circle_r-t svelte-hcbhcj"),v(o,"style",c=`background-color: ${i[2]!=null?i[2]:"#0029FF"}`),v(e,"class",d="task "+i[0]+" svelte-hcbhcj"),B(e,"isDisabled",i[3])},m(k,g){I(k,e,g),T(e,t),T(t,s),T(s,l),T(e,r),T(r,n),T(n,a),T(e,o),u||(y=[F(t,"click",i[4]),F(n,"click",Q(i[5]))],u=!0)},p(k,[g]){g&2&&W(l,k[1]),g&4&&c!==(c=`background-color: ${k[2]!=null?k[2]:"#0029FF"}`)&&v(o,"style",c),g&1&&d!==(d="task "+k[0]+" svelte-hcbhcj")&&v(e,"class",d),g&9&&B(e,"isDisabled",k[3])},i:j,o:j,d(k){k&&m(e),u=!1,X(y)}}}function Te(i,e,t){let s;Y(i,q,u=>t(7,s=u));let{class:l=""}=e,{text:r=""}=e,{color:n=null}=e,{disabled:a=!1}=e,{id:o=null}=e;const c=()=>{let u=s.map(y=>(o===y.id&&(y.done=!y.done),y));q.set(u)},d=()=>{let u=s.filter(y=>y.id!=o);q.set(u),console.log("del",o)};return i.$$set=u=>{"class"in u&&t(0,l=u.class),"text"in u&&t(1,r=u.text),"color"in u&&t(2,n=u.color),"disabled"in u&&t(3,a=u.disabled),"id"in u&&t(6,o=u.id)},[l,r,n,a,c,d,o]}class ne extends C{constructor(e){super();S(this,e,Te,ye,V,{class:0,text:1,color:2,disabled:3,id:6})}}function ie(i,e,t){const s=i.slice();return s[4]=e[t],s}function re(i,e,t){const s=i.slice();return s[4]=e[t],s}function oe(i,e){let t,s,l,r,n,a=j,o;return s=new ne({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:i,first:null,c(){t=b("li"),O(s.$$.fragment),this.h()},l(c){t=p(c,"LI",{class:!0});var d=E(t);U(s.$$.fragment,d),d.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,d){I(c,t,d),L(s,t,null),o=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),s.$set(u)},r(){n=t.getBoundingClientRect()},f(){Z(t),a(),z(t,n)},a(){a(),a=G(t,n,le,{duration:300})},i(c){o||(D(s.$$.fragment,c),H(()=>{r&&r.end(1),l=J(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(c){N(s.$$.fragment,c),l&&l.invalidate(),r=$(t,e[2],{key:e[4].id}),o=!1},d(c){c&&m(t),P(s),c&&r&&r.end()}}}function ce(i,e){let t,s,l,r,n,a=j,o;return s=new ne({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:i,first:null,c(){t=b("li"),O(s.$$.fragment),this.h()},l(c){t=p(c,"LI",{class:!0});var d=E(t);U(s.$$.fragment,d),d.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,d){I(c,t,d),L(s,t,null),o=!0},p(c,d){e=c;const u={};d&2&&(u.text=e[4].text),d&2&&(u.color=e[4].color?e[4].color:null),d&2&&(u.id=e[4].id),s.$set(u)},r(){n=t.getBoundingClientRect()},f(){Z(t),a(),z(t,n)},a(){a(),a=G(t,n,le,{duration:300})},i(c){o||(D(s.$$.fragment,c),H(()=>{r&&r.end(1),l=J(t,e[3],{key:e[4].id}),l.start()}),o=!0)},o(c){N(s.$$.fragment,c),l&&l.invalidate(),r=$(t,e[2],{key:e[4].id}),o=!1},d(c){c&&m(t),P(s),c&&r&&r.end()}}}function Ie(i){let e,t,s,l=[],r=new Map,n,a=[],o=new Map,c,d,u=i[1].filter(ue);const y=_=>_[4].id;for(let _=0;_<u.length;_+=1){let f=re(i,u,_),h=y(f);r.set(h,l[_]=oe(h,f))}let k=i[1].filter(fe);const g=_=>_[4].id;for(let _=0;_<k.length;_+=1){let f=ie(i,k,_),h=g(f);o.set(h,a[_]=ce(h,f))}return{c(){e=b("section"),t=b("div"),s=b("ul");for(let _=0;_<l.length;_+=1)l[_].c();n=b("ul");for(let _=0;_<a.length;_+=1)a[_].c();this.h()},l(_){e=p(_,"SECTION",{class:!0});var f=E(e);t=p(f,"DIV",{class:!0});var h=E(t);s=p(h,"UL",{class:!0});var A=E(s);for(let w=0;w<l.length;w+=1)l[w].l(A);A.forEach(m),n=p(h,"UL",{class:!0});var M=E(n);for(let w=0;w<a.length;w+=1)a[w].l(M);M.forEach(m),h.forEach(m),f.forEach(m),this.h()},h(){v(s,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",c="task-section "+i[0]+" svelte-1rib3cm")},m(_,f){I(_,e,f),T(e,t),T(t,s);for(let h=0;h<l.length;h+=1)l[h].m(s,null);T(t,n);for(let h=0;h<a.length;h+=1)a[h].m(n,null);d=!0},p(_,[f]){if(f&2){u=_[1].filter(ue),x();for(let h=0;h<l.length;h+=1)l[h].r();l=ee(l,f,y,1,_,u,r,s,se,oe,null,re);for(let h=0;h<l.length;h+=1)l[h].a();te()}if(f&2){k=_[1].filter(fe),x();for(let h=0;h<a.length;h+=1)a[h].r();a=ee(a,f,g,1,_,k,o,n,se,ce,null,ie);for(let h=0;h<a.length;h+=1)a[h].a();te()}(!d||f&1&&c!==(c="task-section "+_[0]+" svelte-1rib3cm"))&&v(e,"class",c)},i(_){if(!d){for(let f=0;f<u.length;f+=1)D(l[f]);for(let f=0;f<k.length;f+=1)D(a[f]);d=!0}},o(_){for(let f=0;f<l.length;f+=1)N(l[f]);for(let f=0;f<a.length;f+=1)N(a[f]);d=!1},d(_){_&&m(e);for(let f=0;f<l.length;f+=1)l[f].d();for(let f=0;f<a.length;f+=1)a[f].d()}}}const ue=i=>!i.done,fe=i=>i.done;function we(i,e,t){let s;Y(i,q,a=>t(1,s=a));let{class:l=""}=e;const[r,n]=me({duration:a=>Math.sqrt(a*200),fallback(a,o){const c=getComputedStyle(a),d=c.transform==="none"?"":c.transform;return{duration:600,easing:ve,css:u=>`
					transform: ${d} scale(${u});
					opacity: ${u}
				`}}});return i.$$set=a=>{"class"in a&&t(0,l=a.class)},[l,s,r,n]}class De extends C{constructor(e){super();S(this,e,we,Ie,V,{class:0})}}function _e(i){let e,t,s,l=i[2].text&&de(i);return{c(){e=b("button"),l&&l.c(),this.h()},l(r){e=p(r,"BUTTON",{class:!0});var n=E(e);l&&l.l(n),n.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(r,n){I(r,e,n),l&&l.m(e,null),t||(s=F(e,"click",Q(i[6])),t=!0)},p(r,n){r[2].text?l?l.p(r,n):(l=de(r),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},d(r){r&&m(e),l&&l.d(),t=!1,s()}}}function de(i){let e=i[2].text+"",t;return{c(){t=R(e)},l(s){t=K(s,e)},m(s,l){I(s,t,l)},p(s,l){l&4&&e!==(e=s[2].text+"")&&W(t,e)},d(s){s&&m(t)}}}function Ne(i){let e,t,s,l,r,n=i[2]&&_e(i);return{c(){e=b("div"),t=b("input"),n&&n.c(),this.h()},l(a){e=p(a,"DIV",{class:!0});var o=E(e);t=p(o,"INPUT",{placeholder:!0,class:!0}),n&&n.l(o),o.forEach(m),this.h()},h(){v(t,"placeholder",i[1]),v(t,"class","svelte-12pihab"),v(e,"class",s="input-group "+i[0]+" "+(i[2]?"input-group_btn":"")+" svelte-12pihab"),B(e,"isError",i[5])},m(a,o){I(a,e,o),T(e,t),ae(t,i[4]),n&&n.m(e,null),i[9](e),l||(r=[F(t,"input",i[8]),F(t,"input",i[7])],l=!0)},p(a,[o]){o&2&&v(t,"placeholder",a[1]),o&16&&t.value!==a[4]&&ae(t,a[4]),a[2]?n?n.p(a,o):(n=_e(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",s),o&37&&B(e,"isError",a[5])},i:j,o:j,d(a){a&&m(e),n&&n.d(),i[9](null),l=!1,X(r)}}}function je(i,e,t){let{class:s=""}=e,{placeholder:l="Placeholer"}=e,{btn:r=null}=e,n,a,o=!1;const c=ge(),d=()=>{a?(c("submit",{value:a}),t(4,a="")):t(5,o=!0)},u=()=>{t(5,o=!1)};function y(){a=this.value,t(4,a)}function k(g){ke[g?"unshift":"push"](()=>{n=g,t(3,n)})}return i.$$set=g=>{"class"in g&&t(0,s=g.class),"placeholder"in g&&t(1,l=g.placeholder),"btn"in g&&t(2,r=g.btn)},[s,l,r,n,a,o,d,u,y,k]}class Ae extends C{constructor(e){super();S(this,e,je,Ne,V,{class:0,placeholder:1,btn:2})}}function Ce(i){let e,t,s,l;return t=new Ae({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),t.$on("submit",i[1]),{c(){e=b("div"),O(t.$$.fragment),this.h()},l(r){e=p(r,"DIV",{class:!0});var n=E(e);U(t.$$.fragment,n),n.forEach(m),this.h()},h(){v(e,"class",s="add-todo "+i[0]+" svelte-hols8d")},m(r,n){I(r,e,n),L(t,e,null),l=!0},p(r,[n]){(!l||n&1&&s!==(s="add-todo "+r[0]+" svelte-hols8d"))&&v(e,"class",s)},i(r){l||(D(t.$$.fragment,r),l=!0)},o(r){N(t.$$.fragment,r),l=!1},d(r){r&&m(e),P(t)}}}function Se(i,e,t){let{class:s=""}=e;const l=r=>{let n={id:Date.now(),text:r.detail.value,color:null,done:!1};q.update(a=>a=[n,...a])};return i.$$set=r=>{"class"in r&&t(0,s=r.class)},[s,l]}class Ve extends C{constructor(e){super();S(this,e,Se,Ce,V,{class:0})}}function Fe(i){let e,t,s,l,r,n,a;return l=new Ve({}),n=new De({props:{class:"mt-50"}}),{c(){e=be(),t=b("section"),s=b("div"),O(l.$$.fragment),O(n.$$.fragment),this.h()},l(o){pe('[data-svelte="svelte-1ms75pp"]',document.head).forEach(m),e=Ee(o),t=p(o,"SECTION",{class:!0});var d=E(t);s=p(d,"DIV",{class:!0});var u=E(s);U(l.$$.fragment,u),u.forEach(m),d.forEach(m),U(n.$$.fragment,o),this.h()},h(){document.title="\u0442\u0443\u0434\u0443\u0448\u043A\u0430",v(s,"class","container"),v(t,"class",r=""+(i[0]+" mt-50 svelte-hols8d"))},m(o,c){I(o,e,c),I(o,t,c),T(t,s),L(l,s,null),L(n,o,c),a=!0},p(o,[c]){(!a||c&1&&r!==(r=""+(o[0]+" mt-50 svelte-hols8d")))&&v(t,"class",r)},i(o){a||(D(l.$$.fragment,o),D(n.$$.fragment,o),a=!0)},o(o){N(l.$$.fragment,o),N(n.$$.fragment,o),a=!1},d(o){o&&m(e),o&&m(t),P(l),P(n,o)}}}function Oe(i,e,t){let{class:s=""}=e;return i.$$set=l=>{"class"in l&&t(0,s=l.class)},[s]}class Le extends C{constructor(e){super();S(this,e,Oe,Fe,V,{class:0})}}export{Le as default};
