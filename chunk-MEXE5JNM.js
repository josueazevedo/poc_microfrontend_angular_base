import{Q as a,R as p,T as f,V as d,W as h,_ as m,ka as F}from"./chunk-NLZD3KB6.js";var A=null;function D(){return A}function $e(t){A??=t}var y=class{};var S=new f(""),_=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=a({token:e,factory:()=>h(B),providedIn:"platform"});let t=e;return t})();var B=(()=>{let e=class e extends _{constructor(){super(),this._doc=h(S),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return D().getBaseHref(this._doc)}onPopState(n){let i=D().getGlobalEventTarget(this._doc,"window");return i.addEventListener("popstate",n,!1),()=>i.removeEventListener("popstate",n)}onHashChange(n){let i=D().getGlobalEventTarget(this._doc,"window");return i.addEventListener("hashchange",n,!1),()=>i.removeEventListener("hashchange",n)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(n){this._location.pathname=n}pushState(n,i,s){this._history.pushState(n,i,s)}replaceState(n,i,s){this._history.replaceState(n,i,s)}forward(){this._history.forward()}back(){this._history.back()}historyGo(n=0){this._history.go(n)}getState(){return this._history.state}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=a({token:e,factory:()=>new e,providedIn:"platform"});let t=e;return t})();function b(t,e){if(t.length==0)return e;if(e.length==0)return t;let r=0;return t.endsWith("/")&&r++,e.startsWith("/")&&r++,r==2?t+e.substring(1):r==1?t+e:t+"/"+e}function C(t){let e=t.match(/#|\?|$/),r=e&&e.index||t.length,n=r-(t[r-1]==="/"?1:0);return t.slice(0,n)+t.slice(r)}function c(t){return t&&t[0]!=="?"?"?"+t:t}var g=(()=>{let e=class e{historyGo(n){throw new Error("")}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=a({token:e,factory:()=>h(T),providedIn:"root"});let t=e;return t})(),O=new f(""),T=(()=>{let e=class e extends g{constructor(n,i){super(),this._platformLocation=n,this._removeListenerFns=[],this._baseHref=i??this._platformLocation.getBaseHrefFromDOM()??h(S).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(n){this._removeListenerFns.push(this._platformLocation.onPopState(n),this._platformLocation.onHashChange(n))}getBaseHref(){return this._baseHref}prepareExternalUrl(n){return b(this._baseHref,n)}path(n=!1){let i=this._platformLocation.pathname+c(this._platformLocation.search),s=this._platformLocation.hash;return s&&n?`${i}${s}`:i}pushState(n,i,s,u){let l=this.prepareExternalUrl(s+c(u));this._platformLocation.pushState(n,i,l)}replaceState(n,i,s,u){let l=this.prepareExternalUrl(s+c(u));this._platformLocation.replaceState(n,i,l)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(n=0){this._platformLocation.historyGo?.(n)}};e.\u0275fac=function(i){return new(i||e)(d(_),d(O,8))},e.\u0275prov=a({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var P=(()=>{let e=class e{constructor(n){this._subject=new F,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=n;let i=this._locationStrategy.getBaseHref();this._basePath=$(C(E(i))),this._locationStrategy.onPopState(s=>{this._subject.emit({url:this.path(!0),pop:!0,state:s.state,type:s.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(n=!1){return this.normalize(this._locationStrategy.path(n))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(n,i=""){return this.path()==this.normalize(n+c(i))}normalize(n){return e.stripTrailingSlash(N(this._basePath,E(n)))}prepareExternalUrl(n){return n&&n[0]!=="/"&&(n="/"+n),this._locationStrategy.prepareExternalUrl(n)}go(n,i="",s=null){this._locationStrategy.pushState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+c(i)),s)}replaceState(n,i="",s=null){this._locationStrategy.replaceState(s,"",n,i),this._notifyUrlChangeListeners(this.prepareExternalUrl(n+c(i)),s)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(n=0){this._locationStrategy.historyGo?.(n)}onUrlChange(n){return this._urlChangeListeners.push(n),this._urlChangeSubscription??=this.subscribe(i=>{this._notifyUrlChangeListeners(i.url,i.state)}),()=>{let i=this._urlChangeListeners.indexOf(n);this._urlChangeListeners.splice(i,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(n="",i){this._urlChangeListeners.forEach(s=>s(n,i))}subscribe(n,i,s){return this._subject.subscribe({next:n,error:i,complete:s})}};e.normalizeQueryParams=c,e.joinWithSlash=b,e.stripTrailingSlash=C,e.\u0275fac=function(i){return new(i||e)(d(g))},e.\u0275prov=a({token:e,factory:()=>k(),providedIn:"root"});let t=e;return t})();function k(){return new P(d(g))}function N(t,e){if(!t||!e.startsWith(t))return e;let r=e.substring(t.length);return r===""||["/",";","?","#"].includes(r[0])?r:e}function E(t){return t.replace(/\/index.html$/,"")}function $(t){if(new RegExp("^(https?:)?//").test(t)){let[,r]=t.split(/\/\/[^\/]+/);return r}return t}function xe(t,e){e=encodeURIComponent(e);for(let r of t.split(";")){let n=r.indexOf("="),[i,s]=n==-1?[r,""]:[r.slice(0,n),r.slice(n+1)];if(i.trim()===e)return decodeURIComponent(s)}return null}var Ue=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=m({type:e}),e.\u0275inj=p({});let t=e;return t})(),x="browser",U="server";function ze(t){return t===x}function je(t){return t===U}var w=class{};var o=function(t){return t[t.State=0]="State",t[t.Transition=1]="Transition",t[t.Sequence=2]="Sequence",t[t.Group=3]="Group",t[t.Animate=4]="Animate",t[t.Keyframes=5]="Keyframes",t[t.Style=6]="Style",t[t.Trigger=7]="Trigger",t[t.Reference=8]="Reference",t[t.AnimateChild=9]="AnimateChild",t[t.AnimateRef=10]="AnimateRef",t[t.Query=11]="Query",t[t.Stagger=12]="Stagger",t}(o||{}),He="*";function Ye(t,e){return{type:o.Trigger,name:t,definitions:e,options:{}}}function We(t,e=null){return{type:o.Animate,styles:e,timings:t}}function Ze(t,e=null){return{type:o.Group,steps:t,options:e}}function Ke(t,e=null){return{type:o.Sequence,steps:t,options:e}}function qe(t){return{type:o.Style,styles:t,offset:null}}function Xe(t,e,r){return{type:o.State,name:t,styles:e,options:r}}function Qe(t,e,r=null){return{type:o.Transition,expr:t,animation:e,options:r}}function Je(t=null){return{type:o.AnimateChild,options:t}}function et(t,e,r=null){return{type:o.Query,selector:t,animation:e,options:r}}var v=class{constructor(e=0,r=0){this._onDoneFns=[],this._onStartFns=[],this._onDestroyFns=[],this._originalOnDoneFns=[],this._originalOnStartFns=[],this._started=!1,this._destroyed=!1,this._finished=!1,this._position=0,this.parentPlayer=null,this.totalTime=e+r}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}onStart(e){this._originalOnStartFns.push(e),this._onStartFns.push(e)}onDone(e){this._originalOnDoneFns.push(e),this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}init(){}play(){this.hasStarted()||(this._onStart(),this.triggerMicrotask()),this._started=!0}triggerMicrotask(){queueMicrotask(()=>this._onFinish())}_onStart(){this._onStartFns.forEach(e=>e()),this._onStartFns=[]}pause(){}restart(){}finish(){this._onFinish()}destroy(){this._destroyed||(this._destroyed=!0,this.hasStarted()||this._onStart(),this.finish(),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this._started=!1,this._finished=!1,this._onStartFns=this._originalOnStartFns,this._onDoneFns=this._originalOnDoneFns}setPosition(e){this._position=this.totalTime?e*this.totalTime:1}getPosition(){return this.totalTime?this._position/this.totalTime:1}triggerCallback(e){let r=e=="start"?this._onStartFns:this._onDoneFns;r.forEach(n=>n()),r.length=0}},I=class{constructor(e){this._onDoneFns=[],this._onStartFns=[],this._finished=!1,this._started=!1,this._destroyed=!1,this._onDestroyFns=[],this.parentPlayer=null,this.totalTime=0,this.players=e;let r=0,n=0,i=0,s=this.players.length;s==0?queueMicrotask(()=>this._onFinish()):this.players.forEach(u=>{u.onDone(()=>{++r==s&&this._onFinish()}),u.onDestroy(()=>{++n==s&&this._onDestroy()}),u.onStart(()=>{++i==s&&this._onStart()})}),this.totalTime=this.players.reduce((u,l)=>Math.max(u,l.totalTime),0)}_onFinish(){this._finished||(this._finished=!0,this._onDoneFns.forEach(e=>e()),this._onDoneFns=[])}init(){this.players.forEach(e=>e.init())}onStart(e){this._onStartFns.push(e)}_onStart(){this.hasStarted()||(this._started=!0,this._onStartFns.forEach(e=>e()),this._onStartFns=[])}onDone(e){this._onDoneFns.push(e)}onDestroy(e){this._onDestroyFns.push(e)}hasStarted(){return this._started}play(){this.parentPlayer||this.init(),this._onStart(),this.players.forEach(e=>e.play())}pause(){this.players.forEach(e=>e.pause())}restart(){this.players.forEach(e=>e.restart())}finish(){this._onFinish(),this.players.forEach(e=>e.finish())}destroy(){this._onDestroy()}_onDestroy(){this._destroyed||(this._destroyed=!0,this._onFinish(),this.players.forEach(e=>e.destroy()),this._onDestroyFns.forEach(e=>e()),this._onDestroyFns=[])}reset(){this.players.forEach(e=>e.reset()),this._destroyed=!1,this._finished=!1,this._started=!1}setPosition(e){let r=e*this.totalTime;this.players.forEach(n=>{let i=n.totalTime?Math.min(1,r/n.totalTime):1;n.setPosition(i)})}getPosition(){let e=this.players.reduce((r,n)=>r===null||n.totalTime>r.totalTime?n:r,null);return e!=null?e.getPosition():0}beforeDestroy(){this.players.forEach(e=>{e.beforeDestroy&&e.beforeDestroy()})}triggerCallback(e){let r=e=="start"?this._onStartFns:this._onDoneFns;r.forEach(n=>n()),r.length=0}},tt="!";export{D as a,$e as b,y as c,S as d,P as e,xe as f,Ue as g,x as h,ze as i,je as j,w as k,o as l,He as m,Ye as n,We as o,Ze as p,Ke as q,qe as r,Xe as s,Qe as t,Je as u,et as v,v as w,I as x,tt as y};
