function $(){}const G=t=>t;function J(t,e){for(const n in e)t[n]=e[n];return t}function et(t){return t()}function nt(){return Object.create(null)}function E(t){t.forEach(et)}function j(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function gt(t){return Object.keys(t).length===0}function bt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(bt(e,n))}function Jt(t,e,n,i){if(t){const s=it(t,e,n,i);return t[0](s)}}function it(t,e,n,i){return t[1]&&i?J(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],o=Math.max(e.dirty.length,s.length);for(let c=0;c<o;c+=1)a[c]=e.dirty[c]|s[c];return a}return e.dirty|s}return e.dirty}function Qt(t,e,n,i,s,a){if(s){const o=it(e,n,i,a);t.p(o,s)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Vt(t){return t==null?"":t}const st=typeof window!="undefined";let K=st?()=>window.performance.now():()=>Date.now(),Q=st?t=>requestAnimationFrame(t):$;const S=new Set;function rt(t){S.forEach(e=>{e.c(t)||(S.delete(e),e.f())}),S.size!==0&&Q(rt)}function U(t){let e;return S.size===0&&Q(rt),{promise:new Promise(n=>{S.add(e={c:t,f:n})}),abort(){S.delete(e)}}}let P=!1;function xt(){P=!0}function wt(){P=!1}function $t(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function kt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&r.push(f)}e=r}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let r=0;r<e.length;r++){const l=e[r].claim_order,f=(s>0&&e[n[s]].claim_order<=l?s+1:$t(1,s,d=>e[n[d]].claim_order,l))-1;i[r]=n[f]+1;const u=f+1;n[u]=r,s=Math.max(u,s)}const a=[],o=[];let c=e.length-1;for(let r=n[s]+1;r!=0;r=i[r-1]){for(a.push(e[r-1]);c>=r;c--)o.push(e[c]);c--}for(;c>=0;c--)o.push(e[c]);a.reverse(),o.sort((r,l)=>r.claim_order-l.claim_order);for(let r=0,l=0;r<o.length;r++){for(;l<a.length&&o[r].claim_order>=a[l].claim_order;)l++;const f=l<a.length?a[l]:null;t.insertBefore(o[r],f)}}function vt(t,e){t.appendChild(e)}function ot(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=ct("style");return St(ot(t),e),e}function St(t,e){vt(t.head||t,e)}function Ct(t,e){if(P){for(kt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Xt(t,e,n){P&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Ot(t){t.parentNode.removeChild(t)}function ct(t){return document.createElement(t)}function V(t){return document.createTextNode(t)}function Yt(){return V(" ")}function Zt(){return V("")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ee(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ne(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function jt(t){return Array.from(t.childNodes)}function Mt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function lt(t,e,n,i,s=!1){Mt(t);const a=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const c=t[o];if(e(c)){const r=n(c);return r===void 0?t.splice(o,1):t[o]=r,s||(t.claim_info.last_index=o),c}}for(let o=t.claim_info.last_index-1;o>=0;o--){const c=t[o];if(e(c)){const r=n(c);return r===void 0?t.splice(o,1):t[o]=r,s?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,c}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function At(t,e,n,i){return lt(t,s=>s.nodeName===e,s=>{const a=[];for(let o=0;o<s.attributes.length;o++){const c=s.attributes[o];n[c.name]||a.push(c.name)}a.forEach(o=>s.removeAttribute(o))},()=>i(e))}function ie(t,e,n){return At(t,e,n,ct)}function qt(t,e){return lt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>V(e),!0)}function se(t){return qt(t," ")}function re(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function oe(t,e){t.value=e==null?"":e}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function at(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function le(t,e=document.body){return Array.from(e.querySelectorAll(t))}const X=new Set;let z=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Y(t,e,n,i,s,a,o,c=0){const r=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=r){const g=e+(n-e)*a(p);l+=p*100+`%{${o(g,1-g)}}
`}const f=l+`100% {${o(n,1-n)}}
}`,u=`__svelte_${Nt(f)}_${c}`,d=ot(t);X.add(d);const _=d.__svelte_stylesheet||(d.__svelte_stylesheet=Et(t).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[u]||(h[u]=!0,_.insertRule(`@keyframes ${u} ${f}`,_.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${u} ${i}ms linear ${s}ms 1 both`,z+=1,u}function L(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||Rt())}function Rt(){Q(()=>{z||(X.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),X.clear())})}function ae(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:a=0,duration:o=300,easing:c=G,start:r=K()+a,end:l=r+o,tick:f=$,css:u}=n(t,{from:e,to:s},i);let d=!0,_=!1,h;function y(){u&&(h=Y(t,0,1,o,a,c,u)),a||(_=!0)}function p(){u&&L(t,h),d=!1}return U(g=>{if(!_&&g>=r&&(_=!0),_&&g>=l&&(f(1,0),p()),!d)return!1;if(_){const b=g-r,w=0+1*c(b/o);f(w,1-w)}return!0}),y(),f(0,1),p}function ue(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Bt(t,s)}}function Bt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let M;function A(t){M=t}function T(){if(!M)throw new Error("Function called outside component initialization");return M}function fe(t){T().$$.on_mount.push(t)}function de(t){T().$$.after_update.push(t)}function _e(){const t=T();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=at(e,n);i.slice().forEach(a=>{a.call(t,s)})}}}function he(t,e){T().$$.context.set(t,e)}const q=[],ut=[],F=[],ft=[],Dt=Promise.resolve();let Z=!1;function Pt(){Z||(Z=!0,Dt.then(dt))}function N(t){F.push(t)}const tt=new Set;let I=0;function dt(){const t=M;do{for(;I<q.length;){const e=q[I];I++,A(e),zt(e.$$)}for(A(null),q.length=0,I=0;ut.length;)ut.pop()();for(let e=0;e<F.length;e+=1){const n=F[e];tt.has(n)||(tt.add(n),n())}F.length=0}while(q.length);for(;ft.length;)ft.pop()();Z=!1,tt.clear(),A(t)}function zt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}let R;function _t(){return R||(R=Promise.resolve(),R.then(()=>{R=null})),R}function H(t,e,n){t.dispatchEvent(at(`${e?"intro":"outro"}${n}`))}const W=new Set;let v;function me(){v={r:0,c:[],p:v}}function pe(){v.r||E(v.c),v=v.p}function ht(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(W.has(t))return;W.add(t),v.c.push(()=>{W.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const mt={duration:0};function ye(t,e,n){let i=e(t,n),s=!1,a,o,c=0;function r(){a&&L(t,a)}function l(){const{delay:u=0,duration:d=300,easing:_=G,tick:h=$,css:y}=i||mt;y&&(a=Y(t,0,1,d,u,_,y,c++)),h(0,1);const p=K()+u,g=p+d;o&&o.abort(),s=!0,N(()=>H(t,!0,"start")),o=U(b=>{if(s){if(b>=g)return h(1,0),H(t,!0,"end"),r(),s=!1;if(b>=p){const w=_((b-p)/d);h(w,1-w)}}return s})}let f=!1;return{start(){f||(f=!0,L(t),j(i)?(i=i(),_t().then(l)):l())},invalidate(){f=!1},end(){s&&(r(),s=!1)}}}function ge(t,e,n){let i=e(t,n),s=!0,a;const o=v;o.r+=1;function c(){const{delay:r=0,duration:l=300,easing:f=G,tick:u=$,css:d}=i||mt;d&&(a=Y(t,1,0,l,r,f,d));const _=K()+r,h=_+l;N(()=>H(t,!1,"start")),U(y=>{if(s){if(y>=h)return u(0,1),H(t,!1,"end"),--o.r||E(o.c),!1;if(y>=_){const p=f((y-_)/l);u(1-p,p)}}return s})}return j(i)?_t().then(()=>{i=i(),c()}):c(),{end(r){r&&i.tick&&i.tick(1,0),s&&(a&&L(t,a),s=!1)}}}function Tt(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function be(t,e){t.f(),Tt(t,e)}function xe(t,e,n,i,s,a,o,c,r,l,f,u){let d=t.length,_=a.length,h=d;const y={};for(;h--;)y[t[h].key]=h;const p=[],g=new Map,b=new Map;for(h=_;h--;){const m=u(s,a,h),x=n(m);let k=o.get(x);k?i&&k.p(m,e):(k=l(x,m),k.c()),g.set(x,p[h]=k),x in y&&b.set(x,Math.abs(h-y[x]))}const w=new Set,B=new Set;function O(m){ht(m,1),m.m(c,f),o.set(m.key,m),f=m.first,_--}for(;d&&_;){const m=p[_-1],x=t[d-1],k=m.key,D=x.key;m===x?(f=m.first,d--,_--):g.has(D)?!o.has(k)||w.has(k)?O(m):B.has(D)?d--:b.get(k)>b.get(D)?(B.add(k),O(m)):(w.add(D),d--):(r(x,o),d--)}for(;d--;){const m=t[d];g.has(m.key)||r(m,o)}for(;_;)O(p[_-1]);return p}function we(t,e){const n={},i={},s={$$scope:1};let a=t.length;for(;a--;){const o=t[a],c=e[a];if(c){for(const r in o)r in c||(i[r]=1);for(const r in c)s[r]||(n[r]=c[r],s[r]=1);t[a]=c}else for(const r in o)s[r]=1}for(const o in i)o in n||(n[o]=void 0);return n}function $e(t){return typeof t=="object"&&t!==null?t:{}}function ke(t){t&&t.c()}function ve(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:s,on_mount:a,on_destroy:o,after_update:c}=t.$$;s&&s.m(e,n),i||N(()=>{const r=a.map(et).filter(j);o?o.push(...r):E(r),t.$$.on_mount=[]}),c.forEach(N)}function It(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(q.push(t),Pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Ee(t,e,n,i,s,a,o,c=[-1]){const r=M;A(t);const l=t.$$={fragment:null,ctx:null,props:a,update:$,not_equal:s,bound:nt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(r?r.$$.context:[])),callbacks:nt(),dirty:c,skip_bound:!1,root:e.target||r.$$.root};o&&o(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(u,d,..._)=>{const h=_.length?_[0]:d;return l.ctx&&s(l.ctx[u],l.ctx[u]=h)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](h),f&&Ht(t,u)),d}):[],l.update(),f=!0,E(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){xt();const u=jt(e.target);l.fragment&&l.fragment.l(u),u.forEach(Ot)}else l.fragment&&l.fragment.c();e.intro&&ht(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),wt(),dt()}A(r)}class Se{$destroy(){It(this,1),this.$destroy=$}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!gt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const C=[];function Ce(t,e=$){let n;const i=new Set;function s(c){if(yt(t,c)&&(t=c,n)){const r=!C.length;for(const l of i)l[1](),C.push(l,t);if(r){for(let l=0;l<C.length;l+=2)C[l][0](C[l+1]);C.length=0}}}function a(c){s(c(t))}function o(c,r=$){const l=[c,r];return i.add(l),i.size===1&&(n=e(s)||$),c(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:s,update:a,subscribe:o}}function pt(t){const e=t-1;return e*e*e+1}function Oe(t){return--t*t*t*t*t+1}function je(t,{from:e,to:n},i={}){const s=getComputedStyle(t),a=s.transform==="none"?"":s.transform,[o,c]=s.transformOrigin.split(" ").map(parseFloat),r=e.left+e.width*o/n.width-(n.left+o),l=e.top+e.height*c/n.height-(n.top+c),{delay:f=0,duration:u=_=>Math.sqrt(_)*120,easing:d=pt}=i;return{delay:f,duration:j(u)?u(Math.sqrt(r*r+l*l)):u,easing:d,css:(_,h)=>{const y=h*r,p=h*l,g=_+h*e.width/n.width,b=_+h*e.height/n.height;return`transform: ${a} translate(${y}px, ${p}px) scale(${g}, ${b});`}}}/*! *****************************************************************************
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
***************************************************************************** */function Wt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Me(t){var{fallback:e}=t,n=Wt(t,["fallback"]);const i=new Map,s=new Map;function a(c,r,l){const{delay:f=0,duration:u=m=>Math.sqrt(m)*30,easing:d=pt}=J(J({},n),l),_=r.getBoundingClientRect(),h=c.left-_.left,y=c.top-_.top,p=c.width/_.width,g=c.height/_.height,b=Math.sqrt(h*h+y*y),w=getComputedStyle(r),B=w.transform==="none"?"":w.transform,O=+w.opacity;return{delay:f,duration:j(u)?u(b):u,easing:d,css:(m,x)=>`
				opacity: ${m*O};
				transform-origin: top left;
				transform: ${B} translate(${x*h}px,${x*y}px) scale(${m+(1-m)*p}, ${m+(1-m)*g});
			`}}function o(c,r,l){return(f,u)=>(c.set(u.key,{rect:f.getBoundingClientRect()}),()=>{if(r.has(u.key)){const{rect:d}=r.get(u.key);return r.delete(u.key),a(d,f,u)}return c.delete(u.key),e&&e(f,u,l)})}return[o(s,i,!1),o(i,s,!0)]}export{E as $,It as A,J as B,Ce as C,Ct as D,$ as E,Jt as F,Vt as G,Qt as H,Ut as I,Kt as J,ce as K,te as L,Gt as M,ue as N,Bt as O,ae as P,N as Q,ye as R,Se as S,ge as T,xe as U,Me as V,je as W,be as X,Oe as Y,ee as Z,oe as _,jt as a,_e as a0,ut as a1,le as a2,ne as b,ie as c,Ot as d,ct as e,Xt as f,qt as g,re as h,Ee as i,Yt as j,Zt as k,se as l,me as m,Lt as n,pe as o,ht as p,he as q,de as r,yt as s,V as t,fe as u,ke as v,ve as w,Ft as x,we as y,$e as z};
