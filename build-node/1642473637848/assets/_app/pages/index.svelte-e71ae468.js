import{K as We,C as Ze,S as J,i as $,L as Ge,e as E,c as T,a as y,d as g,b as k,f as V,D as F,M as A,N as H,O as qe,t as we,g as Ce,P as I,Q as re,h as Ie,R as ce,T as Je,E as z,U as Fe,V as ue,u as $e,W as ke,s as fe,v as x,w as ee,x as te,X as me,Y as ge,Z as ve,p as B,_ as pe,$ as Oe,n as M,a0 as De,A as le,m as be,o as Ee,a1 as xe,a2 as Te,a3 as ye,a4 as et,a5 as tt,a6 as Se,a7 as Ae,j as lt,a8 as st,l as nt}from"../chunks/vendor-6ec25659.js";const j=Ze([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ne=We(j,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=l.filter(s=>s.color).map(s=>s.color).concat(e),i=a.filter((s,c)=>a.indexOf(s)===c).map((s,c)=>({id:c,color:s}));t(i)}),at=(l,t)=>{if(t==="dot"){let e=l.getDate(),n=l.getMonth();return`${e<10?0:""}${e+1}.${n<10?0:""}${n+1}.${l.getFullYear()}`}},_e=(l,t)=>getComputedStyle(l)[t];function Le(l,t,e){const n=l.slice();return n[37]=t[e],n}function Ve(l,t){let e,n,a,r,i;return{key:l,first:null,c(){e=E("li"),n=E("button"),this.h()},l(s){e=T(s,"LI",{class:!0});var c=y(e);n=T(c,"BUTTON",{class:!0,style:!0}),y(n).forEach(g),c.forEach(g),this.h()},h(){k(n,"class","task__color-btn svelte-50kkq7"),k(n,"style",a=`background-color: ${t[37].color}`),k(e,"class","task__color-item svelte-50kkq7"),this.first=e},m(s,c){V(s,e,c),F(e,n),r||(i=A(n,"click",H(function(){qe(t[17](t[37].color))&&t[17](t[37].color).apply(this,arguments)})),r=!0)},p(s,c){t=s,c[0]&8196&&a!==(a=`background-color: ${t[37].color}`)&&k(n,"style",a)},d(s){s&&g(e),r=!1,i()}}}function ot(l){let t,e,n,a,r,i=l[5].split(`
`).join("<br/>")+"",s,c,f,_,v,q,C,h,o,u,m,w,S=[],N=new Map,K,P,U,X,Y,R,Q=l[13].filter(l[29]);const W=p=>p[37].id;for(let p=0;p<Q.length;p+=1){let b=Le(l,Q,p),L=W(b);N.set(L,S[p]=Ve(L,b))}return{c(){t=E("article"),e=E("div"),n=E("div"),a=E("div"),r=E("p"),s=E("textarea"),f=E("div"),_=E("div"),v=E("span"),q=we(l[4]),C=E("div"),h=E("button"),o=E("span"),u=E("button"),m=E("span"),w=E("ul");for(let p=0;p<S.length;p+=1)S[p].c();P=E("button"),U=E("span"),this.h()},l(p){t=T(p,"ARTICLE",{class:!0});var b=y(t);e=T(b,"DIV",{class:!0});var L=y(e);n=T(L,"DIV",{class:!0});var se=y(n);a=T(se,"DIV",{class:!0});var Z=y(a);r=T(Z,"P",{class:!0});var de=y(r);de.forEach(g),s=T(Z,"TEXTAREA",{class:!0}),y(s).forEach(g),Z.forEach(g),se.forEach(g),f=T(L,"DIV",{class:!0});var ne=y(f);_=T(ne,"DIV",{class:!0});var ae=y(_);v=T(ae,"SPAN",{class:!0});var oe=y(v);q=Ce(oe,l[4]),oe.forEach(g),ae.forEach(g),ne.forEach(g),L.forEach(g),C=T(b,"DIV",{class:!0});var G=y(C);h=T(G,"BUTTON",{class:!0});var ie=y(h);o=T(ie,"SPAN",{class:!0}),y(o).forEach(g),ie.forEach(g),u=T(G,"BUTTON",{class:!0});var d=y(u);m=T(d,"SPAN",{class:!0}),y(m).forEach(g),d.forEach(g),G.forEach(g),w=T(b,"UL",{class:!0,style:!0});var O=y(w);for(let he=0;he<S.length;he+=1)S[he].l(O);O.forEach(g),P=T(b,"BUTTON",{class:!0});var D=y(P);U=T(D,"SPAN",{class:!0}),y(U).forEach(g),D.forEach(g),b.forEach(g),this.h()},h(){k(r,"class","task__main-content addTransition svelte-50kkq7"),I(r,"isEdit",l[8]),k(s,"class","task__main-content svelte-50kkq7"),s.disabled=c=!l[8],I(s,"addTransition",l[11]),k(a,"class","task__main-content-wrapper svelte-50kkq7"),k(n,"class","task__main-container svelte-50kkq7"),k(v,"class","svelte-50kkq7"),k(_,"class","task__info-content svelte-50kkq7"),k(f,"class","task__info svelte-50kkq7"),k(e,"class","task__main svelte-50kkq7"),I(e,"isEdit",l[8]),k(o,"class","svg-image-del svelte-50kkq7"),k(h,"class","task__menu-btn task__menu-btn_del svelte-50kkq7"),k(m,"class","svg-image-pen svelte-50kkq7"),k(u,"class","task__menu-btn task__menu-btn_edit svelte-50kkq7"),I(u,"isSelect",l[8]),I(u,"isChanged",l[9]),I(u,"isSave",l[10]),k(C,"class","task__circle task__menu svelte-50kkq7"),I(C,"isOpen",l[8]),k(w,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-50kkq7"),k(w,"style",K=`background-color: ${l[2]}`),I(w,"isOpen",l[8]),k(U,"class","svelte-50kkq7"),k(P,"class","task__info-open svelte-50kkq7"),I(P,"isHidden",l[8]),k(t,"class",X="task "+l[1]+" svelte-50kkq7"),I(t,"isDisabled",l[3]),I(t,"isInfoOpen",l[6]),I(t,"isEdit",l[8])},m(p,b){V(p,t,b),F(t,e),F(e,n),F(n,a),F(a,r),r.innerHTML=i,F(a,s),l[23](s),re(s,l[0]),F(e,f),F(f,_),F(_,v),F(v,q),l[27](f),F(t,C),F(C,h),F(h,o),F(C,u),F(u,m),F(t,w);for(let L=0;L<S.length;L+=1)S[L].m(w,null);F(t,P),F(P,U),Y||(R=[A(s,"input",l[24]),A(s,"input",l[25]),A(s,"keydown",l[26]),A(e,"click",l[14]),A(h,"click",H(l[15])),A(u,"click",H(l[28])),A(P,"click",H(l[30]))],Y=!0)},p(p,b){b[0]&32&&i!==(i=p[5].split(`
`).join("<br/>")+"")&&(r.innerHTML=i),b[0]&256&&I(r,"isEdit",p[8]),b[0]&256&&c!==(c=!p[8])&&(s.disabled=c),b[0]&1&&re(s,p[0]),b[0]&2048&&I(s,"addTransition",p[11]),b[0]&16&&Ie(q,p[4]),b[0]&256&&I(e,"isEdit",p[8]),b[0]&256&&I(u,"isSelect",p[8]),b[0]&512&&I(u,"isChanged",p[9]),b[0]&1024&&I(u,"isSave",p[10]),b[0]&256&&I(C,"isOpen",p[8]),b[0]&139268&&(Q=p[13].filter(p[29]),S=ce(S,b,W,1,p,Q,N,w,Je,Ve,null,Le)),b[0]&4&&K!==(K=`background-color: ${p[2]}`)&&k(w,"style",K),b[0]&256&&I(w,"isOpen",p[8]),b[0]&256&&I(P,"isHidden",p[8]),b[0]&2&&X!==(X="task "+p[1]+" svelte-50kkq7")&&k(t,"class",X),b[0]&10&&I(t,"isDisabled",p[3]),b[0]&66&&I(t,"isInfoOpen",p[6]),b[0]&258&&I(t,"isEdit",p[8])},i:z,o:z,d(p){p&&g(t),l[23](null),l[27](null);for(let b=0;b<S.length;b+=1)S[b].d();Y=!1,Fe(R)}}}let Pe=new Set;function it(){Pe.forEach(l=>{l.edit(!1)})}function rt(l,t,e){let n,a;ue(l,j,d=>e(33,n=d)),ue(l,Ne,d=>e(13,a=d));let{class:r=""}=t,{text:i=""}=t,{color:s="#0029FF"}=t,{disabled:c=!1}=t,{id:f=null}=t,{date:_=""}=t,v=i,q=!1,C,h=!1,o=!1,u=!1,m=!1,w,S,N;const K=()=>{if(h===!1){let d=n.map(O=>(f===O.id&&(O.done=!O.done),O));j.set(d)}},P=()=>{let d=n.filter(O=>O.id!=f);j.set(d)};function U(d){e(8,h=d!=null?d:!h),h===!1&&R()}const X=d=>{let O=n.map(D=>(f===D.id&&(D.color=d),D));j.set(O)};function Y(d){e(6,q=d!=null?d:!q);let O=0;C.childNodes.forEach(D=>O+=D.clientHeight),C.style.setProperty("--taskInfoHeight",`${q?O:0}px`)}function R(){o&&Q(i).then(()=>{e(9,o=!1),clearTimeout(S),e(10,u=!0),S=setTimeout(()=>{e(10,u=!1)},500)})}function Q(d){if(typeof d=="string")return new Promise(O=>{L(),j.set(n.map(D=>(D.id===f&&(D.text=d),D))),O()});throw new Error("The value is not equal to the string")}function W(d){let O=d.ctrlKey?!1:d.metaKey,D=d.keyCode;if(O&&D===83)return d.preventDefault(),R(),!1;clearTimeout(N),N=setTimeout(()=>R(),5e3)}function p(d=i){return e(9,o=d!==v)}function b(){e(12,w.rows=1,w);const d=parseFloat(_e(w,"padding-top"))+parseFloat(_e(w,"padding-bottom")),O=w.scrollHeight-d,D=parseFloat(_e(w,"line-height"));D==="normal"&&(D=parseFloat(_e(w,"font-size"))),e(12,w.rows=O/D,w)}function L(){e(5,v=i)}$e(()=>{b(),e(11,m=!0)}),Pe.add({save(){R()},edit(d){U(d)}});function se(d){ke[d?"unshift":"push"](()=>{w=d,e(12,w)})}function Z(){i=this.value,e(0,i)}const de=()=>{p(),b()},ne=d=>{W(d),b()};function ae(d){ke[d?"unshift":"push"](()=>{C=d,e(7,C)})}const oe=()=>{h===!1&&it(),U()},G=d=>d.color!=s,ie=()=>Y();return l.$$set=d=>{"class"in d&&e(1,r=d.class),"text"in d&&e(0,i=d.text),"color"in d&&e(2,s=d.color),"disabled"in d&&e(3,c=d.disabled),"id"in d&&e(22,f=d.id),"date"in d&&e(4,_=d.date)},[i,r,s,c,_,v,q,C,h,o,u,m,w,a,K,P,U,X,Y,W,p,b,f,se,Z,de,ne,ae,oe,G,ie]}class Ue extends J{constructor(t){super();$(this,t,rt,ot,Ge,{class:1,text:0,color:2,disabled:3,id:22,date:4},null,[-1,-1])}}function Be(l,t,e){const n=l.slice();return n[4]=t[e],n}function Me(l,t,e){const n=l.slice();return n[4]=t[e],n}function je(l,t){let e,n,a,r,i,s=z,c;return n=new Ue({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=E("li"),x(n.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=y(e);ee(n.$$.fragment,_),_.forEach(g),this.h()},h(){k(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){V(f,e,_),te(n,e,null),c=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),n.$set(v)},r(){i=e.getBoundingClientRect()},f(){me(e),s(),ge(e,i)},a(){s(),s=ve(e,i,Te,{duration:300})},i(f){c||(B(n.$$.fragment,f),pe(()=>{r&&r.end(1),a=Oe(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){M(n.$$.fragment,f),a&&a.invalidate(),r=De(e,t[2],{key:t[4].id}),c=!1},d(f){f&&g(e),le(n),f&&r&&r.end()}}}function Re(l,t){let e,n,a,r,i,s=z,c;return n=new Ue({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=E("li"),x(n.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=y(e);ee(n.$$.fragment,_),_.forEach(g),this.h()},h(){k(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){V(f,e,_),te(n,e,null),c=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),n.$set(v)},r(){i=e.getBoundingClientRect()},f(){me(e),s(),ge(e,i)},a(){s(),s=ve(e,i,Te,{duration:300})},i(f){c||(B(n.$$.fragment,f),pe(()=>{r&&r.end(1),a=Oe(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){M(n.$$.fragment,f),a&&a.invalidate(),r=De(e,t[2],{key:t[4].id}),c=!1},d(f){f&&g(e),le(n),f&&r&&r.end()}}}function ct(l){let t,e,n,a=[],r=new Map,i,s=[],c=new Map,f,_,v=l[1].filter(He);const q=o=>o[4].id;for(let o=0;o<v.length;o+=1){let u=Me(l,v,o),m=q(u);r.set(m,a[o]=je(m,u))}let C=l[1].filter(ze);const h=o=>o[4].id;for(let o=0;o<C.length;o+=1){let u=Be(l,C,o),m=h(u);c.set(m,s[o]=Re(m,u))}return{c(){t=E("section"),e=E("div"),n=E("ul");for(let o=0;o<a.length;o+=1)a[o].c();i=E("ul");for(let o=0;o<s.length;o+=1)s[o].c();this.h()},l(o){t=T(o,"SECTION",{class:!0});var u=y(t);e=T(u,"DIV",{class:!0});var m=y(e);n=T(m,"UL",{class:!0});var w=y(n);for(let N=0;N<a.length;N+=1)a[N].l(w);w.forEach(g),i=T(m,"UL",{class:!0});var S=y(i);for(let N=0;N<s.length;N+=1)s[N].l(S);S.forEach(g),m.forEach(g),u.forEach(g),this.h()},h(){k(n,"class","task-section__col"),k(i,"class","task-section__col"),k(e,"class","container task-section__grid svelte-te6j4q"),k(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(o,u){V(o,t,u),F(t,e),F(e,n);for(let m=0;m<a.length;m+=1)a[m].m(n,null);F(e,i);for(let m=0;m<s.length;m+=1)s[m].m(i,null);_=!0},p(o,[u]){if(u&2){v=o[1].filter(He),be();for(let m=0;m<a.length;m+=1)a[m].r();a=ce(a,u,q,1,o,v,r,n,ye,je,null,Me);for(let m=0;m<a.length;m+=1)a[m].a();Ee()}if(u&2){C=o[1].filter(ze),be();for(let m=0;m<s.length;m+=1)s[m].r();s=ce(s,u,h,1,o,C,c,i,ye,Re,null,Be);for(let m=0;m<s.length;m+=1)s[m].a();Ee()}(!_||u&1&&f!==(f="task-section "+o[0]+" svelte-te6j4q"))&&k(t,"class",f)},i(o){if(!_){for(let u=0;u<v.length;u+=1)B(a[u]);for(let u=0;u<C.length;u+=1)B(s[u]);_=!0}},o(o){for(let u=0;u<a.length;u+=1)M(a[u]);for(let u=0;u<s.length;u+=1)M(s[u]);_=!1},d(o){o&&g(t);for(let u=0;u<a.length;u+=1)a[u].d();for(let u=0;u<s.length;u+=1)s[u].d()}}}const He=l=>!l.done,ze=l=>l.done;function ut(l,t,e){let n;ue(l,j,s=>e(1,n=s));let{class:a=""}=t;const[r,i]=xe({duration:s=>Math.sqrt(s*200),fallback(s,c){const f=getComputedStyle(s),_=f.transform==="none"?"":f.transform;return{duration:600,easing:et,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return l.$$set=s=>{"class"in s&&e(0,a=s.class)},[a,n,r,i]}class ft extends J{constructor(t){super();$(this,t,ut,ct,fe,{class:0})}}function Ke(l){let t,e,n,a=l[2].text&&Xe(l);return{c(){t=E("button"),a&&a.c(),this.h()},l(r){t=T(r,"BUTTON",{class:!0});var i=y(t);a&&a.l(i),i.forEach(g),this.h()},h(){k(t,"class","btn svelte-1yy2xse")},m(r,i){V(r,t,i),a&&a.m(t,null),e||(n=A(t,"click",H(l[6])),e=!0)},p(r,i){r[2].text?a?a.p(r,i):(a=Xe(r),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(r){r&&g(t),a&&a.d(),e=!1,n()}}}function Xe(l){let t=l[2].text+"",e;return{c(){e=we(t)},l(n){e=Ce(n,t)},m(n,a){V(n,e,a)},p(n,a){a&4&&t!==(t=n[2].text+"")&&Ie(e,t)},d(n){n&&g(e)}}}function _t(l){let t,e,n,a,r,i=l[2]&&Ke(l);return{c(){t=E("div"),e=E("input"),i&&i.c(),this.h()},l(s){t=T(s,"DIV",{class:!0});var c=y(t);e=T(c,"INPUT",{placeholder:!0,class:!0}),i&&i.l(c),c.forEach(g),this.h()},h(){k(e,"placeholder",l[1]),k(e,"class","svelte-1yy2xse"),k(t,"class",n="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),I(t,"isError",l[5])},m(s,c){V(s,t,c),F(t,e),re(e,l[4]),i&&i.m(t,null),l[10](t),a||(r=[A(e,"input",l[9]),A(e,"input",l[7]),A(e,"keydown",l[8])],a=!0)},p(s,[c]){c&2&&k(e,"placeholder",s[1]),c&16&&e.value!==s[4]&&re(e,s[4]),s[2]?i?i.p(s,c):(i=Ke(s),i.c(),i.m(t,null)):i&&(i.d(1),i=null),c&5&&n!==(n="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse")&&k(t,"class",n),c&37&&I(t,"isError",s[5])},i:z,o:z,d(s){s&&g(t),i&&i.d(),l[10](null),a=!1,Fe(r)}}}function dt(l,t,e){let{class:n=""}=t,{placeholder:a="Placeholer"}=t,{btn:r=null}=t,i,s,c=!1;const f=tt(),_=()=>{s?(f("submit",{value:s}),e(4,s="")):e(5,c=!0)},v=()=>{e(5,c=!1)},q=o=>{let u=o.key,m=o.ctrlKey,w=o.shiftKey;o.keyCode,m&&w&&f("color"),u==="Enter"&&_()};function C(){s=this.value,e(4,s)}function h(o){ke[o?"unshift":"push"](()=>{i=o,e(3,i)})}return l.$$set=o=>{"class"in o&&e(0,n=o.class),"placeholder"in o&&e(1,a=o.placeholder),"btn"in o&&e(2,r=o.btn)},[n,a,r,i,s,c,_,v,q,C,h]}class ht extends J{constructor(t){super();$(this,t,dt,_t,fe,{class:0,placeholder:1,btn:2})}}function Ye(l,t,e){const n=l.slice();return n[9]=t[e],n[11]=e,n}function Qe(l,t){let e,n,a,r,i=z,s,c,f;return{key:l,first:null,c(){e=E("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),y(e).forEach(g),this.h()},h(){k(e,"class","add-todo__color svelte-1hafqlz"),k(e,"style",n=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){V(_,e,v),s=!0,c||(f=A(e,"click",H(function(){qe(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(_,v){t=_,(!s||v&10&&n!==(n=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&k(e,"style",n)},r(){r=e.getBoundingClientRect()},f(){me(e),i(),ge(e,r)},a(){i(),i=ve(e,r,Te,{})},i(_){s||(pe(()=>{a||(a=Se(e,Ae,{},!0)),a.run(1)}),s=!0)},o(_){a||(a=Se(e,Ae,{},!1)),a.run(0),s=!1},d(_){_&&g(e),_&&a&&a.end(),c=!1,f()}}}function kt(l){let t,e,n,a,r=[],i=new Map,s,c,f,_,v,q=l[3].filter(l[7]);const C=h=>h[9].id;for(let h=0;h<q.length;h+=1){let o=Ye(l,q,h),u=C(o);i.set(u,r[h]=Qe(u,o))}return s=new ht({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",l[8]),s.$on("submit",l[4]),{c(){t=E("div"),e=E("div"),n=E("span");for(let h=0;h<r.length;h+=1)r[h].c();x(s.$$.fragment),this.h()},l(h){t=T(h,"DIV",{class:!0});var o=y(t);e=T(o,"DIV",{class:!0});var u=y(e);n=T(u,"SPAN",{class:!0,style:!0}),y(n).forEach(g);for(let m=0;m<r.length;m+=1)r[m].l(u);u.forEach(g),ee(s.$$.fragment,o),o.forEach(g),this.h()},h(){k(n,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),k(n,"style",a=`color: ${l[1]}`),k(e,"class","add-todo__color-list svelte-1hafqlz"),I(e,"isOpen",l[2]),k(t,"class",c="add-todo "+l[0]+" svelte-1hafqlz")},m(h,o){V(h,t,o),F(t,e),F(e,n);for(let u=0;u<r.length;u+=1)r[u].m(e,null);te(s,t,null),f=!0,_||(v=A(n,"click",H(l[6])),_=!0)},p(h,[o]){if((!f||o&2&&a!==(a=`color: ${h[1]}`))&&k(n,"style",a),o&42){q=h[3].filter(h[7]),be();for(let u=0;u<r.length;u+=1)r[u].r();r=ce(r,o,C,1,h,q,i,e,ye,Qe,null,Ye);for(let u=0;u<r.length;u+=1)r[u].a();Ee()}o&4&&I(e,"isOpen",h[2]),(!f||o&1&&c!==(c="add-todo "+h[0]+" svelte-1hafqlz"))&&k(t,"class",c)},i(h){if(!f){for(let o=0;o<q.length;o+=1)B(r[o]);B(s.$$.fragment,h),f=!0}},o(h){for(let o=0;o<r.length;o+=1)M(r[o]);M(s.$$.fragment,h),f=!1},d(h){h&&g(t);for(let o=0;o<r.length;o+=1)r[o].d();le(s),_=!1,v()}}}function mt(l,t,e){let n;ue(l,Ne,q=>e(3,n=q));let{class:a=""}=t,r="#0029FF",i=!1;const s=q=>{let C={id:Date.now(),text:q.detail.value,color:r,done:!1,date:at(new Date,"dot")};j.update(h=>h=[C,...h])},c=q=>q&&e(1,r=q),f=()=>e(2,i=!i),_=q=>q.color!=r,v=()=>e(2,i=!i);return l.$$set=q=>{"class"in q&&e(0,a=q.class)},[a,r,i,n,s,c,f,_,v]}class gt extends J{constructor(t){super();$(this,t,mt,kt,fe,{class:0})}}function vt(l){let t,e,n,a,r,i,s;return a=new gt({}),i=new ft({props:{class:"mt-50"}}),{c(){t=lt(),e=E("section"),n=E("div"),x(a.$$.fragment),x(i.$$.fragment),this.h()},l(c){st('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=nt(c),e=T(c,"SECTION",{class:!0});var _=y(e);n=T(_,"DIV",{class:!0});var v=y(n);ee(a.$$.fragment,v),v.forEach(g),_.forEach(g),ee(i.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",k(n,"class","container"),k(e,"class",r=""+(l[0]+" mt-50 svelte-110abfo"))},m(c,f){V(c,t,f),V(c,e,f),F(e,n),te(a,n,null),te(i,c,f),s=!0},p(c,[f]){(!s||f&1&&r!==(r=""+(c[0]+" mt-50 svelte-110abfo")))&&k(e,"class",r)},i(c){s||(B(a.$$.fragment,c),B(i.$$.fragment,c),s=!0)},o(c){M(a.$$.fragment,c),M(i.$$.fragment,c),s=!1},d(c){c&&g(t),c&&g(e),le(a),le(i,c)}}}function pt(l,t,e){let{class:n=""}=t;return l.$$set=a=>{"class"in a&&e(0,n=a.class)},[n]}class Et extends J{constructor(t){super();$(this,t,pt,vt,fe,{class:0})}}export{Et as default};
