import{K as Ke,C as He,S as Q,i as W,L as je,e as q,c as T,a as C,d as g,b as d,f as A,D as I,M as F,N as L,O as ye,t as ae,g as oe,P as w,h as re,Q as te,R as Ye,E as M,T as Ee,U as le,V as ie,s as se,v as X,w as Z,x as G,W as ce,X as ue,Y as fe,p as P,Z as _e,_ as qe,n as B,$ as Te,A as J,m as de,o as he,a0 as Qe,a1 as ke,a2 as me,a3 as We,a4 as Ce,a5 as Xe,a6 as Ie,a7 as we,j as Ze,a8 as Ge,l as Je}from"../chunks/vendor-8ffd20c8.js";const R=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),De=Ke(R,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(a=>a.color).map(a=>a.color).concat(e),r=n.filter((a,i)=>n.indexOf(a)===i).map((a,i)=>({id:i,color:a}));t(r)});function Oe(s,t,e){const l=s.slice();return l[29]=t[e],l}function Ne(s,t){let e,l,n,u,r;return{key:s,first:null,c(){e=q("li"),l=q("button"),this.h()},l(a){e=T(a,"LI",{class:!0});var i=C(e);l=T(i,"BUTTON",{class:!0,style:!0}),C(l).forEach(g),i.forEach(g),this.h()},h(){d(l,"class","task__color-btn svelte-ukryfq"),d(l,"style",n=`background-color: ${t[29].color}`),d(e,"class","task__color-item svelte-ukryfq"),this.first=e},m(a,i){A(a,e,i),I(e,l),u||(r=F(l,"click",L(function(){ye(t[15](t[29].color))&&t[15](t[29].color).apply(this,arguments)})),u=!0)},p(a,i){t=a,i[0]&2052&&n!==(n=`background-color: ${t[29].color}`)&&d(l,"style",n)},d(a){a&&g(e),u=!1,r()}}}function $e(s){let t,e,l,n,u,r,a,i,f,_,k,b,E,v,c,o=[],m=new Map,U,N,O,z,K,j,H=s[11].filter(s[24]);const Y=p=>p[29].id;for(let p=0;p<H.length;p+=1){let y=Oe(s,H,p),S=Y(y);m.set(S,o[p]=Ne(S,y))}return{c(){t=q("div"),e=q("div"),l=q("div"),n=q("p"),u=ae(s[1]),r=q("div"),a=q("div"),i=q("span"),f=ae(s[4]),_=q("div"),k=q("button"),b=q("span"),E=q("button"),v=q("span"),c=q("ul");for(let p=0;p<o.length;p+=1)o[p].c();N=q("button"),O=q("span"),this.h()},l(p){t=T(p,"DIV",{class:!0});var y=C(t);e=T(y,"DIV",{class:!0});var S=C(e);l=T(S,"DIV",{class:!0});var $=C(l);n=T($,"P",{class:!0,contenteditable:!0});var x=C(n);u=oe(x,s[1]),x.forEach(g),$.forEach(g),r=T(S,"DIV",{class:!0});var ee=C(r);a=T(ee,"DIV",{class:!0});var h=C(a);i=T(h,"SPAN",{class:!0});var D=C(i);f=oe(D,s[4]),D.forEach(g),h.forEach(g),ee.forEach(g),S.forEach(g),_=T(y,"DIV",{class:!0});var V=C(_);k=T(V,"BUTTON",{class:!0});var ve=C(k);b=T(ve,"SPAN",{class:!0}),C(b).forEach(g),ve.forEach(g),E=T(V,"BUTTON",{class:!0});var ge=C(E);v=T(ge,"SPAN",{class:!0}),C(v).forEach(g),ge.forEach(g),V.forEach(g),c=T(y,"UL",{class:!0,style:!0});var pe=C(c);for(let ne=0;ne<o.length;ne+=1)o[ne].l(pe);pe.forEach(g),N=T(y,"BUTTON",{class:!0});var be=C(N);O=T(be,"SPAN",{class:!0}),C(O).forEach(g),be.forEach(g),y.forEach(g),this.h()},h(){d(n,"class","task__main-content svelte-ukryfq"),d(n,"contenteditable",s[7]),d(l,"class","task__main-container svelte-ukryfq"),d(i,"class","svelte-ukryfq"),d(a,"class","task__info-content svelte-ukryfq"),d(r,"class","task__info svelte-ukryfq"),d(e,"class","task__main svelte-ukryfq"),w(e,"isEdit",s[7]),d(b,"class","svg-image-del svelte-ukryfq"),d(k,"class","task__menu-btn task__menu-btn_del svelte-ukryfq"),d(v,"class","svg-image-pen svelte-ukryfq"),d(E,"class","task__menu-btn task__menu-btn_edit svelte-ukryfq"),w(E,"isSelect",s[7]),w(E,"isChanged",s[8]),w(E,"isSave",s[9]),d(_,"class","task__circle task__menu svelte-ukryfq"),w(_,"isOpen",s[7]),d(c,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-ukryfq"),d(c,"style",U=`background-color: ${s[2]}`),w(c,"isOpen",s[7]),d(O,"class","svelte-ukryfq"),d(N,"class","task__info-open svelte-ukryfq"),w(N,"isHidden",s[7]),d(t,"class",z="task "+s[0]+" svelte-ukryfq"),w(t,"isDisabled",s[3]),w(t,"isInfoOpen",s[5])},m(p,y){A(p,t,y),I(t,e),I(e,l),I(l,n),I(n,u),s[20](n),I(e,r),I(r,a),I(a,i),I(i,f),s[22](r),I(t,_),I(_,k),I(k,b),I(_,E),I(E,v),I(t,c);for(let S=0;S<o.length;S+=1)o[S].m(c,null);I(t,N),I(N,O),K||(j=[F(n,"input",s[21]),F(n,"keydown",s[17]),F(e,"click",s[12]),F(k,"click",L(s[13])),F(E,"click",L(s[23])),F(N,"click",L(s[25]))],K=!0)},p(p,y){y[0]&2&&re(u,p[1]),y[0]&128&&d(n,"contenteditable",p[7]),y[0]&16&&re(f,p[4]),y[0]&128&&w(e,"isEdit",p[7]),y[0]&128&&w(E,"isSelect",p[7]),y[0]&256&&w(E,"isChanged",p[8]),y[0]&512&&w(E,"isSave",p[9]),y[0]&128&&w(_,"isOpen",p[7]),y[0]&34820&&(H=p[11].filter(p[24]),o=te(o,y,Y,1,p,H,m,c,Ye,Ne,null,Oe)),y[0]&4&&U!==(U=`background-color: ${p[2]}`)&&d(c,"style",U),y[0]&128&&w(c,"isOpen",p[7]),y[0]&128&&w(N,"isHidden",p[7]),y[0]&1&&z!==(z="task "+p[0]+" svelte-ukryfq")&&d(t,"class",z),y[0]&9&&w(t,"isDisabled",p[3]),y[0]&33&&w(t,"isInfoOpen",p[5])},i:M,o:M,d(p){p&&g(t),s[20](null),s[22](null);for(let y=0;y<o.length;y+=1)o[y].d();K=!1,Ee(j)}}}function xe(s,t,e){let l,n;le(s,R,h=>e(27,l=h)),le(s,De,h=>e(11,n=h));let{class:u=""}=t,{text:r=""}=t,{color:a="#0029FF"}=t,{disabled:i=!1}=t,{id:f=null}=t,{date:_=""}=t,k=!1,b,E=!1,v=!1,c=!1,o,m;const U=()=>{if(E===!1){let h=l.map(D=>(f===D.id&&(D.done=!D.done),D));R.set(h)}},N=()=>{let h=l.filter(D=>D.id!=f);R.set(h)};function O(h){e(7,E=h!=null?h:!E),E===!1&&j()}const z=h=>{let D=l.map(V=>(f===V.id&&(V.color=h),V));R.set(D)};function K(h){e(5,k=h!=null?h:!k);let D=0;b.childNodes.forEach(V=>D+=V.clientHeight),b.style.setProperty("--taskInfoHeight",`${k?D:0}px`)}function j(){o.innerText,clearTimeout(m),e(9,c=!0),m=setTimeout(()=>{e(9,c=!1)},500),console.log("save",r)}function H(h){let D=h.ctrlKey?!1:h.metaKey,V=h.keyCode;if(D&&V===83)return h.preventDefault(),j(),!1}function Y(h=(D=>(D=o.innerText)!=null?D:r)()){return e(8,v=h!==r)}function p(h){ie[h?"unshift":"push"](()=>{o=h,e(10,o)})}const y=()=>Y();function S(h){ie[h?"unshift":"push"](()=>{b=h,e(6,b)})}const $=()=>O(),x=h=>h.color!=a,ee=()=>K();return s.$$set=h=>{"class"in h&&e(0,u=h.class),"text"in h&&e(1,r=h.text),"color"in h&&e(2,a=h.color),"disabled"in h&&e(3,i=h.disabled),"id"in h&&e(19,f=h.id),"date"in h&&e(4,_=h.date)},[u,r,a,i,_,k,b,E,v,c,o,n,U,N,O,z,K,H,Y,f,p,y,S,$,x,ee]}class Fe extends Q{constructor(t){super();W(this,t,xe,$e,je,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Se(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ae(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ve(s,t){let e,l,n,u,r,a=M,i;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=q("li"),X(l.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=C(e);Z(l.$$.fragment,_),_.forEach(g),this.h()},h(){d(e,"class","task-section__item"),this.first=e},m(f,_){A(f,e,_),G(l,e,null),i=!0},p(f,_){t=f;const k={};_&2&&(k.text=t[4].text),_&2&&(k.color=t[4].color?t[4].color:null),_&2&&(k.id=t[4].id),_&2&&(k.date=t[4].date),l.$set(k)},r(){r=e.getBoundingClientRect()},f(){ce(e),a(),ue(e,r)},a(){a(),a=fe(e,r,ke,{duration:300})},i(f){i||(P(l.$$.fragment,f),_e(()=>{u&&u.end(1),n=qe(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),u=Te(e,t[2],{key:t[4].id}),i=!1},d(f){f&&g(e),J(l),f&&u&&u.end()}}}function Ue(s,t){let e,l,n,u,r,a=M,i;return l=new Fe({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=q("li"),X(l.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=C(e);Z(l.$$.fragment,_),_.forEach(g),this.h()},h(){d(e,"class","task-section__item"),this.first=e},m(f,_){A(f,e,_),G(l,e,null),i=!0},p(f,_){t=f;const k={};_&2&&(k.text=t[4].text),_&2&&(k.color=t[4].color?t[4].color:null),_&2&&(k.id=t[4].id),_&2&&(k.date=t[4].date),l.$set(k)},r(){r=e.getBoundingClientRect()},f(){ce(e),a(),ue(e,r)},a(){a(),a=fe(e,r,ke,{duration:300})},i(f){i||(P(l.$$.fragment,f),_e(()=>{u&&u.end(1),n=qe(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){B(l.$$.fragment,f),n&&n.invalidate(),u=Te(e,t[2],{key:t[4].id}),i=!1},d(f){f&&g(e),J(l),f&&u&&u.end()}}}function et(s){let t,e,l,n=[],u=new Map,r,a=[],i=new Map,f,_,k=s[1].filter(Pe);const b=c=>c[4].id;for(let c=0;c<k.length;c+=1){let o=Ae(s,k,c),m=b(o);u.set(m,n[c]=Ve(m,o))}let E=s[1].filter(Be);const v=c=>c[4].id;for(let c=0;c<E.length;c+=1){let o=Se(s,E,c),m=v(o);i.set(m,a[c]=Ue(m,o))}return{c(){t=q("section"),e=q("div"),l=q("ul");for(let c=0;c<n.length;c+=1)n[c].c();r=q("ul");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){t=T(c,"SECTION",{class:!0});var o=C(t);e=T(o,"DIV",{class:!0});var m=C(e);l=T(m,"UL",{class:!0});var U=C(l);for(let O=0;O<n.length;O+=1)n[O].l(U);U.forEach(g),r=T(m,"UL",{class:!0});var N=C(r);for(let O=0;O<a.length;O+=1)a[O].l(N);N.forEach(g),m.forEach(g),o.forEach(g),this.h()},h(){d(l,"class","task-section__col"),d(r,"class","task-section__col"),d(e,"class","container task-section__grid svelte-q8mvyt"),d(t,"class",f="task-section "+s[0]+" svelte-q8mvyt")},m(c,o){A(c,t,o),I(t,e),I(e,l);for(let m=0;m<n.length;m+=1)n[m].m(l,null);I(e,r);for(let m=0;m<a.length;m+=1)a[m].m(r,null);_=!0},p(c,[o]){if(o&2){k=c[1].filter(Pe),de();for(let m=0;m<n.length;m+=1)n[m].r();n=te(n,o,b,1,c,k,u,l,me,Ve,null,Ae);for(let m=0;m<n.length;m+=1)n[m].a();he()}if(o&2){E=c[1].filter(Be),de();for(let m=0;m<a.length;m+=1)a[m].r();a=te(a,o,v,1,c,E,i,r,me,Ue,null,Se);for(let m=0;m<a.length;m+=1)a[m].a();he()}(!_||o&1&&f!==(f="task-section "+c[0]+" svelte-q8mvyt"))&&d(t,"class",f)},i(c){if(!_){for(let o=0;o<k.length;o+=1)P(n[o]);for(let o=0;o<E.length;o+=1)P(a[o]);_=!0}},o(c){for(let o=0;o<n.length;o+=1)B(n[o]);for(let o=0;o<a.length;o+=1)B(a[o]);_=!1},d(c){c&&g(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<a.length;o+=1)a[o].d()}}}const Pe=s=>!s.done,Be=s=>s.done;function tt(s,t,e){let l;le(s,R,a=>e(1,l=a));let{class:n=""}=t;const[u,r]=Qe({duration:a=>Math.sqrt(a*200),fallback(a,i){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:We,css:k=>`
					transform: ${_} scale(${k});
					opacity: ${k}
				`}}});return s.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,l,u,r]}class lt extends Q{constructor(t){super();W(this,t,tt,et,se,{class:0})}}const st=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Le(s){let t,e,l,n=s[2].text&&Me(s);return{c(){t=q("button"),n&&n.c(),this.h()},l(u){t=T(u,"BUTTON",{class:!0});var r=C(t);n&&n.l(r),r.forEach(g),this.h()},h(){d(t,"class","btn svelte-1yy2xse")},m(u,r){A(u,t,r),n&&n.m(t,null),e||(l=F(t,"click",L(s[6])),e=!0)},p(u,r){u[2].text?n?n.p(u,r):(n=Me(u),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(u){u&&g(t),n&&n.d(),e=!1,l()}}}function Me(s){let t=s[2].text+"",e;return{c(){e=ae(t)},l(l){e=oe(l,t)},m(l,n){A(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&re(e,t)},d(l){l&&g(e)}}}function nt(s){let t,e,l,n,u,r=s[2]&&Le(s);return{c(){t=q("div"),e=q("input"),r&&r.c(),this.h()},l(a){t=T(a,"DIV",{class:!0});var i=C(t);e=T(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(g),this.h()},h(){d(e,"placeholder",s[1]),d(e,"class","svelte-1yy2xse"),d(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),w(t,"isError",s[5])},m(a,i){A(a,t,i),I(t,e),Ce(e,s[4]),r&&r.m(t,null),s[11](t),n||(u=[F(e,"input",s[9]),F(e,"input",s[7]),F(e,"keydown",s[10])],n=!0)},p(a,[i]){i&2&&d(e,"placeholder",a[1]),i&16&&e.value!==a[4]&&Ce(e,a[4]),a[2]?r?r.p(a,i):(r=Le(a),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&d(t,"class",l),i&37&&w(t,"isError",a[5])},i:M,o:M,d(a){a&&g(t),r&&r.d(),s[11](null),n=!1,Ee(u)}}}function at(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:u=null}=t,r,a,i=!1;const f=Xe(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,i=!0)},k=()=>{e(5,i=!1)},b=o=>{let m=o.key;m==="Control"&&f("color"),m==="Enter"&&_()};function E(){a=this.value,e(4,a)}const v=o=>b(o);function c(o){ie[o?"unshift":"push"](()=>{r=o,e(3,r)})}return s.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,u=o.btn)},[l,n,u,r,a,i,_,k,b,E,v,c]}class ot extends Q{constructor(t){super();W(this,t,at,nt,se,{class:0,placeholder:1,btn:2})}}function Re(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function ze(s,t){let e,l,n,u,r=M,a,i,f;return{key:s,first:null,c(){e=q("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(g),this.h()},h(){d(e,"class","add-todo__color svelte-1hafqlz"),d(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,k){A(_,e,k),a=!0,i||(f=F(e,"click",L(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),i=!0)},p(_,k){t=_,(!a||k&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&d(e,"style",l)},r(){u=e.getBoundingClientRect()},f(){ce(e),r(),ue(e,u)},a(){r(),r=fe(e,u,ke,{})},i(_){a||(_e(()=>{n||(n=Ie(e,we,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ie(e,we,{},!1)),n.run(0),a=!1},d(_){_&&g(e),_&&n&&n.end(),i=!1,f()}}}function rt(s){let t,e,l,n,u=[],r=new Map,a,i,f,_,k,b=s[3].filter(s[7]);const E=v=>v[9].id;for(let v=0;v<b.length;v+=1){let c=Re(s,b,v),o=E(c);r.set(o,u[v]=ze(o,c))}return a=new ot({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",s[8]),a.$on("submit",s[4]),{c(){t=q("div"),e=q("div"),l=q("span");for(let v=0;v<u.length;v+=1)u[v].c();X(a.$$.fragment),this.h()},l(v){t=T(v,"DIV",{class:!0});var c=C(t);e=T(c,"DIV",{class:!0});var o=C(e);l=T(o,"SPAN",{class:!0,style:!0}),C(l).forEach(g);for(let m=0;m<u.length;m+=1)u[m].l(o);o.forEach(g),Z(a.$$.fragment,c),c.forEach(g),this.h()},h(){d(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),d(l,"style",n=`color: ${s[1]}`),d(e,"class","add-todo__color-list svelte-1hafqlz"),w(e,"isOpen",s[2]),d(t,"class",i="add-todo "+s[0]+" svelte-1hafqlz")},m(v,c){A(v,t,c),I(t,e),I(e,l);for(let o=0;o<u.length;o+=1)u[o].m(e,null);G(a,t,null),f=!0,_||(k=F(l,"click",L(s[6])),_=!0)},p(v,[c]){if((!f||c&2&&n!==(n=`color: ${v[1]}`))&&d(l,"style",n),c&42){b=v[3].filter(v[7]),de();for(let o=0;o<u.length;o+=1)u[o].r();u=te(u,c,E,1,v,b,r,e,me,ze,null,Re);for(let o=0;o<u.length;o+=1)u[o].a();he()}c&4&&w(e,"isOpen",v[2]),(!f||c&1&&i!==(i="add-todo "+v[0]+" svelte-1hafqlz"))&&d(t,"class",i)},i(v){if(!f){for(let c=0;c<b.length;c+=1)P(u[c]);P(a.$$.fragment,v),f=!0}},o(v){for(let c=0;c<u.length;c+=1)B(u[c]);B(a.$$.fragment,v),f=!1},d(v){v&&g(t);for(let c=0;c<u.length;c+=1)u[c].d();J(a),_=!1,k()}}}function it(s,t,e){let l;le(s,De,b=>e(3,l=b));let{class:n=""}=t,u="#0029FF",r=!1;const a=b=>{let E={id:Date.now(),text:b.detail.value,color:u,done:!1,date:st(new Date,"dot")};R.update(v=>v=[E,...v])},i=b=>b&&e(1,u=b),f=()=>e(2,r=!r),_=b=>b.color!=u,k=()=>e(2,r=!r);return s.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,u,r,l,a,i,f,_,k]}class ct extends Q{constructor(t){super();W(this,t,it,rt,se,{class:0})}}function ut(s){let t,e,l,n,u,r,a;return n=new ct({}),r=new lt({props:{class:"mt-50"}}),{c(){t=Ze(),e=q("section"),l=q("div"),X(n.$$.fragment),X(r.$$.fragment),this.h()},l(i){Ge('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Je(i),e=T(i,"SECTION",{class:!0});var _=C(e);l=T(_,"DIV",{class:!0});var k=C(l);Z(n.$$.fragment,k),k.forEach(g),_.forEach(g),Z(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",d(l,"class","container"),d(e,"class",u=""+(s[0]+" mt-50 svelte-110abfo"))},m(i,f){A(i,t,f),A(i,e,f),I(e,l),G(n,l,null),G(r,i,f),a=!0},p(i,[f]){(!a||f&1&&u!==(u=""+(i[0]+" mt-50 svelte-110abfo")))&&d(e,"class",u)},i(i){a||(P(n.$$.fragment,i),P(r.$$.fragment,i),a=!0)},o(i){B(n.$$.fragment,i),B(r.$$.fragment,i),a=!1},d(i){i&&g(t),i&&g(e),J(n),J(r,i)}}}function ft(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class dt extends Q{constructor(t){super();W(this,t,ft,ut,se,{class:0})}}export{dt as default};
