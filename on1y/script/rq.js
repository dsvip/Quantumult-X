/******************************

脚本功能：如期-扫码记录保质期+解锁VIP
下载地址：http://mtw.so/6bJqgR
软件版本：1.5.3
脚本作者：彭于晏
更新时间：2022-9-6
问题反馈：QQ+89996462
TG群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https:\/\/www\.freshhome\.top\/mngruqi url script-response-body https://raw.githubusercontent.com/dsvip/Quantumult-X/main/on1y/rq.js

[mitm] 
hostname = www.freshhome.top

*******************************/

var _0x2216=['wqzCssO4woQ=','w78GwrPDvMOJO8ODdDQ=','w4BCwrZnWw==','ejjCkzPCqQNY','5byR5Lm65pm46KaM6ZWo','woDCrCxidcK1OFQ=','w5DCr0QjYw==','cXha','wprCjQVoEFbDmsOlMVs=','w6fDqsOJRMKcwr/DgcK/'];(function(_0xd8442c,_0x221618){var _0x42a3b3=function(_0x318bfd){while(--_0x318bfd){_0xd8442c['push'](_0xd8442c['shift']());}};_0x42a3b3(++_0x221618);}(_0x2216,0x9c));var _0x42a3=function(_0xd8442c,_0x221618){_0xd8442c=_0xd8442c-0x0;var _0x42a3b3=_0x2216[_0xd8442c];if(_0x42a3['ZmQkMT']===undefined){(function(){var _0x2aa169;try{var _0x40bdcd=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x2aa169=_0x40bdcd();}catch(_0x13dffb){_0x2aa169=window;}var _0x38e4b6='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2aa169['atob']||(_0x2aa169['atob']=function(_0x35b2d5){var _0x454253=String(_0x35b2d5)['replace'](/=+$/,'');var _0x3144bd='';for(var _0x2dafeb=0x0,_0x5abee8,_0x4aef4e,_0x8c89f4=0x0;_0x4aef4e=_0x454253['charAt'](_0x8c89f4++);~_0x4aef4e&&(_0x5abee8=_0x2dafeb%0x4?_0x5abee8*0x40+_0x4aef4e:_0x4aef4e,_0x2dafeb++%0x4)?_0x3144bd+=String['fromCharCode'](0xff&_0x5abee8>>(-0x2*_0x2dafeb&0x6)):0x0){_0x4aef4e=_0x38e4b6['indexOf'](_0x4aef4e);}return _0x3144bd;});}());var _0x3d3a97=function(_0x16065e,_0x580a34){var _0x28372a=[],_0x9e217e=0x0,_0x3b78ca,_0x114598='',_0x3d53c0='';_0x16065e=atob(_0x16065e);for(var _0x47609f=0x0,_0x5dcd1d=_0x16065e['length'];_0x47609f<_0x5dcd1d;_0x47609f++){_0x3d53c0+='%'+('00'+_0x16065e['charCodeAt'](_0x47609f)['toString'](0x10))['slice'](-0x2);}_0x16065e=decodeURIComponent(_0x3d53c0);var _0x402061;for(_0x402061=0x0;_0x402061<0x100;_0x402061++){_0x28372a[_0x402061]=_0x402061;}for(_0x402061=0x0;_0x402061<0x100;_0x402061++){_0x9e217e=(_0x9e217e+_0x28372a[_0x402061]+_0x580a34['charCodeAt'](_0x402061%_0x580a34['length']))%0x100;_0x3b78ca=_0x28372a[_0x402061];_0x28372a[_0x402061]=_0x28372a[_0x9e217e];_0x28372a[_0x9e217e]=_0x3b78ca;}_0x402061=0x0;_0x9e217e=0x0;for(var _0x368fe3=0x0;_0x368fe3<_0x16065e['length'];_0x368fe3++){_0x402061=(_0x402061+0x1)%0x100;_0x9e217e=(_0x9e217e+_0x28372a[_0x402061])%0x100;_0x3b78ca=_0x28372a[_0x402061];_0x28372a[_0x402061]=_0x28372a[_0x9e217e];_0x28372a[_0x9e217e]=_0x3b78ca;_0x114598+=String['fromCharCode'](_0x16065e['charCodeAt'](_0x368fe3)^_0x28372a[(_0x28372a[_0x402061]+_0x28372a[_0x9e217e])%0x100]);}return _0x114598;};_0x42a3['KjpZLa']=_0x3d3a97;_0x42a3['qpErKp']={};_0x42a3['ZmQkMT']=!![];}var _0x318bfd=_0x42a3['qpErKp'][_0xd8442c];if(_0x318bfd===undefined){if(_0x42a3['uoKTsL']===undefined){_0x42a3['uoKTsL']=!![];}_0x42a3b3=_0x42a3['KjpZLa'](_0x42a3b3,_0x221618);_0x42a3['qpErKp'][_0xd8442c]=_0x42a3b3;}else{_0x42a3b3=_0x318bfd;}return _0x42a3b3;};var body=$response[_0x42a3('0x4','t%sB')];var url=$request[_0x42a3('0x1','v&rd')];var obj=JSON[_0x42a3('0x0','q9E(')](body);const vip=_0x42a3('0x3','j1*b');if(url[_0x42a3('0x7','9cKc')](vip)!=-0x1){obj[_0x42a3('0x6','ezFH')]='1';obj[_0x42a3('0x2','x3U%')]=0x211d1ae38;obj['vipType']=!![];obj[_0x42a3('0x9','s@mM')]=_0x42a3('0x8','47Aa');body=JSON[_0x42a3('0x5',')ID)')](obj);}$done({'body':body});
