/*************************************

项目名称：Moji辞书 解锁高级会员
下载地址：https://t.cn/A6fK4RkD
使用声明：仅供学习与交流，请勿转载与贩卖！⚠️

**************************************

[rewrite_local]

^https:\/\/api\.mojidict\.com\/parse\/functions\/getNPrivileges url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/mojics.js

[mitm]

hostname = api.mojidict.com

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.result.result[2] = {
        "identity" : "000-002-00001",
        "privilegeStatus" : "activated",
        "privilege" : {
          "status" : "cancel",
          "payType" : "4",
          "expiresDate" : 4092599349000,
          "purchaseDate" : 1666666666666,
        },
        "canPay" : true};

$done({body : JSON.stringify(chxm1023)});
