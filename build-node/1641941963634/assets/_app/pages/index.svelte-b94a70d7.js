import{K as Ke,C as Me,S as Y,i as Q,L as He,e as T,c as w,a as C,d as g,b as m,f as V,D as O,M as S,N as z,O as ge,t as ke,g as be,P as I,Q as ae,h as Ee,R as oe,T as Xe,E as K,U as ye,V as ie,W as ce,s as re,v as W,w as Z,x as G,X as fe,Y as ue,Z as _e,p as L,_ as de,$ as Te,n as R,a0 as we,A as J,m as he,o as me,a1 as Ye,a2 as ve,a3 as pe,a4 as Qe,a5 as We,a6 as Ce,a7 as Ie,j as Ze,a8 as Ge,l as Je}from"../chunks/vendor-6ec25659.js";const j=Me([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=Ke(j,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=l.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,r)=>n.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(i)}),$e=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},xe=l=>{l.style.height="auto",l.style.height=`${l.scrollHeight}px`};function De(l,t,e){const s=l.slice();return s[35]=t[e],s}function Ae(l,t){let e,s,n,c,i;return{key:l,first:null,c(){e=T("li"),s=T("button"),this.h()},l(a){e=w(a,"LI",{class:!0});var r=C(e);s=w(r,"BUTTON",{class:!0,style:!0}),C(s).forEach(g),r.forEach(g),this.h()},h(){m(s,"class","task__color-btn svelte-mphfv4"),m(s,"style",n=`background-color: ${t[35].color}`),m(e,"class","task__color-item svelte-mphfv4"),this.first=e},m(a,r){V(a,e,r),O(e,s),c||(i=S(s,"click",z(function(){ge(t[15](t[35].color))&&t[15](t[35].color).apply(this,arguments)})),c=!0)},p(a,r){t=a,r[0]&2052&&n!==(n=`background-color: ${t[35].color}`)&&m(s,"style",n)},d(a){a&&g(e),c=!1,i()}}}function et(l){let t,e,s,n,c,i,a,r,u,_,p,E,y,h,o,f=[],v=new Map,U,N,A,P,M,H,B=l[11].filter(l[26]);const $=k=>k[35].id;for(let k=0;k<B.length;k+=1){let b=De(l,B,k),q=$(b);v.set(q,f[k]=Ae(q,b))}return{c(){t=T("article"),e=T("div"),s=T("div"),n=T("textarea"),i=T("div"),a=T("div"),r=T("span"),u=ke(l[4]),_=T("div"),p=T("button"),E=T("span"),y=T("button"),h=T("span"),o=T("ul");for(let k=0;k<f.length;k+=1)f[k].c();N=T("button"),A=T("span"),this.h()},l(k){t=w(k,"ARTICLE",{class:!0});var b=C(t);e=w(b,"DIV",{class:!0});var q=C(e);s=w(q,"DIV",{class:!0});var x=C(s);n=w(x,"TEXTAREA",{class:!0,rows:!0}),C(n).forEach(g),x.forEach(g),i=w(q,"DIV",{class:!0});var ee=C(i);a=w(ee,"DIV",{class:!0});var te=C(a);r=w(te,"SPAN",{class:!0});var le=C(r);u=be(le,l[4]),le.forEach(g),te.forEach(g),ee.forEach(g),q.forEach(g),_=w(b,"DIV",{class:!0});var X=C(_);p=w(X,"BUTTON",{class:!0});var se=C(p);E=w(se,"SPAN",{class:!0}),C(E).forEach(g),se.forEach(g),y=w(X,"BUTTON",{class:!0});var ne=C(y);h=w(ne,"SPAN",{class:!0}),C(h).forEach(g),ne.forEach(g),X.forEach(g),o=w(b,"UL",{class:!0,style:!0});var d=C(o);for(let F=0;F<f.length;F+=1)f[F].l(d);d.forEach(g),N=w(b,"BUTTON",{class:!0});var D=C(N);A=w(D,"SPAN",{class:!0}),C(A).forEach(g),D.forEach(g),b.forEach(g),this.h()},h(){m(n,"class","task__main-content svelte-mphfv4"),n.disabled=c=!l[7],m(n,"rows","1"),m(s,"class","task__main-container svelte-mphfv4"),m(r,"class","svelte-mphfv4"),m(a,"class","task__info-content svelte-mphfv4"),m(i,"class","task__info svelte-mphfv4"),m(e,"class","task__main svelte-mphfv4"),I(e,"isEdit",l[7]),m(E,"class","svg-image-del svelte-mphfv4"),m(p,"class","task__menu-btn task__menu-btn_del svelte-mphfv4"),m(h,"class","svg-image-pen svelte-mphfv4"),m(y,"class","task__menu-btn task__menu-btn_edit svelte-mphfv4"),I(y,"isSelect",l[7]),I(y,"isChanged",l[8]),I(y,"isSave",l[9]),m(_,"class","task__circle task__menu svelte-mphfv4"),I(_,"isOpen",l[7]),m(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-mphfv4"),m(o,"style",U=`background-color: ${l[2]}`),I(o,"isOpen",l[7]),m(A,"class","svelte-mphfv4"),m(N,"class","task__info-open svelte-mphfv4"),I(N,"isHidden",l[7]),m(t,"class",P="task "+l[1]+" svelte-mphfv4"),I(t,"isDisabled",l[3]),I(t,"isInfoOpen",l[5]),I(t,"isEdit",l[7])},m(k,b){V(k,t,b),O(t,e),O(e,s),O(s,n),l[21](n),ae(n,l[0]),O(e,i),O(i,a),O(a,r),O(r,u),l[24](i),O(t,_),O(_,p),O(p,E),O(_,y),O(y,h),O(t,o);for(let q=0;q<f.length;q+=1)f[q].m(o,null);O(t,N),O(N,A),M||(H=[S(n,"input",l[22]),S(n,"input",l[23]),S(n,"keydown",l[17]),S(e,"click",l[12]),S(p,"click",z(l[13])),S(y,"click",z(l[25])),S(N,"click",z(l[27]))],M=!0)},p(k,b){b[0]&128&&c!==(c=!k[7])&&(n.disabled=c),b[0]&1&&ae(n,k[0]),b[0]&16&&Ee(u,k[4]),b[0]&128&&I(e,"isEdit",k[7]),b[0]&128&&I(y,"isSelect",k[7]),b[0]&256&&I(y,"isChanged",k[8]),b[0]&512&&I(y,"isSave",k[9]),b[0]&128&&I(_,"isOpen",k[7]),b[0]&34820&&(B=k[11].filter(k[26]),f=oe(f,b,$,1,k,B,v,o,Xe,Ae,null,De)),b[0]&4&&U!==(U=`background-color: ${k[2]}`)&&m(o,"style",U),b[0]&128&&I(o,"isOpen",k[7]),b[0]&128&&I(N,"isHidden",k[7]),b[0]&2&&P!==(P="task "+k[1]+" svelte-mphfv4")&&m(t,"class",P),b[0]&10&&I(t,"isDisabled",k[3]),b[0]&34&&I(t,"isInfoOpen",k[5]),b[0]&130&&I(t,"isEdit",k[7])},i:K,o:K,d(k){k&&g(t),l[21](null),l[24](null);for(let b=0;b<f.length;b+=1)f[b].d();M=!1,ye(H)}}}let Fe=new Set;function tt(){Fe.forEach(l=>{l.edit(!1)})}function lt(l,t,e){let s,n;ie(l,j,d=>e(29,s=d)),ie(l,Oe,d=>e(11,n=d));let{class:c=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:r=!1}=t,{id:u=null}=t,{date:_=""}=t,p=i,E=!1,y,h=!1,o=!1,f=!1,v,U;const N=()=>{if(h===!1){let d=s.map(D=>(u===D.id&&(D.done=!D.done),D));j.set(d)}},A=()=>{let d=s.filter(D=>D.id!=u);j.set(d)};function P(d){e(7,h=d!=null?d:!h),h===!1&&B()}const M=d=>{let D=s.map(F=>(u===F.id&&(F.color=d),F));j.set(D)};function H(d){e(5,E=d!=null?d:!E);let D=0;y.childNodes.forEach(F=>D+=F.clientHeight),y.style.setProperty("--taskInfoHeight",`${E?D:0}px`)}function B(){o&&$(i).then(()=>{e(8,o=!1),clearTimeout(U),e(9,f=!0),U=setTimeout(()=>{e(9,f=!1)},500)})}function $(d){if(typeof d=="string")return new Promise(D=>{j.set(s.map(F=>(F.id===u&&(F.text=d),F))),D()});throw new Error("The value is not equal to the string")}function k(d){let D=d.ctrlKey?!1:d.metaKey,F=d.keyCode;if(D&&F===83)return d.preventDefault(),B(),!1}function b(d=i!=null?i:i){return e(8,o=d!==p)}Fe.add({save(){B()},edit(d){P(d)}});const q=()=>{xe(v)};function x(d){ce[d?"unshift":"push"](()=>{v=d,e(10,v)})}function ee(){i=this.value,e(0,i)}const te=()=>{q(),b()};function le(d){ce[d?"unshift":"push"](()=>{y=d,e(6,y)})}const X=()=>{h===!1&&tt(),P()},se=d=>d.color!=a,ne=()=>H();return l.$$set=d=>{"class"in d&&e(1,c=d.class),"text"in d&&e(0,i=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(20,u=d.id),"date"in d&&e(4,_=d.date)},[i,c,a,r,_,E,y,h,o,f,v,n,N,A,P,M,H,k,b,q,u,x,ee,te,le,X,se,ne]}class Ne extends Y{constructor(t){super();Q(this,t,lt,et,He,{class:1,text:0,color:2,disabled:3,id:20,date:4},null,[-1,-1])}}function Se(l,t,e){const s=l.slice();return s[4]=t[e],s}function qe(l,t,e){const s=l.slice();return s[4]=t[e],s}function Ue(l,t){let e,s,n,c,i,a=K,r;return s=new Ne({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),W(s.$$.fragment),this.h()},l(u){e=w(u,"LI",{class:!0});var _=C(e);Z(s.$$.fragment,_),_.forEach(g),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(u,_){V(u,e,_),G(s,e,null),r=!0},p(u,_){t=u;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),s.$set(p)},r(){i=e.getBoundingClientRect()},f(){fe(e),a(),ue(e,i)},a(){a(),a=_e(e,i,ve,{duration:300})},i(u){r||(L(s.$$.fragment,u),de(()=>{c&&c.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){R(s.$$.fragment,u),n&&n.invalidate(),c=we(e,t[2],{key:t[4].id}),r=!1},d(u){u&&g(e),J(s),u&&c&&c.end()}}}function Ve(l,t){let e,s,n,c,i,a=K,r;return s=new Ne({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),W(s.$$.fragment),this.h()},l(u){e=w(u,"LI",{class:!0});var _=C(e);Z(s.$$.fragment,_),_.forEach(g),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(u,_){V(u,e,_),G(s,e,null),r=!0},p(u,_){t=u;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),s.$set(p)},r(){i=e.getBoundingClientRect()},f(){fe(e),a(),ue(e,i)},a(){a(),a=_e(e,i,ve,{duration:300})},i(u){r||(L(s.$$.fragment,u),de(()=>{c&&c.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){R(s.$$.fragment,u),n&&n.invalidate(),c=we(e,t[2],{key:t[4].id}),r=!1},d(u){u&&g(e),J(s),u&&c&&c.end()}}}function st(l){let t,e,s,n=[],c=new Map,i,a=[],r=new Map,u,_,p=l[1].filter(Pe);const E=o=>o[4].id;for(let o=0;o<p.length;o+=1){let f=qe(l,p,o),v=E(f);c.set(v,n[o]=Ue(v,f))}let y=l[1].filter(Be);const h=o=>o[4].id;for(let o=0;o<y.length;o+=1){let f=Se(l,y,o),v=h(f);r.set(v,a[o]=Ve(v,f))}return{c(){t=T("section"),e=T("div"),s=T("ul");for(let o=0;o<n.length;o+=1)n[o].c();i=T("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=w(o,"SECTION",{class:!0});var f=C(t);e=w(f,"DIV",{class:!0});var v=C(e);s=w(v,"UL",{class:!0});var U=C(s);for(let A=0;A<n.length;A+=1)n[A].l(U);U.forEach(g),i=w(v,"UL",{class:!0});var N=C(i);for(let A=0;A<a.length;A+=1)a[A].l(N);N.forEach(g),v.forEach(g),f.forEach(g),this.h()},h(){m(s,"class","task-section__col"),m(i,"class","task-section__col"),m(e,"class","container task-section__grid svelte-te6j4q"),m(t,"class",u="task-section "+l[0]+" svelte-te6j4q")},m(o,f){V(o,t,f),O(t,e),O(e,s);for(let v=0;v<n.length;v+=1)n[v].m(s,null);O(e,i);for(let v=0;v<a.length;v+=1)a[v].m(i,null);_=!0},p(o,[f]){if(f&2){p=o[1].filter(Pe),he();for(let v=0;v<n.length;v+=1)n[v].r();n=oe(n,f,E,1,o,p,c,s,pe,Ue,null,qe);for(let v=0;v<n.length;v+=1)n[v].a();me()}if(f&2){y=o[1].filter(Be),he();for(let v=0;v<a.length;v+=1)a[v].r();a=oe(a,f,h,1,o,y,r,i,pe,Ve,null,Se);for(let v=0;v<a.length;v+=1)a[v].a();me()}(!_||f&1&&u!==(u="task-section "+o[0]+" svelte-te6j4q"))&&m(t,"class",u)},i(o){if(!_){for(let f=0;f<p.length;f+=1)L(n[f]);for(let f=0;f<y.length;f+=1)L(a[f]);_=!0}},o(o){for(let f=0;f<n.length;f+=1)R(n[f]);for(let f=0;f<a.length;f+=1)R(a[f]);_=!1},d(o){o&&g(t);for(let f=0;f<n.length;f+=1)n[f].d();for(let f=0;f<a.length;f+=1)a[f].d()}}}const Pe=l=>!l.done,Be=l=>l.done;function nt(l,t,e){let s;ie(l,j,a=>e(1,s=a));let{class:n=""}=t;const[c,i]=Ye({duration:a=>Math.sqrt(a*200),fallback(a,r){const u=getComputedStyle(a),_=u.transform==="none"?"":u.transform;return{duration:600,easing:Qe,css:p=>`
					transform: ${_} scale(${p});
					opacity: ${p}
				`}}});return l.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,s,c,i]}class at extends Y{constructor(t){super();Q(this,t,nt,st,re,{class:0})}}function Le(l){let t,e,s,n=l[2].text&&Re(l);return{c(){t=T("button"),n&&n.c(),this.h()},l(c){t=w(c,"BUTTON",{class:!0});var i=C(t);n&&n.l(i),i.forEach(g),this.h()},h(){m(t,"class","btn svelte-1yy2xse")},m(c,i){V(c,t,i),n&&n.m(t,null),e||(s=S(t,"click",z(l[6])),e=!0)},p(c,i){c[2].text?n?n.p(c,i):(n=Re(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&g(t),n&&n.d(),e=!1,s()}}}function Re(l){let t=l[2].text+"",e;return{c(){e=ke(t)},l(s){e=be(s,t)},m(s,n){V(s,e,n)},p(s,n){n&4&&t!==(t=s[2].text+"")&&Ee(e,t)},d(s){s&&g(e)}}}function ot(l){let t,e,s,n,c,i=l[2]&&Le(l);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(a){t=w(a,"DIV",{class:!0});var r=C(t);e=w(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(g),this.h()},h(){m(e,"placeholder",l[1]),m(e,"class","svelte-1yy2xse"),m(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),I(t,"isError",l[5])},m(a,r){V(a,t,r),O(t,e),ae(e,l[4]),i&&i.m(t,null),l[10](t),n||(c=[S(e,"input",l[9]),S(e,"input",l[7]),S(e,"keydown",l[8])],n=!0)},p(a,[r]){r&2&&m(e,"placeholder",a[1]),r&16&&e.value!==a[4]&&ae(e,a[4]),a[2]?i?i.p(a,r):(i=Le(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&m(t,"class",s),r&37&&I(t,"isError",a[5])},i:K,o:K,d(a){a&&g(t),i&&i.d(),l[10](null),n=!1,ye(c)}}}function it(l,t,e){let{class:s=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,i,a,r=!1;const u=We(),_=()=>{a?(u("submit",{value:a}),e(4,a="")):e(5,r=!0)},p=()=>{e(5,r=!1)},E=o=>{let f=o.key,v=o.ctrlKey,U=o.shiftKey;o.keyCode,v&&U&&u("color"),f==="Enter"&&_()};function y(){a=this.value,e(4,a)}function h(o){ce[o?"unshift":"push"](()=>{i=o,e(3,i)})}return l.$$set=o=>{"class"in o&&e(0,s=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,c=o.btn)},[s,n,c,i,a,r,_,p,E,y,h]}class rt extends Y{constructor(t){super();Q(this,t,it,ot,re,{class:0,placeholder:1,btn:2})}}function je(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function ze(l,t){let e,s,n,c,i=K,a,r,u;return{key:l,first:null,c(){e=T("button"),this.h()},l(_){e=w(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(g),this.h()},h(){m(e,"class","add-todo__color svelte-1hafqlz"),m(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,p){V(_,e,p),a=!0,r||(u=S(e,"click",z(function(){ge(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,p){t=_,(!a||p&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",s)},r(){c=e.getBoundingClientRect()},f(){fe(e),i(),ue(e,c)},a(){i(),i=_e(e,c,ve,{})},i(_){a||(de(()=>{n||(n=Ce(e,Ie,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ce(e,Ie,{},!1)),n.run(0),a=!1},d(_){_&&g(e),_&&n&&n.end(),r=!1,u()}}}function ct(l){let t,e,s,n,c=[],i=new Map,a,r,u,_,p,E=l[3].filter(l[7]);const y=h=>h[9].id;for(let h=0;h<E.length;h+=1){let o=je(l,E,h),f=y(o);i.set(f,c[h]=ze(f,o))}return a=new rt({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",l[8]),a.$on("submit",l[4]),{c(){t=T("div"),e=T("div"),s=T("span");for(let h=0;h<c.length;h+=1)c[h].c();W(a.$$.fragment),this.h()},l(h){t=w(h,"DIV",{class:!0});var o=C(t);e=w(o,"DIV",{class:!0});var f=C(e);s=w(f,"SPAN",{class:!0,style:!0}),C(s).forEach(g);for(let v=0;v<c.length;v+=1)c[v].l(f);f.forEach(g),Z(a.$$.fragment,o),o.forEach(g),this.h()},h(){m(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),m(s,"style",n=`color: ${l[1]}`),m(e,"class","add-todo__color-list svelte-1hafqlz"),I(e,"isOpen",l[2]),m(t,"class",r="add-todo "+l[0]+" svelte-1hafqlz")},m(h,o){V(h,t,o),O(t,e),O(e,s);for(let f=0;f<c.length;f+=1)c[f].m(e,null);G(a,t,null),u=!0,_||(p=S(s,"click",z(l[6])),_=!0)},p(h,[o]){if((!u||o&2&&n!==(n=`color: ${h[1]}`))&&m(s,"style",n),o&42){E=h[3].filter(h[7]),he();for(let f=0;f<c.length;f+=1)c[f].r();c=oe(c,o,y,1,h,E,i,e,pe,ze,null,je);for(let f=0;f<c.length;f+=1)c[f].a();me()}o&4&&I(e,"isOpen",h[2]),(!u||o&1&&r!==(r="add-todo "+h[0]+" svelte-1hafqlz"))&&m(t,"class",r)},i(h){if(!u){for(let o=0;o<E.length;o+=1)L(c[o]);L(a.$$.fragment,h),u=!0}},o(h){for(let o=0;o<c.length;o+=1)R(c[o]);R(a.$$.fragment,h),u=!1},d(h){h&&g(t);for(let o=0;o<c.length;o+=1)c[o].d();J(a),_=!1,p()}}}function ft(l,t,e){let s;ie(l,Oe,E=>e(3,s=E));let{class:n=""}=t,c="#0029FF",i=!1;const a=E=>{let y={id:Date.now(),text:E.detail.value,color:c,done:!1,date:$e(new Date,"dot")};j.update(h=>h=[y,...h])},r=E=>E&&e(1,c=E),u=()=>e(2,i=!i),_=E=>E.color!=c,p=()=>e(2,i=!i);return l.$$set=E=>{"class"in E&&e(0,n=E.class)},[n,c,i,s,a,r,u,_,p]}class ut extends Y{constructor(t){super();Q(this,t,ft,ct,re,{class:0})}}function _t(l){let t,e,s,n,c,i,a;return n=new ut({}),i=new at({props:{class:"mt-50"}}),{c(){t=Ze(),e=T("section"),s=T("div"),W(n.$$.fragment),W(i.$$.fragment),this.h()},l(r){Ge('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Je(r),e=w(r,"SECTION",{class:!0});var _=C(e);s=w(_,"DIV",{class:!0});var p=C(s);Z(n.$$.fragment,p),p.forEach(g),_.forEach(g),Z(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(s,"class","container"),m(e,"class",c=""+(l[0]+" mt-50 svelte-110abfo"))},m(r,u){V(r,t,u),V(r,e,u),O(e,s),G(n,s,null),G(i,r,u),a=!0},p(r,[u]){(!a||u&1&&c!==(c=""+(r[0]+" mt-50 svelte-110abfo")))&&m(e,"class",c)},i(r){a||(L(n.$$.fragment,r),L(i.$$.fragment,r),a=!0)},o(r){R(n.$$.fragment,r),R(i.$$.fragment,r),a=!1},d(r){r&&g(t),r&&g(e),J(n),J(i,r)}}}function dt(l,t,e){let{class:s=""}=t;return l.$$set=n=>{"class"in n&&e(0,s=n.class)},[s]}class mt extends Y{constructor(t){super();Q(this,t,dt,_t,re,{class:0})}}export{mt as default};
