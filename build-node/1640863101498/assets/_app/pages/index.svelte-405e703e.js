import{K as pe,C as Ee,S as V,i as F,s as L,e as b,c as p,a as E,d as m,b as v,f as D,D as y,L as S,M as R,N as ye,t as Z,g as G,O as P,h as H,P as K,Q as Te,E as U,R as J,T as Q,v as j,w as q,x as B,U as $,V as x,W as ee,p as A,X as te,Y as le,n as C,Z as se,A as M,m as ae,o as ne,_ as Ie,$ as oe,a0 as re,a1 as we,a2 as ie,a3 as De,a4 as Ne,j as Ae,a5 as Ce,l as Oe}from"../chunks/vendor-1db80630.js";const O=Ee([{id:1,text:"Test task 1",done:!1,color:"#0029FF"},{id:2,text:"Test task 2",done:!1,color:"#FF9900"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF"}]),Se=pe(O,(r,e)=>{let t=r.filter(i=>i.color).map(i=>i.color),a=t.filter((i,n)=>t.indexOf(i)===n).map((i,n)=>({id:n,color:i}));e(a)});function ce(r,e,t){const l=r.slice();return l[11]=e[t],l}function ue(r,e){let t,l,a,i,n;return{key:r,first:null,c(){t=b("li"),l=b("button"),this.h()},l(s){t=p(s,"LI",{class:!0});var o=E(t);l=p(o,"BUTTON",{class:!0,style:!0}),E(l).forEach(m),o.forEach(m),this.h()},h(){v(l,"class","task__color-btn svelte-100588h"),v(l,"style",a=`background-color: ${e[11].color}`),v(t,"class","task__color-item svelte-100588h"),this.first=t},m(s,o){D(s,t,o),y(t,l),i||(n=S(l,"click",R(function(){ye(e[7](e[11].color))&&e[7](e[11].color).apply(this,arguments)})),i=!0)},p(s,o){e=s,o&20&&a!==(a=`background-color: ${e[11].color}`)&&v(l,"style",a)},d(s){s&&m(t),i=!1,n()}}}function Ue(r){let e,t,l,a,i,n,s,o,c=[],h=new Map,g,w,T,d,f=r[4].filter(r[9]);const _=u=>u[11].id;for(let u=0;u<f.length;u+=1){let k=ce(r,f,u),I=_(k);h.set(I,c[u]=ue(I,k))}return{c(){e=b("div"),t=b("div"),l=b("p"),a=Z(r[1]),i=b("div"),n=b("button"),s=b("span"),o=b("ul");for(let u=0;u<c.length;u+=1)c[u].c();this.h()},l(u){e=p(u,"DIV",{class:!0});var k=E(e);t=p(k,"DIV",{class:!0});var I=E(t);l=p(I,"P",{class:!0});var N=E(l);a=G(N,r[1]),N.forEach(m),I.forEach(m),i=p(k,"DIV",{class:!0});var W=E(i);n=p(W,"BUTTON",{class:!0});var X=E(n);s=p(X,"SPAN",{class:!0}),E(s).forEach(m),X.forEach(m),W.forEach(m),o=p(k,"UL",{class:!0,style:!0});var Y=E(o);for(let z=0;z<c.length;z+=1)c[z].l(Y);Y.forEach(m),k.forEach(m),this.h()},h(){v(l,"class","svelte-100588h"),v(t,"class","task__main svelte-100588h"),v(s,"class","svg-image-del svelte-100588h"),v(n,"class","task__menu-btn task__menu-btn_del svelte-100588h"),v(i,"class","task__circle task__menu svelte-100588h"),v(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-100588h"),v(o,"style",g=`background-color: ${r[2]}`),v(e,"class",w="task "+r[0]+" svelte-100588h"),P(e,"isDisabled",r[3])},m(u,k){D(u,e,k),y(e,t),y(t,l),y(l,a),y(e,i),y(i,n),y(n,s),y(e,o);for(let I=0;I<c.length;I+=1)c[I].m(o,null);T||(d=[S(t,"click",r[5]),S(n,"click",R(r[6]))],T=!0)},p(u,[k]){k&2&&H(a,u[1]),k&148&&(f=u[4].filter(u[9]),c=K(c,k,_,1,u,f,h,o,Te,ue,null,ce)),k&4&&g!==(g=`background-color: ${u[2]}`)&&v(o,"style",g),k&1&&w!==(w="task "+u[0]+" svelte-100588h")&&v(e,"class",w),k&9&&P(e,"isDisabled",u[3])},i:U,o:U,d(u){u&&m(e);for(let k=0;k<c.length;k+=1)c[k].d();T=!1,J(d)}}}function Ve(r,e,t){let l,a;Q(r,O,d=>t(10,l=d)),Q(r,Se,d=>t(4,a=d));let{class:i=""}=e,{text:n=""}=e,{color:s="#0029FF"}=e,{disabled:o=!1}=e,{id:c=null}=e;const h=()=>{let d=l.map(f=>(c===f.id&&(f.done=!f.done),f));O.set(d)},g=()=>{let d=l.filter(f=>f.id!=c);O.set(d),console.log("del",c)},w=d=>{let f=l.map(_=>(c===_.id&&(_.color=d),_));O.set(f)},T=d=>d.color!=s;return r.$$set=d=>{"class"in d&&t(0,i=d.class),"text"in d&&t(1,n=d.text),"color"in d&&t(2,s=d.color),"disabled"in d&&t(3,o=d.disabled),"id"in d&&t(8,c=d.id)},[i,n,s,o,a,h,g,w,c,T]}class fe extends V{constructor(e){super();F(this,e,Ve,Ue,L,{class:0,text:1,color:2,disabled:3,id:8})}}function _e(r,e,t){const l=r.slice();return l[4]=e[t],l}function de(r,e,t){const l=r.slice();return l[4]=e[t],l}function he(r,e){let t,l,a,i,n,s=U,o;return l=new fe({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id}}),{key:r,first:null,c(){t=b("li"),j(l.$$.fragment),this.h()},l(c){t=p(c,"LI",{class:!0});var h=E(t);q(l.$$.fragment,h),h.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,h){D(c,t,h),B(l,t,null),o=!0},p(c,h){e=c;const g={};h&2&&(g.text=e[4].text),h&2&&(g.color=e[4].color?e[4].color:null),h&2&&(g.id=e[4].id),l.$set(g)},r(){n=t.getBoundingClientRect()},f(){$(t),s(),x(t,n)},a(){s(),s=ee(t,n,oe,{duration:300})},i(c){o||(A(l.$$.fragment,c),te(()=>{i&&i.end(1),a=le(t,e[3],{key:e[4].id}),a.start()}),o=!0)},o(c){C(l.$$.fragment,c),a&&a.invalidate(),i=se(t,e[2],{key:e[4].id}),o=!1},d(c){c&&m(t),M(l),c&&i&&i.end()}}}function me(r,e){let t,l,a,i,n,s=U,o;return l=new fe({props:{text:e[4].text,color:e[4].color?e[4].color:null,id:e[4].id,disabled:!0}}),{key:r,first:null,c(){t=b("li"),j(l.$$.fragment),this.h()},l(c){t=p(c,"LI",{class:!0});var h=E(t);q(l.$$.fragment,h),h.forEach(m),this.h()},h(){v(t,"class","task-section__item"),this.first=t},m(c,h){D(c,t,h),B(l,t,null),o=!0},p(c,h){e=c;const g={};h&2&&(g.text=e[4].text),h&2&&(g.color=e[4].color?e[4].color:null),h&2&&(g.id=e[4].id),l.$set(g)},r(){n=t.getBoundingClientRect()},f(){$(t),s(),x(t,n)},a(){s(),s=ee(t,n,oe,{duration:300})},i(c){o||(A(l.$$.fragment,c),te(()=>{i&&i.end(1),a=le(t,e[3],{key:e[4].id}),a.start()}),o=!0)},o(c){C(l.$$.fragment,c),a&&a.invalidate(),i=se(t,e[2],{key:e[4].id}),o=!1},d(c){c&&m(t),M(l),c&&i&&i.end()}}}function Fe(r){let e,t,l,a=[],i=new Map,n,s=[],o=new Map,c,h,g=r[1].filter(ve);const w=f=>f[4].id;for(let f=0;f<g.length;f+=1){let _=de(r,g,f),u=w(_);i.set(u,a[f]=he(u,_))}let T=r[1].filter(ge);const d=f=>f[4].id;for(let f=0;f<T.length;f+=1){let _=_e(r,T,f),u=d(_);o.set(u,s[f]=me(u,_))}return{c(){e=b("section"),t=b("div"),l=b("ul");for(let f=0;f<a.length;f+=1)a[f].c();n=b("ul");for(let f=0;f<s.length;f+=1)s[f].c();this.h()},l(f){e=p(f,"SECTION",{class:!0});var _=E(e);t=p(_,"DIV",{class:!0});var u=E(t);l=p(u,"UL",{class:!0});var k=E(l);for(let N=0;N<a.length;N+=1)a[N].l(k);k.forEach(m),n=p(u,"UL",{class:!0});var I=E(n);for(let N=0;N<s.length;N+=1)s[N].l(I);I.forEach(m),u.forEach(m),_.forEach(m),this.h()},h(){v(l,"class","task-section__col"),v(n,"class","task-section__col"),v(t,"class","container task-section__grid svelte-1rib3cm"),v(e,"class",c="task-section "+r[0]+" svelte-1rib3cm")},m(f,_){D(f,e,_),y(e,t),y(t,l);for(let u=0;u<a.length;u+=1)a[u].m(l,null);y(t,n);for(let u=0;u<s.length;u+=1)s[u].m(n,null);h=!0},p(f,[_]){if(_&2){g=f[1].filter(ve),ae();for(let u=0;u<a.length;u+=1)a[u].r();a=K(a,_,w,1,f,g,i,l,re,he,null,de);for(let u=0;u<a.length;u+=1)a[u].a();ne()}if(_&2){T=f[1].filter(ge),ae();for(let u=0;u<s.length;u+=1)s[u].r();s=K(s,_,d,1,f,T,o,n,re,me,null,_e);for(let u=0;u<s.length;u+=1)s[u].a();ne()}(!h||_&1&&c!==(c="task-section "+f[0]+" svelte-1rib3cm"))&&v(e,"class",c)},i(f){if(!h){for(let _=0;_<g.length;_+=1)A(a[_]);for(let _=0;_<T.length;_+=1)A(s[_]);h=!0}},o(f){for(let _=0;_<a.length;_+=1)C(a[_]);for(let _=0;_<s.length;_+=1)C(s[_]);h=!1},d(f){f&&m(e);for(let _=0;_<a.length;_+=1)a[_].d();for(let _=0;_<s.length;_+=1)s[_].d()}}}const ve=r=>!r.done,ge=r=>r.done;function Le(r,e,t){let l;Q(r,O,s=>t(1,l=s));let{class:a=""}=e;const[i,n]=Ie({duration:s=>Math.sqrt(s*200),fallback(s,o){const c=getComputedStyle(s),h=c.transform==="none"?"":c.transform;return{duration:600,easing:we,css:g=>`
					transform: ${h} scale(${g});
					opacity: ${g}
				`}}});return r.$$set=s=>{"class"in s&&t(0,a=s.class)},[a,l,i,n]}class je extends V{constructor(e){super();F(this,e,Le,Fe,L,{class:0})}}function ke(r){let e,t,l,a=r[2].text&&be(r);return{c(){e=b("button"),a&&a.c(),this.h()},l(i){e=p(i,"BUTTON",{class:!0});var n=E(e);a&&a.l(n),n.forEach(m),this.h()},h(){v(e,"class","btn svelte-12pihab")},m(i,n){D(i,e,n),a&&a.m(e,null),t||(l=S(e,"click",R(r[6])),t=!0)},p(i,n){i[2].text?a?a.p(i,n):(a=be(i),a.c(),a.m(e,null)):a&&(a.d(1),a=null)},d(i){i&&m(e),a&&a.d(),t=!1,l()}}}function be(r){let e=r[2].text+"",t;return{c(){t=Z(e)},l(l){t=G(l,e)},m(l,a){D(l,t,a)},p(l,a){a&4&&e!==(e=l[2].text+"")&&H(t,e)},d(l){l&&m(t)}}}function qe(r){let e,t,l,a,i,n=r[2]&&ke(r);return{c(){e=b("div"),t=b("input"),n&&n.c(),this.h()},l(s){e=p(s,"DIV",{class:!0});var o=E(e);t=p(o,"INPUT",{placeholder:!0,class:!0}),n&&n.l(o),o.forEach(m),this.h()},h(){v(t,"placeholder",r[1]),v(t,"class","svelte-12pihab"),v(e,"class",l="input-group "+r[0]+" "+(r[2]?"input-group_btn":"")+" svelte-12pihab"),P(e,"isError",r[5])},m(s,o){D(s,e,o),y(e,t),ie(t,r[4]),n&&n.m(e,null),r[9](e),a||(i=[S(t,"input",r[8]),S(t,"input",r[7])],a=!0)},p(s,[o]){o&2&&v(t,"placeholder",s[1]),o&16&&t.value!==s[4]&&ie(t,s[4]),s[2]?n?n.p(s,o):(n=ke(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null),o&5&&l!==(l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-12pihab")&&v(e,"class",l),o&37&&P(e,"isError",s[5])},i:U,o:U,d(s){s&&m(e),n&&n.d(),r[9](null),a=!1,J(i)}}}function Be(r,e,t){let{class:l=""}=e,{placeholder:a="Placeholer"}=e,{btn:i=null}=e,n,s,o=!1;const c=De(),h=()=>{s?(c("submit",{value:s}),t(4,s="")):t(5,o=!0)},g=()=>{t(5,o=!1)};function w(){s=this.value,t(4,s)}function T(d){Ne[d?"unshift":"push"](()=>{n=d,t(3,n)})}return r.$$set=d=>{"class"in d&&t(0,l=d.class),"placeholder"in d&&t(1,a=d.placeholder),"btn"in d&&t(2,i=d.btn)},[l,a,i,n,s,o,h,g,w,T]}class Me extends V{constructor(e){super();F(this,e,Be,qe,L,{class:0,placeholder:1,btn:2})}}function Pe(r){let e,t,l,a,i,n;return a=new Me({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("submit",r[1]),{c(){e=b("div"),t=b("div"),l=b("button"),j(a.$$.fragment),this.h()},l(s){e=p(s,"DIV",{class:!0});var o=E(e);t=p(o,"DIV",{class:!0});var c=E(t);l=p(c,"BUTTON",{class:!0}),E(l).forEach(m),c.forEach(m),q(a.$$.fragment,o),o.forEach(m),this.h()},h(){v(l,"class","add-todo__color svelte-dzffj5"),v(t,"class","add-todo__color-list svelte-dzffj5"),v(e,"class",i="add-todo "+r[0]+" svelte-dzffj5")},m(s,o){D(s,e,o),y(e,t),y(t,l),B(a,e,null),n=!0},p(s,[o]){(!n||o&1&&i!==(i="add-todo "+s[0]+" svelte-dzffj5"))&&v(e,"class",i)},i(s){n||(A(a.$$.fragment,s),n=!0)},o(s){C(a.$$.fragment,s),n=!1},d(s){s&&m(e),M(a)}}}function ze(r,e,t){let{class:l=""}=e;const a=i=>{let n={id:Date.now(),text:i.detail.value,color:"#000",done:!1};O.update(s=>s=[n,...s])};return r.$$set=i=>{"class"in i&&t(0,l=i.class)},[l,a]}class Re extends V{constructor(e){super();F(this,e,ze,Pe,L,{class:0})}}function Ke(r){let e,t,l,a,i,n,s;return a=new Re({}),n=new je({props:{class:"mt-50"}}),{c(){e=Ae(),t=b("section"),l=b("div"),j(a.$$.fragment),j(n.$$.fragment),this.h()},l(o){Ce('[data-svelte="svelte-1lxmpr"]',document.head).forEach(m),e=Oe(o),t=p(o,"SECTION",{class:!0});var h=E(t);l=p(h,"DIV",{class:!0});var g=E(l);q(a.$$.fragment,g),g.forEach(m),h.forEach(m),q(n.$$.fragment,o),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",v(l,"class","container"),v(t,"class",i=""+(r[0]+" mt-50 svelte-hols8d"))},m(o,c){D(o,e,c),D(o,t,c),y(t,l),B(a,l,null),B(n,o,c),s=!0},p(o,[c]){(!s||c&1&&i!==(i=""+(o[0]+" mt-50 svelte-hols8d")))&&v(t,"class",i)},i(o){s||(A(a.$$.fragment,o),A(n.$$.fragment,o),s=!0)},o(o){C(a.$$.fragment,o),C(n.$$.fragment,o),s=!1},d(o){o&&m(e),o&&m(t),M(a),M(n,o)}}}function Qe(r,e,t){let{class:l=""}=e;return r.$$set=a=>{"class"in a&&t(0,l=a.class)},[l]}class Xe extends V{constructor(e){super();F(this,e,Qe,Ke,L,{class:0})}}export{Xe as default};
