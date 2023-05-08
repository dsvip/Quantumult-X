/*******************************
脚本名称：大脑营行
更新时间：2023年3月8日 下午2:19
下载地址：https://apps.apple.com/app/id896694807
使用声明：此脚本仅供学习与交流
*******************************
[rewrite_local]




^https?://(jietu6|1jietu).com/apiv2/user url script-response-body https://raw.githubusercontent.com/dsvip/Quantumult-X/main/on1y/script/yijietu2.js

# MITM

[mitm] 

hostname = jietu6.com, 1jietu.com


*******************************/
body = $response.body.replace(/\"group_id":\.+, '\""group_id":"3"')

$done({body});
