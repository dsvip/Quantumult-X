/******************************

脚本功能：MoneyThings—记账+解锁订阅
下载地址：http://mtw.so/6rEaBQ
软件版本：9.3.3
脚本作者：彭于晏💞
更新时间：2022-9-29
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/MoneyThings.js

[mitm] 

hostname = api.revenuecat.com

*******************************/


var _0x3aa9=['w7PCgMOZbcKcw5BxXsOP','NMKBeg==','V8OlEA/Di8OYw7bCjUY=','SgjCkMKBwq8lw7LCo8OOScKZw5LDgMOmHSHCuMO6wosswqkZw6VaGk5vT8Ofw6DDr14+JMOMcsKbXsKEDMKDwpjCp8Kc','RR0tIUxLfsKBwrLDj2nCgMKkwqFFw6sUwrjCi8Kg','DsOnw4tnw6zClA==','MsOWKcKwwo4ibHjDsw==','AsOnw51z','wpPDmsKswoheUMOGCxljwq9zwr4Lw70SwroDPDM=','KX7DrsKWWDTDpnXDl8KEwpTDnsO9VjnClhPCn8Oaw60=','wr/DhnrCpGPDoMKnCwzDqjDDgcOAwoXDj8KRwohl','wrbDj0MfSsOcXMOuwpnDmF7CrUrDiB/DtCgV','w5YKwqJaEgpPDiVzw6wuB2c5UsKBwq/CqmA=','w74OIQQ8','I8OiAQ3DrcO2w4vCsW/CiQDChXnDisO1FxI/wrweacKgDG9ww4NDw74WUcOJWwLCq8K0JcOcw5HCusOXZHw+w5wxZMK/'];(function(_0x2b0e3f,_0x3aa989){var _0x50b13f=function(_0xd4b311){while(--_0xd4b311){_0x2b0e3f['push'](_0x2b0e3f['shift']());}};_0x50b13f(++_0x3aa989);}(_0x3aa9,0x119));var _0x50b1=function(_0x2b0e3f,_0x3aa989){_0x2b0e3f=_0x2b0e3f-0x0;var _0x50b13f=_0x3aa9[_0x2b0e3f];if(_0x50b1['wLbWRv']===undefined){(function(){var _0xcb7592=function(){var _0x1de2d5;try{_0x1de2d5=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');')();}catch(_0x399142){_0x1de2d5=window;}return _0x1de2d5;};var _0xf648ec=_0xcb7592();var _0x314d44='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xf648ec['atob']||(_0xf648ec['atob']=function(_0x380a55){var _0x5d1d82=String(_0x380a55)['replace'](/=+$/,'');var _0x4e5354='';for(var _0x4cbe3b=0x0,_0x39ba6f,_0x2757c3,_0x3e44ec=0x0;_0x2757c3=_0x5d1d82['charAt'](_0x3e44ec++);~_0x2757c3&&(_0x39ba6f=_0x4cbe3b%0x4?_0x39ba6f*0x40+_0x2757c3:_0x2757c3,_0x4cbe3b++%0x4)?_0x4e5354+=String['fromCharCode'](0xff&_0x39ba6f>>(-0x2*_0x4cbe3b&0x6)):0x0){_0x2757c3=_0x314d44['indexOf'](_0x2757c3);}return _0x4e5354;});}());var _0x517a88=function(_0x34fa7f,_0xcf15e1){var _0x1d54df=[],_0xf0c9db=0x0,_0x44dea,_0xd5f249='',_0x41aae9='';_0x34fa7f=atob(_0x34fa7f);for(var _0x56a781=0x0,_0x424a6d=_0x34fa7f['length'];_0x56a781<_0x424a6d;_0x56a781++){_0x41aae9+='%'+('00'+_0x34fa7f['charCodeAt'](_0x56a781)['toString'](0x10))['slice'](-0x2);}_0x34fa7f=decodeURIComponent(_0x41aae9);var _0x2d7ed9;for(_0x2d7ed9=0x0;_0x2d7ed9<0x100;_0x2d7ed9++){_0x1d54df[_0x2d7ed9]=_0x2d7ed9;}for(_0x2d7ed9=0x0;_0x2d7ed9<0x100;_0x2d7ed9++){_0xf0c9db=(_0xf0c9db+_0x1d54df[_0x2d7ed9]+_0xcf15e1['charCodeAt'](_0x2d7ed9%_0xcf15e1['length']))%0x100;_0x44dea=_0x1d54df[_0x2d7ed9];_0x1d54df[_0x2d7ed9]=_0x1d54df[_0xf0c9db];_0x1d54df[_0xf0c9db]=_0x44dea;}_0x2d7ed9=0x0;_0xf0c9db=0x0;for(var _0x1a3c87=0x0;_0x1a3c87<_0x34fa7f['length'];_0x1a3c87++){_0x2d7ed9=(_0x2d7ed9+0x1)%0x100;_0xf0c9db=(_0xf0c9db+_0x1d54df[_0x2d7ed9])%0x100;_0x44dea=_0x1d54df[_0x2d7ed9];_0x1d54df[_0x2d7ed9]=_0x1d54df[_0xf0c9db];_0x1d54df[_0xf0c9db]=_0x44dea;_0xd5f249+=String['fromCharCode'](_0x34fa7f['charCodeAt'](_0x1a3c87)^_0x1d54df[(_0x1d54df[_0x2d7ed9]+_0x1d54df[_0xf0c9db])%0x100]);}return _0xd5f249;};_0x50b1['xUlmNl']=_0x517a88;_0x50b1['vHDtaR']={};_0x50b1['wLbWRv']=!![];}var _0xd4b311=_0x50b1['vHDtaR'][_0x2b0e3f];if(_0xd4b311===undefined){if(_0x50b1['cxmiiE']===undefined){_0x50b1['cxmiiE']=!![];}_0x50b13f=_0x50b1['xUlmNl'](_0x50b13f,_0x3aa989);_0x50b1['vHDtaR'][_0x2b0e3f]=_0x50b13f;}else{_0x50b13f=_0xd4b311;}return _0x50b13f;};var objc=JSON[_0x50b1('0x2','CmNh')]($response[_0x50b1('0xb','7@vP')]);objc={'request_date':_0x50b1('0xc','Psmm'),'request_date_ms':0x183305a8d19,'subscriber':{'entitlements':{'Premium':{'expires_date':_0x50b1('0x0','m5Yw'),'grace_period_expires_date':null,'product_identifier':'com.lishaohui.cashflow.monthlysubscription','purchase_date':'2022-09-12T06:06:52Z'}},'first_seen':'2022-08-10T05:38:55Z','last_seen':_0x50b1('0x1','G(0y'),'management_url':_0x50b1('0x7','Z6J4'),'non_subscriptions':{},'original_app_user_id':_0x50b1('0x3','h#HE'),'original_application_version':_0x50b1('0x5','h#HE'),'original_purchase_date':_0x50b1('0x8','#D4L'),'other_purchases':{},'subscriptions':{'com.lishaohui.cashflow.monthlysubscription':{'billing_issues_detected_at':null,'expires_date':_0x50b1('0xe','rc80'),'grace_period_expires_date':null,'is_sandbox':![],'original_purchase_date':_0x50b1('0xd','jHng'),'ownership_type':_0x50b1('0x6','h#HE'),'period_type':_0x50b1('0x9','7@vP'),'purchase_date':'9999-09-12T06:06:52Z','store':_0x50b1('0x4','Bt8b'),'unsubscribe_detected_at':null}}}};$done({'body':JSON[_0x50b1('0xa','4T5G')](objc)});
