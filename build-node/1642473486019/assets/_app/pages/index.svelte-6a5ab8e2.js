import{K as Qe,C as We,S as G,i as J,L as Ze,e as E,c as T,a as w,d as v,b as m,f as q,D as F,M as N,N as z,O as Te,t as we,g as je,P as C,Q as re,h as Ce,R as ce,T as Ge,E as K,U as Ie,V as ue,u as Je,W as he,s as fe,v as $,w as x,x as ee,X as me,Y as ge,Z as ve,p as B,_ as pe,$ as Fe,n as M,a0 as Oe,A as te,m as ke,o as be,a1 as $e,a2 as ye,a3 as Ee,a4 as xe,a5 as et,a6 as De,a7 as Se,j as tt,a8 as lt,l as st}from"../chunks/vendor-6ec25659.js";const R=We([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ae=Qe(R,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=l.filter(n=>n.color).map(n=>n.color).concat(e),o=a.filter((n,c)=>a.indexOf(n)===c).map((n,c)=>({id:c,color:n}));t(o)}),nt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},_e=(l,t)=>getComputedStyle(l)[t];function Ne(l,t,e){const s=l.slice();return s[37]=t[e],s}function qe(l,t){let e,s,a,r,o;return{key:l,first:null,c(){e=E("li"),s=E("button"),this.h()},l(n){e=T(n,"LI",{class:!0});var c=w(e);s=T(c,"BUTTON",{class:!0,style:!0}),w(s).forEach(v),c.forEach(v),this.h()},h(){m(s,"class","task__color-btn svelte-y6jx1m"),m(s,"style",a=`background-color: ${t[37].color}`),m(e,"class","task__color-item svelte-y6jx1m"),this.first=e},m(n,c){q(n,e,c),F(e,s),r||(o=N(s,"click",z(function(){Te(t[17](t[37].color))&&t[17](t[37].color).apply(this,arguments)})),r=!0)},p(n,c){t=n,c[0]&8196&&a!==(a=`background-color: ${t[37].color}`)&&m(s,"style",a)},d(n){n&&v(e),r=!1,o()}}}function at(l){let t,e,s,a,r,o,n,c,f,_,p,y,I,g,i,u,h,j=[],P=new Map,S,L,H,U,X,Y,V=l[13].filter(l[29]);const le=k=>k[37].id;for(let k=0;k<V.length;k+=1){let b=Ne(l,V,k),A=le(b);P.set(A,j[k]=qe(A,b))}return{c(){t=E("article"),e=E("div"),s=E("div"),a=E("div"),r=E("p"),o=E("textarea"),c=E("div"),f=E("div"),_=E("span"),p=we(l[4]),y=E("div"),I=E("button"),g=E("span"),i=E("button"),u=E("span"),h=E("ul");for(let k=0;k<j.length;k+=1)j[k].c();L=E("button"),H=E("span"),this.h()},l(k){t=T(k,"ARTICLE",{class:!0});var b=w(t);e=T(b,"DIV",{class:!0});var A=w(e);s=T(A,"DIV",{class:!0});var Q=w(s);a=T(Q,"DIV",{class:!0});var W=w(a);r=T(W,"P",{class:!0});var de=w(r);de.forEach(v),o=T(W,"TEXTAREA",{class:!0}),w(o).forEach(v),W.forEach(v),Q.forEach(v),c=T(A,"DIV",{class:!0});var se=w(c);f=T(se,"DIV",{class:!0});var ne=w(f);_=T(ne,"SPAN",{class:!0});var ae=w(_);p=je(ae,l[4]),ae.forEach(v),ne.forEach(v),se.forEach(v),A.forEach(v),y=T(b,"DIV",{class:!0});var Z=w(y);I=T(Z,"BUTTON",{class:!0});var oe=w(I);g=T(oe,"SPAN",{class:!0}),w(g).forEach(v),oe.forEach(v),i=T(Z,"BUTTON",{class:!0});var ie=w(i);u=T(ie,"SPAN",{class:!0}),w(u).forEach(v),ie.forEach(v),Z.forEach(v),h=T(b,"UL",{class:!0,style:!0});var d=w(h);for(let D=0;D<j.length;D+=1)j[D].l(d);d.forEach(v),L=T(b,"BUTTON",{class:!0});var O=w(L);H=T(O,"SPAN",{class:!0}),w(H).forEach(v),O.forEach(v),b.forEach(v),this.h()},h(){m(r,"class","task__main-content addTransition svelte-y6jx1m"),C(r,"isEdit",l[8]),m(o,"class","task__main-content svelte-y6jx1m"),o.disabled=n=!l[8],C(o,"addTransition",l[11]),m(a,"class","task__main-content-wrapper svelte-y6jx1m"),m(s,"class","task__main-container svelte-y6jx1m"),m(_,"class","svelte-y6jx1m"),m(f,"class","task__info-content svelte-y6jx1m"),m(c,"class","task__info svelte-y6jx1m"),m(e,"class","task__main svelte-y6jx1m"),C(e,"isEdit",l[8]),m(g,"class","svg-image-del svelte-y6jx1m"),m(I,"class","task__menu-btn task__menu-btn_del svelte-y6jx1m"),m(u,"class","svg-image-pen svelte-y6jx1m"),m(i,"class","task__menu-btn task__menu-btn_edit svelte-y6jx1m"),C(i,"isSelect",l[8]),C(i,"isChanged",l[9]),C(i,"isSave",l[10]),m(y,"class","task__circle task__menu svelte-y6jx1m"),C(y,"isOpen",l[8]),m(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-y6jx1m"),m(h,"style",S=`background-color: ${l[2]}`),C(h,"isOpen",l[8]),m(H,"class","svelte-y6jx1m"),m(L,"class","task__info-open svelte-y6jx1m"),C(L,"isHidden",l[8]),m(t,"class",U="task "+l[1]+" svelte-y6jx1m"),C(t,"isDisabled",l[3]),C(t,"isInfoOpen",l[6]),C(t,"isEdit",l[8])},m(k,b){q(k,t,b),F(t,e),F(e,s),F(s,a),F(a,r),r.innerHTML=l[5],F(a,o),l[23](o),re(o,l[0]),F(e,c),F(c,f),F(f,_),F(_,p),l[27](c),F(t,y),F(y,I),F(I,g),F(y,i),F(i,u),F(t,h);for(let A=0;A<j.length;A+=1)j[A].m(h,null);F(t,L),F(L,H),X||(Y=[N(o,"input",l[24]),N(o,"input",l[25]),N(o,"keydown",l[26]),N(e,"click",l[14]),N(I,"click",z(l[15])),N(i,"click",z(l[28])),N(L,"click",z(l[30]))],X=!0)},p(k,b){b[0]&32&&(r.innerHTML=k[5]),b[0]&256&&C(r,"isEdit",k[8]),b[0]&256&&n!==(n=!k[8])&&(o.disabled=n),b[0]&1&&re(o,k[0]),b[0]&2048&&C(o,"addTransition",k[11]),b[0]&16&&Ce(p,k[4]),b[0]&256&&C(e,"isEdit",k[8]),b[0]&256&&C(i,"isSelect",k[8]),b[0]&512&&C(i,"isChanged",k[9]),b[0]&1024&&C(i,"isSave",k[10]),b[0]&256&&C(y,"isOpen",k[8]),b[0]&139268&&(V=k[13].filter(k[29]),j=ce(j,b,le,1,k,V,P,h,Ge,qe,null,Ne)),b[0]&4&&S!==(S=`background-color: ${k[2]}`)&&m(h,"style",S),b[0]&256&&C(h,"isOpen",k[8]),b[0]&256&&C(L,"isHidden",k[8]),b[0]&2&&U!==(U="task "+k[1]+" svelte-y6jx1m")&&m(t,"class",U),b[0]&10&&C(t,"isDisabled",k[3]),b[0]&66&&C(t,"isInfoOpen",k[6]),b[0]&258&&C(t,"isEdit",k[8])},i:K,o:K,d(k){k&&v(t),l[23](null),l[27](null);for(let b=0;b<j.length;b+=1)j[b].d();X=!1,Ie(Y)}}}let Le=new Set;function ot(){Le.forEach(l=>{l.edit(!1)})}function it(l,t,e){let s,a;ue(l,R,d=>e(33,s=d)),ue(l,Ae,d=>e(13,a=d));let{class:r=""}=t,{text:o=""}=t,{color:n="#0029FF"}=t,{disabled:c=!1}=t,{id:f=null}=t,{date:_=""}=t,p=o,y=!1,I,g=!1,i=!1,u=!1,h=!1,j,P,S;const L=()=>{if(g===!1){let d=s.map(O=>(f===O.id&&(O.done=!O.done),O));R.set(d)}},H=()=>{let d=s.filter(O=>O.id!=f);R.set(d)};function U(d){e(8,g=d!=null?d:!g),g===!1&&V()}const X=d=>{let O=s.map(D=>(f===D.id&&(D.color=d),D));R.set(O)};function Y(d){e(6,y=d!=null?d:!y);let O=0;I.childNodes.forEach(D=>O+=D.clientHeight),I.style.setProperty("--taskInfoHeight",`${y?O:0}px`)}function V(){i&&le(o).then(()=>{e(9,i=!1),clearTimeout(P),e(10,u=!0),P=setTimeout(()=>{e(10,u=!1)},500)})}function le(d){if(typeof d=="string")return new Promise(O=>{Q(),R.set(s.map(D=>(D.id===f&&(D.text=d),D))),O()});throw new Error("The value is not equal to the string")}function k(d){let O=d.ctrlKey?!1:d.metaKey,D=d.keyCode;if(O&&D===83)return d.preventDefault(),V(),!1;clearTimeout(S),S=setTimeout(()=>V(),5e3)}function b(d=o){return e(9,i=d!==p)}function A(){e(12,j.rows=1,j);const d=parseFloat(_e(j,"padding-top"))+parseFloat(_e(j,"padding-bottom")),O=j.scrollHeight-d,D=parseFloat(_e(j,"line-height"));D==="normal"&&(D=parseFloat(_e(j,"font-size"))),e(12,j.rows=O/D,j),Q()}function Q(){e(5,p=o.split(`
`).join("<br/>"))}Je(()=>{A(),e(11,h=!0)}),Le.add({save(){V()},edit(d){U(d)}});function W(d){he[d?"unshift":"push"](()=>{j=d,e(12,j)})}function de(){o=this.value,e(0,o)}const se=()=>{b(),A()},ne=d=>{k(d),A()};function ae(d){he[d?"unshift":"push"](()=>{I=d,e(7,I)})}const Z=()=>{g===!1&&ot(),U()},oe=d=>d.color!=n,ie=()=>Y();return l.$$set=d=>{"class"in d&&e(1,r=d.class),"text"in d&&e(0,o=d.text),"color"in d&&e(2,n=d.color),"disabled"in d&&e(3,c=d.disabled),"id"in d&&e(22,f=d.id),"date"in d&&e(4,_=d.date)},[o,r,n,c,_,p,y,I,g,i,u,h,j,a,L,H,U,X,Y,k,b,A,f,W,de,se,ne,ae,Z,oe,ie]}class Ve extends G{constructor(t){super();J(this,t,it,at,Ze,{class:1,text:0,color:2,disabled:3,id:22,date:4},null,[-1,-1])}}function Pe(l,t,e){const s=l.slice();return s[4]=t[e],s}function Ue(l,t,e){const s=l.slice();return s[4]=t[e],s}function Be(l,t){let e,s,a,r,o,n=K,c;return s=new Ve({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=E("li"),$(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=w(e);x(s.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){q(f,e,_),ee(s,e,null),c=!0},p(f,_){t=f;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),s.$set(p)},r(){o=e.getBoundingClientRect()},f(){me(e),n(),ge(e,o)},a(){n(),n=ve(e,o,ye,{duration:300})},i(f){c||(B(s.$$.fragment,f),pe(()=>{r&&r.end(1),a=Fe(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){M(s.$$.fragment,f),a&&a.invalidate(),r=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&v(e),te(s),f&&r&&r.end()}}}function Me(l,t){let e,s,a,r,o,n=K,c;return s=new Ve({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=E("li"),$(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=w(e);x(s.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){q(f,e,_),ee(s,e,null),c=!0},p(f,_){t=f;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),s.$set(p)},r(){o=e.getBoundingClientRect()},f(){me(e),n(),ge(e,o)},a(){n(),n=ve(e,o,ye,{duration:300})},i(f){c||(B(s.$$.fragment,f),pe(()=>{r&&r.end(1),a=Fe(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){M(s.$$.fragment,f),a&&a.invalidate(),r=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&v(e),te(s),f&&r&&r.end()}}}function rt(l){let t,e,s,a=[],r=new Map,o,n=[],c=new Map,f,_,p=l[1].filter(Re);const y=i=>i[4].id;for(let i=0;i<p.length;i+=1){let u=Ue(l,p,i),h=y(u);r.set(h,a[i]=Be(h,u))}let I=l[1].filter(He);const g=i=>i[4].id;for(let i=0;i<I.length;i+=1){let u=Pe(l,I,i),h=g(u);c.set(h,n[i]=Me(h,u))}return{c(){t=E("section"),e=E("div"),s=E("ul");for(let i=0;i<a.length;i+=1)a[i].c();o=E("ul");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){t=T(i,"SECTION",{class:!0});var u=w(t);e=T(u,"DIV",{class:!0});var h=w(e);s=T(h,"UL",{class:!0});var j=w(s);for(let S=0;S<a.length;S+=1)a[S].l(j);j.forEach(v),o=T(h,"UL",{class:!0});var P=w(o);for(let S=0;S<n.length;S+=1)n[S].l(P);P.forEach(v),h.forEach(v),u.forEach(v),this.h()},h(){m(s,"class","task-section__col"),m(o,"class","task-section__col"),m(e,"class","container task-section__grid svelte-te6j4q"),m(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(i,u){q(i,t,u),F(t,e),F(e,s);for(let h=0;h<a.length;h+=1)a[h].m(s,null);F(e,o);for(let h=0;h<n.length;h+=1)n[h].m(o,null);_=!0},p(i,[u]){if(u&2){p=i[1].filter(Re),ke();for(let h=0;h<a.length;h+=1)a[h].r();a=ce(a,u,y,1,i,p,r,s,Ee,Be,null,Ue);for(let h=0;h<a.length;h+=1)a[h].a();be()}if(u&2){I=i[1].filter(He),ke();for(let h=0;h<n.length;h+=1)n[h].r();n=ce(n,u,g,1,i,I,c,o,Ee,Me,null,Pe);for(let h=0;h<n.length;h+=1)n[h].a();be()}(!_||u&1&&f!==(f="task-section "+i[0]+" svelte-te6j4q"))&&m(t,"class",f)},i(i){if(!_){for(let u=0;u<p.length;u+=1)B(a[u]);for(let u=0;u<I.length;u+=1)B(n[u]);_=!0}},o(i){for(let u=0;u<a.length;u+=1)M(a[u]);for(let u=0;u<n.length;u+=1)M(n[u]);_=!1},d(i){i&&v(t);for(let u=0;u<a.length;u+=1)a[u].d();for(let u=0;u<n.length;u+=1)n[u].d()}}}const Re=l=>!l.done,He=l=>l.done;function ct(l,t,e){let s;ue(l,R,n=>e(1,s=n));let{class:a=""}=t;const[r,o]=$e({duration:n=>Math.sqrt(n*200),fallback(n,c){const f=getComputedStyle(n),_=f.transform==="none"?"":f.transform;return{duration:600,easing:xe,css:p=>`
					transform: ${_} scale(${p});
					opacity: ${p}
				`}}});return l.$$set=n=>{"class"in n&&e(0,a=n.class)},[a,s,r,o]}class ut extends G{constructor(t){super();J(this,t,ct,rt,fe,{class:0})}}function ze(l){let t,e,s,a=l[2].text&&Ke(l);return{c(){t=E("button"),a&&a.c(),this.h()},l(r){t=T(r,"BUTTON",{class:!0});var o=w(t);a&&a.l(o),o.forEach(v),this.h()},h(){m(t,"class","btn svelte-1yy2xse")},m(r,o){q(r,t,o),a&&a.m(t,null),e||(s=N(t,"click",z(l[6])),e=!0)},p(r,o){r[2].text?a?a.p(r,o):(a=Ke(r),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(r){r&&v(t),a&&a.d(),e=!1,s()}}}function Ke(l){let t=l[2].text+"",e;return{c(){e=we(t)},l(s){e=je(s,t)},m(s,a){q(s,e,a)},p(s,a){a&4&&t!==(t=s[2].text+"")&&Ce(e,t)},d(s){s&&v(e)}}}function ft(l){let t,e,s,a,r,o=l[2]&&ze(l);return{c(){t=E("div"),e=E("input"),o&&o.c(),this.h()},l(n){t=T(n,"DIV",{class:!0});var c=w(t);e=T(c,"INPUT",{placeholder:!0,class:!0}),o&&o.l(c),c.forEach(v),this.h()},h(){m(e,"placeholder",l[1]),m(e,"class","svelte-1yy2xse"),m(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),C(t,"isError",l[5])},m(n,c){q(n,t,c),F(t,e),re(e,l[4]),o&&o.m(t,null),l[10](t),a||(r=[N(e,"input",l[9]),N(e,"input",l[7]),N(e,"keydown",l[8])],a=!0)},p(n,[c]){c&2&&m(e,"placeholder",n[1]),c&16&&e.value!==n[4]&&re(e,n[4]),n[2]?o?o.p(n,c):(o=ze(n),o.c(),o.m(t,null)):o&&(o.d(1),o=null),c&5&&s!==(s="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse")&&m(t,"class",s),c&37&&C(t,"isError",n[5])},i:K,o:K,d(n){n&&v(t),o&&o.d(),l[10](null),a=!1,Ie(r)}}}function _t(l,t,e){let{class:s=""}=t,{placeholder:a="Placeholer"}=t,{btn:r=null}=t,o,n,c=!1;const f=et(),_=()=>{n?(f("submit",{value:n}),e(4,n="")):e(5,c=!0)},p=()=>{e(5,c=!1)},y=i=>{let u=i.key,h=i.ctrlKey,j=i.shiftKey;i.keyCode,h&&j&&f("color"),u==="Enter"&&_()};function I(){n=this.value,e(4,n)}function g(i){he[i?"unshift":"push"](()=>{o=i,e(3,o)})}return l.$$set=i=>{"class"in i&&e(0,s=i.class),"placeholder"in i&&e(1,a=i.placeholder),"btn"in i&&e(2,r=i.btn)},[s,a,r,o,n,c,_,p,y,I,g]}class dt extends G{constructor(t){super();J(this,t,_t,ft,fe,{class:0,placeholder:1,btn:2})}}function Xe(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Ye(l,t){let e,s,a,r,o=K,n,c,f;return{key:l,first:null,c(){e=E("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(v),this.h()},h(){m(e,"class","add-todo__color svelte-1hafqlz"),m(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,p){q(_,e,p),n=!0,c||(f=N(e,"click",z(function(){Te(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(_,p){t=_,(!n||p&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",s)},r(){r=e.getBoundingClientRect()},f(){me(e),o(),ge(e,r)},a(){o(),o=ve(e,r,ye,{})},i(_){n||(pe(()=>{a||(a=De(e,Se,{},!0)),a.run(1)}),n=!0)},o(_){a||(a=De(e,Se,{},!1)),a.run(0),n=!1},d(_){_&&v(e),_&&a&&a.end(),c=!1,f()}}}function ht(l){let t,e,s,a,r=[],o=new Map,n,c,f,_,p,y=l[3].filter(l[7]);const I=g=>g[9].id;for(let g=0;g<y.length;g+=1){let i=Xe(l,y,g),u=I(i);o.set(u,r[g]=Ye(u,i))}return n=new dt({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("color",l[8]),n.$on("submit",l[4]),{c(){t=E("div"),e=E("div"),s=E("span");for(let g=0;g<r.length;g+=1)r[g].c();$(n.$$.fragment),this.h()},l(g){t=T(g,"DIV",{class:!0});var i=w(t);e=T(i,"DIV",{class:!0});var u=w(e);s=T(u,"SPAN",{class:!0,style:!0}),w(s).forEach(v);for(let h=0;h<r.length;h+=1)r[h].l(u);u.forEach(v),x(n.$$.fragment,i),i.forEach(v),this.h()},h(){m(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),m(s,"style",a=`color: ${l[1]}`),m(e,"class","add-todo__color-list svelte-1hafqlz"),C(e,"isOpen",l[2]),m(t,"class",c="add-todo "+l[0]+" svelte-1hafqlz")},m(g,i){q(g,t,i),F(t,e),F(e,s);for(let u=0;u<r.length;u+=1)r[u].m(e,null);ee(n,t,null),f=!0,_||(p=N(s,"click",z(l[6])),_=!0)},p(g,[i]){if((!f||i&2&&a!==(a=`color: ${g[1]}`))&&m(s,"style",a),i&42){y=g[3].filter(g[7]),ke();for(let u=0;u<r.length;u+=1)r[u].r();r=ce(r,i,I,1,g,y,o,e,Ee,Ye,null,Xe);for(let u=0;u<r.length;u+=1)r[u].a();be()}i&4&&C(e,"isOpen",g[2]),(!f||i&1&&c!==(c="add-todo "+g[0]+" svelte-1hafqlz"))&&m(t,"class",c)},i(g){if(!f){for(let i=0;i<y.length;i+=1)B(r[i]);B(n.$$.fragment,g),f=!0}},o(g){for(let i=0;i<r.length;i+=1)M(r[i]);M(n.$$.fragment,g),f=!1},d(g){g&&v(t);for(let i=0;i<r.length;i+=1)r[i].d();te(n),_=!1,p()}}}function mt(l,t,e){let s;ue(l,Ae,y=>e(3,s=y));let{class:a=""}=t,r="#0029FF",o=!1;const n=y=>{let I={id:Date.now(),text:y.detail.value,color:r,done:!1,date:nt(new Date,"dot")};R.update(g=>g=[I,...g])},c=y=>y&&e(1,r=y),f=()=>e(2,o=!o),_=y=>y.color!=r,p=()=>e(2,o=!o);return l.$$set=y=>{"class"in y&&e(0,a=y.class)},[a,r,o,s,n,c,f,_,p]}class gt extends G{constructor(t){super();J(this,t,mt,ht,fe,{class:0})}}function vt(l){let t,e,s,a,r,o,n;return a=new gt({}),o=new ut({props:{class:"mt-50"}}),{c(){t=tt(),e=E("section"),s=E("div"),$(a.$$.fragment),$(o.$$.fragment),this.h()},l(c){lt('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=st(c),e=T(c,"SECTION",{class:!0});var _=w(e);s=T(_,"DIV",{class:!0});var p=w(s);x(a.$$.fragment,p),p.forEach(v),_.forEach(v),x(o.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(s,"class","container"),m(e,"class",r=""+(l[0]+" mt-50 svelte-110abfo"))},m(c,f){q(c,t,f),q(c,e,f),F(e,s),ee(a,s,null),ee(o,c,f),n=!0},p(c,[f]){(!n||f&1&&r!==(r=""+(c[0]+" mt-50 svelte-110abfo")))&&m(e,"class",r)},i(c){n||(B(a.$$.fragment,c),B(o.$$.fragment,c),n=!0)},o(c){M(a.$$.fragment,c),M(o.$$.fragment,c),n=!1},d(c){c&&v(t),c&&v(e),te(a),te(o,c)}}}function pt(l,t,e){let{class:s=""}=t;return l.$$set=a=>{"class"in a&&e(0,s=a.class)},[s]}class bt extends G{constructor(t){super();J(this,t,pt,vt,fe,{class:0})}}export{bt as default};
