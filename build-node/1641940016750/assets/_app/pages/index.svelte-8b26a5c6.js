import{K as Ke,C as Xe,S as X,i as Y,L as Ye,e as T,c as w,a as C,d as p,b as h,f as L,D as I,M as F,N as B,O as pe,t as ke,g as be,P as N,h as Ee,Q as se,R as Qe,E as H,T as ye,U as ne,V as re,r as We,s as oe,v as Q,w as W,x as Z,W as ce,X as ue,Y as fe,p as M,Z as _e,_ as Te,n as R,$ as we,A as G,m as de,o as he,a0 as Ze,a1 as ge,a2 as ve,a3 as Ge,a4 as Ce,a5 as Je,a6 as Ne,a7 as Ie,j as $e,a8 as xe,l as et}from"../chunks/vendor-8ffd20c8.js";const V=Xe([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=Ke(V,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=l.filter(o=>o.color).map(o=>o.color).concat(e),i=n.filter((o,r)=>n.indexOf(o)===r).map((o,r)=>({id:r,color:o}));t(i)}),tt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}};function lt(l){const t=window.getSelection(),e=t.baseOffset,s=t.baseNode;return console.log(t),console.log(s),{pos:e,node:s}}function Se(l,t,e){if(console.log("node",l),e||(e=document.createRange(),e.selectNode(l),e.setStart(l,0)),t.count===0)e.setEnd(l,t.count);else if(l&&t.count>0)if(l.nodeType===Node.TEXT_NODE)l.textContent.length<t.count?t.count-=l.textContent.length:(e.setEnd(l,t.count),t.count=0);else for(let s=0;s<l.childNodes.length&&(e=Se(l.childNodes[s],t,e),t.count!==0);s++);return e}function st(l,t){if(console.log("setNode",l),console.log("parentNode",l.parentNode),t>=0){let e=window.getSelection(),s=Se(l.parentNode,{count:t});s&&(s.collapse(!1),e.removeAllRanges(),e.addRange(s))}}function ze(l,t,e){const s=l.slice();return s[31]=t[e],s}function De(l,t){let e,s,n,u,i;return{key:l,first:null,c(){e=T("li"),s=T("button"),this.h()},l(o){e=w(o,"LI",{class:!0});var r=C(e);s=w(r,"BUTTON",{class:!0,style:!0}),C(s).forEach(p),r.forEach(p),this.h()},h(){h(s,"class","task__color-btn svelte-11gvzec"),h(s,"style",n=`background-color: ${t[31].color}`),h(e,"class","task__color-item svelte-11gvzec"),this.first=e},m(o,r){L(o,e,r),I(e,s),u||(i=F(s,"click",B(function(){pe(t[15](t[31].color))&&t[15](t[31].color).apply(this,arguments)})),u=!0)},p(o,r){t=o,r[0]&2052&&n!==(n=`background-color: ${t[31].color}`)&&h(s,"style",n)},d(o){o&&p(e),u=!1,i()}}}function nt(l){let t,e,s,n,u=`${l[1]}`,i,o,r,f,_,g,E,y,v,a,c=[],m=new Map,A,D,z,U,j,K,P=l[11].filter(l[24]);const J=k=>k[31].id;for(let k=0;k<P.length;k+=1){let b=ze(l,P,k),q=J(b);m.set(q,c[k]=De(q,b))}return{c(){t=T("article"),e=T("div"),s=T("div"),n=T("p"),i=T("div"),o=T("div"),r=T("span"),f=ke(l[4]),_=T("div"),g=T("button"),E=T("span"),y=T("button"),v=T("span"),a=T("ul");for(let k=0;k<c.length;k+=1)c[k].c();D=T("button"),z=T("span"),this.h()},l(k){t=w(k,"ARTICLE",{class:!0});var b=C(t);e=w(b,"DIV",{class:!0});var q=C(e);s=w(q,"DIV",{class:!0});var $=C(s);n=w($,"P",{class:!0,contenteditable:!0});var ae=C(n);ae.forEach(p),$.forEach(p),i=w(q,"DIV",{class:!0});var x=C(i);o=w(x,"DIV",{class:!0});var ee=C(o);r=w(ee,"SPAN",{class:!0});var te=C(r);f=be(te,l[4]),te.forEach(p),ee.forEach(p),x.forEach(p),q.forEach(p),_=w(b,"DIV",{class:!0});var d=C(_);g=w(d,"BUTTON",{class:!0});var O=C(g);E=w(O,"SPAN",{class:!0}),C(E).forEach(p),O.forEach(p),y=w(d,"BUTTON",{class:!0});var S=C(y);v=w(S,"SPAN",{class:!0}),C(v).forEach(p),S.forEach(p),d.forEach(p),a=w(b,"UL",{class:!0,style:!0});var le=C(a);for(let ie=0;ie<c.length;ie+=1)c[ie].l(le);le.forEach(p),D=w(b,"BUTTON",{class:!0});var me=C(D);z=w(me,"SPAN",{class:!0}),C(z).forEach(p),me.forEach(p),b.forEach(p),this.h()},h(){h(n,"class","task__main-content svelte-11gvzec"),h(n,"contenteditable",l[7]),h(s,"class","task__main-container svelte-11gvzec"),h(r,"class","svelte-11gvzec"),h(o,"class","task__info-content svelte-11gvzec"),h(i,"class","task__info svelte-11gvzec"),h(e,"class","task__main svelte-11gvzec"),N(e,"isEdit",l[7]),h(E,"class","svg-image-del svelte-11gvzec"),h(g,"class","task__menu-btn task__menu-btn_del svelte-11gvzec"),h(v,"class","svg-image-pen svelte-11gvzec"),h(y,"class","task__menu-btn task__menu-btn_edit svelte-11gvzec"),N(y,"isSelect",l[7]),N(y,"isChanged",l[8]),N(y,"isSave",l[9]),h(_,"class","task__circle task__menu svelte-11gvzec"),N(_,"isOpen",l[7]),h(a,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-11gvzec"),h(a,"style",A=`background-color: ${l[2]}`),N(a,"isOpen",l[7]),h(z,"class","svelte-11gvzec"),h(D,"class","task__info-open svelte-11gvzec"),N(D,"isHidden",l[7]),h(t,"class",U="task "+l[0]+" svelte-11gvzec"),N(t,"isDisabled",l[3]),N(t,"isInfoOpen",l[5]),N(t,"isEdit",l[7])},m(k,b){L(k,t,b),I(t,e),I(e,s),I(s,n),n.innerHTML=u,l[20](n),I(e,i),I(i,o),I(o,r),I(r,f),l[22](i),I(t,_),I(_,g),I(g,E),I(_,y),I(y,v),I(t,a);for(let q=0;q<c.length;q+=1)c[q].m(a,null);I(t,D),I(D,z),j||(K=[F(n,"input",l[21]),F(n,"keydown",l[17]),F(e,"click",l[12]),F(g,"click",B(l[13])),F(y,"click",B(l[23])),F(D,"click",B(l[25]))],j=!0)},p(k,b){b[0]&2&&u!==(u=`${k[1]}`)&&(n.innerHTML=u),b[0]&128&&h(n,"contenteditable",k[7]),b[0]&16&&Ee(f,k[4]),b[0]&128&&N(e,"isEdit",k[7]),b[0]&128&&N(y,"isSelect",k[7]),b[0]&256&&N(y,"isChanged",k[8]),b[0]&512&&N(y,"isSave",k[9]),b[0]&128&&N(_,"isOpen",k[7]),b[0]&34820&&(P=k[11].filter(k[24]),c=se(c,b,J,1,k,P,m,a,Qe,De,null,ze)),b[0]&4&&A!==(A=`background-color: ${k[2]}`)&&h(a,"style",A),b[0]&128&&N(a,"isOpen",k[7]),b[0]&128&&N(D,"isHidden",k[7]),b[0]&1&&U!==(U="task "+k[0]+" svelte-11gvzec")&&h(t,"class",U),b[0]&9&&N(t,"isDisabled",k[3]),b[0]&33&&N(t,"isInfoOpen",k[5]),b[0]&129&&N(t,"isEdit",k[7])},i:H,o:H,d(k){k&&p(t),l[20](null),l[22](null);for(let b=0;b<c.length;b+=1)c[b].d();j=!1,ye(K)}}}let Fe=new Set;function ot(){Fe.forEach(l=>{l.edit(!1)})}function at(l,t,e){let s,n;ne(l,V,d=>e(28,s=d)),ne(l,Oe,d=>e(11,n=d));let{class:u=""}=t,{text:i=""}=t,{color:o="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,g=!1,E,y=!1,v=!1,a=!1,c,m,A;const D=()=>{if(y===!1){let d=s.map(O=>(f===O.id&&(O.done=!O.done),O));V.set(d)}},z=()=>{let d=s.filter(O=>O.id!=f);V.set(d)};function U(d){e(7,y=d!=null?d:!y),y===!1&&P()}const j=d=>{let O=s.map(S=>(f===S.id&&(S.color=d),S));V.set(O)};function K(d){e(5,g=d!=null?d:!g);let O=0;E.childNodes.forEach(S=>O+=S.clientHeight),E.style.setProperty("--taskInfoHeight",`${g?O:0}px`)}function P(){if(v){let{pos:d,node:O}=lt(),S=c.innerHTML,le=J(S);st(O,d),We(()=>{console.log("update")}),le.then(()=>{e(8,v=!1),clearTimeout(m),e(9,a=!0),m=setTimeout(()=>{e(9,a=!1)},500)})}}function J(d){if(typeof d=="string")return new Promise(O=>{V.set(s.map(S=>(S.id===f&&(S.text=d),S))),O()});throw new Error("The value is not equal to the string")}function k(d){let O=d.ctrlKey?!1:d.metaKey,S=d.keyCode;if(O&&S===83)return d.preventDefault(),P(),!1;clearTimeout(A),A=setTimeout(()=>P(),1e3)}function b(d=(O=>(O=c.innerHTML)!=null?O:i)()){return e(8,v=d!==i)}Fe.add({save(){P()},edit(d){U(d)}});function q(d){re[d?"unshift":"push"](()=>{c=d,e(10,c)})}const $=()=>b();function ae(d){re[d?"unshift":"push"](()=>{E=d,e(6,E)})}const x=()=>{y===!1&&ot(),U()},ee=d=>d.color!=o,te=()=>K();return l.$$set=d=>{"class"in d&&e(0,u=d.class),"text"in d&&e(1,i=d.text),"color"in d&&e(2,o=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(19,f=d.id),"date"in d&&e(4,_=d.date)},[u,i,o,r,_,g,E,y,v,a,c,n,D,z,U,j,K,k,b,f,q,$,ae,x,ee,te]}class Ae extends X{constructor(t){super();Y(this,t,at,nt,Ye,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function qe(l,t,e){const s=l.slice();return s[4]=t[e],s}function Le(l,t,e){const s=l.slice();return s[4]=t[e],s}function Pe(l,t){let e,s,n,u,i,o=H,r;return s=new Ae({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),Q(s.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=C(e);W(s.$$.fragment,_),_.forEach(p),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),Z(s,e,null),r=!0},p(f,_){t=f;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),s.$set(g)},r(){i=e.getBoundingClientRect()},f(){ce(e),o(),ue(e,i)},a(){o(),o=fe(e,i,ge,{duration:300})},i(f){r||(M(s.$$.fragment,f),_e(()=>{u&&u.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){R(s.$$.fragment,f),n&&n.invalidate(),u=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&p(e),G(s),f&&u&&u.end()}}}function Ue(l,t){let e,s,n,u,i,o=H,r;return s=new Ae({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),Q(s.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=C(e);W(s.$$.fragment,_),_.forEach(p),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),Z(s,e,null),r=!0},p(f,_){t=f;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),s.$set(g)},r(){i=e.getBoundingClientRect()},f(){ce(e),o(),ue(e,i)},a(){o(),o=fe(e,i,ge,{duration:300})},i(f){r||(M(s.$$.fragment,f),_e(()=>{u&&u.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){R(s.$$.fragment,f),n&&n.invalidate(),u=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&p(e),G(s),f&&u&&u.end()}}}function it(l){let t,e,s,n=[],u=new Map,i,o=[],r=new Map,f,_,g=l[1].filter(Me);const E=a=>a[4].id;for(let a=0;a<g.length;a+=1){let c=Le(l,g,a),m=E(c);u.set(m,n[a]=Pe(m,c))}let y=l[1].filter(Re);const v=a=>a[4].id;for(let a=0;a<y.length;a+=1){let c=qe(l,y,a),m=v(c);r.set(m,o[a]=Ue(m,c))}return{c(){t=T("section"),e=T("div"),s=T("ul");for(let a=0;a<n.length;a+=1)n[a].c();i=T("ul");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){t=w(a,"SECTION",{class:!0});var c=C(t);e=w(c,"DIV",{class:!0});var m=C(e);s=w(m,"UL",{class:!0});var A=C(s);for(let z=0;z<n.length;z+=1)n[z].l(A);A.forEach(p),i=w(m,"UL",{class:!0});var D=C(i);for(let z=0;z<o.length;z+=1)o[z].l(D);D.forEach(p),m.forEach(p),c.forEach(p),this.h()},h(){h(s,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-te6j4q"),h(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(a,c){L(a,t,c),I(t,e),I(e,s);for(let m=0;m<n.length;m+=1)n[m].m(s,null);I(e,i);for(let m=0;m<o.length;m+=1)o[m].m(i,null);_=!0},p(a,[c]){if(c&2){g=a[1].filter(Me),de();for(let m=0;m<n.length;m+=1)n[m].r();n=se(n,c,E,1,a,g,u,s,ve,Pe,null,Le);for(let m=0;m<n.length;m+=1)n[m].a();he()}if(c&2){y=a[1].filter(Re),de();for(let m=0;m<o.length;m+=1)o[m].r();o=se(o,c,v,1,a,y,r,i,ve,Ue,null,qe);for(let m=0;m<o.length;m+=1)o[m].a();he()}(!_||c&1&&f!==(f="task-section "+a[0]+" svelte-te6j4q"))&&h(t,"class",f)},i(a){if(!_){for(let c=0;c<g.length;c+=1)M(n[c]);for(let c=0;c<y.length;c+=1)M(o[c]);_=!0}},o(a){for(let c=0;c<n.length;c+=1)R(n[c]);for(let c=0;c<o.length;c+=1)R(o[c]);_=!1},d(a){a&&p(t);for(let c=0;c<n.length;c+=1)n[c].d();for(let c=0;c<o.length;c+=1)o[c].d()}}}const Me=l=>!l.done,Re=l=>l.done;function rt(l,t,e){let s;ne(l,V,o=>e(1,s=o));let{class:n=""}=t;const[u,i]=Ze({duration:o=>Math.sqrt(o*200),fallback(o,r){const f=getComputedStyle(o),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Ge,css:g=>`
					transform: ${_} scale(${g});
					opacity: ${g}
				`}}});return l.$$set=o=>{"class"in o&&e(0,n=o.class)},[n,s,u,i]}class ct extends X{constructor(t){super();Y(this,t,rt,it,oe,{class:0})}}function Ve(l){let t,e,s,n=l[2].text&&Be(l);return{c(){t=T("button"),n&&n.c(),this.h()},l(u){t=w(u,"BUTTON",{class:!0});var i=C(t);n&&n.l(i),i.forEach(p),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(u,i){L(u,t,i),n&&n.m(t,null),e||(s=F(t,"click",B(l[6])),e=!0)},p(u,i){u[2].text?n?n.p(u,i):(n=Be(u),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(u){u&&p(t),n&&n.d(),e=!1,s()}}}function Be(l){let t=l[2].text+"",e;return{c(){e=ke(t)},l(s){e=be(s,t)},m(s,n){L(s,e,n)},p(s,n){n&4&&t!==(t=s[2].text+"")&&Ee(e,t)},d(s){s&&p(e)}}}function ut(l){let t,e,s,n,u,i=l[2]&&Ve(l);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(o){t=w(o,"DIV",{class:!0});var r=C(t);e=w(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(p),this.h()},h(){h(e,"placeholder",l[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),N(t,"isError",l[5])},m(o,r){L(o,t,r),I(t,e),Ce(e,l[4]),i&&i.m(t,null),l[10](t),n||(u=[F(e,"input",l[9]),F(e,"input",l[7]),F(e,"keydown",l[8])],n=!0)},p(o,[r]){r&2&&h(e,"placeholder",o[1]),r&16&&e.value!==o[4]&&Ce(e,o[4]),o[2]?i?i.p(o,r):(i=Ve(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&s!==(s="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",s),r&37&&N(t,"isError",o[5])},i:H,o:H,d(o){o&&p(t),i&&i.d(),l[10](null),n=!1,ye(u)}}}function ft(l,t,e){let{class:s=""}=t,{placeholder:n="Placeholer"}=t,{btn:u=null}=t,i,o,r=!1;const f=Je(),_=()=>{o?(f("submit",{value:o}),e(4,o="")):e(5,r=!0)},g=()=>{e(5,r=!1)},E=a=>{let c=a.key,m=a.ctrlKey,A=a.shiftKey;a.keyCode,m&&A&&f("color"),c==="Enter"&&_()};function y(){o=this.value,e(4,o)}function v(a){re[a?"unshift":"push"](()=>{i=a,e(3,i)})}return l.$$set=a=>{"class"in a&&e(0,s=a.class),"placeholder"in a&&e(1,n=a.placeholder),"btn"in a&&e(2,u=a.btn)},[s,n,u,i,o,r,_,g,E,y,v]}class _t extends X{constructor(t){super();Y(this,t,ft,ut,oe,{class:0,placeholder:1,btn:2})}}function He(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function je(l,t){let e,s,n,u,i=H,o,r,f;return{key:l,first:null,c(){e=T("button"),this.h()},l(_){e=w(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(p),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,g){L(_,e,g),o=!0,r||(f=F(e,"click",B(function(){pe(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,g){t=_,(!o||g&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",s)},r(){u=e.getBoundingClientRect()},f(){ce(e),i(),ue(e,u)},a(){i(),i=fe(e,u,ge,{})},i(_){o||(_e(()=>{n||(n=Ne(e,Ie,{},!0)),n.run(1)}),o=!0)},o(_){n||(n=Ne(e,Ie,{},!1)),n.run(0),o=!1},d(_){_&&p(e),_&&n&&n.end(),r=!1,f()}}}function dt(l){let t,e,s,n,u=[],i=new Map,o,r,f,_,g,E=l[3].filter(l[7]);const y=v=>v[9].id;for(let v=0;v<E.length;v+=1){let a=He(l,E,v),c=y(a);i.set(c,u[v]=je(c,a))}return o=new _t({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),o.$on("color",l[8]),o.$on("submit",l[4]),{c(){t=T("div"),e=T("div"),s=T("span");for(let v=0;v<u.length;v+=1)u[v].c();Q(o.$$.fragment),this.h()},l(v){t=w(v,"DIV",{class:!0});var a=C(t);e=w(a,"DIV",{class:!0});var c=C(e);s=w(c,"SPAN",{class:!0,style:!0}),C(s).forEach(p);for(let m=0;m<u.length;m+=1)u[m].l(c);c.forEach(p),W(o.$$.fragment,a),a.forEach(p),this.h()},h(){h(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(s,"style",n=`color: ${l[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),N(e,"isOpen",l[2]),h(t,"class",r="add-todo "+l[0]+" svelte-1hafqlz")},m(v,a){L(v,t,a),I(t,e),I(e,s);for(let c=0;c<u.length;c+=1)u[c].m(e,null);Z(o,t,null),f=!0,_||(g=F(s,"click",B(l[6])),_=!0)},p(v,[a]){if((!f||a&2&&n!==(n=`color: ${v[1]}`))&&h(s,"style",n),a&42){E=v[3].filter(v[7]),de();for(let c=0;c<u.length;c+=1)u[c].r();u=se(u,a,y,1,v,E,i,e,ve,je,null,He);for(let c=0;c<u.length;c+=1)u[c].a();he()}a&4&&N(e,"isOpen",v[2]),(!f||a&1&&r!==(r="add-todo "+v[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(v){if(!f){for(let a=0;a<E.length;a+=1)M(u[a]);M(o.$$.fragment,v),f=!0}},o(v){for(let a=0;a<u.length;a+=1)R(u[a]);R(o.$$.fragment,v),f=!1},d(v){v&&p(t);for(let a=0;a<u.length;a+=1)u[a].d();G(o),_=!1,g()}}}function ht(l,t,e){let s;ne(l,Oe,E=>e(3,s=E));let{class:n=""}=t,u="#0029FF",i=!1;const o=E=>{let y={id:Date.now(),text:E.detail.value,color:u,done:!1,date:tt(new Date,"dot")};V.update(v=>v=[y,...v])},r=E=>E&&e(1,u=E),f=()=>e(2,i=!i),_=E=>E.color!=u,g=()=>e(2,i=!i);return l.$$set=E=>{"class"in E&&e(0,n=E.class)},[n,u,i,s,o,r,f,_,g]}class gt extends X{constructor(t){super();Y(this,t,ht,dt,oe,{class:0})}}function vt(l){let t,e,s,n,u,i,o;return n=new gt({}),i=new ct({props:{class:"mt-50"}}),{c(){t=$e(),e=T("section"),s=T("div"),Q(n.$$.fragment),Q(i.$$.fragment),this.h()},l(r){xe('[data-svelte="svelte-1lxmpr"]',document.head).forEach(p),t=et(r),e=w(r,"SECTION",{class:!0});var _=C(e);s=w(_,"DIV",{class:!0});var g=C(s);W(n.$$.fragment,g),g.forEach(p),_.forEach(p),W(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(s,"class","container"),h(e,"class",u=""+(l[0]+" mt-50 svelte-110abfo"))},m(r,f){L(r,t,f),L(r,e,f),I(e,s),Z(n,s,null),Z(i,r,f),o=!0},p(r,[f]){(!o||f&1&&u!==(u=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",u)},i(r){o||(M(n.$$.fragment,r),M(i.$$.fragment,r),o=!0)},o(r){R(n.$$.fragment,r),R(i.$$.fragment,r),o=!1},d(r){r&&p(t),r&&p(e),G(n),G(i,r)}}}function mt(l,t,e){let{class:s=""}=t;return l.$$set=n=>{"class"in n&&e(0,s=n.class)},[s]}class kt extends X{constructor(t){super();Y(this,t,mt,vt,oe,{class:0})}}export{kt as default};
