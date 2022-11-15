/******************************

脚本功能：超神小队——解锁金币
下载地址：#微信小程序://超神小队
软件版本：6666
脚本作者：dsvip
更新时间：2022-11-12
问题反馈：QQ+2910623
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！

*******************************

[rewrite_local]

^https:\/\/gjyklslb\.mantianfei\.net url script-response-body https://raw.githubusercontent.com/dsvip/Quantumult-X/main/yx/csxd.js

[mitm]

hostname = gjyklslb.mantianfei.net

****************************************/


body = $response.body.replace(/\"num":\d+/g, '\"num" :9999999')

$done({body});
