import{K as Me,C as Re,S as R,i as z,s as H,e as p,c as y,a as T,d as g,b as v,f as j,D as w,L as A,M as B,N as ke,t as $,g as x,O as D,h as ee,P as X,Q as ze,E as L,R as be,T as Z,U as pe,v as K,w as Y,x as Q,V as te,W as le,X as se,p as V,Y as ne,Z as ye,n as P,_ as Ee,A as W,m as ae,o as oe,$ as He,a0 as re,a1 as ie,a2 as Ke,a3 as Te,a4 as Ye,a5 as Oe,a6 as we,j as Qe,a7 as We,l as Xe}from"../chunks/vendor-184f9251.js";const M=Re([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ce=Me(M,(n,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=n.filter(s=>s.color).map(s=>s.color).concat(e),r=a.filter((s,i)=>a.indexOf(s)===i).map((s,i)=>({id:i,color:s}));t(r)});function De(n,t,e){const l=n.slice();return l[18]=t[e],l}function Ie(n,t){let e,l,a,o,r;return{key:n,first:null,c(){e=p("li"),l=p("button"),this.h()},l(s){e=y(s,"LI",{class:!0});var i=T(e);l=y(i,"BUTTON",{class:!0,style:!0}),T(l).forEach(g),i.forEach(g),this.h()},h(){v(l,"class","task__color-btn svelte-1vmjbd2"),v(l,"style",a=`background-color: ${t[18].color}`),v(e,"class","task__color-item svelte-1vmjbd2"),this.first=e},m(s,i){j(s,e,i),w(e,l),o||(r=A(l,"click",B(function(){ke(t[12](t[18].color))&&t[12](t[18].color).apply(this,arguments)})),o=!0)},p(s,i){t=s,i&260&&a!==(a=`background-color: ${t[18].color}`)&&v(l,"style",a)},d(s){s&&g(e),o=!1,r()}}}function Ze(n){let t,e,l,a,o,r,s,i,f,_,m,k,C,d,c=[],u=new Map,h,I,S,N,b,F,U=n[8].filter(n[16]);const ce=E=>E[18].id;for(let E=0;E<U.length;E+=1){let O=De(n,U,E),q=ce(O);u.set(q,c[E]=Ie(q,O))}return{c(){t=p("div"),e=p("div"),l=p("p"),a=$(n[1]),o=p("div"),r=p("div"),s=p("span"),i=$(n[4]),f=p("div"),_=p("button"),m=p("span"),k=p("button"),C=p("span"),d=p("ul");for(let E=0;E<c.length;E+=1)c[E].c();I=p("button"),S=p("span"),this.h()},l(E){t=y(E,"DIV",{class:!0});var O=T(t);e=y(O,"DIV",{class:!0});var q=T(e);l=y(q,"P",{class:!0});var ue=T(l);a=x(ue,n[1]),ue.forEach(g),o=y(q,"DIV",{class:!0});var fe=T(o);r=y(fe,"DIV",{class:!0});var _e=T(r);s=y(_e,"SPAN",{class:!0});var de=T(s);i=x(de,n[4]),de.forEach(g),_e.forEach(g),fe.forEach(g),q.forEach(g),f=y(O,"DIV",{class:!0});var G=T(f);_=y(G,"BUTTON",{class:!0});var he=T(_);m=y(he,"SPAN",{class:!0}),T(m).forEach(g),he.forEach(g),k=y(G,"BUTTON",{class:!0});var ve=T(k);C=y(ve,"SPAN",{class:!0}),T(C).forEach(g),ve.forEach(g),G.forEach(g),d=y(O,"UL",{class:!0,style:!0});var me=T(d);for(let J=0;J<c.length;J+=1)c[J].l(me);me.forEach(g),I=y(O,"BUTTON",{class:!0});var ge=T(I);S=y(ge,"SPAN",{class:!0}),T(S).forEach(g),ge.forEach(g),O.forEach(g),this.h()},h(){v(l,"class","svelte-1vmjbd2"),v(s,"class","svelte-1vmjbd2"),v(r,"class","task__info-content svelte-1vmjbd2"),v(o,"class","task__info svelte-1vmjbd2"),v(e,"class","task__main svelte-1vmjbd2"),v(m,"class","svg-image-del svelte-1vmjbd2"),v(_,"class","task__menu-btn task__menu-btn_del svelte-1vmjbd2"),v(C,"class","svg-image-pen svelte-1vmjbd2"),v(k,"class","task__menu-btn task__menu-btn_edit svelte-1vmjbd2"),D(k,"isSelect",n[7]),v(f,"class","task__circle task__menu svelte-1vmjbd2"),D(f,"isOpen",n[7]),v(d,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1vmjbd2"),v(d,"style",h=`background-color: ${n[2]}`),D(d,"isOpen",n[7]),v(S,"class","svelte-1vmjbd2"),v(I,"class","task__info-open svelte-1vmjbd2"),D(I,"isHidden",n[7]),v(t,"class",N="task "+n[0]+" svelte-1vmjbd2"),D(t,"isDisabled",n[3]),D(t,"isOpen",n[5])},m(E,O){j(E,t,O),w(t,e),w(e,l),w(l,a),w(e,o),w(o,r),w(r,s),w(s,i),n[15](o),w(t,f),w(f,_),w(_,m),w(f,k),w(k,C),w(t,d);for(let q=0;q<c.length;q+=1)c[q].m(d,null);w(t,I),w(I,S),b||(F=[A(e,"click",n[9]),A(_,"click",B(n[10])),A(k,"click",B(n[11])),A(I,"click",B(n[13]))],b=!0)},p(E,[O]){O&2&&ee(a,E[1]),O&16&&ee(i,E[4]),O&128&&D(k,"isSelect",E[7]),O&128&&D(f,"isOpen",E[7]),O&4356&&(U=E[8].filter(E[16]),c=X(c,O,ce,1,E,U,u,d,ze,Ie,null,De)),O&4&&h!==(h=`background-color: ${E[2]}`)&&v(d,"style",h),O&128&&D(d,"isOpen",E[7]),O&128&&D(I,"isHidden",E[7]),O&1&&N!==(N="task "+E[0]+" svelte-1vmjbd2")&&v(t,"class",N),O&9&&D(t,"isDisabled",E[3]),O&33&&D(t,"isOpen",E[5])},i:L,o:L,d(E){E&&g(t),n[15](null);for(let O=0;O<c.length;O+=1)c[O].d();b=!1,be(F)}}}function Ge(n,t,e){let l,a;Z(n,M,b=>e(17,l=b)),Z(n,Ce,b=>e(8,a=b));let{class:o=""}=t,{text:r=""}=t,{color:s="#0029FF"}=t,{disabled:i=!1}=t,{id:f=null}=t,{date:_=""}=t,m=!1,k,C=!1;const d=()=>{let b=l.map(F=>(f===F.id&&(F.done=!F.done),F));M.set(b)},c=()=>{let b=l.filter(F=>F.id!=f);M.set(b)},u=()=>{e(7,C=!C)},h=b=>{let F=l.map(U=>(f===U.id&&(U.color=b),U));M.set(F)},I=()=>{e(5,m=!m);let b=0;k.childNodes.forEach(F=>b+=F.clientHeight),k.style.setProperty("--taskInfoHeight",`${m?b:0}px`)};function S(b){pe[b?"unshift":"push"](()=>{k=b,e(6,k)})}const N=b=>b.color!=s;return n.$$set=b=>{"class"in b&&e(0,o=b.class),"text"in b&&e(1,r=b.text),"color"in b&&e(2,s=b.color),"disabled"in b&&e(3,i=b.disabled),"id"in b&&e(14,f=b.id),"date"in b&&e(4,_=b.date)},[o,r,s,i,_,m,k,C,a,d,c,u,h,I,f,S,N]}class Ne extends R{constructor(t){super();z(this,t,Ge,Ze,H,{class:0,text:1,color:2,disabled:3,id:14,date:4})}}function Fe(n,t,e){const l=n.slice();return l[4]=t[e],l}function je(n,t,e){const l=n.slice();return l[4]=t[e],l}function Ae(n,t){let e,l,a,o,r,s=L,i;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:n,first:null,c(){e=p("li"),K(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=T(e);Y(l.$$.fragment,_),_.forEach(g),this.h()},h(){v(e,"class","task-section__item"),this.first=e},m(f,_){j(f,e,_),Q(l,e,null),i=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){r=e.getBoundingClientRect()},f(){te(e),s(),le(e,r)},a(){s(),s=se(e,r,re,{duration:300})},i(f){i||(V(l.$$.fragment,f),ne(()=>{o&&o.end(1),a=ye(e,t[3],{key:t[4].id}),a.start()}),i=!0)},o(f){P(l.$$.fragment,f),a&&a.invalidate(),o=Ee(e,t[2],{key:t[4].id}),i=!1},d(f){f&&g(e),W(l),f&&o&&o.end()}}}function Se(n,t){let e,l,a,o,r,s=L,i;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:n,first:null,c(){e=p("li"),K(l.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=T(e);Y(l.$$.fragment,_),_.forEach(g),this.h()},h(){v(e,"class","task-section__item"),this.first=e},m(f,_){j(f,e,_),Q(l,e,null),i=!0},p(f,_){t=f;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),l.$set(m)},r(){r=e.getBoundingClientRect()},f(){te(e),s(),le(e,r)},a(){s(),s=se(e,r,re,{duration:300})},i(f){i||(V(l.$$.fragment,f),ne(()=>{o&&o.end(1),a=ye(e,t[3],{key:t[4].id}),a.start()}),i=!0)},o(f){P(l.$$.fragment,f),a&&a.invalidate(),o=Ee(e,t[2],{key:t[4].id}),i=!1},d(f){f&&g(e),W(l),f&&o&&o.end()}}}function Je(n){let t,e,l,a=[],o=new Map,r,s=[],i=new Map,f,_,m=n[1].filter(qe);const k=c=>c[4].id;for(let c=0;c<m.length;c+=1){let u=je(n,m,c),h=k(u);o.set(h,a[c]=Ae(h,u))}let C=n[1].filter(Ue);const d=c=>c[4].id;for(let c=0;c<C.length;c+=1){let u=Fe(n,C,c),h=d(u);i.set(h,s[c]=Se(h,u))}return{c(){t=p("section"),e=p("div"),l=p("ul");for(let c=0;c<a.length;c+=1)a[c].c();r=p("ul");for(let c=0;c<s.length;c+=1)s[c].c();this.h()},l(c){t=y(c,"SECTION",{class:!0});var u=T(t);e=y(u,"DIV",{class:!0});var h=T(e);l=y(h,"UL",{class:!0});var I=T(l);for(let N=0;N<a.length;N+=1)a[N].l(I);I.forEach(g),r=y(h,"UL",{class:!0});var S=T(r);for(let N=0;N<s.length;N+=1)s[N].l(S);S.forEach(g),h.forEach(g),u.forEach(g),this.h()},h(){v(l,"class","task-section__col"),v(r,"class","task-section__col"),v(e,"class","container task-section__grid svelte-q8mvyt"),v(t,"class",f="task-section "+n[0]+" svelte-q8mvyt")},m(c,u){j(c,t,u),w(t,e),w(e,l);for(let h=0;h<a.length;h+=1)a[h].m(l,null);w(e,r);for(let h=0;h<s.length;h+=1)s[h].m(r,null);_=!0},p(c,[u]){if(u&2){m=c[1].filter(qe),ae();for(let h=0;h<a.length;h+=1)a[h].r();a=X(a,u,k,1,c,m,o,l,ie,Ae,null,je);for(let h=0;h<a.length;h+=1)a[h].a();oe()}if(u&2){C=c[1].filter(Ue),ae();for(let h=0;h<s.length;h+=1)s[h].r();s=X(s,u,d,1,c,C,i,r,ie,Se,null,Fe);for(let h=0;h<s.length;h+=1)s[h].a();oe()}(!_||u&1&&f!==(f="task-section "+c[0]+" svelte-q8mvyt"))&&v(t,"class",f)},i(c){if(!_){for(let u=0;u<m.length;u+=1)V(a[u]);for(let u=0;u<C.length;u+=1)V(s[u]);_=!0}},o(c){for(let u=0;u<a.length;u+=1)P(a[u]);for(let u=0;u<s.length;u+=1)P(s[u]);_=!1},d(c){c&&g(t);for(let u=0;u<a.length;u+=1)a[u].d();for(let u=0;u<s.length;u+=1)s[u].d()}}}const qe=n=>!n.done,Ue=n=>n.done;function $e(n,t,e){let l;Z(n,M,s=>e(1,l=s));let{class:a=""}=t;const[o,r]=He({duration:s=>Math.sqrt(s*200),fallback(s,i){const f=getComputedStyle(s),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Ke,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return n.$$set=s=>{"class"in s&&e(0,a=s.class)},[a,l,o,r]}class xe extends R{constructor(t){super();z(this,t,$e,Je,H,{class:0})}}const et=(n,t)=>{if(t==="dot"){let e=n.getDate(),l=n.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${n.getFullYear()}`}};function Ve(n){let t,e,l,a=n[2].text&&Pe(n);return{c(){t=p("button"),a&&a.c(),this.h()},l(o){t=y(o,"BUTTON",{class:!0});var r=T(t);a&&a.l(r),r.forEach(g),this.h()},h(){v(t,"class","btn svelte-1yy2xse")},m(o,r){j(o,t,r),a&&a.m(t,null),e||(l=A(t,"click",B(n[6])),e=!0)},p(o,r){o[2].text?a?a.p(o,r):(a=Pe(o),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(o){o&&g(t),a&&a.d(),e=!1,l()}}}function Pe(n){let t=n[2].text+"",e;return{c(){e=$(t)},l(l){e=x(l,t)},m(l,a){j(l,e,a)},p(l,a){a&4&&t!==(t=l[2].text+"")&&ee(e,t)},d(l){l&&g(e)}}}function tt(n){let t,e,l,a,o,r=n[2]&&Ve(n);return{c(){t=p("div"),e=p("input"),r&&r.c(),this.h()},l(s){t=y(s,"DIV",{class:!0});var i=T(t);e=y(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(g),this.h()},h(){v(e,"placeholder",n[1]),v(e,"class","svelte-1yy2xse"),v(t,"class",l="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse"),D(t,"isError",n[5])},m(s,i){j(s,t,i),w(t,e),Te(e,n[4]),r&&r.m(t,null),n[11](t),a||(o=[A(e,"input",n[9]),A(e,"input",n[7]),A(e,"keydown",n[10])],a=!0)},p(s,[i]){i&2&&v(e,"placeholder",s[1]),i&16&&e.value!==s[4]&&Te(e,s[4]),s[2]?r?r.p(s,i):(r=Ve(s),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse")&&v(t,"class",l),i&37&&D(t,"isError",s[5])},i:L,o:L,d(s){s&&g(t),r&&r.d(),n[11](null),a=!1,be(o)}}}function lt(n,t,e){let{class:l=""}=t,{placeholder:a="Placeholer"}=t,{btn:o=null}=t,r,s,i=!1;const f=Ye(),_=()=>{s?(f("submit",{value:s}),e(4,s="")):e(5,i=!0)},m=()=>{e(5,i=!1)},k=u=>{let h=u.key;h==="Control"&&f("color"),h==="Enter"&&_()};function C(){s=this.value,e(4,s)}const d=u=>k(u);function c(u){pe[u?"unshift":"push"](()=>{r=u,e(3,r)})}return n.$$set=u=>{"class"in u&&e(0,l=u.class),"placeholder"in u&&e(1,a=u.placeholder),"btn"in u&&e(2,o=u.btn)},[l,a,o,r,s,i,_,m,k,C,d,c]}class st extends R{constructor(t){super();z(this,t,lt,tt,H,{class:0,placeholder:1,btn:2})}}function Be(n,t,e){const l=n.slice();return l[9]=t[e],l[11]=e,l}function Le(n,t){let e,l,a,o,r=L,s,i,f;return{key:n,first:null,c(){e=p("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),T(e).forEach(g),this.h()},h(){v(e,"class","add-todo__color svelte-1hafqlz"),v(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,m){j(_,e,m),s=!0,i||(f=A(e,"click",B(function(){ke(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),i=!0)},p(_,m){t=_,(!s||m&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&v(e,"style",l)},r(){o=e.getBoundingClientRect()},f(){te(e),r(),le(e,o)},a(){r(),r=se(e,o,re,{})},i(_){s||(ne(()=>{a||(a=Oe(e,we,{},!0)),a.run(1)}),s=!0)},o(_){a||(a=Oe(e,we,{},!1)),a.run(0),s=!1},d(_){_&&g(e),_&&a&&a.end(),i=!1,f()}}}function nt(n){let t,e,l,a,o=[],r=new Map,s,i,f,_,m,k=n[3].filter(n[7]);const C=d=>d[9].id;for(let d=0;d<k.length;d+=1){let c=Be(n,k,d),u=C(c);r.set(u,o[d]=Le(u,c))}return s=new st({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",n[8]),s.$on("submit",n[4]),{c(){t=p("div"),e=p("div"),l=p("span");for(let d=0;d<o.length;d+=1)o[d].c();K(s.$$.fragment),this.h()},l(d){t=y(d,"DIV",{class:!0});var c=T(t);e=y(c,"DIV",{class:!0});var u=T(e);l=y(u,"SPAN",{class:!0,style:!0}),T(l).forEach(g);for(let h=0;h<o.length;h+=1)o[h].l(u);u.forEach(g),Y(s.$$.fragment,c),c.forEach(g),this.h()},h(){v(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),v(l,"style",a=`color: ${n[1]}`),v(e,"class","add-todo__color-list svelte-1hafqlz"),D(e,"isOpen",n[2]),v(t,"class",i="add-todo "+n[0]+" svelte-1hafqlz")},m(d,c){j(d,t,c),w(t,e),w(e,l);for(let u=0;u<o.length;u+=1)o[u].m(e,null);Q(s,t,null),f=!0,_||(m=A(l,"click",B(n[6])),_=!0)},p(d,[c]){if((!f||c&2&&a!==(a=`color: ${d[1]}`))&&v(l,"style",a),c&42){k=d[3].filter(d[7]),ae();for(let u=0;u<o.length;u+=1)o[u].r();o=X(o,c,C,1,d,k,r,e,ie,Le,null,Be);for(let u=0;u<o.length;u+=1)o[u].a();oe()}c&4&&D(e,"isOpen",d[2]),(!f||c&1&&i!==(i="add-todo "+d[0]+" svelte-1hafqlz"))&&v(t,"class",i)},i(d){if(!f){for(let c=0;c<k.length;c+=1)V(o[c]);V(s.$$.fragment,d),f=!0}},o(d){for(let c=0;c<o.length;c+=1)P(o[c]);P(s.$$.fragment,d),f=!1},d(d){d&&g(t);for(let c=0;c<o.length;c+=1)o[c].d();W(s),_=!1,m()}}}function at(n,t,e){let l;Z(n,Ce,k=>e(3,l=k));let{class:a=""}=t,o="#0029FF",r=!1;const s=k=>{let C={id:Date.now(),text:k.detail.value,color:o,done:!1,date:et(new Date,"dot")};M.update(d=>d=[C,...d])},i=k=>k&&e(1,o=k),f=()=>e(2,r=!r),_=k=>k.color!=o,m=()=>e(2,r=!r);return n.$$set=k=>{"class"in k&&e(0,a=k.class)},[a,o,r,l,s,i,f,_,m]}class ot extends R{constructor(t){super();z(this,t,at,nt,H,{class:0})}}function rt(n){let t,e,l,a,o,r,s;return a=new ot({}),r=new xe({props:{class:"mt-50"}}),{c(){t=Qe(),e=p("section"),l=p("div"),K(a.$$.fragment),K(r.$$.fragment),this.h()},l(i){We('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Xe(i),e=y(i,"SECTION",{class:!0});var _=T(e);l=y(_,"DIV",{class:!0});var m=T(l);Y(a.$$.fragment,m),m.forEach(g),_.forEach(g),Y(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",v(l,"class","container"),v(e,"class",o=""+(n[0]+" mt-50 svelte-110abfo"))},m(i,f){j(i,t,f),j(i,e,f),w(e,l),Q(a,l,null),Q(r,i,f),s=!0},p(i,[f]){(!s||f&1&&o!==(o=""+(i[0]+" mt-50 svelte-110abfo")))&&v(e,"class",o)},i(i){s||(V(a.$$.fragment,i),V(r.$$.fragment,i),s=!0)},o(i){P(a.$$.fragment,i),P(r.$$.fragment,i),s=!1},d(i){i&&g(t),i&&g(e),W(a),W(r,i)}}}function it(n,t,e){let{class:l=""}=t;return n.$$set=a=>{"class"in a&&e(0,l=a.class)},[l]}class ut extends R{constructor(t){super();z(this,t,it,rt,H,{class:0})}}export{ut as default};
