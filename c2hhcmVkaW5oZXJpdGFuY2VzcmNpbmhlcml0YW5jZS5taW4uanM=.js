/** Copyright (c) 2016 WIMI5. All rights reserved. */ (function(){var e=e||{};if("undefined"!==typeof e){var f=["PENGO","shared","inheritance","inheritance"],g=this;!(f[0]in g)&&g.execScript&&g.execScript("var "+f[0]);for(var h;f.length&&(h=f.shift());){var l;if(l=!f.length)l=!1;l?g[h]=void 0:g=g[h]?g[h]:g[h]={}}}
(function(){var m={dependencies:void 0,implementation:{inherits:function(a,c){function d(){}var b=a.prototype;d.prototype=c.prototype;a.prototype=new d;c.prototype.constructor===Object.prototype.constructor&&(c.prototype.constructor=c);for(var k in b)b.hasOwnProperty(k)&&(a.prototype[k]=b[k]);a.prototype.constructor=a;a.super_=c.prototype},inheritsCopy:function(a,c){for(var d in c)a[d]=c[d]},copyPrototypeExtra:function(a,c){var d=c.prototype,b;for(b in d)void 0==a.prototype[b]&&(a.prototype[b]=d[b])},
copyOwnPrototype:function(a,c){var d=c.prototype,b;for(b in d)d.hasOwnProperty(b)&&(a.prototype[b]=d[b])}}};"undefined"!==typeof exports?module.a=m.implementation:window.PENGO.shared.inheritance.inheritance.resolve=function(){return m}})();})();