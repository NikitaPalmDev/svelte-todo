import{S as p,i as _,s as v,e as i,c as d,a as u,d as o,b as c,f as h,D as E,E as f,v as I,w as N,x as j,p as x,n as y,A as D,j as w,J as T,l as S}from"../chunks/vendor-16222881.js";function V(r){let e,s,n;return{c(){e=i("div"),s=i("input"),this.h()},l(t){e=d(t,"DIV",{class:!0});var a=u(e);s=d(a,"INPUT",{placeholder:!0,class:!0}),a.forEach(o),this.h()},h(){c(s,"placeholder",r[0]),c(s,"class","svelte-j36el1"),c(e,"class",n="input-group "+r[1]+" svelte-j36el1")},m(t,a){h(t,e,a),E(e,s)},p(t,[a]){a&1&&c(s,"placeholder",t[0]),a&2&&n!==(n="input-group "+t[1]+" svelte-j36el1")&&c(e,"class",n)},i:f,o:f,d(t){t&&o(e)}}}function q(r,e,s){let{placeholder:n="Placeholer"}=e,{className:t="123123"}=e;return console.log(t),r.$$set=a=>{"placeholder"in a&&s(0,n=a.placeholder),"className"in a&&s(1,t=a.className)},[n,t]}class A extends p{constructor(e){super();_(this,e,q,V,v,{placeholder:0,className:1})}}function C(r){let e,s,n;return s=new A({props:{class:"add-todo__input",placeholder:"\u0427\u0442\u043E \u043A\u0443\u0434\u0430 \u0437\u0430\u0447\u0435\u043C"}}),{c(){e=i("div"),I(s.$$.fragment),this.h()},l(t){e=d(t,"DIV",{class:!0});var a=u(e);N(s.$$.fragment,a),a.forEach(o),this.h()},h(){c(e,"class","add-todo")},m(t,a){h(t,e,a),j(s,e,null),n=!0},p:f,i(t){n||(x(s.$$.fragment,t),n=!0)},o(t){y(s.$$.fragment,t),n=!1},d(t){t&&o(e),D(s)}}}class P extends p{constructor(e){super();_(this,e,null,C,v,{})}}function b(r){let e,s,n,t,a;return t=new P({}),{c(){e=w(),s=i("section"),n=i("div"),I(t.$$.fragment),this.h()},l(l){T('[data-svelte="svelte-8twn25"]',document.head).forEach(o),e=S(l),s=d(l,"SECTION",{});var g=u(s);n=d(g,"DIV",{class:!0});var $=u(n);N(t.$$.fragment,$),$.forEach(o),g.forEach(o),this.h()},h(){document.title="ToDo",c(n,"class","container")},m(l,m){h(l,e,m),h(l,s,m),E(s,n),j(t,n,null),a=!0},p:f,i(l){a||(x(t.$$.fragment,l),a=!0)},o(l){y(t.$$.fragment,l),a=!1},d(l){l&&o(e),l&&o(s),D(t)}}}class J extends p{constructor(e){super();_(this,e,null,b,v,{})}}export{J as default};
