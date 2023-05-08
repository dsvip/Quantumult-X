/*******************************
脚本名称:  易截图2
脚本作者：彭于晏💞
更新时间：2023年5月8日 下午11:27
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

^http[s]?:\/\/jietu\d.com\/apiv2\/user url script-response-body  https://raw.githubusercontent.com/dsvip/Quantumult-X/main/on1y/script/yijietu2.js
//或者
^http[s]?:\/\/jietu*.com\/apiv2\/user url script-response-body  https://raw.githubusercontent.com/dsvip/Quantumult-X/main/on1y/script/yijietu2.js
//或者
^http[s]?:\/\/(jietu6|jietu8).com\/apiv2\/user url script-response-body  https://raw.githubusercontent.com/dsvip/Quantumult-X/main/on1y/script/yijietu2.js
[mitm] 
hostname = jietu6.com|jietu8.com

*******************************/

var body = $response.body.replace(/"end_time":".*?"/g,'"end_time":"2099-11-11"')
.replace(/"group_id":"\d+"/g,'"group_id":"3"')
.replace(/"group":"\w+"/g,'"group":"冬瓜会员"')
$done({ body });
