"use strict";var __extends=this&&this.__extends||function(){var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};return function(t,i){function r(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(r.prototype=i.prototype,new r)}}(),__decorate=this&&this.__decorate||function(e,t,i,r){var n,a=arguments.length,o=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,i):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,i,r);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(a<3?n(o):a>3?n(t,i,o):n(t,i))||o);return a>3&&o&&Object.defineProperty(t,i,o),o},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},__param=this&&this.__param||function(e,t){return function(i,r){t(i,r,e)}};Object.defineProperty(exports,"__esModule",{value:!0});var http_1=require("@angular/http"),core_1=require("@angular/core"),wi_contrib_1=require("wi-studio/app/contrib/wi-contrib"),validation_1=require("wi-studio/common/models/validation"),Observable_1=require("rxjs/Observable"),UserNameFieldProvider=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.validate=function(e){return Observable_1.Observable.create(function(t){for(var i=0;i<e.inputs.length;i++)if("connection security"===e.inputs[i].name.toLowerCase()){if(e.inputs[i].value&&e.inputs[i].value.length>0&&"none"===e.inputs[i].value.toLowerCase()){t.next(validation_1.ValidationResult.newValidationResult().setVisible(!1));break}t.next(validation_1.ValidationResult.newValidationResult().setVisible(!0));break}t.complete()})},t=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],t)}(wi_contrib_1.AbstractContribValidationProvider);exports.UserNameFieldProvider=UserNameFieldProvider;var PasswordFieldProvider=function(e){function t(){return e.call(this)||this}return __extends(t,e),t.prototype.validate=function(e){return Observable_1.Observable.create(function(t){for(var i=0;i<e.inputs.length;i++)if("connection security"===e.inputs[i].name.toLowerCase()){if(e.inputs[i].value&&e.inputs[i].value.length>0&&"none"===e.inputs[i].value.toLowerCase()){t.next(validation_1.ValidationResult.newValidationResult().setVisible(!1));break}t.next(validation_1.ValidationResult.newValidationResult().setVisible(!0));break}t.complete()})},t=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[])],t)}(wi_contrib_1.AbstractContribValidationProvider);exports.PasswordFieldProvider=PasswordFieldProvider;var SendMailActivityService=function(e){function t(t,i){return e.call(this,t,i)||this}return __extends(t,e),t=__decorate([core_1.Injectable(),wi_contrib_1.WiContrib({validationProviders:[{field:"Username",useClass:UserNameFieldProvider},{field:"Password",useClass:PasswordFieldProvider}],fieldProviders:[]}),__param(0,core_1.Inject(core_1.Injector)),__param(1,core_1.Inject(http_1.Http)),__metadata("design:paramtypes",[Object,http_1.Http])],t)}(wi_contrib_1.WiServiceProviderContribution);exports.SendMailActivityService=SendMailActivityService;