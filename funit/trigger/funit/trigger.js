"use strict";var __extends=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),__decorate=this&&this.__decorate||function(t,e,r,n){var o,i=arguments.length,c=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,n);else for(var a=t.length-1;a>=0;a--)(o=t[a])&&(c=(i<3?o(c):i>3?o(e,r,c):o(e,r))||c);return i>3&&c&&Object.defineProperty(e,r,c),c},__metadata=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),http_1=require("@angular/http"),Observable_1=require("rxjs/Observable"),wi_contrib_1=require("wi-studio/app/contrib/wi-contrib"),FUnitTriggerHandler=function(t){function e(e,r,n){var o=t.call(this,e,r,n)||this;return o.injector=e,o.http=r,o.contribModelService=n,o.value=function(t,e){return null},o.validate=function(t,e){return null},o.action=function(t,e){var r=wi_contrib_1.CreateFlowActionResult.newActionResult();return Observable_1.Observable.create(function(t){var e=wi_contrib_1.ActionResult.newActionResult().setSuccess(!0).setResult(r);t.next(e)})},o}return __extends(e,t),e=__decorate([wi_contrib_1.WiContrib({}),core_1.Injectable(),__metadata("design:paramtypes",[core_1.Injector,http_1.Http,wi_contrib_1.WiContribModelService])],e)}(wi_contrib_1.WiServiceHandlerContribution);exports.FUnitTriggerHandler=FUnitTriggerHandler;