import{K as Ce,C as le,S as U,i as V,s as B,e as b,c as y,a as T,d as p,b as k,f as A,D as I,L as N,M as j,N as se,t as ne,g as oe,O as K,h as ae,P as Q,Q as Fe,E as S,R as re,T as L,v as q,w as M,x as P,U as X,V as Y,W as Z,p as F,X as z,Y as ie,n as D,Z as ce,A as R,m as G,o as H,_ as De,$ as J,a0 as $,a1 as Ne,a2 as ue,a3 as Se,a4 as Oe,a5 as fe,a6 as _e,j as Ue,a7 as Ve,l as Be}from"../chunks/vendor-935e33b2.js";const O=le([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),de=Ce(O,(o,t)=>{let e=o.filter(a=>a.color).map(a=>a.color),s=e.filter((a,r)=>e.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(s)}),Le=le(["#0029FF","#FF9900","#AD00FF","#000000"]);function he(o,t,e){const l=o.slice();return l[11]=t[e],l}function me(o,t){let e,l,s,a,r;return{key:o,first:null,c(){e=b("li"),l=b("button"),this.h()},l(n){e=y(n,"LI",{class:!0});var i=T(e);l=y(i,"BUTTON",{class:!0,style:!0}),T(l).forEach(p),i.forEach(p),this.h()},h(){k(l,"class","task__color-btn svelte-100588h"),k(l,"style",s=`background-color: ${t[11].color}`),k(e,"class","task__color-item svelte-100588h"),this.first=e},m(n,i){A(n,e,i),I(e,l),a||(r=N(l,"click",j(function(){se(t[7](t[11].color))&&t[7](t[11].color).apply(this,arguments)})),a=!0)},p(n,i){t=n,i&20&&s!==(s=`background-color: ${t[11].color}`)&&k(l,"style",s)},d(n){n&&p(e),a=!1,r()}}}function qe(o){let t,e,l,s,a,r,n,i,c=[],d=new Map,g,_,v,u,h=o[4].filter(o[9]);const m=f=>f[11].id;for(let f=0;f<h.length;f+=1){let E=he(o,h,f),w=m(E);d.set(w,c[f]=me(w,E))}return{c(){t=b("div"),e=b("div"),l=b("p"),s=ne(o[1]),a=b("div"),r=b("button"),n=b("span"),i=b("ul");for(let f=0;f<c.length;f+=1)c[f].c();this.h()},l(f){t=y(f,"DIV",{class:!0});var E=T(t);e=y(E,"DIV",{class:!0});var w=T(e);l=y(w,"P",{class:!0});var C=T(l);s=oe(C,o[1]),C.forEach(p),w.forEach(p),a=y(E,"DIV",{class:!0});var x=T(a);r=y(x,"BUTTON",{class:!0});var ee=T(r);n=y(ee,"SPAN",{class:!0}),T(n).forEach(p),ee.forEach(p),x.forEach(p),i=y(E,"UL",{class:!0,style:!0});var te=T(i);for(let W=0;W<c.length;W+=1)c[W].l(te);te.forEach(p),E.forEach(p),this.h()},h(){k(l,"class","svelte-100588h"),k(e,"class","task__main svelte-100588h"),k(n,"class","svg-image-del svelte-100588h"),k(r,"class","task__menu-btn task__menu-btn_del svelte-100588h"),k(a,"class","task__circle task__menu svelte-100588h"),k(i,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),k(i,"style",g=`background-color: ${o[2]}`),k(t,"class",_="task "+o[0]+" svelte-100588h"),K(t,"isDisabled",o[3])},m(f,E){A(f,t,E),I(t,e),I(e,l),I(l,s),I(t,a),I(a,r),I(r,n),I(t,i);for(let w=0;w<c.length;w+=1)c[w].m(i,null);v||(u=[N(e,"click",o[5]),N(r,"click",j(o[6]))],v=!0)},p(f,[E]){E&2&&ae(s,f[1]),E&148&&(h=f[4].filter(f[9]),c=Q(c,E,m,1,f,h,d,i,Fe,me,null,he)),E&4&&g!==(g=`background-color: ${f[2]}`)&&k(i,"style",g),E&1&&_!==(_="task "+f[0]+" svelte-100588h")&&k(t,"class",_),E&9&&K(t,"isDisabled",f[3])},i:S,o:S,d(f){f&&p(t);for(let E=0;E<c.length;E+=1)c[E].d();v=!1,re(u)}}}function Me(o,t,e){let l,s;L(o,O,u=>e(10,l=u)),L(o,de,u=>e(4,s=u));let{class:a=""}=t,{text:r=""}=t,{color:n="#0029FF"}=t,{disabled:i=!1}=t,{id:c=null}=t;const d=()=>{let u=l.map(h=>(c===h.id&&(h.done=!h.done),h));O.set(u)},g=()=>{let u=l.filter(h=>h.id!=c);O.set(u),console.log("del",c)},_=u=>{let h=l.map(m=>(c===m.id&&(m.color=u),m));O.set(h)},v=u=>u.color!=n;return o.$$set=u=>{"class"in u&&e(0,a=u.class),"text"in u&&e(1,r=u.text),"color"in u&&e(2,n=u.color),"disabled"in u&&e(3,i=u.disabled),"id"in u&&e(8,c=u.id)},[a,r,n,i,s,d,g,_,c,v]}class ve extends U{constructor(t){super();V(this,t,Me,qe,B,{class:0,text:1,color:2,disabled:3,id:8})}}function ge(o,t,e){const l=o.slice();return l[4]=t[e],l}function ke(o,t,e){const l=o.slice();return l[4]=t[e],l}function pe(o,t){let e,l,s,a,r,n=S,i;return l=new ve({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:o,first:null,c(){e=b("li"),q(l.$$.fragment),this.h()},l(c){e=y(c,"LI",{class:!0});var d=T(e);M(l.$$.fragment,d),d.forEach(p),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(c,d){A(c,e,d),P(l,e,null),i=!0},p(c,d){t=c;const g={};d&2&&(g.text=t[4].text),d&2&&(g.color=t[4].color?t[4].color:null),d&2&&(g.id=t[4].id),l.$set(g)},r(){r=e.getBoundingClientRect()},f(){X(e),n(),Y(e,r)},a(){n(),n=Z(e,r,J,{duration:300})},i(c){i||(F(l.$$.fragment,c),z(()=>{a&&a.end(1),s=ie(e,t[3],{key:t[4].id}),s.start()}),i=!0)},o(c){D(l.$$.fragment,c),s&&s.invalidate(),a=ce(e,t[2],{key:t[4].id}),i=!1},d(c){c&&p(e),R(l),c&&a&&a.end()}}}function be(o,t){let e,l,s,a,r,n=S,i;return l=new ve({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:o,first:null,c(){e=b("li"),q(l.$$.fragment),this.h()},l(c){e=y(c,"LI",{class:!0});var d=T(e);M(l.$$.fragment,d),d.forEach(p),this.h()},h(){k(e,"class","task-section__item"),this.first=e},m(c,d){A(c,e,d),P(l,e,null),i=!0},p(c,d){t=c;const g={};d&2&&(g.text=t[4].text),d&2&&(g.color=t[4].color?t[4].color:null),d&2&&(g.id=t[4].id),l.$set(g)},r(){r=e.getBoundingClientRect()},f(){X(e),n(),Y(e,r)},a(){n(),n=Z(e,r,J,{duration:300})},i(c){i||(F(l.$$.fragment,c),z(()=>{a&&a.end(1),s=ie(e,t[3],{key:t[4].id}),s.start()}),i=!0)},o(c){D(l.$$.fragment,c),s&&s.invalidate(),a=ce(e,t[2],{key:t[4].id}),i=!1},d(c){c&&p(e),R(l),c&&a&&a.end()}}}function Pe(o){let t,e,l,s=[],a=new Map,r,n=[],i=new Map,c,d,g=o[1].filter(ye);const _=h=>h[4].id;for(let h=0;h<g.length;h+=1){let m=ke(o,g,h),f=_(m);a.set(f,s[h]=pe(f,m))}let v=o[1].filter(Ee);const u=h=>h[4].id;for(let h=0;h<v.length;h+=1){let m=ge(o,v,h),f=u(m);i.set(f,n[h]=be(f,m))}return{c(){t=b("section"),e=b("div"),l=b("ul");for(let h=0;h<s.length;h+=1)s[h].c();r=b("ul");for(let h=0;h<n.length;h+=1)n[h].c();this.h()},l(h){t=y(h,"SECTION",{class:!0});var m=T(t);e=y(m,"DIV",{class:!0});var f=T(e);l=y(f,"UL",{class:!0});var E=T(l);for(let C=0;C<s.length;C+=1)s[C].l(E);E.forEach(p),r=y(f,"UL",{class:!0});var w=T(r);for(let C=0;C<n.length;C+=1)n[C].l(w);w.forEach(p),f.forEach(p),m.forEach(p),this.h()},h(){k(l,"class","task-section__col"),k(r,"class","task-section__col"),k(e,"class","container task-section__grid svelte-1rib3cm"),k(t,"class",c="task-section "+o[0]+" svelte-1rib3cm")},m(h,m){A(h,t,m),I(t,e),I(e,l);for(let f=0;f<s.length;f+=1)s[f].m(l,null);I(e,r);for(let f=0;f<n.length;f+=1)n[f].m(r,null);d=!0},p(h,[m]){if(m&2){g=h[1].filter(ye),G();for(let f=0;f<s.length;f+=1)s[f].r();s=Q(s,m,_,1,h,g,a,l,$,pe,null,ke);for(let f=0;f<s.length;f+=1)s[f].a();H()}if(m&2){v=h[1].filter(Ee),G();for(let f=0;f<n.length;f+=1)n[f].r();n=Q(n,m,u,1,h,v,i,r,$,be,null,ge);for(let f=0;f<n.length;f+=1)n[f].a();H()}(!d||m&1&&c!==(c="task-section "+h[0]+" svelte-1rib3cm"))&&k(t,"class",c)},i(h){if(!d){for(let m=0;m<g.length;m+=1)F(s[m]);for(let m=0;m<v.length;m+=1)F(n[m]);d=!0}},o(h){for(let m=0;m<s.length;m+=1)D(s[m]);for(let m=0;m<n.length;m+=1)D(n[m]);d=!1},d(h){h&&p(t);for(let m=0;m<s.length;m+=1)s[m].d();for(let m=0;m<n.length;m+=1)n[m].d()}}}const ye=o=>!o.done,Ee=o=>o.done;function Re(o,t,e){let l;L(o,O,n=>e(1,l=n));let{class:s=""}=t;const[a,r]=De({duration:n=>Math.sqrt(n*200),fallback(n,i){const c=getComputedStyle(n),d=c.transform==="none"?"":c.transform;return{duration:600,easing:Ne,css:g=>`
					transform: ${d} scale(${g});
					opacity: ${g}
				`}}});return o.$$set=n=>{"class"in n&&e(0,s=n.class)},[s,l,a,r]}class je extends U{constructor(t){super();V(this,t,Re,Pe,B,{class:0})}}function Te(o){let t,e,l,s=o[2].text&&Ie(o);return{c(){t=b("button"),s&&s.c(),this.h()},l(a){t=y(a,"BUTTON",{class:!0});var r=T(t);s&&s.l(r),r.forEach(p),this.h()},h(){k(t,"class","btn svelte-12pihab")},m(a,r){A(a,t,r),s&&s.m(t,null),e||(l=N(t,"click",j(o[6])),e=!0)},p(a,r){a[2].text?s?s.p(a,r):(s=Ie(a),s.c(),s.m(t,null)):s&&(s.d(1),s=null)},d(a){a&&p(t),s&&s.d(),e=!1,l()}}}function Ie(o){let t=o[2].text+"",e;return{c(){e=ne(t)},l(l){e=oe(l,t)},m(l,s){A(l,e,s)},p(l,s){s&4&&t!==(t=l[2].text+"")&&ae(e,t)},d(l){l&&p(e)}}}function Ke(o){let t,e,l,s,a,r=o[2]&&Te(o);return{c(){t=b("div"),e=b("input"),r&&r.c(),this.h()},l(n){t=y(n,"DIV",{class:!0});var i=T(t);e=y(i,"INPUT",{placeholder:!0,class:!0}),r&&r.l(i),i.forEach(p),this.h()},h(){k(e,"placeholder",o[1]),k(e,"class","svelte-12pihab"),k(t,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),K(t,"isError",o[5])},m(n,i){A(n,t,i),I(t,e),ue(e,o[4]),r&&r.m(t,null),o[9](t),s||(a=[N(e,"input",o[8]),N(e,"input",o[7])],s=!0)},p(n,[i]){i&2&&k(e,"placeholder",n[1]),i&16&&e.value!==n[4]&&ue(e,n[4]),n[2]?r?r.p(n,i):(r=Te(n),r.c(),r.m(t,null)):r&&(r.d(1),r=null),i&5&&l!==(l="input-group "+n[0]+" "+(n[2]?"input-group_btn":"")+" svelte-12pihab")&&k(t,"class",l),i&37&&K(t,"isError",n[5])},i:S,o:S,d(n){n&&p(t),r&&r.d(),o[9](null),s=!1,re(a)}}}function Qe(o,t,e){let{class:l=""}=t,{placeholder:s="Placeholer"}=t,{btn:a=null}=t,r,n,i=!1;const c=Se(),d=()=>{n?(c("submit",{value:n}),e(4,n="")):e(5,i=!0)},g=()=>{e(5,i=!1)};function _(){n=this.value,e(4,n)}function v(u){Oe[u?"unshift":"push"](()=>{r=u,e(3,r)})}return o.$$set=u=>{"class"in u&&e(0,l=u.class),"placeholder"in u&&e(1,s=u.placeholder),"btn"in u&&e(2,a=u.btn)},[l,s,a,r,n,i,d,g,_,v]}class We extends U{constructor(t){super();V(this,t,Qe,Ke,B,{class:0,placeholder:1,btn:2})}}function we(o,t,e){const l=o.slice();return l[9]=t[e],l[11]=e,l}function Ae(o,t){let e,l,s,a,r=S,n,i,c;return{key:o,first:null,c(){e=b("button"),this.h()},l(d){e=y(d,"BUTTON",{class:!0,style:!0}),T(e).forEach(p),this.h()},h(){k(e,"class","add-todo__color svelte-13xn9ef"),k(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(d,g){A(d,e,g),n=!0,i||(c=N(e,"click",j(function(){se(t[4](t[9].color))&&t[4](t[9].color).apply(this,arguments)})),i=!0)},p(d,g){t=d,(!n||g&6&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&k(e,"style",l)},r(){a=e.getBoundingClientRect()},f(){X(e),r(),Y(e,a)},a(){r(),r=Z(e,a,J,{})},i(d){n||(z(()=>{s||(s=fe(e,_e,{},!0)),s.run(1)}),n=!0)},o(d){s||(s=fe(e,_e,{},!1)),s.run(0),n=!1},d(d){d&&p(e),d&&s&&s.end(),i=!1,c()}}}function Xe(o){let t,e,l,s,a=[],r=new Map,n,i,c,d=o[2].filter(o[5]);const g=_=>_[9].id;for(let _=0;_<d.length;_+=1){let v=we(o,d,_),u=g(v);r.set(u,a[_]=Ae(u,v))}return n=new We({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),n.$on("submit",o[3]),{c(){t=b("div"),e=b("div"),l=b("span");for(let _=0;_<a.length;_+=1)a[_].c();q(n.$$.fragment),this.h()},l(_){t=y(_,"DIV",{class:!0});var v=T(t);e=y(v,"DIV",{class:!0});var u=T(e);l=y(u,"SPAN",{class:!0,style:!0}),T(l).forEach(p);for(let h=0;h<a.length;h+=1)a[h].l(u);u.forEach(p),M(n.$$.fragment,v),v.forEach(p),this.h()},h(){k(l,"class","add-todo__color add-todo__color_main svelte-13xn9ef"),k(l,"style",s=`color: ${o[1]}`),k(e,"class","add-todo__color-list svelte-13xn9ef"),k(t,"class",i="add-todo "+o[0]+" svelte-13xn9ef")},m(_,v){A(_,t,v),I(t,e),I(e,l);for(let u=0;u<a.length;u+=1)a[u].m(e,null);P(n,t,null),c=!0},p(_,[v]){if((!c||v&2&&s!==(s=`color: ${_[1]}`))&&k(l,"style",s),v&22){d=_[2].filter(_[5]),G();for(let u=0;u<a.length;u+=1)a[u].r();a=Q(a,v,g,1,_,d,r,e,$,Ae,null,we);for(let u=0;u<a.length;u+=1)a[u].a();H()}(!c||v&1&&i!==(i="add-todo "+_[0]+" svelte-13xn9ef"))&&k(t,"class",i)},i(_){if(!c){for(let v=0;v<d.length;v+=1)F(a[v]);F(n.$$.fragment,_),c=!0}},o(_){for(let v=0;v<a.length;v+=1)D(a[v]);D(n.$$.fragment,_),c=!1},d(_){_&&p(t);for(let v=0;v<a.length;v+=1)a[v].d();R(n)}}}function Ye(o,t,e){let l,s;L(o,de,_=>e(2,l=_)),L(o,Le,_=>e(7,s=_));let{class:a=""}=t,r="#0029FF",n=1,i=s.map(_=>({id:n++,color:_})).concat(l.map(_=>({id:n++,color:_.color})));console.log(i);const c=_=>{let v={id:Date.now(),text:_.detail.value,color:r,done:!1};O.update(u=>u=[v,...u])},d=_=>{_&&e(1,r=_)},g=_=>_.color!=r;return o.$$set=_=>{"class"in _&&e(0,a=_.class)},[a,r,l,c,d,g]}class Ze extends U{constructor(t){super();V(this,t,Ye,Xe,B,{class:0})}}function ze(o){let t,e,l,s,a,r,n;return s=new Ze({}),r=new je({props:{class:"mt-50"}}),{c(){t=Ue(),e=b("section"),l=b("div"),q(s.$$.fragment),q(r.$$.fragment),this.h()},l(i){Ve('[data-svelte="svelte-1lxmpr"]',document.head).forEach(p),t=Be(i),e=y(i,"SECTION",{class:!0});var d=T(e);l=y(d,"DIV",{class:!0});var g=T(l);M(s.$$.fragment,g),g.forEach(p),d.forEach(p),M(r.$$.fragment,i),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",k(l,"class","container"),k(e,"class",a=""+(o[0]+" mt-50 svelte-hols8d"))},m(i,c){A(i,t,c),A(i,e,c),I(e,l),P(s,l,null),P(r,i,c),n=!0},p(i,[c]){(!n||c&1&&a!==(a=""+(i[0]+" mt-50 svelte-hols8d")))&&k(e,"class",a)},i(i){n||(F(s.$$.fragment,i),F(r.$$.fragment,i),n=!0)},o(i){D(s.$$.fragment,i),D(r.$$.fragment,i),n=!1},d(i){i&&p(t),i&&p(e),R(s),R(r,i)}}}function Ge(o,t,e){let{class:l=""}=t;return o.$$set=s=>{"class"in s&&e(0,l=s.class)},[l]}class Je extends U{constructor(t){super();V(this,t,Ge,ze,B,{class:0})}}export{Je as default};
