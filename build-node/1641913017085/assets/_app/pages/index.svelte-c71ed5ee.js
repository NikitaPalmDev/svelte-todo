import{K as ze,C as Ke,S as Y,i as Q,L as He,e as T,c as w,a as C,d as k,b as h,f as q,D as I,M as S,N as L,O as ye,t as oe,g as ie,P as O,h as re,Q as le,R as Ye,E as M,T as Ee,U as se,V as ce,s as ne,v as W,w as X,x as Z,W as ue,X as fe,Y as _e,p as P,Z as de,_ as Te,n as U,$ as we,A as G,m as he,o as me,a0 as Qe,a1 as ve,a2 as ge,a3 as We,a4 as Ce,a5 as Xe,a6 as Ie,a7 as De,j as Ze,a8 as Ge,l as Je}from"../chunks/vendor-8ffd20c8.js";const B=Ke([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=ze(B,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,r)=>n.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(i)});function Ne(s,t,e){const l=s.slice();return l[30]=t[e],l}function je(s,t){let e,l,n,u,i;return{key:s,first:null,c(){e=T("li"),l=T("button"),this.h()},l(a){e=w(a,"LI",{class:!0});var r=C(e);l=w(r,"BUTTON",{class:!0,style:!0}),C(l).forEach(k),r.forEach(k),this.h()},h(){h(l,"class","task__color-btn svelte-2sj3u0"),h(l,"style",n=`background-color: ${t[30].color}`),h(e,"class","task__color-item svelte-2sj3u0"),this.first=e},m(a,r){q(a,e,r),I(e,l),u||(i=S(l,"click",L(function(){ye(t[15](t[30].color))&&t[15](t[30].color).apply(this,arguments)})),u=!0)},p(a,r){t=a,r[0]&2052&&n!==(n=`background-color: ${t[30].color}`)&&h(l,"style",n)},d(a){a&&k(e),u=!1,i()}}}function $e(s){let t,e,l,n,u,i,a,r,f,_,m,b,E,v,c,o=[],g=new Map,V,j,N,R,z,H,K=s[11].filter(s[24]);const J=p=>p[30].id;for(let p=0;p<K.length;p+=1){let y=Ne(s,K,p),A=J(y);g.set(A,o[p]=je(A,y))}return{c(){t=T("div"),e=T("div"),l=T("div"),n=T("p"),u=oe(s[1]),i=T("div"),a=T("div"),r=T("span"),f=oe(s[4]),_=T("div"),m=T("button"),b=T("span"),E=T("button"),v=T("span"),c=T("ul");for(let p=0;p<o.length;p+=1)o[p].c();j=T("button"),N=T("span"),this.h()},l(p){t=w(p,"DIV",{class:!0});var y=C(t);e=w(y,"DIV",{class:!0});var A=C(e);l=w(A,"DIV",{class:!0});var $=C(l);n=w($,"P",{class:!0,contenteditable:!0});var x=C(n);u=ie(x,s[1]),x.forEach(k),$.forEach(k),i=w(A,"DIV",{class:!0});var ee=C(i);a=w(ee,"DIV",{class:!0});var te=C(a);r=w(te,"SPAN",{class:!0});var d=C(r);f=ie(d,s[4]),d.forEach(k),te.forEach(k),ee.forEach(k),A.forEach(k),_=w(y,"DIV",{class:!0});var D=C(_);m=w(D,"BUTTON",{class:!0});var F=C(m);b=w(F,"SPAN",{class:!0}),C(b).forEach(k),F.forEach(k),E=w(D,"BUTTON",{class:!0});var ke=C(E);v=w(ke,"SPAN",{class:!0}),C(v).forEach(k),ke.forEach(k),D.forEach(k),c=w(y,"UL",{class:!0,style:!0});var pe=C(c);for(let ae=0;ae<o.length;ae+=1)o[ae].l(pe);pe.forEach(k),j=w(y,"BUTTON",{class:!0});var be=C(j);N=w(be,"SPAN",{class:!0}),C(N).forEach(k),be.forEach(k),y.forEach(k),this.h()},h(){h(n,"class","task__main-content svelte-2sj3u0"),h(n,"contenteditable",s[7]),h(l,"class","task__main-container svelte-2sj3u0"),h(r,"class","svelte-2sj3u0"),h(a,"class","task__info-content svelte-2sj3u0"),h(i,"class","task__info svelte-2sj3u0"),h(e,"class","task__main svelte-2sj3u0"),O(e,"isEdit",s[7]),h(b,"class","svg-image-del svelte-2sj3u0"),h(m,"class","task__menu-btn task__menu-btn_del svelte-2sj3u0"),h(v,"class","svg-image-pen svelte-2sj3u0"),h(E,"class","task__menu-btn task__menu-btn_edit svelte-2sj3u0"),O(E,"isSelect",s[7]),O(E,"isChanged",s[8]),O(E,"isSave",s[9]),h(_,"class","task__circle task__menu svelte-2sj3u0"),O(_,"isOpen",s[7]),h(c,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-2sj3u0"),h(c,"style",V=`background-color: ${s[2]}`),O(c,"isOpen",s[7]),h(N,"class","svelte-2sj3u0"),h(j,"class","task__info-open svelte-2sj3u0"),O(j,"isHidden",s[7]),h(t,"class",R="task "+s[0]+" svelte-2sj3u0"),O(t,"isDisabled",s[3]),O(t,"isInfoOpen",s[5])},m(p,y){q(p,t,y),I(t,e),I(e,l),I(l,n),I(n,u),s[20](n),I(e,i),I(i,a),I(a,r),I(r,f),s[22](i),I(t,_),I(_,m),I(m,b),I(_,E),I(E,v),I(t,c);for(let A=0;A<o.length;A+=1)o[A].m(c,null);I(t,j),I(j,N),z||(H=[S(n,"input",s[21]),S(n,"keydown",s[17]),S(e,"click",s[12]),S(m,"click",L(s[13])),S(E,"click",L(s[23])),S(j,"click",L(s[25]))],z=!0)},p(p,y){y[0]&2&&re(u,p[1]),y[0]&128&&h(n,"contenteditable",p[7]),y[0]&16&&re(f,p[4]),y[0]&128&&O(e,"isEdit",p[7]),y[0]&128&&O(E,"isSelect",p[7]),y[0]&256&&O(E,"isChanged",p[8]),y[0]&512&&O(E,"isSave",p[9]),y[0]&128&&O(_,"isOpen",p[7]),y[0]&34820&&(K=p[11].filter(p[24]),o=le(o,y,J,1,p,K,g,c,Ye,je,null,Ne)),y[0]&4&&V!==(V=`background-color: ${p[2]}`)&&h(c,"style",V),y[0]&128&&O(c,"isOpen",p[7]),y[0]&128&&O(j,"isHidden",p[7]),y[0]&1&&R!==(R="task "+p[0]+" svelte-2sj3u0")&&h(t,"class",R),y[0]&9&&O(t,"isDisabled",p[3]),y[0]&33&&O(t,"isInfoOpen",p[5])},i:M,o:M,d(p){p&&k(t),s[20](null),s[22](null);for(let y=0;y<o.length;y+=1)o[y].d();z=!1,Ee(H)}}}function xe(s,t,e){let l,n;se(s,B,d=>e(27,l=d)),se(s,Oe,d=>e(11,n=d));let{class:u=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,m=!1,b,E=!1,v=!1,c=!1,o,g;const V=()=>{if(E===!1){let d=l.map(D=>(f===D.id&&(D.done=!D.done),D));B.set(d)}},j=()=>{let d=l.filter(D=>D.id!=f);B.set(d)};function N(d){e(7,E=d!=null?d:!E),E===!1&&H()}const R=d=>{let D=l.map(F=>(f===F.id&&(F.color=d),F));B.set(D)};function z(d){e(5,m=d!=null?d:!m);let D=0;b.childNodes.forEach(F=>D+=F.clientHeight),b.style.setProperty("--taskInfoHeight",`${m?D:0}px`)}function H(){if(v){let d=o.innerText;K(d).then(()=>{e(8,v=!1),clearTimeout(g),e(9,c=!0),g=setTimeout(()=>{e(9,c=!1)},500)})}}function K(d){if(typeof d=="string")return new Promise(D=>{B.set(l.map(F=>(F.id===f&&(F.text=d),F))),D()});throw new Error("The value is not equal to the string")}function J(d){let D=d.ctrlKey?!1:d.metaKey,F=d.keyCode;if(D&&F===83)return d.preventDefault(),H(),!1}function p(d=(D=>(D=o.innerText)!=null?D:i)()){return e(8,v=d!==i)}function y(d){ce[d?"unshift":"push"](()=>{o=d,e(10,o)})}const A=()=>p();function $(d){ce[d?"unshift":"push"](()=>{b=d,e(6,b)})}const x=()=>N(),ee=d=>d.color!=a,te=()=>z();return s.$$set=d=>{"class"in d&&e(0,u=d.class),"text"in d&&e(1,i=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(19,f=d.id),"date"in d&&e(4,_=d.date)},[u,i,a,r,_,m,b,E,v,c,o,n,V,j,N,R,z,J,p,f,y,A,$,x,ee,te]}class Fe extends Y{constructor(t){super();Q(this,t,xe,$e,He,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Se(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ae(s,t,e){const l=s.slice();return l[4]=t[e],l}function qe(s,t){let e,l,n,u,i,a=M,r;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=T("li"),W(l.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=C(e);X(l.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(f,_){q(f,e,_),Z(l,e,null),r=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){ue(e),a(),fe(e,i)},a(){a(),a=_e(e,i,ve,{duration:300})},i(f){r||(P(l.$$.fragment,f),de(()=>{u&&u.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){U(l.$$.fragment,f),n&&n.invalidate(),u=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),G(l),f&&u&&u.end()}}}function Ve(s,t){let e,l,n,u,i,a=M,r;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=T("li"),W(l.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=C(e);X(l.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(f,_){q(f,e,_),Z(l,e,null),r=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){i=e.getBoundingClientRect()},f(){ue(e),a(),fe(e,i)},a(){a(),a=_e(e,i,ve,{duration:300})},i(f){r||(P(l.$$.fragment,f),de(()=>{u&&u.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){U(l.$$.fragment,f),n&&n.invalidate(),u=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),G(l),f&&u&&u.end()}}}function et(s){let t,e,l,n=[],u=new Map,i,a=[],r=new Map,f,_,m=s[1].filter(Pe);const b=c=>c[4].id;for(let c=0;c<m.length;c+=1){let o=Ae(s,m,c),g=b(o);u.set(g,n[c]=qe(g,o))}let E=s[1].filter(Ue);const v=c=>c[4].id;for(let c=0;c<E.length;c+=1){let o=Se(s,E,c),g=v(o);r.set(g,a[c]=Ve(g,o))}return{c(){t=T("section"),e=T("div"),l=T("ul");for(let c=0;c<n.length;c+=1)n[c].c();i=T("ul");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){t=w(c,"SECTION",{class:!0});var o=C(t);e=w(o,"DIV",{class:!0});var g=C(e);l=w(g,"UL",{class:!0});var V=C(l);for(let N=0;N<n.length;N+=1)n[N].l(V);V.forEach(k),i=w(g,"UL",{class:!0});var j=C(i);for(let N=0;N<a.length;N+=1)a[N].l(j);j.forEach(k),g.forEach(k),o.forEach(k),this.h()},h(){h(l,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-q8mvyt"),h(t,"class",f="task-section "+s[0]+" svelte-q8mvyt")},m(c,o){q(c,t,o),I(t,e),I(e,l);for(let g=0;g<n.length;g+=1)n[g].m(l,null);I(e,i);for(let g=0;g<a.length;g+=1)a[g].m(i,null);_=!0},p(c,[o]){if(o&2){m=c[1].filter(Pe),he();for(let g=0;g<n.length;g+=1)n[g].r();n=le(n,o,b,1,c,m,u,l,ge,qe,null,Ae);for(let g=0;g<n.length;g+=1)n[g].a();me()}if(o&2){E=c[1].filter(Ue),he();for(let g=0;g<a.length;g+=1)a[g].r();a=le(a,o,v,1,c,E,r,i,ge,Ve,null,Se);for(let g=0;g<a.length;g+=1)a[g].a();me()}(!_||o&1&&f!==(f="task-section "+c[0]+" svelte-q8mvyt"))&&h(t,"class",f)},i(c){if(!_){for(let o=0;o<m.length;o+=1)P(n[o]);for(let o=0;o<E.length;o+=1)P(a[o]);_=!0}},o(c){for(let o=0;o<n.length;o+=1)U(n[o]);for(let o=0;o<a.length;o+=1)U(a[o]);_=!1},d(c){c&&k(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<a.length;o+=1)a[o].d()}}}const Pe=s=>!s.done,Ue=s=>s.done;function tt(s,t,e){let l;se(s,B,a=>e(1,l=a));let{class:n=""}=t;const[u,i]=Qe({duration:a=>Math.sqrt(a*200),fallback(a,r){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:We,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return s.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,l,u,i]}class lt extends Y{constructor(t){super();Q(this,t,tt,et,ne,{class:0})}}const st=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Be(s){let t,e,l,n=s[2].text&&Le(s);return{c(){t=T("button"),n&&n.c(),this.h()},l(u){t=w(u,"BUTTON",{class:!0});var i=C(t);n&&n.l(i),i.forEach(k),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(u,i){q(u,t,i),n&&n.m(t,null),e||(l=S(t,"click",L(s[6])),e=!0)},p(u,i){u[2].text?n?n.p(u,i):(n=Le(u),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(u){u&&k(t),n&&n.d(),e=!1,l()}}}function Le(s){let t=s[2].text+"",e;return{c(){e=oe(t)},l(l){e=ie(l,t)},m(l,n){q(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&re(e,t)},d(l){l&&k(e)}}}function nt(s){let t,e,l,n,u,i=s[2]&&Be(s);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(a){t=w(a,"DIV",{class:!0});var r=C(t);e=w(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){h(e,"placeholder",s[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),O(t,"isError",s[5])},m(a,r){q(a,t,r),I(t,e),Ce(e,s[4]),i&&i.m(t,null),s[11](t),n||(u=[S(e,"input",s[9]),S(e,"input",s[7]),S(e,"keydown",s[10])],n=!0)},p(a,[r]){r&2&&h(e,"placeholder",a[1]),r&16&&e.value!==a[4]&&Ce(e,a[4]),a[2]?i?i.p(a,r):(i=Be(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),r&37&&O(t,"isError",a[5])},i:M,o:M,d(a){a&&k(t),i&&i.d(),s[11](null),n=!1,Ee(u)}}}function at(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:u=null}=t,i,a,r=!1;const f=Xe(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,r=!0)},m=()=>{e(5,r=!1)},b=o=>{let g=o.key;g==="Control"&&f("color"),g==="Enter"&&_()};function E(){a=this.value,e(4,a)}const v=o=>b(o);function c(o){ce[o?"unshift":"push"](()=>{i=o,e(3,i)})}return s.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,u=o.btn)},[l,n,u,i,a,r,_,m,b,E,v,c]}class ot extends Y{constructor(t){super();Q(this,t,at,nt,ne,{class:0,placeholder:1,btn:2})}}function Me(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function Re(s,t){let e,l,n,u,i=M,a,r,f;return{key:s,first:null,c(){e=T("button"),this.h()},l(_){e=w(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(k),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,m){q(_,e,m),a=!0,r||(f=S(e,"click",L(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,m){t=_,(!a||m&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){u=e.getBoundingClientRect()},f(){ue(e),i(),fe(e,u)},a(){i(),i=_e(e,u,ve,{})},i(_){a||(de(()=>{n||(n=Ie(e,De,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ie(e,De,{},!1)),n.run(0),a=!1},d(_){_&&k(e),_&&n&&n.end(),r=!1,f()}}}function it(s){let t,e,l,n,u=[],i=new Map,a,r,f,_,m,b=s[3].filter(s[7]);const E=v=>v[9].id;for(let v=0;v<b.length;v+=1){let c=Me(s,b,v),o=E(c);i.set(o,u[v]=Re(o,c))}return a=new ot({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",s[8]),a.$on("submit",s[4]),{c(){t=T("div"),e=T("div"),l=T("span");for(let v=0;v<u.length;v+=1)u[v].c();W(a.$$.fragment),this.h()},l(v){t=w(v,"DIV",{class:!0});var c=C(t);e=w(c,"DIV",{class:!0});var o=C(e);l=w(o,"SPAN",{class:!0,style:!0}),C(l).forEach(k);for(let g=0;g<u.length;g+=1)u[g].l(o);o.forEach(k),X(a.$$.fragment,c),c.forEach(k),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",n=`color: ${s[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),O(e,"isOpen",s[2]),h(t,"class",r="add-todo "+s[0]+" svelte-1hafqlz")},m(v,c){q(v,t,c),I(t,e),I(e,l);for(let o=0;o<u.length;o+=1)u[o].m(e,null);Z(a,t,null),f=!0,_||(m=S(l,"click",L(s[6])),_=!0)},p(v,[c]){if((!f||c&2&&n!==(n=`color: ${v[1]}`))&&h(l,"style",n),c&42){b=v[3].filter(v[7]),he();for(let o=0;o<u.length;o+=1)u[o].r();u=le(u,c,E,1,v,b,i,e,ge,Re,null,Me);for(let o=0;o<u.length;o+=1)u[o].a();me()}c&4&&O(e,"isOpen",v[2]),(!f||c&1&&r!==(r="add-todo "+v[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(v){if(!f){for(let c=0;c<b.length;c+=1)P(u[c]);P(a.$$.fragment,v),f=!0}},o(v){for(let c=0;c<u.length;c+=1)U(u[c]);U(a.$$.fragment,v),f=!1},d(v){v&&k(t);for(let c=0;c<u.length;c+=1)u[c].d();G(a),_=!1,m()}}}function rt(s,t,e){let l;se(s,Oe,b=>e(3,l=b));let{class:n=""}=t,u="#0029FF",i=!1;const a=b=>{let E={id:Date.now(),text:b.detail.value,color:u,done:!1,date:st(new Date,"dot")};B.update(v=>v=[E,...v])},r=b=>b&&e(1,u=b),f=()=>e(2,i=!i),_=b=>b.color!=u,m=()=>e(2,i=!i);return s.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,u,i,l,a,r,f,_,m]}class ct extends Y{constructor(t){super();Q(this,t,rt,it,ne,{class:0})}}function ut(s){let t,e,l,n,u,i,a;return n=new ct({}),i=new lt({props:{class:"mt-50"}}),{c(){t=Ze(),e=T("section"),l=T("div"),W(n.$$.fragment),W(i.$$.fragment),this.h()},l(r){Ge('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=Je(r),e=w(r,"SECTION",{class:!0});var _=C(e);l=w(_,"DIV",{class:!0});var m=C(l);X(n.$$.fragment,m),m.forEach(k),_.forEach(k),X(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",u=""+(s[0]+" mt-50 svelte-110abfo"))},m(r,f){q(r,t,f),q(r,e,f),I(e,l),Z(n,l,null),Z(i,r,f),a=!0},p(r,[f]){(!a||f&1&&u!==(u=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",u)},i(r){a||(P(n.$$.fragment,r),P(i.$$.fragment,r),a=!0)},o(r){U(n.$$.fragment,r),U(i.$$.fragment,r),a=!1},d(r){r&&k(t),r&&k(e),G(n),G(i,r)}}}function ft(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class dt extends Y{constructor(t){super();Q(this,t,ft,ut,ne,{class:0})}}export{dt as default};
