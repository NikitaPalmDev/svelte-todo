import{K as Ke,C as He,S as K,i as H,s as j,e as y,c as E,a as T,d as g,b as h,f as F,D as C,L as S,M as P,N as ye,t as te,g as le,O as D,h as se,P as J,Q as je,E as B,R as Ee,T as $,U as ne,v as Y,w as Q,x as W,V as oe,W as ae,X as ie,p as V,Y as re,Z as Te,n as U,_ as Ie,A as X,m as ce,o as ue,$ as Ye,a0 as fe,a1 as de,a2 as Qe,a3 as we,a4 as We,a5 as Ce,a6 as De,j as Xe,a7 as Ze,l as Ge}from"../chunks/vendor-184f9251.js";const L=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ne=Ke(L,(n,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let s=n.filter(o=>o.color).map(o=>o.color).concat(e),i=s.filter((o,r)=>s.indexOf(o)===r).map((o,r)=>({id:r,color:o}));t(i)});function Oe(n,t,e){const l=n.slice();return l[24]=t[e],l}function Se(n,t){let e,l,s,c,i;return{key:n,first:null,c(){e=y("li"),l=y("button"),this.h()},l(o){e=E(o,"LI",{class:!0});var r=T(e);l=E(r,"BUTTON",{class:!0,style:!0}),T(l).forEach(g),r.forEach(g),this.h()},h(){h(l,"class","task__color-btn svelte-1ok1bds"),h(l,"style",s=`background-color: ${t[24].color}`),h(e,"class","task__color-item svelte-1ok1bds"),this.first=e},m(o,r){F(o,e,r),C(e,l),c||(i=S(l,"click",P(function(){ye(t[13](t[24].color))&&t[13](t[24].color).apply(this,arguments)})),c=!0)},p(o,r){t=o,r&516&&s!==(s=`background-color: ${t[24].color}`)&&h(l,"style",s)},d(o){o&&g(e),c=!1,i()}}}function Je(n){let t,e,l,s,c,i,o,r,d,_,v,b,I,k,u,a=[],m=new Map,q,N,O,M,z,Z,R=n[9].filter(n[20]);const G=p=>p[24].id;for(let p=0;p<R.length;p+=1){let f=Oe(n,R,p),w=G(f);m.set(w,a[p]=Se(w,f))}return{c(){t=y("div"),e=y("div"),l=y("div"),s=y("p"),c=te(n[1]),i=y("div"),o=y("div"),r=y("span"),d=te(n[4]),_=y("div"),v=y("button"),b=y("span"),I=y("button"),k=y("span"),u=y("ul");for(let p=0;p<a.length;p+=1)a[p].c();N=y("button"),O=y("span"),this.h()},l(p){t=E(p,"DIV",{class:!0});var f=T(t);e=E(f,"DIV",{class:!0});var w=T(e);l=E(w,"DIV",{class:!0});var A=T(l);s=E(A,"P",{class:!0,contenteditable:!0});var _e=T(s);c=le(_e,n[1]),_e.forEach(g),A.forEach(g),i=E(w,"DIV",{class:!0});var he=T(i);o=E(he,"DIV",{class:!0});var ve=T(o);r=E(ve,"SPAN",{class:!0});var ke=T(r);d=le(ke,n[4]),ke.forEach(g),ve.forEach(g),he.forEach(g),w.forEach(g),_=E(f,"DIV",{class:!0});var x=T(_);v=E(x,"BUTTON",{class:!0});var me=T(v);b=E(me,"SPAN",{class:!0}),T(b).forEach(g),me.forEach(g),I=E(x,"BUTTON",{class:!0});var ge=T(I);k=E(ge,"SPAN",{class:!0}),T(k).forEach(g),ge.forEach(g),x.forEach(g),u=E(f,"UL",{class:!0,style:!0});var be=T(u);for(let ee=0;ee<a.length;ee+=1)a[ee].l(be);be.forEach(g),N=E(f,"BUTTON",{class:!0});var pe=T(N);O=E(pe,"SPAN",{class:!0}),T(O).forEach(g),pe.forEach(g),f.forEach(g),this.h()},h(){h(s,"class","task__main-content svelte-1ok1bds"),h(s,"contenteditable",n[7]),h(l,"class","task__main-container svelte-1ok1bds"),h(r,"class","svelte-1ok1bds"),h(o,"class","task__info-content svelte-1ok1bds"),h(i,"class","task__info svelte-1ok1bds"),h(e,"class","task__main svelte-1ok1bds"),D(e,"isEdit",n[7]),h(b,"class","svg-image-del svelte-1ok1bds"),h(v,"class","task__menu-btn task__menu-btn_del svelte-1ok1bds"),h(k,"class","svg-image-pen svelte-1ok1bds"),h(I,"class","task__menu-btn task__menu-btn_edit svelte-1ok1bds"),D(I,"isSelect",n[7]),D(I,"isNoSave",noSave),h(_,"class","task__circle task__menu svelte-1ok1bds"),D(_,"isOpen",n[7]),h(u,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1ok1bds"),h(u,"style",q=`background-color: ${n[2]}`),D(u,"isOpen",n[7]),h(O,"class","svelte-1ok1bds"),h(N,"class","task__info-open svelte-1ok1bds"),D(N,"isHidden",n[7]),h(t,"class",M="task "+n[0]+" svelte-1ok1bds"),D(t,"isDisabled",n[3]),D(t,"isInfoOpen",n[5])},m(p,f){F(p,t,f),C(t,e),C(e,l),C(l,s),C(s,c),n[18](s),C(e,i),C(i,o),C(o,r),C(r,d),n[19](i),C(t,_),C(_,v),C(v,b),C(_,I),C(I,k),C(t,u);for(let w=0;w<a.length;w+=1)a[w].m(u,null);C(t,N),C(N,O),z||(Z=[S(s,"input",n[17]),S(s,"keydown",n[15]),S(e,"click",n[10]),S(v,"click",P(n[11])),S(I,"click",P(n[12])),S(N,"click",P(n[21]))],z=!0)},p(p,[f]){f&2&&se(c,p[1]),f&128&&h(s,"contenteditable",p[7]),f&16&&se(d,p[4]),f&128&&D(e,"isEdit",p[7]),f&128&&D(I,"isSelect",p[7]),f&0&&D(I,"isNoSave",noSave),f&128&&D(_,"isOpen",p[7]),f&8708&&(R=p[9].filter(p[20]),a=J(a,f,G,1,p,R,m,u,je,Se,null,Oe)),f&4&&q!==(q=`background-color: ${p[2]}`)&&h(u,"style",q),f&128&&D(u,"isOpen",p[7]),f&128&&D(N,"isHidden",p[7]),f&1&&M!==(M="task "+p[0]+" svelte-1ok1bds")&&h(t,"class",M),f&9&&D(t,"isDisabled",p[3]),f&33&&D(t,"isInfoOpen",p[5])},i:B,o:B,d(p){p&&g(t),n[18](null),n[19](null);for(let f=0;f<a.length;f+=1)a[f].d();z=!1,Ee(Z)}}}function $e(n,t,e){let l,s;$(n,L,f=>e(22,l=f)),$(n,Ne,f=>e(9,s=f));let{class:c=""}=t,{text:i=""}=t,{color:o="#0029FF"}=t,{disabled:r=!1}=t,{id:d=null}=t,{date:_=""}=t,v=!1,b,I=!1,k;const u=()=>{if(I===!1){let f=l.map(w=>(d===w.id&&(w.done=!w.done),w));L.set(f)}},a=()=>{let f=l.filter(w=>w.id!=d);L.set(f)},m=()=>{e(7,I=!I)},q=f=>{let w=l.map(A=>(d===A.id&&(A.color=f),A));L.set(w)};function N(f){e(5,v=f!=null?f:!v);let w=0;b.childNodes.forEach(A=>w+=A.clientHeight),b.style.setProperty("--taskInfoHeight",`${v?w:0}px`)}function O(){let f=k.innerText;console.log("save",f)}function M(f){let w=f.ctrlKey?!1:f.metaKey,A=f.keyCode;if(console.log(w),console.log(f),w&&A===83)return f.preventDefault(),O(),!1}const z=()=>console.log("input");function Z(f){ne[f?"unshift":"push"](()=>{k=f,e(8,k)})}function R(f){ne[f?"unshift":"push"](()=>{b=f,e(6,b)})}const G=f=>f.color!=o,p=()=>N();return n.$$set=f=>{"class"in f&&e(0,c=f.class),"text"in f&&e(1,i=f.text),"color"in f&&e(2,o=f.color),"disabled"in f&&e(3,r=f.disabled),"id"in f&&e(16,d=f.id),"date"in f&&e(4,_=f.date)},[c,i,o,r,_,v,b,I,k,s,u,a,m,q,N,M,d,z,Z,R,G,p]}class Fe extends K{constructor(t){super();H(this,t,$e,Je,j,{class:0,text:1,color:2,disabled:3,id:16,date:4})}}function Ae(n,t,e){const l=n.slice();return l[4]=t[e],l}function qe(n,t,e){const l=n.slice();return l[4]=t[e],l}function Ve(n,t){let e,l,s,c,i,o=B,r;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:n,first:null,c(){e=y("li"),Y(l.$$.fragment),this.h()},l(d){e=E(d,"LI",{class:!0});var _=T(e);Q(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(d,_){F(d,e,_),W(l,e,null),r=!0},p(d,_){t=d;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){oe(e),o(),ae(e,i)},a(){o(),o=ie(e,i,fe,{duration:300})},i(d){r||(V(l.$$.fragment,d),re(()=>{c&&c.end(1),s=Te(e,t[3],{key:t[4].id}),s.start()}),r=!0)},o(d){U(l.$$.fragment,d),s&&s.invalidate(),c=Ie(e,t[2],{key:t[4].id}),r=!1},d(d){d&&g(e),X(l),d&&c&&c.end()}}}function Ue(n,t){let e,l,s,c,i,o=B,r;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:n,first:null,c(){e=y("li"),Y(l.$$.fragment),this.h()},l(d){e=E(d,"LI",{class:!0});var _=T(e);Q(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(d,_){F(d,e,_),W(l,e,null),r=!0},p(d,_){t=d;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){oe(e),o(),ae(e,i)},a(){o(),o=ie(e,i,fe,{duration:300})},i(d){r||(V(l.$$.fragment,d),re(()=>{c&&c.end(1),s=Te(e,t[3],{key:t[4].id}),s.start()}),r=!0)},o(d){U(l.$$.fragment,d),s&&s.invalidate(),c=Ie(e,t[2],{key:t[4].id}),r=!1},d(d){d&&g(e),X(l),d&&c&&c.end()}}}function xe(n){let t,e,l,s=[],c=new Map,i,o=[],r=new Map,d,_,v=n[1].filter(Pe);const b=u=>u[4].id;for(let u=0;u<v.length;u+=1){let a=qe(n,v,u),m=b(a);c.set(m,s[u]=Ve(m,a))}let I=n[1].filter(Be);const k=u=>u[4].id;for(let u=0;u<I.length;u+=1){let a=Ae(n,I,u),m=k(a);r.set(m,o[u]=Ue(m,a))}return{c(){t=y("section"),e=y("div"),l=y("ul");for(let u=0;u<s.length;u+=1)s[u].c();i=y("ul");for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){t=E(u,"SECTION",{class:!0});var a=T(t);e=E(a,"DIV",{class:!0});var m=T(e);l=E(m,"UL",{class:!0});var q=T(l);for(let O=0;O<s.length;O+=1)s[O].l(q);q.forEach(g),i=E(m,"UL",{class:!0});var N=T(i);for(let O=0;O<o.length;O+=1)o[O].l(N);N.forEach(g),m.forEach(g),a.forEach(g),this.h()},h(){h(l,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-q8mvyt"),h(t,"class",d="task-section "+n[0]+" svelte-q8mvyt")},m(u,a){F(u,t,a),C(t,e),C(e,l);for(let m=0;m<s.length;m+=1)s[m].m(l,null);C(e,i);for(let m=0;m<o.length;m+=1)o[m].m(i,null);_=!0},p(u,[a]){if(a&2){v=u[1].filter(Pe),ce();for(let m=0;m<s.length;m+=1)s[m].r();s=J(s,a,b,1,u,v,c,l,de,Ve,null,qe);for(let m=0;m<s.length;m+=1)s[m].a();ue()}if(a&2){I=u[1].filter(Be),ce();for(let m=0;m<o.length;m+=1)o[m].r();o=J(o,a,k,1,u,I,r,i,de,Ue,null,Ae);for(let m=0;m<o.length;m+=1)o[m].a();ue()}(!_||a&1&&d!==(d="task-section "+u[0]+" svelte-q8mvyt"))&&h(t,"class",d)},i(u){if(!_){for(let a=0;a<v.length;a+=1)V(s[a]);for(let a=0;a<I.length;a+=1)V(o[a]);_=!0}},o(u){for(let a=0;a<s.length;a+=1)U(s[a]);for(let a=0;a<o.length;a+=1)U(o[a]);_=!1},d(u){u&&g(t);for(let a=0;a<s.length;a+=1)s[a].d();for(let a=0;a<o.length;a+=1)o[a].d()}}}const Pe=n=>!n.done,Be=n=>n.done;function et(n,t,e){let l;$(n,L,o=>e(1,l=o));let{class:s=""}=t;const[c,i]=Ye({duration:o=>Math.sqrt(o*200),fallback(o,r){const d=getComputedStyle(o),_=d.transform==="none"?"":d.transform;return{duration:600,easing:Qe,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return n.$$set=o=>{"class"in o&&e(0,s=o.class)},[s,l,c,i]}class tt extends K{constructor(t){super();H(this,t,et,xe,j,{class:0})}}const lt=(n,t)=>{if(t==="dot"){let e=n.getDate(),l=n.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${n.getFullYear()}`}};function Le(n){let t,e,l,s=n[2].text&&Me(n);return{c(){t=y("button"),s&&s.c(),this.h()},l(c){t=E(c,"BUTTON",{class:!0});var i=T(t);s&&s.l(i),i.forEach(g),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(c,i){F(c,t,i),s&&s.m(t,null),e||(l=S(t,"click",P(n[6])),e=!0)},p(c,i){c[2].text?s?s.p(c,i):(s=Me(c),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(c){c&&g(t),s&&s.d(),e=!1,l()}}}function Me(n){let t=n[2].text+"",e;return{c(){e=te(t)},l(l){e=le(l,t)},m(l,s){F(l,e,s)},p(l,s){s&4&&t!==(t=l[2].text+"")&&se(e,t)},d(l){l&&g(e)}}}function st(n){let t,e,l,s,c,i=n[2]&&Le(n);return{c(){t=y("div"),e=y("input"),i&&i.c(),this.h()},l(o){t=E(o,"DIV",{class:!0});var r=T(t);e=E(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(g),this.h()},h(){h(e,"placeholder",n[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse"),D(t,"isError",n[5])},m(o,r){F(o,t,r),C(t,e),we(e,n[4]),i&&i.m(t,null),n[11](t),s||(c=[S(e,"input",n[9]),S(e,"input",n[7]),S(e,"keydown",n[10])],s=!0)},p(o,[r]){r&2&&h(e,"placeholder",o[1]),r&16&&e.value!==o[4]&&we(e,o[4]),o[2]?i?i.p(o,r):(i=Le(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),r&37&&D(t,"isError",o[5])},i:B,o:B,d(o){o&&g(t),i&&i.d(),n[11](null),s=!1,Ee(c)}}}function nt(n,t,e){let{class:l=""}=t,{placeholder:s="Placeholer"}=t,{btn:c=null}=t,i,o,r=!1;const d=We(),_=()=>{o?(d("submit",{value:o}),e(4,o="")):e(5,r=!0)},v=()=>{e(5,r=!1)},b=a=>{let m=a.key;m==="Control"&&d("color"),m==="Enter"&&_()};function I(){o=this.value,e(4,o)}const k=a=>b(a);function u(a){ne[a?"unshift":"push"](()=>{i=a,e(3,i)})}return n.$$set=a=>{"class"in a&&e(0,l=a.class),"placeholder"in a&&e(1,s=a.placeholder),"btn"in a&&e(2,c=a.btn)},[l,s,c,i,o,r,_,v,b,I,k,u]}class ot extends K{constructor(t){super();H(this,t,nt,st,j,{class:0,placeholder:1,btn:2})}}function Re(n,t,e){const l=n.slice();return l[9]=t[e],l[11]=e,l}function ze(n,t){let e,l,s,c,i=B,o,r,d;return{key:n,first:null,c(){e=y("button"),this.h()},l(_){e=E(_,"BUTTON",{class:!0,style:!0}),T(e).forEach(g),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){F(_,e,v),o=!0,r||(d=S(e,"click",P(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,v){t=_,(!o||v&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){c=e.getBoundingClientRect()},f(){oe(e),i(),ae(e,c)},a(){i(),i=ie(e,c,fe,{})},i(_){o||(re(()=>{s||(s=Ce(e,De,{},!0)),s.run(1)}),o=!0)},o(_){s||(s=Ce(e,De,{},!1)),s.run(0),o=!1},d(_){_&&g(e),_&&s&&s.end(),r=!1,d()}}}function at(n){let t,e,l,s,c=[],i=new Map,o,r,d,_,v,b=n[3].filter(n[7]);const I=k=>k[9].id;for(let k=0;k<b.length;k+=1){let u=Re(n,b,k),a=I(u);i.set(a,c[k]=ze(a,u))}return o=new ot({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),o.$on("color",n[8]),o.$on("submit",n[4]),{c(){t=y("div"),e=y("div"),l=y("span");for(let k=0;k<c.length;k+=1)c[k].c();Y(o.$$.fragment),this.h()},l(k){t=E(k,"DIV",{class:!0});var u=T(t);e=E(u,"DIV",{class:!0});var a=T(e);l=E(a,"SPAN",{class:!0,style:!0}),T(l).forEach(g);for(let m=0;m<c.length;m+=1)c[m].l(a);a.forEach(g),Q(o.$$.fragment,u),u.forEach(g),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",s=`color: ${n[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),D(e,"isOpen",n[2]),h(t,"class",r="add-todo "+n[0]+" svelte-1hafqlz")},m(k,u){F(k,t,u),C(t,e),C(e,l);for(let a=0;a<c.length;a+=1)c[a].m(e,null);W(o,t,null),d=!0,_||(v=S(l,"click",P(n[6])),_=!0)},p(k,[u]){if((!d||u&2&&s!==(s=`color: ${k[1]}`))&&h(l,"style",s),u&42){b=k[3].filter(k[7]),ce();for(let a=0;a<c.length;a+=1)c[a].r();c=J(c,u,I,1,k,b,i,e,de,ze,null,Re);for(let a=0;a<c.length;a+=1)c[a].a();ue()}u&4&&D(e,"isOpen",k[2]),(!d||u&1&&r!==(r="add-todo "+k[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(k){if(!d){for(let u=0;u<b.length;u+=1)V(c[u]);V(o.$$.fragment,k),d=!0}},o(k){for(let u=0;u<c.length;u+=1)U(c[u]);U(o.$$.fragment,k),d=!1},d(k){k&&g(t);for(let u=0;u<c.length;u+=1)c[u].d();X(o),_=!1,v()}}}function it(n,t,e){let l;$(n,Ne,b=>e(3,l=b));let{class:s=""}=t,c="#0029FF",i=!1;const o=b=>{let I={id:Date.now(),text:b.detail.value,color:c,done:!1,date:lt(new Date,"dot")};L.update(k=>k=[I,...k])},r=b=>b&&e(1,c=b),d=()=>e(2,i=!i),_=b=>b.color!=c,v=()=>e(2,i=!i);return n.$$set=b=>{"class"in b&&e(0,s=b.class)},[s,c,i,l,o,r,d,_,v]}class rt extends K{constructor(t){super();H(this,t,it,at,j,{class:0})}}function ct(n){let t,e,l,s,c,i,o;return s=new rt({}),i=new tt({props:{class:"mt-50"}}),{c(){t=Xe(),e=y("section"),l=y("div"),Y(s.$$.fragment),Y(i.$$.fragment),this.h()},l(r){Ze('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Ge(r),e=E(r,"SECTION",{class:!0});var _=T(e);l=E(_,"DIV",{class:!0});var v=T(l);Q(s.$$.fragment,v),v.forEach(g),_.forEach(g),Q(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",c=""+(n[0]+" mt-50 svelte-110abfo"))},m(r,d){F(r,t,d),F(r,e,d),C(e,l),W(s,l,null),W(i,r,d),o=!0},p(r,[d]){(!o||d&1&&c!==(c=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",c)},i(r){o||(V(s.$$.fragment,r),V(i.$$.fragment,r),o=!0)},o(r){U(s.$$.fragment,r),U(i.$$.fragment,r),o=!1},d(r){r&&g(t),r&&g(e),X(s),X(i,r)}}}function ut(n,t,e){let{class:l=""}=t;return n.$$set=s=>{"class"in s&&e(0,l=s.class)},[l]}class dt extends K{constructor(t){super();H(this,t,ut,ct,j,{class:0})}}export{dt as default};
