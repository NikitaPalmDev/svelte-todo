import{K as Ke,C as He,S as K,i as H,s as j,e as y,c as E,a as T,d as g,b as h,f as S,D as C,L as F,M as P,N as ye,t as te,g as le,O as D,h as se,P as J,Q as je,E as B,R as Ee,T as $,U as ne,v as Y,w as Q,x as W,V as oe,W as ae,X as ie,p as V,Y as re,Z as Te,n as U,_ as Ie,A as X,m as ce,o as ue,$ as Ye,a0 as fe,a1 as de,a2 as Qe,a3 as we,a4 as We,a5 as Ce,a6 as De,j as Xe,a7 as Ze,l as Ge}from"../chunks/vendor-184f9251.js";const L=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=Ke(L,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(o=>o.color).map(o=>o.color).concat(e),i=n.filter((o,r)=>n.indexOf(o)===r).map((o,r)=>({id:r,color:o}));t(i)});function Ne(s,t,e){const l=s.slice();return l[24]=t[e],l}function Fe(s,t){let e,l,n,c,i;return{key:s,first:null,c(){e=y("li"),l=y("button"),this.h()},l(o){e=E(o,"LI",{class:!0});var r=T(e);l=E(r,"BUTTON",{class:!0,style:!0}),T(l).forEach(g),r.forEach(g),this.h()},h(){h(l,"class","task__color-btn svelte-1ok1bds"),h(l,"style",n=`background-color: ${t[24].color}`),h(e,"class","task__color-item svelte-1ok1bds"),this.first=e},m(o,r){S(o,e,r),C(e,l),c||(i=F(l,"click",P(function(){ye(t[13](t[24].color))&&t[13](t[24].color).apply(this,arguments)})),c=!0)},p(o,r){t=o,r&516&&n!==(n=`background-color: ${t[24].color}`)&&h(l,"style",n)},d(o){o&&g(e),c=!1,i()}}}function Je(s){let t,e,l,n,c,i,o,r,d,_,k,b,I,v,u,a=[],m=new Map,q,N,O,M,z,Z,R=s[9].filter(s[21]);const G=p=>p[24].id;for(let p=0;p<R.length;p+=1){let f=Ne(s,R,p),w=G(f);m.set(w,a[p]=Fe(w,f))}return{c(){t=y("div"),e=y("div"),l=y("div"),n=y("p"),c=te(s[1]),i=y("div"),o=y("div"),r=y("span"),d=te(s[4]),_=y("div"),k=y("button"),b=y("span"),I=y("button"),v=y("span"),u=y("ul");for(let p=0;p<a.length;p+=1)a[p].c();N=y("button"),O=y("span"),this.h()},l(p){t=E(p,"DIV",{class:!0});var f=T(t);e=E(f,"DIV",{class:!0});var w=T(e);l=E(w,"DIV",{class:!0});var A=T(l);n=E(A,"P",{class:!0,contenteditable:!0});var _e=T(n);c=le(_e,s[1]),_e.forEach(g),A.forEach(g),i=E(w,"DIV",{class:!0});var he=T(i);o=E(he,"DIV",{class:!0});var ke=T(o);r=E(ke,"SPAN",{class:!0});var ve=T(r);d=le(ve,s[4]),ve.forEach(g),ke.forEach(g),he.forEach(g),w.forEach(g),_=E(f,"DIV",{class:!0});var x=T(_);k=E(x,"BUTTON",{class:!0});var me=T(k);b=E(me,"SPAN",{class:!0}),T(b).forEach(g),me.forEach(g),I=E(x,"BUTTON",{class:!0});var ge=T(I);v=E(ge,"SPAN",{class:!0}),T(v).forEach(g),ge.forEach(g),x.forEach(g),u=E(f,"UL",{class:!0,style:!0});var be=T(u);for(let ee=0;ee<a.length;ee+=1)a[ee].l(be);be.forEach(g),N=E(f,"BUTTON",{class:!0});var pe=T(N);O=E(pe,"SPAN",{class:!0}),T(O).forEach(g),pe.forEach(g),f.forEach(g),this.h()},h(){h(n,"class","task__main-content svelte-1ok1bds"),h(n,"contenteditable",s[7]),h(l,"class","task__main-container svelte-1ok1bds"),h(r,"class","svelte-1ok1bds"),h(o,"class","task__info-content svelte-1ok1bds"),h(i,"class","task__info svelte-1ok1bds"),h(e,"class","task__main svelte-1ok1bds"),D(e,"isEdit",s[7]),h(b,"class","svg-image-del svelte-1ok1bds"),h(k,"class","task__menu-btn task__menu-btn_del svelte-1ok1bds"),h(v,"class","svg-image-pen svelte-1ok1bds"),h(I,"class","task__menu-btn task__menu-btn_edit svelte-1ok1bds"),D(I,"isSelect",s[7]),D(I,"isNoSave",!s[15]),h(_,"class","task__circle task__menu svelte-1ok1bds"),D(_,"isOpen",s[7]),h(u,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1ok1bds"),h(u,"style",q=`background-color: ${s[2]}`),D(u,"isOpen",s[7]),h(O,"class","svelte-1ok1bds"),h(N,"class","task__info-open svelte-1ok1bds"),D(N,"isHidden",s[7]),h(t,"class",M="task "+s[0]+" svelte-1ok1bds"),D(t,"isDisabled",s[3]),D(t,"isInfoOpen",s[5])},m(p,f){S(p,t,f),C(t,e),C(e,l),C(l,n),C(n,c),s[19](n),C(e,i),C(i,o),C(o,r),C(r,d),s[20](i),C(t,_),C(_,k),C(k,b),C(_,I),C(I,v),C(t,u);for(let w=0;w<a.length;w+=1)a[w].m(u,null);C(t,N),C(N,O),z||(Z=[F(n,"input",s[18]),F(n,"keydown",s[16]),F(e,"click",s[10]),F(k,"click",P(s[11])),F(I,"click",P(s[12])),F(N,"click",P(s[22]))],z=!0)},p(p,[f]){f&2&&se(c,p[1]),f&128&&h(n,"contenteditable",p[7]),f&16&&se(d,p[4]),f&128&&D(e,"isEdit",p[7]),f&128&&D(I,"isSelect",p[7]),f&128&&D(_,"isOpen",p[7]),f&8708&&(R=p[9].filter(p[21]),a=J(a,f,G,1,p,R,m,u,je,Fe,null,Ne)),f&4&&q!==(q=`background-color: ${p[2]}`)&&h(u,"style",q),f&128&&D(u,"isOpen",p[7]),f&128&&D(N,"isHidden",p[7]),f&1&&M!==(M="task "+p[0]+" svelte-1ok1bds")&&h(t,"class",M),f&9&&D(t,"isDisabled",p[3]),f&33&&D(t,"isInfoOpen",p[5])},i:B,o:B,d(p){p&&g(t),s[19](null),s[20](null);for(let f=0;f<a.length;f+=1)a[f].d();z=!1,Ee(Z)}}}function $e(s,t,e){let l,n;$(s,L,f=>e(23,l=f)),$(s,Oe,f=>e(9,n=f));let{class:c=""}=t,{text:i=""}=t,{color:o="#0029FF"}=t,{disabled:r=!1}=t,{id:d=null}=t,{date:_=""}=t,k=!1,b,I=!1,v;const u=()=>{if(I===!1){let f=l.map(w=>(d===w.id&&(w.done=!w.done),w));L.set(f)}},a=()=>{let f=l.filter(w=>w.id!=d);L.set(f)},m=()=>{e(7,I=!I)},q=f=>{let w=l.map(A=>(d===A.id&&(A.color=f),A));L.set(w)};function N(f){e(5,k=f!=null?f:!k);let w=0;b.childNodes.forEach(A=>w+=A.clientHeight),b.style.setProperty("--taskInfoHeight",`${k?w:0}px`)}function O(){let f=v.innerText;console.log("save",f)}function M(f){let w=f.ctrlKey?!1:f.metaKey,A=f.keyCode;if(console.log(w),console.log(f),w&&A===83)return f.preventDefault(),O(),!1}const z=()=>console.log("input");function Z(f){ne[f?"unshift":"push"](()=>{v=f,e(8,v)})}function R(f){ne[f?"unshift":"push"](()=>{b=f,e(6,b)})}const G=f=>f.color!=o,p=()=>N();return s.$$set=f=>{"class"in f&&e(0,c=f.class),"text"in f&&e(1,i=f.text),"color"in f&&e(2,o=f.color),"disabled"in f&&e(3,r=f.disabled),"id"in f&&e(17,d=f.id),"date"in f&&e(4,_=f.date)},[c,i,o,r,_,k,b,I,v,n,u,a,m,q,N,O,M,d,z,Z,R,G,p]}class Se extends K{constructor(t){super();H(this,t,$e,Je,j,{class:0,text:1,color:2,disabled:3,id:17,date:4})}}function Ae(s,t,e){const l=s.slice();return l[4]=t[e],l}function qe(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ve(s,t){let e,l,n,c,i,o=B,r;return l=new Se({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=y("li"),Y(l.$$.fragment),this.h()},l(d){e=E(d,"LI",{class:!0});var _=T(e);Q(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(d,_){S(d,e,_),W(l,e,null),r=!0},p(d,_){t=d;const k={};_&2&&(k.text=t[4].text),_&2&&(k.color=t[4].color?t[4].color:null),_&2&&(k.id=t[4].id),_&2&&(k.date=t[4].date),l.$set(k)},r(){i=e.getBoundingClientRect()},f(){oe(e),o(),ae(e,i)},a(){o(),o=ie(e,i,fe,{duration:300})},i(d){r||(V(l.$$.fragment,d),re(()=>{c&&c.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(d){U(l.$$.fragment,d),n&&n.invalidate(),c=Ie(e,t[2],{key:t[4].id}),r=!1},d(d){d&&g(e),X(l),d&&c&&c.end()}}}function Ue(s,t){let e,l,n,c,i,o=B,r;return l=new Se({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=y("li"),Y(l.$$.fragment),this.h()},l(d){e=E(d,"LI",{class:!0});var _=T(e);Q(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(d,_){S(d,e,_),W(l,e,null),r=!0},p(d,_){t=d;const k={};_&2&&(k.text=t[4].text),_&2&&(k.color=t[4].color?t[4].color:null),_&2&&(k.id=t[4].id),_&2&&(k.date=t[4].date),l.$set(k)},r(){i=e.getBoundingClientRect()},f(){oe(e),o(),ae(e,i)},a(){o(),o=ie(e,i,fe,{duration:300})},i(d){r||(V(l.$$.fragment,d),re(()=>{c&&c.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(d){U(l.$$.fragment,d),n&&n.invalidate(),c=Ie(e,t[2],{key:t[4].id}),r=!1},d(d){d&&g(e),X(l),d&&c&&c.end()}}}function xe(s){let t,e,l,n=[],c=new Map,i,o=[],r=new Map,d,_,k=s[1].filter(Pe);const b=u=>u[4].id;for(let u=0;u<k.length;u+=1){let a=qe(s,k,u),m=b(a);c.set(m,n[u]=Ve(m,a))}let I=s[1].filter(Be);const v=u=>u[4].id;for(let u=0;u<I.length;u+=1){let a=Ae(s,I,u),m=v(a);r.set(m,o[u]=Ue(m,a))}return{c(){t=y("section"),e=y("div"),l=y("ul");for(let u=0;u<n.length;u+=1)n[u].c();i=y("ul");for(let u=0;u<o.length;u+=1)o[u].c();this.h()},l(u){t=E(u,"SECTION",{class:!0});var a=T(t);e=E(a,"DIV",{class:!0});var m=T(e);l=E(m,"UL",{class:!0});var q=T(l);for(let O=0;O<n.length;O+=1)n[O].l(q);q.forEach(g),i=E(m,"UL",{class:!0});var N=T(i);for(let O=0;O<o.length;O+=1)o[O].l(N);N.forEach(g),m.forEach(g),a.forEach(g),this.h()},h(){h(l,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-q8mvyt"),h(t,"class",d="task-section "+s[0]+" svelte-q8mvyt")},m(u,a){S(u,t,a),C(t,e),C(e,l);for(let m=0;m<n.length;m+=1)n[m].m(l,null);C(e,i);for(let m=0;m<o.length;m+=1)o[m].m(i,null);_=!0},p(u,[a]){if(a&2){k=u[1].filter(Pe),ce();for(let m=0;m<n.length;m+=1)n[m].r();n=J(n,a,b,1,u,k,c,l,de,Ve,null,qe);for(let m=0;m<n.length;m+=1)n[m].a();ue()}if(a&2){I=u[1].filter(Be),ce();for(let m=0;m<o.length;m+=1)o[m].r();o=J(o,a,v,1,u,I,r,i,de,Ue,null,Ae);for(let m=0;m<o.length;m+=1)o[m].a();ue()}(!_||a&1&&d!==(d="task-section "+u[0]+" svelte-q8mvyt"))&&h(t,"class",d)},i(u){if(!_){for(let a=0;a<k.length;a+=1)V(n[a]);for(let a=0;a<I.length;a+=1)V(o[a]);_=!0}},o(u){for(let a=0;a<n.length;a+=1)U(n[a]);for(let a=0;a<o.length;a+=1)U(o[a]);_=!1},d(u){u&&g(t);for(let a=0;a<n.length;a+=1)n[a].d();for(let a=0;a<o.length;a+=1)o[a].d()}}}const Pe=s=>!s.done,Be=s=>s.done;function et(s,t,e){let l;$(s,L,o=>e(1,l=o));let{class:n=""}=t;const[c,i]=Ye({duration:o=>Math.sqrt(o*200),fallback(o,r){const d=getComputedStyle(o),_=d.transform==="none"?"":d.transform;return{duration:600,easing:Qe,css:k=>`
					transform: ${_} scale(${k});
					opacity: ${k}
				`}}});return s.$$set=o=>{"class"in o&&e(0,n=o.class)},[n,l,c,i]}class tt extends K{constructor(t){super();H(this,t,et,xe,j,{class:0})}}const lt=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Le(s){let t,e,l,n=s[2].text&&Me(s);return{c(){t=y("button"),n&&n.c(),this.h()},l(c){t=E(c,"BUTTON",{class:!0});var i=T(t);n&&n.l(i),i.forEach(g),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(c,i){S(c,t,i),n&&n.m(t,null),e||(l=F(t,"click",P(s[6])),e=!0)},p(c,i){c[2].text?n?n.p(c,i):(n=Me(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&g(t),n&&n.d(),e=!1,l()}}}function Me(s){let t=s[2].text+"",e;return{c(){e=te(t)},l(l){e=le(l,t)},m(l,n){S(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&se(e,t)},d(l){l&&g(e)}}}function st(s){let t,e,l,n,c,i=s[2]&&Le(s);return{c(){t=y("div"),e=y("input"),i&&i.c(),this.h()},l(o){t=E(o,"DIV",{class:!0});var r=T(t);e=E(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(g),this.h()},h(){h(e,"placeholder",s[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),D(t,"isError",s[5])},m(o,r){S(o,t,r),C(t,e),we(e,s[4]),i&&i.m(t,null),s[11](t),n||(c=[F(e,"input",s[9]),F(e,"input",s[7]),F(e,"keydown",s[10])],n=!0)},p(o,[r]){r&2&&h(e,"placeholder",o[1]),r&16&&e.value!==o[4]&&we(e,o[4]),o[2]?i?i.p(o,r):(i=Le(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),r&37&&D(t,"isError",o[5])},i:B,o:B,d(o){o&&g(t),i&&i.d(),s[11](null),n=!1,Ee(c)}}}function nt(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,i,o,r=!1;const d=We(),_=()=>{o?(d("submit",{value:o}),e(4,o="")):e(5,r=!0)},k=()=>{e(5,r=!1)},b=a=>{let m=a.key;m==="Control"&&d("color"),m==="Enter"&&_()};function I(){o=this.value,e(4,o)}const v=a=>b(a);function u(a){ne[a?"unshift":"push"](()=>{i=a,e(3,i)})}return s.$$set=a=>{"class"in a&&e(0,l=a.class),"placeholder"in a&&e(1,n=a.placeholder),"btn"in a&&e(2,c=a.btn)},[l,n,c,i,o,r,_,k,b,I,v,u]}class ot extends K{constructor(t){super();H(this,t,nt,st,j,{class:0,placeholder:1,btn:2})}}function Re(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function ze(s,t){let e,l,n,c,i=B,o,r,d;return{key:s,first:null,c(){e=y("button"),this.h()},l(_){e=E(_,"BUTTON",{class:!0,style:!0}),T(e).forEach(g),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,k){S(_,e,k),o=!0,r||(d=F(e,"click",P(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,k){t=_,(!o||k&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){c=e.getBoundingClientRect()},f(){oe(e),i(),ae(e,c)},a(){i(),i=ie(e,c,fe,{})},i(_){o||(re(()=>{n||(n=Ce(e,De,{},!0)),n.run(1)}),o=!0)},o(_){n||(n=Ce(e,De,{},!1)),n.run(0),o=!1},d(_){_&&g(e),_&&n&&n.end(),r=!1,d()}}}function at(s){let t,e,l,n,c=[],i=new Map,o,r,d,_,k,b=s[3].filter(s[7]);const I=v=>v[9].id;for(let v=0;v<b.length;v+=1){let u=Re(s,b,v),a=I(u);i.set(a,c[v]=ze(a,u))}return o=new ot({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),o.$on("color",s[8]),o.$on("submit",s[4]),{c(){t=y("div"),e=y("div"),l=y("span");for(let v=0;v<c.length;v+=1)c[v].c();Y(o.$$.fragment),this.h()},l(v){t=E(v,"DIV",{class:!0});var u=T(t);e=E(u,"DIV",{class:!0});var a=T(e);l=E(a,"SPAN",{class:!0,style:!0}),T(l).forEach(g);for(let m=0;m<c.length;m+=1)c[m].l(a);a.forEach(g),Q(o.$$.fragment,u),u.forEach(g),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",n=`color: ${s[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),D(e,"isOpen",s[2]),h(t,"class",r="add-todo "+s[0]+" svelte-1hafqlz")},m(v,u){S(v,t,u),C(t,e),C(e,l);for(let a=0;a<c.length;a+=1)c[a].m(e,null);W(o,t,null),d=!0,_||(k=F(l,"click",P(s[6])),_=!0)},p(v,[u]){if((!d||u&2&&n!==(n=`color: ${v[1]}`))&&h(l,"style",n),u&42){b=v[3].filter(v[7]),ce();for(let a=0;a<c.length;a+=1)c[a].r();c=J(c,u,I,1,v,b,i,e,de,ze,null,Re);for(let a=0;a<c.length;a+=1)c[a].a();ue()}u&4&&D(e,"isOpen",v[2]),(!d||u&1&&r!==(r="add-todo "+v[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(v){if(!d){for(let u=0;u<b.length;u+=1)V(c[u]);V(o.$$.fragment,v),d=!0}},o(v){for(let u=0;u<c.length;u+=1)U(c[u]);U(o.$$.fragment,v),d=!1},d(v){v&&g(t);for(let u=0;u<c.length;u+=1)c[u].d();X(o),_=!1,k()}}}function it(s,t,e){let l;$(s,Oe,b=>e(3,l=b));let{class:n=""}=t,c="#0029FF",i=!1;const o=b=>{let I={id:Date.now(),text:b.detail.value,color:c,done:!1,date:lt(new Date,"dot")};L.update(v=>v=[I,...v])},r=b=>b&&e(1,c=b),d=()=>e(2,i=!i),_=b=>b.color!=c,k=()=>e(2,i=!i);return s.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,c,i,l,o,r,d,_,k]}class rt extends K{constructor(t){super();H(this,t,it,at,j,{class:0})}}function ct(s){let t,e,l,n,c,i,o;return n=new rt({}),i=new tt({props:{class:"mt-50"}}),{c(){t=Xe(),e=y("section"),l=y("div"),Y(n.$$.fragment),Y(i.$$.fragment),this.h()},l(r){Ze('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Ge(r),e=E(r,"SECTION",{class:!0});var _=T(e);l=E(_,"DIV",{class:!0});var k=T(l);Q(n.$$.fragment,k),k.forEach(g),_.forEach(g),Q(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",c=""+(s[0]+" mt-50 svelte-110abfo"))},m(r,d){S(r,t,d),S(r,e,d),C(e,l),W(n,l,null),W(i,r,d),o=!0},p(r,[d]){(!o||d&1&&c!==(c=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",c)},i(r){o||(V(n.$$.fragment,r),V(i.$$.fragment,r),o=!0)},o(r){U(n.$$.fragment,r),U(i.$$.fragment,r),o=!1},d(r){r&&g(t),r&&g(e),X(n),X(i,r)}}}function ut(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class dt extends K{constructor(t){super();H(this,t,ut,ct,j,{class:0})}}export{dt as default};
