import{K as Xe,C as Ye,S as Z,i as G,L as Qe,e as T,c as q,a as w,d as v,b as h,f as V,D as F,M as A,N as R,O as ye,t as Ee,g as Te,P as C,Q as re,h as qe,R as ie,T as We,E as M,U as we,V as ce,u as Ze,W as _e,s as ue,v as J,w as $,x,X as de,Y as he,Z as me,p as B,_ as ge,$ as Ce,n as L,a0 as Fe,A as ee,m as ve,o as pe,a1 as Ge,a2 as ke,a3 as be,a4 as Je,a5 as $e,a6 as Ie,a7 as Oe,j as xe,a8 as et,l as tt}from"../chunks/vendor-6ec25659.js";const P=Ye([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Se=Xe(P,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let s=l.filter(n=>n.color).map(n=>n.color).concat(e),r=s.filter((n,i)=>s.indexOf(n)===i).map((n,i)=>({id:i,color:n}));t(r)}),lt=(l,t)=>{if(t==="dot"){let e=l.getDate(),a=l.getMonth();return`${e<10?0:""}${e+1}.${a<10?0:""}${a+1}.${l.getFullYear()}`}},fe=(l,t)=>getComputedStyle(l)[t];function De(l,t,e){const a=l.slice();return a[36]=t[e],a}function Ae(l,t){let e,a,s,c,r;return{key:l,first:null,c(){e=T("li"),a=T("button"),this.h()},l(n){e=q(n,"LI",{class:!0});var i=w(e);a=q(i,"BUTTON",{class:!0,style:!0}),w(a).forEach(v),i.forEach(v),this.h()},h(){h(a,"class","task__color-btn svelte-1ygaqrm"),h(a,"style",s=`background-color: ${t[36].color}`),h(e,"class","task__color-item svelte-1ygaqrm"),this.first=e},m(n,i){V(n,e,i),F(e,a),c||(r=A(a,"click",R(function(){ye(t[17](t[36].color))&&t[17](t[36].color).apply(this,arguments)})),c=!0)},p(n,i){t=n,i[0]&8196&&s!==(s=`background-color: ${t[36].color}`)&&h(a,"style",s)},d(n){n&&v(e),c=!1,r()}}}function st(l){let t,e,a,s,c,r,n,i,f,_,p,b,E,m,o,u=[],g=new Map,N,I,S,j,X,z,K=l[13].filter(l[28]);const Y=k=>k[36].id;for(let k=0;k<K.length;k+=1){let y=De(l,K,k),U=Y(y);g.set(U,u[k]=Ae(U,y))}return{c(){t=T("article"),e=T("div"),a=T("div"),s=T("textarea"),r=T("div"),n=T("div"),i=T("span"),f=Ee(l[4]),_=T("div"),p=T("button"),b=T("span"),E=T("button"),m=T("span"),o=T("ul");for(let k=0;k<u.length;k+=1)u[k].c();I=T("button"),S=T("span"),this.h()},l(k){t=q(k,"ARTICLE",{class:!0});var y=w(t);e=q(y,"DIV",{class:!0});var U=w(e);a=q(U,"DIV",{class:!0});var Q=w(a);s=q(Q,"TEXTAREA",{class:!0,rows:!0}),w(s).forEach(v),Q.forEach(v),r=q(U,"DIV",{class:!0});var H=w(r);n=q(H,"DIV",{class:!0});var te=w(n);i=q(te,"SPAN",{class:!0});var le=w(i);f=Te(le,l[4]),le.forEach(v),te.forEach(v),H.forEach(v),U.forEach(v),_=q(y,"DIV",{class:!0});var W=w(_);p=q(W,"BUTTON",{class:!0});var se=w(p);b=q(se,"SPAN",{class:!0}),w(b).forEach(v),se.forEach(v),E=q(W,"BUTTON",{class:!0});var ae=w(E);m=q(ae,"SPAN",{class:!0}),w(m).forEach(v),ae.forEach(v),W.forEach(v),o=q(y,"UL",{class:!0,style:!0});var ne=w(o);for(let d=0;d<u.length;d+=1)u[d].l(ne);ne.forEach(v),I=q(y,"BUTTON",{class:!0});var oe=w(I);S=q(oe,"SPAN",{class:!0}),w(S).forEach(v),oe.forEach(v),y.forEach(v),this.h()},h(){h(s,"class","task__main-content svelte-1ygaqrm"),s.disabled=c=!l[7],h(s,"rows",l[11]),C(s,"addTransition",l[10]),h(a,"class","task__main-container svelte-1ygaqrm"),h(i,"class","svelte-1ygaqrm"),h(n,"class","task__info-content svelte-1ygaqrm"),h(r,"class","task__info svelte-1ygaqrm"),h(e,"class","task__main svelte-1ygaqrm"),C(e,"isEdit",l[7]),h(b,"class","svg-image-del svelte-1ygaqrm"),h(p,"class","task__menu-btn task__menu-btn_del svelte-1ygaqrm"),h(m,"class","svg-image-pen svelte-1ygaqrm"),h(E,"class","task__menu-btn task__menu-btn_edit svelte-1ygaqrm"),C(E,"isSelect",l[7]),C(E,"isChanged",l[8]),C(E,"isSave",l[9]),h(_,"class","task__circle task__menu svelte-1ygaqrm"),C(_,"isOpen",l[7]),h(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1ygaqrm"),h(o,"style",N=`background-color: ${l[2]}`),C(o,"isOpen",l[7]),h(S,"class","svelte-1ygaqrm"),h(I,"class","task__info-open svelte-1ygaqrm"),C(I,"isHidden",l[7]),h(t,"class",j="task "+l[1]+" svelte-1ygaqrm"),C(t,"isDisabled",l[3]),C(t,"isInfoOpen",l[5]),C(t,"isEdit",l[7])},m(k,y){V(k,t,y),F(t,e),F(e,a),F(a,s),l[23](s),re(s,l[0]),F(e,r),F(r,n),F(n,i),F(i,f),l[26](r),F(t,_),F(_,p),F(p,b),F(_,E),F(E,m),F(t,o);for(let U=0;U<u.length;U+=1)u[U].m(o,null);F(t,I),F(I,S),X||(z=[A(s,"input",l[24]),A(s,"input",l[25]),A(s,"keydown",l[19]),A(e,"click",l[14]),A(p,"click",R(l[15])),A(E,"click",R(l[27])),A(I,"click",R(l[29]))],X=!0)},p(k,y){y[0]&128&&c!==(c=!k[7])&&(s.disabled=c),y[0]&2048&&h(s,"rows",k[11]),y[0]&1&&re(s,k[0]),y[0]&1024&&C(s,"addTransition",k[10]),y[0]&16&&qe(f,k[4]),y[0]&128&&C(e,"isEdit",k[7]),y[0]&128&&C(E,"isSelect",k[7]),y[0]&256&&C(E,"isChanged",k[8]),y[0]&512&&C(E,"isSave",k[9]),y[0]&128&&C(_,"isOpen",k[7]),y[0]&139268&&(K=k[13].filter(k[28]),u=ie(u,y,Y,1,k,K,g,o,We,Ae,null,De)),y[0]&4&&N!==(N=`background-color: ${k[2]}`)&&h(o,"style",N),y[0]&128&&C(o,"isOpen",k[7]),y[0]&128&&C(I,"isHidden",k[7]),y[0]&2&&j!==(j="task "+k[1]+" svelte-1ygaqrm")&&h(t,"class",j),y[0]&10&&C(t,"isDisabled",k[3]),y[0]&34&&C(t,"isInfoOpen",k[5]),y[0]&130&&C(t,"isEdit",k[7])},i:M,o:M,d(k){k&&v(t),l[23](null),l[26](null);for(let y=0;y<u.length;y+=1)u[y].d();X=!1,we(z)}}}let Ne=new Set;function at(){Ne.forEach(l=>{l.edit(!1)})}function nt(l,t,e){let a,s;ce(l,P,d=>e(31,a=d)),ce(l,Se,d=>e(13,s=d));let{class:c=""}=t,{text:r=""}=t,{color:n="#0029FF"}=t,{disabled:i=!1}=t,{id:f=null}=t,{date:_=""}=t,p=r,b=!1,E,m=!1,o=!1,u=!1,g=!1,N=1,I,S;const j=()=>{if(m===!1){let d=a.map(O=>(f===O.id&&(O.done=!O.done),O));P.set(d)}},X=()=>{let d=a.filter(O=>O.id!=f);P.set(d)};function z(d){e(7,m=d!=null?d:!m),m===!1&&k()}const K=d=>{let O=a.map(D=>(f===D.id&&(D.color=d),D));P.set(O)};function Y(d){e(5,b=d!=null?d:!b);let O=0;E.childNodes.forEach(D=>O+=D.clientHeight),E.style.setProperty("--taskInfoHeight",`${b?O:0}px`)}function k(){o&&y(r).then(()=>{e(8,o=!1),clearTimeout(S),e(9,u=!0),S=setTimeout(()=>{e(9,u=!1)},500)})}function y(d){if(typeof d=="string")return new Promise(O=>{P.set(a.map(D=>(D.id===f&&(D.text=d),D))),O()});throw new Error("The value is not equal to the string")}function U(d){let O=d.ctrlKey?!1:d.metaKey,D=d.keyCode;if(O&&D===83)return d.preventDefault(),k(),!1}function Q(d=r){return e(8,o=d!==p)}function H(){e(11,N=1);const d=parseFloat(fe(I,"padding-top"))+parseFloat(fe(I,"padding-bottom")),O=I.scrollHeight-d,D=parseFloat(fe(I,"line-height"));D==="normal"&&(D=parseFloat(fe(I,"font-size"))),console.log(O),e(11,N=O/D)}Ze(()=>{H(),e(10,g=!0)}),Ne.add({save(){k()},edit(d){z(d)}});function te(d){_e[d?"unshift":"push"](()=>{I=d,e(12,I)})}function le(){r=this.value,e(0,r)}const W=()=>{Q(),H()};function se(d){_e[d?"unshift":"push"](()=>{E=d,e(6,E)})}const ae=()=>{m===!1&&at(),z()},ne=d=>d.color!=n,oe=()=>Y();return l.$$set=d=>{"class"in d&&e(1,c=d.class),"text"in d&&e(0,r=d.text),"color"in d&&e(2,n=d.color),"disabled"in d&&e(3,i=d.disabled),"id"in d&&e(22,f=d.id),"date"in d&&e(4,_=d.date)},[r,c,n,i,_,b,E,m,o,u,g,N,I,s,j,X,z,K,Y,U,Q,H,f,te,le,W,se,ae,ne,oe]}class Ue extends Z{constructor(t){super();G(this,t,nt,st,Qe,{class:1,text:0,color:2,disabled:3,id:22,date:4},null,[-1,-1])}}function Ve(l,t,e){const a=l.slice();return a[4]=t[e],a}function Be(l,t,e){const a=l.slice();return a[4]=t[e],a}function Le(l,t){let e,a,s,c,r,n=M,i;return a=new Ue({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),J(a.$$.fragment),this.h()},l(f){e=q(f,"LI",{class:!0});var _=w(e);$(a.$$.fragment,_),_.forEach(v),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){V(f,e,_),x(a,e,null),i=!0},p(f,_){t=f;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),a.$set(p)},r(){r=e.getBoundingClientRect()},f(){de(e),n(),he(e,r)},a(){n(),n=me(e,r,ke,{duration:300})},i(f){i||(B(a.$$.fragment,f),ge(()=>{c&&c.end(1),s=Ce(e,t[3],{key:t[4].id}),s.start()}),i=!0)},o(f){L(a.$$.fragment,f),s&&s.invalidate(),c=Fe(e,t[2],{key:t[4].id}),i=!1},d(f){f&&v(e),ee(a),f&&c&&c.end()}}}function Pe(l,t){let e,a,s,c,r,n=M,i;return a=new Ue({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),J(a.$$.fragment),this.h()},l(f){e=q(f,"LI",{class:!0});var _=w(e);$(a.$$.fragment,_),_.forEach(v),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){V(f,e,_),x(a,e,null),i=!0},p(f,_){t=f;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),a.$set(p)},r(){r=e.getBoundingClientRect()},f(){de(e),n(),he(e,r)},a(){n(),n=me(e,r,ke,{duration:300})},i(f){i||(B(a.$$.fragment,f),ge(()=>{c&&c.end(1),s=Ce(e,t[3],{key:t[4].id}),s.start()}),i=!0)},o(f){L(a.$$.fragment,f),s&&s.invalidate(),c=Fe(e,t[2],{key:t[4].id}),i=!1},d(f){f&&v(e),ee(a),f&&c&&c.end()}}}function ot(l){let t,e,a,s=[],c=new Map,r,n=[],i=new Map,f,_,p=l[1].filter(Re);const b=o=>o[4].id;for(let o=0;o<p.length;o+=1){let u=Be(l,p,o),g=b(u);c.set(g,s[o]=Le(g,u))}let E=l[1].filter(Me);const m=o=>o[4].id;for(let o=0;o<E.length;o+=1){let u=Ve(l,E,o),g=m(u);i.set(g,n[o]=Pe(g,u))}return{c(){t=T("section"),e=T("div"),a=T("ul");for(let o=0;o<s.length;o+=1)s[o].c();r=T("ul");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=q(o,"SECTION",{class:!0});var u=w(t);e=q(u,"DIV",{class:!0});var g=w(e);a=q(g,"UL",{class:!0});var N=w(a);for(let S=0;S<s.length;S+=1)s[S].l(N);N.forEach(v),r=q(g,"UL",{class:!0});var I=w(r);for(let S=0;S<n.length;S+=1)n[S].l(I);I.forEach(v),g.forEach(v),u.forEach(v),this.h()},h(){h(a,"class","task-section__col"),h(r,"class","task-section__col"),h(e,"class","container task-section__grid svelte-te6j4q"),h(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(o,u){V(o,t,u),F(t,e),F(e,a);for(let g=0;g<s.length;g+=1)s[g].m(a,null);F(e,r);for(let g=0;g<n.length;g+=1)n[g].m(r,null);_=!0},p(o,[u]){if(u&2){p=o[1].filter(Re),ve();for(let g=0;g<s.length;g+=1)s[g].r();s=ie(s,u,b,1,o,p,c,a,be,Le,null,Be);for(let g=0;g<s.length;g+=1)s[g].a();pe()}if(u&2){E=o[1].filter(Me),ve();for(let g=0;g<n.length;g+=1)n[g].r();n=ie(n,u,m,1,o,E,i,r,be,Pe,null,Ve);for(let g=0;g<n.length;g+=1)n[g].a();pe()}(!_||u&1&&f!==(f="task-section "+o[0]+" svelte-te6j4q"))&&h(t,"class",f)},i(o){if(!_){for(let u=0;u<p.length;u+=1)B(s[u]);for(let u=0;u<E.length;u+=1)B(n[u]);_=!0}},o(o){for(let u=0;u<s.length;u+=1)L(s[u]);for(let u=0;u<n.length;u+=1)L(n[u]);_=!1},d(o){o&&v(t);for(let u=0;u<s.length;u+=1)s[u].d();for(let u=0;u<n.length;u+=1)n[u].d()}}}const Re=l=>!l.done,Me=l=>l.done;function rt(l,t,e){let a;ce(l,P,n=>e(1,a=n));let{class:s=""}=t;const[c,r]=Ge({duration:n=>Math.sqrt(n*200),fallback(n,i){const f=getComputedStyle(n),_=f.transform==="none"?"":f.transform,p=f.height;return{duration:600,easing:Je,css:b=>`
					// transform: ${_} scale(${b});
					// opacity: ${b}
					// max-height: ${p}
				`}}});return l.$$set=n=>{"class"in n&&e(0,s=n.class)},[s,a,c,r]}class it extends Z{constructor(t){super();G(this,t,rt,ot,ue,{class:0})}}function je(l){let t,e,a,s=l[2].text&&ze(l);return{c(){t=T("button"),s&&s.c(),this.h()},l(c){t=q(c,"BUTTON",{class:!0});var r=w(t);s&&s.l(r),r.forEach(v),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(c,r){V(c,t,r),s&&s.m(t,null),e||(a=A(t,"click",R(l[6])),e=!0)},p(c,r){c[2].text?s?s.p(c,r):(s=ze(c),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(c){c&&v(t),s&&s.d(),e=!1,a()}}}function ze(l){let t=l[2].text+"",e;return{c(){e=Ee(t)},l(a){e=Te(a,t)},m(a,s){V(a,e,s)},p(a,s){s&4&&t!==(t=a[2].text+"")&&qe(e,t)},d(a){a&&v(e)}}}function ct(l){let t,e,a,s,c,r=l[2]&&je(l);return{c(){t=T("div"),e=T("input"),r&&r.c(),this.h()},l(n){t=q(n,"DIV",{class:!0});var i=w(t);e=q(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(v),this.h()},h(){h(e,"placeholder",l[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",a="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),C(t,"isError",l[5])},m(n,i){V(n,t,i),F(t,e),re(e,l[4]),r&&r.m(t,null),l[10](t),s||(c=[A(e,"input",l[9]),A(e,"input",l[7]),A(e,"keydown",l[8])],s=!0)},p(n,[i]){i&2&&h(e,"placeholder",n[1]),i&16&&e.value!==n[4]&&re(e,n[4]),n[2]?r?r.p(n,i):(r=je(n),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&a!==(a="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",a),i&37&&C(t,"isError",n[5])},i:M,o:M,d(n){n&&v(t),r&&r.d(),l[10](null),s=!1,we(c)}}}function ut(l,t,e){let{class:a=""}=t,{placeholder:s="Placeholer"}=t,{btn:c=null}=t,r,n,i=!1;const f=$e(),_=()=>{n?(f("submit",{value:n}),e(4,n="")):e(5,i=!0)},p=()=>{e(5,i=!1)},b=o=>{let u=o.key,g=o.ctrlKey,N=o.shiftKey;o.keyCode,g&&N&&f("color"),u==="Enter"&&_()};function E(){n=this.value,e(4,n)}function m(o){_e[o?"unshift":"push"](()=>{r=o,e(3,r)})}return l.$$set=o=>{"class"in o&&e(0,a=o.class),"placeholder"in o&&e(1,s=o.placeholder),"btn"in o&&e(2,c=o.btn)},[a,s,c,r,n,i,_,p,b,E,m]}class ft extends Z{constructor(t){super();G(this,t,ut,ct,ue,{class:0,placeholder:1,btn:2})}}function Ke(l,t,e){const a=l.slice();return a[9]=t[e],a[11]=e,a}function He(l,t){let e,a,s,c,r=M,n,i,f;return{key:l,first:null,c(){e=T("button"),this.h()},l(_){e=q(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(v),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",a=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,p){V(_,e,p),n=!0,i||(f=A(e,"click",R(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),i=!0)},p(_,p){t=_,(!n||p&10&&a!==(a=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",a)},r(){c=e.getBoundingClientRect()},f(){de(e),r(),he(e,c)},a(){r(),r=me(e,c,ke,{})},i(_){n||(ge(()=>{s||(s=Ie(e,Oe,{},!0)),s.run(1)}),n=!0)},o(_){s||(s=Ie(e,Oe,{},!1)),s.run(0),n=!1},d(_){_&&v(e),_&&s&&s.end(),i=!1,f()}}}function _t(l){let t,e,a,s,c=[],r=new Map,n,i,f,_,p,b=l[3].filter(l[7]);const E=m=>m[9].id;for(let m=0;m<b.length;m+=1){let o=Ke(l,b,m),u=E(o);r.set(u,c[m]=He(u,o))}return n=new ft({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("color",l[8]),n.$on("submit",l[4]),{c(){t=T("div"),e=T("div"),a=T("span");for(let m=0;m<c.length;m+=1)c[m].c();J(n.$$.fragment),this.h()},l(m){t=q(m,"DIV",{class:!0});var o=w(t);e=q(o,"DIV",{class:!0});var u=w(e);a=q(u,"SPAN",{class:!0,style:!0}),w(a).forEach(v);for(let g=0;g<c.length;g+=1)c[g].l(u);u.forEach(v),$(n.$$.fragment,o),o.forEach(v),this.h()},h(){h(a,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(a,"style",s=`color: ${l[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),C(e,"isOpen",l[2]),h(t,"class",i="add-todo "+l[0]+" svelte-1hafqlz")},m(m,o){V(m,t,o),F(t,e),F(e,a);for(let u=0;u<c.length;u+=1)c[u].m(e,null);x(n,t,null),f=!0,_||(p=A(a,"click",R(l[6])),_=!0)},p(m,[o]){if((!f||o&2&&s!==(s=`color: ${m[1]}`))&&h(a,"style",s),o&42){b=m[3].filter(m[7]),ve();for(let u=0;u<c.length;u+=1)c[u].r();c=ie(c,o,E,1,m,b,r,e,be,He,null,Ke);for(let u=0;u<c.length;u+=1)c[u].a();pe()}o&4&&C(e,"isOpen",m[2]),(!f||o&1&&i!==(i="add-todo "+m[0]+" svelte-1hafqlz"))&&h(t,"class",i)},i(m){if(!f){for(let o=0;o<b.length;o+=1)B(c[o]);B(n.$$.fragment,m),f=!0}},o(m){for(let o=0;o<c.length;o+=1)L(c[o]);L(n.$$.fragment,m),f=!1},d(m){m&&v(t);for(let o=0;o<c.length;o+=1)c[o].d();ee(n),_=!1,p()}}}function dt(l,t,e){let a;ce(l,Se,b=>e(3,a=b));let{class:s=""}=t,c="#0029FF",r=!1;const n=b=>{let E={id:Date.now(),text:b.detail.value,color:c,done:!1,date:lt(new Date,"dot")};P.update(m=>m=[E,...m])},i=b=>b&&e(1,c=b),f=()=>e(2,r=!r),_=b=>b.color!=c,p=()=>e(2,r=!r);return l.$$set=b=>{"class"in b&&e(0,s=b.class)},[s,c,r,a,n,i,f,_,p]}class ht extends Z{constructor(t){super();G(this,t,dt,_t,ue,{class:0})}}function mt(l){let t,e,a,s,c,r,n;return s=new ht({}),r=new it({props:{class:"mt-50"}}),{c(){t=xe(),e=T("section"),a=T("div"),J(s.$$.fragment),J(r.$$.fragment),this.h()},l(i){et('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=tt(i),e=q(i,"SECTION",{class:!0});var _=w(e);a=q(_,"DIV",{class:!0});var p=w(a);$(s.$$.fragment,p),p.forEach(v),_.forEach(v),$(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(a,"class","container"),h(e,"class",c=""+(l[0]+" mt-50 svelte-110abfo"))},m(i,f){V(i,t,f),V(i,e,f),F(e,a),x(s,a,null),x(r,i,f),n=!0},p(i,[f]){(!n||f&1&&c!==(c=""+(i[0]+" mt-50 svelte-110abfo")))&&h(e,"class",c)},i(i){n||(B(s.$$.fragment,i),B(r.$$.fragment,i),n=!0)},o(i){L(s.$$.fragment,i),L(r.$$.fragment,i),n=!1},d(i){i&&v(t),i&&v(e),ee(s),ee(r,i)}}}function gt(l,t,e){let{class:a=""}=t;return l.$$set=s=>{"class"in s&&e(0,a=s.class)},[a]}class pt extends Z{constructor(t){super();G(this,t,gt,mt,ue,{class:0})}}export{pt as default};
