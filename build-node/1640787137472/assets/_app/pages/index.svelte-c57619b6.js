import{S as _,i as p,s as v,e as i,c as u,a as d,d as o,b as c,f,D as E,E as h,v as N,w as I,x as y,p as D,n as w,A as T,j as x,J as z,l as S}from"../chunks/vendor-16222881.js";function V(r){let e,a,n;return{c(){e=i("div"),a=i("input"),this.h()},l(t){e=u(t,"DIV",{class:!0});var s=d(e);a=u(s,"INPUT",{placeholder:!0,class:!0}),s.forEach(o),this.h()},h(){c(a,"placeholder",r[0]),c(a,"class","svelte-f0rfhz"),c(e,"class",n="input-group "+r[1]+" "+(r[2]===!0?"input-group_btn":"")+" svelte-f0rfhz")},m(t,s){f(t,e,s),E(e,a)},p(t,[s]){s&1&&c(a,"placeholder",t[0]),s&6&&n!==(n="input-group "+t[1]+" "+(t[2]===!0?"input-group_btn":"")+" svelte-f0rfhz")&&c(e,"class",n)},i:h,o:h,d(t){t&&o(e)}}}function j(r,e,a){let{placeholder:n="Placeholer"}=e,{className:t=""}=e,{btn:s=!1}=e;return r.$$set=l=>{"placeholder"in l&&a(0,n=l.placeholder),"className"in l&&a(1,t=l.className),"btn"in l&&a(2,s=l.btn)},[n,t,s]}class q extends _{constructor(e){super();p(this,e,j,V,v,{placeholder:0,className:1,btn:2})}}function A(r){let e,a,n;return a=new q({props:{placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",className:"add-todo__input"}}),{c(){e=i("div"),N(a.$$.fragment),this.h()},l(t){e=u(t,"DIV",{class:!0});var s=d(e);I(a.$$.fragment,s),s.forEach(o),this.h()},h(){c(e,"class","add-todo")},m(t,s){f(t,e,s),y(a,e,null),n=!0},p:h,i(t){n||(D(a.$$.fragment,t),n=!0)},o(t){w(a.$$.fragment,t),n=!1},d(t){t&&o(e),T(a)}}}class C extends _{constructor(e){super();p(this,e,null,A,v,{})}}function P(r){let e,a,n,t,s;return t=new C({}),{c(){e=x(),a=i("section"),n=i("div"),N(t.$$.fragment),this.h()},l(l){z('[data-svelte="svelte-8twn25"]',document.head).forEach(o),e=S(l),a=u(l,"SECTION",{});var g=d(a);n=u(g,"DIV",{class:!0});var b=d(n);I(t.$$.fragment,b),b.forEach(o),g.forEach(o),this.h()},h(){document.title="ToDo",c(n,"class","container")},m(l,m){f(l,e,m),f(l,a,m),E(a,n),y(t,n,null),s=!0},p:h,i(l){s||(D(t.$$.fragment,l),s=!0)},o(l){w(t.$$.fragment,l),s=!1},d(l){l&&o(e),l&&o(a),T(t)}}}class k extends _{constructor(e){super();p(this,e,null,P,v,{})}}export{k as default};
