/******************************

脚本功能：微信小游戏天天钓鱼+解锁无限金币
下载地址：微信小程序搜索
软件版本：v9999
脚本作者：彭于晏
更新时间：2022-9-29
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/ttdy\.aslk2018\.com\/v2\/game\/download url script-response-body ttdy.js

[mitm] 

hostname = ttdy.aslk2018.com

*******************************/

body = $response.body.replace(/\"gold\\":\d+/g, '\"gold\\":888')
$done({body});

