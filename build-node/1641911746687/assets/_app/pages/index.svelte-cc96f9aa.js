import{K as Ke,C as He,S as Y,i as Q,L as je,e as w,c as q,a as T,d as g,b as h,f as A,D as C,M as F,N as M,O as ye,t as oe,g as ie,P as D,h as re,Q as le,R as Ye,E as R,T as Ee,U as se,V as ce,s as ne,v as W,w as X,x as Z,W as ue,X as fe,Y as _e,p as P,Z as de,_ as we,n as B,$ as qe,A as G,m as he,o as ke,a0 as Qe,a1 as me,a2 as ve,a3 as We,a4 as Te,a5 as Xe,a6 as Ce,a7 as Ie,j as Ze,a8 as Ge,l as Je}from"../chunks/vendor-8ffd20c8.js";const L=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),De=Ke(L,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,r)=>n.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(i)});function Oe(s,t,e){const l=s.slice();return l[30]=t[e],l}function Ne(s,t){let e,l,n,u,i;return{key:s,first:null,c(){e=w("li"),l=w("button"),this.h()},l(a){e=q(a,"LI",{class:!0});var r=T(e);l=q(r,"BUTTON",{class:!0,style:!0}),T(l).forEach(g),r.forEach(g),this.h()},h(){h(l,"class","task__color-btn svelte-12k2kwq"),h(l,"style",n=`background-color: ${t[30].color}`),h(e,"class","task__color-item svelte-12k2kwq"),this.first=e},m(a,r){A(a,e,r),C(e,l),u||(i=F(l,"click",M(function(){ye(t[15](t[30].color))&&t[15](t[30].color).apply(this,arguments)})),u=!0)},p(a,r){t=a,r[0]&2052&&n!==(n=`background-color: ${t[30].color}`)&&h(l,"style",n)},d(a){a&&g(e),u=!1,i()}}}function $e(s){let t,e,l,n,u,i,a,r,f,_,k,b,E,m,c,o=[],v=new Map,U,N,O,z,K,j,H=s[11].filter(s[24]);const J=p=>p[30].id;for(let p=0;p<H.length;p+=1){let y=Oe(s,H,p),S=J(y);v.set(S,o[p]=Ne(S,y))}return{c(){t=w("div"),e=w("div"),l=w("div"),n=w("p"),u=oe(s[1]),i=w("div"),a=w("div"),r=w("span"),f=oe(s[4]),_=w("div"),k=w("button"),b=w("span"),E=w("button"),m=w("span"),c=w("ul");for(let p=0;p<o.length;p+=1)o[p].c();N=w("button"),O=w("span"),this.h()},l(p){t=q(p,"DIV",{class:!0});var y=T(t);e=q(y,"DIV",{class:!0});var S=T(e);l=q(S,"DIV",{class:!0});var $=T(l);n=q($,"P",{class:!0,contenteditable:!0});var x=T(n);u=ie(x,s[1]),x.forEach(g),$.forEach(g),i=q(S,"DIV",{class:!0});var ee=T(i);a=q(ee,"DIV",{class:!0});var te=T(a);r=q(te,"SPAN",{class:!0});var d=T(r);f=ie(d,s[4]),d.forEach(g),te.forEach(g),ee.forEach(g),S.forEach(g),_=q(y,"DIV",{class:!0});var I=T(_);k=q(I,"BUTTON",{class:!0});var V=T(k);b=q(V,"SPAN",{class:!0}),T(b).forEach(g),V.forEach(g),E=q(I,"BUTTON",{class:!0});var ge=T(E);m=q(ge,"SPAN",{class:!0}),T(m).forEach(g),ge.forEach(g),I.forEach(g),c=q(y,"UL",{class:!0,style:!0});var pe=T(c);for(let ae=0;ae<o.length;ae+=1)o[ae].l(pe);pe.forEach(g),N=q(y,"BUTTON",{class:!0});var be=T(N);O=q(be,"SPAN",{class:!0}),T(O).forEach(g),be.forEach(g),y.forEach(g),this.h()},h(){h(n,"class","task__main-content svelte-12k2kwq"),h(n,"contenteditable",s[7]),h(l,"class","task__main-container svelte-12k2kwq"),h(r,"class","svelte-12k2kwq"),h(a,"class","task__info-content svelte-12k2kwq"),h(i,"class","task__info svelte-12k2kwq"),h(e,"class","task__main svelte-12k2kwq"),D(e,"isEdit",s[7]),h(b,"class","svg-image-del svelte-12k2kwq"),h(k,"class","task__menu-btn task__menu-btn_del svelte-12k2kwq"),h(m,"class","svg-image-pen svelte-12k2kwq"),h(E,"class","task__menu-btn task__menu-btn_edit svelte-12k2kwq"),D(E,"isSelect",s[7]),D(E,"isChanged",s[8]),D(E,"isSave",s[9]),h(_,"class","task__circle task__menu svelte-12k2kwq"),D(_,"isOpen",s[7]),h(c,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-12k2kwq"),h(c,"style",U=`background-color: ${s[2]}`),D(c,"isOpen",s[7]),h(O,"class","svelte-12k2kwq"),h(N,"class","task__info-open svelte-12k2kwq"),D(N,"isHidden",s[7]),h(t,"class",z="task "+s[0]+" svelte-12k2kwq"),D(t,"isDisabled",s[3]),D(t,"isInfoOpen",s[5])},m(p,y){A(p,t,y),C(t,e),C(e,l),C(l,n),C(n,u),s[20](n),C(e,i),C(i,a),C(a,r),C(r,f),s[22](i),C(t,_),C(_,k),C(k,b),C(_,E),C(E,m),C(t,c);for(let S=0;S<o.length;S+=1)o[S].m(c,null);C(t,N),C(N,O),K||(j=[F(n,"input",s[21]),F(n,"keydown",s[17]),F(e,"click",s[12]),F(k,"click",M(s[13])),F(E,"click",M(s[23])),F(N,"click",M(s[25]))],K=!0)},p(p,y){y[0]&2&&re(u,p[1]),y[0]&128&&h(n,"contenteditable",p[7]),y[0]&16&&re(f,p[4]),y[0]&128&&D(e,"isEdit",p[7]),y[0]&128&&D(E,"isSelect",p[7]),y[0]&256&&D(E,"isChanged",p[8]),y[0]&512&&D(E,"isSave",p[9]),y[0]&128&&D(_,"isOpen",p[7]),y[0]&34820&&(H=p[11].filter(p[24]),o=le(o,y,J,1,p,H,v,c,Ye,Ne,null,Oe)),y[0]&4&&U!==(U=`background-color: ${p[2]}`)&&h(c,"style",U),y[0]&128&&D(c,"isOpen",p[7]),y[0]&128&&D(N,"isHidden",p[7]),y[0]&1&&z!==(z="task "+p[0]+" svelte-12k2kwq")&&h(t,"class",z),y[0]&9&&D(t,"isDisabled",p[3]),y[0]&33&&D(t,"isInfoOpen",p[5])},i:R,o:R,d(p){p&&g(t),s[20](null),s[22](null);for(let y=0;y<o.length;y+=1)o[y].d();K=!1,Ee(j)}}}function xe(s,t,e){let l,n;se(s,L,d=>e(27,l=d)),se(s,De,d=>e(11,n=d));let{class:u=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,k=!1,b,E=!1,m=!1,c=!1,o,v;const U=()=>{if(E===!1){let d=l.map(I=>(f===I.id&&(I.done=!I.done),I));L.set(d)}},N=()=>{let d=l.filter(I=>I.id!=f);L.set(d)};function O(d){e(7,E=d!=null?d:!E),E===!1&&j()}const z=d=>{let I=l.map(V=>(f===V.id&&(V.color=d),V));L.set(I)};function K(d){e(5,k=d!=null?d:!k);let I=0;b.childNodes.forEach(V=>I+=V.clientHeight),b.style.setProperty("--taskInfoHeight",`${k?I:0}px`)}function j(){if(m){let d=o.innerText;H(d),e(8,m=!1),clearTimeout(v),e(9,c=!0),v=setTimeout(()=>{e(9,c=!1)},500),console.log("save",i)}}function H(d){if(typeof d=="string")L.set(l.map(I=>(I.id===f&&(I.text=d),I)));else throw new Error("The value is not equal to the string")}function J(d){let I=d.ctrlKey?!1:d.metaKey,V=d.keyCode;if(I&&V===83)return d.preventDefault(),j(),!1}function p(d=(I=>(I=o.innerText)!=null?I:i)()){return e(8,m=d!==i)}function y(d){ce[d?"unshift":"push"](()=>{o=d,e(10,o)})}const S=()=>p();function $(d){ce[d?"unshift":"push"](()=>{b=d,e(6,b)})}const x=()=>O(),ee=d=>d.color!=a,te=()=>K();return s.$$set=d=>{"class"in d&&e(0,u=d.class),"text"in d&&e(1,i=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(19,f=d.id),"date"in d&&e(4,_=d.date)},[u,i,a,r,_,k,b,E,m,c,o,n,U,N,O,z,K,J,p,f,y,S,$,x,ee,te]}class Fe extends Y{constructor(t){super();Q(this,t,xe,$e,je,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Se(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ae(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ve(s,t){let e,l,n,u,i,a=R,r;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=w("li"),W(l.$$.fragment),this.h()},l(f){e=q(f,"LI",{class:!0});var _=T(e);X(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(f,_){A(f,e,_),Z(l,e,null),r=!0},p(f,_){t=f;const k={};_&2&&(k.text=t[4].text),_&2&&(k.color=t[4].color?t[4].color:null),_&2&&(k.id=t[4].id),_&2&&(k.date=t[4].date),l.$set(k)},r(){i=e.getBoundingClientRect()},f(){ue(e),a(),fe(e,i)},a(){a(),a=_e(e,i,me,{duration:300})},i(f){r||(P(l.$$.fragment,f),de(()=>{u&&u.end(1),n=we(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),u=qe(e,t[2],{key:t[4].id}),r=!1},d(f){f&&g(e),G(l),f&&u&&u.end()}}}function Ue(s,t){let e,l,n,u,i,a=R,r;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=w("li"),W(l.$$.fragment),this.h()},l(f){e=q(f,"LI",{class:!0});var _=T(e);X(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(f,_){A(f,e,_),Z(l,e,null),r=!0},p(f,_){t=f;const k={};_&2&&(k.text=t[4].text),_&2&&(k.color=t[4].color?t[4].color:null),_&2&&(k.id=t[4].id),_&2&&(k.date=t[4].date),l.$set(k)},r(){i=e.getBoundingClientRect()},f(){ue(e),a(),fe(e,i)},a(){a(),a=_e(e,i,me,{duration:300})},i(f){r||(P(l.$$.fragment,f),de(()=>{u&&u.end(1),n=we(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),u=qe(e,t[2],{key:t[4].id}),r=!1},d(f){f&&g(e),G(l),f&&u&&u.end()}}}function et(s){let t,e,l,n=[],u=new Map,i,a=[],r=new Map,f,_,k=s[1].filter(Pe);const b=c=>c[4].id;for(let c=0;c<k.length;c+=1){let o=Ae(s,k,c),v=b(o);u.set(v,n[c]=Ve(v,o))}let E=s[1].filter(Be);const m=c=>c[4].id;for(let c=0;c<E.length;c+=1){let o=Se(s,E,c),v=m(o);r.set(v,a[c]=Ue(v,o))}return{c(){t=w("section"),e=w("div"),l=w("ul");for(let c=0;c<n.length;c+=1)n[c].c();i=w("ul");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){t=q(c,"SECTION",{class:!0});var o=T(t);e=q(o,"DIV",{class:!0});var v=T(e);l=q(v,"UL",{class:!0});var U=T(l);for(let O=0;O<n.length;O+=1)n[O].l(U);U.forEach(g),i=q(v,"UL",{class:!0});var N=T(i);for(let O=0;O<a.length;O+=1)a[O].l(N);N.forEach(g),v.forEach(g),o.forEach(g),this.h()},h(){h(l,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-q8mvyt"),h(t,"class",f="task-section "+s[0]+" svelte-q8mvyt")},m(c,o){A(c,t,o),C(t,e),C(e,l);for(let v=0;v<n.length;v+=1)n[v].m(l,null);C(e,i);for(let v=0;v<a.length;v+=1)a[v].m(i,null);_=!0},p(c,[o]){if(o&2){k=c[1].filter(Pe),he();for(let v=0;v<n.length;v+=1)n[v].r();n=le(n,o,b,1,c,k,u,l,ve,Ve,null,Ae);for(let v=0;v<n.length;v+=1)n[v].a();ke()}if(o&2){E=c[1].filter(Be),he();for(let v=0;v<a.length;v+=1)a[v].r();a=le(a,o,m,1,c,E,r,i,ve,Ue,null,Se);for(let v=0;v<a.length;v+=1)a[v].a();ke()}(!_||o&1&&f!==(f="task-section "+c[0]+" svelte-q8mvyt"))&&h(t,"class",f)},i(c){if(!_){for(let o=0;o<k.length;o+=1)P(n[o]);for(let o=0;o<E.length;o+=1)P(a[o]);_=!0}},o(c){for(let o=0;o<n.length;o+=1)B(n[o]);for(let o=0;o<a.length;o+=1)B(a[o]);_=!1},d(c){c&&g(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<a.length;o+=1)a[o].d()}}}const Pe=s=>!s.done,Be=s=>s.done;function tt(s,t,e){let l;se(s,L,a=>e(1,l=a));let{class:n=""}=t;const[u,i]=Qe({duration:a=>Math.sqrt(a*200),fallback(a,r){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:We,css:k=>`
					transform: ${_} scale(${k});
					opacity: ${k}
				`}}});return s.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,l,u,i]}class lt extends Y{constructor(t){super();Q(this,t,tt,et,ne,{class:0})}}const st=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Le(s){let t,e,l,n=s[2].text&&Me(s);return{c(){t=w("button"),n&&n.c(),this.h()},l(u){t=q(u,"BUTTON",{class:!0});var i=T(t);n&&n.l(i),i.forEach(g),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(u,i){A(u,t,i),n&&n.m(t,null),e||(l=F(t,"click",M(s[6])),e=!0)},p(u,i){u[2].text?n?n.p(u,i):(n=Me(u),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(u){u&&g(t),n&&n.d(),e=!1,l()}}}function Me(s){let t=s[2].text+"",e;return{c(){e=oe(t)},l(l){e=ie(l,t)},m(l,n){A(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&re(e,t)},d(l){l&&g(e)}}}function nt(s){let t,e,l,n,u,i=s[2]&&Le(s);return{c(){t=w("div"),e=w("input"),i&&i.c(),this.h()},l(a){t=q(a,"DIV",{class:!0});var r=T(t);e=q(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(g),this.h()},h(){h(e,"placeholder",s[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),D(t,"isError",s[5])},m(a,r){A(a,t,r),C(t,e),Te(e,s[4]),i&&i.m(t,null),s[11](t),n||(u=[F(e,"input",s[9]),F(e,"input",s[7]),F(e,"keydown",s[10])],n=!0)},p(a,[r]){r&2&&h(e,"placeholder",a[1]),r&16&&e.value!==a[4]&&Te(e,a[4]),a[2]?i?i.p(a,r):(i=Le(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),r&37&&D(t,"isError",a[5])},i:R,o:R,d(a){a&&g(t),i&&i.d(),s[11](null),n=!1,Ee(u)}}}function at(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:u=null}=t,i,a,r=!1;const f=Xe(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,r=!0)},k=()=>{e(5,r=!1)},b=o=>{let v=o.key;v==="Control"&&f("color"),v==="Enter"&&_()};function E(){a=this.value,e(4,a)}const m=o=>b(o);function c(o){ce[o?"unshift":"push"](()=>{i=o,e(3,i)})}return s.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,u=o.btn)},[l,n,u,i,a,r,_,k,b,E,m,c]}class ot extends Y{constructor(t){super();Q(this,t,at,nt,ne,{class:0,placeholder:1,btn:2})}}function Re(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function ze(s,t){let e,l,n,u,i=R,a,r,f;return{key:s,first:null,c(){e=w("button"),this.h()},l(_){e=q(_,"BUTTON",{class:!0,style:!0}),T(e).forEach(g),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,k){A(_,e,k),a=!0,r||(f=F(e,"click",M(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,k){t=_,(!a||k&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){u=e.getBoundingClientRect()},f(){ue(e),i(),fe(e,u)},a(){i(),i=_e(e,u,me,{})},i(_){a||(de(()=>{n||(n=Ce(e,Ie,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ce(e,Ie,{},!1)),n.run(0),a=!1},d(_){_&&g(e),_&&n&&n.end(),r=!1,f()}}}function it(s){let t,e,l,n,u=[],i=new Map,a,r,f,_,k,b=s[3].filter(s[7]);const E=m=>m[9].id;for(let m=0;m<b.length;m+=1){let c=Re(s,b,m),o=E(c);i.set(o,u[m]=ze(o,c))}return a=new ot({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",s[8]),a.$on("submit",s[4]),{c(){t=w("div"),e=w("div"),l=w("span");for(let m=0;m<u.length;m+=1)u[m].c();W(a.$$.fragment),this.h()},l(m){t=q(m,"DIV",{class:!0});var c=T(t);e=q(c,"DIV",{class:!0});var o=T(e);l=q(o,"SPAN",{class:!0,style:!0}),T(l).forEach(g);for(let v=0;v<u.length;v+=1)u[v].l(o);o.forEach(g),X(a.$$.fragment,c),c.forEach(g),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",n=`color: ${s[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),D(e,"isOpen",s[2]),h(t,"class",r="add-todo "+s[0]+" svelte-1hafqlz")},m(m,c){A(m,t,c),C(t,e),C(e,l);for(let o=0;o<u.length;o+=1)u[o].m(e,null);Z(a,t,null),f=!0,_||(k=F(l,"click",M(s[6])),_=!0)},p(m,[c]){if((!f||c&2&&n!==(n=`color: ${m[1]}`))&&h(l,"style",n),c&42){b=m[3].filter(m[7]),he();for(let o=0;o<u.length;o+=1)u[o].r();u=le(u,c,E,1,m,b,i,e,ve,ze,null,Re);for(let o=0;o<u.length;o+=1)u[o].a();ke()}c&4&&D(e,"isOpen",m[2]),(!f||c&1&&r!==(r="add-todo "+m[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(m){if(!f){for(let c=0;c<b.length;c+=1)P(u[c]);P(a.$$.fragment,m),f=!0}},o(m){for(let c=0;c<u.length;c+=1)B(u[c]);B(a.$$.fragment,m),f=!1},d(m){m&&g(t);for(let c=0;c<u.length;c+=1)u[c].d();G(a),_=!1,k()}}}function rt(s,t,e){let l;se(s,De,b=>e(3,l=b));let{class:n=""}=t,u="#0029FF",i=!1;const a=b=>{let E={id:Date.now(),text:b.detail.value,color:u,done:!1,date:st(new Date,"dot")};L.update(m=>m=[E,...m])},r=b=>b&&e(1,u=b),f=()=>e(2,i=!i),_=b=>b.color!=u,k=()=>e(2,i=!i);return s.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,u,i,l,a,r,f,_,k]}class ct extends Y{constructor(t){super();Q(this,t,rt,it,ne,{class:0})}}function ut(s){let t,e,l,n,u,i,a;return n=new ct({}),i=new lt({props:{class:"mt-50"}}),{c(){t=Ze(),e=w("section"),l=w("div"),W(n.$$.fragment),W(i.$$.fragment),this.h()},l(r){Ge('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Je(r),e=q(r,"SECTION",{class:!0});var _=T(e);l=q(_,"DIV",{class:!0});var k=T(l);X(n.$$.fragment,k),k.forEach(g),_.forEach(g),X(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",u=""+(s[0]+" mt-50 svelte-110abfo"))},m(r,f){A(r,t,f),A(r,e,f),C(e,l),Z(n,l,null),Z(i,r,f),a=!0},p(r,[f]){(!a||f&1&&u!==(u=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",u)},i(r){a||(P(n.$$.fragment,r),P(i.$$.fragment,r),a=!0)},o(r){B(n.$$.fragment,r),B(i.$$.fragment,r),a=!1},d(r){r&&g(t),r&&g(e),G(n),G(i,r)}}}function ft(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class dt extends Y{constructor(t){super();Q(this,t,ft,ut,ne,{class:0})}}export{dt as default};
