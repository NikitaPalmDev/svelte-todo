import{K as Me,C as Re,S as H,i as j,s as K,e as y,c as E,a as z,d as g,b as h,f as F,D as w,L as A,M as P,N as ke,t as x,g as ee,O as C,h as te,P as Z,Q as He,E as B,R as pe,T as G,U as be,v as Y,w as Q,x as W,V as le,W as se,X as ne,p as U,Y as ae,Z as ye,n as V,_ as Ee,A as X,m as oe,o as ie,$ as je,a0 as re,a1 as ce,a2 as Ke,a3 as ze,a4 as Ye,a5 as Te,a6 as Oe,j as Qe,a7 as We,l as Xe}from"../chunks/vendor-184f9251.js";const L=Re([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),we=Me(L,(n,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=n.filter(s=>s.color).map(s=>s.color).concat(e),i=a.filter((s,r)=>a.indexOf(s)===r).map((s,r)=>({id:r,color:s}));t(i)});function Ce(n,t,e){const l=n.slice();return l[19]=t[e],l}function De(n,t){let e,l,a,o,i;return{key:n,first:null,c(){e=y("li"),l=y("button"),this.h()},l(s){e=E(s,"LI",{class:!0});var r=z(e);l=E(r,"BUTTON",{class:!0,style:!0}),z(l).forEach(g),r.forEach(g),this.h()},h(){h(l,"class","task__color-btn svelte-izfdz2"),h(l,"style",a=`background-color: ${t[19].color}`),h(e,"class","task__color-item svelte-izfdz2"),this.first=e},m(s,r){F(s,e,r),w(e,l),o||(i=A(l,"click",P(function(){ke(t[12](t[19].color))&&t[12](t[19].color).apply(this,arguments)})),o=!0)},p(s,r){t=s,r&260&&a!==(a=`background-color: ${t[19].color}`)&&h(l,"style",a)},d(s){s&&g(e),o=!1,i()}}}function Ze(n){let t,e,l,a,o,i,s,r,u,_,v,k,O,d,c=[],f=new Map,m,I,S,N,R,p,D=n[8].filter(n[17]);const M=b=>b[19].id;for(let b=0;b<D.length;b+=1){let T=Ce(n,D,b),q=M(T);f.set(q,c[b]=De(q,T))}return{c(){t=y("div"),e=y("div"),l=y("p"),a=x(n[1]),o=y("div"),i=y("div"),s=y("span"),r=x(n[4]),u=y("div"),_=y("button"),v=y("span"),k=y("button"),O=y("span"),d=y("ul");for(let b=0;b<c.length;b+=1)c[b].c();I=y("button"),S=y("span"),this.h()},l(b){t=E(b,"DIV",{class:!0});var T=z(t);e=E(T,"DIV",{class:!0});var q=z(e);l=E(q,"P",{class:!0,contenteditable:!0});var fe=z(l);a=ee(fe,n[1]),fe.forEach(g),o=E(q,"DIV",{class:!0});var ue=z(o);i=E(ue,"DIV",{class:!0});var _e=z(i);s=E(_e,"SPAN",{class:!0});var de=z(s);r=ee(de,n[4]),de.forEach(g),_e.forEach(g),ue.forEach(g),q.forEach(g),u=E(T,"DIV",{class:!0});var J=z(u);_=E(J,"BUTTON",{class:!0});var he=z(_);v=E(he,"SPAN",{class:!0}),z(v).forEach(g),he.forEach(g),k=E(J,"BUTTON",{class:!0});var me=z(k);O=E(me,"SPAN",{class:!0}),z(O).forEach(g),me.forEach(g),J.forEach(g),d=E(T,"UL",{class:!0,style:!0});var ve=z(d);for(let $=0;$<c.length;$+=1)c[$].l(ve);ve.forEach(g),I=E(T,"BUTTON",{class:!0});var ge=z(I);S=E(ge,"SPAN",{class:!0}),z(S).forEach(g),ge.forEach(g),T.forEach(g),this.h()},h(){h(l,"class","task__main-content svelte-izfdz2"),h(l,"contenteditable",n[7]),h(s,"class","svelte-izfdz2"),h(i,"class","task__info-content svelte-izfdz2"),h(o,"class","task__info svelte-izfdz2"),h(e,"class","task__main svelte-izfdz2"),h(v,"class","svg-image-del svelte-izfdz2"),h(_,"class","task__menu-btn task__menu-btn_del svelte-izfdz2"),h(O,"class","svg-image-pen svelte-izfdz2"),h(k,"class","task__menu-btn task__menu-btn_edit svelte-izfdz2"),C(k,"isSelect",n[7]),h(u,"class","task__circle task__menu svelte-izfdz2"),C(u,"isOpen",n[7]),h(d,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-izfdz2"),h(d,"style",m=`background-color: ${n[2]}`),C(d,"isOpen",n[7]),h(S,"class","svelte-izfdz2"),h(I,"class","task__info-open svelte-izfdz2"),C(I,"isHidden",n[7]),h(t,"class",N="task "+n[0]+" svelte-izfdz2"),C(t,"isDisabled",n[3]),C(t,"isOpen",n[5])},m(b,T){F(b,t,T),w(t,e),w(e,l),w(l,a),w(e,o),w(o,i),w(i,s),w(s,r),n[16](o),w(t,u),w(u,_),w(_,v),w(u,k),w(k,O),w(t,d);for(let q=0;q<c.length;q+=1)c[q].m(d,null);w(t,I),w(I,S),R||(p=[A(l,"input",n[15]),A(e,"click",n[9]),A(_,"click",P(n[10])),A(k,"click",P(n[11])),A(I,"click",P(n[13]))],R=!0)},p(b,[T]){T&2&&te(a,b[1]),T&128&&h(l,"contenteditable",b[7]),T&16&&te(r,b[4]),T&128&&C(k,"isSelect",b[7]),T&128&&C(u,"isOpen",b[7]),T&4356&&(D=b[8].filter(b[17]),c=Z(c,T,M,1,b,D,f,d,He,De,null,Ce)),T&4&&m!==(m=`background-color: ${b[2]}`)&&h(d,"style",m),T&128&&C(d,"isOpen",b[7]),T&128&&C(I,"isHidden",b[7]),T&1&&N!==(N="task "+b[0]+" svelte-izfdz2")&&h(t,"class",N),T&9&&C(t,"isDisabled",b[3]),T&33&&C(t,"isOpen",b[5])},i:B,o:B,d(b){b&&g(t),n[16](null);for(let T=0;T<c.length;T+=1)c[T].d();R=!1,pe(p)}}}function Ge(n,t,e){let l,a;G(n,L,p=>e(18,l=p)),G(n,we,p=>e(8,a=p));let{class:o=""}=t,{text:i=""}=t,{color:s="#0029FF"}=t,{disabled:r=!1}=t,{id:u=null}=t,{date:_=""}=t,v=!1,k,O=!1;const d=()=>{if(O===!1){let p=l.map(D=>(u===D.id&&(D.done=!D.done),D));L.set(p)}},c=()=>{let p=l.filter(D=>D.id!=u);L.set(p)},f=()=>{e(7,O=!O)},m=p=>{let D=l.map(M=>(u===M.id&&(M.color=p),M));L.set(D)},I=()=>{e(5,v=!v);let p=0;k.childNodes.forEach(D=>p+=D.clientHeight),k.style.setProperty("--taskInfoHeight",`${v?p:0}px`)},S=()=>console.log("input");function N(p){be[p?"unshift":"push"](()=>{k=p,e(6,k)})}const R=p=>p.color!=s;return n.$$set=p=>{"class"in p&&e(0,o=p.class),"text"in p&&e(1,i=p.text),"color"in p&&e(2,s=p.color),"disabled"in p&&e(3,r=p.disabled),"id"in p&&e(14,u=p.id),"date"in p&&e(4,_=p.date)},[o,i,s,r,_,v,k,O,a,d,c,f,m,I,u,S,N,R]}class Ie extends H{constructor(t){super();j(this,t,Ge,Ze,K,{class:0,text:1,color:2,disabled:3,id:14,date:4})}}function Ne(n,t,e){const l=n.slice();return l[4]=t[e],l}function Fe(n,t,e){const l=n.slice();return l[4]=t[e],l}function Ae(n,t){let e,l,a,o,i,s=B,r;return l=new Ie({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:n,first:null,c(){e=y("li"),Y(l.$$.fragment),this.h()},l(u){e=E(u,"LI",{class:!0});var _=z(e);Q(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(u,_){F(u,e,_),W(l,e,null),r=!0},p(u,_){t=u;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){le(e),s(),se(e,i)},a(){s(),s=ne(e,i,re,{duration:300})},i(u){r||(U(l.$$.fragment,u),ae(()=>{o&&o.end(1),a=ye(e,t[3],{key:t[4].id}),a.start()}),r=!0)},o(u){V(l.$$.fragment,u),a&&a.invalidate(),o=Ee(e,t[2],{key:t[4].id}),r=!1},d(u){u&&g(e),X(l),u&&o&&o.end()}}}function Se(n,t){let e,l,a,o,i,s=B,r;return l=new Ie({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:n,first:null,c(){e=y("li"),Y(l.$$.fragment),this.h()},l(u){e=E(u,"LI",{class:!0});var _=z(e);Q(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(u,_){F(u,e,_),W(l,e,null),r=!0},p(u,_){t=u;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){le(e),s(),se(e,i)},a(){s(),s=ne(e,i,re,{duration:300})},i(u){r||(U(l.$$.fragment,u),ae(()=>{o&&o.end(1),a=ye(e,t[3],{key:t[4].id}),a.start()}),r=!0)},o(u){V(l.$$.fragment,u),a&&a.invalidate(),o=Ee(e,t[2],{key:t[4].id}),r=!1},d(u){u&&g(e),X(l),u&&o&&o.end()}}}function Je(n){let t,e,l,a=[],o=new Map,i,s=[],r=new Map,u,_,v=n[1].filter(qe);const k=c=>c[4].id;for(let c=0;c<v.length;c+=1){let f=Fe(n,v,c),m=k(f);o.set(m,a[c]=Ae(m,f))}let O=n[1].filter(Ue);const d=c=>c[4].id;for(let c=0;c<O.length;c+=1){let f=Ne(n,O,c),m=d(f);r.set(m,s[c]=Se(m,f))}return{c(){t=y("section"),e=y("div"),l=y("ul");for(let c=0;c<a.length;c+=1)a[c].c();i=y("ul");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){t=E(c,"SECTION",{class:!0});var f=z(t);e=E(f,"DIV",{class:!0});var m=z(e);l=E(m,"UL",{class:!0});var I=z(l);for(let N=0;N<a.length;N+=1)a[N].l(I);I.forEach(g),i=E(m,"UL",{class:!0});var S=z(i);for(let N=0;N<s.length;N+=1)s[N].l(S);S.forEach(g),m.forEach(g),f.forEach(g),this.h()},h(){h(l,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-q8mvyt"),h(t,"class",u="task-section "+n[0]+" svelte-q8mvyt")},m(c,f){F(c,t,f),w(t,e),w(e,l);for(let m=0;m<a.length;m+=1)a[m].m(l,null);w(e,i);for(let m=0;m<s.length;m+=1)s[m].m(i,null);_=!0},p(c,[f]){if(f&2){v=c[1].filter(qe),oe();for(let m=0;m<a.length;m+=1)a[m].r();a=Z(a,f,k,1,c,v,o,l,ce,Ae,null,Fe);for(let m=0;m<a.length;m+=1)a[m].a();ie()}if(f&2){O=c[1].filter(Ue),oe();for(let m=0;m<s.length;m+=1)s[m].r();s=Z(s,f,d,1,c,O,r,i,ce,Se,null,Ne);for(let m=0;m<s.length;m+=1)s[m].a();ie()}(!_||f&1&&u!==(u="task-section "+c[0]+" svelte-q8mvyt"))&&h(t,"class",u)},i(c){if(!_){for(let f=0;f<v.length;f+=1)U(a[f]);for(let f=0;f<O.length;f+=1)U(s[f]);_=!0}},o(c){for(let f=0;f<a.length;f+=1)V(a[f]);for(let f=0;f<s.length;f+=1)V(s[f]);_=!1},d(c){c&&g(t);for(let f=0;f<a.length;f+=1)a[f].d();for(let f=0;f<s.length;f+=1)s[f].d()}}}const qe=n=>!n.done,Ue=n=>n.done;function $e(n,t,e){let l;G(n,L,s=>e(1,l=s));let{class:a=""}=t;const[o,i]=je({duration:s=>Math.sqrt(s*200),fallback(s,r){const u=getComputedStyle(s),_=u.transform==="none"?"":u.transform;return{duration:600,easing:Ke,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return n.$$set=s=>{"class"in s&&e(0,a=s.class)},[a,l,o,i]}class xe extends H{constructor(t){super();j(this,t,$e,Je,K,{class:0})}}const et=(n,t)=>{if(t==="dot"){let e=n.getDate(),l=n.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${n.getFullYear()}`}};function Ve(n){let t,e,l,a=n[2].text&&Pe(n);return{c(){t=y("button"),a&&a.c(),this.h()},l(o){t=E(o,"BUTTON",{class:!0});var i=z(t);a&&a.l(i),i.forEach(g),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(o,i){F(o,t,i),a&&a.m(t,null),e||(l=A(t,"click",P(n[6])),e=!0)},p(o,i){o[2].text?a?a.p(o,i):(a=Pe(o),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(o){o&&g(t),a&&a.d(),e=!1,l()}}}function Pe(n){let t=n[2].text+"",e;return{c(){e=x(t)},l(l){e=ee(l,t)},m(l,a){F(l,e,a)},p(l,a){a&4&&t!==(t=l[2].text+"")&&te(e,t)},d(l){l&&g(e)}}}function tt(n){let t,e,l,a,o,i=n[2]&&Ve(n);return{c(){t=y("div"),e=y("input"),i&&i.c(),this.h()},l(s){t=E(s,"DIV",{class:!0});var r=z(t);e=E(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(g),this.h()},h(){h(e,"placeholder",n[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse"),C(t,"isError",n[5])},m(s,r){F(s,t,r),w(t,e),ze(e,n[4]),i&&i.m(t,null),n[11](t),a||(o=[A(e,"input",n[9]),A(e,"input",n[7]),A(e,"keydown",n[10])],a=!0)},p(s,[r]){r&2&&h(e,"placeholder",s[1]),r&16&&e.value!==s[4]&&ze(e,s[4]),s[2]?i?i.p(s,r):(i=Ve(s),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),r&37&&C(t,"isError",s[5])},i:B,o:B,d(s){s&&g(t),i&&i.d(),n[11](null),a=!1,pe(o)}}}function lt(n,t,e){let{class:l=""}=t,{placeholder:a="Placeholer"}=t,{btn:o=null}=t,i,s,r=!1;const u=Ye(),_=()=>{s?(u("submit",{value:s}),e(4,s="")):e(5,r=!0)},v=()=>{e(5,r=!1)},k=f=>{let m=f.key;m==="Control"&&u("color"),m==="Enter"&&_()};function O(){s=this.value,e(4,s)}const d=f=>k(f);function c(f){be[f?"unshift":"push"](()=>{i=f,e(3,i)})}return n.$$set=f=>{"class"in f&&e(0,l=f.class),"placeholder"in f&&e(1,a=f.placeholder),"btn"in f&&e(2,o=f.btn)},[l,a,o,i,s,r,_,v,k,O,d,c]}class st extends H{constructor(t){super();j(this,t,lt,tt,K,{class:0,placeholder:1,btn:2})}}function Be(n,t,e){const l=n.slice();return l[9]=t[e],l[11]=e,l}function Le(n,t){let e,l,a,o,i=B,s,r,u;return{key:n,first:null,c(){e=y("button"),this.h()},l(_){e=E(_,"BUTTON",{class:!0,style:!0}),z(e).forEach(g),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){F(_,e,v),s=!0,r||(u=A(e,"click",P(function(){ke(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,v){t=_,(!s||v&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){o=e.getBoundingClientRect()},f(){le(e),i(),se(e,o)},a(){i(),i=ne(e,o,re,{})},i(_){s||(ae(()=>{a||(a=Te(e,Oe,{},!0)),a.run(1)}),s=!0)},o(_){a||(a=Te(e,Oe,{},!1)),a.run(0),s=!1},d(_){_&&g(e),_&&a&&a.end(),r=!1,u()}}}function nt(n){let t,e,l,a,o=[],i=new Map,s,r,u,_,v,k=n[3].filter(n[7]);const O=d=>d[9].id;for(let d=0;d<k.length;d+=1){let c=Be(n,k,d),f=O(c);i.set(f,o[d]=Le(f,c))}return s=new st({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",n[8]),s.$on("submit",n[4]),{c(){t=y("div"),e=y("div"),l=y("span");for(let d=0;d<o.length;d+=1)o[d].c();Y(s.$$.fragment),this.h()},l(d){t=E(d,"DIV",{class:!0});var c=z(t);e=E(c,"DIV",{class:!0});var f=z(e);l=E(f,"SPAN",{class:!0,style:!0}),z(l).forEach(g);for(let m=0;m<o.length;m+=1)o[m].l(f);f.forEach(g),Q(s.$$.fragment,c),c.forEach(g),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",a=`color: ${n[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),C(e,"isOpen",n[2]),h(t,"class",r="add-todo "+n[0]+" svelte-1hafqlz")},m(d,c){F(d,t,c),w(t,e),w(e,l);for(let f=0;f<o.length;f+=1)o[f].m(e,null);W(s,t,null),u=!0,_||(v=A(l,"click",P(n[6])),_=!0)},p(d,[c]){if((!u||c&2&&a!==(a=`color: ${d[1]}`))&&h(l,"style",a),c&42){k=d[3].filter(d[7]),oe();for(let f=0;f<o.length;f+=1)o[f].r();o=Z(o,c,O,1,d,k,i,e,ce,Le,null,Be);for(let f=0;f<o.length;f+=1)o[f].a();ie()}c&4&&C(e,"isOpen",d[2]),(!u||c&1&&r!==(r="add-todo "+d[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(d){if(!u){for(let c=0;c<k.length;c+=1)U(o[c]);U(s.$$.fragment,d),u=!0}},o(d){for(let c=0;c<o.length;c+=1)V(o[c]);V(s.$$.fragment,d),u=!1},d(d){d&&g(t);for(let c=0;c<o.length;c+=1)o[c].d();X(s),_=!1,v()}}}function at(n,t,e){let l;G(n,we,k=>e(3,l=k));let{class:a=""}=t,o="#0029FF",i=!1;const s=k=>{let O={id:Date.now(),text:k.detail.value,color:o,done:!1,date:et(new Date,"dot")};L.update(d=>d=[O,...d])},r=k=>k&&e(1,o=k),u=()=>e(2,i=!i),_=k=>k.color!=o,v=()=>e(2,i=!i);return n.$$set=k=>{"class"in k&&e(0,a=k.class)},[a,o,i,l,s,r,u,_,v]}class ot extends H{constructor(t){super();j(this,t,at,nt,K,{class:0})}}function it(n){let t,e,l,a,o,i,s;return a=new ot({}),i=new xe({props:{class:"mt-50"}}),{c(){t=Qe(),e=y("section"),l=y("div"),Y(a.$$.fragment),Y(i.$$.fragment),this.h()},l(r){We('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Xe(r),e=E(r,"SECTION",{class:!0});var _=z(e);l=E(_,"DIV",{class:!0});var v=z(l);Q(a.$$.fragment,v),v.forEach(g),_.forEach(g),Q(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",o=""+(n[0]+" mt-50 svelte-110abfo"))},m(r,u){F(r,t,u),F(r,e,u),w(e,l),W(a,l,null),W(i,r,u),s=!0},p(r,[u]){(!s||u&1&&o!==(o=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",o)},i(r){s||(U(a.$$.fragment,r),U(i.$$.fragment,r),s=!0)},o(r){V(a.$$.fragment,r),V(i.$$.fragment,r),s=!1},d(r){r&&g(t),r&&g(e),X(a),X(i,r)}}}function rt(n,t,e){let{class:l=""}=t;return n.$$set=a=>{"class"in a&&e(0,l=a.class)},[l]}class ft extends H{constructor(t){super();j(this,t,rt,it,K,{class:0})}}export{ft as default};
