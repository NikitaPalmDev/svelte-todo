import{K as Ke,C as He,S as H,i as j,s as Y,e as E,c as T,a as I,d as g,b as h,f as S,D as w,L as A,M as B,N as ye,t as le,g as se,O as D,h as ne,P as $,Q as je,E as L,R as Ee,T as x,U as oe,v as Q,w as W,x as X,V as ae,W as ie,X as re,p as U,Y as ce,Z as Te,n as P,_ as Ie,A as Z,m as fe,o as ue,$ as Ye,a0 as de,a1 as _e,a2 as Qe,a3 as Ce,a4 as We,a5 as we,a6 as De,j as Xe,a7 as Ze,l as Ge}from"../chunks/vendor-184f9251.js";const M=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ne=Ke(M,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(o=>o.color).map(o=>o.color).concat(e),i=n.filter((o,c)=>n.indexOf(o)===c).map((o,c)=>({id:c,color:o}));t(i)});function Oe(s,t,e){const l=s.slice();return l[25]=t[e],l}function Fe(s,t){let e,l,n,f,i;return{key:s,first:null,c(){e=E("li"),l=E("button"),this.h()},l(o){e=T(o,"LI",{class:!0});var c=I(e);l=T(c,"BUTTON",{class:!0,style:!0}),I(l).forEach(g),c.forEach(g),this.h()},h(){h(l,"class","task__color-btn svelte-1ok1bds"),h(l,"style",n=`background-color: ${t[25].color}`),h(e,"class","task__color-item svelte-1ok1bds"),this.first=e},m(o,c){S(o,e,c),w(e,l),f||(i=A(l,"click",B(function(){ye(t[14](t[25].color))&&t[14](t[25].color).apply(this,arguments)})),f=!0)},p(o,c){t=o,c&1028&&n!==(n=`background-color: ${t[25].color}`)&&h(l,"style",n)},d(o){o&&g(e),f=!1,i()}}}function Je(s){let t,e,l,n,f,i,o,c,u,d,k,b,C,v,r,a=[],m=new Map,V,F,O,R,K,G,z=s[10].filter(s[20]);const J=p=>p[25].id;for(let p=0;p<z.length;p+=1){let y=Oe(s,z,p),_=J(y);m.set(_,a[p]=Fe(_,y))}return{c(){t=E("div"),e=E("div"),l=E("div"),n=E("p"),f=le(s[1]),i=E("div"),o=E("div"),c=E("span"),u=le(s[4]),d=E("div"),k=E("button"),b=E("span"),C=E("button"),v=E("span"),r=E("ul");for(let p=0;p<a.length;p+=1)a[p].c();F=E("button"),O=E("span"),this.h()},l(p){t=T(p,"DIV",{class:!0});var y=I(t);e=T(y,"DIV",{class:!0});var _=I(e);l=T(_,"DIV",{class:!0});var N=I(l);n=T(N,"P",{class:!0,contenteditable:!0});var q=I(n);f=se(q,s[1]),q.forEach(g),N.forEach(g),i=T(_,"DIV",{class:!0});var he=I(i);o=T(he,"DIV",{class:!0});var ke=I(o);c=T(ke,"SPAN",{class:!0});var ve=I(c);u=se(ve,s[4]),ve.forEach(g),ke.forEach(g),he.forEach(g),_.forEach(g),d=T(y,"DIV",{class:!0});var ee=I(d);k=T(ee,"BUTTON",{class:!0});var me=I(k);b=T(me,"SPAN",{class:!0}),I(b).forEach(g),me.forEach(g),C=T(ee,"BUTTON",{class:!0});var ge=I(C);v=T(ge,"SPAN",{class:!0}),I(v).forEach(g),ge.forEach(g),ee.forEach(g),r=T(y,"UL",{class:!0,style:!0});var be=I(r);for(let te=0;te<a.length;te+=1)a[te].l(be);be.forEach(g),F=T(y,"BUTTON",{class:!0});var pe=I(F);O=T(pe,"SPAN",{class:!0}),I(O).forEach(g),pe.forEach(g),y.forEach(g),this.h()},h(){h(n,"class","task__main-content svelte-1ok1bds"),h(n,"contenteditable",s[7]),h(l,"class","task__main-container svelte-1ok1bds"),h(c,"class","svelte-1ok1bds"),h(o,"class","task__info-content svelte-1ok1bds"),h(i,"class","task__info svelte-1ok1bds"),h(e,"class","task__main svelte-1ok1bds"),D(e,"isEdit",s[7]),h(b,"class","svg-image-del svelte-1ok1bds"),h(k,"class","task__menu-btn task__menu-btn_del svelte-1ok1bds"),h(v,"class","svg-image-pen svelte-1ok1bds"),h(C,"class","task__menu-btn task__menu-btn_edit svelte-1ok1bds"),D(C,"isSelect",s[7]),D(C,"isNoSave",s[8]),h(d,"class","task__circle task__menu svelte-1ok1bds"),D(d,"isOpen",s[7]),h(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1ok1bds"),h(r,"style",V=`background-color: ${s[2]}`),D(r,"isOpen",s[7]),h(O,"class","svelte-1ok1bds"),h(F,"class","task__info-open svelte-1ok1bds"),D(F,"isHidden",s[7]),h(t,"class",R="task "+s[0]+" svelte-1ok1bds"),D(t,"isDisabled",s[3]),D(t,"isInfoOpen",s[5])},m(p,y){S(p,t,y),w(t,e),w(e,l),w(l,n),w(n,f),s[18](n),w(e,i),w(i,o),w(o,c),w(c,u),s[19](i),w(t,d),w(d,k),w(k,b),w(d,C),w(C,v),w(t,r);for(let _=0;_<a.length;_+=1)a[_].m(r,null);w(t,F),w(F,O),K||(G=[A(n,"keydown",s[16]),A(e,"click",s[11]),A(k,"click",B(s[12])),A(C,"click",B(s[13])),A(F,"click",B(s[21]))],K=!0)},p(p,[y]){y&2&&ne(f,p[1]),y&128&&h(n,"contenteditable",p[7]),y&16&&ne(u,p[4]),y&128&&D(e,"isEdit",p[7]),y&128&&D(C,"isSelect",p[7]),y&256&&D(C,"isNoSave",p[8]),y&128&&D(d,"isOpen",p[7]),y&17412&&(z=p[10].filter(p[20]),a=$(a,y,J,1,p,z,m,r,je,Fe,null,Oe)),y&4&&V!==(V=`background-color: ${p[2]}`)&&h(r,"style",V),y&128&&D(r,"isOpen",p[7]),y&128&&D(F,"isHidden",p[7]),y&1&&R!==(R="task "+p[0]+" svelte-1ok1bds")&&h(t,"class",R),y&9&&D(t,"isDisabled",p[3]),y&33&&D(t,"isInfoOpen",p[5])},i:L,o:L,d(p){p&&g(t),s[18](null),s[19](null);for(let y=0;y<a.length;y+=1)a[y].d();K=!1,Ee(G)}}}function $e(s,t,e){let l,n;x(s,M,_=>e(22,l=_)),x(s,Ne,_=>e(10,n=_));let{class:f=""}=t,{text:i=""}=t,{color:o="#0029FF"}=t,{disabled:c=!1}=t,{id:u=null}=t,{date:d=""}=t,k=!1,b,C=!1,v=!1,r;const a=()=>{if(C===!1){let _=l.map(N=>(u===N.id&&(N.done=!N.done),N));M.set(_)}},m=()=>{let _=l.filter(N=>N.id!=u);M.set(_)},V=()=>{e(7,C=!C)},F=_=>{let N=l.map(q=>(u===q.id&&(q.color=_),q));M.set(N)};function O(_){e(5,k=_!=null?_:!k);let N=0;b.childNodes.forEach(q=>N+=q.clientHeight),b.style.setProperty("--taskInfoHeight",`${k?N:0}px`)}function R(){let _=r.innerText;console.log("save",_)}function K(_){let N=_.ctrlKey?!1:_.metaKey,q=_.keyCode;if(G(r.innerText),N&&q===83)return _.preventDefault(),R(),!1}function G(_=(N=>(N=r.innerText)!=null?N:i)()){return _===i?(e(8,v=!1),!1):(e(8,v=!0),!0)}function z(_){oe[_?"unshift":"push"](()=>{r=_,e(9,r)})}function J(_){oe[_?"unshift":"push"](()=>{b=_,e(6,b)})}const p=_=>_.color!=o,y=()=>O();return s.$$set=_=>{"class"in _&&e(0,f=_.class),"text"in _&&e(1,i=_.text),"color"in _&&e(2,o=_.color),"disabled"in _&&e(3,c=_.disabled),"id"in _&&e(17,u=_.id),"date"in _&&e(4,d=_.date)},[f,i,o,c,d,k,b,C,v,r,n,a,m,V,F,O,K,u,z,J,p,y]}class Se extends H{constructor(t){super();j(this,t,$e,Je,Y,{class:0,text:1,color:2,disabled:3,id:17,date:4})}}function Ae(s,t,e){const l=s.slice();return l[4]=t[e],l}function qe(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ve(s,t){let e,l,n,f,i,o=L,c;return l=new Se({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=E("li"),Q(l.$$.fragment),this.h()},l(u){e=T(u,"LI",{class:!0});var d=I(e);W(l.$$.fragment,d),d.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(u,d){S(u,e,d),X(l,e,null),c=!0},p(u,d){t=u;const k={};d&2&&(k.text=t[4].text),d&2&&(k.color=t[4].color?t[4].color:null),d&2&&(k.id=t[4].id),d&2&&(k.date=t[4].date),l.$set(k)},r(){i=e.getBoundingClientRect()},f(){ae(e),o(),ie(e,i)},a(){o(),o=re(e,i,de,{duration:300})},i(u){c||(U(l.$$.fragment,u),ce(()=>{f&&f.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),c=!0)},o(u){P(l.$$.fragment,u),n&&n.invalidate(),f=Ie(e,t[2],{key:t[4].id}),c=!1},d(u){u&&g(e),Z(l),u&&f&&f.end()}}}function Ue(s,t){let e,l,n,f,i,o=L,c;return l=new Se({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=E("li"),Q(l.$$.fragment),this.h()},l(u){e=T(u,"LI",{class:!0});var d=I(e);W(l.$$.fragment,d),d.forEach(g),this.h()},h(){h(e,"class","task-section__item"),this.first=e},m(u,d){S(u,e,d),X(l,e,null),c=!0},p(u,d){t=u;const k={};d&2&&(k.text=t[4].text),d&2&&(k.color=t[4].color?t[4].color:null),d&2&&(k.id=t[4].id),d&2&&(k.date=t[4].date),l.$set(k)},r(){i=e.getBoundingClientRect()},f(){ae(e),o(),ie(e,i)},a(){o(),o=re(e,i,de,{duration:300})},i(u){c||(U(l.$$.fragment,u),ce(()=>{f&&f.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),c=!0)},o(u){P(l.$$.fragment,u),n&&n.invalidate(),f=Ie(e,t[2],{key:t[4].id}),c=!1},d(u){u&&g(e),Z(l),u&&f&&f.end()}}}function xe(s){let t,e,l,n=[],f=new Map,i,o=[],c=new Map,u,d,k=s[1].filter(Pe);const b=r=>r[4].id;for(let r=0;r<k.length;r+=1){let a=qe(s,k,r),m=b(a);f.set(m,n[r]=Ve(m,a))}let C=s[1].filter(Be);const v=r=>r[4].id;for(let r=0;r<C.length;r+=1){let a=Ae(s,C,r),m=v(a);c.set(m,o[r]=Ue(m,a))}return{c(){t=E("section"),e=E("div"),l=E("ul");for(let r=0;r<n.length;r+=1)n[r].c();i=E("ul");for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){t=T(r,"SECTION",{class:!0});var a=I(t);e=T(a,"DIV",{class:!0});var m=I(e);l=T(m,"UL",{class:!0});var V=I(l);for(let O=0;O<n.length;O+=1)n[O].l(V);V.forEach(g),i=T(m,"UL",{class:!0});var F=I(i);for(let O=0;O<o.length;O+=1)o[O].l(F);F.forEach(g),m.forEach(g),a.forEach(g),this.h()},h(){h(l,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-q8mvyt"),h(t,"class",u="task-section "+s[0]+" svelte-q8mvyt")},m(r,a){S(r,t,a),w(t,e),w(e,l);for(let m=0;m<n.length;m+=1)n[m].m(l,null);w(e,i);for(let m=0;m<o.length;m+=1)o[m].m(i,null);d=!0},p(r,[a]){if(a&2){k=r[1].filter(Pe),fe();for(let m=0;m<n.length;m+=1)n[m].r();n=$(n,a,b,1,r,k,f,l,_e,Ve,null,qe);for(let m=0;m<n.length;m+=1)n[m].a();ue()}if(a&2){C=r[1].filter(Be),fe();for(let m=0;m<o.length;m+=1)o[m].r();o=$(o,a,v,1,r,C,c,i,_e,Ue,null,Ae);for(let m=0;m<o.length;m+=1)o[m].a();ue()}(!d||a&1&&u!==(u="task-section "+r[0]+" svelte-q8mvyt"))&&h(t,"class",u)},i(r){if(!d){for(let a=0;a<k.length;a+=1)U(n[a]);for(let a=0;a<C.length;a+=1)U(o[a]);d=!0}},o(r){for(let a=0;a<n.length;a+=1)P(n[a]);for(let a=0;a<o.length;a+=1)P(o[a]);d=!1},d(r){r&&g(t);for(let a=0;a<n.length;a+=1)n[a].d();for(let a=0;a<o.length;a+=1)o[a].d()}}}const Pe=s=>!s.done,Be=s=>s.done;function et(s,t,e){let l;x(s,M,o=>e(1,l=o));let{class:n=""}=t;const[f,i]=Ye({duration:o=>Math.sqrt(o*200),fallback(o,c){const u=getComputedStyle(o),d=u.transform==="none"?"":u.transform;return{duration:600,easing:Qe,css:k=>`
					transform: ${d} scale(${k});
					opacity: ${k}
				`}}});return s.$$set=o=>{"class"in o&&e(0,n=o.class)},[n,l,f,i]}class tt extends H{constructor(t){super();j(this,t,et,xe,Y,{class:0})}}const lt=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Le(s){let t,e,l,n=s[2].text&&Me(s);return{c(){t=E("button"),n&&n.c(),this.h()},l(f){t=T(f,"BUTTON",{class:!0});var i=I(t);n&&n.l(i),i.forEach(g),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(f,i){S(f,t,i),n&&n.m(t,null),e||(l=A(t,"click",B(s[6])),e=!0)},p(f,i){f[2].text?n?n.p(f,i):(n=Me(f),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(f){f&&g(t),n&&n.d(),e=!1,l()}}}function Me(s){let t=s[2].text+"",e;return{c(){e=le(t)},l(l){e=se(l,t)},m(l,n){S(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&ne(e,t)},d(l){l&&g(e)}}}function st(s){let t,e,l,n,f,i=s[2]&&Le(s);return{c(){t=E("div"),e=E("input"),i&&i.c(),this.h()},l(o){t=T(o,"DIV",{class:!0});var c=I(t);e=T(c,"INPUT",{placeholder:!0,class:!0}),i&&i.l(c),c.forEach(g),this.h()},h(){h(e,"placeholder",s[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),D(t,"isError",s[5])},m(o,c){S(o,t,c),w(t,e),Ce(e,s[4]),i&&i.m(t,null),s[11](t),n||(f=[A(e,"input",s[9]),A(e,"input",s[7]),A(e,"keydown",s[10])],n=!0)},p(o,[c]){c&2&&h(e,"placeholder",o[1]),c&16&&e.value!==o[4]&&Ce(e,o[4]),o[2]?i?i.p(o,c):(i=Le(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null),c&5&&l!==(l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",l),c&37&&D(t,"isError",o[5])},i:L,o:L,d(o){o&&g(t),i&&i.d(),s[11](null),n=!1,Ee(f)}}}function nt(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:f=null}=t,i,o,c=!1;const u=We(),d=()=>{o?(u("submit",{value:o}),e(4,o="")):e(5,c=!0)},k=()=>{e(5,c=!1)},b=a=>{let m=a.key;m==="Control"&&u("color"),m==="Enter"&&d()};function C(){o=this.value,e(4,o)}const v=a=>b(a);function r(a){oe[a?"unshift":"push"](()=>{i=a,e(3,i)})}return s.$$set=a=>{"class"in a&&e(0,l=a.class),"placeholder"in a&&e(1,n=a.placeholder),"btn"in a&&e(2,f=a.btn)},[l,n,f,i,o,c,d,k,b,C,v,r]}class ot extends H{constructor(t){super();j(this,t,nt,st,Y,{class:0,placeholder:1,btn:2})}}function Re(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function ze(s,t){let e,l,n,f,i=L,o,c,u;return{key:s,first:null,c(){e=E("button"),this.h()},l(d){e=T(d,"BUTTON",{class:!0,style:!0}),I(e).forEach(g),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(d,k){S(d,e,k),o=!0,c||(u=A(e,"click",B(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(d,k){t=d,(!o||k&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",l)},r(){f=e.getBoundingClientRect()},f(){ae(e),i(),ie(e,f)},a(){i(),i=re(e,f,de,{})},i(d){o||(ce(()=>{n||(n=we(e,De,{},!0)),n.run(1)}),o=!0)},o(d){n||(n=we(e,De,{},!1)),n.run(0),o=!1},d(d){d&&g(e),d&&n&&n.end(),c=!1,u()}}}function at(s){let t,e,l,n,f=[],i=new Map,o,c,u,d,k,b=s[3].filter(s[7]);const C=v=>v[9].id;for(let v=0;v<b.length;v+=1){let r=Re(s,b,v),a=C(r);i.set(a,f[v]=ze(a,r))}return o=new ot({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),o.$on("color",s[8]),o.$on("submit",s[4]),{c(){t=E("div"),e=E("div"),l=E("span");for(let v=0;v<f.length;v+=1)f[v].c();Q(o.$$.fragment),this.h()},l(v){t=T(v,"DIV",{class:!0});var r=I(t);e=T(r,"DIV",{class:!0});var a=I(e);l=T(a,"SPAN",{class:!0,style:!0}),I(l).forEach(g);for(let m=0;m<f.length;m+=1)f[m].l(a);a.forEach(g),W(o.$$.fragment,r),r.forEach(g),this.h()},h(){h(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(l,"style",n=`color: ${s[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),D(e,"isOpen",s[2]),h(t,"class",c="add-todo "+s[0]+" svelte-1hafqlz")},m(v,r){S(v,t,r),w(t,e),w(e,l);for(let a=0;a<f.length;a+=1)f[a].m(e,null);X(o,t,null),u=!0,d||(k=A(l,"click",B(s[6])),d=!0)},p(v,[r]){if((!u||r&2&&n!==(n=`color: ${v[1]}`))&&h(l,"style",n),r&42){b=v[3].filter(v[7]),fe();for(let a=0;a<f.length;a+=1)f[a].r();f=$(f,r,C,1,v,b,i,e,_e,ze,null,Re);for(let a=0;a<f.length;a+=1)f[a].a();ue()}r&4&&D(e,"isOpen",v[2]),(!u||r&1&&c!==(c="add-todo "+v[0]+" svelte-1hafqlz"))&&h(t,"class",c)},i(v){if(!u){for(let r=0;r<b.length;r+=1)U(f[r]);U(o.$$.fragment,v),u=!0}},o(v){for(let r=0;r<f.length;r+=1)P(f[r]);P(o.$$.fragment,v),u=!1},d(v){v&&g(t);for(let r=0;r<f.length;r+=1)f[r].d();Z(o),d=!1,k()}}}function it(s,t,e){let l;x(s,Ne,b=>e(3,l=b));let{class:n=""}=t,f="#0029FF",i=!1;const o=b=>{let C={id:Date.now(),text:b.detail.value,color:f,done:!1,date:lt(new Date,"dot")};M.update(v=>v=[C,...v])},c=b=>b&&e(1,f=b),u=()=>e(2,i=!i),d=b=>b.color!=f,k=()=>e(2,i=!i);return s.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,f,i,l,o,c,u,d,k]}class rt extends H{constructor(t){super();j(this,t,it,at,Y,{class:0})}}function ct(s){let t,e,l,n,f,i,o;return n=new rt({}),i=new tt({props:{class:"mt-50"}}),{c(){t=Xe(),e=E("section"),l=E("div"),Q(n.$$.fragment),Q(i.$$.fragment),this.h()},l(c){Ze('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Ge(c),e=T(c,"SECTION",{class:!0});var d=I(e);l=T(d,"DIV",{class:!0});var k=I(l);W(n.$$.fragment,k),k.forEach(g),d.forEach(g),W(i.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(l,"class","container"),h(e,"class",f=""+(s[0]+" mt-50 svelte-110abfo"))},m(c,u){S(c,t,u),S(c,e,u),w(e,l),X(n,l,null),X(i,c,u),o=!0},p(c,[u]){(!o||u&1&&f!==(f=""+(c[0]+" mt-50 svelte-110abfo")))&&h(e,"class",f)},i(c){o||(U(n.$$.fragment,c),U(i.$$.fragment,c),o=!0)},o(c){P(n.$$.fragment,c),P(i.$$.fragment,c),o=!1},d(c){c&&g(t),c&&g(e),Z(n),Z(i,c)}}}function ft(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class dt extends H{constructor(t){super();j(this,t,ft,ct,Y,{class:0})}}export{dt as default};
