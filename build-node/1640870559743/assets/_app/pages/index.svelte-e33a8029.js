import{K as Ie,C as Fe,S as V,i as L,s as B,e as p,c as b,a as E,d as g,b as v,f as I,D as w,L as D,M as q,N as le,t as se,g as ne,O as U,h as oe,P as K,Q as De,E as O,R as ae,T as Q,v as M,w as P,x as R,U as X,V as Y,W as Z,p as N,X as z,Y as re,n as A,Z as ie,A as j,m as G,o as H,_ as Ne,$ as J,a0 as $,a1 as Ae,a2 as ce,a3 as Oe,a4 as Se,a5 as ue,a6 as fe,j as Ue,a7 as Ve,l as Le}from"../chunks/vendor-935e33b2.js";const S=Fe([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),_e=Ie(S,(o,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000"];let n=o.filter(s=>s.color).map(s=>s.color).concat(e),r=n.filter((s,a)=>n.indexOf(s)===a).map((s,a)=>({id:a,color:s}));t(r)});function de(o,t,e){const l=o.slice();return l[11]=t[e],l}function he(o,t){let e,l,n,i,r;return{key:o,first:null,c(){e=p("li"),l=p("button"),this.h()},l(s){e=b(s,"LI",{class:!0});var a=E(e);l=b(a,"BUTTON",{class:!0,style:!0}),E(l).forEach(g),a.forEach(g),this.h()},h(){v(l,"class","task__color-btn svelte-100588h"),v(l,"style",n=`background-color: ${t[11].color}`),v(e,"class","task__color-item svelte-100588h"),this.first=e},m(s,a){I(s,e,a),w(e,l),i||(r=D(l,"click",q(function(){le(t[7](t[11].color))&&t[7](t[11].color).apply(this,arguments)})),i=!0)},p(s,a){t=s,a&20&&n!==(n=`background-color: ${t[11].color}`)&&v(l,"style",n)},d(s){s&&g(e),i=!1,r()}}}function Be(o){let t,e,l,n,i,r,s,a,f=[],h=new Map,m,k,T,d,u=o[4].filter(o[9]);const c=_=>_[11].id;for(let _=0;_<u.length;_+=1){let y=de(o,u,_),C=c(y);h.set(C,f[_]=he(C,y))}return{c(){t=p("div"),e=p("div"),l=p("p"),n=se(o[1]),i=p("div"),r=p("button"),s=p("span"),a=p("ul");for(let _=0;_<f.length;_+=1)f[_].c();this.h()},l(_){t=b(_,"DIV",{class:!0});var y=E(t);e=b(y,"DIV",{class:!0});var C=E(e);l=b(C,"P",{class:!0});var F=E(l);n=ne(F,o[1]),F.forEach(g),C.forEach(g),i=b(y,"DIV",{class:!0});var x=E(i);r=b(x,"BUTTON",{class:!0});var ee=E(r);s=b(ee,"SPAN",{class:!0}),E(s).forEach(g),ee.forEach(g),x.forEach(g),a=b(y,"UL",{class:!0,style:!0});var te=E(a);for(let W=0;W<f.length;W+=1)f[W].l(te);te.forEach(g),y.forEach(g),this.h()},h(){v(l,"class","svelte-100588h"),v(e,"class","task__main svelte-100588h"),v(s,"class","svg-image-del svelte-100588h"),v(r,"class","task__menu-btn task__menu-btn_del svelte-100588h"),v(i,"class","task__circle task__menu svelte-100588h"),v(a,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),v(a,"style",m=`background-color: ${o[2]}`),v(t,"class",k="task "+o[0]+" svelte-100588h"),U(t,"isDisabled",o[3])},m(_,y){I(_,t,y),w(t,e),w(e,l),w(l,n),w(t,i),w(i,r),w(r,s),w(t,a);for(let C=0;C<f.length;C+=1)f[C].m(a,null);T||(d=[D(e,"click",o[5]),D(r,"click",q(o[6]))],T=!0)},p(_,[y]){y&2&&oe(n,_[1]),y&148&&(u=_[4].filter(_[9]),f=K(f,y,c,1,_,u,h,a,De,he,null,de)),y&4&&m!==(m=`background-color: ${_[2]}`)&&v(a,"style",m),y&1&&k!==(k="task "+_[0]+" svelte-100588h")&&v(t,"class",k),y&9&&U(t,"isDisabled",_[3])},i:O,o:O,d(_){_&&g(t);for(let y=0;y<f.length;y+=1)f[y].d();T=!1,ae(d)}}}function qe(o,t,e){let l,n;Q(o,S,d=>e(10,l=d)),Q(o,_e,d=>e(4,n=d));let{class:i=""}=t,{text:r=""}=t,{color:s="#0029FF"}=t,{disabled:a=!1}=t,{id:f=null}=t;const h=()=>{let d=l.map(u=>(f===u.id&&(u.done=!u.done),u));S.set(d)},m=()=>{let d=l.filter(u=>u.id!=f);S.set(d),console.log("del",f)},k=d=>{let u=l.map(c=>(f===c.id&&(c.color=d),c));S.set(u)},T=d=>d.color!=s;return o.$$set=d=>{"class"in d&&e(0,i=d.class),"text"in d&&e(1,r=d.text),"color"in d&&e(2,s=d.color),"disabled"in d&&e(3,a=d.disabled),"id"in d&&e(8,f=d.id)},[i,r,s,a,n,h,m,k,f,T]}class me extends V{constructor(t){super();L(this,t,qe,Be,B,{class:0,text:1,color:2,disabled:3,id:8})}}function ve(o,t,e){const l=o.slice();return l[4]=t[e],l}function ge(o,t,e){const l=o.slice();return l[4]=t[e],l}function ke(o,t){let e,l,n,i,r,s=O,a;return l=new me({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id}}),{key:o,first:null,c(){e=p("li"),M(l.$$.fragment),this.h()},l(f){e=b(f,"LI",{class:!0});var h=E(e);P(l.$$.fragment,h),h.forEach(g),this.h()},h(){v(e,"class","task-section__item"),this.first=e},m(f,h){I(f,e,h),R(l,e,null),a=!0},p(f,h){t=f;const m={};h&2&&(m.text=t[4].text),h&2&&(m.color=t[4].color?t[4].color:null),h&2&&(m.id=t[4].id),l.$set(m)},r(){r=e.getBoundingClientRect()},f(){X(e),s(),Y(e,r)},a(){s(),s=Z(e,r,J,{duration:300})},i(f){a||(N(l.$$.fragment,f),z(()=>{i&&i.end(1),n=re(e,t[3],{key:t[4].id}),n.start()}),a=!0)},o(f){A(l.$$.fragment,f),n&&n.invalidate(),i=ie(e,t[2],{key:t[4].id}),a=!1},d(f){f&&g(e),j(l),f&&i&&i.end()}}}function pe(o,t){let e,l,n,i,r,s=O,a;return l=new me({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0}}),{key:o,first:null,c(){e=p("li"),M(l.$$.fragment),this.h()},l(f){e=b(f,"LI",{class:!0});var h=E(e);P(l.$$.fragment,h),h.forEach(g),this.h()},h(){v(e,"class","task-section__item"),this.first=e},m(f,h){I(f,e,h),R(l,e,null),a=!0},p(f,h){t=f;const m={};h&2&&(m.text=t[4].text),h&2&&(m.color=t[4].color?t[4].color:null),h&2&&(m.id=t[4].id),l.$set(m)},r(){r=e.getBoundingClientRect()},f(){X(e),s(),Y(e,r)},a(){s(),s=Z(e,r,J,{duration:300})},i(f){a||(N(l.$$.fragment,f),z(()=>{i&&i.end(1),n=re(e,t[3],{key:t[4].id}),n.start()}),a=!0)},o(f){A(l.$$.fragment,f),n&&n.invalidate(),i=ie(e,t[2],{key:t[4].id}),a=!1},d(f){f&&g(e),j(l),f&&i&&i.end()}}}function Me(o){let t,e,l,n=[],i=new Map,r,s=[],a=new Map,f,h,m=o[1].filter(be);const k=u=>u[4].id;for(let u=0;u<m.length;u+=1){let c=ge(o,m,u),_=k(c);i.set(_,n[u]=ke(_,c))}let T=o[1].filter(ye);const d=u=>u[4].id;for(let u=0;u<T.length;u+=1){let c=ve(o,T,u),_=d(c);a.set(_,s[u]=pe(_,c))}return{c(){t=p("section"),e=p("div"),l=p("ul");for(let u=0;u<n.length;u+=1)n[u].c();r=p("ul");for(let u=0;u<s.length;u+=1)s[u].c();this.h()},l(u){t=b(u,"SECTION",{class:!0});var c=E(t);e=b(c,"DIV",{class:!0});var _=E(e);l=b(_,"UL",{class:!0});var y=E(l);for(let F=0;F<n.length;F+=1)n[F].l(y);y.forEach(g),r=b(_,"UL",{class:!0});var C=E(r);for(let F=0;F<s.length;F+=1)s[F].l(C);C.forEach(g),_.forEach(g),c.forEach(g),this.h()},h(){v(l,"class","task-section__col"),v(r,"class","task-section__col"),v(e,"class","container task-section__grid svelte-1rib3cm"),v(t,"class",f="task-section "+o[0]+" svelte-1rib3cm")},m(u,c){I(u,t,c),w(t,e),w(e,l);for(let _=0;_<n.length;_+=1)n[_].m(l,null);w(e,r);for(let _=0;_<s.length;_+=1)s[_].m(r,null);h=!0},p(u,[c]){if(c&2){m=u[1].filter(be),G();for(let _=0;_<n.length;_+=1)n[_].r();n=K(n,c,k,1,u,m,i,l,$,ke,null,ge);for(let _=0;_<n.length;_+=1)n[_].a();H()}if(c&2){T=u[1].filter(ye),G();for(let _=0;_<s.length;_+=1)s[_].r();s=K(s,c,d,1,u,T,a,r,$,pe,null,ve);for(let _=0;_<s.length;_+=1)s[_].a();H()}(!h||c&1&&f!==(f="task-section "+u[0]+" svelte-1rib3cm"))&&v(t,"class",f)},i(u){if(!h){for(let c=0;c<m.length;c+=1)N(n[c]);for(let c=0;c<T.length;c+=1)N(s[c]);h=!0}},o(u){for(let c=0;c<n.length;c+=1)A(n[c]);for(let c=0;c<s.length;c+=1)A(s[c]);h=!1},d(u){u&&g(t);for(let c=0;c<n.length;c+=1)n[c].d();for(let c=0;c<s.length;c+=1)s[c].d()}}}const be=o=>!o.done,ye=o=>o.done;function Pe(o,t,e){let l;Q(o,S,s=>e(1,l=s));let{class:n=""}=t;const[i,r]=Ne({duration:s=>Math.sqrt(s*200),fallback(s,a){const f=getComputedStyle(s),h=f.transform==="none"?"":f.transform;return{duration:600,easing:Ae,css:m=>`
					transform: ${h} scale(${m});
					opacity: ${m}
				`}}});return o.$$set=s=>{"class"in s&&e(0,n=s.class)},[n,l,i,r]}class Re extends V{constructor(t){super();L(this,t,Pe,Me,B,{class:0})}}function Ee(o){let t,e,l,n=o[2].text&&Te(o);return{c(){t=p("button"),n&&n.c(),this.h()},l(i){t=b(i,"BUTTON",{class:!0});var r=E(t);n&&n.l(r),r.forEach(g),this.h()},h(){v(t,"class","btn svelte-12pihab")},m(i,r){I(i,t,r),n&&n.m(t,null),e||(l=D(t,"click",q(o[6])),e=!0)},p(i,r){i[2].text?n?n.p(i,r):(n=Te(i),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(i){i&&g(t),n&&n.d(),e=!1,l()}}}function Te(o){let t=o[2].text+"",e;return{c(){e=se(t)},l(l){e=ne(l,t)},m(l,n){I(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&oe(e,t)},d(l){l&&g(e)}}}function je(o){let t,e,l,n,i,r=o[2]&&Ee(o);return{c(){t=p("div"),e=p("input"),r&&r.c(),this.h()},l(s){t=b(s,"DIV",{class:!0});var a=E(t);e=b(a,"INPUT",{placeholder:!0,class:!0}),r&&r.l(a),a.forEach(g),this.h()},h(){v(e,"placeholder",o[1]),v(e,"class","svelte-12pihab"),v(t,"class",l="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-12pihab"),U(t,"isError",o[5])},m(s,a){I(s,t,a),w(t,e),ce(e,o[4]),r&&r.m(t,null),o[11](t),n||(i=[D(e,"input",o[9]),D(e,"input",o[7]),D(e,"keydown",o[10])],n=!0)},p(s,[a]){a&2&&v(e,"placeholder",s[1]),a&16&&e.value!==s[4]&&ce(e,s[4]),s[2]?r?r.p(s,a):(r=Ee(s),r.c(),r.m(t,null)):r&&(r.d(1),r=null),a&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-12pihab")&&v(t,"class",l),a&37&&U(t,"isError",s[5])},i:O,o:O,d(s){s&&g(t),r&&r.d(),o[11](null),n=!1,ae(i)}}}function Ke(o,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:i=null}=t,r,s,a=!1;const f=Oe(),h=()=>{s?(f("submit",{value:s}),e(4,s="")):e(5,a=!0)},m=()=>{e(5,a=!1)},k=c=>{let _=c.key;_==="Control"&&f("color"),_==="Enter"&&h()};function T(){s=this.value,e(4,s)}const d=c=>k(c);function u(c){Se[c?"unshift":"push"](()=>{r=c,e(3,r)})}return o.$$set=c=>{"class"in c&&e(0,l=c.class),"placeholder"in c&&e(1,n=c.placeholder),"btn"in c&&e(2,i=c.btn)},[l,n,i,r,s,a,h,m,k,T,d,u]}class Qe extends V{constructor(t){super();L(this,t,Ke,je,B,{class:0,placeholder:1,btn:2})}}function we(o,t,e){const l=o.slice();return l[9]=t[e],l[11]=e,l}function Ce(o,t){let e,l,n,i,r=O,s,a,f;return{key:o,first:null,c(){e=p("button"),this.h()},l(h){e=b(h,"BUTTON",{class:!0,style:!0}),E(e).forEach(g),this.h()},h(){v(e,"class","add-todo__color svelte-lupivr"),v(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(h,m){I(h,e,m),s=!0,a||(f=D(e,"click",q(function(){le(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),a=!0)},p(h,m){t=h,(!s||m&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&v(e,"style",l)},r(){i=e.getBoundingClientRect()},f(){X(e),r(),Y(e,i)},a(){r(),r=Z(e,i,J,{})},i(h){s||(z(()=>{n||(n=ue(e,fe,{},!0)),n.run(1)}),s=!0)},o(h){n||(n=ue(e,fe,{},!1)),n.run(0),s=!1},d(h){h&&g(e),h&&n&&n.end(),a=!1,f()}}}function We(o){let t,e,l,n,i=[],r=new Map,s,a,f,h,m,k=o[3].filter(o[7]);const T=d=>d[9].id;for(let d=0;d<k.length;d+=1){let u=we(o,k,d),c=T(u);r.set(c,i[d]=Ce(c,u))}return s=new Qe({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),s.$on("color",o[8]),s.$on("submit",o[4]),{c(){t=p("div"),e=p("div"),l=p("span");for(let d=0;d<i.length;d+=1)i[d].c();M(s.$$.fragment),this.h()},l(d){t=b(d,"DIV",{class:!0});var u=E(t);e=b(u,"DIV",{class:!0});var c=E(e);l=b(c,"SPAN",{class:!0,style:!0}),E(l).forEach(g);for(let _=0;_<i.length;_+=1)i[_].l(c);c.forEach(g),P(s.$$.fragment,u),u.forEach(g),this.h()},h(){v(l,"class","add-todo__color add-todo__color_main svelte-lupivr"),v(l,"style",n=`color: ${o[1]}`),v(e,"class","add-todo__color-list svelte-lupivr"),U(e,"isOpen",o[2]),v(t,"class",a="add-todo "+o[0]+" svelte-lupivr")},m(d,u){I(d,t,u),w(t,e),w(e,l);for(let c=0;c<i.length;c+=1)i[c].m(e,null);R(s,t,null),f=!0,h||(m=D(l,"click",q(o[6])),h=!0)},p(d,[u]){if((!f||u&2&&n!==(n=`color: ${d[1]}`))&&v(l,"style",n),u&42){k=d[3].filter(d[7]),G();for(let c=0;c<i.length;c+=1)i[c].r();i=K(i,u,T,1,d,k,r,e,$,Ce,null,we);for(let c=0;c<i.length;c+=1)i[c].a();H()}u&4&&U(e,"isOpen",d[2]),(!f||u&1&&a!==(a="add-todo "+d[0]+" svelte-lupivr"))&&v(t,"class",a)},i(d){if(!f){for(let u=0;u<k.length;u+=1)N(i[u]);N(s.$$.fragment,d),f=!0}},o(d){for(let u=0;u<i.length;u+=1)A(i[u]);A(s.$$.fragment,d),f=!1},d(d){d&&g(t);for(let u=0;u<i.length;u+=1)i[u].d();j(s),h=!1,m()}}}function Xe(o,t,e){let l;Q(o,_e,k=>e(3,l=k));let{class:n=""}=t,i="#0029FF",r=!1;const s=k=>{let T={id:Date.now(),text:k.detail.value,color:i,done:!1};S.update(d=>d=[T,...d])},a=k=>k&&e(1,i=k),f=()=>e(2,r=!r),h=k=>k.color!=i,m=()=>e(2,r=!r);return o.$$set=k=>{"class"in k&&e(0,n=k.class)},[n,i,r,l,s,a,f,h,m]}class Ye extends V{constructor(t){super();L(this,t,Xe,We,B,{class:0})}}function Ze(o){let t,e,l,n,i,r,s;return n=new Ye({}),r=new Re({props:{class:"mt-50"}}),{c(){t=Ue(),e=p("section"),l=p("div"),M(n.$$.fragment),M(r.$$.fragment),this.h()},l(a){Ve('[data-svelte="svelte-1lxmpr"]',document.head).forEach(g),t=Le(a),e=b(a,"SECTION",{class:!0});var h=E(e);l=b(h,"DIV",{class:!0});var m=E(l);P(n.$$.fragment,m),m.forEach(g),h.forEach(g),P(r.$$.fragment,a),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",v(l,"class","container"),v(e,"class",i=""+(o[0]+" mt-50 svelte-hols8d"))},m(a,f){I(a,t,f),I(a,e,f),w(e,l),R(n,l,null),R(r,a,f),s=!0},p(a,[f]){(!s||f&1&&i!==(i=""+(a[0]+" mt-50 svelte-hols8d")))&&v(e,"class",i)},i(a){s||(N(n.$$.fragment,a),N(r.$$.fragment,a),s=!0)},o(a){A(n.$$.fragment,a),A(r.$$.fragment,a),s=!1},d(a){a&&g(t),a&&g(e),j(n),j(r,a)}}}function ze(o,t,e){let{class:l=""}=t;return o.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class He extends V{constructor(t){super();L(this,t,ze,Ze,B,{class:0})}}export{He as default};
