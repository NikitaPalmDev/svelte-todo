import{K as Ve,C as Be,S as q,i as M,s as R,e as p,c as b,a as y,d as v,b as m,f as I,D as T,L as O,M as L,N as _e,t as z,g as G,O as A,h as de,P as X,Q as Le,E as V,R as he,T as Y,v as j,w as K,x as Q,U as H,V as J,W as $,p as S,X as x,Y as me,n as U,Z as ge,A as W,m as ee,o as te,_ as Pe,$ as le,a0 as se,a1 as qe,a2 as ve,a3 as Me,a4 as Re,a5 as ke,a6 as pe,j as je,a7 as Ke,l as Qe}from"../chunks/vendor-935e33b2.js";const B=Be([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),be=Ve(B,(a,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=a.filter(s=>s.color).map(s=>s.color).concat(e),r=n.filter((s,i)=>n.indexOf(s)===i).map((s,i)=>({id:i,color:s}));t(r)});function ye(a,t,e){const l=a.slice();return l[13]=t[e],l}function Ee(a,t){let e,l,n,c,r;return{key:a,first:null,c(){e=p("li"),l=p("button"),this.h()},l(s){e=b(s,"LI",{class:!0});var i=y(e);l=b(i,"BUTTON",{class:!0,style:!0}),y(l).forEach(v),i.forEach(v),this.h()},h(){m(l,"class","task__color-btn svelte-13w72rg"),m(l,"style",n=`background-color: ${t[13].color}`),m(e,"class","task__color-item svelte-13w72rg"),this.first=e},m(s,i){I(s,e,i),T(e,l),c||(r=O(l,"click",L(function(){_e(t[8](t[13].color))&&t[8](t[13].color).apply(this,arguments)})),c=!0)},p(s,i){t=s,i&36&&n!==(n=`background-color: ${t[13].color}`)&&m(l,"style",n)},d(s){s&&v(e),c=!1,r()}}}function We(a){let t,e,l,n,c,r,s,i,f,_,h,k=[],C=new Map,g,u,o,d,N,P,F=a[5].filter(a[10]);const ne=E=>E[13].id;for(let E=0;E<F.length;E+=1){let w=ye(a,F,E),D=ne(w);C.set(D,k[E]=Ee(D,w))}return{c(){t=p("div"),e=p("div"),l=p("p"),n=z(a[1]),c=p("div"),r=p("span"),s=z("22.11.2003"),i=p("div"),f=p("button"),_=p("span"),h=p("ul");for(let E=0;E<k.length;E+=1)k[E].c();u=p("button"),o=p("span"),this.h()},l(E){t=b(E,"DIV",{class:!0});var w=y(t);e=b(w,"DIV",{class:!0});var D=y(e);l=b(D,"P",{class:!0});var oe=y(l);n=G(oe,a[1]),oe.forEach(v),c=b(D,"DIV",{class:!0});var ae=y(c);r=b(ae,"SPAN",{class:!0});var re=y(r);s=G(re,"22.11.2003"),re.forEach(v),ae.forEach(v),D.forEach(v),i=b(w,"DIV",{class:!0});var ie=y(i);f=b(ie,"BUTTON",{class:!0});var ce=y(f);_=b(ce,"SPAN",{class:!0}),y(_).forEach(v),ce.forEach(v),ie.forEach(v),h=b(w,"UL",{class:!0,style:!0});var ue=y(h);for(let Z=0;Z<k.length;Z+=1)k[Z].l(ue);ue.forEach(v),u=b(w,"BUTTON",{class:!0});var fe=y(u);o=b(fe,"SPAN",{class:!0}),y(o).forEach(v),fe.forEach(v),w.forEach(v),this.h()},h(){m(l,"class","svelte-13w72rg"),m(r,"class","svelte-13w72rg"),m(c,"class","task__info svelte-13w72rg"),m(e,"class","task__main svelte-13w72rg"),m(_,"class","svg-image-del svelte-13w72rg"),m(f,"class","task__menu-btn task__menu-btn_del svelte-13w72rg"),m(i,"class","task__circle task__menu svelte-13w72rg"),m(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-13w72rg"),m(h,"style",g=`background-color: ${a[2]}`),m(o,"class","svelte-13w72rg"),m(u,"class","task__info-open svelte-13w72rg"),m(t,"class",d="task "+a[0]+" svelte-13w72rg"),A(t,"isDisabled",a[3]),A(t,"isOpen",a[4])},m(E,w){I(E,t,w),T(t,e),T(e,l),T(l,n),T(e,c),T(c,r),T(r,s),T(t,i),T(i,f),T(f,_),T(t,h);for(let D=0;D<k.length;D+=1)k[D].m(h,null);T(t,u),T(u,o),N||(P=[O(e,"click",a[6]),O(f,"click",L(a[7])),O(u,"click",L(a[11]))],N=!0)},p(E,[w]){w&2&&de(n,E[1]),w&292&&(F=E[5].filter(E[10]),k=X(k,w,ne,1,E,F,C,h,Le,Ee,null,ye)),w&4&&g!==(g=`background-color: ${E[2]}`)&&m(h,"style",g),w&1&&d!==(d="task "+E[0]+" svelte-13w72rg")&&m(t,"class",d),w&9&&A(t,"isDisabled",E[3]),w&17&&A(t,"isOpen",E[4])},i:V,o:V,d(E){E&&v(t);for(let w=0;w<k.length;w+=1)k[w].d();N=!1,he(P)}}}function Xe(a,t,e){let l,n;Y(a,B,o=>e(12,l=o)),Y(a,be,o=>e(5,n=o));let{class:c=""}=t,{text:r=""}=t,{color:s="#0029FF"}=t,{disabled:i=!1}=t,{id:f=null}=t,_=!1;const h=()=>{let o=l.map(d=>(f===d.id&&(d.done=!d.done),d));B.set(o)},k=()=>{let o=l.filter(d=>d.id!=f);B.set(o),console.log("del",f)},C=o=>{let d=l.map(N=>(f===N.id&&(N.color=o),N));B.set(d)},g=o=>o.color!=s,u=()=>e(4,_=!_);return a.$$set=o=>{"class"in o&&e(0,c=o.class),"text"in o&&e(1,r=o.text),"color"in o&&e(2,s=o.color),"disabled"in o&&e(3,i=o.disabled),"id"in o&&e(9,f=o.id)},[c,r,s,i,_,n,h,k,C,f,g,u]}class we extends q{constructor(t){super();M(this,t,Xe,We,R,{class:0,text:1,color:2,disabled:3,id:9})}}function Te(a,t,e){const l=a.slice();return l[4]=t[e],l}function Ce(a,t,e){const l=a.slice();return l[4]=t[e],l}function Fe(a,t){let e,l,n,c,r,s=V,i;return l=new we({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:a,first:null,c(){e=p("li"),j(l.$$.fragment),this.h()},l(f){e=b(f,"LI",{class:!0});var _=y(e);K(l.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item"),this.first=e},m(f,_){I(f,e,_),Q(l,e,null),i=!0},p(f,_){t=f;const h={};_&2&&(h.text=t[4].text),_&2&&(h.color=t[4].color?t[4].color:null),_&2&&(h.id=t[4].id),l.$set(h)},r(){r=e.getBoundingClientRect()},f(){H(e),s(),J(e,r)},a(){s(),s=$(e,r,le,{duration:300})},i(f){i||(S(l.$$.fragment,f),x(()=>{c&&c.end(1),n=me(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){U(l.$$.fragment,f),n&&n.invalidate(),c=ge(e,t[2],{key:t[4].id}),i=!1},d(f){f&&v(e),W(l),f&&c&&c.end()}}}function Ie(a,t){let e,l,n,c,r,s=V,i;return l=new we({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:a,first:null,c(){e=p("li"),j(l.$$.fragment),this.h()},l(f){e=b(f,"LI",{class:!0});var _=y(e);K(l.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item"),this.first=e},m(f,_){I(f,e,_),Q(l,e,null),i=!0},p(f,_){t=f;const h={};_&2&&(h.text=t[4].text),_&2&&(h.color=t[4].color?t[4].color:null),_&2&&(h.id=t[4].id),l.$set(h)},r(){r=e.getBoundingClientRect()},f(){H(e),s(),J(e,r)},a(){s(),s=$(e,r,le,{duration:300})},i(f){i||(S(l.$$.fragment,f),x(()=>{c&&c.end(1),n=me(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){U(l.$$.fragment,f),n&&n.invalidate(),c=ge(e,t[2],{key:t[4].id}),i=!1},d(f){f&&v(e),W(l),f&&c&&c.end()}}}function Ye(a){let t,e,l,n=[],c=new Map,r,s=[],i=new Map,f,_,h=a[1].filter(Ne);const k=u=>u[4].id;for(let u=0;u<h.length;u+=1){let o=Ce(a,h,u),d=k(o);c.set(d,n[u]=Fe(d,o))}let C=a[1].filter(De);const g=u=>u[4].id;for(let u=0;u<C.length;u+=1){let o=Te(a,C,u),d=g(o);i.set(d,s[u]=Ie(d,o))}return{c(){t=p("section"),e=p("div"),l=p("ul");for(let u=0;u<n.length;u+=1)n[u].c();r=p("ul");for(let u=0;u<s.length;u+=1)s[u].c();this.h()},l(u){t=b(u,"SECTION",{class:!0});var o=y(t);e=b(o,"DIV",{class:!0});var d=y(e);l=b(d,"UL",{class:!0});var N=y(l);for(let F=0;F<n.length;F+=1)n[F].l(N);N.forEach(v),r=b(d,"UL",{class:!0});var P=y(r);for(let F=0;F<s.length;F+=1)s[F].l(P);P.forEach(v),d.forEach(v),o.forEach(v),this.h()},h(){m(l,"class","task-section__col"),m(r,"class","task-section__col"),m(e,"class","container task-section__grid svelte-1rib3cm"),m(t,"class",f="task-section "+a[0]+" svelte-1rib3cm")},m(u,o){I(u,t,o),T(t,e),T(e,l);for(let d=0;d<n.length;d+=1)n[d].m(l,null);T(e,r);for(let d=0;d<s.length;d+=1)s[d].m(r,null);_=!0},p(u,[o]){if(o&2){h=u[1].filter(Ne),ee();for(let d=0;d<n.length;d+=1)n[d].r();n=X(n,o,k,1,u,h,c,l,se,Fe,null,Ce);for(let d=0;d<n.length;d+=1)n[d].a();te()}if(o&2){C=u[1].filter(De),ee();for(let d=0;d<s.length;d+=1)s[d].r();s=X(s,o,g,1,u,C,i,r,se,Ie,null,Te);for(let d=0;d<s.length;d+=1)s[d].a();te()}(!_||o&1&&f!==(f="task-section "+u[0]+" svelte-1rib3cm"))&&m(t,"class",f)},i(u){if(!_){for(let o=0;o<h.length;o+=1)S(n[o]);for(let o=0;o<C.length;o+=1)S(s[o]);_=!0}},o(u){for(let o=0;o<n.length;o+=1)U(n[o]);for(let o=0;o<s.length;o+=1)U(s[o]);_=!1},d(u){u&&v(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<s.length;o+=1)s[o].d()}}}const Ne=a=>!a.done,De=a=>a.done;function Ze(a,t,e){let l;Y(a,B,s=>e(1,l=s));let{class:n=""}=t;const[c,r]=Pe({duration:s=>Math.sqrt(s*200),fallback(s,i){const f=getComputedStyle(s),_=f.transform==="none"?"":f.transform;return{duration:600,easing:qe,css:h=>`
					transform: ${_} scale(${h});
					opacity: ${h}
				`}}});return a.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,c,r]}class ze extends q{constructor(t){super();M(this,t,Ze,Ye,R,{class:0})}}function Oe(a){let t,e,l,n=a[2].text&&Ae(a);return{c(){t=p("button"),n&&n.c(),this.h()},l(c){t=b(c,"BUTTON",{class:!0});var r=y(t);n&&n.l(r),r.forEach(v),this.h()},h(){m(t,"class","btn svelte-12pihab")},m(c,r){I(c,t,r),n&&n.m(t,null),e||(l=O(t,"click",L(a[6])),e=!0)},p(c,r){c[2].text?n?n.p(c,r):(n=Ae(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&v(t),n&&n.d(),e=!1,l()}}}function Ae(a){let t=a[2].text+"",e;return{c(){e=z(t)},l(l){e=G(l,t)},m(l,n){I(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&de(e,t)},d(l){l&&v(e)}}}function Ge(a){let t,e,l,n,c,r=a[2]&&Oe(a);return{c(){t=p("div"),e=p("input"),r&&r.c(),this.h()},l(s){t=b(s,"DIV",{class:!0});var i=y(t);e=b(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(v),this.h()},h(){m(e,"placeholder",a[1]),m(e,"class","svelte-12pihab"),m(t,"class",l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-12pihab"),A(t,"isError",a[5])},m(s,i){I(s,t,i),T(t,e),ve(e,a[4]),r&&r.m(t,null),a[11](t),n||(c=[O(e,"input",a[9]),O(e,"input",a[7]),O(e,"keydown",a[10])],n=!0)},p(s,[i]){i&2&&m(e,"placeholder",s[1]),i&16&&e.value!==s[4]&&ve(e,s[4]),s[2]?r?r.p(s,i):(r=Oe(s),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-12pihab")&&m(t,"class",l),i&37&&A(t,"isError",s[5])},i:V,o:V,d(s){s&&v(t),r&&r.d(),a[11](null),n=!1,he(c)}}}function He(a,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,r,s,i=!1;const f=Me(),_=()=>{s?(f("submit",{value:s}),e(4,s="")):e(5,i=!0)},h=()=>{e(5,i=!1)},k=o=>{let d=o.key;d==="Control"&&f("color"),d==="Enter"&&_()};function C(){s=this.value,e(4,s)}const g=o=>k(o);function u(o){Re[o?"unshift":"push"](()=>{r=o,e(3,r)})}return a.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,c=o.btn)},[l,n,c,r,s,i,_,h,k,C,g,u]}class Je extends q{constructor(t){super();M(this,t,He,Ge,R,{class:0,placeholder:1,btn:2})}}function Se(a,t,e){const l=a.slice();return l[9]=t[e],l[11]=e,l}function Ue(a,t){let e,l,n,c,r=V,s,i,f;return{key:a,first:null,c(){e=p("button"),this.h()},l(_){e=b(_,"BUTTON",{class:!0,style:!0}),y(e).forEach(v),this.h()},h(){m(e,"class","add-todo__color svelte-y5nf6k"),m(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,h){I(_,e,h),s=!0,i||(f=O(e,"click",L(function(){_e(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),i=!0)},p(_,h){t=_,(!s||h&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",l)},r(){c=e.getBoundingClientRect()},f(){H(e),r(),J(e,c)},a(){r(),r=$(e,c,le,{})},i(_){s||(x(()=>{n||(n=ke(e,pe,{},!0)),n.run(1)}),s=!0)},o(_){n||(n=ke(e,pe,{},!1)),n.run(0),s=!1},d(_){_&&v(e),_&&n&&n.end(),i=!1,f()}}}function $e(a){let t,e,l,n,c=[],r=new Map,s,i,f,_,h,k=a[3].filter(a[7]);const C=g=>g[9].id;for(let g=0;g<k.length;g+=1){let u=Se(a,k,g),o=C(u);r.set(o,c[g]=Ue(o,u))}return s=new Je({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",a[8]),s.$on("submit",a[4]),{c(){t=p("div"),e=p("div"),l=p("span");for(let g=0;g<c.length;g+=1)c[g].c();j(s.$$.fragment),this.h()},l(g){t=b(g,"DIV",{class:!0});var u=y(t);e=b(u,"DIV",{class:!0});var o=y(e);l=b(o,"SPAN",{class:!0,style:!0}),y(l).forEach(v);for(let d=0;d<c.length;d+=1)c[d].l(o);o.forEach(v),K(s.$$.fragment,u),u.forEach(v),this.h()},h(){m(l,"class","add-todo__color add-todo__color_main svelte-y5nf6k"),m(l,"style",n=`color: ${a[1]}`),m(e,"class","add-todo__color-list svelte-y5nf6k"),A(e,"isOpen",a[2]),m(t,"class",i="add-todo "+a[0]+" svelte-y5nf6k")},m(g,u){I(g,t,u),T(t,e),T(e,l);for(let o=0;o<c.length;o+=1)c[o].m(e,null);Q(s,t,null),f=!0,_||(h=O(l,"click",L(a[6])),_=!0)},p(g,[u]){if((!f||u&2&&n!==(n=`color: ${g[1]}`))&&m(l,"style",n),u&42){k=g[3].filter(g[7]),ee();for(let o=0;o<c.length;o+=1)c[o].r();c=X(c,u,C,1,g,k,r,e,se,Ue,null,Se);for(let o=0;o<c.length;o+=1)c[o].a();te()}u&4&&A(e,"isOpen",g[2]),(!f||u&1&&i!==(i="add-todo "+g[0]+" svelte-y5nf6k"))&&m(t,"class",i)},i(g){if(!f){for(let u=0;u<k.length;u+=1)S(c[u]);S(s.$$.fragment,g),f=!0}},o(g){for(let u=0;u<c.length;u+=1)U(c[u]);U(s.$$.fragment,g),f=!1},d(g){g&&v(t);for(let u=0;u<c.length;u+=1)c[u].d();W(s),_=!1,h()}}}function xe(a,t,e){let l;Y(a,be,k=>e(3,l=k));let{class:n=""}=t,c="#0029FF",r=!1;const s=k=>{let C={id:Date.now(),text:k.detail.value,color:c,done:!1};B.update(g=>g=[C,...g])},i=k=>k&&e(1,c=k),f=()=>e(2,r=!r),_=k=>k.color!=c,h=()=>e(2,r=!r);return a.$$set=k=>{"class"in k&&e(0,n=k.class)},[n,c,r,l,s,i,f,_,h]}class et extends q{constructor(t){super();M(this,t,xe,$e,R,{class:0})}}function tt(a){let t,e,l,n,c,r,s;return n=new et({}),r=new ze({props:{class:"mt-50"}}),{c(){t=je(),e=p("section"),l=p("div"),j(n.$$.fragment),j(r.$$.fragment),this.h()},l(i){Ke('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=Qe(i),e=b(i,"SECTION",{class:!0});var _=y(e);l=b(_,"DIV",{class:!0});var h=y(l);K(n.$$.fragment,h),h.forEach(v),_.forEach(v),K(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(l,"class","container"),m(e,"class",c=""+(a[0]+" mt-50 svelte-hols8d"))},m(i,f){I(i,t,f),I(i,e,f),T(e,l),Q(n,l,null),Q(r,i,f),s=!0},p(i,[f]){(!s||f&1&&c!==(c=""+(i[0]+" mt-50 svelte-hols8d")))&&m(e,"class",c)},i(i){s||(S(n.$$.fragment,i),S(r.$$.fragment,i),s=!0)},o(i){U(n.$$.fragment,i),U(r.$$.fragment,i),s=!1},d(i){i&&v(t),i&&v(e),W(n),W(r,i)}}}function lt(a,t,e){let{class:l=""}=t;return a.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class nt extends q{constructor(t){super();M(this,t,lt,tt,R,{class:0})}}export{nt as default};
