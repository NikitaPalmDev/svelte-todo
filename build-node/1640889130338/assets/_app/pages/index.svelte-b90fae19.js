import{K as Be,C as Le,S as q,i as M,s as R,e as b,c as y,a as E,d as v,b as g,f as O,D as w,L as A,M as P,N as _e,t as z,g as G,O as S,h as de,P as X,Q as Pe,E as B,R as he,T as Y,U as ge,v as j,w as K,x as Q,V as H,W as J,X as $,p as U,Y as x,Z as me,n as V,_ as ve,A as W,m as ee,o as te,$ as qe,a0 as le,a1 as se,a2 as Me,a3 as ke,a4 as Re,a5 as pe,a6 as be,j as je,a7 as Ke,l as Qe}from"../chunks/vendor-184f9251.js";const L=Le([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),ye=Be(L,(o,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=o.filter(s=>s.color).map(s=>s.color).concat(e),r=n.filter((s,i)=>n.indexOf(s)===i).map((s,i)=>({id:i,color:s}));t(r)});function Ee(o,t,e){const l=o.slice();return l[15]=t[e],l}function Te(o,t){let e,l,n,a,r;return{key:o,first:null,c(){e=b("li"),l=b("button"),this.h()},l(s){e=y(s,"LI",{class:!0});var i=E(e);l=y(i,"BUTTON",{class:!0,style:!0}),E(l).forEach(v),i.forEach(v),this.h()},h(){g(l,"class","task__color-btn svelte-1r4g98n"),g(l,"style",n=`background-color: ${t[15].color}`),g(e,"class","task__color-item svelte-1r4g98n"),this.first=e},m(s,i){O(s,e,i),w(e,l),a||(r=A(l,"click",P(function(){_e(t[9](t[15].color))&&t[9](t[15].color).apply(this,arguments)})),a=!0)},p(s,i){t=s,i&68&&n!==(n=`background-color: ${t[15].color}`)&&g(l,"style",n)},d(s){s&&v(e),a=!1,r()}}}function We(o){let t,e,l,n,a,r,s,i,f,_,d,k=[],F=new Map,m,u,c,h,p,N,I=o[6].filter(o[13]);const ne=T=>T[15].id;for(let T=0;T<I.length;T+=1){let C=Ee(o,I,T),D=ne(C);F.set(D,k[T]=Te(D,C))}return{c(){t=b("div"),e=b("div"),l=b("p"),n=z(o[1]),a=b("div"),r=b("span"),s=z("22.11.2003"),i=b("div"),f=b("button"),_=b("span"),d=b("ul");for(let T=0;T<k.length;T+=1)k[T].c();u=b("button"),c=b("span"),this.h()},l(T){t=y(T,"DIV",{class:!0});var C=E(t);e=y(C,"DIV",{class:!0});var D=E(e);l=y(D,"P",{class:!0});var oe=E(l);n=G(oe,o[1]),oe.forEach(v),a=y(D,"DIV",{class:!0});var ae=E(a);r=y(ae,"SPAN",{class:!0});var re=E(r);s=G(re,"22.11.2003"),re.forEach(v),ae.forEach(v),D.forEach(v),i=y(C,"DIV",{class:!0});var ie=E(i);f=y(ie,"BUTTON",{class:!0});var ce=E(f);_=y(ce,"SPAN",{class:!0}),E(_).forEach(v),ce.forEach(v),ie.forEach(v),d=y(C,"UL",{class:!0,style:!0});var ue=E(d);for(let Z=0;Z<k.length;Z+=1)k[Z].l(ue);ue.forEach(v),u=y(C,"BUTTON",{class:!0});var fe=E(u);c=y(fe,"SPAN",{class:!0}),E(c).forEach(v),fe.forEach(v),C.forEach(v),this.h()},h(){g(l,"class","svelte-1r4g98n"),g(r,"class","svelte-1r4g98n"),g(a,"class","task__info svelte-1r4g98n"),g(e,"class","task__main svelte-1r4g98n"),g(_,"class","svg-image-del svelte-1r4g98n"),g(f,"class","task__menu-btn task__menu-btn_del svelte-1r4g98n"),g(i,"class","task__circle task__menu svelte-1r4g98n"),g(d,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1r4g98n"),g(d,"style",m=`background-color: ${o[2]}`),g(c,"class","svelte-1r4g98n"),g(u,"class","task__info-open svelte-1r4g98n"),g(t,"class",h="task "+o[0]+" svelte-1r4g98n"),S(t,"isDisabled",o[3]),S(t,"isOpen",o[4])},m(T,C){O(T,t,C),w(t,e),w(e,l),w(l,n),w(e,a),w(a,r),w(r,s),o[12](a),w(t,i),w(i,f),w(f,_),w(t,d);for(let D=0;D<k.length;D+=1)k[D].m(d,null);w(t,u),w(u,c),p||(N=[A(e,"click",o[7]),A(f,"click",P(o[8])),A(u,"click",P(o[10]))],p=!0)},p(T,[C]){C&2&&de(n,T[1]),C&580&&(I=T[6].filter(T[13]),k=X(k,C,ne,1,T,I,F,d,Pe,Te,null,Ee)),C&4&&m!==(m=`background-color: ${T[2]}`)&&g(d,"style",m),C&1&&h!==(h="task "+T[0]+" svelte-1r4g98n")&&g(t,"class",h),C&9&&S(t,"isDisabled",T[3]),C&17&&S(t,"isOpen",T[4])},i:B,o:B,d(T){T&&v(t),o[12](null);for(let C=0;C<k.length;C+=1)k[C].d();p=!1,he(N)}}}function Xe(o,t,e){let l,n;Y(o,L,p=>e(14,l=p)),Y(o,ye,p=>e(6,n=p));let{class:a=""}=t,{text:r=""}=t,{color:s="#0029FF"}=t,{disabled:i=!1}=t,{id:f=null}=t,_=!1,d;const k=()=>{let p=l.map(N=>(f===N.id&&(N.done=!N.done),N));L.set(p)},F=()=>{let p=l.filter(N=>N.id!=f);L.set(p),console.log("del",f)},m=p=>{let N=l.map(I=>(f===I.id&&(I.color=p),I));L.set(N)},u=()=>{e(4,_=!_),console.log(d.style)};function c(p){ge[p?"unshift":"push"](()=>{d=p,e(5,d)})}const h=p=>p.color!=s;return o.$$set=p=>{"class"in p&&e(0,a=p.class),"text"in p&&e(1,r=p.text),"color"in p&&e(2,s=p.color),"disabled"in p&&e(3,i=p.disabled),"id"in p&&e(11,f=p.id)},[a,r,s,i,_,d,n,k,F,m,u,f,c,h]}class Ce extends q{constructor(t){super();M(this,t,Xe,We,R,{class:0,text:1,color:2,disabled:3,id:11})}}function we(o,t,e){const l=o.slice();return l[4]=t[e],l}function Fe(o,t,e){const l=o.slice();return l[4]=t[e],l}function Ie(o,t){let e,l,n,a,r,s=B,i;return l=new Ce({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:o,first:null,c(){e=b("li"),j(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=E(e);K(l.$$.fragment,_),_.forEach(v),this.h()},h(){g(e,"class","task-section__item"),this.first=e},m(f,_){O(f,e,_),Q(l,e,null),i=!0},p(f,_){t=f;const d={};_&2&&(d.text=t[4].text),_&2&&(d.color=t[4].color?t[4].color:null),_&2&&(d.id=t[4].id),l.$set(d)},r(){r=e.getBoundingClientRect()},f(){H(e),s(),J(e,r)},a(){s(),s=$(e,r,le,{duration:300})},i(f){i||(U(l.$$.fragment,f),x(()=>{a&&a.end(1),n=me(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){V(l.$$.fragment,f),n&&n.invalidate(),a=ve(e,t[2],{key:t[4].id}),i=!1},d(f){f&&v(e),W(l),f&&a&&a.end()}}}function Ne(o,t){let e,l,n,a,r,s=B,i;return l=new Ce({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:o,first:null,c(){e=b("li"),j(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=E(e);K(l.$$.fragment,_),_.forEach(v),this.h()},h(){g(e,"class","task-section__item"),this.first=e},m(f,_){O(f,e,_),Q(l,e,null),i=!0},p(f,_){t=f;const d={};_&2&&(d.text=t[4].text),_&2&&(d.color=t[4].color?t[4].color:null),_&2&&(d.id=t[4].id),l.$set(d)},r(){r=e.getBoundingClientRect()},f(){H(e),s(),J(e,r)},a(){s(),s=$(e,r,le,{duration:300})},i(f){i||(U(l.$$.fragment,f),x(()=>{a&&a.end(1),n=me(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){V(l.$$.fragment,f),n&&n.invalidate(),a=ve(e,t[2],{key:t[4].id}),i=!1},d(f){f&&v(e),W(l),f&&a&&a.end()}}}function Ye(o){let t,e,l,n=[],a=new Map,r,s=[],i=new Map,f,_,d=o[1].filter(Oe);const k=u=>u[4].id;for(let u=0;u<d.length;u+=1){let c=Fe(o,d,u),h=k(c);a.set(h,n[u]=Ie(h,c))}let F=o[1].filter(De);const m=u=>u[4].id;for(let u=0;u<F.length;u+=1){let c=we(o,F,u),h=m(c);i.set(h,s[u]=Ne(h,c))}return{c(){t=b("section"),e=b("div"),l=b("ul");for(let u=0;u<n.length;u+=1)n[u].c();r=b("ul");for(let u=0;u<s.length;u+=1)s[u].c();this.h()},l(u){t=y(u,"SECTION",{class:!0});var c=E(t);e=y(c,"DIV",{class:!0});var h=E(e);l=y(h,"UL",{class:!0});var p=E(l);for(let I=0;I<n.length;I+=1)n[I].l(p);p.forEach(v),r=y(h,"UL",{class:!0});var N=E(r);for(let I=0;I<s.length;I+=1)s[I].l(N);N.forEach(v),h.forEach(v),c.forEach(v),this.h()},h(){g(l,"class","task-section__col"),g(r,"class","task-section__col"),g(e,"class","container task-section__grid svelte-1rib3cm"),g(t,"class",f="task-section "+o[0]+" svelte-1rib3cm")},m(u,c){O(u,t,c),w(t,e),w(e,l);for(let h=0;h<n.length;h+=1)n[h].m(l,null);w(e,r);for(let h=0;h<s.length;h+=1)s[h].m(r,null);_=!0},p(u,[c]){if(c&2){d=u[1].filter(Oe),ee();for(let h=0;h<n.length;h+=1)n[h].r();n=X(n,c,k,1,u,d,a,l,se,Ie,null,Fe);for(let h=0;h<n.length;h+=1)n[h].a();te()}if(c&2){F=u[1].filter(De),ee();for(let h=0;h<s.length;h+=1)s[h].r();s=X(s,c,m,1,u,F,i,r,se,Ne,null,we);for(let h=0;h<s.length;h+=1)s[h].a();te()}(!_||c&1&&f!==(f="task-section "+u[0]+" svelte-1rib3cm"))&&g(t,"class",f)},i(u){if(!_){for(let c=0;c<d.length;c+=1)U(n[c]);for(let c=0;c<F.length;c+=1)U(s[c]);_=!0}},o(u){for(let c=0;c<n.length;c+=1)V(n[c]);for(let c=0;c<s.length;c+=1)V(s[c]);_=!1},d(u){u&&v(t);for(let c=0;c<n.length;c+=1)n[c].d();for(let c=0;c<s.length;c+=1)s[c].d()}}}const Oe=o=>!o.done,De=o=>o.done;function Ze(o,t,e){let l;Y(o,L,s=>e(1,l=s));let{class:n=""}=t;const[a,r]=qe({duration:s=>Math.sqrt(s*200),fallback(s,i){const f=getComputedStyle(s),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Me,css:d=>`
					transform: ${_} scale(${d});
					opacity: ${d}
				`}}});return o.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,a,r]}class ze extends q{constructor(t){super();M(this,t,Ze,Ye,R,{class:0})}}function Ae(o){let t,e,l,n=o[2].text&&Se(o);return{c(){t=b("button"),n&&n.c(),this.h()},l(a){t=y(a,"BUTTON",{class:!0});var r=E(t);n&&n.l(r),r.forEach(v),this.h()},h(){g(t,"class","btn svelte-12pihab")},m(a,r){O(a,t,r),n&&n.m(t,null),e||(l=A(t,"click",P(o[6])),e=!0)},p(a,r){a[2].text?n?n.p(a,r):(n=Se(a),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(a){a&&v(t),n&&n.d(),e=!1,l()}}}function Se(o){let t=o[2].text+"",e;return{c(){e=z(t)},l(l){e=G(l,t)},m(l,n){O(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&de(e,t)},d(l){l&&v(e)}}}function Ge(o){let t,e,l,n,a,r=o[2]&&Ae(o);return{c(){t=b("div"),e=b("input"),r&&r.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var i=E(t);e=y(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(v),this.h()},h(){g(e,"placeholder",o[1]),g(e,"class","svelte-12pihab"),g(t,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),S(t,"isError",o[5])},m(s,i){O(s,t,i),w(t,e),ke(e,o[4]),r&&r.m(t,null),o[11](t),n||(a=[A(e,"input",o[9]),A(e,"input",o[7]),A(e,"keydown",o[10])],n=!0)},p(s,[i]){i&2&&g(e,"placeholder",s[1]),i&16&&e.value!==s[4]&&ke(e,s[4]),s[2]?r?r.p(s,i):(r=Ae(s),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-12pihab")&&g(t,"class",l),i&37&&S(t,"isError",s[5])},i:B,o:B,d(s){s&&v(t),r&&r.d(),o[11](null),n=!1,he(a)}}}function He(o,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:a=null}=t,r,s,i=!1;const f=Re(),_=()=>{s?(f("submit",{value:s}),e(4,s="")):e(5,i=!0)},d=()=>{e(5,i=!1)},k=c=>{let h=c.key;h==="Control"&&f("color"),h==="Enter"&&_()};function F(){s=this.value,e(4,s)}const m=c=>k(c);function u(c){ge[c?"unshift":"push"](()=>{r=c,e(3,r)})}return o.$$set=c=>{"class"in c&&e(0,l=c.class),"placeholder"in c&&e(1,n=c.placeholder),"btn"in c&&e(2,a=c.btn)},[l,n,a,r,s,i,_,d,k,F,m,u]}class Je extends q{constructor(t){super();M(this,t,He,Ge,R,{class:0,placeholder:1,btn:2})}}function Ue(o,t,e){const l=o.slice();return l[9]=t[e],l[11]=e,l}function Ve(o,t){let e,l,n,a,r=B,s,i,f;return{key:o,first:null,c(){e=b("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),E(e).forEach(v),this.h()},h(){g(e,"class","add-todo__color svelte-y5nf6k"),g(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,d){O(_,e,d),s=!0,i||(f=A(e,"click",P(function(){_e(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),i=!0)},p(_,d){t=_,(!s||d&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&g(e,"style",l)},r(){a=e.getBoundingClientRect()},f(){H(e),r(),J(e,a)},a(){r(),r=$(e,a,le,{})},i(_){s||(x(()=>{n||(n=pe(e,be,{},!0)),n.run(1)}),s=!0)},o(_){n||(n=pe(e,be,{},!1)),n.run(0),s=!1},d(_){_&&v(e),_&&n&&n.end(),i=!1,f()}}}function $e(o){let t,e,l,n,a=[],r=new Map,s,i,f,_,d,k=o[3].filter(o[7]);const F=m=>m[9].id;for(let m=0;m<k.length;m+=1){let u=Ue(o,k,m),c=F(u);r.set(c,a[m]=Ve(c,u))}return s=new Je({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",o[8]),s.$on("submit",o[4]),{c(){t=b("div"),e=b("div"),l=b("span");for(let m=0;m<a.length;m+=1)a[m].c();j(s.$$.fragment),this.h()},l(m){t=y(m,"DIV",{class:!0});var u=E(t);e=y(u,"DIV",{class:!0});var c=E(e);l=y(c,"SPAN",{class:!0,style:!0}),E(l).forEach(v);for(let h=0;h<a.length;h+=1)a[h].l(c);c.forEach(v),K(s.$$.fragment,u),u.forEach(v),this.h()},h(){g(l,"class","add-todo__color add-todo__color_main svelte-y5nf6k"),g(l,"style",n=`color: ${o[1]}`),g(e,"class","add-todo__color-list svelte-y5nf6k"),S(e,"isOpen",o[2]),g(t,"class",i="add-todo "+o[0]+" svelte-y5nf6k")},m(m,u){O(m,t,u),w(t,e),w(e,l);for(let c=0;c<a.length;c+=1)a[c].m(e,null);Q(s,t,null),f=!0,_||(d=A(l,"click",P(o[6])),_=!0)},p(m,[u]){if((!f||u&2&&n!==(n=`color: ${m[1]}`))&&g(l,"style",n),u&42){k=m[3].filter(m[7]),ee();for(let c=0;c<a.length;c+=1)a[c].r();a=X(a,u,F,1,m,k,r,e,se,Ve,null,Ue);for(let c=0;c<a.length;c+=1)a[c].a();te()}u&4&&S(e,"isOpen",m[2]),(!f||u&1&&i!==(i="add-todo "+m[0]+" svelte-y5nf6k"))&&g(t,"class",i)},i(m){if(!f){for(let u=0;u<k.length;u+=1)U(a[u]);U(s.$$.fragment,m),f=!0}},o(m){for(let u=0;u<a.length;u+=1)V(a[u]);V(s.$$.fragment,m),f=!1},d(m){m&&v(t);for(let u=0;u<a.length;u+=1)a[u].d();W(s),_=!1,d()}}}function xe(o,t,e){let l;Y(o,ye,k=>e(3,l=k));let{class:n=""}=t,a="#0029FF",r=!1;const s=k=>{let F={id:Date.now(),text:k.detail.value,color:a,done:!1};L.update(m=>m=[F,...m])},i=k=>k&&e(1,a=k),f=()=>e(2,r=!r),_=k=>k.color!=a,d=()=>e(2,r=!r);return o.$$set=k=>{"class"in k&&e(0,n=k.class)},[n,a,r,l,s,i,f,_,d]}class et extends q{constructor(t){super();M(this,t,xe,$e,R,{class:0})}}function tt(o){let t,e,l,n,a,r,s;return n=new et({}),r=new ze({props:{class:"mt-50"}}),{c(){t=je(),e=b("section"),l=b("div"),j(n.$$.fragment),j(r.$$.fragment),this.h()},l(i){Ke('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=Qe(i),e=y(i,"SECTION",{class:!0});var _=E(e);l=y(_,"DIV",{class:!0});var d=E(l);K(n.$$.fragment,d),d.forEach(v),_.forEach(v),K(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",g(l,"class","container"),g(e,"class",a=""+(o[0]+" mt-50 svelte-hols8d"))},m(i,f){O(i,t,f),O(i,e,f),w(e,l),Q(n,l,null),Q(r,i,f),s=!0},p(i,[f]){(!s||f&1&&a!==(a=""+(i[0]+" mt-50 svelte-hols8d")))&&g(e,"class",a)},i(i){s||(U(n.$$.fragment,i),U(r.$$.fragment,i),s=!0)},o(i){V(n.$$.fragment,i),V(r.$$.fragment,i),s=!1},d(i){i&&v(t),i&&v(e),W(n),W(r,i)}}}function lt(o,t,e){let{class:l=""}=t;return o.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class nt extends q{constructor(t){super();M(this,t,lt,tt,R,{class:0})}}export{nt as default};
