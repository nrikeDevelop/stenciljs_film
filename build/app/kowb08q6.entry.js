const t=window.App.h;import{a as e,e as n,f as i}from"./chunk-7922f1a7.js";import{a as o}from"./chunk-99b2d1db.js";class s{render(){return t("ion-app",null,t("ion-router",{useHash:!1},t("ion-route",{url:"/",component:"app-peli"}),t("ion-route",{url:"/profile/:name",component:"app-profile"})),t("ion-nav",null))}static get is(){return"app-root"}static get style(){return""}}class r{componentDidLoad(){e(()=>{const{win:t,config:e,queue:n}=this;e.getBoolean("_testing")||function(t,e){import("./chunk-67bb9dbc.js").then(n=>n.startTapClick(t.document,e))}(t,e),function(t,e){e.getBoolean("inputShims",function(t){return o(t,"ios")&&o(t,"mobile")}(t))&&import("./chunk-2da16443.js").then(n=>n.startInputShims(t.document,e))}(t,e),function(t,e,n){e.getBoolean("statusTap",o(t,"hybrid"))&&import("./chunk-75ece731.js").then(e=>e.startStatusTap(t,n))}(t,e,n),function(t,e){e.getBoolean("hardwareBackButton",o(t,"hybrid"))&&import("./chunk-f5118fa0.js").then(e=>e.startHardwareBackButton(t))}(t,e),function(t){import("./chunk-2a112823.js").then(e=>e.startFocusVisible(t.document))}(t)})}hostData(){return{class:{"ion-page":!0,"force-statusbar-padding":this.config.getBoolean("_forceStatusbarPadding")}}}static get is(){return"ion-app"}static get properties(){return{config:{context:"config"},el:{elementRef:!0},queue:{context:"queue"},win:{context:"window"}}}static get style(){return"html.plt-mobile ion-app{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-app.force-statusbar-padding{--ion-safe-area-top:20px}"}}const a="ionViewWillEnter",c="ionViewDidEnter",h="ionViewWillLeave",u="ionViewDidLeave",l="ionViewWillUnload",d=()=>import("./chunk-e34b3d2d.js"),m=()=>import("./chunk-f2d9e763.js");function p(t){const e=t.leavingEl;t.enteringEl.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}async function g(t,e){const n=(void 0!==t.deepWait?t.deepWait:e)?[b(t.enteringEl),b(t.leavingEl)]:[y(t.enteringEl),y(t.leavingEl)];await Promise.all(n),await async function(t,e){t&&await t(e)}(t.viewIsReady,t.enteringEl)}function f(t,e){v(e,h),v(t,a)}function w(t,e){v(t,c),v(e,u)}function v(t,e){if(t){const n=new CustomEvent(e,{bubbles:!1,cancelable:!1});t.dispatchEvent(n)}}function y(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}async function b(t){const e=t;if(e){if(null!=e.componentOnReady&&null!=await e.componentOnReady())return;await Promise.all(Array.from(e.children).map(b))}}function S(t,e){e?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}const C=1,R=2,k=3;class E{constructor(t,e){this.component=t,this.params=e,this.state=C}async init(t){if(this.state=R,!this.element){const e=this.component;this.element=await async function(t,e,n,i,o){if(t)return t.attachViewToDom(e,n,o,i);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const s="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return i&&i.forEach(t=>s.classList.add(t)),o&&Object.assign(s,o),e.appendChild(s),s.componentOnReady&&await s.componentOnReady(),s}(this.delegate,t,e,["ion-page","ion-page-invisible"],this.params)}}_destroy(){const t=this.element;t&&(this.delegate?this.delegate.removeViewFromDom(t.parentElement,t):t.remove()),this.nav=void 0,this.state=k}}function P(t,e,n){if(!t)return!1;if(t.component!==e)return!1;const i=t.params;if(i===n)return!0;if(!i&&!n)return!0;if(!i||!n)return!1;const o=Object.keys(i),s=Object.keys(n);if(o.length!==s.length)return!1;for(const t of o)if(i[t]!==n[t])return!1;return!0}function T(t,e){return t?t instanceof E?t:new E(t,e):null}class V{constructor(){this.transInstr=[],this.useRouter=!1,this.isTransitioning=!1,this.destroyed=!1,this.views=[],this.animated=!0}swipeGestureChanged(){this.gesture&&this.gesture.setDisabled(!0!==this.swipeGesture)}rootChanged(){void 0!==this.root&&(this.useRouter||this.setRoot(this.root,this.rootParams))}componentWillLoad(){this.useRouter=!!this.win.document.querySelector("ion-router")&&!this.el.closest("[no-router]"),void 0===this.swipeGesture&&(this.swipeGesture=this.config.getBoolean("swipeBackEnabled","ios"===this.mode)),this.ionNavWillLoad.emit()}async componentDidLoad(){this.rootChanged(),this.gesture=(await import("./chunk-ca529fbc.js")).createSwipeBackGesture(this.el,this.queue,this.canStart.bind(this),this.onStart.bind(this),this.onMove.bind(this),this.onEnd.bind(this)),this.swipeGestureChanged()}componentDidUnload(){for(const t of this.views)v(t.element,l),t._destroy();this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.transInstr.length=this.views.length=0,this.destroyed=!0}push(t,e,n,i){return this.queueTrns({insertStart:-1,insertViews:[{page:t,params:e}],opts:n},i)}insert(t,e,n,i,o){return this.queueTrns({insertStart:t,insertViews:[{page:e,params:n}],opts:i},o)}insertPages(t,e,n,i){return this.queueTrns({insertStart:t,insertViews:e,opts:n},i)}pop(t,e){return this.queueTrns({removeStart:-1,removeCount:1,opts:t},e)}popTo(t,e,n){const i={removeStart:-1,removeCount:-1,opts:e};return"object"==typeof t&&t.component?(i.removeView=t,i.removeStart=1):"number"==typeof t&&(i.removeStart=t+1),this.queueTrns(i,n)}popToRoot(t,e){return this.queueTrns({removeStart:1,removeCount:-1,opts:t},e)}removeIndex(t,e=1,n,i){return this.queueTrns({removeStart:t,removeCount:e,opts:n},i)}setRoot(t,e,n,i){return this.setPages([{page:t,params:e}],n,i)}setPages(t,e,n){return null==e&&(e={}),!0!==e.animated&&(e.animated=!1),this.queueTrns({insertStart:0,insertViews:t,removeStart:0,removeCount:-1,opts:e},n)}setRouteId(t,e,n){const i=this.getActiveSync();if(P(i,t,e))return Promise.resolve({changed:!1,element:i.element});let o;const s=new Promise(t=>o=t);let r;const a={updateURL:!1,viewIsReady:t=>{let e;const n=new Promise(t=>e=t);return o({changed:!0,element:t,markVisible:async()=>{e(),await r}}),n}};if("root"===n)r=this.setRoot(t,e,a);else{const i=this.views.find(n=>P(n,t,e));i?r=this.popTo(i,Object.assign({},a,{direction:"back"})):"forward"===n?r=this.push(t,e,a):"back"===n&&(r=this.setRoot(t,e,Object.assign({},a,{direction:"back",animated:!0})))}return s}async getRouteId(){const t=this.getActiveSync();return t?{id:t.element.tagName,params:t.params,element:t.element}:void 0}getActive(){return Promise.resolve(this.getActiveSync())}getByIndex(t){return Promise.resolve(this.views[t])}canGoBack(t){return Promise.resolve(this.canGoBackSync(t))}getPrevious(t){return Promise.resolve(this.getPreviousSync(t))}getLength(){return this.views.length}getActiveSync(){return this.views[this.views.length-1]}canGoBackSync(t=this.getActiveSync()){return!(!t||!this.getPreviousSync(t))}getPreviousSync(t=this.getActiveSync()){if(!t)return;const e=this.views,n=e.indexOf(t);return n>0?e[n-1]:void 0}queueTrns(t,e){if(this.isTransitioning&&null!=t.opts&&t.opts.skipIfBusy)return Promise.resolve(!1);const n=new Promise((e,n)=>{t.resolve=e,t.reject=n});return t.done=e,t.insertViews&&0===t.insertViews.length&&(t.insertViews=void 0),this.transInstr.push(t),this.nextTrns(),n}success(t,e){if(this.destroyed)this.fireError("nav controller was destroyed",e);else if(e.done&&e.done(t.hasCompleted,t.requiresTransition,t.enteringView,t.leavingView,t.direction),e.resolve(t.hasCompleted),!1!==e.opts.updateURL&&this.useRouter){const e=this.win.document.querySelector("ion-router");e&&e.navChanged("back"===t.direction?"back":"forward")}}failed(t,e){this.destroyed?this.fireError("nav controller was destroyed",e):(this.transInstr.length=0,this.fireError(t,e))}fireError(t,e){e.done&&e.done(!1,!1,t),e.reject&&!this.destroyed?e.reject(t):e.resolve(!1)}nextTrns(){if(this.isTransitioning)return!1;const t=this.transInstr.shift();return!!t&&(this.runTransition(t),!0)}async runTransition(t){try{this.ionNavWillChange.emit(),this.isTransitioning=!0,this.prepareTI(t);const e=this.getActiveSync(),n=this.getEnteringView(t,e);if(!e&&!n)throw new Error("no views in the stack to be removed");n&&n.state===C&&await n.init(this.el),this.postViewInit(n,e,t);const i=(t.enteringRequiresTransition||t.leavingRequiresTransition)&&n!==e?await this.transition(n,e,t):{hasCompleted:!0,requiresTransition:!1};this.success(i,t),this.ionNavDidChange.emit()}catch(e){this.failed(e,t)}this.isTransitioning=!1,this.nextTrns()}prepareTI(t){const e=this.views.length;if(t.opts=t.opts||{},void 0===t.opts.delegate&&(t.opts.delegate=this.delegate),void 0!==t.removeView){const e=this.views.indexOf(t.removeView);if(e<0)throw new Error("removeView was not found");t.removeStart+=e}void 0!==t.removeStart&&(t.removeStart<0&&(t.removeStart=e-1),t.removeCount<0&&(t.removeCount=e-t.removeStart),t.leavingRequiresTransition=t.removeCount>0&&t.removeStart+t.removeCount===e),t.insertViews&&((t.insertStart<0||t.insertStart>e)&&(t.insertStart=e),t.enteringRequiresTransition=t.insertStart===e);const n=t.insertViews;if(!n)return;const i=n.map(t=>t instanceof E?t:"page"in t?T(t.page,t.params):T(t,void 0)).filter(t=>null!==t);if(0===i.length)throw new Error("invalid views to insert");for(const e of i){e.delegate=t.opts.delegate;const n=e.nav;if(n&&n!==this)throw new Error("inserted view was already inserted");if(e.state===k)throw new Error("inserted view was already destroyed")}t.insertViews=i}getEnteringView(t,e){const n=t.insertViews;if(void 0!==n)return n[n.length-1];const i=t.removeStart;if(void 0!==i){const n=this.views,o=i+t.removeCount;for(let t=n.length-1;t>=0;t--){const s=n[t];if((t<i||t>=o)&&s!==e)return s}}}postViewInit(t,e,n){const i=n.opts,o=n.insertViews,s=n.removeStart,r=n.removeCount;let a;if(void 0!==s&&void 0!==r){a=[];for(let n=0;n<r;n++){const i=this.views[n+s];i&&i!==t&&i!==e&&a.push(i)}i.direction=i.direction||"back"}if(0===this.views.length+(void 0!==o?o.length:0)-(void 0!==r?r:0))throw console.warn("You can't remove all the pages in the navigation stack. nav.pop() is probably called too many times.",this,this.el),new Error("navigation stack needs at least one root page");if(o){let t=n.insertStart;for(const e of o)this.insertViewAt(e,t),t++;n.enteringRequiresTransition&&(i.direction=i.direction||"forward")}if(a&&a.length>0){for(const t of a)v(t.element,h),v(t.element,u),v(t.element,l);for(const t of a)this.destroyView(t)}}async transition(t,e,n){const i=n.opts,o=i.progressAnimation?t=>this.sbAni=t:void 0,s=t.element,r=e&&e.element,a=Object.assign({mode:this.mode,showGoBack:this.canGoBackSync(t),queue:this.queue,window:this.win,baseEl:this.el,animationBuilder:this.animation||i.animationBuilder||this.config.get("navAnimation"),progressCallback:o,animated:this.animated&&this.config.getBoolean("animated",!0),enteringEl:s,leavingEl:r},i),{hasCompleted:c}=await function(t){return new Promise((e,n)=>{t.queue.write(()=>{!function(t){const e=t.enteringEl,n=t.leavingEl;(function(e,n,i){void 0!==e&&(e.style.zIndex="back"===t.direction?"99":"101"),void 0!==n&&(n.style.zIndex="100")})(e,n),t.showGoBack?e.classList.add("can-go-back"):e.classList.remove("can-go-back"),S(e,!1),n&&S(n,!1)}(t),async function(t){const e=await async function(t){if(t.leavingEl&&t.animated&&0!==t.duration)return t.animationBuilder?t.animationBuilder:"ios"===t.mode?(await d()).iosTransitionAnimation:(await m()).mdTransitionAnimation}(t);return e?async function(t,e){await g(e,!0);const n=await import("./chunk-b43431d3.js").then(n=>n.create(t,e.baseEl,e));return f(e.enteringEl,e.leavingEl),await function(t,e){const n=e.progressCallback,i=new Promise(e=>t.onFinish(e));return n?(t.progressStart(),n(t)):t.play(),i}(n,e),e.progressCallback&&e.progressCallback(void 0),n.hasCompleted&&w(e.enteringEl,e.leavingEl),{hasCompleted:n.hasCompleted,animation:n}}(e,t):async function(t){const e=t.enteringEl,n=t.leavingEl;return await g(t,!1),f(e,n),w(e,n),{hasCompleted:!0}}(t)}(t).then(n=>{n.animation&&n.animation.destroy(),p(t),e(n)},e=>{p(t),n(e)})})})}(a);return this.transitionFinish(c,t,e,i)}transitionFinish(t,e,n,i){const o=t?e:n;return o&&this.cleanup(o),{hasCompleted:t,requiresTransition:!0,enteringView:e,leavingView:n,direction:i.direction}}insertViewAt(t,e){const n=this.views,i=n.indexOf(t);i>-1?n.splice(e,0,n.splice(i,1)[0]):(t.nav=this,n.splice(e,0,t))}removeView(t){const e=this.views,n=e.indexOf(t);n>=0&&e.splice(n,1)}destroyView(t){t._destroy(),this.removeView(t)}cleanup(t){if(this.destroyed)return;const e=this.views,n=e.indexOf(t);for(let t=e.length-1;t>=0;t--){const i=e[t],o=i.element;t>n?(v(o,l),this.destroyView(i)):t<n&&S(o,!0)}}canStart(){return!!this.swipeGesture&&!this.isTransitioning&&0===this.transInstr.length&&this.canGoBackSync()}onStart(){this.queueTrns({removeStart:-1,removeCount:1,opts:{direction:"back",progressAnimation:!0}},void 0)}onMove(t){this.sbAni&&this.sbAni.progressStep(t)}onEnd(t,e,n){this.sbAni&&this.sbAni.progressEnd(t,e,n)}render(){return t("slot",null)}static get is(){return"ion-nav"}static get encapsulation(){return"shadow"}static get properties(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},canGoBack:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getActive:{method:!0},getByIndex:{method:!0},getPrevious:{method:!0},getRouteId:{method:!0},insert:{method:!0},insertPages:{method:!0},pop:{method:!0},popTo:{method:!0},popToRoot:{method:!0},push:{method:!0},queue:{context:"queue"},removeIndex:{method:!0},root:{type:String,attr:"root",watchCallbacks:["rootChanged"]},rootParams:{type:"Any",attr:"root-params"},setPages:{method:!0},setRoot:{method:!0},setRouteId:{method:!0},swipeGesture:{type:Boolean,attr:"swipe-gesture",mutable:!0,watchCallbacks:["swipeGestureChanged"]},win:{context:"window"}}}static get events(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!1,cancelable:!0,composed:!0}]}static get style(){return":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"}}class B{constructor(){this.url=""}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;const n=t?Object.keys(t):[],i=e?Object.keys(e):[];if(n.length===i.length){for(const i of n)if(t[i]!==e[i])return void this.onUpdate(t)}else this.onUpdate(t)}componentDidLoad(){this.ionRouteDataChanged.emit()}componentDidUnload(){this.ionRouteDataChanged.emit()}static get is(){return"ion-route"}static get properties(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}}static get events(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]}}const A="root",I="forward",q="back";function D(t){return"/"+t.filter(t=>t.length>0).join("/")}function L(t){if(null==t)return[""];const e=t.split("/").map(t=>t.trim()).filter(t=>t.length>0);return 0===e.length?[""]:e}const x=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function j(t){if(!t)return;if(t.matches(x))return t;return t.querySelector(x)||void 0}function N(t,e){return e.find(e=>(function(t,e){const{from:n,to:i}=e;if(void 0===i)return!1;if(n.length>t.length)return!1;for(let e=0;e<n.length;e++){const i=n[e];if("*"===i)return!0;if(i!==t[e])return!1}return n.length===t.length})(t,e))}function O(t,e){const n=Math.min(t.length,e.length);let i=0;for(;i<n&&t[i].toLowerCase()===e[i].id;i++);return i}function W(t,e){const n=new H(t);let i,o=!1;for(let t=0;t<e.length;t++){const s=e[t].path;if(""===s[0])o=!0;else{for(const e of s){const o=n.next();if(":"===e[0]){if(""===o)return null;((i=i||[])[t]||(i[t]={}))[e.slice(1)]=o}else if(o!==e)return null}o=!1}}return o&&o!==(""===n.next())?null:i?e.map((t,e)=>({id:t.id,path:t.path,params:G(t.params,i[e])})):e}function G(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0}function U(t){let e=1,n=1;for(const i of t)for(const t of i.path)":"===t[0]?e+=Math.pow(1,n):""!==t&&(e+=Math.pow(2,n)),n++;return e}class H{constructor(t){this.path=t.slice()}next(){return this.path.length>0?this.path.shift():""}}function F(t){return Array.from(t.children).filter(t=>"ION-ROUTE-REDIRECT"===t.tagName).map(t=>{const e=_(t,"to");return{from:L(_(t,"from")),to:null==e?void 0:L(e)}})}function M(t){return function(t){const e=[];for(const n of t)z([],e,n);return e}(function t(e,n=e){return Array.from(n.children).filter(t=>"ION-ROUTE"===t.tagName&&t.component).map(n=>{const i=_(n,"component");if(null==i)throw new Error("component missing in ion-route");return{path:L(_(n,"url")),id:i.toLowerCase(),params:n.componentProps,children:t(e,n)}})}(t))}function _(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null}function z(t,e,n){const i=t.slice();if(i.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(const t of n.children)z(i,e,t);else e.push(i)}class ${constructor(){this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}async componentWillLoad(){var t;await(t=this.win,j(t.document.body)?Promise.resolve():new Promise(e=>{t.addEventListener("ionNavWillLoad",e,{once:!0})})),await this.onRoutesChanged()}componentDidLoad(){this.win.addEventListener("ionRouteRedirectChanged",i(this.onRedirectChanged.bind(this),10)),this.win.addEventListener("ionRouteDataChanged",i(this.onRoutesChanged.bind(this),100))}onPopState(){const t=this.historyDirection(),e=this.getPath();return this.writeNavStateRoot(e,t)}onBackButton(t){t.detail.register(0,()=>this.back())}push(t,e="forward"){t.startsWith(".")&&(t=new URL(t,window.location.href).pathname);const n=L(t);return this.setPath(n,e),this.writeNavStateRoot(n,e)}back(){return this.win.history.back(),Promise.resolve(this.waitPromise)}printDebug(){this.getPath(),function(t){console.group(`[ion-core] ROUTES[${t.length}]`);for(const e of t){const t=[];e.forEach(e=>t.push(...e.path));const n=e.map(t=>t.id);D(t),n.join(", ")}console.groupEnd()}(M(this.el)),function(t){console.group(`[ion-core] REDIRECTS[${t.length}]`);for(const e of t)e.to&&(D(e.from),D(e.to));console.groupEnd()}(F(this.el))}async navChanged(t){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;const{ids:e,outlet:n}=await async function(t){const e=[];let n,i=t;for(;n=j(i);){const t=await n.getRouteId();if(!t)break;i=t.element,t.element=void 0,e.push(t)}return{ids:e,outlet:n}}(this.win.document.body),i=function(t,e){let n=null,i=0;const o=t.map(t=>t.id);for(const t of e){const e=O(o,t);e>i&&(n=t,i=e)}return n?n.map((e,n)=>({id:e.id,path:e.path,params:G(e.params,t[n]&&t[n].params)})):null}(e,M(this.el));if(!i)return console.warn("[ion-router] no matching URL for ",e.map(t=>t.id)),!1;const o=function(t){const e=[];for(const n of t)for(const t of n.path)if(":"===t[0]){const i=n.params&&n.params[t.slice(1)];if(!i)return null;e.push(i)}else""!==t&&e.push(t);return e}(i);return o?(this.setPath(o,t),await this.safeWriteNavState(n,i,A,o,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)}onRedirectChanged(){const t=this.getPath();t&&N(t,F(this.el))&&this.writeNavStateRoot(t,A)}onRoutesChanged(){return this.writeNavStateRoot(this.getPath(),A)}historyDirection(){const t=this.win;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));const e=t.history.state,n=this.lastState;return this.lastState=e,e>n?I:e<n?q:A}async writeNavStateRoot(t,e){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;const n=N(t,F(this.el));let i=null;n&&(this.setPath(n.to,e),i=n.from,t=n.to);const o=function(t,e){let n=null,i=0;for(const o of e){const e=W(t,o);if(null!==e){const t=U(e);t>i&&(i=t,n=e)}}return n}(t,M(this.el));return o?this.safeWriteNavState(this.win.document.body,o,e,t,i):(console.error("[ion-router] the path does not match any route"),!1)}async safeWriteNavState(t,e,n,i,o,s=0){const r=await this.lock();let a=!1;try{a=await this.writeNavState(t,e,n,i,o,s)}catch(t){console.error(t)}return r(),a}async lock(){const t=this.waitPromise;let e;return this.waitPromise=new Promise(t=>e=t),void 0!==t&&await t,e}async writeNavState(t,e,n,i,o,s=0){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;const r=this.routeChangeEvent(i,o);r&&this.ionRouteWillChange.emit(r);const a=await async function t(e,n,i,o,s=!1){try{const r=j(e);if(o>=n.length||!r)return s;await r.componentOnReady();const a=n[o],c=await r.setRouteId(a.id,a.params,i);return c.changed&&(i=A,s=!0),s=await t(c.element,n,i,o+1,s),c.markVisible&&await c.markVisible(),s}catch(t){return console.error(t),!1}}(t,e,n,s);return this.busy=!1,r&&this.ionRouteDidChange.emit(r),a}setPath(t,e){this.state++,function(t,e,n,i,o,s){let r=D([...L(e),...i]);n&&(r="#"+r),o===I?t.pushState(s,"",r):t.replaceState(s,"",r)}(this.win.history,this.root,this.useHash,t,e,this.state)}getPath(){return function(t,e,n){let i=t.pathname;if(n){const e=t.hash;i="#"===e[0]?e.slice(1):""}return function(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(let n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}(L(e),L(i))}(this.win.location,this.root,this.useHash)}routeChangeEvent(t,e){const n=this.previousPath,i=D(t);return this.previousPath=i,i===n?null:{from:n,redirectedFrom:e?D(e):null,to:i}}static get is(){return"ion-router"}static get properties(){return{back:{method:!0},config:{context:"config"},el:{elementRef:!0},navChanged:{method:!0},printDebug:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}}static get events(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"window:popstate",method:"onPopState"},{name:"document:ionBackButton",method:"onBackButton"}]}}export{s as AppRoot,r as IonApp,V as IonNav,B as IonRoute,$ as IonRouter};