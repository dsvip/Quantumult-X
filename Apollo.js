

/******************************

脚本功能：Apollo-记录你的影视生活
下载地址：http://mtw.so/6jr2E8
软件版本：1.1.1
脚本作者：彭于晏
更新时间：2022-9-11
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️


*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body Apollo.js

[mitm] 

hostname = api.revenuecat.com
*
*
*/


var objc = JSON.parse($response.body);

    objc = 
{
  "request_date": "2022-01-27T05:56:29Z",
  "request_date_ms": 1643262989454,
  "subscriber": {
    "entitlements": {
      "all": {
        "expires_date": null,
        "grace_period_expires_date": null,
        "product_identifier": "com.ziheng.totowallet.onetimepurchase",
        "purchase_date": "2022-01-27T04:17:03Z"
      }
    },
    "first_seen": "2021-11-24T07:17:57Z",
    "last_seen": "2022-01-27T04:17:54Z",
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions": {
      "com.ziheng.totowallet.onetimepurchase": [{
        "id": "6060eea19b",
        "is_sandbox": true,
        "original_purchase_date": "2022-01-27T04:17:03Z",
        "purchase_date": "2022-01-27T04:17:03Z",
        "store": "app_store"
      }]
    },
    "original_app_user_id": "$RCAnonymousID:04d7eec58523496c9b29d3d6f4580ab6",
    "original_application_version": "1.0",
    "original_purchase_date": "2013-08-01T07:00:00Z",
    "other_purchases": {
      "com.ziheng.totowallet.onetimepurchase": {
        "purchase_date": "2022-01-27T04:17:03Z"
      }
    },
    "subscriptions": {
      "com.ziheng.totowallet.monthly": {
        "billing_issues_detected_at": null,
        "expires_date": "2022-02-11T11:15:28Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2022-01-11T11:15:29Z",
        "ownership_type": "PURCHASED",
        "period_type": "normal",
        "purchase_date": "2022-01-11T11:15:28Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2022-01-24T05:49:32Z"
      },
      "com.ziheng.totowallet.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2021-12-21T09:56:52Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2021-12-18T09:56:53Z",
        "ownership_type": "PURCHASED",
        "period_type": "trial",
        "purchase_date": "2021-12-18T09:56:52Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2021-12-19T13:27:33Z"
      }
    }
  }
};

$done({body : JSON.stringify(objc)});
