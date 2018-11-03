/** Copyright (c) 2016 WIMI5. All rights reserved. */ (function(){var l=!0,n=!1,t=this;function v(a){a=a.split(".");var c=t;!(a[0]in c)&&c.execScript&&c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)c=c[d]?c[d]:c[d]={}};v("PENGO.client.shared.file.utils");window.PENGO.client.shared.file.utils.resolve=function(){return{dependencies:void 0,implementation:{extractUrlbase:function(a){a=a.split("/");a.pop();return 1>a.length?"":a.join("/")+"/"},extractFileName:function(a){return a.split("/").pop()},extractExt:function(a){return a.split(".").pop()},normalizeUrl:function(a){for(var c,d;"."==a[0]||"/"==a[0];)a=a.substring(1,a.length);var g=a.split("/");a="";for(c=g.length;0<c;)d=g.pop(),""!=d&&(a=""==a?d:d+"/"+a),c--;return a}}}};v("PENGO.client.shared.file.localFS");
window.PENGO.client.shared.file.localFS.resolve=function(){function a(a){null===g?(g=this,window.requestFileSystem=window.requestFileSystem||window.webkitRequestFileSystem,window.e=window.e||window.webkitStorageInfo,this.k=window.requestFileSystem&&window.e,this.b=void 0,this.d=[],this.a=0,this.c=[],this.m()):a()}function c(a){var b="Error: ";switch(a.code){case FileError.NOT_FOUND_ERR:b+="File or directory not found";break;case FileError.SECURITY_ERR:b+="Insecure or disallowed operation";break;case FileError.ABORT_ERR:b+=
"Operation aborted";break;case FileError.NOT_READABLE_ERR:b+="File or directory not readable";break;case FileError.ENCODING_ERR:b+="Invalid encoding";break;case FileError.NO_MODIFICATION_ALLOWED_ERR:b+="Cannot modify file or directory";break;case FileError.INVALID_STATE_ERR:b+="Invalid state";break;case FileError.SYNTAX_ERR:b+="Invalid line-ending specifier";break;case FileError.INVALID_MODIFICATION_ERR:b+="Invalid modification";break;case FileError.QUOTA_EXCEEDED_ERR:b+="Storage quota exceeded";
break;case FileError.TYPE_MISMATCH_ERR:b+="Invalid filetype";break;case FileError.PATH_EXISTS_ERR:b+="File or directory already exists at specified path";break;default:b+="Unknown Error"}return b}var d,g=null,r=1;a.t=function(){null===g&&(g=new a);if(g.k)return g};a.prototype={q:{l:"ELEMENT TYPE INCORRECT, MUST BE 'FILE' OR 'DIR'"},m:function(){if(0==this.a&&this.k){var a=this;this.a=1;window.e.requestQuota(PERSISTENT,1048576,function(){window.requestFileSystem(window.PERSISTENT,1048576,function(b){a.a=
2;a.b=b;a.g(a.b.root,function(b){if(b){console.log("file system cleared!");for(a.a=2;a.c.length;)b=a.c[0],a.c.splice(0,1),b()}else console.log("file system error clearing!")})},c)},c)}},f:function(a,b){function f(){g.d.push(a);1==g.d.length&&(r++,window.e.requestQuota(PERSISTENT,20971520*r,function(a){if(a<20971520*r)b({code:FileError.QUOTA_EXCEEDED_ERR});else for(;0<g.d.length;)a=g.d[0],g.d.splice(0,1),a()},b))}2!=this.a?this.c.push(f):f()},g:function(a,b){function f(){function f(a){a.createReader().readEntries(function(a){var f=
0,c=a.length;if(0==c)b(l);else for(var d=function(){c--;0==c&&b(l)},f=0;f<a.length;f++)a[f].isFile?a[f].remove(d):a[f].removeRecursively(d,k)},c)}function k(){b(n)}a.isDirectory?f(a):((!a||"/"==a||"."==a||""==a)&&f(d.b.root),d.b.root.getDirectory(a,{create:n},f,k))}var d=this;2!=this.a?this.c.push(f):f()},o:function(a,b,f,s){function m(){function h(a){console.log(c(a));s&&s(a)}d.w.B(b);var m=d.w.C(b);k.i(b,"FILE",function(c){if(c)k.b.root.getFile(b,{create:n},function(a){f({url:b,j:a.toURL(),n:n})},
h);else{var d=function u(){k.b.root.getFile(b,{create:l,r:l},function(c){c.createWriter(function(d){d.onwriteend=function(){f&&(console.log("File copied into LocalFS : "+b),f({url:b,v:c.toURL()}))};d.onerror=function(a){a.currentTarget.error.code==FileError.QUOTA_EXCEEDED_ERR&&c.remove(function(){g.f(function(){u()},h)})};var k;k=a instanceof ArrayBuffer?new Blob([new DataView(a)]):new Blob([a]);d.write(k)},h)},function(a){a.code==FileError.INVALID_MODIFICATION_ERR?k.b.root.getFile(b,{create:n,r:n},
function(a){f({url:b,v:a.toURL(),n:n})},h):a.code==FileError.QUOTA_EXCEEDED_ERR?g.f(u,h):h(a)})};k.h(m,d,function(a){a.code==FileError.PATH_EXISTS_ERR?d():h(a)})}})}var k=this;2!=this.a?this.c.push(m):m()},i:function(a,b,f){function c(){function k(){f(n)}function h(){f&&f(l)}if("FILE"==b)d.b.root.getFile(a,{create:n},h,k);else if("DIR"==b)d.b.root.getDirectory(a,{create:n},h,k);else throw{name:"ERROR_INCORRECT_ELEMENT_TYPE",message:_namespace.z.q.l+" "+a+" "+elementType};}var d=this;2!=this.a?this.c.push(c):
c()},s:function(){},h:function(a,b,c){function d(){function k(a){for(;"."==p||""==p;)if(0<h.length)p=h.splice(0,1);else{b();return}a.getDirectory(p,{create:l},function(a){0<h.length?(p=h.splice(0,1),k(a)):b()},c)}var h=a.split("/"),p=h.splice(0,1);k(g.b.root)}var g=this;2!=this.a?this.c.push(d):d()},getFile:function(a,b,d,c){function g(){function h(a){if(c)c(a);else throw a;}k.b.root.getFile(a,{create:n},function(a){a.file(function(a){var c=new FileReader;c.onload=function(a){d(a.target.result)};
switch(b){case "text":c.readAsText(a);break;case "arraybuffer":c.readAsArrayBuffer(a);break;case "binaryString":c.readAsBinaryString(a);break;default:c.readAsDataURL(a)}},h)},h)}var k=this;2!=this.a?this.c.push(g):g()},u:function(a){function b(){window.webkitStorageInfo.queryUsageAndQuota(PERSISTENT,a,function(a){console.log(c(a))})}2!=this.a?this.c.push(b):b()}};a.prototype.requestSpace=a.prototype.f;a.prototype.clearDir=a.prototype.g;a.prototype.copyToLocal=a.prototype.o;a.prototype.isInLocal=a.prototype.i;
a.prototype.getFSDescription=a.prototype.s;a.prototype.createDir=a.prototype.h;a.prototype.getFile=a.prototype.getFile;a.prototype.getUsedQuota=a.prototype.u;return{dependencies:function(a){d=a.pengoFile},implementation:a}};v("PENGO.client.shared.file.loader");
window.PENGO.client.shared.file.loader.resolve=function(){function a(){window.URL=window.URL||window.webkitURL;this.p=new Blob(["self.onmessage = function (oEvent) {\tswitch ( oEvent.data.cmd ) {\t\tcase 'load':\t\t\ttry {\t\t\t\tvar xhr = new XMLHttpRequest();\t\t\t\txhr.onload = function(){\t\t\t\t\tif ( xhr.status == 200 || xhr.status == 0 ) {\t\t\t\t\t\tpostMessage( {file: xhr.response} );\t\t\t\t\t} else {\t\t\t\t\t\tpostMessage( { error: 'Could not load [' + oEvent.data.url + '] [' + xhr.status + ']' } );\t\t\t\t\t}\t\t\t\t};\t\t\t\txhr.onerror = function(e){ postMessage( {error: 'ERROR: XHR Error ' + e.toString()} );}; \t\t\t\txhr.open('GET', oEvent.data.url, true);\t\t\t\txhr.responseType = oEvent.data.type;\t\t\t\txhr.send(null);\t\t\t} catch(e) {\t\t\t\tpostMessage( { error: 'ERROR: XHR Error ' + e.toString() } );\t\t\t}\t\t\tbreak;\t\tcase 'stop':\t\t\tself.close();\t\t\tbreak;\t\tdefault: break;\t}};"],{type:"text/css"})}
var c=null;a.t=function(){null===c&&(c=new a);return c};a.prototype={load:function(a,c,r,q,b){function f(){m=new Worker(URL.createObjectURL(s.p));m.postMessage({A:"load",url:a,type:c});m.onmessage=function(b){b.data.error&&m.terminate();b.data.file&&q&&q({data:b.data.file,url:a,j:""})}}var s=this,m;b?q&&q({url:a,j:a,data:b}):f()},save:function(){}};a.prototype.load=a.prototype.load;a.prototype.save=a.prototype.save;return{dependencies:function(){},implementation:{Loader:a}}};})();