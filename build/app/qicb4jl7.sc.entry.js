const t=window.App.h;import{a as e,d as o,b as l,c as s}from"./chunk-a30cd1a0.js";import{a as i}from"./chunk-99b2d1db.js";class r{static get is(){return"ion-buttons"}static get encapsulation(){return"scoped"}static get style(){return".sc-ion-buttons-ios-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:99}.sc-ion-buttons-ios-s  ion-button {--padding-start:0;--padding-end:0;--box-shadow:none;--overflow:visible;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:2px;margin-right:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-button {margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}.sc-ion-buttons-ios-s  ion-button {--padding-top:0;--padding-bottom:0;--padding-start:5px;--padding-end:5px;height:32px;font-size:17px;font-weight:400}.sc-ion-buttons-ios-s  ion-button:not(.button-round) {--border-radius:4px}.sc-ion-buttons-ios-h.ion-color.sc-ion-buttons-ios-s  .button , .ion-color .sc-ion-buttons-ios-h.sc-ion-buttons-ios-s  .button {--color:initial;--color-activated:initial}\@media (any-hover:hover){.sc-ion-buttons-ios-s  .button-solid-ios:hover {opacity:.4}}.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-right:.3em;font-size:24px;line-height:.67}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=start] {margin-right:unset;-webkit-margin-end:.3em;margin-inline-end:.3em}}.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;margin-left:.4em;font-size:24px;line-height:.67}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-buttons-ios-s  ion-icon[slot=end] {margin-left:unset;-webkit-margin-start:.4em;margin-inline-start:.4em}}.sc-ion-buttons-ios-s  ion-icon[slot=icon-only] {padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;font-size:31px;line-height:.67}"}static get styleMode(){return"ios"}}class n{constructor(){this.isScrolling=!1,this.lastScroll=0,this.queued=!1,this.cTop=-1,this.cBottom=-1,this.detail={scrollTop:0,scrollLeft:0,type:"scroll",event:void 0,startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,data:void 0,isScrolling:!0},this.fullscreen=!1,this.scrollX=!1,this.scrollY=!0,this.scrollEvents=!1}componentWillLoad(){void 0===this.forceOverscroll&&(this.forceOverscroll="ios"===this.mode&&i(this.win,"mobile"))}componentDidLoad(){this.resize()}componentDidUnload(){this.onScrollEnd()}onClick(t){this.isScrolling&&(t.preventDefault(),t.stopPropagation())}resize(){this.fullscreen?this.queue.read(this.readDimensions.bind(this)):0===this.cTop&&0===this.cBottom||(this.cTop=this.cBottom=0,this.el.forceUpdate())}readDimensions(){const t=function(t){const e=t.closest("ion-tabs");if(e)return e;const o=t.closest("ion-app,ion-page,.ion-page,page-inner");return o||function(t){return t.parentElement?t.parentElement:t.parentNode&&t.parentNode.host?t.parentNode.host:null}(t)}(this.el),e=Math.max(this.el.offsetTop,0),o=Math.max(t.offsetHeight-e-this.el.offsetHeight,0);(e!==this.cTop||o!==this.cBottom)&&(this.cTop=e,this.cBottom=o,this.el.forceUpdate())}onScroll(t){const e=Date.now(),o=!this.isScrolling;this.lastScroll=e,o&&this.onScrollStart(),!this.queued&&this.scrollEvents&&(this.queued=!0,this.queue.read(e=>{this.queued=!1,this.detail.event=t,function(t,e,o,l){const s=t.currentX,i=t.currentY,r=t.timeStamp,n=e.scrollLeft,a=e.scrollTop;l&&(t.startTimeStamp=o,t.startX=n,t.startY=a,t.velocityX=t.velocityY=0),t.timeStamp=o,t.currentX=t.scrollLeft=n,t.currentY=t.scrollTop=a,t.deltaX=n-t.startX,t.deltaY=a-t.startY;const c=o-r;if(c>0&&c<100){const e=(a-i)/c;t.velocityX=.7*((n-s)/c)+.3*t.velocityX,t.velocityY=.7*e+.3*t.velocityY}}(this.detail,this.scrollEl,e,o),this.ionScroll.emit(this.detail)}))}getScrollElement(){return Promise.resolve(this.scrollEl)}scrollToTop(t=0){return this.scrollToPoint(void 0,0,t)}scrollToBottom(t=0){return this.scrollToPoint(void 0,this.scrollEl.scrollHeight-this.scrollEl.clientHeight,t)}scrollByPoint(t,e,o){return this.scrollToPoint(t+this.scrollEl.scrollLeft,e+this.scrollEl.scrollTop,o)}async scrollToPoint(t,e,o=0){const l=this.scrollEl;if(o<32)return null!=e&&(l.scrollTop=e),void(null!=t&&(l.scrollLeft=t));let s,i=0;const r=new Promise(t=>s=t),n=l.scrollTop,a=l.scrollLeft,c=null!=e?e-n:0,h=null!=t?t-a:0,d=t=>{const e=Math.min(1,(t-i)/o)-1,r=Math.pow(e,3)+1;0!==c&&(l.scrollTop=Math.floor(r*c+n)),0!==h&&(l.scrollLeft=Math.floor(r*h+a)),r<1?requestAnimationFrame(d):s()};return requestAnimationFrame(t=>{i=t,d(t)}),r}onScrollStart(){this.isScrolling=!0,this.ionScrollStart.emit({isScrolling:!0}),this.watchDog&&clearInterval(this.watchDog),this.watchDog=setInterval(()=>{this.lastScroll<Date.now()-120&&this.onScrollEnd()},100)}onScrollEnd(){clearInterval(this.watchDog),this.watchDog=null,this.isScrolling&&(this.isScrolling=!1,this.ionScrollEnd.emit({isScrolling:!1}))}hostData(){return{class:Object.assign({},e(this.color),{"content-sizing":o("ion-popover",this.el),overscroll:!!this.forceOverscroll}),style:{"--offset-top":`${this.cTop}px`,"--offset-bottom":`${this.cBottom}px`}}}render(){const{scrollX:e,scrollY:o,forceOverscroll:l}=this;return this.resize(),[t("div",{class:{"inner-scroll":!0,"scroll-x":e,"scroll-y":o,overscroll:(e||o)&&!!l},ref:t=>this.scrollEl=t,onScroll:t=>this.onScroll(t)},t("slot",null)),t("slot",{name:"fixed"})]}static get is(){return"ion-content"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},forceOverscroll:{type:Boolean,attr:"force-overscroll",mutable:!0},fullscreen:{type:Boolean,attr:"fullscreen"},getScrollElement:{method:!0},queue:{context:"queue"},scrollByPoint:{method:!0},scrollEvents:{type:Boolean,attr:"scroll-events"},scrollToBottom:{method:!0},scrollToPoint:{method:!0},scrollToTop:{method:!0},scrollX:{type:Boolean,attr:"scroll-x"},scrollY:{type:Boolean,attr:"scroll-y"},win:{context:"window"}}}static get events(){return[{name:"ionScrollStart",method:"ionScrollStart",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScroll",method:"ionScroll",bubbles:!0,cancelable:!0,composed:!0},{name:"ionScrollEnd",method:"ionScrollEnd",bubbles:!0,cancelable:!0,composed:!0}]}static get listeners(){return[{name:"click",method:"onClick",capture:!0}]}static get style(){return".sc-ion-content-h{--background:var(--ion-background-color,#fff);--color:var(--ion-text-color,#000);--padding-top:0px;--padding-bottom:0px;--padding-start:0px;--padding-end:0px;--keyboard-offset:0px;--offset-top:0px;--offset-bottom:0px;--overflow:auto;display:block;position:relative;-ms-flex:1;flex:1;width:100%;height:100%;margin:0!important;padding:0!important;font-family:var(--ion-font-family,inherit);contain:size style}.ion-color.sc-ion-content-h   .inner-scroll.sc-ion-content{background:var(--ion-color-base);color:var(--ion-color-contrast)}.outer-content.sc-ion-content-h{--background:var(--ion-color-step-50,#f2f2f2)}.inner-scroll.sc-ion-content{left:0;right:0;top:calc(var(--offset-top) * -1);bottom:calc(var(--offset-bottom) * -1);padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:calc(var(--padding-top) + var(--offset-top));padding-bottom:calc(var(--padding-bottom) + var(--keyboard-offset) + var(--offset-bottom));position:absolute;background:var(--background);color:var(--color);-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.inner-scroll.sc-ion-content{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.scroll-x.sc-ion-content, .scroll-y.sc-ion-content{-webkit-overflow-scrolling:touch;will-change:scroll-position;-ms-scroll-chaining:none;overscroll-behavior:contain}.scroll-y.sc-ion-content{-ms-touch-action:pan-y;touch-action:pan-y;overflow-y:var(--overflow)}.scroll-x.sc-ion-content{-ms-touch-action:pan-x;touch-action:pan-x;overflow-x:var(--overflow)}.scroll-x.scroll-y.sc-ion-content{-ms-touch-action:auto;touch-action:auto}.overscroll.sc-ion-content:after, .overscroll.sc-ion-content:before{position:absolute;width:1px;height:1px;content:\"\"}.overscroll.sc-ion-content:before{bottom:-1px}.overscroll.sc-ion-content:after{top:-1px}.content-sizing.sc-ion-content-h{contain:none}.content-sizing.sc-ion-content-h   .inner-scroll.sc-ion-content{position:relative}"}}class a{constructor(){this.translucent=!1}hostData(){const t=l(this.mode,"header"),e=this.translucent?l(this.mode,"header-translucent"):null;return{class:Object.assign({},t,e)}}static get is(){return"ion-header"}static get properties(){return{mode:{type:String,attr:"mode"},translucent:{type:Boolean,attr:"translucent"}}}static get style(){return"ion-header{display:block;position:relative;-ms-flex-order:-1;order:-1;width:100%;z-index:10}ion-header ion-toolbar:first-child{padding-top:var(--ion-safe-area-top,0)}.header-ios ion-toolbar:last-child{--border-width:0 0 0.55px}.header-ios[no-border] ion-toolbar:last-child{--border-width:0}.header-translucent-ios{-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.header-translucent-ios ion-toolbar{--opacity:.8;--backdrop-filter:saturate(180%) blur(20px)}"}static get styleMode(){return"ios"}}class c{constructor(){this.itemStyles=new Map,this.multipleInputs=!1,this.button=!1,this.detailIcon="ios-arrow-forward",this.disabled=!1,this.routerDirection="forward",this.type="button"}itemStyle(t){t.stopPropagation();const e=t.target.tagName,o=t.detail,l={},s=this.itemStyles.get(e)||{};let i=!1;Object.keys(o).forEach(t=>{const e=`item-${t}`,r=o[t];r!==s[e]&&(i=!0),r&&(l[e]=!0)}),i&&(this.itemStyles.set(e,l),this.el.forceUpdate())}componentDidLoad(){Array.from(this.el.querySelectorAll("ion-button")).forEach(t=>{void 0===t.size&&(t.size="small")});const t=this.el.querySelectorAll("ion-select, ion-datetime");this.multipleInputs=t.length>1}isClickable(){return void 0!==this.href||this.button}hostData(){const t={};return this.itemStyles.forEach(e=>{Object.assign(t,e)}),{"aria-disabled":this.disabled?"true":null,class:Object.assign({},t,e(this.color),{[`item-lines-${this.lines}`]:void 0!==this.lines,"item-disabled":this.disabled,"in-list":o("ion-list",this.el),item:!0,"item-multiple-inputs":this.multipleInputs,"ion-activatable":this.isClickable(),"ion-focusable":!0})}}render(){const{href:e,detail:o,mode:l,win:i,detailIcon:r,routerDirection:n,type:a}=this,c=this.isClickable(),h=c?void 0===e?"button":"a":"div",d=void 0!==o?o:"ios"===l&&c;return[t(h,Object.assign({},"button"===h?{type:a}:{href:e},{class:"item-native",disabled:this.disabled,onClick:t=>s(i,e,t,n)}),t("slot",{name:"start"}),t("div",{class:"item-inner"},t("div",{class:"input-wrapper"},t("slot",null)),t("slot",{name:"end"}),d&&t("ion-icon",{icon:r,lazy:!1,class:"item-detail-icon"}),t("div",{class:"item-inner-highlight"})),c&&"md"===l&&t("ion-ripple-effect",null)),t("div",{class:"item-highlight"})]}static get is(){return"ion-item"}static get encapsulation(){return"shadow"}static get properties(){return{button:{type:Boolean,attr:"button"},color:{type:String,attr:"color"},detail:{type:Boolean,attr:"detail"},detailIcon:{type:String,attr:"detail-icon"},disabled:{type:Boolean,attr:"disabled"},el:{elementRef:!0},href:{type:String,attr:"href"},lines:{type:String,attr:"lines"},mode:{type:String,attr:"mode"},multipleInputs:{state:!0},routerDirection:{type:String,attr:"router-direction"},type:{type:String,attr:"type"},win:{context:"window"}}}static get listeners(){return[{name:"ionStyle",method:"itemStyle"}]}static get style(){return".sc-ion-item-ios-h{--border-radius:0px;--border-width:0px;--border-style:solid;--padding-top:0px;--padding-bottom:0px;--padding-end:0px;--padding-start:0px;--box-shadow:none;--inner-border-width:0px;--inner-padding-top:0px;--inner-padding-bottom:0px;--inner-padding-start:0px;--inner-padding-end:0px;--inner-box-shadow:none;--show-full-highlight:0;--show-inset-highlight:0;--detail-icon-color:initial;--detail-icon-font-size:20px;--detail-icon-opacity:0.25;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:block;position:relative;outline:none;color:var(--color);font-family:var(--ion-font-family,inherit);text-align:initial;text-decoration:none;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-item-ios-h   .item-native.sc-ion-item-ios{background:var(--ion-color-base);color:var(--ion-color-contrast)}.ion-color.sc-ion-item-ios-h   .item-inner.sc-ion-item-ios, .ion-color.sc-ion-item-ios-h   .item-native.sc-ion-item-ios{border-color:var(--ion-color-shade)}.ion-focused.sc-ion-item-ios-h   .item-native.sc-ion-item-ios{background:var(--background-focused)}.activated.sc-ion-item-ios-h   .item-native.sc-ion-item-ios{background:var(--background-activated)}.ion-color.activated.sc-ion-item-ios-h   .item-native.sc-ion-item-ios{background:var(--ion-color-tint)}.item-disabled.sc-ion-item-ios-h{cursor:default;opacity:.3;pointer-events:none}.item-native.sc-ion-item-ios{border-radius:var(--border-radius);margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-native.sc-ion-item-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));padding-inline-start:calc(var(--padding-start) + var(--ion-safe-area-left, 0px));-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.item-native.sc-ion-item-ios::-moz-focus-inner{border:0}a.sc-ion-item-ios, button.sc-ion-item-ios{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.item-inner.sc-ion-item-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--inner-padding-start);padding-right:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-top:var(--inner-padding-top);padding-bottom:var(--inner-padding-bottom);display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);-webkit-box-shadow:var(--inner-box-shadow);box-shadow:var(--inner-box-shadow);overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.item-inner.sc-ion-item-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--inner-padding-start);padding-inline-start:var(--inner-padding-start);-webkit-padding-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end));padding-inline-end:calc(var(--ion-safe-area-right, 0px) + var(--inner-padding-end))}}.item-detail-icon.sc-ion-item-ios{color:var(--detail-icon-color);font-size:var(--detail-icon-font-size);opacity:var(--detail-icon-opacity)}.sc-ion-item-ios-s > ion-icon{font-size:1.6em}.sc-ion-item-ios-s > ion-button{--margin-top:0;--margin-bottom:0;--margin-start:0;--margin-end:0;z-index:1}.sc-ion-item-ios-s > ion-label{-ms-flex:1;flex:1}.item-input.sc-ion-item-ios-h, [vertical-align-top].sc-ion-item-ios-h{-ms-flex-align:start;align-items:flex-start}.input-wrapper.sc-ion-item-ios{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-item-align:stretch;align-self:stretch;text-overflow:ellipsis;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.item-label-floating.sc-ion-item-ios-h   .input-wrapper.sc-ion-item-ios, .item-label-stacked.sc-ion-item-ios-h   .input-wrapper.sc-ion-item-ios{-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column}.item-highlight.sc-ion-item-ios, .item-inner-highlight.sc-ion-item-ios{left:0;right:0;bottom:0;position:absolute;background:var(--highlight-background)}.item-highlight.sc-ion-item-ios{height:var(--full-highlight-height)}.item-inner-highlight.sc-ion-item-ios{height:var(--inset-highlight-height)}.item-interactive.ion-touched.ion-invalid.sc-ion-item-ios-h, .item-interactive.item-has-focus.sc-ion-item-ios-h{--full-highlight-height:calc(var(--highlight-height) * var(--show-full-highlight));--inset-highlight-height:calc(var(--highlight-height) * var(--show-inset-highlight))}.item-interactive.item-has-focus.sc-ion-item-ios-h{--highlight-background:var(--highlight-color-focused)}.item-interactive.ion-valid.sc-ion-item-ios-h{--highlight-background:var(--highlight-color-valid)}.item-interactive.ion-invalid.sc-ion-item-ios-h{--highlight-background:var(--highlight-color-invalid)}.sc-ion-item-ios-h.item-label-floating .sc-ion-item-ios-s > ion-select, .sc-ion-item-ios-h.item-label-stacked .sc-ion-item-ios-s > ion-select{--padding-start:0;-ms-flex-item-align:stretch;align-self:stretch;width:100%;max-width:100%}.sc-ion-item-ios-h.item-label-floating .sc-ion-item-ios-s > ion-datetime, .sc-ion-item-ios-h.item-label-stacked .sc-ion-item-ios-s > ion-datetime{--padding-start:0;width:100%}.sc-ion-item-ios-h.item-multiple-inputs .sc-ion-item-ios-s > ion-datetime, .sc-ion-item-ios-h.item-multiple-inputs .sc-ion-item-ios-s > ion-select{position:relative}.item-textarea.sc-ion-item-ios-h{-ms-flex-align:stretch;align-items:stretch}.sc-ion-item-ios-s > ion-reorder[slot]{margin-top:0;margin-bottom:0}.sc-ion-item-ios-h{--min-height:44px;--transition:background-color 200ms linear;--padding-start:16px;--inner-padding-end:8px;--inner-border-width:0px 0px 0.55px 0px;--background:var(--ion-item-background,var(--ion-background-color,#fff));--background-activated:var(--ion-item-background-activated,#d9d9d9);--background-focused:var(--ion-item-background-activated,#d9d9d9);--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,#c8c7cc)));--color:var(--ion-item-color,var(--ion-text-color,#000));--highlight-height:0;--highlight-color-focused:var(--ion-color-primary,#3880ff);--highlight-color-valid:var(--ion-color-success,#10dc60);--highlight-color-invalid:var(--ion-color-danger,#f04141);font-size:17px}.activated.sc-ion-item-ios-h{--transition:none}.item-interactive.sc-ion-item-ios-h{--show-full-highlight:0;--show-inset-highlight:1}.item-lines-full.sc-ion-item-ios-h{--border-width:0px 0px 0.55px 0px;--show-full-highlight:1;--show-inset-highlight:0}.item-lines-inset.sc-ion-item-ios-h{--inner-border-width:0px 0px 0.55px 0px;--show-full-highlight:0;--show-inset-highlight:1}.item-lines-inset.sc-ion-item-ios-h, .item-lines-none.sc-ion-item-ios-h{--border-width:0px;--show-full-highlight:0}.item-lines-full.sc-ion-item-ios-h, .item-lines-none.sc-ion-item-ios-h{--inner-border-width:0px;--show-inset-highlight:0}.sc-ion-item-ios-s > [slot=start]{margin-left:0;margin-right:16px;margin-top:2px;margin-bottom:2px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-ios-s > [slot=start]{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}.sc-ion-item-ios-s > [slot=end]{margin-left:8px;margin-right:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-ios-s > [slot=end]{margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.sc-ion-item-ios-s > ion-icon[slot=end], .sc-ion-item-ios-s > ion-icon[slot=start]{margin-left:0;margin-top:7px;margin-bottom:7px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-ios-s > ion-icon[slot=end], .sc-ion-item-ios-s > ion-icon[slot=start]{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.sc-ion-item-ios-s > ion-toggle[slot=end], .sc-ion-item-ios-s > ion-toggle[slot=start]{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}.sc-ion-item-ios-h.item-label-floating .sc-ion-item-ios-s > [slot=end], .sc-ion-item-ios-h.item-label-stacked .sc-ion-item-ios-s > [slot=end]{margin-top:7px;margin-bottom:7px}.sc-ion-item-ios-s > .button-small{--padding-top:0px;--padding-bottom:0px;--padding-start:.5em;--padding-end:.5em;height:24px;font-size:13px}.sc-ion-item-ios-s > ion-avatar{width:36px;height:36px}.sc-ion-item-ios-s > ion-thumbnail{width:56px;height:56px}.sc-ion-item-ios-s > ion-avatar[slot=end], .sc-ion-item-ios-s > ion-thumbnail[slot=end]{margin-left:8px;margin-right:8px;margin-top:8px;margin-bottom:8px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-ios-s > ion-avatar[slot=end], .sc-ion-item-ios-s > ion-thumbnail[slot=end]{margin-left:unset;margin-right:unset;-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px}}.sc-ion-item-ios-h.item-radio .sc-ion-item-ios-s > ion-label, .sc-ion-item-ios-h.item-toggle .sc-ion-item-ios-s > ion-label{margin-left:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-ios-h.item-radio .sc-ion-item-ios-s > ion-label, .sc-ion-item-ios-h.item-toggle .sc-ion-item-ios-s > ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.sc-ion-item-ios-s > ion-label{margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:10px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-item-ios-s > ion-label{margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}.item-label-floating.sc-ion-item-ios-h, .item-label-stacked.sc-ion-item-ios-h{--min-height:68px}.sc-ion-item-ios-h.item-label-floating .sc-ion-item-ios-s > ion-select, .sc-ion-item-ios-h.item-label-stacked .sc-ion-item-ios-s > ion-select{--padding-top:8px;--padding-bottom:8px;--padding-start:0px}"}static get styleMode(){return"ios"}}class h{constructor(){this.noAnimate=!1}componentWillLoad(){this.noAnimate="floating"===this.position,this.emitStyle()}componentDidLoad(){this.noAnimate&&setTimeout(()=>{this.noAnimate=!1},1e3)}positionChanged(){this.emitStyle()}emitStyle(){const t=this.position;this.ionStyle.emit({label:!0,[`label-${t}`]:void 0!==t})}hostData(){const t=this.position;return{class:Object.assign({},e(this.color),{[`label-${t}`]:void 0!==t,"label-no-animate":this.noAnimate})}}static get is(){return"ion-label"}static get encapsulation(){return"scoped"}static get properties(){return{color:{type:String,attr:"color"},el:{elementRef:!0},mode:{type:String,attr:"mode"},noAnimate:{state:!0},position:{type:String,attr:"position",watchCallbacks:["positionChanged"]}}}static get events(){return[{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".item.sc-ion-label-ios-h, .item   .sc-ion-label-ios-h{--color:initial;display:block;color:var(--color);font-family:var(--ion-font-family,inherit);font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-label-ios-h{color:var(--ion-color-base)}[text-wrap].sc-ion-label-ios-h{white-space:normal}.item-interactive-disabled.sc-ion-label-ios-h, .item-interactive-disabled   .sc-ion-label-ios-h{cursor:default;opacity:.3;pointer-events:none}.item-input.sc-ion-label-ios-h, .item-input   .sc-ion-label-ios-h{-ms-flex:initial;flex:initial;max-width:200px;pointer-events:none}.label-fixed.sc-ion-label-ios-h{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.label-floating.sc-ion-label-ios-h, .label-stacked.sc-ion-label-ios-h{margin-bottom:0;-ms-flex-item-align:stretch;align-self:stretch;width:auto;max-width:100%}.item-has-focus.label-floating.sc-ion-label-ios-h, .item-has-focus   .label-floating.sc-ion-label-ios-h, .item-has-placeholder.label-floating.sc-ion-label-ios-h, .item-has-placeholder   .label-floating.sc-ion-label-ios-h, .item-has-value.label-floating.sc-ion-label-ios-h, .item-has-value   .label-floating.sc-ion-label-ios-h{-webkit-transform:translateZ(0) scale(.8);transform:translateZ(0) scale(.8)}.label-no-animate.label-floating.sc-ion-label-ios-h{-webkit-transition:none;transition:none}[text-wrap].sc-ion-label-ios-h{font-size:14px;line-height:1.5}.label-stacked.sc-ion-label-ios-h{margin-bottom:4px;font-size:13.6px}.label-floating.sc-ion-label-ios-h{margin-bottom:0;-webkit-transform:translate3d(0,27px,0);transform:translate3d(0,27px,0);-webkit-transform-origin:left top;transform-origin:left top;-webkit-transition:-webkit-transform .15s ease-in-out;transition:-webkit-transform .15s ease-in-out;transition:transform .15s ease-in-out;transition:transform .15s ease-in-out,-webkit-transform .15s ease-in-out}[dir=rtl].label-floating.sc-ion-label-ios-h{-webkit-transform-origin:right top;transform-origin:right top}.sc-ion-label-ios-s  h1 {font-size:24px}.sc-ion-label-ios-s  h1 , .sc-ion-label-ios-s  h2 {margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-weight:400}.sc-ion-label-ios-s  h2 {font-size:17px}.sc-ion-label-ios-s  h3 , .sc-ion-label-ios-s  h4 , .sc-ion-label-ios-s  h5 , .sc-ion-label-ios-s  h6 {margin-left:0;margin-right:0;margin-top:0;margin-bottom:3px;font-size:14px;font-weight:400;line-height:normal}.sc-ion-label-ios-s  p {margin-left:0;margin-right:0;margin-top:0;margin-bottom:2px;font-size:14px;line-height:normal;text-overflow:inherit;overflow:inherit}.sc-ion-label-ios-s > p{color:var(--ion-color-step-400,#999)}.sc-ion-label-ios-h.ion-color.sc-ion-label-ios-s > p, .ion-color .sc-ion-label-ios-h.sc-ion-label-ios-s > p{color:inherit}.sc-ion-label-ios-s  h2:last-child , .sc-ion-label-ios-s  h3:last-child , .sc-ion-label-ios-s  h4:last-child , .sc-ion-label-ios-s  h5:last-child , .sc-ion-label-ios-s  h6:last-child , .sc-ion-label-ios-s  p:last-child {margin-bottom:0}"}static get styleMode(){return"ios"}}class d{constructor(){this.childrenStyles=new Map}childrenStyle(t){t.stopPropagation();const e=t.target.tagName,o=t.detail,l={},s=this.childrenStyles.get(e)||{};let i=!1;Object.keys(o).forEach(t=>{const e=`toolbar-${t}`,r=o[t];r!==s[e]&&(i=!0),r&&(l[e]=!0)}),i&&(this.childrenStyles.set(e,l),this.el.forceUpdate())}hostData(){const t={};return this.childrenStyles.forEach(e=>{Object.assign(t,e)}),{class:Object.assign({},t,e(this.color))}}render(){return[t("div",{class:"toolbar-background"}),t("div",{class:"toolbar-container"},t("slot",{name:"start"}),t("slot",{name:"secondary"}),t("div",{class:"toolbar-content"},t("slot",null)),t("slot",{name:"primary"}),t("slot",{name:"end"}))]}static get is(){return"ion-toolbar"}static get encapsulation(){return"shadow"}static get properties(){return{color:{type:String,attr:"color"},config:{context:"config"},el:{elementRef:!0},mode:{type:String,attr:"mode"}}}static get listeners(){return[{name:"ionStyle",method:"childrenStyle"}]}static get style(){return".sc-ion-toolbar-ios-h{--border-width:0;--border-style:solid;--opacity:1;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:block;position:relative;width:100%;color:var(--color);font-family:var(--ion-font-family,inherit);contain:content;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.sc-ion-toolbar-ios-h{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}.ion-color.sc-ion-toolbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-toolbar-ios-h   .toolbar-background.sc-ion-toolbar-ios{background:var(--ion-color-base)}.toolbar-container.sc-ion-toolbar-ios{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;width:100%;min-height:var(--min-height);contain:content;overflow:hidden;z-index:10;-webkit-box-sizing:border-box;box-sizing:border-box}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.toolbar-container.sc-ion-toolbar-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.toolbar-background.sc-ion-toolbar-ios{left:0;right:0;top:0;bottom:0;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;opacity:var(--opacity);z-index:-1;pointer-events:none}.toolbar-segment.sc-ion-toolbar-ios-h{--min-height:auto}.sc-ion-toolbar-ios-s > ion-progress-bar{left:0;right:0;bottom:0;position:absolute}.sc-ion-toolbar-ios-h{--background:var(--ion-toolbar-background,var(--ion-color-step-50,#fff));--color:var(--ion-toolbar-color,var(--ion-text-color,#000));--border-color:var(--ion-toolbar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--padding-top:4px;--padding-bottom:4px;--padding-start:4px;--padding-end:4px;--min-height:44px}.toolbar-content.sc-ion-toolbar-ios{-ms-flex:1;flex:1;-ms-flex-order:4;order:4;min-width:0}.sc-ion-toolbar-ios-s > [slot=start]{-ms-flex-order:2;order:2}.sc-ion-toolbar-ios-s > [slot=secondary]{-ms-flex-order:3;order:3}.sc-ion-toolbar-ios-s > [slot=primary]{-ms-flex-order:5;order:5;text-align:end}.sc-ion-toolbar-ios-s > [slot=end]{-ms-flex-order:6;order:6;text-align:end}"}static get styleMode(){return"ios"}}export{r as IonButtons,n as IonContent,a as IonHeader,c as IonItem,h as IonLabel,d as IonToolbar};