/*******************************

*******************************
[rewrite_local]

^https?://(jietu6|1jietu).com/apiv2/user url script-response-body https://raw.githubusercontent.com/dsvip/Quantumult-X/main/on1y/script/yijietu2.js

[mitm] 

hostname = jietu6.com, 1jietu.com


*******************************/


body = $response.body.replace(/\"group_id":\w+/g, '\"group_id":3')

$done({body});
