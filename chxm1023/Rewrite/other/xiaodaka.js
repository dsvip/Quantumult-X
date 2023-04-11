/*************************************

项目功能：小打卡 解锁VIP(App＋小程序)
下载地址：https://t.cn/A6K7nCJi
脚本作者：chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]

^https:\/\/.*\.sharedaka\.com url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/xiaodaka.js

[mitm]

hostname = *.sharedaka.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data.hasOpenedMember = true;
chxm1023.data.endTime = 4092599349000;
chxm1023.data.totalLogDays = 9999;
chxm1023.data.totalNote = 9999;
chxm1023.data.enable = true;
chxm1023.data.showMemberStatus = 1;
chxm1023.data.expireTimeStr = "2099-09-09 09:09:09";

$done({body : JSON.stringify(chxm1023)});
