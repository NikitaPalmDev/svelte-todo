import{K as He,C as je,S as j,i as K,s as Y,e as E,c as y,a as T,d as m,b as d,f as A,D,L as S,M as L,N as be,t as ee,g as te,O as w,h as le,P as G,Q as Ke,E as M,R as Ee,T as J,U as ye,v as Q,w as W,x as X,V as se,W as ne,X as ae,p as P,Y as oe,Z as Te,n as B,_ as Ie,A as Z,m as ie,o as re,$ as Ye,a0 as ce,a1 as ue,a2 as Qe,a3 as Oe,a4 as We,a5 as De,a6 as we,j as Xe,a7 as Ze,l as Ge}from"../chunks/vendor-184f9251.js";const R=je([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ce=He(R,(a,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=a.filter(s=>s.color).map(s=>s.color).concat(e),i=n.filter((s,r)=>n.indexOf(s)===r).map((s,r)=>({id:r,color:s}));t(i)});function Ne(a,t,e){const l=a.slice();return l[20]=t[e],l}function Fe(a,t){let e,l,n,c,i;return{key:a,first:null,c(){e=E("li"),l=E("button"),this.h()},l(s){e=y(s,"LI",{class:!0});var r=T(e);l=y(r,"BUTTON",{class:!0,style:!0}),T(l).forEach(m),r.forEach(m),this.h()},h(){d(l,"class","task__color-btn svelte-126iru6"),d(l,"style",n=`background-color: ${t[20].color}`),d(e,"class","task__color-item svelte-126iru6"),this.first=e},m(s,r){A(s,e,r),D(e,l),c||(i=S(l,"click",L(function(){be(t[12](t[20].color))&&t[12](t[20].color).apply(this,arguments)})),c=!0)},p(s,r){t=s,r&260&&n!==(n=`background-color: ${t[20].color}`)&&d(l,"style",n)},d(s){s&&m(e),c=!1,i()}}}function Je(a){let t,e,l,n,c,i,s,r,f,_,h,p,O,g,u,o=[],v=new Map,q,F,N,z,H,k,C=a[8].filter(a[17]);const U=b=>b[20].id;for(let b=0;b<C.length;b+=1){let I=Ne(a,C,b),V=U(I);v.set(V,o[b]=Fe(V,I))}return{c(){t=E("div"),e=E("div"),l=E("div"),n=E("p"),c=ee(a[1]),i=E("div"),s=E("div"),r=E("span"),f=ee(a[4]),_=E("div"),h=E("button"),p=E("span"),O=E("button"),g=E("span"),u=E("ul");for(let b=0;b<o.length;b+=1)o[b].c();F=E("button"),N=E("span"),this.h()},l(b){t=y(b,"DIV",{class:!0});var I=T(t);e=y(I,"DIV",{class:!0});var V=T(e);l=y(V,"DIV",{class:!0});var fe=T(l);n=y(fe,"P",{class:!0,contenteditable:!0});var _e=T(n);c=te(_e,a[1]),_e.forEach(m),fe.forEach(m),i=y(V,"DIV",{class:!0});var de=T(i);s=y(de,"DIV",{class:!0});var he=T(s);r=y(he,"SPAN",{class:!0});var ve=T(r);f=te(ve,a[4]),ve.forEach(m),he.forEach(m),de.forEach(m),V.forEach(m),_=y(I,"DIV",{class:!0});var $=T(_);h=y($,"BUTTON",{class:!0});var me=T(h);p=y(me,"SPAN",{class:!0}),T(p).forEach(m),me.forEach(m),O=y($,"BUTTON",{class:!0});var ge=T(O);g=y(ge,"SPAN",{class:!0}),T(g).forEach(m),ge.forEach(m),$.forEach(m),u=y(I,"UL",{class:!0,style:!0});var ke=T(u);for(let x=0;x<o.length;x+=1)o[x].l(ke);ke.forEach(m),F=y(I,"BUTTON",{class:!0});var pe=T(F);N=y(pe,"SPAN",{class:!0}),T(N).forEach(m),pe.forEach(m),I.forEach(m),this.h()},h(){d(n,"class","task__main-content svelte-126iru6"),d(n,"contenteditable",a[7]),d(l,"class","task__main-container svelte-126iru6"),d(r,"class","svelte-126iru6"),d(s,"class","task__info-content svelte-126iru6"),d(i,"class","task__info svelte-126iru6"),d(e,"class","task__main svelte-126iru6"),w(e,"isEdit",a[7]),d(p,"class","svg-image-del svelte-126iru6"),d(h,"class","task__menu-btn task__menu-btn_del svelte-126iru6"),d(g,"class","svg-image-pen svelte-126iru6"),d(O,"class","task__menu-btn task__menu-btn_edit svelte-126iru6"),w(O,"isSelect",a[7]),d(_,"class","task__circle task__menu svelte-126iru6"),w(_,"isOpen",a[7]),d(u,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-126iru6"),d(u,"style",q=`background-color: ${a[2]}`),w(u,"isOpen",a[7]),d(N,"class","svelte-126iru6"),d(F,"class","task__info-open svelte-126iru6"),w(F,"isHidden",a[7]),d(t,"class",z="task "+a[0]+" svelte-126iru6"),w(t,"isDisabled",a[3]),w(t,"isInfoOpen",a[5])},m(b,I){A(b,t,I),D(t,e),D(e,l),D(l,n),D(n,c),D(e,i),D(i,s),D(s,r),D(r,f),a[16](i),D(t,_),D(_,h),D(h,p),D(_,O),D(O,g),D(t,u);for(let V=0;V<o.length;V+=1)o[V].m(u,null);D(t,F),D(F,N),H||(k=[S(n,"input",a[15]),S(e,"click",a[9]),S(h,"click",L(a[10])),S(O,"click",L(a[11])),S(F,"click",L(a[18]))],H=!0)},p(b,[I]){I&2&&le(c,b[1]),I&128&&d(n,"contenteditable",b[7]),I&16&&le(f,b[4]),I&128&&w(e,"isEdit",b[7]),I&128&&w(O,"isSelect",b[7]),I&128&&w(_,"isOpen",b[7]),I&4356&&(C=b[8].filter(b[17]),o=G(o,I,U,1,b,C,v,u,Ke,Fe,null,Ne)),I&4&&q!==(q=`background-color: ${b[2]}`)&&d(u,"style",q),I&128&&w(u,"isOpen",b[7]),I&128&&w(F,"isHidden",b[7]),I&1&&z!==(z="task "+b[0]+" svelte-126iru6")&&d(t,"class",z),I&9&&w(t,"isDisabled",b[3]),I&33&&w(t,"isInfoOpen",b[5])},i:M,o:M,d(b){b&&m(t),a[16](null);for(let I=0;I<o.length;I+=1)o[I].d();H=!1,Ee(k)}}}function $e(a,t,e){let l,n;J(a,R,k=>e(19,l=k)),J(a,Ce,k=>e(8,n=k));let{class:c=""}=t,{text:i=""}=t,{color:s="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,h=!1,p,O=!1;const g=()=>{if(O===!1){let k=l.map(C=>(f===C.id&&(C.done=!C.done),C));R.set(k)}},u=()=>{let k=l.filter(C=>C.id!=f);R.set(k)},o=()=>{e(7,O=!O)},v=k=>{let C=l.map(U=>(f===U.id&&(U.color=k),U));R.set(C)},q=k=>{console.log(k!=null?k:"is"),e(5,h=k!=null?k:!h);let C=0;p.childNodes.forEach(U=>C+=U.clientHeight),p.style.setProperty("--taskInfoHeight",`${h?C:0}px`)},F=()=>console.log("input");function N(k){ye[k?"unshift":"push"](()=>{p=k,e(6,p)})}const z=k=>k.color!=s,H=()=>q();return a.$$set=k=>{"class"in k&&e(0,c=k.class),"text"in k&&e(1,i=k.text),"color"in k&&e(2,s=k.color),"disabled"in k&&e(3,r=k.disabled),"id"in k&&e(14,f=k.id),"date"in k&&e(4,_=k.date)},[c,i,s,r,_,h,p,O,n,g,u,o,v,q,f,F,N,z,H]}class Ae extends j{constructor(t){super();K(this,t,$e,Je,Y,{class:0,text:1,color:2,disabled:3,id:14,date:4})}}function Se(a,t,e){const l=a.slice();return l[4]=t[e],l}function qe(a,t,e){const l=a.slice();return l[4]=t[e],l}function Ve(a,t){let e,l,n,c,i,s=M,r;return l=new Ae({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:a,first:null,c(){e=E("li"),Q(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=T(e);W(l.$$.fragment,_),_.forEach(m),this.h()},h(){d(e,"class","task-section__item"),this.first=e},m(f,_){A(f,e,_),X(l,e,null),r=!0},p(f,_){t=f;const h={};_&2&&(h.text=t[4].text),_&2&&(h.color=t[4].color?t[4].color:null),_&2&&(h.id=t[4].id),_&2&&(h.date=t[4].date),l.$set(h)},r(){i=e.getBoundingClientRect()},f(){se(e),s(),ne(e,i)},a(){s(),s=ae(e,i,ce,{duration:300})},i(f){r||(P(l.$$.fragment,f),oe(()=>{c&&c.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),c=Ie(e,t[2],{key:t[4].id}),r=!1},d(f){f&&m(e),Z(l),f&&c&&c.end()}}}function Ue(a,t){let e,l,n,c,i,s=M,r;return l=new Ae({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:a,first:null,c(){e=E("li"),Q(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=T(e);W(l.$$.fragment,_),_.forEach(m),this.h()},h(){d(e,"class","task-section__item"),this.first=e},m(f,_){A(f,e,_),X(l,e,null),r=!0},p(f,_){t=f;const h={};_&2&&(h.text=t[4].text),_&2&&(h.color=t[4].color?t[4].color:null),_&2&&(h.id=t[4].id),_&2&&(h.date=t[4].date),l.$set(h)},r(){i=e.getBoundingClientRect()},f(){se(e),s(),ne(e,i)},a(){s(),s=ae(e,i,ce,{duration:300})},i(f){r||(P(l.$$.fragment,f),oe(()=>{c&&c.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),c=Ie(e,t[2],{key:t[4].id}),r=!1},d(f){f&&m(e),Z(l),f&&c&&c.end()}}}function xe(a){let t,e,l,n=[],c=new Map,i,s=[],r=new Map,f,_,h=a[1].filter(Pe);const p=u=>u[4].id;for(let u=0;u<h.length;u+=1){let o=qe(a,h,u),v=p(o);c.set(v,n[u]=Ve(v,o))}let O=a[1].filter(Be);const g=u=>u[4].id;for(let u=0;u<O.length;u+=1){let o=Se(a,O,u),v=g(o);r.set(v,s[u]=Ue(v,o))}return{c(){t=E("section"),e=E("div"),l=E("ul");for(let u=0;u<n.length;u+=1)n[u].c();i=E("ul");for(let u=0;u<s.length;u+=1)s[u].c();this.h()},l(u){t=y(u,"SECTION",{class:!0});var o=T(t);e=y(o,"DIV",{class:!0});var v=T(e);l=y(v,"UL",{class:!0});var q=T(l);for(let N=0;N<n.length;N+=1)n[N].l(q);q.forEach(m),i=y(v,"UL",{class:!0});var F=T(i);for(let N=0;N<s.length;N+=1)s[N].l(F);F.forEach(m),v.forEach(m),o.forEach(m),this.h()},h(){d(l,"class","task-section__col"),d(i,"class","task-section__col"),d(e,"class","container task-section__grid svelte-q8mvyt"),d(t,"class",f="task-section "+a[0]+" svelte-q8mvyt")},m(u,o){A(u,t,o),D(t,e),D(e,l);for(let v=0;v<n.length;v+=1)n[v].m(l,null);D(e,i);for(let v=0;v<s.length;v+=1)s[v].m(i,null);_=!0},p(u,[o]){if(o&2){h=u[1].filter(Pe),ie();for(let v=0;v<n.length;v+=1)n[v].r();n=G(n,o,p,1,u,h,c,l,ue,Ve,null,qe);for(let v=0;v<n.length;v+=1)n[v].a();re()}if(o&2){O=u[1].filter(Be),ie();for(let v=0;v<s.length;v+=1)s[v].r();s=G(s,o,g,1,u,O,r,i,ue,Ue,null,Se);for(let v=0;v<s.length;v+=1)s[v].a();re()}(!_||o&1&&f!==(f="task-section "+u[0]+" svelte-q8mvyt"))&&d(t,"class",f)},i(u){if(!_){for(let o=0;o<h.length;o+=1)P(n[o]);for(let o=0;o<O.length;o+=1)P(s[o]);_=!0}},o(u){for(let o=0;o<n.length;o+=1)B(n[o]);for(let o=0;o<s.length;o+=1)B(s[o]);_=!1},d(u){u&&m(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<s.length;o+=1)s[o].d()}}}const Pe=a=>!a.done,Be=a=>a.done;function et(a,t,e){let l;J(a,R,s=>e(1,l=s));let{class:n=""}=t;const[c,i]=Ye({duration:s=>Math.sqrt(s*200),fallback(s,r){const f=getComputedStyle(s),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Qe,css:h=>`
					transform: ${_} scale(${h});
					opacity: ${h}
				`}}});return a.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,c,i]}class tt extends j{constructor(t){super();K(this,t,et,xe,Y,{class:0})}}const lt=(a,t)=>{if(t==="dot"){let e=a.getDate(),l=a.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${a.getFullYear()}`}};function Le(a){let t,e,l,n=a[2].text&&Me(a);return{c(){t=E("button"),n&&n.c(),this.h()},l(c){t=y(c,"BUTTON",{class:!0});var i=T(t);n&&n.l(i),i.forEach(m),this.h()},h(){d(t,"class","btn svelte-1yy2xse")},m(c,i){A(c,t,i),n&&n.m(t,null),e||(l=S(t,"click",L(a[6])),e=!0)},p(c,i){c[2].text?n?n.p(c,i):(n=Me(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&m(t),n&&n.d(),e=!1,l()}}}function Me(a){let t=a[2].text+"",e;return{c(){e=ee(t)},l(l){e=te(l,t)},m(l,n){A(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&le(e,t)},d(l){l&&m(e)}}}function st(a){let t,e,l,n,c,i=a[2]&&Le(a);return{c(){t=E("div"),e=E("input"),i&&i.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var r=T(t);e=y(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(m),this.h()},h(){d(e,"placeholder",a[1]),d(e,"class","svelte-1yy2xse"),d(t,"class",l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse"),w(t,"isError",a[5])},m(s,r){A(s,t,r),D(t,e),Oe(e,a[4]),i&&i.m(t,null),a[11](t),n||(c=[S(e,"input",a[9]),S(e,"input",a[7]),S(e,"keydown",a[10])],n=!0)},p(s,[r]){r&2&&d(e,"placeholder",s[1]),r&16&&e.value!==s[4]&&Oe(e,s[4]),s[2]?i?i.p(s,r):(i=Le(s),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse")&&d(t,"class",l),r&37&&w(t,"isError",s[5])},i:M,o:M,d(s){s&&m(t),i&&i.d(),a[11](null),n=!1,Ee(c)}}}function nt(a,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,i,s,r=!1;const f=We(),_=()=>{s?(f("submit",{value:s}),e(4,s="")):e(5,r=!0)},h=()=>{e(5,r=!1)},p=o=>{let v=o.key;v==="Control"&&f("color"),v==="Enter"&&_()};function O(){s=this.value,e(4,s)}const g=o=>p(o);function u(o){ye[o?"unshift":"push"](()=>{i=o,e(3,i)})}return a.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,c=o.btn)},[l,n,c,i,s,r,_,h,p,O,g,u]}class at extends j{constructor(t){super();K(this,t,nt,st,Y,{class:0,placeholder:1,btn:2})}}function Re(a,t,e){const l=a.slice();return l[9]=t[e],l[11]=e,l}function ze(a,t){let e,l,n,c,i=M,s,r,f;return{key:a,first:null,c(){e=E("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),T(e).forEach(m),this.h()},h(){d(e,"class","add-todo__color svelte-1hafqlz"),d(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,h){A(_,e,h),s=!0,r||(f=S(e,"click",L(function(){be(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,h){t=_,(!s||h&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&d(e,"style",l)},r(){c=e.getBoundingClientRect()},f(){se(e),i(),ne(e,c)},a(){i(),i=ae(e,c,ce,{})},i(_){s||(oe(()=>{n||(n=De(e,we,{},!0)),n.run(1)}),s=!0)},o(_){n||(n=De(e,we,{},!1)),n.run(0),s=!1},d(_){_&&m(e),_&&n&&n.end(),r=!1,f()}}}function ot(a){let t,e,l,n,c=[],i=new Map,s,r,f,_,h,p=a[3].filter(a[7]);const O=g=>g[9].id;for(let g=0;g<p.length;g+=1){let u=Re(a,p,g),o=O(u);i.set(o,c[g]=ze(o,u))}return s=new at({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",a[8]),s.$on("submit",a[4]),{c(){t=E("div"),e=E("div"),l=E("span");for(let g=0;g<c.length;g+=1)c[g].c();Q(s.$$.fragment),this.h()},l(g){t=y(g,"DIV",{class:!0});var u=T(t);e=y(u,"DIV",{class:!0});var o=T(e);l=y(o,"SPAN",{class:!0,style:!0}),T(l).forEach(m);for(let v=0;v<c.length;v+=1)c[v].l(o);o.forEach(m),W(s.$$.fragment,u),u.forEach(m),this.h()},h(){d(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),d(l,"style",n=`color: ${a[1]}`),d(e,"class","add-todo__color-list svelte-1hafqlz"),w(e,"isOpen",a[2]),d(t,"class",r="add-todo "+a[0]+" svelte-1hafqlz")},m(g,u){A(g,t,u),D(t,e),D(e,l);for(let o=0;o<c.length;o+=1)c[o].m(e,null);X(s,t,null),f=!0,_||(h=S(l,"click",L(a[6])),_=!0)},p(g,[u]){if((!f||u&2&&n!==(n=`color: ${g[1]}`))&&d(l,"style",n),u&42){p=g[3].filter(g[7]),ie();for(let o=0;o<c.length;o+=1)c[o].r();c=G(c,u,O,1,g,p,i,e,ue,ze,null,Re);for(let o=0;o<c.length;o+=1)c[o].a();re()}u&4&&w(e,"isOpen",g[2]),(!f||u&1&&r!==(r="add-todo "+g[0]+" svelte-1hafqlz"))&&d(t,"class",r)},i(g){if(!f){for(let u=0;u<p.length;u+=1)P(c[u]);P(s.$$.fragment,g),f=!0}},o(g){for(let u=0;u<c.length;u+=1)B(c[u]);B(s.$$.fragment,g),f=!1},d(g){g&&m(t);for(let u=0;u<c.length;u+=1)c[u].d();Z(s),_=!1,h()}}}function it(a,t,e){let l;J(a,Ce,p=>e(3,l=p));let{class:n=""}=t,c="#0029FF",i=!1;const s=p=>{let O={id:Date.now(),text:p.detail.value,color:c,done:!1,date:lt(new Date,"dot")};R.update(g=>g=[O,...g])},r=p=>p&&e(1,c=p),f=()=>e(2,i=!i),_=p=>p.color!=c,h=()=>e(2,i=!i);return a.$$set=p=>{"class"in p&&e(0,n=p.class)},[n,c,i,l,s,r,f,_,h]}class rt extends j{constructor(t){super();K(this,t,it,ot,Y,{class:0})}}function ct(a){let t,e,l,n,c,i,s;return n=new rt({}),i=new tt({props:{class:"mt-50"}}),{c(){t=Xe(),e=E("section"),l=E("div"),Q(n.$$.fragment),Q(i.$$.fragment),this.h()},l(r){Ze('[data-svelte="svelte-1lxmpr"]',document.head).forEach(m),t=Ge(r),e=y(r,"SECTION",{class:!0});var _=T(e);l=y(_,"DIV",{class:!0});var h=T(l);W(n.$$.fragment,h),h.forEach(m),_.forEach(m),W(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",d(l,"class","container"),d(e,"class",c=""+(a[0]+" mt-50 svelte-110abfo"))},m(r,f){A(r,t,f),A(r,e,f),D(e,l),X(n,l,null),X(i,r,f),s=!0},p(r,[f]){(!s||f&1&&c!==(c=""+(r[0]+" mt-50 svelte-110abfo")))&&d(e,"class",c)},i(r){s||(P(n.$$.fragment,r),P(i.$$.fragment,r),s=!0)},o(r){B(n.$$.fragment,r),B(i.$$.fragment,r),s=!1},d(r){r&&m(t),r&&m(e),Z(n),Z(i,r)}}}function ut(a,t,e){let{class:l=""}=t;return a.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class _t extends j{constructor(t){super();K(this,t,ut,ct,Y,{class:0})}}export{_t as default};
