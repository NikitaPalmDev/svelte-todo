import{K as Qe,C as We,S as W,i as Z,L as Ze,e as E,c as T,a as w,d as g,b as m,f as L,D,M as N,N as H,O as Te,t as we,g as Ce,P as I,Q as ae,h as Ie,R as oe,T as Ge,E as j,U as Fe,V as re,u as Je,W as _e,s as ie,v as G,w as J,x as $,X as de,Y as he,Z as me,p as B,_ as ke,$ as De,n as M,a0 as Oe,A as x,m as ge,o as ve,a1 as $e,a2 as pe,a3 as be,a4 as xe,a5 as et,a6 as Se,a7 as Ae,j as tt,a8 as lt,l as st}from"../chunks/vendor-6ec25659.js";const R=We([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ne=Qe(R,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=l.filter(n=>n.color).map(n=>n.color).concat(e),r=a.filter((n,c)=>a.indexOf(n)===c).map((n,c)=>({id:c,color:n}));t(r)}),nt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},ce=(l,t)=>getComputedStyle(l)[t];function qe(l,t,e){const s=l.slice();return s[35]=t[e],s}function Le(l,t){let e,s,a,i,r;return{key:l,first:null,c(){e=E("li"),s=E("button"),this.h()},l(n){e=T(n,"LI",{class:!0});var c=w(e);s=T(c,"BUTTON",{class:!0,style:!0}),w(s).forEach(g),c.forEach(g),this.h()},h(){m(s,"class","task__color-btn svelte-ksmylr"),m(s,"style",a=`background-color: ${t[35].color}`),m(e,"class","task__color-item svelte-ksmylr"),this.first=e},m(n,c){L(n,e,c),D(e,s),i||(r=N(s,"click",H(function(){Te(t[16](t[35].color))&&t[16](t[35].color).apply(this,arguments)})),i=!0)},p(n,c){t=n,c[0]&4100&&a!==(a=`background-color: ${t[35].color}`)&&m(s,"style",a)},d(n){n&&g(e),i=!1,r()}}}function at(l){let t,e,s,a,i,r,n,c,f,_,v,y,F,k,o,u,h,C=[],U=new Map,A,V,P,z,K,X,Y=l[12].filter(l[27]);const ee=p=>p[35].id;for(let p=0;p<Y.length;p+=1){let b=qe(l,Y,p),q=ee(b);U.set(q,C[p]=Le(q,b))}return{c(){t=E("article"),e=E("div"),s=E("div"),a=E("div"),i=E("p"),r=E("textarea"),c=E("div"),f=E("div"),_=E("span"),v=we(l[4]),y=E("div"),F=E("button"),k=E("span"),o=E("button"),u=E("span"),h=E("ul");for(let p=0;p<C.length;p+=1)C[p].c();V=E("button"),P=E("span"),this.h()},l(p){t=T(p,"ARTICLE",{class:!0});var b=w(t);e=T(b,"DIV",{class:!0});var q=w(e);s=T(q,"DIV",{class:!0});var te=w(s);a=T(te,"DIV",{class:!0});var Q=w(a);i=T(Q,"P",{class:!0});var ue=w(i);ue.forEach(g),r=T(Q,"TEXTAREA",{class:!0}),w(r).forEach(g),Q.forEach(g),te.forEach(g),c=T(q,"DIV",{class:!0});var le=w(c);f=T(le,"DIV",{class:!0});var se=w(f);_=T(se,"SPAN",{class:!0});var ne=w(_);v=Ce(ne,l[4]),ne.forEach(g),se.forEach(g),le.forEach(g),q.forEach(g),y=T(b,"DIV",{class:!0});var d=w(y);F=T(d,"BUTTON",{class:!0});var O=w(F);k=T(O,"SPAN",{class:!0}),w(k).forEach(g),O.forEach(g),o=T(d,"BUTTON",{class:!0});var S=w(o);u=T(S,"SPAN",{class:!0}),w(u).forEach(g),S.forEach(g),d.forEach(g),h=T(b,"UL",{class:!0,style:!0});var ye=w(h);for(let fe=0;fe<C.length;fe+=1)C[fe].l(ye);ye.forEach(g),V=T(b,"BUTTON",{class:!0});var Ee=w(V);P=T(Ee,"SPAN",{class:!0}),w(P).forEach(g),Ee.forEach(g),b.forEach(g),this.h()},h(){m(i,"class","task__main-content svelte-ksmylr"),I(i,"isEdit",l[7]),m(r,"class","task__main-content svelte-ksmylr"),r.disabled=n=!l[7],I(r,"addTransition",l[10]),m(a,"class","task__main-content-wrapper svelte-ksmylr"),m(s,"class","task__main-container svelte-ksmylr"),m(_,"class","svelte-ksmylr"),m(f,"class","task__info-content svelte-ksmylr"),m(c,"class","task__info svelte-ksmylr"),m(e,"class","task__main svelte-ksmylr"),I(e,"isEdit",l[7]),m(k,"class","svg-image-del svelte-ksmylr"),m(F,"class","task__menu-btn task__menu-btn_del svelte-ksmylr"),m(u,"class","svg-image-pen svelte-ksmylr"),m(o,"class","task__menu-btn task__menu-btn_edit svelte-ksmylr"),I(o,"isSelect",l[7]),I(o,"isChanged",l[8]),I(o,"isSave",l[9]),m(y,"class","task__circle task__menu svelte-ksmylr"),I(y,"isOpen",l[7]),m(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-ksmylr"),m(h,"style",A=`background-color: ${l[2]}`),I(h,"isOpen",l[7]),m(P,"class","svelte-ksmylr"),m(V,"class","task__info-open svelte-ksmylr"),I(V,"isHidden",l[7]),m(t,"class",z="task "+l[1]+" svelte-ksmylr"),I(t,"isDisabled",l[3]),I(t,"isInfoOpen",l[5]),I(t,"isEdit",l[7])},m(p,b){L(p,t,b),D(t,e),D(e,s),D(s,a),D(a,i),i.innerHTML=l[0],D(a,r),l[22](r),ae(r,l[0]),D(e,c),D(c,f),D(f,_),D(_,v),l[25](c),D(t,y),D(y,F),D(F,k),D(y,o),D(o,u),D(t,h);for(let q=0;q<C.length;q+=1)C[q].m(h,null);D(t,V),D(V,P),K||(X=[N(r,"input",l[23]),N(r,"input",l[24]),N(r,"keydown",l[18]),N(e,"click",l[13]),N(F,"click",H(l[14])),N(o,"click",H(l[26])),N(V,"click",H(l[28]))],K=!0)},p(p,b){b[0]&1&&(i.innerHTML=p[0]),b[0]&128&&I(i,"isEdit",p[7]),b[0]&128&&n!==(n=!p[7])&&(r.disabled=n),b[0]&1&&ae(r,p[0]),b[0]&1024&&I(r,"addTransition",p[10]),b[0]&16&&Ie(v,p[4]),b[0]&128&&I(e,"isEdit",p[7]),b[0]&128&&I(o,"isSelect",p[7]),b[0]&256&&I(o,"isChanged",p[8]),b[0]&512&&I(o,"isSave",p[9]),b[0]&128&&I(y,"isOpen",p[7]),b[0]&69636&&(Y=p[12].filter(p[27]),C=oe(C,b,ee,1,p,Y,U,h,Ge,Le,null,qe)),b[0]&4&&A!==(A=`background-color: ${p[2]}`)&&m(h,"style",A),b[0]&128&&I(h,"isOpen",p[7]),b[0]&128&&I(V,"isHidden",p[7]),b[0]&2&&z!==(z="task "+p[1]+" svelte-ksmylr")&&m(t,"class",z),b[0]&10&&I(t,"isDisabled",p[3]),b[0]&34&&I(t,"isInfoOpen",p[5]),b[0]&130&&I(t,"isEdit",p[7])},i:j,o:j,d(p){p&&g(t),l[22](null),l[25](null);for(let b=0;b<C.length;b+=1)C[b].d();K=!1,Fe(X)}}}let Ve=new Set;function ot(){Ve.forEach(l=>{l.edit(!1)})}function rt(l,t,e){let s,a;re(l,R,d=>e(30,s=d)),re(l,Ne,d=>e(12,a=d));let{class:i=""}=t,{text:r=""}=t,{color:n="#0029FF"}=t,{disabled:c=!1}=t,{id:f=null}=t,{date:_=""}=t,v=r,y=!1,F,k=!1,o=!1,u=!1,h=!1,C,U;const A=()=>{if(k===!1){let d=s.map(O=>(f===O.id&&(O.done=!O.done),O));R.set(d)}},V=()=>{let d=s.filter(O=>O.id!=f);R.set(d)};function P(d){e(7,k=d!=null?d:!k),k===!1&&X()}const z=d=>{let O=s.map(S=>(f===S.id&&(S.color=d),S));R.set(O)};function K(d){e(5,y=d!=null?d:!y);let O=0;F.childNodes.forEach(S=>O+=S.clientHeight),F.style.setProperty("--taskInfoHeight",`${y?O:0}px`)}function X(){o&&Y(r).then(()=>{e(8,o=!1),clearTimeout(U),e(9,u=!0),U=setTimeout(()=>{e(9,u=!1)},500)})}function Y(d){if(typeof d=="string")return new Promise(O=>{R.set(s.map(S=>(S.id===f&&(S.text=d),S))),O()});throw new Error("The value is not equal to the string")}function ee(d){let O=d.ctrlKey?!1:d.metaKey,S=d.keyCode;if(O&&S===83)return d.preventDefault(),X(),!1}function p(d=r){return e(8,o=d!==v)}function b(){e(11,C.rows=1,C);const d=parseFloat(ce(C,"padding-top"))+parseFloat(ce(C,"padding-bottom")),O=C.scrollHeight-d,S=parseFloat(ce(C,"line-height"));S==="normal"&&(S=parseFloat(ce(C,"font-size"))),console.log(O),e(11,C.rows=O/S,C)}Je(()=>{console.log(C.rows),b(),console.log(C.rows),e(10,h=!0)}),Ve.add({save(){X()},edit(d){P(d)}});function q(d){_e[d?"unshift":"push"](()=>{C=d,e(11,C)})}function te(){r=this.value,e(0,r)}const Q=()=>{p(),b()};function ue(d){_e[d?"unshift":"push"](()=>{F=d,e(6,F)})}const le=()=>{k===!1&&ot(),P()},se=d=>d.color!=n,ne=()=>K();return l.$$set=d=>{"class"in d&&e(1,i=d.class),"text"in d&&e(0,r=d.text),"color"in d&&e(2,n=d.color),"disabled"in d&&e(3,c=d.disabled),"id"in d&&e(21,f=d.id),"date"in d&&e(4,_=d.date)},[r,i,n,c,_,y,F,k,o,u,h,C,a,A,V,P,z,K,ee,p,b,f,q,te,Q,ue,le,se,ne]}class Pe extends W{constructor(t){super();Z(this,t,rt,at,Ze,{class:1,text:0,color:2,disabled:3,id:21,date:4},null,[-1,-1])}}function Ue(l,t,e){const s=l.slice();return s[4]=t[e],s}function Be(l,t,e){const s=l.slice();return s[4]=t[e],s}function Me(l,t){let e,s,a,i,r,n=j,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=E("li"),G(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=w(e);J(s.$$.fragment,_),_.forEach(g),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),$(s,e,null),c=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),s.$set(v)},r(){r=e.getBoundingClientRect()},f(){de(e),n(),he(e,r)},a(){n(),n=me(e,r,pe,{duration:300})},i(f){c||(B(s.$$.fragment,f),ke(()=>{i&&i.end(1),a=De(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){M(s.$$.fragment,f),a&&a.invalidate(),i=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&g(e),x(s),f&&i&&i.end()}}}function Re(l,t){let e,s,a,i,r,n=j,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=E("li"),G(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=w(e);J(s.$$.fragment,_),_.forEach(g),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),$(s,e,null),c=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),s.$set(v)},r(){r=e.getBoundingClientRect()},f(){de(e),n(),he(e,r)},a(){n(),n=me(e,r,pe,{duration:300})},i(f){c||(B(s.$$.fragment,f),ke(()=>{i&&i.end(1),a=De(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){M(s.$$.fragment,f),a&&a.invalidate(),i=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&g(e),x(s),f&&i&&i.end()}}}function it(l){let t,e,s,a=[],i=new Map,r,n=[],c=new Map,f,_,v=l[1].filter(He);const y=o=>o[4].id;for(let o=0;o<v.length;o+=1){let u=Be(l,v,o),h=y(u);i.set(h,a[o]=Me(h,u))}let F=l[1].filter(je);const k=o=>o[4].id;for(let o=0;o<F.length;o+=1){let u=Ue(l,F,o),h=k(u);c.set(h,n[o]=Re(h,u))}return{c(){t=E("section"),e=E("div"),s=E("ul");for(let o=0;o<a.length;o+=1)a[o].c();r=E("ul");for(let o=0;o<n.length;o+=1)n[o].c();this.h()},l(o){t=T(o,"SECTION",{class:!0});var u=w(t);e=T(u,"DIV",{class:!0});var h=w(e);s=T(h,"UL",{class:!0});var C=w(s);for(let A=0;A<a.length;A+=1)a[A].l(C);C.forEach(g),r=T(h,"UL",{class:!0});var U=w(r);for(let A=0;A<n.length;A+=1)n[A].l(U);U.forEach(g),h.forEach(g),u.forEach(g),this.h()},h(){m(s,"class","task-section__col"),m(r,"class","task-section__col"),m(e,"class","container task-section__grid svelte-te6j4q"),m(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(o,u){L(o,t,u),D(t,e),D(e,s);for(let h=0;h<a.length;h+=1)a[h].m(s,null);D(e,r);for(let h=0;h<n.length;h+=1)n[h].m(r,null);_=!0},p(o,[u]){if(u&2){v=o[1].filter(He),ge();for(let h=0;h<a.length;h+=1)a[h].r();a=oe(a,u,y,1,o,v,i,s,be,Me,null,Be);for(let h=0;h<a.length;h+=1)a[h].a();ve()}if(u&2){F=o[1].filter(je),ge();for(let h=0;h<n.length;h+=1)n[h].r();n=oe(n,u,k,1,o,F,c,r,be,Re,null,Ue);for(let h=0;h<n.length;h+=1)n[h].a();ve()}(!_||u&1&&f!==(f="task-section "+o[0]+" svelte-te6j4q"))&&m(t,"class",f)},i(o){if(!_){for(let u=0;u<v.length;u+=1)B(a[u]);for(let u=0;u<F.length;u+=1)B(n[u]);_=!0}},o(o){for(let u=0;u<a.length;u+=1)M(a[u]);for(let u=0;u<n.length;u+=1)M(n[u]);_=!1},d(o){o&&g(t);for(let u=0;u<a.length;u+=1)a[u].d();for(let u=0;u<n.length;u+=1)n[u].d()}}}const He=l=>!l.done,je=l=>l.done;function ct(l,t,e){let s;re(l,R,n=>e(1,s=n));let{class:a=""}=t;const[i,r]=$e({duration:n=>Math.sqrt(n*200),fallback(n,c){const f=getComputedStyle(n),_=f.transform==="none"?"":f.transform;return{duration:600,easing:xe,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return l.$$set=n=>{"class"in n&&e(0,a=n.class)},[a,s,i,r]}class ut extends W{constructor(t){super();Z(this,t,ct,it,ie,{class:0})}}function ze(l){let t,e,s,a=l[2].text&&Ke(l);return{c(){t=E("button"),a&&a.c(),this.h()},l(i){t=T(i,"BUTTON",{class:!0});var r=w(t);a&&a.l(r),r.forEach(g),this.h()},h(){m(t,"class","btn svelte-1yy2xse")},m(i,r){L(i,t,r),a&&a.m(t,null),e||(s=N(t,"click",H(l[6])),e=!0)},p(i,r){i[2].text?a?a.p(i,r):(a=Ke(i),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(i){i&&g(t),a&&a.d(),e=!1,s()}}}function Ke(l){let t=l[2].text+"",e;return{c(){e=we(t)},l(s){e=Ce(s,t)},m(s,a){L(s,e,a)},p(s,a){a&4&&t!==(t=s[2].text+"")&&Ie(e,t)},d(s){s&&g(e)}}}function ft(l){let t,e,s,a,i,r=l[2]&&ze(l);return{c(){t=E("div"),e=E("input"),r&&r.c(),this.h()},l(n){t=T(n,"DIV",{class:!0});var c=w(t);e=T(c,"INPUT",{placeholder:!0,class:!0}),r&&r.l(c),c.forEach(g),this.h()},h(){m(e,"placeholder",l[1]),m(e,"class","svelte-1yy2xse"),m(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),I(t,"isError",l[5])},m(n,c){L(n,t,c),D(t,e),ae(e,l[4]),r&&r.m(t,null),l[10](t),a||(i=[N(e,"input",l[9]),N(e,"input",l[7]),N(e,"keydown",l[8])],a=!0)},p(n,[c]){c&2&&m(e,"placeholder",n[1]),c&16&&e.value!==n[4]&&ae(e,n[4]),n[2]?r?r.p(n,c):(r=ze(n),r.c(),r.m(t,null)):r&&(r.d(1),r=null),c&5&&s!==(s="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse")&&m(t,"class",s),c&37&&I(t,"isError",n[5])},i:j,o:j,d(n){n&&g(t),r&&r.d(),l[10](null),a=!1,Fe(i)}}}function _t(l,t,e){let{class:s=""}=t,{placeholder:a="Placeholer"}=t,{btn:i=null}=t,r,n,c=!1;const f=et(),_=()=>{n?(f("submit",{value:n}),e(4,n="")):e(5,c=!0)},v=()=>{e(5,c=!1)},y=o=>{let u=o.key,h=o.ctrlKey,C=o.shiftKey;o.keyCode,h&&C&&f("color"),u==="Enter"&&_()};function F(){n=this.value,e(4,n)}function k(o){_e[o?"unshift":"push"](()=>{r=o,e(3,r)})}return l.$$set=o=>{"class"in o&&e(0,s=o.class),"placeholder"in o&&e(1,a=o.placeholder),"btn"in o&&e(2,i=o.btn)},[s,a,i,r,n,c,_,v,y,F,k]}class dt extends W{constructor(t){super();Z(this,t,_t,ft,ie,{class:0,placeholder:1,btn:2})}}function Xe(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Ye(l,t){let e,s,a,i,r=j,n,c,f;return{key:l,first:null,c(){e=E("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(g),this.h()},h(){m(e,"class","add-todo__color svelte-1hafqlz"),m(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){L(_,e,v),n=!0,c||(f=N(e,"click",H(function(){Te(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(_,v){t=_,(!n||v&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",s)},r(){i=e.getBoundingClientRect()},f(){de(e),r(),he(e,i)},a(){r(),r=me(e,i,pe,{})},i(_){n||(ke(()=>{a||(a=Se(e,Ae,{},!0)),a.run(1)}),n=!0)},o(_){a||(a=Se(e,Ae,{},!1)),a.run(0),n=!1},d(_){_&&g(e),_&&a&&a.end(),c=!1,f()}}}function ht(l){let t,e,s,a,i=[],r=new Map,n,c,f,_,v,y=l[3].filter(l[7]);const F=k=>k[9].id;for(let k=0;k<y.length;k+=1){let o=Xe(l,y,k),u=F(o);r.set(u,i[k]=Ye(u,o))}return n=new dt({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("color",l[8]),n.$on("submit",l[4]),{c(){t=E("div"),e=E("div"),s=E("span");for(let k=0;k<i.length;k+=1)i[k].c();G(n.$$.fragment),this.h()},l(k){t=T(k,"DIV",{class:!0});var o=w(t);e=T(o,"DIV",{class:!0});var u=w(e);s=T(u,"SPAN",{class:!0,style:!0}),w(s).forEach(g);for(let h=0;h<i.length;h+=1)i[h].l(u);u.forEach(g),J(n.$$.fragment,o),o.forEach(g),this.h()},h(){m(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),m(s,"style",a=`color: ${l[1]}`),m(e,"class","add-todo__color-list svelte-1hafqlz"),I(e,"isOpen",l[2]),m(t,"class",c="add-todo "+l[0]+" svelte-1hafqlz")},m(k,o){L(k,t,o),D(t,e),D(e,s);for(let u=0;u<i.length;u+=1)i[u].m(e,null);$(n,t,null),f=!0,_||(v=N(s,"click",H(l[6])),_=!0)},p(k,[o]){if((!f||o&2&&a!==(a=`color: ${k[1]}`))&&m(s,"style",a),o&42){y=k[3].filter(k[7]),ge();for(let u=0;u<i.length;u+=1)i[u].r();i=oe(i,o,F,1,k,y,r,e,be,Ye,null,Xe);for(let u=0;u<i.length;u+=1)i[u].a();ve()}o&4&&I(e,"isOpen",k[2]),(!f||o&1&&c!==(c="add-todo "+k[0]+" svelte-1hafqlz"))&&m(t,"class",c)},i(k){if(!f){for(let o=0;o<y.length;o+=1)B(i[o]);B(n.$$.fragment,k),f=!0}},o(k){for(let o=0;o<i.length;o+=1)M(i[o]);M(n.$$.fragment,k),f=!1},d(k){k&&g(t);for(let o=0;o<i.length;o+=1)i[o].d();x(n),_=!1,v()}}}function mt(l,t,e){let s;re(l,Ne,y=>e(3,s=y));let{class:a=""}=t,i="#0029FF",r=!1;const n=y=>{let F={id:Date.now(),text:y.detail.value,color:i,done:!1,date:nt(new Date,"dot")};R.update(k=>k=[F,...k])},c=y=>y&&e(1,i=y),f=()=>e(2,r=!r),_=y=>y.color!=i,v=()=>e(2,r=!r);return l.$$set=y=>{"class"in y&&e(0,a=y.class)},[a,i,r,s,n,c,f,_,v]}class kt extends W{constructor(t){super();Z(this,t,mt,ht,ie,{class:0})}}function gt(l){let t,e,s,a,i,r,n;return a=new kt({}),r=new ut({props:{class:"mt-50"}}),{c(){t=tt(),e=E("section"),s=E("div"),G(a.$$.fragment),G(r.$$.fragment),this.h()},l(c){lt('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=st(c),e=T(c,"SECTION",{class:!0});var _=w(e);s=T(_,"DIV",{class:!0});var v=w(s);J(a.$$.fragment,v),v.forEach(g),_.forEach(g),J(r.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(s,"class","container"),m(e,"class",i=""+(l[0]+" mt-50 svelte-110abfo"))},m(c,f){L(c,t,f),L(c,e,f),D(e,s),$(a,s,null),$(r,c,f),n=!0},p(c,[f]){(!n||f&1&&i!==(i=""+(c[0]+" mt-50 svelte-110abfo")))&&m(e,"class",i)},i(c){n||(B(a.$$.fragment,c),B(r.$$.fragment,c),n=!0)},o(c){M(a.$$.fragment,c),M(r.$$.fragment,c),n=!1},d(c){c&&g(t),c&&g(e),x(a),x(r,c)}}}function vt(l,t,e){let{class:s=""}=t;return l.$$set=a=>{"class"in a&&e(0,s=a.class)},[s]}class bt extends W{constructor(t){super();Z(this,t,vt,gt,ie,{class:0})}}export{bt as default};
