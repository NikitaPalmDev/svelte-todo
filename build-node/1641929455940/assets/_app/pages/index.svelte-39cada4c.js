import{K as Re,C as ze,S as K,i as Y,L as Ke,e as y,c as T,a as j,d as k,b as g,f as A,D as I,M as S,N as B,O as ve,t as ke,g as pe,P as C,h as be,Q as te,R as Ye,E as H,T as Ee,U as le,V as oe,s as se,v as Q,w as W,x as X,W as re,X as ie,Y as ce,p as P,Z as fe,_ as ye,n as U,$ as Te,A as Z,m as ue,o as de,a0 as Qe,a1 as _e,a2 as he,a3 as We,a4 as je,a5 as Xe,a6 as we,a7 as Ce,j as Ze,a8 as Ge,l as Je}from"../chunks/vendor-8ffd20c8.js";const V=ze([{id:1,text:"Test task 1",done:!1,color:"#0029FF",date:"22.11.2021"},{id:2,text:"Test task 2",done:!1,color:"#FF9900",date:"22.12.2021"},{id:3,text:"Test task 3",done:!0,color:"#AD00FF",date:"25.11.2021"}]),Ie=Re(V,(l,t)=>{const e=["#0029FF","#FF9900","#AD00FF","#000000","#FF5656"];let n=l.filter(a=>a.color).map(a=>a.color).concat(e),o=n.filter((a,f)=>n.indexOf(a)===f).map((a,f)=>({id:f,color:a}));t(o)});function Oe(l,t,e){const s=l.slice();return s[30]=t[e],s}function De(l,t){let e,s,n,i,o;return{key:l,first:null,c(){e=y("li"),s=y("button"),this.h()},l(a){e=T(a,"LI",{class:!0});var f=j(e);s=T(f,"BUTTON",{class:!0,style:!0}),j(s).forEach(k),f.forEach(k),this.h()},h(){g(s,"class","task__color-btn svelte-g3djr"),g(s,"style",n=`background-color: ${t[30].color}`),g(e,"class","task__color-item svelte-g3djr"),this.first=e},m(a,f){A(a,e,f),I(e,s),i||(o=S(s,"click",B(function(){ve(t[15](t[30].color))&&t[15](t[30].color).apply(this,arguments)})),i=!0)},p(a,f){t=a,f[0]&2052&&n!==(n=`background-color: ${t[30].color}`)&&g(s,"style",n)},d(a){a&&k(e),i=!1,o()}}}function $e(l){let t,e,s,n,i,o,a,f,u,d,v,p,w,h,c=[],r=new Map,m,F,L,D,R,z,M=l[11].filter(l[24]);const G=b=>b[30].id;for(let b=0;b<M.length;b+=1){let E=Oe(l,M,b),q=G(E);r.set(q,c[b]=De(q,E))}return{c(){t=y("article"),e=y("div"),s=y("div"),n=y("p"),i=y("div"),o=y("div"),a=y("span"),f=ke(l[4]),u=y("div"),d=y("button"),v=y("span"),p=y("button"),w=y("span"),h=y("ul");for(let b=0;b<c.length;b+=1)c[b].c();F=y("button"),L=y("span"),this.h()},l(b){t=T(b,"ARTICLE",{class:!0});var E=j(t);e=T(E,"DIV",{class:!0});var q=j(e);s=T(q,"DIV",{class:!0});var J=j(s);n=T(J,"P",{class:!0,contenteditable:!0});var ne=j(n);ne.forEach(k),J.forEach(k),i=T(q,"DIV",{class:!0});var $=j(i);o=T($,"DIV",{class:!0});var x=j(o);a=T(x,"SPAN",{class:!0});var ee=j(a);f=pe(ee,l[4]),ee.forEach(k),x.forEach(k),$.forEach(k),q.forEach(k),u=T(E,"DIV",{class:!0});var _=j(u);d=T(_,"BUTTON",{class:!0});var O=j(d);v=T(O,"SPAN",{class:!0}),j(v).forEach(k),O.forEach(k),p=T(_,"BUTTON",{class:!0});var N=j(p);w=T(N,"SPAN",{class:!0}),j(w).forEach(k),N.forEach(k),_.forEach(k),h=T(E,"UL",{class:!0,style:!0});var ge=j(h);for(let ae=0;ae<c.length;ae+=1)c[ae].l(ge);ge.forEach(k),F=T(E,"BUTTON",{class:!0});var me=j(F);L=T(me,"SPAN",{class:!0}),j(L).forEach(k),me.forEach(k),E.forEach(k),this.h()},h(){g(n,"class","task__main-content svelte-g3djr"),g(n,"contenteditable",l[7]),g(s,"class","task__main-container svelte-g3djr"),g(a,"class","svelte-g3djr"),g(o,"class","task__info-content svelte-g3djr"),g(i,"class","task__info svelte-g3djr"),g(e,"class","task__main svelte-g3djr"),C(e,"isEdit",l[7]),g(v,"class","svg-image-del svelte-g3djr"),g(d,"class","task__menu-btn task__menu-btn_del svelte-g3djr"),g(w,"class","svg-image-pen svelte-g3djr"),g(p,"class","task__menu-btn task__menu-btn_edit svelte-g3djr"),C(p,"isSelect",l[7]),C(p,"isChanged",l[8]),C(p,"isSave",l[9]),g(u,"class","task__circle task__menu svelte-g3djr"),C(u,"isOpen",l[7]),g(h,"class","task__circle task__circle_visible task__circle_r-t task__color svelte-g3djr"),g(h,"style",m=`background-color: ${l[2]}`),C(h,"isOpen",l[7]),g(L,"class","svelte-g3djr"),g(F,"class","task__info-open svelte-g3djr"),C(F,"isHidden",l[7]),g(t,"class",D="task "+l[0]+" svelte-g3djr"),C(t,"isDisabled",l[3]),C(t,"isInfoOpen",l[5]),C(t,"isEdit",l[7])},m(b,E){A(b,t,E),I(t,e),I(e,s),I(s,n),n.innerHTML=l[1],l[20](n),I(e,i),I(i,o),I(o,a),I(a,f),l[22](i),I(t,u),I(u,d),I(d,v),I(u,p),I(p,w),I(t,h);for(let q=0;q<c.length;q+=1)c[q].m(h,null);I(t,F),I(F,L),R||(z=[S(n,"input",l[21]),S(n,"keydown",l[17]),S(e,"click",l[12]),S(d,"click",B(l[13])),S(p,"click",B(l[23])),S(F,"click",B(l[25]))],R=!0)},p(b,E){E[0]&2&&(n.innerHTML=b[1]),E[0]&128&&g(n,"contenteditable",b[7]),E[0]&16&&be(f,b[4]),E[0]&128&&C(e,"isEdit",b[7]),E[0]&128&&C(p,"isSelect",b[7]),E[0]&256&&C(p,"isChanged",b[8]),E[0]&512&&C(p,"isSave",b[9]),E[0]&128&&C(u,"isOpen",b[7]),E[0]&34820&&(M=b[11].filter(b[24]),c=te(c,E,G,1,b,M,r,h,Ye,De,null,Oe)),E[0]&4&&m!==(m=`background-color: ${b[2]}`)&&g(h,"style",m),E[0]&128&&C(h,"isOpen",b[7]),E[0]&128&&C(F,"isHidden",b[7]),E[0]&1&&D!==(D="task "+b[0]+" svelte-g3djr")&&g(t,"class",D),E[0]&9&&C(t,"isDisabled",b[3]),E[0]&33&&C(t,"isInfoOpen",b[5]),E[0]&129&&C(t,"isEdit",b[7])},i:H,o:H,d(b){b&&k(t),l[20](null),l[22](null);for(let E=0;E<c.length;E+=1)c[E].d();R=!1,Ee(z)}}}let Fe=new Set;function xe(){Fe.forEach(l=>{l.edit(!1)})}function et(l,t,e){let s,n;le(l,V,_=>e(27,s=_)),le(l,Ie,_=>e(11,n=_));let{class:i=""}=t,{text:o=""}=t,{color:a="#0029FF"}=t,{disabled:f=!1}=t,{id:u=null}=t,{date:d=""}=t,v=!1,p,w=!1,h=!1,c=!1,r,m;const F=()=>{if(w===!1){let _=s.map(O=>(u===O.id&&(O.done=!O.done),O));V.set(_)}},L=()=>{let _=s.filter(O=>O.id!=u);V.set(_)};function D(_){e(7,w=_!=null?_:!w),w===!1&&M()}Fe.add({save(){M()},edit(_){D(_)}});const R=_=>{let O=s.map(N=>(u===N.id&&(N.color=_),N));V.set(O)};function z(_){e(5,v=_!=null?_:!v);let O=0;p.childNodes.forEach(N=>O+=N.clientHeight),p.style.setProperty("--taskInfoHeight",`${v?O:0}px`)}function M(){if(h){let _=r.innerHTML;G(_).then(()=>{e(8,h=!1),clearTimeout(m),e(9,c=!0),m=setTimeout(()=>{e(9,c=!1)},500)}),console.log(_)}}function G(_){if(typeof _=="string")return new Promise(O=>{V.set(s.map(N=>(N.id===u&&(N.text=_),N))),O()});throw new Error("The value is not equal to the string")}function b(_){let O=_.ctrlKey?!1:_.metaKey,N=_.keyCode;if(O&&N===83)return _.preventDefault(),M(),!1}function E(_=(O=>(O=r.innerHTML)!=null?O:o)()){return e(8,h=_!==o)}function q(_){oe[_?"unshift":"push"](()=>{r=_,e(10,r)})}const J=()=>E();function ne(_){oe[_?"unshift":"push"](()=>{p=_,e(6,p)})}const $=()=>{xe(),D()},x=_=>_.color!=a,ee=()=>z();return l.$$set=_=>{"class"in _&&e(0,i=_.class),"text"in _&&e(1,o=_.text),"color"in _&&e(2,a=_.color),"disabled"in _&&e(3,f=_.disabled),"id"in _&&e(19,u=_.id),"date"in _&&e(4,d=_.date)},[i,o,a,f,d,v,p,w,h,c,r,n,F,L,D,R,z,b,E,u,q,J,ne,$,x,ee]}class Ne extends K{constructor(t){super();Y(this,t,et,$e,Ke,{class:0,text:1,color:2,disabled:3,id:19,date:4},null,[-1,-1])}}function Se(l,t,e){const s=l.slice();return s[4]=t[e],s}function qe(l,t,e){const s=l.slice();return s[4]=t[e],s}function Ae(l,t){let e,s,n,i,o,a=H,f;return s=new Ne({props:{class:"task-section__item",text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),Q(s.$$.fragment),this.h()},l(u){e=T(u,"LI",{class:!0});var d=j(e);W(s.$$.fragment,d),d.forEach(k),this.h()},h(){g(e,"class","task-section__item-box svelte-1jqvrfj"),this.first=e},m(u,d){A(u,e,d),X(s,e,null),f=!0},p(u,d){t=u;const v={};d&2&&(v.text=t[4].text),d&2&&(v.color=t[4].color?t[4].color:null),d&2&&(v.id=t[4].id),d&2&&(v.date=t[4].date),s.$set(v)},r(){o=e.getBoundingClientRect()},f(){re(e),a(),ie(e,o)},a(){a(),a=ce(e,o,_e,{duration:300})},i(u){f||(P(s.$$.fragment,u),fe(()=>{i&&i.end(1),n=ye(e,t[3],{key:t[4].id}),n.start()}),f=!0)},o(u){U(s.$$.fragment,u),n&&n.invalidate(),i=Te(e,t[2],{key:t[4].id}),f=!1},d(u){u&&k(e),Z(s),u&&i&&i.end()}}}function Le(l,t){let e,s,n,i,o,a=H,f;return s=new Ne({props:{text:t[4].text,color:t[4].color?t[4].color:null,id:t[4].id,disabled:!0,date:t[4].date}}),{key:l,first:null,c(){e=y("li"),Q(s.$$.fragment),this.h()},l(u){e=T(u,"LI",{class:!0});var d=j(e);W(s.$$.fragment,d),d.forEach(k),this.h()},h(){g(e,"class","task-section__item-box svelte-1jqvrfj"),this.first=e},m(u,d){A(u,e,d),X(s,e,null),f=!0},p(u,d){t=u;const v={};d&2&&(v.text=t[4].text),d&2&&(v.color=t[4].color?t[4].color:null),d&2&&(v.id=t[4].id),d&2&&(v.date=t[4].date),s.$set(v)},r(){o=e.getBoundingClientRect()},f(){re(e),a(),ie(e,o)},a(){a(),a=ce(e,o,_e,{duration:300})},i(u){f||(P(s.$$.fragment,u),fe(()=>{i&&i.end(1),n=ye(e,t[3],{key:t[4].id}),n.start()}),f=!0)},o(u){U(s.$$.fragment,u),n&&n.invalidate(),i=Te(e,t[2],{key:t[4].id}),f=!1},d(u){u&&k(e),Z(s),u&&i&&i.end()}}}function tt(l){let t,e,s,n=[],i=new Map,o,a=[],f=new Map,u,d,v=l[1].filter(Me);const p=c=>c[4].id;for(let c=0;c<v.length;c+=1){let r=qe(l,v,c),m=p(r);i.set(m,n[c]=Ae(m,r))}let w=l[1].filter(Pe);const h=c=>c[4].id;for(let c=0;c<w.length;c+=1){let r=Se(l,w,c),m=h(r);f.set(m,a[c]=Le(m,r))}return{c(){t=y("section"),e=y("div"),s=y("ul");for(let c=0;c<n.length;c+=1)n[c].c();o=y("ul");for(let c=0;c<a.length;c+=1)a[c].c();this.h()},l(c){t=T(c,"SECTION",{class:!0});var r=j(t);e=T(r,"DIV",{class:!0});var m=j(e);s=T(m,"UL",{class:!0});var F=j(s);for(let D=0;D<n.length;D+=1)n[D].l(F);F.forEach(k),o=T(m,"UL",{class:!0});var L=j(o);for(let D=0;D<a.length;D+=1)a[D].l(L);L.forEach(k),m.forEach(k),r.forEach(k),this.h()},h(){g(s,"class","task-section__col"),g(o,"class","task-section__col"),g(e,"class","container task-section__grid svelte-1jqvrfj"),g(t,"class",u="task-section "+l[0]+" svelte-1jqvrfj")},m(c,r){A(c,t,r),I(t,e),I(e,s);for(let m=0;m<n.length;m+=1)n[m].m(s,null);I(e,o);for(let m=0;m<a.length;m+=1)a[m].m(o,null);d=!0},p(c,[r]){if(r&2){v=c[1].filter(Me),ue();for(let m=0;m<n.length;m+=1)n[m].r();n=te(n,r,p,1,c,v,i,s,he,Ae,null,qe);for(let m=0;m<n.length;m+=1)n[m].a();de()}if(r&2){w=c[1].filter(Pe),ue();for(let m=0;m<a.length;m+=1)a[m].r();a=te(a,r,h,1,c,w,f,o,he,Le,null,Se);for(let m=0;m<a.length;m+=1)a[m].a();de()}(!d||r&1&&u!==(u="task-section "+c[0]+" svelte-1jqvrfj"))&&g(t,"class",u)},i(c){if(!d){for(let r=0;r<v.length;r+=1)P(n[r]);for(let r=0;r<w.length;r+=1)P(a[r]);d=!0}},o(c){for(let r=0;r<n.length;r+=1)U(n[r]);for(let r=0;r<a.length;r+=1)U(a[r]);d=!1},d(c){c&&k(t);for(let r=0;r<n.length;r+=1)n[r].d();for(let r=0;r<a.length;r+=1)a[r].d()}}}const Me=l=>!l.done,Pe=l=>l.done;function lt(l,t,e){let s;le(l,V,a=>e(1,s=a));let{class:n=""}=t;const[i,o]=Qe({duration:a=>Math.sqrt(a*200),fallback(a,f){const u=getComputedStyle(a),d=u.transform==="none"?"":u.transform;return{duration:600,easing:We,css:v=>`
					transform: ${d} scale(${v});
					opacity: ${v}
				`}}});return l.$$set=a=>{"class"in a&&e(0,n=a.class)},[n,s,i,o]}class st extends K{constructor(t){super();Y(this,t,lt,tt,se,{class:0})}}const nt=(l,t)=>{if(t==="dot"){let e=l.getDate(),s=l.getMonth();return`${e<10?0:""}${e+1}.${s<10?0:""}${s+1}.${l.getFullYear()}`}};function Ue(l){let t,e,s,n=l[2].text&&Ve(l);return{c(){t=y("button"),n&&n.c(),this.h()},l(i){t=T(i,"BUTTON",{class:!0});var o=j(t);n&&n.l(o),o.forEach(k),this.h()},h(){g(t,"class","btn svelte-1yy2xse")},m(i,o){A(i,t,o),n&&n.m(t,null),e||(s=S(t,"click",B(l[6])),e=!0)},p(i,o){i[2].text?n?n.p(i,o):(n=Ve(i),n.c(),n.m(t,null)):n&&(n.d(1),n=null)},d(i){i&&k(t),n&&n.d(),e=!1,s()}}}function Ve(l){let t=l[2].text+"",e;return{c(){e=ke(t)},l(s){e=pe(s,t)},m(s,n){A(s,e,n)},p(s,n){n&4&&t!==(t=s[2].text+"")&&be(e,t)},d(s){s&&k(e)}}}function at(l){let t,e,s,n,i,o=l[2]&&Ue(l);return{c(){t=y("div"),e=y("input"),o&&o.c(),this.h()},l(a){t=T(a,"DIV",{class:!0});var f=j(t);e=T(f,"INPUT",{placeholder:!0,class:!0}),o&&o.l(f),f.forEach(k),this.h()},h(){g(e,"placeholder",l[1]),g(e,"class","svelte-1yy2xse"),g(t,"class",s="input-group "+l[0]+" "+(l[2]?"input-group_btn":"")+" svelte-1yy2xse"),C(t,"isError",l[5])},m(a,f){A(a,t,f),I(t,e),je(e,l[4]),o&&o.m(t,null),l[11](t),n||(i=[S(e,"input",l[9]),S(e,"input",l[7]),S(e,"keydown",l[10])],n=!0)},p(a,[f]){f&2&&g(e,"placeholder",a[1]),f&16&&e.value!==a[4]&&je(e,a[4]),a[2]?o?o.p(a,f):(o=Ue(a),o.c(),o.m(t,null)):o&&(o.d(1),o=null),f&5&&s!==(s="input-group "+a[0]+" "+(a[2]?"input-group_btn":"")+" svelte-1yy2xse")&&g(t,"class",s),f&37&&C(t,"isError",a[5])},i:H,o:H,d(a){a&&k(t),o&&o.d(),l[11](null),n=!1,Ee(i)}}}function ot(l,t,e){let{class:s=""}=t,{placeholder:n="Placeholer"}=t,{btn:i=null}=t,o,a,f=!1;const u=Xe(),d=()=>{a?(u("submit",{value:a}),e(4,a="")):e(5,f=!0)},v=()=>{e(5,f=!1)},p=r=>{let m=r.key;m==="Control"&&u("color"),m==="Enter"&&d()};function w(){a=this.value,e(4,a)}const h=r=>p(r);function c(r){oe[r?"unshift":"push"](()=>{o=r,e(3,o)})}return l.$$set=r=>{"class"in r&&e(0,s=r.class),"placeholder"in r&&e(1,n=r.placeholder),"btn"in r&&e(2,i=r.btn)},[s,n,i,o,a,f,d,v,p,w,h,c]}class rt extends K{constructor(t){super();Y(this,t,ot,at,se,{class:0,placeholder:1,btn:2})}}function Be(l,t,e){const s=l.slice();return s[9]=t[e],s[11]=e,s}function He(l,t){let e,s,n,i,o=H,a,f,u;return{key:l,first:null,c(){e=y("button"),this.h()},l(d){e=T(d,"BUTTON",{class:!0,style:!0}),j(e).forEach(k),this.h()},h(){g(e,"class","add-todo__color svelte-1hafqlz"),g(e,"style",s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`),this.first=e},m(d,v){A(d,e,v),a=!0,f||(u=S(e,"click",B(function(){ve(t[5](t[9].color))&&t[5](t[9].color).apply(this,arguments)})),f=!0)},p(d,v){t=d,(!a||v&10&&s!==(s=`color: ${t[9].color}; transition-delay: ${50*t[11]}ms`))&&g(e,"style",s)},r(){i=e.getBoundingClientRect()},f(){re(e),o(),ie(e,i)},a(){o(),o=ce(e,i,_e,{})},i(d){a||(fe(()=>{n||(n=we(e,Ce,{},!0)),n.run(1)}),a=!0)},o(d){n||(n=we(e,Ce,{},!1)),n.run(0),a=!1},d(d){d&&k(e),d&&n&&n.end(),f=!1,u()}}}function it(l){let t,e,s,n,i=[],o=new Map,a,f,u,d,v,p=l[3].filter(l[7]);const w=h=>h[9].id;for(let h=0;h<p.length;h+=1){let c=Be(l,p,h),r=w(c);o.set(r,i[h]=He(r,c))}return a=new rt({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",btn:{text:"\u0416\u041C\u0418"}}}),a.$on("color",l[8]),a.$on("submit",l[4]),{c(){t=y("div"),e=y("div"),s=y("span");for(let h=0;h<i.length;h+=1)i[h].c();Q(a.$$.fragment),this.h()},l(h){t=T(h,"DIV",{class:!0});var c=j(t);e=T(c,"DIV",{class:!0});var r=j(e);s=T(r,"SPAN",{class:!0,style:!0}),j(s).forEach(k);for(let m=0;m<i.length;m+=1)i[m].l(r);r.forEach(k),W(a.$$.fragment,c),c.forEach(k),this.h()},h(){g(s,"class","add-todo__color add-todo__color_main svelte-1hafqlz"),g(s,"style",n=`color: ${l[1]}`),g(e,"class","add-todo__color-list svelte-1hafqlz"),C(e,"isOpen",l[2]),g(t,"class",f="add-todo "+l[0]+" svelte-1hafqlz")},m(h,c){A(h,t,c),I(t,e),I(e,s);for(let r=0;r<i.length;r+=1)i[r].m(e,null);X(a,t,null),u=!0,d||(v=S(s,"click",B(l[6])),d=!0)},p(h,[c]){if((!u||c&2&&n!==(n=`color: ${h[1]}`))&&g(s,"style",n),c&42){p=h[3].filter(h[7]),ue();for(let r=0;r<i.length;r+=1)i[r].r();i=te(i,c,w,1,h,p,o,e,he,He,null,Be);for(let r=0;r<i.length;r+=1)i[r].a();de()}c&4&&C(e,"isOpen",h[2]),(!u||c&1&&f!==(f="add-todo "+h[0]+" svelte-1hafqlz"))&&g(t,"class",f)},i(h){if(!u){for(let c=0;c<p.length;c+=1)P(i[c]);P(a.$$.fragment,h),u=!0}},o(h){for(let c=0;c<i.length;c+=1)U(i[c]);U(a.$$.fragment,h),u=!1},d(h){h&&k(t);for(let c=0;c<i.length;c+=1)i[c].d();Z(a),d=!1,v()}}}function ct(l,t,e){let s;le(l,Ie,p=>e(3,s=p));let{class:n=""}=t,i="#0029FF",o=!1;const a=p=>{let w={id:Date.now(),text:p.detail.value,color:i,done:!1,date:nt(new Date,"dot")};V.update(h=>h=[w,...h])},f=p=>p&&e(1,i=p),u=()=>e(2,o=!o),d=p=>p.color!=i,v=()=>e(2,o=!o);return l.$$set=p=>{"class"in p&&e(0,n=p.class)},[n,i,o,s,a,f,u,d,v]}class ft extends K{constructor(t){super();Y(this,t,ct,it,se,{class:0})}}function ut(l){let t,e,s,n,i,o,a;return n=new ft({}),o=new st({props:{class:"mt-50"}}),{c(){t=Ze(),e=y("section"),s=y("div"),Q(n.$$.fragment),Q(o.$$.fragment),this.h()},l(f){Ge('[data-svelte="svelte-1lxmpr"]',document.head).forEach(k),t=Je(f),e=T(f,"SECTION",{class:!0});var d=j(e);s=T(d,"DIV",{class:!0});var v=j(s);W(n.$$.fragment,v),v.forEach(k),d.forEach(k),W(o.$$.fragment,f),this.h()},h(){document.title="\u0422\u0443\u0414\u0443",g(s,"class","container"),g(e,"class",i=""+(l[0]+" mt-50 svelte-110abfo"))},m(f,u){A(f,t,u),A(f,e,u),I(e,s),X(n,s,null),X(o,f,u),a=!0},p(f,[u]){(!a||u&1&&i!==(i=""+(f[0]+" mt-50 svelte-110abfo")))&&g(e,"class",i)},i(f){a||(P(n.$$.fragment,f),P(o.$$.fragment,f),a=!0)},o(f){U(n.$$.fragment,f),U(o.$$.fragment,f),a=!1},d(f){f&&k(t),f&&k(e),Z(n),Z(o,f)}}}function dt(l,t,e){let{class:s=""}=t;return l.$$set=n=>{"class"in n&&e(0,s=n.class)},[s]}class ht extends K{constructor(t){super();Y(this,t,dt,ut,se,{class:0})}}export{ht as default};
