import{K as Ke,C as He,S as Y,i as Q,L as je,e as w,c as T,a as C,d as k,b as h,f as q,D as I,M as S,N as M,O as ye,t as oe,g as re,P as O,h as ie,Q as le,R as Ye,E as R,T as Ee,U as se,V as ce,s as ne,v as W,w as X,x as Z,W as ue,X as fe,Y as _e,p as P,Z as de,_ as we,n as B,$ as Te,A as G,m as he,o as me,a0 as Qe,a1 as ve,a2 as ge,a3 as We,a4 as Ce,a5 as Xe,a6 as Ie,a7 as De,j as Ze,a8 as Ge,l as Je}from"../chunks/vendor-8ffd20c8.js";const L=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=Ke(L,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(a=>a.color).map(a=>a.color).concat(e),r=n.filter((a,i)=>n.indexOf(a)===i).map((a,i)=>({id:i,color:a}));t(r)});function Ne(s,t,e){const l=s.slice();return l[30]=t[e],l}function Fe(s,t){let e,l,n,u,r;return{key:s,first:null,c(){e=w("li"),l=w("button"),this.h()},l(a){e=T(a,"LI",{class:!0});var i=C(e);l=T(i,"BUTTON",{class:!0,style:!0}),C(l).forEach(k),i.forEach(k),this.h()},h(){h(l,"class","task__color-btn svelte-4x3nrw"),h(l,"style",n=`background-color: ${t[30].color}`),h(e,"class","task__color-item svelte-4x3nrw"),this.first=e},m(a,i){q(a,e,i),I(e,l),u||(r=S(l,"click",M(function(){ye(t[15](t[30].color))&&t[15](t[30].color).apply(this,arguments)})),u=!0)},p(a,i){t=a,i[0]&2052&&n!==(n=`background-color: ${t[30].color}`)&&h(l,"style",n)},d(a){a&&k(e),u=!1,r()}}}function $e(s){let t,e,l,n,u,r,a,i,f,_,m,b,E,v,c,o=[],g=new Map,U,F,N,z,K,j,H=s[11].filter(s[24]);const J=p=>p[30].id;for(let p=0;p<H.length;p+=1){let y=Ne(s,H,p),A=J(y);g.set(A,o[p]=Fe(A,y))}return{c(){t=w("div"),e=w("div"),l=w("div"),n=w("p"),u=oe(s[1]),r=w("div"),a=w("div"),i=w("span"),f=oe(s[4]),_=w("div"),m=w("button"),b=w("span"),E=w("button"),v=w("span"),c=w("ul");for(let p=0;p<o.length;p+=1)o[p].c();F=w("button"),N=w("span"),this.h()},l(p){t=T(p,"DIV",{class:!0});var y=C(t);e=T(y,"DIV",{class:!0});var A=C(e);l=T(A,"DIV",{class:!0});var $=C(l);n=T($,"P",{class:!0,contenteditable:!0});var x=C(n);u=re(x,s[1]),x.forEach(k),$.forEach(k),r=T(A,"DIV",{class:!0});var ee=C(r);a=T(ee,"DIV",{class:!0});var te=C(a);i=T(te,"SPAN",{class:!0});var d=C(i);f=re(d,s[4]),d.forEach(k),te.forEach(k),ee.forEach(k),A.forEach(k),_=T(y,"DIV",{class:!0});var D=C(_);m=T(D,"BUTTON",{class:!0});var V=C(m);b=T(V,"SPAN",{class:!0}),C(b).forEach(k),V.forEach(k),E=T(D,"BUTTON",{class:!0});var ke=C(E);v=T(ke,"SPAN",{class:!0}),C(v).forEach(k),ke.forEach(k),D.forEach(k),c=T(y,"UL",{class:!0,style:!0});var pe=C(c);for(let ae=0;ae<o.length;ae+=1)o[ae].l(pe);pe.forEach(k),F=T(y,"BUTTON",{class:!0});var be=C(F);N=T(be,"SPAN",{class:!0}),C(N).forEach(k),be.forEach(k),y.forEach(k),this.h()},h(){h(n,"class","task__main-content svelte-4x3nrw"),h(n,"contenteditable",s[7]),h(l,"class","task__main-container svelte-4x3nrw"),h(i,"class","svelte-4x3nrw"),h(a,"class","task__info-content svelte-4x3nrw"),h(r,"class","task__info svelte-4x3nrw"),h(e,"class","task__main svelte-4x3nrw"),O(e,"isEdit",s[7]),h(b,"class","svg-image-del svelte-4x3nrw"),h(m,"class","task__menu-btn task__menu-btn_del svelte-4x3nrw"),h(v,"class","svg-image-pen svelte-4x3nrw"),h(E,"class","task__menu-btn task__menu-btn_edit svelte-4x3nrw"),O(E,"isSelect",s[7]),O(E,"isChanged",s[8]),O(E,"isSave",s[9]),h(_,"class","task__circle task__menu svelte-4x3nrw"),O(_,"isOpen",s[7]),h(c,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-4x3nrw"),h(c,"style",U=`background-color: ${s[2]}`),O(c,"isOpen",s[7]),h(N,"class","svelte-4x3nrw"),h(F,"class","task__info-open svelte-4x3nrw"),O(F,"isHidden",s[7]),h(t,"class",z="task "+s[0]+" svelte-4x3nrw"),O(t,"isDisabled",s[3]),O(t,"isInfoOpen",s[5])},m(p,y){q(p,t,y),I(t,e),I(e,l),I(l,n),I(n,u),s[20](n),I(e,r),I(r,a),I(a,i),I(i,f),s[22](r),I(t,_),I(_,m),I(m,b),I(_,E),I(E,v),I(t,c);for(let A=0;A<o.length;A+=1)o[A].m(c,null);I(t,F),I(F,N),K||(j=[S(n,"input",s[21]),S(n,"keydown",s[17]),S(e,"click",s[12]),S(m,"click",M(s[13])),S(E,"click",M(s[23])),S(F,"click",M(s[25]))],K=!0)},p(p,y){y[0]&2&&ie(u,p[1]),y[0]&128&&h(n,"contenteditable",p[7]),y[0]&16&&ie(f,p[4]),y[0]&128&&O(e,"isEdit",p[7]),y[0]&128&&O(E,"isSelect",p[7]),y[0]&256&&O(E,"isChanged",p[8]),y[0]&512&&O(E,"isSave",p[9]),y[0]&128&&O(_,"isOpen",p[7]),y[0]&34820&&(H=p[11].filter(p[24]),o=le(o,y,J,1,p,H,g,c,Ye,Fe,null,Ne)),y[0]&4&&U!==(U=`background-color: ${p[2]}`)&&h(c,"style",U),y[0]&128&&O(c,"isOpen",p[7]),y[0]&128&&O(F,"isHidden",p[7]),y[0]&1&&z!==(z="task "+p[0]+" svelte-4x3nrw")&&h(t,"class",z),y[0]&9&&O(t,"isDisabled",p[3]),y[0]&33&&O(t,"isInfoOpen",p[5])},i:R,o:R,d(p){p&&k(t),s[20](null),s[22](null);for(let y=0;y<o.length;y+=1)o[y].d();K=!1,Ee(j)}}}function xe(s,t,e){let l,n;se(s,L,d=>e(27,l=d)),se(s,Oe,d=>e(11,n=d));let{class:u=""}=t,{text:r=""}=t,{color:a="#0029FF"}=t,{disabled:i=!1}=t,{id:f=null}=t,{date:_=""}=t,m=!1,b,E=!1,v=!1,c=!1,o,g;const U=()=>{if(E===!1){let d=l.map(D=>(f===D.id&&(D.done=!D.done),D));L.set(d)}},F=()=>{let d=l.filter(D=>D.id!=f);L.set(d)};function N(d){e(7,E=d!=null?d:!E),E===!1&&j()}const z=d=>{let D=l.map(V=>(f===V.id&&(V.color=d),V));L.set(D)};function K(d){e(5,m=d!=null?d:!m);let D=0;b.childNodes.forEach(V=>D+=V.clientHeight),b.style.setProperty("--taskInfoHeight",`${m?D:0}px`)}function j(){if(v){let d=o.innerText;H(d),e(8,v=!1),clearTimeout(g),e(9,c=!0),g=setTimeout(()=>{e(9,c=!1)},500),console.log("save",r)}}function H(d){if(typeof d=="string")L.set(l.map(D=>(D.id===f&&(D.text=d),D)));else throw new Error("The value is not equal to the string")}function J(d){let D=d.ctrlKey?!1:d.metaKey,V=d.keyCode;if(D&&V===83)return d.preventDefault(),j(),!1}function p(d=(D=>(D=o.innerText)!=null?D:r)()){return e(8,v=d!==r)}function y(d){ce[d?"unshift":"push"](()=>{o=d,e(10,o)})}const A=()=>p();function $(d){ce[d?"unshift":"push"](()=>{b=d,e(6,b)})}const x=()=>N(),ee=d=>d.color!=a,te=()=>K();return s.$$set=d=>{"class"in d&&e(0,u=d.class),"text"in d&&e(1,r=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,i=d.disabled),"id"in d&&e(19,f=d.id),"date"in d&&e(4,_=d.date)},[u,r,a,i,_,m,b,E,v,c,o,n,U,F,N,z,K,J,p,f,y,A,$,x,ee,te]}class Se extends Y{constructor(t){super();Q(this,t,xe,$e,je,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Ae(s,t,e){const l=s.slice();return l[4]=t[e],l}function qe(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ve(s,t){let e,l,n,u,r,a=R,i;return l=new Se({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=w("li"),W(l.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=C(e);X(l.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(f,_){q(f,e,_),Z(l,e,null),i=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){r=e.getBoundingClientRect()},f(){ue(e),a(),fe(e,r)},a(){a(),a=_e(e,r,ve,{duration:300})},i(f){i||(P(l.$$.fragment,f),de(()=>{u&&u.end(1),n=we(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),u=Te(e,t[2],{key:t[4].id}),i=!1},d(f){f&&k(e),G(l),f&&u&&u.end()}}}function Ue(s,t){let e,l,n,u,r,a=R,i;return l=new Se({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=w("li"),W(l.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=C(e);X(l.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(f,_){q(f,e,_),Z(l,e,null),i=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){r=e.getBoundingClientRect()},f(){ue(e),a(),fe(e,r)},a(){a(),a=_e(e,r,ve,{duration:300})},i(f){i||(P(l.$$.fragment,f),de(()=>{u&&u.end(1),n=we(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),u=Te(e,t[2],{key:t[4].id}),i=!1},d(f){f&&k(e),G(l),f&&u&&u.end()}}}function et(s){let t,e,l,n=[],u=new Map,r,a=[],i=new Map,f,_,m=s[1].filter(Pe);const b=c=>c[4].id;for(let c=0;c<m.length;c+=1){let o=qe(s,m,c),g=b(o);u.set(g,n[c]=Ve(g,o))}let E=s[1].filter(Be);const v=c=>c[4].id;for(let c=0;c<E.length;c+=1){let o=Ae(s,E,c),g=v(o);i.set(g,a[c]=Ue(g,o))}return{c(){t=w("section"),e=w("div"),l=w("ul");for(let c=0;c<n.length;c+=1)n[c].c();r=w("ul");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){t=T(c,"SECTION",{class:!0});var o=C(t);e=T(o,"DIV",{class:!0});var g=C(e);l=T(g,"UL",{class:!0});var U=C(l);for(let N=0;N<n.length;N+=1)n[N].l(U);U.forEach(k),r=T(g,"UL",{class:!0});var F=C(r);for(let N=0;N<a.length;N+=1)a[N].l(F);F.forEach(k),g.forEach(k),o.forEach(k),this.h()},h(){h(l,"class","task-section__col"),h(r,"class","task-section__col"),h(e,"class","container task-section__grid svelte-q8mvyt"),h(t,"class",f="task-section "+s[0]+" svelte-q8mvyt")},m(c,o){q(c,t,o),I(t,e),I(e,l);for(let g=0;g<n.length;g+=1)n[g].m(l,null);I(e,r);for(let g=0;g<a.length;g+=1)a[g].m(r,null);_=!0},p(c,[o]){if(o&2){m=c[1].filter(Pe),he();for(let g=0;g<n.length;g+=1)n[g].r();n=le(n,o,b,1,c,m,u,l,ge,Ve,null,qe);for(let g=0;g<n.length;g+=1)n[g].a();me()}if(o&2){E=c[1].filter(Be),he();for(let g=0;g<a.length;g+=1)a[g].r();a=le(a,o,v,1,c,E,i,r,ge,Ue,null,Ae);for(let g=0;g<a.length;g+=1)a[g].a();me()}(!_||o&1&&f!==(f="task-section "+c[0]+" svelte-q8mvyt"))&&h(t,"class",f)},i(c){if(!_){for(let o=0;o<m.length;o+=1)P(n[o]);for(let o=0;o<E.length;o+=1)P(a[o]);_=!0}},o(c){for(let o=0;o<n.length;o+=1)B(n[o]);for(let o=0;o<a.length;o+=1)B(a[o]);_=!1},d(c){c&&k(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<a.length;o+=1)a[o].d()}}}const Pe=s=>!s.done,Be=s=>s.done;function tt(s,t,e){let l;se(s,L,a=>e(1,l=a));let{class:n=""}=t;const[u,r]=Qe({duration:a=>Math.sqrt(a*200),fallback(a,i){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:We,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return s.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,l,u,r]}class lt extends Y{constructor(t){super();Q(this,t,tt,et,ne,{class:0})}}const st=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Le(s){let t,e,l,n=s[2].text&&Me(s);return{c(){t=w("button"),n&&n.c(),this.h()},l(u){t=T(u,"BUTTON",{class:!0});var r=C(t);n&&n.l(r),r.forEach(k),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(u,r){q(u,t,r),n&&n.m(t,null),e||(l=S(t,"click",M(s[6])),e=!0)},p(u,r){u[2].text?n?n.p(u,r):(n=Me(u),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(u){u&&k(t),n&&n.d(),e=!1,l()}}}function Me(s){let t=s[2].text+"",e;return{c(){e=oe(t)},l(l){e=re(l,t)},m(l,n){q(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&ie(e,t)},d(l){l&&k(e)}}}function nt(s){let t,e,l,n,u,r=s[2]&&Le(s);return{c(){t=w("div"),e=w("input"),r&&r.c(),this.h()},l(a){t=T(a,"DIV",{class:!0});var i=C(t);e=T(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(k),this.h()},h(){h(e,"placeholder",s[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),O(t,"isError",s[5])},m(a,i){q(a,t,i),I(t,e),Ce(e,s[4]),r&&r.m(t,null),s[11](t),n||(u=[S(e,"input",s[9]),S(e,"input",s[7]),S(e,"keydown",s[10])],n=!0)},p(a,[i]){i&2&&h(e,"placeholder",a[1]),i&16&&e.value!==a[4]&&Ce(e,a[4]),a[2]?r?r.p(a,i):(r=Le(a),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),i&37&&O(t,"isError",a[5])},i:R,o:R,d(a){a&&k(t),r&&r.d(),s[11](null),n=!1,Ee(u)}}}function at(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:u=null}=t,r,a,i=!1;const f=Xe(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,i=!0)},m=()=>{e(5,i=!1)},b=o=>{let g=o.key;g==="Control"&&f("color"),g==="Enter"&&_()};function E(){a=this.value,e(4,a)}const v=o=>b(o);function c(o){ce[o?"unshift":"push"](()=>{r=o,e(3,r)})}return s.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,u=o.btn)},[l,n,u,r,a,i,_,m,b,E,v,c]}class ot extends Y{constructor(t){super();Q(this,t,at,nt,ne,{class:0,placeholder:1,btn:2})}}function Re(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function ze(s,t){let e,l,n,u,r=R,a,i,f;return{key:s,first:null,c(){e=w("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(k),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,m){q(_,e,m),a=!0,i||(f=S(e,"click",M(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),i=!0)},p(_,m){t=_,(!a||m&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){u=e.getBoundingClientRect()},f(){ue(e),r(),fe(e,u)},a(){r(),r=_e(e,u,ve,{})},i(_){a||(de(()=>{n||(n=Ie(e,De,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ie(e,De,{},!1)),n.run(0),a=!1},d(_){_&&k(e),_&&n&&n.end(),i=!1,f()}}}function rt(s){let t,e,l,n,u=[],r=new Map,a,i,f,_,m,b=s[3].filter(s[7]);const E=v=>v[9].id;for(let v=0;v<b.length;v+=1){let c=Re(s,b,v),o=E(c);r.set(o,u[v]=ze(o,c))}return a=new ot({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",s[8]),a.$on("submit",s[4]),{c(){t=w("div"),e=w("div"),l=w("span");for(let v=0;v<u.length;v+=1)u[v].c();W(a.$$.fragment),this.h()},l(v){t=T(v,"DIV",{class:!0});var c=C(t);e=T(c,"DIV",{class:!0});var o=C(e);l=T(o,"SPAN",{class:!0,style:!0}),C(l).forEach(k);for(let g=0;g<u.length;g+=1)u[g].l(o);o.forEach(k),X(a.$$.fragment,c),c.forEach(k),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",n=`color: ${s[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),O(e,"isOpen",s[2]),h(t,"class",i="add-todo "+s[0]+" svelte-1hafqlz")},m(v,c){q(v,t,c),I(t,e),I(e,l);for(let o=0;o<u.length;o+=1)u[o].m(e,null);Z(a,t,null),f=!0,_||(m=S(l,"click",M(s[6])),_=!0)},p(v,[c]){if((!f||c&2&&n!==(n=`color: ${v[1]}`))&&h(l,"style",n),c&42){b=v[3].filter(v[7]),he();for(let o=0;o<u.length;o+=1)u[o].r();u=le(u,c,E,1,v,b,r,e,ge,ze,null,Re);for(let o=0;o<u.length;o+=1)u[o].a();me()}c&4&&O(e,"isOpen",v[2]),(!f||c&1&&i!==(i="add-todo "+v[0]+" svelte-1hafqlz"))&&h(t,"class",i)},i(v){if(!f){for(let c=0;c<b.length;c+=1)P(u[c]);P(a.$$.fragment,v),f=!0}},o(v){for(let c=0;c<u.length;c+=1)B(u[c]);B(a.$$.fragment,v),f=!1},d(v){v&&k(t);for(let c=0;c<u.length;c+=1)u[c].d();G(a),_=!1,m()}}}function it(s,t,e){let l;se(s,Oe,b=>e(3,l=b));let{class:n=""}=t,u="#0029FF",r=!1;const a=b=>{let E={id:Date.now(),text:b.detail.value,color:u,done:!1,date:st(new Date,"dot")};L.update(v=>v=[E,...v])},i=b=>b&&e(1,u=b),f=()=>e(2,r=!r),_=b=>b.color!=u,m=()=>e(2,r=!r);return s.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,u,r,l,a,i,f,_,m]}class ct extends Y{constructor(t){super();Q(this,t,it,rt,ne,{class:0})}}function ut(s){let t,e,l,n,u,r,a;return n=new ct({}),r=new lt({props:{class:"mt-50"}}),{c(){t=Ze(),e=w("section"),l=w("div"),W(n.$$.fragment),W(r.$$.fragment),this.h()},l(i){Ge('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=Je(i),e=T(i,"SECTION",{class:!0});var _=C(e);l=T(_,"DIV",{class:!0});var m=C(l);X(n.$$.fragment,m),m.forEach(k),_.forEach(k),X(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",u=""+(s[0]+" mt-50 svelte-110abfo"))},m(i,f){q(i,t,f),q(i,e,f),I(e,l),Z(n,l,null),Z(r,i,f),a=!0},p(i,[f]){(!a||f&1&&u!==(u=""+(i[0]+" mt-50 svelte-110abfo")))&&h(e,"class",u)},i(i){a||(P(n.$$.fragment,i),P(r.$$.fragment,i),a=!0)},o(i){B(n.$$.fragment,i),B(r.$$.fragment,i),a=!1},d(i){i&&k(t),i&&k(e),G(n),G(r,i)}}}function ft(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class dt extends Y{constructor(t){super();Q(this,t,ft,ut,ne,{class:0})}}export{dt as default};
