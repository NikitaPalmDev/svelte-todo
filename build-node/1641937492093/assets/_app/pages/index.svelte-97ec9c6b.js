import{K as Ke,C as Xe,S as X,i as Y,L as Ye,e as T,c as C,a as w,d as k,b as h,f as L,D as I,M as F,N as B,O as ke,t as pe,g as be,P as N,h as Ee,Q as le,R as Qe,E as H,T as ye,U as se,V as ie,s as ne,v as Q,w as W,x as Z,W as re,X as ce,Y as ue,p as R,Z as fe,_ as Te,n as U,$ as Ce,A as G,m as _e,o as de,a0 as We,a1 as he,a2 as ge,a3 as Ze,a4 as we,a5 as Ge,a6 as Ne,a7 as Ie,j as Je,a8 as $e,l as xe}from"../chunks/vendor-8ffd20c8.js";const V=Xe([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Oe=Ke(V,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=l.filter(o=>o.color).map(o=>o.color).concat(e),i=n.filter((o,r)=>n.indexOf(o)===r).map((o,r)=>({id:r,color:o}));t(i)}),et=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}};function ze(l,t,e){if(e||(e=document.createRange(),e.selectNode(l),e.setStart(l,0)),t.count===0)e.setEnd(l,t.count);else if(l&&t.count>0)if(l.nodeType===Node.TEXT_NODE)l.textContent.length<t.count?t.count-=l.textContent.length:(e.setEnd(l,t.count),t.count=0);else for(var s=0;s<l.childNodes.length&&(e=ze(l.childNodes[s],t,e),t.count!==0);s++);return e}function tt(l,t){if(t>=0){var e=window.getSelection();range=ze(l.parentNode,{count:t}),range&&(range.collapse(!1),e.removeAllRanges(),e.addRange(range))}}function De(l,t,e){const s=l.slice();return s[31]=t[e],s}function Se(l,t){let e,s,n,u,i;return{key:l,first:null,c(){e=T("li"),s=T("button"),this.h()},l(o){e=C(o,"LI",{class:!0});var r=w(e);s=C(r,"BUTTON",{class:!0,style:!0}),w(s).forEach(k),r.forEach(k),this.h()},h(){h(s,"class","task__color-btn svelte-11gvzec"),h(s,"style",n=`background-color: ${t[31].color}`),h(e,"class","task__color-item svelte-11gvzec"),this.first=e},m(o,r){L(o,e,r),I(e,s),u||(i=F(s,"click",B(function(){ke(t[15](t[31].color))&&t[15](t[31].color).apply(this,arguments)})),u=!0)},p(o,r){t=o,r[0]&2052&&n!==(n=`background-color: ${t[31].color}`)&&h(s,"style",n)},d(o){o&&k(e),u=!1,i()}}}function lt(l){let t,e,s,n,u=`${l[1]}`,i,o,r,f,_,g,E,y,v,a,c=[],m=new Map,A,D,z,M,j,K,P=l[11].filter(l[24]);const J=p=>p[31].id;for(let p=0;p<P.length;p+=1){let b=De(l,P,p),q=J(b);m.set(q,c[p]=Se(q,b))}return{c(){t=T("article"),e=T("div"),s=T("div"),n=T("p"),i=T("div"),o=T("div"),r=T("span"),f=pe(l[4]),_=T("div"),g=T("button"),E=T("span"),y=T("button"),v=T("span"),a=T("ul");for(let p=0;p<c.length;p+=1)c[p].c();D=T("button"),z=T("span"),this.h()},l(p){t=C(p,"ARTICLE",{class:!0});var b=w(t);e=C(b,"DIV",{class:!0});var q=w(e);s=C(q,"DIV",{class:!0});var $=w(s);n=C($,"P",{class:!0,contenteditable:!0});var oe=w(n);oe.forEach(k),$.forEach(k),i=C(q,"DIV",{class:!0});var x=w(i);o=C(x,"DIV",{class:!0});var ee=w(o);r=C(ee,"SPAN",{class:!0});var te=w(r);f=be(te,l[4]),te.forEach(k),ee.forEach(k),x.forEach(k),q.forEach(k),_=C(b,"DIV",{class:!0});var d=w(_);g=C(d,"BUTTON",{class:!0});var O=w(g);E=C(O,"SPAN",{class:!0}),w(E).forEach(k),O.forEach(k),y=C(d,"BUTTON",{class:!0});var S=w(y);v=C(S,"SPAN",{class:!0}),w(v).forEach(k),S.forEach(k),d.forEach(k),a=C(b,"UL",{class:!0,style:!0});var ve=w(a);for(let ae=0;ae<c.length;ae+=1)c[ae].l(ve);ve.forEach(k),D=C(b,"BUTTON",{class:!0});var me=w(D);z=C(me,"SPAN",{class:!0}),w(z).forEach(k),me.forEach(k),b.forEach(k),this.h()},h(){h(n,"class","task__main-content svelte-11gvzec"),h(n,"contenteditable",l[7]),h(s,"class","task__main-container svelte-11gvzec"),h(r,"class","svelte-11gvzec"),h(o,"class","task__info-content svelte-11gvzec"),h(i,"class","task__info svelte-11gvzec"),h(e,"class","task__main svelte-11gvzec"),N(e,"isEdit",l[7]),h(E,"class","svg-image-del svelte-11gvzec"),h(g,"class","task__menu-btn task__menu-btn_del svelte-11gvzec"),h(v,"class","svg-image-pen svelte-11gvzec"),h(y,"class","task__menu-btn task__menu-btn_edit svelte-11gvzec"),N(y,"isSelect",l[7]),N(y,"isChanged",l[8]),N(y,"isSave",l[9]),h(_,"class","task__circle task__menu svelte-11gvzec"),N(_,"isOpen",l[7]),h(a,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-11gvzec"),h(a,"style",A=`background-color: ${l[2]}`),N(a,"isOpen",l[7]),h(z,"class","svelte-11gvzec"),h(D,"class","task__info-open svelte-11gvzec"),N(D,"isHidden",l[7]),h(t,"class",M="task "+l[0]+" svelte-11gvzec"),N(t,"isDisabled",l[3]),N(t,"isInfoOpen",l[5]),N(t,"isEdit",l[7])},m(p,b){L(p,t,b),I(t,e),I(e,s),I(s,n),n.innerHTML=u,l[20](n),I(e,i),I(i,o),I(o,r),I(r,f),l[22](i),I(t,_),I(_,g),I(g,E),I(_,y),I(y,v),I(t,a);for(let q=0;q<c.length;q+=1)c[q].m(a,null);I(t,D),I(D,z),j||(K=[F(n,"input",l[21]),F(n,"keydown",l[17]),F(e,"click",l[12]),F(g,"click",B(l[13])),F(y,"click",B(l[23])),F(D,"click",B(l[25]))],j=!0)},p(p,b){b[0]&2&&u!==(u=`${p[1]}`)&&(n.innerHTML=u),b[0]&128&&h(n,"contenteditable",p[7]),b[0]&16&&Ee(f,p[4]),b[0]&128&&N(e,"isEdit",p[7]),b[0]&128&&N(y,"isSelect",p[7]),b[0]&256&&N(y,"isChanged",p[8]),b[0]&512&&N(y,"isSave",p[9]),b[0]&128&&N(_,"isOpen",p[7]),b[0]&34820&&(P=p[11].filter(p[24]),c=le(c,b,J,1,p,P,m,a,Qe,Se,null,De)),b[0]&4&&A!==(A=`background-color: ${p[2]}`)&&h(a,"style",A),b[0]&128&&N(a,"isOpen",p[7]),b[0]&128&&N(D,"isHidden",p[7]),b[0]&1&&M!==(M="task "+p[0]+" svelte-11gvzec")&&h(t,"class",M),b[0]&9&&N(t,"isDisabled",p[3]),b[0]&33&&N(t,"isInfoOpen",p[5]),b[0]&129&&N(t,"isEdit",p[7])},i:H,o:H,d(p){p&&k(t),l[20](null),l[22](null);for(let b=0;b<c.length;b+=1)c[b].d();j=!1,ye(K)}}}let Fe=new Set;function st(){Fe.forEach(l=>{l.edit(!1)})}function nt(l,t,e){let s,n;se(l,V,d=>e(28,s=d)),se(l,Oe,d=>e(11,n=d));let{class:u=""}=t,{text:i=""}=t,{color:o="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,g=!1,E,y=!1,v=!1,a=!1,c,m,A;const D=()=>{if(y===!1){let d=s.map(O=>(f===O.id&&(O.done=!O.done),O));V.set(d)}},z=()=>{let d=s.filter(O=>O.id!=f);V.set(d)};function M(d){e(7,y=d!=null?d:!y),y===!1&&P()}const j=d=>{let O=s.map(S=>(f===S.id&&(S.color=d),S));V.set(O)};function K(d){e(5,g=d!=null?d:!g);let O=0;E.childNodes.forEach(S=>O+=S.clientHeight),E.style.setProperty("--taskInfoHeight",`${g?O:0}px`)}function P(){if(v){let d=c.innerHTML;J(d).then(()=>{tt(c,20),e(8,v=!1),clearTimeout(m),e(9,a=!0),m=setTimeout(()=>{e(9,a=!1)},500)})}}function J(d){if(typeof d=="string")return new Promise(O=>{V.set(s.map(S=>(S.id===f&&(S.text=d),S))),O()});throw new Error("The value is not equal to the string")}function p(d){let O=d.ctrlKey?!1:d.metaKey,S=d.keyCode;if(O&&S===83)return d.preventDefault(),P(),!1;clearTimeout(A),A=setTimeout(()=>P(),1e3)}function b(d=(O=>(O=c.innerHTML)!=null?O:i)()){return e(8,v=d!==i)}Fe.add({save(){P()},edit(d){M(d)}});function q(d){ie[d?"unshift":"push"](()=>{c=d,e(10,c)})}const $=()=>b();function oe(d){ie[d?"unshift":"push"](()=>{E=d,e(6,E)})}const x=()=>{y===!1&&st(),M()},ee=d=>d.color!=o,te=()=>K();return l.$$set=d=>{"class"in d&&e(0,u=d.class),"text"in d&&e(1,i=d.text),"color"in d&&e(2,o=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(19,f=d.id),"date"in d&&e(4,_=d.date)},[u,i,o,r,_,g,E,y,v,a,c,n,D,z,M,j,K,p,b,f,q,$,oe,x,ee,te]}class Ae extends X{constructor(t){super();Y(this,t,nt,lt,Ye,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function qe(l,t,e){const s=l.slice();return s[4]=t[e],s}function Le(l,t,e){const s=l.slice();return s[4]=t[e],s}function Pe(l,t){let e,s,n,u,i,o=H,r;return s=new Ae({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),Q(s.$$.fragment),this.h()},l(f){e=C(f,"LI",{class:!0});var _=w(e);W(s.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),Z(s,e,null),r=!0},p(f,_){t=f;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),s.$set(g)},r(){i=e.getBoundingClientRect()},f(){re(e),o(),ce(e,i)},a(){o(),o=ue(e,i,he,{duration:300})},i(f){r||(R(s.$$.fragment,f),fe(()=>{u&&u.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){U(s.$$.fragment,f),n&&n.invalidate(),u=Ce(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),G(s),f&&u&&u.end()}}}function Me(l,t){let e,s,n,u,i,o=H,r;return s=new Ae({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),Q(s.$$.fragment),this.h()},l(f){e=C(f,"LI",{class:!0});var _=w(e);W(s.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),Z(s,e,null),r=!0},p(f,_){t=f;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),s.$set(g)},r(){i=e.getBoundingClientRect()},f(){re(e),o(),ce(e,i)},a(){o(),o=ue(e,i,he,{duration:300})},i(f){r||(R(s.$$.fragment,f),fe(()=>{u&&u.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){U(s.$$.fragment,f),n&&n.invalidate(),u=Ce(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),G(s),f&&u&&u.end()}}}function ot(l){let t,e,s,n=[],u=new Map,i,o=[],r=new Map,f,_,g=l[1].filter(Re);const E=a=>a[4].id;for(let a=0;a<g.length;a+=1){let c=Le(l,g,a),m=E(c);u.set(m,n[a]=Pe(m,c))}let y=l[1].filter(Ue);const v=a=>a[4].id;for(let a=0;a<y.length;a+=1){let c=qe(l,y,a),m=v(c);r.set(m,o[a]=Me(m,c))}return{c(){t=T("section"),e=T("div"),s=T("ul");for(let a=0;a<n.length;a+=1)n[a].c();i=T("ul");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){t=C(a,"SECTION",{class:!0});var c=w(t);e=C(c,"DIV",{class:!0});var m=w(e);s=C(m,"UL",{class:!0});var A=w(s);for(let z=0;z<n.length;z+=1)n[z].l(A);A.forEach(k),i=C(m,"UL",{class:!0});var D=w(i);for(let z=0;z<o.length;z+=1)o[z].l(D);D.forEach(k),m.forEach(k),c.forEach(k),this.h()},h(){h(s,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-te6j4q"),h(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(a,c){L(a,t,c),I(t,e),I(e,s);for(let m=0;m<n.length;m+=1)n[m].m(s,null);I(e,i);for(let m=0;m<o.length;m+=1)o[m].m(i,null);_=!0},p(a,[c]){if(c&2){g=a[1].filter(Re),_e();for(let m=0;m<n.length;m+=1)n[m].r();n=le(n,c,E,1,a,g,u,s,ge,Pe,null,Le);for(let m=0;m<n.length;m+=1)n[m].a();de()}if(c&2){y=a[1].filter(Ue),_e();for(let m=0;m<o.length;m+=1)o[m].r();o=le(o,c,v,1,a,y,r,i,ge,Me,null,qe);for(let m=0;m<o.length;m+=1)o[m].a();de()}(!_||c&1&&f!==(f="task-section "+a[0]+" svelte-te6j4q"))&&h(t,"class",f)},i(a){if(!_){for(let c=0;c<g.length;c+=1)R(n[c]);for(let c=0;c<y.length;c+=1)R(o[c]);_=!0}},o(a){for(let c=0;c<n.length;c+=1)U(n[c]);for(let c=0;c<o.length;c+=1)U(o[c]);_=!1},d(a){a&&k(t);for(let c=0;c<n.length;c+=1)n[c].d();for(let c=0;c<o.length;c+=1)o[c].d()}}}const Re=l=>!l.done,Ue=l=>l.done;function at(l,t,e){let s;se(l,V,o=>e(1,s=o));let{class:n=""}=t;const[u,i]=We({duration:o=>Math.sqrt(o*200),fallback(o,r){const f=getComputedStyle(o),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Ze,css:g=>`
					transform: ${_} scale(${g});
					opacity: ${g}
				`}}});return l.$$set=o=>{"class"in o&&e(0,n=o.class)},[n,s,u,i]}class it extends X{constructor(t){super();Y(this,t,at,ot,ne,{class:0})}}function Ve(l){let t,e,s,n=l[2].text&&Be(l);return{c(){t=T("button"),n&&n.c(),this.h()},l(u){t=C(u,"BUTTON",{class:!0});var i=w(t);n&&n.l(i),i.forEach(k),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(u,i){L(u,t,i),n&&n.m(t,null),e||(s=F(t,"click",B(l[6])),e=!0)},p(u,i){u[2].text?n?n.p(u,i):(n=Be(u),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(u){u&&k(t),n&&n.d(),e=!1,s()}}}function Be(l){let t=l[2].text+"",e;return{c(){e=pe(t)},l(s){e=be(s,t)},m(s,n){L(s,e,n)},p(s,n){n&4&&t!==(t=s[2].text+"")&&Ee(e,t)},d(s){s&&k(e)}}}function rt(l){let t,e,s,n,u,i=l[2]&&Ve(l);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(o){t=C(o,"DIV",{class:!0});var r=w(t);e=C(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){h(e,"placeholder",l[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),N(t,"isError",l[5])},m(o,r){L(o,t,r),I(t,e),we(e,l[4]),i&&i.m(t,null),l[10](t),n||(u=[F(e,"input",l[9]),F(e,"input",l[7]),F(e,"keydown",l[8])],n=!0)},p(o,[r]){r&2&&h(e,"placeholder",o[1]),r&16&&e.value!==o[4]&&we(e,o[4]),o[2]?i?i.p(o,r):(i=Ve(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&s!==(s="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",s),r&37&&N(t,"isError",o[5])},i:H,o:H,d(o){o&&k(t),i&&i.d(),l[10](null),n=!1,ye(u)}}}function ct(l,t,e){let{class:s=""}=t,{placeholder:n="Placeholer"}=t,{btn:u=null}=t,i,o,r=!1;const f=Ge(),_=()=>{o?(f("submit",{value:o}),e(4,o="")):e(5,r=!0)},g=()=>{e(5,r=!1)},E=a=>{let c=a.key,m=a.ctrlKey,A=a.shiftKey;a.keyCode,m&&A&&f("color"),c==="Enter"&&_()};function y(){o=this.value,e(4,o)}function v(a){ie[a?"unshift":"push"](()=>{i=a,e(3,i)})}return l.$$set=a=>{"class"in a&&e(0,s=a.class),"placeholder"in a&&e(1,n=a.placeholder),"btn"in a&&e(2,u=a.btn)},[s,n,u,i,o,r,_,g,E,y,v]}class ut extends X{constructor(t){super();Y(this,t,ct,rt,ne,{class:0,placeholder:1,btn:2})}}function He(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function je(l,t){let e,s,n,u,i=H,o,r,f;return{key:l,first:null,c(){e=T("button"),this.h()},l(_){e=C(_,"BUTTON",{class:!0,style:!0}),w(e).forEach(k),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,g){L(_,e,g),o=!0,r||(f=F(e,"click",B(function(){ke(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,g){t=_,(!o||g&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",s)},r(){u=e.getBoundingClientRect()},f(){re(e),i(),ce(e,u)},a(){i(),i=ue(e,u,he,{})},i(_){o||(fe(()=>{n||(n=Ne(e,Ie,{},!0)),n.run(1)}),o=!0)},o(_){n||(n=Ne(e,Ie,{},!1)),n.run(0),o=!1},d(_){_&&k(e),_&&n&&n.end(),r=!1,f()}}}function ft(l){let t,e,s,n,u=[],i=new Map,o,r,f,_,g,E=l[3].filter(l[7]);const y=v=>v[9].id;for(let v=0;v<E.length;v+=1){let a=He(l,E,v),c=y(a);i.set(c,u[v]=je(c,a))}return o=new ut({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),o.$on("color",l[8]),o.$on("submit",l[4]),{c(){t=T("div"),e=T("div"),s=T("span");for(let v=0;v<u.length;v+=1)u[v].c();Q(o.$$.fragment),this.h()},l(v){t=C(v,"DIV",{class:!0});var a=w(t);e=C(a,"DIV",{class:!0});var c=w(e);s=C(c,"SPAN",{class:!0,style:!0}),w(s).forEach(k);for(let m=0;m<u.length;m+=1)u[m].l(c);c.forEach(k),W(o.$$.fragment,a),a.forEach(k),this.h()},h(){h(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(s,"style",n=`color: ${l[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),N(e,"isOpen",l[2]),h(t,"class",r="add-todo "+l[0]+" svelte-1hafqlz")},m(v,a){L(v,t,a),I(t,e),I(e,s);for(let c=0;c<u.length;c+=1)u[c].m(e,null);Z(o,t,null),f=!0,_||(g=F(s,"click",B(l[6])),_=!0)},p(v,[a]){if((!f||a&2&&n!==(n=`color: ${v[1]}`))&&h(s,"style",n),a&42){E=v[3].filter(v[7]),_e();for(let c=0;c<u.length;c+=1)u[c].r();u=le(u,a,y,1,v,E,i,e,ge,je,null,He);for(let c=0;c<u.length;c+=1)u[c].a();de()}a&4&&N(e,"isOpen",v[2]),(!f||a&1&&r!==(r="add-todo "+v[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(v){if(!f){for(let a=0;a<E.length;a+=1)R(u[a]);R(o.$$.fragment,v),f=!0}},o(v){for(let a=0;a<u.length;a+=1)U(u[a]);U(o.$$.fragment,v),f=!1},d(v){v&&k(t);for(let a=0;a<u.length;a+=1)u[a].d();G(o),_=!1,g()}}}function _t(l,t,e){let s;se(l,Oe,E=>e(3,s=E));let{class:n=""}=t,u="#0029FF",i=!1;const o=E=>{let y={id:Date.now(),text:E.detail.value,color:u,done:!1,date:et(new Date,"dot")};V.update(v=>v=[y,...v])},r=E=>E&&e(1,u=E),f=()=>e(2,i=!i),_=E=>E.color!=u,g=()=>e(2,i=!i);return l.$$set=E=>{"class"in E&&e(0,n=E.class)},[n,u,i,s,o,r,f,_,g]}class dt extends X{constructor(t){super();Y(this,t,_t,ft,ne,{class:0})}}function ht(l){let t,e,s,n,u,i,o;return n=new dt({}),i=new it({props:{class:"mt-50"}}),{c(){t=Je(),e=T("section"),s=T("div"),Q(n.$$.fragment),Q(i.$$.fragment),this.h()},l(r){$e('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=xe(r),e=C(r,"SECTION",{class:!0});var _=w(e);s=C(_,"DIV",{class:!0});var g=w(s);W(n.$$.fragment,g),g.forEach(k),_.forEach(k),W(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(s,"class","container"),h(e,"class",u=""+(l[0]+" mt-50 svelte-110abfo"))},m(r,f){L(r,t,f),L(r,e,f),I(e,s),Z(n,s,null),Z(i,r,f),o=!0},p(r,[f]){(!o||f&1&&u!==(u=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",u)},i(r){o||(R(n.$$.fragment,r),R(i.$$.fragment,r),o=!0)},o(r){U(n.$$.fragment,r),U(i.$$.fragment,r),o=!1},d(r){r&&k(t),r&&k(e),G(n),G(i,r)}}}function gt(l,t,e){let{class:s=""}=t;return l.$$set=n=>{"class"in n&&e(0,s=n.class)},[s]}class mt extends X{constructor(t){super();Y(this,t,gt,ht,ne,{class:0})}}export{mt as default};
