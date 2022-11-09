/******************************

脚本功能：消灭病毒+无限钻石金币
下载地址：微信小程序
软件版本：v666
脚本作者：彭于晏
更新时间：2022-9-25
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^https:\/\/wx-bingdu\.lanfeitech\.com\/api\/archive\/get url script-response-body xmbd.js

[mitm] 

hostname = wx-bingdu.lanfeitech.com

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const coin = '/get'


if (url.indexOf(coin) != -1) {
    
    body = replace(/zuanShi\\":((\d)+)/ig, body, 'zuanShi\\":88888');
    body = replace(/money\\":((\\"\d)+)/ig, body, 'money\\":\\"888888');
    body = replace(/tiLi\\":((\d)+)/ig, body, 'tiLi\\":99');
}

function replace(reg, str, value) {
    return str.replace(reg, function (word) {
            return value;
        }
    );
}

$done({body});
