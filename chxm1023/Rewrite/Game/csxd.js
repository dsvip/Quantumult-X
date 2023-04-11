/****************************************

项目功能：超神小队 解锁金币
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*****************************************

[rewrite_local]
^https:\/\/gjyklslb\.mantianfei\.net url script-response-body https://raw.githubusercontent.com/chxm1023/script/main/Rewrite/youxi/csxd.js

[mitm]

hostname = gjyklslb.mantianfei.net

****************************************/


body = $response.body.replace(/\"num":\d+/g, '\"num" :9999999')

$done({body});
