!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){e.exports=function(e){var t={};if("string"==typeof e)return this.action=e.toUpperCase(),t.REQUEST=this.action+"_REQUEST",t.SUCCESS=this.action+"_SUCCESS",t.FAILURE=this.action+"_FAILURE",t.request=function(){return{type:t.REQUEST}},t.success=function(e){return{type:t.SUCCESS,response:e}},t.failure=function(e){return{type:t.FAILURE,error:e}},t.defaultState={isLoading:!1,isDone:!1,error:null,response:{}},t.reducer=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.defaultState,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case t.REQUEST:return Object.assign({},e,{isLoading:!0});case t.SUCCESS:return Object.assign({},e,{isLoading:!1,done:!0,response:r.response});case t.FAILURE:return Object.assign({},e,{isLoading:!1,done:!1,error:r.error});default:return e}},t}}]);