import{K as Xe,C as Ye,S as Z,i as G,L as Qe,e as y,c as T,a as w,d as v,b as m,f as M,D as I,M as F,N as z,O as Ee,t as ye,g as Te,P as O,Q as oe,h as we,R as ie,T as We,E as K,U as Ce,V as re,W as ce,s as ue,v as J,w as $,x,X as de,Y as he,Z as me,p as P,_ as ge,$ as Ie,n as U,a0 as Oe,A as ee,m as ve,o as ke,a1 as Ze,a2 as pe,a3 as be,a4 as Ge,a5 as Je,a6 as De,a7 as Ae,j as $e,a8 as xe,l as et}from"../chunks/vendor-6ec25659.js";const V=Ye([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Fe=Xe(V,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=l.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,r)=>n.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(i)}),tt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},lt=l=>{l.style.height="auto",l.style.height=`${l.scrollHeight}px`};function Ne(l,t,e){const s=l.slice();return s[36]=t[e],s}function Se(l,t){let e,s,n,c,i;return{key:l,first:null,c(){e=y("li"),s=y("button"),this.h()},l(a){e=T(a,"LI",{class:!0});var r=w(e);s=T(r,"BUTTON",{class:!0,style:!0}),w(s).forEach(v),r.forEach(v),this.h()},h(){m(s,"class","task__color-btn svelte-13nui8e"),m(s,"style",n=`background-color: ${t[36].color}`),m(e,"class","task__color-item svelte-13nui8e"),this.first=e},m(a,r){M(a,e,r),I(e,s),c||(i=F(s,"click",z(function(){Ee(t[16](t[36].color))&&t[16](t[36].color).apply(this,arguments)})),c=!0)},p(a,r){t=a,r[0]&4100&&n!==(n=`background-color: ${t[36].color}`)&&m(s,"style",n)},d(a){a&&v(e),c=!1,i()}}}function st(l){let t,e,s,n,c=`${l[0]}`,i,a,r,f,_,k,b,C,g,o,u,h,A=[],B=new Map,N,q,H,R,j,te,X=l[12].filter(l[29]);const Y=p=>p[36].id;for(let p=0;p<X.length;p+=1){let E=Ne(l,X,p),L=Y(E);B.set(L,A[p]=Se(L,E))}return{c(){t=y("article"),e=y("div"),s=y("div"),n=y("p"),i=y("textarea"),r=y("div"),f=y("div"),_=y("span"),k=ye(l[4]),b=y("div"),C=y("button"),g=y("span"),o=y("button"),u=y("span"),h=y("ul");for(let p=0;p<A.length;p+=1)A[p].c();q=y("button"),H=y("span"),this.h()},l(p){t=T(p,"ARTICLE",{class:!0});var E=w(t);e=T(E,"DIV",{class:!0});var L=w(e);s=T(L,"DIV",{class:!0});var Q=w(s);n=T(Q,"P",{class:!0,contenteditable:!0});var fe=w(n);fe.forEach(v),i=T(Q,"TEXTAREA",{class:!0}),w(i).forEach(v),Q.forEach(v),r=T(L,"DIV",{class:!0});var le=w(r);f=T(le,"DIV",{class:!0});var se=w(f);_=T(se,"SPAN",{class:!0});var ne=w(_);k=Te(ne,l[4]),ne.forEach(v),se.forEach(v),le.forEach(v),L.forEach(v),b=T(E,"DIV",{class:!0});var W=w(b);C=T(W,"BUTTON",{class:!0});var ae=w(C);g=T(ae,"SPAN",{class:!0}),w(g).forEach(v),ae.forEach(v),o=T(W,"BUTTON",{class:!0});var d=w(o);u=T(d,"SPAN",{class:!0}),w(u).forEach(v),d.forEach(v),W.forEach(v),h=T(E,"UL",{class:!0,style:!0});var D=w(h);for(let _e=0;_e<A.length;_e+=1)A[_e].l(D);D.forEach(v),q=T(E,"BUTTON",{class:!0});var S=w(q);H=T(S,"SPAN",{class:!0}),w(H).forEach(v),S.forEach(v),E.forEach(v),this.h()},h(){m(n,"class","task__main-content svelte-13nui8e"),m(n,"contenteditable",l[7]),m(i,"class","task__main-content svelte-13nui8e"),i.disabled=a=!l[7],m(s,"class","task__main-container svelte-13nui8e"),m(_,"class","svelte-13nui8e"),m(f,"class","task__info-content svelte-13nui8e"),m(r,"class","task__info svelte-13nui8e"),m(e,"class","task__main svelte-13nui8e"),O(e,"isEdit",l[7]),m(g,"class","svg-image-del svelte-13nui8e"),m(C,"class","task__menu-btn task__menu-btn_del svelte-13nui8e"),m(u,"class","svg-image-pen svelte-13nui8e"),m(o,"class","task__menu-btn task__menu-btn_edit svelte-13nui8e"),O(o,"isSelect",l[7]),O(o,"isChanged",l[8]),O(o,"isSave",l[9]),m(b,"class","task__circle task__menu svelte-13nui8e"),O(b,"isOpen",l[7]),m(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-13nui8e"),m(h,"style",N=`background-color: ${l[2]}`),O(h,"isOpen",l[7]),m(H,"class","svelte-13nui8e"),m(q,"class","task__info-open svelte-13nui8e"),O(q,"isHidden",l[7]),m(t,"class",R="task "+l[1]+" svelte-13nui8e"),O(t,"isDisabled",l[3]),O(t,"isInfoOpen",l[5]),O(t,"isEdit",l[7])},m(p,E){M(p,t,E),I(t,e),I(e,s),I(s,n),n.innerHTML=c,l[22](n),I(s,i),l[24](i),oe(i,l[0]),I(e,r),I(r,f),I(f,_),I(_,k),l[27](r),I(t,b),I(b,C),I(C,g),I(b,o),I(o,u),I(t,h);for(let L=0;L<A.length;L+=1)A[L].m(h,null);I(t,q),I(q,H),j||(te=[F(n,"input",l[23]),F(n,"keydown",l[18]),F(i,"input",l[25]),F(i,"input",l[26]),F(e,"click",l[13]),F(C,"click",z(l[14])),F(o,"click",z(l[28])),F(q,"click",z(l[30]))],j=!0)},p(p,E){E[0]&1&&c!==(c=`${p[0]}`)&&(n.innerHTML=c),E[0]&128&&m(n,"contenteditable",p[7]),E[0]&128&&a!==(a=!p[7])&&(i.disabled=a),E[0]&1&&oe(i,p[0]),E[0]&16&&we(k,p[4]),E[0]&128&&O(e,"isEdit",p[7]),E[0]&128&&O(o,"isSelect",p[7]),E[0]&256&&O(o,"isChanged",p[8]),E[0]&512&&O(o,"isSave",p[9]),E[0]&128&&O(b,"isOpen",p[7]),E[0]&69636&&(X=p[12].filter(p[29]),A=ie(A,E,Y,1,p,X,B,h,We,Se,null,Ne)),E[0]&4&&N!==(N=`background-color: ${p[2]}`)&&m(h,"style",N),E[0]&128&&O(h,"isOpen",p[7]),E[0]&128&&O(q,"isHidden",p[7]),E[0]&2&&R!==(R="task "+p[1]+" svelte-13nui8e")&&m(t,"class",R),E[0]&10&&O(t,"isDisabled",p[3]),E[0]&34&&O(t,"isInfoOpen",p[5]),E[0]&130&&O(t,"isEdit",p[7])},i:K,o:K,d(p){p&&v(t),l[22](null),l[24](null),l[27](null);for(let E=0;E<A.length;E+=1)A[E].d();j=!1,Ce(te)}}}let qe=new Set;function nt(){qe.forEach(l=>{l.edit(!1)})}function at(l,t,e){let s,n;re(l,V,d=>e(32,s=d)),re(l,Fe,d=>e(12,n=d));let{class:c=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,k=!1,b,C=!1,g=!1,o=!1,u,h,A;const B=()=>{if(C===!1){let d=s.map(D=>(f===D.id&&(D.done=!D.done),D));V.set(d)}},N=()=>{let d=s.filter(D=>D.id!=f);V.set(d)};function q(d){e(7,C=d!=null?d:!C),C===!1&&j()}const H=d=>{let D=s.map(S=>(f===S.id&&(S.color=d),S));V.set(D)};function R(d){e(5,k=d!=null?d:!k);let D=0;b.childNodes.forEach(S=>D+=S.clientHeight),b.style.setProperty("--taskInfoHeight",`${k?D:0}px`)}function j(){if(g){let d=u.innerHTML;te(d).then(()=>{e(8,g=!1),clearTimeout(A),e(9,o=!0),A=setTimeout(()=>{e(9,o=!1)},500)})}}function te(d){if(typeof d=="string")return new Promise(D=>{V.set(s.map(S=>(S.id===f&&(S.text=d),S))),D()});throw new Error("The value is not equal to the string")}function X(d){let D=d.ctrlKey?!1:d.metaKey,S=d.keyCode;if(D&&S===83)return d.preventDefault(),j(),!1}function Y(d=(D=>(D=u.innerHTML)!=null?D:i)()){return e(8,g=d!==i)}qe.add({save(){j()},edit(d){q(d)}});const p=()=>{lt(h)};function E(d){ce[d?"unshift":"push"](()=>{u=d,e(10,u)})}const L=()=>Y();function Q(d){ce[d?"unshift":"push"](()=>{h=d,e(11,h)})}function fe(){i=this.value,e(0,i)}const le=()=>{p()};function se(d){ce[d?"unshift":"push"](()=>{b=d,e(6,b)})}const ne=()=>{C===!1&&nt(),q()},W=d=>d.color!=a,ae=()=>R();return l.$$set=d=>{"class"in d&&e(1,c=d.class),"text"in d&&e(0,i=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(21,f=d.id),"date"in d&&e(4,_=d.date)},[i,c,a,r,_,k,b,C,g,o,u,h,n,B,N,q,H,R,X,Y,p,f,E,L,Q,fe,le,se,ne,W,ae]}class Le extends Z{constructor(t){super();G(this,t,at,st,Qe,{class:1,text:0,color:2,disabled:3,id:21,date:4},null,[-1,-1])}}function Me(l,t,e){const s=l.slice();return s[4]=t[e],s}function Pe(l,t,e){const s=l.slice();return s[4]=t[e],s}function Ue(l,t){let e,s,n,c,i,a=K,r;return s=new Le({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),J(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=w(e);$(s.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){M(f,e,_),x(s,e,null),r=!0},p(f,_){t=f;const k={};_&2&&(k.text=t[4].text),_&2&&(k.color=t[4].color?t[4].color:null),_&2&&(k.id=t[4].id),_&2&&(k.date=t[4].date),s.$set(k)},r(){i=e.getBoundingClientRect()},f(){de(e),a(),he(e,i)},a(){a(),a=me(e,i,pe,{duration:300})},i(f){r||(P(s.$$.fragment,f),ge(()=>{c&&c.end(1),n=Ie(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){U(s.$$.fragment,f),n&&n.invalidate(),c=Oe(e,t[2],{key:t[4].id}),r=!1},d(f){f&&v(e),ee(s),f&&c&&c.end()}}}function Ve(l,t){let e,s,n,c,i,a=K,r;return s=new Le({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),J(s.$$.fragment),this.h()},l(f){e=T(f,"LI",{class:!0});var _=w(e);$(s.$$.fragment,_),_.forEach(v),this.h()},h(){m(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){M(f,e,_),x(s,e,null),r=!0},p(f,_){t=f;const k={};_&2&&(k.text=t[4].text),_&2&&(k.color=t[4].color?t[4].color:null),_&2&&(k.id=t[4].id),_&2&&(k.date=t[4].date),s.$set(k)},r(){i=e.getBoundingClientRect()},f(){de(e),a(),he(e,i)},a(){a(),a=me(e,i,pe,{duration:300})},i(f){r||(P(s.$$.fragment,f),ge(()=>{c&&c.end(1),n=Ie(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){U(s.$$.fragment,f),n&&n.invalidate(),c=Oe(e,t[2],{key:t[4].id}),r=!1},d(f){f&&v(e),ee(s),f&&c&&c.end()}}}function ot(l){let t,e,s,n=[],c=new Map,i,a=[],r=new Map,f,_,k=l[1].filter(Be);const b=o=>o[4].id;for(let o=0;o<k.length;o+=1){let u=Pe(l,k,o),h=b(u);c.set(h,n[o]=Ue(h,u))}let C=l[1].filter(He);const g=o=>o[4].id;for(let o=0;o<C.length;o+=1){let u=Me(l,C,o),h=g(u);r.set(h,a[o]=Ve(h,u))}return{c(){t=y("section"),e=y("div"),s=y("ul");for(let o=0;o<n.length;o+=1)n[o].c();i=y("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=T(o,"SECTION",{class:!0});var u=w(t);e=T(u,"DIV",{class:!0});var h=w(e);s=T(h,"UL",{class:!0});var A=w(s);for(let N=0;N<n.length;N+=1)n[N].l(A);A.forEach(v),i=T(h,"UL",{class:!0});var B=w(i);for(let N=0;N<a.length;N+=1)a[N].l(B);B.forEach(v),h.forEach(v),u.forEach(v),this.h()},h(){m(s,"class","task-section__col"),m(i,"class","task-section__col"),m(e,"class","container task-section__grid svelte-te6j4q"),m(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(o,u){M(o,t,u),I(t,e),I(e,s);for(let h=0;h<n.length;h+=1)n[h].m(s,null);I(e,i);for(let h=0;h<a.length;h+=1)a[h].m(i,null);_=!0},p(o,[u]){if(u&2){k=o[1].filter(Be),ve();for(let h=0;h<n.length;h+=1)n[h].r();n=ie(n,u,b,1,o,k,c,s,be,Ue,null,Pe);for(let h=0;h<n.length;h+=1)n[h].a();ke()}if(u&2){C=o[1].filter(He),ve();for(let h=0;h<a.length;h+=1)a[h].r();a=ie(a,u,g,1,o,C,r,i,be,Ve,null,Me);for(let h=0;h<a.length;h+=1)a[h].a();ke()}(!_||u&1&&f!==(f="task-section "+o[0]+" svelte-te6j4q"))&&m(t,"class",f)},i(o){if(!_){for(let u=0;u<k.length;u+=1)P(n[u]);for(let u=0;u<C.length;u+=1)P(a[u]);_=!0}},o(o){for(let u=0;u<n.length;u+=1)U(n[u]);for(let u=0;u<a.length;u+=1)U(a[u]);_=!1},d(o){o&&v(t);for(let u=0;u<n.length;u+=1)n[u].d();for(let u=0;u<a.length;u+=1)a[u].d()}}}const Be=l=>!l.done,He=l=>l.done;function it(l,t,e){let s;re(l,V,a=>e(1,s=a));let{class:n=""}=t;const[c,i]=Ze({duration:a=>Math.sqrt(a*200),fallback(a,r){const f=getComputedStyle(a),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Ge,css:k=>`
					transform: ${_} scale(${k});
					opacity: ${k}
				`}}});return l.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,s,c,i]}class rt extends Z{constructor(t){super();G(this,t,it,ot,ue,{class:0})}}function Re(l){let t,e,s,n=l[2].text&&je(l);return{c(){t=y("button"),n&&n.c(),this.h()},l(c){t=T(c,"BUTTON",{class:!0});var i=w(t);n&&n.l(i),i.forEach(v),this.h()},h(){m(t,"class","btn svelte-1yy2xse")},m(c,i){M(c,t,i),n&&n.m(t,null),e||(s=F(t,"click",z(l[6])),e=!0)},p(c,i){c[2].text?n?n.p(c,i):(n=je(c),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(c){c&&v(t),n&&n.d(),e=!1,s()}}}function je(l){let t=l[2].text+"",e;return{c(){e=ye(t)},l(s){e=Te(s,t)},m(s,n){M(s,e,n)},p(s,n){n&4&&t!==(t=s[2].text+"")&&we(e,t)},d(s){s&&v(e)}}}function ct(l){let t,e,s,n,c,i=l[2]&&Re(l);return{c(){t=y("div"),e=y("input"),i&&i.c(),this.h()},l(a){t=T(a,"DIV",{class:!0});var r=w(t);e=T(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(v),this.h()},h(){m(e,"placeholder",l[1]),m(e,"class","svelte-1yy2xse"),m(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),O(t,"isError",l[5])},m(a,r){M(a,t,r),I(t,e),oe(e,l[4]),i&&i.m(t,null),l[10](t),n||(c=[F(e,"input",l[9]),F(e,"input",l[7]),F(e,"keydown",l[8])],n=!0)},p(a,[r]){r&2&&m(e,"placeholder",a[1]),r&16&&e.value!==a[4]&&oe(e,a[4]),a[2]?i?i.p(a,r):(i=Re(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&m(t,"class",s),r&37&&O(t,"isError",a[5])},i:K,o:K,d(a){a&&v(t),i&&i.d(),l[10](null),n=!1,Ce(c)}}}function ut(l,t,e){let{class:s=""}=t,{placeholder:n="Placeholer"}=t,{btn:c=null}=t,i,a,r=!1;const f=Je(),_=()=>{a?(f("submit",{value:a}),e(4,a="")):e(5,r=!0)},k=()=>{e(5,r=!1)},b=o=>{let u=o.key,h=o.ctrlKey,A=o.shiftKey;o.keyCode,h&&A&&f("color"),u==="Enter"&&_()};function C(){a=this.value,e(4,a)}function g(o){ce[o?"unshift":"push"](()=>{i=o,e(3,i)})}return l.$$set=o=>{"class"in o&&e(0,s=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,c=o.btn)},[s,n,c,i,a,r,_,k,b,C,g]}class ft extends Z{constructor(t){super();G(this,t,ut,ct,ue,{class:0,placeholder:1,btn:2})}}function ze(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Ke(l,t){let e,s,n,c,i=K,a,r,f;return{key:l,first:null,c(){e=y("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(v),this.h()},h(){m(e,"class","add-todo__color svelte-1hafqlz"),m(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,k){M(_,e,k),a=!0,r||(f=F(e,"click",z(function(){Ee(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,k){t=_,(!a||k&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&m(e,"style",s)},r(){c=e.getBoundingClientRect()},f(){de(e),i(),he(e,c)},a(){i(),i=me(e,c,pe,{})},i(_){a||(ge(()=>{n||(n=De(e,Ae,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=De(e,Ae,{},!1)),n.run(0),a=!1},d(_){_&&v(e),_&&n&&n.end(),r=!1,f()}}}function _t(l){let t,e,s,n,c=[],i=new Map,a,r,f,_,k,b=l[3].filter(l[7]);const C=g=>g[9].id;for(let g=0;g<b.length;g+=1){let o=ze(l,b,g),u=C(o);i.set(u,c[g]=Ke(u,o))}return a=new ft({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",l[8]),a.$on("submit",l[4]),{c(){t=y("div"),e=y("div"),s=y("span");for(let g=0;g<c.length;g+=1)c[g].c();J(a.$$.fragment),this.h()},l(g){t=T(g,"DIV",{class:!0});var o=w(t);e=T(o,"DIV",{class:!0});var u=w(e);s=T(u,"SPAN",{class:!0,style:!0}),w(s).forEach(v);for(let h=0;h<c.length;h+=1)c[h].l(u);u.forEach(v),$(a.$$.fragment,o),o.forEach(v),this.h()},h(){m(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),m(s,"style",n=`color: ${l[1]}`),m(e,"class","add-todo__color-list svelte-1hafqlz"),O(e,"isOpen",l[2]),m(t,"class",r="add-todo "+l[0]+" svelte-1hafqlz")},m(g,o){M(g,t,o),I(t,e),I(e,s);for(let u=0;u<c.length;u+=1)c[u].m(e,null);x(a,t,null),f=!0,_||(k=F(s,"click",z(l[6])),_=!0)},p(g,[o]){if((!f||o&2&&n!==(n=`color: ${g[1]}`))&&m(s,"style",n),o&42){b=g[3].filter(g[7]),ve();for(let u=0;u<c.length;u+=1)c[u].r();c=ie(c,o,C,1,g,b,i,e,be,Ke,null,ze);for(let u=0;u<c.length;u+=1)c[u].a();ke()}o&4&&O(e,"isOpen",g[2]),(!f||o&1&&r!==(r="add-todo "+g[0]+" svelte-1hafqlz"))&&m(t,"class",r)},i(g){if(!f){for(let o=0;o<b.length;o+=1)P(c[o]);P(a.$$.fragment,g),f=!0}},o(g){for(let o=0;o<c.length;o+=1)U(c[o]);U(a.$$.fragment,g),f=!1},d(g){g&&v(t);for(let o=0;o<c.length;o+=1)c[o].d();ee(a),_=!1,k()}}}function dt(l,t,e){let s;re(l,Fe,b=>e(3,s=b));let{class:n=""}=t,c="#0029FF",i=!1;const a=b=>{let C={id:Date.now(),text:b.detail.value,color:c,done:!1,date:tt(new Date,"dot")};V.update(g=>g=[C,...g])},r=b=>b&&e(1,c=b),f=()=>e(2,i=!i),_=b=>b.color!=c,k=()=>e(2,i=!i);return l.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,c,i,s,a,r,f,_,k]}class ht extends Z{constructor(t){super();G(this,t,dt,_t,ue,{class:0})}}function mt(l){let t,e,s,n,c,i,a;return n=new ht({}),i=new rt({props:{class:"mt-50"}}),{c(){t=$e(),e=y("section"),s=y("div"),J(n.$$.fragment),J(i.$$.fragment),this.h()},l(r){xe('[data-svelte="svelte-1lxmpr"]',document.head).forEach(v),t=et(r),e=T(r,"SECTION",{class:!0});var _=w(e);s=T(_,"DIV",{class:!0});var k=w(s);$(n.$$.fragment,k),k.forEach(v),_.forEach(v),$(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",m(s,"class","container"),m(e,"class",c=""+(l[0]+" mt-50 svelte-110abfo"))},m(r,f){M(r,t,f),M(r,e,f),I(e,s),x(n,s,null),x(i,r,f),a=!0},p(r,[f]){(!a||f&1&&c!==(c=""+(r[0]+" mt-50 svelte-110abfo")))&&m(e,"class",c)},i(r){a||(P(n.$$.fragment,r),P(i.$$.fragment,r),a=!0)},o(r){U(n.$$.fragment,r),U(i.$$.fragment,r),a=!1},d(r){r&&v(t),r&&v(e),ee(n),ee(i,r)}}}function gt(l,t,e){let{class:s=""}=t;return l.$$set=n=>{"class"in n&&e(0,s=n.class)},[s]}class kt extends Z{constructor(t){super();G(this,t,gt,mt,ue,{class:0})}}export{kt as default};
