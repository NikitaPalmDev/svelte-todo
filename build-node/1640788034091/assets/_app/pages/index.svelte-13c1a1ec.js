import{S as _,i as p,s as v,e as i,c as u,a as d,d as o,b as c,f,D as E,E as h,v as N,w as I,x as y,p as D,n as w,A as x,j as T,J as z,l as S}from"../chunks/vendor-16222881.js";function V(r){let e,a,s;return{c(){e=i("div"),a=i("input"),this.h()},l(t){e=u(t,"DIV",{class:!0});var n=d(e);a=u(n,"INPUT",{placeholder:!0,class:!0}),n.forEach(o),this.h()},h(){c(a,"placeholder",r[0]),c(a,"class","svelte-f0rfhz"),c(e,"class",s="input-group "+r[1]+" "+(r[2]?"input-group_btn":"")+" svelte-f0rfhz")},m(t,n){f(t,e,n),E(e,a)},p(t,[n]){n&1&&c(a,"placeholder",t[0]),n&6&&s!==(s="input-group "+t[1]+" "+(t[2]?"input-group_btn":"")+" svelte-f0rfhz")&&c(e,"class",s)},i:h,o:h,d(t){t&&o(e)}}}function j(r,e,a){let{placeholder:s="Placeholer"}=e,{className:t=""}=e,{btn:n=null}=e;return r.$$set=l=>{"placeholder"in l&&a(0,s=l.placeholder),"className"in l&&a(1,t=l.className),"btn"in l&&a(2,n=l.btn)},[s,t,n]}class q extends _{constructor(e){super();p(this,e,j,V,v,{placeholder:0,className:1,btn:2})}}function A(r){let e,a,s;return a=new q({props:{placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C",className:"add-todo__input",btn:{text:"\u0416\u041C\u0418"}}}),{c(){e=i("div"),N(a.$$.fragment),this.h()},l(t){e=u(t,"DIV",{class:!0});var n=d(e);I(a.$$.fragment,n),n.forEach(o),this.h()},h(){c(e,"class","add-todo")},m(t,n){f(t,e,n),y(a,e,null),s=!0},p:h,i(t){s||(D(a.$$.fragment,t),s=!0)},o(t){w(a.$$.fragment,t),s=!1},d(t){t&&o(e),x(a)}}}class C extends _{constructor(e){super();p(this,e,null,A,v,{})}}function P(r){let e,a,s,t,n;return t=new C({}),{c(){e=T(),a=i("section"),s=i("div"),N(t.$$.fragment),this.h()},l(l){z('[data-svelte="svelte-8twn25"]',document.head).forEach(o),e=S(l),a=u(l,"SECTION",{});var g=d(a);s=u(g,"DIV",{class:!0});var b=d(s);I(t.$$.fragment,b),b.forEach(o),g.forEach(o),this.h()},h(){document.title="ToDo",c(s,"class","container")},m(l,m){f(l,e,m),f(l,a,m),E(a,s),y(t,s,null),n=!0},p:h,i(l){n||(D(t.$$.fragment,l),n=!0)},o(l){w(t.$$.fragment,l),n=!1},d(l){l&&o(e),l&&o(a),x(t)}}}class k extends _{constructor(e){super();p(this,e,null,P,v,{})}}export{k as default};
