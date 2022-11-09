/******************************

脚本功能：醒图+解锁VIP
使用教程：爱思助手下载5.5版本
下载地址：直接下载
软件版本：5.5.0
脚本作者：彭于晏
更新时间：2022-9-13
问题反馈：QQ+89996462
QQ会员群：779392027
TG反馈群：https://t.me/plus8889
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription url script-response-body xt.js

[mitm] 
hostname = commerce-api.faceu.mobi

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/subscription';


if (url.indexOf(vip) != -1) {

    obj.data.flag = true;
    obj.data.start_time = 1660387551;
    obj.data.end_time = 9999999999;

	body = JSON.stringify(obj);
}


$done({body});

