/** Copyright (c) 2016 WIMI5. All rights reserved. */ (function(){var f=void 0,q=!0,r=!1;function x(){return function(){}}var z=this;function B(d){d=d.split(".");var a=z;!(d[0]in a)&&a.execScript&&a.execScript("var "+d[0]);for(var g;d.length&&(g=d.shift());)a=a[g]?a[g]:a[g]={}}Math.random();B("PENGO.client.plugins.accountManager.model");window.PENGO.client.plugins.accountManager.model.resolve=function(d){return{Ya:function(a){return d.bbWrappers.pengoModel.PengoModel.extend({defaults:function(){return{_id:f,texts:f,sessionID:f,anonymous:f,user:f,errorCode:f,disabled:r,rememberMe:q}},w:function(d){this.set({sessionID:d});a.gb(d)},yb:function(a){this.set({user:a})}})}}};B("PENGO.client.plugins.accountManager.module");
window.PENGO.client.plugins.accountManager.module.resolve=function(d,a){function g(a,h){this.p=this.a=f;this.K=a;this.rb=h;this.j=this.model=this.d=this.c=this.r=this.M=this.v=this.Q=this.b=f;this.S=function(){for(var a,b=/\+/g,h=/([^&=]+)=?([^&]*)/g,l=window.location.search.substring(1),e={};a=h.exec(l);)decodeURIComponent(a[2].replace(b," "))!==f&&(e[decodeURIComponent(a[1].replace(b," "))]=decodeURIComponent(a[2].replace(b," ")));return e};this.gb=function(a){a?(this.r.emit("USER_SIGNED_IN",a),
this.support&&this.support.setSessionID(a)):this.r.emit("USER_SIGNED_OUT",r)}}var e=d.user.constants,n=d.storage.local.getInstance(),s={USER_SIGNED_IN:"user/signed/in",USER_SIGNED_UP:"user/signed/up",USER_SIGNED_OUT:"user/signed/out"};g.prototype={A:function(a,h){try{return e.error.texts[h][a]}catch(c){return e.error.texts.en[a]}},Da:function(a){if(this.r!==a){if(this.r)try{this.r.removeEvents(s)}catch(h){this.v.warn("Error "+h+" while removing events when changing events manager")}(this.r=a)&&this.r.registerEvents(s)}return this.r!==
f},Y:function(a){this.M=a;return this.M!==f},aa:function(a){this.c=a;return this.c!==f},ib:function(a,h){this.a=a;this.a.e={};this.a.e.pb=RegExp(e.regExps.signUpName.pattern,e.regExps.signUpName.modifiers);this.a.e.name=RegExp(e.regExps.userName.pattern,e.regExps.userName.modifiers);this.a.e.R=RegExp(e.regExps.email.pattern,e.regExps.email.modifiers);this.a.e.F=RegExp(e.regExps.password.pattern,e.regExps.password.modifiers);if(h){switch(h.type){case "game":this.a.type=1;break;case "package":this.a.type=
2;break;case "chromews":this.a.type=4}this.a.id=h.id;h.appkey&&(this.a.appkey=h.appkey)}},jb:function(a){this.p=a;return this.p!==f},Ea:function(a){this.D=a},Z:function(a){(this.support=a)&&(this.model&&this.model.get("sessionID"))&&this.support.setSessionID(this.model.get("sessionID"))},U:function(){function a(){c.p.off("SERVICE_REGISTERED",a);var k=c.p.getService("uiMainbar")[0];if(k!==f)c.fb=k.addMainbarSection({view:c.ya,index:2,align:"right"}),c.ya.addControllerCallbacks(),c.p.on("SERVICE_UNREGISTERED",
h);else c.p.on("SERVICE_REGISTERED",a)}function h(){c.p.off("SERVICE_UNREGISTERED",h);if(c.p.getService("uiMainbar")[0]===f)c.p.on("SERVICE_REGISTERED",a);else c.p.on("SERVICE_UNREGISTERED",h)}var c=this;a()},$a:function(){var a=this.p.getService("uiMainbar")[0];a!==f&&a.removeMainbarSection(this.fb)},start:function(b,h,c,k,p,l,e,g,s){var t;this.xa=this.a.guest;this.v=h;this.wb=l;this.Ka=b;this.Y(k);this.aa(p);this.Ea(e);t=this.S();n.removeItem("credentials");n.removeItem("sess");this.hb(function(b,
k){if(!b)switch(this.b=k,this.aa(p),this.model=new (a.model.Ya(this))({_id:"PENGO.client.plugins.dashboard.menu.module.Module",texts:k}),this.d=a.controller(this),this.Da(c),this.ja=a.view.Va(this,this.K),this.fa=a.view.Ma(this,this.K),this.Q=a.view.Xa(this,this.K),this.ga=a.view.Qa(this,this.K),this.ha=a.view.Ra(this,this.K),this.ia=a.view.Sa(this,this.K),this.f=new this.ja({model:this.model,viewsMgr:(new d.bbWrappers.viewsManager.ViewsManager).addCallback(this.d.H)}),this.Ia=new this.fa({model:this.model,
viewsMgr:(new d.bbWrappers.viewsManager.ViewsManager).addCallback(this.d.H)}),this.j=new this.Q({model:this.model,viewsMgr:(new d.bbWrappers.viewsManager.ViewsManager).addCallback(this.d.H)}),this.ya=new this.ga({model:this.model,viewsMgr:(new d.bbWrappers.viewsManager.ViewsManager).addCallback(this.d.H)}),this.B=new this.ha({model:this.model,viewsMgr:(new d.bbWrappers.viewsManager.ViewsManager).addCallback(this.d.H)}),this.Ca=new this.ia({model:this.model,viewsMgr:(new d.bbWrappers.viewsManager.ViewsManager).addCallback(this.d.H)}),
t.op){case "signup":this.d.da(t,this.f);break;case "activate":this.d.Ja(t,this.Ia);break;case "signin":this.d.i(t,this.j);break;case "signout":this.d.ca(t,this.j);break;case "recover":this.d.Aa(t,this.B);break;case "resetPassword":this.d.Ba(t,this.Ca);break;default:this.d.i(t,this.j)}d.util.callback.call(g,s||this,b)},this)},stop:function(){this.j!==f&&(this.j.remove(),this.j=f);this.aa(f);this.Q=f;this.Da(f);this.b=this.model=this.d=f;this.Y(f);this.v=f},hb:function(a,h){this.M===f||null===this.M||
this.M.getTexts(this.rb,a,h||this)}};return g};B("PENGO.client.plugins.accountManager.controller");
window.PENGO.client.plugins.accountManager.controller.resolve=function(d){return function(a){var g=d.user.constants,e=d.pengoError.pengoError.PengoError,n=d.storage.local.getInstance(),s=0,b={H:function(h){h instanceof a.Q?(h.addControllerCallback("setSignedInCallback",b.T(h.model,h)),a.a.key!==f&&h.addControllerCallback("setKeyDownSignInActionCallback",b.T(h.model,h),{key:a.a.key}),h.addControllerCallback("changeRememberMeCallback",b.ta(h.model,h)),h.addControllerCallback("setRecoverPasswordCallback",
b.sa(h.model,h)),h.addControllerCallback("setSignUpCallback",function(){h.model.set({errorCode:f});a.D&&a.D.emit("users","SignUpClick",a.a.id);b.L(h.model,f,h,b.o)()})):h instanceof a.ga?h.addControllerCallback("setSignedOutCallback",b.Ua(h.model,h)):h instanceof a.ja?(h.addControllerCallback("changeEulaCallback",b.la(h.model,h)),h.addControllerCallback("changeNotifyCallback",b.oa(h.model,h)),h.addControllerCallback("setSignedUpCallback",b.L(h.model,h,f,b.o)),h.addControllerCallback("closeCallback",
b.Oa(h.model,h)),h.addControllerCallback("nameInputCallback",b.X(h.model,h)),h.addControllerCallback("emailInputCallback",b.W(h.model,h)),h.addControllerCallback("passwordInputCallback",b.pa(h.model,h)),h.addControllerCallback("eulaInputCallback",b.ma(h.model,h)),h.addControllerCallback("nameLostfocusCallback",b.na(h.model,h)),h.addControllerCallback("emailLostfocusCallback",b.ka(h.model,h)),h.addControllerCallback("passwordLostfocusCallback",b.qa(h.model,h)),a.a.key!==f&&h.addControllerCallback("setKeyDownSignUpActionCallback",
b.L(h.model,h,f,b.o),{key:a.a.key})):h instanceof a.ha?(h.addControllerCallback("recoverCallback",b.ra(h.model,h)),h.addControllerCallback("closeCallback",b.Na(h.model,h)),a.a.key!==f&&h.addControllerCallback("setKeyDownRecoverActionCallback",b.ra(h.model,h),{key:a.a.key})):h instanceof a.ia?(h.addControllerCallback("resetPasswordCallback",b.ua(h.model,h)),a.a.key!==f&&h.addControllerCallback("setKeyDownResetPasswordActionCallback",b.ua(h.model,h),{key:a.a.key})):h instanceof a.fa&&h.addControllerCallback("setActivateCallback",
b.La(h.model,h))},L:function(h,c,k,p){var e=a.S(),d={};return function(){d.user=c&&c.$el.find("#user").prop("value");d.email=c&&c.$el.find("#email").prop("value");d.password1=c&&c.$el.find("#password1").prop("value");d.password2=c&&c.$el.find("#password2").prop("value");d.acceptEula=c&&c.$el.find("#eula").prop("checked");d.notify=c&&c.$el.find("#notify").prop("checked");d.profile=e.profile||a.model.get("profile");d.challenge=b.n("get_challenge",[]);d.response=b.n("get_response",[]);b.da(d,c,k,p)}},
ra:function(a,c){var k={};return function(){k.email=c.$el.find("#email").prop("value");k.challenge=b.n("get_challenge",[]);k.response=b.n("get_response",[]);b.Aa(k,c)}},Na:function(){return function(){a.B.G!==f&&(a.model.set({errorCode:f}),a.c.showModalView(a.B.G),a.B.G.updateFocus())}},X:function(a,c){return function(){b.q("generic");c.$el.find("#user")[0].validity.valid?(b.k(c.$el.find("#user"),q),b.q("user",d.user.constants.error.codes.USER_NAME_NOT_VALID)):(b.k(c.$el.find("#user"),r),b.z("user",
d.user.constants.error.codes.USER_NAME_NOT_VALID))}},W:function(a,c){return function(){b.q("generic");c.$el.find("#email")[0].validity.valid?(b.k(c.$el.find("#email"),q),b.q("email",d.user.constants.error.codes.EMAIL_NOT_VALID)):(b.k(c.$el.find("#email"),r),b.z("email",d.user.constants.error.codes.EMAIL_NOT_VALID))}},pa:function(h,c){return function(){b.q("generic");c.$el.find("#password1")[0].validity.valid?(b.k(c.$el.find("#password1"),q),a.d.q("password",d.user.constants.error.codes.PASSWORD_NOT_VALID)):
(b.k(c.$el.find("#password1"),r),b.z("password",d.user.constants.error.codes.PASSWORD_NOT_VALID))}},ma:function(h,c){return function(){b.q("generic");c.$el.find("#eula").prop("checked")?a.d.q("eula",d.user.constants.error.codes.EULA_NOT_APPROVED):b.z("eula",d.user.constants.error.codes.EULA_NOT_APPROVED)}},na:function(a,c){return function(){function k(a){a!==d.user.constants.results.OK?(b.z("user",a),b.k(c.$el.find("#user"),r)):(b.q("user"),b.k(c.$el.find("#user"),q))}b.X(a,c)();c.$el.find("#user")[0].validity.valid&&
b.vb(c.$el.find("#user").prop("value"),k)}},ka:function(a,c){return function(){function k(a){a!==d.user.constants.results.OK?(b.z("email",a),b.k(c.$el.find("#email"),r)):(b.q("email"),b.k(c.$el.find("#email"),q))}b.W(a,c)();c.$el.find("#email")[0].validity.valid&&b.ub(c.$el.find("#email").prop("value"),k)}},qa:function(a,c){return function(){var a=b.V(c.$el.find("#password1").prop("value"));a===f?(b.q("password"),b.k(c.$el.find("#password1"),q)):(b.z("password",a),b.k(c.$el.find("#password1"),r))}},
k:function(a,b){b?(a.removeClass("modal-form-field-input-error"),a.addClass("ok")):(a.addClass("modal-form-field-input-error"),a.removeClass("ok"))},z:function(b,c){var k=a.model.get("errorCode");if(k===f||"object"!==typeof k)k={};k[b]=c;a.model.set({errorCode:f});a.model.set({errorCode:k})},q:function(b){var c=a.model.get("errorCode");c!==f&&c[b]!==f&&(delete c[b],a.model.set({errorCode:f}),a.model.set({errorCode:c}))},Oa:function(){return function(){a.f.G!==f?(a.model.set({errorCode:f}),a.c.showModalView(a.f.G),
a.f.J=r,a.f.G.updateFocus()):(a.c.hideModalView(a.f),a.f.J=r,b.C!==f&&"function"===typeof b.C&&(b.C(),b.C=f))}},T:function(h,c,k){var p,d;return function(){a.c.showWaitView();h.set({disabled:q});h.set({user:c.$el.find("#user").prop("value"),errorCode:f});p=c.$el.find("#password").prop("value");d=a.S();d.password=p;d.user=h.get("user");b.i(d,c,k)}},Ua:function(){return function(){b.ca(f,a.j)}},la:function(a){return function(){a.set("eula",this.checked)}},oa:function(a){return function(){a.set("notify",
this.checked)}},ta:function(a){return function(){a.set("rememberMe",this.checked)}},sa:function(h,c){return function(){a.c.hideModalView(c);a.B.G=c;a.model.set({errorCode:f});a.c.showModalView(a.B);b.n("create",[a.a.recaptcha.publicKey,"recaptcha",{theme:"blackglass"}]);a.B.u()}},ua:function(h,c){var k,d,e;return function(){a.c.showWaitView();h.set({disabled:q});k=c.$el.find("#password1").prop("value");d=c.$el.find("#password2").prop("value");e=a.S();e.password1=k;e.password2=d;b.Ba(e,c)}},La:function(){return function(){a.model.get("errorCode")!==
f?b.N(a.a.accountSignUpURL):b.I("signin")}},i:function c(k,p,l){var A=r,m,v,t,y,u;k||(k={});p=p||a.j;l!==f&&(b.o=l);async.parallel([function(a){n.getItem("sessionID",function(b,c){b?a(b):(t=c,a())})},function(a){n.getItem("_wcsl",function(b,c){b?a(b):(y=c,a())})},function(a){n.getItem("_wcslr",function(b,c){b?a(b):(u=c,a())})}],function(){switch(a.a.mode){case "redirect":(m=k.sessionID?k.sessionID:t)?a.model.get("user")===f||a.model.get("anonymous")===f?b.wa(m,function(c,e){c!==d.user.constants.results.OK?
(a.model.set({user:f}),a.model.set({anonymous:f}),n.removeItem("sessionID"),delete k.sessionID,b.i(k,p)):(e.hasOwnProperty("user")&&a.model.set({user:e.user}),e.hasOwnProperty("isAnonymous")&&a.model.set({anonymous:e.isAnonymous}),!e.isAnonymous&&n.setItem("sessionID",m),a.model.w(m),a.U())}):(!a.model.get("anonymous")&&n.setItem("sessionID",m),a.model.w(m),a.U()):b.I("signin");break;case "standalone":if(m=k.sessionID?k.sessionID:t){a.model.get("user")===f||a.model.get("anonymous")===f?b.wa(m,function(c,
l){if(c!==d.user.constants.results.OK){a.model.set({user:f});a.model.set({anonymous:f});a.model.w(f);n.removeItem("sessionID");delete k.sessionID;s++;if(1E3>=s){b.i(k,p);return}throw new e("Too much login attemps. Try to restart app.");}l.user&&a.model.set({user:l.user});l.isAnonymous&&a.model.set({anonymous:l.isAnonymous});!l.isAnonymous&&n.setItem("sessionID",m);a.model.w(m);a.U()}):(!a.model.get("anonymous")&&n.setItem("sessionID",m),a.model.w(m),a.U());break}case "account":k.returnTo=k.returnTo||
a.a.defaultReturnTo;if(k.hasOwnProperty("user")&&k.hasOwnProperty("password")){b.ba(k.user,k.password,function(e,l){p.$el.find("#password").prop("value","");a.model.set({disabled:r});a.c.hideWaitView();e!==d.user.constants.results.OK?(a.model.set({errorCode:e}),a.c.showModalView(p)):(a.c.hideModalView(p),b.o!==f&&"function"===typeof b.o&&(b.o(),b.o=f),a.model.get("rememberMe")&&(n.setItem("_wcsl",CryptoJS.AES.encrypt(JSON.stringify({id:k.user,F:k.password}),l.id).toString()),n.setItem("_wcslr",l.id)),
k.returnTo?b.N(k.returnTo,l.id,a.model.get("user"),f,f,r):(a.model.set({user:l.user}),a.model.set("anonymous",r),k.sessionID=l.id,a.model.w(f),c(k,p)))},b);break}if(y&&u)try{if((v=JSON.parse(CryptoJS.AES.decrypt(y,u).toString(CryptoJS.enc.Utf8)))&&v.id&&v.F)k.user=v.id,k.password=v.F,b.i(k,p)}catch(l){a.v.debug("Could not remember credentials due to error "+l)}if(A=k.hasOwnProperty("guest")?k.guest:a.xa){b.Fa(function(e,l){e!==d.user.constants.results.OK?a.model.set({errorCode:e}):k.returnTo?b.N(k.returnTo,
l.id,a.model.get("user"),q,f,q):(a.model.set({user:l.user}),a.model.set({anonymous:q}),k.sessionID=l.id,a.model.w(f),c(k,p))});break}if(a.Ka&&a.a.user&&a.a.password){b.ba(a.a.user,a.a.password,function(b,e){b!==g.results.OK?a.model.set({errorCode:b}):(a.model.set({user:e.user}),a.model.set("anonymous",r),k.sessionID=e.id,a.model.w(f),c(k,p))},this);break}a.c.showModalView(p)}})},ca:function(c,k){var e;c||(c={});k=k||a.j;e=c.sessionID||b.va();switch(a.a.mode){case "redirect":n.removeItem("sessionID");
b.I("signout",e);break;case "standalone":n.removeItem("sessionID");case "account":b.nb(e,function(e){e!==g.results.OK&&a.v.warn("Something wrong happen on signOut process result "+e);a.$a();n.removeItem("_wcsl");n.removeItem("_wcslr");a.model.set({user:f});a.model.set({anonymous:f});a.model.w(f);delete c.sessionID;b.i(c,k)},b)}},Aa:function(c,k){c||(c={});k=k||a.B;switch(a.a.mode){case "standalone":case "account":a.c.showWaitView(),b.za(c,function(c){a.model.set({disabled:r});a.c.hideWaitView();c===
d.user.constants.results.OK?(b.n("destroy",[]),a.c.hideModalView(k),a.c.showMessageDialog({type:"message",title:a.b.RecoverPasswordTitle,text:a.b.RecoverPasswordPostMessage,button1Text:a.b.ok,button1Action:function(){b.i({})},closeButton:r})):(b.n("reload",[]),a.model.set({errorCode:c}))},b)}},da:function(c,k,e,l){c||(c={});k=k||a.f;l!==f&&(b.C=l);switch(a.a.mode){case "redirect":b.I("signup");break;case "standalone":case "account":if(!a.f.J){a.f.G=e;a.c.showModalView(k);b.n("create",[a.a.recaptcha.publicKey,
"recaptcha",{theme:"blackglass"}]);k.updateFocus();a.f.J=q;break}a.c.showWaitView();a.model.set({disabled:q});b.ob(c.user,c.email,c.password1,c.password2,c.acceptEula,c.notify,c.profile,c.challenge,c.response,function(e){a.model.set({disabled:r});a.c.hideWaitView();e===d.user.constants.results.OK?(b.n("destroy",[]),a.model.set({errorCode:f}),a.D&&a.D.emit("users","signedup",a.a.id),a.c.hideModalView(k),a.f.J=r,a.r.emit("USER_SIGNED_UP",c.user),b.o!==f&&"function"===typeof b.o&&(b.o(),b.o=f),b.C!==
f&&"function"===typeof b.C&&(b.C(),b.C=f),c.user&&c.password1?b.i({user:c.user,password:c.password1},a.j):b.i()):(b.n("reload",[]),a.D&&a.D.emit("users","signedupError",a.a.id),b.z(b.Pa(e),e))},b)}},Ja:function(c){c||(c={});if(c.code)switch(a.a.mode){case "redirect":b.I("activation",f,f,f,c.code);break;case "standalone":case "account":a.c.showWaitView(),a.model.set({disabled:q}),a.model.set({errorCode:f}),b.Ha(c.code,function(k,e){a.c.hideWaitView();k!==d.user.constants.results.OK?a.model.set({errorCode:k}):
(a.D&&a.D.emit("users","activated"),c.hasOwnProperty("profile")&&"gamer"===c.profile?a.c.showMessageDialog({type:"message",title:a.b.VerifyEmailTitle,text:a.b.VerifyEmailMessage.replace("%1",e),button1Text:a.b.VerifyGamerEmailButton,button1Action:function(){window.open("http://play.wimi5.com","_self")},closeButton:r}):a.c.showMessageDialog({type:"message",title:a.b.VerifyEmailTitle,text:a.b.VerifyEmailMessage.replace("%1",e),button1Text:a.b.VerifyEmailButton,button1Action:function(){b.I("signin",
f,f,f,f,f,c.returnTo||"/?op=signin&returnTo="+a.a.defaultReturnTo)},closeButton:r}))})}else b.N("/?op=signup")},Ta:function(){return{model:a.model,getErrorFn:a.A,signInAction:b.T,rememberAction:b.ta,recoverPasswordAction:b.sa,signUpAction:b.L}},Wa:function(){return{model:a.model,getErrorFn:a.A,signInAction:b.T,signUpAction:b.L,eulaAction:b.la,notifyAction:b.oa,nameInputAction:b.X,emailInputAction:b.W,passwordInputAction:b.pa,eulaInputAction:b.ma,nameLostfocusAction:b.na,emailLostfocusAction:b.ka,
passwordLostfocusAction:b.qa,showStateHandler:b.qb,regExpName:a.a.e?a.a.e.name.source:f,regExpEmail:a.a.e?a.a.e.R.source:f,regExpPassword:a.a.e?a.a.e.F.source:f}},qb:function(b){if(b!==f)a.f.J=b;else return a.f.J},Ba:function(c,k){c||(c={});k=k||a.Ca;switch(a.a.mode){case "standalone":case "account":c.hasOwnProperty("password1")&&c.hasOwnProperty("password2")&&c.hasOwnProperty("code")?(a.c.showWaitView(),a.model.set({disabled:q}),a.model.set({errorCode:f}),b.za(c,function(e,l){a.model.set({disabled:r});
a.c.hideWaitView();e===d.user.constants.results.OK?(b.n("destroy",[]),a.c.hideModalView(k),a.c.showMessageDialog({type:"message",title:a.b.ResetPasswordTitle,text:a.b.ResetPasswordPostMessage,button1Text:a.b.ok,button1Action:function(){b.i({user:l,password:c.password1})},closeButton:r})):a.model.set({errorCode:e})},b)):(a.c.showModalView(k),k.u())}},Ha:function(c,k,e){var d;d={};d[g.fields.CODE]=c;b.t(a.a.activateURL,d,b.s,k,e)},ob:function(c,k,e,l,n,m,s,t,y,u,w){""===t||""===y?d.util.callback.call(u,
w||b,g.error.codes.INVALID_CAPTCHA):b.tb(c)!==f?d.util.callback.call(u,w||b,g.error.codes.USER_NAME_NOT_ALLOWED):b.Ga(c)!==f?d.util.callback.call(u,w||b,g.error.codes.USER_NAME_NOT_VALID):b.ea(k)!==f?d.util.callback.call(u,w||b,g.error.codes.EMAIL_NOT_VALID):e?l&&e!==l?d.util.callback.call(u,w||b,g.error.codes.PASSWORD_MISMATCH):n!==q?d.util.callback.call(u,w||b,g.error.codes.EULA_NOT_APPROVED):b.V(e)!==f?d.util.callback.call(u,w||b,g.error.codes.PASSWORD_NOT_VALID):(l={},l[g.fields.USER]={name:c.trim(),
password:e,email:k.toLowerCase().trim(),notify:m,challenge:t,response:y,profile:s},b.t(a.a.signUpURL,l,b.s,u,w)):d.util.callback.call(u,w||b,g.error.codes.PASSWORD_NOT_VALID)},vb:function(c,k,e){var d;c?(d={},d[g.fields.USER]=c,b.t(a.a.verifyNameURL,d,b.s,k,e)):k&&k.call(e||b,g.error.codes.USER_NAME_NOT_VALID)},ub:function(c,k,e){var d;c?(d={},d[g.fields.EMAIL]=c,b.t(a.a.verifyEmailURL,d,b.s,k,e)):k&&k.call(e||b,g.error.codes.EMAIL_NOT_VALID)},mb:function(c,k){var e;a.model.get("sessionID")!==f?(e=
{},e[g.fields.MODE]=g.modes.SESSION,e[g.fields.SESSION]=a.model.get("sessionID"),b.t(a.a.verifyURL,e,b.s,c,k)):d.util.callback.call(c,k||b,g.error.codes["SESSION_ NOT_VALID"])},wa:function(c,e,p){var l;c||(c=a.model.get("sessionID"));c!==f?(l={},l[g.fields.SESSION]=c,b.t(a.a.getSessionInfoURL,l,b.s,e,p)):d.util.callback.call(e,p||b,g.error.codes["SESSION_ NOT_VALID"])},Fa:function(c,e){b.t(a.a.signInAnonymousURL,{},b.s,c,e)},ba:function(c,e,p,l){var n;b.Ga(c)!==f&&b.ea(c)!==f?d.util.callback.call(p,
l||b,g.error.codes.USER_NAME_OR_EMAIL_NOT_VALID):b.V(e)!==f?d.util.callback.call(p,l||b,g.error.codes.PASSWORD_NOT_VALID):(n={},n[g.fields.MODE]=g.modes.ID,n[g.fields.ID]=c,n[g.fields.PASSWORD]=e,b.t(a.a.signInURL,n,b.s,p,l))},nb:function(c,e,d){var l;l={};l[g.fields.MODE]=g.modes.SESSION;l[g.fields.SESSION]=c;b.t(a.a.signOutURL,l,b.s,e,d)},za:function(c,e,p){var l;if(c){l={};if(c.hasOwnProperty("email")){if(!c.hasOwnProperty("challenge")||""===c.challenge||!c.hasOwnProperty("response")||""===c.response){d.util.callback.call(e,
p||b,g.error.codes.INVALID_CAPTCHA);return}l[g.fields.CHALLENGE]=c.challenge;l[g.fields.RESPONSE]=c.response;if(b.ea(c.email)!==f){d.util.callback.call(e,p||b,g.error.codes.EMAIL_NOT_VALID);return}l[g.fields.EMAIL]=c.email}else{if(c.password1!==c.password2){d.util.callback.call(e,p||b,g.error.codes.PASSWORD_MISMATCH);return}if(!c.hasOwnProperty("password1")||b.V(c.password1)!==f){d.util.callback.call(e,p||b,g.error.codes.PASSWORD_NOT_VALID);return}if(!c.hasOwnProperty("code")||"string"!==typeof c.code){d.util.callback.call(e,
p||b,g.error.codes.ACTIVATION_CODE_NOT_VALID);return}l[g.fields.PASSWORD]=c.password1;l[g.fields.CODE]=c.code}b.t(a.a.recoverURL,l,b.s,e,p)}else d.util.callback.call(e,p||b,d.error.errorCodes.INVALID_DATA)},tb:function(b){if(b===f||null!==b.match(a.a.e.pb))return g.error.codes.USER_NAME_NOT_ALLOWED},Ga:function(b){if(b===f||null===b.match(a.a.e.name))return g.error.codes.USER_NAME_NOT_VALID},ea:function(b){if(b===f||null===b.match(a.a.e.R))return g.error.codes.EMAIL_NOT_VALID},V:function(b){if(b===
f||null===b.match(a.a.e.F))return g.error.codes.PASSWORD_NOT_VALID},s:function(a,e,d){a===f?e&&e.call(d||b,g.results.KO):a[g.messageChunks.RESULT]===g.results.OK?e&&e.call(d||b,g.results.OK,a[g.messageChunks.DATA]):e&&e.call(d||b,a[g.messageChunks.RESULT])},t:function(c,e,d,l,n){a.a.appkey&&(e[g.fields.KEY]=a.a.appkey);a.a.type&&(e[g.fields.TYPE]=a.a.type);$.ajax({url:c,type:"POST",data:e,dataType:"json",success:function(e,k,g){k=f;switch(g.status){case 200:try{k=e}catch(s){a.v.error("Error '"+s+
"' while parsing request response to '"+c+"'")}break;default:a.v.error("Status "+g.status+" while posting to '"+c+"'")}d.call(b,k,l,n)},error:function(e,k){var g,s;b.cb(function(e){e?"abort"===k&&(a.a.type&&(g="Not allowed origin",s="This game cannot be loaded. It probably can be due to an <span>invalid origin</span>. <br>If you are the game developer, check if the origin <span>'"+document.location.origin.replace("chrome-extension://","")+"'</span> is properly set."),b.kb({url:c,title:g,message:s})):
b.lb({url:c});d.call(b,f,l,n)})}})},n:function(b,e){if(a.a.recaptcha.enabled&&Recaptcha)return Recaptcha[b].apply(Recaptcha,e)},reload:function(){switch(a.a.type){case 4:window.chrome&&window.chrome.runtime.reload();break;default:window.location.reload()}},lb:function(c){c||(c={});a.v.error("Not connected detected.");a.c.showMessageDialog({dialogClass:"light",title:"Connection needed",text:"The game needs to be connected.<br>Please connect your device and press <span>OK</span> button.",button1Text:"OK",
closeButtonAction:function(){b.reload()},button1Action:function(){b.reload()}})},kb:function(c){c||(c={});c.title=c.title||"Backend communication problem.";c.message=c.message||"We are experiencing problems to reach backend services, please try again later";a.v.error("Not allowed origin detected.");a.c.showMessageDialog({dialogClass:"light",title:c.title,text:c.message,closeButtonAction:function(){b.reload()}})},cb:function(b,e){var d,g,n;n="https://www.google.com/favicon.ico?rand="+Date.now();4===
a.a.type?(d=new XMLHttpRequest,d.open("GET",n,q),d.responseType="blob",d.onload=function(){g=document.createElement("img");g.src=window.URL.createObjectURL(this.response);document.body.appendChild(g);g.onload=function(){b&&b.call(e||this,q)};g.onerror=function(){b&&b.call(e||this,r)}},d.onerror=function(){b&&b.call(e||this,r)},d.send()):(g=new Image,g.onload=function(){b&&b.call(e||this,q)},g.onerror=function(){b&&b.call(e||this,r)},g.src=n)},P:function(a,b,e){var d=RegExp("([?&])"+b+"=.*?(&|$)",
"i"),g=-1!==a.indexOf("?")?"&":"?";return a.match(d)?a.replace(d,"$1"+b+"="+e+"$2"):a+g+b+"="+e},I:function(c,e,d,g,n,m,s){b.N(a.a.accountURL.replace("#op",c).replace("#app",a.a.app).replace("#returnTo",s||a.a.returnTo||a.a.defaultReturnTo),e,f,g||a.xa,n,m)},N:function(a,e,d,g,n,m){e&&(a=b.P(a,"sessionID",e));d&&(a=b.P(a,"user",d));g&&(a=b.P(a,"guest",g));n&&(a=b.P(a,"code",n));"boolean"===typeof m&&(a=b.P(a,"anonymous",m));window.open(a,"_self")},va:function(){return a.model.get("sessionID")},Za:function(){return a.model.get("user")},
eb:function(){return a.model.get("sessionID")?q:r},bb:function(){return a.model.get("anonymous")},ab:function(){switch(a.a.mode){case "standalone":n.removeItem("_wcsl"),n.removeItem("_wcslr");case "redirect":n.removeItem("sessionID"),a.model.set("sessionID",f)}b.i(f,a.j)},Pa:function(a){switch(a){case d.user.constants.error.codes.USER_NOT_FOUND:case d.user.constants.error.codes.USER_NAME_NOT_ALLOWED:case d.user.constants.error.codes.USER_NAME_ALREADY_EXISTS:case d.user.constants.error.codes.USER_NAME_NOT_VALID:a=
"user";break;case d.user.constants.error.codes.EMAIL_ALREADY_EXISTS:case d.user.constants.error.codes.EMAIL_NOT_VALID:a="email";break;case d.user.constants.error.codes.PASSWORD_MISMATCH:case d.user.constants.error.codes.PASSWORD_NOT_VALID:a="password";break;case d.user.constants.error.codes.EULA_NOT_APPROVED:a="eula";break;default:a="generic"}return a}};return b}};B("PENGO.client.plugins.accountManager.view");
window.PENGO.client.plugins.accountManager.view.resolve=function(d){return{Va:function(a,g){return d.bbWrappers.pengoView.PengoView.extend({tagName:"div",attributes:{"class":"accountManagerView modal-form long"},initialize:function(){this.m();this.template=_.template(g.signup);this.model.set({texts:a.b},{O:q});this.firstRender()},m:function(){this.listenTo(this.model,"change:disabled",this.g,this);this.listenTo(this.model,"change:errorCode",this.h,this);this.listenTo(this.model,"change:errorCode",
this.updateFocus,this)},l:function(){var a=this;this.$el.find("#eula").next("label").children("span").keydown(function(d){-1<[32].indexOf(d.keyCode)&&(d.preventDefault(),a.$el.find("#eula").click())});this.$el.find("#notify").next("label").children("span").keydown(function(d){-1<[32].indexOf(d.keyCode)&&(d.preventDefault(),a.$el.find("#notify").click())})},render:function(){this.$el.html(this.template({title:a.b.SignUpTitle,message:a.b.SignUpMessage,user:a.b.SignUpUser,email:a.b.SignUpEmail,password1:a.b.SignUpPassword1,
password2:a.b.SignUpPassword2,button:a.b.SignUpButton,termsText:a.b.SignUpTermsAcceptText,termsLink:a.b.SignUpTermsAcceptLink,termsTextAnd:a.b.SignUpTermsAcceptTextAnd,cookiesLink:a.b.SignUpCookiesAcceptLink,notifyText:a.b.SignUpTermsNotifyText,notifyLink:a.b.SignUpTermsNotifyLink,termsTextFinal:a.b.SignUpTermsAcceptTextFinal}));a.a.signUpFormCloseButton!==q&&this.$el.find(".toolbarView").remove();this.h();this.g();this.updateFocus();this.l();this.addControllerCallbacks();return this},g:function(){this.$el.find("#user").prop("disabled",
this.model.get("disabled"));this.$el.find("#email").prop("disabled",this.model.get("disabled"));this.$el.find("#password1").prop("disabled",this.model.get("disabled"));this.$el.find("#password2").prop("disabled",this.model.get("disabled"));this.$el.find("#button").prop("disabled",this.model.get("disabled"))},h:function(){var e=["user","email","password","eula","generic"],d=this.model.get("errorCode"),g=f;d===f&&(d={});for(var b=0;b<e.length;b+=1)switch(g=d[e[b]]!==f?a.A(d[e[b]]):"",e[b]){case "user":this.$el.find("#user").parent().find(".error-text.field").html(g);
break;case "email":this.$el.find("#email").parent().find(".error-text.field").html(g);break;case "password":this.$el.find("#password1").parent().find(".error-text.field").html(g);break;case "eula":this.$el.find("#eula").parent().find(".error-text.field").html(g);break;case "generic":this.$el.find("#error").html(g)}},updateFocus:function(){var a=this;_.defer(function(){""===a.$el.find("#user").prop("value")&&(""===a.$el.find("#email").prop("value")&&""===a.$el.find("#password1").prop("value")&&0===
a.$el.find(".modal-form-field-input-error").length)&&a.$el.find("#user").focus()})},setSignedUpCallback:function(a){this.$el.find("#button").on("click",a)},setKeyDownSignUpActionCallback:function(a,d){this.$el.keydown(function(g){g.which===d.key&&a.call(this)})},changeEulaCallback:function(a){this.$el.find("#eula").on("change",a)},changeNotifyCallback:function(a){this.$el.find("#notify").on("change",a)},closeCallback:function(a){this.$el.find(".modal-close").on("click",a)},nameInputCallback:function(e){if(a.a.e&&
a.a.e.name)this.$el.find("#user").prop("pattern",a.a.e.name.source).on("input",e)},emailInputCallback:function(e){if(a.a.e&&a.a.e.R)this.$el.find("#email").prop("pattern",a.a.e.R.source).on("input",e)},passwordInputCallback:function(e){this.$el.find("#password1").on("input",e);if(a.a.e&&a.a.e.F)this.$el.find("#password1").prop("pattern",a.a.e.F.source).on("input",e)},eulaInputCallback:function(a){this.$el.find("#eula").on("change",a)},nameLostfocusCallback:function(a){this.$el.find("#user").on("blur",
a)},emailLostfocusCallback:function(a){this.$el.find("#email").on("blur",a)},passwordLostfocusCallback:function(a){this.$el.find("#password1").on("blur",a)}})},Ma:function(a,g){return d.bbWrappers.pengoView.PengoView.extend({tagName:"div",attributes:{"class":"accountManagerView modal-form"},initialize:function(){this.m();this.template=_.template(g.activate);this.model.set({texts:a.b},{O:q});this.firstRender()},m:function(){this.listenTo(this.model,"change:disabled",this.g,this);this.listenTo(this.model,
"change:errorCode",this.h,this);this.listenTo(this.model,"change:errorCode",this.u,this)},l:x(),render:function(){this.$el.html(this.template({title:a.b.ActivationTitle}));this.h();this.g();this.u();this.l();this.addControllerCallbacks();return this},g:x(),h:function(){this.$el.find("#error").text(a.A(this.model.get("errorCode")))},u:x(),setActivateCallback:function(a){this.$el.find("#button").on("click",a)}})},Xa:function(a,g){return d.bbWrappers.pengoView.PengoView.extend({tagName:"div",attributes:{"class":"accountManagerView modal-form"},
initialize:function(){this.m();this.template=_.template(g.signin);this.model.set({texts:a.b},{O:q});this.firstRender()},m:function(){this.listenTo(this.model,"change:disabled",this.g,this);this.listenTo(this.model,"change:errorCode",this.h,this);this.listenTo(this.model,"change:errorCode",this.updateFocus,this)},l:x(),render:function(){this.$el.html(this.template({title:a.b.SigninTitle,message:a.b.SigninMessage,user:a.b.SigninUser,password:a.b.SigninPassword,button:a.b.SigninButton,rememberMe:a.b.SigninRemember,
recoverPassword:a.b.SigninRecoverPassword,signUpURL:a.a.accountSignUpURL,forgotName:a.b.ForgotName}));this.h();this.g();this.updateFocus();this.l();this.addControllerCallbacks();return this},g:function(){this.$el.find("#user").prop("disabled",this.model.get("disabled"));this.$el.find("#password").prop("disabled",this.model.get("disabled"));this.$el.find("#button").prop("disabled",this.model.get("disabled"))},h:function(){this.model.get("errorCode")===f?this.$el.find("#error").text(""):this.$el.find("#error").text(a.A(this.model.get("errorCode")));
this.model.get("errorCode")!==f&&this.$el.find("#password").prop("value","")},updateFocus:function(){var a=this;_.defer(function(){""===a.$el.find("#user").prop("value")?a.$el.find("#user").focus():a.$el.find("#password").focus()})},setSignedInCallback:function(a){this.$el.find("#button").on("click",a)},changeRememberMeCallback:function(a){this.$el.find("#rememberMe").on("change",a)},setRecoverNameCallback:function(a){this.$el.find("#recoverName").on("click",a)},setRecoverPasswordCallback:function(a){this.$el.find("#recoverPassword").on("click",
a)},setSignUpCallback:function(a){this.$el.find(".signup-link a").on("click",a)},setKeyDownSignInActionCallback:function(a,d){this.$el.keydown(function(g){g.which===d.key&&a.call(this)})}})},Qa:function(a,g){return d.bbWrappers.pengoView.PengoView.extend({tagName:"div",attributes:{"class":"mainbarAccountManagerView"},initialize:function(){this.m();this.template=_.template(g.mainbarAccountManager);this.model.set({texts:a.b},{O:q});this.firstRender()},m:function(){this.listenTo(this.model,"change:user",
this.sb,this);this.listenTo(this.model,"change:connStatus",this.zb,this)},l:x(),render:function(){this.$el.html(this.template());this.l();this.addControllerCallbacks();return this},sb:function(){this.$el.find(".toolbar-username").text(this.model.get("user"))},setSignedOutCallback:function(a){this.$el.find(".toolbar-signout i").on("click",a)}})},Ra:function(a,g){return d.bbWrappers.pengoView.PengoView.extend({tagName:"div",attributes:{"class":"accountManagerView modal-form"},initialize:function(){this.m();
this.template=_.template(g.recover);this.model.set({texts:a.b},{O:q});this.firstRender()},m:function(){this.listenTo(this.model,"change:disabled",this.g,this);this.listenTo(this.model,"change:errorCode",this.h,this);this.listenTo(this.model,"change:errorCode",this.u,this)},l:x(),render:function(){this.$el.html(this.template({title:a.b.RecoverPasswordTitle,message:a.b.RecoverPasswordMessage,email:a.b.RecoverPasswordEmail,button:a.b.RecoverPasswordButton}));"game"===a.a.app&&this.$el.addClass("light");
this.h();this.g();this.u();this.l();this.addControllerCallbacks();return this},g:function(){this.$el.find("#email").prop("disabled",this.model.get("disabled"));this.$el.find("#button").prop("disabled",this.model.get("disabled"))},h:function(){this.model.get("errorCode")===f?this.$el.find("#error").text(""):this.$el.find("#error").text(a.A(this.model.get("errorCode")));this.model.get("errorCode")!==f&&this.$el.find("#email").prop("value","")},u:function(){var a=this;_.defer(function(){a.$el.find("#email").focus()})},
recoverCallback:function(a){this.$el.find("#button").on("click",a)},closeCallback:function(a){this.$el.find(".modal-close").on("click",a)},setKeyDownRecoverActionCallback:function(a,d){this.$el.keydown(function(g){g.which===d.key&&a.call(this)})}})},Sa:function(a,g){return d.bbWrappers.pengoView.PengoView.extend({tagName:"div",attributes:{"class":"accountManagerView modal-form"},initialize:function(){this.m();this.template=_.template(g.resetpassword);this.model.set({texts:a.b},{O:q});this.firstRender()},
m:function(){this.listenTo(this.model,"change:disabled",this.g,this);this.listenTo(this.model,"change:errorCode",this.h,this);this.listenTo(this.model,"change:errorCode",this.u,this)},l:x(),render:function(){this.$el.html(this.template({title:a.b.RecoverPasswordTitle,message:a.b.ResetPasswordMessage,password1:a.b.ResetPassword,password2:a.b.ResetPassword2,button:a.b.ResetPasswordButton}));this.h();this.g();this.u();this.l();this.addControllerCallbacks();return this},g:function(){this.$el.find("#email").prop("disabled",
this.model.get("disabled"));this.$el.find("#button").prop("disabled",this.model.get("disabled"))},h:function(){this.$el.find("#error").text(a.A(this.model.get("errorCode")));this.model.get("errorCode")!==f&&this.$el.find("#email").prop("value","")},u:function(){var a=this;_.defer(function(){a.$el.find("#password1").focus()})},resetPasswordCallback:function(a){this.$el.find("#button").on("click",a)},setKeyDownResetPasswordActionCallback:function(a,d){this.$el.keydown(function(g){g.which===d.key&&a.call(this)})}})}}};B("PENGO.client.plugins.accountManager.activator");
(function(){function d(){b.off("SERVICE_REGISTERED",d);A=b.getService("igloo.logger")[0];if(!A||!b.getService("igloo.fatal")[0]||!b.getService("igloo.eventsManager")[0]||!b.getService("languageManager")[0]||!b.getService("uiManager")[0]||!b.getService("stats")[0])b.on("SERVICE_REGISTERED",d);else{m||(m=new p.module(l.templates,l.textsURL));try{m.ib(l.config,c),m.jb(b)}catch(e){b.getService("igloo.fatal")[0].handleFatal({Message:e.message,Source:'Setting plugin "'+b.getPluginId()+'"'})}b.getService("support")[0]&&
m.Z(b.getService("support")[0]);b.on("SERVICE_REGISTERED",a);b.on("SERVICE_UNREGISTERED",g);m.start(h,A,b.getService("igloo.eventsManager")[0],b.getService("languageManager")[0],b.getService("uiManager")[0],b.getService("igloo.fatal")[0],b.getService("stats")[0],function(a){a?b.getService("igloo.fatal")[0].handleFatal({Message:'Error "'+a.message+'" while starting plugin "'+b.getPluginId()+'"',Source:'Starting plugin "'+b.getPluginId()+'"'}):(v={functions:{getErrorMsg:m.A,invalidateSession:m.d.ab,
getSessionId:m.d.va,getUser:m.d.Za,isSignedIn:m.d.eb,isAnonymous:m.d.bb,signIn:m.d.i,signUp:m.d.da,signInBySession:m.d.mb,signInByIdAndPassword:m.d.ba,signInAnonymous:m.d.Fa,signOut:m.d.ca,getSignInViewInfo:m.d.Ta,getSignUpViewInfo:m.d.Wa},properties:{}},b.register(s,v),b.on("SERVICE_UNREGISTERED",n),b.on("SERVICE_UPDATED",t))},this)}}function a(a){"support"===a&&m.Z(b.getService(a)[0])}function g(a){"support"===a&&m.Z(b.getService(a)[0])}function e(c,e){v!==f&&b.unregister(s,v);m!==f&&m.stop();b.off("SERVICE_UNREGISTERED",
n);b.off("SERVICE_UPDATED",t);if(c&&!e)b.on("SERVICE_REGISTERED",d);else b.off("SERVICE_REGISTERED",d);k.remove(l.errorsStore);b.off("SERVICE_REGISTERED",a);b.off("SERVICE_UNREGISTERED",g)}function n(a){switch(a){case "languageManager":if(m.Y(b.getService("languageManager")[0]))return;break;case "stats":if(m.Ea(b.getService(a)[0]))return;break;case "uiManager":if(m.xb(b.getService("uiManager")[0]))return;break;default:return}e(q)}var s="accountManager",b,h,c,k,p,l,A,m,v,t=n;window.PENGO.client.plugins.accountManager.activator.activator=
function(a,g){k=a.pengoError.pengoError.storage;return{start:function(a,e,k,m){b=a;l=e;h=k;p=g;c=m;d()},stop:e}}})();})();