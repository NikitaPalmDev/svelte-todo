function b(){}const G=t=>t;function J(t,e){for(const n in e)t[n]=e[n];return t}function et(t){return t()}function nt(){return Object.create(null)}function E(t){t.forEach(et)}function S(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function bt(t){return Object.keys(t).length===0}function it(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t,e,n){t.$$.on_destroy.push(it(e,n))}function Qt(t,e,n,i){if(t){const s=st(t,e,n,i);return t[0](s)}}function st(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function Ut(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],o=Math.max(e.dirty.length,s.length);for(let c=0;c<o;c+=1)a[c]=e.dirty[c]|s[c];return a}return e.dirty|s}return e.dirty}function Vt(t,e,n,i,s,a){if(s){const o=st(e,n,i,a);t.p(o,s)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Yt(t){return t==null?"":t}const rt=typeof window!="undefined";let K=rt?()=>window.performance.now():()=>Date.now(),Q=rt?t=>requestAnimationFrame(t):b;const C=new Set;function ot(t){C.forEach(e=>{e.c(t)||(C.delete(e),e.f())}),C.size!==0&&Q(ot)}function U(t){let e;return C.size===0&&Q(ot),{promise:new Promise(n=>{C.add(e={c:t,f:n})}),abort(){C.delete(e)}}}let P=!1;function xt(){P=!0}function wt(){P=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<e.length;l++){const d=e[l];d.claim_order!==void 0&&r.push(d)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const l=e[r].claim_order,d=(s>0&&e[n[s]].claim_order<=l?s+1:$t(1,s,_=>e[n[_]].claim_order,l))-1;i[r]=n[d]+1;const u=d+1;n[u]=r,s=Math.max(u,s)}const a=[],o=[];let c=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(a.push(e[r-1]);c>=r;c--)o.push(e[c]);c--}for(;c>=0;c--)o.push(e[c]);a.reverse(),o.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<o.length;r++){for(;l<a.length&&o[r].claim_order>=a[l].claim_order;)l++;const d=l<a.length?a[l]:null;t.insertBefore(o[r],d)}}function kt(t,e){t.appendChild(e)}function ct(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=lt("style");return St(ct(t),e),e}function St(t,e){kt(t.head||t,e)}function Ct(t,e){if(P){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Zt(t,e,n){P&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Ot(t){t.parentNode.removeChild(t)}function lt(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function te(){return V(" ")}function ee(){return V("")}function ne(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ie(t){return function(e){return e.preventDefault(),t.call(this,e)}}function se(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function at(t,e,n,i,s=!1){At(t);const a=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(e(c)){const r=n(c);return r===void 0?t.splice(o,1):t[o]=r,s||(t.claim_info.last_index=o),c}}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(e(c)){const r=n(c);return r===void 0?t.splice(o,1):t[o]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,c}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function Mt(t,e,n,i){return at(t,s=>s.nodeName===e,s=>{const a=[];for(let o=0;o<s.attributes.length;o++){const c=s.attributes[o];n[c.name]||a.push(c.name)}a.forEach(o=>s.removeAttribute(o))},()=>i(e))}function re(t,e,n){return Mt(t,e,n,lt)}function qt(t,e){return at(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(e),!0)}function oe(t){return qt(t," ")}function ce(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function le(t,e){t.value=e==null?"":e}function ae(t,e,n){t.classList[n?"add":"remove"](e)}function ut(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function ue(t,e=document.body){return Array.from(e.querySelectorAll(t))}const X=new Set;let z=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Y(t,e,n,i,s,a,o,c=0){const r=16.666/i;let l=`{
`;for(let y=0;y<=1;y+=r){const g=e+(n-e)*a(y);l+=y*100+`%{${o(g,1-g)}}
`}const d=l+`100% {${o(n,1-n)}}
}`,u=`__svelte_${Nt(d)}_${c}`,_=ct(t);X.add(_);const f=_.__svelte_stylesheet||(_.__svelte_stylesheet=Et(t).sheet),h=_.__svelte_rules||(_.__svelte_rules={});h[u]||(h[u]=!0,f.insertRule(`@keyframes ${u} ${d}`,f.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${u} ${i}ms linear ${s}ms 1 both`,z+=1,u}function L(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||Rt())}function Rt(){Q(()=>{z||(X.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),X.clear())})}function fe(t,e,n,i){if(!e)return b;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return b;const{delay:a=0,duration:o=300,easing:c=G,start:r=K()+a,end:l=r+o,tick:d=b,css:u}=n(t,{from:e,to:s},i);let _=!0,f=!1,h;function p(){u&&(h=Y(t,0,1,o,a,c,u)),a||(f=!0)}function y(){u&&L(t,h),_=!1}return U(g=>{if(!f&&g>=r&&(f=!0),f&&g>=l&&(d(1,0),y()),!_)return!1;if(f){const x=g-r,$=0+1*c(x/o);d($,1-$)}return!0}),p(),d(0,1),y}function de(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Bt(t,s)}}function Bt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let A;function M(t){A=t}function T(){if(!A)throw new Error("Function called outside component initialization");return A}function _e(t){T().$$.on_mount.push(t)}function he(t){T().$$.after_update.push(t)}function me(){const t=T();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=ut(e,n);i.slice().forEach(a=>{a.call(t,s)})}}}function pe(t,e){T().$$.context.set(t,e)}const q=[],ft=[],F=[],dt=[],Dt=Promise.resolve();let Z=!1;function Pt(){Z||(Z=!0,Dt.then(_t))}function N(t){F.push(t)}const tt=new Set;let I=0;function _t(){const t=A;do{for(;I<q.length;){const e=q[I];I++,M(e),zt(e.$$)}for(M(null),q.length=0,I=0;ft.length;)ft.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];tt.has(n)||(tt.add(n),n())}F.length=0}while(q.length);for(;dt.length;)dt.pop()();Z=!1,tt.clear(),M(t)}function zt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let R;function ht(){return R||(R=Promise.resolve(),R.then(()=>{R=null})),R}function H(t,e,n){t.dispatchEvent(ut(`${e?"intro":"outro"}${n}`))}const W=new Set;let k;function ye(){k={r:0,c:[],p:k}}function ge(){k.r||E(k.c),k=k.p}function mt(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(W.has(t))return;W.add(t),k.c.push(()=>{W.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const pt={duration:0};function be(t,e,n){let i=e(t,n),s=!1,a,o,c=0;function r(){a&&L(t,a)}function l(){const{delay:u=0,duration:_=300,easing:f=G,tick:h=b,css:p}=i||pt;p&&(a=Y(t,0,1,_,u,f,p,c++)),h(0,1);const y=K()+u,g=y+_;o&&o.abort(),s=!0,N(()=>H(t,!0,"start")),o=U(x=>{if(s){if(x>=g)return h(1,0),H(t,!0,"end"),r(),s=!1;if(x>=y){const $=f((x-y)/_);h($,1-$)}}return s})}let d=!1;return{start(){d||(d=!0,L(t),S(i)?(i=i(),ht().then(l)):l())},invalidate(){d=!1},end(){s&&(r(),s=!1)}}}function xe(t,e,n){let i=e(t,n),s=!0,a;const o=k;o.r+=1;function c(){const{delay:r=0,duration:l=300,easing:d=G,tick:u=b,css:_}=i||pt;_&&(a=Y(t,1,0,l,r,d,_));const f=K()+r,h=f+l;N(()=>H(t,!1,"start")),U(p=>{if(s){if(p>=h)return u(0,1),H(t,!1,"end"),--o.r||E(o.c),!1;if(p>=f){const y=d((p-f)/l);u(1-y,y)}}return s})}return S(i)?ht().then(()=>{i=i(),c()}):c(),{end(r){r&&i.tick&&i.tick(1,0),s&&(a&&L(t,a),s=!1)}}}function we(t,e){t.d(1),e.delete(t.key)}function Tt(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function $e(t,e){t.f(),Tt(t,e)}function ve(t,e,n,i,s,a,o,c,r,l,d,u){let _=t.length,f=a.length,h=_;const p={};for(;h--;)p[t[h].key]=h;const y=[],g=new Map,x=new Map;for(h=f;h--;){const m=u(s,a,h),w=n(m);let v=o.get(w);v?i&&v.p(m,e):(v=l(w,m),v.c()),g.set(w,y[h]=v),w in p&&x.set(w,Math.abs(h-p[w]))}const $=new Set,B=new Set;function j(m){mt(m,1),m.m(c,d),o.set(m.key,m),d=m.first,f--}for(;_&&f;){const m=y[f-1],w=t[_-1],v=m.key,D=w.key;m===w?(d=m.first,_--,f--):g.has(D)?!o.has(v)||$.has(v)?j(m):B.has(D)?_--:x.get(v)>x.get(D)?(B.add(v),j(m)):($.add(D),_--):(r(w,o),_--)}for(;_--;){const m=t[_];g.has(m.key)||r(m,o)}for(;f;)j(y[f-1]);return y}function ke(t,e){const n={},i={},s={$$scope:1};let a=t.length;for(;a--;){const o=t[a],c=e[a];if(c){for(const r in o)r in c||(i[r]=1);for(const r in c)s[r]||(n[r]=c[r],s[r]=1);t[a]=c}else for(const r in o)s[r]=1}for(const o in i)o in n||(n[o]=void 0);return n}function Ee(t){return typeof t=="object"&&t!==null?t:{}}function Se(t){t&&t.c()}function Ce(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:s,on_mount:a,on_destroy:o,after_update:c}=t.$$;s&&s.m(e,n),i||N(()=>{const r=a.map(et).filter(S);o?o.push(...r):E(r),t.$$.on_mount=[]}),c.forEach(N)}function It(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(q.push(t),Pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Oe(t,e,n,i,s,a,o,c=[-1]){const r=A;M(t);const l=t.$$={fragment:null,ctx:null,props:a,update:b,not_equal:s,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:nt(),dirty:c,skip_bound:!1,root:e.target||r.$$.root};o&&o(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(u,_,...f)=>{const h=f.length?f[0]:_;return l.ctx&&s(l.ctx[u],l.ctx[u]=h)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](h),d&&Ht(t,u)),_}):[],l.update(),d=!0,E(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){xt();const u=jt(e.target);l.fragment&&l.fragment.l(u),u.forEach(Ot)}else l.fragment&&l.fragment.c();e.intro&&mt(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),wt(),_t()}M(r)}class je{$destroy(){It(this,1),this.$destroy=b}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const O=[];function Wt(t,e){return{subscribe:Gt(t,e).subscribe}}function Gt(t,e=b){let n;const i=new Set;function s(c){if(gt(t,c)&&(t=c,n)){const r=!O.length;for(const l of i)l[1](),O.push(l,t);if(r){for(let l=0;l<O.length;l+=2)O[l][0](O[l+1]);O.length=0}}}function a(c){s(c(t))}function o(c,r=b){const l=[c,r];return i.add(l),i.size===1&&(n=e(s)||b),c(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:s,update:a,subscribe:o}}function Ae(t,e,n){const i=!Array.isArray(t),s=i?[t]:t,a=e.length<2;return Wt(n,o=>{let c=!1;const r=[];let l=0,d=b;const u=()=>{if(l)return;d();const f=e(i?r[0]:r,o);a?o(f):d=S(f)?f:b},_=s.map((f,h)=>it(f,p=>{r[h]=p,l&=~(1<<h),c&&u()},()=>{l|=1<<h}));return c=!0,u(),function(){E(_),d()}})}function yt(t){const e=t-1;return e*e*e+1}function Me(t){return--t*t*t*t*t+1}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Jt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function qe(t){var{fallback:e}=t,n=Jt(t,["fallback"]);const i=new Map,s=new Map;function a(c,r,l){const{delay:d=0,duration:u=m=>Math.sqrt(m)*30,easing:_=yt}=J(J({},n),l),f=r.getBoundingClientRect(),h=c.left-f.left,p=c.top-f.top,y=c.width/f.width,g=c.height/f.height,x=Math.sqrt(h*h+p*p),$=getComputedStyle(r),B=$.transform==="none"?"":$.transform,j=+$.opacity;return{delay:d,duration:S(u)?u(x):u,easing:_,css:(m,w)=>`
				opacity: ${m*j};
				transform-origin: top left;
				transform: ${B} translate(${w*h}px,${w*p}px) scale(${m+(1-m)*y}, ${m+(1-m)*g});
			`}}function o(c,r,l){return(d,u)=>(c.set(u.key,{rect:d.getBoundingClientRect()}),()=>{if(r.has(u.key)){const{rect:_}=r.get(u.key);return r.delete(u.key),a(_,d,u)}return c.delete(u.key),e&&e(d,u,l)})}return[o(s,i,!1),o(i,s,!0)]}function Ne(t,{from:e,to:n},i={}){const s=getComputedStyle(t),a=s.transform==="none"?"":s.transform,[o,c]=s.transformOrigin.split(" ").map(parseFloat),r=e.left+e.width*o/n.width-(n.left+o),l=e.top+e.height*c/n.height-(n.top+c),{delay:d=0,duration:u=f=>Math.sqrt(f)*120,easing:_=yt}=i;return{delay:d,duration:S(u)?u(Math.sqrt(r*r+l*l)):u,easing:_,css:(f,h)=>{const p=h*r,y=h*l,g=f+h*e.width/n.width,x=f+h*e.height/n.height;return`transform: ${a} translate(${p}px, ${y}px) scale(${g}, ${x});`}}}export{Ne as $,It as A,J as B,Gt as C,Ct as D,b as E,Qt as F,Yt as G,Vt as H,Xt as I,Ut as J,Ae as K,ne as L,ie as M,S as N,ae as O,ve as P,we as Q,E as R,je as S,Kt as T,de as U,Bt as V,fe as W,N as X,be as Y,xe as Z,qe as _,jt as a,$e as a0,Me as a1,le as a2,me as a3,ft as a4,ue as a5,se as b,re as c,Ot as d,lt as e,Zt as f,qt as g,ce as h,Oe as i,te as j,ee as k,oe as l,ye as m,Lt as n,ge as o,mt as p,pe as q,he as r,gt as s,V as t,_e as u,Se as v,Ce as w,Ft as x,ke as y,Ee as z};
