!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);(()=>{const e=e=>{const t={};t.currentTemp=(parseFloat(e.main.temp)-273.15).toFixed(1),t.weatherStatus=e.weather[0].main,t.weatherDescription=e.weather[0].description,t.location=e.name+", "+e.sys.country,t.tempHigh=(parseFloat(e.main.temp_max)-273.15).toFixed(1),t.tempLow=(parseFloat(e.main.temp_min)-273.15).toFixed(1),t.humidity=e.main.humidity,console.log(t)};return{newCall:async function(t){"initial call"==t&&(t="London");try{const n=await fetch("https://api.openweathermap.org/data/2.5/weather?q="+t+"&APPID=b0724c24118141e549b0048fcae7ce4d",{mode:"cors"});e(await n.json())}catch(e){alert("There was an error with your search.")}}}})().newCall("initial call")}]);