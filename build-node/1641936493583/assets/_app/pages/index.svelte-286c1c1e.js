import{K as He,C as Ke,S as Q,i as W,L as Ye,e as T,c as w,a as C,d as k,b as h,f as L,D as O,M as F,N as B,O as ke,t as pe,g as be,P as I,h as Ee,Q as se,R as Qe,E as j,T as ye,U as ne,V as re,s as oe,v as X,w as Z,x as G,W as ce,X as ue,Y as fe,p as U,Z as _e,_ as Te,n as V,$ as we,A as J,m as de,o as he,a0 as We,a1 as ge,a2 as ve,a3 as Xe,a4 as Ce,a5 as Ze,a6 as Ie,a7 as Oe,j as Ge,a8 as Je,l as $e}from"../chunks/vendor-8ffd20c8.js";const R=Ke([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),ze=He(R,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=l.filter(o=>o.color).map(o=>o.color).concat(e),i=n.filter((o,r)=>n.indexOf(o)===r).map((o,r)=>({id:r,color:o}));t(i)}),xe=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}},et=l=>{const t=window.getSelection();let e=t.getRangeAt(0);return{pos:t.anchorOffset,range:e}},tt=l=>{console.log(l);const t=window.getSelection();t.removeAllRanges(),t.addRange(l)};function Se(l,t,e){const s=l.slice();return s[31]=t[e],s}function De(l,t){let e,s,n,u,i;return{key:l,first:null,c(){e=T("li"),s=T("button"),this.h()},l(o){e=w(o,"LI",{class:!0});var r=C(e);s=w(r,"BUTTON",{class:!0,style:!0}),C(s).forEach(k),r.forEach(k),this.h()},h(){h(s,"class","task__color-btn svelte-11gvzec"),h(s,"style",n=`background-color: ${t[31].color}`),h(e,"class","task__color-item svelte-11gvzec"),this.first=e},m(o,r){L(o,e,r),O(e,s),u||(i=F(s,"click",B(function(){ke(t[15](t[31].color))&&t[15](t[31].color).apply(this,arguments)})),u=!0)},p(o,r){t=o,r[0]&2052&&n!==(n=`background-color: ${t[31].color}`)&&h(s,"style",n)},d(o){o&&k(e),u=!1,i()}}}function lt(l){let t,e,s,n,u=`${l[1]}`,i,o,r,f,_,g,E,y,v,a,c=[],m=new Map,N,A,D,M,H,K,P=l[11].filter(l[24]);const $=p=>p[31].id;for(let p=0;p<P.length;p+=1){let b=Se(l,P,p),q=$(b);m.set(q,c[p]=De(q,b))}return{c(){t=T("article"),e=T("div"),s=T("div"),n=T("p"),i=T("div"),o=T("div"),r=T("span"),f=pe(l[4]),_=T("div"),g=T("button"),E=T("span"),y=T("button"),v=T("span"),a=T("ul");for(let p=0;p<c.length;p+=1)c[p].c();A=T("button"),D=T("span"),this.h()},l(p){t=w(p,"ARTICLE",{class:!0});var b=C(t);e=w(b,"DIV",{class:!0});var q=C(e);s=w(q,"DIV",{class:!0});var x=C(s);n=w(x,"P",{class:!0,contenteditable:!0});var ae=C(n);ae.forEach(k),x.forEach(k),i=w(q,"DIV",{class:!0});var ee=C(i);o=w(ee,"DIV",{class:!0});var te=C(o);r=w(te,"SPAN",{class:!0});var le=C(r);f=be(le,l[4]),le.forEach(k),te.forEach(k),ee.forEach(k),q.forEach(k),_=w(b,"DIV",{class:!0});var d=C(_);g=w(d,"BUTTON",{class:!0});var z=C(g);E=w(z,"SPAN",{class:!0}),C(E).forEach(k),z.forEach(k),y=w(d,"BUTTON",{class:!0});var S=C(y);v=w(S,"SPAN",{class:!0}),C(v).forEach(k),S.forEach(k),d.forEach(k),a=w(b,"UL",{class:!0,style:!0});var Y=C(a);for(let ie=0;ie<c.length;ie+=1)c[ie].l(Y);Y.forEach(k),A=w(b,"BUTTON",{class:!0});var me=C(A);D=w(me,"SPAN",{class:!0}),C(D).forEach(k),me.forEach(k),b.forEach(k),this.h()},h(){h(n,"class","task__main-content svelte-11gvzec"),h(n,"contenteditable",l[7]),h(s,"class","task__main-container svelte-11gvzec"),h(r,"class","svelte-11gvzec"),h(o,"class","task__info-content svelte-11gvzec"),h(i,"class","task__info svelte-11gvzec"),h(e,"class","task__main svelte-11gvzec"),I(e,"isEdit",l[7]),h(E,"class","svg-image-del svelte-11gvzec"),h(g,"class","task__menu-btn task__menu-btn_del svelte-11gvzec"),h(v,"class","svg-image-pen svelte-11gvzec"),h(y,"class","task__menu-btn task__menu-btn_edit svelte-11gvzec"),I(y,"isSelect",l[7]),I(y,"isChanged",l[8]),I(y,"isSave",l[9]),h(_,"class","task__circle task__menu svelte-11gvzec"),I(_,"isOpen",l[7]),h(a,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-11gvzec"),h(a,"style",N=`background-color: ${l[2]}`),I(a,"isOpen",l[7]),h(D,"class","svelte-11gvzec"),h(A,"class","task__info-open svelte-11gvzec"),I(A,"isHidden",l[7]),h(t,"class",M="task "+l[0]+" svelte-11gvzec"),I(t,"isDisabled",l[3]),I(t,"isInfoOpen",l[5]),I(t,"isEdit",l[7])},m(p,b){L(p,t,b),O(t,e),O(e,s),O(s,n),n.innerHTML=u,l[20](n),O(e,i),O(i,o),O(o,r),O(r,f),l[22](i),O(t,_),O(_,g),O(g,E),O(_,y),O(y,v),O(t,a);for(let q=0;q<c.length;q+=1)c[q].m(a,null);O(t,A),O(A,D),H||(K=[F(n,"input",l[21]),F(n,"keydown",l[17]),F(e,"click",l[12]),F(g,"click",B(l[13])),F(y,"click",B(l[23])),F(A,"click",B(l[25]))],H=!0)},p(p,b){b[0]&2&&u!==(u=`${p[1]}`)&&(n.innerHTML=u),b[0]&128&&h(n,"contenteditable",p[7]),b[0]&16&&Ee(f,p[4]),b[0]&128&&I(e,"isEdit",p[7]),b[0]&128&&I(y,"isSelect",p[7]),b[0]&256&&I(y,"isChanged",p[8]),b[0]&512&&I(y,"isSave",p[9]),b[0]&128&&I(_,"isOpen",p[7]),b[0]&34820&&(P=p[11].filter(p[24]),c=se(c,b,$,1,p,P,m,a,Qe,De,null,Se)),b[0]&4&&N!==(N=`background-color: ${p[2]}`)&&h(a,"style",N),b[0]&128&&I(a,"isOpen",p[7]),b[0]&128&&I(A,"isHidden",p[7]),b[0]&1&&M!==(M="task "+p[0]+" svelte-11gvzec")&&h(t,"class",M),b[0]&9&&I(t,"isDisabled",p[3]),b[0]&33&&I(t,"isInfoOpen",p[5]),b[0]&129&&I(t,"isEdit",p[7])},i:j,o:j,d(p){p&&k(t),l[20](null),l[22](null);for(let b=0;b<c.length;b+=1)c[b].d();H=!1,ye(K)}}}let Ae=new Set;function st(){Ae.forEach(l=>{l.edit(!1)})}function nt(l,t,e){let s,n;ne(l,R,d=>e(28,s=d)),ne(l,ze,d=>e(11,n=d));let{class:u=""}=t,{text:i=""}=t,{color:o="#0029FF"}=t,{disabled:r=!1}=t,{id:f=null}=t,{date:_=""}=t,g=!1,E,y=!1,v=!1,a=!1,c,m,N;const A=()=>{if(y===!1){let d=s.map(z=>(f===z.id&&(z.done=!z.done),z));R.set(d)}},D=()=>{let d=s.filter(z=>z.id!=f);R.set(d)};function M(d){e(7,y=d!=null?d:!y),y===!1&&P()}const H=d=>{let z=s.map(S=>(f===S.id&&(S.color=d),S));R.set(z)};function K(d){e(5,g=d!=null?d:!g);let z=0;E.childNodes.forEach(S=>z+=S.clientHeight),E.style.setProperty("--taskInfoHeight",`${g?z:0}px`)}function P(){if(v){let d=c.innerHTML,z=$(d),{range:S}=et(),Y=Object.assign(S,S);console.log(Y),z.then(()=>{tt(Y),e(8,v=!1),clearTimeout(m),e(9,a=!0),m=setTimeout(()=>{e(9,a=!1)},500)})}}function $(d){if(typeof d=="string")return new Promise(z=>{R.set(s.map(S=>(S.id===f&&(S.text=d),S))),z()});throw new Error("The value is not equal to the string")}function p(d){let z=d.ctrlKey?!1:d.metaKey,S=d.keyCode;if(z&&S===83)return d.preventDefault(),P(),!1;clearTimeout(N),N=setTimeout(()=>P(),1e3)}function b(d=(z=>(z=c.innerHTML)!=null?z:i)()){return e(8,v=d!==i)}Ae.add({save(){P()},edit(d){M(d)}});function q(d){re[d?"unshift":"push"](()=>{c=d,e(10,c)})}const x=()=>b();function ae(d){re[d?"unshift":"push"](()=>{E=d,e(6,E)})}const ee=()=>{y===!1&&st(),M()},te=d=>d.color!=o,le=()=>K();return l.$$set=d=>{"class"in d&&e(0,u=d.class),"text"in d&&e(1,i=d.text),"color"in d&&e(2,o=d.color),"disabled"in d&&e(3,r=d.disabled),"id"in d&&e(19,f=d.id),"date"in d&&e(4,_=d.date)},[u,i,o,r,_,g,E,y,v,a,c,n,A,D,M,H,K,p,b,f,q,x,ae,ee,te,le]}class Fe extends Q{constructor(t){super();W(this,t,nt,lt,Ye,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Ne(l,t,e){const s=l.slice();return s[4]=t[e],s}function qe(l,t,e){const s=l.slice();return s[4]=t[e],s}function Le(l,t){let e,s,n,u,i,o=j,r;return s=new Fe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),X(s.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=C(e);Z(s.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),G(s,e,null),r=!0},p(f,_){t=f;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),s.$set(g)},r(){i=e.getBoundingClientRect()},f(){ce(e),o(),ue(e,i)},a(){o(),o=fe(e,i,ge,{duration:300})},i(f){r||(U(s.$$.fragment,f),_e(()=>{u&&u.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){V(s.$$.fragment,f),n&&n.invalidate(),u=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),J(s),f&&u&&u.end()}}}function Pe(l,t){let e,s,n,u,i,o=j,r;return s=new Fe({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=T("li"),X(s.$$.fragment),this.h()},l(f){e=w(f,"LI",{class:!0});var _=C(e);Z(s.$$.fragment,_),_.forEach(k),this.h()},h(){h(e,"class","task-section__item-box svelte-te6j4q"),this.first=e},m(f,_){L(f,e,_),G(s,e,null),r=!0},p(f,_){t=f;const g={};_&2&&(g.text=t[4].text),_&2&&(g.color=t[4].color?t[4].color:null),_&2&&(g.id=t[4].id),_&2&&(g.date=t[4].date),s.$set(g)},r(){i=e.getBoundingClientRect()},f(){ce(e),o(),ue(e,i)},a(){o(),o=fe(e,i,ge,{duration:300})},i(f){r||(U(s.$$.fragment,f),_e(()=>{u&&u.end(1),n=Te(e,t[3],{key:t[4].id}),n.start()}),r=!0)},o(f){V(s.$$.fragment,f),n&&n.invalidate(),u=we(e,t[2],{key:t[4].id}),r=!1},d(f){f&&k(e),J(s),f&&u&&u.end()}}}function ot(l){let t,e,s,n=[],u=new Map,i,o=[],r=new Map,f,_,g=l[1].filter(Me);const E=a=>a[4].id;for(let a=0;a<g.length;a+=1){let c=qe(l,g,a),m=E(c);u.set(m,n[a]=Le(m,c))}let y=l[1].filter(Ue);const v=a=>a[4].id;for(let a=0;a<y.length;a+=1){let c=Ne(l,y,a),m=v(c);r.set(m,o[a]=Pe(m,c))}return{c(){t=T("section"),e=T("div"),s=T("ul");for(let a=0;a<n.length;a+=1)n[a].c();i=T("ul");for(let a=0;a<o.length;a+=1)o[a].c();this.h()},l(a){t=w(a,"SECTION",{class:!0});var c=C(t);e=w(c,"DIV",{class:!0});var m=C(e);s=w(m,"UL",{class:!0});var N=C(s);for(let D=0;D<n.length;D+=1)n[D].l(N);N.forEach(k),i=w(m,"UL",{class:!0});var A=C(i);for(let D=0;D<o.length;D+=1)o[D].l(A);A.forEach(k),m.forEach(k),c.forEach(k),this.h()},h(){h(s,"class","task-section__col"),h(i,"class","task-section__col"),h(e,"class","container task-section__grid svelte-te6j4q"),h(t,"class",f="task-section "+l[0]+" svelte-te6j4q")},m(a,c){L(a,t,c),O(t,e),O(e,s);for(let m=0;m<n.length;m+=1)n[m].m(s,null);O(e,i);for(let m=0;m<o.length;m+=1)o[m].m(i,null);_=!0},p(a,[c]){if(c&2){g=a[1].filter(Me),de();for(let m=0;m<n.length;m+=1)n[m].r();n=se(n,c,E,1,a,g,u,s,ve,Le,null,qe);for(let m=0;m<n.length;m+=1)n[m].a();he()}if(c&2){y=a[1].filter(Ue),de();for(let m=0;m<o.length;m+=1)o[m].r();o=se(o,c,v,1,a,y,r,i,ve,Pe,null,Ne);for(let m=0;m<o.length;m+=1)o[m].a();he()}(!_||c&1&&f!==(f="task-section "+a[0]+" svelte-te6j4q"))&&h(t,"class",f)},i(a){if(!_){for(let c=0;c<g.length;c+=1)U(n[c]);for(let c=0;c<y.length;c+=1)U(o[c]);_=!0}},o(a){for(let c=0;c<n.length;c+=1)V(n[c]);for(let c=0;c<o.length;c+=1)V(o[c]);_=!1},d(a){a&&k(t);for(let c=0;c<n.length;c+=1)n[c].d();for(let c=0;c<o.length;c+=1)o[c].d()}}}const Me=l=>!l.done,Ue=l=>l.done;function at(l,t,e){let s;ne(l,R,o=>e(1,s=o));let{class:n=""}=t;const[u,i]=We({duration:o=>Math.sqrt(o*200),fallback(o,r){const f=getComputedStyle(o),_=f.transform==="none"?"":f.transform;return{duration:600,easing:Xe,css:g=>`
					transform: ${_} scale(${g});
					opacity: ${g}
				`}}});return l.$$set=o=>{"class"in o&&e(0,n=o.class)},[n,s,u,i]}class it extends Q{constructor(t){super();W(this,t,at,ot,oe,{class:0})}}function Ve(l){let t,e,s,n=l[2].text&&Re(l);return{c(){t=T("button"),n&&n.c(),this.h()},l(u){t=w(u,"BUTTON",{class:!0});var i=C(t);n&&n.l(i),i.forEach(k),this.h()},h(){h(t,"class","btn svelte-1yy2xse")},m(u,i){L(u,t,i),n&&n.m(t,null),e||(s=F(t,"click",B(l[6])),e=!0)},p(u,i){u[2].text?n?n.p(u,i):(n=Re(u),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(u){u&&k(t),n&&n.d(),e=!1,s()}}}function Re(l){let t=l[2].text+"",e;return{c(){e=pe(t)},l(s){e=be(s,t)},m(s,n){L(s,e,n)},p(s,n){n&4&&t!==(t=s[2].text+"")&&Ee(e,t)},d(s){s&&k(e)}}}function rt(l){let t,e,s,n,u,i=l[2]&&Ve(l);return{c(){t=T("div"),e=T("input"),i&&i.c(),this.h()},l(o){t=w(o,"DIV",{class:!0});var r=C(t);e=w(r,"INPUT",{placeholder:!0,class:!0}),i&&i.l(r),r.forEach(k),this.h()},h(){h(e,"placeholder",l[1]),h(e,"class","svelte-1yy2xse"),h(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),I(t,"isError",l[5])},m(o,r){L(o,t,r),O(t,e),Ce(e,l[4]),i&&i.m(t,null),l[10](t),n||(u=[F(e,"input",l[9]),F(e,"input",l[7]),F(e,"keydown",l[8])],n=!0)},p(o,[r]){r&2&&h(e,"placeholder",o[1]),r&16&&e.value!==o[4]&&Ce(e,o[4]),o[2]?i?i.p(o,r):(i=Ve(o),i.c(),i.m(t,null)):i&&(i.d(1),i=null),r&5&&s!==(s="input-group "+o[0]+" "+(o[2]?"input-group_btn":"")+" svelte-1yy2xse")&&h(t,"class",s),r&37&&I(t,"isError",o[5])},i:j,o:j,d(o){o&&k(t),i&&i.d(),l[10](null),n=!1,ye(u)}}}function ct(l,t,e){let{class:s=""}=t,{placeholder:n="Placeholer"}=t,{btn:u=null}=t,i,o,r=!1;const f=Ze(),_=()=>{o?(f("submit",{value:o}),e(4,o="")):e(5,r=!0)},g=()=>{e(5,r=!1)},E=a=>{let c=a.key,m=a.ctrlKey,N=a.shiftKey;a.keyCode,m&&N&&f("color"),c==="Enter"&&_()};function y(){o=this.value,e(4,o)}function v(a){re[a?"unshift":"push"](()=>{i=a,e(3,i)})}return l.$$set=a=>{"class"in a&&e(0,s=a.class),"placeholder"in a&&e(1,n=a.placeholder),"btn"in a&&e(2,u=a.btn)},[s,n,u,i,o,r,_,g,E,y,v]}class ut extends Q{constructor(t){super();W(this,t,ct,rt,oe,{class:0,placeholder:1,btn:2})}}function Be(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function je(l,t){let e,s,n,u,i=j,o,r,f;return{key:l,first:null,c(){e=T("button"),this.h()},l(_){e=w(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(k),this.h()},h(){h(e,"class","add-todo__color svelte-1hafqlz"),h(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,g){L(_,e,g),o=!0,r||(f=F(e,"click",B(function(){ke(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),r=!0)},p(_,g){t=_,(!o||g&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&h(e,"style",s)},r(){u=e.getBoundingClientRect()},f(){ce(e),i(),ue(e,u)},a(){i(),i=fe(e,u,ge,{})},i(_){o||(_e(()=>{n||(n=Ie(e,Oe,{},!0)),n.run(1)}),o=!0)},o(_){n||(n=Ie(e,Oe,{},!1)),n.run(0),o=!1},d(_){_&&k(e),_&&n&&n.end(),r=!1,f()}}}function ft(l){let t,e,s,n,u=[],i=new Map,o,r,f,_,g,E=l[3].filter(l[7]);const y=v=>v[9].id;for(let v=0;v<E.length;v+=1){let a=Be(l,E,v),c=y(a);i.set(c,u[v]=je(c,a))}return o=new ut({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),o.$on("color",l[8]),o.$on("submit",l[4]),{c(){t=T("div"),e=T("div"),s=T("span");for(let v=0;v<u.length;v+=1)u[v].c();X(o.$$.fragment),this.h()},l(v){t=w(v,"DIV",{class:!0});var a=C(t);e=w(a,"DIV",{class:!0});var c=C(e);s=w(c,"SPAN",{class:!0,style:!0}),C(s).forEach(k);for(let m=0;m<u.length;m+=1)u[m].l(c);c.forEach(k),Z(o.$$.fragment,a),a.forEach(k),this.h()},h(){h(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),h(s,"style",n=`color: ${l[1]}`),h(e,"class","add-todo__color-list svelte-1hafqlz"),I(e,"isOpen",l[2]),h(t,"class",r="add-todo "+l[0]+" svelte-1hafqlz")},m(v,a){L(v,t,a),O(t,e),O(e,s);for(let c=0;c<u.length;c+=1)u[c].m(e,null);G(o,t,null),f=!0,_||(g=F(s,"click",B(l[6])),_=!0)},p(v,[a]){if((!f||a&2&&n!==(n=`color: ${v[1]}`))&&h(s,"style",n),a&42){E=v[3].filter(v[7]),de();for(let c=0;c<u.length;c+=1)u[c].r();u=se(u,a,y,1,v,E,i,e,ve,je,null,Be);for(let c=0;c<u.length;c+=1)u[c].a();he()}a&4&&I(e,"isOpen",v[2]),(!f||a&1&&r!==(r="add-todo "+v[0]+" svelte-1hafqlz"))&&h(t,"class",r)},i(v){if(!f){for(let a=0;a<E.length;a+=1)U(u[a]);U(o.$$.fragment,v),f=!0}},o(v){for(let a=0;a<u.length;a+=1)V(u[a]);V(o.$$.fragment,v),f=!1},d(v){v&&k(t);for(let a=0;a<u.length;a+=1)u[a].d();J(o),_=!1,g()}}}function _t(l,t,e){let s;ne(l,ze,E=>e(3,s=E));let{class:n=""}=t,u="#0029FF",i=!1;const o=E=>{let y={id:Date.now(),text:E.detail.value,color:u,done:!1,date:xe(new Date,"dot")};R.update(v=>v=[y,...v])},r=E=>E&&e(1,u=E),f=()=>e(2,i=!i),_=E=>E.color!=u,g=()=>e(2,i=!i);return l.$$set=E=>{"class"in E&&e(0,n=E.class)},[n,u,i,s,o,r,f,_,g]}class dt extends Q{constructor(t){super();W(this,t,_t,ft,oe,{class:0})}}function ht(l){let t,e,s,n,u,i,o;return n=new dt({}),i=new it({props:{class:"mt-50"}}),{c(){t=Ge(),e=T("section"),s=T("div"),X(n.$$.fragment),X(i.$$.fragment),this.h()},l(r){Je('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=$e(r),e=w(r,"SECTION",{class:!0});var _=C(e);s=w(_,"DIV",{class:!0});var g=C(s);Z(n.$$.fragment,g),g.forEach(k),_.forEach(k),Z(i.$$.fragment,r),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",h(s,"class","container"),h(e,"class",u=""+(l[0]+" mt-50 svelte-110abfo"))},m(r,f){L(r,t,f),L(r,e,f),O(e,s),G(n,s,null),G(i,r,f),o=!0},p(r,[f]){(!o||f&1&&u!==(u=""+(r[0]+" mt-50 svelte-110abfo")))&&h(e,"class",u)},i(r){o||(U(n.$$.fragment,r),U(i.$$.fragment,r),o=!0)},o(r){V(n.$$.fragment,r),V(i.$$.fragment,r),o=!1},d(r){r&&k(t),r&&k(e),J(n),J(i,r)}}}function gt(l,t,e){let{class:s=""}=t;return l.$$set=n=>{"class"in n&&e(0,s=n.class)},[s]}class mt extends Q{constructor(t){super();W(this,t,gt,ht,oe,{class:0})}}export{mt as default};
