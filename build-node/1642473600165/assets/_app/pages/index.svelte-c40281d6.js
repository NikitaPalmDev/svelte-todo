import{K as Qe,C as We,S as Z,i as G,L as Ze,e as T,c as y,a as q,d as g,b as k,f as L,D as F,M as N,N as z,O as ye,t as qe,g as we,P as C,Q as re,h as Ce,R as ce,T as Ge,E as K,U as Ie,V as ue,u as Je,W as he,s as fe,v as J,w as $,x,X as ke,Y as me,Z as ge,p as M,_ as ve,$ as Fe,n as R,a0 as Oe,A as ee,m as pe,o as be,a1 as $e,a2 as Ee,a3 as Te,a4 as xe,a5 as et,a6 as De,a7 as Se,j as tt,a8 as lt,l as st}from"../chunks/vendor-6ec25659.js";const j=We([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ae=Qe(j,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let a=l.filter(n=>n.color).map(n=>n.color).concat(e),o=a.filter((n,c)=>a.indexOf(n)===c).map((n,c)=>({id:c,color:n}));t(o)}),nt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},_e=(l,t)=>getComputedStyle(l)[t];function Ne(l,t,e){const s=l.slice();return s[37]=t[e],s}function Le(l,t){let e,s,a,r,o;return{key:l,first:null,c(){e=T("li"),s=T("button"),this.h()},l(n){e=y(n,"LI",{class:!0});var c=q(e);s=y(c,"BUTTON",{class:!0,style:!0}),q(s).forEach(g),c.forEach(g),this.h()},h(){k(s,"class","task__color-btn svelte-50kkq7"),k(s,"style",a=`background-color: ${t[37].color}`),k(e,"class","task__color-item svelte-50kkq7"),this.first=e},m(n,c){L(n,e,c),F(e,s),r||(o=N(s,"click",z(function(){ye(t[17](t[37].color))&&t[17](t[37].color).apply(this,arguments)})),r=!0)},p(n,c){t=n,c[0]&8196&&a!==(a=`background-color: ${t[37].color}`)&&k(s,"style",a)},d(n){n&&g(e),r=!1,o()}}}function at(l){let t,e,s,a,r,o,n,c,f,_,v,E,I,m,i,u,h,w=[],U=new Map,S,V,H,B,X,Y,P=l[13].filter(l[29]);const te=p=>p[37].id;for(let p=0;p<P.length;p+=1){let b=Ne(l,P,p),A=te(b);U.set(A,w[p]=Le(A,b))}return{c(){t=T("article"),e=T("div"),s=T("div"),a=T("div"),r=T("p"),o=T("textarea"),c=T("div"),f=T("div"),_=T("span"),v=qe(l[4]),E=T("div"),I=T("button"),m=T("span"),i=T("button"),u=T("span"),h=T("ul");for(let p=0;p<w.length;p+=1)w[p].c();V=T("button"),H=T("span"),this.h()},l(p){t=y(p,"ARTICLE",{class:!0});var b=q(t);e=y(b,"DIV",{class:!0});var A=q(e);s=y(A,"DIV",{class:!0});var le=q(s);a=y(le,"DIV",{class:!0});var Q=q(a);r=y(Q,"P",{class:!0});var de=q(r);de.forEach(g),o=y(Q,"TEXTAREA",{class:!0}),q(o).forEach(g),Q.forEach(g),le.forEach(g),c=y(A,"DIV",{class:!0});var se=q(c);f=y(se,"DIV",{class:!0});var ne=q(f);_=y(ne,"SPAN",{class:!0});var ae=q(_);v=we(ae,l[4]),ae.forEach(g),ne.forEach(g),se.forEach(g),A.forEach(g),E=y(b,"DIV",{class:!0});var W=q(E);I=y(W,"BUTTON",{class:!0});var oe=q(I);m=y(oe,"SPAN",{class:!0}),q(m).forEach(g),oe.forEach(g),i=y(W,"BUTTON",{class:!0});var ie=q(i);u=y(ie,"SPAN",{class:!0}),q(u).forEach(g),ie.forEach(g),W.forEach(g),h=y(b,"UL",{class:!0,style:!0});var d=q(h);for(let D=0;D<w.length;D+=1)w[D].l(d);d.forEach(g),V=y(b,"BUTTON",{class:!0});var O=q(V);H=y(O,"SPAN",{class:!0}),q(H).forEach(g),O.forEach(g),b.forEach(g),this.h()},h(){k(r,"class","task__main-content addTransition svelte-50kkq7"),C(r,"isEdit",l[8]),k(o,"class","task__main-content svelte-50kkq7"),o.disabled=n=!l[8],C(o,"addTransition",l[11]),k(a,"class","task__main-content-wrapper svelte-50kkq7"),k(s,"class","task__main-container svelte-50kkq7"),k(_,"class","svelte-50kkq7"),k(f,"class","task__info-content svelte-50kkq7"),k(c,"class","task__info svelte-50kkq7"),k(e,"class","task__main svelte-50kkq7"),C(e,"isEdit",l[8]),k(m,"class","svg-image-del svelte-50kkq7"),k(I,"class","task__menu-btn task__menu-btn_del svelte-50kkq7"),k(u,"class","svg-image-pen svelte-50kkq7"),k(i,"class","task__menu-btn task__menu-btn_edit svelte-50kkq7"),C(i,"isSelect",l[8]),C(i,"isChanged",l[9]),C(i,"isSave",l[10]),k(E,"class","task__circle task__menu svelte-50kkq7"),C(E,"isOpen",l[8]),k(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-50kkq7"),k(h,"style",S=`background-color: ${l[2]}`),C(h,"isOpen",l[8]),k(H,"class","svelte-50kkq7"),k(V,"class","task__info-open svelte-50kkq7"),C(V,"isHidden",l[8]),k(t,"class",B="task "+l[1]+" svelte-50kkq7"),C(t,"isDisabled",l[3]),C(t,"isInfoOpen",l[6]),C(t,"isEdit",l[8])},m(p,b){L(p,t,b),F(t,e),F(e,s),F(s,a),F(a,r),r.innerHTML=l[5],F(a,o),l[23](o),re(o,l[0]),F(e,c),F(c,f),F(f,_),F(_,v),l[27](c),F(t,E),F(E,I),F(I,m),F(E,i),F(i,u),F(t,h);for(let A=0;A<w.length;A+=1)w[A].m(h,null);F(t,V),F(V,H),X||(Y=[N(o,"input",l[24]),N(o,"input",l[25]),N(o,"keydown",l[26]),N(e,"click",l[14]),N(I,"click",z(l[15])),N(i,"click",z(l[28])),N(V,"click",z(l[30]))],X=!0)},p(p,b){b[0]&32&&(r.innerHTML=p[5]),b[0]&256&&C(r,"isEdit",p[8]),b[0]&256&&n!==(n=!p[8])&&(o.disabled=n),b[0]&1&&re(o,p[0]),b[0]&2048&&C(o,"addTransition",p[11]),b[0]&16&&Ce(v,p[4]),b[0]&256&&C(e,"isEdit",p[8]),b[0]&256&&C(i,"isSelect",p[8]),b[0]&512&&C(i,"isChanged",p[9]),b[0]&1024&&C(i,"isSave",p[10]),b[0]&256&&C(E,"isOpen",p[8]),b[0]&139268&&(P=p[13].filter(p[29]),w=ce(w,b,te,1,p,P,U,h,Ge,Le,null,Ne)),b[0]&4&&S!==(S=`background-color: ${p[2]}`)&&k(h,"style",S),b[0]&256&&C(h,"isOpen",p[8]),b[0]&256&&C(V,"isHidden",p[8]),b[0]&2&&B!==(B="task "+p[1]+" svelte-50kkq7")&&k(t,"class",B),b[0]&10&&C(t,"isDisabled",p[3]),b[0]&66&&C(t,"isInfoOpen",p[6]),b[0]&258&&C(t,"isEdit",p[8])},i:K,o:K,d(p){p&&g(t),l[23](null),l[27](null);for(let b=0;b<w.length;b+=1)w[b].d();X=!1,Ie(Y)}}}let Ve=new Set;function ot(){Ve.forEach(l=>{l.edit(!1)})}function it(l,t,e){let s,a;ue(l,j,d=>e(33,s=d)),ue(l,Ae,d=>e(13,a=d));let{class:r=""}=t,{text:o=""}=t,{color:n="#0029FF"}=t,{disabled:c=!1}=t,{id:f=null}=t,{date:_=""}=t,v=o,E=!1,I,m=!1,i=!1,u=!1,h=!1,w,U,S;const V=()=>{if(m===!1){let d=s.map(O=>(f===O.id&&(O.done=!O.done),O));j.set(d)}},H=()=>{let d=s.filter(O=>O.id!=f);j.set(d)};function B(d){e(8,m=d!=null?d:!m),m===!1&&P()}const X=d=>{let O=s.map(D=>(f===D.id&&(D.color=d),D));j.set(O)};function Y(d){e(6,E=d!=null?d:!E);let O=0;I.childNodes.forEach(D=>O+=D.clientHeight),I.style.setProperty("--taskInfoHeight",`${E?O:0}px`)}function P(){i&&te(o).then(()=>{e(9,i=!1),clearTimeout(U),e(10,u=!0),U=setTimeout(()=>{e(10,u=!1)},500)})}function te(d){if(typeof d=="string")return new Promise(O=>{le(),j.set(s.map(D=>(D.id===f&&(D.text=d),D))),O()});throw new Error("The value is not equal to the string")}function p(d){let O=d.ctrlKey?!1:d.metaKey,D=d.keyCode;if(O&&D===83)return d.preventDefault(),P(),!1;clearTimeout(S),S=setTimeout(()=>P(),5e3)}function b(d=o){return e(9,i=d!==v)}function A(){e(12,w.rows=1,w);const d=parseFloat(_e(w,"padding-top"))+parseFloat(_e(w,"padding-bottom")),O=w.scrollHeight-d,D=parseFloat(_e(w,"line-height"));D==="normal"&&(D=parseFloat(_e(w,"font-size"))),e(12,w.rows=O/D,w)}function le(){e(5,v=o.split(`
`).join("<br/>"))}Je(()=>{A(),e(11,h=!0)}),Ve.add({save(){P()},edit(d){B(d)}});function Q(d){he[d?"unshift":"push"](()=>{w=d,e(12,w)})}function de(){o=this.value,e(0,o)}const se=()=>{b(),A()},ne=d=>{p(d),A()};function ae(d){he[d?"unshift":"push"](()=>{I=d,e(7,I)})}const W=()=>{m===!1&&ot(),B()},oe=d=>d.color!=n,ie=()=>Y();return l.$$set=d=>{"class"in d&&e(1,r=d.class),"text"in d&&e(0,o=d.text),"color"in d&&e(2,n=d.color),"disabled"in d&&e(3,c=d.disabled),"id"in d&&e(22,f=d.id),"date"in d&&e(4,_=d.date)},[o,r,n,c,_,v,E,I,m,i,u,h,w,a,V,H,B,X,Y,p,b,A,f,Q,de,se,ne,ae,W,oe,ie]}class Pe extends Z{constructor(t){super();G(this,t,it,at,Ze,{class:1,text:0,color:2,disabled:3,id:22,date:4},null,[-1,-1])}}function Ue(l,t,e){const s=l.slice();return s[4]=t[e],s}function Be(l,t,e){const s=l.slice();return s[4]=t[e],s}function Me(l,t){let e,s,a,r,o,n=K,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),J(s.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=q(e);$(s.$$.fragment,_),_.forEach(g),this.h()},h(){k(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),x(s,e,null),c=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),s.$set(v)},r(){o=e.getBoundingClientRect()},f(){ke(e),n(),me(e,o)},a(){n(),n=ge(e,o,Ee,{duration:300})},i(f){c||(M(s.$$.fragment,f),ve(()=>{r&&r.end(1),a=Fe(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){R(s.$$.fragment,f),a&&a.invalidate(),r=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&g(e),ee(s),f&&r&&r.end()}}}function Re(l,t){let e,s,a,r,o,n=K,c;return s=new Pe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),J(s.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=q(e);$(s.$$.fragment,_),_.forEach(g),this.h()},h(){k(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),x(s,e,null),c=!0},p(f,_){t=f;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),s.$set(v)},r(){o=e.getBoundingClientRect()},f(){ke(e),n(),me(e,o)},a(){n(),n=ge(e,o,Ee,{duration:300})},i(f){c||(M(s.$$.fragment,f),ve(()=>{r&&r.end(1),a=Fe(e,t[3],{key:t[4].id}),a.start()}),c=!0)},o(f){R(s.$$.fragment,f),a&&a.invalidate(),r=Oe(e,t[2],{key:t[4].id}),c=!1},d(f){f&&g(e),ee(s),f&&r&&r.end()}}}function rt(l){let t,e,s,a=[],r=new Map,o,n=[],c=new Map,f,_,v=l[1].filter(je);const E=i=>i[4].id;for(let i=0;i<v.length;i+=1){let u=Be(l,v,i),h=E(u);r.set(h,a[i]=Me(h,u))}let I=l[1].filter(He);const m=i=>i[4].id;for(let i=0;i<I.length;i+=1){let u=Ue(l,I,i),h=m(u);c.set(h,n[i]=Re(h,u))}return{c(){t=T("section"),e=T("div"),s=T("ul");for(let i=0;i<a.length;i+=1)a[i].c();o=T("ul");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){t=y(i,"SECTION",{class:!0});var u=q(t);e=y(u,"DIV",{class:!0});var h=q(e);s=y(h,"UL",{class:!0});var w=q(s);for(let S=0;S<a.length;S+=1)a[S].l(w);w.forEach(g),o=y(h,"UL",{class:!0});var U=q(o);for(let S=0;S<n.length;S+=1)n[S].l(U);U.forEach(g),h.forEach(g),u.forEach(g),this.h()},h(){k(s,"class","task-section__col"),k(o,"class","task-section__col"),k(e,"class","container task-section__grid svelte-te6j4q"),k(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(i,u){L(i,t,u),F(t,e),F(e,s);for(let h=0;h<a.length;h+=1)a[h].m(s,null);F(e,o);for(let h=0;h<n.length;h+=1)n[h].m(o,null);_=!0},p(i,[u]){if(u&2){v=i[1].filter(je),pe();for(let h=0;h<a.length;h+=1)a[h].r();a=ce(a,u,E,1,i,v,r,s,Te,Me,null,Be);for(let h=0;h<a.length;h+=1)a[h].a();be()}if(u&2){I=i[1].filter(He),pe();for(let h=0;h<n.length;h+=1)n[h].r();n=ce(n,u,m,1,i,I,c,o,Te,Re,null,Ue);for(let h=0;h<n.length;h+=1)n[h].a();be()}(!_||u&1&&f!==(f="task-section "+i[0]+" svelte-te6j4q"))&&k(t,"class",f)},i(i){if(!_){for(let u=0;u<v.length;u+=1)M(a[u]);for(let u=0;u<I.length;u+=1)M(n[u]);_=!0}},o(i){for(let u=0;u<a.length;u+=1)R(a[u]);for(let u=0;u<n.length;u+=1)R(n[u]);_=!1},d(i){i&&g(t);for(let u=0;u<a.length;u+=1)a[u].d();for(let u=0;u<n.length;u+=1)n[u].d()}}}const je=l=>!l.done,He=l=>l.done;function ct(l,t,e){let s;ue(l,j,n=>e(1,s=n));let{class:a=""}=t;const[r,o]=$e({duration:n=>Math.sqrt(n*200),fallback(n,c){const f=getComputedStyle(n),_=f.transform==="none"?"":f.transform;return{duration:600,easing:xe,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return l.$$set=n=>{"class"in n&&e(0,a=n.class)},[a,s,r,o]}class ut extends Z{constructor(t){super();G(this,t,ct,rt,fe,{class:0})}}function ze(l){let t,e,s,a=l[2].text&&Ke(l);return{c(){t=T("button"),a&&a.c(),this.h()},l(r){t=y(r,"BUTTON",{class:!0});var o=q(t);a&&a.l(o),o.forEach(g),this.h()},h(){k(t,"class","btn svelte-1yy2xse")},m(r,o){L(r,t,o),a&&a.m(t,null),e||(s=N(t,"click",z(l[6])),e=!0)},p(r,o){r[2].text?a?a.p(r,o):(a=Ke(r),a.c(),a.m(t,null)):a&&(a.d(1),a=null)},d(r){r&&g(t),a&&a.d(),e=!1,s()}}}function Ke(l){let t=l[2].text+"",e;return{c(){e=qe(t)},l(s){e=we(s,t)},m(s,a){L(s,e,a)},p(s,a){a&4&&t!==(t=s[2].text+"")&&Ce(e,t)},d(s){s&&g(e)}}}function ft(l){let t,e,s,a,r,o=l[2]&&ze(l);return{c(){t=T("div"),e=T("input"),o&&o.c(),this.h()},l(n){t=y(n,"DIV",{class:!0});var c=q(t);e=y(c,"INPUT",{placeholder:!0,class:!0}),o&&o.l(c),c.forEach(g),this.h()},h(){k(e,"placeholder",l[1]),k(e,"class","svelte-1yy2xse"),k(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),C(t,"isError",l[5])},m(n,c){L(n,t,c),F(t,e),re(e,l[4]),o&&o.m(t,null),l[10](t),a||(r=[N(e,"input",l[9]),N(e,"input",l[7]),N(e,"keydown",l[8])],a=!0)},p(n,[c]){c&2&&k(e,"placeholder",n[1]),c&16&&e.value!==n[4]&&re(e,n[4]),n[2]?o?o.p(n,c):(o=ze(n),o.c(),o.m(t,null)):o&&(o.d(1),o=null),c&5&&s!==(s="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-1yy2xse")&&k(t,"class",s),c&37&&C(t,"isError",n[5])},i:K,o:K,d(n){n&&g(t),o&&o.d(),l[10](null),a=!1,Ie(r)}}}function _t(l,t,e){let{class:s=""}=t,{placeholder:a="Placeholer"}=t,{btn:r=null}=t,o,n,c=!1;const f=et(),_=()=>{n?(f("submit",{value:n}),e(4,n="")):e(5,c=!0)},v=()=>{e(5,c=!1)},E=i=>{let u=i.key,h=i.ctrlKey,w=i.shiftKey;i.keyCode,h&&w&&f("color"),u==="Enter"&&_()};function I(){n=this.value,e(4,n)}function m(i){he[i?"unshift":"push"](()=>{o=i,e(3,o)})}return l.$$set=i=>{"class"in i&&e(0,s=i.class),"placeholder"in i&&e(1,a=i.placeholder),"btn"in i&&e(2,r=i.btn)},[s,a,r,o,n,c,_,v,E,I,m]}class dt extends Z{constructor(t){super();G(this,t,_t,ft,fe,{class:0,placeholder:1,btn:2})}}function Xe(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Ye(l,t){let e,s,a,r,o=K,n,c,f;return{key:l,first:null,c(){e=T("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),q(e).forEach(g),this.h()},h(){k(e,"class","add-todo__color svelte-1hafqlz"),k(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){L(_,e,v),n=!0,c||(f=N(e,"click",z(function(){ye(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(_,v){t=_,(!n||v&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&k(e,"style",s)},r(){r=e.getBoundingClientRect()},f(){ke(e),o(),me(e,r)},a(){o(),o=ge(e,r,Ee,{})},i(_){n||(ve(()=>{a||(a=De(e,Se,{},!0)),a.run(1)}),n=!0)},o(_){a||(a=De(e,Se,{},!1)),a.run(0),n=!1},d(_){_&&g(e),_&&a&&a.end(),c=!1,f()}}}function ht(l){let t,e,s,a,r=[],o=new Map,n,c,f,_,v,E=l[3].filter(l[7]);const I=m=>m[9].id;for(let m=0;m<E.length;m+=1){let i=Xe(l,E,m),u=I(i);o.set(u,r[m]=Ye(u,i))}return n=new dt({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("color",l[8]),n.$on("submit",l[4]),{c(){t=T("div"),e=T("div"),s=T("span");for(let m=0;m<r.length;m+=1)r[m].c();J(n.$$.fragment),this.h()},l(m){t=y(m,"DIV",{class:!0});var i=q(t);e=y(i,"DIV",{class:!0});var u=q(e);s=y(u,"SPAN",{class:!0,style:!0}),q(s).forEach(g);for(let h=0;h<r.length;h+=1)r[h].l(u);u.forEach(g),$(n.$$.fragment,i),i.forEach(g),this.h()},h(){k(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),k(s,"style",a=`color: ${l[1]}`),k(e,"class","add-todo__color-list svelte-1hafqlz"),C(e,"isOpen",l[2]),k(t,"class",c="add-todo "+l[0]+" svelte-1hafqlz")},m(m,i){L(m,t,i),F(t,e),F(e,s);for(let u=0;u<r.length;u+=1)r[u].m(e,null);x(n,t,null),f=!0,_||(v=N(s,"click",z(l[6])),_=!0)},p(m,[i]){if((!f||i&2&&a!==(a=`color: ${m[1]}`))&&k(s,"style",a),i&42){E=m[3].filter(m[7]),pe();for(let u=0;u<r.length;u+=1)r[u].r();r=ce(r,i,I,1,m,E,o,e,Te,Ye,null,Xe);for(let u=0;u<r.length;u+=1)r[u].a();be()}i&4&&C(e,"isOpen",m[2]),(!f||i&1&&c!==(c="add-todo "+m[0]+" svelte-1hafqlz"))&&k(t,"class",c)},i(m){if(!f){for(let i=0;i<E.length;i+=1)M(r[i]);M(n.$$.fragment,m),f=!0}},o(m){for(let i=0;i<r.length;i+=1)R(r[i]);R(n.$$.fragment,m),f=!1},d(m){m&&g(t);for(let i=0;i<r.length;i+=1)r[i].d();ee(n),_=!1,v()}}}function kt(l,t,e){let s;ue(l,Ae,E=>e(3,s=E));let{class:a=""}=t,r="#0029FF",o=!1;const n=E=>{let I={id:Date.now(),text:E.detail.value,color:r,done:!1,date:nt(new Date,"dot")};j.update(m=>m=[I,...m])},c=E=>E&&e(1,r=E),f=()=>e(2,o=!o),_=E=>E.color!=r,v=()=>e(2,o=!o);return l.$$set=E=>{"class"in E&&e(0,a=E.class)},[a,r,o,s,n,c,f,_,v]}class mt extends Z{constructor(t){super();G(this,t,kt,ht,fe,{class:0})}}function gt(l){let t,e,s,a,r,o,n;return a=new mt({}),o=new ut({props:{class:"mt-50"}}),{c(){t=tt(),e=T("section"),s=T("div"),J(a.$$.fragment),J(o.$$.fragment),this.h()},l(c){lt('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=st(c),e=y(c,"SECTION",{class:!0});var _=q(e);s=y(_,"DIV",{class:!0});var v=q(s);$(a.$$.fragment,v),v.forEach(g),_.forEach(g),$(o.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",k(s,"class","container"),k(e,"class",r=""+(l[0]+" mt-50 svelte-110abfo"))},m(c,f){L(c,t,f),L(c,e,f),F(e,s),x(a,s,null),x(o,c,f),n=!0},p(c,[f]){(!n||f&1&&r!==(r=""+(c[0]+" mt-50 svelte-110abfo")))&&k(e,"class",r)},i(c){n||(M(a.$$.fragment,c),M(o.$$.fragment,c),n=!0)},o(c){R(a.$$.fragment,c),R(o.$$.fragment,c),n=!1},d(c){c&&g(t),c&&g(e),ee(a),ee(o,c)}}}function vt(l,t,e){let{class:s=""}=t;return l.$$set=a=>{"class"in a&&e(0,s=a.class)},[s]}class bt extends Z{constructor(t){super();G(this,t,vt,gt,fe,{class:0})}}export{bt as default};
