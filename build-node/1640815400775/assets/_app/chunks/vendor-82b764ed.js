function $(){}const N=t=>t;function U(t,e){for(const n in e)t[n]=e[n];return t}function it(t){return t()}function st(){return Object.create(null)}function E(t){t.forEach(it)}function S(t){return typeof t=="function"}function gt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function bt(t){return Object.keys(t).length===0}function rt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Kt(t,e,n){t.$$.on_destroy.push(rt(e,n))}function Qt(t,e,n,i){if(t){const s=ct(t,e,n,i);return t[0](s)}}function ct(t,e,n,i){return t[1]&&i?U(n.ctx.slice(),t[1](i(e))):n.ctx}function Ut(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const a=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)a[o]=e.dirty[o]|s[o];return a}return e.dirty|s}return e.dirty}function Vt(t,e,n,i,s,a){if(s){const r=ct(e,n,i,a);t.p(r,s)}}function Xt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Yt(t){return t==null?"":t}const ot=typeof window!="undefined";let F=ot?()=>window.performance.now():()=>Date.now(),V=ot?t=>requestAnimationFrame(t):$;const M=new Set;function lt(t){M.forEach(e=>{e.c(t)||(M.delete(e),e.f())}),M.size!==0&&V(lt)}function I(t){let e;return M.size===0&&V(lt),{promise:new Promise(n=>{M.add(e={c:t,f:n})}),abort(){M.delete(e)}}}let H=!1;function xt(){H=!0}function $t(){H=!1}function wt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function vt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=l?s+1:wt(1,s,u=>e[n[u]].claim_order,l))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const a=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(a.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);a.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<a.length&&r[c].claim_order>=a[l].claim_order;)l++;const _=l<a.length?a[l]:null;t.insertBefore(r[c],_)}}function kt(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function Et(t){const e=ut("style");return St(at(t),e),e}function St(t,e){kt(t.head||t,e)}function Ct(t,e){if(H){for(vt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Zt(t,e,n){H&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Ot(t){t.parentNode.removeChild(t)}function te(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ut(t){return document.createElement(t)}function X(t){return document.createTextNode(t)}function ee(){return X(" ")}function ne(){return X("")}function ie(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function se(t){return function(e){return e.preventDefault(),t.call(this,e)}}function re(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Mt(t){return Array.from(t.childNodes)}function jt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ft(t,e,n,i,s=!1){jt(t);const a=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return a.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,a}function At(t,e,n,i){return ft(t,s=>s.nodeName===e,s=>{const a=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||a.push(o.name)}a.forEach(r=>s.removeAttribute(r))},()=>i(e))}function ce(t,e,n){return At(t,e,n,ut)}function qt(t,e){return ft(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>X(e),!0)}function oe(t){return qt(t," ")}function le(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ae(t,e){t.value=e==null?"":e}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function dt(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function fe(t,e=document.body){return Array.from(e.querySelectorAll(t))}const Y=new Set;let W=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function R(t,e,n,i,s,a,r,o=0){const c=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=c){const g=e+(n-e)*a(p);l+=p*100+`%{${r(g,1-g)}}
`}const _=l+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Nt(_)}_${o}`,u=at(t);Y.add(u);const d=u.__svelte_stylesheet||(u.__svelte_stylesheet=Et(t).sheet),h=u.__svelte_rules||(u.__svelte_rules={});h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${i}ms linear ${s}ms 1 both`,W+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?a=>a.indexOf(e)<0:a=>a.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),W-=s,W||Rt())}function Rt(){V(()=>{W||(Y.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),Y.clear())})}function de(t,e,n,i){if(!e)return $;const s=t.getBoundingClientRect();if(e.left===s.left&&e.right===s.right&&e.top===s.top&&e.bottom===s.bottom)return $;const{delay:a=0,duration:r=300,easing:o=N,start:c=F()+a,end:l=c+r,tick:_=$,css:f}=n(t,{from:e,to:s},i);let u=!0,d=!1,h;function m(){f&&(h=R(t,0,1,r,a,o,f)),a||(d=!0)}function p(){f&&B(t,h),u=!1}return I(g=>{if(!d&&g>=c&&(d=!0),d&&g>=l&&(_(1,0),p()),!u)return!1;if(d){const b=g-c,x=0+1*o(b/r);_(x,1-x)}return!0}),m(),_(0,1),p}function _e(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,s=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Bt(t,s)}}function Bt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),s=i.transform==="none"?"":i.transform;t.style.transform=`${s} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let D;function P(t){D=t}function G(){if(!D)throw new Error("Function called outside component initialization");return D}function he(t){G().$$.on_mount.push(t)}function me(t){G().$$.after_update.push(t)}function pe(){const t=G();return(e,n)=>{const i=t.$$.callbacks[e];if(i){const s=dt(e,n);i.slice().forEach(a=>{a.call(t,s)})}}}function ye(t,e){G().$$.context.set(t,e)}const z=[],_t=[],J=[],ht=[],Dt=Promise.resolve();let Z=!1;function Pt(){Z||(Z=!0,Dt.then(mt))}function j(t){J.push(t)}const tt=new Set;let K=0;function mt(){const t=D;do{for(;K<z.length;){const e=z[K];K++,P(e),zt(e.$$)}for(P(null),z.length=0,K=0;_t.length;)_t.pop()();for(let e=0;e<J.length;e+=1){const n=J[e];tt.has(n)||(tt.add(n),n())}J.length=0}while(z.length);for(;ht.length;)ht.pop()();Z=!1,tt.clear(),P(t)}function zt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}let L;function et(){return L||(L=Promise.resolve(),L.then(()=>{L=null})),L}function C(t,e,n){t.dispatchEvent(dt(`${e?"intro":"outro"}${n}`))}const Q=new Set;let k;function ge(){k={r:0,c:[],p:k}}function be(){k.r||E(k.c),k=k.p}function pt(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function Lt(t,e,n,i){if(t&&t.o){if(Q.has(t))return;Q.add(t),k.c.push(()=>{Q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const nt={duration:0};function xe(t,e,n){let i=e(t,n),s=!1,a,r,o=0;function c(){a&&B(t,a)}function l(){const{delay:f=0,duration:u=300,easing:d=N,tick:h=$,css:m}=i||nt;m&&(a=R(t,0,1,u,f,d,m,o++)),h(0,1);const p=F()+f,g=p+u;r&&r.abort(),s=!0,j(()=>C(t,!0,"start")),r=I(b=>{if(s){if(b>=g)return h(1,0),C(t,!0,"end"),c(),s=!1;if(b>=p){const x=d((b-p)/u);h(x,1-x)}}return s})}let _=!1;return{start(){_||(_=!0,B(t),S(i)?(i=i(),et().then(l)):l())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function $e(t,e,n){let i=e(t,n),s=!0,a;const r=k;r.r+=1;function o(){const{delay:c=0,duration:l=300,easing:_=N,tick:f=$,css:u}=i||nt;u&&(a=R(t,1,0,l,c,_,u));const d=F()+c,h=d+l;j(()=>C(t,!1,"start")),I(m=>{if(s){if(m>=h)return f(0,1),C(t,!1,"end"),--r.r||E(r.c),!1;if(m>=d){const p=_((m-d)/l);f(1-p,p)}}return s})}return S(i)?et().then(()=>{i=i(),o()}):o(),{end(c){c&&i.tick&&i.tick(1,0),s&&(a&&B(t,a),s=!1)}}}function we(t,e,n,i){let s=e(t,n),a=i?0:1,r=null,o=null,c=null;function l(){c&&B(t,c)}function _(u,d){const h=u.b-a;return d*=Math.abs(h),{a,b:u.b,d:h,duration:d,start:u.start,end:u.start+d,group:u.group}}function f(u){const{delay:d=0,duration:h=300,easing:m=N,tick:p=$,css:g}=s||nt,b={start:F()+d,b:u};u||(b.group=k,k.r+=1),r||o?o=b:(g&&(l(),c=R(t,a,u,h,d,m,g)),u&&p(0,1),r=_(b,h),j(()=>C(t,u,"start")),I(x=>{if(o&&x>o.start&&(r=_(o,h),o=null,C(t,r.b,"start"),g&&(l(),c=R(t,a,r.b,r.duration,0,m,s.css))),r){if(x>=r.end)p(a=r.b,1-a),C(t,r.b,"end"),o||(r.b?l():--r.group.r||E(r.group.c)),r=null;else if(x>=r.start){const O=x-r.start;a=r.a+r.d*m(O/r.duration),p(a,1-a)}}return!!(r||o)}))}return{run(u){S(s)?et().then(()=>{s=s(),f(u)}):f(u)},end(){l(),r=o=null}}}function Tt(t,e){Lt(t,1,1,()=>{e.delete(t.key)})}function ve(t,e){t.f(),Tt(t,e)}function ke(t,e,n,i,s,a,r,o,c,l,_,f){let u=t.length,d=a.length,h=u;const m={};for(;h--;)m[t[h].key]=h;const p=[],g=new Map,b=new Map;for(h=d;h--;){const y=f(s,a,h),w=n(y);let v=r.get(w);v?i&&v.p(y,e):(v=l(w,y),v.c()),g.set(w,p[h]=v),w in m&&b.set(w,Math.abs(h-m[w]))}const x=new Set,O=new Set;function q(y){pt(y,1),y.m(o,_),r.set(y.key,y),_=y.first,d--}for(;u&&d;){const y=p[d-1],w=t[u-1],v=y.key,T=w.key;y===w?(_=y.first,u--,d--):g.has(T)?!r.has(v)||x.has(v)?q(y):O.has(T)?u--:b.get(v)>b.get(T)?(O.add(v),q(y)):(x.add(T),u--):(c(w,r),u--)}for(;u--;){const y=t[u];g.has(y.key)||c(y,r)}for(;d;)q(p[d-1]);return p}function Ee(t,e){const n={},i={},s={$$scope:1};let a=t.length;for(;a--;){const r=t[a],o=e[a];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[a]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function Se(t){return typeof t=="object"&&t!==null?t:{}}function Ce(t){t&&t.c()}function Oe(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:s,on_mount:a,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||j(()=>{const c=a.map(it).filter(S);r?r.push(...c):E(c),t.$$.on_mount=[]}),o.forEach(j)}function It(t,e){const n=t.$$;n.fragment!==null&&(E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ht(t,e){t.$$.dirty[0]===-1&&(z.push(t),Pt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Me(t,e,n,i,s,a,r,o=[-1]){const c=D;P(t);const l=t.$$={fragment:null,ctx:null,props:a,update:$,not_equal:s,bound:st(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:st(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(f,u,...d)=>{const h=d.length?d[0]:u;return l.ctx&&s(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),_&&Ht(t,f)),u}):[],l.update(),_=!0,E(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){xt();const f=Mt(e.target);l.fragment&&l.fragment.l(f),f.forEach(Ot)}else l.fragment&&l.fragment.c();e.intro&&pt(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),$t(),mt()}P(c)}class je{$destroy(){It(this,1),this.$destroy=$}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!bt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const A=[];function Wt(t,e){return{subscribe:Gt(t,e).subscribe}}function Gt(t,e=$){let n;const i=new Set;function s(o){if(gt(t,o)&&(t=o,n)){const c=!A.length;for(const l of i)l[1](),A.push(l,t);if(c){for(let l=0;l<A.length;l+=2)A[l][0](A[l+1]);A.length=0}}}function a(o){s(o(t))}function r(o,c=$){const l=[o,c];return i.add(l),i.size===1&&(n=e(s)||$),o(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:s,update:a,subscribe:r}}function Ae(t,e,n){const i=!Array.isArray(t),s=i?[t]:t,a=e.length<2;return Wt(n,r=>{let o=!1;const c=[];let l=0,_=$;const f=()=>{if(l)return;_();const d=e(i?c[0]:c,r);a?r(d):_=S(d)?d:$},u=s.map((d,h)=>rt(d,m=>{c[h]=m,l&=~(1<<h),o&&f()},()=>{l|=1<<h}));return o=!0,f(),function(){E(u),_()}})}function yt(t){const e=t-1;return e*e*e+1}function qe(t){return--t*t*t*t*t+1}/*! *****************************************************************************
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
***************************************************************************** */function Jt(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Ne(t,{delay:e=0,duration:n=400,easing:i=N}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:a=>`opacity: ${a*s}`}}function Re(t){var{fallback:e}=t,n=Jt(t,["fallback"]);const i=new Map,s=new Map;function a(o,c,l){const{delay:_=0,duration:f=y=>Math.sqrt(y)*30,easing:u=yt}=U(U({},n),l),d=c.getBoundingClientRect(),h=o.left-d.left,m=o.top-d.top,p=o.width/d.width,g=o.height/d.height,b=Math.sqrt(h*h+m*m),x=getComputedStyle(c),O=x.transform==="none"?"":x.transform,q=+x.opacity;return{delay:_,duration:S(f)?f(b):f,easing:u,css:(y,w)=>`
				opacity: ${y*q};
				transform-origin: top left;
				transform: ${O} translate(${w*h}px,${w*m}px) scale(${y+(1-y)*p}, ${y+(1-y)*g});
			`}}function r(o,c,l){return(_,f)=>(o.set(f.key,{rect:_.getBoundingClientRect()}),()=>{if(c.has(f.key)){const{rect:u}=c.get(f.key);return c.delete(f.key),a(u,_,f)}return o.delete(f.key),e&&e(_,f,l)})}return[r(s,i,!1),r(i,s,!0)]}function Be(t,{from:e,to:n},i={}){const s=getComputedStyle(t),a=s.transform==="none"?"":s.transform,[r,o]=s.transformOrigin.split(" ").map(parseFloat),c=e.left+e.width*r/n.width-(n.left+r),l=e.top+e.height*o/n.height-(n.top+o),{delay:_=0,duration:f=d=>Math.sqrt(d)*120,easing:u=yt}=i;return{delay:_,duration:S(f)?f(Math.sqrt(c*c+l*l)):f,easing:u,css:(d,h)=>{const m=h*c,p=h*l,g=d+h*e.width/n.width,b=d+h*e.height/n.height;return`transform: ${a} translate(${m}px, ${p}px) scale(${g}, ${b});`}}}export{ke as $,It as A,U as B,Gt as C,Ct as D,$ as E,Qt as F,Yt as G,Vt as H,Xt as I,Ut as J,Ae as K,ie as L,se as M,S as N,j as O,we as P,ue as Q,te as R,je as S,E as T,Kt as U,Ne as V,_e as W,de as X,Bt as Y,xe as Z,$e as _,Mt as a,Re as a0,Be as a1,ve as a2,qe as a3,ae as a4,pe as a5,_t as a6,fe as a7,re as b,ce as c,Ot as d,ut as e,Zt as f,qt as g,le as h,Me as i,ee as j,ne as k,oe as l,ge as m,Lt as n,be as o,pt as p,ye as q,me as r,gt as s,X as t,he as u,Ce as v,Oe as w,Ft as x,Ee as y,Se as z};
