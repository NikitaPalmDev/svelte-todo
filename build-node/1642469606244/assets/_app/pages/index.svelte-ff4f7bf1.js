import{K as Ye,C as Qe,S as Z,i as G,L as We,e as E,c as T,a as w,d as v,b as g,f as P,D as O,M as N,N as M,O as Ee,P as Ze,t as Te,Q as Ge,g as we,R as F,T as oe,h as Ce,U as ie,V as Je,E as j,W as Fe,X as re,u as $e,Y as _e,s as ce,v as J,w as $,x,Z as de,_ as he,$ as me,p as L,a0 as ge,a1 as Ie,n as R,a2 as Oe,A as ee,m as ve,o as pe,a3 as xe,a4 as ke,a5 as ye,a6 as et,a7 as tt,a8 as Se,a9 as De,j as lt,aa as st,l as nt}from"../chunks/vendor-4db38252.js";const H=Qe([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ae=Ye(H,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=l.filter(a=>a.color).map(a=>a.color).concat(e),o=n.filter((a,r)=>n.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(o)}),at=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},ue=(l,t)=>getComputedStyle(l)[t];function Ne(l,t,e){const s=l.slice();return s[35]=t[e],s}function qe(l,t){let e,s,n,c,o;return{key:l,first:null,c(){e=E("li"),s=E("button"),this.h()},l(a){e=T(a,"LI",{class:!0});var r=w(e);s=T(r,"BUTTON",{class:!0,style:!0}),w(s).forEach(v),r.forEach(v),this.h()},h(){g(s,"class","task__color-btn svelte-3obyyy"),g(s,"style",n=`background-color: ${t[35].color}`),g(e,"class","task__color-item svelte-3obyyy"),this.first=e},m(a,r){P(a,e,r),O(e,s),c||(o=N(s,"click",M(function(){Ee(t[17](t[35].color))&&t[17](t[35].color).apply(this,arguments)})),c=!0)},p(a,r){t=a,r[0]&8196&&n!==(n=`background-color: ${t[35].color}`)&&g(s,"style",n)},d(a){a&&v(e),c=!1,o()}}}function ot(l){let t,e,s,n,c,o,a,r,f,_,p,b,I,m,i,u,h,C=[],B=new Map,A,U,V,z,K,X,Y=l[13].filter(l[28]);const te=k=>k[35].id;for(let k=0;k<Y.length;k+=1){let y=Ne(l,Y,k),q=te(y);B.set(q,C[k]=qe(q,y))}return{c(){t=E("article"),e=E("div"),s=E("div"),n=E("p"),c=new Ze,o=E("textarea"),r=E("div"),f=E("div"),_=E("span"),p=Te(l[4]),b=E("div"),I=E("button"),m=E("span"),i=E("button"),u=E("span"),h=E("ul");for(let k=0;k<C.length;k+=1)C[k].c();U=E("button"),V=E("span"),this.h()},l(k){t=T(k,"ARTICLE",{class:!0});var y=w(t);e=T(y,"DIV",{class:!0});var q=w(e);s=T(q,"DIV",{class:!0});var le=w(s);n=T(le,"P",{class:!0});var Q=w(n);c=Ge(Q),o=T(Q,"TEXTAREA",{class:!0}),w(o).forEach(v),Q.forEach(v),le.forEach(v),r=T(q,"DIV",{class:!0});var se=w(r);f=T(se,"DIV",{class:!0});var ne=w(f);_=T(ne,"SPAN",{class:!0});var ae=w(_);p=we(ae,l[4]),ae.forEach(v),ne.forEach(v),se.forEach(v),q.forEach(v),b=T(y,"DIV",{class:!0});var W=w(b);I=T(W,"BUTTON",{class:!0});var d=w(I);m=T(d,"SPAN",{class:!0}),w(m).forEach(v),d.forEach(v),i=T(W,"BUTTON",{class:!0});var S=w(i);u=T(S,"SPAN",{class:!0}),w(u).forEach(v),S.forEach(v),W.forEach(v),h=T(y,"UL",{class:!0,style:!0});var D=w(h);for(let fe=0;fe<C.length;fe+=1)C[fe].l(D);D.forEach(v),U=T(y,"BUTTON",{class:!0});var be=w(U);V=T(be,"SPAN",{class:!0}),w(V).forEach(v),be.forEach(v),y.forEach(v),this.h()},h(){c.a=o,g(o,"class","task__main-content svelte-3obyyy"),o.disabled=a=!l[8],F(o,"addTransition",l[11]),g(n,"class","task__main-content svelte-3obyyy"),F(n,"isEdit",l[8]),g(s,"class","task__main-container svelte-3obyyy"),g(_,"class","svelte-3obyyy"),g(f,"class","task__info-content svelte-3obyyy"),g(r,"class","task__info svelte-3obyyy"),g(e,"class","task__main svelte-3obyyy"),F(e,"isEdit",l[8]),g(m,"class","svg-image-del svelte-3obyyy"),g(I,"class","task__menu-btn task__menu-btn_del svelte-3obyyy"),g(u,"class","svg-image-pen svelte-3obyyy"),g(i,"class","task__menu-btn task__menu-btn_edit svelte-3obyyy"),F(i,"isSelect",l[8]),F(i,"isChanged",l[9]),F(i,"isSave",l[10]),g(b,"class","task__circle task__menu svelte-3obyyy"),F(b,"isOpen",l[8]),g(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-3obyyy"),g(h,"style",A=`background-color: ${l[2]}`),F(h,"isOpen",l[8]),g(V,"class","svelte-3obyyy"),g(U,"class","task__info-open svelte-3obyyy"),F(U,"isHidden",l[8]),g(t,"class",z="task "+l[1]+" svelte-3obyyy"),F(t,"isDisabled",l[3]),F(t,"isInfoOpen",l[6]),F(t,"isEdit",l[8])},m(k,y){P(k,t,y),O(t,e),O(e,s),O(s,n),c.m(l[5],n),O(n,o),l[23](o),oe(o,l[0]),O(e,r),O(r,f),O(f,_),O(_,p),l[26](r),O(t,b),O(b,I),O(I,m),O(b,i),O(i,u),O(t,h);for(let q=0;q<C.length;q+=1)C[q].m(h,null);O(t,U),O(U,V),K||(X=[N(o,"input",l[24]),N(o,"input",l[25]),N(o,"keydown",l[19]),N(e,"click",l[14]),N(I,"click",M(l[15])),N(i,"click",M(l[27])),N(U,"click",M(l[29]))],K=!0)},p(k,y){y[0]&32&&c.p(k[5]),y[0]&256&&a!==(a=!k[8])&&(o.disabled=a),y[0]&1&&oe(o,k[0]),y[0]&2048&&F(o,"addTransition",k[11]),y[0]&256&&F(n,"isEdit",k[8]),y[0]&16&&Ce(p,k[4]),y[0]&256&&F(e,"isEdit",k[8]),y[0]&256&&F(i,"isSelect",k[8]),y[0]&512&&F(i,"isChanged",k[9]),y[0]&1024&&F(i,"isSave",k[10]),y[0]&256&&F(b,"isOpen",k[8]),y[0]&139268&&(Y=k[13].filter(k[28]),C=ie(C,y,te,1,k,Y,B,h,Je,qe,null,Ne)),y[0]&4&&A!==(A=`background-color: ${k[2]}`)&&g(h,"style",A),y[0]&256&&F(h,"isOpen",k[8]),y[0]&256&&F(U,"isHidden",k[8]),y[0]&2&&z!==(z="task "+k[1]+" svelte-3obyyy")&&g(t,"class",z),y[0]&10&&F(t,"isDisabled",k[3]),y[0]&66&&F(t,"isInfoOpen",k[6]),y[0]&258&&F(t,"isEdit",k[8])},i:j,o:j,d(k){k&&v(t),l[23](null),l[26](null);for(let y=0;y<C.length;y+=1)C[y].d();K=!1,Fe(X)}}}let Pe=new Set;function it(){Pe.forEach(l=>{l.edit(!1)})}function rt(l,t,e){let s,n;re(l,H,d=>e(31,s=d)),re(l,Ae,d=>e(13,n=d));let{class:c=""}=t,{text:o=""}=t,{color:a="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,p=o,b=!1,I,m=!1,i=!1,u=!1,h=!1,C,B;const A=()=>{if(m===!1){let d=s.map(S=>(f===S.id&&(S.done=!S.done),S));H.set(d)}},U=()=>{let d=s.filter(S=>S.id!=f);H.set(d)};function V(d){e(8,m=d!=null?d:!m),m===!1&&X()}const z=d=>{let S=s.map(D=>(f===D.id&&(D.color=d),D));H.set(S)};function K(d){e(6,b=d!=null?d:!b);let S=0;I.childNodes.forEach(D=>S+=D.clientHeight),I.style.setProperty("--taskInfoHeight",`${b?S:0}px`)}function X(){i&&Y(o).then(()=>{e(5,p=o),e(9,i=!1),clearTimeout(B),e(10,u=!0),B=setTimeout(()=>{e(10,u=!1)},500)})}function Y(d){if(typeof d=="string")return new Promise(S=>{H.set(s.map(D=>(D.id===f&&(D.text=d),D))),S()});throw new Error("The value is not equal to the string")}function te(d){let S=d.ctrlKey?!1:d.metaKey,D=d.keyCode;if(S&&D===83)return d.preventDefault(),X(),!1}function k(d=o){return e(9,i=d!==p)}function y(){e(12,C.rows=1,C);const d=parseFloat(ue(C,"padding-top"))+parseFloat(ue(C,"padding-bottom")),S=C.scrollHeight-d,D=parseFloat(ue(C,"line-height"));D==="normal"&&(D=parseFloat(ue(C,"font-size"))),console.log(S),e(12,C.rows=S/D,C)}$e(()=>{y(),e(11,h=!0)}),Pe.add({save(){X()},edit(d){V(d)}});function q(d){_e[d?"unshift":"push"](()=>{C=d,e(12,C)})}function le(){o=this.value,e(0,o)}const Q=()=>{k(),y()};function se(d){_e[d?"unshift":"push"](()=>{I=d,e(7,I)})}const ne=()=>{m===!1&&it(),V()},ae=d=>d.color!=a,W=()=>K();return l.$$set=d=>{"class"in d&&e(1,c=d.class),"text"in d&&e(0,o=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(22,f=d.id),"date"in d&&e(4,_=d.date)},[o,c,a,r,_,p,b,I,m,i,u,h,C,n,A,U,V,z,K,te,k,y,f,q,le,Q,se,ne,ae,W]}class Ue extends Z{constructor(t){super();G(this,t,rt,ot,We,{class:1,text:0,color:2,disabled:3,id:22,date:4},null,[-1,-1])}}function Ve(l,t,e){const s=l.slice();return s[4]=t[e],s}function Be(l,t,e){const s=l.slice();return s[4]=t[e],s}function Le(l,t){let e,s,n,c,o,a=j,r;return s=new Ue({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=E("li"),J(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=w(e);$(s.$$.fragment,_),_.forEach(v),this.h()},h(){g(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){P(f,e,_),x(s,e,null),r=!0},p(f,_){t=f;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),s.$set(p)},r(){o=e.getBoundingClientRect()},f(){de(e),a(),he(e,o)},a(){a(),a=me(e,o,ke,{duration:300})},i(f){r||(L(s.$$.fragment,f),ge(()=>{c&&c.end(1),n=Ie(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){R(s.$$.fragment,f),n&&n.invalidate(),c=Oe(e,t[2],{key:t[4].id}),r=!1},d(f){f&&v(e),ee(s),f&&c&&c.end()}}}function Re(l,t){let e,s,n,c,o,a=j,r;return s=new Ue({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=E("li"),J(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=w(e);$(s.$$.fragment,_),_.forEach(v),this.h()},h(){g(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){P(f,e,_),x(s,e,null),r=!0},p(f,_){t=f;const p={};_&2&&(p.text=t[4].text),_&2&&(p.color=t[4].color?t[4].color:null),_&2&&(p.id=t[4].id),_&2&&(p.date=t[4].date),s.$set(p)},r(){o=e.getBoundingClientRect()},f(){de(e),a(),he(e,o)},a(){a(),a=me(e,o,ke,{duration:300})},i(f){r||(L(s.$$.fragment,f),ge(()=>{c&&c.end(1),n=Ie(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){R(s.$$.fragment,f),n&&n.invalidate(),c=Oe(e,t[2],{key:t[4].id}),r=!1},d(f){f&&v(e),ee(s),f&&c&&c.end()}}}function ct(l){let t,e,s,n=[],c=new Map,o,a=[],r=new Map,f,_,p=l[1].filter(He);const b=i=>i[4].id;for(let i=0;i<p.length;i+=1){let u=Be(l,p,i),h=b(u);c.set(h,n[i]=Le(h,u))}let I=l[1].filter(Me);const m=i=>i[4].id;for(let i=0;i<I.length;i+=1){let u=Ve(l,I,i),h=m(u);r.set(h,a[i]=Re(h,u))}return{c(){t=E("section"),e=E("div"),s=E("ul");for(let i=0;i<n.length;i+=1)n[i].c();o=E("ul");for(let i=0;i<a.length;i+=1)a[i].c();this.h()},l(i){t=T(i,"SECTION",{class:!0});var u=w(t);e=T(u,"DIV",{class:!0});var h=w(e);s=T(h,"UL",{class:!0});var C=w(s);for(let A=0;A<n.length;A+=1)n[A].l(C);C.forEach(v),o=T(h,"UL",{class:!0});var B=w(o);for(let A=0;A<a.length;A+=1)a[A].l(B);B.forEach(v),h.forEach(v),u.forEach(v),this.h()},h(){g(s,"class","task-section__col"),g(o,"class","task-section__col"),g(e,"class","container task-section__grid svelte-te6j4q"),g(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(i,u){P(i,t,u),O(t,e),O(e,s);for(let h=0;h<n.length;h+=1)n[h].m(s,null);O(e,o);for(let h=0;h<a.length;h+=1)a[h].m(o,null);_=!0},p(i,[u]){if(u&2){p=i[1].filter(He),ve();for(let h=0;h<n.length;h+=1)n[h].r();n=ie(n,u,b,1,i,p,c,s,ye,Le,null,Be);for(let h=0;h<n.length;h+=1)n[h].a();pe()}if(u&2){I=i[1].filter(Me),ve();for(let h=0;h<a.length;h+=1)a[h].r();a=ie(a,u,m,1,i,I,r,o,ye,Re,null,Ve);for(let h=0;h<a.length;h+=1)a[h].a();pe()}(!_||u&1&&f!==(f="task-section "+i[0]+" svelte-te6j4q"))&&g(t,"class",f)},i(i){if(!_){for(let u=0;u<p.length;u+=1)L(n[u]);for(let u=0;u<I.length;u+=1)L(a[u]);_=!0}},o(i){for(let u=0;u<n.length;u+=1)R(n[u]);for(let u=0;u<a.length;u+=1)R(a[u]);_=!1},d(i){i&&v(t);for(let u=0;u<n.length;u+=1)n[u].d();for(let u=0;u<a.length;u+=1)a[u].d()}}}const He=l=>!l.done,Me=l=>l.done;function ut(l,t,e){let s;re(l,H,a=>e(1,s=a));let{class:n=""}=t;const[c,o]=xe({duration:a=>Math.sqrt(a*200),fallback(a,r){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:et,css:p=>`
					transform: ${_} scale(${p});
					opacity: ${p}
				`}}});return l.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,s,c,o]}class ft extends Z{constructor(t){super();G(this,t,ut,ct,ce,{class:0})}}function je(l){let t,e,s,n=l[2].text&&ze(l);return{c(){t=E("button"),n&&n.c(),this.h()},l(c){t=T(c,"BUTTON",{class:!0});var o=w(t);n&&n.l(o),o.forEach(v),this.h()},h(){g(t,"class","btn svelte-1yy2xse")},m(c,o){P(c,t,o),n&&n.m(t,null),e||(s=N(t,"click",M(l[6])),e=!0)},p(c,o){c[2].text?n?n.p(c,o):(n=ze(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&v(t),n&&n.d(),e=!1,s()}}}function ze(l){let t=l[2].text+"",e;return{c(){e=Te(t)},l(s){e=we(s,t)},m(s,n){P(s,e,n)},p(s,n){n&4&&t!==(t=s[2].text+"")&&Ce(e,t)},d(s){s&&v(e)}}}function _t(l){let t,e,s,n,c,o=l[2]&&je(l);return{c(){t=E("div"),e=E("input"),o&&o.c(),this.h()},l(a){t=T(a,"DIV",{class:!0});var r=w(t);e=T(r,"INPUT",{placeholder:!0,class:!0}),o&&o.l(r),r.forEach(v),this.h()},h(){g(e,"placeholder",l[1]),g(e,"class","svelte-1yy2xse"),g(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),F(t,"isError",l[5])},m(a,r){P(a,t,r),O(t,e),oe(e,l[4]),o&&o.m(t,null),l[10](t),n||(c=[N(e,"input",l[9]),N(e,"input",l[7]),N(e,"keydown",l[8])],n=!0)},p(a,[r]){r&2&&g(e,"placeholder",a[1]),r&16&&e.value!==a[4]&&oe(e,a[4]),a[2]?o?o.p(a,r):(o=je(a),o.c(),o.m(t,null)):o&&(o.d(1),o=null),r&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&g(t,"class",s),r&37&&F(t,"isError",a[5])},i:j,o:j,d(a){a&&v(t),o&&o.d(),l[10](null),n=!1,Fe(c)}}}function dt(l,t,e){let{class:s=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,o,a,r=!1;const f=tt(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,r=!0)},p=()=>{e(5,r=!1)},b=i=>{let u=i.key,h=i.ctrlKey,C=i.shiftKey;i.keyCode,h&&C&&f("color"),u==="Enter"&&_()};function I(){a=this.value,e(4,a)}function m(i){_e[i?"unshift":"push"](()=>{o=i,e(3,o)})}return l.$$set=i=>{"class"in i&&e(0,s=i.class),"placeholder"in i&&e(1,n=i.placeholder),"btn"in i&&e(2,c=i.btn)},[s,n,c,o,a,r,_,p,b,I,m]}class ht extends Z{constructor(t){super();G(this,t,dt,_t,ce,{class:0,placeholder:1,btn:2})}}function Ke(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Xe(l,t){let e,s,n,c,o=j,a,r,f;return{key:l,first:null,c(){e=E("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(v),this.h()},h(){g(e,"class","add-todo__color svelte-1hafqlz"),g(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,p){P(_,e,p),a=!0,r||(f=N(e,"click",M(function(){Ee(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,p){t=_,(!a||p&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&g(e,"style",s)},r(){c=e.getBoundingClientRect()},f(){de(e),o(),he(e,c)},a(){o(),o=me(e,c,ke,{})},i(_){a||(ge(()=>{n||(n=Se(e,De,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Se(e,De,{},!1)),n.run(0),a=!1},d(_){_&&v(e),_&&n&&n.end(),r=!1,f()}}}function mt(l){let t,e,s,n,c=[],o=new Map,a,r,f,_,p,b=l[3].filter(l[7]);const I=m=>m[9].id;for(let m=0;m<b.length;m+=1){let i=Ke(l,b,m),u=I(i);o.set(u,c[m]=Xe(u,i))}return a=new ht({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",l[8]),a.$on("submit",l[4]),{c(){t=E("div"),e=E("div"),s=E("span");for(let m=0;m<c.length;m+=1)c[m].c();J(a.$$.fragment),this.h()},l(m){t=T(m,"DIV",{class:!0});var i=w(t);e=T(i,"DIV",{class:!0});var u=w(e);s=T(u,"SPAN",{class:!0,style:!0}),w(s).forEach(v);for(let h=0;h<c.length;h+=1)c[h].l(u);u.forEach(v),$(a.$$.fragment,i),i.forEach(v),this.h()},h(){g(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),g(s,"style",n=`color: ${l[1]}`),g(e,"class","add-todo__color-list svelte-1hafqlz"),F(e,"isOpen",l[2]),g(t,"class",r="add-todo "+l[0]+" svelte-1hafqlz")},m(m,i){P(m,t,i),O(t,e),O(e,s);for(let u=0;u<c.length;u+=1)c[u].m(e,null);x(a,t,null),f=!0,_||(p=N(s,"click",M(l[6])),_=!0)},p(m,[i]){if((!f||i&2&&n!==(n=`color: ${m[1]}`))&&g(s,"style",n),i&42){b=m[3].filter(m[7]),ve();for(let u=0;u<c.length;u+=1)c[u].r();c=ie(c,i,I,1,m,b,o,e,ye,Xe,null,Ke);for(let u=0;u<c.length;u+=1)c[u].a();pe()}i&4&&F(e,"isOpen",m[2]),(!f||i&1&&r!==(r="add-todo "+m[0]+" svelte-1hafqlz"))&&g(t,"class",r)},i(m){if(!f){for(let i=0;i<b.length;i+=1)L(c[i]);L(a.$$.fragment,m),f=!0}},o(m){for(let i=0;i<c.length;i+=1)R(c[i]);R(a.$$.fragment,m),f=!1},d(m){m&&v(t);for(let i=0;i<c.length;i+=1)c[i].d();ee(a),_=!1,p()}}}function gt(l,t,e){let s;re(l,Ae,b=>e(3,s=b));let{class:n=""}=t,c="#0029FF",o=!1;const a=b=>{let I={id:Date.now(),text:b.detail.value,color:c,done:!1,date:at(new Date,"dot")};H.update(m=>m=[I,...m])},r=b=>b&&e(1,c=b),f=()=>e(2,o=!o),_=b=>b.color!=c,p=()=>e(2,o=!o);return l.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,c,o,s,a,r,f,_,p]}class vt extends Z{constructor(t){super();G(this,t,gt,mt,ce,{class:0})}}function pt(l){let t,e,s,n,c,o,a;return n=new vt({}),o=new ft({props:{class:"mt-50"}}),{c(){t=lt(),e=E("section"),s=E("div"),J(n.$$.fragment),J(o.$$.fragment),this.h()},l(r){st('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=nt(r),e=T(r,"SECTION",{class:!0});var _=w(e);s=T(_,"DIV",{class:!0});var p=w(s);$(n.$$.fragment,p),p.forEach(v),_.forEach(v),$(o.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",g(s,"class","container"),g(e,"class",c=""+(l[0]+" mt-50 svelte-110abfo"))},m(r,f){P(r,t,f),P(r,e,f),O(e,s),x(n,s,null),x(o,r,f),a=!0},p(r,[f]){(!a||f&1&&c!==(c=""+(r[0]+" mt-50 svelte-110abfo")))&&g(e,"class",c)},i(r){a||(L(n.$$.fragment,r),L(o.$$.fragment,r),a=!0)},o(r){R(n.$$.fragment,r),R(o.$$.fragment,r),a=!1},d(r){r&&v(t),r&&v(e),ee(n),ee(o,r)}}}function kt(l,t,e){let{class:s=""}=t;return l.$$set=n=>{"class"in n&&e(0,s=n.class)},[s]}class bt extends Z{constructor(t){super();G(this,t,kt,pt,ce,{class:0})}}export{bt as default};
