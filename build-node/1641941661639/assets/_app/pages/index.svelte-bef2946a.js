import{K as Xe,C as Ye,S as Z,i as G,L as Qe,e as E,c as y,a as T,d as v,b as m,f as L,D as C,M as D,N as H,O as qe,t as Ee,g as ye,P as j,Q as oe,h as Te,R as ie,T as We,E as K,U as we,V as re,W as ce,s as ue,v as J,w as $,x,X as de,Y as he,Z as me,p as P,_ as ge,$ as Ce,n as U,a0 as je,A as ee,m as ve,o as ke,a1 as Ze,a2 as pe,a3 as be,a4 as Ge,a5 as Je,a6 as Ie,a7 as Oe,j as $e,a8 as xe,l as et}from"../chunks/vendor-6ec25659.js";const V=Ye([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),De=Xe(V,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=l.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,r)=>n.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(i)}),tt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},lt=l=>{l.style.height="auto",l.style.height=`${l.scrollHeight}px`};function Ae(l,t,e){const s=l.slice();return s[36]=t[e],s}function Fe(l,t){let e,s,n,c,i;return{key:l,first:null,c(){e=E("li"),s=E("button"),this.h()},l(a){e=y(a,"LI",{class:!0});var r=T(e);s=y(r,"BUTTON",{class:!0,style:!0}),T(s).forEach(v),r.forEach(v),this.h()},h(){m(s,"class","task__color-btn svelte-uqxqj7"),m(s,"style",n=`background-color: ${t[36].color}`),m(e,"class","task__color-item svelte-uqxqj7"),this.first=e},m(a,r){L(a,e,r),C(e,s),c||(i=D(s,"click",H(function(){qe(t[16](t[36].color))&&t[16](t[36].color).apply(this,arguments)})),c=!0)},p(a,r){t=a,r[0]&4100&&n!==(n=`background-color: ${t[36].color}`)&&m(s,"style",n)},d(a){a&&v(e),c=!1,i()}}}function st(l){let t,e,s,n,c=`${l[0]}`,i,a,r,f,_,k,b,w,g,o,u,h,I=[],B=new Map,A,N,M,R,z,te,X=l[12].filter(l[29]);const Y=p=>p[36].id;for(let p=0;p<X.length;p+=1){let q=Ae(l,X,p),S=Y(q);B.set(S,I[p]=Fe(S,q))}return{c(){t=E("article"),e=E("div"),s=E("div"),n=E("p"),i=E("textarea"),r=E("div"),f=E("div"),_=E("span"),k=Ee(l[4]),b=E("div"),w=E("button"),g=E("span"),o=E("button"),u=E("span"),h=E("ul");for(let p=0;p<I.length;p+=1)I[p].c();N=E("button"),M=E("span"),this.h()},l(p){t=y(p,"ARTICLE",{class:!0});var q=T(t);e=y(q,"DIV",{class:!0});var S=T(e);s=y(S,"DIV",{class:!0});var Q=T(s);n=y(Q,"P",{class:!0,contenteditable:!0});var fe=T(n);fe.forEach(v),i=y(Q,"TEXTAREA",{class:!0}),T(i).forEach(v),Q.forEach(v),r=y(S,"DIV",{class:!0});var le=T(r);f=y(le,"DIV",{class:!0});var se=T(f);_=y(se,"SPAN",{class:!0});var ne=T(_);k=ye(ne,l[4]),ne.forEach(v),se.forEach(v),le.forEach(v),S.forEach(v),b=y(q,"DIV",{class:!0});var W=T(b);w=y(W,"BUTTON",{class:!0});var ae=T(w);g=y(ae,"SPAN",{class:!0}),T(g).forEach(v),ae.forEach(v),o=y(W,"BUTTON",{class:!0});var d=T(o);u=y(d,"SPAN",{class:!0}),T(u).forEach(v),d.forEach(v),W.forEach(v),h=y(q,"UL",{class:!0,style:!0});var O=T(h);for(let _e=0;_e<I.length;_e+=1)I[_e].l(O);O.forEach(v),N=y(q,"BUTTON",{class:!0});var F=T(N);M=y(F,"SPAN",{class:!0}),T(M).forEach(v),F.forEach(v),q.forEach(v),this.h()},h(){m(n,"class","task__main-content svelte-uqxqj7"),m(n,"contenteditable",l[7]),m(i,"class","task__main-content svelte-uqxqj7"),i.disabled=a=!l[7],m(s,"class","task__main-container svelte-uqxqj7"),m(_,"class","svelte-uqxqj7"),m(f,"class","task__info-content svelte-uqxqj7"),m(r,"class","task__info svelte-uqxqj7"),m(e,"class","task__main svelte-uqxqj7"),j(e,"isEdit",l[7]),m(g,"class","svg-image-del svelte-uqxqj7"),m(w,"class","task__menu-btn task__menu-btn_del svelte-uqxqj7"),m(u,"class","svg-image-pen svelte-uqxqj7"),m(o,"class","task__menu-btn task__menu-btn_edit svelte-uqxqj7"),j(o,"isSelect",l[7]),j(o,"isChanged",l[8]),j(o,"isSave",l[9]),m(b,"class","task__circle task__menu svelte-uqxqj7"),j(b,"isOpen",l[7]),m(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-uqxqj7"),m(h,"style",A=`background-color: ${l[2]}`),j(h,"isOpen",l[7]),m(M,"class","svelte-uqxqj7"),m(N,"class","task__info-open svelte-uqxqj7"),j(N,"isHidden",l[7]),m(t,"class",R="task "+l[1]+" svelte-uqxqj7"),j(t,"isDisabled",l[3]),j(t,"isInfoOpen",l[5]),j(t,"isEdit",l[7])},m(p,q){L(p,t,q),C(t,e),C(e,s),C(s,n),n.innerHTML=c,l[22](n),C(s,i),l[24](i),oe(i,l[0]),C(e,r),C(r,f),C(f,_),C(_,k),l[27](r),C(t,b),C(b,w),C(w,g),C(b,o),C(o,u),C(t,h);for(let S=0;S<I.length;S+=1)I[S].m(h,null);C(t,N),C(N,M),z||(te=[D(n,"input",l[23]),D(n,"keydown",l[18]),D(i,"input",l[25]),D(i,"input",l[26]),D(i,"keydown",l[18]),D(e,"click",l[13]),D(w,"click",H(l[14])),D(o,"click",H(l[28])),D(N,"click",H(l[30]))],z=!0)},p(p,q){q[0]&1&&c!==(c=`${p[0]}`)&&(n.innerHTML=c),q[0]&128&&m(n,"contenteditable",p[7]),q[0]&128&&a!==(a=!p[7])&&(i.disabled=a),q[0]&1&&oe(i,p[0]),q[0]&16&&Te(k,p[4]),q[0]&128&&j(e,"isEdit",p[7]),q[0]&128&&j(o,"isSelect",p[7]),q[0]&256&&j(o,"isChanged",p[8]),q[0]&512&&j(o,"isSave",p[9]),q[0]&128&&j(b,"isOpen",p[7]),q[0]&69636&&(X=p[12].filter(p[29]),I=ie(I,q,Y,1,p,X,B,h,We,Fe,null,Ae)),q[0]&4&&A!==(A=`background-color: ${p[2]}`)&&m(h,"style",A),q[0]&128&&j(h,"isOpen",p[7]),q[0]&128&&j(N,"isHidden",p[7]),q[0]&2&&R!==(R="task "+p[1]+" svelte-uqxqj7")&&m(t,"class",R),q[0]&10&&j(t,"isDisabled",p[3]),q[0]&34&&j(t,"isInfoOpen",p[5]),q[0]&130&&j(t,"isEdit",p[7])},i:K,o:K,d(p){p&&v(t),l[22](null),l[24](null),l[27](null);for(let q=0;q<I.length;q+=1)I[q].d();z=!1,we(te)}}}let Ne=new Set;function nt(){Ne.forEach(l=>{l.edit(!1)})}function at(l,t,e){let s,n;re(l,V,d=>e(32,s=d)),re(l,De,d=>e(12,n=d));let{class:c=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,k=!1,b,w=!1,g=!1,o=!1,u,h,I;const B=()=>{if(w===!1){let d=s.map(O=>(f===O.id&&(O.done=!O.done),O));V.set(d)}},A=()=>{let d=s.filter(O=>O.id!=f);V.set(d)};function N(d){e(7,w=d!=null?d:!w),w===!1&&z()}const M=d=>{let O=s.map(F=>(f===F.id&&(F.color=d),F));V.set(O)};function R(d){e(5,k=d!=null?d:!k);let O=0;b.childNodes.forEach(F=>O+=F.clientHeight),b.style.setProperty("--taskInfoHeight",`${k?O:0}px`)}function z(){g&&te(i).then(()=>{e(8,g=!1),clearTimeout(I),e(9,o=!0),I=setTimeout(()=>{e(9,o=!1)},500)})}function te(d){if(typeof d=="string")return new Promise(O=>{V.set(s.map(F=>(F.id===f&&(F.text=d),F))),O()});throw new Error("The value is not equal to the string")}function X(d){let O=d.ctrlKey?!1:d.metaKey,F=d.keyCode;if(O&&F===83)return d.preventDefault(),z(),!1}function Y(d=i){return e(8,g=d!==i)}Ne.add({save(){z()},edit(d){N(d)}});const p=()=>{lt(h)};function q(d){ce[d?"unshift":"push"](()=>{u=d,e(10,u)})}const S=()=>Y();function Q(d){ce[d?"unshift":"push"](()=>{h=d,e(11,h)})}function fe(){i=this.value,e(0,i)}const le=()=>{p(),Y()};function se(d){ce[d?"unshift":"push"](()=>{b=d,e(6,b)})}const ne=()=>{w===!1&&nt(),N()},W=d=>d.color!=a,ae=()=>R();return l.$$set=d=>{"class"in d&&e(1,c=d.class),"text"in d&&e(0,i=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(21,f=d.id),"date"in d&&e(4,_=d.date)},[i,c,a,r,_,k,b,w,g,o,u,h,n,B,A,N,M,R,X,Y,p,f,q,S,Q,fe,le,se,ne,W,ae]}class Se extends Z{constructor(t){super();G(this,t,at,st,Qe,{class:1,text:0,color:2,disabled:3,id:21,date:4},null,[-1,-1])}}function Le(l,t,e){const s=l.slice();return s[4]=t[e],s}function Pe(l,t,e){const s=l.slice();return s[4]=t[e],s}function Ue(l,t){let e,s,n,c,i,a=K,r;return s=new Se({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=E("li"),J(s.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=T(e);$(s.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),x(s,e,null),r=!0},p(f,_){t=f;const k={};_&2&&(k.text=t[4].text),_&2&&(k.color=t[4].color?t[4].color:null),_&2&&(k.id=t[4].id),_&2&&(k.date=t[4].date),s.$set(k)},r(){i=e.getBoundingClientRect()},f(){de(e),a(),he(e,i)},a(){a(),a=me(e,i,pe,{duration:300})},i(f){r||(P(s.$$.fragment,f),ge(()=>{c&&c.end(1),n=Ce(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){U(s.$$.fragment,f),n&&n.invalidate(),c=je(e,t[2],{key:t[4].id}),r=!1},d(f){f&&v(e),ee(s),f&&c&&c.end()}}}function Ve(l,t){let e,s,n,c,i,a=K,r;return s=new Se({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=E("li"),J(s.$$.fragment),this.h()},l(f){e=y(f,"LI",{class:!0});var _=T(e);$(s.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),x(s,e,null),r=!0},p(f,_){t=f;const k={};_&2&&(k.text=t[4].text),_&2&&(k.color=t[4].color?t[4].color:null),_&2&&(k.id=t[4].id),_&2&&(k.date=t[4].date),s.$set(k)},r(){i=e.getBoundingClientRect()},f(){de(e),a(),he(e,i)},a(){a(),a=me(e,i,pe,{duration:300})},i(f){r||(P(s.$$.fragment,f),ge(()=>{c&&c.end(1),n=Ce(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){U(s.$$.fragment,f),n&&n.invalidate(),c=je(e,t[2],{key:t[4].id}),r=!1},d(f){f&&v(e),ee(s),f&&c&&c.end()}}}function ot(l){let t,e,s,n=[],c=new Map,i,a=[],r=new Map,f,_,k=l[1].filter(Be);const b=o=>o[4].id;for(let o=0;o<k.length;o+=1){let u=Pe(l,k,o),h=b(u);c.set(h,n[o]=Ue(h,u))}let w=l[1].filter(Me);const g=o=>o[4].id;for(let o=0;o<w.length;o+=1){let u=Le(l,w,o),h=g(u);r.set(h,a[o]=Ve(h,u))}return{c(){t=E("section"),e=E("div"),s=E("ul");for(let o=0;o<n.length;o+=1)n[o].c();i=E("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=y(o,"SECTION",{class:!0});var u=T(t);e=y(u,"DIV",{class:!0});var h=T(e);s=y(h,"UL",{class:!0});var I=T(s);for(let A=0;A<n.length;A+=1)n[A].l(I);I.forEach(v),i=y(h,"UL",{class:!0});var B=T(i);for(let A=0;A<a.length;A+=1)a[A].l(B);B.forEach(v),h.forEach(v),u.forEach(v),this.h()},h(){m(s,"class","task-section__col"),m(i,"class","task-section__col"),m(e,"class","container task-section__grid svelte-te6j4q"),m(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(o,u){L(o,t,u),C(t,e),C(e,s);for(let h=0;h<n.length;h+=1)n[h].m(s,null);C(e,i);for(let h=0;h<a.length;h+=1)a[h].m(i,null);_=!0},p(o,[u]){if(u&2){k=o[1].filter(Be),ve();for(let h=0;h<n.length;h+=1)n[h].r();n=ie(n,u,b,1,o,k,c,s,be,Ue,null,Pe);for(let h=0;h<n.length;h+=1)n[h].a();ke()}if(u&2){w=o[1].filter(Me),ve();for(let h=0;h<a.length;h+=1)a[h].r();a=ie(a,u,g,1,o,w,r,i,be,Ve,null,Le);for(let h=0;h<a.length;h+=1)a[h].a();ke()}(!_||u&1&&f!==(f="task-section "+o[0]+" svelte-te6j4q"))&&m(t,"class",f)},i(o){if(!_){for(let u=0;u<k.length;u+=1)P(n[u]);for(let u=0;u<w.length;u+=1)P(a[u]);_=!0}},o(o){for(let u=0;u<n.length;u+=1)U(n[u]);for(let u=0;u<a.length;u+=1)U(a[u]);_=!1},d(o){o&&v(t);for(let u=0;u<n.length;u+=1)n[u].d();for(let u=0;u<a.length;u+=1)a[u].d()}}}const Be=l=>!l.done,Me=l=>l.done;function it(l,t,e){let s;re(l,V,a=>e(1,s=a));let{class:n=""}=t;const[c,i]=Ze({duration:a=>Math.sqrt(a*200),fallback(a,r){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Ge,css:k=>`
					transform: ${_} scale(${k});
					opacity: ${k}
				`}}});return l.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,s,c,i]}class rt extends Z{constructor(t){super();G(this,t,it,ot,ue,{class:0})}}function Re(l){let t,e,s,n=l[2].text&&ze(l);return{c(){t=E("button"),n&&n.c(),this.h()},l(c){t=y(c,"BUTTON",{class:!0});var i=T(t);n&&n.l(i),i.forEach(v),this.h()},h(){m(t,"class","btn svelte-1yy2xse")},m(c,i){L(c,t,i),n&&n.m(t,null),e||(s=D(t,"click",H(l[6])),e=!0)},p(c,i){c[2].text?n?n.p(c,i):(n=ze(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&v(t),n&&n.d(),e=!1,s()}}}function ze(l){let t=l[2].text+"",e;return{c(){e=Ee(t)},l(s){e=ye(s,t)},m(s,n){L(s,e,n)},p(s,n){n&4&&t!==(t=s[2].text+"")&&Te(e,t)},d(s){s&&v(e)}}}function ct(l){let t,e,s,n,c,i=l[2]&&Re(l);return{c(){t=E("div"),e=E("input"),i&&i.c(),this.h()},l(a){t=y(a,"DIV",{class:!0});var r=T(t);e=y(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(v),this.h()},h(){m(e,"placeholder",l[1]),m(e,"class","svelte-1yy2xse"),m(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),j(t,"isError",l[5])},m(a,r){L(a,t,r),C(t,e),oe(e,l[4]),i&&i.m(t,null),l[10](t),n||(c=[D(e,"input",l[9]),D(e,"input",l[7]),D(e,"keydown",l[8])],n=!0)},p(a,[r]){r&2&&m(e,"placeholder",a[1]),r&16&&e.value!==a[4]&&oe(e,a[4]),a[2]?i?i.p(a,r):(i=Re(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&m(t,"class",s),r&37&&j(t,"isError",a[5])},i:K,o:K,d(a){a&&v(t),i&&i.d(),l[10](null),n=!1,we(c)}}}function ut(l,t,e){let{class:s=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,i,a,r=!1;const f=Je(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,r=!0)},k=()=>{e(5,r=!1)},b=o=>{let u=o.key,h=o.ctrlKey,I=o.shiftKey;o.keyCode,h&&I&&f("color"),u==="Enter"&&_()};function w(){a=this.value,e(4,a)}function g(o){ce[o?"unshift":"push"](()=>{i=o,e(3,i)})}return l.$$set=o=>{"class"in o&&e(0,s=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,c=o.btn)},[s,n,c,i,a,r,_,k,b,w,g]}class ft extends Z{constructor(t){super();G(this,t,ut,ct,ue,{class:0,placeholder:1,btn:2})}}function He(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Ke(l,t){let e,s,n,c,i=K,a,r,f;return{key:l,first:null,c(){e=E("button"),this.h()},l(_){e=y(_,"BUTTON",{class:!0,style:!0}),T(e).forEach(v),this.h()},h(){m(e,"class","add-todo__color svelte-1hafqlz"),m(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,k){L(_,e,k),a=!0,r||(f=D(e,"click",H(function(){qe(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,k){t=_,(!a||k&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",s)},r(){c=e.getBoundingClientRect()},f(){de(e),i(),he(e,c)},a(){i(),i=me(e,c,pe,{})},i(_){a||(ge(()=>{n||(n=Ie(e,Oe,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ie(e,Oe,{},!1)),n.run(0),a=!1},d(_){_&&v(e),_&&n&&n.end(),r=!1,f()}}}function _t(l){let t,e,s,n,c=[],i=new Map,a,r,f,_,k,b=l[3].filter(l[7]);const w=g=>g[9].id;for(let g=0;g<b.length;g+=1){let o=He(l,b,g),u=w(o);i.set(u,c[g]=Ke(u,o))}return a=new ft({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",l[8]),a.$on("submit",l[4]),{c(){t=E("div"),e=E("div"),s=E("span");for(let g=0;g<c.length;g+=1)c[g].c();J(a.$$.fragment),this.h()},l(g){t=y(g,"DIV",{class:!0});var o=T(t);e=y(o,"DIV",{class:!0});var u=T(e);s=y(u,"SPAN",{class:!0,style:!0}),T(s).forEach(v);for(let h=0;h<c.length;h+=1)c[h].l(u);u.forEach(v),$(a.$$.fragment,o),o.forEach(v),this.h()},h(){m(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),m(s,"style",n=`color: ${l[1]}`),m(e,"class","add-todo__color-list svelte-1hafqlz"),j(e,"isOpen",l[2]),m(t,"class",r="add-todo "+l[0]+" svelte-1hafqlz")},m(g,o){L(g,t,o),C(t,e),C(e,s);for(let u=0;u<c.length;u+=1)c[u].m(e,null);x(a,t,null),f=!0,_||(k=D(s,"click",H(l[6])),_=!0)},p(g,[o]){if((!f||o&2&&n!==(n=`color: ${g[1]}`))&&m(s,"style",n),o&42){b=g[3].filter(g[7]),ve();for(let u=0;u<c.length;u+=1)c[u].r();c=ie(c,o,w,1,g,b,i,e,be,Ke,null,He);for(let u=0;u<c.length;u+=1)c[u].a();ke()}o&4&&j(e,"isOpen",g[2]),(!f||o&1&&r!==(r="add-todo "+g[0]+" svelte-1hafqlz"))&&m(t,"class",r)},i(g){if(!f){for(let o=0;o<b.length;o+=1)P(c[o]);P(a.$$.fragment,g),f=!0}},o(g){for(let o=0;o<c.length;o+=1)U(c[o]);U(a.$$.fragment,g),f=!1},d(g){g&&v(t);for(let o=0;o<c.length;o+=1)c[o].d();ee(a),_=!1,k()}}}function dt(l,t,e){let s;re(l,De,b=>e(3,s=b));let{class:n=""}=t,c="#0029FF",i=!1;const a=b=>{let w={id:Date.now(),text:b.detail.value,color:c,done:!1,date:tt(new Date,"dot")};V.update(g=>g=[w,...g])},r=b=>b&&e(1,c=b),f=()=>e(2,i=!i),_=b=>b.color!=c,k=()=>e(2,i=!i);return l.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,c,i,s,a,r,f,_,k]}class ht extends Z{constructor(t){super();G(this,t,dt,_t,ue,{class:0})}}function mt(l){let t,e,s,n,c,i,a;return n=new ht({}),i=new rt({props:{class:"mt-50"}}),{c(){t=$e(),e=E("section"),s=E("div"),J(n.$$.fragment),J(i.$$.fragment),this.h()},l(r){xe('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=et(r),e=y(r,"SECTION",{class:!0});var _=T(e);s=y(_,"DIV",{class:!0});var k=T(s);$(n.$$.fragment,k),k.forEach(v),_.forEach(v),$(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(s,"class","container"),m(e,"class",c=""+(l[0]+" mt-50 svelte-110abfo"))},m(r,f){L(r,t,f),L(r,e,f),C(e,s),x(n,s,null),x(i,r,f),a=!0},p(r,[f]){(!a||f&1&&c!==(c=""+(r[0]+" mt-50 svelte-110abfo")))&&m(e,"class",c)},i(r){a||(P(n.$$.fragment,r),P(i.$$.fragment,r),a=!0)},o(r){U(n.$$.fragment,r),U(i.$$.fragment,r),a=!1},d(r){r&&v(t),r&&v(e),ee(n),ee(i,r)}}}function gt(l,t,e){let{class:s=""}=t;return l.$$set=n=>{"class"in n&&e(0,s=n.class)},[s]}class kt extends Z{constructor(t){super();G(this,t,gt,mt,ue,{class:0})}}export{kt as default};
