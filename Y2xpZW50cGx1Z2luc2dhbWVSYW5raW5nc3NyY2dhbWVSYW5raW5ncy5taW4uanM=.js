/** Copyright (c) 2016 WIMI5. All rights reserved. */ (function(){var g=void 0,r=this;function x(c){c=c.split(".");var e=r;!(c[0]in e)&&e.execScript&&e.execScript("var "+c[0]);for(var a;c.length&&(a=c.shift());)e=e[a]?e[a]:e[a]={}};x("PENGO.client.plugins.gameRankings.module");
window.PENGO.client.plugins.gameRankings.module.resolve=function(c,e){function a(){this.k=this.j=this.m=g;this.i={};this.l={OK:0,KO:-1,USER_KO:-2};this.F=function(){}}var p=c.util.callback,n=c.pengoError.pengoError.StoredPengoError,m={};a.prototype={B:function(a,e){this.m=a;if(e===g)throw new n(this.m,"mod:conf#1");this.i.remoteEditionService=e.remoteEditionService;this.i.remoteExecutionService=e.remoteExecutionService},h:function(e,a,h){this.k!==e&&(this.k=e,p.call(a,h))},o:function(e){if(this.g!==
e){if(this.g)try{this.g.removeEvents(m)}catch(a){this.j.warn("Error "+a+" while removing events when changing events manager")}(this.g=e)&&this.g.registerEvents(m)}return this.g!==g},start:function(a,c,h,b,d){this.j=a;this.h(c,function(a){a||(this.o(h),this.f=new e.controller(this.i,this.k,this));p.call(b,d,a)},this)},stop:function(){this.f=g;this.o(g);this.h(g);this.j=g}};return a};x("PENGO.client.plugins.gameRankings.model");window.PENGO.client.plugins.gameRankings.model.resolve=function(){function c(){}c.prototype={};return c};x("PENGO.client.plugins.gameRankings.errors");window.PENGO.client.plugins.gameRankings.errors.resolve=function(c){return{D:g,q:{"mod:conf#1":{msg:!1,code:c.pengoError.codes.codes.NOT_FOUND}}}};x("PENGO.client.plugins.gameRankings.controller");
window.PENGO.client.plugins.gameRankings.controller.resolve=function(c){var e=c.util.callback;return function(a,c,n){var m,s;a.remoteEditionService&&(m=c.getServiceProtocolConstants(a.remoteEditionService));a.remoteExecutionService&&(s=c.getServiceProtocolConstants(a.remoteExecutionService));var q={s:function(){return m},n:function(h,b,d,l){c.call(a.remoteEditionService,"readCfg",{gameIds:h,fields:b},g,function(b,a){e.call(d,l,b,a)},this)},r:function(a,b,d){q.n([a],{columns:1},function(a,f){var c=
{};a?e.call(b,d,a,g):(f.result==m.results.OK?(c.result=n.l.OK,c.columns=f.data[0].columns):c.result=n.l.KO,e.call(b,d,a,c))},this)},C:function(h,b,d,l){c.call(a.remoteEditionService,"updateCfgShowMenuBtn",{gameId:h,value:b},g,function(b,a){e.call(d,l,b,a)},this)},w:function(h,b,d){c.call(a.remoteEditionService,"getTexts",{lang:h},g,function(a,c){e.call(b,d,a,c)},this)},t:function(){return s},v:function(h,b,d){c.call(a.remoteExecutionService,"c",{a:h},g,function(a,c){e.call(b,d,a,c)},this)},u:function(h,
b,d,l,f){c.call(a.remoteExecutionService,"d",{a:h,b:b,c:d},g,function(a,b){e.call(l,f,a,b)},this)},p:function(h,b,d,l,f){c.call(a.remoteExecutionService,"e",{a:h,b:b,c:d},g,function(a,b){e.call(l,f,a,b)},this)},A:function(h,b,d,l){c.call(a.remoteExecutionService,"b",{a:h,b:b},g,function(a,b){e.call(d,l,a,b)},this)},z:function(h,b,d){c.call(a.remoteExecutionService,"a",{a:h},g,function(a,c){e.call(b,d,a,c)},this)}};return q}};x("PENGO.client.plugins.gameRankings.activator");
(function(){function c(b){if(d.config.remoteEditionService&&b===d.config.remoteEditionService||d.config.remoteExecutionService&&b===d.config.remoteExecutionService)f.off("REMOTE_SERVICE_AVAILABLE",c),a()}function e(a){if(d.config.remoteEditionService&&a===d.config.remoteEditionService||d.config.remoteExecutionService&&a===d.config.remoteExecutionService)f.off("REMOTE_SERVICE_UNAVAILABLE",e),p(!0,!0)}function a(){b.off("SERVICE_REGISTERED",a);l=b.getService("igloo.logger")[0];f=b.getService("net")[0];
if(!l||!f||!b.getService("igloo.fatal")[0]||!b.getService("igloo.eventsManager")[0])b.on("SERVICE_REGISTERED",a);else if(d.config.remoteEditionService&&!f.isServiceAvailable(d.config.remoteEditionService)||d.config.remoteExecutionService&&!f.isServiceAvailable(d.config.remoteExecutionService))f.on("REMOTE_SERVICE_AVAILABLE",c);else{f.on("REMOTE_SERVICE_UNAVAILABLE",e);k===g&&(k=new q.module);try{k.B(d.config.errorsStore,d.config)}catch(h){b.getService("igloo.fatal")[0].handleFatal({Message:h.message,
Source:'Setting plugin "'+b.getPluginId()+'"'});return}q.errors.D=d.config.errorsStore;k.start(l,f,b.getService("igloo.eventsManager")[0],function(a){a?b.getService("igloo.fatal")[0].handleFatal({Message:a.message,Source:'Starting plugin "'+b.getPluginId()+'"'}):(d.config.remoteEditionService&&(u={functions:{get:k.f.n,getColumns:k.f.r,setShowMenuButton:k.f.C,getProtocolConstants:k.f.s,getServerTexts:k.f.w},properties:{}},b.register(m,u)),d.config.remoteExecutionService&&(t={functions:{a:k.f.v,b:k.f.u,
c:k.f.p,d:k.f.A,e:k.f.z,getProtocolConstants:k.f.t},properties:{}},b.register(s,t)),b.on("SERVICE_UNREGISTERED",n),b.on("SERVICE_UPDATED",w))},this)}}function p(l,v){u!==g&&b.unregister(m,u);t!==g&&b.unregister(s,t);k!==g&&k.stop();if(f!==g)if(!l||!v)f.off("REMOTE_SERVICE_AVAILABLE",c),f.off("REMOTE_SERVICE_UNAVAILABLE",e);else if(v)f.on("REMOTE_SERVICE_AVAILABLE",c);b.off("SERVICE_UNREGISTERED",n);b.off("SERVICE_UPDATED",w);if(l&&!v)b.on("SERVICE_REGISTERED",a);else b.off("SERVICE_REGISTERED",a);
h.remove(d.config.errorsStore)}function n(a){switch(a){case "net":if(b.getService("net")[0]!==f&&(f!==g&&(f.off("REMOTE_SERVICE_UNAVAILABLE",e),f.off("REMOTE_SERVICE_AVAILABLE",c)),k.h(g),f=b.getService("net")[0],f!==g)){if(d.config.remoteEditionService&&f.isServiceAvailable(d.config.remoteEditionService)||d.config.remoteExecutionService&&f.isServiceAvailable(d.config.remoteExecutionService))k.h(f,function(c){if(c)b.getService("igloo.fatal")[0].handleFatal({Message:c.message,Source:'When unregistered service "'+
a+'", plugin: "'+b.getPluginId()+'"'});else f.on("REMOTE_SERVICE_UNAVAILABLE",e)});else f.on("REMOTE_SERVICE_AVAILABLE",c);return}break;default:return}p(!0)}var m="gameRankings.edition",s="gameRankings.execution",q,h,b,d,l,f,k,t,u,w=n;window.PENGO.client.plugins.gameRankings.activator.activator=function(c,e){h=c.pengoError.pengoError.storage;return{start:function(c,f){b=c;d=f;q=e;h.add(f.config.errorsStore,e.errors.q);a()},stop:p}}})();})();
