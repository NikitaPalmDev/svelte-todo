import{K as Me,C as Re,S as R,i as z,s as H,e as b,c as y,a as E,d as g,b as v,f as j,D as w,L as A,M as B,N as ke,t as $,g as x,O as I,h as ee,P as X,Q as ze,E as L,R as pe,T as Z,U as be,v as K,w as Y,x as Q,V as te,W as le,X as se,p as V,Y as ne,Z as ye,n as P,_ as Ee,A as W,m as ae,o as oe,$ as He,a0 as re,a1 as ie,a2 as Ke,a3 as Te,a4 as Ye,a5 as Oe,a6 as we,j as Qe,a7 as We,l as Xe}from"../chunks/vendor-184f9251.js";const M=Re([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ce=Me(M,(a,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=a.filter(s=>s.color).map(s=>s.color).concat(e),r=n.filter((s,i)=>n.indexOf(s)===i).map((s,i)=>({id:i,color:s}));t(r)});function De(a,t,e){const l=a.slice();return l[18]=t[e],l}function Ie(a,t){let e,l,n,o,r;return{key:a,first:null,c(){e=b("li"),l=b("button"),this.h()},l(s){e=y(s,"LI",{class:!0});var i=E(e);l=y(i,"BUTTON",{class:!0,style:!0}),E(l).forEach(g),i.forEach(g),this.h()},h(){v(l,"class","task__color-btn svelte-ymjvvx"),v(l,"style",n=`background-color: ${t[18].color}`),v(e,"class","task__color-item svelte-ymjvvx"),this.first=e},m(s,i){j(s,e,i),w(e,l),o||(r=A(l,"click",B(function(){ke(t[12](t[18].color))&&t[12](t[18].color).apply(this,arguments)})),o=!0)},p(s,i){t=s,i&260&&n!==(n=`background-color: ${t[18].color}`)&&v(l,"style",n)},d(s){s&&g(e),o=!1,r()}}}function Ze(a){let t,e,l,n,o,r,s,i,f,_,m,k,C,d,c=[],u=new Map,h,F,S,D,p,N,U=a[8].filter(a[16]);const ce=T=>T[18].id;for(let T=0;T<U.length;T+=1){let O=De(a,U,T),q=ce(O);u.set(q,c[T]=Ie(q,O))}return{c(){t=b("div"),e=b("div"),l=b("p"),n=$(a[1]),o=b("div"),r=b("div"),s=b("span"),i=$(a[4]),f=b("div"),_=b("button"),m=b("span"),k=b("button"),C=b("span"),d=b("ul");for(let T=0;T<c.length;T+=1)c[T].c();F=b("button"),S=b("span"),this.h()},l(T){t=y(T,"DIV",{class:!0});var O=E(t);e=y(O,"DIV",{class:!0});var q=E(e);l=y(q,"P",{class:!0});var ue=E(l);n=x(ue,a[1]),ue.forEach(g),o=y(q,"DIV",{class:!0});var fe=E(o);r=y(fe,"DIV",{class:!0});var _e=E(r);s=y(_e,"SPAN",{class:!0});var de=E(s);i=x(de,a[4]),de.forEach(g),_e.forEach(g),fe.forEach(g),q.forEach(g),f=y(O,"DIV",{class:!0});var G=E(f);_=y(G,"BUTTON",{class:!0});var he=E(_);m=y(he,"SPAN",{class:!0}),E(m).forEach(g),he.forEach(g),k=y(G,"BUTTON",{class:!0});var ve=E(k);C=y(ve,"SPAN",{class:!0}),E(C).forEach(g),ve.forEach(g),G.forEach(g),d=y(O,"UL",{class:!0,style:!0});var me=E(d);for(let J=0;J<c.length;J+=1)c[J].l(me);me.forEach(g),F=y(O,"BUTTON",{class:!0});var ge=E(F);S=y(ge,"SPAN",{class:!0}),E(S).forEach(g),ge.forEach(g),O.forEach(g),this.h()},h(){v(l,"class","svelte-ymjvvx"),v(s,"class","svelte-ymjvvx"),v(r,"class","task__info-content svelte-ymjvvx"),v(o,"class","task__info svelte-ymjvvx"),v(e,"class","task__main svelte-ymjvvx"),v(m,"class","svg-image-del svelte-ymjvvx"),v(_,"class","task__menu-btn task__menu-btn_del svelte-ymjvvx"),v(C,"class","svg-image-pen svelte-ymjvvx"),v(k,"class","task__menu-btn task__menu-btn_edit svelte-ymjvvx"),I(k,"isSelect",a[7]),v(f,"class","task__circle task__menu svelte-ymjvvx"),I(f,"isOpen",a[7]),v(d,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-ymjvvx"),v(d,"style",h=`background-color: ${a[2]}`),I(d,"isOpen",a[7]),v(S,"class","svelte-ymjvvx"),v(F,"class","task__info-open svelte-ymjvvx"),v(t,"class",D="task "+a[0]+" svelte-ymjvvx"),I(t,"isDisabled",a[3]),I(t,"isOpen",a[5])},m(T,O){j(T,t,O),w(t,e),w(e,l),w(l,n),w(e,o),w(o,r),w(r,s),w(s,i),a[15](o),w(t,f),w(f,_),w(_,m),w(f,k),w(k,C),w(t,d);for(let q=0;q<c.length;q+=1)c[q].m(d,null);w(t,F),w(F,S),p||(N=[A(e,"click",a[9]),A(_,"click",B(a[10])),A(k,"click",B(a[11])),A(F,"click",B(a[13]))],p=!0)},p(T,[O]){O&2&&ee(n,T[1]),O&16&&ee(i,T[4]),O&128&&I(k,"isSelect",T[7]),O&128&&I(f,"isOpen",T[7]),O&4356&&(U=T[8].filter(T[16]),c=X(c,O,ce,1,T,U,u,d,ze,Ie,null,De)),O&4&&h!==(h=`background-color: ${T[2]}`)&&v(d,"style",h),O&128&&I(d,"isOpen",T[7]),O&1&&D!==(D="task "+T[0]+" svelte-ymjvvx")&&v(t,"class",D),O&9&&I(t,"isDisabled",T[3]),O&33&&I(t,"isOpen",T[5])},i:L,o:L,d(T){T&&g(t),a[15](null);for(let O=0;O<c.length;O+=1)c[O].d();p=!1,pe(N)}}}function Ge(a,t,e){let l,n;Z(a,M,p=>e(17,l=p)),Z(a,Ce,p=>e(8,n=p));let{class:o=""}=t,{text:r=""}=t,{color:s="#0029FF"}=t,{disabled:i=!1}=t,{id:f=null}=t,{date:_=""}=t,m=!1,k,C=!1;const d=()=>{let p=l.map(N=>(f===N.id&&(N.done=!N.done),N));M.set(p)},c=()=>{let p=l.filter(N=>N.id!=f);M.set(p)},u=()=>{e(7,C=!C)},h=p=>{let N=l.map(U=>(f===U.id&&(U.color=p),U));M.set(N)},F=()=>{e(5,m=!m);let p=0;k.childNodes.forEach(N=>p+=N.clientHeight),k.style.setProperty("--taskInfoHeight",`${m?p:0}px`)};function S(p){be[p?"unshift":"push"](()=>{k=p,e(6,k)})}const D=p=>p.color!=s;return a.$$set=p=>{"class"in p&&e(0,o=p.class),"text"in p&&e(1,r=p.text),"color"in p&&e(2,s=p.color),"disabled"in p&&e(3,i=p.disabled),"id"in p&&e(14,f=p.id),"date"in p&&e(4,_=p.date)},[o,r,s,i,_,m,k,C,n,d,c,u,h,F,f,S,D]}class Ne extends R{constructor(t){super();z(this,t,Ge,Ze,H,{class:0,text:1,color:2,disabled:3,id:14,date:4})}}function Fe(a,t,e){const l=a.slice();return l[4]=t[e],l}function je(a,t,e){const l=a.slice();return l[4]=t[e],l}function Ae(a,t){let e,l,n,o,r,s=L,i;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:a,first:null,c(){e=b("li"),K(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=E(e);Y(l.$$.fragment,_),_.forEach(g),this.h()},h(){v(e,"class","task-section__item"),this.first=e},m(f,_){j(f,e,_),Q(l,e,null),i=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){r=e.getBoundingClientRect()},f(){te(e),s(),le(e,r)},a(){s(),s=se(e,r,re,{duration:300})},i(f){i||(V(l.$$.fragment,f),ne(()=>{o&&o.end(1),n=ye(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){P(l.$$.fragment,f),n&&n.invalidate(),o=Ee(e,t[2],{key:t[4].id}),i=!1},d(f){f&&g(e),W(l),f&&o&&o.end()}}}function Se(a,t){let e,l,n,o,r,s=L,i;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:a,first:null,c(){e=b("li"),K(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=E(e);Y(l.$$.fragment,_),_.forEach(g),this.h()},h(){v(e,"class","task-section__item"),this.first=e},m(f,_){j(f,e,_),Q(l,e,null),i=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){r=e.getBoundingClientRect()},f(){te(e),s(),le(e,r)},a(){s(),s=se(e,r,re,{duration:300})},i(f){i||(V(l.$$.fragment,f),ne(()=>{o&&o.end(1),n=ye(e,t[3],{key:t[4].id}),n.start()}),i=!0)},o(f){P(l.$$.fragment,f),n&&n.invalidate(),o=Ee(e,t[2],{key:t[4].id}),i=!1},d(f){f&&g(e),W(l),f&&o&&o.end()}}}function Je(a){let t,e,l,n=[],o=new Map,r,s=[],i=new Map,f,_,m=a[1].filter(qe);const k=c=>c[4].id;for(let c=0;c<m.length;c+=1){let u=je(a,m,c),h=k(u);o.set(h,n[c]=Ae(h,u))}let C=a[1].filter(Ue);const d=c=>c[4].id;for(let c=0;c<C.length;c+=1){let u=Fe(a,C,c),h=d(u);i.set(h,s[c]=Se(h,u))}return{c(){t=b("section"),e=b("div"),l=b("ul");for(let c=0;c<n.length;c+=1)n[c].c();r=b("ul");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){t=y(c,"SECTION",{class:!0});var u=E(t);e=y(u,"DIV",{class:!0});var h=E(e);l=y(h,"UL",{class:!0});var F=E(l);for(let D=0;D<n.length;D+=1)n[D].l(F);F.forEach(g),r=y(h,"UL",{class:!0});var S=E(r);for(let D=0;D<s.length;D+=1)s[D].l(S);S.forEach(g),h.forEach(g),u.forEach(g),this.h()},h(){v(l,"class","task-section__col"),v(r,"class","task-section__col"),v(e,"class","container task-section__grid svelte-q8mvyt"),v(t,"class",f="task-section "+a[0]+" svelte-q8mvyt")},m(c,u){j(c,t,u),w(t,e),w(e,l);for(let h=0;h<n.length;h+=1)n[h].m(l,null);w(e,r);for(let h=0;h<s.length;h+=1)s[h].m(r,null);_=!0},p(c,[u]){if(u&2){m=c[1].filter(qe),ae();for(let h=0;h<n.length;h+=1)n[h].r();n=X(n,u,k,1,c,m,o,l,ie,Ae,null,je);for(let h=0;h<n.length;h+=1)n[h].a();oe()}if(u&2){C=c[1].filter(Ue),ae();for(let h=0;h<s.length;h+=1)s[h].r();s=X(s,u,d,1,c,C,i,r,ie,Se,null,Fe);for(let h=0;h<s.length;h+=1)s[h].a();oe()}(!_||u&1&&f!==(f="task-section "+c[0]+" svelte-q8mvyt"))&&v(t,"class",f)},i(c){if(!_){for(let u=0;u<m.length;u+=1)V(n[u]);for(let u=0;u<C.length;u+=1)V(s[u]);_=!0}},o(c){for(let u=0;u<n.length;u+=1)P(n[u]);for(let u=0;u<s.length;u+=1)P(s[u]);_=!1},d(c){c&&g(t);for(let u=0;u<n.length;u+=1)n[u].d();for(let u=0;u<s.length;u+=1)s[u].d()}}}const qe=a=>!a.done,Ue=a=>a.done;function $e(a,t,e){let l;Z(a,M,s=>e(1,l=s));let{class:n=""}=t;const[o,r]=He({duration:s=>Math.sqrt(s*200),fallback(s,i){const f=getComputedStyle(s),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Ke,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return a.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,o,r]}class xe extends R{constructor(t){super();z(this,t,$e,Je,H,{class:0})}}const et=(a,t)=>{if(t==="dot"){let e=a.getDate(),l=a.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${a.getFullYear()}`}};function Ve(a){let t,e,l,n=a[2].text&&Pe(a);return{c(){t=b("button"),n&&n.c(),this.h()},l(o){t=y(o,"BUTTON",{class:!0});var r=E(t);n&&n.l(r),r.forEach(g),this.h()},h(){v(t,"class","btn svelte-1yy2xse")},m(o,r){j(o,t,r),n&&n.m(t,null),e||(l=A(t,"click",B(a[6])),e=!0)},p(o,r){o[2].text?n?n.p(o,r):(n=Pe(o),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(o){o&&g(t),n&&n.d(),e=!1,l()}}}function Pe(a){let t=a[2].text+"",e;return{c(){e=$(t)},l(l){e=x(l,t)},m(l,n){j(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&ee(e,t)},d(l){l&&g(e)}}}function tt(a){let t,e,l,n,o,r=a[2]&&Ve(a);return{c(){t=b("div"),e=b("input"),r&&r.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var i=E(t);e=y(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(g),this.h()},h(){v(e,"placeholder",a[1]),v(e,"class","svelte-1yy2xse"),v(t,"class",l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse"),I(t,"isError",a[5])},m(s,i){j(s,t,i),w(t,e),Te(e,a[4]),r&&r.m(t,null),a[11](t),n||(o=[A(e,"input",a[9]),A(e,"input",a[7]),A(e,"keydown",a[10])],n=!0)},p(s,[i]){i&2&&v(e,"placeholder",s[1]),i&16&&e.value!==s[4]&&Te(e,s[4]),s[2]?r?r.p(s,i):(r=Ve(s),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse")&&v(t,"class",l),i&37&&I(t,"isError",s[5])},i:L,o:L,d(s){s&&g(t),r&&r.d(),a[11](null),n=!1,pe(o)}}}function lt(a,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:o=null}=t,r,s,i=!1;const f=Ye(),_=()=>{s?(f("submit",{value:s}),e(4,s="")):e(5,i=!0)},m=()=>{e(5,i=!1)},k=u=>{let h=u.key;h==="Control"&&f("color"),h==="Enter"&&_()};function C(){s=this.value,e(4,s)}const d=u=>k(u);function c(u){be[u?"unshift":"push"](()=>{r=u,e(3,r)})}return a.$$set=u=>{"class"in u&&e(0,l=u.class),"placeholder"in u&&e(1,n=u.placeholder),"btn"in u&&e(2,o=u.btn)},[l,n,o,r,s,i,_,m,k,C,d,c]}class st extends R{constructor(t){super();z(this,t,lt,tt,H,{class:0,placeholder:1,btn:2})}}function Be(a,t,e){const l=a.slice();return l[9]=t[e],l[11]=e,l}function Le(a,t){let e,l,n,o,r=L,s,i,f;return{key:a,first:null,c(){e=b("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),E(e).forEach(g),this.h()},h(){v(e,"class","add-todo__color svelte-1hafqlz"),v(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,m){j(_,e,m),s=!0,i||(f=A(e,"click",B(function(){ke(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),i=!0)},p(_,m){t=_,(!s||m&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&v(e,"style",l)},r(){o=e.getBoundingClientRect()},f(){te(e),r(),le(e,o)},a(){r(),r=se(e,o,re,{})},i(_){s||(ne(()=>{n||(n=Oe(e,we,{},!0)),n.run(1)}),s=!0)},o(_){n||(n=Oe(e,we,{},!1)),n.run(0),s=!1},d(_){_&&g(e),_&&n&&n.end(),i=!1,f()}}}function nt(a){let t,e,l,n,o=[],r=new Map,s,i,f,_,m,k=a[3].filter(a[7]);const C=d=>d[9].id;for(let d=0;d<k.length;d+=1){let c=Be(a,k,d),u=C(c);r.set(u,o[d]=Le(u,c))}return s=new st({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",a[8]),s.$on("submit",a[4]),{c(){t=b("div"),e=b("div"),l=b("span");for(let d=0;d<o.length;d+=1)o[d].c();K(s.$$.fragment),this.h()},l(d){t=y(d,"DIV",{class:!0});var c=E(t);e=y(c,"DIV",{class:!0});var u=E(e);l=y(u,"SPAN",{class:!0,style:!0}),E(l).forEach(g);for(let h=0;h<o.length;h+=1)o[h].l(u);u.forEach(g),Y(s.$$.fragment,c),c.forEach(g),this.h()},h(){v(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),v(l,"style",n=`color: ${a[1]}`),v(e,"class","add-todo__color-list svelte-1hafqlz"),I(e,"isOpen",a[2]),v(t,"class",i="add-todo "+a[0]+" svelte-1hafqlz")},m(d,c){j(d,t,c),w(t,e),w(e,l);for(let u=0;u<o.length;u+=1)o[u].m(e,null);Q(s,t,null),f=!0,_||(m=A(l,"click",B(a[6])),_=!0)},p(d,[c]){if((!f||c&2&&n!==(n=`color: ${d[1]}`))&&v(l,"style",n),c&42){k=d[3].filter(d[7]),ae();for(let u=0;u<o.length;u+=1)o[u].r();o=X(o,c,C,1,d,k,r,e,ie,Le,null,Be);for(let u=0;u<o.length;u+=1)o[u].a();oe()}c&4&&I(e,"isOpen",d[2]),(!f||c&1&&i!==(i="add-todo "+d[0]+" svelte-1hafqlz"))&&v(t,"class",i)},i(d){if(!f){for(let c=0;c<k.length;c+=1)V(o[c]);V(s.$$.fragment,d),f=!0}},o(d){for(let c=0;c<o.length;c+=1)P(o[c]);P(s.$$.fragment,d),f=!1},d(d){d&&g(t);for(let c=0;c<o.length;c+=1)o[c].d();W(s),_=!1,m()}}}function at(a,t,e){let l;Z(a,Ce,k=>e(3,l=k));let{class:n=""}=t,o="#0029FF",r=!1;const s=k=>{let C={id:Date.now(),text:k.detail.value,color:o,done:!1,date:et(new Date,"dot")};M.update(d=>d=[C,...d])},i=k=>k&&e(1,o=k),f=()=>e(2,r=!r),_=k=>k.color!=o,m=()=>e(2,r=!r);return a.$$set=k=>{"class"in k&&e(0,n=k.class)},[n,o,r,l,s,i,f,_,m]}class ot extends R{constructor(t){super();z(this,t,at,nt,H,{class:0})}}function rt(a){let t,e,l,n,o,r,s;return n=new ot({}),r=new xe({props:{class:"mt-50"}}),{c(){t=Qe(),e=b("section"),l=b("div"),K(n.$$.fragment),K(r.$$.fragment),this.h()},l(i){We('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Xe(i),e=y(i,"SECTION",{class:!0});var _=E(e);l=y(_,"DIV",{class:!0});var m=E(l);Y(n.$$.fragment,m),m.forEach(g),_.forEach(g),Y(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",v(l,"class","container"),v(e,"class",o=""+(a[0]+" mt-50 svelte-110abfo"))},m(i,f){j(i,t,f),j(i,e,f),w(e,l),Q(n,l,null),Q(r,i,f),s=!0},p(i,[f]){(!s||f&1&&o!==(o=""+(i[0]+" mt-50 svelte-110abfo")))&&v(e,"class",o)},i(i){s||(V(n.$$.fragment,i),V(r.$$.fragment,i),s=!0)},o(i){P(n.$$.fragment,i),P(r.$$.fragment,i),s=!1},d(i){i&&g(t),i&&g(e),W(n),W(r,i)}}}function it(a,t,e){let{class:l=""}=t;return a.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class ut extends R{constructor(t){super();z(this,t,it,rt,H,{class:0})}}export{ut as default};
