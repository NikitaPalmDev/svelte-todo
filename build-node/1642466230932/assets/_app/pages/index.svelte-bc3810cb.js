import{K as Me,C as ze,S as X,i as Y,L as He,e as T,c as w,a as C,d as k,b as m,f as U,D as O,M as S,N as L,O as ve,t as ke,g as ge,P as I,Q as le,h as be,R as se,T as Xe,E as R,U as Ee,V as ne,W as ye,s as ae,v as Q,w as W,x as Z,X as ie,Y as re,Z as ce,p as q,_ as ue,$ as Te,n as P,a0 as we,A as G,m as fe,o as _e,a1 as Ye,a2 as de,a3 as he,a4 as Qe,a5 as We,a6 as Ce,a7 as Ie,j as Ze,a8 as Ge,l as Je}from"../chunks/vendor-6ec25659.js";const B=ze([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=Me(B,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,r)=>n.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(i)});function De(s,t,e){const l=s.slice();return l[33]=t[e],l}function Ae(s,t){let e,l,n,c,i;return{key:s,first:null,c(){e=T("li"),l=T("button"),this.h()},l(a){e=w(a,"LI",{class:!0});var r=C(e);l=w(r,"BUTTON",{class:!0,style:!0}),C(l).forEach(k),r.forEach(k),this.h()},h(){m(l,"class","task__color-btn svelte-pmttuj"),m(l,"style",n=`background-color: ${t[33].color}`),m(e,"class","task__color-item svelte-pmttuj"),this.first=e},m(a,r){U(a,e,r),O(e,l),c||(i=S(l,"click",L(function(){ve(t[14](t[33].color))&&t[14](t[33].color).apply(this,arguments)})),c=!0)},p(a,r){t=a,r[0]&1028&&n!==(n=`background-color: ${t[33].color}`)&&m(l,"style",n)},d(a){a&&k(e),c=!1,i()}}}function $e(s){let t,e,l,n,c,i,a,r,f,_,v,E,y,h,o,u=[],p=new Map,V,F,A,K,M,z,H=s[10].filter(s[23]);const J=g=>g[33].id;for(let g=0;g<H.length;g+=1){let b=De(s,H,g),j=J(b);p.set(j,u[g]=Ae(j,b))}return{c(){t=T("article"),e=T("div"),l=T("div"),n=T("textarea"),i=T("div"),a=T("div"),r=T("span"),f=ke(s[4]),_=T("div"),v=T("button"),E=T("span"),y=T("button"),h=T("span"),o=T("ul");for(let g=0;g<u.length;g+=1)u[g].c();F=T("button"),A=T("span"),this.h()},l(g){t=w(g,"ARTICLE",{class:!0});var b=C(t);e=w(b,"DIV",{class:!0});var j=C(e);l=w(j,"DIV",{class:!0});var $=C(l);n=w($,"TEXTAREA",{class:!0,rows:!0}),C(n).forEach(k),$.forEach(k),i=w(j,"DIV",{class:!0});var x=C(i);a=w(x,"DIV",{class:!0});var ee=C(a);r=w(ee,"SPAN",{class:!0});var te=C(r);f=ge(te,s[4]),te.forEach(k),ee.forEach(k),x.forEach(k),j.forEach(k),_=w(b,"DIV",{class:!0});var d=C(_);v=w(d,"BUTTON",{class:!0});var D=C(v);E=w(D,"SPAN",{class:!0}),C(E).forEach(k),D.forEach(k),y=w(d,"BUTTON",{class:!0});var N=C(y);h=w(N,"SPAN",{class:!0}),C(h).forEach(k),N.forEach(k),d.forEach(k),o=w(b,"UL",{class:!0,style:!0});var me=C(o);for(let oe=0;oe<u.length;oe+=1)u[oe].l(me);me.forEach(k),F=w(b,"BUTTON",{class:!0});var pe=C(F);A=w(pe,"SPAN",{class:!0}),C(A).forEach(k),pe.forEach(k),b.forEach(k),this.h()},h(){m(n,"class","task__main-content textarea-resize svelte-pmttuj"),n.disabled=c=!s[7],m(n,"rows","0"),m(l,"class","task__main-container svelte-pmttuj"),m(r,"class","svelte-pmttuj"),m(a,"class","task__info-content svelte-pmttuj"),m(i,"class","task__info svelte-pmttuj"),m(e,"class","task__main svelte-pmttuj"),I(e,"isEdit",s[7]),m(E,"class","svg-image-del svelte-pmttuj"),m(v,"class","task__menu-btn task__menu-btn_del svelte-pmttuj"),m(h,"class","svg-image-pen svelte-pmttuj"),m(y,"class","task__menu-btn task__menu-btn_edit svelte-pmttuj"),I(y,"isSelect",s[7]),I(y,"isChanged",s[8]),I(y,"isSave",s[9]),m(_,"class","task__circle task__menu svelte-pmttuj"),I(_,"isOpen",s[7]),m(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-pmttuj"),m(o,"style",V=`background-color: ${s[2]}`),I(o,"isOpen",s[7]),m(A,"class","svelte-pmttuj"),m(F,"class","task__info-open svelte-pmttuj"),I(F,"isHidden",s[7]),m(t,"class",K="task "+s[1]+" svelte-pmttuj"),I(t,"isDisabled",s[3]),I(t,"isInfoOpen",s[5]),I(t,"isEdit",s[7])},m(g,b){U(g,t,b),O(t,e),O(e,l),O(l,n),le(n,s[0]),O(e,i),O(i,a),O(a,r),O(r,f),s[21](i),O(t,_),O(_,v),O(v,E),O(_,y),O(y,h),O(t,o);for(let j=0;j<u.length;j+=1)u[j].m(o,null);O(t,F),O(F,A),M||(z=[S(n,"input",s[19]),S(n,"input",s[20]),S(n,"keydown",s[16]),S(e,"click",s[11]),S(v,"click",L(s[12])),S(y,"click",L(s[22])),S(F,"click",L(s[24]))],M=!0)},p(g,b){b[0]&128&&c!==(c=!g[7])&&(n.disabled=c),b[0]&1&&le(n,g[0]),b[0]&16&&be(f,g[4]),b[0]&128&&I(e,"isEdit",g[7]),b[0]&128&&I(y,"isSelect",g[7]),b[0]&256&&I(y,"isChanged",g[8]),b[0]&512&&I(y,"isSave",g[9]),b[0]&128&&I(_,"isOpen",g[7]),b[0]&17412&&(H=g[10].filter(g[23]),u=se(u,b,J,1,g,H,p,o,Xe,Ae,null,De)),b[0]&4&&V!==(V=`background-color: ${g[2]}`)&&m(o,"style",V),b[0]&128&&I(o,"isOpen",g[7]),b[0]&128&&I(F,"isHidden",g[7]),b[0]&2&&K!==(K="task "+g[1]+" svelte-pmttuj")&&m(t,"class",K),b[0]&10&&I(t,"isDisabled",g[3]),b[0]&34&&I(t,"isInfoOpen",g[5]),b[0]&130&&I(t,"isEdit",g[7])},i:R,o:R,d(g){g&&k(t),s[21](null);for(let b=0;b<u.length;b+=1)u[b].d();M=!1,Ee(z)}}}let Fe=new Set;function xe(){Fe.forEach(s=>{s.edit(!1)})}function et(s,t,e){let l,n;ne(s,B,d=>e(26,l=d)),ne(s,Oe,d=>e(10,n=d));let{class:c=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,v=i,E=!1,y,h=!1,o=!1,u=!1,p;const V=()=>{if(h===!1){let d=l.map(D=>(f===D.id&&(D.done=!D.done),D));B.set(d)}},F=()=>{let d=l.filter(D=>D.id!=f);B.set(d)};function A(d){e(7,h=d!=null?d:!h),h===!1&&z()}const K=d=>{let D=l.map(N=>(f===N.id&&(N.color=d),N));B.set(D)};function M(d){e(5,E=d!=null?d:!E);let D=0;y.childNodes.forEach(N=>D+=N.clientHeight),y.style.setProperty("--taskInfoHeight",`${E?D:0}px`)}function z(){o&&H(i).then(()=>{e(8,o=!1),clearTimeout(p),e(9,u=!0),p=setTimeout(()=>{e(9,u=!1)},500)})}function H(d){if(typeof d=="string")return new Promise(D=>{B.set(l.map(N=>(N.id===f&&(N.text=d),N))),D()});throw new Error("The value is not equal to the string")}function J(d){let D=d.ctrlKey?!1:d.metaKey,N=d.keyCode;if(D&&N===83)return d.preventDefault(),z(),!1}function g(d=i){return e(8,o=d!==v)}Fe.add({save(){z()},edit(d){A(d)}});function b(){i=this.value,e(0,i)}const j=()=>g();function $(d){ye[d?"unshift":"push"](()=>{y=d,e(6,y)})}const x=()=>{h===!1&&xe(),A()},ee=d=>d.color!=a,te=()=>M();return s.$$set=d=>{"class"in d&&e(1,c=d.class),"text"in d&&e(0,i=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(18,f=d.id),"date"in d&&e(4,_=d.date)},[i,c,a,r,_,E,y,h,o,u,n,V,F,A,K,M,J,g,f,b,j,$,x,ee,te]}class Ne extends X{constructor(t){super();Y(this,t,et,$e,He,{class:1,text:0,color:2,disabled:3,id:18,date:4},null,[-1,-1])}}function Se(s,t,e){const l=s.slice();return l[4]=t[e],l}function je(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ue(s,t){let e,l,n,c,i,a=R,r;return l=new Ne({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=T("li"),Q(l.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=C(e);W(l.$$.fragment,_),_.forEach(k),this.h()},h(){m(e,"class","task-section__item-box svelte-p1ezao"),this.first=e},m(f,_){U(f,e,_),Z(l,e,null),r=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){ie(e),a(),re(e,i)},a(){a(),a=ce(e,i,de,{duration:300})},i(f){r||(q(l.$$.fragment,f),ue(()=>{c&&c.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){P(l.$$.fragment,f),n&&n.invalidate(),c=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),G(l),f&&c&&c.end()}}}function Ve(s,t){let e,l,n,c,i,a=R,r;return l=new Ne({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=T("li"),Q(l.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=C(e);W(l.$$.fragment,_),_.forEach(k),this.h()},h(){m(e,"class","task-section__item-box svelte-p1ezao"),this.first=e},m(f,_){U(f,e,_),Z(l,e,null),r=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){ie(e),a(),re(e,i)},a(){a(),a=ce(e,i,de,{duration:300})},i(f){r||(q(l.$$.fragment,f),ue(()=>{c&&c.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){P(l.$$.fragment,f),n&&n.invalidate(),c=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),G(l),f&&c&&c.end()}}}function tt(s){let t,e,l,n=[],c=new Map,i,a=[],r=new Map,f,_,v=s[1].filter(qe);const E=o=>o[4].id;for(let o=0;o<v.length;o+=1){let u=je(s,v,o),p=E(u);c.set(p,n[o]=Ue(p,u))}let y=s[1].filter(Pe);const h=o=>o[4].id;for(let o=0;o<y.length;o+=1){let u=Se(s,y,o),p=h(u);r.set(p,a[o]=Ve(p,u))}return{c(){t=T("section"),e=T("div"),l=T("ul");for(let o=0;o<n.length;o+=1)n[o].c();i=T("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=w(o,"SECTION",{class:!0});var u=C(t);e=w(u,"DIV",{class:!0});var p=C(e);l=w(p,"UL",{class:!0});var V=C(l);for(let A=0;A<n.length;A+=1)n[A].l(V);V.forEach(k),i=w(p,"UL",{class:!0});var F=C(i);for(let A=0;A<a.length;A+=1)a[A].l(F);F.forEach(k),p.forEach(k),u.forEach(k),this.h()},h(){m(l,"class","task-section__col"),m(i,"class","task-section__col"),m(e,"class","container task-section__grid svelte-p1ezao"),m(t,"class",f="task-section "+s[0]+" svelte-p1ezao")},m(o,u){U(o,t,u),O(t,e),O(e,l);for(let p=0;p<n.length;p+=1)n[p].m(l,null);O(e,i);for(let p=0;p<a.length;p+=1)a[p].m(i,null);_=!0},p(o,[u]){if(u&2){v=o[1].filter(qe),fe();for(let p=0;p<n.length;p+=1)n[p].r();n=se(n,u,E,1,o,v,c,l,he,Ue,null,je);for(let p=0;p<n.length;p+=1)n[p].a();_e()}if(u&2){y=o[1].filter(Pe),fe();for(let p=0;p<a.length;p+=1)a[p].r();a=se(a,u,h,1,o,y,r,i,he,Ve,null,Se);for(let p=0;p<a.length;p+=1)a[p].a();_e()}(!_||u&1&&f!==(f="task-section "+o[0]+" svelte-p1ezao"))&&m(t,"class",f)},i(o){if(!_){for(let u=0;u<v.length;u+=1)q(n[u]);for(let u=0;u<y.length;u+=1)q(a[u]);_=!0}},o(o){for(let u=0;u<n.length;u+=1)P(n[u]);for(let u=0;u<a.length;u+=1)P(a[u]);_=!1},d(o){o&&k(t);for(let u=0;u<n.length;u+=1)n[u].d();for(let u=0;u<a.length;u+=1)a[u].d()}}}const qe=s=>!s.done,Pe=s=>s.done;function lt(s,t,e){let l;ne(s,B,a=>e(1,l=a));let{class:n=""}=t;const[c,i]=Ye({duration:a=>Math.sqrt(a*200),fallback(a,r){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Qe,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return s.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,l,c,i]}class st extends X{constructor(t){super();Y(this,t,lt,tt,ae,{class:0})}}const nt=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Be(s){let t,e,l,n=s[2].text&&Le(s);return{c(){t=T("button"),n&&n.c(),this.h()},l(c){t=w(c,"BUTTON",{class:!0});var i=C(t);n&&n.l(i),i.forEach(k),this.h()},h(){m(t,"class","btn svelte-ckief0")},m(c,i){U(c,t,i),n&&n.m(t,null),e||(l=S(t,"click",L(s[6])),e=!0)},p(c,i){c[2].text?n?n.p(c,i):(n=Le(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&k(t),n&&n.d(),e=!1,l()}}}function Le(s){let t=s[2].text+"",e;return{c(){e=ke(t)},l(l){e=ge(l,t)},m(l,n){U(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&be(e,t)},d(l){l&&k(e)}}}function at(s){let t,e,l,n,c,i=s[2]&&Be(s);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(a){t=w(a,"DIV",{class:!0});var r=C(t);e=w(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){m(e,"placeholder",s[1]),m(e,"class","svelte-ckief0"),m(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-ckief0"),I(t,"isError",s[5])},m(a,r){U(a,t,r),O(t,e),le(e,s[4]),i&&i.m(t,null),s[10](t),n||(c=[S(e,"input",s[9]),S(e,"input",s[7]),S(e,"keydown",s[8])],n=!0)},p(a,[r]){r&2&&m(e,"placeholder",a[1]),r&16&&e.value!==a[4]&&le(e,a[4]),a[2]?i?i.p(a,r):(i=Be(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-ckief0")&&m(t,"class",l),r&37&&I(t,"isError",a[5])},i:R,o:R,d(a){a&&k(t),i&&i.d(),s[10](null),n=!1,Ee(c)}}}function ot(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,i,a,r=!1;const f=We(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,r=!0)},v=()=>{e(5,r=!1)},E=o=>{let u=o.key,p=o.ctrlKey,V=o.shiftKey;o.keyCode,p&&V&&f("color"),u==="Enter"&&_()};function y(){a=this.value,e(4,a)}function h(o){ye[o?"unshift":"push"](()=>{i=o,e(3,i)})}return s.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,c=o.btn)},[l,n,c,i,a,r,_,v,E,y,h]}class it extends X{constructor(t){super();Y(this,t,ot,at,ae,{class:0,placeholder:1,btn:2})}}function Re(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function Ke(s,t){let e,l,n,c,i=R,a,r,f;return{key:s,first:null,c(){e=T("button"),this.h()},l(_){e=w(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(k),this.h()},h(){m(e,"class","add-todo__color svelte-10cwdk9"),m(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){U(_,e,v),a=!0,r||(f=S(e,"click",L(function(){ve(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,v){t=_,(!a||v&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",l)},r(){c=e.getBoundingClientRect()},f(){ie(e),i(),re(e,c)},a(){i(),i=ce(e,c,de,{})},i(_){a||(ue(()=>{n||(n=Ce(e,Ie,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ce(e,Ie,{},!1)),n.run(0),a=!1},d(_){_&&k(e),_&&n&&n.end(),r=!1,f()}}}function rt(s){let t,e,l,n,c=[],i=new Map,a,r,f,_,v,E=s[3].filter(s[7]);const y=h=>h[9].id;for(let h=0;h<E.length;h+=1){let o=Re(s,E,h),u=y(o);i.set(u,c[h]=Ke(u,o))}return a=new it({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",s[8]),a.$on("submit",s[4]),{c(){t=T("div"),e=T("div"),l=T("span");for(let h=0;h<c.length;h+=1)c[h].c();Q(a.$$.fragment),this.h()},l(h){t=w(h,"DIV",{class:!0});var o=C(t);e=w(o,"DIV",{class:!0});var u=C(e);l=w(u,"SPAN",{class:!0,style:!0}),C(l).forEach(k);for(let p=0;p<c.length;p+=1)c[p].l(u);u.forEach(k),W(a.$$.fragment,o),o.forEach(k),this.h()},h(){m(l,"class","add-todo__color add-todo__color_main svelte-10cwdk9"),m(l,"style",n=`color: ${s[1]}`),m(e,"class","add-todo__color-list svelte-10cwdk9"),I(e,"isOpen",s[2]),m(t,"class",r="add-todo "+s[0]+" svelte-10cwdk9")},m(h,o){U(h,t,o),O(t,e),O(e,l);for(let u=0;u<c.length;u+=1)c[u].m(e,null);Z(a,t,null),f=!0,_||(v=S(l,"click",L(s[6])),_=!0)},p(h,[o]){if((!f||o&2&&n!==(n=`color: ${h[1]}`))&&m(l,"style",n),o&42){E=h[3].filter(h[7]),fe();for(let u=0;u<c.length;u+=1)c[u].r();c=se(c,o,y,1,h,E,i,e,he,Ke,null,Re);for(let u=0;u<c.length;u+=1)c[u].a();_e()}o&4&&I(e,"isOpen",h[2]),(!f||o&1&&r!==(r="add-todo "+h[0]+" svelte-10cwdk9"))&&m(t,"class",r)},i(h){if(!f){for(let o=0;o<E.length;o+=1)q(c[o]);q(a.$$.fragment,h),f=!0}},o(h){for(let o=0;o<c.length;o+=1)P(c[o]);P(a.$$.fragment,h),f=!1},d(h){h&&k(t);for(let o=0;o<c.length;o+=1)c[o].d();G(a),_=!1,v()}}}function ct(s,t,e){let l;ne(s,Oe,E=>e(3,l=E));let{class:n=""}=t,c="#0029FF",i=!1;const a=E=>{let y={id:Date.now(),text:E.detail.value,color:c,done:!1,date:nt(new Date,"dot")};B.update(h=>h=[y,...h])},r=E=>E&&e(1,c=E),f=()=>e(2,i=!i),_=E=>E.color!=c,v=()=>e(2,i=!i);return s.$$set=E=>{"class"in E&&e(0,n=E.class)},[n,c,i,l,a,r,f,_,v]}class ut extends X{constructor(t){super();Y(this,t,ct,rt,ae,{class:0})}}function ft(s){let t,e,l,n,c,i,a;return n=new ut({}),i=new st({props:{class:"mt-50"}}),{c(){t=Ze(),e=T("section"),l=T("div"),Q(n.$$.fragment),Q(i.$$.fragment),this.h()},l(r){Ge('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=Je(r),e=w(r,"SECTION",{class:!0});var _=C(e);l=w(_,"DIV",{class:!0});var v=C(l);W(n.$$.fragment,v),v.forEach(k),_.forEach(k),W(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(l,"class","container"),m(e,"class",c=""+(s[0]+" mt-50 svelte-veaq2y"))},m(r,f){U(r,t,f),U(r,e,f),O(e,l),Z(n,l,null),Z(i,r,f),a=!0},p(r,[f]){(!a||f&1&&c!==(c=""+(r[0]+" mt-50 svelte-veaq2y")))&&m(e,"class",c)},i(r){a||(q(n.$$.fragment,r),q(i.$$.fragment,r),a=!0)},o(r){P(n.$$.fragment,r),P(i.$$.fragment,r),a=!1},d(r){r&&k(t),r&&k(e),G(n),G(i,r)}}}function _t(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class ht extends X{constructor(t){super();Y(this,t,_t,ft,ae,{class:0})}}export{ht as default};
