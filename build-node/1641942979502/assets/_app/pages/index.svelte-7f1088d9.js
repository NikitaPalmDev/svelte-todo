import{K as ze,C as Ye,S as X,i as Z,L as Qe,e as T,c as w,a as C,d as k,b as h,f as L,D as N,M as F,N as B,O as ke,t as pe,g as be,P as I,h as Ee,Q as ae,R as We,E as R,T as ye,U as oe,V as ce,s as ie,v as G,w as J,x as $,W as fe,X as ue,Y as _e,p as M,Z as de,_ as Te,n as U,$ as we,A as x,m as he,o as me,a0 as Xe,a1 as ge,a2 as ve,a3 as Ze,a4 as Ce,a5 as Ge,a6 as Oe,a7 as Ie,j as Je,a8 as $e,l as xe}from"../chunks/vendor-8ffd20c8.js";const V=Ye([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ne=ze(V,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=l.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,r)=>n.indexOf(a)===r).map((a,r)=>({id:r,color:a}));t(i)});function Se(l,t,e){const s=l.slice();return s[34]=t[e],s}function De(l,t){let e,s,n,f,i;return{key:l,first:null,c(){e=T("li"),s=T("button"),this.h()},l(a){e=w(a,"LI",{class:!0});var r=C(e);s=w(r,"BUTTON",{class:!0,style:!0}),C(s).forEach(k),r.forEach(k),this.h()},h(){h(s,"class","task__color-btn svelte-crl71x"),h(s,"style",n=`background-color: ${t[34].color}`),h(e,"class","task__color-item svelte-crl71x"),this.first=e},m(a,r){L(a,e,r),N(e,s),f||(i=F(s,"click",B(function(){ke(t[15](t[34].color))&&t[15](t[34].color).apply(this,arguments)})),f=!0)},p(a,r){t=a,r[0]&2052&&n!==(n=`background-color: ${t[34].color}`)&&h(s,"style",n)},d(a){a&&k(e),f=!1,i()}}}function et(l){let t,e,s,n,f=`${l[1]}`,i,a,r,u,_,m,E,y,g,o,c=[],v=new Map,P,A,D,H,j,K,z=l[11].filter(l[24]);const ee=p=>p[34].id;for(let p=0;p<z.length;p+=1){let b=Se(l,z,p),q=ee(b);v.set(q,c[p]=De(q,b))}return{c(){t=T("article"),e=T("div"),s=T("div"),n=T("p"),i=T("div"),a=T("div"),r=T("span"),u=pe(l[4]),_=T("div"),m=T("button"),E=T("span"),y=T("button"),g=T("span"),o=T("ul");for(let p=0;p<c.length;p+=1)c[p].c();A=T("button"),D=T("span"),this.h()},l(p){t=w(p,"ARTICLE",{class:!0});var b=C(t);e=w(b,"DIV",{class:!0});var q=C(e);s=w(q,"DIV",{class:!0});var te=C(s);n=w(te,"P",{class:!0,contenteditable:!0});var re=C(n);re.forEach(k),te.forEach(k),i=w(q,"DIV",{class:!0});var le=C(i);a=w(le,"DIV",{class:!0});var se=C(a);r=w(se,"SPAN",{class:!0});var ne=C(r);u=be(ne,l[4]),ne.forEach(k),se.forEach(k),le.forEach(k),q.forEach(k),_=w(b,"DIV",{class:!0});var Q=C(_);m=w(Q,"BUTTON",{class:!0});var d=C(m);E=w(d,"SPAN",{class:!0}),C(E).forEach(k),d.forEach(k),y=w(Q,"BUTTON",{class:!0});var O=C(y);g=w(O,"SPAN",{class:!0}),C(g).forEach(k),O.forEach(k),Q.forEach(k),o=w(b,"UL",{class:!0,style:!0});var S=C(o);for(let Y=0;Y<c.length;Y+=1)c[Y].l(S);S.forEach(k),A=w(b,"BUTTON",{class:!0});var W=C(A);D=w(W,"SPAN",{class:!0}),C(D).forEach(k),W.forEach(k),b.forEach(k),this.h()},h(){h(n,"class","task__main-content svelte-crl71x"),h(n,"contenteditable",l[7]),h(s,"class","task__main-container svelte-crl71x"),h(r,"class","svelte-crl71x"),h(a,"class","task__info-content svelte-crl71x"),h(i,"class","task__info svelte-crl71x"),h(e,"class","task__main svelte-crl71x"),I(e,"isEdit",l[7]),h(E,"class","svg-image-del svelte-crl71x"),h(m,"class","task__menu-btn task__menu-btn_del svelte-crl71x"),h(g,"class","svg-image-pen svelte-crl71x"),h(y,"class","task__menu-btn task__menu-btn_edit svelte-crl71x"),I(y,"isSelect",l[7]),I(y,"isChanged",l[8]),I(y,"isSave",l[9]),h(_,"class","task__circle task__menu svelte-crl71x"),I(_,"isOpen",l[7]),h(o,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-crl71x"),h(o,"style",P=`background-color: ${l[2]}`),I(o,"isOpen",l[7]),h(D,"class","svelte-crl71x"),h(A,"class","task__info-open svelte-crl71x"),I(A,"isHidden",l[7]),h(t,"class",H="task "+l[0]+" svelte-crl71x"),I(t,"isDisabled",l[3]),I(t,"isInfoOpen",l[5]),I(t,"isEdit",l[7])},m(p,b){L(p,t,b),N(t,e),N(e,s),N(s,n),n.innerHTML=f,l[20](n),N(e,i),N(i,a),N(a,r),N(r,u),l[22](i),N(t,_),N(_,m),N(m,E),N(_,y),N(y,g),N(t,o);for(let q=0;q<c.length;q+=1)c[q].m(o,null);N(t,A),N(A,D),j||(K=[F(n,"input",l[21]),F(n,"keydown",l[17]),F(e,"click",l[12]),F(m,"click",B(l[13])),F(y,"click",B(l[23])),F(A,"click",B(l[25]))],j=!0)},p(p,b){b[0]&2&&f!==(f=`${p[1]}`)&&(n.innerHTML=f),b[0]&128&&h(n,"contenteditable",p[7]),b[0]&16&&Ee(u,p[4]),b[0]&128&&I(e,"isEdit",p[7]),b[0]&128&&I(y,"isSelect",p[7]),b[0]&256&&I(y,"isChanged",p[8]),b[0]&512&&I(y,"isSave",p[9]),b[0]&128&&I(_,"isOpen",p[7]),b[0]&34820&&(z=p[11].filter(p[24]),c=ae(c,b,ee,1,p,z,v,o,We,De,null,Se)),b[0]&4&&P!==(P=`background-color: ${p[2]}`)&&h(o,"style",P),b[0]&128&&I(o,"isOpen",p[7]),b[0]&128&&I(A,"isHidden",p[7]),b[0]&1&&H!==(H="task "+p[0]+" svelte-crl71x")&&h(t,"class",H),b[0]&9&&I(t,"isDisabled",p[3]),b[0]&33&&I(t,"isInfoOpen",p[5]),b[0]&129&&I(t,"isEdit",p[7])},i:R,o:R,d(p){p&&k(t),l[20](null),l[22](null);for(let b=0;b<c.length;b+=1)c[b].d();j=!1,ye(K)}}}let Ae=new Set;function tt(){Ae.forEach(l=>{l.edit(!1)})}function Fe(l){for(var t=0;l=l.previousSibling;)t++;return t}function lt(l,t,e){let s,n;oe(l,V,d=>e(27,s=d)),oe(l,Ne,d=>e(11,n=d));let{class:f=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:r=!1}=t,{id:u=null}=t,{date:_=""}=t,m=!1,E,y=!1,g=!1,o=!1,c,v;const P=()=>{if(y===!1){let d=s.map(O=>(u===O.id&&(O.done=!O.done),O));V.set(d)}},A=()=>{let d=s.filter(O=>O.id!=u);V.set(d)};function D(d){e(7,y=d!=null?d:!y),y===!1&&K()}const H=d=>{let O=s.map(S=>(u===S.id&&(S.color=d),S));V.set(O)};function j(d){e(5,m=d!=null?d:!m);let O=0;E.childNodes.forEach(S=>O+=S.clientHeight),E.style.setProperty("--taskInfoHeight",`${m?O:0}px`)}function K(){if(g){q();let d=c.innerHTML;z(d).then(()=>{e(8,g=!1),clearTimeout(v),e(9,o=!0),v=setTimeout(()=>{e(9,o=!1)},500)})}}function z(d){if(typeof d=="string")return new Promise(O=>{V.set(s.map(S=>(S.id===u&&(S.text=d),S))),O()});throw new Error("The value is not equal to the string")}function ee(d){let O=d.ctrlKey?!1:d.metaKey,S=d.keyCode;if(O&&S===83)return d.preventDefault(),K(),!1}let p=c;function b(d=(O=>(O=c.innerHTML)!=null?O:i)()){return e(8,g=d!==i)}function q(){var d=window.getSelection().getRangeAt(0),O=d.startContainer,S=d.endContainer;console.log(S);let W=[];for(;O!==p;)W.push(Fe(O)),O=O.parentNode;let Y=[];for(;S!==p;)Y.push(Fe(S)),S=S.parentNode;window.rp={sC:W,sO:d.startOffset,eC:Y,eO:d.endOffset}}Ae.add({save(){K()},edit(d){D(d)}});function te(d){ce[d?"unshift":"push"](()=>{c=d,e(10,c)})}const re=()=>b();function le(d){ce[d?"unshift":"push"](()=>{E=d,e(6,E)})}const se=()=>{y===!1&&tt(),D()},ne=d=>d.color!=a,Q=()=>j();return l.$$set=d=>{"class"in d&&e(0,f=d.class),"text"in d&&e(1,i=d.text),"color"in d&&e(2,a=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(19,u=d.id),"date"in d&&e(4,_=d.date)},[f,i,a,r,_,m,E,y,g,o,c,n,P,A,D,H,j,ee,b,u,te,re,le,se,ne,Q]}class qe extends X{constructor(t){super();Z(this,t,lt,et,Qe,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Le(l,t,e){const s=l.slice();return s[4]=t[e],s}function Pe(l,t,e){const s=l.slice();return s[4]=t[e],s}function Me(l,t){let e,s,n,f,i,a=R,r;return s=new qe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),G(s.$$.fragment),this.h()},l(u){e=w(u,"LI",{class:!0});var _=C(e);J(s.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(u,_){L(u,e,_),$(s,e,null),r=!0},p(u,_){t=u;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),s.$set(m)},r(){i=e.getBoundingClientRect()},f(){fe(e),a(),ue(e,i)},a(){a(),a=_e(e,i,ge,{duration:300})},i(u){r||(M(s.$$.fragment,u),de(()=>{f&&f.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){U(s.$$.fragment,u),n&&n.invalidate(),f=we(e,t[2],{key:t[4].id}),r=!1},d(u){u&&k(e),x(s),u&&f&&f.end()}}}function Ue(l,t){let e,s,n,f,i,a=R,r;return s=new qe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),G(s.$$.fragment),this.h()},l(u){e=w(u,"LI",{class:!0});var _=C(e);J(s.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(u,_){L(u,e,_),$(s,e,null),r=!0},p(u,_){t=u;const m={};_&2&&(m.text=t[4].text),_&2&&(m.color=t[4].color?t[4].color:null),_&2&&(m.id=t[4].id),_&2&&(m.date=t[4].date),s.$set(m)},r(){i=e.getBoundingClientRect()},f(){fe(e),a(),ue(e,i)},a(){a(),a=_e(e,i,ge,{duration:300})},i(u){r||(M(s.$$.fragment,u),de(()=>{f&&f.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(u){U(s.$$.fragment,u),n&&n.invalidate(),f=we(e,t[2],{key:t[4].id}),r=!1},d(u){u&&k(e),x(s),u&&f&&f.end()}}}function st(l){let t,e,s,n=[],f=new Map,i,a=[],r=new Map,u,_,m=l[1].filter(Ve);const E=o=>o[4].id;for(let o=0;o<m.length;o+=1){let c=Pe(l,m,o),v=E(c);f.set(v,n[o]=Me(v,c))}let y=l[1].filter(Be);const g=o=>o[4].id;for(let o=0;o<y.length;o+=1){let c=Le(l,y,o),v=g(c);r.set(v,a[o]=Ue(v,c))}return{c(){t=T("section"),e=T("div"),s=T("ul");for(let o=0;o<n.length;o+=1)n[o].c();i=T("ul");for(let o=0;o<a.length;o+=1)a[o].c();this.h()},l(o){t=w(o,"SECTION",{class:!0});var c=C(t);e=w(c,"DIV",{class:!0});var v=C(e);s=w(v,"UL",{class:!0});var P=C(s);for(let D=0;D<n.length;D+=1)n[D].l(P);P.forEach(k),i=w(v,"UL",{class:!0});var A=C(i);for(let D=0;D<a.length;D+=1)a[D].l(A);A.forEach(k),v.forEach(k),c.forEach(k),this.h()},h(){h(s,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-te6j4q"),h(t,"class",u="task-section "+l[0]+" svelte-te6j4q")},m(o,c){L(o,t,c),N(t,e),N(e,s);for(let v=0;v<n.length;v+=1)n[v].m(s,null);N(e,i);for(let v=0;v<a.length;v+=1)a[v].m(i,null);_=!0},p(o,[c]){if(c&2){m=o[1].filter(Ve),he();for(let v=0;v<n.length;v+=1)n[v].r();n=ae(n,c,E,1,o,m,f,s,ve,Me,null,Pe);for(let v=0;v<n.length;v+=1)n[v].a();me()}if(c&2){y=o[1].filter(Be),he();for(let v=0;v<a.length;v+=1)a[v].r();a=ae(a,c,g,1,o,y,r,i,ve,Ue,null,Le);for(let v=0;v<a.length;v+=1)a[v].a();me()}(!_||c&1&&u!==(u="task-section "+o[0]+" svelte-te6j4q"))&&h(t,"class",u)},i(o){if(!_){for(let c=0;c<m.length;c+=1)M(n[c]);for(let c=0;c<y.length;c+=1)M(a[c]);_=!0}},o(o){for(let c=0;c<n.length;c+=1)U(n[c]);for(let c=0;c<a.length;c+=1)U(a[c]);_=!1},d(o){o&&k(t);for(let c=0;c<n.length;c+=1)n[c].d();for(let c=0;c<a.length;c+=1)a[c].d()}}}const Ve=l=>!l.done,Be=l=>l.done;function nt(l,t,e){let s;oe(l,V,a=>e(1,s=a));let{class:n=""}=t;const[f,i]=Xe({duration:a=>Math.sqrt(a*200),fallback(a,r){const u=getComputedStyle(a),_=u.transform==="none"?"":u.transform;return{duration:600,easing:Ze,css:m=>`
					transform: ${_} scale(${m});
					opacity: ${m}
				`}}});return l.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,s,f,i]}class at extends X{constructor(t){super();Z(this,t,nt,st,ie,{class:0})}}const ot=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}};function Re(l){let t,e,s,n=l[2].text&&He(l);return{c(){t=T("button"),n&&n.c(),this.h()},l(f){t=w(f,"BUTTON",{class:!0});var i=C(t);n&&n.l(i),i.forEach(k),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(f,i){L(f,t,i),n&&n.m(t,null),e||(s=F(t,"click",B(l[6])),e=!0)},p(f,i){f[2].text?n?n.p(f,i):(n=He(f),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(f){f&&k(t),n&&n.d(),e=!1,s()}}}function He(l){let t=l[2].text+"",e;return{c(){e=pe(t)},l(s){e=be(s,t)},m(s,n){L(s,e,n)},p(s,n){n&4&&t!==(t=s[2].text+"")&&Ee(e,t)},d(s){s&&k(e)}}}function it(l){let t,e,s,n,f,i=l[2]&&Re(l);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(a){t=w(a,"DIV",{class:!0});var r=C(t);e=w(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){h(e,"placeholder",l[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),I(t,"isError",l[5])},m(a,r){L(a,t,r),N(t,e),Ce(e,l[4]),i&&i.m(t,null),l[10](t),n||(f=[F(e,"input",l[9]),F(e,"input",l[7]),F(e,"keydown",l[8])],n=!0)},p(a,[r]){r&2&&h(e,"placeholder",a[1]),r&16&&e.value!==a[4]&&Ce(e,a[4]),a[2]?i?i.p(a,r):(i=Re(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",s),r&37&&I(t,"isError",a[5])},i:R,o:R,d(a){a&&k(t),i&&i.d(),l[10](null),n=!1,ye(f)}}}function rt(l,t,e){let{class:s=""}=t,{placeholder:n="Placeholer"}=t,{btn:f=null}=t,i,a,r=!1;const u=Ge(),_=()=>{a?(u("submit",{value:a}),e(4,a="")):e(5,r=!0)},m=()=>{e(5,r=!1)},E=o=>{let c=o.key,v=o.ctrlKey,P=o.shiftKey;o.keyCode,v&&P&&u("color"),c==="Enter"&&_()};function y(){a=this.value,e(4,a)}function g(o){ce[o?"unshift":"push"](()=>{i=o,e(3,i)})}return l.$$set=o=>{"class"in o&&e(0,s=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,f=o.btn)},[s,n,f,i,a,r,_,m,E,y,g]}class ct extends X{constructor(t){super();Z(this,t,rt,it,ie,{class:0,placeholder:1,btn:2})}}function je(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function Ke(l,t){let e,s,n,f,i=R,a,r,u;return{key:l,first:null,c(){e=T("button"),this.h()},l(_){e=w(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(k),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,m){L(_,e,m),a=!0,r||(u=F(e,"click",B(function(){ke(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,m){t=_,(!a||m&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",s)},r(){f=e.getBoundingClientRect()},f(){fe(e),i(),ue(e,f)},a(){i(),i=_e(e,f,ge,{})},i(_){a||(de(()=>{n||(n=Oe(e,Ie,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Oe(e,Ie,{},!1)),n.run(0),a=!1},d(_){_&&k(e),_&&n&&n.end(),r=!1,u()}}}function ft(l){let t,e,s,n,f=[],i=new Map,a,r,u,_,m,E=l[3].filter(l[7]);const y=g=>g[9].id;for(let g=0;g<E.length;g+=1){let o=je(l,E,g),c=y(o);i.set(c,f[g]=Ke(c,o))}return a=new ct({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",l[8]),a.$on("submit",l[4]),{c(){t=T("div"),e=T("div"),s=T("span");for(let g=0;g<f.length;g+=1)f[g].c();G(a.$$.fragment),this.h()},l(g){t=w(g,"DIV",{class:!0});var o=C(t);e=w(o,"DIV",{class:!0});var c=C(e);s=w(c,"SPAN",{class:!0,style:!0}),C(s).forEach(k);for(let v=0;v<f.length;v+=1)f[v].l(c);c.forEach(k),J(a.$$.fragment,o),o.forEach(k),this.h()},h(){h(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(s,"style",n=`color: ${l[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),I(e,"isOpen",l[2]),h(t,"class",r="add-todo "+l[0]+" svelte-1hafqlz")},m(g,o){L(g,t,o),N(t,e),N(e,s);for(let c=0;c<f.length;c+=1)f[c].m(e,null);$(a,t,null),u=!0,_||(m=F(s,"click",B(l[6])),_=!0)},p(g,[o]){if((!u||o&2&&n!==(n=`color: ${g[1]}`))&&h(s,"style",n),o&42){E=g[3].filter(g[7]),he();for(let c=0;c<f.length;c+=1)f[c].r();f=ae(f,o,y,1,g,E,i,e,ve,Ke,null,je);for(let c=0;c<f.length;c+=1)f[c].a();me()}o&4&&I(e,"isOpen",g[2]),(!u||o&1&&r!==(r="add-todo "+g[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(g){if(!u){for(let o=0;o<E.length;o+=1)M(f[o]);M(a.$$.fragment,g),u=!0}},o(g){for(let o=0;o<f.length;o+=1)U(f[o]);U(a.$$.fragment,g),u=!1},d(g){g&&k(t);for(let o=0;o<f.length;o+=1)f[o].d();x(a),_=!1,m()}}}function ut(l,t,e){let s;oe(l,Ne,E=>e(3,s=E));let{class:n=""}=t,f="#0029FF",i=!1;const a=E=>{let y={id:Date.now(),text:E.detail.value,color:f,done:!1,date:ot(new Date,"dot")};V.update(g=>g=[y,...g])},r=E=>E&&e(1,f=E),u=()=>e(2,i=!i),_=E=>E.color!=f,m=()=>e(2,i=!i);return l.$$set=E=>{"class"in E&&e(0,n=E.class)},[n,f,i,s,a,r,u,_,m]}class _t extends X{constructor(t){super();Z(this,t,ut,ft,ie,{class:0})}}function dt(l){let t,e,s,n,f,i,a;return n=new _t({}),i=new at({props:{class:"mt-50"}}),{c(){t=Je(),e=T("section"),s=T("div"),G(n.$$.fragment),G(i.$$.fragment),this.h()},l(r){$e('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=xe(r),e=w(r,"SECTION",{class:!0});var _=C(e);s=w(_,"DIV",{class:!0});var m=C(s);J(n.$$.fragment,m),m.forEach(k),_.forEach(k),J(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(s,"class","container"),h(e,"class",f=""+(l[0]+" mt-50 svelte-110abfo"))},m(r,u){L(r,t,u),L(r,e,u),N(e,s),$(n,s,null),$(i,r,u),a=!0},p(r,[u]){(!a||u&1&&f!==(f=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",f)},i(r){a||(M(n.$$.fragment,r),M(i.$$.fragment,r),a=!0)},o(r){U(n.$$.fragment,r),U(i.$$.fragment,r),a=!1},d(r){r&&k(t),r&&k(e),x(n),x(i,r)}}}function ht(l,t,e){let{class:s=""}=t;return l.$$set=n=>{"class"in n&&e(0,s=n.class)},[s]}class gt extends X{constructor(t){super();Z(this,t,ht,dt,ie,{class:0})}}export{gt as default};
