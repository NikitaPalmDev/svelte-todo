import{K as Re,C as ze,S as z,i as j,s as H,e as b,c as y,a as E,d as g,b as m,f as F,D as C,L as A,M as L,N as ke,t as $,g as x,O as U,h as ee,P as X,Q as je,E as M,R as pe,T as Z,U as be,v as K,w as Y,x as Q,V as te,W as le,X as se,p as P,Y as ne,Z as ye,n as B,_ as Ee,A as W,m as oe,o as ae,$ as He,a0 as re,a1 as ie,a2 as Ke,a3 as we,a4 as Ye,a5 as Te,a6 as Ce,j as Qe,a7 as We,l as Xe}from"../chunks/vendor-184f9251.js";const R=ze([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=Re(R,(o,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=o.filter(s=>s.color).map(s=>s.color).concat(e),r=n.filter((s,i)=>n.indexOf(s)===i).map((s,i)=>({id:i,color:s}));t(r)});function De(o,t,e){const l=o.slice();return l[18]=t[e],l}function Ie(o,t){let e,l,n,a,r;return{key:o,first:null,c(){e=b("li"),l=b("button"),this.h()},l(s){e=y(s,"LI",{class:!0});var i=E(e);l=y(i,"BUTTON",{class:!0,style:!0}),E(l).forEach(g),i.forEach(g),this.h()},h(){m(l,"class","task__color-btn svelte-8owsm3"),m(l,"style",n=`background-color: ${t[18].color}`),m(e,"class","task__color-item svelte-8owsm3"),this.first=e},m(s,i){F(s,e,i),C(e,l),a||(r=A(l,"click",L(function(){ke(t[12](t[18].color))&&t[12](t[18].color).apply(this,arguments)})),a=!0)},p(s,i){t=s,i&260&&n!==(n=`background-color: ${t[18].color}`)&&m(l,"style",n)},d(s){s&&g(e),a=!1,r()}}}function Ze(o){let t,e,l,n,a,r,s,i,f,_,v,k,O,d,c=[],u=new Map,h,N,S,D,p,I,V=o[8].filter(o[16]);const ce=w=>w[18].id;for(let w=0;w<V.length;w+=1){let T=De(o,V,w),q=ce(T);u.set(q,c[w]=Ie(q,T))}return{c(){t=b("div"),e=b("div"),l=b("p"),n=$(o[1]),a=b("div"),r=b("div"),s=b("span"),i=$(o[4]),f=b("div"),_=b("button"),v=b("span"),k=b("button"),O=b("span"),d=b("ul");for(let w=0;w<c.length;w+=1)c[w].c();N=b("button"),S=b("span"),this.h()},l(w){t=y(w,"DIV",{class:!0});var T=E(t);e=y(T,"DIV",{class:!0});var q=E(e);l=y(q,"P",{class:!0});var ue=E(l);n=x(ue,o[1]),ue.forEach(g),a=y(q,"DIV",{class:!0});var fe=E(a);r=y(fe,"DIV",{class:!0});var _e=E(r);s=y(_e,"SPAN",{class:!0});var de=E(s);i=x(de,o[4]),de.forEach(g),_e.forEach(g),fe.forEach(g),q.forEach(g),f=y(T,"DIV",{class:!0});var G=E(f);_=y(G,"BUTTON",{class:!0});var he=E(_);v=y(he,"SPAN",{class:!0}),E(v).forEach(g),he.forEach(g),k=y(G,"BUTTON",{class:!0});var me=E(k);O=y(me,"SPAN",{class:!0}),E(O).forEach(g),me.forEach(g),G.forEach(g),d=y(T,"UL",{class:!0,style:!0});var ve=E(d);for(let J=0;J<c.length;J+=1)c[J].l(ve);ve.forEach(g),N=y(T,"BUTTON",{class:!0});var ge=E(N);S=y(ge,"SPAN",{class:!0}),E(S).forEach(g),ge.forEach(g),T.forEach(g),this.h()},h(){m(l,"class","svelte-8owsm3"),m(s,"class","svelte-8owsm3"),m(r,"class","task__info-content svelte-8owsm3"),m(a,"class","task__info svelte-8owsm3"),m(e,"class","task__main svelte-8owsm3"),m(v,"class","svg-image-del svelte-8owsm3"),m(_,"class","task__menu-btn task__menu-btn_del svelte-8owsm3"),m(O,"class","svg-image-pen svelte-8owsm3"),m(k,"class","task__menu-btn task__menu-btn_edit svelte-8owsm3"),m(f,"class","task__circle task__menu svelte-8owsm3"),m(d,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-8owsm3"),m(d,"style",h=`background-color: ${o[2]}`),U(d,"isOpenColor",o[7]),m(S,"class","svelte-8owsm3"),m(N,"class","task__info-open svelte-8owsm3"),m(t,"class",D="task "+o[0]+" svelte-8owsm3"),U(t,"isDisabled",o[3]),U(t,"isOpen",o[5])},m(w,T){F(w,t,T),C(t,e),C(e,l),C(l,n),C(e,a),C(a,r),C(r,s),C(s,i),o[15](a),C(t,f),C(f,_),C(_,v),C(f,k),C(k,O),C(t,d);for(let q=0;q<c.length;q+=1)c[q].m(d,null);C(t,N),C(N,S),p||(I=[A(e,"click",o[9]),A(_,"click",L(o[10])),A(k,"click",L(o[11])),A(N,"click",L(o[13]))],p=!0)},p(w,[T]){T&2&&ee(n,w[1]),T&16&&ee(i,w[4]),T&4356&&(V=w[8].filter(w[16]),c=X(c,T,ce,1,w,V,u,d,je,Ie,null,De)),T&4&&h!==(h=`background-color: ${w[2]}`)&&m(d,"style",h),T&128&&U(d,"isOpenColor",w[7]),T&1&&D!==(D="task "+w[0]+" svelte-8owsm3")&&m(t,"class",D),T&9&&U(t,"isDisabled",w[3]),T&33&&U(t,"isOpen",w[5])},i:M,o:M,d(w){w&&g(t),o[15](null);for(let T=0;T<c.length;T+=1)c[T].d();p=!1,pe(I)}}}function Ge(o,t,e){let l,n;Z(o,R,p=>e(17,l=p)),Z(o,Oe,p=>e(8,n=p));let{class:a=""}=t,{text:r=""}=t,{color:s="#0029FF"}=t,{disabled:i=!1}=t,{id:f=null}=t,{date:_=""}=t,v=!1,k,O=!1;const d=()=>{let p=l.map(I=>(f===I.id&&(I.done=!I.done),I));R.set(p)},c=()=>{let p=l.filter(I=>I.id!=f);R.set(p)},u=()=>{e(7,O=!O)},h=p=>{let I=l.map(V=>(f===V.id&&(V.color=p),V));R.set(I)},N=()=>{e(5,v=!v);let p=0;k.childNodes.forEach(I=>p+=I.clientHeight),k.style.setProperty("--taskInfoHeight",`${v?p:0}px`)};function S(p){be[p?"unshift":"push"](()=>{k=p,e(6,k)})}const D=p=>p.color!=s;return o.$$set=p=>{"class"in p&&e(0,a=p.class),"text"in p&&e(1,r=p.text),"color"in p&&e(2,s=p.color),"disabled"in p&&e(3,i=p.disabled),"id"in p&&e(14,f=p.id),"date"in p&&e(4,_=p.date)},[a,r,s,i,_,v,k,O,n,d,c,u,h,N,f,S,D]}class Ne extends z{constructor(t){super();j(this,t,Ge,Ze,H,{class:0,text:1,color:2,disabled:3,id:14,date:4})}}function Fe(o,t,e){const l=o.slice();return l[4]=t[e],l}function Ae(o,t,e){const l=o.slice();return l[4]=t[e],l}function Se(o,t){let e,l,n,a,r,s=M,i;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:o,first:null,c(){e=b("li"),K(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=E(e);Y(l.$$.fragment,_),_.forEach(g),this.h()},h(){m(e,"class","task-section__item"),this.first=e},m(f,_){F(f,e,_),Q(l,e,null),i=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),l.$set(v)},r(){r=e.getBoundingClientRect()},f(){te(e),s(),le(e,r)},a(){s(),s=se(e,r,re,{duration:300})},i(f){i||(P(l.$$.fragment,f),ne(()=>{a&&a.end(1),n=ye(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),a=Ee(e,t[2],{key:t[4].id}),i=!1},d(f){f&&g(e),W(l),f&&a&&a.end()}}}function qe(o,t){let e,l,n,a,r,s=M,i;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:o,first:null,c(){e=b("li"),K(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=E(e);Y(l.$$.fragment,_),_.forEach(g),this.h()},h(){m(e,"class","task-section__item"),this.first=e},m(f,_){F(f,e,_),Q(l,e,null),i=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),l.$set(v)},r(){r=e.getBoundingClientRect()},f(){te(e),s(),le(e,r)},a(){s(),s=se(e,r,re,{duration:300})},i(f){i||(P(l.$$.fragment,f),ne(()=>{a&&a.end(1),n=ye(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),a=Ee(e,t[2],{key:t[4].id}),i=!1},d(f){f&&g(e),W(l),f&&a&&a.end()}}}function Je(o){let t,e,l,n=[],a=new Map,r,s=[],i=new Map,f,_,v=o[1].filter(Ue);const k=c=>c[4].id;for(let c=0;c<v.length;c+=1){let u=Ae(o,v,c),h=k(u);a.set(h,n[c]=Se(h,u))}let O=o[1].filter(Ve);const d=c=>c[4].id;for(let c=0;c<O.length;c+=1){let u=Fe(o,O,c),h=d(u);i.set(h,s[c]=qe(h,u))}return{c(){t=b("section"),e=b("div"),l=b("ul");for(let c=0;c<n.length;c+=1)n[c].c();r=b("ul");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){t=y(c,"SECTION",{class:!0});var u=E(t);e=y(u,"DIV",{class:!0});var h=E(e);l=y(h,"UL",{class:!0});var N=E(l);for(let D=0;D<n.length;D+=1)n[D].l(N);N.forEach(g),r=y(h,"UL",{class:!0});var S=E(r);for(let D=0;D<s.length;D+=1)s[D].l(S);S.forEach(g),h.forEach(g),u.forEach(g),this.h()},h(){m(l,"class","task-section__col"),m(r,"class","task-section__col"),m(e,"class","container task-section__grid svelte-q8mvyt"),m(t,"class",f="task-section "+o[0]+" svelte-q8mvyt")},m(c,u){F(c,t,u),C(t,e),C(e,l);for(let h=0;h<n.length;h+=1)n[h].m(l,null);C(e,r);for(let h=0;h<s.length;h+=1)s[h].m(r,null);_=!0},p(c,[u]){if(u&2){v=c[1].filter(Ue),oe();for(let h=0;h<n.length;h+=1)n[h].r();n=X(n,u,k,1,c,v,a,l,ie,Se,null,Ae);for(let h=0;h<n.length;h+=1)n[h].a();ae()}if(u&2){O=c[1].filter(Ve),oe();for(let h=0;h<s.length;h+=1)s[h].r();s=X(s,u,d,1,c,O,i,r,ie,qe,null,Fe);for(let h=0;h<s.length;h+=1)s[h].a();ae()}(!_||u&1&&f!==(f="task-section "+c[0]+" svelte-q8mvyt"))&&m(t,"class",f)},i(c){if(!_){for(let u=0;u<v.length;u+=1)P(n[u]);for(let u=0;u<O.length;u+=1)P(s[u]);_=!0}},o(c){for(let u=0;u<n.length;u+=1)B(n[u]);for(let u=0;u<s.length;u+=1)B(s[u]);_=!1},d(c){c&&g(t);for(let u=0;u<n.length;u+=1)n[u].d();for(let u=0;u<s.length;u+=1)s[u].d()}}}const Ue=o=>!o.done,Ve=o=>o.done;function $e(o,t,e){let l;Z(o,R,s=>e(1,l=s));let{class:n=""}=t;const[a,r]=He({duration:s=>Math.sqrt(s*200),fallback(s,i){const f=getComputedStyle(s),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Ke,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return o.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,a,r]}class xe extends z{constructor(t){super();j(this,t,$e,Je,H,{class:0})}}const et=(o,t)=>{if(t==="dot"){let e=o.getDate(),l=o.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${o.getFullYear()}`}};function Pe(o){let t,e,l,n=o[2].text&&Be(o);return{c(){t=b("button"),n&&n.c(),this.h()},l(a){t=y(a,"BUTTON",{class:!0});var r=E(t);n&&n.l(r),r.forEach(g),this.h()},h(){m(t,"class","btn svelte-1yy2xse")},m(a,r){F(a,t,r),n&&n.m(t,null),e||(l=A(t,"click",L(o[6])),e=!0)},p(a,r){a[2].text?n?n.p(a,r):(n=Be(a),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(a){a&&g(t),n&&n.d(),e=!1,l()}}}function Be(o){let t=o[2].text+"",e;return{c(){e=$(t)},l(l){e=x(l,t)},m(l,n){F(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&ee(e,t)},d(l){l&&g(e)}}}function tt(o){let t,e,l,n,a,r=o[2]&&Pe(o);return{c(){t=b("div"),e=b("input"),r&&r.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var i=E(t);e=y(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(g),this.h()},h(){m(e,"placeholder",o[1]),m(e,"class","svelte-1yy2xse"),m(t,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-1yy2xse"),U(t,"isError",o[5])},m(s,i){F(s,t,i),C(t,e),we(e,o[4]),r&&r.m(t,null),o[11](t),n||(a=[A(e,"input",o[9]),A(e,"input",o[7]),A(e,"keydown",o[10])],n=!0)},p(s,[i]){i&2&&m(e,"placeholder",s[1]),i&16&&e.value!==s[4]&&we(e,s[4]),s[2]?r?r.p(s,i):(r=Pe(s),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse")&&m(t,"class",l),i&37&&U(t,"isError",s[5])},i:M,o:M,d(s){s&&g(t),r&&r.d(),o[11](null),n=!1,pe(a)}}}function lt(o,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:a=null}=t,r,s,i=!1;const f=Ye(),_=()=>{s?(f("submit",{value:s}),e(4,s="")):e(5,i=!0)},v=()=>{e(5,i=!1)},k=u=>{let h=u.key;h==="Control"&&f("color"),h==="Enter"&&_()};function O(){s=this.value,e(4,s)}const d=u=>k(u);function c(u){be[u?"unshift":"push"](()=>{r=u,e(3,r)})}return o.$$set=u=>{"class"in u&&e(0,l=u.class),"placeholder"in u&&e(1,n=u.placeholder),"btn"in u&&e(2,a=u.btn)},[l,n,a,r,s,i,_,v,k,O,d,c]}class st extends z{constructor(t){super();j(this,t,lt,tt,H,{class:0,placeholder:1,btn:2})}}function Le(o,t,e){const l=o.slice();return l[9]=t[e],l[11]=e,l}function Me(o,t){let e,l,n,a,r=M,s,i,f;return{key:o,first:null,c(){e=b("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),E(e).forEach(g),this.h()},h(){m(e,"class","add-todo__color svelte-1hafqlz"),m(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){F(_,e,v),s=!0,i||(f=A(e,"click",L(function(){ke(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),i=!0)},p(_,v){t=_,(!s||v&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",l)},r(){a=e.getBoundingClientRect()},f(){te(e),r(),le(e,a)},a(){r(),r=se(e,a,re,{})},i(_){s||(ne(()=>{n||(n=Te(e,Ce,{},!0)),n.run(1)}),s=!0)},o(_){n||(n=Te(e,Ce,{},!1)),n.run(0),s=!1},d(_){_&&g(e),_&&n&&n.end(),i=!1,f()}}}function nt(o){let t,e,l,n,a=[],r=new Map,s,i,f,_,v,k=o[3].filter(o[7]);const O=d=>d[9].id;for(let d=0;d<k.length;d+=1){let c=Le(o,k,d),u=O(c);r.set(u,a[d]=Me(u,c))}return s=new st({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",o[8]),s.$on("submit",o[4]),{c(){t=b("div"),e=b("div"),l=b("span");for(let d=0;d<a.length;d+=1)a[d].c();K(s.$$.fragment),this.h()},l(d){t=y(d,"DIV",{class:!0});var c=E(t);e=y(c,"DIV",{class:!0});var u=E(e);l=y(u,"SPAN",{class:!0,style:!0}),E(l).forEach(g);for(let h=0;h<a.length;h+=1)a[h].l(u);u.forEach(g),Y(s.$$.fragment,c),c.forEach(g),this.h()},h(){m(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),m(l,"style",n=`color: ${o[1]}`),m(e,"class","add-todo__color-list svelte-1hafqlz"),U(e,"isOpen",o[2]),m(t,"class",i="add-todo "+o[0]+" svelte-1hafqlz")},m(d,c){F(d,t,c),C(t,e),C(e,l);for(let u=0;u<a.length;u+=1)a[u].m(e,null);Q(s,t,null),f=!0,_||(v=A(l,"click",L(o[6])),_=!0)},p(d,[c]){if((!f||c&2&&n!==(n=`color: ${d[1]}`))&&m(l,"style",n),c&42){k=d[3].filter(d[7]),oe();for(let u=0;u<a.length;u+=1)a[u].r();a=X(a,c,O,1,d,k,r,e,ie,Me,null,Le);for(let u=0;u<a.length;u+=1)a[u].a();ae()}c&4&&U(e,"isOpen",d[2]),(!f||c&1&&i!==(i="add-todo "+d[0]+" svelte-1hafqlz"))&&m(t,"class",i)},i(d){if(!f){for(let c=0;c<k.length;c+=1)P(a[c]);P(s.$$.fragment,d),f=!0}},o(d){for(let c=0;c<a.length;c+=1)B(a[c]);B(s.$$.fragment,d),f=!1},d(d){d&&g(t);for(let c=0;c<a.length;c+=1)a[c].d();W(s),_=!1,v()}}}function ot(o,t,e){let l;Z(o,Oe,k=>e(3,l=k));let{class:n=""}=t,a="#0029FF",r=!1;const s=k=>{let O={id:Date.now(),text:k.detail.value,color:a,done:!1,date:et(new Date,"dot")};R.update(d=>d=[O,...d])},i=k=>k&&e(1,a=k),f=()=>e(2,r=!r),_=k=>k.color!=a,v=()=>e(2,r=!r);return o.$$set=k=>{"class"in k&&e(0,n=k.class)},[n,a,r,l,s,i,f,_,v]}class at extends z{constructor(t){super();j(this,t,ot,nt,H,{class:0})}}function rt(o){let t,e,l,n,a,r,s;return n=new at({}),r=new xe({props:{class:"mt-50"}}),{c(){t=Qe(),e=b("section"),l=b("div"),K(n.$$.fragment),K(r.$$.fragment),this.h()},l(i){We('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Xe(i),e=y(i,"SECTION",{class:!0});var _=E(e);l=y(_,"DIV",{class:!0});var v=E(l);Y(n.$$.fragment,v),v.forEach(g),_.forEach(g),Y(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(l,"class","container"),m(e,"class",a=""+(o[0]+" mt-50 svelte-110abfo"))},m(i,f){F(i,t,f),F(i,e,f),C(e,l),Q(n,l,null),Q(r,i,f),s=!0},p(i,[f]){(!s||f&1&&a!==(a=""+(i[0]+" mt-50 svelte-110abfo")))&&m(e,"class",a)},i(i){s||(P(n.$$.fragment,i),P(r.$$.fragment,i),s=!0)},o(i){B(n.$$.fragment,i),B(r.$$.fragment,i),s=!1},d(i){i&&g(t),i&&g(e),W(n),W(r,i)}}}function it(o,t,e){let{class:l=""}=t;return o.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class ut extends z{constructor(t){super();j(this,t,it,rt,H,{class:0})}}export{ut as default};
