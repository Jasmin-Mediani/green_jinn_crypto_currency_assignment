!function(){function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequirebc44.register("cNIke",(function(t,n){e(t.exports,"getFCP",(function(){return g})),e(t.exports,"getCLS",(function(){return h})),e(t.exports,"getFID",(function(){return P})),e(t.exports,"getLCP",(function(){return k})),e(t.exports,"getTTFB",(function(){return D}));var i,r,a,o,u=function(e,t){return{name:e,value:void 0===t?-1:t,delta:0,entries:[],id:"v2-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(e,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){if("first-input"===e&&!("PerformanceEventTiming"in self))return;var n=new PerformanceObserver((function(e){return e.getEntries().map(t)}));return n.observe({type:e,buffered:!0}),n}}catch(e){}},f=function(e,t){var n=function n(i){"pagehide"!==i.type&&"hidden"!==document.visibilityState||(e(i),t&&(removeEventListener("visibilitychange",n,!0),removeEventListener("pagehide",n,!0)))};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},s=function(e){addEventListener("pageshow",(function(t){t.persisted&&e(t)}),!0)},m=function(e,t,n){var i;return function(r){t.value>=0&&(r||n)&&(t.delta=t.value-(i||0),(t.delta||void 0===i)&&(i=t.value,e(t)))}},d=-1,p=function(){return"hidden"===document.visibilityState?0:1/0},v=function(){f((function(e){var t=e.timeStamp;d=t}),!0)},l=function(){return d<0&&(d=p(),v(),s((function(){setTimeout((function(){d=p(),v()}),0)}))),{get firstHiddenTime(){return d}}},g=function(e,t){var n,i=l(),r=u("FCP"),a=function(e){"first-contentful-paint"===e.name&&(f&&f.disconnect(),e.startTime<i.firstHiddenTime&&(r.value=e.startTime,r.entries.push(e),n(!0)))},o=window.performance&&performance.getEntriesByName&&performance.getEntriesByName("first-contentful-paint")[0],f=o?null:c("paint",a);(o||f)&&(n=m(e,r,t),o&&a(o),s((function(i){r=u("FCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,n(!0)}))}))})))},y=!1,T=-1,h=function(e,t){y||(g((function(e){T=e.value})),y=!0);var n,i=function(t){T>-1&&e(t)},r=u("CLS",0),a=0,o=[],d=function(e){if(!e.hadRecentInput){var t=o[0],i=o[o.length-1];a&&e.startTime-i.startTime<1e3&&e.startTime-t.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e]),a>r.value&&(r.value=a,r.entries=o,n())}},p=c("layout-shift",d);p&&(n=m(i,r,t),f((function(){p.takeRecords().map(d),n(!0)})),s((function(){a=0,T=-1,r=u("CLS",0),n=m(i,r,t)})))},E={passive:!0,capture:!0},w=new Date,b=function(e,t){i||(i=t,r=e,a=new Date,F(removeEventListener),L())},L=function(){if(r>=0&&r<a-w){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(t){t(e)})),o=[]}},S=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?(n=t,i=e,r=function(){b(n,i),o()},a=function(){o()},o=function(){removeEventListener("pointerup",r,E),removeEventListener("pointercancel",a,E)},addEventListener("pointerup",r,E),addEventListener("pointercancel",a,E)):b(t,e)}var n,i,r,a,o},F=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,S,E)}))},P=function(e,t){var n,a=l(),d=u("FID"),p=function(e){e.startTime<a.firstHiddenTime&&(d.value=e.processingStart-e.startTime,d.entries.push(e),n(!0))},v=c("first-input",p);n=m(e,d,t),v&&f((function(){v.takeRecords().map(p),v.disconnect()}),!0),v&&s((function(){var a;d=u("FID"),n=m(e,d,t),o=[],r=-1,i=null,F(addEventListener),a=p,o.push(a),L()}))},C={},k=function(e,t){var n,i=l(),r=u("LCP"),a=function(e){var t=e.startTime;t<i.firstHiddenTime&&(r.value=t,r.entries.push(e),n())},o=c("largest-contentful-paint",a);if(o){n=m(e,r,t);var d=function(){C[r.id]||(o.takeRecords().map(a),o.disconnect(),C[r.id]=!0,n(!0))};["keydown","click"].forEach((function(e){addEventListener(e,d,{once:!0,capture:!0})})),f(d,!0),s((function(i){r=u("LCP"),n=m(e,r,t),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,C[r.id]=!0,n(!0)}))}))}))}},D=function(e){var t,n=u("TTFB");t=function(){try{var t=performance.getEntriesByType("navigation")[0]||function(){var e=performance.timing,t={entryType:"navigation",startTime:0};for(var n in e)"navigationStart"!==n&&"toJSON"!==n&&(t[n]=Math.max(e[n]-e.navigationStart,0));return t}();if(n.value=n.delta=t.responseStart,n.value<0||n.value>performance.now())return;n.entries=[t],e(n)}catch(e){}},"complete"===document.readyState?setTimeout(t,0):addEventListener("load",(function(){return setTimeout(t,0)}))}}))}();
//# sourceMappingURL=web-vitals.8e69aaa8.js.map
