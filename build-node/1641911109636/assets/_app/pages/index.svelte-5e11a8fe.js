import{K as Ke,C as He,S as Y,i as Q,L as je,e as q,c as T,a as C,d as g,b as h,f as A,D as w,M as F,N as M,O as ye,t as oe,g as re,P as D,h as ie,Q as le,R as Ye,E as R,T as Ee,U as se,V as ce,s as ne,v as W,w as X,x as Z,W as ue,X as fe,Y as _e,p as P,Z as de,_ as qe,n as B,$ as Te,A as G,m as he,o as me,a0 as Qe,a1 as ke,a2 as ve,a3 as We,a4 as Ce,a5 as Xe,a6 as we,a7 as Ie,j as Ze,a8 as Ge,l as Je}from"../chunks/vendor-8ffd20c8.js";const L=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),De=Ke(L,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(a=>a.color).map(a=>a.color).concat(e),r=n.filter((a,i)=>n.indexOf(a)===i).map((a,i)=>({id:i,color:a}));t(r)});function Oe(s,t,e){const l=s.slice();return l[30]=t[e],l}function Ne(s,t){let e,l,n,u,r;return{key:s,first:null,c(){e=q("li"),l=q("button"),this.h()},l(a){e=T(a,"LI",{class:!0});var i=C(e);l=T(i,"BUTTON",{class:!0,style:!0}),C(l).forEach(g),i.forEach(g),this.h()},h(){h(l,"class","task__color-btn svelte-ukryfq"),h(l,"style",n=`background-color: ${t[30].color}`),h(e,"class","task__color-item svelte-ukryfq"),this.first=e},m(a,i){A(a,e,i),w(e,l),u||(r=F(l,"click",M(function(){ye(t[15](t[30].color))&&t[15](t[30].color).apply(this,arguments)})),u=!0)},p(a,i){t=a,i[0]&2052&&n!==(n=`background-color: ${t[30].color}`)&&h(l,"style",n)},d(a){a&&g(e),u=!1,r()}}}function $e(s){let t,e,l,n,u,r,a,i,f,_,m,b,E,v,c,o=[],k=new Map,U,N,O,z,K,j,H=s[11].filter(s[24]);const J=p=>p[30].id;for(let p=0;p<H.length;p+=1){let y=Oe(s,H,p),S=J(y);k.set(S,o[p]=Ne(S,y))}return{c(){t=q("div"),e=q("div"),l=q("div"),n=q("p"),u=oe(s[1]),r=q("div"),a=q("div"),i=q("span"),f=oe(s[4]),_=q("div"),m=q("button"),b=q("span"),E=q("button"),v=q("span"),c=q("ul");for(let p=0;p<o.length;p+=1)o[p].c();N=q("button"),O=q("span"),this.h()},l(p){t=T(p,"DIV",{class:!0});var y=C(t);e=T(y,"DIV",{class:!0});var S=C(e);l=T(S,"DIV",{class:!0});var $=C(l);n=T($,"P",{class:!0,contenteditable:!0});var x=C(n);u=re(x,s[1]),x.forEach(g),$.forEach(g),r=T(S,"DIV",{class:!0});var ee=C(r);a=T(ee,"DIV",{class:!0});var te=C(a);i=T(te,"SPAN",{class:!0});var d=C(i);f=re(d,s[4]),d.forEach(g),te.forEach(g),ee.forEach(g),S.forEach(g),_=T(y,"DIV",{class:!0});var I=C(_);m=T(I,"BUTTON",{class:!0});var V=C(m);b=T(V,"SPAN",{class:!0}),C(b).forEach(g),V.forEach(g),E=T(I,"BUTTON",{class:!0});var ge=C(E);v=T(ge,"SPAN",{class:!0}),C(v).forEach(g),ge.forEach(g),I.forEach(g),c=T(y,"UL",{class:!0,style:!0});var pe=C(c);for(let ae=0;ae<o.length;ae+=1)o[ae].l(pe);pe.forEach(g),N=T(y,"BUTTON",{class:!0});var be=C(N);O=T(be,"SPAN",{class:!0}),C(O).forEach(g),be.forEach(g),y.forEach(g),this.h()},h(){h(n,"class","task__main-content svelte-ukryfq"),h(n,"contenteditable",s[7]),h(l,"class","task__main-container svelte-ukryfq"),h(i,"class","svelte-ukryfq"),h(a,"class","task__info-content svelte-ukryfq"),h(r,"class","task__info svelte-ukryfq"),h(e,"class","task__main svelte-ukryfq"),D(e,"isEdit",s[7]),h(b,"class","svg-image-del svelte-ukryfq"),h(m,"class","task__menu-btn task__menu-btn_del svelte-ukryfq"),h(v,"class","svg-image-pen svelte-ukryfq"),h(E,"class","task__menu-btn task__menu-btn_edit svelte-ukryfq"),D(E,"isSelect",s[7]),D(E,"isChanged",s[8]),D(E,"isSave",s[9]),h(_,"class","task__circle task__menu svelte-ukryfq"),D(_,"isOpen",s[7]),h(c,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-ukryfq"),h(c,"style",U=`background-color: ${s[2]}`),D(c,"isOpen",s[7]),h(O,"class","svelte-ukryfq"),h(N,"class","task__info-open svelte-ukryfq"),D(N,"isHidden",s[7]),h(t,"class",z="task "+s[0]+" svelte-ukryfq"),D(t,"isDisabled",s[3]),D(t,"isInfoOpen",s[5])},m(p,y){A(p,t,y),w(t,e),w(e,l),w(l,n),w(n,u),s[20](n),w(e,r),w(r,a),w(a,i),w(i,f),s[22](r),w(t,_),w(_,m),w(m,b),w(_,E),w(E,v),w(t,c);for(let S=0;S<o.length;S+=1)o[S].m(c,null);w(t,N),w(N,O),K||(j=[F(n,"input",s[21]),F(n,"keydown",s[17]),F(e,"click",s[12]),F(m,"click",M(s[13])),F(E,"click",M(s[23])),F(N,"click",M(s[25]))],K=!0)},p(p,y){y[0]&2&&ie(u,p[1]),y[0]&128&&h(n,"contenteditable",p[7]),y[0]&16&&ie(f,p[4]),y[0]&128&&D(e,"isEdit",p[7]),y[0]&128&&D(E,"isSelect",p[7]),y[0]&256&&D(E,"isChanged",p[8]),y[0]&512&&D(E,"isSave",p[9]),y[0]&128&&D(_,"isOpen",p[7]),y[0]&34820&&(H=p[11].filter(p[24]),o=le(o,y,J,1,p,H,k,c,Ye,Ne,null,Oe)),y[0]&4&&U!==(U=`background-color: ${p[2]}`)&&h(c,"style",U),y[0]&128&&D(c,"isOpen",p[7]),y[0]&128&&D(N,"isHidden",p[7]),y[0]&1&&z!==(z="task "+p[0]+" svelte-ukryfq")&&h(t,"class",z),y[0]&9&&D(t,"isDisabled",p[3]),y[0]&33&&D(t,"isInfoOpen",p[5])},i:R,o:R,d(p){p&&g(t),s[20](null),s[22](null);for(let y=0;y<o.length;y+=1)o[y].d();K=!1,Ee(j)}}}function xe(s,t,e){let l,n;se(s,L,d=>e(27,l=d)),se(s,De,d=>e(11,n=d));let{class:u=""}=t,{text:r=""}=t,{color:a="#0029FF"}=t,{disabled:i=!1}=t,{id:f=null}=t,{date:_=""}=t,m=!1,b,E=!1,v=!1,c=!1,o,k;const U=()=>{if(E===!1){let d=l.map(I=>(f===I.id&&(I.done=!I.done),I));L.set(d)}},N=()=>{let d=l.filter(I=>I.id!=f);L.set(d)};function O(d){e(7,E=d!=null?d:!E),E===!1&&j()}const z=d=>{let I=l.map(V=>(f===V.id&&(V.color=d),V));L.set(I)};function K(d){e(5,m=d!=null?d:!m);let I=0;b.childNodes.forEach(V=>I+=V.clientHeight),b.style.setProperty("--taskInfoHeight",`${m?I:0}px`)}function j(){let d=o.innerText;H(d),clearTimeout(k),e(9,c=!0),k=setTimeout(()=>{e(9,c=!1)},500),console.log("save",r)}function H(d){if(typeof d=="string")L.set(l.map(I=>(I.id===f&&(I.text=d),I)));else throw new Error("The value is not equal to the string")}function J(d){let I=d.ctrlKey?!1:d.metaKey,V=d.keyCode;if(I&&V===83)return d.preventDefault(),j(),!1}function p(d=(I=>(I=o.innerText)!=null?I:r)()){return e(8,v=d!==r)}function y(d){ce[d?"unshift":"push"](()=>{o=d,e(10,o)})}const S=()=>p();function $(d){ce[d?"unshift":"push"](()=>{b=d,e(6,b)})}const x=()=>O(),ee=d=>d.color!=a,te=()=>K();return s.$$set=d=>{"class"in d&&e(0,u=d.class),"text"in d&&e(1,r=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,i=d.disabled),"id"in d&&e(19,f=d.id),"date"in d&&e(4,_=d.date)},[u,r,a,i,_,m,b,E,v,c,o,n,U,N,O,z,K,J,p,f,y,S,$,x,ee,te]}class Fe extends Y{constructor(t){super();Q(this,t,xe,$e,je,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Se(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ae(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ve(s,t){let e,l,n,u,r,a=R,i;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=q("li"),W(l.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=C(e);X(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(f,_){A(f,e,_),Z(l,e,null),i=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){r=e.getBoundingClientRect()},f(){ue(e),a(),fe(e,r)},a(){a(),a=_e(e,r,ke,{duration:300})},i(f){i||(P(l.$$.fragment,f),de(()=>{u&&u.end(1),n=qe(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),u=Te(e,t[2],{key:t[4].id}),i=!1},d(f){f&&g(e),G(l),f&&u&&u.end()}}}function Ue(s,t){let e,l,n,u,r,a=R,i;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=q("li"),W(l.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=C(e);X(l.$$.fragment,_),_.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(f,_){A(f,e,_),Z(l,e,null),i=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){r=e.getBoundingClientRect()},f(){ue(e),a(),fe(e,r)},a(){a(),a=_e(e,r,ke,{duration:300})},i(f){i||(P(l.$$.fragment,f),de(()=>{u&&u.end(1),n=qe(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),u=Te(e,t[2],{key:t[4].id}),i=!1},d(f){f&&g(e),G(l),f&&u&&u.end()}}}function et(s){let t,e,l,n=[],u=new Map,r,a=[],i=new Map,f,_,m=s[1].filter(Pe);const b=c=>c[4].id;for(let c=0;c<m.length;c+=1){let o=Ae(s,m,c),k=b(o);u.set(k,n[c]=Ve(k,o))}let E=s[1].filter(Be);const v=c=>c[4].id;for(let c=0;c<E.length;c+=1){let o=Se(s,E,c),k=v(o);i.set(k,a[c]=Ue(k,o))}return{c(){t=q("section"),e=q("div"),l=q("ul");for(let c=0;c<n.length;c+=1)n[c].c();r=q("ul");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){t=T(c,"SECTION",{class:!0});var o=C(t);e=T(o,"DIV",{class:!0});var k=C(e);l=T(k,"UL",{class:!0});var U=C(l);for(let O=0;O<n.length;O+=1)n[O].l(U);U.forEach(g),r=T(k,"UL",{class:!0});var N=C(r);for(let O=0;O<a.length;O+=1)a[O].l(N);N.forEach(g),k.forEach(g),o.forEach(g),this.h()},h(){h(l,"class","task-section__col"),h(r,"class","task-section__col"),h(e,"class","container task-section__grid svelte-q8mvyt"),h(t,"class",f="task-section "+s[0]+" svelte-q8mvyt")},m(c,o){A(c,t,o),w(t,e),w(e,l);for(let k=0;k<n.length;k+=1)n[k].m(l,null);w(e,r);for(let k=0;k<a.length;k+=1)a[k].m(r,null);_=!0},p(c,[o]){if(o&2){m=c[1].filter(Pe),he();for(let k=0;k<n.length;k+=1)n[k].r();n=le(n,o,b,1,c,m,u,l,ve,Ve,null,Ae);for(let k=0;k<n.length;k+=1)n[k].a();me()}if(o&2){E=c[1].filter(Be),he();for(let k=0;k<a.length;k+=1)a[k].r();a=le(a,o,v,1,c,E,i,r,ve,Ue,null,Se);for(let k=0;k<a.length;k+=1)a[k].a();me()}(!_||o&1&&f!==(f="task-section "+c[0]+" svelte-q8mvyt"))&&h(t,"class",f)},i(c){if(!_){for(let o=0;o<m.length;o+=1)P(n[o]);for(let o=0;o<E.length;o+=1)P(a[o]);_=!0}},o(c){for(let o=0;o<n.length;o+=1)B(n[o]);for(let o=0;o<a.length;o+=1)B(a[o]);_=!1},d(c){c&&g(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<a.length;o+=1)a[o].d()}}}const Pe=s=>!s.done,Be=s=>s.done;function tt(s,t,e){let l;se(s,L,a=>e(1,l=a));let{class:n=""}=t;const[u,r]=Qe({duration:a=>Math.sqrt(a*200),fallback(a,i){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:We,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return s.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,l,u,r]}class lt extends Y{constructor(t){super();Q(this,t,tt,et,ne,{class:0})}}const st=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Le(s){let t,e,l,n=s[2].text&&Me(s);return{c(){t=q("button"),n&&n.c(),this.h()},l(u){t=T(u,"BUTTON",{class:!0});var r=C(t);n&&n.l(r),r.forEach(g),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(u,r){A(u,t,r),n&&n.m(t,null),e||(l=F(t,"click",M(s[6])),e=!0)},p(u,r){u[2].text?n?n.p(u,r):(n=Me(u),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(u){u&&g(t),n&&n.d(),e=!1,l()}}}function Me(s){let t=s[2].text+"",e;return{c(){e=oe(t)},l(l){e=re(l,t)},m(l,n){A(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&ie(e,t)},d(l){l&&g(e)}}}function nt(s){let t,e,l,n,u,r=s[2]&&Le(s);return{c(){t=q("div"),e=q("input"),r&&r.c(),this.h()},l(a){t=T(a,"DIV",{class:!0});var i=C(t);e=T(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(g),this.h()},h(){h(e,"placeholder",s[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),D(t,"isError",s[5])},m(a,i){A(a,t,i),w(t,e),Ce(e,s[4]),r&&r.m(t,null),s[11](t),n||(u=[F(e,"input",s[9]),F(e,"input",s[7]),F(e,"keydown",s[10])],n=!0)},p(a,[i]){i&2&&h(e,"placeholder",a[1]),i&16&&e.value!==a[4]&&Ce(e,a[4]),a[2]?r?r.p(a,i):(r=Le(a),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),i&37&&D(t,"isError",a[5])},i:R,o:R,d(a){a&&g(t),r&&r.d(),s[11](null),n=!1,Ee(u)}}}function at(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:u=null}=t,r,a,i=!1;const f=Xe(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,i=!0)},m=()=>{e(5,i=!1)},b=o=>{let k=o.key;k==="Control"&&f("color"),k==="Enter"&&_()};function E(){a=this.value,e(4,a)}const v=o=>b(o);function c(o){ce[o?"unshift":"push"](()=>{r=o,e(3,r)})}return s.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,u=o.btn)},[l,n,u,r,a,i,_,m,b,E,v,c]}class ot extends Y{constructor(t){super();Q(this,t,at,nt,ne,{class:0,placeholder:1,btn:2})}}function Re(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function ze(s,t){let e,l,n,u,r=R,a,i,f;return{key:s,first:null,c(){e=q("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(g),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,m){A(_,e,m),a=!0,i||(f=F(e,"click",M(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),i=!0)},p(_,m){t=_,(!a||m&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){u=e.getBoundingClientRect()},f(){ue(e),r(),fe(e,u)},a(){r(),r=_e(e,u,ke,{})},i(_){a||(de(()=>{n||(n=we(e,Ie,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=we(e,Ie,{},!1)),n.run(0),a=!1},d(_){_&&g(e),_&&n&&n.end(),i=!1,f()}}}function rt(s){let t,e,l,n,u=[],r=new Map,a,i,f,_,m,b=s[3].filter(s[7]);const E=v=>v[9].id;for(let v=0;v<b.length;v+=1){let c=Re(s,b,v),o=E(c);r.set(o,u[v]=ze(o,c))}return a=new ot({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",s[8]),a.$on("submit",s[4]),{c(){t=q("div"),e=q("div"),l=q("span");for(let v=0;v<u.length;v+=1)u[v].c();W(a.$$.fragment),this.h()},l(v){t=T(v,"DIV",{class:!0});var c=C(t);e=T(c,"DIV",{class:!0});var o=C(e);l=T(o,"SPAN",{class:!0,style:!0}),C(l).forEach(g);for(let k=0;k<u.length;k+=1)u[k].l(o);o.forEach(g),X(a.$$.fragment,c),c.forEach(g),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",n=`color: ${s[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),D(e,"isOpen",s[2]),h(t,"class",i="add-todo "+s[0]+" svelte-1hafqlz")},m(v,c){A(v,t,c),w(t,e),w(e,l);for(let o=0;o<u.length;o+=1)u[o].m(e,null);Z(a,t,null),f=!0,_||(m=F(l,"click",M(s[6])),_=!0)},p(v,[c]){if((!f||c&2&&n!==(n=`color: ${v[1]}`))&&h(l,"style",n),c&42){b=v[3].filter(v[7]),he();for(let o=0;o<u.length;o+=1)u[o].r();u=le(u,c,E,1,v,b,r,e,ve,ze,null,Re);for(let o=0;o<u.length;o+=1)u[o].a();me()}c&4&&D(e,"isOpen",v[2]),(!f||c&1&&i!==(i="add-todo "+v[0]+" svelte-1hafqlz"))&&h(t,"class",i)},i(v){if(!f){for(let c=0;c<b.length;c+=1)P(u[c]);P(a.$$.fragment,v),f=!0}},o(v){for(let c=0;c<u.length;c+=1)B(u[c]);B(a.$$.fragment,v),f=!1},d(v){v&&g(t);for(let c=0;c<u.length;c+=1)u[c].d();G(a),_=!1,m()}}}function it(s,t,e){let l;se(s,De,b=>e(3,l=b));let{class:n=""}=t,u="#0029FF",r=!1;const a=b=>{let E={id:Date.now(),text:b.detail.value,color:u,done:!1,date:st(new Date,"dot")};L.update(v=>v=[E,...v])},i=b=>b&&e(1,u=b),f=()=>e(2,r=!r),_=b=>b.color!=u,m=()=>e(2,r=!r);return s.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,u,r,l,a,i,f,_,m]}class ct extends Y{constructor(t){super();Q(this,t,it,rt,ne,{class:0})}}function ut(s){let t,e,l,n,u,r,a;return n=new ct({}),r=new lt({props:{class:"mt-50"}}),{c(){t=Ze(),e=q("section"),l=q("div"),W(n.$$.fragment),W(r.$$.fragment),this.h()},l(i){Ge('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Je(i),e=T(i,"SECTION",{class:!0});var _=C(e);l=T(_,"DIV",{class:!0});var m=C(l);X(n.$$.fragment,m),m.forEach(g),_.forEach(g),X(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",u=""+(s[0]+" mt-50 svelte-110abfo"))},m(i,f){A(i,t,f),A(i,e,f),w(e,l),Z(n,l,null),Z(r,i,f),a=!0},p(i,[f]){(!a||f&1&&u!==(u=""+(i[0]+" mt-50 svelte-110abfo")))&&h(e,"class",u)},i(i){a||(P(n.$$.fragment,i),P(r.$$.fragment,i),a=!0)},o(i){B(n.$$.fragment,i),B(r.$$.fragment,i),a=!1},d(i){i&&g(t),i&&g(e),G(n),G(r,i)}}}function ft(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class dt extends Y{constructor(t){super();Q(this,t,ft,ut,ne,{class:0})}}export{dt as default};
