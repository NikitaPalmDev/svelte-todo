import{K as ze,C as He,S as Y,i as Q,L as Xe,e as T,c as q,a as w,d as v,b as m,f as U,D as I,M as F,N as j,O as pe,t as be,g as Ee,P as C,Q as oe,h as ye,R as ie,T as Ye,E as K,U as Te,V as re,u as Qe,W as ue,s as ce,v as W,w as Z,x as G,X as fe,Y as _e,Z as de,p as L,_ as he,$ as qe,n as P,a0 as we,A as J,m as me,o as ke,a1 as We,a2 as ge,a3 as ve,a4 as Ze,a5 as Ge,a6 as Ce,a7 as Ie,j as Je,a8 as $e,l as xe}from"../chunks/vendor-6ec25659.js";const B=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=ze(B,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let s=l.filter(a=>a.color).map(a=>a.color).concat(e),i=s.filter((a,r)=>s.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(i)}),et=(l,t)=>{if(t==="dot"){let e=l.getDate(),n=l.getMonth();return`${e<10?0:""}${e+1}.${n<10?0:""}${n+1}.${l.getFullYear()}`}},tt=(l,t)=>getComputedStyle(l)[t];function Se(l,t,e){const n=l.slice();return n[35]=t[e],n}function De(l,t){let e,n,s,c,i;return{key:l,first:null,c(){e=T("li"),n=T("button"),this.h()},l(a){e=q(a,"LI",{class:!0});var r=w(e);n=q(r,"BUTTON",{class:!0,style:!0}),w(n).forEach(v),r.forEach(v),this.h()},h(){m(n,"class","task__color-btn svelte-1iu4qks"),m(n,"style",s=`background-color: ${t[35].color}`),m(e,"class","task__color-item svelte-1iu4qks"),this.first=e},m(a,r){U(a,e,r),I(e,n),c||(i=F(n,"click",j(function(){pe(t[16](t[35].color))&&t[16](t[35].color).apply(this,arguments)})),c=!0)},p(a,r){t=a,r[0]&4100&&s!==(s=`background-color: ${t[35].color}`)&&m(n,"style",s)},d(a){a&&v(e),c=!1,i()}}}function lt(l){let t,e,n,s,c,i,a,r,f,_,g,E,y,h,o,u=[],k=new Map,S,D,A,z,R,$,M=l[12].filter(l[26]);const H=p=>p[35].id;for(let p=0;p<M.length;p+=1){let b=Se(l,M,p),N=H(b);k.set(N,u[p]=De(N,b))}return{c(){t=T("article"),e=T("div"),n=T("div"),s=T("textarea"),i=T("div"),a=T("div"),r=T("span"),f=be(l[4]),_=T("div"),g=T("button"),E=T("span"),y=T("button"),h=T("span"),o=T("ul");for(let p=0;p<u.length;p+=1)u[p].c();D=T("button"),A=T("span"),this.h()},l(p){t=q(p,"ARTICLE",{class:!0});var b=w(t);e=q(b,"DIV",{class:!0});var N=w(e);n=q(N,"DIV",{class:!0});var x=w(n);s=q(x,"TEXTAREA",{class:!0,rows:!0}),w(s).forEach(v),x.forEach(v),i=q(N,"DIV",{class:!0});var ee=w(i);a=q(ee,"DIV",{class:!0});var te=w(a);r=q(te,"SPAN",{class:!0});var le=w(r);f=Ee(le,l[4]),le.forEach(v),te.forEach(v),ee.forEach(v),N.forEach(v),_=q(b,"DIV",{class:!0});var X=w(_);g=q(X,"BUTTON",{class:!0});var se=w(g);E=q(se,"SPAN",{class:!0}),w(E).forEach(v),se.forEach(v),y=q(X,"BUTTON",{class:!0});var ne=w(y);h=q(ne,"SPAN",{class:!0}),w(h).forEach(v),ne.forEach(v),X.forEach(v),o=q(b,"UL",{class:!0,style:!0});var ae=w(o);for(let O=0;O<u.length;O+=1)u[O].l(ae);ae.forEach(v),D=q(b,"BUTTON",{class:!0});var d=w(D);A=q(d,"SPAN",{class:!0}),w(A).forEach(v),d.forEach(v),b.forEach(v),this.h()},h(){m(s,"class","task__main-content svelte-1iu4qks"),s.disabled=c=!l[7],m(s,"rows","1"),C(s,"addTransition",l[10]),m(n,"class","task__main-container svelte-1iu4qks"),m(r,"class","svelte-1iu4qks"),m(a,"class","task__info-content svelte-1iu4qks"),m(i,"class","task__info svelte-1iu4qks"),m(e,"class","task__main svelte-1iu4qks"),C(e,"isEdit",l[7]),m(E,"class","svg-image-del svelte-1iu4qks"),m(g,"class","task__menu-btn task__menu-btn_del svelte-1iu4qks"),m(h,"class","svg-image-pen svelte-1iu4qks"),m(y,"class","task__menu-btn task__menu-btn_edit svelte-1iu4qks"),C(y,"isSelect",l[7]),C(y,"isChanged",l[8]),C(y,"isSave",l[9]),m(_,"class","task__circle task__menu svelte-1iu4qks"),C(_,"isOpen",l[7]),m(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1iu4qks"),m(o,"style",S=`background-color: ${l[2]}`),C(o,"isOpen",l[7]),m(A,"class","svelte-1iu4qks"),m(D,"class","task__info-open svelte-1iu4qks"),C(D,"isHidden",l[7]),m(t,"class",z="task "+l[1]+" svelte-1iu4qks"),C(t,"isDisabled",l[3]),C(t,"isInfoOpen",l[5]),C(t,"isEdit",l[7])},m(p,b){U(p,t,b),I(t,e),I(e,n),I(n,s),l[21](s),oe(s,l[0]),I(e,i),I(i,a),I(a,r),I(r,f),l[24](i),I(t,_),I(_,g),I(g,E),I(_,y),I(y,h),I(t,o);for(let N=0;N<u.length;N+=1)u[N].m(o,null);I(t,D),I(D,A),R||($=[F(s,"input",l[22]),F(s,"input",l[23]),F(s,"keydown",l[18]),F(e,"click",l[13]),F(g,"click",j(l[14])),F(y,"click",j(l[25])),F(D,"click",j(l[27]))],R=!0)},p(p,b){b[0]&128&&c!==(c=!p[7])&&(s.disabled=c),b[0]&1&&oe(s,p[0]),b[0]&1024&&C(s,"addTransition",p[10]),b[0]&16&&ye(f,p[4]),b[0]&128&&C(e,"isEdit",p[7]),b[0]&128&&C(y,"isSelect",p[7]),b[0]&256&&C(y,"isChanged",p[8]),b[0]&512&&C(y,"isSave",p[9]),b[0]&128&&C(_,"isOpen",p[7]),b[0]&69636&&(M=p[12].filter(p[26]),u=ie(u,b,H,1,p,M,k,o,Ye,De,null,Se)),b[0]&4&&S!==(S=`background-color: ${p[2]}`)&&m(o,"style",S),b[0]&128&&C(o,"isOpen",p[7]),b[0]&128&&C(D,"isHidden",p[7]),b[0]&2&&z!==(z="task "+p[1]+" svelte-1iu4qks")&&m(t,"class",z),b[0]&10&&C(t,"isDisabled",p[3]),b[0]&34&&C(t,"isInfoOpen",p[5]),b[0]&130&&C(t,"isEdit",p[7])},i:K,o:K,d(p){p&&v(t),l[21](null),l[24](null);for(let b=0;b<u.length;b+=1)u[b].d();R=!1,Te($)}}}let Ae=new Set;function st(){Ae.forEach(l=>{l.edit(!1)})}function nt(l,t,e){let n,s;re(l,B,d=>e(29,n=d)),re(l,Oe,d=>e(12,s=d));let{class:c=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,g=i,E=!1,y,h=!1,o=!1,u=!1,k=!1,S,D;const A=()=>{if(h===!1){let d=n.map(O=>(f===O.id&&(O.done=!O.done),O));B.set(d)}},z=()=>{let d=n.filter(O=>O.id!=f);B.set(d)};function R(d){e(7,h=d!=null?d:!h),h===!1&&H()}const $=d=>{let O=n.map(V=>(f===V.id&&(V.color=d),V));B.set(O)};function M(d){e(5,E=d!=null?d:!E);let O=0;y.childNodes.forEach(V=>O+=V.clientHeight),y.style.setProperty("--taskInfoHeight",`${E?O:0}px`)}function H(){o&&p(i).then(()=>{e(8,o=!1),clearTimeout(D),e(9,u=!0),D=setTimeout(()=>{e(9,u=!1)},500)})}function p(d){if(typeof d=="string")return new Promise(O=>{B.set(n.map(V=>(V.id===f&&(V.text=d),V))),O()});throw new Error("The value is not equal to the string")}function b(d){let O=d.ctrlKey?!1:d.metaKey,V=d.keyCode;if(O&&V===83)return d.preventDefault(),H(),!1}function N(d=i){return e(8,o=d!==g)}function x(){let d=S.scrollHeight,O=tt(S,"line-height");console.log(d,O)}Qe(()=>{x(),e(10,k=!0)}),Ae.add({save(){H()},edit(d){R(d)}});function ee(d){ue[d?"unshift":"push"](()=>{S=d,e(11,S)})}function te(){i=this.value,e(0,i)}const le=()=>{N()};function X(d){ue[d?"unshift":"push"](()=>{y=d,e(6,y)})}const se=()=>{h===!1&&st(),R()},ne=d=>d.color!=a,ae=()=>M();return l.$$set=d=>{"class"in d&&e(1,c=d.class),"text"in d&&e(0,i=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(20,f=d.id),"date"in d&&e(4,_=d.date)},[i,c,a,r,_,E,y,h,o,u,k,S,s,A,z,R,$,M,b,N,f,ee,te,le,X,se,ne,ae]}class Fe extends Y{constructor(t){super();Q(this,t,nt,lt,Xe,{class:1,text:0,color:2,disabled:3,id:20,date:4},null,[-1,-1])}}function Ne(l,t,e){const n=l.slice();return n[4]=t[e],n}function Ue(l,t,e){const n=l.slice();return n[4]=t[e],n}function Ve(l,t){let e,n,s,c,i,a=K,r;return n=new Fe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),W(n.$$.fragment),this.h()},l(f){e=q(f,"LI",{class:!0});var _=w(e);Z(n.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){U(f,e,_),G(n,e,null),r=!0},p(f,_){t=f;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),n.$set(g)},r(){i=e.getBoundingClientRect()},f(){fe(e),a(),_e(e,i)},a(){a(),a=de(e,i,ge,{duration:300})},i(f){r||(L(n.$$.fragment,f),he(()=>{c&&c.end(1),s=qe(e,t[3],{key:t[4].id}),s.start()}),r=!0)},o(f){P(n.$$.fragment,f),s&&s.invalidate(),c=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&v(e),J(n),f&&c&&c.end()}}}function Le(l,t){let e,n,s,c,i,a=K,r;return n=new Fe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),W(n.$$.fragment),this.h()},l(f){e=q(f,"LI",{class:!0});var _=w(e);Z(n.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){U(f,e,_),G(n,e,null),r=!0},p(f,_){t=f;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),n.$set(g)},r(){i=e.getBoundingClientRect()},f(){fe(e),a(),_e(e,i)},a(){a(),a=de(e,i,ge,{duration:300})},i(f){r||(L(n.$$.fragment,f),he(()=>{c&&c.end(1),s=qe(e,t[3],{key:t[4].id}),s.start()}),r=!0)},o(f){P(n.$$.fragment,f),s&&s.invalidate(),c=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&v(e),J(n),f&&c&&c.end()}}}function at(l){let t,e,n,s=[],c=new Map,i,a=[],r=new Map,f,_,g=l[1].filter(Pe);const E=o=>o[4].id;for(let o=0;o<g.length;o+=1){let u=Ue(l,g,o),k=E(u);c.set(k,s[o]=Ve(k,u))}let y=l[1].filter(Be);const h=o=>o[4].id;for(let o=0;o<y.length;o+=1){let u=Ne(l,y,o),k=h(u);r.set(k,a[o]=Le(k,u))}return{c(){t=T("section"),e=T("div"),n=T("ul");for(let o=0;o<s.length;o+=1)s[o].c();i=T("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=q(o,"SECTION",{class:!0});var u=w(t);e=q(u,"DIV",{class:!0});var k=w(e);n=q(k,"UL",{class:!0});var S=w(n);for(let A=0;A<s.length;A+=1)s[A].l(S);S.forEach(v),i=q(k,"UL",{class:!0});var D=w(i);for(let A=0;A<a.length;A+=1)a[A].l(D);D.forEach(v),k.forEach(v),u.forEach(v),this.h()},h(){m(n,"class","task-section__col"),m(i,"class","task-section__col"),m(e,"class","container task-section__grid svelte-te6j4q"),m(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(o,u){U(o,t,u),I(t,e),I(e,n);for(let k=0;k<s.length;k+=1)s[k].m(n,null);I(e,i);for(let k=0;k<a.length;k+=1)a[k].m(i,null);_=!0},p(o,[u]){if(u&2){g=o[1].filter(Pe),me();for(let k=0;k<s.length;k+=1)s[k].r();s=ie(s,u,E,1,o,g,c,n,ve,Ve,null,Ue);for(let k=0;k<s.length;k+=1)s[k].a();ke()}if(u&2){y=o[1].filter(Be),me();for(let k=0;k<a.length;k+=1)a[k].r();a=ie(a,u,h,1,o,y,r,i,ve,Le,null,Ne);for(let k=0;k<a.length;k+=1)a[k].a();ke()}(!_||u&1&&f!==(f="task-section "+o[0]+" svelte-te6j4q"))&&m(t,"class",f)},i(o){if(!_){for(let u=0;u<g.length;u+=1)L(s[u]);for(let u=0;u<y.length;u+=1)L(a[u]);_=!0}},o(o){for(let u=0;u<s.length;u+=1)P(s[u]);for(let u=0;u<a.length;u+=1)P(a[u]);_=!1},d(o){o&&v(t);for(let u=0;u<s.length;u+=1)s[u].d();for(let u=0;u<a.length;u+=1)a[u].d()}}}const Pe=l=>!l.done,Be=l=>l.done;function ot(l,t,e){let n;re(l,B,a=>e(1,n=a));let{class:s=""}=t;const[c,i]=We({duration:a=>Math.sqrt(a*200),fallback(a,r){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Ze,css:g=>`
					transform: ${_} scale(${g});
					opacity: ${g}
				`}}});return l.$$set=a=>{"class"in a&&e(0,s=a.class)},[s,n,c,i]}class it extends Y{constructor(t){super();Q(this,t,ot,at,ce,{class:0})}}function Re(l){let t,e,n,s=l[2].text&&Me(l);return{c(){t=T("button"),s&&s.c(),this.h()},l(c){t=q(c,"BUTTON",{class:!0});var i=w(t);s&&s.l(i),i.forEach(v),this.h()},h(){m(t,"class","btn svelte-1yy2xse")},m(c,i){U(c,t,i),s&&s.m(t,null),e||(n=F(t,"click",j(l[6])),e=!0)},p(c,i){c[2].text?s?s.p(c,i):(s=Me(c),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(c){c&&v(t),s&&s.d(),e=!1,n()}}}function Me(l){let t=l[2].text+"",e;return{c(){e=be(t)},l(n){e=Ee(n,t)},m(n,s){U(n,e,s)},p(n,s){s&4&&t!==(t=n[2].text+"")&&ye(e,t)},d(n){n&&v(e)}}}function rt(l){let t,e,n,s,c,i=l[2]&&Re(l);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(a){t=q(a,"DIV",{class:!0});var r=w(t);e=q(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(v),this.h()},h(){m(e,"placeholder",l[1]),m(e,"class","svelte-1yy2xse"),m(t,"class",n="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),C(t,"isError",l[5])},m(a,r){U(a,t,r),I(t,e),oe(e,l[4]),i&&i.m(t,null),l[10](t),s||(c=[F(e,"input",l[9]),F(e,"input",l[7]),F(e,"keydown",l[8])],s=!0)},p(a,[r]){r&2&&m(e,"placeholder",a[1]),r&16&&e.value!==a[4]&&oe(e,a[4]),a[2]?i?i.p(a,r):(i=Re(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&n!==(n="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&m(t,"class",n),r&37&&C(t,"isError",a[5])},i:K,o:K,d(a){a&&v(t),i&&i.d(),l[10](null),s=!1,Te(c)}}}function ct(l,t,e){let{class:n=""}=t,{placeholder:s="Placeholer"}=t,{btn:c=null}=t,i,a,r=!1;const f=Ge(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,r=!0)},g=()=>{e(5,r=!1)},E=o=>{let u=o.key,k=o.ctrlKey,S=o.shiftKey;o.keyCode,k&&S&&f("color"),u==="Enter"&&_()};function y(){a=this.value,e(4,a)}function h(o){ue[o?"unshift":"push"](()=>{i=o,e(3,i)})}return l.$$set=o=>{"class"in o&&e(0,n=o.class),"placeholder"in o&&e(1,s=o.placeholder),"btn"in o&&e(2,c=o.btn)},[n,s,c,i,a,r,_,g,E,y,h]}class ut extends Y{constructor(t){super();Q(this,t,ct,rt,ce,{class:0,placeholder:1,btn:2})}}function je(l,t,e){const n=l.slice();return n[9]=t[e],n[11]=e,n}function Ke(l,t){let e,n,s,c,i=K,a,r,f;return{key:l,first:null,c(){e=T("button"),this.h()},l(_){e=q(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(v),this.h()},h(){m(e,"class","add-todo__color svelte-1hafqlz"),m(e,"style",n=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,g){U(_,e,g),a=!0,r||(f=F(e,"click",j(function(){pe(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,g){t=_,(!a||g&10&&n!==(n=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",n)},r(){c=e.getBoundingClientRect()},f(){fe(e),i(),_e(e,c)},a(){i(),i=de(e,c,ge,{})},i(_){a||(he(()=>{s||(s=Ce(e,Ie,{},!0)),s.run(1)}),a=!0)},o(_){s||(s=Ce(e,Ie,{},!1)),s.run(0),a=!1},d(_){_&&v(e),_&&s&&s.end(),r=!1,f()}}}function ft(l){let t,e,n,s,c=[],i=new Map,a,r,f,_,g,E=l[3].filter(l[7]);const y=h=>h[9].id;for(let h=0;h<E.length;h+=1){let o=je(l,E,h),u=y(o);i.set(u,c[h]=Ke(u,o))}return a=new ut({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",l[8]),a.$on("submit",l[4]),{c(){t=T("div"),e=T("div"),n=T("span");for(let h=0;h<c.length;h+=1)c[h].c();W(a.$$.fragment),this.h()},l(h){t=q(h,"DIV",{class:!0});var o=w(t);e=q(o,"DIV",{class:!0});var u=w(e);n=q(u,"SPAN",{class:!0,style:!0}),w(n).forEach(v);for(let k=0;k<c.length;k+=1)c[k].l(u);u.forEach(v),Z(a.$$.fragment,o),o.forEach(v),this.h()},h(){m(n,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),m(n,"style",s=`color: ${l[1]}`),m(e,"class","add-todo__color-list svelte-1hafqlz"),C(e,"isOpen",l[2]),m(t,"class",r="add-todo "+l[0]+" svelte-1hafqlz")},m(h,o){U(h,t,o),I(t,e),I(e,n);for(let u=0;u<c.length;u+=1)c[u].m(e,null);G(a,t,null),f=!0,_||(g=F(n,"click",j(l[6])),_=!0)},p(h,[o]){if((!f||o&2&&s!==(s=`color: ${h[1]}`))&&m(n,"style",s),o&42){E=h[3].filter(h[7]),me();for(let u=0;u<c.length;u+=1)c[u].r();c=ie(c,o,y,1,h,E,i,e,ve,Ke,null,je);for(let u=0;u<c.length;u+=1)c[u].a();ke()}o&4&&C(e,"isOpen",h[2]),(!f||o&1&&r!==(r="add-todo "+h[0]+" svelte-1hafqlz"))&&m(t,"class",r)},i(h){if(!f){for(let o=0;o<E.length;o+=1)L(c[o]);L(a.$$.fragment,h),f=!0}},o(h){for(let o=0;o<c.length;o+=1)P(c[o]);P(a.$$.fragment,h),f=!1},d(h){h&&v(t);for(let o=0;o<c.length;o+=1)c[o].d();J(a),_=!1,g()}}}function _t(l,t,e){let n;re(l,Oe,E=>e(3,n=E));let{class:s=""}=t,c="#0029FF",i=!1;const a=E=>{let y={id:Date.now(),text:E.detail.value,color:c,done:!1,date:et(new Date,"dot")};B.update(h=>h=[y,...h])},r=E=>E&&e(1,c=E),f=()=>e(2,i=!i),_=E=>E.color!=c,g=()=>e(2,i=!i);return l.$$set=E=>{"class"in E&&e(0,s=E.class)},[s,c,i,n,a,r,f,_,g]}class dt extends Y{constructor(t){super();Q(this,t,_t,ft,ce,{class:0})}}function ht(l){let t,e,n,s,c,i,a;return s=new dt({}),i=new it({props:{class:"mt-50"}}),{c(){t=Je(),e=T("section"),n=T("div"),W(s.$$.fragment),W(i.$$.fragment),this.h()},l(r){$e('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=xe(r),e=q(r,"SECTION",{class:!0});var _=w(e);n=q(_,"DIV",{class:!0});var g=w(n);Z(s.$$.fragment,g),g.forEach(v),_.forEach(v),Z(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(n,"class","container"),m(e,"class",c=""+(l[0]+" mt-50 svelte-110abfo"))},m(r,f){U(r,t,f),U(r,e,f),I(e,n),G(s,n,null),G(i,r,f),a=!0},p(r,[f]){(!a||f&1&&c!==(c=""+(r[0]+" mt-50 svelte-110abfo")))&&m(e,"class",c)},i(r){a||(L(s.$$.fragment,r),L(i.$$.fragment,r),a=!0)},o(r){P(s.$$.fragment,r),P(i.$$.fragment,r),a=!1},d(r){r&&v(t),r&&v(e),J(s),J(i,r)}}}function mt(l,t,e){let{class:n=""}=t;return l.$$set=s=>{"class"in s&&e(0,n=s.class)},[n]}class gt extends Y{constructor(t){super();Q(this,t,mt,ht,ce,{class:0})}}export{gt as default};
