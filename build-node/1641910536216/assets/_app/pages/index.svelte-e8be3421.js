import{K as Ke,C as He,S as Y,i as Q,L as je,e as E,c as T,a as C,d as k,b as d,f as S,D as I,M as N,N as L,O as qe,t as ne,g as ae,P as w,h as oe,Q as x,R as Ye,E as M,T as ye,U as ee,V as ie,s as te,v as W,w as X,x as Z,W as re,X as ce,Y as fe,p as U,Z as ue,_ as Ee,n as P,$ as Te,A as G,m as _e,o as de,a0 as Qe,a1 as he,a2 as ve,a3 as We,a4 as Ce,a5 as Xe,a6 as Ie,a7 as we,j as Ze,a8 as Ge,l as Je}from"../chunks/vendor-8ffd20c8.js";const R=He([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),ze=Ke(R,(s,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=s.filter(a=>a.color).map(a=>a.color).concat(e),i=n.filter((a,c)=>n.indexOf(a)===c).map((a,c)=>({id:c,color:a}));t(i)});function De(s,t,e){const l=s.slice();return l[27]=t[e],l}function Oe(s,t){let e,l,n,f,i;return{key:s,first:null,c(){e=E("li"),l=E("button"),this.h()},l(a){e=T(a,"LI",{class:!0});var c=C(e);l=T(c,"BUTTON",{class:!0,style:!0}),C(l).forEach(k),c.forEach(k),this.h()},h(){d(l,"class","task__color-btn svelte-1qqhzsn"),d(l,"style",n=`background-color: ${t[27].color}`),d(e,"class","task__color-item svelte-1qqhzsn"),this.first=e},m(a,c){S(a,e,c),I(e,l),f||(i=N(l,"click",L(function(){qe(t[14](t[27].color))&&t[14](t[27].color).apply(this,arguments)})),f=!0)},p(a,c){t=a,c&1028&&n!==(n=`background-color: ${t[27].color}`)&&d(l,"style",n)},d(a){a&&k(e),f=!1,i()}}}function $e(s){let t,e,l,n,f,i,a,c,u,_,v,b,y,g,r,o=[],m=new Map,A,O,D,B,H,j,K=s[10].filter(s[23]);const J=p=>p[27].id;for(let p=0;p<K.length;p+=1){let q=De(s,K,p),F=J(q);m.set(F,o[p]=Oe(F,q))}return{c(){t=E("div"),e=E("div"),l=E("div"),n=E("p"),f=ne(s[1]),i=E("div"),a=E("div"),c=E("span"),u=ne(s[4]),_=E("div"),v=E("button"),b=E("span"),y=E("button"),g=E("span"),r=E("ul");for(let p=0;p<o.length;p+=1)o[p].c();O=E("button"),D=E("span"),this.h()},l(p){t=T(p,"DIV",{class:!0});var q=C(t);e=T(q,"DIV",{class:!0});var F=C(e);l=T(F,"DIV",{class:!0});var $=C(l);n=T($,"P",{class:!0,contenteditable:!0});var h=C(n);f=ae(h,s[1]),h.forEach(k),$.forEach(k),i=T(F,"DIV",{class:!0});var z=C(i);a=T(z,"DIV",{class:!0});var V=C(a);c=T(V,"SPAN",{class:!0});var me=C(c);u=ae(me,s[4]),me.forEach(k),V.forEach(k),z.forEach(k),F.forEach(k),_=T(q,"DIV",{class:!0});var le=C(_);v=T(le,"BUTTON",{class:!0});var ge=C(v);b=T(ge,"SPAN",{class:!0}),C(b).forEach(k),ge.forEach(k),y=T(le,"BUTTON",{class:!0});var ke=C(y);g=T(ke,"SPAN",{class:!0}),C(g).forEach(k),ke.forEach(k),le.forEach(k),r=T(q,"UL",{class:!0,style:!0});var pe=C(r);for(let se=0;se<o.length;se+=1)o[se].l(pe);pe.forEach(k),O=T(q,"BUTTON",{class:!0});var be=C(O);D=T(be,"SPAN",{class:!0}),C(D).forEach(k),be.forEach(k),q.forEach(k),this.h()},h(){d(n,"class","task__main-content svelte-1qqhzsn"),d(n,"contenteditable",s[7]),d(l,"class","task__main-container svelte-1qqhzsn"),d(c,"class","svelte-1qqhzsn"),d(a,"class","task__info-content svelte-1qqhzsn"),d(i,"class","task__info svelte-1qqhzsn"),d(e,"class","task__main svelte-1qqhzsn"),w(e,"isEdit",s[7]),d(b,"class","svg-image-del svelte-1qqhzsn"),d(v,"class","task__menu-btn task__menu-btn_del svelte-1qqhzsn"),d(g,"class","svg-image-pen svelte-1qqhzsn"),d(y,"class","task__menu-btn task__menu-btn_edit svelte-1qqhzsn"),w(y,"isSelect",s[7]),w(y,"isSave",s[8]),w(y,"isChanged",s[8]),d(_,"class","task__circle task__menu svelte-1qqhzsn"),w(_,"isOpen",s[7]),d(r,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-1qqhzsn"),d(r,"style",A=`background-color: ${s[2]}`),w(r,"isOpen",s[7]),d(D,"class","svelte-1qqhzsn"),d(O,"class","task__info-open svelte-1qqhzsn"),w(O,"isHidden",s[7]),d(t,"class",B="task "+s[0]+" svelte-1qqhzsn"),w(t,"isDisabled",s[3]),w(t,"isInfoOpen",s[5])},m(p,q){S(p,t,q),I(t,e),I(e,l),I(l,n),I(n,f),s[19](n),I(e,i),I(i,a),I(a,c),I(c,u),s[21](i),I(t,_),I(_,v),I(v,b),I(_,y),I(y,g),I(t,r);for(let F=0;F<o.length;F+=1)o[F].m(r,null);I(t,O),I(O,D),H||(j=[N(n,"input",s[20]),N(n,"keydown",s[16]),N(e,"click",s[11]),N(v,"click",L(s[12])),N(y,"click",L(s[22])),N(O,"click",L(s[24]))],H=!0)},p(p,[q]){q&2&&oe(f,p[1]),q&128&&d(n,"contenteditable",p[7]),q&16&&oe(u,p[4]),q&128&&w(e,"isEdit",p[7]),q&128&&w(y,"isSelect",p[7]),q&256&&w(y,"isSave",p[8]),q&256&&w(y,"isChanged",p[8]),q&128&&w(_,"isOpen",p[7]),q&17412&&(K=p[10].filter(p[23]),o=x(o,q,J,1,p,K,m,r,Ye,Oe,null,De)),q&4&&A!==(A=`background-color: ${p[2]}`)&&d(r,"style",A),q&128&&w(r,"isOpen",p[7]),q&128&&w(O,"isHidden",p[7]),q&1&&B!==(B="task "+p[0]+" svelte-1qqhzsn")&&d(t,"class",B),q&9&&w(t,"isDisabled",p[3]),q&33&&w(t,"isInfoOpen",p[5])},i:M,o:M,d(p){p&&k(t),s[19](null),s[21](null);for(let q=0;q<o.length;q+=1)o[q].d();H=!1,ye(j)}}}function xe(s,t,e){let l,n;ee(s,R,h=>e(25,l=h)),ee(s,ze,h=>e(10,n=h));let{class:f=""}=t,{text:i=""}=t,{color:a="#0029FF"}=t,{disabled:c=!1}=t,{id:u=null}=t,{date:_=""}=t,v=!1,b,y=!1,g=!1,r;const o=()=>{if(y===!1){let h=l.map(z=>(u===z.id&&(z.done=!z.done),z));R.set(h)}},m=()=>{let h=l.filter(z=>z.id!=u);R.set(h)};function A(h){e(7,y=h!=null?h:!y),y===!1&&B()}const O=h=>{let z=l.map(V=>(u===V.id&&(V.color=h),V));R.set(z)};function D(h){e(5,v=h!=null?h:!v);let z=0;b.childNodes.forEach(V=>z+=V.clientHeight),b.style.setProperty("--taskInfoHeight",`${v?z:0}px`)}function B(){r.innerText,console.log("save",i)}function H(h){let z=h.ctrlKey?!1:h.metaKey,V=h.keyCode;if(z&&V===83)return h.preventDefault(),B(),!1}function j(h=(z=>(z=r.innerText)!=null?z:i)()){return e(8,g=h!==i)}function K(h){ie[h?"unshift":"push"](()=>{r=h,e(9,r)})}const J=()=>j();function p(h){ie[h?"unshift":"push"](()=>{b=h,e(6,b)})}const q=()=>A(),F=h=>h.color!=a,$=()=>D();return s.$$set=h=>{"class"in h&&e(0,f=h.class),"text"in h&&e(1,i=h.text),"color"in h&&e(2,a=h.color),"disabled"in h&&e(3,c=h.disabled),"id"in h&&e(18,u=h.id),"date"in h&&e(4,_=h.date)},[f,i,a,c,_,v,b,y,g,r,n,o,m,A,O,D,H,j,u,K,J,p,q,F,$]}class Ne extends Y{constructor(t){super();Q(this,t,xe,$e,je,{class:0,text:1,color:2,disabled:3,id:18,date:4})}}function Fe(s,t,e){const l=s.slice();return l[4]=t[e],l}function Se(s,t,e){const l=s.slice();return l[4]=t[e],l}function Ae(s,t){let e,l,n,f,i,a=M,c;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:s,first:null,c(){e=E("li"),W(l.$$.fragment),this.h()},l(u){e=T(u,"LI",{class:!0});var _=C(e);X(l.$$.fragment,_),_.forEach(k),this.h()},h(){d(e,"class","task-section__item"),this.first=e},m(u,_){S(u,e,_),Z(l,e,null),c=!0},p(u,_){t=u;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){re(e),a(),ce(e,i)},a(){a(),a=fe(e,i,he,{duration:300})},i(u){c||(U(l.$$.fragment,u),ue(()=>{f&&f.end(1),n=Ee(e,t[3],{key:t[4].id}),n.start()}),c=!0)},o(u){P(l.$$.fragment,u),n&&n.invalidate(),f=Te(e,t[2],{key:t[4].id}),c=!1},d(u){u&&k(e),G(l),u&&f&&f.end()}}}function Ve(s,t){let e,l,n,f,i,a=M,c;return l=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:s,first:null,c(){e=E("li"),W(l.$$.fragment),this.h()},l(u){e=T(u,"LI",{class:!0});var _=C(e);X(l.$$.fragment,_),_.forEach(k),this.h()},h(){d(e,"class","task-section__item"),this.first=e},m(u,_){S(u,e,_),Z(l,e,null),c=!0},p(u,_){t=u;const v={};_&2&&(v.text=t[4].text),_&2&&(v.color=t[4].color?t[4].color:null),_&2&&(v.id=t[4].id),_&2&&(v.date=t[4].date),l.$set(v)},r(){i=e.getBoundingClientRect()},f(){re(e),a(),ce(e,i)},a(){a(),a=fe(e,i,he,{duration:300})},i(u){c||(U(l.$$.fragment,u),ue(()=>{f&&f.end(1),n=Ee(e,t[3],{key:t[4].id}),n.start()}),c=!0)},o(u){P(l.$$.fragment,u),n&&n.invalidate(),f=Te(e,t[2],{key:t[4].id}),c=!1},d(u){u&&k(e),G(l),u&&f&&f.end()}}}function et(s){let t,e,l,n=[],f=new Map,i,a=[],c=new Map,u,_,v=s[1].filter(Ue);const b=r=>r[4].id;for(let r=0;r<v.length;r+=1){let o=Se(s,v,r),m=b(o);f.set(m,n[r]=Ae(m,o))}let y=s[1].filter(Pe);const g=r=>r[4].id;for(let r=0;r<y.length;r+=1){let o=Fe(s,y,r),m=g(o);c.set(m,a[r]=Ve(m,o))}return{c(){t=E("section"),e=E("div"),l=E("ul");for(let r=0;r<n.length;r+=1)n[r].c();i=E("ul");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){t=T(r,"SECTION",{class:!0});var o=C(t);e=T(o,"DIV",{class:!0});var m=C(e);l=T(m,"UL",{class:!0});var A=C(l);for(let D=0;D<n.length;D+=1)n[D].l(A);A.forEach(k),i=T(m,"UL",{class:!0});var O=C(i);for(let D=0;D<a.length;D+=1)a[D].l(O);O.forEach(k),m.forEach(k),o.forEach(k),this.h()},h(){d(l,"class","task-section__col"),d(i,"class","task-section__col"),d(e,"class","container task-section__grid svelte-q8mvyt"),d(t,"class",u="task-section "+s[0]+" svelte-q8mvyt")},m(r,o){S(r,t,o),I(t,e),I(e,l);for(let m=0;m<n.length;m+=1)n[m].m(l,null);I(e,i);for(let m=0;m<a.length;m+=1)a[m].m(i,null);_=!0},p(r,[o]){if(o&2){v=r[1].filter(Ue),_e();for(let m=0;m<n.length;m+=1)n[m].r();n=x(n,o,b,1,r,v,f,l,ve,Ae,null,Se);for(let m=0;m<n.length;m+=1)n[m].a();de()}if(o&2){y=r[1].filter(Pe),_e();for(let m=0;m<a.length;m+=1)a[m].r();a=x(a,o,g,1,r,y,c,i,ve,Ve,null,Fe);for(let m=0;m<a.length;m+=1)a[m].a();de()}(!_||o&1&&u!==(u="task-section "+r[0]+" svelte-q8mvyt"))&&d(t,"class",u)},i(r){if(!_){for(let o=0;o<v.length;o+=1)U(n[o]);for(let o=0;o<y.length;o+=1)U(a[o]);_=!0}},o(r){for(let o=0;o<n.length;o+=1)P(n[o]);for(let o=0;o<a.length;o+=1)P(a[o]);_=!1},d(r){r&&k(t);for(let o=0;o<n.length;o+=1)n[o].d();for(let o=0;o<a.length;o+=1)a[o].d()}}}const Ue=s=>!s.done,Pe=s=>s.done;function tt(s,t,e){let l;ee(s,R,a=>e(1,l=a));let{class:n=""}=t;const[f,i]=Qe({duration:a=>Math.sqrt(a*200),fallback(a,c){const u=getComputedStyle(a),_=u.transform==="none"?"":u.transform;return{duration:600,easing:We,css:v=>`
					transform: ${_} scale(${v});
					opacity: ${v}
				`}}});return s.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,l,f,i]}class lt extends Y{constructor(t){super();Q(this,t,tt,et,te,{class:0})}}const st=(s,t)=>{if(t==="dot"){let e=s.getDate(),l=s.getMonth();return`${e<10?0:""}${e+1}.${l<10?0:""}${l+1}.${s.getFullYear()}`}};function Be(s){let t,e,l,n=s[2].text&&Le(s);return{c(){t=E("button"),n&&n.c(),this.h()},l(f){t=T(f,"BUTTON",{class:!0});var i=C(t);n&&n.l(i),i.forEach(k),this.h()},h(){d(t,"class","btn svelte-1yy2xse")},m(f,i){S(f,t,i),n&&n.m(t,null),e||(l=N(t,"click",L(s[6])),e=!0)},p(f,i){f[2].text?n?n.p(f,i):(n=Le(f),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(f){f&&k(t),n&&n.d(),e=!1,l()}}}function Le(s){let t=s[2].text+"",e;return{c(){e=ne(t)},l(l){e=ae(l,t)},m(l,n){S(l,e,n)},p(l,n){n&4&&t!==(t=l[2].text+"")&&oe(e,t)},d(l){l&&k(e)}}}function nt(s){let t,e,l,n,f,i=s[2]&&Be(s);return{c(){t=E("div"),e=E("input"),i&&i.c(),this.h()},l(a){t=T(a,"DIV",{class:!0});var c=C(t);e=T(c,"INPUT",{placeholder:!0,class:!0}),i&&i.l(c),c.forEach(k),this.h()},h(){d(e,"placeholder",s[1]),d(e,"class","svelte-1yy2xse"),d(t,"class",l="input-group "+s[0]+" "+(s[2]?"input-group_btn":"")+" svelte-1yy2xse"),w(t,"isError",s[5])},m(a,c){S(a,t,c),I(t,e),Ce(e,s[4]),i&&i.m(t,null),s[11](t),n||(f=[N(e,"input",s[9]),N(e,"input",s[7]),N(e,"keydown",s[10])],n=!0)},p(a,[c]){c&2&&d(e,"placeholder",a[1]),c&16&&e.value!==a[4]&&Ce(e,a[4]),a[2]?i?i.p(a,c):(i=Be(a),i.c(),i.m(t,null)):i&&(i.d(1),i=null),c&5&&l!==(l="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&d(t,"class",l),c&37&&w(t,"isError",a[5])},i:M,o:M,d(a){a&&k(t),i&&i.d(),s[11](null),n=!1,ye(f)}}}function at(s,t,e){let{class:l=""}=t,{placeholder:n="Placeholer"}=t,{btn:f=null}=t,i,a,c=!1;const u=Xe(),_=()=>{a?(u("submit",{value:a}),e(4,a="")):e(5,c=!0)},v=()=>{e(5,c=!1)},b=o=>{let m=o.key;m==="Control"&&u("color"),m==="Enter"&&_()};function y(){a=this.value,e(4,a)}const g=o=>b(o);function r(o){ie[o?"unshift":"push"](()=>{i=o,e(3,i)})}return s.$$set=o=>{"class"in o&&e(0,l=o.class),"placeholder"in o&&e(1,n=o.placeholder),"btn"in o&&e(2,f=o.btn)},[l,n,f,i,a,c,_,v,b,y,g,r]}class ot extends Y{constructor(t){super();Q(this,t,at,nt,te,{class:0,placeholder:1,btn:2})}}function Me(s,t,e){const l=s.slice();return l[9]=t[e],l[11]=e,l}function Re(s,t){let e,l,n,f,i=M,a,c,u;return{key:s,first:null,c(){e=E("button"),this.h()},l(_){e=T(_,"BUTTON",{class:!0,style:!0}),C(e).forEach(k),this.h()},h(){d(e,"class","add-todo__color svelte-1hafqlz"),d(e,"style",l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(_,v){S(_,e,v),a=!0,c||(u=N(e,"click",L(function(){qe(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),c=!0)},p(_,v){t=_,(!a||v&10&&l!==(l=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&d(e,"style",l)},r(){f=e.getBoundingClientRect()},f(){re(e),i(),ce(e,f)},a(){i(),i=fe(e,f,he,{})},i(_){a||(ue(()=>{n||(n=Ie(e,we,{},!0)),n.run(1)}),a=!0)},o(_){n||(n=Ie(e,we,{},!1)),n.run(0),a=!1},d(_){_&&k(e),_&&n&&n.end(),c=!1,u()}}}function it(s){let t,e,l,n,f=[],i=new Map,a,c,u,_,v,b=s[3].filter(s[7]);const y=g=>g[9].id;for(let g=0;g<b.length;g+=1){let r=Me(s,b,g),o=y(r);i.set(o,f[g]=Re(o,r))}return a=new ot({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",s[8]),a.$on("submit",s[4]),{c(){t=E("div"),e=E("div"),l=E("span");for(let g=0;g<f.length;g+=1)f[g].c();W(a.$$.fragment),this.h()},l(g){t=T(g,"DIV",{class:!0});var r=C(t);e=T(r,"DIV",{class:!0});var o=C(e);l=T(o,"SPAN",{class:!0,style:!0}),C(l).forEach(k);for(let m=0;m<f.length;m+=1)f[m].l(o);o.forEach(k),X(a.$$.fragment,r),r.forEach(k),this.h()},h(){d(l,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),d(l,"style",n=`color: ${s[1]}`),d(e,"class","add-todo__color-list svelte-1hafqlz"),w(e,"isOpen",s[2]),d(t,"class",c="add-todo "+s[0]+" svelte-1hafqlz")},m(g,r){S(g,t,r),I(t,e),I(e,l);for(let o=0;o<f.length;o+=1)f[o].m(e,null);Z(a,t,null),u=!0,_||(v=N(l,"click",L(s[6])),_=!0)},p(g,[r]){if((!u||r&2&&n!==(n=`color: ${g[1]}`))&&d(l,"style",n),r&42){b=g[3].filter(g[7]),_e();for(let o=0;o<f.length;o+=1)f[o].r();f=x(f,r,y,1,g,b,i,e,ve,Re,null,Me);for(let o=0;o<f.length;o+=1)f[o].a();de()}r&4&&w(e,"isOpen",g[2]),(!u||r&1&&c!==(c="add-todo "+g[0]+" svelte-1hafqlz"))&&d(t,"class",c)},i(g){if(!u){for(let r=0;r<b.length;r+=1)U(f[r]);U(a.$$.fragment,g),u=!0}},o(g){for(let r=0;r<f.length;r+=1)P(f[r]);P(a.$$.fragment,g),u=!1},d(g){g&&k(t);for(let r=0;r<f.length;r+=1)f[r].d();G(a),_=!1,v()}}}function rt(s,t,e){let l;ee(s,ze,b=>e(3,l=b));let{class:n=""}=t,f="#0029FF",i=!1;const a=b=>{let y={id:Date.now(),text:b.detail.value,color:f,done:!1,date:st(new Date,"dot")};R.update(g=>g=[y,...g])},c=b=>b&&e(1,f=b),u=()=>e(2,i=!i),_=b=>b.color!=f,v=()=>e(2,i=!i);return s.$$set=b=>{"class"in b&&e(0,n=b.class)},[n,f,i,l,a,c,u,_,v]}class ct extends Y{constructor(t){super();Q(this,t,rt,it,te,{class:0})}}function ft(s){let t,e,l,n,f,i,a;return n=new ct({}),i=new lt({props:{class:"mt-50"}}),{c(){t=Ze(),e=E("section"),l=E("div"),W(n.$$.fragment),W(i.$$.fragment),this.h()},l(c){Ge('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=Je(c),e=T(c,"SECTION",{class:!0});var _=C(e);l=T(_,"DIV",{class:!0});var v=C(l);X(n.$$.fragment,v),v.forEach(k),_.forEach(k),X(i.$$.fragment,c),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",d(l,"class","container"),d(e,"class",f=""+(s[0]+" mt-50 svelte-110abfo"))},m(c,u){S(c,t,u),S(c,e,u),I(e,l),Z(n,l,null),Z(i,c,u),a=!0},p(c,[u]){(!a||u&1&&f!==(f=""+(c[0]+" mt-50 svelte-110abfo")))&&d(e,"class",f)},i(c){a||(U(n.$$.fragment,c),U(i.$$.fragment,c),a=!0)},o(c){P(n.$$.fragment,c),P(i.$$.fragment,c),a=!1},d(c){c&&k(t),c&&k(e),G(n),G(i,c)}}}function ut(s,t,e){let{class:l=""}=t;return s.$$set=n=>{"class"in n&&e(0,l=n.class)},[l]}class dt extends Y{constructor(t){super();Q(this,t,ut,ft,te,{class:0})}}export{dt as default};
