/*******************************

*******************************
[rewrite_local]

^https?://(jietu6|1jietu).com/apiv2/user url script-response-body https://raw.githubusercontent.com/dsvip/Quantumult-X/main/on1y/script/yijietu2.js

[mitm] 

hostname = jietu6.com, 1jietu.com


*******************************/
var body=$response.body;
body = body.replace(/"group_id\":.+,"group_id":"3");
body = body.replace(/"group\":.+,"group" : "神哥哥");
body = body.replace(/vip_datetime\":\d/g,"vip_datetime" : "4070880000");
body = body.replace(/"agent\":.+,"agent" : "王牌代理商");
body = body.replace(/"nickname\":.+,'"nickname":"冬瓜茶");
$done(body);
