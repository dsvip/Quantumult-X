/*******************************
脚本名称:  易截图2
更新时间：2023年5月8日 下午11:27
软件地址：https://apps.apple.com/cn/app/%E6%98%93%E6%88%AA%E5%9B%BE2/id1633186528
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
^http[s]?:\/\/jietu\d.com\/apiv2\/user url script-response-body https://raw.githubusercontent.com/dsvip/Quantumult-X/main/on1y/script/yijietu2.js
//或者
^http[s]?:\/\/jietu*.com\/apiv2\/user url script-response-body https://raw.githubusercontent.com/dsvip/Quantumult-X/main/on1y/script/yijietu2.js
//或者
^http[s]?:\/\/(jietu6|1jietu).com\/apiv2\/user url script-response-body https://raw.githubusercontent.com/dsvip/Quantumult-X/main/on1y/script/yijietu2.js
[mitm] 
hostname = jietu6.com|jietu8.com

*******************************/

var body = $response.body.replace(/"end_time":".*?"/g,'"end_time":"2099-11-11"')
.replace(/"group_id":"\d+"/g,'"group_id":"3"')
.replace(/"group":".*?"/g,'"group":"奇心会员"')
.replace(/"mobile":".*?"/g,'"mobile":"18911111111"')
.replace(/"nickname":"\d+"/g,'"nickname":"奇心Carck"')
$done({ body });
