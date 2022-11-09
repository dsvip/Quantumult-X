/******************************

脚本功能：刀剑大作战+无限钻石金币
下载地址：https://is.gd/RSGWg0
软件版本：1.4.0
脚本作者：彭于晏
更新时间：2022-9-25
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^https:\/\/bladecn\.mofishgames\.com\/bladesrv\/login url script-response-body djdzz.js

[mitm] 

hostname = bladecn.mofishgames.com

*******************************/

body = $response.body.replace(/\"u_revive_coin":\d+/g, '\"u_revive_coin":999999999').replace(/\"u_gold":\d+/g, '\"u_gold":999999999')
$done({body});

