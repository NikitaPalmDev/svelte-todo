import{K as Qe,C as We,S as W,i as Z,L as Ze,e as w,c as y,a as T,d as v,b as m,f as L,D,M as N,N as H,O as ye,t as Te,g as Ce,P as I,Q as ae,h as Ie,R as oe,T as Ge,E as j,U as Fe,V as ie,u as Je,W as de,s as re,v as G,w as J,x as $,X as _e,Y as he,Z as me,p as B,_ as ge,$ as De,n as M,a0 as Oe,A as x,m as ve,o as pe,a1 as $e,a2 as ke,a3 as be,a4 as xe,a5 as et,a6 as Se,a7 as Ae,j as tt,a8 as lt,l as st}from"../chunks/vendor-6ec25659.js";const R=We([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ne=Qe(R,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=l.filter(n=>n.color).map(n=>n.color).concat(e),i=a.filter((n,c)=>a.indexOf(n)===c).map((n,c)=>({id:c,color:n}));t(i)}),nt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},ce=(l,t)=>getComputedStyle(l)[t];function qe(l,t,e){const s=l.slice();return s[35]=t[e],s}function Le(l,t){let e,s,a,r,i;return{key:l,first:null,c(){e=w("li"),s=w("button"),this.h()},l(n){e=y(n,"LI",{class:!0});var c=T(e);s=y(c,"BUTTON",{class:!0,style:!0}),T(s).forEach(v),c.forEach(v),this.h()},h(){m(s,"class","task__color-btn svelte-1wde35"),m(s,"style",a=`background-color: ${t[35].color}`),m(e,"class","task__color-item svelte-1wde35"),this.first=e},m(n,c){L(n,e,c),D(e,s),r||(i=N(s,"click",H(function(){ye(t[16](t[35].color))&&t[16](t[35].color).apply(this,arguments)})),r=!0)},p(n,c){t=n,c[0]&4100&&a!==(a=`background-color: ${t[35].color}`)&&m(s,"style",a)},d(n){n&&v(e),r=!1,i()}}}function at(l){let t,e,s,a,r,i,n,c,f,d,p,E,F,g,o,u,h,C=[],U=new Map,A,V,P,z,K,X,Y=l[12].filter(l[27]);const ee=k=>k[35].id;for(let k=0;k<Y.length;k+=1){let b=qe(l,Y,k),q=ee(b);U.set(q,C[k]=Le(q,b))}return{c(){t=w("article"),e=w("div"),s=w("div"),a=w("div"),r=w("p"),i=w("textarea"),c=w("div"),f=w("div"),d=w("span"),p=Te(l[4]),E=w("div"),F=w("button"),g=w("span"),o=w("button"),u=w("span"),h=w("ul");for(let k=0;k<C.length;k+=1)C[k].c();V=w("button"),P=w("span"),this.h()},l(k){t=y(k,"ARTICLE",{class:!0});var b=T(t);e=y(b,"DIV",{class:!0});var q=T(e);s=y(q,"DIV",{class:!0});var te=T(s);a=y(te,"DIV",{class:!0});var Q=T(a);r=y(Q,"P",{class:!0});var ue=T(r);ue.forEach(v),i=y(Q,"TEXTAREA",{class:!0}),T(i).forEach(v),Q.forEach(v),te.forEach(v),c=y(q,"DIV",{class:!0});var le=T(c);f=y(le,"DIV",{class:!0});var se=T(f);d=y(se,"SPAN",{class:!0});var ne=T(d);p=Ce(ne,l[4]),ne.forEach(v),se.forEach(v),le.forEach(v),q.forEach(v),E=y(b,"DIV",{class:!0});var _=T(E);F=y(_,"BUTTON",{class:!0});var O=T(F);g=y(O,"SPAN",{class:!0}),T(g).forEach(v),O.forEach(v),o=y(_,"BUTTON",{class:!0});var S=T(o);u=y(S,"SPAN",{class:!0}),T(u).forEach(v),S.forEach(v),_.forEach(v),h=y(b,"UL",{class:!0,style:!0});var Ee=T(h);for(let fe=0;fe<C.length;fe+=1)C[fe].l(Ee);Ee.forEach(v),V=y(b,"BUTTON",{class:!0});var we=T(V);P=y(we,"SPAN",{class:!0}),T(P).forEach(v),we.forEach(v),b.forEach(v),this.h()},h(){m(r,"class","task__main-content svelte-1wde35"),I(r,"isEdit",l[7]),m(i,"class","task__main-content svelte-1wde35"),i.disabled=n=!l[7],I(i,"addTransition",l[10]),m(a,"class","task__main-content-wrapper svelte-1wde35"),m(s,"class","task__main-container svelte-1wde35"),m(d,"class","svelte-1wde35"),m(f,"class","task__info-content svelte-1wde35"),m(c,"class","task__info svelte-1wde35"),m(e,"class","task__main svelte-1wde35"),I(e,"isEdit",l[7]),m(g,"class","svg-image-del svelte-1wde35"),m(F,"class","task__menu-btn task__menu-btn_del svelte-1wde35"),m(u,"class","svg-image-pen svelte-1wde35"),m(o,"class","task__menu-btn task__menu-btn_edit svelte-1wde35"),I(o,"isSelect",l[7]),I(o,"isChanged",l[8]),I(o,"isSave",l[9]),m(E,"class","task__circle task__menu svelte-1wde35"),I(E,"isOpen",l[7]),m(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1wde35"),m(h,"style",A=`background-color: ${l[2]}`),I(h,"isOpen",l[7]),m(P,"class","svelte-1wde35"),m(V,"class","task__info-open svelte-1wde35"),I(V,"isHidden",l[7]),m(t,"class",z="task "+l[1]+" svelte-1wde35"),I(t,"isDisabled",l[3]),I(t,"isInfoOpen",l[5]),I(t,"isEdit",l[7])},m(k,b){L(k,t,b),D(t,e),D(e,s),D(s,a),D(a,r),r.innerHTML=l[0],D(a,i),l[22](i),ae(i,l[0]),D(e,c),D(c,f),D(f,d),D(d,p),l[25](c),D(t,E),D(E,F),D(F,g),D(E,o),D(o,u),D(t,h);for(let q=0;q<C.length;q+=1)C[q].m(h,null);D(t,V),D(V,P),K||(X=[N(i,"input",l[23]),N(i,"input",l[24]),N(i,"keydown",l[18]),N(e,"click",l[13]),N(F,"click",H(l[14])),N(o,"click",H(l[26])),N(V,"click",H(l[28]))],K=!0)},p(k,b){b[0]&1&&(r.innerHTML=k[0]),b[0]&128&&I(r,"isEdit",k[7]),b[0]&128&&n!==(n=!k[7])&&(i.disabled=n),b[0]&1&&ae(i,k[0]),b[0]&1024&&I(i,"addTransition",k[10]),b[0]&16&&Ie(p,k[4]),b[0]&128&&I(e,"isEdit",k[7]),b[0]&128&&I(o,"isSelect",k[7]),b[0]&256&&I(o,"isChanged",k[8]),b[0]&512&&I(o,"isSave",k[9]),b[0]&128&&I(E,"isOpen",k[7]),b[0]&69636&&(Y=k[12].filter(k[27]),C=oe(C,b,ee,1,k,Y,U,h,Ge,Le,null,qe)),b[0]&4&&A!==(A=`background-color: ${k[2]}`)&&m(h,"style",A),b[0]&128&&I(h,"isOpen",k[7]),b[0]&128&&I(V,"isHidden",k[7]),b[0]&2&&z!==(z="task "+k[1]+" svelte-1wde35")&&m(t,"class",z),b[0]&10&&I(t,"isDisabled",k[3]),b[0]&34&&I(t,"isInfoOpen",k[5]),b[0]&130&&I(t,"isEdit",k[7])},i:j,o:j,d(k){k&&v(t),l[22](null),l[25](null);for(let b=0;b<C.length;b+=1)C[b].d();K=!1,Fe(X)}}}let Ve=new Set;function ot(){Ve.forEach(l=>{l.edit(!1)})}function it(l,t,e){let s,a;ie(l,R,_=>e(30,s=_)),ie(l,Ne,_=>e(12,a=_));let{class:r=""}=t,{text:i=""}=t,{color:n="#0029FF"}=t,{disabled:c=!1}=t,{id:f=null}=t,{date:d=""}=t,p=i,E=!1,F,g=!1,o=!1,u=!1,h=!1,C,U;const A=()=>{if(g===!1){let _=s.map(O=>(f===O.id&&(O.done=!O.done),O));R.set(_)}},V=()=>{let _=s.filter(O=>O.id!=f);R.set(_)};function P(_){e(7,g=_!=null?_:!g),g===!1&&X()}const z=_=>{let O=s.map(S=>(f===S.id&&(S.color=_),S));R.set(O)};function K(_){e(5,E=_!=null?_:!E);let O=0;F.childNodes.forEach(S=>O+=S.clientHeight),F.style.setProperty("--taskInfoHeight",`${E?O:0}px`)}function X(){o&&Y(i).then(()=>{e(8,o=!1),clearTimeout(U),e(9,u=!0),U=setTimeout(()=>{e(9,u=!1)},500)})}function Y(_){if(typeof _=="string")return new Promise(O=>{R.set(s.map(S=>(S.id===f&&(S.text=_),S))),O()});throw new Error("The value is not equal to the string")}function ee(_){let O=_.ctrlKey?!1:_.metaKey,S=_.keyCode;if(O&&S===83)return _.preventDefault(),X(),!1}function k(_=i){return e(8,o=_!==p)}function b(){e(11,C.rows=1,C);const _=parseFloat(ce(C,"padding-top"))+parseFloat(ce(C,"padding-bottom")),O=C.scrollHeight-_,S=parseFloat(ce(C,"line-height"));S==="normal"&&(S=parseFloat(ce(C,"font-size"))),console.log(O),e(11,C.rows=O/S,C)}Je(()=>{console.log(C.rows),b(),console.log(C.rows),e(10,h=!0)}),Ve.add({save(){X()},edit(_){P(_)}});function q(_){de[_?"unshift":"push"](()=>{C=_,e(11,C)})}function te(){i=this.value,e(0,i)}const Q=()=>{k(),b()};function ue(_){de[_?"unshift":"push"](()=>{F=_,e(6,F)})}const le=()=>{g===!1&&ot(),P()},se=_=>_.color!=n,ne=()=>K();return l.$$set=_=>{"class"in _&&e(1,r=_.class),"text"in _&&e(0,i=_.text),"color"in _&&e(2,n=_.color),"disabled"in _&&e(3,c=_.disabled),"id"in _&&e(21,f=_.id),"date"in _&&e(4,d=_.date)},[i,r,n,c,d,E,F,g,o,u,h,C,a,A,V,P,z,K,ee,k,b,f,q,te,Q,ue,le,se,ne]}class Pe extends W{constructor(t){super();Z(this,t,it,at,Ze,{class:1,text:0,color:2,disabled:3,id:21,date:4},null,[-1,-1])}}function Ue(l,t,e){const s=l.slice();return s[4]=t[e],s}function Be(l,t,e){const s=l.slice();return s[4]=t[e],s}function Me(l,t){let e,s,a,r,i,n=j,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=w("li"),G(s.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var d=T(e);J(s.$$.fragment,d),d.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,d){L(f,e,d),$(s,e,null),c=!0},p(f,d){t=f;const p={};d&2&&(p.text=t[4].text),d&2&&(p.color=t[4].color?t[4].color:null),d&2&&(p.id=t[4].id),d&2&&(p.date=t[4].date),s.$set(p)},r(){i=e.getBoundingClientRect()},f(){_e(e),n(),he(e,i)},a(){n(),n=me(e,i,ke,{duration:300})},i(f){c||(B(s.$$.fragment,f),ge(()=>{r&&r.end(1),a=De(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){M(s.$$.fragment,f),a&&a.invalidate(),r=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&v(e),x(s),f&&r&&r.end()}}}function Re(l,t){let e,s,a,r,i,n=j,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=w("li"),G(s.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var d=T(e);J(s.$$.fragment,d),d.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,d){L(f,e,d),$(s,e,null),c=!0},p(f,d){t=f;const p={};d&2&&(p.text=t[4].text),d&2&&(p.color=t[4].color?t[4].color:null),d&2&&(p.id=t[4].id),d&2&&(p.date=t[4].date),s.$set(p)},r(){i=e.getBoundingClientRect()},f(){_e(e),n(),he(e,i)},a(){n(),n=me(e,i,ke,{duration:300})},i(f){c||(B(s.$$.fragment,f),ge(()=>{r&&r.end(1),a=De(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){M(s.$$.fragment,f),a&&a.invalidate(),r=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&v(e),x(s),f&&r&&r.end()}}}function rt(l){let t,e,s,a=[],r=new Map,i,n=[],c=new Map,f,d,p=l[1].filter(He);const E=o=>o[4].id;for(let o=0;o<p.length;o+=1){let u=Be(l,p,o),h=E(u);r.set(h,a[o]=Me(h,u))}let F=l[1].filter(je);const g=o=>o[4].id;for(let o=0;o<F.length;o+=1){let u=Ue(l,F,o),h=g(u);c.set(h,n[o]=Re(h,u))}return{c(){t=w("section"),e=w("div"),s=w("ul");for(let o=0;o<a.length;o+=1)a[o].c();i=w("ul");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=y(o,"SECTION",{class:!0});var u=T(t);e=y(u,"DIV",{class:!0});var h=T(e);s=y(h,"UL",{class:!0});var C=T(s);for(let A=0;A<a.length;A+=1)a[A].l(C);C.forEach(v),i=y(h,"UL",{class:!0});var U=T(i);for(let A=0;A<n.length;A+=1)n[A].l(U);U.forEach(v),h.forEach(v),u.forEach(v),this.h()},h(){m(s,"class","task-section__col"),m(i,"class","task-section__col"),m(e,"class","container task-section__grid svelte-te6j4q"),m(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(o,u){L(o,t,u),D(t,e),D(e,s);for(let h=0;h<a.length;h+=1)a[h].m(s,null);D(e,i);for(let h=0;h<n.length;h+=1)n[h].m(i,null);d=!0},p(o,[u]){if(u&2){p=o[1].filter(He),ve();for(let h=0;h<a.length;h+=1)a[h].r();a=oe(a,u,E,1,o,p,r,s,be,Me,null,Be);for(let h=0;h<a.length;h+=1)a[h].a();pe()}if(u&2){F=o[1].filter(je),ve();for(let h=0;h<n.length;h+=1)n[h].r();n=oe(n,u,g,1,o,F,c,i,be,Re,null,Ue);for(let h=0;h<n.length;h+=1)n[h].a();pe()}(!d||u&1&&f!==(f="task-section "+o[0]+" svelte-te6j4q"))&&m(t,"class",f)},i(o){if(!d){for(let u=0;u<p.length;u+=1)B(a[u]);for(let u=0;u<F.length;u+=1)B(n[u]);d=!0}},o(o){for(let u=0;u<a.length;u+=1)M(a[u]);for(let u=0;u<n.length;u+=1)M(n[u]);d=!1},d(o){o&&v(t);for(let u=0;u<a.length;u+=1)a[u].d();for(let u=0;u<n.length;u+=1)n[u].d()}}}const He=l=>!l.done,je=l=>l.done;function ct(l,t,e){let s;ie(l,R,n=>e(1,s=n));let{class:a=""}=t;const[r,i]=$e({duration:n=>Math.sqrt(n*200),fallback(n,c){const f=getComputedStyle(n),d=f.transform==="none"?"":f.transform;return{duration:600,easing:xe,css:p=>`
					transform: ${d} scale(${p});
					opacity: ${p}
				`}}});return l.$$set=n=>{"class"in n&&e(0,a=n.class)},[a,s,r,i]}class ut extends W{constructor(t){super();Z(this,t,ct,rt,re,{class:0})}}function ze(l){let t,e,s,a=l[2].text&&Ke(l);return{c(){t=w("button"),a&&a.c(),this.h()},l(r){t=y(r,"BUTTON",{class:!0});var i=T(t);a&&a.l(i),i.forEach(v),this.h()},h(){m(t,"class","btn svelte-1yy2xse")},m(r,i){L(r,t,i),a&&a.m(t,null),e||(s=N(t,"click",H(l[6])),e=!0)},p(r,i){r[2].text?a?a.p(r,i):(a=Ke(r),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(r){r&&v(t),a&&a.d(),e=!1,s()}}}function Ke(l){let t=l[2].text+"",e;return{c(){e=Te(t)},l(s){e=Ce(s,t)},m(s,a){L(s,e,a)},p(s,a){a&4&&t!==(t=s[2].text+"")&&Ie(e,t)},d(s){s&&v(e)}}}function ft(l){let t,e,s,a,r,i=l[2]&&ze(l);return{c(){t=w("div"),e=w("input"),i&&i.c(),this.h()},l(n){t=y(n,"DIV",{class:!0});var c=T(t);e=y(c,"INPUT",{placeholder:!0,class:!0}),i&&i.l(c),c.forEach(v),this.h()},h(){m(e,"placeholder",l[1]),m(e,"class","svelte-1yy2xse"),m(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),I(t,"isError",l[5])},m(n,c){L(n,t,c),D(t,e),ae(e,l[4]),i&&i.m(t,null),l[10](t),a||(r=[N(e,"input",l[9]),N(e,"input",l[7]),N(e,"keydown",l[8])],a=!0)},p(n,[c]){c&2&&m(e,"placeholder",n[1]),c&16&&e.value!==n[4]&&ae(e,n[4]),n[2]?i?i.p(n,c):(i=ze(n),i.c(),i.m(t,null)):i&&(i.d(1),i=null),c&5&&s!==(s="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse")&&m(t,"class",s),c&37&&I(t,"isError",n[5])},i:j,o:j,d(n){n&&v(t),i&&i.d(),l[10](null),a=!1,Fe(r)}}}function dt(l,t,e){let{class:s=""}=t,{placeholder:a="Placeholer"}=t,{btn:r=null}=t,i,n,c=!1;const f=et(),d=()=>{n?(f("submit",{value:n}),e(4,n="")):e(5,c=!0)},p=()=>{e(5,c=!1)},E=o=>{let u=o.key,h=o.ctrlKey,C=o.shiftKey;o.keyCode,h&&C&&f("color"),u==="Enter"&&d()};function F(){n=this.value,e(4,n)}function g(o){de[o?"unshift":"push"](()=>{i=o,e(3,i)})}return l.$$set=o=>{"class"in o&&e(0,s=o.class),"placeholder"in o&&e(1,a=o.placeholder),"btn"in o&&e(2,r=o.btn)},[s,a,r,i,n,c,d,p,E,F,g]}class _t extends W{constructor(t){super();Z(this,t,dt,ft,re,{class:0,placeholder:1,btn:2})}}function Xe(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Ye(l,t){let e,s,a,r,i=j,n,c,f;return{key:l,first:null,c(){e=w("button"),this.h()},l(d){e=y(d,"BUTTON",{class:!0,style:!0}),T(e).forEach(v),this.h()},h(){m(e,"class","add-todo__color svelte-1hafqlz"),m(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(d,p){L(d,e,p),n=!0,c||(f=N(e,"click",H(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(d,p){t=d,(!n||p&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",s)},r(){r=e.getBoundingClientRect()},f(){_e(e),i(),he(e,r)},a(){i(),i=me(e,r,ke,{})},i(d){n||(ge(()=>{a||(a=Se(e,Ae,{},!0)),a.run(1)}),n=!0)},o(d){a||(a=Se(e,Ae,{},!1)),a.run(0),n=!1},d(d){d&&v(e),d&&a&&a.end(),c=!1,f()}}}function ht(l){let t,e,s,a,r=[],i=new Map,n,c,f,d,p,E=l[3].filter(l[7]);const F=g=>g[9].id;for(let g=0;g<E.length;g+=1){let o=Xe(l,E,g),u=F(o);i.set(u,r[g]=Ye(u,o))}return n=new _t({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("color",l[8]),n.$on("submit",l[4]),{c(){t=w("div"),e=w("div"),s=w("span");for(let g=0;g<r.length;g+=1)r[g].c();G(n.$$.fragment),this.h()},l(g){t=y(g,"DIV",{class:!0});var o=T(t);e=y(o,"DIV",{class:!0});var u=T(e);s=y(u,"SPAN",{class:!0,style:!0}),T(s).forEach(v);for(let h=0;h<r.length;h+=1)r[h].l(u);u.forEach(v),J(n.$$.fragment,o),o.forEach(v),this.h()},h(){m(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),m(s,"style",a=`color: ${l[1]}`),m(e,"class","add-todo__color-list svelte-1hafqlz"),I(e,"isOpen",l[2]),m(t,"class",c="add-todo "+l[0]+" svelte-1hafqlz")},m(g,o){L(g,t,o),D(t,e),D(e,s);for(let u=0;u<r.length;u+=1)r[u].m(e,null);$(n,t,null),f=!0,d||(p=N(s,"click",H(l[6])),d=!0)},p(g,[o]){if((!f||o&2&&a!==(a=`color: ${g[1]}`))&&m(s,"style",a),o&42){E=g[3].filter(g[7]),ve();for(let u=0;u<r.length;u+=1)r[u].r();r=oe(r,o,F,1,g,E,i,e,be,Ye,null,Xe);for(let u=0;u<r.length;u+=1)r[u].a();pe()}o&4&&I(e,"isOpen",g[2]),(!f||o&1&&c!==(c="add-todo "+g[0]+" svelte-1hafqlz"))&&m(t,"class",c)},i(g){if(!f){for(let o=0;o<E.length;o+=1)B(r[o]);B(n.$$.fragment,g),f=!0}},o(g){for(let o=0;o<r.length;o+=1)M(r[o]);M(n.$$.fragment,g),f=!1},d(g){g&&v(t);for(let o=0;o<r.length;o+=1)r[o].d();x(n),d=!1,p()}}}function mt(l,t,e){let s;ie(l,Ne,E=>e(3,s=E));let{class:a=""}=t,r="#0029FF",i=!1;const n=E=>{let F={id:Date.now(),text:E.detail.value,color:r,done:!1,date:nt(new Date,"dot")};R.update(g=>g=[F,...g])},c=E=>E&&e(1,r=E),f=()=>e(2,i=!i),d=E=>E.color!=r,p=()=>e(2,i=!i);return l.$$set=E=>{"class"in E&&e(0,a=E.class)},[a,r,i,s,n,c,f,d,p]}class gt extends W{constructor(t){super();Z(this,t,mt,ht,re,{class:0})}}function vt(l){let t,e,s,a,r,i,n;return a=new gt({}),i=new ut({props:{class:"mt-50"}}),{c(){t=tt(),e=w("section"),s=w("div"),G(a.$$.fragment),G(i.$$.fragment),this.h()},l(c){lt('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=st(c),e=y(c,"SECTION",{class:!0});var d=T(e);s=y(d,"DIV",{class:!0});var p=T(s);J(a.$$.fragment,p),p.forEach(v),d.forEach(v),J(i.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(s,"class","container"),m(e,"class",r=""+(l[0]+" mt-50 svelte-110abfo"))},m(c,f){L(c,t,f),L(c,e,f),D(e,s),$(a,s,null),$(i,c,f),n=!0},p(c,[f]){(!n||f&1&&r!==(r=""+(c[0]+" mt-50 svelte-110abfo")))&&m(e,"class",r)},i(c){n||(B(a.$$.fragment,c),B(i.$$.fragment,c),n=!0)},o(c){M(a.$$.fragment,c),M(i.$$.fragment,c),n=!1},d(c){c&&v(t),c&&v(e),x(a),x(i,c)}}}function pt(l,t,e){let{class:s=""}=t;return l.$$set=a=>{"class"in a&&e(0,s=a.class)},[s]}class bt extends W{constructor(t){super();Z(this,t,pt,vt,re,{class:0})}}export{bt as default};
