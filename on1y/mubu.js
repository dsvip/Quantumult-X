/******************************

脚本功能：幕布-大纲笔记+解锁VIP
下载地址：https://is.gd/cYAsgT
软件版本：2.28.4
脚本作者：彭于晏💞
更新时间：2022-10-9
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/api2.mubu.com\/v3\/api\/user/* url script-response-body https://raw.githubusercontent.com/dsvip/Quantumult-X/main/on1y/mubu.js

[mitm] 

hostname = api2.mubu.com

*******************************/

const _0x21b1=['\x49\x57\x35\x39\x77\x70\x4c\x43\x6b\x30\x4e\x4e\x77\x35\x58\x44\x6f\x63\x4b\x5a\x46\x63\x4f\x77\x77\x72\x78\x69\x46\x73\x4b\x68\x61\x73\x4b\x78\x46\x79\x4e\x71\x77\x72\x72\x43\x70\x4d\x4b\x2b','\x77\x72\x55\x4f\x4e\x4d\x4f\x39','\x77\x34\x63\x33\x41\x4d\x4f\x4b','\x77\x35\x42\x71\x77\x36\x49\x56\x66\x77\x3d\x3d','\x77\x36\x6a\x43\x6e\x63\x4b\x57\x77\x35\x46\x30','\x4c\x38\x4f\x50\x77\x36\x56\x62\x77\x72\x62\x43\x6b\x63\x4f\x75','\x35\x62\x36\x62\x35\x4c\x71\x76\x35\x70\x75\x47\x36\x4b\x61\x73\x36\x5a\x53\x50','\x77\x6f\x68\x6f\x4d\x73\x4b\x67\x77\x71\x30\x64','\x77\x36\x74\x32\x54\x58\x31\x55\x77\x34\x44\x43\x6c\x73\x4b\x43\x4d\x77\x3d\x3d','\x77\x36\x50\x44\x67\x56\x51\x6c','\x77\x71\x72\x44\x6f\x73\x4f\x2b\x44\x41\x3d\x3d','\x47\x69\x6c\x34\x54\x73\x4f\x74\x77\x36\x6e\x44\x6d\x4d\x4f\x6b','\x61\x47\x34\x31\x77\x71\x50\x44\x6d\x51\x3d\x3d','\x77\x72\x73\x49\x4b\x73\x4b\x46\x77\x34\x4d\x3d','\x77\x70\x74\x45\x77\x37\x6f\x38\x62\x38\x4f\x4f\x49\x51\x3d\x3d','\x41\x73\x4b\x74\x49\x56\x6f\x3d','\x53\x38\x4f\x44\x49\x38\x4f\x36','\x65\x6d\x55\x6e\x47\x4d\x4f\x76\x48\x77\x3d\x3d','\x35\x62\x2b\x75\x35\x4c\x75\x41\x35\x70\x6d\x4a\x36\x4b\x57\x49\x36\x5a\x57\x32','\x77\x72\x51\x64\x4d\x73\x4f\x7a\x77\x70\x51\x3d','\x43\x73\x4f\x72\x57\x38\x4b\x67','\x77\x35\x7a\x43\x76\x63\x4f\x7a\x44\x32\x4d\x33\x77\x71\x6e\x43\x73\x63\x4f\x4a\x53\x44\x6f\x3d','\x54\x43\x2f\x44\x73\x4d\x4b\x62','\x49\x63\x4f\x52\x4b\x38\x4b\x2f\x77\x71\x5a\x6a\x48\x73\x4b\x38\x4b\x42\x30\x55\x77\x72\x59\x50\x77\x72\x51\x62\x58\x63\x4b\x4c\x77\x71\x72\x43\x6b\x46\x6c\x6e'];(function(_0x5a22ba,_0x21b1bd){const _0x30316e=function(_0x15166c){while(--_0x15166c){_0x5a22ba['push'](_0x5a22ba['shift']());}};const _0x375217=function(){const _0x106d8c={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0xfbc5d3,_0x212d6c,_0x438211,_0x3e69c6){_0x3e69c6=_0x3e69c6||{};let _0x1446db=_0x212d6c+'='+_0x438211;let _0x27e96a=0x0;for(let _0x28a2ec=0x0,_0x2491b9=_0xfbc5d3['length'];_0x28a2ec<_0x2491b9;_0x28a2ec++){const _0x38a0aa=_0xfbc5d3[_0x28a2ec];_0x1446db+=';\x20'+_0x38a0aa;const _0x510ccc=_0xfbc5d3[_0x38a0aa];_0xfbc5d3['push'](_0x510ccc);_0x2491b9=_0xfbc5d3['length'];if(_0x510ccc!==!![]){_0x1446db+='='+_0x510ccc;}}_0x3e69c6['cookie']=_0x1446db;},'removeCookie':function(){return'dev';},'getCookie':function(_0x4ccc6d,_0x1765f3){_0x4ccc6d=_0x4ccc6d||function(_0x3c0464){return _0x3c0464;};const _0x1a7f7e=_0x4ccc6d(new RegExp('(?:^|;\x20)'+_0x1765f3['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));const _0x3bcaa7=function(_0xd6f287,_0x257e52){_0xd6f287(++_0x257e52);};_0x3bcaa7(_0x30316e,_0x21b1bd);return _0x1a7f7e?decodeURIComponent(_0x1a7f7e[0x1]):undefined;}};const _0x2a8a01=function(){const _0x20802a=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x20802a['test'](_0x106d8c['removeCookie']['toString']());};_0x106d8c['updateCookie']=_0x2a8a01;let _0xce004f='';const _0x203d96=_0x106d8c['updateCookie']();if(!_0x203d96){_0x106d8c['setCookie'](['*'],'counter',0x1);}else if(_0x203d96){_0xce004f=_0x106d8c['getCookie'](null,'counter');}else{_0x106d8c['removeCookie']();}};_0x375217();}(_0x21b1,0x1de));const _0x3031=function(_0x5a22ba,_0x21b1bd){_0x5a22ba=_0x5a22ba-0x0;let _0x30316e=_0x21b1[_0x5a22ba];if(_0x3031['BlGRzy']===undefined){(function(){const _0x106d8c=function(){let _0x203d96;try{_0x203d96=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0xfbc5d3){_0x203d96=window;}return _0x203d96;};const _0x2a8a01=_0x106d8c();const _0xce004f='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x2a8a01['atob']||(_0x2a8a01['atob']=function(_0x212d6c){const _0x438211=String(_0x212d6c)['replace'](/=+$/,'');let _0x3e69c6='';for(let _0x1446db=0x0,_0x27e96a,_0x28a2ec,_0x2491b9=0x0;_0x28a2ec=_0x438211['charAt'](_0x2491b9++);~_0x28a2ec&&(_0x27e96a=_0x1446db%0x4?_0x27e96a*0x40+_0x28a2ec:_0x28a2ec,_0x1446db++%0x4)?_0x3e69c6+=String['fromCharCode'](0xff&_0x27e96a>>(-0x2*_0x1446db&0x6)):0x0){_0x28a2ec=_0xce004f['indexOf'](_0x28a2ec);}return _0x3e69c6;});}());const _0x15166c=function(_0x38a0aa,_0x510ccc){let _0x4ccc6d=[],_0x1765f3=0x0,_0x1a7f7e,_0x3bcaa7='',_0x3c0464='';_0x38a0aa=atob(_0x38a0aa);for(let _0x257e52=0x0,_0x20802a=_0x38a0aa['length'];_0x257e52<_0x20802a;_0x257e52++){_0x3c0464+='%'+('00'+_0x38a0aa['charCodeAt'](_0x257e52)['toString'](0x10))['slice'](-0x2);}_0x38a0aa=decodeURIComponent(_0x3c0464);let _0xd6f287;for(_0xd6f287=0x0;_0xd6f287<0x100;_0xd6f287++){_0x4ccc6d[_0xd6f287]=_0xd6f287;}for(_0xd6f287=0x0;_0xd6f287<0x100;_0xd6f287++){_0x1765f3=(_0x1765f3+_0x4ccc6d[_0xd6f287]+_0x510ccc['charCodeAt'](_0xd6f287%_0x510ccc['length']))%0x100;_0x1a7f7e=_0x4ccc6d[_0xd6f287];_0x4ccc6d[_0xd6f287]=_0x4ccc6d[_0x1765f3];_0x4ccc6d[_0x1765f3]=_0x1a7f7e;}_0xd6f287=0x0;_0x1765f3=0x0;for(let _0x179203=0x0;_0x179203<_0x38a0aa['length'];_0x179203++){_0xd6f287=(_0xd6f287+0x1)%0x100;_0x1765f3=(_0x1765f3+_0x4ccc6d[_0xd6f287])%0x100;_0x1a7f7e=_0x4ccc6d[_0xd6f287];_0x4ccc6d[_0xd6f287]=_0x4ccc6d[_0x1765f3];_0x4ccc6d[_0x1765f3]=_0x1a7f7e;_0x3bcaa7+=String['fromCharCode'](_0x38a0aa['charCodeAt'](_0x179203)^_0x4ccc6d[(_0x4ccc6d[_0xd6f287]+_0x4ccc6d[_0x1765f3])%0x100]);}return _0x3bcaa7;};_0x3031['DBEcPS']=_0x15166c;_0x3031['ffoYxy']={};_0x3031['BlGRzy']=!![];}const _0x375217=_0x3031['ffoYxy'][_0x5a22ba];if(_0x375217===undefined){if(_0x3031['yokuEk']===undefined){const _0x44a814=function(_0x5dc9a6){this['wVvNAB']=_0x5dc9a6;this['UdsCbt']=[0x1,0x0,0x0];this['yWkRzZ']=function(){return'newState';};this['PMgEAn']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['awPLoM']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x44a814['prototype']['LEKhco']=function(){const _0x38564b=new RegExp(this['PMgEAn']+this['awPLoM']);const _0x5708ff=_0x38564b['test'](this['yWkRzZ']['toString']())?--this['UdsCbt'][0x1]:--this['UdsCbt'][0x0];return this['ExISES'](_0x5708ff);};_0x44a814['prototype']['ExISES']=function(_0x290b06){if(!Boolean(~_0x290b06)){return _0x290b06;}return this['sHxdpl'](this['wVvNAB']);};_0x44a814['prototype']['sHxdpl']=function(_0x30a64b){for(let _0x87bb0a=0x0,_0x4fda07=this['UdsCbt']['length'];_0x87bb0a<_0x4fda07;_0x87bb0a++){this['UdsCbt']['push'](Math['round'](Math['random']()));_0x4fda07=this['UdsCbt']['length'];}return _0x30a64b(this['UdsCbt'][0x0]);};new _0x44a814(_0x3031)['LEKhco']();_0x3031['yokuEk']=!![];}_0x30316e=_0x3031['DBEcPS'](_0x30316e,_0x21b1bd);_0x3031['ffoYxy'][_0x5a22ba]=_0x30316e;}else{_0x30316e=_0x375217;}return _0x30316e;};const _0x1701a8=function(){let _0x247636=!![];return function(_0x553bb0,_0x3d68d4){const _0x1f656b=_0x247636?function(){if(_0x3d68d4){const _0x6406d7=_0x3d68d4[_0x3031('\x30\x78\x36','\x4c\x30\x4d\x79')](_0x553bb0,arguments);_0x3d68d4=null;return _0x6406d7;}}:function(){};_0x247636=![];return _0x1f656b;};}();const _0x5c2398=_0x1701a8(this,function(){const _0x483813=function(){const _0xf64b4=_0x483813[_0x3031('\x30\x78\x31\x37','\x55\x6d\x75\x55')](_0x3031('\x30\x78\x31','\x4e\x57\x24\x36'))()[_0x3031('\x30\x78\x37','\x21\x4b\x57\x77')](_0x3031('\x30\x78\x32','\x33\x61\x79\x35'));return!_0xf64b4[_0x3031('\x30\x78\x62','\x52\x39\x7a\x43')](_0x5c2398);};return _0x483813();});_0x5c2398();let _0x24b339=$response['\x62\x6f\x64\x79'];console['\x6c\x6f\x67'](_0x24b339);try{let _0x57ad26=JSON[_0x3031('\x30\x78\x66','\x4d\x52\x75\x33')](_0x24b339);if(_0x57ad26[_0x3031('\x30\x78\x31\x36','\x59\x76\x79\x70')]==0x0&&_0x57ad26[_0x3031('\x30\x78\x30','\x74\x48\x2a\x23')]){_0x57ad26[_0x3031('\x30\x78\x33','\x56\x5b\x78\x62')][_0x3031('\x30\x78\x31\x33','\x41\x46\x44\x4b')]=!![];_0x57ad26[_0x3031('\x30\x78\x31\x31','\x25\x5a\x4c\x6f')][_0x3031('\x30\x78\x65','\x50\x63\x29\x43')]=0x1;_0x57ad26[_0x3031('\x30\x78\x63','\x42\x5b\x50\x42')]['\x76\x69\x70\x45\x6e\x64\x44\x61\x74\x65']=_0x3031('\x30\x78\x64','\x44\x79\x76\x48');_0x57ad26[_0x3031('\x30\x78\x31\x32','\x2a\x64\x78\x42')]['\x6e\x61\x6d\x65']=_0x3031('\x30\x78\x38','\x47\x40\x4f\x48');_0x57ad26[_0x3031('\x30\x78\x34','\x76\x7a\x4c\x30')][_0x3031('\x30\x78\x39','\x71\x33\x74\x6c')]=_0x3031('\x30\x78\x31\x34','\x38\x65\x7a\x23');_0x24b339=JSON[_0x3031('\x30\x78\x61','\x6b\x61\x26\x57')](_0x57ad26);}}catch(_0x5fc24f){console[_0x3031('\x30\x78\x35','\x5e\x4a\x5d\x37')](__name,_0x3031('\x30\x78\x31\x35','\x56\x5b\x78\x62'),_0x5fc24f[_0x3031('\x30\x78\x31\x30','\x47\x40\x4f\x48')]);}$done(_0x24b339);
