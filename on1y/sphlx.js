/******************************
⚠️如果放远程，请把sphlx.js替换成运程链接⚠️
  🧚🏻‍♂️作者：🍡魔法师、木木🍡
  wx交流群：1077223830
🫧脚本名称:视频换脸秀
🫧建议配合working copy一起食用
✈️working copy下载地址https://apps.apple.com/app/id896694807✈️
*******************************

[rewrite_local]
^https?:\/\/c-api\.bhunm\.cn\/capi\/wxRegisterLogin*? url script-response-body sphlx.js


[mitm]
hostname = c-api.bhunm.cn

*******************************/
var body=$response.body;
body = body.replace(/memberStatus\":\d+/g,'memberStatus":1');
body = body.replace(/advertStatus\":\d+/g,'advertStatus":1');
body = body.replace(/expireTime\":"2022-12-01 17:29:56"/g,'expireTime":"2099-12-01 17:29:56"');
$done(body);