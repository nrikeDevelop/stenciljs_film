App.loadBundle("chunk-d92df78d.js",["exports"],function(n){window;var t={ipad:function(n){return o(n,/iPad/i)},iphone:function(n){return o(n,/iPhone/i)},ios:function(n){return o(n,/iPad|iPhone|iPod/i)},android:function(n){return o(n,/android|sink/i)},phablet:function(n){var t=n.innerWidth,r=n.innerHeight,i=Math.min(t,r),e=Math.max(t,r);return i>390&&i<520&&e>620&&e<800},tablet:function(n){var t=n.innerWidth,r=n.innerHeight,i=Math.min(t,r),e=Math.max(t,r);return i>460&&i<820&&e>780&&e<1400},cordova:i,capacitor:e,electron:function(n){return o(n,/electron/)},pwa:function(n){return n.matchMedia("(display-mode: standalone)").matches},mobile:r,desktop:function(n){return!r(n)},hybrid:function(n){return i(n)||e(n)}};function r(n){return function(n,t){return n.matchMedia("(any-pointer:coarse)").matches}(n)}function i(n){return!!(n.cordova||n.phonegap||n.PhoneGap)}function e(n){var t=n.Capacitor;return!(!t||!t.isNative)}function o(n,t){return t.test(n.navigator.userAgent)}n.isPlatform=function(n,r){return function(n){return function(n){n.Ionic=n.Ionic||{};var r=n.Ionic.platforms;if(null==r){r=n.Ionic.platforms=function(n){return Object.keys(t).filter(function(r){return t[r](n)})}(n);var i=n.document.documentElement.classList;r.forEach(function(n){return i.add("plt-"+n)})}return r}(n)}(n).includes(r)}});