import{K as Ke,C as He,S as Y,i as Q,L as je,e as T,c as w,a as C,d as k,b as h,f as V,D as I,M as A,N as M,O as ye,t as ae,g as ie,P as O,h as re,Q as le,R as Ye,E as R,T as Ee,U as se,V as ce,s as ne,v as W,w as X,x as Z,W as fe,X as ue,Y as _e,p as U,Z as de,_ as Te,n as B,$ as we,A as G,m as he,o as me,a0 as Qe,a1 as ve,a2 as ge,a3 as We,a4 as Ce,a5 as Xe,a6 as Ie,a7 as De,j as Ze,a8 as Ge,l as Je}from"../chunks/vendor-8ffd20c8.js";const L=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=Ke(L,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(o=>o.color).map(o=>o.color).concat(e),i=n.filter((o,r)=>n.indexOf(o)===r).map((o,r)=>({id:r,color:o}));t(i)});function Ne(s,t,e){const l=s.slice();return l[30]=t[e],l}function Fe(s,t){let e,l,n,f,i;return{key:s,first:null,c(){e=T("li"),l=T("button"),this.h()},l(o){e=w(o,"LI",{class:!0});var r=C(e);l=w(r,"BUTTON",{class:!0,style:!0}),C(l).forEach(k),r.forEach(k),this.h()},h(){h(l,"class","task__color-btn svelte-18n6f7s"),h(l,"style",n=`background-color: ${t[30].color}`),h(e,"class","task__color-item svelte-18n6f7s"),this.first=e},m(o,r){V(o,e,r),I(e,l),f||(i=A(l,"click",M(function(){ye(t[15](t[30].color))&&t[15](t[30].color).apply(this,arguments)})),f=!0)},p(o,r){t=o,r[0]&2052&&n!==(n=`background-color: ${t[30].color}`)&&h(l,"style",n)},d(o){o&&k(e),f=!1,i()}}}function $e(s){let t,e,l,n,f,i,o,r,u,_,m,b,E,v,c,a=[],g=new Map,P,F,N,z,K,j,H=s[11].filter(s[24]);const J=p=>p[30].id;for(let p=0;p<H.length;p+=1){let y=Ne(s,H,p),q=J(y);g.set(q,a[p]=Fe(q,y))}return{c(){t=T("div"),e=T("div"),l=T("div"),n=T("p"),f=ae(s[1]),i=T("div"),o=T("div"),r=T("span"),u=ae(s[4]),_=T("div"),m=T("button"),b=T("span"),E=T("button"),v=T("span"),c=T("ul");for(let p=0;p<a.length;p+=1)a[p].c();F=T("button"),N=T("span"),this.h()},l(p){t=w(p,"DIV",{class:!0});var y=C(t);e=w(y,"DIV",{class:!0});var q=C(e);l=w(q,"DIV",{class:!0});var $=C(l);n=w($,"P",{class:!0,contenteditable:!0});var x=C(n);f=ie(x,s[1]),x.forEach(k),$.forEach(k),i=w(q,"DIV",{class:!0});var ee=C(i);o=w(ee,"DIV",{class:!0});var te=C(o);r=w(te,"SPAN",{class:!0});var d=C(r);u=ie(d,s[4]),d.forEach(k),te.forEach(k),ee.forEach(k),q.forEach(k),_=w(y,"DIV",{class:!0});var D=C(_);m=w(D,"BUTTON",{class:!0});var S=C(m);b=w(S,"SPAN",{class:!0}),C(b).forEach(k),S.forEach(k),E=w(D,"BUTTON",{class:!0});var ke=C(E);v=w(ke,"SPAN",{class:!0}),C(v).forEach(k),ke.forEach(k),D.forEach(k),c=w(y,"UL",{class:!0,style:!0});var pe=C(c);for(let oe=0;oe<a.length;oe+=1)a[oe].l(pe);pe.forEach(k),F=w(y,"BUTTON",{class:!0});var be=C(F);N=w(be,"SPAN",{class:!0}),C(N).forEach(k),be.forEach(k),y.forEach(k),this.h()},h(){h(n,"class","task__main-content svelte-18n6f7s"),h(n,"contenteditable",s[7]),h(l,"class","task__main-container svelte-18n6f7s"),h(r,"class","svelte-18n6f7s"),h(o,"class","task__info-content svelte-18n6f7s"),h(i,"class","task__info svelte-18n6f7s"),h(e,"class","task__main svelte-18n6f7s"),O(e,"isEdit",s[7]),h(b,"class","svg-image-del svelte-18n6f7s"),h(m,"class","task__menu-btn task__menu-btn_del svelte-18n6f7s"),h(v,"class","svg-image-pen svelte-18n6f7s"),h(E,"class","task__menu-btn task__menu-btn_edit svelte-18n6f7s"),O(E,"isSelect",s[7]),O(E,"isChanged",s[8]),O(E,"isSave",s[9]),h(_,"class","task__circle task__menu svelte-18n6f7s"),O(_,"isOpen",s[7]),h(c,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-18n6f7s"),h(c,"style",P=`background-color: ${s[2]}`),O(c,"isOpen",s[7]),h(N,"class","svelte-18n6f7s"),h(F,"class","task__info-open svelte-18n6f7s"),O(F,"isHidden",s[7]),h(t,"class",z="task "+s[0]+" svelte-18n6f7s"),O(t,"isDisabled",s[3]),O(t,"isInfoOpen",s[5])},m(p,y){V(p,t,y),I(t,e),I(e,l),I(l,n),I(n,f),s[20](n),I(e,i),I(i,o),I(o,r),I(r,u),s[22](i),I(t,_),I(_,m),I(m,b),I(_,E),I(E,v),I(t,c);for(let q=0;q<a.length;q+=1)a[q].m(c,null);I(t,F),I(F,N),K||(j=[A(n,"input",s[21]),A(n,"keydown",s[17]),A(e,"click",s[12]),A(m,"click",M(s[13])),A(E,"click",M(s[23])),A(F,"click",M(s[25]))],K=!0)},p(p,y){y[0]&2&&re(f,p[1]),y[0]&128&&h(n,"contenteditable",p[7]),y[0]&16&&re(u,p[4]),y[0]&128&&O(e,"isEdit",p[7]),y[0]&128&&O(E,"isSelect",p[7]),y[0]&256&&O(E,"isChanged",p[8]),y[0]&512&&O(E,"isSave",p[9]),y[0]&128&&O(_,"isOpen",p[7]),y[0]&34820&&(H=p[11].filter(p[24]),a=le(a,y,J,1,p,H,g,c,Ye,Fe,null,Ne)),y[0]&4&&P!==(P=`background-color: ${p[2]}`)&&h(c,"style",P),y[0]&128&&O(c,"isOpen",p[7]),y[0]&128&&O(F,"isHidden",p[7]),y[0]&1&&z!==(z="task "+p[0]+" svelte-18n6f7s")&&h(t,"class",z),y[0]&9&&O(t,"isDisabled",p[3]),y[0]&33&&O(t,"isInfoOpen",p[5])},i:R,o:R,d(p){p&&k(t),s[20](null),s[22](null);for(let y=0;y<a.length;y+=1)a[y].d();K=!1,Ee(j)}}}function xe(s,t,e){let l,n;se(s,L,d=>e(27,l=d)),se(s,Oe,d=>e(11,n=d));let{class:f=""}=t,{text:i=""}=t,{color:o="#0029FF"}=t,{disabled:r=!1}=t,{id:u=null}=t,{date:_=""}=t,m=!1,b,E=!1,v=!1,c=!1,a,g;const P=()=>{if(E===!1){let d=l.map(D=>(u===D.id&&(D.done=!D.done),D));L.set(d)}},F=()=>{let d=l.filter(D=>D.id!=u);L.set(d)};function N(d){e(7,E=d!=null?d:!E),E===!1&&j()}const z=d=>{let D=l.map(S=>(u===S.id&&(S.color=d),S));L.set(D)};function K(d){e(5,m=d!=null?d:!m);let D=0;b.childNodes.forEach(S=>D+=S.clientHeight),b.style.setProperty("--taskInfoHeight",`${m?D:0}px`)}function j(){if(v){let d=a.innerText;H(d).then(()=>{e(8,v=!1),clearTimeout(g),e(9,c=!0),g=setTimeout(()=>{e(9,c=!1)},500)}),console.log("save",i)}}function H(d){if(typeof d=="string")return new Promise(D=>{L.set(l.map(S=>(S.id===u&&(S.text=d),S))),D()});throw new Error("The value is not equal to the string")}function J(d){let D=d.ctrlKey?!1:d.metaKey,S=d.keyCode;if(D&&S===83)return d.preventDefault(),j(),!1}function p(d=(D=>(D=a.innerText)!=null?D:i)()){return e(8,v=d!==i)}function y(d){ce[d?"unshift":"push"](()=>{a=d,e(10,a)})}const q=()=>p();function $(d){ce[d?"unshift":"push"](()=>{b=d,e(6,b)})}const x=()=>N(),ee=d=>d.color!=o,te=()=>K();return s.$$set=d=>{"class"in d&&e(0,f=d.class),"text"in d&&e(1,i=d.text),"color"in d&&e(2,o=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(19,u=d.id),"date"in d&&e(4,_=d.date)},[f,i,o,r,_,m,b,E,v,c,a,n,P,F,N,z,K,J,p,u,y,q,$,x,ee,te]}class Se extends Y{constructor(t){super();Q(this,t,xe,$e,je,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Ae(s,t,e){const l=s.slice();return l[4]=t[e],l}function qe(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ve(s,t){let e,l,n,f,i,o=R,r;return l=new Se({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=T("li"),W(l.$$.fragment),this.h()},l(u){e=w(u,"LI",{class:!0});var _=C(e);X(l.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(u,_){V(u,e,_),Z(l,e,null),r=!0},p(u,_){t=u;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){fe(e),o(),ue(e,i)},a(){o(),o=_e(e,i,ve,{duration:300})},i(u){r||(U(l.$$.fragment,u),de(()=>{f&&f.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){B(l.$$.fragment,u),n&&n.invalidate(),f=we(e,t[2],{key:t[4].id}),r=!1},d(u){u&&k(e),G(l),u&&f&&f.end()}}}function Pe(s,t){let e,l,n,f,i,o=R,r;return l=new Se({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=T("li"),W(l.$$.fragment),this.h()},l(u){e=w(u,"LI",{class:!0});var _=C(e);X(l.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(u,_){V(u,e,_),Z(l,e,null),r=!0},p(u,_){t=u;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){fe(e),o(),ue(e,i)},a(){o(),o=_e(e,i,ve,{duration:300})},i(u){r||(U(l.$$.fragment,u),de(()=>{f&&f.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){B(l.$$.fragment,u),n&&n.invalidate(),f=we(e,t[2],{key:t[4].id}),r=!1},d(u){u&&k(e),G(l),u&&f&&f.end()}}}function et(s){let t,e,l,n=[],f=new Map,i,o=[],r=new Map,u,_,m=s[1].filter(Ue);const b=c=>c[4].id;for(let c=0;c<m.length;c+=1){let a=qe(s,m,c),g=b(a);f.set(g,n[c]=Ve(g,a))}let E=s[1].filter(Be);const v=c=>c[4].id;for(let c=0;c<E.length;c+=1){let a=Ae(s,E,c),g=v(a);r.set(g,o[c]=Pe(g,a))}return{c(){t=T("section"),e=T("div"),l=T("ul");for(let c=0;c<n.length;c+=1)n[c].c();i=T("ul");for(let c=0;c<o.length;c+=1)o[c].c();this.h()},l(c){t=w(c,"SECTION",{class:!0});var a=C(t);e=w(a,"DIV",{class:!0});var g=C(e);l=w(g,"UL",{class:!0});var P=C(l);for(let N=0;N<n.length;N+=1)n[N].l(P);P.forEach(k),i=w(g,"UL",{class:!0});var F=C(i);for(let N=0;N<o.length;N+=1)o[N].l(F);F.forEach(k),g.forEach(k),a.forEach(k),this.h()},h(){h(l,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-q8mvyt"),h(t,"class",u="task-section "+s[0]+" svelte-q8mvyt")},m(c,a){V(c,t,a),I(t,e),I(e,l);for(let g=0;g<n.length;g+=1)n[g].m(l,null);I(e,i);for(let g=0;g<o.length;g+=1)o[g].m(i,null);_=!0},p(c,[a]){if(a&2){m=c[1].filter(Ue),he();for(let g=0;g<n.length;g+=1)n[g].r();n=le(n,a,b,1,c,m,f,l,ge,Ve,null,qe);for(let g=0;g<n.length;g+=1)n[g].a();me()}if(a&2){E=c[1].filter(Be),he();for(let g=0;g<o.length;g+=1)o[g].r();o=le(o,a,v,1,c,E,r,i,ge,Pe,null,Ae);for(let g=0;g<o.length;g+=1)o[g].a();me()}(!_||a&1&&u!==(u="task-section "+c[0]+" svelte-q8mvyt"))&&h(t,"class",u)},i(c){if(!_){for(let a=0;a<m.length;a+=1)U(n[a]);for(let a=0;a<E.length;a+=1)U(o[a]);_=!0}},o(c){for(let a=0;a<n.length;a+=1)B(n[a]);for(let a=0;a<o.length;a+=1)B(o[a]);_=!1},d(c){c&&k(t);for(let a=0;a<n.length;a+=1)n[a].d();for(let a=0;a<o.length;a+=1)o[a].d()}}}const Ue=s=>!s.done,Be=s=>s.done;function tt(s,t,e){let l;se(s,L,o=>e(1,l=o));let{class:n=""}=t;const[f,i]=Qe({duration:o=>Math.sqrt(o*200),fallback(o,r){const u=getComputedStyle(o),_=u.transform==="none"?"":u.transform;return{duration:600,easing:We,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return s.$$set=o=>{"class"in o&&e(0,n=o.class)},[n,l,f,i]}class lt extends Y{constructor(t){super();Q(this,t,tt,et,ne,{class:0})}}const st=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Le(s){let t,e,l,n=s[2].text&&Me(s);return{c(){t=T("button"),n&&n.c(),this.h()},l(f){t=w(f,"BUTTON",{class:!0});var i=C(t);n&&n.l(i),i.forEach(k),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(f,i){V(f,t,i),n&&n.m(t,null),e||(l=A(t,"click",M(s[6])),e=!0)},p(f,i){f[2].text?n?n.p(f,i):(n=Me(f),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(f){f&&k(t),n&&n.d(),e=!1,l()}}}function Me(s){let t=s[2].text+"",e;return{c(){e=ae(t)},l(l){e=ie(l,t)},m(l,n){V(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&re(e,t)},d(l){l&&k(e)}}}function nt(s){let t,e,l,n,f,i=s[2]&&Le(s);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(o){t=w(o,"DIV",{class:!0});var r=C(t);e=w(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){h(e,"placeholder",s[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),O(t,"isError",s[5])},m(o,r){V(o,t,r),I(t,e),Ce(e,s[4]),i&&i.m(t,null),s[11](t),n||(f=[A(e,"input",s[9]),A(e,"input",s[7]),A(e,"keydown",s[10])],n=!0)},p(o,[r]){r&2&&h(e,"placeholder",o[1]),r&16&&e.value!==o[4]&&Ce(e,o[4]),o[2]?i?i.p(o,r):(i=Le(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),r&37&&O(t,"isError",o[5])},i:R,o:R,d(o){o&&k(t),i&&i.d(),s[11](null),n=!1,Ee(f)}}}function ot(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:f=null}=t,i,o,r=!1;const u=Xe(),_=()=>{o?(u("submit",{value:o}),e(4,o="")):e(5,r=!0)},m=()=>{e(5,r=!1)},b=a=>{let g=a.key;g==="Control"&&u("color"),g==="Enter"&&_()};function E(){o=this.value,e(4,o)}const v=a=>b(a);function c(a){ce[a?"unshift":"push"](()=>{i=a,e(3,i)})}return s.$$set=a=>{"class"in a&&e(0,l=a.class),"placeholder"in a&&e(1,n=a.placeholder),"btn"in a&&e(2,f=a.btn)},[l,n,f,i,o,r,_,m,b,E,v,c]}class at extends Y{constructor(t){super();Q(this,t,ot,nt,ne,{class:0,placeholder:1,btn:2})}}function Re(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function ze(s,t){let e,l,n,f,i=R,o,r,u;return{key:s,first:null,c(){e=T("button"),this.h()},l(_){e=w(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(k),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,m){V(_,e,m),o=!0,r||(u=A(e,"click",M(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,m){t=_,(!o||m&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){f=e.getBoundingClientRect()},f(){fe(e),i(),ue(e,f)},a(){i(),i=_e(e,f,ve,{})},i(_){o||(de(()=>{n||(n=Ie(e,De,{},!0)),n.run(1)}),o=!0)},o(_){n||(n=Ie(e,De,{},!1)),n.run(0),o=!1},d(_){_&&k(e),_&&n&&n.end(),r=!1,u()}}}function it(s){let t,e,l,n,f=[],i=new Map,o,r,u,_,m,b=s[3].filter(s[7]);const E=v=>v[9].id;for(let v=0;v<b.length;v+=1){let c=Re(s,b,v),a=E(c);i.set(a,f[v]=ze(a,c))}return o=new at({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),o.$on("color",s[8]),o.$on("submit",s[4]),{c(){t=T("div"),e=T("div"),l=T("span");for(let v=0;v<f.length;v+=1)f[v].c();W(o.$$.fragment),this.h()},l(v){t=w(v,"DIV",{class:!0});var c=C(t);e=w(c,"DIV",{class:!0});var a=C(e);l=w(a,"SPAN",{class:!0,style:!0}),C(l).forEach(k);for(let g=0;g<f.length;g+=1)f[g].l(a);a.forEach(k),X(o.$$.fragment,c),c.forEach(k),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",n=`color: ${s[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),O(e,"isOpen",s[2]),h(t,"class",r="add-todo "+s[0]+" svelte-1hafqlz")},m(v,c){V(v,t,c),I(t,e),I(e,l);for(let a=0;a<f.length;a+=1)f[a].m(e,null);Z(o,t,null),u=!0,_||(m=A(l,"click",M(s[6])),_=!0)},p(v,[c]){if((!u||c&2&&n!==(n=`color: ${v[1]}`))&&h(l,"style",n),c&42){b=v[3].filter(v[7]),he();for(let a=0;a<f.length;a+=1)f[a].r();f=le(f,c,E,1,v,b,i,e,ge,ze,null,Re);for(let a=0;a<f.length;a+=1)f[a].a();me()}c&4&&O(e,"isOpen",v[2]),(!u||c&1&&r!==(r="add-todo "+v[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(v){if(!u){for(let c=0;c<b.length;c+=1)U(f[c]);U(o.$$.fragment,v),u=!0}},o(v){for(let c=0;c<f.length;c+=1)B(f[c]);B(o.$$.fragment,v),u=!1},d(v){v&&k(t);for(let c=0;c<f.length;c+=1)f[c].d();G(o),_=!1,m()}}}function rt(s,t,e){let l;se(s,Oe,b=>e(3,l=b));let{class:n=""}=t,f="#0029FF",i=!1;const o=b=>{let E={id:Date.now(),text:b.detail.value,color:f,done:!1,date:st(new Date,"dot")};L.update(v=>v=[E,...v])},r=b=>b&&e(1,f=b),u=()=>e(2,i=!i),_=b=>b.color!=f,m=()=>e(2,i=!i);return s.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,f,i,l,o,r,u,_,m]}class ct extends Y{constructor(t){super();Q(this,t,rt,it,ne,{class:0})}}function ft(s){let t,e,l,n,f,i,o;return n=new ct({}),i=new lt({props:{class:"mt-50"}}),{c(){t=Ze(),e=T("section"),l=T("div"),W(n.$$.fragment),W(i.$$.fragment),this.h()},l(r){Ge('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=Je(r),e=w(r,"SECTION",{class:!0});var _=C(e);l=w(_,"DIV",{class:!0});var m=C(l);X(n.$$.fragment,m),m.forEach(k),_.forEach(k),X(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",f=""+(s[0]+" mt-50 svelte-110abfo"))},m(r,u){V(r,t,u),V(r,e,u),I(e,l),Z(n,l,null),Z(i,r,u),o=!0},p(r,[u]){(!o||u&1&&f!==(f=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",f)},i(r){o||(U(n.$$.fragment,r),U(i.$$.fragment,r),o=!0)},o(r){B(n.$$.fragment,r),B(i.$$.fragment,r),o=!1},d(r){r&&k(t),r&&k(e),G(n),G(i,r)}}}function ut(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class dt extends Y{constructor(t){super();Q(this,t,ut,ft,ne,{class:0})}}export{dt as default};
