import{K as Ke,C as Re,S as Y,i as Q,L as Ye,e as T,c as w,a as C,d as k,b as h,f as q,D as z,M as S,N as V,O as ke,t as pe,g as be,P as I,h as Ee,Q as te,R as Qe,E as B,T as ye,U as le,V as oe,s as se,v as W,w as X,x as Z,W as ie,X as re,Y as ce,p as M,Z as fe,_ as Te,n as P,$ as we,A as G,m as ue,o as _e,a0 as We,a1 as de,a2 as he,a3 as Xe,a4 as Ce,a5 as Ze,a6 as Ie,a7 as ze,j as Ge,a8 as Je,l as $e}from"../chunks/vendor-8ffd20c8.js";const U=Re([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=Ke(U,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=l.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,r)=>n.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(i)});function De(l,t,e){const s=l.slice();return s[30]=t[e],s}function Fe(l,t){let e,s,n,f,i;return{key:l,first:null,c(){e=T("li"),s=T("button"),this.h()},l(a){e=w(a,"LI",{class:!0});var r=C(e);s=w(r,"BUTTON",{class:!0,style:!0}),C(s).forEach(k),r.forEach(k),this.h()},h(){h(s,"class","task__color-btn svelte-11gvzec"),h(s,"style",n=`background-color: ${t[30].color}`),h(e,"class","task__color-item svelte-11gvzec"),this.first=e},m(a,r){q(a,e,r),z(e,s),f||(i=S(s,"click",V(function(){ke(t[15](t[30].color))&&t[15](t[30].color).apply(this,arguments)})),f=!0)},p(a,r){t=a,r[0]&2052&&n!==(n=`background-color: ${t[30].color}`)&&h(s,"style",n)},d(a){a&&k(e),f=!1,i()}}}function xe(l){let t,e,s,n,f=`${l[1]}`,i,a,r,u,_,v,b,y,g,o,c=[],m=new Map,L,F,D,H,j,K,R=l[11].filter(l[24]);const J=p=>p[30].id;for(let p=0;p<R.length;p+=1){let E=De(l,R,p),A=J(E);m.set(A,c[p]=Fe(A,E))}return{c(){t=T("article"),e=T("div"),s=T("div"),n=T("p"),i=T("div"),a=T("div"),r=T("span"),u=pe(l[4]),_=T("div"),v=T("button"),b=T("span"),y=T("button"),g=T("span"),o=T("ul");for(let p=0;p<c.length;p+=1)c[p].c();F=T("button"),D=T("span"),this.h()},l(p){t=w(p,"ARTICLE",{class:!0});var E=C(t);e=w(E,"DIV",{class:!0});var A=C(e);s=w(A,"DIV",{class:!0});var $=C(s);n=w($,"P",{class:!0,contenteditable:!0});var ne=C(n);ne.forEach(k),$.forEach(k),i=w(A,"DIV",{class:!0});var x=C(i);a=w(x,"DIV",{class:!0});var ee=C(a);r=w(ee,"SPAN",{class:!0});var d=C(r);u=be(d,l[4]),d.forEach(k),ee.forEach(k),x.forEach(k),A.forEach(k),_=w(E,"DIV",{class:!0});var O=C(_);v=w(O,"BUTTON",{class:!0});var N=C(v);b=w(N,"SPAN",{class:!0}),C(b).forEach(k),N.forEach(k),y=w(O,"BUTTON",{class:!0});var ve=C(y);g=w(ve,"SPAN",{class:!0}),C(g).forEach(k),ve.forEach(k),O.forEach(k),o=w(E,"UL",{class:!0,style:!0});var ge=C(o);for(let ae=0;ae<c.length;ae+=1)c[ae].l(ge);ge.forEach(k),F=w(E,"BUTTON",{class:!0});var me=C(F);D=w(me,"SPAN",{class:!0}),C(D).forEach(k),me.forEach(k),E.forEach(k),this.h()},h(){h(n,"class","task__main-content svelte-11gvzec"),h(n,"contenteditable",l[7]),h(s,"class","task__main-container svelte-11gvzec"),h(r,"class","svelte-11gvzec"),h(a,"class","task__info-content svelte-11gvzec"),h(i,"class","task__info svelte-11gvzec"),h(e,"class","task__main svelte-11gvzec"),I(e,"isEdit",l[7]),h(b,"class","svg-image-del svelte-11gvzec"),h(v,"class","task__menu-btn task__menu-btn_del svelte-11gvzec"),h(g,"class","svg-image-pen svelte-11gvzec"),h(y,"class","task__menu-btn task__menu-btn_edit svelte-11gvzec"),I(y,"isSelect",l[7]),I(y,"isChanged",l[8]),I(y,"isSave",l[9]),h(_,"class","task__circle task__menu svelte-11gvzec"),I(_,"isOpen",l[7]),h(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-11gvzec"),h(o,"style",L=`background-color: ${l[2]}`),I(o,"isOpen",l[7]),h(D,"class","svelte-11gvzec"),h(F,"class","task__info-open svelte-11gvzec"),I(F,"isHidden",l[7]),h(t,"class",H="task "+l[0]+" svelte-11gvzec"),I(t,"isDisabled",l[3]),I(t,"isInfoOpen",l[5]),I(t,"isEdit",l[7])},m(p,E){q(p,t,E),z(t,e),z(e,s),z(s,n),n.innerHTML=f,l[20](n),z(e,i),z(i,a),z(a,r),z(r,u),l[22](i),z(t,_),z(_,v),z(v,b),z(_,y),z(y,g),z(t,o);for(let A=0;A<c.length;A+=1)c[A].m(o,null);z(t,F),z(F,D),j||(K=[S(n,"input",l[21]),S(n,"keydown",l[17]),S(e,"click",l[12]),S(v,"click",V(l[13])),S(y,"click",V(l[23])),S(F,"click",V(l[25]))],j=!0)},p(p,E){E[0]&2&&f!==(f=`${p[1]}`)&&(n.innerHTML=f),E[0]&128&&h(n,"contenteditable",p[7]),E[0]&16&&Ee(u,p[4]),E[0]&128&&I(e,"isEdit",p[7]),E[0]&128&&I(y,"isSelect",p[7]),E[0]&256&&I(y,"isChanged",p[8]),E[0]&512&&I(y,"isSave",p[9]),E[0]&128&&I(_,"isOpen",p[7]),E[0]&34820&&(R=p[11].filter(p[24]),c=te(c,E,J,1,p,R,m,o,Qe,Fe,null,De)),E[0]&4&&L!==(L=`background-color: ${p[2]}`)&&h(o,"style",L),E[0]&128&&I(o,"isOpen",p[7]),E[0]&128&&I(F,"isHidden",p[7]),E[0]&1&&H!==(H="task "+p[0]+" svelte-11gvzec")&&h(t,"class",H),E[0]&9&&I(t,"isDisabled",p[3]),E[0]&33&&I(t,"isInfoOpen",p[5]),E[0]&129&&I(t,"isEdit",p[7])},i:B,o:B,d(p){p&&k(t),l[20](null),l[22](null);for(let E=0;E<c.length;E+=1)c[E].d();j=!1,ye(K)}}}let Ne=new Set;function et(){Ne.forEach(l=>{l.edit(!1)})}function tt(l,t,e){let s,n;le(l,U,d=>e(27,s=d)),le(l,Oe,d=>e(11,n=d));let{class:f=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:r=!1}=t,{id:u=null}=t,{date:_=""}=t,v=!1,b,y=!1,g=!1,o=!1,c,m;const L=()=>{if(y===!1){let d=s.map(O=>(u===O.id&&(O.done=!O.done),O));U.set(d)}},F=()=>{let d=s.filter(O=>O.id!=u);U.set(d)};function D(d){e(7,y=d!=null?d:!y),y===!1&&K()}const H=d=>{let O=s.map(N=>(u===N.id&&(N.color=d),N));U.set(O)};function j(d){e(5,v=d!=null?d:!v);let O=0;b.childNodes.forEach(N=>O+=N.clientHeight),b.style.setProperty("--taskInfoHeight",`${v?O:0}px`)}function K(){if(g){let d=c.innerHTML;R(d).then(()=>{e(8,g=!1),clearTimeout(m),e(9,o=!0),m=setTimeout(()=>{e(9,o=!1)},500)})}}function R(d){if(typeof d=="string")return new Promise(O=>{U.set(s.map(N=>(N.id===u&&(N.text=d),N))),O()});throw new Error("The value is not equal to the string")}function J(d){let O=d.ctrlKey?!1:d.metaKey,N=d.keyCode;if(O&&N===83)return d.preventDefault(),K(),!1}function p(d=(O=>(O=c.innerHTML)!=null?O:i)()){return e(8,g=d!==i)}Ne.add({save(){K()},edit(d){D(d)}});function E(d){oe[d?"unshift":"push"](()=>{c=d,e(10,c)})}const A=()=>p();function $(d){oe[d?"unshift":"push"](()=>{b=d,e(6,b)})}const ne=()=>{y===!1&&et(),D()},x=d=>d.color!=a,ee=()=>j();return l.$$set=d=>{"class"in d&&e(0,f=d.class),"text"in d&&e(1,i=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(19,u=d.id),"date"in d&&e(4,_=d.date)},[f,i,a,r,_,v,b,y,g,o,c,n,L,F,D,H,j,J,p,u,E,A,$,ne,x,ee]}class Se extends Y{constructor(t){super();Q(this,t,tt,xe,Ye,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Ae(l,t,e){const s=l.slice();return s[4]=t[e],s}function qe(l,t,e){const s=l.slice();return s[4]=t[e],s}function Le(l,t){let e,s,n,f,i,a=B,r;return s=new Se({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),W(s.$$.fragment),this.h()},l(u){e=w(u,"LI",{class:!0});var _=C(e);X(s.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(u,_){q(u,e,_),Z(s,e,null),r=!0},p(u,_){t=u;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),s.$set(v)},r(){i=e.getBoundingClientRect()},f(){ie(e),a(),re(e,i)},a(){a(),a=ce(e,i,de,{duration:300})},i(u){r||(M(s.$$.fragment,u),fe(()=>{f&&f.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){P(s.$$.fragment,u),n&&n.invalidate(),f=we(e,t[2],{key:t[4].id}),r=!1},d(u){u&&k(e),G(s),u&&f&&f.end()}}}function Me(l,t){let e,s,n,f,i,a=B,r;return s=new Se({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),W(s.$$.fragment),this.h()},l(u){e=w(u,"LI",{class:!0});var _=C(e);X(s.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(u,_){q(u,e,_),Z(s,e,null),r=!0},p(u,_){t=u;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),s.$set(v)},r(){i=e.getBoundingClientRect()},f(){ie(e),a(),re(e,i)},a(){a(),a=ce(e,i,de,{duration:300})},i(u){r||(M(s.$$.fragment,u),fe(()=>{f&&f.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){P(s.$$.fragment,u),n&&n.invalidate(),f=we(e,t[2],{key:t[4].id}),r=!1},d(u){u&&k(e),G(s),u&&f&&f.end()}}}function lt(l){let t,e,s,n=[],f=new Map,i,a=[],r=new Map,u,_,v=l[1].filter(Pe);const b=o=>o[4].id;for(let o=0;o<v.length;o+=1){let c=qe(l,v,o),m=b(c);f.set(m,n[o]=Le(m,c))}let y=l[1].filter(Ue);const g=o=>o[4].id;for(let o=0;o<y.length;o+=1){let c=Ae(l,y,o),m=g(c);r.set(m,a[o]=Me(m,c))}return{c(){t=T("section"),e=T("div"),s=T("ul");for(let o=0;o<n.length;o+=1)n[o].c();i=T("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=w(o,"SECTION",{class:!0});var c=C(t);e=w(c,"DIV",{class:!0});var m=C(e);s=w(m,"UL",{class:!0});var L=C(s);for(let D=0;D<n.length;D+=1)n[D].l(L);L.forEach(k),i=w(m,"UL",{class:!0});var F=C(i);for(let D=0;D<a.length;D+=1)a[D].l(F);F.forEach(k),m.forEach(k),c.forEach(k),this.h()},h(){h(s,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-te6j4q"),h(t,"class",u="task-section "+l[0]+" svelte-te6j4q")},m(o,c){q(o,t,c),z(t,e),z(e,s);for(let m=0;m<n.length;m+=1)n[m].m(s,null);z(e,i);for(let m=0;m<a.length;m+=1)a[m].m(i,null);_=!0},p(o,[c]){if(c&2){v=o[1].filter(Pe),ue();for(let m=0;m<n.length;m+=1)n[m].r();n=te(n,c,b,1,o,v,f,s,he,Le,null,qe);for(let m=0;m<n.length;m+=1)n[m].a();_e()}if(c&2){y=o[1].filter(Ue),ue();for(let m=0;m<a.length;m+=1)a[m].r();a=te(a,c,g,1,o,y,r,i,he,Me,null,Ae);for(let m=0;m<a.length;m+=1)a[m].a();_e()}(!_||c&1&&u!==(u="task-section "+o[0]+" svelte-te6j4q"))&&h(t,"class",u)},i(o){if(!_){for(let c=0;c<v.length;c+=1)M(n[c]);for(let c=0;c<y.length;c+=1)M(a[c]);_=!0}},o(o){for(let c=0;c<n.length;c+=1)P(n[c]);for(let c=0;c<a.length;c+=1)P(a[c]);_=!1},d(o){o&&k(t);for(let c=0;c<n.length;c+=1)n[c].d();for(let c=0;c<a.length;c+=1)a[c].d()}}}const Pe=l=>!l.done,Ue=l=>l.done;function st(l,t,e){let s;le(l,U,a=>e(1,s=a));let{class:n=""}=t;const[f,i]=We({duration:a=>Math.sqrt(a*200),fallback(a,r){const u=getComputedStyle(a),_=u.transform==="none"?"":u.transform;return{duration:600,easing:Xe,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return l.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,s,f,i]}class nt extends Y{constructor(t){super();Q(this,t,st,lt,se,{class:0})}}const at=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}};function Ve(l){let t,e,s,n=l[2].text&&Be(l);return{c(){t=T("button"),n&&n.c(),this.h()},l(f){t=w(f,"BUTTON",{class:!0});var i=C(t);n&&n.l(i),i.forEach(k),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(f,i){q(f,t,i),n&&n.m(t,null),e||(s=S(t,"click",V(l[6])),e=!0)},p(f,i){f[2].text?n?n.p(f,i):(n=Be(f),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(f){f&&k(t),n&&n.d(),e=!1,s()}}}function Be(l){let t=l[2].text+"",e;return{c(){e=pe(t)},l(s){e=be(s,t)},m(s,n){q(s,e,n)},p(s,n){n&4&&t!==(t=s[2].text+"")&&Ee(e,t)},d(s){s&&k(e)}}}function ot(l){let t,e,s,n,f,i=l[2]&&Ve(l);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(a){t=w(a,"DIV",{class:!0});var r=C(t);e=w(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){h(e,"placeholder",l[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),I(t,"isError",l[5])},m(a,r){q(a,t,r),z(t,e),Ce(e,l[4]),i&&i.m(t,null),l[10](t),n||(f=[S(e,"input",l[9]),S(e,"input",l[7]),S(e,"keydown",l[8])],n=!0)},p(a,[r]){r&2&&h(e,"placeholder",a[1]),r&16&&e.value!==a[4]&&Ce(e,a[4]),a[2]?i?i.p(a,r):(i=Ve(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",s),r&37&&I(t,"isError",a[5])},i:B,o:B,d(a){a&&k(t),i&&i.d(),l[10](null),n=!1,ye(f)}}}function it(l,t,e){let{class:s=""}=t,{placeholder:n="Placeholer"}=t,{btn:f=null}=t,i,a,r=!1;const u=Ze(),_=()=>{a?(u("submit",{value:a}),e(4,a="")):e(5,r=!0)},v=()=>{e(5,r=!1)},b=o=>{let c=o.key,m=o.ctrlKey,L=o.shiftKey;o.keyCode,m&&L&&u("color"),c==="Enter"&&_()};function y(){a=this.value,e(4,a)}function g(o){oe[o?"unshift":"push"](()=>{i=o,e(3,i)})}return l.$$set=o=>{"class"in o&&e(0,s=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,f=o.btn)},[s,n,f,i,a,r,_,v,b,y,g]}class rt extends Y{constructor(t){super();Q(this,t,it,ot,se,{class:0,placeholder:1,btn:2})}}function He(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function je(l,t){let e,s,n,f,i=B,a,r,u;return{key:l,first:null,c(){e=T("button"),this.h()},l(_){e=w(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(k),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){q(_,e,v),a=!0,r||(u=S(e,"click",V(function(){ke(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,v){t=_,(!a||v&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",s)},r(){f=e.getBoundingClientRect()},f(){ie(e),i(),re(e,f)},a(){i(),i=ce(e,f,de,{})},i(_){a||(fe(()=>{n||(n=Ie(e,ze,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ie(e,ze,{},!1)),n.run(0),a=!1},d(_){_&&k(e),_&&n&&n.end(),r=!1,u()}}}function ct(l){let t,e,s,n,f=[],i=new Map,a,r,u,_,v,b=l[3].filter(l[7]);const y=g=>g[9].id;for(let g=0;g<b.length;g+=1){let o=He(l,b,g),c=y(o);i.set(c,f[g]=je(c,o))}return a=new rt({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",l[8]),a.$on("submit",l[4]),{c(){t=T("div"),e=T("div"),s=T("span");for(let g=0;g<f.length;g+=1)f[g].c();W(a.$$.fragment),this.h()},l(g){t=w(g,"DIV",{class:!0});var o=C(t);e=w(o,"DIV",{class:!0});var c=C(e);s=w(c,"SPAN",{class:!0,style:!0}),C(s).forEach(k);for(let m=0;m<f.length;m+=1)f[m].l(c);c.forEach(k),X(a.$$.fragment,o),o.forEach(k),this.h()},h(){h(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(s,"style",n=`color: ${l[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),I(e,"isOpen",l[2]),h(t,"class",r="add-todo "+l[0]+" svelte-1hafqlz")},m(g,o){q(g,t,o),z(t,e),z(e,s);for(let c=0;c<f.length;c+=1)f[c].m(e,null);Z(a,t,null),u=!0,_||(v=S(s,"click",V(l[6])),_=!0)},p(g,[o]){if((!u||o&2&&n!==(n=`color: ${g[1]}`))&&h(s,"style",n),o&42){b=g[3].filter(g[7]),ue();for(let c=0;c<f.length;c+=1)f[c].r();f=te(f,o,y,1,g,b,i,e,he,je,null,He);for(let c=0;c<f.length;c+=1)f[c].a();_e()}o&4&&I(e,"isOpen",g[2]),(!u||o&1&&r!==(r="add-todo "+g[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(g){if(!u){for(let o=0;o<b.length;o+=1)M(f[o]);M(a.$$.fragment,g),u=!0}},o(g){for(let o=0;o<f.length;o+=1)P(f[o]);P(a.$$.fragment,g),u=!1},d(g){g&&k(t);for(let o=0;o<f.length;o+=1)f[o].d();G(a),_=!1,v()}}}function ft(l,t,e){let s;le(l,Oe,b=>e(3,s=b));let{class:n=""}=t,f="#0029FF",i=!1;const a=b=>{let y={id:Date.now(),text:b.detail.value,color:f,done:!1,date:at(new Date,"dot")};U.update(g=>g=[y,...g])},r=b=>b&&e(1,f=b),u=()=>e(2,i=!i),_=b=>b.color!=f,v=()=>e(2,i=!i);return l.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,f,i,s,a,r,u,_,v]}class ut extends Y{constructor(t){super();Q(this,t,ft,ct,se,{class:0})}}function _t(l){let t,e,s,n,f,i,a;return n=new ut({}),i=new nt({props:{class:"mt-50"}}),{c(){t=Ge(),e=T("section"),s=T("div"),W(n.$$.fragment),W(i.$$.fragment),this.h()},l(r){Je('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=$e(r),e=w(r,"SECTION",{class:!0});var _=C(e);s=w(_,"DIV",{class:!0});var v=C(s);X(n.$$.fragment,v),v.forEach(k),_.forEach(k),X(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(s,"class","container"),h(e,"class",f=""+(l[0]+" mt-50 svelte-110abfo"))},m(r,u){q(r,t,u),q(r,e,u),z(e,s),Z(n,s,null),Z(i,r,u),a=!0},p(r,[u]){(!a||u&1&&f!==(f=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",f)},i(r){a||(M(n.$$.fragment,r),M(i.$$.fragment,r),a=!0)},o(r){P(n.$$.fragment,r),P(i.$$.fragment,r),a=!1},d(r){r&&k(t),r&&k(e),G(n),G(i,r)}}}function dt(l,t,e){let{class:s=""}=t;return l.$$set=n=>{"class"in n&&e(0,s=n.class)},[s]}class vt extends Y{constructor(t){super();Q(this,t,dt,_t,se,{class:0})}}export{vt as default};
